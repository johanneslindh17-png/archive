import { useState, useRef, useCallback, useEffect, memo } from 'react';

// ── Rotary knob ──────────────────────────────────────────────────────────────

function Knob({ value, onChange, size = 32 }) {
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

// ── Vertical fader ────────────────────────────────────────────────────────────

function VFader({ value, onChange }) {
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
      <div className="gv-fader-track">
        <div className="gv-fader-fill" style={{ height: `${value * 100}%` }} />
        <div className="gv-fader-thumb" style={{ bottom: `${value * 100}%` }} />
      </div>
      <span className="gv-param-lbl">VOL</span>
    </div>
  );
}

// ── Vertical slider (ADSR) ────────────────────────────────────────────────────

function VSlider({ value, onChange, label }) {
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
      <div className="gv-vslider-track">
        <div className="gv-vslider-thumb" style={{ top: `${(1 - value) * 100}%` }} />
      </div>
      <span className="gv-param-lbl">{label}</span>
    </div>
  );
}

// ── Constants ─────────────────────────────────────────────────────────────────

const DRUM_TRACKS  = [
  { id: 'kick',  label: 'KICK'  }, { id: 'snare', label: 'SNARE' },
  { id: 'clap',  label: 'CLAP'  }, { id: 'hh_c',  label: 'HH'    },
  { id: 'hh_o',  label: 'OPEN'  }, { id: 'perc',  label: 'PERC'  },
  { id: 'smpl',  label: 'SMPL'  },
];
const SYNTH_TRACKS = [{ id: 'bass', label: 'BASS' }, { id: 'lead', label: 'LEAD' }];
const ALL_TRACKS   = [...DRUM_TRACKS, ...SYNTH_TRACKS];
const ALL_IDS      = ALL_TRACKS.map(t => t.id);
const STEPS        = 16;
const NOTE_NAMES   = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const IS_BLACK     = [false,true,false,true,false,false,true,false,true,false,true,false];
const GROUPS       = [0, 4, 8, 12];
const ADSR_KEYS    = ['att','dec','sus','rel'];

const VOICE_PARAMS = {
  kick:  [{ key: 'pitch', label: 'PITCH' }, { key: 'decay', label: 'DECAY' }],
  snare: [{ key: 'tone',  label: 'TONE'  }, { key: 'decay', label: 'DECAY' }],
  clap:  [{ key: 'tone',  label: 'TONE'  }, { key: 'decay', label: 'DECAY' }],
  hh_c:  [{ key: 'tone',  label: 'TONE'  }, { key: 'decay', label: 'DECAY' }],
  hh_o:  [{ key: 'decay', label: 'DECAY' }],
  perc:  [{ key: 'pitch', label: 'PITCH' }, { key: 'decay', label: 'DECAY' }],
  bass:  [{ key: 'att', label: 'ATT' }, { key: 'dec', label: 'DEC' }, { key: 'sus', label: 'SUS' }, { key: 'rel', label: 'REL' }],
  lead:  [{ key: 'att', label: 'ATT' }, { key: 'dec', label: 'DEC' }, { key: 'sus', label: 'SUS' }, { key: 'rel', label: 'REL' }],
  smpl:  [],
};

const DEFAULT_VPARAMS = {
  kick:  { pitch: 0.5, decay: 0.45 },
  snare: { tone: 0.4,  decay: 0.4  },
  clap:  { tone: 0.4,  decay: 0.35 },
  hh_c:  { tone: 0.5,  decay: 0.3  },
  hh_o:  { decay: 0.45 },
  perc:  { pitch: 0.5, decay: 0.4  },
  bass:  { att: 0.02, dec: 0.2, sus: 0.55, rel: 0.15, res: 0.1  },
  lead:  { att: 0.01, dec: 0.1, sus: 0.6,  rel: 0.12, res: 0.15 },
  smpl:  {},
};

function midiToNote(midi) {
  if (midi == null) return null;
  return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1);
}
function semOctToMidi(s, oct) { return (oct + 1) * 12 + s; }

const GROUPS_32 = [0, 4, 8, 12, 16, 20, 24, 28];

function makeEmptyDrums(len = STEPS) {
  return Object.fromEntries(DRUM_TRACKS.map(t => [t.id, new Array(len).fill(0)]));
}
function makeEmptySynth(len = STEPS) {
  return { bass: new Array(len).fill(null), lead: new Array(len).fill(null) };
}
function makeVMap(val) {
  return Object.fromEntries(ALL_IDS.map(id => [id, val]));
}
function makeEmptyAuto(len = STEPS) {
  return Object.fromEntries(ALL_IDS.map(id => [id, {
    vol:    new Array(len).fill(null),
    filter: new Array(len).fill(null),
    pan:    new Array(len).fill(null),
    pitch:  new Array(len).fill(null),
    decay:  new Array(len).fill(null),
    tone:   new Array(len).fill(null),
    att:    new Array(len).fill(null),
    dec:    new Array(len).fill(null),
    sus:    new Array(len).fill(null),
    rel:    new Array(len).fill(null),
    res:    new Array(len).fill(null),
  }]));
}

// ── Sample column ─────────────────────────────────────────────────────────────

