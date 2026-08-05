import https from 'https';

function fetchPage(url) {
  return new Promise(resolve => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => resolve({ html, status: res.statusCode }));
    });
    req.on('error', e => resolve({ html: '', status: 0, err: e.message }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ html: '', status: 0 }); });
  });
}

const { html, status } = await fetchPage('https://bicepmusic.bandcamp.com');
console.log('Status:', status);
console.log('Length:', html.length);

const patterns = [
  /album_id&quot;:(\d+)/,
  /"album_id":(\d+)/,
  /album_id\\u0022:(\d+)/,
  /data-item-id="(\d+)"/,
  /tralbum_id":(\d+)/,
  /"id":(\d+),"band_id"/,
];
patterns.forEach(p => {
  const m = html.match(p);
  console.log(String(p).slice(0,40), '->', m ? m[1] : 'null');
});
// Show a chunk around "album"
const idx = html.indexOf('album');
if (idx > -1) console.log('\nSnippet around "album":\n', html.slice(idx, idx + 200));
