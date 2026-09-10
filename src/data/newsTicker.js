// Verified electronic music milestones — events, clubs, cultural moments
// Each entry has a nodeId for click-to-navigate (null = no linked node yet)
export const NEWS_TICKER = [

  // ── Black heritage ───────────────────────────────────────────────────────────
  { text: 'House music was created by Black American DJs — Frankie Knuckles, Larry Levan, and Ron Hardy built the form from the ground up · 1970s–80s', nodeId: 'knuckles' },
  { text: 'The Warehouse was a club for Black gay men on Chicago\'s South Side — it is where house music was born · 1977', nodeId: 'warehouse' },
  { text: 'Detroit techno was invented by three Black musicians from Belleville — Juan Atkins, Derrick May, and Kevin Saunderson · 1981', nodeId: 'derrick_may' },
  { text: 'Black club culture — from Harlem rent parties to Chicago\'s Bronzeville ballrooms — built the dancefloor infrastructure that made house possible', nodeId: 'black_club_culture' },
  { text: 'Larry Levan and Frankie Knuckles both found their musical voice dancing at The Loft before starting their own careers · early 1970s', nodeId: 'the_loft' },

  // ── Queer heritage ───────────────────────────────────────────────────────────
  { text: 'The Paradise Garage served a primarily Black and Latino gay clientele — its freedom shaped the emotional language of house music · 1977–87', nodeId: 'paradise_garage' },
  { text: 'The queer dancefloor is where house music found its emotional vocabulary — the four-on-the-floor beat as a collective insistence on joy', nodeId: 'queer_dancefloor' },
  { text: 'Ballroom culture — houses, voguing, balls — emerged from Black and Latinx LGBTQ+ New York and gave birth to its own musical form · 1960s–', nodeId: 'ballroom' },
  { text: 'David Mancuso opened The Loft in 1970 as a space for those excluded elsewhere — the founding model of the club as sanctuary rather than business', nodeId: 'the_loft' },
  { text: 'Electronic dance music as we know it was shaped in spaces that mainstream culture had refused to allow — Black, Latino, and queer communities built the template', nodeId: 'black_club_culture' },

  // ── Clubs & venues ──────────────────────────────────────────────────────────
  { text: 'Frankie Knuckles begins his residency at The Warehouse, Chicago — the venue that gave house music its name · 1977', nodeId: 'knuckles' },
  { text: 'Ron Hardy takes over at Music Box, Chicago — known for introducing tracks weeks before their official release · 1983', nodeId: 'ron_hardy' },
  { text: 'The Music Institute opens in Detroit — the first dedicated techno club, giving the scene a home in its own city · 1988', nodeId: 'the_music_institute' },
  { text: 'Tresor opens in the vaults beneath a derelict East Berlin department store — the venue that defined the sound of post-Wall Berlin · 1991', nodeId: 'tresor_club' },
  { text: 'Ministry of Sound opens in a former bus garage in London — modelled directly on the Paradise Garage sound system · 1991', nodeId: 'ministry_of_sound' },
  { text: 'The first Fabric night takes place in a former cold-storage facility in London · 1999', nodeId: 'fabric' },
  { text: 'Robert Johnson opens in Offenbach am Main — its intimate, living-room format became a template for a generation of European clubs · 1999', nodeId: 'robertjohnson' },
  { text: 'Berghain opens in a former East Berlin power station — its industrial scale and 72-hour weekends made it the most discussed club in the world · 2004', nodeId: 'berghain' },
  { text: 'De School opens inside a disused school in Amsterdam · 2016', nodeId: 'de_school' },
  { text: 'Fabric loses its licence after a drug-related closure — then wins it back after a landmark campaign by the electronic music community · 2016', nodeId: 'fabric' },
  { text: 'De School closes its doors after six years · 2022', nodeId: 'de_school' },

  // ── Festivals & large events ─────────────────────────────────────────────────
  { text: 'The first Love Parade in Berlin draws 150 people down the Kurfürstendamm · 1989', nodeId: 'love_parade' },
  { text: 'Love Parade 1999 draws an estimated 1.5 million people through central Berlin — at its peak the largest electronic music event in the world', nodeId: 'love_parade' },
  { text: 'Sónar Festival launches in Barcelona — one of the first festivals to treat electronic music as an art form alongside a club event · 1994', nodeId: 'sonar_festival' },
  { text: 'Amsterdam Dance Event (ADE) holds its first edition — it grew into the largest club music conference in the world · 1996', nodeId: 'ade' },
  { text: 'Mayday rave festival begins in Dortmund — one of the largest indoor rave events in Europe · 1991', nodeId: 'mayday_rave' },
  { text: 'The Detroit Electronic Music Festival launches as a free public event in Hart Plaza, on the river where techno was born · 2000', nodeId: null },

  // ── Cultural & scene moments ─────────────────────────────────────────────────
  { text: 'The Second Summer of Love sweeps acid house across the UK — mass outdoor raves draw hundreds of thousands · 1988', nodeId: null },
  { text: 'The fall of the Berlin Wall leaves vast areas of East Berlin unpoliced and unowned — the power vacuum gave birth to the city\'s legendary club scene · 1989', nodeId: null },
  { text: 'The Criminal Justice Act criminalises gatherings playing music "characterised by the emission of a succession of repetitive beats" — UK rave scenes move underground · 1994', nodeId: null },
  { text: 'FWD>> night launches at Plastic People, London — the weekly residency where dubstep crystallised as a distinct genre · 2001', nodeId: 'plastic_people' },
  { text: 'Boiler Room streams its first live DJ set on YouTube from a cramped London flat — it grew into the world\'s leading platform for underground music broadcasting · 2010', nodeId: 'boiler_room' },

  // ── Residencies & landmark performances ─────────────────────────────────────
  { text: 'Larry Levan holds court at Paradise Garage for a decade — his marathon sets redefined what a DJ could do · 1977–87', nodeId: 'levan' },
  { text: 'Paradise Garage closes its doors for the last time · 1987', nodeId: 'paradise_garage' },
  { text: 'Ron Hardy plays marathon sets at Music Box, spinning tracks no one had heard — his parties were the crucible of Chicago house', nodeId: 'ron_hardy' },
  { text: 'Jeff Mills plays a three-turntable set at the Music Institute — a performance still cited as one of the great moments in techno history', nodeId: 'jeff_mills' },

  // ── Hardware & scene firsts ───────────────────────────────────────────────────
  { text: 'Roland releases the TR-808 — discontinued after two years due to poor sales, its bass drum became the most widely used drum sound in recorded popular music · 1980', nodeId: null },
  { text: 'Roland releases the TR-909 — also a commercial failure, sold cheaply second-hand, it became the defining percussion sound of house and techno · 1981', nodeId: null },
  { text: '"Jack Your Body" by Steve \'Silk\' Hurley reaches UK #1 — the first house record to top the chart, climbing there through club play alone with no mainstream promotion · 1987', nodeId: 'steve_silk_hurley' },
  { text: 'Derrick May records "Strings of Life" — a cascading piano loop over a machine beat, it became one of the most celebrated records in techno history and built the music\'s audience in Europe · 1987', nodeId: 'derrick_may' },
  { text: 'Larry Heard — recording as Mr. Fingers — makes "Can You Feel It" alone in his Chicago bedroom with a TR-909 and a Juno-60, founding the deep house genre · 1986', nodeId: 'larry_heard' },
  { text: 'Roni Size wins the Mercury Prize with Reprazent\'s New Forms — the first drum and bass record to receive the award · 1997', nodeId: 'roni_size' },
  { text: 'Burial releases Untrue — his identity remained unknown until 2008, making it one of the most discussed anonymous works in electronic music history · 2007', nodeId: 'burial' },

  // ── Record stores & spaces ───────────────────────────────────────────────────
  { text: 'Rough Trade opens its Portobello Road shop in London — it became one of the most important independent record stores in the world · 1976', nodeId: 'rough_trade' },
];
