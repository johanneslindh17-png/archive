import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useSunMode } from './hooks/useSunMode.js';
import * as d3 from 'd3';
import {
  COUNTRIES, GENRES, REGIONS, REGION_COUNT, COUNTRY_REGION,
  CITY_BANDS, W, H, LEFT, RIGHT, ERA_MIN, ERA_MAX,
  eraY, YEAR_LINES, YEAR_LABELS,
} from './data/constants.js';
import { NODES } from './data/nodes.js';
import { EDGES } from './data/edges.js';
import { PHOTOS } from './data/photos.js';

// ── Variable-width region layout ─────────────────────────────────────────────
// Widths are proportional to node count, with a minimum of 50 % of the average.
// Computed once at module load since NODES / REGIONS are static.
const _regionKeys = Object.keys(REGIONS).sort((a, b) => REGIONS[a].order - REGIONS[b].order);
const _counts = {};
NODES.forEach(n => {
  const r = COUNTRY_REGION[n.country] || 'DE';
  _counts[r] = (_counts[r] || 0) + 1;
});
const _total   = NODES.length;
const _SPAN    = W - LEFT - RIGHT; // total drawable width between sidebars
const _avgW    = _SPAN / _regionKeys.length;
const _raw = {};
// 55 % equal-weight + 45 % proportional → subtle differences, no tiny slivers
_regionKeys.forEach(k => {
  const prop = ((_counts[k] || 0) / _total) * _SPAN;
  _raw[k] = _avgW * 0.55 + prop * 0.45;
});
const _rawSum = Object.values(_raw).reduce((a, b) => a + b, 0);
const REGION_WIDTHS = {};
_regionKeys.forEach(k => { REGION_WIDTHS[k] = _raw[k] * _SPAN / _rawSum; });
const REGION_LEFTS = {};
let _cx = LEFT;
_regionKeys.forEach(k => { REGION_LEFTS[k] = _cx; _cx += REGION_WIDTHS[k]; });

// Tile width for the infinite horizontal wrap.
// Must be W - LEFT so that the next copy's leftmost content (LATAM divider
// at SVG x = LEFT + TILE_W = W) lands exactly at the right edge of the screen
// at minimum zoom — regardless of viewport width. Using _SPAN (W-LEFT-RIGHT)
// was too narrow: on wider screens the next tile's content peeked out before
// the right-strip could cover it.
const TILE_W = W - LEFT; // = 1328

// ── Colorful mode palettes (module-level — never recreated) ──────────────────
const TYPE_COLORS = {
  artist: { light:{ fill:'#ddeeff', stroke:'#4a7fc1', text:'#0a2855' }, dark:{ fill:'#0d1828', stroke:'#7aaade', text:'#aaccee' } },
  label:  { light:{ fill:'#fff3e0', stroke:'#c87828', text:'#5a2800' }, dark:{ fill:'#1e1100', stroke:'#d99050', text:'#eebb88' } },
  venue:  { light:{ fill:'#e0f5e4', stroke:'#3a9a50', text:'#0a3814' }, dark:{ fill:'#081a0d', stroke:'#6aaa80', text:'#99ddaa' } },
  moment:  { light:{ fill:'#f4e0ff', stroke:'#8844cc', text:'#3a0860' }, dark:{ fill:'#14082a', stroke:'#aa77dd', text:'#ccaaee' } },
  style:   { light:{ fill:'#fffbe0', stroke:'#b07800', text:'#3a2800' }, dark:{ fill:'#1a1400', stroke:'#d4a020', text:'#eedd88' } },
  culture: { light:{ fill:'#fce8e0', stroke:'#bb3333', text:'#3a0808' }, dark:{ fill:'#1c0808', stroke:'#ee6655', text:'#ffccbb' } },
  channel: { light:{ fill:'#d8f5f5', stroke:'#1a8888', text:'#083030' }, dark:{ fill:'#040f0f', stroke:'#44aaaa', text:'#88dddd' } },
};
const EDGE_TYPE_COLORS = {
  lineage:'#3355cc', roster:'#c86000', influence:'#009966', aesthetic:'#cc44aa',
};

// Swatches used to fill the colorbtn background when a theme is active
const THEME_SWATCHES = {
  type:  ['#4a7fc1','#c87828','#3a9a50','#8844cc'],
  genre: ['hsl(45,72%,55%)','hsl(205,62%,52%)','hsl(155,58%,44%)','hsl(270,55%,52%)','hsl(12,72%,48%)'],
  void:  ['#0cc8c0','#44a8b8','#061416','#0a2828'],
  acid:  ['#aadd00','#80aa00','#0b1400','#1a2800'],
  rust:  ['#dd5500','#cc7744','#1c0900','#3a1800'],
};

const GENRE_COLORS = {
  disco:       { light:{fill:'#fff8e0',stroke:'#c8a000',text:'#5a3800'}, dark:{fill:'#1a1200',stroke:'#e0b800',text:'#eecc44'} },
  soul:        { light:{fill:'#ffe8d0',stroke:'#c86030',text:'#4a1800'}, dark:{fill:'#1e0c00',stroke:'#e07040',text:'#eea070'} },
  chicago:     { light:{fill:'#ddeeff',stroke:'#2255bb',text:'#0a1e55'}, dark:{fill:'#080f28',stroke:'#4477cc',text:'#88aaee'} },
  deep:        { light:{fill:'#d0e8ff',stroke:'#1a4499',text:'#081844'}, dark:{fill:'#050d1e',stroke:'#3366bb',text:'#6699dd'} },
  giegling:    { light:{fill:'#d8f0e8',stroke:'#227755',text:'#0a2e1e'}, dark:{fill:'#050f0a',stroke:'#449966',text:'#77cc99'} },
  minimal:     { light:{fill:'#ede8f8',stroke:'#6644aa',text:'#2a1660'}, dark:{fill:'#0e0a1e',stroke:'#8866cc',text:'#aa88ee'} },
  detroit:     { light:{fill:'#ffe0d0',stroke:'#cc3300',text:'#4a1000'}, dark:{fill:'#1e0800',stroke:'#ee4422',text:'#ee9977'} },
  techno:      { light:{fill:'#ffd8d8',stroke:'#aa2222',text:'#440808'}, dark:{fill:'#1a0505',stroke:'#cc4444',text:'#ee8888'} },
  techhouse:   { light:{fill:'#ffe8cc',stroke:'#bb5500',text:'#442000'}, dark:{fill:'#1a0d00',stroke:'#dd7722',text:'#ee9944'} },
  melodic:     { light:{fill:'#ffe0f0',stroke:'#cc2277',text:'#440022'}, dark:{fill:'#1a0012',stroke:'#ee44aa',text:'#ee88cc'} },
  ambient:     { light:{fill:'#d8eef8',stroke:'#1a6688',text:'#082232'}, dark:{fill:'#050d14',stroke:'#3388aa',text:'#66aacc'} },
  experimental:{ light:{fill:'#eee0f8',stroke:'#7722cc',text:'#2a0855'}, dark:{fill:'#0e0520',stroke:'#9944ee',text:'#cc88ff'} },
};

// ── Cosmetic mono-palette themes ─────────────────────────────────────────────
const MONO_PALETTES = {
  // Void — electric cyan on near-black.
  void: {
    accent:  '#00c8c0',
    bg:      { light:'#ffffff', dark:'#020508' },
    surface: { light:'#ffffff', dark:'#050c12' },
    border:  { light:'#99ddee', dark:'#0a2530' },
    nodeBg:  { light:'#ffffff', dark:'#050c12' },
    artist: { light:{fill:'#b8e8f4',stroke:'#00a0aa',text:'#003440'}, dark:{fill:'#061416',stroke:'#00c8c0',text:'#44eeea'} },
    label:  { light:{fill:'#88ccd8',stroke:'#006878',text:'#002430'}, dark:{fill:'#04100e',stroke:'#008888',text:'#22b0aa'} },
    venue:  { light:{fill:'#44a8b8',stroke:'#004858',text:'#002a34'}, dark:{fill:'#030a0c',stroke:'#005868',text:'#008888'} },
    moment:  { light:{fill:'#107888',stroke:'#002838',text:'#eafaff'}, dark:{fill:'#020608',stroke:'#003840',text:'#006060'} },
    style:   { light:{fill:'#c8e8f0',stroke:'#0088a0',text:'#002830'}, dark:{fill:'#030e12',stroke:'#00a8c0',text:'#33d0e8'} },
    culture: { light:{fill:'#f8e8e0',stroke:'#882222',text:'#2a0808'}, dark:{fill:'#180606',stroke:'#cc4444',text:'#ffaaaa'} },
  },
  // Acid — acid lime on black.
  acid: {
    accent:  '#aadd00',
    bg:      { light:'#ffffff', dark:'#040500' },
    surface: { light:'#ffffff', dark:'#070900' },
    border:  { light:'#bbdd66', dark:'#192800' },
    nodeBg:  { light:'#ffffff', dark:'#070900' },
    artist: { light:{fill:'#d4f0a0',stroke:'#88bb00',text:'#1a3300'}, dark:{fill:'#0b1400',stroke:'#aadd00',text:'#ccff44'} },
    label:  { light:{fill:'#b4d870',stroke:'#668800',text:'#112200'}, dark:{fill:'#080c00',stroke:'#88aa00',text:'#99cc00'} },
    venue:  { light:{fill:'#80aa00',stroke:'#334400',text:'#f4ffea'}, dark:{fill:'#060800',stroke:'#557700',text:'#88aa00'} },
    moment:  { light:{fill:'#507700',stroke:'#1a2200',text:'#e8fcd4'}, dark:{fill:'#040500',stroke:'#334400',text:'#557700'} },
    style:   { light:{fill:'#ccee88',stroke:'#558800',text:'#1a2800'}, dark:{fill:'#090c00',stroke:'#99cc00',text:'#bbee44'} },
    culture: { light:{fill:'#d4ee88',stroke:'#446600',text:'#182200'}, dark:{fill:'#0a0e00',stroke:'#88bb00',text:'#ccee44'} },
  },
  // Rust — iron orange on near-black.
  rust: {
    accent:  '#dd5500',
    bg:      { light:'#ffffff', dark:'#080400' },
    surface: { light:'#ffffff', dark:'#100500' },
    border:  { light:'#eecc99', dark:'#381200' },
    nodeBg:  { light:'#ffffff', dark:'#100500' },
    artist: { light:{fill:'#fdd0b0',stroke:'#cc5500',text:'#440e00'}, dark:{fill:'#1c0900',stroke:'#ee6600',text:'#ff9944'} },
    label:  { light:{fill:'#edb888',stroke:'#aa3300',text:'#330800'}, dark:{fill:'#140500',stroke:'#bb4400',text:'#dd7733'} },
    venue:  { light:{fill:'#cc7744',stroke:'#772200',text:'#fff4ec'}, dark:{fill:'#0c0300',stroke:'#883300',text:'#aa5522'} },
    moment:  { light:{fill:'#994422',stroke:'#440e00',text:'#fde4d0'}, dark:{fill:'#080200',stroke:'#441100',text:'#773311'} },
    style:   { light:{fill:'#ffdd99',stroke:'#bb7700',text:'#3a2000'}, dark:{fill:'#140900',stroke:'#dd9900',text:'#ffcc44'} },
    culture: { light:{fill:'#ffd0b0',stroke:'#993300',text:'#2a0800'}, dark:{fill:'#140600',stroke:'#cc5522',text:'#ffbb88'} },
  },
};

/** Returns {fill, stroke, text} for a node given the active colour theme, or null. */
function getThemeColors(n, theme, dm) {
  if (!theme) return null;
  if (theme === 'type')  return dm ? TYPE_COLORS[n.type]?.dark  : TYPE_COLORS[n.type]?.light;
  if (theme === 'genre') return dm ? GENRE_COLORS[n.genre]?.dark : GENRE_COLORS[n.genre]?.light;
  if (theme === 'country') {
    const c = COUNTRIES[n.country]?.color || '#888888';
    return { fill: c + '22', stroke: c, text: c };
  }
  if (theme === 'era') {
    const t = Math.max(0, Math.min(1, (n.era - ERA_MIN) / (ERA_MAX - ERA_MIN)));
    const hex = d3.color(d3.interpolateRdYlBu(1 - t * 0.85)).formatHex();
    return { fill: hex + '22', stroke: hex, text: hex };
  }
  if (MONO_PALETTES[theme]) {
    const p = MONO_PALETTES[theme][n.type] || MONO_PALETTES[theme].artist;
    return dm ? p.dark : p.light;
  }
  return null;
}

/** Centre X of a region column in SVG coordinates */
function regionCenter(key) {
  const l = REGION_LEFTS[key];
  if (l === undefined) return (W + LEFT) / 2;
  return l + REGION_WIDTHS[key] / 2;
}

/**
 * Cities in a region, sorted center-out by node count.
 * Most populous city lands in the middle; less populous ones spread
 * alternately right then left from that centre.
 */
function sortedCities(regionKey) {
  const all = CITY_BANDS[regionKey] || [];
  const counted = all
    .map(c => ({
      city: c,
      count: NODES.filter(n =>
        (COUNTRY_REGION[n.country] || 'DE') === regionKey &&
        (n.city || 'Various') === c
      ).length,
    }))
    .filter(x => x.count > 0)
    .sort((a, b) => b.count - a.count);

  const n = counted.length;
  if (!n) return [];
  const result   = new Array(n);
  const center   = Math.floor(n / 2);
  const positions = [center];
  for (let d = 1; d < n; d++) {
    if (center + d < n) positions.push(center + d);
    if (center - d >= 0) positions.push(center - d);
  }
  counted.forEach((item, i) => { result[positions[i]] = item.city; });
  return result;
}

