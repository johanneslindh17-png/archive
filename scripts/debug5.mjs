import https from 'https';

function fetchHtml(url, redir = 5) {
  return new Promise(r => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if ([301,302,303].includes(res.statusCode) && res.headers.location && redir > 0) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        r(fetchHtml(next, redir - 1)); return;
      }
      let h = ''; res.on('data', d => h += d); res.on('end', () => r(h));
    });
    req.on('error', () => r(''));
    req.setTimeout(12000, () => { req.destroy(); r(''); });
  });
}

const h = await fetchHtml('https://hyperdub.bandcamp.com/music');

// Show 400 chars around first /album/ occurrence
const i = h.indexOf('/album/');
if (i > -1) {
  console.log('Context around first /album/:');
  console.log(h.slice(Math.max(0, i-100), i+300));
}

// Try different href patterns
const pats = [
  /href="(\/album\/[^"]+)"/,
  /href='(\/album\/[^']+)'/,
  /href=&quot;(\/album\/[^&]+)&quot;/,
  /"url":"(\/album\/[^"]+)"/,
  /"page_url":"([^"]*\/album\/[^"]+)"/,
];
pats.forEach(p => {
  const m = h.match(p);
  console.log(String(p).slice(0,55).padEnd(55), '->', m ? m[1] : 'null');
});
