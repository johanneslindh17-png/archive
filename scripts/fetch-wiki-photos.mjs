/**
 * Fetches Wikipedia artist photos, keeps only freely usable licenses
 * (CC0, CC-BY, CC-BY-SA, Public Domain), and writes src/data/photos.js.
 *
 * Run: node scripts/fetch-wiki-photos.mjs
 */

import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { NODES } from '../src/data/nodes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Licenses that are safe for commercial display use
const USABLE = ['cc0', 'cc-zero', 'public domain', 'cc by', 'cc-by', 'pd-', 'no restrictions'];

function isUsable(license) {
  if (!license) return false;
  const l = license.toLowerCase();
  return USABLE.some(p => l.includes(p));
}

function stripHtml(str = '') {
  return str.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200);
}

const UA = 'ArchiveApp/1.0 (music genealogy; johanneslindh17@gmail.com)';

async function apiFetch(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getPhoto(label, wikiTitle) {
  const title = wikiTitle || label;

  // Step 1 — get the article's lead image filename + thumbnail URL
  const step1 = await apiFetch(
    `https://en.wikipedia.org/w/api.php?action=query` +
    `&titles=${encodeURIComponent(title)}` +
    `&prop=pageimages&piprop=thumbnail|name&pithumbsize=400` +
    `&redirects=1&format=json`
  );

  const pages1 = step1.query?.pages;
  if (!pages1) return null;
  const page = Object.values(pages1)[0];
  if (page.missing || !page.pageimage) return null;

  const thumbUrl = page.thumbnail?.source;
  const filename = page.pageimage;

  // Step 2 — get license metadata for that image file
  const step2 = await apiFetch(
    `https://en.wikipedia.org/w/api.php?action=query` +
    `&titles=File:${encodeURIComponent(filename)}` +
    `&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=400` +
    `&format=json`
  );

  const pages2 = step2.query?.pages;
  if (!pages2) return null;
  const filePage = Object.values(pages2)[0];
  const info = filePage.imageinfo?.[0];
  if (!info) return null;

  const meta  = info.extmetadata || {};
  const license    = meta.LicenseShortName?.value || meta.License?.value || '';
  const licenseUrl = meta.LicenseUrl?.value || '';
  const author     = stripHtml(meta.Artist?.value || meta.Credit?.value || '');

  if (!isUsable(license)) return { blocked: license };

  return { url: thumbUrl || info.thumburl, license, licenseUrl, author };
}

// Per-node Wikipedia title overrides.
// Use the exact Wikipedia article title when the label is ambiguous,
// or null to skip fetching entirely (no usable article exists).
const WIKI_OVERRIDES = {
  // Disambiguation: label alone pulls wrong article
  'bicep':              'Bicep (band)',
  'caribou':            'Caribou (musician)',
  'air':                'Air (French band)',
  'justice':            'Justice (French band)',
  'burial':             'Burial (musician)',
  'orbital':            'Orbital (band)',
  'leftfield':          'Leftfield',
  'actress':            'Actress (musician)',
  'surgeon':            'Surgeon (musician)',
  'pangaea':            'Pangaea (musician)',
  'minilogue':          'Minilogue (band)',
  'cassius':            'Cassius (band)',
  'move_d':             'Move D',
  'grooverider':        'Grooverider',
  'global_communication': 'Global Communication (band)',
  'jay_daniel':         'Jay Daniel (musician)',
  'daniel_bell':        'Daniel Bell (musician)',
  'courtesy':           'Courtesy (musician)',
  'floorplan':          'Floorplan (duo)',
  'sara_landry':        'Sara Landry (musician)',

  // Exact title corrections
  'ninakraviz':         'Nina Kraviz',
  'dj_koze':            'DJ Koze',
  'dj_gregory':         'DJ Gregory (musician)',
  'dj_ez':              'DJ EZ',
  'dbridge':            'dBridge',

  // No usable Wikipedia article — skip to avoid wrong image
  'vril':               null,  // occult concept dominates
  'fluxion':            null,  // mathematical term dominates
  'nkisi':              null,  // African spiritual object dominates
  'lotic':              null,  // geological/hydrological term
  'puce_mary':          null,  // no Wikipedia article
  'forgemasters':       null,  // Sheffield steelmakers dominates
  'the_hacker':         null,  // generic term
  'anyma':              null,  // no Wikipedia article
  'polygonia':          null,  // geometric term dominates
  'verraco':            null,  // no Wikipedia article yet
  'ccl':                null,
  'ki_ki':              null,
  'novah':              null,
  'klofama':            null,
};

async function main() {
  const artists = NODES.filter(n => n.type === 'artist');
  console.log(`\nFetching Wikipedia photos for ${artists.length} artist nodes...\n`);

  const photos = {};
  const stats = { found: 0, blocked: 0, missing: 0, error: 0, skipped: 0 };

  for (const artist of artists) {
    const pad = artist.label.padEnd(38);

    // Explicit null override → skip
    if (artist.id in WIKI_OVERRIDES && WIKI_OVERRIDES[artist.id] === null) {
      console.log(`  ${pad}— skipped (no article)`);
      stats.skipped++;
      continue;
    }

    const wikiTitle = WIKI_OVERRIDES[artist.id] || null;
    process.stdout.write(`  ${pad}`);

    try {
      const result = await getPhoto(artist.label, wikiTitle);

      if (!result) {
        console.log('— no image');
        stats.missing++;
      } else if ('blocked' in result) {
        console.log(`✗  ${result.blocked || '(no license)'}`);
        stats.blocked++;
      } else {
        console.log(`✓  ${result.license}`);
        photos[artist.id] = result;
        stats.found++;
      }
    } catch (e) {
      console.log(`!  ${e.message}`);
      stats.error++;
    }

    // ~4 req/sec — well inside Wikipedia's rate limit
    await new Promise(r => setTimeout(r, 250));
  }

  const total = artists.length;
  console.log('\n── Results ─────────────────────────────────');
  console.log(`  ✓ Found (usable):  ${stats.found}`);
  console.log(`  ✗ Blocked license: ${stats.blocked}`);
  console.log(`  — No image:        ${stats.missing}`);
  console.log(`  — Skipped:         ${stats.skipped}`);
  console.log(`  ! Errors:          ${stats.error}`);
  console.log(`  Coverage: ${Math.round(stats.found / total * 100)}% of ${total} artists\n`);

  const out =
`// Auto-generated — do not edit by hand.
// Source: Wikipedia / Wikimedia Commons.
// Licenses: CC0, CC-BY, CC-BY-SA, Public Domain only — safe for commercial use with attribution.
// Re-run: node scripts/fetch-wiki-photos.mjs
export const PHOTOS = ${JSON.stringify(photos, null, 2)};
`;

  const dest = path.join(__dirname, '../src/data/photos.js');
  writeFileSync(dest, out, 'utf8');
  console.log(`Written → src/data/photos.js\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