function formatRelease(title) {
  // Strip all " characters
  const t = title.replace(/"/g, '').trim();
  // If "Track — Artist", reorder to "Artist - Track"
  if (t.includes(' — ')) {
    const idx = t.indexOf(' — ');
    const track = t.slice(0, idx).trim();
    const artist = t.slice(idx + 3).trim();
    return `${artist} - ${track}`;
  }
  return t;
}

// ── Desc label linking ───────────────────────────────────────────────────────
// Build label → node-id map once at module load. Labels sorted longest-first
// so "Four Tet" matches before "Tet", etc.
const _LABEL_MAP = {};
NODES.forEach(n => { _LABEL_MAP[n.label] = n.id; });
const _SORTED_LABELS = Object.keys(_LABEL_MAP).sort((a, b) => b.length - a.length);
const _DESC_REGEX = _SORTED_LABELS.length
  ? new RegExp(_SORTED_LABELS.map(l => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g')
  : null;

/**
 * Parse a desc string and return an array of strings/JSX where every
 * mention of another node's label becomes a clickable highlighted span.
 * Self-references (selId) are left as plain text.
 */
function renderDesc(text, selId, onNodeClick) {
  if (!text || !_DESC_REGEX) return text;
  _DESC_REGEX.lastIndex = 0;
  const parts = [];
  let pos = 0, m;
  while ((m = _DESC_REGEX.exec(text)) !== null) {
    const nodeId = _LABEL_MAP[m[0]];
    if (m.index > pos) parts.push(text.slice(pos, m.index));
    if (nodeId && nodeId !== selId) {
      parts.push(
        <span key={m.index} className="desc-node-link"
          onClick={e => { e.stopPropagation(); onNodeClick(nodeId); }}>
          {m[0]}
        </span>
      );
    } else {
      parts.push(m[0]);
    }
    pos = m.index + m[0].length;
  }
  if (pos < text.length) parts.push(text.slice(pos));
  return parts;
}

const PHOTO_COLOR_SAMPLES = 20;

async function samplePhotoColors(url) {
  try {
    const res = await fetch(url, { mode: 'cors' });
    if (!res.ok) return null;
    const blob = await res.blob();
    const objUrl = URL.createObjectURL(blob);
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = objUrl; });
    const S = 40;
    const N = PHOTO_COLOR_SAMPLES;
    const c = document.createElement('canvas');
    c.width = S; c.height = S;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, S, S);
    URL.revokeObjectURL(objUrl);
    // Sample N evenly-spaced vertical strips — one color per strip
    return Array.from({ length: N }, (_, i) => {
      const x = Math.round(i * (S - 1) / (N - 1));
      const d = ctx.getImageData(x, 0, 1, S).data;
      let r = 0, g = 0, b = 0;
      for (let j = 0; j < d.length; j += 4) { r += d[j]; g += d[j+1]; b += d[j+2]; }
      return `rgb(${Math.round(r/S)},${Math.round(g/S)},${Math.round(b/S)})`;
    });
  } catch (e) { return null; }
}

// Returns where the line (x1,y1)→(x2,y2) enters a rect, backed off by `gap` px.
// Used so connector arrows stop at the highlight box edge rather than overlapping it.
function lineRectEntry(x1, y1, x2, y2, rL, rT, rR, rB, gap = 10) {
  const dx = x2 - x1, dy = y2 - y1;
  let tBest = 1;
  if (Math.abs(dx) > 0.01) {
    for (const ex of [rL, rR]) {
      const t = (ex - x1) / dx;
      if (t > 0 && t < tBest) { const y = y1 + t * dy; if (y >= rT && y <= rB) tBest = t; }
    }
  }
  if (Math.abs(dy) > 0.01) {
    for (const ey of [rT, rB]) {
      const t = (ey - y1) / dy;
      if (t > 0 && t < tBest) { const x = x1 + t * dx; if (x >= rL && x <= rR) tBest = t; }
    }
  }
  const len = Math.sqrt(dx * dx + dy * dy);
  const tFinal = Math.max(0, tBest - gap / len);
  return { x: x1 + tFinal * dx, y: y1 + tFinal * dy };
}

const TOUR_STEPS = [
  {
    id: 'map',
    title: 'A LIVING MAP',
    body: 'Welcome. Six decades of electronic music — 650+ artists, labels, clubs, and pivotal moments, all connected by real, documented lines of influence and lineage. Take your time.',
    getTarget: () => null,
    cardSide: 'center',
    onEnter: null,
    delay: 0,
  },
  {
    id: 'node',
    title: 'EVERY NODE IS A STORY',
    body: "We just opened Marcel Dettmann's profile — Berghain resident, one of Berlin's most influential selectors. Scroll the panel to see his connections, releases, and full context. Click any highlighted name to follow the thread.",
    getTarget: () => document.querySelector('.dp.open'),
    cardSide: 'persist',
    onEnter: ctx => {
      ctx.setPanelOnLeft(false);
      ctx.setPanelX(null);
      ctx.tourSelectNode('dettmann');
      ctx.scrollToNode('dettmann');
    },
    delay: 500,
  },
  {
    id: 'player',
    title: 'HEAR THE HISTORY',
    body: "When an artist has music on Bandcamp, the player is built right in. It keeps playing as you explore — the whole history, with a soundtrack.",
    getTarget: () => document.querySelector('.player-inline'),
    cardSide: 'persist',
    onEnter: ctx => { ctx.setPlayingNodeId('dettmann'); },
    delay: 200,
  },
  {
    id: 'search',
    title: 'FIND ANYTHING',
    body: 'Type an artist, label, or venue and jump straight to it. The whole archive is searchable in seconds — try clicking the result above.',
    getTarget: () => document.querySelector('.topbar input'),
    cardSide: 'persist',
    onEnter: ctx => {
      ctx.setSearchFocus(true);
      ctx.setSearchQ('');
      const text = 'Aphex Twin';
      let i = 0;
      const iv = setInterval(() => { ctx.setSearchQ(text.slice(0, ++i)); if (i >= text.length) clearInterval(iv); }, 120);
      return () => clearInterval(iv);
    },
    delay: 200,
  },
];