const SampleCol = memo(function SampleCol({
  isSampling, hasSample, muted,
  filter, vol, pan, dly, rvb,
  onSample, onFilter, onVol, onPan, onDly, onRvb, onToggleMute,
}) {
  return (
    <div className={`gv-col${muted ? ' gv-col--muted' : ''}`}>
      <div
        className={`gv-col-label${muted ? ' gv-col-label--muted' : ''}`}
        onClick={onToggleMute}
        title={muted ? 'unmute' : 'mute'}
      >
        SMPL
      </div>

      <div className="gv-smpl-area">
        <button
          className={`gv-smpl-btn${isSampling ? ' sampling' : ''}${hasSample && !isSampling ? ' has-sample' : ''}`}
          onClick={onSample}
          title={isSampling ? 'Stop sampling' : hasSample ? 'Resample' : 'Grab browser audio'}
        >
          {isSampling ? '⏹' : '⏺'}
        </button>
        <span className={`gv-smpl-status${isSampling ? ' rec' : hasSample ? ' ready' : ''}`}>
          {isSampling ? 'REC' : hasSample ? 'READY' : 'EMPTY'}
        </span>
        {hasSample && !isSampling && (
          <span className="gv-smpl-hint">trigger on steps</span>
        )}
      </div>

      <div className="gv-sep" />

      <div className="gv-filt-row">
        <div className="gv-param">
          <Knob value={filter} onChange={onFilter} />
          <span className="gv-param-lbl">FILT</span>
        </div>
        <div className="gv-param">
          <Knob value={pan} onChange={onPan} />
          <span className="gv-param-lbl">PAN</span>
        </div>
      </div>

      <div className="gv-bottom">
        <div className="gv-vol-cell">
          <Knob size={42} value={vol} onChange={onVol} />
          <span className="gv-param-lbl">VOL</span>
        </div>
        <div className="gv-sep" />
        <div className="gv-send-row">
          <button className={`gv-send-btn${dly ? ' on' : ''}`} onClick={onDly}>DLY</button>
          <button className={`gv-send-btn${rvb ? ' on' : ''}`} onClick={onRvb}>RVB</button>
        </div>
        <button className={`gv-mute-col${muted ? ' on' : ''}`} onClick={onToggleMute}>MUTE</button>
      </div>
    </div>
  );
});

// ── Voice column ──────────────────────────────────────────────────────────────

