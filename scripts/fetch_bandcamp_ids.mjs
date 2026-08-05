/**
 * Fetches Bandcamp album pages and extracts the real album IDs
 * used in EmbeddedPlayer URLs (TralbumData.id from page source).
 *
 * Run:  node scripts/fetch_bandcamp_ids.mjs
 */

import https from 'https';

// Artists to look up: { nodeId, slug (artist.bandcamp.com), album (album-slug) }
const ALBUMS = [
  { id: 'four_tet',         url: 'https://fourtet.bandcamp.com/album/three' },
  { id: 'actress',          url: 'https://actress.bandcamp.com/album/grey-interiors' },
  { id: 'floating_points',  url: 'https://floatingpoints.bandcamp.com/album/promises' },
  { id: 'objekt',           url: 'https://objekt.bandcamp.com/album/chicken-garaage' },
  { id: 'shackleton',       url: 'https://shackleton.bandcamp.com/album/majestic-visions' },
  { id: 'burial',           url: 'https://burial.bandcamp.com/album/antidawn-ep' },
  { id: 'aphex_twin',       url: 'https://aphextwin.bandcamp.com/album/selected-ambient-works-volume-ii-expanded-edition' },
  { id: 'autechre',         url: 'https://autechre.bandcamp.com/album/sign' },
  { id: 'biosphere',        url: 'https://biosphere.bandcamp.com/album/the-peregrine' },
  { id: 'vladislav_delay',  url: 'https://vladislavdelay.bandcamp.com/album/suhkeus' },
  { id: 'william_basinski', url: 'https://williambasinski.bandcamp.com/album/the-disintegration-loops' },
  { id: 'grouper',          url: 'https://grouper.bandcamp.com/album/shade' },
  { id: 'stars_of_the_lid', url: 'https://starsofthelid.bandcamp.com/album/and-their-refinement-of-the-decline' },
  { id: 'tim_hecker',       url: 'https://timhecker.bandcamp.com/album/shards' },
  { id: 'merzbow',          url: 'https://merzbow.bandcamp.com/album/takahe-collage' },
  { id: 'nkisi',            url: 'https://nkisi.bandcamp.com/album/7-directions' },
  { id: 'lotic',            url: 'https://lotic.bandcamp.com/album/water' },
  { id: 'eartheater',       url: 'https://eartheater.bandcamp.com/album/powders' },
  { id: 'arca',             url: 'https://arca1000000.bandcamp.com/album/kick-i' },
  { id: 'the_caretaker',    url: 'https://thecaretaker.bandcamp.com/album/everywhere-at-the-end-of-time-stage-1' },
  { id: 'mount_kimbie',     url: 'https://mountkimbie.bandcamp.com/album/love-what-survives' },
  { id: 'andy_stott',       url: 'https://andystott.bandcamp.com/album/luxury-problems' },
  { id: 'puce_mary',        url: 'https://poshisolation.bandcamp.com/album/the-drought' },
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extractAlbumId(html) {
  // Bandcamp HTML-encodes quotes in inline JSON: album_id&quot;:NUMBER
  const patterns = [
    /album_id&quot;:(\d{7,12})/,                 // HTML-encoded inline JSON
    /album_id"\s*:\s*(\d{7,12})/,               // plain JSON
    /album_id\s*:\s*(\d{7,12})/,                // unquoted
    /"id"\s*:\s*(\d{7,12})/,                    // TralbumData "id": NUMBER
    /data-item-id="(\d{7,12})"/,                 // data attribute
    /EmbeddedPlayer\/album=(\d{7,12})/,          // already in an embed
    /"tralbum_id"\s*:\s*(\d{7,12})/,            // tralbum_id field
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1];
  }
  return null;
}

async function main() {
  console.log('Fetching Bandcamp album IDs...\n');
  const results = [];

  for (const album of ALBUMS) {
    try {
      const html = await fetchPage(album.url);
      const albumId = extractAlbumId(html);
      if (albumId) {
        console.log(`✓  ${album.id.padEnd(22)} ${albumId}  (${album.url.split('/').pop()})`);
        results.push({ id: album.id, albumId, url: album.url });
      } else {
        console.log(`✗  ${album.id.padEnd(22)} ID not found — ${album.url}`);
      }
    } catch (e) {
      console.log(`✗  ${album.id.padEnd(22)} Error: ${e.message}`);
    }
    // polite delay
    await new Promise(r => setTimeout(r, 400));
  }

  console.log('\n--- Copy-paste output for nodes.js ---');
  for (const r of results) {
    console.log(`  { id:'${r.id}' } → bandcamp_album:'${r.albumId}'`);
  }
}

main();
