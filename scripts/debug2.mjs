import https from 'https';

function fetch(url, redir = 5) {
  return new Promise(r => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if ([301,302,303].includes(res.statusCode) && res.headers.location && redir > 0) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        r(fetch(next, redir - 1)); return;
      }
      let h = ''; res.on('data', d => h += d); res.on('end', () => r({ h, s: res.statusCode }));
    });
    req.on('error', () => r({ h: '', s: 0 }));
    req.setTimeout(10000, () => { req.destroy(); r({ h: '', s: 0 }); });
  });
}

const { h, s } = await fetch('https://hyperdub.bandcamp.com');
console.log('status:', s, 'len:', h.length);

const patterns = [
  /album_id&quot;:(\d+)/,
  /"album_id":(\d+)/,
  /tralbum_id&quot;:(\d+)/,
  /"tralbum_id":(\d+)/,
  /data-tralbum-id="(\d+)"/,
  /data-item-id="(\d+)"/,
  /"id":(\d+),"band_id"/,
  /Bandcamps\.data_tralbums\s*=\s*\[(\d+)/,
];
patterns.forEach(p => {
  const m = h.match(p);
  console.log(String(p).slice(0, 55).padEnd(55), '->', m ? m[1] : 'null');
});

// Show 300 chars around first occurrence of useful keywords
for (const kw of ['tralbum', 'album_id', 'pagedata', 'data-band']) {
  const i = h.indexOf(kw);
  if (i > -1) { console.log(`\n[${kw} at ${i}]:`, h.slice(Math.max(0,i-20), i+180)); break; }
}
