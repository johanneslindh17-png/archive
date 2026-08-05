import https from 'https';

function fetchHtml(url, redir = 5) {
  return new Promise(r => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if ([301,302,303].includes(res.statusCode) && res.headers.location && redir > 0) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        r(fetchHtml(next, redir - 1)); return;
      }
      let h = ''; res.on('data', d => h += d); res.on('end', () => r({ h, status: res.statusCode }));
    });
    req.on('error', () => r({ h: '', status: 0 }));
    req.setTimeout(12000, () => { req.destroy(); r({ h: '', status: 0 }); });
  });
}

// Test hyperdub — find first album link then inspect that page
const base = 'https://hyperdub.bandcamp.com';
const { h: main, status: s1 } = await fetchHtml(`${base}/music`);
console.log('main status:', s1, 'len:', main.length);

const albumMatch = main.match(/href="(\/album\/[^"?]+)"/);
console.log('first album link:', albumMatch ? albumMatch[1] : 'none');

if (albumMatch) {
  const albumUrl = base + albumMatch[1];
  console.log('fetching:', albumUrl);
  const { h: aHtml, status: s2 } = await fetchHtml(albumUrl);
  console.log('album status:', s2, 'len:', aHtml.length);

  // Try all patterns
  const patterns = [
    /album_id&quot;:(\d+)/,
    /"album_id":(\d+)/,
    /data-tralbum-id="(\d+)"/,
    /"id":(\d+),"band_id"/,
    /"tralbum_id":(\d+)/,
    /tralbum_id&quot;:(\d+)/,
    /"current":\{[^}]*"id":(\d+)/,
    /EmbeddedPlayer\/album=(\d+)/,
  ];
  patterns.forEach(p => {
    const m = aHtml.match(p);
    console.log(String(p).slice(0,55).padEnd(55), '->', m ? m[1] : 'null');
  });

  // Print 300 chars around "id":
  const i = aHtml.search(/"id":\d+/);
  if (i > -1) console.log('\nsnippet around "id":', aHtml.slice(Math.max(0,i-30), i+150));
}
