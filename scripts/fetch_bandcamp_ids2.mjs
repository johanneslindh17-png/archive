/**
 * Batch-fetches Bandcamp pages for all remaining nodes and extracts album IDs.
 * Run:  node scripts/fetch_bandcamp_ids2.mjs
 */

import https from 'https';

const ALBUMS = [
  // ── UK / Europe artists ──────────────────────────────────────────────────
  { id:'demdike_stare',          url:'https://demdikestare.bandcamp.com/album/tryptych' },
  { id:'call_super',             url:'https://callsuper.bandcamp.com/album/suzi-ecto' },
  { id:'djrum',                  url:'https://djrum.bandcamp.com/album/portrait-with-firewood' },
  { id:'blawan',                 url:'https://blawan.bandcamp.com/album/wet-will-always-dry' },
  { id:'leon_vynehall',          url:'https://leonvynehall.bandcamp.com/album/nothing-is-still' },
  { id:'lone',                   url:'https://lonemusic.bandcamp.com/album/levitate' },
  { id:'skee_mask',              url:'https://skee-mask.bandcamp.com/album/pool' },
  { id:'peverelist',             url:'https://peverelist.bandcamp.com/album/play-life-play' },
  { id:'special_request',        url:'https://special-request.bandcamp.com/album/vortex' },
  { id:'pinch',                  url:'https://pinchrecords.bandcamp.com/album/we-are-verbatim' },
  { id:'james_holden',           url:'https://jamesholden.bandcamp.com/album/the-animal-spirits' },
  { id:'kode9',                  url:'https://kode9.bandcamp.com/album/black-sun' },
  { id:'digital_mystikz',        url:'https://digitalmystikz.bandcamp.com/album/return-ii-space' },
  { id:'paulatemple',            url:'https://paulatemple.bandcamp.com/album/decon-recon' },
  { id:'surgeon',                url:'https://surgeon.bandcamp.com/album/nothing-is-returned-everything-is-given' },
  { id:'regis',                  url:'https://regis.bandcamp.com/album/manbait' },
  { id:'interplanetary_criminal',url:'https://interplanetarycriminal.bandcamp.com/album/something-to-hold-on-to' },
  { id:'perko',                  url:'https://perko.bandcamp.com/album/take-my-hand-2' },
  { id:'mobilegirl',             url:'https://mobilegirl.bandcamp.com/album/soul-searching' },
  { id:'eris_drew',              url:'https://erisdrew.bandcamp.com/album/quivering-in-time' },
  { id:'octo_octa',              url:'https://octoocta.bandcamp.com/album/between-two-selves' },
  { id:'facta',                  url:'https://facta.bandcamp.com/album/patterns-of-consciousness' },
  { id:'k_lone',                 url:'https://k-lone.bandcamp.com/album/cape-cira' },
  { id:'nia_archives',           url:'https://niaarchives.bandcamp.com/album/sunrise-bang-ur-head-against-the-wall' },
  { id:'crystallmess',           url:'https://crystallmess.bandcamp.com/album/we-be-burning' },
  { id:'route_8',                url:'https://route8.bandcamp.com/album/who-else' },
  { id:'jack_j',                 url:'https://jackj-music.bandcamp.com/album/still-in-the-old-country' },
  { id:'dj_sports',              url:'https://djsports.bandcamp.com/album/it-was-an-accident-i-swear' },
  { id:'pender_street_steppers', url:'https://penderstreet.bandcamp.com/album/untitled' },
  { id:'bonobo',                 url:'https://bonobomusic.bandcamp.com/album/the-north-borders' },
  { id:'ben_ufo',                url:'https://benufo.bandcamp.com/album/rinse-02-ben-ufo' },
  { id:'pangaea',                url:'https://pangaeamusic.bandcamp.com/album/release' },
  { id:'the_knife',              url:'https://theknife.bandcamp.com/album/shaking-the-habitual' },
  { id:'fever_ray',              url:'https://feverray.bandcamp.com/album/plunge' },
  { id:'sophie',                 url:'https://sophie.bandcamp.com/album/oil-of-every-pearls-un-insides' },
  { id:'ag_cook',                url:'https://agcook.bandcamp.com/album/7g' },
  { id:'orbital',                url:'https://orbital.bandcamp.com/album/orbital-the-brown-album' },
  { id:'coucou_chloe',           url:'https://coucouchloe.bandcamp.com/album/uncanny-valley' },
  { id:'a_guy_called_gerald',    url:'https://aguycalledgerald.bandcamp.com/album/voodoo-ray' },

  // ── Berlin / German ──────────────────────────────────────────────────────
  { id:'monolake',               url:'https://monolake.bandcamp.com/album/ghosts' },
  { id:'dettmann',               url:'https://marceldettmann.bandcamp.com/album/conducted' },
  { id:'function',               url:'https://functiontechno.bandcamp.com/album/the-incubation-of-x' },
  { id:'efdemin',                url:'https://efdemin.bandcamp.com/album/chicago' },
  { id:'vril',                   url:'https://vrilmusic.bandcamp.com/album/yu' },
  { id:'dj_koze',                url:'https://djkoze.bandcamp.com/album/knock-knock' },
  { id:'helena_hauff',           url:'https://helenahauff.bandcamp.com/album/have-you-been-there-have-you-seen-it' },
  { id:'rodhad',                 url:'https://rodhad.bandcamp.com/album/haul' },
  { id:'ben_klock',              url:'https://benklock.bandcamp.com/album/one' },
  { id:'len_faki',               url:'https://lenfaki.bandcamp.com/album/raw-cut' },
  { id:'ellen_allien',           url:'https://ellenallien.bandcamp.com/album/stadtkind' },
  { id:'pan_sonic',              url:'https://pan-sonic.bandcamp.com/album/kesto-234-48-2' },
  { id:'alva_noto',              url:'https://alvanoto.bandcamp.com/album/uni-acronym' },
  { id:'robag_wruhme',           url:'https://robagwruhme.bandcamp.com/album/thora-vukk' },
  { id:'lena_willikens',         url:'https://lenawillikens.bandcamp.com/album/phantom-delia' },
  { id:'wmvoigt',                url:'https://wolfgangvoigt.bandcamp.com/album/ruckverzauberung-1-4' },
  { id:'gas',                    url:'https://gas.bandcamp.com/album/narkopop' },
  { id:'move_d',                 url:'https://moved.bandcamp.com/album/travel-by-layer' },
  { id:'claudio_prc',            url:'https://claudioprc.bandcamp.com/album/the-parallel-life' },
  { id:'carsten_jost',           url:'https://carstenjost.bandcamp.com/album/das-blaue-wunder' },
  { id:'dwig',                   url:'https://dwig.bandcamp.com/album/cloud-cover' },
  { id:'legowelt',               url:'https://legowelt.bandcamp.com/album/telenights' },
  { id:'dj_stingray',            url:'https://djstingray313.bandcamp.com/album/bio-metallic' },
  { id:'blawan',                 url:'https://blawan.bandcamp.com/album/wet-will-always-dry' },
  { id:'stephan_bodzin',         url:'https://stephanbodzin.bandcamp.com/album/liebe-ist' },
  { id:'sven_vath',              url:'https://svenvath.bandcamp.com/album/the-sound-of-the-15th-anniversary' },
  { id:'regal',                  url:'https://regalmusic.bandcamp.com/album/the-fall-of-forms' },

  // ── Scandinavian ─────────────────────────────────────────────────────────
  { id:'royksopp',               url:'https://royksopp.bandcamp.com/album/profound-mysteries' },
  { id:'todd_terje',             url:'https://toddterje.bandcamp.com/album/its-album-time' },
  { id:'prins_thomas',           url:'https://prinsthomasmusic.bandcamp.com/album/principe-del-norte' },
  { id:'kiasmos',                url:'https://kiasmos.bandcamp.com/album/kiasmos' },
  { id:'the_field',              url:'https://thefield.bandcamp.com/album/from-here-we-go-sublime' },
  { id:'axel_boman',             url:'https://axelboman.bandcamp.com/album/family-dinner' },
  { id:'kornel_kovacs',          url:'https://kornelkovacs.bandcamp.com/album/the-bells' },
  { id:'interstellar_funk',      url:'https://interstellarfunk.bandcamp.com/album/parallax' },
  { id:'minilogue',              url:'https://minilogue.bandcamp.com/album/animals' },

  // ── French ───────────────────────────────────────────────────────────────
  { id:'daft_punk',              url:'https://daftpunk.bandcamp.com/album/homework' },
  { id:'etienne_de_crecy',       url:'https://etiennedecrecy.bandcamp.com/album/super-discount' },
  { id:'air',                    url:'https://airfrench.bandcamp.com/album/moon-safari' },
  { id:'justice',                url:'https://etjusticepourtous.bandcamp.com/album/cross' },

  // ── Canadian / US ─────────────────────────────────────────────────────────
  { id:'caribou',                url:'https://caribouband.bandcamp.com/album/suddenly' },
  { id:'daphni',                 url:'https://daphni.bandcamp.com/album/joli-mai' },
  { id:'nicolas_jaar',           url:'https://nicolas-jaar.bandcamp.com/album/space-is-only-noise' },
  { id:'djsprinkles',            url:'https://djsprinkles.bandcamp.com/album/midtown-120-blues' },
  { id:'jlin',                   url:'https://jlin.bandcamp.com/album/black-origami' },
  { id:'dj_rashad',              url:'https://djrashad.bandcamp.com/album/double-cup' },
  { id:'peggy_gou',              url:'https://peggygou.bandcamp.com/album/i-hear-you' },
  { id:'deepchord',              url:'https://deepchord.bandcamp.com/album/liumin' },
  { id:'wun_two',                url:'https://wun-two.bandcamp.com/album/hestia' },
  { id:'fluxion',                url:'https://fluxion.bandcamp.com/album/vibrant-forms-iii' },
  { id:'moodymann',              url:'https://moodymann.bandcamp.com/album/dem-young-sconies' },
  { id:'dj_lag',                 url:'https://djlag.bandcamp.com/album/meeting-with-the-king' },
  { id:'brian_eno',              url:'https://brianenomusic.bandcamp.com/album/ambient-4-on-land' },
  { id:'boards_of_canada',       url:'https://boardsofcanada.bandcamp.com/album/music-has-the-right-to-children' },
  { id:'theo_parrish',           url:'https://theoparrish.bandcamp.com/album/presenting-theo-parrish' },
  { id:'dj_rashad',              url:'https://djrashad.bandcamp.com/album/double-cup' },

  // ── Japanese ──────────────────────────────────────────────────────────────
  { id:'haruomi_hosono',         url:'https://haruomihosono.bandcamp.com/album/hosono-house' },
  { id:'ryuichi_sakamoto',       url:'https://ryuichisakamoto.bandcamp.com/album/b-2-unit' },
  { id:'hiroshi_yoshimura',      url:'https://hiroshiyoshimura.bandcamp.com/album/music-for-nine-post-cards' },
  { id:'midori_takada',          url:'https://midoritakada.bandcamp.com/album/through-the-looking-glass' },
  { id:'soichi_terada',          url:'https://soichiterada.bandcamp.com/album/reef' },
  { id:'rei_harakami',           url:'https://reiharakami.bandcamp.com/album/lust' },
  { id:'susumu_yokota',          url:'https://susumuyokota.bandcamp.com/album/sakura' },
  { id:'kuniyuki',               url:'https://kuniyuki.bandcamp.com/album/beautiful-soul' },

  // ── Misc labels/artists ────────────────────────────────────────────────────
  { id:'northern_electronics_artists', url:'https://northernelectronics.bandcamp.com/album/ne-19' },
  { id:'jamiexx',                url:'https://jamiexx.bandcamp.com/album/in-waves' },
  { id:'matthew_jonson',         url:'https://matthewjonson.bandcamp.com/album/where-is-matthew-jonson' },
  { id:'skream',                 url:'https://skream.bandcamp.com/album/skream' },
  { id:'goldie',                 url:'https://goldie.bandcamp.com/album/timeless' },
  { id:'dj_krush',               url:'https://djkrush.bandcamp.com/album/butterfly-effect' },
  { id:'the_avalanches',         url:'https://theavanches.bandcamp.com/album/since-i-left-you' },
  { id:'bomba_estereo',          url:'https://bombaestereo.bandcamp.com/album/amanecer' },
  { id:'dengue_dengue_dengue',   url:'https://denguedenguedengueperu.bandcamp.com/album/identidad' },
  { id:'ninakraviz',             url:'https://ninakraviz.bandcamp.com/album/tripping' },
  { id:'melchior_productions',   url:'https://melchiorproductions.bandcamp.com/album/solvane-ep' },
  { id:'kettenkarussell',        url:'https://kettenkarussell.bandcamp.com/album/nachts-schlaft-du' },
  { id:'djhealer',               url:'https://djhealer.bandcamp.com/album/nothing-2021' },
  { id:'petre_inspirescu',       url:'https://petreinspirescu.bandcamp.com/album/selected' },
  { id:'rhadoo',                 url:'https://rhadoo.bandcamp.com/album/rhadoo-ep' },
  { id:'dixon',                  url:'https://dixon.bandcamp.com/album/the-inheritors' },
  { id:'ame',                    url:'https://ame.bandcamp.com/album/ame' },
  { id:'bonobo',                 url:'https://bonobomusic.bandcamp.com/album/the-north-borders' },
  { id:'dj_central',             url:'https://djcentral313.bandcamp.com/album/essentials' },
  { id:'amelie_lens',            url:'https://amelielens.bandcamp.com/album/forever' },
  { id:'charlotte_de_witte',     url:'https://charlottedewitte.bandcamp.com/album/doppler' },
  { id:'lola_haro',              url:'https://lolaharo.bandcamp.com/album/lost-in-translation' },
  { id:'svreca',                 url:'https://svreca.bandcamp.com/album/labyrinthic' },
  { id:'dj_tennis',              url:'https://djtennis.bandcamp.com/album/studio-mix' },
  { id:'james_holden',           url:'https://jamesholden.bandcamp.com/album/the-animal-spirits' },
  { id:'harold_budd',            url:'https://haroldbudd.bandcamp.com/album/the-plateaux-of-mirror' },
  { id:'dj_rush',                url:'https://djrush.bandcamp.com/album/get-on-up' },
  { id:'paul_johnson',           url:'https://pauljohnson.bandcamp.com/album/get-with-it' },
  { id:'hvl',                    url:'https://hvlmusic.bandcamp.com/album/hvl' },
  { id:'irakli',                 url:'https://iraklimusic.bandcamp.com/album/everything-feels-good' },
  { id:'nastia',                 url:'https://nastiamusic.bandcamp.com/album/metamorphosis' },
  { id:'jacek_sienkiewicz',      url:'https://jaceksienkiewicz.bandcamp.com/album/the-state-of-calm' },
  { id:'maceo_plex',             url:'https://maceoplex.bandcamp.com/album/life-index' },
  { id:'mind_against',           url:'https://mindagainst.bandcamp.com/album/himalia' },
  { id:'deetron',                url:'https://deetron.bandcamp.com/album/deetron' },
  { id:'john_talabot',           url:'https://johntalabot.bandcamp.com/album/fin' },
  { id:'mike_parker',            url:'https://mikeparker.bandcamp.com/album/dispatches' },
  { id:'leafar',                 url:'https://leafarlegov.bandcamp.com/album/under-the-shade-of-violet-trees' },
  { id:'lbhonne',                url:'https://lbhonne.bandcamp.com/album/on-the-run' },
  { id:'benkaczor',              url:'https://benkaczor.bandcamp.com/album/seagull-bay' },
  { id:'nocturne',               url:'https://nocturne.bandcamp.com/album/limpid' },
  { id:'taleofus',               url:'https://taleofus.bandcamp.com/album/monument' },
  { id:'dvs1',                   url:'https://dvs1music.bandcamp.com/album/shift' },
  { id:'dj_koze',                url:'https://djkoze.bandcamp.com/album/knock-knock' },
  { id:'zip',                    url:'https://zip.bandcamp.com/album/format' },
  { id:'roman_flugel',           url:'https://romanflugel.bandcamp.com/album/fabric-presents-roman-flugel' },
  { id:'lawrence',               url:'https://lawrencemusic.bandcamp.com/album/yoyogi-morning' },
  { id:'panthaduprince',         url:'https://panthaduprince.bandcamp.com/album/the-triad' },
  { id:'mmayer',                 url:'https://michaelmayer.bandcamp.com/album/immer' },
  { id:'villalobos',             url:'https://ricardovillalobos.bandcamp.com/album/dependent-and-happy' },
  { id:'luciano',                url:'https://luciano.bandcamp.com/album/mi-amor' },
  { id:'francois_k',             url:'https://francoisk.bandcamp.com/album/time-and-space' },
  { id:'sasha',                  url:'https://sasha.bandcamp.com/album/involver' },
  { id:'aguayo',                 url:'https://matiasaguayo.bandcamp.com/album/ay-ay-ay' },
  { id:'rebolledo',              url:'https://rebolledo.bandcamp.com/album/super-pal-universe' },
  { id:'weatherall',             url:'https://andrewweatherall.bandcamp.com/album/qualia' },
  { id:'martin_ou',             url:'https://martininou.bandcamp.com/album/inou' },
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
      if (res.statusCode === 404 || res.statusCode === 403) {
        return resolve(`STATUS_${res.statusCode}`);
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
  const patterns = [
    /album_id&quot;:(\d{7,12})/,
    /album_id"\s*:\s*(\d{7,12})/,
    /album_id\s*:\s*(\d{7,12})/,
    /"id"\s*:\s*(\d{7,12})/,
    /data-item-id="(\d{7,12})"/,
    /EmbeddedPlayer\/album=(\d{7,12})/,
    /"tralbum_id"\s*:\s*(\d{7,12})/,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1];
  }
  return null;
}

