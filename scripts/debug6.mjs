import https from 'https';

function fetchHtml(url, redir = 5) {
  return new Promise(r => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if ([301,302,303].includes(res.statusCode) && res.headers.location && redir > 0) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        r(fetchHtml(next, redir - 1)); return;
      }
      let h = ''; res.on('data', d => h += d); res.on('end', () => r({ h, status: res.statusCode, url: url }));
    });
    req.on('error', e => r({ h: '', status: 0, err: e.message }));
    req.setTimeout(12000, () => { req.destroy(); r({ h: '', status: 0 }); });
  });
}

const slugs = [
  { id:'modern_love',      slug:'modernloverecords' },
  { id:'andy_stott',       slug:'andystott' },
  { id:'lobster_theremin', slug:'lobsterthereminrecords' },
  { id:'lfo',              slug:'lfomusic' },
  { id:'bicep',            slug:'bicepmusic' },
  { id:'underworld',       slug:'underworldlive' },
];

for (const { id, slug } of slugs) {
  const base = `https://${slug}.bandcamp.com`;
  const { h, status } = await fetchHtml(`${base}/music`);
  console.log(`\n=== ${id} (${slug}) status:${status} len:${h.length} ===`);

  // Find any album or track link
  const albumM = h.match(/href='(https?:\/\/[^']*\/album\/[^'?]+)/) ||
                 h.match(/href="(https?:\/\/[^"]*\/album\/[^"?]+)/);
  const trackM = h.match(/href='(https?:\/\/[^']*\/track\/[^'?]+)/) ||
                 h.match(/href="(https?:\/\/[^"]*\/track\/[^"?]+)/);
  console.log('  album link:', albumM ? albumM[1] : 'none');
  console.log('  track link:', trackM ? trackM[1] : 'none');

  if (albumM) {
    const { h: ah, status: as } = await fetchHtml(albumM[1]);
    console.log('  album page status:', as, 'len:', ah.length);
    const m = ah.match(/album_id&quot;:(\d+)/) || ah.match(/"album_id":(\d+)/) || ah.match(/"id":(\d+),"band_id"/);
    console.log('  album_id:', m ? m[1] : 'not found in album page');
    // check what patterns exist
    const i = ah.search(/"id":\d/);
    if (i > -1) console.log('  id snippet:', ah.slice(Math.max(0,i-10), i+80));
  }
  await new Promise(r => setTimeout(r, 800));
}
