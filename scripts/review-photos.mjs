/**
 * Generates a photo review page — open review-photos.html in your browser
 * to visually scan all artist photos and spot any that are wrong.
 *
 * Run: node scripts/review-photos.mjs
 */

import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PHOTOS } from '../src/data/photos.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cards = Object.entries(PHOTOS).map(([id, p]) => `
  <div class="card">
    <img src="${p.url}" alt="${id}" loading="lazy" />
    <div class="name">${id}</div>
    <div class="license">${p.license}</div>
    <div class="author">${p.author || ''}</div>
  </div>
`).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Photo Review — ${Object.keys(PHOTOS).length} artists</title>
<style>
  body { background: #111; color: #ccc; font-family: monospace; margin: 0; padding: 20px; }
  h1 { font-size: 1rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 20px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
  .card { background: #1a1a1a; border: 1px solid #333; padding: 8px; }
  .card img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; background: #222; }
  .name { font-size: 0.7rem; margin-top: 6px; color: #eee; letter-spacing: 0.04em; }
  .license { font-size: 0.55rem; color: #666; margin-top: 2px; }
  .author { font-size: 0.55rem; color: #555; margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
</style>
</head>
<body>
<h1>Photo Review — ${Object.keys(PHOTOS).length} artist photos · scan for wrong images</h1>
<div class="grid">${cards}</div>
</body>
</html>`;

const dest = path.join(__dirname, '../review-photos.html');
writeFileSync(dest, html, 'utf8');
console.log(`\nWritten → review-photos.html\nOpen it in your browser to review all ${Object.keys(PHOTOS).length} photos.\n`);
