import { useState, useRef, useEffect, useCallback } from 'react';

// ── Rotary knob ──────────────────────────────────────────────────────────────

function Knob({ value, onChange, size = 26 }) {
  const angle = -135 + value * 270;
  const rad   = (angle * Math.PI) / 180;
  const cx = size / 2, cy = size / 2;
  const r  = size / 2 - 2.5;
  const len = r - 3;
  const lx = cx + Math.sin(rad) * len;
  const ly = cy - Math.cos(rad) * len;

  function onMouseDown(e) {
    e.preventDefault();
    const startY   = e.clientY;
    const startVal = value;
    const onMove = ev => onChange(Math.max(0, Math.min(1, startVal + (startY - ev.clientY) / 80)));
    const onUp   = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  return (
    <svg width={size} height={size} className="gv-knob" onMouseDown={onMouseDown}>
      <circle cx={cx} cy={cy} r={r} className="gv-knob-body" />
      <line   x1={cx} y1={cy} x2={lx} y2={ly} className="gv-knob-line" />
    </svg>
  );
}

// ── Voice definitions ────────────────────────────────────────────────────────

const DRUM_TRACKS = [
  { id: 'kick',  label: 'KICK' },
  { id: 'snare', label: 'SNARE' },
  { id: 'clap',  label: 'CLAP' },
  { id: 'hh_c',  label: 'HH' },
  { id: 'hh_o',  label: 'OPEN' },
  { id: 'perc',  label: 'PERC' },
];
const SYNTH_TRACKS = [
  { id: 'bass', label: 'BASS' },
  { id: 'lead', label: 'LEAD' },
];
const ALL_TRACKS = [...DRUM_TRACKS, ...SYNTH_TRACKS];
const ALL_IDS = ALL_TRACKS.map(t => t.id);
const STEPS = 16;
const NOTE_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const IS_BLACK   = [false,true,false,true,false,false,true,false,true,false,true,false];

// Per-voice editable params (shown in the top control panel)
const VOICE_PARAMS = {
  kick:  [{ key: 'pitch', label: 'PITCH' }, { key: 'decay', label: 'DECAY' }],
  snare: [{ key: 'tone',  label: 'TONE'  }, { key: 'decay', label: 'DECAY' }],
  clap:  [{ key: 'tone',  label: 'TONE'  }, { key: 'decay', label: 'DECAY' }],
  hh_c:  [{ key: 'decay', label: 'DECAY' }],
  hh_o:  [{ key: 'decay', label: 'DECAY' }],
  perc:  [{ key: 'pitch', label: 'PITCH' }, { key: 'decay', label: 'DECAY' }],
  bass:  [],
  lead:  [],
};

const DEFAULT_VPARAMS = {
  kick:  { pitch: 0.5, decay: 0.5 },
  snare: { tone: 0.5,  decay: 0.5 },
  clap:  { tone: 0.5,  decay: 0.4 },
  hh_c:  { decay: 0.35 },
  hh_o:  { decay: 0.55 },
  perc:  { pitch: 0.5, decay: 0.4 },
  bass:  {},
  lead:  {},
};

function midiToNote(midi) {
  if (midi == null) return null;
  return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1);
}
function semOctToMidi(s, oct) { return (oct + 1) * 12 + s; }
function makeEmptyDrums() {
  return Object.fromEntries(DRUM_TRACKS.map(t => [t.id, new Array(STEPS).fill(0)]));
}
function makeEmptySynth() {
  return { bass: new Array(STEPS).fill(null), lead: new Array(STEPS).fill(null) };
}
function makeVMap(val) {
  return Object.fromEntries(ALL_IDS.map(id => [id, val]));
}
function makeEmptyAuto() {
  return Object.fromEntries(ALL_IDS.map(id => [id, {
    vol: new Array(STEPS).fill(null),
    filter: new Array(STEPS).fill(null),
  }]));
}

// ── Audio helpers ────────────────────────────────────────────────────────────

function noiseBuf(ctx, dur) {
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

function makeImpulse(ctx) {
  const sr = ctx.sampleRate, len = Math.ceil(sr * 1.8);
  const buf = ctx.createBuffer(2, len, sr);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  }
  return buf;
}

