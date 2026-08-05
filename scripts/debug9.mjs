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

function extractId(html) {
  let m = html.match(/album_id&quot;:(\d+)/) || html.match(/"album_id":(\d+)/);
  if (m) return { type: 'album_id', id: m[1] };
  m = html.match(/"id":(\d+),"band_id"/);
  if (m) return { type: 'id+band_id', id: m[1] };
  m = html.match(/data-tralbum-id="(\d+)"/);
  if (m) return { type: 'tralbum', id: m[1] };
  // try track_id
  m = html.match(/track_id&quot;:(\d+)/) || html.match(/"track_id":(\d+)/);
  if (m) return { type: 'track_id', id: m[1] };
  return null;
}

// modern-love: try a track page
console.log('=== modern-love track page ===');
const { h: mh } = await fetchHtml('https://modern-love.bandcamp.com/track/start-again');
const mResult = extractId(mh);
console.log('result:', mResult);

// Try /releases
console.log('\n=== modern-love /releases ===');
const { h: mr, s: ms } = await fetchHtml('https://modern-love.bandcamp.com/releases');
console.log('status:', ms, 'len:', mr.length);
const a1 = mr.match(/href='(https?:\/\/[^']*\/album\/[^'?]+)/) || mr.match(/href="(https?:\/\/[^"]*\/album\/[^"?]+)/);
const t1 = mr.match(/href='(https?:\/\/[^']*\/track\/[^'?]+)/) || mr.match(/href="(https?:\/\/[^"]*\/track\/[^"?]+)/);
console.log('album link:', a1 ? a1[1] : 'none');
console.log('track link:', t1 ? t1[1] : 'none');

// lobstertheremin: try root and /releases
await new Promise(r => setTimeout(r, 600));
console.log('\n=== lobstertheremin root ===');
const { h: lh, s: ls } = await fetchHtml('https://lobstertheremin.bandcamp.com');
console.log('status:', ls, 'len:', lh.length);
const la = lh.match(/href='(https?:\/\/[^']*\/album\/[^'?]+)/) || lh.match(/href="(https?:\/\/[^"]*\/album\/[^"?]+)/);
console.log('album link:', la ? la[1] : 'none');
const lResult = extractId(lh);
console.log('id result:', lResult);

await new Promise(r => setTimeout(r, 600));
console.log('\n=== lobstertheremin /releases ===');
const { h: lr, s: lrs } = await fetchHtml('https://lobstertheremin.bandcamp.com/releases');
console.log('status:', lrs, 'len:', lr.length);
const lra = lr.match(/href='(https?:\/\/[^']*\/album\/[^'?]+)/) || lr.match(/href="(https?:\/\/[^"]*\/album\/[^"?]+)/);
const lrt = lr.match(/href='(https?:\/\/[^']*\/track\/[^'?]+)/) || lr.match(/href="(https?:\/\/[^"]*\/track\/[^"?]+)/);
console.log('album link:', lra ? lra[1] : 'none');
console.log('track link:', lrt ? lrt[1] : 'none');