async function main() {
  console.log('Fetching Bandcamp album IDs...\n');
  const found = [];
  const notFound = [];
  const seen = new Set();

  for (const album of ALBUMS) {
    if (seen.has(album.id)) continue; // skip duplicates
    seen.add(album.id);

    try {
      const html = await fetchPage(album.url);
      if (typeof html === 'string' && html.startsWith('STATUS_')) {
        console.log(`✗  ${album.id.padEnd(28)} ${html} — ${album.url}`);
        notFound.push({ id: album.id, reason: html });
        await new Promise(r => setTimeout(r, 300));
        continue;
      }
      const albumId = extractAlbumId(html);
      if (albumId) {
        console.log(`✓  ${album.id.padEnd(28)} ${albumId}  (${album.url.split('/').pop()})`);
        found.push({ id: album.id, albumId, url: album.url });
      } else {
        console.log(`✗  ${album.id.padEnd(28)} ID not found — ${album.url}`);
        notFound.push({ id: album.id, reason: 'no_id' });
      }
    } catch (e) {
      console.log(`✗  ${album.id.padEnd(28)} Error: ${e.message}`);
      notFound.push({ id: album.id, reason: e.message });
    }
    await new Promise(r => setTimeout(r, 350));
  }

  console.log('\n\n═══════════════════════════════════════════════════');
  console.log('RESULTS — paste into nodes.js');
  console.log('═══════════════════════════════════════════════════\n');
  for (const r of found) {
    const slug = new URL(r.url).hostname.replace('.bandcamp.com','');
    console.log(`  ${r.id.padEnd(28)} bandcamp:'${slug}', bandcamp_album:'${r.albumId}',`);
  }
  console.log(`\n✓ ${found.length} found   ✗ ${notFound.length} not found`);
  console.log('\nNot found:');
  notFound.forEach(x => console.log(`  - ${x.id} (${x.reason})`));
}

main();
