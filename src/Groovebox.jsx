import { useState, useEffect, useRef, useCallback } from 'react';

const TRACKS = [
  { id: 'kick',  label: 'KICK' },
  { id: 'snare', label: 'SNARE' },
  { id: 'clap',  label: 'CLAP' },
  { id: 'hh_c',  label: 'HH' },
  { id: 'hh_o',  label: 'OPEN' },
  { id: 'perc',  label: 'PERC' },
];

const STEPS = 16;

function makeEmpty() {
  return Object.fromEntries(TRACKS.map(t => [t.id, new Array(STEPS).fill(0)]));
}

// ── Drum synthesis ────────────────────────────────────────────────────────────

function synthKick(ctx, t, vol) {
  const osc = ctx.createOscillator();
  const g   = ctx.createGain();
  osc.frequency.setValueAtTime(120, t);
  osc.frequency.exponentialRampToValueAtTime(0.001, t + 0.55);
  g.gain.setValueAtTime(vol * 1.8, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t); osc.stop(t + 0.6);

  // click transient
  const click = ctx.createOscillator();
  const cg    = ctx.createGain();
  click.frequency.value = 3000;
  cg.gain.setValueAtTime(vol * 0.5, t);
  cg.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
  click.connect(cg); cg.connect(ctx.destination);
  click.start(t); click.stop(t + 0.02);
}

function synthSnare(ctx, t, vol) {
  // noise body
  const buf = ctx.createBuffer(1, ctx.sampleRate * 0.22, ctx.sampleRate);
  const d   = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const ns  = ctx.createBufferSource(); ns.buffer = buf;
  const nf  = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 2800; nf.Q.value = 0.6;
  const ng  = ctx.createGain();
  ng.gain.setValueAtTime(vol * 0.9, t);
  ng.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
  ns.connect(nf); nf.connect(ng); ng.connect(ctx.destination);
  ns.start(t);

  // tone
  const osc = ctx.createOscillator(); osc.type = 'triangle'; osc.frequency.value = 170;
  const og  = ctx.createGain();
  og.gain.setValueAtTime(vol * 0.35, t);
  og.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
  osc.connect(og); og.connect(ctx.destination);
  osc.start(t); osc.stop(t + 0.22);
}

function synthClap(ctx, t, vol) {
  [0, 0.012, 0.028].forEach((off, i) => {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.14, ctx.sampleRate);
    const d   = buf.getChannelData(0);
    for (let j = 0; j < d.length; j++) d[j] = Math.random() * 2 - 1;
    const ns  = ctx.createBufferSource(); ns.buffer = buf;
    const f   = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400; f.Q.value = 0.7;
    const g   = ctx.createGain();
    const st  = t + off;
    g.gain.setValueAtTime(vol * (i === 0 ? 0.65 : 0.5), st);
    g.gain.exponentialRampToValueAtTime(0.001, st + 0.1);
    ns.connect(f); f.connect(g); g.connect(ctx.destination);
    ns.start(st);
  });
}

function synthHihatClosed(ctx, t, vol) {
  const len = ctx.sampleRate * 0.05;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d   = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const ns  = ctx.createBufferSource(); ns.buffer = buf;
  const f   = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 9000;
  const g   = ctx.createGain();
  g.gain.setValueAtTime(vol * 0.55, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
  ns.connect(f); f.connect(g); g.connect(ctx.destination);
  ns.start(t);
}

function synthHihatOpen(ctx, t, vol) {
  const len = ctx.sampleRate * 0.38;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d   = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const ns  = ctx.createBufferSource(); ns.buffer = buf;
  const f   = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
  const g   = ctx.createGain();
  g.gain.setValueAtTime(vol * 0.45, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
  ns.connect(f); f.connect(g); g.connect(ctx.destination);
  ns.start(t);
}

function synthPerc(ctx, t, vol) {
  const osc = ctx.createOscillator();
  osc.frequency.setValueAtTime(700, t);
  osc.frequency.exponentialRampToValueAtTime(80, t + 0.14);
  osc.type = 'sine';
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol * 0.65, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t); osc.stop(t + 0.16);
}

const SYNTHS = { kick: synthKick, snare: synthSnare, clap: synthClap, hh_c: synthHihatClosed, hh_o: synthHihatOpen, perc: synthPerc };

// ── Component ─────────────────────────────────────────────────────────────────

export function Groovebox({ open, onClose, darkMode }) {
  const [playing, setPlaying]       = useState(false);
  const [bpm, setBpm]               = useState(128);
  const [pattern, setPattern]       = useState(makeEmpty);
  const [currentStep, setCurrentStep] = useState(-1);
  const [volume, setVolume]         = useState(0.78);

  const audioCtxRef      = useRef(null);
  const schedulerRef     = useRef(null);
  const nextNoteTimeRef  = useRef(0);
  const currentStepRef   = useRef(0);
  const bpmRef           = useRef(bpm);
  const patternRef       = useRef(pattern);
  const volumeRef        = useRef(volume);
  const stepSetRef       = useRef(null);

  useEffect(() => { bpmRef.current    = bpm;    }, [bpm]);
  useEffect(() => { patternRef.current = pattern; }, [pattern]);
  useEffect(() => { volumeRef.current  = volume;  }, [volume]);
  useEffect(() => { stepSetRef.current = setCurrentStep; });

  const tick = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    while (nextNoteTimeRef.current < ctx.currentTime + 0.1) {
      const step = currentStepRef.current;
      const t    = nextNoteTimeRef.current;
      const pat  = patternRef.current;
      const vol  = volumeRef.current;
      TRACKS.forEach(({ id }) => { if (pat[id][step]) SYNTHS[id](ctx, t, vol); });
      stepSetRef.current?.(step);
      nextNoteTimeRef.current += (60 / bpmRef.current) / 4;
      currentStepRef.current   = (step + 1) % STEPS;
    }
    schedulerRef.current = setTimeout(tick, 22);
  }, []);

  const play = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();
    currentStepRef.current  = 0;
    nextNoteTimeRef.current = ctx.currentTime + 0.05;
    tick();
    setPlaying(true);
  }, [tick]);

  const stop = useCallback(() => {
    clearTimeout(schedulerRef.current);
    schedulerRef.current = null;
    setPlaying(false);
    setCurrentStep(-1);
  }, []);

  // cleanup
  useEffect(() => () => clearTimeout(schedulerRef.current), []);

  const toggleStep = (trackId, step) => {
    setPattern(prev => ({
      ...prev,
      [trackId]: prev[trackId].map((v, i) => i === step ? 1 - v : v),
    }));
  };

  const clear = () => { stop(); setPattern(makeEmpty()); };

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

        <button className="groove-mono-btn" onClick={clear}>CLR</button>
        <button className="groove-close" onClick={() => { stop(); onClose(); }}>✕</button>
      </div>

      <div className="groove-grid">
        {TRACKS.map(({ id, label }) => (
          <div key={id} className="groove-row">
            <span className="groove-label">{label}</span>
            <div className="groove-steps">
              {[0, 4, 8, 12].map(g => (
                <div key={g} className="groove-group">
                  {pattern[id].slice(g, g + 4).map((on, i) => {
                    const step = g + i;
                    return (
                      <button
                        key={step}
                        className={`groove-step${on ? ' on' : ''}${step === currentStep ? ' cur' : ''}`}
                        onClick={() => toggleStep(id, step)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