export default function App() {
  const svgRef = useRef(null);
  const pixelCanvasRef = useRef(null);
  const textCanvasRef = useRef(null);
  const persistCardRef = useRef(null);
  const [expanded, setExpanded] = useState(null);
  const [searchQ, setSearchQ] = useState('');
  const [selected, setSelected] = useState(null);
  const [history, setHistory] = useState([]);
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [photoColors, setPhotoColors] = useState(null);
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem('archiveUnlocked') === '1');
  const [trialCount, setTrialCount] = useState(() => parseInt(localStorage.getItem('archiveTrialCount') || '0', 10));
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  const TRIAL_LIMIT = 15;

  useEffect(() => {
    setPhotoColors(null);
    const node = NODES.find(n => n.id === selected);
    if (!node || !PHOTOS[node.id]) return;
    let cancelled = false;
    samplePhotoColors(PHOTOS[node.id].url).then(colors => {
      if (!cancelled) setPhotoColors(colors);
    });
    return () => { cancelled = true; };
  }, [selected]);

  function selectNode(id) {
    if (id === null) {
      setSelected(null);
      setHistory([]);
    } else {
      if (!unlocked) {
        const next = trialCount + 1;
        localStorage.setItem('archiveTrialCount', next);
        setTrialCount(next);
        if (next > TRIAL_LIMIT) { setPaywallOpen(true); return; }
      }
      // Continue trail from pinned node too, not just from an open panel
      setHistory(prev => (selected || pinned) ? [...prev, (selected || pinned)] : prev);
      setSelected(id);
      setPinned(null);
    }
  }

  async function verifyLicense() {
    if (!licenseKey.trim()) return;
    setVerifying(true);
    setVerifyError('');
    try {
      const existingInstanceId = localStorage.getItem('archiveInstanceId');
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: licenseKey.trim(), instanceId: existingInstanceId }),
      });
      const data = await res.json();
      if (data.valid) {
        localStorage.setItem('archiveUnlocked', '1');
        if (data.instanceId) localStorage.setItem('archiveInstanceId', data.instanceId);
        setUnlocked(true);
        setPaywallOpen(false);
        setLicenseKey('');
      } else {
        setVerifyError('Invalid license key. Check your purchase email and try again.');
      }
    } catch {
      setVerifyError('Could not connect. Check your internet connection and try again.');
    }
    setVerifying(false);
  }

  // Close panel but keep the node highlighted and breadcrumb visible
  function closePanel() {
    setPinned(selected);
    setSelected(null);
    // history intentionally preserved so breadcrumb stays intact
  }

  // Clear everything — selection, pin, history
  function clearAll() {
    setSelected(null);
    setPinned(null);
    setHistory([]);
    setPanelOnLeft(false);
    setPanelX(null);
  }

  // Fly back to the overview zoom level, keeping the current vertical era centred
  function flyHome() {
    if (!zoomRef.current || !svgRef.current) return;
    const k  = window.innerWidth / W;
    const vh = window.innerHeight;
    const live = d3.zoomTransform(svgRef.current);
    // Which SVG y is currently at the vertical centre of the viewport?
    const svgCy = (vh / 2 - live.y) / live.k;
    // At the new scale, keep that same SVG y centred — clamped to valid range
    const ty = Math.min(0, Math.max(vh - H * k, vh / 2 - svgCy * k));
    const x1 = 0, y1 = ty, k1 = k;
    const x0 = live.x, y0 = live.y, k0 = live.k;
    const target = d3.zoomIdentity.translate(x1, y1).scale(k1);

    // Use a manual tween so x/y/k interpolate linearly and simultaneously —
    // d3's default interpolateZoom creates an unwanted "zoom-out then pan" arc.
    animatingRef.current = true;
    d3.select(svgRef.current)
      .transition().duration(480).ease(d3.easeCubicInOut)
      .tween('fly-home', () => t => {
        const x  = x0 + (x1 - x0) * t;
        const y  = y0 + (y1 - y0) * t;
        const kk = k0 + (k1 - k0) * t;
        svgRef.current.__zoom = d3.zoomIdentity.translate(x, y).scale(kk);
        if (svgGRef.current)
          svgGRef.current.style.transform = `translate(${x}px,${y}px) scale(${kk})`;
      })
      .on('end', () => {
        animatingRef.current = false;
        if (svgRef.current) svgRef.current.__zoom = target;
        setTf(target);
      });
  }

  function goBack() {
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setSelected(prev || null);
    if (prev) scrollToNode(prev);
  }

  // Jump directly to any item in the breadcrumb trail
  function jumpToHistory(idx) {
    const id = history[idx];
    if (!id) return;
    setHistory(h => h.slice(0, idx));
    setSelected(id);
    setPinned(null);
    scrollToNode(id);
  }

  // Search suggestions — ordered: exact-start matches first, then includes
  const searchMatches = useMemo(() => {
    if (!searchQ.trim()) return [];
    const q = searchQ.toLowerCase();
    return NODES
      .filter(n => n.label.toLowerCase().includes(q))
      .sort((a, b) => {
        const al = a.label.toLowerCase(), bl = b.label.toLowerCase();
        const as_ = al.startsWith(q), bs_ = bl.startsWith(q);
        if (as_ !== bs_) return as_ ? -1 : 1;
        return al.localeCompare(bl);
      })
      .slice(0, 8);
  }, [searchQ]);

  // Smoothly navigate to node `id` — vertical scroll only, no horizontal pan.
  // centerFactor: kept for call-site compatibility but no longer affects x.
  // When centerFactor < 1, skip movement if the node's era is already on screen.
  function scrollToNode(id, centerFactor = 1.0) {
    const p = positions[id];
    if (!p || !zoomRef.current || !svgRef.current) return;
    const live = d3.zoomTransform(svgRef.current);
    const k1  = live.k;

    // For gentle navigations (panel connection clicks): skip if node is comfortably
    // in the middle 60% of the screen. Scroll to centre if within 20% of either edge.
    if (centerFactor < 1.0) {
      const sy   = p.y * k1 + live.y;
      const EDGE = window.innerHeight * 0.20;
      if (sy > EDGE && sy < window.innerHeight - EDGE) {
        positionPanel(id, live);
        return;
      }
    }

    // Only move vertically — x stays exactly where it is.
    const x1 = live.x;
    const tyFull = window.innerHeight / 2 - p.y * k1;
    const y1 = live.y + (tyFull - live.y) * 1.0;
    const target = d3.zoomIdentity.translate(x1, y1).scale(k1);
    positionPanel(id, target);

    const x0 = live.x, y0 = live.y, k0 = live.k;
    animatingRef.current = true;
    d3.select(svgRef.current)
      .transition().duration(220).ease(d3.easeCubicOut)
      .tween('scroll-to-node', () => t => {
        const y  = y0 + (y1 - y0) * t;
        svgRef.current.__zoom = d3.zoomIdentity.translate(x1, y).scale(k1);
        if (svgGRef.current)
          svgGRef.current.style.transform = `translate(${x1}px,${y}px) scale(${k1})`;
      })
      .on('end', () => {
        animatingRef.current = false;
        if (svgRef.current) svgRef.current.__zoom = target;
        setTf(target);
      });
  }

  // Smart panel positioning — picks the less-crowded side and sits close to centre,
  // nudging outward (up to MAX_NUDGE px) to clear any directly-connected node.
  // liveTf must be the transform AT which the graph will be displayed
  // (the scrollToNode target, or d3.zoomTransform(svgRef.current) for in-place clicks).
  function positionPanel(nodeId, liveTf) {
    const PANEL_W  = 360;
    const vw       = window.innerWidth;
    const cx       = vw / 2;
    const GAP      = vw * 0.2; // inner edge sits ~20 % in from the near screen edge
    const SAFE     = 24;   // min gap from screen edges
    const NODE_CLR = 18;   // clearance radius around a highlighted node (px)
    const MAX_NUDGE = 130; // don't nudge further than this — keep panel near centre

    // Screen X of selected node + all directly-connected visible nodes
    const ids = new Set([nodeId]);
    visibleEdges.forEach(e => {
      if (e.from === nodeId) ids.add(e.to);
      if (e.to === nodeId)   ids.add(e.from);
    });

    const sxs = [...ids].map(id => {
      const p = positions[id];
      if (!p) return null;
      return p.x * liveTf.k + liveTf.x;
    }).filter(x => x !== null);

    if (!sxs.length) { setPanelOnLeft(false); setPanelX(cx + GAP); return; }

    // Put the panel on whichever side has fewer highlighted nodes
    const onLeft = sxs.filter(x => x < cx).length < sxs.filter(x => x >= cx).length;

    let panelLeft;
    if (onLeft) {
      // Default: panel's right edge sits at cx − GAP
      panelLeft = cx - GAP - PANEL_W;
      const covered = sxs.filter(x => x >= panelLeft && x <= panelLeft + PANEL_W);
      if (covered.length) {
        const needed = Math.min(...covered) - NODE_CLR - PANEL_W;
        if (panelLeft - needed <= MAX_NUDGE) panelLeft = needed;
      }
      panelLeft = Math.max(SAFE, panelLeft);
    } else {
      // Default: panel's left edge sits at cx + GAP
      panelLeft = cx + GAP;
      const covered = sxs.filter(x => x >= panelLeft && x <= panelLeft + PANEL_W);
      if (covered.length) {
        const needed = Math.max(...covered) + NODE_CLR;
        if (needed - panelLeft <= MAX_NUDGE) panelLeft = needed;
      }
      panelLeft = Math.min(vw - PANEL_W - SAFE, panelLeft);
    }

    setPanelOnLeft(onLeft);
    setPanelX(panelLeft);
  }

  // Called when user picks a suggestion — select the node and fly to it
  function pickSearchResult(id) {
    setSearchQ('');
    setSearchFocus(false);
    const p = positions[id];
    if (p) {
      // After scroll the node will be near centre, so panel goes on whichever side
      // it currently sits; default to right unless already on the right half
      const screenX = p.x * tf.k + tf.x;
      setPanelOnLeft(screenX > window.innerWidth / 2);
    }
    setPanelX(null);
    selectNode(id);
    scrollToNode(id);
  }

  const [onboardStep, setOnboardStep] = useState(() =>
    localStorage.getItem('archiveOnboarded') ? null : 'welcome'
  );
  const [tourHL, setTourHL] = useState(null);

  function tourSelectNode(id) {
    setSelected(id);
    setPinned(null);
    setHistory([]);
  }

  const dismissOnboard = () => {
    localStorage.setItem('archiveOnboarded', '1');
    setOnboardStep(null);
    setTourHL(null);
    setSearchQ('');
    setSearchFocus(false);
  };
  const startTour = () => { localStorage.setItem('archiveOnboarded', '1'); setOnboardStep(0); };
  const nextTour  = () => {
    if (typeof onboardStep === 'number' && onboardStep >= TOUR_STEPS.length - 1) {
      dismissOnboard();
    } else {
      setOnboardStep(s => (typeof s === 'number' ? s + 1 : 0));
    }
  };

  useEffect(() => {
    if (typeof onboardStep !== 'number') { setTourHL(null); return; }

    const step = TOUR_STEPS[onboardStep];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const ctx = { tourSelectNode, scrollToNode, setPlayingNodeId, setSearchQ, setSearchFocus, setPanelOnLeft, setPanelX };
    let onEnterCleanup;
    if (step.onEnter) onEnterCleanup = step.onEnter(ctx);
    const ms = step.delay ?? 80;

    // Partial clear: keep card visible at its current position but remove
    // highlight brackets and connector line during the transition delay.
    // ready:false prevents the canvas dissolve from firing prematurely.
    setTourHL(prev => prev ? { ...prev, tx: 0, ty: 0, tw: 0, th: 0, lineStart: null, lineEnd: null, ready: false } : null);

    // For the first persist step (0→1): schedule an early cardStyle update so
    // the card slides to its final position during the transition delay rather
    // than jumping there when content loads.
    let t0;
    if (onboardStep === 1 && !persistCardRef.current) {
      t0 = setTimeout(() => {
        const CARD_W = 300, CARD_H = 200;
        const vw = window.innerWidth, vh = window.innerHeight;
        const pos = { left: Math.round(vw * 0.25), top: Math.round(vh / 2 - CARD_H / 2), width: CARD_W };
        persistCardRef.current = pos;
        setTourHL(prev => prev ? { ...prev, cardStyle: pos } : null);
      }, 60);
    }

    const t = setTimeout(() => {
      const CARD_W = 300, CARD_H = 200;
      const vw = window.innerWidth, vh = window.innerHeight;

      // ── Step 0: centered welcome card ─────────────────────────────────────
      if (onboardStep === 0) {
        persistCardRef.current = null;
        const centerLeft = Math.round(vw / 2 - CARD_W / 2);
        const centerTop  = Math.round(vh / 2 - CARD_H / 2);
        setTourHL({ side: 'center', cardStyle: { left: centerLeft, top: centerTop, width: CARD_W }, tx: 0, ty: 0, tw: 0, th: 0, lineStart: null, lineEnd: null, ready: true });
        return;
      }

      // ── Steps 1–3: persistent card position ───────────────────────────────
      if (!persistCardRef.current) {
        const pos = { left: Math.round(vw * 0.25), top: Math.round(vh / 2 - CARD_H / 2), width: CARD_W };
        persistCardRef.current = pos;
      }
      const cp = persistCardRef.current;

      const el = step.getTarget?.();
      if (!el) {
        setTourHL({ side: 'persist', cardStyle: cp, tx: 0, ty: 0, tw: 0, th: 0, lineStart: null, lineEnd: null, ready: true });
        return;
      }
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) {
        setTourHL({ side: 'persist', cardStyle: cp, tx: 0, ty: 0, tw: 0, th: 0, lineStart: null, lineEnd: null, ready: true });
        return;
      }
      const tw = step.maxHighlightWidth ? Math.min(r.width, step.maxHighlightWidth) : r.width;
      const tx = r.left, ty = r.top, th = r.height;
      const targetCx = r.left + tw / 2;
      const targetCy = r.top + r.height / 2;
      const cardCy   = cp.top + CARD_H / 2;

      // Auto-pick the nearest card edge as line anchor
      let lineStart;
      if (targetCy < cp.top) {
        lineStart = { x: cp.left + CARD_W / 2, y: cp.top };
      } else if (targetCy > cp.top + CARD_H) {
        lineStart = { x: cp.left + CARD_W / 2, y: cp.top + CARD_H };
      } else if (targetCx > cp.left + CARD_W) {
        lineStart = { x: cp.left + CARD_W, y: cardCy };
      } else {
        lineStart = { x: cp.left, y: cardCy };
      }
      // Stop arrow at the highlight-box border (6px outside element) with an 8px gap,
      // so the arrowhead points at the element without overlapping it.
      const lineEnd = lineRectEntry(
        lineStart.x, lineStart.y, targetCx, targetCy,
        tx - 6, ty - 6, tx + tw + 6, ty + th + 6, 8
      );

      setTourHL({ tx, ty, tw, th, cardStyle: cp, lineStart, lineEnd, side: 'persist', ready: true });
    }, ms);
    return () => { clearTimeout(t0); clearTimeout(t); if (onEnterCleanup) onEnterCleanup(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onboardStep]);

  // Pixel dissolve — fires only when tourHL.ready transitions to true.
  // Text-zone canvas on all steps.
  useEffect(() => {
    if (!tourHL?.ready) return;
    const canvas = textCanvasRef.current;
    if (!canvas) return;

    canvas.width  = canvas.offsetWidth  || 276;
    canvas.height = canvas.offsetHeight || 110;
    const ctx2 = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const bgColor = getComputedStyle(canvas.parentElement).backgroundColor || '#111';
    ctx2.fillStyle = bgColor;
    ctx2.fillRect(0, 0, W, H);
    const PS = 5;
    const cols = Math.ceil(W / PS), rows = Math.ceil(H / PS);
    const total = cols * rows;
    const order = Array.from({ length: total }, (_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const duration = 600;
    const start = performance.now();
    let raf;
    canvas.style.opacity = '1';
    canvas.style.transition = 'none';
    function draw(now) {
      const t = Math.min((now - start) / duration, 1);
      ctx2.fillStyle = bgColor;
      ctx2.fillRect(0, 0, W, H);
      const n = Math.floor(t * total);
      for (let i = 0; i < n; i++) {
        const idx = order[i];
        ctx2.clearRect((idx % cols) * PS, Math.floor(idx / cols) * PS, PS, PS);
      }
      if (t < 1) { raf = requestAnimationFrame(draw); }
      else { canvas.style.transition = 'opacity 0.2s'; canvas.style.opacity = '0'; }
    }
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourHL]);

  // Cover the text zone canvas immediately when step changes,
  // so new text is hidden until the dissolve reveal begins.
  useEffect(() => {
    if (typeof onboardStep !== 'number') return;
    let raf = requestAnimationFrame(() => {
      const canvas = textCanvasRef.current;
      if (!canvas || !canvas.offsetWidth) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight || 110;
      const ctx2 = canvas.getContext('2d');
      const parent = canvas.parentElement;
      if (!parent) return;
      const bgColor = getComputedStyle(parent).backgroundColor || '#111';
      ctx2.fillStyle = bgColor;
      ctx2.fillRect(0, 0, canvas.width, canvas.height);
      canvas.style.opacity = '1';
      canvas.style.transition = 'none';
    });
    return () => cancelAnimationFrame(raf);
  }, [onboardStep]);

  const [pinned, setPinned] = useState(null); // highlighted but panel closed
  const [panelOnLeft, setPanelOnLeft] = useState(false); // panel flips left when clicked node is in right half
  const [panelX, setPanelX] = useState(null); // null = CSS default (right/left edge)
  const [isDragging, setIsDragging] = useState(false);
  const panelXRef = useRef(null);       // live ref so momentum loop reads current value
  const animFrameRef = useRef(null);    // ongoing momentum rAF handle
  const tfRef = useRef({ k: 1, x: 0, y: 0 }); // always-current transform for click handlers
  const expandedRef = useRef(null);     // always-current expanded key for zoom end handler

  const [searchFocus, setSearchFocus] = useState(false);
  const [searchActiveIdx, setSearchActiveIdx] = useState(-1);
  const [hovNode, setHovNode] = useState(null);
  const [hovPos, setHovPos] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState({});
  const [expandedPositions, setExpandedPositions] = useState({});
  const [tf, setTf] = useState({ k: 1, x: 0, y: 0 });
  const [playingNodeId, setPlayingNodeId] = useState(() => {
    const embeddable = NODES.filter(n => n.bandcamp_album);
    return embeddable[Math.floor(Math.random() * embeddable.length)]?.id ?? null;
  });
  // Sun-based dark mode — auto-flips at sunrise / sunset
  const sunIsDark   = useSunMode();
  // Persist manual overrides in localStorage so page reloads don't reset them
  const [manualDark, setManualDark] = useState(() => {
    const v = localStorage.getItem('manualDark');
    return v === null ? null : v === 'true';
  });
  const darkMode = manualDark !== null ? manualDark : sunIsDark;
  const [colorTheme, setColorTheme] = useState(
    () => localStorage.getItem('colorTheme') || null
  );
  const [colorMenuOpen, setColorMenuOpen] = useState(false);

  // Keep localStorage in sync whenever these change
  useEffect(() => {
    if (manualDark === null) localStorage.removeItem('manualDark');
    else localStorage.setItem('manualDark', manualDark);
  }, [manualDark]);
  useEffect(() => {
    if (colorTheme) localStorage.setItem('colorTheme', colorTheme);
    else localStorage.removeItem('colorTheme');
  }, [colorTheme]);

  const [typeFilters, setTypeFilters] = useState({ artist: true, label: true, venue: true, moment: true, style: true, culture: true, channel: true });
  const [genreFilters, setGenreFilters] = useState({ house: true, techno: true, ambient: true });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.classList.toggle('colorful', !!colorTheme);
  }, [darkMode, colorTheme]);


  // Layout — row-pack then organic variety.
  //
  // Step 1: group nodes by (region, era) and pack them into rows like
  //   typeset text. This guarantees zero overlaps within a group by
  //   construction — no sweep needed.
  // Step 2: vary the look by (a) ordering nodes within each group by a
  //   deterministic hash rather than label-length, so rows have mixed box
  //   sizes, and (b) shifting each row horizontally by a random amount
  //   within the leftover slack, so rows are not all centre-aligned.
  // Step 3: a lightweight global Y-only sweep resolves the rare cases where
  //   tall stacks at adjacent era lines overlap across group boundaries.
  useEffect(() => {
    const CHAR_W = 4.3, PAD = 4, BH = 13, X_GAP = 4, Y_GAP = 3;

    // Stable hash — same string → same number, every render
    const hash = s => {
      let h = 0;
      for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
      return h >>> 0;
    };

    // ── Step 1 & 2: group → pack → position ─────────────────────────────
    const groups = {};
    NODES.forEach(n => {
      const rk  = COUNTRY_REGION[n.country] || 'DE';
      const key = `${rk}|${n.era}`;
      if (!groups[key]) groups[key] = { rk, era: n.era, nodes: [] };
      groups[key].nodes.push(n);
    });

    // node id → {x, y}; also keep a flat array for the sweep
    const pos   = {};
    const flat  = []; // [{id, x, y, era, hw}]

    Object.values(groups).forEach(({ rk, era, nodes: group }) => {
      const rl    = REGION_LEFTS[rk]  ?? LEFT;
      const rw    = REGION_WIDTHS[rk] ?? _SPAN / 12;
      const colW  = rw - 2; // 1 px margin each side — nodes may touch region edge
      // Clamp so nodes with eras outside the display window (e.g. 1940)
      // still land inside the chart rather than disappearing off-screen.
      const clampedEra = Math.max(ERA_MIN, Math.min(ERA_MAX, era));
      const baseY = eraY(clampedEra);

      // Hash-ordered — avoids the "widest first" rigid look
      const ordered = [...group].sort((a, b) => hash(a.id) - hash(b.id));

      // Greedy row packing
      const rows = [[]], rowW = [0];
      ordered.forEach(n => {
        const nw  = n.label.length * CHAR_W + PAD * 2;
        const ri  = rows.length - 1;
        const gap = rowW[ri] > 0 ? X_GAP : 0;
        if (rowW[ri] + gap + nw <= colW * 1.2 || rows[ri].length === 0) {
          rows[ri].push(n); rowW[ri] += gap + nw;
        } else {
          rows.push([n]); rowW.push(nw);
        }
      });

      // Centre the stack on the era line
      const stackH = rows.length * BH + (rows.length - 1) * Y_GAP;
      const startY = baseY - stackH / 2 + BH / 2;

      rows.forEach((row, ri) => {
        const y    = startY + ri * (BH + Y_GAP);
        const used = rowW[ri];
        const slack = Math.max(0, colW - used);
        // Random X offset within the row's slack → rows are not all centred
        const offset = (hash(`${rk}${era}${ri}`) & 0xff) / 255 * slack;
        let x = rl + 4 + offset;
        x = Math.max(LEFT + 4, Math.min(W - RIGHT - used - 4, x));

        row.forEach(n => {
          const nw = n.label.length * CHAR_W + PAD * 2;
          const cx = x + nw / 2;
          pos[n.id] = { x: cx, y };
          flat.push({ id: n.id, x: cx, y, era, hw: nw / 2 + 1, rk });
          x += nw + X_GAP;
        });
      });
    });

    // ── Step 3: global sweep — Y-first with X fallback ───────────────────
    // Row-packing guarantees no overlaps *within* each (region, era) group.
    // Remaining cross-era / cross-group overlaps are resolved here.
    //
    // Strategy: push Y apart first (nodes may drift up to MAX_DRIFT from their
    // era line — priority is zero overlaps over perfect era alignment).
    // When Y headroom is exhausted, nudge X within the chart bounds instead;
    // nodes may stray past a region boundary as long as they stay on-canvas.
    const MAX_DRIFT = 160;
    for (let pass = 0; pass < 200; pass++) {
      let any = false;
      for (let i = 0; i < flat.length; i++) {
        for (let j = i + 1; j < flat.length; j++) {
          const a = flat[i], b = flat[j];
          if (Math.abs(a.x - b.x) >= a.hw + b.hw) continue; // no X overlap → skip
          const oy = (BH + 2) - Math.abs(a.y - b.y);
          if (oy <= 0) continue;
          any = true;
          const push = oy / 2 + 0.5;
          const sy   = a.y <= b.y ? -1 : 1;
          const ancA = eraY(Math.max(ERA_MIN, Math.min(ERA_MAX, a.era)));
          const ancB = eraY(Math.max(ERA_MIN, Math.min(ERA_MAX, b.era)));
          const newAy = Math.max(ancA - MAX_DRIFT, Math.min(ancA + MAX_DRIFT, a.y + sy * push));
          const newBy = Math.max(ancB - MAX_DRIFT, Math.min(ancB + MAX_DRIFT, b.y - sy * push));
          // If Y alone didn't fully separate, also nudge X (fallback)
          if (Math.abs(newAy - newBy) < BH + 2) {
            const ox = (a.hw + b.hw) - Math.abs(a.x - b.x);
            if (ox > 0) {
              const sx    = a.x <= b.x ? -1 : 1;
              const xpush = ox / 2 + 0.5;
              // Clamp to each node's own region — prevents drift into adjacent regions
              const rlA = REGION_LEFTS[a.rk] ?? LEFT,  rwA = REGION_WIDTHS[a.rk] ?? (_SPAN / 12);
              const rlB = REGION_LEFTS[b.rk] ?? LEFT,  rwB = REGION_WIDTHS[b.rk] ?? (_SPAN / 12);
              a.x = Math.max(rlA + a.hw + 1, Math.min(rlA + rwA - a.hw - 1, a.x + sx * xpush));
              b.x = Math.max(rlB + b.hw + 1, Math.min(rlB + rwB - b.hw - 1, b.x - sx * xpush));
            }
          }
          a.y = newAy;
          b.y = newBy;
        }
      }
      if (!any) break;
    }

    // Write sweep results back into pos
    flat.forEach(n => { pos[n.id] = { x: n.x, y: n.y }; });

    setPositions(pos);
  }, []);

  // Keep refs in sync so zoom event handlers always see current values
  useEffect(() => { tfRef.current = tf; }, [tf]);
  useEffect(() => { expandedRef.current = expanded; }, [expanded]);

  // Zoom
  const zoomRef = useRef(null);
  const svgGRef = useRef(null);       // ref to the main <g> — d3 owns its transform directly
  const animatingRef = useRef(false); // true during flyHome — suppresses per-frame setTf
  useEffect(() => {
    if (!svgRef.current) return;
    const zoom = d3.zoom()
      .scaleExtent([window.innerWidth / W, 8])
      .translateExtent([[0, 0], [W, H]])  // single copy, bounded
      // Only zoom on ctrl+wheel or pinch — regular scroll pans
      .filter(event => {
        if (event.type === 'wheel') return event.ctrlKey;
        return !event.button;
      })
      // During pointer drag: disable topbar pointer-events so the stray synthetic
      // click that fires on pointer-capture release can never hit a topbar button.
      .on('start', () => { document.body.classList.add('svg-dragging'); })
      .on('zoom', e => {
        // Always update the DOM directly — d3 owns the <g> transform, not React
        if (svgGRef.current) {
          const { x, y, k } = e.transform;
          svgGRef.current.style.transform = `translate(${x}px,${y}px) scale(${k})`;
        }
        // Update React state for HTML overlays — suppressed during flyHome to avoid lag
        if (!animatingRef.current) setTf(e.transform);
      })
      .on('end', () => {
        // Keep topbar locked briefly so the stray click (which fires async after
        // pointer-capture release) is still swallowed by the CSS block.
        setTimeout(() => document.body.classList.remove('svg-dragging'), 80);
      });
    zoomRef.current = zoom;
    const svg = d3.select(svgRef.current);
    svg.call(zoom);
    const vw = window.innerWidth;
    svg.call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(vw / W));

    // Regular scroll wheel → pan vertically
    const handleWheel = event => {
      if (event.ctrlKey) return; // let d3 handle ctrl+scroll zoom
      event.preventDefault();
      svg.call(zoom.translateBy, 0, -event.deltaY * 0.8);
    };
    svgRef.current.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      svg.on('.zoom', null);
      svgRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, []);


  // Row-pack layout for expanded region view — same algorithm as the main page,
  // but columns are cities instead of regions.
  useEffect(() => {
    if (!expanded) { setExpandedPositions({}); return; }

    const CHAR_W = 4.3, PAD = 4, BH = 13, X_GAP = 4, Y_GAP = 3;

    const hash = s => {
      let h = 0;
      for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
      return h >>> 0;
    };

    const regionNodes = NODES.filter(n => (COUNTRY_REGION[n.country] || 'DE') === expanded);
    if (!regionNodes.length) return;

    const cities = sortedCities(expanded);
    if (!cities.length) return;

    const bw = (W - LEFT) / cities.length; // width per city column

    // ── Step 1 & 2: group by (city, era) → row-pack → position ──────────────
    const groups = {};
    regionNodes.forEach(n => {
      const city = n.city || 'Various';
      const ci = cities.indexOf(city);
      if (ci === -1) return;
      const key = `${city}|${n.era}`;
      if (!groups[key]) groups[key] = { city, era: n.era, bx: LEFT + bw * ci, nodes: [] };
      groups[key].nodes.push(n);
    });

    const pos  = {};
    const flat = [];

    Object.values(groups).forEach(({ city, era, bx, nodes: group }) => {
      const colW = bw - 2;
      const clampedEra = Math.max(ERA_MIN, Math.min(ERA_MAX, era));
      const baseY = eraY(clampedEra);

      const ordered = [...group].sort((a, b) => hash(a.id) - hash(b.id));

      const rows = [[]], rowW = [0];
      ordered.forEach(n => {
        const nw  = n.label.length * CHAR_W + PAD * 2;
        const ri  = rows.length - 1;
        const gap = rowW[ri] > 0 ? X_GAP : 0;
        if (rowW[ri] + gap + nw <= colW * 1.2 || rows[ri].length === 0) {
          rows[ri].push(n); rowW[ri] += gap + nw;
        } else {
          rows.push([n]); rowW.push(nw);
        }
      });

      const stackH = rows.length * BH + (rows.length - 1) * Y_GAP;
      const startY = baseY - stackH / 2 + BH / 2;

      rows.forEach((row, ri) => {
        const y    = startY + ri * (BH + Y_GAP);
        const used = rowW[ri];
        const slack = Math.max(0, colW - used);
        const offset = (hash(`${city}${era}${ri}`) & 0xff) / 255 * slack;
        let x = bx + 4 + offset;
        x = Math.max(LEFT + 4, Math.min(W - RIGHT - used - 4, x));

        row.forEach(n => {
          const nw = n.label.length * CHAR_W + PAD * 2;
          const cx = x + nw / 2;
          pos[n.id] = { x: cx, y };
          flat.push({ id: n.id, x: cx, y, era, hw: nw / 2 + 1 });
          x += nw + X_GAP;
        });
      });
    });

    // ── Step 3: global Y-push sweep with X fallback ──────────────────────────
    const MAX_DRIFT = 160;
    for (let pass = 0; pass < 200; pass++) {
      let any = false;
      for (let i = 0; i < flat.length; i++) {
        for (let j = i + 1; j < flat.length; j++) {
          const a = flat[i], b = flat[j];
          if (Math.abs(a.x - b.x) >= a.hw + b.hw) continue;
          const oy = (BH + 2) - Math.abs(a.y - b.y);
          if (oy <= 0) continue;
          any = true;
          const push = oy / 2 + 0.5;
          const sy   = a.y <= b.y ? -1 : 1;
          const ancA = eraY(Math.max(ERA_MIN, Math.min(ERA_MAX, a.era)));
          const ancB = eraY(Math.max(ERA_MIN, Math.min(ERA_MAX, b.era)));
          const newAy = Math.max(ancA - MAX_DRIFT, Math.min(ancA + MAX_DRIFT, a.y + sy * push));
          const newBy = Math.max(ancB - MAX_DRIFT, Math.min(ancB + MAX_DRIFT, b.y - sy * push));
          if (Math.abs(newAy - newBy) < BH + 2) {
            const ox = (a.hw + b.hw) - Math.abs(a.x - b.x);
            if (ox > 0) {
              const sx    = a.x <= b.x ? -1 : 1;
              const xpush = ox / 2 + 0.5;
              a.x = Math.max(LEFT + a.hw, Math.min(W - RIGHT - a.hw, a.x + sx * xpush));
              b.x = Math.max(LEFT + b.hw, Math.min(W - RIGHT - b.hw, b.x - sx * xpush));
            }
          }
          a.y = newAy;
          b.y = newBy;
        }
      }
      if (!any) break;
    }

    flat.forEach(n => { pos[n.id] = { x: n.x, y: n.y }; });
    setExpandedPositions(pos);
  }, [expanded]);

  function expandedX(nodeId) {
    if (!expanded) return null;
    const node = NODES.find(n => n.id === nodeId);
    if (!node) return null;
    if ((COUNTRY_REGION[node.country] || 'DE') !== expanded) return null;
    const cities = sortedCities(expanded);
    if (!cities.length) return null;
    const city = node.city || 'Various';
    const ci = cities.indexOf(city);
    if (ci === -1) return null;
    const nodeW = W - LEFT;
    const bw = nodeW / cities.length;
    const bx = LEFT + bw * ci;
    const sameCity = NODES.filter(n => (COUNTRY_REGION[n.country] || 'DE') === expanded && (n.city || 'Various') === city);
    const ni = sameCity.findIndex(n => n.id === nodeId);
    const tot = sameCity.length;
    const margin = Math.max(bw * 0.18, 14);
    const iw = bw - margin * 2;
    const offset = tot > 1 ? (ni / (tot - 1) - 0.5) * iw : 0;
    const x = bx + bw / 2 + offset;
    return Math.max(bx + margin, Math.min(bx + bw - margin, x));
  }

  function getPos(id) {
    if (expanded) {
      if (expandedPositions[id]) return expandedPositions[id];
      // fallback while sim is computing
      const x = expandedX(id);
      if (x === null) return null;
      const y = (positions[id] || { y: H / 2 }).y;
      return { x, y };
    }
    // Return null for unknown nodes so edges to undefined IDs are simply skipped
    return positions[id] || null;
  }

  const GENRE_GROUPS = {
    house:   ['disco', 'soul', 'chicago', 'deep', 'house', 'grime'],
    techno:  ['detroit', 'techno', 'techhouse', 'melodic', 'minimal'],
    ambient: ['ambient', 'experimental', 'giegling'],
  };

  const filteredIds = useMemo(() => {
    const allowedGenres = new Set(
      Object.entries(genreFilters)
        .filter(([, on]) => on)
        .flatMap(([key]) => GENRE_GROUPS[key] || [])
    );
    let ids = new Set(NODES.filter(n =>
      typeFilters[n.type] !== false &&
      allowedGenres.has(n.genre)
    ).map(n => n.id));
    if (expanded) {
      ids = new Set([...ids].filter(id => {
        const n = NODES.find(n => n.id === id);
        return n && (COUNTRY_REGION[n.country] || 'DE') === expanded;
      }));
    }
    if (searchQ.trim()) {
      const q = searchQ.toLowerCase();
      const m = new Set(NODES.filter(n =>
        n.label.toLowerCase().includes(q) || (n.city || '').toLowerCase().includes(q)
      ).map(n => n.id));
      EDGES.forEach(e => { if (m.has(e.from)) m.add(e.to); if (m.has(e.to)) m.add(e.from); });
      ids = new Set([...ids].filter(id => m.has(id)));
    }
    return ids;
  }, [expanded, searchQ, typeFilters, genreFilters]);

  const visibleEdges = useMemo(() =>
    EDGES.filter(e => e.type !== 'aesthetic' && filteredIds.has(e.from) && filteredIds.has(e.to))
  , [filteredIds]);

  const themeStyle = useMemo(() => {
    const p = MONO_PALETTES[colorTheme];
    if (!p) return null;
    const dm = darkMode;
    return {
      bg:      dm ? p.bg.dark      : p.bg.light,
      surface: dm ? p.surface.dark : p.surface.light,
      border:  dm ? p.border.dark  : p.border.light,
      nodeBg:  dm ? p.nodeBg.dark  : p.nodeBg.light,
      accent:  p.accent,
    };
  }, [colorTheme, darkMode]);
  const themeAccent = themeStyle?.accent || null;

  const btnGradient = useMemo(() => {
    if (!colorTheme) return null;
    const sw = THEME_SWATCHES[colorTheme];
    if (!sw) return null;
    return `linear-gradient(135deg, ${sw.join(', ')})`;
  }, [colorTheme]);

  const selNode = NODES.find(n => n.id === selected);
  const selConns = useMemo(() => {
    if (!selected) return [];
    const c = [];
    EDGES.forEach(e => {
      if (e.from === selected) { const t = NODES.find(n => n.id === e.to); if (t) c.push({ node: t, dir: 'out', type: e.type, str: e.strength }); }
      if (e.to === selected) { const s = NODES.find(n => n.id === e.from); if (s) c.push({ node: s, dir: 'in', type: e.type, str: e.strength }); }
    });
    return c.sort((a, b) => b.str - a.str);
  }, [selected]);


  const focusId = selected || pinned;

  const hlIds = useMemo(() => {
    if (!focusId) return null;
    const s = new Set([focusId]);
    visibleEdges.forEach(e => {
      if (e.from === focusId) { const t = NODES.find(n => n.id === e.to); if (t) s.add(t.id); }
      if (e.to === focusId)   { const t = NODES.find(n => n.id === e.from); if (t) s.add(t.id); }
    });
    return s;
  }, [focusId, visibleEdges]);

  const hlEdges = useMemo(() => {
    if (!focusId) return null;
    return new Set(visibleEdges.filter(e => e.from === focusId || e.to === focusId).map(e => `${e.from}|${e.to}`));
  }, [focusId, visibleEdges]);

  function handlePanelDragStart(e) {
    // Don't initiate drag from interactive elements
    if (e.target.closest('button, .dp-back, .dp-conn, a, input, textarea, select')) return;

    // Cancel any ongoing momentum animation
    if (animFrameRef.current) { cancelAnimationFrame(animFrameRef.current); animFrameRef.current = null; }

    const panelEl = e.currentTarget;
    const canvasEl = panelEl.parentElement;
    const canvasRect = canvasEl.getBoundingClientRect();
    const startLeft = panelEl.getBoundingClientRect().left - canvasRect.left;
    panelXRef.current = startLeft;

    const startMouseX = e.clientX;
    let dragging = false;

    // Circular buffer of recent pointer positions for velocity calculation
    const samples = [];

    function onMove(ev) {
      const dx = ev.clientX - startMouseX;
      if (!dragging && Math.abs(dx) > 4) { dragging = true; setIsDragging(true); }
      if (!dragging) return;

      const raw = startLeft + dx;
      const clamped = Math.max(LEFT, Math.min(canvasRect.width - 360 - RIGHT, raw));
      panelXRef.current = clamped;
      setPanelX(clamped);

      // Keep ~80ms of samples for velocity
      const now = performance.now();
      samples.push({ x: ev.clientX, t: now });
      while (samples.length > 1 && now - samples[0].t > 80) samples.shift();
    }

    function onUp() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      if (!dragging) return;
      setIsDragging(false);

      // Derive velocity (px/ms) from recent samples
      let vel = 0;
      if (samples.length >= 2) {
        const a = samples[0], b = samples[samples.length - 1];
        const dt = b.t - a.t;
        if (dt > 0) vel = (b.x - a.x) / dt; // px/ms
      }

      // Convert to px/frame and kick off momentum loop
      vel *= 7; // scale px/ms → px/frame, kept low for proportional feel
      const FRICTION = 0.80;
      const minX = LEFT;
      const maxX = canvasRect.width - 360 - RIGHT;

      function glide() {
        vel *= FRICTION;
        if (Math.abs(vel) < 0.5) { animFrameRef.current = null; return; }
        const next = Math.max(minX, Math.min(maxX, panelXRef.current + vel));
        // Hit a wall — kill momentum
        if (next === minX || next === maxX) vel = 0;
        panelXRef.current = next;
        setPanelX(next);
        animFrameRef.current = requestAnimationFrame(glide);
      }
      if (Math.abs(vel) > 0.3) animFrameRef.current = requestAnimationFrame(glide);
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  function doExpand(key) {
    setExpanded(key);
    clearAll();
    setTf({ k: window.innerWidth / W, x: 0, y: 0 });
  }

  const edgeEls = useMemo(() => {
    // Index edges by source AND by target so we can fan at whichever end is busier
    const fromIdx = {}, toIdx = {};
    visibleEdges.forEach((e, i) => {
      (fromIdx[e.from] ??= []).push(i);
      (toIdx[e.to]   ??= []).push(i);
    });

    // Build a set of all existing directed edges so we can detect bidirectional pairs
    const edgeSet = new Set(visibleEdges.map(e => `${e.from}|${e.to}`));

    return visibleEdges.map((e, i) => {
      const sp = getPos(e.from), tp = getPos(e.to);
      if (!sp || !tp) return null;

      const key = `${e.from}|${e.to}`;
      const isHl  = hlEdges?.has(key);
      const isDim = hlEdges && !isHl;

      const baseOp = e.type === 'lineage' ? 0.16 : e.type === 'roster' ? 0.12 : e.type === 'influence' ? 0.08 : 0.05;
      const opacity = isDim ? 0.02 : isHl ? 0.60 : baseOp;
      const baseSw  = e.type === 'lineage' ? 0.5 : e.type === 'roster' ? 0.4 : e.type === 'influence' ? 0.35 : 0.28;
      const sw   = isHl ? baseSw * 3 : baseSw;
      const dash = e.type === 'influence' ? '6 3' : e.type === 'aesthetic' ? '2 4' : undefined;

      const dx = tp.x - sp.x, dy = tp.y - sp.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const px = -dy / len, py = dx / len; // perpendicular unit vector

      // Fan spread: use whichever end (source or target) has more siblings —
      // edges piling into a busy node now spread just as much as edges leaving one.
      // Step of 11 px, no hard cap so the spread grows naturally with crowd size.
      const fromGroup = fromIdx[e.from] || [i];
      const toGroup   = toIdx[e.to]   || [i];
      const group = fromGroup.length >= toGroup.length ? fromGroup : toGroup;
      const n    = group.length;
      const rank = group.indexOf(i);
      const spread = n > 1 ? (rank - (n - 1) / 2) * 11 : 0;

      // Bidirectional offset: if the reverse edge also exists, nudge each
      // to opposite sides so they don't ride exactly on top of each other.
      const hasBidi    = edgeSet.has(`${e.to}|${e.from}`);
      const bidiOffset = hasBidi ? 5 : 0;

      // Base curve: capped so long cross-region edges don't arc wildly off-grid.
      // Max deviation from the midpoint is 30 SVG units in either axis.
      const MAX_CURVE = 30;
      const curveX = Math.sign(dy) * Math.min(Math.abs(dy * 0.07), MAX_CURVE);
      const curveY = Math.sign(dx) * Math.min(Math.abs(dx * 0.07), MAX_CURVE) * -1;

      const mx = (sp.x + tp.x) / 2 + curveX + px * (spread + bidiOffset);
      const my = (sp.y + tp.y) / 2 + curveY + py * (spread + bidiOffset);

      return (
        <path
          key={key} fill="none"
          d={`M${sp.x},${sp.y} Q${mx},${my} ${tp.x},${tp.y}`}
          stroke={colorTheme ? EDGE_TYPE_COLORS[e.type] : (darkMode ? 'rgba(255,255,255,0.9)' : '#000000')}
          strokeWidth={sw} strokeDasharray={dash} opacity={opacity}
          className={`eg${isDim ? ' dim' : isHl ? ' lit' : ''}`}
        />
      );
    });
  }, [visibleEdges, positions, expandedPositions, expanded, hlEdges, darkMode, colorTheme]);

  // Hover dash FX — dashes flow along connected edge paths outward from hovered node
  const hovPathEls = useMemo(() => {
    if (!hovNode) return null;
    if (!getPos(hovNode.id)) return null;

    const fromIdx = {}, toIdx = {};
    visibleEdges.forEach((e, i) => {
      (fromIdx[e.from] ??= []).push(i);
      (toIdx[e.to]   ??= []).push(i);
    });
    const edgeSet = new Set(visibleEdges.map(e => `${e.from}|${e.to}`));

    const connEdges = visibleEdges
      .map((e, i) => ({ e, i }))
      .filter(({ e }) =>
        e.type !== 'aesthetic' &&
        (e.from === hovNode.id || e.to === hovNode.id) &&
        !hlEdges?.has(`${e.from}|${e.to}`)
      );
    if (!connEdges.length) return null;

    return connEdges.map(({ e, i }) => {
      const sp = getPos(e.from), tp = getPos(e.to);
      if (!sp || !tp) return null;
      const dx = tp.x - sp.x, dy = tp.y - sp.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const px = -dy / len, py = dx / len;
      const fromGroup = fromIdx[e.from] || [i];
      const toGroup   = toIdx[e.to]   || [i];
      const group  = fromGroup.length >= toGroup.length ? fromGroup : toGroup;
      const n      = group.length, rank = group.indexOf(i);
      const spread = n > 1 ? (rank - (n - 1) / 2) * 11 : 0;
      const hasBidi    = edgeSet.has(`${e.to}|${e.from}`);
      const bidiOffset = hasBidi ? 5 : 0;
      const MAX_CURVE = 30;
      const curveX = Math.sign(dy) * Math.min(Math.abs(dy * 0.07), MAX_CURVE);
      const curveY = Math.sign(dx) * Math.min(Math.abs(dx * 0.07), MAX_CURVE) * -1;
      const mx = (sp.x + tp.x) / 2 + curveX + px * (spread + bidiOffset);
      const my = (sp.y + tp.y) / 2 + curveY + py * (spread + bidiOffset);
      const cls = e.from === hovNode.id ? 'hov-flow-out' : 'hov-flow-in';
      return <path key={`${e.from}|${e.to}`}
        d={`M${sp.x},${sp.y} Q${mx},${my} ${tp.x},${tp.y}`}
        fill="none" strokeWidth={1} strokeDasharray="2 11" className={cls}
        stroke={darkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.38)'} />;
    }).filter(Boolean);
  }, [hovNode, visibleEdges, positions, expandedPositions, expanded, hlEdges, darkMode]);

  // Which nodes would light up on click — drives the marching-ants preview
  const hovHlIds = useMemo(() => {
    if (!hovNode) return null;
    const s = new Set();
    visibleEdges.forEach(e => {
      if (e.type === 'aesthetic') return;
      if (e.from === hovNode.id) s.add(e.to);
      if (e.to === hovNode.id) s.add(e.from);
    });
    s.delete(hovNode.id);
    return s.size > 0 ? s : null;
  }, [hovNode, visibleEdges]);

  const nodeEls = useMemo(() => NODES.map(n => {
    const pos = getPos(n.id);
    if (!pos) return null;
    const isFilt = filteredIds.has(n.id);
    const isHl = hlIds ? hlIds.has(n.id) : isFilt;
    const isDim = (hlIds && !hlIds.has(n.id)) || (!hlIds && !isFilt);
    const isSel = n.id === selected || n.id === pinned;
    const isHovSelf = !isSel && hovNode?.id === n.id;
    const hovIsSel = hovNode && (hovNode.id === selected || hovNode.id === pinned);
    const isHovPrev = !isSel && !isHovSelf && (hovHlIds?.has(n.id) ?? false) && !(isHl && hovIsSel);
    const isHovPrevDim = isHovPrev && isDim; // text pulse only when node is currently dimmed
    const charW = 4.3, pad = 4;
    const isNotch = n.type === 'style' || n.type === 'moment' || n.type === 'culture';
    const bw = n.label.length * charW + pad * 2 + (isNotch ? 8 : 0); // extra width so notch doesn't bite into text
    const bh = 13;
    const dm = darkMode;
    const tc = getThemeColors(n, colorTheme, dm);
    const fillColor = isSel
      ? (tc ? tc.stroke : '#5a5a70')
      : isDim ? (dm ? '#0c0c10' : '#ffffff')
      : tc ? tc.fill : 'transparent';
    const strokeColor = isSel
      ? (dm ? '#e0ddd8' : '#111111')
      : isDim
        ? (tc ? `${tc.stroke}28` : (dm ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'))
        : isHl
          ? (tc ? tc.stroke : (dm ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)'))
          : tc ? tc.stroke : (dm ? 'rgba(255,255,255,0.40)' : 'rgba(0,0,0,0.28)');
    const textFill = isSel
      ? (dm ? '#0c0c10' : '#ffffff')
      : isHovPrevDim
        // Bright base colour — CSS opacity animation pulses it 15%→85% of this
        ? (tc ? tc.text : (dm ? '#ffffff' : '#0a0a0a'))
      : isDim
        ? (dm ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)')
      : isHl
        ? (tc ? tc.text : (dm ? '#ffffff' : '#0a0a0a'))
      : tc ? tc.text : (dm ? '#d0d0e8' : '#222233');
    const strokeW = isSel ? 1.5 : isHl ? 1 : 0.5;
    const hw = bw / 2, hh = bh / 2;
    const bgFill = themeStyle?.nodeBg || (dm ? '#0c0c10' : '#ffffff');
    const mSelf = dm ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)';
    const mPrev = dm ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.38)';

    // ── Octagon (label): chamfered corners ───────────────────────────────────
    const oc = 4;
    const octPts  = `${-hw+oc},${-hh} ${hw-oc},${-hh} ${hw},${-hh+oc} ${hw},${hh-oc} ${hw-oc},${hh} ${-hw+oc},${hh} ${-hw},${hh-oc} ${-hw},${-hh+oc}`;
    const octPtsO = `${-hw+oc-1},${-hh-1} ${hw-oc+1},${-hh-1} ${hw+1},${-hh+oc-1} ${hw+1},${hh-oc+1} ${hw-oc+1},${hh+1} ${-hw+oc-1},${hh+1} ${-hw-1},${hh-oc+1} ${-hw-1},${-hh+oc-1}`;

    // ── Notch rect (style/moment/culture): triangular indent on left+right sides
    const nd = 3, ni = 4; // notch depth (inward) and half-height of notch opening
    const ntchPts  = `${-hw},${-hh} ${hw},${-hh} ${hw},${-ni} ${hw-nd},0 ${hw},${ni} ${hw},${hh} ${-hw},${hh} ${-hw},${ni} ${-hw+nd},0 ${-hw},${-ni}`;
    const ntchPtsO = `${-hw-1},${-hh-1} ${hw+1},${-hh-1} ${hw+1},${-ni-1} ${hw-nd+1},0 ${hw+1},${ni+1} ${hw+1},${hh+1} ${-hw-1},${hh+1} ${-hw-1},${ni+1} ${-hw+nd-1},0 ${-hw-1},${-ni-1}`;

    // ── Folded corner (channel): single chamfered top-right corner ─────────────
    const fc = 5; // fold size
    const chanPts  = `${-hw},${-hh} ${hw-fc},${-hh} ${hw},${-hh+fc} ${hw},${hh} ${-hw},${hh}`;
    const chanPtsO = `${-hw-1},${-hh-1} ${hw-fc+1},${-hh-1} ${hw+1},${-hh+fc-1} ${hw+1},${hh+1} ${-hw-1},${hh+1}`;

    const isArtist = n.type === 'artist';
    const isLabel  = n.type === 'label';
    const isChan   = n.type === 'channel';

    const renderBg = () =>
      isArtist ? <rect className="nd-bg" x={-hw-1} y={-hh-1} width={bw+2} height={bh+2} rx={9} fill={bgFill} stroke="none" />
      : isLabel  ? <polygon className="nd-bg" points={octPtsO} fill={bgFill} stroke="none" />
      : isNotch  ? <polygon className="nd-bg" points={ntchPtsO} fill={bgFill} stroke="none" />
      : isChan   ? <polygon className="nd-bg" points={chanPtsO} fill={bgFill} stroke="none" />
      :            <rect className="nd-bg" x={-hw-1} y={-hh-1} width={bw+2} height={bh+2} rx={3} fill={bgFill} stroke="none" />;

    const renderBorder = () =>
      isArtist ? <rect className="nd-border" x={-hw} y={-hh} width={bw} height={bh} rx={8} fill={fillColor} stroke={strokeColor} strokeWidth={strokeW} />
      : isLabel  ? <polygon className="nd-border" points={octPts} fill={fillColor} stroke={strokeColor} strokeWidth={strokeW} />
      : isNotch  ? <polygon className="nd-border" points={ntchPts} fill={fillColor} stroke={strokeColor} strokeWidth={strokeW} />
      : isChan   ? <polygon className="nd-border" points={chanPts} fill={fillColor} stroke={strokeColor} strokeWidth={strokeW} />
      :            <rect className="nd-border" x={-hw} y={-hh} width={bw} height={bh} rx={2} fill={fillColor} stroke={strokeColor} strokeWidth={strokeW} />;

    const renderMarch = (cls, stroke) =>
      isArtist ? <rect className={cls} x={-hw-1} y={-hh-1} width={bw+2} height={bh+2} rx={9} fill="none" stroke={stroke} strokeWidth={1} strokeDasharray="2 11" />
      : isLabel  ? <polygon className={cls} points={octPtsO} fill="none" stroke={stroke} strokeWidth={1} strokeDasharray="2 11" />
      : isNotch  ? <polygon className={cls} points={ntchPtsO} fill="none" stroke={stroke} strokeWidth={1} strokeDasharray="2 11" />
      : isChan   ? <polygon className={cls} points={chanPtsO} fill="none" stroke={stroke} strokeWidth={1} strokeDasharray="2 11" />
      :            <rect className={cls} x={-hw-1} y={-hh-1} width={bw+2} height={bh+2} rx={3} fill="none" stroke={stroke} strokeWidth={1} strokeDasharray="2 11" />;

    return (
      <g
        key={n.id}
        className={`nd${isDim ? ' dim' : isHl ? ' lit' : ''} ${isSel ? 'sel' : ''}`}
        transform={`translate(${pos.x},${pos.y})`}
        onClick={(ev) => {
          if (isSel) {
            selectNode(null);
            setPanelOnLeft(false);
            setPanelX(null);
          } else {
            selectNode(n.id);
            positionPanel(n.id, d3.zoomTransform(svgRef.current));
          }
        }}
        onMouseEnter={ev => { if (!isDim) { setHovNode(n); setHovPos({ x: ev.clientX, y: ev.clientY }); } }}
        onMouseLeave={() => setHovNode(null)}
      >
        <g className="nd-inner">
          {renderBg()}
          {renderBorder()}
          {isHovSelf && renderMarch('nd-self-march', mSelf)}
          {isHovPrev && renderMarch('nd-march', mPrev)}
          <text textAnchor="middle" dominantBaseline="middle"
            className={isHovSelf ? 'nd-self-text' : isHovPrevDim ? 'nd-prev-text' : undefined}
            style={{ fill: textFill, fontSize: '7.8px', fontWeight: isHl || isSel ? '600' : '400' }}>
            {n.label}
          </text>
        </g>
      </g>
    );
  }), [positions, expandedPositions, expanded, filteredIds, hlIds, hovHlIds, hovNode, selected, darkMode, colorTheme]);

  return (
    <div className="app">
      {/* TOPBAR */}
      <div className="topbar" style={themeStyle ? { background: themeStyle.surface, borderBottomColor: themeStyle.border } : undefined}>
        <div
          className="wordmark"
          style={{ cursor: 'pointer' }}
          onClick={() => { setExpanded(null); clearAll(); setSearchQ(''); }}
          title="Return to home"
        >
          ARCHIVE
          <span className="wordmark-sub">Mapping the electronic underground</span>
        </div>
        <div className="tbsep" />
        <div className="sw">
          <span className="si">⌕</span>
          <input
            placeholder="Search…" value={searchQ}
            onChange={e => { setSearchQ(e.target.value); setSearchActiveIdx(-1); clearAll(); }}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setTimeout(() => setSearchFocus(false), 150)}
            onKeyDown={e => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSearchActiveIdx(i => Math.min(i + 1, searchMatches.length - 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSearchActiveIdx(i => Math.max(i - 1, -1));
              } else if (e.key === 'Enter' && searchMatches.length > 0) {
                const target = searchActiveIdx >= 0 ? searchMatches[searchActiveIdx] : searchMatches[0];
                pickSearchResult(target.id);
                setSearchActiveIdx(-1);
              } else if (e.key === 'Escape') {
                setSearchQ(''); setSearchFocus(false); setSearchActiveIdx(-1);
              }
            }}
          />
          {searchFocus && searchMatches.length > 0 && (
            <div className="search-dropdown">
              {searchMatches.map((n, i) => (
                <div key={n.id}
                  className={`search-drop-item${i === searchActiveIdx ? ' active' : ''}`}
                  onMouseDown={() => { pickSearchResult(n.id); setSearchActiveIdx(-1); }}
                  onMouseEnter={() => setSearchActiveIdx(i)}
                >
                  <span className="sdi-label">{n.label}</span>
                  <span className="sdi-meta">{n.city ? `${n.city} · ` : ''}{n.era}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="tbsep" />

        {/* Dark mode toggle — auto follows sun, click to override */}
        <button
          className="yybtn"
          onClick={() => setManualDark(v => v !== null ? !v : !sunIsDark)}
          title={manualDark !== null
            ? (darkMode ? 'Manual: dark — click for light' : 'Manual: light — click for dark')
            : (darkMode ? 'Auto: night — click to override' : 'Auto: day — click to override')}
        >
          <svg width={16} height={16} viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={49} fill={darkMode ? '#ddd' : '#111'} stroke="none" />
            <path d="M50,1 A49,49,0,0,1,50,99 A24.5,24.5,0,0,1,50,50 A24.5,24.5,0,0,0,50,1 Z" fill={darkMode ? '#111' : '#ddd'} />
            <circle cx={50} cy={25} r={12} fill={darkMode ? '#111' : '#ddd'} />
            <circle cx={50} cy={75} r={12} fill={darkMode ? '#ddd' : '#111'} />
          </svg>
        </button>

        {/* Color theme picker */}
        <div
          className={`colorwrap${colorTheme ? ' has-theme' : ''}`}
          style={themeAccent ? { '--color-accent': themeAccent } : undefined}
          onMouseEnter={() => setColorMenuOpen(true)}
          onMouseLeave={() => setColorMenuOpen(false)}
        >
          <button
            className={`colorbtn${colorTheme ? ' on' : ''}`}
            style={btnGradient ? { background: btnGradient } : undefined}
          >
            <span>Color?</span>
          </button>
          {colorMenuOpen && (
            <div className="colordrop">
              {[
                { key: null,    label: 'Off',          sub: 'No color' },
                { section: 'Functional' },
                { key: 'type',  label: 'Color × type', sub: 'Artist · Label · Venue · Event', swatches: ['#4a7fc1','#c87828','#3a9a50','#8844cc'] },
                { key: 'genre', label: 'Color × genre', sub: 'Disco · Techno · Ambient…',     gradient: true },
                { section: 'Cosmetic' },
                { key: 'void',  label: 'Void',         sub: 'Cyan on black — Berlin',   swatches: ['#b8e8f4','#44a8b8','#00c8c0','#061416'] },
                { key: 'acid',  label: 'Acid',         sub: 'Lime on black — rave',     swatches: ['#d4f0a0','#80aa00','#aadd00','#0b1400'] },
                { key: 'rust',  label: 'Rust',         sub: 'Iron orange — Detroit',    swatches: ['#fdd0b0','#cc7744','#dd5500','#1c0900'] },
              ].map((item, i) => {
                if (item.section !== undefined) return (
                  <div key={`s${i}`} className="colordrop-section">{item.section}</div>
                );
                const { key, label, sub, swatches, gradient } = item;
                return (
                  <div
                    key={String(key)}
                    className={`colordrop-item${colorTheme === key ? ' active' : ''}`}
                    onClick={() => setColorTheme(key)}
                  >
                    <div className="colordrop-text">
                      <span className="colordrop-label">{label}</span>
                      <span className="colordrop-sub">{sub}</span>
                    </div>
                    {swatches && (
                      <div className="colordrop-swatches">
                        {swatches.map(c => <span key={c} className="colordrop-swatch" style={{ background: c }} />)}
                      </div>
                    )}
                    {gradient && <div className="colordrop-gradient" />}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Legend / Guide */}
        <div className="legwrap" style={{ marginLeft: 'auto' }}>
          <div className="legtrigger">?</div>
          <div className="legbox">
            <div className="legbox-header">
              <span className="legbox-title">Archive Guide</span>
              <span className="legbox-subtitle">A map of electronic music — origins, migrations, mutations</span>
            </div>

            <div className="legbox-grid">

              {/* Column 1 */}
              <div className="legbox-col">
                <div className="legbox-section">About</div>
                <p className="leg-prose">
                  This archive documents the genealogy of house, techno, and related electronic music forms.
                  Every connection is based on documented history — interviews, biographies, liner notes, and academic sources.
                  It is an ongoing documentation intended to evolve with the scene.
                </p>

                <div className="legbox-section" style={{ marginTop: 12 }}>The Map</div>
                <p className="leg-prose">
                  The vertical axis is time — nodes are placed at the year they became significant.
                  The horizontal axis is geography — regions run left to right as columns.
                </p>

                <div className="legbox-section" style={{ marginTop: 12 }}>Navigation</div>
                {[
                  { key: 'click node',    desc: 'Open detail panel — description, releases, and connections' },
                  { key: 'scroll',        desc: 'Pan vertically through the timeline' },
                  { key: 'click region',  desc: 'Expand into city sub-columns' },
                  { key: '← all regions', desc: 'Return to the full map view' },
                  { key: 'blank area',    desc: 'Deselect and return to all nodes view' },
                  { key: 'breadcrumb',    desc: 'Jump back through your selection history' },
                ].map(({ key, desc }) => (
                  <div key={key} className="leg-kv">
                    <span className="leg-key">{key}</span>
                    <span className="leg-val">{desc}</span>
                  </div>
                ))}

                <div className="legbox-section" style={{ marginTop: 12 }}>Detail Panel</div>
                {[
                  { key: 'name in text', desc: 'Click any highlighted name to navigate to that node' },
                  { key: 'drag header', desc: 'Reposition the panel freely' },
                  { key: '✕',                 desc: 'Close panel but keep node highlighted' },
                ].map(({ key, desc }) => (
                  <div key={key} className="leg-kv">
                    <span className="leg-key">{key}</span>
                    <span className="leg-val">{desc}</span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="legbox-col">
                <div className="legbox-section">Node Types</div>
                {[
                  { type: 'artist',  swatch: '#4a7fc1', label: 'Artist',  desc: 'Individual producers, DJs, musicians, and groups' },
                  { type: 'label',   swatch: '#c87828', label: 'Label',   desc: 'Record labels, distributors, and catalogue-holders' },
                  { type: 'venue',   swatch: '#3a9a50', label: 'Venue',   desc: 'Clubs, warehouses, studios, and recurring parties' },
                  { type: 'moment',  swatch: '#8844cc', label: 'Moment',  desc: 'Pivotal cultural or historical events in the scene' },
                  { type: 'style',   swatch: '#b07800', label: 'Style',   desc: 'Musical subgenres and sound signatures' },
                  { type: 'culture', swatch: '#bb3333', label: 'Culture', desc: 'Social, political, and community contexts that shaped the music' },
                  { type: 'channel', swatch: '#1a8888', label: 'Channel', desc: 'YouTube channels and streaming platforms that curate and champion electronic music' },
                ].map(({ type, swatch, label, desc }) => {
                  const W = 28, H = 13, hw = W/2, hh = H/2, oc = 3, nd = 2, ni = 3, fc = 4;
                  const shapeEl = type === 'artist'
                    ? <rect x={1} y={1} width={W-2} height={H-2} rx={6} fill="none" stroke={swatch} strokeWidth={1.2} />
                    : type === 'label'
                    ? <polygon points={`${hw-oc+1},1 ${W-oc},1 ${W-1},${hh-oc+1} ${W-1},${hh+oc-1} ${W-oc},${H-1} ${hw-oc+1},${H-1} 1,${hh+oc-1} 1,${hh-oc+1}`} fill="none" stroke={swatch} strokeWidth={1.2} />
                    : type === 'venue'
                    ? <rect x={1} y={1} width={W-2} height={H-2} rx={1.5} fill="none" stroke={swatch} strokeWidth={1.2} />
                    : type === 'channel'
                    ? <polygon points={`1,1 ${W-1-fc},1 ${W-1},${1+fc} ${W-1},${H-1} 1,${H-1}`} fill="none" stroke={swatch} strokeWidth={1.2} />
                    : /* notch (style/moment/culture) */
                      <polygon points={`1,1 ${W-1},1 ${W-1},${hh-ni} ${W-1-nd},${hh} ${W-1},${hh+ni} ${W-1},${H-1} 1,${H-1} 1,${hh+ni} ${1+nd},${hh} 1,${hh-ni}`} fill="none" stroke={swatch} strokeWidth={1.2} />;
                  return (
                    <div key={type} className="leg-type-row">
                      <svg width={W} height={H} style={{ flexShrink:0, overflow:'visible' }}>{shapeEl}</svg>
                      <span className="leg-label">{label}<span className="leg-sub">{desc}</span></span>
                    </div>
                  );
                })}

                <div className="legbox-section" style={{ marginTop: 12 }}>Filters</div>
                <p className="leg-prose">
                  The node type chips in the status bar toggle visibility of each type —
                  both on the map and in search results. Click any chip to hide or reveal that layer.
                </p>
                <p className="leg-prose">
                  The search bar (top left) filters by name in real time. Arrow keys navigate results;
                  Enter or click to select.
                </p>
              </div>

              {/* Column 3 */}
              <div className="legbox-col">
                <div className="legbox-section">Connection Types</div>
                {[
                  { dash: undefined, sw: 2.2, col: '#5577cc', label: 'Direct lineage',        desc: 'Documented origin — a label founding, a direct musical descent, or a venue that created a scene' },
                  { dash: undefined, sw: 1.4, col: '#cc7700', label: 'Roster / release',      desc: 'An artist released on a label or held a residency at a venue' },
                  { dash: '7 3',     sw: 1.1, col: '#009966', label: 'Acknowledged influence', desc: 'Cited in interviews, press, or documented statements' },
                  { dash: '2 5',     sw: 0.9, col: '#cc44aa', label: 'Aesthetic kinship',      desc: 'Shared sensibility, scene overlap, or mutual osmosis' },
                ].map(({ dash, sw, col, label, desc }) => (
                  <div key={label} className="leg-conn-row">
                    <div className="leg-line-wide">
                      <svg width={44} height={14}>
                        <line x1={0} y1={7} x2={44} y2={7} stroke={col} strokeWidth={sw} strokeDasharray={dash} strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="leg-label">{label}<span className="leg-sub">{desc}</span></span>
                  </div>
                ))}

                <div className="legbox-section" style={{ marginTop: 12 }}>Colour &amp; Appearance</div>
                {[
                  { key: 'color × type',  desc: 'Colour each node by its type — artist, label, venue, etc.' },
                  { key: 'color × genre', desc: 'Colour each node by its musical genre' },
                  { key: 'void',          desc: 'Mono palette — cyan on black' },
                  { key: 'acid',          desc: 'Mono palette — lime on black' },
                  { key: 'rust',          desc: 'Mono palette — iron orange on black' },
                  { key: 'dark / light',  desc: 'Toggle between dark and light mode — switches automatically with sunrise and sunset' },
                ].map(({ key, desc }) => (
                  <div key={key} className="leg-kv">
                    <span className="leg-key">{key}</span>
                    <span className="leg-val">{desc}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Node breadcrumb bar — always rendered to avoid layout shift on selection */}
      <div className="nodebreadcrumb" style={themeStyle ? { background: themeStyle.surface, borderBottomColor: themeStyle.border } : undefined}>
        {!selected && !pinned && !welcomeDone && (
          <div className="nbc-welcome" onAnimationEnd={() => setWelcomeDone(true)}>
            {'› Welcome to Archive — Mapping the electronic underground. An interactive resource for discovery and learning about the emergence of electronic music and its culture. Have fun!'}
          </div>
        )}
        {(selected || pinned) && <>
          <div className="nbc-home" onClick={() => { clearAll(); flyHome(); }}>← ALL NODES</div>
          <div className="nbc-sep" />
          {history.map((id, i) => {
            const nd = NODES.find(n => n.id === id);
            if (!nd) return null;
            const col = getThemeColors(nd, colorTheme, darkMode)?.stroke;
            return [
              <div key={`ni-${id}-${i}`} className="nbc-item" style={col ? { color: col } : undefined} onClick={() => jumpToHistory(i)}>{nd.label}</div>,
              <div key={`na-${id}-${i}`} className="nbc-arrow">›</div>,
            ];
          })}
          {(() => {
            const curId = selected || pinned;
            const nd = NODES.find(n => n.id === curId);
            const col = nd ? getThemeColors(nd, colorTheme, darkMode)?.stroke : null;
            return <div className="nbc-current" style={col ? { color: col } : undefined}>{nd?.label}</div>;
          })()}
        </>}
      </div>

      {/* Region label bar */}
      {expanded && (
        <div className="regionlabel" style={themeStyle ? { background: themeStyle.surface, borderBottomColor: themeStyle.border } : undefined}>
          <div className="regionlabel-back" onClick={() => { setExpanded(null); clearAll(); }}>
            ← ALL REGIONS
          </div>
          <div className="regionlabel-sep" />
          <strong>{(REGIONS[expanded]?.label || expanded).toUpperCase()}</strong>
        </div>
      )}

      {/* Canvas */}
      <div className="canvas" style={themeStyle ? { background: themeStyle.bg } : undefined}>

        {/* Fixed year strip (left) + matching border strip (right) */}
        <div className="right-strip" style={themeStyle ? { background: themeStyle.surface, borderLeftColor: themeStyle.border } : undefined} />
        <div className="year-strip" style={themeStyle ? { background: themeStyle.surface, borderRightColor: themeStyle.border } : undefined}>
          {YEAR_LABELS.map(y => {
            const screenY = eraY(y) * tf.k + tf.y;
            if (screenY < -20 || screenY > window.innerHeight) return null;
            return (
              <div key={y} className="year-label-fixed" style={{ top: screenY }}>
                {String(y)}
              </div>
            );
          })}
        </div>

        {/* Pinned column header strip */}
        <div className="column-header-strip" style={themeStyle ? { background: themeStyle.surface, borderBottomColor: themeStyle.border } : undefined}>
          {!expanded && Object.entries(REGIONS).map(([key, r]) => {
            const svgCenterX = (REGION_LEFTS[key] || LEFT) + (REGION_WIDTHS[key] || 0) / 2;
            const hasNodes = NODES.some(n => (COUNTRY_REGION[n.country] || 'DE') === key);
            if (!hasNodes) return null;
            const screenX = svgCenterX * tf.k + tf.x;
            if (screenX < -300 || screenX > window.innerWidth + 300) return null;
            return (
              <div key={key} className="column-header-label"
                style={{ left: screenX, cursor: 'pointer' }}
                onClick={() => doExpand(key)}>
                {r.label.toUpperCase()}
              </div>
            );
          })}
          {expanded && (() => {
            const cities = sortedCities(expanded);
            const bw = (W - LEFT) / cities.length;
            return cities.map((city, i) => {
              const svgCenterX = LEFT + bw * i + bw / 2;
              const screenX = svgCenterX * tf.k + tf.x;
              return (
                <div key={city} className="column-header-label" style={{ left: screenX }}>
                  {city.toUpperCase()}
                </div>
              );
            });
          })()}
        </div>

        <svg ref={svgRef} className="msv">
          <rect x={0} y={0} width="100%" height="100%" fill={themeStyle?.bg || (darkMode ? '#0c0c10' : '#ffffff')} onClick={() => { clearAll(); flyHome(); }} />
          <g ref={svgGRef} style={{ transformOrigin: '0 0', willChange: 'transform' }}>

            {/* Year grid */}
            <g>
              {YEAR_LINES.map(y => (
                <line key={'y'+y} x1={0} y1={eraY(y)} x2={W} y2={eraY(y)}
                  stroke={themeAccent
                    ? YEAR_LABELS.includes(y) ? themeAccent + '44' : themeAccent + '1a'
                    : YEAR_LABELS.includes(y) ? (darkMode ? '#252535' : '#cccccc') : (darkMode ? '#181828' : '#ebebeb')}
                  strokeWidth={YEAR_LABELS.includes(y) ? 0.7 : 0.3} />
              ))}
            </g>

            {/* Global view */}
            {!expanded && (
              <g>
                {Object.entries(REGIONS).map(([key]) => {
                  const x = REGION_LEFTS[key] || LEFT;
                  return <line key={key} x1={x} y1={0} x2={x} y2={H} stroke={themeAccent ? themeAccent + '55' : (darkMode ? '#252535' : '#e0e0e0')} strokeWidth={1} />;
                })}
                {hlIds ? <>
                  {/* dim edges → dim nodes → lit edges → hover dashes → hover-preview nodes → highlighted nodes */}
                  <g>{edgeEls.filter(el => el?.props?.className?.includes('dim'))}</g>
                  <g>{nodeEls.filter((el, i) => el && !hlIds.has(NODES[i].id) && !hovHlIds?.has(NODES[i].id))}</g>
                  <g>{edgeEls.filter(el => el && !el.props?.className?.includes('dim'))}</g>
                  {hovPathEls && <g style={{ pointerEvents:'none' }}>{hovPathEls}</g>}
                  <g>{nodeEls.filter((el, i) => el && !hlIds.has(NODES[i].id) &&  hovHlIds?.has(NODES[i].id))}</g>
                  <g>{nodeEls.filter((el, i) => el &&  hlIds.has(NODES[i].id))}</g>
                </> : <>
                  {/* no selection: edges → edge dashes → nodes */}
                  <g>{edgeEls.filter(Boolean)}</g>
                  {hovPathEls && <g style={{ pointerEvents:'none' }}>{hovPathEls}</g>}
                  <g>{nodeEls.filter(Boolean)}</g>
                </>}
              </g>
            )}

            {/* Expanded view */}
            {expanded && (() => {
              const cities = sortedCities(expanded);
              const bw = (W - LEFT) / cities.length;
              return (
                <>
                  <g className="expand-anim">
                    {cities.map((city, i) => {
                      const x = LEFT + bw * i;
                      return i > 0
                        ? <line key={city} x1={x} y1={0} x2={x} y2={H} stroke={themeAccent ? themeAccent + '55' : (darkMode ? '#252535' : '#e0e0e0')} strokeWidth={1} />
                        : null;
                    })}
                  </g>
                  {hlIds ? <>
                    <g>{edgeEls.filter(el => el?.props?.className?.includes('dim'))}</g>
                    <g>{nodeEls.filter((el, i) => el && !hlIds.has(NODES[i].id) && !hovHlIds?.has(NODES[i].id))}</g>
                    <g>{edgeEls.filter(el => el && !el.props?.className?.includes('dim'))}</g>
                    {hovPathEls && <g style={{ pointerEvents:'none' }}>{hovPathEls}</g>}
                    <g>{nodeEls.filter((el, i) => el && !hlIds.has(NODES[i].id) &&  hovHlIds?.has(NODES[i].id))}</g>
                    <g>{nodeEls.filter((el, i) => el &&  hlIds.has(NODES[i].id))}</g>
                  </> : <>
                    <g>{edgeEls.filter(Boolean)}</g>
                    {hovPathEls && <g style={{ pointerEvents:'none' }}>{hovPathEls}</g>}
                    <g>{nodeEls.filter(Boolean)}</g>
                  </>}
                </>
              );
            })()}

          </g>
        </svg>

        {/* Detail panel */}
        {(() => {
          const tc = colorTheme === 'type' && selNode ? (darkMode ? TYPE_COLORS[selNode.type]?.dark : TYPE_COLORS[selNode.type]?.light) : null;
          const panelStyle = {
            ...(panelX !== null ? { left: panelX, right: 'auto' } : {}),
            ...(themeStyle && !tc ? { background: themeStyle.surface, borderLeftColor: themeStyle.border, borderRightColor: themeStyle.border } : {}),
            ...(tc ? { background: tc.fill, borderLeftColor: tc.stroke, borderLeftWidth: panelOnLeft ? undefined : '3px', borderRightColor: panelOnLeft ? tc.stroke : undefined, borderRightWidth: panelOnLeft ? '3px' : undefined } : {}),
          };
          return (
        <div
          className={`dp${selected ? ' open' : ''}${isDragging ? ' dragging' : ''}${panelOnLeft && panelX === null ? ' left' : ''}`}
          style={panelStyle}
          onMouseDown={handlePanelDragStart}
        >

          {/* Drag indicator — aligned with × button, always pulsing */}
          <div className="dp-move-hint">
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="dp-arrow-blink">
              <line x1="18" y1="4" x2="3" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <polyline points="6,1 0,4 6,7" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
            <span className="dp-move-label">move</span>
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="dp-arrow-blink">
              <line x1="0" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <polyline points="12,1 18,4 12,7" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
          </div>

          {selNode && (
            <>
              <div className="dp-toprow">
                <button className="dp-close" onClick={closePanel}>×</button>
              </div>

              {/* Type pill */}
              <div className={`dp-pill dp-pill-${selNode.type}`}>{selNode.type}</div>

              {/* Name */}
              <div className="dp-name">{selNode.label}</div>

              {/* Era bar */}
              <div className="dp-era-wrap">
                <div className="dp-era-track">
                  <div className="dp-era-fill" style={{ width: `${((selNode.era - ERA_MIN) / (ERA_MAX - ERA_MIN)) * 100}%` }} />
                  <div className="dp-era-dot" style={{ left: `${((selNode.era - ERA_MIN) / (ERA_MAX - ERA_MIN)) * 100}%` }} />
                </div>
                <div className="dp-era-labels">
                  <span>{ERA_MIN}</span>
                  <span className="dp-era-val">{selNode.era}</span>
                  <span>{ERA_MAX}</span>
                </div>
              </div>

              {/* Meta */}
              <div className="dp-meta">
                <div className="dp-meta-row">
                  <div className="dp-cdot" style={{ background: COUNTRIES[selNode.country]?.color || '#555' }} />
                  {`${COUNTRIES[selNode.country]?.label || selNode.country} · ${selNode.city || ''}`}
                </div>
                <div>{GENRES[selNode.genre]?.label || selNode.genre}</div>
              </div>

              {/* Photo */}
              {PHOTOS[selNode.id] && (
                <div className="dp-photo-wrap">
                  <div className="dp-photo-inner">
                    <img
                      className="dp-photo"
                      src={PHOTOS[selNode.id].url}
                      alt={selNode.label}
                      loading="lazy"
                    />
                    <svg className="dp-photo-frame" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      {photoColors && (
                        <defs>
                          <linearGradient id="dp-pg" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                            {photoColors.flatMap((color, i, arr) => {
                              const pct = n => `${(n / arr.length * 100).toFixed(2)}%`;
                              return [
                                <stop key={`${i}a`} offset={pct(i)}   stopColor={color} />,
                                <stop key={`${i}b`} offset={pct(i+1)} stopColor={color} />,
                              ];
                            })}
                          </linearGradient>
                        </defs>
                      )}
                      <rect
                        className="dp-frame-dots"
                        style={photoColors ? { stroke: 'url(#dp-pg)' } : undefined}
                      />
                    </svg>
                  </div>
                  <div className="dp-photo-credit">
                    {PHOTOS[selNode.id].author && <span>{PHOTOS[selNode.id].author} · </span>}
                    {PHOTOS[selNode.id].licenseUrl
                      ? <a href={PHOTOS[selNode.id].licenseUrl} target="_blank" rel="noopener noreferrer">{PHOTOS[selNode.id].license}</a>
                      : <span>{PHOTOS[selNode.id].license}</span>
                    }
                    {' · Wikimedia Commons'}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="dp-desc">{renderDesc(selNode.desc, selNode.id, id => { selectNode(id); scrollToNode(id); })}</div>

              {/* Bandcamp */}
              {selNode.bandcamp && (
                <div className="dp-bandcamp">
                  {selNode.bandcamp_album && (
                    <button
                      className={`dp-play-btn${playingNodeId === selNode.id ? ' dp-play-btn--on' : ''}`}
                      onClick={() => setPlayingNodeId(selNode.id)}
                    >
                      {playingNodeId === selNode.id ? '♪ now playing' : '▶ listen'}
                    </button>
                  )}
                  <a className="dp-bc-link" href={`https://${selNode.bandcamp}.bandcamp.com`} target="_blank" rel="noopener noreferrer">
                    Bandcamp ↗
                  </a>
                </div>
              )}

              {/* Key Releases */}
              {selNode.releases?.length > 0 && (
                <div className="dp-releases">
                  <div className="dp-sec">Key Releases <span className="dp-sec-count">{selNode.releases.length}</span></div>
                  {[...selNode.releases].sort((a, b) => b.year - a.year).map((r, i) => (
                    <div key={i} className="dp-release">
                      <span className="dp-release-title">{formatRelease(r.title)}</span>
                      <span className="dp-release-year">{r.year}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Connections grouped by type + direction */}
              {selConns.length > 0 && (
                <div className="dp-conns-wrap">
                  {[
                    { type: 'lineage',   dir: 'out', label: 'Gave rise to'     },
                    { type: 'lineage',   dir: 'in',  label: 'Originated from'  },
                    { type: 'roster',    dir: 'out', label: 'Released work by'  },
                    { type: 'roster',    dir: 'in',  label: 'Released on'       },
                    { type: 'influence', dir: 'out', label: 'Influenced'        },
                    { type: 'influence', dir: 'in',  label: 'Influenced by'     },
                  ].map(({ type, dir, label }) => {
                    const group = selConns.filter(c =>
                      c.type === type && (dir === null || c.dir === dir)
                    );
                    if (!group.length) return null;
                    return (
                      <div key={`${type}-${dir}`}>
                        <div className="dp-sec">{label} <span className="dp-sec-count">{group.length}</span></div>
                        {group.map(c => (
                          <div key={c.node.id} className="dp-conn" onClick={() => { selectNode(c.node.id); scrollToNode(c.node.id, 0.2); }}>
                            <div className="dp-conn-dot" style={{ background: COUNTRIES[c.node.country]?.color || '#555' }} />
                            <div className="dp-conn-info">
                              <span className="dp-conn-name">{c.node.label}</span>
                              <span className="dp-conn-sub">{c.node.city || c.node.country} · {c.node.era}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
          );
        })()}


        {/* Hover tip */}
        {hovNode && (
          <div className="htip on" style={{ left: hovPos.x + 14, top: hovPos.y + 14 }}>
            <div className="htip-meta">{hovNode.type} · {hovNode.era}</div>
            <div className="htip-desc">{hovNode.desc?.split(/\.\s+/)[0]}.</div>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="statusbar" style={themeStyle ? { background: themeStyle.surface, borderTopColor: themeStyle.border } : undefined}>
        <div className="statusbar-item">
          <strong>{NODES.filter(n => filteredIds.has(n.id)).length}</strong> nodes
        </div>
        <div className="statusbar-sep" />
        <div className="statusbar-item">
          <strong>{visibleEdges.length}</strong> connections
        </div>
        {/* Node type filter — always visible, drives display + search */}
        <div className="statusbar-sep" />
        <div className="sb-type-filter">
          <span className="sb-type-label">Node type</span>
          {[
            { key: 'artist', label: 'Artist' },
            { key: 'label',  label: 'Label'  },
            { key: 'venue',  label: 'Venue'  },
            { key: 'moment',  label: 'Moment'  },
            { key: 'style',   label: 'Style'   },
            { key: 'culture', label: 'Culture' },
            { key: 'channel', label: 'Channel' },
          ].map(({ key, label }) => {
            const on = typeFilters[key] !== false;
            // Match exact node colors for each type + theme
            let chipFill, chipStroke, chipText;
            if (colorTheme === 'type') {
              const c = darkMode ? TYPE_COLORS[key]?.dark : TYPE_COLORS[key]?.light;
              chipFill   = c?.fill   ?? (darkMode ? '#0c0c10' : '#ffffff');
              chipStroke = c?.stroke ?? (darkMode ? 'rgba(255,255,255,0.9)' : '#000000');
              chipText   = c?.text   ?? (darkMode ? '#e0ddd8' : '#0a0a0a');
            } else if (MONO_PALETTES[colorTheme]) {
              const p  = MONO_PALETTES[colorTheme];
              const tc = p[key] ?? p.artist;
              chipFill   = darkMode ? tc.dark.fill   : tc.light.fill;
              chipStroke = darkMode ? tc.dark.stroke : tc.light.stroke;
              chipText   = darkMode ? tc.dark.text   : tc.light.text;
            } else {
              // default / genre — exactly like plain nodes (white fill, black stroke)
              chipFill   = darkMode ? '#0c0c10' : '#ffffff';
              chipStroke = darkMode ? 'rgba(255,255,255,0.9)' : '#000000';
              chipText   = darkMode ? '#e0ddd8' : '#0a0a0a';
            }
            const CW = 5.5, CP = 7, CBH = 17;
            const isNotchT = key === 'style' || key === 'moment' || key === 'culture';
            const isLblT   = key === 'label';
            const isArtT   = key === 'artist';
            const isChanT  = key === 'channel';
            const cbw  = label.length * CW + CP * 2 + (isNotchT ? 10 : 0);
            const chw  = cbw / 2, chh = CBH / 2;
            const coc = 5, cnd = 4, cni = 5, cfc = 6;
            const svgW = cbw + 4, svgH = CBH + 4;
            const ccx = svgW / 2, ccy = svgH / 2;
            const octP  = `${-chw+coc},${-chh} ${chw-coc},${-chh} ${chw},${-chh+coc} ${chw},${chh-coc} ${chw-coc},${chh} ${-chw+coc},${chh} ${-chw},${chh-coc} ${-chw},${-chh+coc}`;
            const ntchP = `${-chw},${-chh} ${chw},${-chh} ${chw},${-cni} ${chw-cnd},0 ${chw},${cni} ${chw},${chh} ${-chw},${chh} ${-chw},${cni} ${-chw+cnd},0 ${-chw},${-cni}`;
            const chanP = `${-chw},${-chh} ${chw-cfc},${-chh} ${chw},${-chh+cfc} ${chw},${chh} ${-chw},${chh}`;
            const shEl = isArtT
              ? <rect x={-chw} y={-chh} width={cbw} height={CBH} rx={8} fill={chipFill} stroke={chipStroke} strokeWidth={0.75} />
              : isLblT
              ? <polygon points={octP}  fill={chipFill} stroke={chipStroke} strokeWidth={0.75} />
              : isNotchT
              ? <polygon points={ntchP} fill={chipFill} stroke={chipStroke} strokeWidth={0.75} />
              : isChanT
              ? <polygon points={chanP} fill={chipFill} stroke={chipStroke} strokeWidth={0.75} />
              : <rect x={-chw} y={-chh} width={cbw} height={CBH} rx={2} fill={chipFill} stroke={chipStroke} strokeWidth={0.75} />;
            return (
              <button
                key={key}
                data-nodetype={key}
                className={`sb-type-chip${on ? ' on' : ''}`}
                style={{ opacity: on ? 1 : 0.32 }}
                onClick={() => setTypeFilters(prev => ({ ...prev, [key]: !prev[key] }))}
              >
                <svg width={svgW} height={svgH} style={{ display:'block' }}>
                  <g transform={`translate(${ccx},${ccy})`}>
                    {shEl}
                    <text textAnchor="middle" dominantBaseline="middle"
                      style={{ fill:chipText, fontSize:'10px', fontFamily:"'Syne Mono',monospace", fontWeight:400, letterSpacing:'0.08em' }}>
                      {label}
                    </text>
                  </g>
                </svg>
              </button>
            );
          })}
        </div>

        {/* Inline player — always visible, auto-starts on a random node */}
        {(() => {
          const playerNodes = NODES.filter(n => n.bandcamp_album);
          if (!playerNodes.length) return null;
          const pNode = playerNodes.find(n => n.id === playingNodeId) ?? playerNodes[0];
          const idx = playerNodes.findIndex(n => n.id === pNode.id);
          const prev = playerNodes[(idx - 1 + playerNodes.length) % playerNodes.length];
          const next = playerNodes[(idx + 1) % playerNodes.length];
          return (<>
            <div style={{flex:3}} />
            <div className="player-inline">
              <div className="player-sep" />
              <span className="player-name">{pNode.label}</span>
              <div className="player-iframe-wrap">
                <iframe
                  key={pNode.id}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${pNode.bandcamp_album}/size=small/bgcol=${darkMode ? '0c0c10' : 'ffffff'}/linkcol=${darkMode ? 'aaaacc' : '0687f5'}/tracklist=false/transparent=true/autoplay=true/`}
                  seamless
                  title={`${pNode.label} on Bandcamp`}
                />
              </div>
              {playerNodes.length > 1 && (
                <>
                  <button className="player-btn" onClick={() => setPlayingNodeId(prev.id)} title={`Previous: ${prev.label}`}>‹</button>
                  <button className="player-btn" onClick={() => setPlayingNodeId(next.id)} title={`Next: ${next.label}`}>›</button>
                </>
              )}
              <button className="player-btn player-btn--show" onClick={() => { selectNode(pNode.id); scrollToNode(pNode.id); }}>show node</button>
              <a className="player-ext" href={`https://${pNode.bandcamp}.bandcamp.com`} target="_blank" rel="noopener noreferrer" title="Open on Bandcamp">↗</a>
            </div>
            <div style={{flex:1}} />
          </>);
        })()}

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            className="support-link"
            href="https://ko-fi.com"
            target="_blank"
            rel="noopener noreferrer"
          >support this archive</a>
          {!unlocked && (
            <span className="trial-counter" onClick={() => setPaywallOpen(true)}>
              {Math.max(0, TRIAL_LIMIT - trialCount)} free views left
            </span>
          )}
          <div className="statusbar-sep" />
          <div className="statusbar-item">ARCHIVE — Mapping the electronic underground · v0.2</div>
          <div className="statusbar-sep" />
          <button className="tour-relaunch" onClick={() => setOnboardStep('welcome')} title="Relaunch intro">?</button>
        </div>
      </div>

      {/* ── ONBOARDING WELCOME ─────────────────────────────────────────────── */}
      {onboardStep === 'welcome' && (
        <div className="onboard-overlay">
          <div className="onboard-modal">
            <div className="onboard-wordmark">ARCHIVE</div>
            <div className="onboard-pitch">
              Six decades of electronic music, mapped from the inside. 650+ artists, labels, clubs, and pivotal moments — all connected by real influence, collaboration, and lineage. Explore freely, or let us show you around.
            </div>
            <div className="onboard-btns">
              <button className="onboard-btn-primary" onClick={dismissOnboard}>Start exploring</button>
              <button className="onboard-btn-secondary" onClick={startTour}>Take a tour</button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOUR v2 ─────────────────────────────────────────────────────────── */}
      {typeof onboardStep === 'number' && (<>
        <div className="tour-scrim" onClick={dismissOnboard} />

        {tourHL && (tourHL.tw > 0) && tourHL.side !== 'center' && (
          <div key={`hl-${onboardStep}`} className="tour-hl-box" style={{ left: tourHL.tx - 6, top: tourHL.ty - 6, width: tourHL.tw + 12, height: tourHL.th + 12 }}>
            <span className="tour-hl-c tour-hl-tl" /><span className="tour-hl-c tour-hl-tr" />
            <span className="tour-hl-c tour-hl-bl" /><span className="tour-hl-c tour-hl-br" />
          </div>
        )}

        {tourHL?.lineStart && (
          <svg className="tour-connector" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="tour-ah" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
            <line
              x1={tourHL.lineStart.x} y1={tourHL.lineStart.y}
              x2={tourHL.lineEnd.x}   y2={tourHL.lineEnd.y}
              stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.75"
              markerEnd="url(#tour-ah)"
            />
          </svg>
        )}

        {tourHL && (
          <div
            className="tour-card-v2"
            style={tourHL.cardStyle}
            onClick={e => e.stopPropagation()}
          >
            <div className="tour-v2-progress">
              {TOUR_STEPS.map((_, i) => (
                <div key={i} className={`tour-v2-pip${i <= onboardStep ? ' active' : ''}`} />
              ))}
            </div>
            <div className="tour-text-zone">
              <canvas ref={textCanvasRef} className="tour-text-pixels" />
              <div className="tour-v2-title">{TOUR_STEPS[onboardStep].title}</div>
              <div className="tour-v2-body">{TOUR_STEPS[onboardStep].body}</div>
            </div>
            <div className="tour-v2-nav">
              <button className="tour-v2-skip" onClick={dismissOnboard}>Skip</button>
              <button className="tour-v2-next" onClick={nextTour}>
                {onboardStep === TOUR_STEPS.length - 1 ? 'Start exploring' : 'Next →'}
              </button>
            </div>
          </div>
        )}
      </>)}

      {paywallOpen && (
        <div className="paywall-overlay" onClick={e => { if (e.target === e.currentTarget) setPaywallOpen(false); }}>
          <div className="paywall-modal">
            <div className="paywall-title">You've used your free node views</div>
            <div className="paywall-body">
              The Archive is an ever-evolving project — currently mapping 650+ artists, labels, venues, and scenes across the history of electronic music, with new nodes and connections added continuously. By purchasing access you are also directly supporting the ongoing documentation.
            </div>
            <a
              className="paywall-buy"
              href="https://archivemteu.lemonsqueezy.com/checkout/buy/5737d134-2364-44c3-920f-7a1c635f91b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get one year of access — €10
            </a>
            <div className="paywall-divider">Already purchased?</div>
            <input
              className="paywall-input"
              type="text"
              placeholder="Paste your license key here"
              value={licenseKey}
              onChange={e => { setLicenseKey(e.target.value); setVerifyError(''); }}
              onKeyDown={e => e.key === 'Enter' && verifyLicense()}
            />
            {verifyError && <div className="paywall-error">{verifyError}</div>}
            <button className="paywall-verify" onClick={verifyLicense} disabled={verifying}>
              {verifying ? 'Verifying…' : 'Unlock'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
