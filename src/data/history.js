/**
 * Historical narrative nodes — the "story layer" on top of the base graph.
 * Each node renders as a CIRCLE in the SVG at its correct era + region position.
 * Clicking opens a cinematic bottom panel with multi-step narrative.
 *
 * focus:     node IDs that are fully highlighted for this step
 * secondary: node IDs that remain visible but less prominent
 */
export const HISTORY = [
  {
    id: 'h_warehouse',
    label: 'The Warehouse',
    era: 1977,
    city: 'Chicago',
    country: 'US',
    subtitle: 'Chicago, 1977 — The birth of house music',
    steps: [
      {
        text: 'In 1977, DJ Frankie Knuckles began a weekly residency at a Black gay club on South Jefferson Street called The Warehouse. Playing edited disco records over early drum machines to a crowd that mainstream Chicago had turned away, he invented a new relationship between DJ and dancefloor — slower, deeper, more physical than anything before it.',
        focus:     ['knuckles', 'warehouse', 'chicago_scene'],
        secondary: ['heard', 'hardy', 'trax', 'smartbar'],
      },
      {
        text: 'Larry Heard — Mr. Fingers — took the sound somewhere else entirely. Working alone with a Roland TR-909 and a Juno-60 synthesiser in his bedroom apartment, he recorded "Can You Feel It" in 1986. It was the moment house music became emotional rather than functional: a love song built from machines.',
        focus:     ['heard', 'trax', 'chicago_scene'],
        secondary: ['knuckles', 'warehouse', 'dance_mania'],
      },
      {
        text: 'The name "house music" came from the Warehouse itself. Within a decade, the sound it invented had reached every corner of the globe — through Trax Records, through pirate radio, through a generation of DJs who heard in those stripped-back beats a form of freedom that nothing else could offer.',
        focus:     ['trax', 'chicago_scene', 'knuckles', 'heard'],
        secondary: ['warehouse', 'dance_mania', 'smartbar', 'dance_mania'],
      },
    ],
  },

  {
    id: 'h_belleville3',
    label: 'Belleville Three',
    era: 1985,
    city: 'Detroit',
    country: 'US',
    subtitle: 'Detroit, 1985 — Three friends who invented techno',
    steps: [
      {
        text: 'Juan Atkins, Derrick May, and Kevin Saunderson grew up together in Belleville, a Detroit suburb. They shared a love of Kraftwerk, Parliament-Funkadelic, and the emerging Chicago house sound — and they heard a synthesis in that combination that nobody else had yet articulated. Detroit was post-industrial, post-riot, and the music reflected it: harder, colder, more futuristic.',
        focus:     ['belleville3', 'detroit_scene'],
        secondary: ['metroplex', 'transmat', 'kms', 'planet_e'],
      },
      {
        text: 'Each member built his own label: Atkins launched Metroplex, May founded Transmat, Saunderson built KMS. Their records — released anonymously, without faces or press shots — created a vocabulary for techno that every producer since has had to reckon with. The machines were not cold. They were grieving.',
        focus:     ['metroplex', 'transmat', 'kms', 'belleville3'],
        secondary: ['detroit_scene', 'tresor_records', 'planet_e'],
      },
      {
        text: 'In 1988, a British compilation called "Techno! The New Dance Sound of Detroit" gave the music its name and sent it to Europe. Derrick May\'s "Strings of Life" — a track with no drums, only a cascading piano figure over a synthesised string arrangement — became one of the most emotionally overwhelming records in electronic music history.',
        focus:     ['belleville3', 'detroit_scene', 'tresor_records'],
        secondary: ['metroplex', 'transmat', 'kms', 'planet_e'],
      },
    ],
  },

  {
    id: 'h_ibiza87',
    label: "Ibiza '87",
    era: 1987,
    city: 'Ibiza',
    country: 'ES',
    subtitle: 'Ibiza, 1987 — The night that changed British music',
    steps: [
      {
        text: 'In the summer of 1987, four London DJs — Danny Rampling, Paul Oakenfold, Nicky Holloway, and Johnny Walker — took a holiday to Ibiza. At an open-air club called Amnesia, they heard DJ Alfredo playing an eclectic mix of house, rock, and Balearic pop to a crowd at sunrise with no roof above them. They flew home with something they could not explain.',
        focus:     ['ibiza', 'chicago_scene'],
        secondary: ['hacienda'],
      },
      {
        text: 'Back in London, they began throwing nights that tried to recreate the feeling — open, euphoric, borderless between genres. Within months, this had mutated into the British acid house scene. The chain was direct and traceable: Chicago → Ibiza → London. But the speed and scale of what followed was not predictable from any of those origins.',
        focus:     ['hacienda', 'chicago_scene', 'ibiza'],
        secondary: ['detroit_scene'],
      },
    ],
  },

  {
    id: 'h_summerofLove',
    label: 'Summer of Love',
    era: 1988,
    city: 'Manchester',
    country: 'UK',
    subtitle: 'UK, 1988 — Acid house rewires Britain',
    steps: [
      {
        text: 'By summer 1988, acid house had moved from London clubs to fields and warehouses outside the M25 motorway. Tens of thousands gathered at unlicensed events coordinated by pirate radio — smiling faces, white gloves, a generation discovering collective euphoria in a country that had spent a decade under Thatcherite atomisation. The tabloids called it a moral panic.',
        focus:     ['hacienda', 'chicago_scene'],
        secondary: ['detroit_scene', 'trax'],
      },
      {
        text: 'The Haçienda in Manchester — a cavernous post-punk venue co-owned by Factory Records and New Order — became the spiritual headquarters of UK rave. DJ Mike Pickering played Chicago house to crowds who had grown up on Joy Division and The Smiths. The collision between those two worlds was total and irreversible.',
        focus:     ['hacienda'],
        secondary: ['chicago_scene', 'detroit_scene'],
      },
      {
        text: 'The British government responded with the Criminal Justice Act 1994, which outlawed gatherings defined by music with "repetitive beats." The law failed to kill the culture but pushed it underground — and in doing so, created the pressure that produced Warp Records, Metalheadz, and eventually the entire UK electronic music infrastructure that followed.',
        focus:     ['hacienda'],
        secondary: ['chicago_scene', 'warp_records'],
      },
    ],
  },

  {
    id: 'h_ur',
    label: 'Underground Resistance',
    era: 1989,
    city: 'Detroit',
    country: 'US',
    subtitle: 'Detroit, 1989 — The machine against the machine',
    steps: [
      {
        text: 'Jeff Mills and "Mad" Mike Banks founded Underground Resistance in Detroit in 1989 — not merely as a record label but as a resistance movement. Their printed manifesto called for music to fight "the corporate takeover." Releases were anonymous. Artists were numbers or codenames. Interviews were declined. The music was hard, uncompromising, and deliberately hostile to celebrity culture.',
        focus:     ['underground_resistance', 'jeff_mills', 'robert_hood'],
        secondary: ['detroit_scene', 'tresor_records', 'axis_records'],
      },
      {
        text: 'Underground Resistance\'s distribution was as political as its sound. Records were sold from a van, refused to major retailers, and pressed in deliberately limited quantities. When Tresor in Berlin licensed their catalogue, they insisted on retaining total creative and commercial control. The Berlin-Detroit axis they forged became the structural spine of European techno.',
        focus:     ['underground_resistance', 'jeff_mills', 'tresor_records', 'tresor_club'],
        secondary: ['robert_hood', 'axis_records', 'berghain'],
      },
    ],
  },

  {
    id: 'h_berlin91',
    label: 'Berlin Zero Hour',
    era: 1991,
    city: 'Berlin',
    country: 'DE',
    subtitle: 'Berlin, 1989–2004 — Techno in the ruins of reunification',
    steps: [
      {
        text: 'When the Berlin Wall fell in November 1989, it left behind a city bisected by empty lots, abandoned buildings, and a temporary absence of law enforcement. Within months, a new culture had moved into the vacuum. The first techno parties happened in bunkers, warehouses, and derelict buildings — a sound that fit the architecture perfectly.',
        focus:     ['tresor_club', 'detroit_scene'],
        secondary: ['underground_resistance', 'jeff_mills', 'berghain'],
      },
      {
        text: 'In 1991, Dimitri Hegemann opened Tresor in the vault of the bombed-out Wertheim department store on Potsdamer Platz — a space that had survived the war, the division, and reunification. Low ceilings, metal bars, absolute darkness, and a sound system tuned for physical impact. He flew in Jeff Mills, Robert Hood, and the entire UR catalogue. The Berlin-Detroit connection became concrete.',
        focus:     ['tresor_club', 'tresor_records', 'jeff_mills', 'robert_hood', 'underground_resistance'],
        secondary: ['berghain', 'ostgut_ton', 'len_faki'],
      },
      {
        text: 'By 2004, Berghain opened in a former East German turbine hall — inheriting and amplifying everything Tresor had built over thirteen years. The city had transformed from bombed periphery to the acknowledged global capital of techno. It is a status that depends entirely on the specific rupture of 1989 — the accident of a city that briefly had no rules.',
        focus:     ['berghain', 'ostgut_ton', 'tresor_club'],
        secondary: ['tresor_records', 'len_faki', 'bpitch'],
      },
    ],
  },

  {
    id: 'h_kompakt',
    label: 'Kompakt',
    era: 1998,
    city: 'Cologne',
    country: 'DE',
    subtitle: 'Cologne, 1998 — The counterweight to Berlin',
    steps: [
      {
        text: 'In 1998, a Cologne record shop and distribution network became Kompakt Records. The city was only two hours from Berlin but occupied a completely different emotional register — warmer, more melodic, less confrontational. Michael Mayer, Wolfgang Voigt, and Reinhard Voigt developed what was called "microhouse": techno stripped to its smallest elements and made to breathe.',
        focus:     ['kompakt', 'mmayer'],
        secondary: ['aguayo', 'cómeme'],
      },
      {
        text: 'Kompakt proved that German electronic music could exist outside Berlin\'s gravitational field. Their roster — which eventually included the Chilean-Argentine producer Matias Aguayo — brought new geographies and rhythmic influences into the fold. Their Pop Ambient compilation series, running since 2001, proposed an entirely different relationship to electronic music: one without a dancefloor.',
        focus:     ['kompakt', 'mmayer', 'aguayo'],
        secondary: ['cómeme', 'rebolledo'],
      },
    ],
  },

  {
    id: 'h_joburghouse',
    label: "Jo'burg Sound",
    era: 2001,
    city: 'Johannesburg',
    country: 'ZA',
    subtitle: 'Johannesburg, 1994–2010 — How Chicago house became Afro house',
    steps: [
      {
        text: 'Chicago house arrived in South Africa in the late 1980s via cassette tape, imported vinyl, and late-night pirate radio. The sound connected deeply with Black South African communities navigating the final years of apartheid — music built by Black Americans for Black Americans, heard across the ocean in a country still under systematic racial oppression.',
        focus:     ['house_afrika', 'chicago_scene'],
        secondary: ['vinny_da_vinci', 'soul_candi', 'knuckles'],
      },
      {
        text: 'House Afrika Records, founded by Vinny Da Vinci in 1994, began documenting the South African response to that sound — and it was already something different. Slower, more spacious, more vocal. Soul Candi Records, following in 2001, became the first major Afro house label and the platform through which the world would eventually discover the Johannesburg scene.',
        focus:     ['soul_candi', 'vinny_da_vinci', 'house_afrika'],
        secondary: ['blackcoffee', 'soulistic_music', 'dj_christos'],
      },
      {
        text: 'Black Coffee\'s breakthrough changed the scale of everything. His productions stripped the genre to pure feeling — deep bass, sparse percussion, patient melodies that demanded attention rather than submission. Culoe De Song and Black Motion followed. The Johannesburg sound became global, and Afro house became one of the most influential subgenres of the 2010s.',
        focus:     ['blackcoffee', 'soulistic_music', 'culoe_de_song'],
        secondary: ['soul_candi', 'house_afrika', 'black_motion'],
      },
    ],
  },

  {
    id: 'h_tokyo',
    label: 'Tokyo Deep House',
    era: 2002,
    city: 'Tokyo',
    country: 'JP',
    subtitle: 'Tokyo, 1999–2010 — A different relationship to house music',
    steps: [
      {
        text: 'Tokyo developed its own underground house culture — not an imitation of Chicago or Detroit, but a genuinely distinct interpretation. Clubs like Womb provided world-class sound systems and a form of listening discipline unusual in Western club culture. The relationship to the music was more devotional than hedonistic: people came to hear, not just to feel.',
        focus:     ['womb_tokyo', 'mule_musiq'],
        secondary: ['kuniyuki'],
      },
      {
        text: 'Mule Musiq, founded by Tadashi Yabe in 2002, became the label that made Tokyo\'s deep house world legible to listeners outside Japan. Kuniyuki Takahashi — whose piano-led productions drew equally from jazz, Larry Heard, and his own Buddhist-influenced aesthetics — gave the label its most distinctive voice, and proved that the emotional vocabulary of deep house was not geographically bounded.',
        focus:     ['mule_musiq', 'kuniyuki'],
        secondary: ['womb_tokyo', 'heard', 'chicago_scene'],
      },
    ],
  },

  {
    id: 'h_comeme',
    label: 'Cómeme',
    era: 2010,
    city: 'Buenos Aires',
    country: 'AR',
    subtitle: 'Buenos Aires, 2010 — A new geography for the underground',
    steps: [
      {
        text: 'Matias Aguayo was born in Chile, came of age in Cologne on Kompakt Records, then relocated to Buenos Aires. In 2010 he founded Cómeme — a label that routed minimal techno and microhouse through cumbia, salsa, and South American rhythm traditions. It was not a fusion project. It was proof that the genre had no fixed national identity.',
        focus:     ['aguayo', 'cómeme', 'kompakt'],
        secondary: ['rebolledo', 'cumbia'],
      },
      {
        text: 'Cómeme\'s parties were chaotic, sweaty, and politically charged. Artists like Rebolledo brought a physical looseness to electronic music that European labels had largely lost. The label demonstrated that the underground was not a geography — it was a set of values. And those values could take root anywhere with a dancefloor and a reason to dance.',
        focus:     ['cómeme', 'aguayo', 'rebolledo'],
        secondary: ['kompakt', 'cumbia', 'brazil_scene'],
      },
    ],
  },
];
