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
  const { h, s } = await fetchHtml(`https://${slug}.bandcamp.com/music`);
  console.log(`\n=== ${slug} status:${s} ===`);

  // Find ALL hrefs
  const hrefs = [...h.matchAll(/href=['"]([^'"]+)['"]/g)].map(m => m[1]).filter(u => !u.startsWith('#')).slice(0, 20);
  console.log('First 20 hrefs:', hrefs);

  // Look for any numeric IDs
  const nums = h.match(/\d{8,}/g);
  if (nums) console.log('Long numbers found:', [...new Set(nums)].slice(0, 10));

  await new Promise(r => setTimeout(r, 600));
}