const VoiceCol = memo(function VoiceCol({
  id, label, isSynth, muted, vp, params, filter, vol, pan, dly, rvb,
  onVParam, onFilter, onVol, onPan, onDly, onRvb, onToggleMute,
}) {
  return (
    <div className={`gv-col${muted ? ' gv-col--muted' : ''}`}>
      <div
        className={`gv-col-label${muted ? ' gv-col-label--muted' : ''}`}
        onClick={() => onToggleMute(id)}
        title={muted ? 'unmute' : 'mute'}
      >
        {label}
      </div>

      {isSynth ? (
        <div className="gv-adsr-row">
          {ADSR_KEYS.map(key => (
            <VSlider key={key} value={vp[key] ?? 0.5} onChange={v => onVParam(id, key, v)} label={key.toUpperCase()} />
          ))}
        </div>
      ) : (
        <div className="gv-voice-params">
          {params.map(({ key, label: lbl }) => (
            <div key={key} className="gv-param">
              <Knob value={vp[key] ?? 0.5} onChange={v => onVParam(id, key, v)} />
              <span className="gv-param-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      )}

      <div className="gv-sep" />

      <div className="gv-filt-row">
        <div className="gv-param">
          <Knob value={filter} onChange={v => onFilter(id, v)} />
          <span className="gv-param-lbl">FILT</span>
        </div>
        {isSynth && (
          <div className="gv-param">
            <Knob value={vp.res ?? 0.1} onChange={v => onVParam(id, 'res', v)} />
            <span className="gv-param-lbl">RES</span>
          </div>
        )}
        <div className="gv-param">
          <Knob value={pan} onChange={v => onPan(id, v)} />
          <span className="gv-param-lbl">PAN</span>
        </div>
      </div>

      <div className="gv-bottom">
        <div className="gv-vol-cell">
          <Knob size={42} value={vol} onChange={v => onVol(id, v)} />
          <span className="gv-param-lbl">VOL</span>
        </div>
        <div className="gv-sep" />
        <div className="gv-send-row">
          <button className={`gv-send-btn${dly ? ' on' : ''}`} onClick={() => onDly(id)}>DLY</button>
          <button className={`gv-send-btn${rvb ? ' on' : ''}`} onClick={() => onRvb(id)}>RVB</button>
        </div>
        <button className={`gv-mute-col${muted ? ' on' : ''}`} onClick={() => onToggleMute(id)}>MUTE</button>
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
  const sr = ctx.sampleRate, len = Math.ceil(sr * 3.5);
  const buf = ctx.createBuffer(2, len, sr);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
  }
  return buf;
}

function makeChain(ctx, t, vol, filterVal, panVal, dn, rn, dlyOn, rvbOn, masterDest) {
  const hz   = filterVal >= 0.99 ? 20000 : 80 + Math.pow(filterVal, 2) * 19200;
  const filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.setValueAtTime(hz, t);
  const panner = ctx.createStereoPanner(); panner.pan.setValueAtTime((panVal ?? 0.5) * 2 - 1, t);
  const gain = ctx.createGain(); gain.gain.setValueAtTime(Math.max(0.0001, vol), t);
  const out = masterDest || ctx.destination;
  filt.connect(panner); panner.connect(gain); gain.connect(out);
  if (dlyOn && dn) { const sg = ctx.createGain(); sg.gain.value = 0.50; gain.connect(sg); sg.connect(dn); }
  if (rvbOn && rn) { const rg = ctx.createGain(); rg.gain.value = 0.45; gain.connect(rg); rg.connect(rn); }
  return filt;
}

function makeSynthVoice(ctx, midi, type, t, bpm, vol, vp, filterCutoff, panVal, dn, rn, dlyOn, rvbOn, masterDest) {
  const freq     = 440 * Math.pow(2, (midi - 69) / 12);
  const osc      = ctx.createOscillator(); osc.type = type; osc.frequency.setValueAtTime(freq, t);
  const cutoffHz = filterCutoff >= 0.99 ? 18000 : 60 + Math.pow(filterCutoff, 2) * 14000;
  const vcf      = ctx.createBiquadFilter(); vcf.type = 'lowpass';
  vcf.frequency.setValueAtTime(cutoffHz, t); vcf.Q.setValueAtTime(0.5 + (vp.res ?? 0.1) * 22, t);
  const att = 0.001 + (vp.att ?? 0.02) * 0.8;
  const dec = 0.005 + (vp.dec ?? 0.2)  * 1.5;
  const sus = vp.sus ?? 0.55;
  const rel = 0.02  + (vp.rel ?? 0.15) * 3.0;
  const stepDur = (60 / bpm) / 4, noteLen = stepDur * 0.78;
  const vca = ctx.createGain();
  vca.gain.setValueAtTime(0.0001, t);
  vca.gain.linearRampToValueAtTime(vol, t + att);
  vca.gain.linearRampToValueAtTime(vol * sus, t + att + dec);
  if (noteLen > att + dec) vca.gain.setValueAtTime(vol * sus, t + noteLen);
  vca.gain.linearRampToValueAtTime(0.0001, t + Math.max(noteLen, att + dec) + rel);
  const panner = ctx.createStereoPanner(); panner.pan.setValueAtTime((panVal ?? 0.5) * 2 - 1, t);
  const out = ctx.createGain(); out.gain.value = 1;
  const synthOut = masterDest || ctx.destination;
  osc.connect(vcf); vcf.connect(vca); vca.connect(panner); panner.connect(out); out.connect(synthOut);
  if (dlyOn && dn) { const sg = ctx.createGain(); sg.gain.value = 0.50; out.connect(sg); sg.connect(dn); }
  if (rvbOn && rn) { const rg = ctx.createGain(); rg.gain.value = 0.45; out.connect(rg); rg.connect(rn); }
  osc.start(t); osc.stop(t + Math.max(noteLen, att + dec) + rel + 0.05);
}

function doKick(ctx, t, dest, p) {
  const base = 35 + (p.pitch ?? 0.5) * 180;
  const dec  = 0.08 + (p.decay ?? 0.45) * 1.4;
  const osc = ctx.createOscillator(), g = ctx.createGain();
  osc.frequency.setValueAtTime(base * 3, t);
  osc.frequency.exponentialRampToValueAtTime(Math.max(0.001, base), t + 0.02);
  osc.frequency.exponentialRampToValueAtTime(Math.max(0.001, base * 0.4), t + dec);
  g.gain.setValueAtTime(2.0, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  osc.connect(g); g.connect(dest); osc.start(t); osc.stop(t + dec + 0.05);
  const c = ctx.createOscillator(), cg = ctx.createGain();
  c.frequency.value = 4800; cg.gain.setValueAtTime(0.6, t); cg.gain.exponentialRampToValueAtTime(0.001, t + 0.022);
  c.connect(cg); cg.connect(dest); c.start(t); c.stop(t + 0.03);
}

function doSnare(ctx, t, dest, p) {
  const bpHz = 400 + (p.tone  ?? 0.4) * 3600;
  const dec  = 0.04 + (p.decay ?? 0.4) * 0.8;
  const ns   = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec + 0.05);
  const nf   = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = bpHz; nf.Q.value = 0.5;
  const ng   = ctx.createGain(); ng.gain.setValueAtTime(0.95, t); ng.gain.exponentialRampToValueAtTime(0.001, t + dec);
  ns.connect(nf); nf.connect(ng); ng.connect(dest); ns.start(t);
  const osc = ctx.createOscillator(); osc.type = 'triangle'; osc.frequency.value = 120 + (p.tone ?? 0.4) * 120;
  const og  = ctx.createGain(); og.gain.setValueAtTime(0.4, t); og.gain.exponentialRampToValueAtTime(0.001, t + dec * 0.4);
  osc.connect(og); og.connect(dest); osc.start(t); osc.stop(t + dec);
}

function doClap(ctx, t, dest, p) {
  const bpHz = 600 + (p.tone  ?? 0.4) * 2000;
  const dec  = 0.05 + (p.decay ?? 0.35) * 0.5;
  [0, 0.010, 0.022].forEach(off => {
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec);
    const f  = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = bpHz; f.Q.value = 0.65;
    const g  = ctx.createGain(), st = t + off;
    g.gain.setValueAtTime(0.6, st); g.gain.exponentialRampToValueAtTime(0.001, st + dec);
    ns.connect(f); f.connect(g); g.connect(dest); ns.start(st);
  });
}

function doHH(ctx, t, dest, p, isOpen) {
  const tone = p.tone ?? 0.5;
  const dec  = isOpen
    ? 0.06 + (p.decay ?? 0.45) * 1.6
    : 0.005 + (p.decay ?? 0.3) * 0.22;
  const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, dec + 0.02);
  const f  = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 6000 + tone * 5000;
  const g  = ctx.createGain(); g.gain.setValueAtTime(0.55, t); g.gain.exponentialRampToValueAtTime(0.001, t + dec);
  ns.connect(f); f.connect(g); g.connect(dest); ns.start(t);
}

function doPerc(ctx, t, dest, p) {
  // Conga membrane model: two decaying modes + very brief impact click
  const base = 200 + (p.pitch ?? 0.5) * 250; // 200–450 Hz (conga body range)
  const dec  = 0.18 + (p.decay ?? 0.4) * 0.72;
  // Primary mode (fundamental) — barely any pitch movement
  const o1 = ctx.createOscillator(); o1.type = 'sine';
  o1.frequency.setValueAtTime(base * 1.05, t);
  o1.frequency.exponentialRampToValueAtTime(Math.max(1, base), t + 0.007);
  const g1 = ctx.createGain();
  g1.gain.setValueAtTime(1.1, t); g1.gain.exponentialRampToValueAtTime(0.001, t + dec);
  o1.connect(g1); g1.connect(dest); o1.start(t); o1.stop(t + dec + 0.02);
  // Upper partial (decays faster) — gives the membrane character
  const o2 = ctx.createOscillator(); o2.type = 'sine';
  o2.frequency.value = base * 1.77;
  const g2 = ctx.createGain();
  g2.gain.setValueAtTime(0.5, t); g2.gain.exponentialRampToValueAtTime(0.001, t + dec * 0.32);
  o2.connect(g2); g2.connect(dest); o2.start(t); o2.stop(t + dec * 0.32 + 0.02);
  // Very short impact click (broadband, no filter)
  const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(ctx, 0.009);
  const ng = ctx.createGain();
  ng.gain.setValueAtTime(0.55, t); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.009);
  ns.connect(ng); ng.connect(dest); ns.start(t);
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
  const [trackPan,    setTrackPan]    = useState(() => makeVMap(0.5));
  const [dlyLvl,      setDlyLvl]     = useState(() => makeVMap(false));
  const [rvbLvl,      setRvbLvl]     = useState(() => makeVMap(false));
  const [prob,        setProb]        = useState(() => makeVMap(1.0));
  const [vparams,     setVparams]     = useState(() =>
    Object.fromEntries(ALL_IDS.map(id => [id, { ...DEFAULT_VPARAMS[id] }]))
  );
  const [automation,  setAutomation]  = useState(makeEmptyAuto);
  const [isRec,       setIsRec]       = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [mp3Url,      setMp3Url]      = useState(null);
  const [isSampling,  setIsSampling]  = useState(false);
  const [hasSample,   setHasSample]   = useState(false);
  const [seqLen,      setSeqLen]      = useState(16);
  const [noteOct,     setNoteOct]     = useState(3);
  const [currentStep, setCurrentStep] = useState(-1);
  const [hoverSynth,  setHoverSynth]  = useState(null); // {voice, step, rect}
  const [lockedSynth, setLockedSynth] = useState(null); // {voice, step, rect} — click-locked popup
  const popupRef = useRef(null);

  // ── Refs ───────────────────────────────────────────────────────────────────

  const ctxRef         = useRef(null);
  const masterGainRef  = useRef(null);
  const dlyNodeRef     = useRef(null);
  const rvbNodeRef     = useRef(null);
  const schedRef       = useRef(null);
  const recProcRef     = useRef(null);
  const recChunksRef   = useRef([]);
  const analyserRef    = useRef(null);
  const waveCanvasRef  = useRef(null);
  const animFrameRef   = useRef(null);
  const sampleBufRef   = useRef(null);
  const sampleRecRef   = useRef(null);
  const sampleStreamRef = useRef(null);
  const sampleWaveRef  = useRef(null);
  const nextTRef       = useRef(0);
  const stepRef        = useRef(0);
  const playingStepRef = useRef(-1);
  const hoverTimerRef  = useRef(null);

  const isRecRef    = useRef(isRec);       isRecRef.current    = isRec;
  const seqLenRef   = useRef(seqLen);      seqLenRef.current   = seqLen;
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
  const tpanR       = useRef(trackPan);    tpanR.current       = trackPan;
  const probR       = useRef(prob);        probR.current       = prob;
  const vparR       = useRef(vparams);     vparR.current       = vparams;
  const autoR       = useRef(automation);  autoR.current       = automation;
  const setTvolR    = useRef(setTrackVol);
  const setTfltR    = useRef(setTrackFilter);
  const setTpanR    = useRef(setTrackPan);
  const setVparR    = useRef(setVparams);
  const setStepR    = useRef(setCurrentStep);

  // ── Automation writer ────────────────────────────────────────────────────

  const setWithAuto = useCallback((setter, id, value, paramKey) => {
    setter(p => ({ ...p, [id]: value }));
    if (isRecRef.current && playingRef.current && playingStepRef.current >= 0) {
      const s = playingStepRef.current;
      setAutomation(prev => ({
        ...prev,
        [id]: { ...prev[id], [paramKey]: prev[id][paramKey].map((v, i) => i === s ? value : v) },
      }));
    }
  }, []); // eslint-disable-line

  // ── Stable VoiceCol callbacks ────────────────────────────────────────────

  const onVParam      = useCallback((id, key, val) => setVparams(p => ({ ...p, [id]: { ...p[id], [key]: val } })), []);
  const onVParamAuto  = useCallback((id, key, val) => {
    setVparams(p => ({ ...p, [id]: { ...p[id], [key]: val } }));
    if (isRecRef.current && playingRef.current && playingStepRef.current >= 0) {
      const s = playingStepRef.current;
      setAutomation(prev => {
        const track = prev[id];
        if (!track?.[key]) return prev;
        return { ...prev, [id]: { ...track, [key]: track[key].map((v, i) => i === s ? val : v) } };
      });
    }
  }, []); // eslint-disable-line
  const onFilter      = useCallback((id, val) => setWithAuto(setTrackFilter, id, val, 'filter'), [setWithAuto]);
  const onVol         = useCallback((id, val) => setWithAuto(setTrackVol, id, val, 'vol'), [setWithAuto]);
  const onPan         = useCallback((id, val) => setWithAuto(setTrackPan, id, val, 'pan'), [setWithAuto]);
  const onDly         = useCallback((id) => setDlyLvl(p => ({ ...p, [id]: !p[id] })), []);
  const onRvb         = useCallback((id) => setRvbLvl(p => ({ ...p, [id]: !p[id] })), []);
  const onToggleMute  = useCallback((id) => setMuted(p => ({ ...p, [id]: !p[id] })), []);

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
      const prb  = probR.current;
      const tvol = tvolR.current;
      const tflt = tfltR.current;
      const tpan = tpanR.current;
      const vp   = vparR.current;
      const au   = autoR.current;
      const dn   = dlyNodeRef.current;
      const rn   = rvbNodeRef.current;
      const mg   = masterGainRef.current;

      const rv = (id, param, base) => au[id]?.[param]?.[s] ?? base;

      const newVol = {}, newFlt = {}, newPan = {};
      let hasAV = false, hasAF = false, hasAP = false;
      ALL_IDS.forEach(id => {
        const av = au[id]?.vol?.[s]; const af = au[id]?.filter?.[s]; const ap = au[id]?.pan?.[s];
        if (av != null) { newVol[id] = av; hasAV = true; }
        if (af != null) { newFlt[id] = af; hasAF = true; }
        if (ap != null) { newPan[id] = ap; hasAP = true; }
      });
      if (hasAV) setTvolR.current(p => ({ ...p, ...newVol }));
      if (hasAF) setTfltR.current(p => ({ ...p, ...newFlt }));
      if (hasAP) setTpanR.current(p => ({ ...p, ...newPan }));

      // Apply vparams automation for ALL voices (drums: pitch/decay/tone; synths: att/dec/sus/rel/res)
      const newVp = {};
      let hasVP = false;
      ALL_IDS.forEach(id => {
        const track = au[id]; if (!track) return;
        const ups = {};
        const keys = ['pitch','decay','tone','att','dec','sus','rel','res'];
        keys.forEach(k => { if (track[k]?.[s] != null) ups[k] = track[k][s]; });
        if (Object.keys(ups).length > 0) { newVp[id] = ups; hasVP = true; }
      });
      if (hasVP) setVparR.current(p => {
        const n = { ...p };
        Object.entries(newVp).forEach(([id, ups]) => { n[id] = { ...n[id], ...ups }; });
        return n;
      });
      const getVp = (id) => newVp[id] ? { ...vp[id], ...newVp[id] } : vp[id];

      DRUM_TRACKS.forEach(({ id }) => {
        if (!drs[id][s] || mut[id]) return;
        if (prb[id] < 1 && Math.random() > prb[id]) return;
        if (id === 'smpl') {
          const buf = sampleBufRef.current;
          if (buf) {
            const dest = makeChain(ctx, t, vol * rv(id, 'vol', tvol[id]), rv(id, 'filter', tflt[id]), rv(id, 'pan', tpan[id]), dn, rn, dly[id], rvb[id], mg);
            const src = ctx.createBufferSource();
            src.buffer = buf;
            src.connect(dest);
            src.start(t);
          }
          return;
        }
        const dest = makeChain(ctx, t, vol * rv(id, 'vol', tvol[id]), rv(id, 'filter', tflt[id]), rv(id, 'pan', tpan[id]), dn, rn, dly[id], rvb[id], mg);
        const dvp = getVp(id);
        if (id === 'kick')  doKick(ctx, t, dest, dvp);
        if (id === 'snare') doSnare(ctx, t, dest, dvp);
        if (id === 'clap')  doClap(ctx, t, dest, dvp);
        if (id === 'hh_c')  doHH(ctx, t, dest, dvp, false);
        if (id === 'hh_o')  doHH(ctx, t, dest, dvp, true);
        if (id === 'perc')  doPerc(ctx, t, dest, dvp);
      });

      if (!mut.bass && sth.bass[s] && (prb.bass >= 1 || Math.random() <= prb.bass)) {
        const notes = sth.bass[s];
        const nv = vol * rv('bass', 'vol', tvol.bass) * 0.8 / notes.length;
        notes.forEach(midi => makeSynthVoice(ctx, midi, 'sawtooth', t, bpm, nv, getVp('bass'), rv('bass', 'filter', tflt.bass), rv('bass', 'pan', tpan.bass), dn, rn, dly.bass, rvb.bass, mg));
      }
      if (!mut.lead && sth.lead[s] && (prb.lead >= 1 || Math.random() <= prb.lead)) {
        const notes = sth.lead[s];
        const nv = vol * rv('lead', 'vol', tvol.lead) * 0.6 / notes.length;
        notes.forEach(midi => makeSynthVoice(ctx, midi, 'square', t, bpm, nv, getVp('lead'), rv('lead', 'filter', tflt.lead), rv('lead', 'pan', tpan.lead), dn, rn, dly.lead, rvb.lead, mg));
      }

      playingStepRef.current = s;
      setStepR.current(s);
      nextTRef.current += (60 / bpm) / 4;
      stepRef.current = (s + 1) % seqLenRef.current;
    }
    schedRef.current = setTimeout(tick, 22);
  }, []);

  const play = useCallback(() => {
    if (!ctxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctxRef.current = ctx;
      const master = ctx.createGain(); master.gain.value = 1;
      master.connect(ctx.destination);
      masterGainRef.current = master;
      const dly = ctx.createDelay(2.5); dly.delayTime.value = (60 / bpmR.current) / 4;
      const fb = ctx.createGain(); fb.gain.value = 0.55;
      const wet = ctx.createGain(); wet.gain.value = 0.55;
      dly.connect(fb); fb.connect(dly); dly.connect(wet); wet.connect(master);
      dlyNodeRef.current = dly;
      const conv = ctx.createConvolver(); conv.buffer = makeImpulse(ctx);
      const rg = ctx.createGain(); rg.gain.value = 0.85;
      conv.connect(rg); rg.connect(master);
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
    setDrums(makeEmptyDrums(seqLenRef.current));
    setSynth(makeEmptySynth(seqLenRef.current));
  }, []);
  const clearAuto = useCallback(() => setAutomation(makeEmptyAuto(seqLenRef.current)), []);

  const startCapture = useCallback(() => {
    const ctx = ctxRef.current;
    const master = masterGainRef.current;
    if (!ctx || !master) return;
    if (mp3Url) { URL.revokeObjectURL(mp3Url); setMp3Url(null); }
    recChunksRef.current = [];
    const proc = ctx.createScriptProcessor(4096, 2, 2);
    proc.onaudioprocess = (e) => {
      recChunksRef.current.push([
        new Float32Array(e.inputBuffer.getChannelData(0)),
        new Float32Array(e.inputBuffer.getChannelData(1)),
      ]);
    };
    master.connect(proc);
    proc.connect(ctx.destination);
    recProcRef.current = proc;
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    master.connect(analyser);
    analyserRef.current = analyser;
    const drawWave = () => {
      animFrameRef.current = requestAnimationFrame(drawWave);
      const canvas = waveCanvasRef.current;
      if (!canvas) return;
      const buf = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteTimeDomainData(buf);
      const c = canvas.getContext('2d');
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.strokeStyle = '#e04848';
      c.lineWidth = 1.5;
      c.beginPath();
      const sw = canvas.width / buf.length;
      buf.forEach((v, i) => {
        const y = (v / 128) * (canvas.height / 2);
        i === 0 ? c.moveTo(0, y) : c.lineTo(i * sw, y);
      });
      c.stroke();
    };
    drawWave();
    setIsCapturing(true);
  }, [mp3Url]);

  const stopCapture = useCallback(() => {
    const ctx = ctxRef.current;
    const master = masterGainRef.current;
    const proc = recProcRef.current;
    if (!proc || !ctx || !master) return;
    cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = null;
    if (analyserRef.current) { master.disconnect(analyserRef.current); analyserRef.current = null; }
    master.disconnect(proc);
    proc.disconnect();
    proc.onaudioprocess = null;
    recProcRef.current = null;
    setIsCapturing(false);

    const chunks = recChunksRef.current;
    if (!chunks.length) { setMp3Url('empty'); return; }
    const totalSamples = chunks.reduce((s, c) => s + c[0].length, 0);
    const leftAll  = new Float32Array(totalSamples);
    const rightAll = new Float32Array(totalSamples);
    let offset = 0;
    for (const [L, R] of chunks) {
      leftAll.set(L, offset);
      rightAll.set(R, offset);
      offset += L.length;
    }
    const sampleRate = ctx.sampleRate;
    const numChannels = 2;
    const bitsPerSample = 16;
    const blockAlign = numChannels * (bitsPerSample / 8);
    const byteRate = sampleRate * blockAlign;
    const dataSize = totalSamples * blockAlign;
    const wavBuf = new ArrayBuffer(44 + dataSize);
    const v = new DataView(wavBuf);
    const ws = (off, str) => { for (let i = 0; i < str.length; i++) v.setUint8(off + i, str.charCodeAt(i)); };
    ws(0, 'RIFF'); v.setUint32(4, 36 + dataSize, true); ws(8, 'WAVE');
    ws(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true);
    v.setUint16(22, numChannels, true); v.setUint32(24, sampleRate, true);
    v.setUint32(28, byteRate, true); v.setUint16(32, blockAlign, true);
    v.setUint16(34, bitsPerSample, true); ws(36, 'data'); v.setUint32(40, dataSize, true);
    let wp = 44;
    for (let i = 0; i < totalSamples; i++) {
      v.setInt16(wp, Math.max(-32768, Math.min(32767, leftAll[i]  * 32767)), true); wp += 2;
      v.setInt16(wp, Math.max(-32768, Math.min(32767, rightAll[i] * 32767)), true); wp += 2;
    }
    const blob = new Blob([wavBuf], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    setMp3Url(url);
  }, []);

  const toggleSeqLen = useCallback(() => {
    if (seqLenRef.current === 16) {
      setDrums(d => Object.fromEntries(Object.entries(d).map(([id, arr]) => [id, [...arr, ...arr]])));
      setSynth(s => ({ bass: [...s.bass, ...s.bass], lead: [...s.lead, ...s.lead] }));
      setAutomation(a => Object.fromEntries(Object.entries(a).map(([id, track]) => [
        id, Object.fromEntries(Object.entries(track).map(([k, arr]) => [k, [...arr, ...arr]])),
      ])));
      setSeqLen(32);
    } else {
      setDrums(d => Object.fromEntries(Object.entries(d).map(([id, arr]) => [id, arr.slice(0, 16)])));
      setSynth(s => ({ bass: s.bass.slice(0, 16), lead: s.lead.slice(0, 16) }));
      setAutomation(a => Object.fromEntries(Object.entries(a).map(([id, track]) => [
        id, Object.fromEntries(Object.entries(track).map(([k, arr]) => [k, arr.slice(0, 16)])),
      ])));
      setSeqLen(16);
    }
  }, []);

  const startSampling = useCallback(async () => {
    let ctx = ctxRef.current;
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctxRef.current = ctx;
      const master = ctx.createGain(); master.gain.value = 1;
      master.connect(ctx.destination);
      masterGainRef.current = master;
    }
    if (ctx.state === 'suspended') await ctx.resume();
    let stream;
    try {
      stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      stream.getVideoTracks().forEach(t => t.stop());
    } catch {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    sampleStreamRef.current = stream;
    const chunks = [];
    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus' : 'audio/webm';
    const rec = new MediaRecorder(stream, { mimeType });
    rec.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
    rec.onstop = async () => {
      stream.getTracks().forEach(t => t.stop());
      if (!chunks.length) return;
      const blob = new Blob(chunks, { type: mimeType });
      const arrayBuf = await blob.arrayBuffer();
      try {
        const audioBuf = await ctx.decodeAudioData(arrayBuf);
        sampleBufRef.current = audioBuf;
        setHasSample(true);
      } catch (e) { console.error('Sample decode failed:', e); }
    };
    rec.start(100);
    sampleRecRef.current = rec;
    setIsSampling(true);
  }, []);

  const stopSampling = useCallback(() => {
    sampleRecRef.current?.stop();
    sampleRecRef.current = null;
    setIsSampling(false);
  }, []);

  const toggleDrum = useCallback((id, step) =>
    setDrums(p => ({ ...p, [id]: p[id].map((v, i) => i === step ? 1 - v : v) })), []);

  // ── Synth step: click empty = add root, click filled = delete ─────────────

  function clickSynthStep(voice, step, e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cur = synth[voice][step];
    setSynth(p => {
      const n = [...p[voice]];
      n[step] = cur !== null ? null : [semOctToMidi(0, noteOct)];
      return { ...p, [voice]: n };
    });
    // Lock popup open until mouse moves far away or click elsewhere
    setLockedSynth({ voice, step, rect });
  }

  // ── Hover popup: set a specific note on a step ───────────────────────────

  function setPopupNote(semi) {
    const active = lockedSynth || hoverSynth;
    if (!active) return;
    const { voice, step } = active;
    const midi = semOctToMidi(semi, noteOct);
    setSynth(p => {
      const n = [...p[voice]];
      const cur = n[step];
      if (!cur) {
        n[step] = [midi];
      } else if (cur.includes(midi)) {
        const next = cur.filter(m => m !== midi);
        n[step] = next.length > 0 ? next : null;
      } else {
        n[step] = [...cur, midi];
      }
      return { ...p, [voice]: n };
    });
  }

  // Changing octave just moves the keyboard view — existing chord notes stay
  function changePopupOct(o) { setNoteOct(o); }

  function onStepMouseEnter(voice, step, e) {
    clearTimeout(hoverTimerRef.current);
    if (lockedSynth && lockedSynth.voice !== voice) return; // don't hijack while locked to a different voice
    const rect = e.currentTarget.getBoundingClientRect();
    if (hoverSynth && hoverSynth.voice !== voice) {
      hoverTimerRef.current = setTimeout(() => setHoverSynth({ voice, step, rect }), 350);
    } else {
      setHoverSynth({ voice, step, rect });
    }
  }
  function onStepMouseLeave() {
    if (lockedSynth) return;
    hoverTimerRef.current = setTimeout(() => setHoverSynth(null), 140);
  }
  function onPopupMouseEnter() { clearTimeout(hoverTimerRef.current); }
  function onPopupMouseLeave() {
    if (lockedSynth) return;
    hoverTimerRef.current = setTimeout(() => setHoverSynth(null), 140);
  }

  // Unlock lock when mouse moves far from the locked step
  useEffect(() => {
    if (!lockedSynth) return;
    const handle = (e) => {
      if (popupRef.current) {
        const pr = popupRef.current.getBoundingClientRect();
        if (e.clientX >= pr.left - 12 && e.clientX <= pr.right + 12 &&
            e.clientY >= pr.top - 12 && e.clientY <= pr.bottom + 12) return;
      }
      const r = lockedSynth.rect;
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d > 160) { setLockedSynth(null); setHoverSynth(null); }
    };
    document.addEventListener('mousemove', handle);
    return () => document.removeEventListener('mousemove', handle);
  }, [lockedSynth]);

  // Unlock on click outside popup or synth step
  useEffect(() => {
    if (!lockedSynth) return;
    const handle = (e) => {
      if (e.target.closest?.('.groove-step-popup')) return;
      if (e.target.closest?.('.groove-step--synth')) return;
      setLockedSynth(null); setHoverSynth(null);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [lockedSynth]);

  const activePopup = lockedSynth || hoverSynth;
  const popupNotes = activePopup ? (synth[activePopup.voice]?.[activePopup.step] ?? []) : [];
  // Highlight keys matching the currently selected octave only
  const popupSems = new Set(
    popupNotes.filter(m => Math.floor(m / 12) - 1 === noteOct).map(m => m % 12)
  );

  // Compute popup position outside JSX to avoid IIFE-in-fragment parser issues
  const POP_W = 330, POP_H = 130;
  const POP_BLACK_INFO = [[1,0],[3,1],[6,3],[8,4],[10,5]];
  const POP_WK = 40;
  let popTop = 0, popLeft = 0;
  if (activePopup) {
    const r = activePopup.rect;
    popTop  = r.top - POP_H - 8 < 0 ? r.bottom + 6 : r.top - POP_H - 8;
    popLeft = Math.max(8, Math.min(window.innerWidth - POP_W - 8, r.left + r.width / 2 - POP_W / 2));
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
    <div className={`groove-panel${open ? ' open' : ''}${darkMode ? ' dark' : ''}`}>

      <div className={`groove-header${isRec ? ' groove-header--rec' : ''}`}>
        <span className="groove-title">GROOVEBOX</span>
        {isRec && <span className="groove-rec-indicator" />}
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
        <div className="groove-header-sep" />
        <div className="groove-seqlen">
          <button className={`groove-seqlen-btn${seqLen === 16 ? ' act' : ''}`} onClick={() => seqLen !== 16 && toggleSeqLen()}>16</button>
          <button className={`groove-seqlen-btn${seqLen === 32 ? ' act' : ''}`} onClick={() => seqLen !== 32 && toggleSeqLen()}>32</button>
          <span className="groove-seqlen-lbl">STEPS</span>
        </div>
        <button className="groove-mono-btn" onClick={clearPattern}>CLR STEPS</button>
        <div className="groove-header-sep" />
        <button className={`groove-rec-btn${isRec ? ' active' : ''}`} onClick={() => setIsRec(v => !v)}>
          <span className="groove-rec-dot" />RECORD AUTOMATION
        </button>
        <button className="groove-mono-btn" onClick={clearAuto}>CLR AUTO</button>
        <div className="groove-header-sep" />
        <button
          className={`groove-mono-btn groove-rec-capture${isCapturing ? ' active' : ''}`}
          onClick={isCapturing ? stopCapture : startCapture}
          title={isCapturing ? 'Stop recording' : 'Record to WAV'}
        >
          {isCapturing ? '⏹ STOP' : '⏺ REC'}
        </button>
        {isCapturing && (
          <canvas ref={waveCanvasRef} className="groove-waveform" width={80} height={22} />
        )}
        {mp3Url && !isCapturing && mp3Url !== 'empty' && (
          <a
            className="groove-mono-btn groove-dl-btn"
            href={mp3Url}
            download="groovebox.wav"
          >
            ↓ DOWNLOAD WAV
          </a>
        )}
        {mp3Url === 'empty' && !isCapturing && (
          <span className="groove-rec-empty">no audio captured — press play first</span>
        )}
        <button className="groove-close" onClick={() => { stop(); onClose(); }}>✕</button>
      </div>

      <div className="gv-panel">
        {DRUM_TRACKS.filter(t => t.id !== 'smpl').map(t => (
          <VoiceCol key={t.id}
            id={t.id} label={t.label} isSynth={false}
            muted={muted[t.id]} vp={vparams[t.id]} params={VOICE_PARAMS[t.id]}
            filter={trackFilter[t.id]} vol={trackVol[t.id]} pan={trackPan[t.id]}
            dly={dlyLvl[t.id]} rvb={rvbLvl[t.id]}
            onVParam={onVParamAuto} onFilter={onFilter} onVol={onVol} onPan={onPan}
            onDly={onDly} onRvb={onRvb} onToggleMute={onToggleMute}
          />
        ))}
        <SampleCol
          isSampling={isSampling} hasSample={hasSample}
          muted={muted.smpl}
          filter={trackFilter.smpl} vol={trackVol.smpl} pan={trackPan.smpl}
          dly={dlyLvl.smpl} rvb={rvbLvl.smpl}
          onSample={isSampling ? stopSampling : startSampling}
          onFilter={v => onFilter('smpl', v)} onVol={v => onVol('smpl', v)} onPan={v => onPan('smpl', v)}
          onDly={() => onDly('smpl')} onRvb={() => onRvb('smpl')} onToggleMute={() => onToggleMute('smpl')}
        />
        <div className="gv-divider-v" />
        {SYNTH_TRACKS.map(t => (
          <VoiceCol key={t.id}
            id={t.id} label={t.label} isSynth={true}
            muted={muted[t.id]} vp={vparams[t.id]} params={VOICE_PARAMS[t.id]}
            filter={trackFilter[t.id]} vol={trackVol[t.id]} pan={trackPan[t.id]}
            dly={dlyLvl[t.id]} rvb={rvbLvl[t.id]}
            onVParam={onVParamAuto} onFilter={onFilter} onVol={onVol} onPan={onPan}
            onDly={onDly} onRvb={onRvb} onToggleMute={onToggleMute}
          />
        ))}
      </div>

      <div className={`groove-seq${seqLen === 32 ? ' mode-32' : ''}`}>
        {DRUM_TRACKS.map(t => (
          <div key={t.id} className="groove-row">
            <span className="groove-label">{t.label}</span>
            <div className="groove-steps">
              {(seqLen === 32 ? GROUPS_32 : GROUPS).map((g, gi) => (
                <div key={g} className={`groove-group${gi % 2 === 1 ? ' groove-group--alt' : ''}`}>
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
            <div className="groove-prob">
              <Knob size={24} value={prob[t.id]} onChange={v => setProb(p => ({ ...p, [t.id]: v }))} />
              <span className="groove-prob-lbl">{Math.round(prob[t.id] * 100)}%</span>
            </div>
          </div>
        ))}

        <div className="groove-seq-divider" />

        {SYNTH_TRACKS.map(t => (
          <div key={t.id} className="groove-row">
            <span className="groove-label">{t.label}</span>
            <div className="groove-steps">
              {(seqLen === 32 ? GROUPS_32 : GROUPS).map((g, gi) => (
                <div key={g} className={`groove-group${gi % 2 === 1 ? ' groove-group--alt' : ''}`}>
                  {synth[t.id].slice(g, g + 4).map((notes, i) => {
                    const step    = g + i;
                    const isHover = (hoverSynth?.voice === t.id && hoverSynth?.step === step) ||
                                    (lockedSynth?.voice === t.id && lockedSynth?.step === step);
                    const root    = notes?.[0] ?? null;
                    return (
                      <button key={step}
                        className={`groove-step groove-step--synth${notes ? ' on' : ''}${isHover ? ' sel' : ''}${step === currentStep ? ' cur' : ''}${muted[t.id] ? ' muted' : ''}`}
                        onClick={(e) => clickSynthStep(t.id, step, e)}
                        onMouseEnter={e => onStepMouseEnter(t.id, step, e)}
                        onMouseLeave={onStepMouseLeave}
                      >
                        {root != null && (
                          <span className="groove-note-lbl">
                            {midiToNote(root)}{notes.length > 1 ? <span className="groove-chord-dot">+{notes.length - 1}</span> : null}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="groove-prob">
              <Knob size={24} value={prob[t.id]} onChange={v => setProb(p => ({ ...p, [t.id]: v }))} />
              <span className="groove-prob-lbl">{Math.round(prob[t.id] * 100)}%</span>
            </div>
          </div>
        ))}
      </div>

    </div>
    {activePopup && (
      <div className="groove-step-popup" ref={popupRef}
        style={{ top: popTop, left: popLeft, width: POP_W }}
        onMouseEnter={onPopupMouseEnter}
        onMouseLeave={onPopupMouseLeave}
      >
        <div className="gsp-header">
          <div className="gsp-oct-row">
            {[1,2,3,4,5].map(o => (
              <button key={o} className={`gsp-oct-btn${noteOct === o ? ' act' : ''}`}
                onClick={() => changePopupOct(o)}>{o}</button>
            ))}
            <span className="gsp-oct-lbl">OCT</span>
          </div>
          {popupNotes.length > 0 && (
            <span className="gsp-note-lbl">{popupNotes.map(m => midiToNote(m)).join(' ')}</span>
          )}
        </div>
        <div className="gsp-piano">
          {[0,2,4,5,7,9,11].map(semi => (
            <button key={semi}
              className={`gsp-wkey${popupSems.has(semi) ? ' act' : ''}`}
              onClick={() => setPopupNote(semi)}
              title={NOTE_NAMES[semi]}
            />
          ))}
          {POP_BLACK_INFO.map(([semi, wkIdx]) => (
            <button key={semi}
              className={`gsp-bkey${popupSems.has(semi) ? ' act' : ''}`}
              style={{ left: wkIdx * (POP_WK + 1) + Math.round(POP_WK * 0.63) }}
              onClick={() => setPopupNote(semi)}
              title={NOTE_NAMES[semi]}
            />
          ))}
        </div>
      </div>
    )}
    </>
  );
}