function makeChain(ctx, t, vol, filterVal, dlyNode, rvbNode, dlyLvl, rvbLvl) {
  const hz = filterVal >= 0.99 ? 20000 : 80 + Math.pow(filterVal, 2) * 19200;
  const filt = ctx.createBiquadFilter();
  filt.type = 'lowpass';
  filt.frequency.setValueAtTime(hz, t);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(Math.max(0.0001, vol), t);
  filt.connect(gain);
  gain.connect(ctx.destination);
  if (dlyLvl > 0 && dlyNode) {
    const sg = ctx.createGain(); sg.gain.value = dlyLvl === 1 ? 0.28 : 0.65;
    gain.connect(sg); sg.connect(dlyNode);
  }
  if (rvbLvl > 0 && rvbNode) {
    const rg = ctx.createGain(); rg.gain.value = rvbLvl === 1 ? 0.22 : 0.55;
    gain.connect(rg); rg.connect(rvbNode);
  }
  return filt;
}

// ── Drum synths ──────────────────────────────────────────────────────────────

function doKick(ctx, t, dest, p) {
  const base = 40 + (p.pitch ?? 0.5) * 160;
  const dec  = 0.3 + (p.decay  ?? 0.5) * 0.5;
  const osc  = ctx.createOscillator(); const g = ctx.createGain();
  osc.frequency.setValueAtTime(base * 2.6, t);
  osc.frequency.exponentialRampToValueAtTime(Math.max(0.001, base * 0.05), t + dec);
  g.gain.setValueAtTime(1.8, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  osc.connect(g); g.connect(dest); osc.start(t); osc.stop(t + dec + 0.05);
  const c = ctx.createOscillator(); const cg = ctx.createGain();
  c.frequency.value = 4200; cg.gain.setValueAtTime(0.5, t); cg.gain.exponentialRampToValueAtTime(0.001, t + 0.018);
  c.connect(cg); cg.connect(dest); c.start(t); c.stop(t + 0.022);
}

function doSnare(ctx, t, dest, p) {
  const bpHz  = 700 + (p.tone  ?? 0.5) * 3100;
  const dec   = 0.07 + (p.decay ?? 0.5) * 0.26;
  const ns    = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec + 0.05);
  const nf    = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = bpHz; nf.Q.value = 0.6;
  const ng    = ctx.createGain();
  ng.gain.setValueAtTime(0.9, t); ng.gain.exponentialRampToValueAtTime(0.001, t + dec);
  ns.connect(nf); nf.connect(ng); ng.connect(dest); ns.start(t);
  const osc = ctx.createOscillator(); osc.type = 'triangle'; osc.frequency.value = 140 + (p.tone ?? 0.5) * 100;
  const og = ctx.createGain();
  og.gain.setValueAtTime(0.3, t); og.gain.exponentialRampToValueAtTime(0.001, t + dec * 0.5);
  osc.connect(og); og.connect(dest); osc.start(t); osc.stop(t + dec);
}

function doClap(ctx, t, dest, p) {
  const bpHz = 600 + (p.tone  ?? 0.5) * 1800;
  const dec  = 0.08 + (p.decay ?? 0.4) * 0.12;
  [0, 0.012, 0.028].forEach(off => {
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec);
    const f  = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = bpHz; f.Q.value = 0.7;
    const g  = ctx.createGain(); const st = t + off;
    g.gain.setValueAtTime(0.55, st); g.gain.exponentialRampToValueAtTime(0.001, st + dec);
    ns.connect(f); f.connect(g); g.connect(dest); ns.start(st);
  });
}

function doHH(ctx, t, dest, p, isOpen) {
  const dec = isOpen
    ? 0.08 + (p.decay ?? 0.55) * 0.5
    : 0.012 + (p.decay ?? 0.35) * 0.09;
  const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec + 0.02);
  const f  = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 8500;
  const g  = ctx.createGain();
  g.gain.setValueAtTime(0.55, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  ns.connect(f); f.connect(g); g.connect(dest); ns.start(t);
}

