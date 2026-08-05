import https from 'https';

function fetchHtml(url, redir = 5) {
  return new Promise(r => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if ([301,302,303].includes(res.statusCode) && res.headers.location && redir > 0) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        r(fetchHtml(next, redir - 1)); return;
      }
      let h = ''; res.on('data', d => h += d); res.on('end', () => r({ h, s: res.statusCode }));
    });
    req.on('error', () => r({ h: '', s: 0 }));
    req.setTimeout(12000, () => { req.destroy(); r({ h: '', s: 0 }); });
  });
}

for (const slug of ['modern-love', 'lobstertheremin']) {
  const url = `https://${slug}.bandcamp.com/music`;
  const { h, s } = await fetchHtml(url);
  console.log(`\n=== ${slug} status:${s} len:${h.length} ===`);

  // Find any href with /album/ or /track/
  const a1 = h.match(/href='(https?:\/\/[^']*\/album\/[^'?]+)/);
  const a2 = h.match(/href="(https?:\/\/[^"]*\/album\/[^"?]+)/);
  const t1 = h.match(/href='(https?:\/\/[^']*\/track\/[^'?]+)/);
  console.log('album (single):', a1 ? a1[1] : 'none');
  console.log('album (double):', a2 ? a2[1] : 'none');
  console.log('track (single):', t1 ? t1[1] : 'none');

  // Count any /album/ occurrences
  const allAlbums = h.match(/\/album\//g);
  console.log('/album/ count:', allAlbums ? allAlbums.length : 0);

  // Show 300 chars around first album occurrence
  const i = h.indexOf('/album/');
  if (i > -1) console.log('context:', h.slice(Math.max(0,i-80), i+200));
  await new Promise(r => setTimeout(r, 600));
}
