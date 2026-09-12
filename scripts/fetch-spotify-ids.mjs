/**
 * Fetches Spotify artist IDs for all artist nodes that don't already have one.
 * Uses the Spotify Web API search endpoint (no user login needed, just client credentials).
 *
 * Setup:
 *   1. Go to https://developer.spotify.com/dashboard and create a free app
 *   2. Copy the Client ID and Client Secret
 *   3. Run: SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/fetch-spotify-ids.mjs
 *
 * Output: prints a list of node edits to make to nodes.js (does not auto-write).
 * Review each result, then add `spotify:'<id>'` to the matching node by hand.
 */

import { NODES } from '../src/data/nodes.js';

const CLIENT_ID     = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET env vars first.');
  console.error('  Get them from: https://developer.spotify.com/dashboard');
  process.exit(1);
}

async function getToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });
  const data = await res.json();
  return data.access_token;
}

async function searchArtist(token, name) {
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(name)}&type=artist&limit=3`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();
  const artists = data.artists?.items;
  if (!artists?.length) return null;
  // Return top result — review manually to confirm it's correct
  return artists[0];
}

async function main() {
  const token = await getToken();
  console.log('Token acquired.\n');

  const artists = NODES.filter(n => n.type === 'artist' && !n.spotify);
  console.log(`Searching Spotify for ${artists.length} artists without IDs...\n`);
  console.log('— COPY THESE INTO nodes.js (verify each one first!) —\n');

  for (const node of artists) {
    const result = await searchArtist(token, node.label);
    if (!result) {
      console.log(`// ${node.id}: NOT FOUND`);
      continue;
    }
    const followers = result.followers?.total?.toLocaleString() ?? '?';
    const genres    = result.genres?.slice(0, 2).join(', ') || 'no genres';
    console.log(`// ${node.label} — ${followers} followers, ${genres}`);
    console.log(`// https://open.spotify.com/artist/${result.id}`);
    console.log(`spotify:'${result.id}',  // ${node.id}`);
    console.log();
    // Rate limit: 1 request every ~100ms is safe
    await new Promise(r => setTimeout(r, 100));
  }
}

main().catch(console.error);
