import { useState, useEffect, useRef, useCallback } from 'react';

const DRUM_TRACKS = [
  { id: 'kick',  label: 'KICK' },
  { id: 'snare', label: 'SNARE' },
  { id: 'clap',  label: 'CLAP' },
  { id: 'hh_c',  label: 'HH' },
  { id: 'hh_o',  label: 'OPEN' },
  { id: 'perc',  label: 'PERC' },
];

const STEPS = 16;
const NOTE_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const IS_BLACK   = [false,true,false,true,false,false,true,false,true,false,true,false];

function midiToNote(midi) {
  if (midi == null) return null;
  return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1);
}
function semitoneOctToMidi(s, oct) { return (oct + 1) * 12 + s; }

function makeEmptyDrums() {
  return Object.fromEntries(DRUM_TRACKS.map(t => [t.id, new Array(STEPS).fill(0)]));
}
function makeEmptySynth() {
  return { bass: new Array(STEPS).fill(null), lead: new Array(STEPS).fill(null) };
}
function makeEmptyDelay() {
  return Object.fromEntries(DRUM_TRACKS.map(t => [t.id, 0]));
}

// ── Drum synthesis ────────────────────────────────────────────────────────────

function makeNoiseBuffer(ctx, dur) {
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

function synthKick(ctx, t, vol, send) {
  const osc = ctx.createOscillator();
  const g   = ctx.createGain();
  osc.frequency.setValueAtTime(120, t);
  osc.frequency.exponentialRampToValueAtTime(0.001, t + 0.55);
  g.gain.setValueAtTime(vol * 1.8, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
  osc.connect(g); g.connect(ctx.destination);
  if (send) g.connect(send);
  osc.start(t); osc.stop(t + 0.6);

  const click = ctx.createOscillator();
  const cg    = ctx.createGain();
  click.frequency.value = 3000;
  cg.gain.setValueAtTime(vol * 0.5, t);
  cg.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
  click.connect(cg); cg.connect(ctx.destination);
  click.start(t); click.stop(t + 0.02);
}

function synthSnare(ctx, t, vol, send) {
  const ns  = ctx.createBufferSource(); ns.buffer = makeNoiseBuffer(ctx, 0.22);
  const nf  = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 2800; nf.Q.value = 0.6;
  const ng  = ctx.createGain();
  ng.gain.setValueAtTime(vol * 0.9, t);
  ng.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
  ns.connect(nf); nf.connect(ng); ng.connect(ctx.destination);
  if (send) ng.connect(send);
  ns.start(t);

  const osc = ctx.createOscillator(); osc.type = 'triangle'; osc.frequency.value = 170;
  const og  = ctx.createGain();
  og.gain.setValueAtTime(vol * 0.35, t);
  og.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
  osc.connect(og); og.connect(ctx.destination);
  osc.start(t); osc.stop(t + 0.22);
}

function synthClap(ctx, t, vol, send) {
  [0, 0.012, 0.028].forEach((off, i) => {
    const ns  = ctx.createBufferSource(); ns.buffer = makeNoiseBuffer(ctx, 0.14);
    const f   = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400; f.Q.value = 0.7;
    const g   = ctx.createGain();
    const st  = t + off;
    g.gain.setValueAtTime(vol * (i === 0 ? 0.65 : 0.5), st);
    g.gain.exponentialRampToValueAtTime(0.001, st + 0.1);
    ns.connect(f); f.connect(g); g.connect(ctx.destination);
    if (send) g.connect(send);
    ns.start(st);
  });
}

function synthHH(ctx, t, vol, decay, send) {
  const ns = ctx.createBufferSource(); ns.buffer = makeNoiseBuffer(ctx, decay);
  const f  = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 9000;
  const g  = ctx.createGain();
  g.gain.setValueAtTime(vol * 0.55, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + decay);
  ns.connect(f); f.connect(g); g.connect(ctx.destination);
  if (send) g.connect(send);
  ns.start(t);
}

function synthPerc(ctx, t, vol, send) {
  const osc = ctx.createOscillator();
  osc.frequency.setValueAtTime(700, t);
  osc.frequency.exponentialRampToValueAtTime(80, t + 0.14);
  osc.type = 'sine';
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol * 0.65, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
  osc.connect(g); g.connect(ctx.destination);
  if (send) g.connect(send);
  osc.start(t); osc.stop(t + 0.16);
}

const DRUM_SYNTHS = {
  kick:  synthKick,
  snare: synthSnare,
  clap:  synthClap,
  hh_c:  (ctx, t, vol, send) => synthHH(ctx, t, vol, 0.05, send),
  hh_o:  (ctx, t, vol, send) => synthHH(ctx, t, vol, 0.38, send),
  perc:  synthPerc,
};

// ── Synth voice ───────────────────────────────────────────────────────────────

function playNote(ctx, midi, type, cutoff, decay, vol, t, send) {
  const freq = 440 * Math.pow(2, (midi - 69) / 12);
  const osc  = ctx.createOscillator();
  osc.type   = type;
  osc.frequency.setValueAtTime(freq, t);
  const filt = ctx.createBiquadFilter();
  filt.type  = 'lowpass';
  filt.frequency.setValueAtTime(cutoff, t);
  filt.Q.value = 1.8;
  const g    = ctx.createGain();
  g.gain.setValueAtTime(vol * 0.55, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + decay);
  osc.connect(filt); filt.connect(g); g.connect(ctx.destination);
  if (send) g.connect(send);
  osc.start(t); osc.stop(t + decay + 0.05);
}

// ── Component ─────────────────────────────────────────────────────────────────

export function Groovebox({ open, onClose, darkMode }) {
  const [playing, setPlaying]         = useState(false);
  const [bpm, setBpm]                 = useState(128);
  const [volume, setVolume]           = useState(0.75);
  const [drums, setDrums]             = useState(makeEmptyDrums);
  const [drumDelay, setDrumDelay]     = useState(makeEmptyDelay); // 0/1/2 = off/low/high
  const [synth, setSynth]             = useState(makeEmptySynth);
  const [synthSel, setSynthSel]       = useState(null); // {voice, step} | null
  const [noteOct, setNoteOct]         = useState(3);
  const [filterCutoff, setFilterCutoff] = useState({ bass: 0.38, lead: 0.62 });
  const [currentStep, setCurrentStep] = useState(-1);

  const ctxRef        = useRef(null);
  const delayNodeRef  = useRef(null);
  const schedulerRef  = useRef(null);
  const nextTimeRef   = useRef(0);
  const stepRef       = useRef(0);
  const bpmRef        = useRef(bpm);
  const volumeRef     = useRef(volume);
  const drumsRef      = useRef(drums);
  const drumDelayRef  = useRef(drumDelay);
  const synthRef      = useRef(synth);
  const filterRef     = useRef(filterCutoff);
  const setStepRef    = useRef(setCurrentStep);

  useEffect(() => { bpmRef.current       = bpm; }, [bpm]);
  useEffect(() => { volumeRef.current    = volume; }, [volume]);
  useEffect(() => { drumsRef.current     = drums; }, [drums]);
  useEffect(() => { drumDelayRef.current = drumDelay; }, [drumDelay]);
  useEffect(() => { synthRef.current     = synth; }, [synth]);
  useEffect(() => { filterRef.current    = filterCutoff; }, [filterCutoff]);
  setStepRef.current = setCurrentStep;

  // Update delay time when bpm changes while playing
  useEffect(() => {
    if (delayNodeRef.current) {
      delayNodeRef.current.delayTime.value = (60 / bpm) * 0.375;
    }
  }, [bpm]);

  const tick = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    while (nextTimeRef.current < ctx.currentTime + 0.1) {
      const s   = stepRef.current;
      const t   = nextTimeRef.current;
      const vol = volumeRef.current;
      const drs = drumsRef.current;
      const dly = drumDelayRef.current;
      const sth = synthRef.current;
      const flt = filterRef.current;
      const dlyNode = delayNodeRef.current;

      const makeSend = (level) => {
        if (!level || !dlyNode) return null;
        const sg = ctx.createGain();
        sg.gain.value = level === 1 ? 0.28 : 0.72;
        sg.connect(dlyNode);
        return sg;
      };

      // Drums
      DRUM_TRACKS.forEach(({ id }) => {
        if (drs[id][s]) DRUM_SYNTHS[id](ctx, t, vol, makeSend(dly[id]));
      });

      // Bass
      const bassNote = sth.bass[s];
      if (bassNote != null) {
        const cutoff = 60 + Math.pow(flt.bass, 2) * 2400;
        playNote(ctx, bassNote, 'sawtooth', cutoff, 0.22, vol, t, makeSend(1));
      }

      // Lead
      const leadNote = sth.lead[s];
      if (leadNote != null) {
        const cutoff = 200 + Math.pow(flt.lead, 2) * 4000;
        playNote(ctx, leadNote, 'square', cutoff, 0.12, vol * 0.7, t, makeSend(2));
      }

      setStepRef.current(s);
      nextTimeRef.current += (60 / bpmRef.current) / 4;
      stepRef.current = (s + 1) % STEPS;
    }
    schedulerRef.current = setTimeout(tick, 22);
  }, []);

  const play = useCallback(() => {
    if (!ctxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctxRef.current = ctx;
      const dly = ctx.createDelay(2.0);
      dly.delayTime.value = (60 / bpmRef.current) * 0.375;
      const fb  = ctx.createGain(); fb.gain.value = 0.38;
      const wet = ctx.createGain(); wet.gain.value = 0.52;
      dly.connect(fb); fb.connect(dly);
      dly.connect(wet); wet.connect(ctx.destination);
      delayNodeRef.current = dly;
    }
    const ctx = ctxRef.current;
    if (ctx.state === 'suspended') ctx.resume();
    delayNodeRef.current.delayTime.value = (60 / bpmRef.current) * 0.375;
    stepRef.current    = 0;
    nextTimeRef.current = ctx.currentTime + 0.05;
    tick();
    setPlaying(true);
  }, [tick]);

  const stop = useCallback(() => {
    clearTimeout(schedulerRef.current);
    schedulerRef.current = null;
    setPlaying(false);
    setCurrentStep(-1);
  }, []);

  useEffect(() => () => clearTimeout(schedulerRef.current), []);

  // ── Actions ──────────────────────────────────────────────────────────────

  const toggleDrum  = (id, step) =>
    setDrums(p => ({ ...p, [id]: p[id].map((v, i) => i === step ? 1 - v : v) }));

  const cycleDelay  = (id) =>
    setDrumDelay(p => ({ ...p, [id]: (p[id] + 1) % 3 }));

  function clickSynthStep(voice, step) {
    const cur = synth[voice][step];
    if (cur != null) {
      if (synthSel?.voice === voice && synthSel?.step === step) {
        // second click on selected step → remove note
        setSynth(p => { const n = [...p[voice]]; n[step] = null; return { ...p, [voice]: n }; });
        setSynthSel(null);
      } else {
        // select it and update octave picker
        setNoteOct(Math.floor(cur / 12) - 1);
        setSynthSel({ voice, step });
      }
    } else {
      // activate with current octave C as default
      const midi = semitoneOctToMidi(0, noteOct);
      setSynth(p => { const n = [...p[voice]]; n[step] = midi; return { ...p, [voice]: n }; });
      setSynthSel({ voice, step });
    }
  }

  function assignNote(semitone) {
    if (!synthSel) return;
    const midi = semitoneOctToMidi(semitone, noteOct);
    setSynth(p => { const n = [...p[synthSel.voice]]; n[synthSel.step] = midi; return { ...p, [synthSel.voice]: n }; });
  }

  function changeOct(o) {
    setNoteOct(o);
    if (synthSel) {
      const curMidi = synth[synthSel.voice][synthSel.step];
      if (curMidi != null) {
        const semitone = curMidi % 12;
        const midi = semitoneOctToMidi(semitone, o);
        setSynth(p => { const n = [...p[synthSel.voice]]; n[synthSel.step] = midi; return { ...p, [synthSel.voice]: n }; });
      }
    }
  }

  function clearAll() {
    stop();
    setDrums(makeEmptyDrums());
    setSynth(makeEmptySynth());
    setDrumDelay(makeEmptyDelay());
    setSynthSel(null);
  }

  // ── Render helpers ────────────────────────────────────────────────────────

  const selSemitone = synthSel ? (synth[synthSel.voice]?.[synthSel.step] ?? null) : null;
  const activeSemitone = selSemitone != null ? selSemitone % 12 : null;

  function renderSynthRow(voice, voiceLabel) {
    return (
      <div className="groove-row" key={voice}>
        <span className="groove-label">{voiceLabel}</span>
        <div className="groove-steps">
          {[0, 4, 8, 12].map(g => (
            <div key={g} className="groove-group">
              {synth[voice].slice(g, g + 4).map((note, i) => {
                const step = g + i;
                const isSel = synthSel?.voice === voice && synthSel?.step === step;
                const isCur = step === currentStep;
                return (
                  <button key={step}
                    className={`groove-step groove-step--synth${note != null ? ' on' : ''}${isSel ? ' sel' : ''}${isCur ? ' cur' : ''}`}
                    onClick={() => clickSynthStep(voice, step)}
                  >
                    {note != null && <span className="groove-note-lbl">{midiToNote(note)}</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="groove-filter-wrap">
          <span className="groove-filter-lbl">CUT</span>
          <input type="range" className="groove-filter-sl" min="0" max="1" step="0.01"
            value={filterCutoff[voice]}
            onChange={e => setFilterCutoff(p => ({ ...p, [voice]: +e.target.value }))}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`groove-panel${open ? ' open' : ''}${darkMode ? ' dark' : ''}`}>

      {/* ── Header ── */}
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
        <button className="groove-mono-btn" onClick={clearAll}>CLR</button>
        <button className="groove-close" onClick={() => { stop(); onClose(); }}>✕</button>
      </div>

      {/* ── Drum grid ── */}
      <div className="groove-section">
        {DRUM_TRACKS.map(({ id, label }) => (
          <div key={id} className="groove-row">
            <span className="groove-label">{label}</span>
            <div className="groove-steps">
              {[0, 4, 8, 12].map(g => (
                <div key={g} className="groove-group">
                  {drums[id].slice(g, g + 4).map((on, i) => {
                    const step = g + i;
                    return (
                      <button key={step}
                        className={`groove-step${on ? ' on' : ''}${step === currentStep ? ' cur' : ''}`}
                        onClick={() => toggleDrum(id, step)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <button
              className={`groove-dly-btn${drumDelay[id] > 0 ? ` lv${drumDelay[id]}` : ''}`}
              onClick={() => cycleDelay(id)}
              title="Delay send: off → low → high"
            >
              DLY{drumDelay[id] === 1 ? '·' : drumDelay[id] === 2 ? '··' : ''}
            </button>
          </div>
        ))}
      </div>

      {/* ── Synth voices ── */}
      <div className="groove-divider" />
      <div className="groove-section groove-section--synth">
        {renderSynthRow('bass', 'BASS')}
        {renderSynthRow('lead', 'LEAD')}
      </div>

      {/* ── Note picker ── */}
      {synthSel && (
        <div className="groove-notepick">
          <div className="groove-oct-row">
            {[1, 2, 3, 4, 5].map(o => (
              <button key={o}
                className={`groove-oct-btn${noteOct === o ? ' active' : ''}`}
                onClick={() => changeOct(o)}
              >{o}</button>
            ))}
            <span className="groove-oct-lbl">OCT</span>
          </div>
          <div className="groove-keys">
            {NOTE_NAMES.map((name, s) => (
              <button key={s}
                className={`groove-key${IS_BLACK[s] ? ' blk' : ''}${s === activeSemitone ? ' active' : ''}`}
                onClick={() => assignNote(s)}
                title={name + noteOct}
              >
                <span className="groove-key-name">{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
