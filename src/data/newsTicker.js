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

  // ── France ──────────────────────────────────────────────────────────────────
  { text: 'Laurent Garnier travels to Chicago in the late 1980s and returns with house and techno — his Rex Club residency in Paris makes it one of the most important underground venues in Europe · 1987', nodeId: null },
  { text: 'Daft Punk form in Paris — Thomas Bangalter and Guy-Manuel de Homem-Christo release Homework in 1997, launching French electronic music as a global force · 1993', nodeId: null },
  { text: 'The French Touch wave takes shape in Paris — Daft Punk, Cassius, Etienne de Crécy, and Dimitri from Paris build a sound rooted in filtered disco that rewires pop and club music alike · late 1990s', nodeId: null },

  // ── Belgium ──────────────────────────────────────────────────────────────────
  { text: 'New Beat emerges from Belgian clubs in Ghent and Antwerp — a slowed-down, hypnotic style that becomes the first distinctly Belgian contribution to electronic dance music · 1986–88', nodeId: null },
  { text: 'Front 242 form in Brussels — their industrial body music, driven by sequencers and drum machines, directly shapes EBM as a genre · 1981', nodeId: null },
  { text: 'R&S Records is founded in Ghent by Renaat Vandepapeliere and Sabine Maes — it becomes one of Europe\'s most influential techno and trance labels, releasing records by Joey Beltram, Aphex Twin, and Ken Ishii · 1984', nodeId: null },

  // ── Netherlands ──────────────────────────────────────────────────────────────
  { text: 'Gabber emerges from Rotterdam — a form of hard, pounding techno that becomes the most distinctively Dutch contribution to dance music, with its own fashion, rituals, and identity · early 1990s', nodeId: null },
  { text: 'Thunderdome launches in Amsterdam — the gabber and hardcore event draws crowds of tens of thousands and establishes the Netherlands as the centre of the harder end of electronic music · 1992', nodeId: null },

  // ── Germany beyond Berlin ─────────────────────────────────────────────────────
  { text: 'Sven Väth builds his reputation at Omen in Frankfurt — the club becomes a launchpad for a generation of European DJs who blend Detroit techno with their own sensibility · early 1990s', nodeId: null },
  { text: 'Kompakt launches in Cologne as both a record shop and label — Michael Mayer and Reinhard Voigt\'s minimal sound expands from a small shop into one of the most-imitated aesthetics in European club music · 1993', nodeId: null },

  // ── UK — Manchester ───────────────────────────────────────────────────────────
  { text: 'The Haçienda opens in Manchester, financed by Factory Records and New Order — it becomes the centre of the UK acid house explosion of 1988–89 · 1982', nodeId: null },
  { text: 'Madchester: The Haçienda\'s dancefloor meets the indie guitar scene — Happy Mondays, The Stone Roses, and 808 State dissolve the boundary between rock and electronic dance music · 1988–90', nodeId: null },
  { text: '808 State record "Pacific State" in Manchester — the track becomes one of the most celebrated British electronic records of the era · 1989', nodeId: null },

  // ── UK — Sheffield ────────────────────────────────────────────────────────────
  { text: 'Cabaret Voltaire form in Sheffield — experimenting with tape machines, synthesisers, and found sound from their earliest rehearsals, they become one of the founding acts of industrial electronica · 1973', nodeId: null },
  { text: 'The Human League form in Sheffield as a purely synthesiser-based group — their refusal of traditional instruments in 1977 marks Sheffield as a centre for electronic production', nodeId: null },
  { text: 'Warp Records is founded in Sheffield by Steve Beckett and Rob Mitchell — it goes on to release foundational albums by Aphex Twin, Autechre, LFO, and Boards of Canada · 1989', nodeId: null },

  // ── UK — Bristol ──────────────────────────────────────────────────────────────
  { text: 'The Wild Bunch sound system collective in Bristol evolves into Massive Attack — their journey from dancefloor system to Mercury Prize winners traces a uniquely British electronic arc · 1983–91', nodeId: null },
  { text: 'Massive Attack, Portishead, and Tricky emerge from Bristol — the Bristol sound, drawing from hip-hop, dub, and electronics, gives birth to what becomes known internationally as trip-hop · early 1990s', nodeId: null },

  // ── UK — Scotland ─────────────────────────────────────────────────────────────
  { text: 'Sub Club opens in Glasgow — Scotland\'s most enduring venue for underground electronic music, it has hosted thirty years of techno and house · 1987', nodeId: null },
  { text: 'Optimo (Espacio) launches at Sub Club, Glasgow — JD Twitch and Jonnie Wilkes\'s Sunday night refuses genre boundaries for over a decade and becomes one of the most celebrated nights in UK club history · 1997', nodeId: null },

  // ── UK — London beyond house and techno ──────────────────────────────────────
  { text: 'Jungle emerges from London\'s pirate radio stations and warehouse raves — a fusion of breakbeats, bass, and sampled sound that creates a distinctly British electronic form · early 1990s', nodeId: null },
  { text: 'Metalheadz is founded by Goldie in London — the label defines drum and bass as it moves beyond jungle toward a more cinematic, jazz-inflected sound · 1994', nodeId: null },
  { text: 'UK Garage takes shape in London clubs — a shuffled, vocal-led evolution of American garage house that becomes the direct ancestor of grime and bass music · mid-1990s', nodeId: null },
  { text: 'Grime erupts from East London pirate radio — Dizzee Rascal, Wiley, and Skepta develop an electronic form built from 140bpm beats and fast MCs that is entirely British in origin · early 2000s', nodeId: null },

  // ── Japan ────────────────────────────────────────────────────────────────────
  { text: 'Ken Ishii signs to R&S Records in Ghent — his album Extra makes him one of the first Japanese artists to achieve significant international recognition in techno · 1994', nodeId: null },
  { text: 'Womb opens in Shibuya, Tokyo — its world-class sound system and international bookings make it one of the most important electronic music clubs in Asia · 1999', nodeId: null },

  // ── Spain ─────────────────────────────────────────────────────────────────────
  { text: 'Amnesia in Ibiza begins hosting open-air all-night dances — the club with no roof and no walls becomes one of the defining experiences of European rave culture · early 1980s', nodeId: null },
  { text: 'Space Ibiza opens — its closing parties, running into the following afternoon under the Mediterranean sun, redefine what an electronic music event can be · 1989', nodeId: null },
  { text: 'Sónar Festival launches in Barcelona as a two-day event — it is among the first festivals to present electronic music as art alongside a club experience · 1994', nodeId: 'sonar_festival' },

  // ── Brazil ───────────────────────────────────────────────────────────────────
  { text: 'D-Edge opens in São Paulo — it becomes the anchor of Brazil\'s underground electronic scene and one of the most important clubs in South America · 2003', nodeId: null },

  // ── Canada ───────────────────────────────────────────────────────────────────
  { text: 'Ritchie Hawtin begins DJing in Windsor, Ontario, across the river from Detroit — recording as Plastikman, he becomes one of techno\'s most influential artists and the living bridge between Detroit and Europe · early 1990s', nodeId: null },
  { text: 'Mutek festival launches in Montreal — an annual gathering at the border of digital art and electronic music that grows into one of the most internationally respected events in the field · 2000', nodeId: null },

  // ── South Africa ─────────────────────────────────────────────────────────────
  { text: 'Kwaito emerges from Johannesburg\'s townships — an electronic music form built from slowed house beats, local languages, and South African street culture, it becomes the first large-scale African contribution to dance music · early 1990s', nodeId: null },

  // ── Middle East ──────────────────────────────────────────────────────────────
  { text: 'Haoman 17 opens in Tel Aviv and develops into The Block — the club becomes one of the most celebrated venues outside Western Europe, a centre for underground techno in the Middle East · early 2000s', nodeId: null },

  // ── US — more cities ──────────────────────────────────────────────────────────
  { text: 'Marshall Jefferson records "Move Your Body" in Chicago — the first house record built around a prominent piano line, it proves the music can carry real emotion · 1986', nodeId: null },
  { text: 'Trax Records is founded in Chicago by Larry Sherman — the label becomes a foundational archive of early house music, releasing records by Frankie Knuckles, Larry Heard, and Marshall Jefferson · 1984', nodeId: null },
  { text: 'Underground Resistance is founded in Detroit by Mike Banks and Jeff Mills — releasing records with minimal artwork and refusing all interviews, they establish the political language of techno as a form of resistance · 1989', nodeId: null },
  { text: 'The Body & Soul Sunday afternoon parties launch in New York — Frankie Knuckles, Joe Claussell, and Danny Krivit create one of the most beloved DJ institutions in the city\'s history · 1996', nodeId: null },
];