function doPerc(ctx, t, dest, p) {
  const base = 150 + (p.pitch ?? 0.5) * 850;
  const dec  = 0.04 + (p.decay ?? 0.4) * 0.22;
  const osc  = ctx.createOscillator();
  osc.frequency.setValueAtTime(base * 2, t);
  osc.frequency.exponentialRampToValueAtTime(Math.max(0.001, base * 0.5), t + dec);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.65, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  osc.connect(g); g.connect(dest); osc.start(t); osc.stop(t + dec + 0.02);
}

function playNote(ctx, midi, type, t, dest) {
  const freq = 440 * Math.pow(2, (midi - 69) / 12);
  const osc  = ctx.createOscillator(); osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  const g = ctx.createGain(); const dec = type === 'sawtooth' ? 0.22 : 0.13;
  g.gain.setValueAtTime(0.7, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  osc.connect(g); g.connect(dest); osc.start(t); osc.stop(t + dec + 0.04);
}

// ── Component ────────────────────────────────────────────────────────────────

export function Groovebox({ open, onClose, darkMode }) {
  const [playing, setPlaying]         = useState(false);
  const [bpm, setBpm]                 = useState(128);
  const [volume, setVolume]           = useState(0.78);
  const [drums, setDrums]             = useState(makeEmptyDrums);
  const [synth, setSynth]             = useState(makeEmptySynth);
  const [muted, setMuted]             = useState(() => makeVMap(false));
  const [trackVol, setTrackVol]       = useState(() => makeVMap(0.82));
  const [trackFilter, setTrackFilter] = useState(() => makeVMap(1.0));
  const [dlyLvl, setDlyLvl]           = useState(() => makeVMap(0));
  const [rvbLvl, setRvbLvl]           = useState(() => makeVMap(0));
  const [vparams, setVparams]         = useState(() =>
    Object.fromEntries(ALL_IDS.map(id => [id, { ...DEFAULT_VPARAMS[id] }]))
  );
  const [automation, setAutomation]   = useState(makeEmptyAuto);
  const [isRec, setIsRec]             = useState(false);
  const [synthSel, setSynthSel]       = useState(null); // {voice, step}
  const [noteOct, setNoteOct]         = useState(3);
  const [currentStep, setCurrentStep] = useState(-1);

  // Live refs (scheduler closure)
  const ctxRef       = useRef(null);
  const dlyNodeRef   = useRef(null);
  const rvbNodeRef   = useRef(null);
  const schedRef     = useRef(null);
  const nextTRef     = useRef(0);
  const stepRef      = useRef(0);
  const bpmR         = useRef(bpm);
  const volR         = useRef(volume);
  const drumsR       = useRef(drums);
  const synthR       = useRef(synth);
  const dlyR         = useRef(dlyLvl);
  const rvbR         = useRef(rvbLvl);
  const mutR         = useRef(muted);
  const tvolR        = useRef(trackVol);
  const tfltR        = useRef(trackFilter);
  const vparR        = useRef(vparams);
  const autoR        = useRef(automation);
  const setStepR     = useRef(setCurrentStep);

  useEffect(() => { bpmR.current  = bpm; }, [bpm]);
  useEffect(() => { volR.current  = volume; }, [volume]);
  useEffect(() => { drumsR.current = drums; }, [drums]);
  useEffect(() => { synthR.current = synth; }, [synth]);
  useEffect(() => { dlyR.current  = dlyLvl; }, [dlyLvl]);
  useEffect(() => { rvbR.current  = rvbLvl; }, [rvbLvl]);
  useEffect(() => { mutR.current  = muted; }, [muted]);
  useEffect(() => { tvolR.current = trackVol; }, [trackVol]);
  useEffect(() => { tfltR.current = trackFilter; }, [trackFilter]);
  useEffect(() => { vparR.current = vparams; }, [vparams]);
  useEffect(() => { autoR.current = automation; }, [automation]);
  setStepR.current = setCurrentStep;

  useEffect(() => {
    if (dlyNodeRef.current) dlyNodeRef.current.delayTime.value = (60 / bpm) / 4;
  }, [bpm]);

  const tick = useCallback(() => {
    const ctx = ctxRef.current; if (!ctx) return;
    while (nextTRef.current < ctx.currentTime + 0.1) {
      const s   = stepRef.current;
      const t   = nextTRef.current;
      const vol = volR.current;
      const drs = drumsR.current;
      const sth = synthR.current;
      const dly = dlyR.current;
      const rvb = rvbR.current;
      const mut = mutR.current;
      const tvol = tvolR.current;
      const tflt = tfltR.current;
      const vp  = vparR.current;
      const au  = autoR.current;
      const dn  = dlyNodeRef.current;
      const rn  = rvbNodeRef.current;

      const rv = (id, param, base) => au[id]?.[param]?.[s] ?? base;

      DRUM_TRACKS.forEach(({ id }) => {
        if (!drs[id][s] || mut[id]) return;
        const dest = makeChain(ctx, t, vol * rv(id, 'vol', tvol[id]), rv(id, 'filter', tflt[id]), dn, rn, dly[id], rvb[id]);
        if (id === 'kick')  doKick(ctx, t, dest, vp[id]);
        if (id === 'snare') doSnare(ctx, t, dest, vp[id]);
        if (id === 'clap')  doClap(ctx, t, dest, vp[id]);
        if (id === 'hh_c')  doHH(ctx, t, dest, vp[id], false);
        if (id === 'hh_o')  doHH(ctx, t, dest, vp[id], true);
        if (id === 'perc')  doPerc(ctx, t, dest, vp[id]);
      });

      if (!mut.bass && sth.bass[s] != null) {
        const dest = makeChain(ctx, t, vol * rv('bass', 'vol', tvol.bass), rv('bass', 'filter', tflt.bass), dn, rn, dly.bass, rvb.bass);
        playNote(ctx, sth.bass[s], 'sawtooth', t, dest);
      }
      if (!mut.lead && sth.lead[s] != null) {
        const dest = makeChain(ctx, t, vol * rv('lead', 'vol', tvol.lead) * 0.7, rv('lead', 'filter', tflt.lead), dn, rn, dly.lead, rvb.lead);
        playNote(ctx, sth.lead[s], 'square', t, dest);
      }

      setStepR.current(s);
      nextTRef.current += (60 / bpmR.current) / 4;
      stepRef.current = (s + 1) % STEPS;
    }
    schedRef.current = setTimeout(tick, 22);
  }, []);

  const play = useCallback(() => {
    if (!ctxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctxRef.current = ctx;
      const dly = ctx.createDelay(2.0);
      dly.delayTime.value = (60 / bpmR.current) / 4;
      const fb = ctx.createGain(); fb.gain.value = 0.32;
      const wet = ctx.createGain(); wet.gain.value = 0.44;
      dly.connect(fb); fb.connect(dly); dly.connect(wet); wet.connect(ctx.destination);
      dlyNodeRef.current = dly;
      const conv = ctx.createConvolver();
      conv.buffer = makeImpulse(ctx);
      const rg = ctx.createGain(); rg.gain.value = 0.88;
      conv.connect(rg); rg.connect(ctx.destination);
      rvbNodeRef.current = conv;
    }
    const ctx = ctxRef.current;
    if (ctx.state === 'suspended') ctx.resume();
    dlyNodeRef.current.delayTime.value = (60 / bpmR.current) / 4;
    stepRef.current = 0;
    nextTRef.current = ctx.currentTime + 0.05;
    tick();
    setPlaying(true);
  }, [tick]);

  const stop = useCallback(() => {
    clearTimeout(schedRef.current); schedRef.current = null;
    setPlaying(false); setCurrentStep(-1);
  }, []);

  useEffect(() => () => clearTimeout(schedRef.current), []);

  // ── Automation-aware param setters ────────────────────────────────────────

  function setWithAuto(setter, id, value, paramKey) {
    setter(p => ({ ...p, [id]: value }));
    if (isRec && playing) {
      setAutomation(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          [paramKey]: prev[id][paramKey].map((v, i) => i === stepRef.current ? value : v),
        },
      }));
    }
  }

  // ── Pattern actions ───────────────────────────────────────────────────────

  const toggleDrum = (id, step) =>
    setDrums(p => ({ ...p, [id]: p[id].map((v, i) => i === step ? 1 - v : v) }));

  const toggleMute = (id) => setMuted(p => ({ ...p, [id]: !p[id] }));

  function clickSynthStep(voice, step) {
    const cur = synth[voice][step];
    if (cur != null) {
      if (synthSel?.voice === voice && synthSel?.step === step) {
        setSynth(p => { const n = [...p[voice]]; n[step] = null; return { ...p, [voice]: n }; });
        setSynthSel(null);
      } else {
        setNoteOct(Math.floor(cur / 12) - 1);
        setSynthSel({ voice, step });
      }
    } else {
      const midi = semOctToMidi(0, noteOct);
      setSynth(p => { const n = [...p[voice]]; n[step] = midi; return { ...p, [voice]: n }; });
      setSynthSel({ voice, step });
    }
  }

  function assignNote(s) {
    if (!synthSel) return;
    const midi = semOctToMidi(s, noteOct);
    setSynth(p => { const n = [...p[synthSel.voice]]; n[synthSel.step] = midi; return { ...p, [synthSel.voice]: n }; });
  }

  function changeOct(o) {
    setNoteOct(o);
    if (synthSel) {
      const cur = synth[synthSel.voice][synthSel.step];
      if (cur != null) {
        const midi = semOctToMidi(cur % 12, o);
        setSynth(p => { const n = [...p[synthSel.voice]]; n[synthSel.step] = midi; return { ...p, [synthSel.voice]: n }; });
      }
    }
  }

  function clearAll() {
    stop();
    setDrums(makeEmptyDrums());
    setSynth(makeEmptySynth());
    setAutomation(makeEmptyAuto());
    setSynthSel(null);
  }

  // ── Voice column (top Perkons panel) ─────────────────────────────────────

  function VoiceCol({ id, label }) {
    const params = VOICE_PARAMS[id] || [];
    return (
      <div className={`gv-col${muted[id] ? ' gv-col--muted' : ''}`}>
        <div className="gv-col-label">{label}</div>
        {params.map(({ key, label: lbl }) => (
          <div key={key} className="gv-param">
            <Knob value={vparams[id][key] ?? 0.5}
              onChange={v => setVparams(p => ({ ...p, [id]: { ...p[id], [key]: v } }))} />
            <span className="gv-param-lbl">{lbl}</span>
          </div>
        ))}
        <div className="gv-param">
          <Knob value={trackFilter[id]}
            onChange={v => setWithAuto(setTrackFilter, id, v, 'filter')} />
          <span className="gv-param-lbl">FILT</span>
        </div>
        <div className="gv-param">
          <Knob value={trackVol[id]}
            onChange={v => setWithAuto(setTrackVol, id, v, 'vol')} />
          <span className="gv-param-lbl">VOL</span>
        </div>
        <div className="gv-send-row">
          <button
            className={`gv-send-btn${dlyLvl[id] > 0 ? ` on lv${dlyLvl[id]}` : ''}`}
            onClick={() => setDlyLvl(p => ({ ...p, [id]: (p[id] + 1) % 3 }))}
          >DLY{dlyLvl[id] === 1 ? '·' : dlyLvl[id] === 2 ? '··' : ''}</button>
          <button
            className={`gv-send-btn${rvbLvl[id] > 0 ? ` on lv${rvbLvl[id]}` : ''}`}
            onClick={() => setRvbLvl(p => ({ ...p, [id]: (p[id] + 1) % 3 }))}
          >RVB{rvbLvl[id] === 1 ? '·' : rvbLvl[id] === 2 ? '··' : ''}</button>
        </div>
      </div>
    );
  }

  // ── Sequencer row ─────────────────────────────────────────────────────────

  function DrumRow({ id, label }) {
    return (
      <div className="groove-row">
        <span className="groove-label">{label}</span>
        <div className="groove-steps">
          {[0, 4, 8, 12].map(g => (
            <div key={g} className="groove-group">
              {drums[id].slice(g, g + 4).map((on, i) => {
                const step = g + i;
                return (
                  <button key={step}
                    className={`groove-step${on ? ' on' : ''}${step === currentStep ? ' cur' : ''}${muted[id] ? ' muted' : ''}`}
                    onClick={() => toggleDrum(id, step)}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <button className={`groove-mute-btn${muted[id] ? ' on' : ''}`} onClick={() => toggleMute(id)}>M</button>
      </div>
    );
  }

  function SynthRow({ id, label }) {
    return (
      <div className="groove-row">
        <span className="groove-label">{label}</span>
        <div className="groove-steps">
          {[0, 4, 8, 12].map(g => (
            <div key={g} className="groove-group">
              {synth[id].slice(g, g + 4).map((note, i) => {
                const step = g + i;
                const isSel = synthSel?.voice === id && synthSel?.step === step;
                return (
                  <button key={step}
                    className={`groove-step groove-step--synth${note != null ? ' on' : ''}${isSel ? ' sel' : ''}${step === currentStep ? ' cur' : ''}${muted[id] ? ' muted' : ''}`}
                    onClick={() => clickSynthStep(id, step)}
                  >
                    {note != null && <span className="groove-note-lbl">{midiToNote(note)}</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <button className={`groove-mute-btn${muted[id] ? ' on' : ''}`} onClick={() => toggleMute(id)}>M</button>
      </div>
    );
  }

  const selNote = synthSel ? (synth[synthSel.voice]?.[synthSel.step] ?? null) : null;
  const activeSem = selNote != null ? selNote % 12 : null;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className={`groove-panel${open ? ' open' : ''}${darkMode ? ' dark' : ''}`}>

      {/* Header */}
      <div className="groove-header">
        <span className="groove-title">GROOVEBOX</span>
        <button className={`groove-play${playing ? ' act' : ''}`} onClick={playing ? stop : play}>
          {playing ? '■' : '▶'}
        </button>
        <div className="groove-bpm">
          <button className="groove-bpm-btn" onClick={() => setBpm(b => Math.max(60, b - 2))}>−</button>
          <span className="groove-bpm-val">{bpm}</span>
          <button className="groove-bpm-btn" onClick={() => setBpm(b => Math.min(180, b + 2))}>+</button>
          <span className="groove-bpm-unit">BPM</span>
        </div>
        <label className="groove-vol-wrap">
          <span className="groove-vol-label">VOL</span>
          <input className="groove-vol-slider" type="range" min="0" max="1" step="0.02"
            value={volume} onChange={e => setVolume(+e.target.value)} />
        </label>
        <button className={`groove-rec-btn${isRec ? ' active' : ''}`}
          onClick={() => setIsRec(v => !v)} title="Automation record">
          {isRec ? '● REC' : '○ REC'}
        </button>
        <button className="groove-mono-btn" onClick={clearAll}>CLR</button>
        <button className="groove-close" onClick={() => { stop(); onClose(); }}>✕</button>
      </div>

      {/* Perkons voice-column panel */}
      <div className="gv-panel">
        {DRUM_TRACKS.map(t => <VoiceCol key={t.id} id={t.id} label={t.label} />)}
        <div className="gv-divider-v" />
        {SYNTH_TRACKS.map(t => <VoiceCol key={t.id} id={t.id} label={t.label} />)}
      </div>

      {/* Sequencer */}
      <div className="groove-seq">
        {DRUM_TRACKS.map(t => <DrumRow key={t.id} id={t.id} label={t.label} />)}
        <div className="groove-seq-divider" />
        {SYNTH_TRACKS.map(t => <SynthRow key={t.id} id={t.id} label={t.label} />)}
      </div>

      {/* Note picker */}
      {synthSel && (
        <div className="groove-notepick">
          <div className="groove-oct-row">
            {[1, 2, 3, 4, 5].map(o => (
              <button key={o} className={`groove-oct-btn${noteOct === o ? ' active' : ''}`}
                onClick={() => changeOct(o)}>{o}</button>
            ))}
            <span className="groove-oct-lbl">OCT</span>
          </div>
          <div className="groove-keys">
            {NOTE_NAMES.map((name, s) => (
              <button key={s}
                className={`groove-key${IS_BLACK[s] ? ' blk' : ''}${s === activeSem ? ' active' : ''}`}
                onClick={() => assignNote(s)}>
                <span className="groove-key-name">{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
