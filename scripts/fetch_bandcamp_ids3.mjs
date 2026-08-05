/**
 * Second pass — trying corrected/alternative URLs for the 404s.
 * Run: node scripts/fetch_bandcamp_ids3.mjs
 */

import https from 'https';

const ALBUMS = [
  // Retries with corrected slugs / different albums
  { id:'demdike_stare',     url:'https://demdikestare.bandcamp.com/album/bewiki' },
  { id:'blawan',            url:'https://blawan.bandcamp.com/album/body-collection' },
  { id:'lone',              url:'https://lonemusic.bandcamp.com/album/ambivert-tools-vol-1' },
  { id:'skee_mask',         url:'https://skeemask.bandcamp.com/album/pool' },
  { id:'peverelist',        url:'https://peverelist.bandcamp.com/album/bring-the-cru' },
  { id:'vril',              url:'https://vrilmusic.bandcamp.com/album/mana' },
  { id:'monolake',          url:'https://monolake.bandcamp.com/album/silence' },
  { id:'dj_koze',           url:'https://djkoze.bandcamp.com/album/musikzimmer' },
  { id:'alva_noto',         url:'https://alvanoto.bandcamp.com/album/xerrox-vol-4' },
  { id:'pan_sonic',         url:'https://pansonic.bandcamp.com/album/kesto-234-48-2' },
  { id:'gas',               url:'https://gasproject.bandcamp.com/album/narkopop' },
  { id:'nicolas_jaar',      url:'https://nicolasjaar.bandcamp.com/album/space-is-only-noise' },
  { id:'daphni',            url:'https://daphnimusic.bandcamp.com/album/joli-mai' },
  { id:'djsprinkles',       url:'https://djsprinkles.bandcamp.com/album/midtown-120-blues-complete-album' },
  { id:'dj_rashad',         url:'https://djrashad.bandcamp.com/album/teklife-vol-1-welcome-to-the-chi' },
  { id:'deepchord',         url:'https://deepchordsom.bandcamp.com/album/liumin' },
  { id:'wun_two',           url:'https://wuntwo.bandcamp.com/album/hestia' },
  { id:'fluxion',           url:'https://fluxion.bandcamp.com/album/vibrant-forms' },
  { id:'moodymann',         url:'https://moodymannkdj.bandcamp.com/album/dem-young-sconies' },
  { id:'dj_lag',            url:'https://djlag.bandcamp.com/album/ice-drop' },
  { id:'brian_eno',         url:'https://brianenomusic.bandcamp.com/album/the-ship' },
  { id:'weatherall',        url:'https://twoterds.bandcamp.com/album/qualia' },
  { id:'goldie',            url:'https://goldie.bandcamp.com/album/timeless-2017-remaster' },
  { id:'todd_terje',        url:'https://toddterje.bandcamp.com/album/it-s-album-time' },
  { id:'prins_thomas',      url:'https://prinsthomasmusik.bandcamp.com/album/principe-del-norte' },
  { id:'axel_boman',        url:'https://axelboman.bandcamp.com/album/tyst-natt' },
  { id:'minilogue',         url:'https://miniloguemusic.bandcamp.com/album/animals' },
  { id:'royksopp',          url:'https://royksoppofficial.bandcamp.com/album/profound-mysteries' },
  { id:'justice',           url:'https://agencyrecordings.bandcamp.com/album/cross' },
  { id:'air',               url:'https://airofficial.bandcamp.com/album/moon-safari' },
  { id:'daft_punk',         url:'https://daftpunkofficial.bandcamp.com/album/homework' },
  { id:'interstellar_funk', url:'https://interstellarfunk.bandcamp.com/album/into-the-echo' },
  { id:'regis',             url:'https://regisindustrial.bandcamp.com/album/brutal-resonance' },
  { id:'surgeon',           url:'https://surgeonuk.bandcamp.com/album/force-of-chance' },
  { id:'digital_mystikz',   url:'https://digitalmystikz.bandcamp.com/album/atmospheric-conditions' },
  { id:'pinch',             url:'https://pinch.bandcamp.com/album/the-emissary' },
  { id:'paulatemple',       url:'https://paulatemplemusic.bandcamp.com/album/decon-recon' },
  { id:'mobilegirl',        url:'https://mobilegirl.bandcamp.com/album/sway' },
  { id:'facta',             url:'https://factamusic.bandcamp.com/album/patterns-of-consciousness' },
  { id:'nia_archives',      url:'https://niaarchives.bandcamp.com/album/headful-of-snakes' },
  { id:'crystallmess',      url:'https://crystallmessmusic.bandcamp.com/album/we-be-burning' },
  { id:'route_8',           url:'https://route8music.bandcamp.com/album/who-else' },
  { id:'jack_j',            url:'https://jackjmusic.bandcamp.com/album/in-the-canyons' },
  { id:'interplanetary_criminal', url:'https://interplanetarycriminal.bandcamp.com/album/acid-raver' },
  { id:'perko',             url:'https://perkomusic.bandcamp.com/album/take-my-hand' },
  { id:'coucou_chloe',      url:'https://coucouchloemusic.bandcamp.com/album/uncanny-valley' },
  { id:'pender_street_steppers', url:'https://penderstreetmusic.bandcamp.com/album/untitled' },
  { id:'dj_sports',         url:'https://djsportsmusic.bandcamp.com/album/it-was-an-accident' },
  { id:'robag_wruhme',      url:'https://robagwruhme.bandcamp.com/album/wuzzelbud-kk' },
  { id:'lena_willikens',    url:'https://lenawillikens.bandcamp.com/album/nothing-to-fear' },
  { id:'wmvoigt',           url:'https://wolfgangvoigt.bandcamp.com/album/ruckverzauberung' },
  { id:'move_d',            url:'https://moved.bandcamp.com/album/fabric-presents-move-d' },
  { id:'claudio_prc',       url:'https://claudioprc.bandcamp.com/album/grey-matter' },
  { id:'carsten_jost',      url:'https://carstenjost.bandcamp.com/album/nothing-else' },
  { id:'dwig',              url:'https://dwigmusic.bandcamp.com/album/cloud-cover' },
  { id:'legowelt',          url:'https://legowelt.bandcamp.com/album/telenights-2' },
  { id:'dj_stingray',       url:'https://djstingray313.bandcamp.com/album/striker' },
  { id:'stephan_bodzin',    url:'https://stephanbodzin.bandcamp.com/album/maat' },
  { id:'sven_vath',         url:'https://cocoon.bandcamp.com/album/sven-vath-in-the-mix' },
  { id:'regal',             url:'https://regal.bandcamp.com/album/the-fall-of-forms' },
  { id:'rodhad',            url:'https://rodhad.bandcamp.com/album/nocturnal-bloodlust' },
  { id:'len_faki',          url:'https://lenfaki.bandcamp.com/album/skt-series-1' },
  { id:'efdemin',           url:'https://efdemin.bandcamp.com/album/new-morse-code' },
  { id:'function',          url:'https://functiondave.bandcamp.com/album/this-means-something' },
  { id:'dettmann',          url:'https://dettmann.bandcamp.com/album/conducted' },
  { id:'ben_ufo',           url:'https://benufomusic.bandcamp.com/album/presents-hessle-audio' },
  { id:'pangaea',           url:'https://pangaeamusic.bandcamp.com/album/pan-4' },
  { id:'sophie',            url:'https://sophiexxx.bandcamp.com/album/oil-of-every-pearls-un-insides' },
  { id:'ag_cook',           url:'https://agcookmusic.bandcamp.com/album/7g' },
  { id:'orbital',           url:'https://orbitalofficial.bandcamp.com/album/orbital' },
  { id:'a_guy_called_gerald', url:'https://aguycalledgeraldmusic.bandcamp.com/album/black-secret-technology' },
  { id:'haruomi_hosono',    url:'https://haruomihosono.bandcamp.com/album/watering-a-flower' },
  { id:'ryuichi_sakamoto',  url:'https://skmtofficial.bandcamp.com/album/async' },
  { id:'hiroshi_yoshimura', url:'https://hiroshiyoshimura.bandcamp.com/album/water-copy' },
  { id:'midori_takada',     url:'https://midoritakada.bandcamp.com/album/through-the-looking-glass-2017' },
  { id:'soichi_terada',     url:'https://soichiteradamusic.bandcamp.com/album/arigato-from-toyosu' },
  { id:'kuniyuki',          url:'https://kuniyukimusic.bandcamp.com/album/beautiful-soul' },
  { id:'northern_electronics_artists', url:'https://northernelectronics.bandcamp.com/album/ne-25' },
  { id:'dj_krush',          url:'https://djkrushmusic.bandcamp.com/album/planet-3-s-o' },
  { id:'the_avalanches',    url:'https://theavalanchesofficial.bandcamp.com/album/wildflower' },
  { id:'bomba_estereo',     url:'https://bombaestereobogota.bandcamp.com/album/amanecer' },
  { id:'dengue_dengue_dengue', url:'https://denguedenguedengueperu.bandcamp.com/album/mandinga-ii' },
  { id:'ninakraviz',        url:'https://ninakravizmusic.bandcamp.com/album/pochuvstvui' },
  { id:'melchior_productions', url:'https://melchiorproductions.bandcamp.com/album/on-the-run' },
  { id:'kettenkarussell',   url:'https://kettenkarussellmusic.bandcamp.com/album/nachts-schlaft-du' },
  { id:'djhealer',          url:'https://djhealermusic.bandcamp.com/album/nothing-2021' },
  { id:'petre_inspirescu',  url:'https://rhadoopetre.bandcamp.com/album/intrebari-interesante' },
  { id:'rhadoo',            url:'https://rhadoopetre.bandcamp.com/album/the-fabric-mix' },
  { id:'dixon',             url:'https://dixonmusic.bandcamp.com/album/the-inheritors' },
  { id:'ame',               url:'https://amemusic.bandcamp.com/album/ame' },
  { id:'amelie_lens',       url:'https://amelielensmusic.bandcamp.com/album/forever' },
  { id:'charlotte_de_witte', url:'https://charlottedewitte.bandcamp.com/album/return-to-nowhere' },
  { id:'lola_haro',         url:'https://lolaharo.bandcamp.com/album/mi-cielo' },
  { id:'svreca',            url:'https://svrecamusic.bandcamp.com/album/labyrinthic' },
  { id:'harold_budd',       url:'https://haroldbuddmusic.bandcamp.com/album/jane-1-11' },
  { id:'hvl',               url:'https://hvlmusic.bandcamp.com/album/hvl-ep' },
  { id:'irakli',            url:'https://irakliofficial.bandcamp.com/album/in-d' },
  { id:'nastia',            url:'https://nastiaofficial.bandcamp.com/album/metamorphosis' },
  { id:'jacek_sienkiewicz', url:'https://jaceksienkiewicz.bandcamp.com/album/reductionism' },
  { id:'maceo_plex',        url:'https://maceoplex.bandcamp.com/album/celestial' },
  { id:'mind_against',      url:'https://mindagainstmusic.bandcamp.com/album/himalia' },
  { id:'deetron',           url:'https://deetronmusic.bandcamp.com/album/a-w-a-k-e' },
  { id:'john_talabot',      url:'https://johntalabot.bandcamp.com/album/fin-2' },
  { id:'leafar',            url:'https://leafarlegov.bandcamp.com/album/midnight-in-a-perfect-world' },
  { id:'lbhonne',           url:'https://lbhonnemusic.bandcamp.com/album/on-the-run' },
  { id:'benkaczor',         url:'https://benkaczormusic.bandcamp.com/album/seagull-bay' },
  { id:'nocturne',          url:'https://nocturnemusic.bandcamp.com/album/limpid' },
  { id:'taleofus',          url:'https://taleofusmusic.bandcamp.com/album/monument' },
  { id:'dvs1',              url:'https://dvs1music.bandcamp.com/album/mindspeak' },
  { id:'zip',               url:'https://zipmusic.bandcamp.com/album/format' },
  { id:'roman_flugel',      url:'https://romanflugel.bandcamp.com/album/happiness-is-happening' },
  { id:'lawrence',          url:'https://lawrenceperlon.bandcamp.com/album/yoyogi-morning' },
  { id:'panthaduprince',    url:'https://panthaduprincemusic.bandcamp.com/album/the-triad' },
  { id:'mmayer',            url:'https://mmayermusic.bandcamp.com/album/immer' },
  { id:'villalobos',        url:'https://ricardovillalobosmusic.bandcamp.com/album/fabric-36' },
  { id:'luciano',           url:'https://lucianomusic.bandcamp.com/album/mi-amor' },
  { id:'francois_k',        url:'https://francoiskmusic.bandcamp.com/album/timewarp' },
  { id:'sasha',             url:'https://sashadj.bandcamp.com/album/involver' },
  { id:'rebolledo',         url:'https://rebolledo.bandcamp.com/album/super-pal-universe-2' },
  { id:'skream',            url:'https://skreamofficial.bandcamp.com/album/skream' },
  { id:'goldie',            url:'https://goldieofficial.bandcamp.com/album/timeless' },
  { id:'dj_rush',           url:'https://djrushmusic.bandcamp.com/album/rush-hour' },
  { id:'paul_johnson',      url:'https://pauljohnsonchicago.bandcamp.com/album/god-made-me-funky' },
  { id:'theo_parrish',      url:'https://theoparrish.bandcamp.com/album/the-sound-track' },
  { id:'dj_central',        url:'https://djcentralmusic.bandcamp.com/album/essentials' },
  { id:'dj_tennis',         url:'https://djtennismusic.bandcamp.com/album/live-from-life-and-death' },
  { id:'dj_stingray',       url:'https://djstingray313.bandcamp.com/album/bio-metallic-lp' },
  { id:'wun_two',           url:'https://wun2.bandcamp.com/album/hestia' },
  { id:'moodymann',         url:'https://moodymannofficial.bandcamp.com/album/dem-young-sconies' },
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
  console.log('Second pass — corrected URLs...\n');
  const found = [];
  const notFound = [];
  const seen = new Set();

  for (const album of ALBUMS) {
    if (seen.has(album.id)) continue;
    seen.add(album.id);

    try {
      const html = await fetchPage(album.url);
      if (typeof html === 'string' && html.startsWith('STATUS_')) {
        process.stdout.write(`✗  ${album.id.padEnd(28)} ${html}\n`);
        notFound.push(album.id);
        await new Promise(r => setTimeout(r, 300));
        continue;
      }
      const albumId = extractAlbumId(html);
      if (albumId) {
        const slug = new URL(album.url).hostname.replace('.bandcamp.com','');
        console.log(`✓  ${album.id.padEnd(28)} ${albumId}  (${slug})`);
        found.push({ id: album.id, albumId, slug, url: album.url });
      } else {
        process.stdout.write(`✗  ${album.id.padEnd(28)} no ID found\n`);
        notFound.push(album.id);
      }
    } catch (e) {
      process.stdout.write(`✗  ${album.id.padEnd(28)} Error: ${e.message}\n`);
      notFound.push(album.id);
    }
    await new Promise(r => setTimeout(r, 350));
  }

  console.log('\n\n═══════════════════════════════════════════════════');
  console.log('RESULTS — paste into nodes.js');
  console.log('═══════════════════════════════════════════════════\n');
  for (const r of found) {
    console.log(`  ${r.id.padEnd(28)} bandcamp:'${r.slug}', bandcamp_album:'${r.albumId}',`);
  }
  console.log(`\n✓ ${found.length} found`);
}

main();
