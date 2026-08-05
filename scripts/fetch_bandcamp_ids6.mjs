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
  let m = html.match(/album_id&quot;:(\d+)/) || html.match(/"album_id":(\d+)/);
  if (m) return m[1];
  m = html.match(/data-tralbum-id="(\d+)"/);
  if (m) return m[1];
  m = html.match(/"id":(\d+),"band_id"/);
  if (m) return m[1];
  return null;
}

const targets = [
  { id:'warp',             slug:'warp'           },
  { id:'modern_love',      slug:'modern-love'    },
  { id:'hyperdub',         slug:'hyperdub'       },
  { id:'lobster_theremin', slug:'lobstertheremin'},
  { id:'posh_isolation',   slug:'poshisolation'  },
  { id:'pc_music',         slug:'pcmusic'        },
  { id:'moderat',          slug:'moderat'        },
  { id:'bicep',            slug:'bicep'          },
  { id:'speedy_j',         slug:'speedyj'        },
  { id:'underworld',       slug:'underworld'     },
];

for (const { id, slug } of targets) {
  const base = `https://${slug}.bandcamp.com`;
  const mainHtml = await fetchHtml(`${base}/music`);

  // Try direct extract first
  let albumId = extractAlbumId(mainHtml);

  if (!albumId) {
    // Album links may be full URLs with single or double quotes
    const albumMatch =
      mainHtml.match(/href='(https?:\/\/[^']*\/album\/[^'?]+)/) ||
      mainHtml.match(/href="(https?:\/\/[^"]*\/album\/[^"?]+)/) ||
      mainHtml.match(/href='(\/album\/[^'?]+)/) ||
      mainHtml.match(/href="(\/album\/[^"?]+)/);

    if (albumMatch) {
      let albumUrl = albumMatch[1];
      if (albumUrl.startsWith('/')) albumUrl = base + albumUrl;
      const albumHtml = await fetchHtml(albumUrl);
      albumId = extractAlbumId(albumHtml);
    }

    // Fallback: try first track link (for labels that use /track/ not /album/)
    if (!albumId) {
      const trackMatch =
        mainHtml.match(/href='(https?:\/\/[^']*\/track\/[^'?]+)/) ||
        mainHtml.match(/href="(https?:\/\/[^"]*\/track\/[^"?]+)/) ||
        mainHtml.match(/href='(\/track\/[^'?]+)/) ||
        mainHtml.match(/href="(\/track\/[^"?]+)/);
      if (trackMatch) {
        let trackUrl = trackMatch[1];
        if (trackUrl.startsWith('/')) trackUrl = base + trackUrl;
        const trackHtml = await fetchHtml(trackUrl);
        albumId = extractAlbumId(trackHtml);
      }
    }
  }

  console.log(id, albumId ?? 'NOT FOUND');
  await new Promise(r => setTimeout(r, 700));
}
