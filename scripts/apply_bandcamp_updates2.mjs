/**
 * Applies bandcamp + bandcamp_album fields to multi-line node objects.
 * Finds the closing `},` of each node and inserts fields on the first line
 * (where country:'XX' is) by appending after the last known field on that line.
 */
import { readFileSync, writeFileSync } from 'fs';

const UPDATES = [
  { id:'call_super',        bandcamp:'callsuper',        album:'2574682481' },
  { id:'djrum',             bandcamp:'djrum',             album:'2405195433' },
  { id:'leon_vynehall',     bandcamp:'leonvynehall',      album:'3069680126' },
  { id:'special_request',   bandcamp:'special-request',   album:'657058287'  },
  { id:'james_holden',      bandcamp:'jamesholden',       album:'1481898548' },
  { id:'kode9',             bandcamp:'kode9',             album:'1335102901' },
  { id:'eris_drew',         bandcamp:'erisdrew',          album:'3018135629' },
  { id:'octo_octa',         bandcamp:'octoocta',          album:'481660896'  },
  { id:'k_lone',            bandcamp:'k-lone',            album:'3811009189' },
  { id:'bonobo',            bandcamp:'bonobomusic',       album:'589833369'  },
  { id:'the_knife',         bandcamp:'theknife',          album:'1630306458' },
  { id:'fever_ray',         bandcamp:'feverray',          album:'1277714303' },
  { id:'helena_hauff',      bandcamp:'helenahauff',       album:'1615473620' },
  { id:'ben_klock',         bandcamp:'benklock',          album:'1218945776' },
  { id:'ellen_allien',      bandcamp:'ellenallien',       album:'55410409'   },
  { id:'kiasmos',           bandcamp:'kiasmos',           album:'3643027682' },
  { id:'the_field',         bandcamp:'thefield',          album:'1216253061' },
  { id:'kornel_kovacs',     bandcamp:'kornelkovacs',      album:'3992184321' },
  { id:'etienne_de_crecy',  bandcamp:'etiennedecrecy',    album:'2671923751' },
  { id:'caribou',           bandcamp:'caribouband',       album:'2088310273' },
  { id:'jlin',              bandcamp:'jlin',              album:'2765736108' },
  { id:'peggy_gou',         bandcamp:'peggygou',          album:'544218793'  },
  { id:'boards_of_canada',  bandcamp:'boardsofcanada',    album:'3297123711' },
  { id:'rei_harakami',      bandcamp:'reiharakami',       album:'2952695191' },
  { id:'susumu_yokota',     bandcamp:'susumuyokota',      album:'3052834527' },
  { id:'jamie_xx',          bandcamp:'jamiexx',           album:'150871303'  },
  { id:'mike_parker',       bandcamp:'mikeparker',        album:'1490032319' },
  { id:'aguayo',            bandcamp:'matiasaguayo',      album:'3735349589' },
  { id:'nicolas_jaar',      bandcamp:'nicolasjaar',       album:'2134150780' },
  { id:'interstellar_funk', bandcamp:'interstellarfunk',  album:'3697715538' },
  { id:'robag_wruhme',      bandcamp:'robagwruhme',       album:'1221722553' },
  { id:'orbital',           bandcamp:'orbitalofficial',   album:'890613488'  },
];

let src = readFileSync('src/data/nodes.js', 'utf8');
const lines = src.split('\n');
let updated = 0;
const notFound = [];

for (const u of UPDATES) {
  // Find the line index with this id + type:'artist'
  let startLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`id:'${u.id}'`) && lines[i].includes(`type:'artist'`)) {
      startLine = i;
      break;
    }
  }
  if (startLine < 0) {
    notFound.push(u.id);
    continue;
  }

  // Check if already has bandcamp_album in range
  const chunk = lines.slice(startLine, startLine + 30).join('\n');
  if (chunk.includes('bandcamp_album')) {
    console.log(`SKIP (already done): ${u.id}`);
    continue;
  }

  // The first line has all the metadata (id, label, type, genre, era, city, country)
  // It ends with country:'XX', — append bandcamp fields there
  const firstLine = lines[startLine];
  if (firstLine.includes(`country:`)) {
    // Append after the country field
    const newFirstLine = firstLine.replace(
      /(country:'[A-Z]+'),?(\s*)$/,
      `$1, bandcamp:'${u.bandcamp}', bandcamp_album:'${u.album}',$2`
    );
    if (newFirstLine !== firstLine) {
      lines[startLine] = newFirstLine;
      updated++;
      console.log(`✓  ${u.id}`);
      continue;
    }
  }

  // Fallback: find the closing }, of this node and add before it
  // Count brace depth from startLine
  let depth = 0;
  let closeLine = -1;
  for (let i = startLine; i < Math.min(startLine + 60, lines.length); i++) {
    for (const ch of lines[i]) {
      if (ch === '{') depth++;
      if (ch === '}') { depth--; if (depth === 0) { closeLine = i; break; } }
    }
    if (closeLine >= 0) break;
  }
  if (closeLine >= 0) {
    // Insert a new line before the closing line
    lines.splice(closeLine, 0, `    bandcamp:'${u.bandcamp}', bandcamp_album:'${u.album}',`);
    updated++;
    console.log(`✓  ${u.id} (fallback)`);
  } else {
    notFound.push(u.id + ' (no close)');
  }
}

writeFileSync('src/data/nodes.js', lines.join('\n'));
console.log(`\nDone — ${updated} nodes updated`);
if (notFound.length) console.log('Not found:', notFound.join(', '));
