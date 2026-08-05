import https from 'https';
import http from 'http';

function fetchFollowRedirects(url, maxRedirects = 5) {
  return new Promise(resolve => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if ([301,302,303].includes(res.statusCode) && res.headers.location && maxRedirects > 0) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        resolve(fetchFollowRedirects(next, maxRedirects - 1));
        return;
      }
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => resolve(html));
    });
    req.on('error', () => resolve(''));
    req.setTimeout(10000, () => { req.destroy(); resolve(''); });
  });
}

function extractId(html) {
  const m = html.match(/album_id&quot;:(\d+)/) || html.match(/"album_id":(\d+)/);
  return m ? m[1] : null;
}

const targets = [
  { id:'warp',             slug:'warp'                  },
  { id:'modern_love',      slug:'modernloverecords'      },
  { id:'andy_stott',       slug:'andystott'              },
  { id:'hyperdub',         slug:'hyperdub'               },
  { id:'lobster_theremin', slug:'lobsterthereminrecords' },
  { id:'posh_isolation',   slug:'poshisolation'          },
  { id:'pc_music',         slug:'pcmusic'                },
  { id:'moderat',          slug:'moderat'                },
  { id:'lfo',              slug:'lfomusic'               },
  { id:'bicep',            slug:'bicepmusic'             },
  { id:'speedy_j',         slug:'speedyj'               },
  { id:'underworld',       slug:'underworldlive'         },
];

for (const { id, slug } of targets) {
  // try /music first, then root
  let html = await fetchFollowRedirects(`https://${slug}.bandcamp.com/music`);
  let albumId = extractId(html);
  if (!albumId) {
    html = await fetchFollowRedirects(`https://${slug}.bandcamp.com`);
    albumId = extractId(html);
  }
  console.log(id, albumId ?? 'NOT FOUND');
  await new Promise(r => setTimeout(r, 500));
}
