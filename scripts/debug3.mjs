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

// Look for any large JSON blobs or data attributes
const keywords = ['data-blob', 'pagedata', '"current"', '"band_id"', 'embed_info', 'BCData', 'albumData', 'data-embed'];
for (const kw of keywords) {
  const i = h.indexOf(kw);
  if (i > -1) {
    console.log(`\n=== [${kw}] at ${i} ===`);
    console.log(h.slice(Math.max(0, i - 10), i + 250));
  }
}

// Also check: does the /music page have album links with IDs in the URL?
const albumLinks = [...h.matchAll(/\/album\/[a-z0-9-]+/g)].slice(0,5);
console.log('\nAlbum links found:', albumLinks.map(m => m[0]));

// Check for numeric IDs in hrefs
const idInHref = h.match(/href="\/album\/[^"]+\?[^"]*id=(\d+)/);
console.log('ID in href:', idInHref ? idInHref[1] : 'none');
