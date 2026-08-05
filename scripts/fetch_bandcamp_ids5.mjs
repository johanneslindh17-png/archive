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

function extractAlbumId(html) {
  // Direct embed patterns (older pages)
  let m = html.match(/album_id&quot;:(\d+)/) || html.match(/"album_id":(\d+)/);
  if (m) return m[1];
  // data-tralbum-id attribute
  m = html.match(/data-tralbum-id="(\d+)"/);
  if (m) return m[1];
  // JSON in page: "id":NNNN,"band_id"
  m = html.match(/"id":(\d+),"band_id"/);
  if (m) return m[1];
  return null;
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
  { id:'speedy_j',         slug:'speedyj'                },
  { id:'underworld',       slug:'underworldlive'         },
];

for (const { id, slug } of targets) {
  const base = `https://${slug}.bandcamp.com`;

  // Step 1: get the label/artist page and find the first album link
  const mainHtml = await fetchHtml(`${base}/music`);

  // Try direct ID on main page first
  let albumId = extractAlbumId(mainHtml);

  if (!albumId) {
    // Find first /album/ link
    const albumMatch = mainHtml.match(/href="(\/album\/[^"?]+)"/);
    if (albumMatch) {
      const albumUrl = base + albumMatch[1];
      const albumHtml = await fetchHtml(albumUrl);
      albumId = extractAlbumId(albumHtml);
    }
  }

  console.log(id, albumId ?? 'NOT FOUND');
  await new Promise(r => setTimeout(r, 600));
}
