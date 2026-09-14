import { useState, useRef, useCallback, memo } from 'react';

// ── Rotary knob ──────────────────────────────────────────────────────────────

function Knob({ value, onChange, size = 26 }) {
  const angle = -135 + value * 270;
  const rad   = (angle * Math.PI) / 180;
  const cx = size / 2, cy = size / 2;
  const r  = size / 2 - 2.5;
  const len = r - 2.5;
  const lx = cx + Math.sin(rad) * len;
  const ly = cy - Math.cos(rad) * len;

  function onMouseDown(e) {
    e.preventDefault();
    const startY = e.clientY, startVal = value;
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

// ── Vertical fader (mixer-style volume) ──────────────────────────────────────

function VFader({ value, onChange }) {
  const trackH = 60;

  function onMouseDown(e) {
    e.preventDefault();
    const rect = e.currentTarget.querySelector('.gv-fader-track').getBoundingClientRect();
    const onMove = ev => onChange(Math.max(0, Math.min(1, 1 - (ev.clientY - rect.top) / rect.height)));
    const onUp   = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  return (
    <div className="gv-fader" onMouseDown={onMouseDown}>
      <div className="gv-fader-track" style={{ height: trackH }}>
        <div className="gv-fader-fill" style={{ height: `${value * 100}%` }} />
        <div className="gv-fader-thumb" style={{ bottom: `${value * 100}%` }} />
      </div>
      <span className="gv-param-lbl">VOL</span>
    </div>
  );
}

// ── Vertical slider (SH-101 style ADSR) ─────────────────────────────────────

function VSlider({ value, onChange, label }) {
  const trackH = 42;

  function onMouseDown(e) {
    e.preventDefault();
    const rect = e.currentTarget.querySelector('.gv-vslider-track').getBoundingClientRect();
    const onMove = ev => onChange(Math.max(0, Math.min(1, 1 - (ev.clientY - rect.top) / rect.height)));
    const onUp   = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  return (
    <div className="gv-vslider" onMouseDown={onMouseDown}>
      <div className="gv-vslider-track" style={{ height: trackH }}>
        <div className="gv-vslider-thumb" style={{ top: `${(1 - value) * 100}%` }} />
      </div>
      <span className="gv-param-lbl">{label}</span>
    </div>
  );
}

// ── Static definitions ────────────────────────────────────────────────────────

const DRUM_TRACKS  = [
  { id: 'kick', label: 'KICK' }, { id: 'snare', label: 'SNARE' },
  { id: 'clap', label: 'CLAP' }, { id: 'hh_c',  label: 'HH'    },
  { id: 'hh_o', label: 'OPEN' }, { id: 'perc',  label: 'PERC'  },
];
const SYNTH_TRACKS = [{ id: 'bass', label: 'BASS' }, { id: 'lead', label: 'LEAD' }];
const ALL_TRACKS   = [...DRUM_TRACKS, ...SYNTH_TRACKS];
const ALL_IDS      = ALL_TRACKS.map(t => t.id);
const SYNTH_IDS    = new Set(['bass', 'lead']);
const STEPS        = 16;
const NOTE_NAMES   = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const IS_BLACK     = [false,true,false,true,false,false,true,false,true,false,true,false];
const GROUPS       = [0, 4, 8, 12];
const ADSR_KEYS    = ['att','dec','sus','rel'];

const VOICE_PARAMS = {
  kick:  [{ key: 'pitch', label: 'PITCH' }, { key: 'decay', label: 'DECAY' }],
  snare: [{ key: 'tone',  label: 'TONE'  }, { key: 'decay', label: 'DECAY' }],
  clap:  [{ key: 'tone',  label: 'TONE'  }, { key: 'decay', label: 'DECAY' }],
  hh_c:  [{ key: 'decay', label: 'DECAY' }],
  hh_o:  [{ key: 'decay', label: 'DECAY' }],
  perc:  [{ key: 'pitch', label: 'PITCH' }, { key: 'decay', label: 'DECAY' }],
  bass:  [{ key: 'att', label: 'ATT' }, { key: 'dec', label: 'DEC' }, { key: 'sus', label: 'SUS' }, { key: 'rel', label: 'REL' }, { key: 'res', label: 'RES' }],
  lead:  [{ key: 'att', label: 'ATT' }, { key: 'dec', label: 'DEC' }, { key: 'sus', label: 'SUS' }, { key: 'rel', label: 'REL' }, { key: 'res', label: 'RES' }],
};

const DEFAULT_VPARAMS = {
  kick:  { pitch: 0.5, decay: 0.5 },
  snare: { tone: 0.5,  decay: 0.5 },
  clap:  { tone: 0.5,  decay: 0.4 },
  hh_c:  { decay: 0.35 },
  hh_o:  { decay: 0.55 },
  perc:  { pitch: 0.5, decay: 0.4 },
  bass:  { att: 0.04, dec: 0.25, sus: 0.55, rel: 0.2,  res: 0.1  },
  lead:  { att: 0.01, dec: 0.12, sus: 0.65, rel: 0.15, res: 0.15 },
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
    vol:    new Array(STEPS).fill(null),
    filter: new Array(STEPS).fill(null),
  }]));
}

// ── Voice column ─────────────────────────────────────────────────────────────

const VoiceCol = memo(function VoiceCol({
  id, label, isSynth, muted, vp, params, filter, vol, dly, rvb,
  onVParam, onFilter, onVol, onDly, onRvb,
}) {
  return (
    <div className={`gv-col${muted ? ' gv-col--muted' : ''}`}>
      <div className="gv-col-label">{label}</div>

      {isSynth ? (
        /* SH-101 style: ADSR vertical sliders */
        <div className="gv-adsr-row">
          {ADSR_KEYS.map(key => (
            <VSlider key={key}
              value={vp[key] ?? 0.5}
              onChange={v => onVParam(id, key, v)}
              label={key.toUpperCase()}
            />
          ))}
        </div>
      ) : (
        /* Drum: voice knobs in a single horizontal row */
        <div className="gv-voice-params">
          {params.map(({ key, label: lbl }) => (
            <div key={key} className="gv-param">
              <Knob value={vp[key] ?? 0.5} onChange={v => onVParam(id, key, v)} size={22} />
              <span className="gv-param-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      )}

      <div className="gv-sep" />

      {/* Filter knob (+ RES for synths) */}
      <div className="gv-filt-row">
        <div className="gv-param">
          <Knob value={filter} onChange={v => onFilter(id, v)} size={22} />
          <span className="gv-param-lbl">FILT</span>
        </div>
        {isSynth && (
          <div className="gv-param">
            <Knob value={vp.res ?? 0.1} onChange={v => onVParam(id, 'res', v)} size={22} />
            <span className="gv-param-lbl">RES</span>
          </div>
        )}
      </div>

      {/* Fader + sends pushed to the same baseline across all columns */}
      <div className="gv-bottom">
        <VFader value={vol} onChange={v => onVol(id, v)} />

        <div className="gv-sep" />

        {/* Send buttons */}
        <div className="gv-send-row">
        <button className={`gv-send-btn${dly > 0 ? ` on lv${dly}` : ''}`} onClick={() => onDly(id)}>
          {dly === 2 ? 'DLY··' : dly === 1 ? 'DLY·' : 'DLY'}
        </button>
        <button className={`gv-send-btn${rvb > 0 ? ` on lv${rvb}` : ''}`} onClick={() => onRvb(id)}>
          {rvb === 2 ? 'RVB··' : rvb === 1 ? 'RVB·' : 'RVB'}
        </button>
        </div>
      </div>
    </div>
  );
});

// ── Audio helpers ─────────────────────────────────────────────────────────────

function noiseBuf(ctx, dur) {
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
  const d   = buf.getChannelData(0);
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

function makeChain(ctx, t, vol, filterVal, dn, rn, dlyLvl, rvbLvl) {
  const hz   = filterVal >= 0.99 ? 20000 : 80 + Math.pow(filterVal, 2) * 19200;
  const filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.setValueAtTime(hz, t);
  const gain = ctx.createGain(); gain.gain.setValueAtTime(Math.max(0.0001, vol), t);
  filt.connect(gain); gain.connect(ctx.destination);
  if (dlyLvl > 0 && dn) { const sg = ctx.createGain(); sg.gain.value = dlyLvl === 1 ? 0.28 : 0.65; gain.connect(sg); sg.connect(dn); }
  if (rvbLvl > 0 && rn) { const rg = ctx.createGain(); rg.gain.value = rvbLvl === 1 ? 0.22 : 0.55; gain.connect(rg); rg.connect(rn); }
  return filt;
}

function makeSynthVoice(ctx, midi, type, t, bpm, vol, vp, filterCutoff, dn, rn, dlyLvl, rvbLvl) {
  const freq    = 440 * Math.pow(2, (midi - 69) / 12);
  const osc     = ctx.createOscillator(); osc.type = type; osc.frequency.setValueAtTime(freq, t);
  const cutoffHz = filterCutoff >= 0.99 ? 18000 : 60 + Math.pow(filterCutoff, 2) * 14000;
  const vcf     = ctx.createBiquadFilter(); vcf.type = 'lowpass';
  vcf.frequency.setValueAtTime(cutoffHz, t); vcf.Q.setValueAtTime(0.5 + (vp.res ?? 0.1) * 22, t);
  const att = 0.001 + (vp.att ?? 0.04) * 0.5;
  const dec = 0.005 + (vp.dec ?? 0.25) * 0.6;
  const sus = vp.sus ?? 0.55;
  const rel = 0.02  + (vp.rel ?? 0.2)  * 1.2;
  const stepDur = (60 / bpm) / 4, noteLen = stepDur * 0.72;
  const vca = ctx.createGain();
  vca.gain.setValueAtTime(0.0001, t);
  vca.gain.linearRampToValueAtTime(vol, t + att);
  vca.gain.linearRampToValueAtTime(vol * sus, t + att + dec);
  if (noteLen > att + dec) vca.gain.setValueAtTime(vol * sus, t + noteLen);
  vca.gain.linearRampToValueAtTime(0.0001, t + Math.max(noteLen, att + dec) + rel);
  const out = ctx.createGain(); out.gain.value = 1;
  osc.connect(vcf); vcf.connect(vca); vca.connect(out); out.connect(ctx.destination);
  if (dlyLvl > 0 && dn) { const sg = ctx.createGain(); sg.gain.value = dlyLvl === 1 ? 0.28 : 0.65; out.connect(sg); sg.connect(dn); }
  if (rvbLvl > 0 && rn) { const rg = ctx.createGain(); rg.gain.value = rvbLvl === 1 ? 0.22 : 0.55; out.connect(rg); rg.connect(rn); }
  osc.start(t); osc.stop(t + Math.max(noteLen, att + dec) + rel + 0.05);
}

function doKick(ctx, t, dest, p) {
  const base = 40 + (p.pitch ?? 0.5) * 160, dec = 0.3 + (p.decay ?? 0.5) * 0.5;
  const osc = ctx.createOscillator(), g = ctx.createGain();
  osc.frequency.setValueAtTime(base * 2.6, t); osc.frequency.exponentialRampToValueAtTime(Math.max(0.001, base * 0.05), t + dec);
  g.gain.setValueAtTime(1.8, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  osc.connect(g); g.connect(dest); osc.start(t); osc.stop(t + dec + 0.05);
  const c = ctx.createOscillator(), cg = ctx.createGain();
  c.frequency.value = 4200; cg.gain.setValueAtTime(0.5, t); cg.gain.exponentialRampToValueAtTime(0.001, t + 0.018);
  c.connect(cg); cg.connect(dest); c.start(t); c.stop(t + 0.022);
}
function doSnare(ctx, t, dest, p) {
  const bpHz = 700 + (p.tone ?? 0.5) * 3100, dec = 0.07 + (p.decay ?? 0.5) * 0.26;
  const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec + 0.05);
  const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = bpHz; nf.Q.value = 0.6;
  const ng = ctx.createGain(); ng.gain.setValueAtTime(0.9, t); ng.gain.exponentialRampToValueAtTime(0.001, t + dec);
  ns.connect(nf); nf.connect(ng); ng.connect(dest); ns.start(t);
  const osc = ctx.createOscillator(); osc.type = 'triangle'; osc.frequency.value = 140 + (p.tone ?? 0.5) * 100;
  const og = ctx.createGain(); og.gain.setValueAtTime(0.3, t); og.gain.exponentialRampToValueAtTime(0.001, t + dec * 0.5);
  osc.connect(og); og.connect(dest); osc.start(t); osc.stop(t + dec);
}
function doClap(ctx, t, dest, p) {
  const bpHz = 600 + (p.tone ?? 0.5) * 1800, dec = 0.08 + (p.decay ?? 0.4) * 0.12;
  [0, 0.012, 0.028].forEach(off => {
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = bpHz; f.Q.value = 0.7;
    const g = ctx.createGain(), st = t + off;
    g.gain.setValueAtTime(0.55, st); g.gain.exponentialRampToValueAtTime(0.001, st + dec);
    ns.connect(f); f.connect(g); g.connect(dest); ns.start(st);
  });
}
function doHH(ctx, t, dest, p, isOpen) {
  const dec = isOpen ? 0.08 + (p.decay ?? 0.55) * 0.5 : 0.012 + (p.decay ?? 0.35) * 0.09;
  const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec + 0.02);
  const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 8500;
  const g = ctx.createGain(); g.gain.setValueAtTime(0.55, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  ns.connect(f); f.connect(g); g.connect(dest); ns.start(t);
}
function doPerc(ctx, t, dest, p) {
  const base = 150 + (p.pitch ?? 0.5) * 850, dec = 0.04 + (p.decay ?? 0.4) * 0.22;
  const osc = ctx.createOscillator();
  osc.frequency.setValueAtTime(base * 2, t); osc.frequency.exponentialRampToValueAtTime(Math.max(0.001, base * 0.5), t + dec);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.65, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  osc.connect(g); g.connect(dest); osc.start(t); osc.stop(t + dec + 0.02);
}

// ── Main component ────────────────────────────────────────────────────────────

export function Groovebox({ open, onClose, darkMode }) {
  const [playing,     setPlaying]     = useState(false);
  const [bpm,         setBpm]         = useState(128);
  const [volume,      setVolume]      = useState(0.78);
  const [drums,       setDrums]       = useState(makeEmptyDrums);
  const [synth,       setSynth]       = useState(makeEmptySynth);
  const [muted,       setMuted]       = useState(() => makeVMap(false));
  const [trackVol,    setTrackVol]    = useState(() => makeVMap(0.82));
  const [trackFilter, setTrackFilter] = useState(() => makeVMap(1.0));
  const [dlyLvl,      setDlyLvl]     = useState(() => makeVMap(0));
  const [rvbLvl,      setRvbLvl]     = useState(() => makeVMap(0));
  const [vparams,     setVparams]     = useState(() =>
    Object.fromEntries(ALL_IDS.map(id => [id, { ...DEFAULT_VPARAMS[id] }]))
  );
  const [automation,  setAutomation]  = useState(makeEmptyAuto);
  const [isRec,       setIsRec]       = useState(false);
  const [synthSel,    setSynthSel]    = useState(null);
  const [noteOct,     setNoteOct]     = useState(3);
  const [currentStep, setCurrentStep] = useState(-1);

  // ── Refs ───────────────────────────────────────────────────────────────────

  const ctxRef         = useRef(null);
  const dlyNodeRef     = useRef(null);
  const rvbNodeRef     = useRef(null);
  const schedRef       = useRef(null);
  const nextTRef       = useRef(0);
  const stepRef        = useRef(0);
  const playingStepRef = useRef(-1);

  // Mirror all live state into refs so scheduler/callbacks read latest values
  const isRecRef    = useRef(isRec);       isRecRef.current    = isRec;
  const playingRef  = useRef(playing);     playingRef.current  = playing;
  const bpmR        = useRef(bpm);         bpmR.current        = bpm;
  const volR        = useRef(volume);      volR.current        = volume;
  const drumsR      = useRef(drums);       drumsR.current      = drums;
  const synthR      = useRef(synth);       synthR.current      = synth;
  const dlyR        = useRef(dlyLvl);      dlyR.current        = dlyLvl;
  const rvbR        = useRef(rvbLvl);      rvbR.current        = rvbLvl;
  const mutR        = useRef(muted);       mutR.current        = muted;
  const tvolR       = useRef(trackVol);    tvolR.current       = trackVol;
  const tfltR       = useRef(trackFilter); tfltR.current       = trackFilter;
  const vparR       = useRef(vparams);     vparR.current       = vparams;
  const autoR       = useRef(automation);  autoR.current       = automation;
  // Refs to stable state setters (setters never change identity in React)
  const setTvolR    = useRef(setTrackVol);
  const setTfltR    = useRef(setTrackFilter);
  const setStepR    = useRef(setCurrentStep);

  // ── Automation writer — records value at current playing step ────────────

  const setWithAuto = useCallback((setter, setterRef, id, value, paramKey) => {
    setter(p => ({ ...p, [id]: value }));
    if (isRecRef.current && playingRef.current && playingStepRef.current >= 0) {
      const s = playingStepRef.current;
      setAutomation(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          [paramKey]: prev[id][paramKey].map((v, i) => i === s ? value : v),
        },
      }));
    }
  }, []); // eslint-disable-line

  // ── Stable VoiceCol callbacks ────────────────────────────────────────────

  const onVParam = useCallback((id, key, val) =>
    setVparams(p => ({ ...p, [id]: { ...p[id], [key]: val } })), []);

  const onFilter = useCallback((id, val) =>
    setWithAuto(setTrackFilter, setTfltR, id, val, 'filter'), [setWithAuto]);

  const onVol = useCallback((id, val) =>
    setWithAuto(setTrackVol, setTvolR, id, val, 'vol'), [setWithAuto]);

  const onDly = useCallback((id) =>
    setDlyLvl(p => ({ ...p, [id]: (p[id] + 1) % 3 })), []);

  const onRvb = useCallback((id) =>
    setRvbLvl(p => ({ ...p, [id]: (p[id] + 1) % 3 })), []);

  // ── Scheduler ────────────────────────────────────────────────────────────

  const tick = useCallback(() => {
    const ctx = ctxRef.current; if (!ctx) return;
    while (nextTRef.current < ctx.currentTime + 0.1) {
      const s    = stepRef.current;
      const t    = nextTRef.current;
      const bpm  = bpmR.current;
      const vol  = volR.current;
      const drs  = drumsR.current;
      const sth  = synthR.current;
      const dly  = dlyR.current;
      const rvb  = rvbR.current;
      const mut  = mutR.current;
      const tvol = tvolR.current;
      const tflt = tfltR.current;
      const vp   = vparR.current;
      const au   = autoR.current;
      const dn   = dlyNodeRef.current;
      const rn   = rvbNodeRef.current;

      // For each track, effective vol/filter = automation value if recorded, else live state
      const rv = (id, param, base) => au[id]?.[param]?.[s] ?? base;

      // Apply automation values back to state so knobs/faders visually follow
      // (batch into one pass to avoid N separate setStates)
      const newVol = {}, newFlt = {};
      let hasAutoVol = false, hasAutoFlt = false;
      ALL_IDS.forEach(id => {
        const av = au[id]?.vol?.[s]; const af = au[id]?.filter?.[s];
        if (av != null) { newVol[id] = av; hasAutoVol = true; }
        if (af != null) { newFlt[id] = af; hasAutoFlt = true; }
      });
      if (hasAutoVol) setTvolR.current(p => ({ ...p, ...newVol }));
      if (hasAutoFlt) setTfltR.current(p => ({ ...p, ...newFlt }));

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

      if (!mut.bass && sth.bass[s]) {
        const notes = sth.bass[s];
        const nv = vol * rv('bass', 'vol', tvol.bass) * 0.8 / notes.length;
        notes.forEach(midi => makeSynthVoice(ctx, midi, 'sawtooth', t, bpm, nv, vp.bass, rv('bass', 'filter', tflt.bass), dn, rn, dly.bass, rvb.bass));
      }
      if (!mut.lead && sth.lead[s]) {
        const notes = sth.lead[s];
        const nv = vol * rv('lead', 'vol', tvol.lead) * 0.6 / notes.length;
        notes.forEach(midi => makeSynthVoice(ctx, midi, 'square', t, bpm, nv, vp.lead, rv('lead', 'filter', tflt.lead), dn, rn, dly.lead, rvb.lead));
      }

      playingStepRef.current = s;
      setStepR.current(s);
      nextTRef.current += (60 / bpm) / 4;
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
      const conv = ctx.createConvolver(); conv.buffer = makeImpulse(ctx);
      const rg = ctx.createGain(); rg.gain.value = 0.88;
      conv.connect(rg); rg.connect(ctx.destination);
      rvbNodeRef.current = conv;
    }
    const ctx = ctxRef.current;
    if (ctx.state === 'suspended') ctx.resume();
    if (dlyNodeRef.current) dlyNodeRef.current.delayTime.value = (60 / bpmR.current) / 4;
    stepRef.current = 0;
    nextTRef.current = ctx.currentTime + 0.05;
    tick();
    setPlaying(true);
  }, [tick]);

  const stop = useCallback(() => {
    clearTimeout(schedRef.current); schedRef.current = null;
    setPlaying(false); setCurrentStep(-1);
  }, []);

  const clearPattern = useCallback(() => {
    setDrums(makeEmptyDrums()); setSynth(makeEmptySynth()); setSynthSel(null);
  }, []);
  const clearAuto = useCallback(() => setAutomation(makeEmptyAuto()), []);

  const toggleDrum = useCallback((id, step) =>
    setDrums(p => ({ ...p, [id]: p[id].map((v, i) => i === step ? 1 - v : v) })), []);
  const toggleMute = useCallback((id) =>
    setMuted(p => ({ ...p, [id]: !p[id] })), []);

  function clickSynthStep(voice, step) {
    const cur = synth[voice][step];
    if (cur !== null) {
      setSynthSel(synthSel?.voice === voice && synthSel?.step === step ? null : { voice, step });
    } else {
      const midi = semOctToMidi(0, noteOct);
      setSynth(p => { const n = [...p[voice]]; n[step] = [midi]; return { ...p, [voice]: n }; });
      setSynthSel({ voice, step });
    }
  }

  function deleteSelectedStep() {
    if (!synthSel) return;
    setSynth(p => { const n = [...p[synthSel.voice]]; n[synthSel.step] = null; return { ...p, [synthSel.voice]: n }; });
    setSynthSel(null);
  }

  function toggleNoteInChord(s) {
    if (!synthSel) return;
    const midi = semOctToMidi(s, noteOct);
    setSynth(p => {
      const cur   = p[synthSel.voice][synthSel.step] ?? [];
      const idx   = cur.indexOf(midi);
      const next  = idx >= 0 ? cur.filter((_, i) => i !== idx) : [...cur, midi];
      const notes = next.length > 0 ? next.sort((a, b) => a - b) : null;
      const n = [...p[synthSel.voice]]; n[synthSel.step] = notes;
      if (!notes) setSynthSel(null);
      return { ...p, [synthSel.voice]: n };
    });
  }

  function changeOct(o) {
    setNoteOct(o);
    if (synthSel) {
      const cur = synth[synthSel.voice]?.[synthSel.step];
      if (cur) {
        const transposed = cur.map(m => semOctToMidi(m % 12, o));
        setSynth(p => { const n = [...p[synthSel.voice]]; n[synthSel.step] = transposed; return { ...p, [synthSel.voice]: n }; });
      }
    }
  }

  const selNotes   = synthSel ? (synth[synthSel.voice]?.[synthSel.step] ?? []) : [];
  const activeSems = new Set(selNotes.map(m => m % 12));

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className={`groove-panel${open ? ' open' : ''}${darkMode ? ' dark' : ''}`}>

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
        <button className={`groove-rec-btn${isRec ? ' active' : ''}`} onClick={() => setIsRec(v => !v)}>
          <span className="groove-rec-dot" />AUTO REC
        </button>
        <button className="groove-mono-btn" onClick={clearPattern}>CLR STEPS</button>
        <button className="groove-mono-btn" onClick={clearAuto}>CLR AUTO</button>
        <button className="groove-close" onClick={() => { stop(); onClose(); }}>✕</button>
      </div>

      <div className="gv-panel">
        {DRUM_TRACKS.map(t => (
          <VoiceCol key={t.id}
            id={t.id} label={t.label} isSynth={false}
            muted={muted[t.id]} vp={vparams[t.id]} params={VOICE_PARAMS[t.id]}
            filter={trackFilter[t.id]} vol={trackVol[t.id]}
            dly={dlyLvl[t.id]} rvb={rvbLvl[t.id]}
            onVParam={onVParam} onFilter={onFilter} onVol={onVol}
            onDly={onDly} onRvb={onRvb}
          />
        ))}
        <div className="gv-divider-v" />
        {SYNTH_TRACKS.map(t => (
          <VoiceCol key={t.id}
            id={t.id} label={t.label} isSynth={true}
            muted={muted[t.id]} vp={vparams[t.id]} params={VOICE_PARAMS[t.id]}
            filter={trackFilter[t.id]} vol={trackVol[t.id]}
            dly={dlyLvl[t.id]} rvb={rvbLvl[t.id]}
            onVParam={onVParam} onFilter={onFilter} onVol={onVol}
            onDly={onDly} onRvb={onRvb}
          />
        ))}
      </div>

      <div className="groove-seq">
        {DRUM_TRACKS.map(t => (
          <div key={t.id} className="groove-row">
            <span className="groove-label">{t.label}</span>
            <div className="groove-steps">
              {GROUPS.map(g => (
                <div key={g} className="groove-group">
                  {drums[t.id].slice(g, g + 4).map((on, i) => {
                    const step = g + i;
                    return (
                      <button key={step}
                        className={`groove-step${on ? ' on' : ''}${step === currentStep ? ' cur' : ''}${muted[t.id] ? ' muted' : ''}`}
                        onClick={() => toggleDrum(t.id, step)} />
                    );
                  })}
                </div>
              ))}
            </div>
            <button className={`groove-mute-btn${muted[t.id] ? ' on' : ''}`} onClick={() => toggleMute(t.id)}>M</button>
          </div>
        ))}

        <div className="groove-seq-divider" />

        {SYNTH_TRACKS.map(t => (
          <div key={t.id} className="groove-row">
            <span className="groove-label">{t.label}</span>
            <div className="groove-steps">
              {GROUPS.map(g => (
                <div key={g} className="groove-group">
                  {synth[t.id].slice(g, g + 4).map((notes, i) => {
                    const step  = g + i;
                    const isSel = synthSel?.voice === t.id && synthSel?.step === step;
                    const root  = notes?.[0] ?? null;
                    return (
                      <button key={step}
                        className={`groove-step groove-step--synth${notes ? ' on' : ''}${isSel ? ' sel' : ''}${step === currentStep ? ' cur' : ''}${muted[t.id] ? ' muted' : ''}`}
                        onClick={() => clickSynthStep(t.id, step)}
                      >
                        {root != null && (
                          <span className="groove-note-lbl">
                            {midiToNote(root)}{notes.length > 1 ? <sup>+{notes.length - 1}</sup> : ''}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
            <button className={`groove-mute-btn${muted[t.id] ? ' on' : ''}`} onClick={() => toggleMute(t.id)}>M</button>
          </div>
        ))}
      </div>

      {synthSel && (
        <div className="groove-notepick">
          <div className="groove-pick-row">
            <div className="groove-oct-row">
              {[1, 2, 3, 4, 5].map(o => (
                <button key={o} className={`groove-oct-btn${noteOct === o ? ' active' : ''}`}
                  onClick={() => changeOct(o)}>{o}</button>
              ))}
              <span className="groove-oct-lbl">OCT</span>
            </div>
            {selNotes.length > 0 && (
              <span className="groove-chord-lbl">{selNotes.map(m => midiToNote(m)).join(' ')}</span>
            )}
            <button className="groove-del-step" onClick={deleteSelectedStep}>DEL STEP</button>
          </div>
          <div className="groove-keys">
            {NOTE_NAMES.map((name, s) => (
              <button key={s}
                className={`groove-key${IS_BLACK[s] ? ' blk' : ''}${activeSems.has(s) ? ' active' : ''}`}
                onClick={() => toggleNoteInChord(s)}>
                <span className="groove-key-name">{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
