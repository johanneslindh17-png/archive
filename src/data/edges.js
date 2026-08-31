export const EDGES = [
  // ── ROOTS ───────────────────────────────────────────────────────────────
  { from:'funk',          to:'disco',          strength:2, type:'lineage' },
  { from:'funk',          to:'nyc_scene',      strength:2, type:'influence' },
  { from:'kraftwerk',     to:'detroit_scene',  strength:3, type:'influence' },
  { from:'disco',         to:'chicago_scene',  strength:3, type:'lineage' },
  { from:'disco',         to:'nyc_scene',      strength:3, type:'lineage' },

  // ── CULTURAL HERITAGE ────────────────────────────────────────────────────
  // Black Club Culture
  { from:'funk',               to:'black_club_culture',  strength:2, type:'lineage' },
  { from:'disco',              to:'black_club_culture',  strength:2, type:'lineage' },
  { from:'black_club_culture', to:'chicago_scene',       strength:3, type:'lineage' },
  { from:'black_club_culture', to:'detroit_scene',       strength:3, type:'lineage' },
  { from:'black_club_culture', to:'warehouse',           strength:3, type:'lineage' },
  { from:'black_club_culture', to:'nyc_scene',           strength:3, type:'lineage' },
  { from:'black_club_culture', to:'paradise_garage',     strength:3, type:'lineage' },

  // Queer Dancefloor
  { from:'queer_dancefloor',   to:'chicago_scene',       strength:3, type:'lineage' },
  { from:'queer_dancefloor',   to:'warehouse',           strength:3, type:'lineage' },
  { from:'queer_dancefloor',   to:'paradise_garage',     strength:3, type:'lineage' },
  { from:'queer_dancefloor',   to:'levan',               strength:3, type:'lineage' },
  { from:'queer_dancefloor',   to:'knuckles',            strength:3, type:'lineage' },
  { from:'black_club_culture', to:'queer_dancefloor',    strength:3, type:'lineage' },

  // Ballroom Culture
  { from:'ballroom',           to:'queer_dancefloor',    strength:3, type:'lineage' },
  { from:'ballroom',           to:'nyc_scene',           strength:3, type:'lineage' },
  { from:'black_club_culture', to:'ballroom',            strength:2, type:'lineage' },

  // Afrofuturism
  { from:'funk',               to:'afrofuturism',        strength:2, type:'lineage' },
  { from:'black_club_culture', to:'afrofuturism',        strength:2, type:'aesthetic' },
  { from:'afrofuturism',       to:'detroit_scene',       strength:3, type:'influence' },
  { from:'afrofuturism',       to:'belleville3',         strength:3, type:'influence' },
  { from:'afrofuturism',       to:'drexciya',            strength:3, type:'lineage' },
  { from:'afrofuturism',       to:'underground_resistance', strength:2, type:'influence' },

  // Italo Disco
  { from:'disco',         to:'italo_disco',    strength:2, type:'lineage' },
  { from:'italo_disco',   to:'chicago_scene',  strength:2, type:'influence' },
  { from:'italo_disco',   to:'electro',        strength:1, type:'aesthetic' },

  // Electro
  { from:'kraftwerk',     to:'electro',        strength:3, type:'lineage' },
  { from:'funk',          to:'electro',        strength:2, type:'lineage' },
  { from:'electro',       to:'detroit_scene',  strength:3, type:'influence' },
  { from:'electro',       to:'drexciya',       strength:3, type:'lineage' },

  // ── CHICAGO ─────────────────────────────────────────────────────────────
  { from:'chicago_scene', to:'trax',           strength:3, type:'lineage' },
  { from:'knuckles',      to:'trax',           strength:3, type:'roster' },
  { from:'heard',         to:'trax',           strength:3, type:'roster' },
  { from:'ron_hardy',     to:'trax',           strength:3, type:'roster' },
  { from:'trax',          to:'acid_house',     strength:2, type:'influence' },
  { from:'chicago_scene', to:'dance_mania',    strength:2, type:'lineage' },
  { from:'trax',          to:'dance_mania',    strength:1, type:'aesthetic' },
  { from:'chicago_scene', to:'smartbar',       strength:2, type:'roster' },
  { from:'knuckles',      to:'smartbar',       strength:2, type:'roster' },
  { from:'chicago_scene', to:'knuckles',       strength:3, type:'roster' },
  { from:'chicago_scene', to:'heard',          strength:3, type:'roster' },
  { from:'chicago_scene', to:'ron_hardy',      strength:3, type:'roster' },
  { from:'warehouse',     to:'knuckles',       strength:3, type:'roster' },
  { from:'musicbox',      to:'ron_hardy',      strength:3, type:'roster' },
  { from:'chicago_scene', to:'acid_house',     strength:2, type:'lineage' },
  { from:'hacienda',      to:'acid_house',     strength:3, type:'roster' },
  { from:'heard',         to:'smallville',     strength:2, type:'influence' },
  { from:'heard',         to:'dial',           strength:2, type:'influence' },

  // Deep House
  { from:'chicago_scene', to:'deep_house',     strength:3, type:'lineage' },
  { from:'heard',         to:'deep_house',     strength:3, type:'lineage' },
  { from:'deep_house',    to:'dial',           strength:2, type:'influence' },
  { from:'deep_house',    to:'smallville',     strength:2, type:'influence' },
  { from:'deep_house',    to:'mule_musiq',     strength:2, type:'influence' },

  // Acid House (Chicago origin)
  { from:'chicago_scene', to:'acid',           strength:3, type:'lineage' },
  { from:'acid',          to:'acid_house',     strength:3, type:'lineage' },
  { from:'acid',          to:'hawtin',         strength:2, type:'influence' },

  // ── NYC ──────────────────────────────────────────────────────────────────
  { from:'nyc_scene',     to:'levan',          strength:3, type:'roster' },
  { from:'paradise_garage',to:'levan',         strength:3, type:'roster' },
  { from:'nyc_scene',     to:'maw',            strength:2, type:'lineage' },
  { from:'maw',           to:'kerri',          strength:2, type:'aesthetic' },
  { from:'maw',           to:'fredeverything', strength:2, type:'influence' },
  { from:'kerri',         to:'fredeverything', strength:2, type:'influence' },
  { from:'kerri',         to:'smallville',     strength:1, type:'influence' },

  // ── DETROIT ──────────────────────────────────────────────────────────────
  { from:'belleville3',   to:'metroplex',      strength:3, type:'lineage' },
  { from:'belleville3',   to:'transmat',       strength:3, type:'lineage' },
  { from:'belleville3',   to:'kms',            strength:3, type:'lineage' },
  { from:'metroplex',     to:'transmat',       strength:3, type:'lineage' },
  { from:'detroit_scene', to:'belleville3',    strength:3, type:'roster' },
  { from:'detroit_scene', to:'metroplex',      strength:3, type:'roster' },
  { from:'detroit_scene', to:'transmat',       strength:3, type:'roster' },
  { from:'detroit_scene', to:'kms',            strength:3, type:'roster' },
  { from:'transmat',      to:'carl_craig',      strength:3, type:'roster' },
  { from:'detroit_scene', to:'carl_craig',      strength:2, type:'influence' },
  { from:'belleville3',   to:'underground_resistance',             strength:2, type:'lineage' },
  { from:'robert_hood',    to:'mplant',         strength:3, type:'lineage' },
  { from:'jeff_mills',     to:'robert_hood',     strength:2, type:'aesthetic' },
  { from:'detroit_scene', to:'deepchord',      strength:2, type:'influence' },
  { from:'detroit_scene', to:'drexciya',       strength:2, type:'influence' },
  { from:'underground_resistance',            to:'drexciya',       strength:2, type:'roster' },
  { from:'tresor_records',to:'drexciya',       strength:2, type:'roster' },
  { from:'clone',         to:'drexciya',       strength:2, type:'roster' },
  { from:'detroit_scene', to:'tresor_club',    strength:3, type:'lineage' },
  { from:'jeff_mills',     to:'tresor_club',    strength:3, type:'roster' },

  // ── CANADA ───────────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'plus8',          strength:3, type:'influence' },
  { from:'plus8',         to:'hawtin',         strength:3, type:'roster' },
  { from:'plus8',         to:'mnuslabel',      strength:3, type:'lineage' },
  { from:'mnuslabel',     to:'hawtin',         strength:3, type:'roster' },
  { from:'tresor_club',   to:'hawtin',         strength:3, type:'roster' },
  { from:'kompakt',       to:'hawtin',         strength:1, type:'aesthetic' },
  { from:'perlon',        to:'hawtin',         strength:1, type:'aesthetic' },
  { from:'underground_resistance',            to:'plus8',          strength:2, type:'aesthetic' },
  { from:'fredeverything',to:'lazydays',       strength:3, type:'lineage' },
  { from:'maw',           to:'lazydays',       strength:1, type:'influence' },

  // ── BERLIN CHAIN ─────────────────────────────────────────────────────────
  { from:'tresor_club',   to:'tresor_records', strength:3, type:'lineage' },
  { from:'hardwax',       to:'basicchannel',   strength:3, type:'roster' },
  { from:'basicchannel',  to:'deepchord',      strength:2, type:'influence' },
  { from:'chain_reaction',to:'deepchord',      strength:2, type:'influence' },
  { from:'tresor_records',to:'berghain',       strength:2, type:'lineage' },
  { from:'ostgut_club',   to:'berghain',       strength:3, type:'lineage' },
  { from:'berghain',      to:'ostgut_ton',     strength:3, type:'lineage' },
  { from:'berghain',      to:'panorama_bar',   strength:3, type:'lineage' },
  { from:'ostgut_ton',    to:'dettmann',       strength:3, type:'roster' },
  { from:'ostgut_ton',    to:'len_faki',        strength:3, type:'roster' },
  { from:'ostgut_ton',    to:'function',       strength:3, type:'roster' },
  { from:'ostgut_ton',    to:'efdemin',        strength:2, type:'roster' },
  { from:'ostgut_ton',    to:'dvs1',           strength:2, type:'roster' },
  { from:'panorama_bar',  to:'innervisions',   strength:2, type:'aesthetic' },
  { from:'berghain',      to:'surgeon',        strength:2, type:'roster' },
  { from:'berghain',      to:'rodhad',         strength:3, type:'roster' },
  { from:'rodhad',        to:'dystopian',      strength:3, type:'lineage' },
  { from:'ostgut_ton',    to:'dystopian',      strength:1, type:'aesthetic' },
  { from:'tresor_records',to:'dystopian',      strength:1, type:'aesthetic' },

  // ── BELGIUM ───────────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'rs_records',     strength:2, type:'influence' },
  { from:'chicago_scene', to:'rs_records',     strength:2, type:'influence' },
  { from:'rs_records',    to:'joey_beltram',   strength:3, type:'roster' },
  { from:'rs_records',    to:'apollo_rec',     strength:3, type:'lineage' },
  { from:'tresor_records',to:'joey_beltram',   strength:2, type:'roster' },
  { from:'apollo_rec',    to:'basicchannel',   strength:1, type:'aesthetic' },
  { from:'token',         to:'charlotte_de_witte',    strength:3, type:'roster' },
  { from:'tresor_records',to:'token',          strength:1, type:'aesthetic' },

  // Minimal House
  { from:'detroit_scene', to:'minimal_house',  strength:2, type:'lineage' },
  { from:'robert_hood',   to:'minimal_house',  strength:3, type:'lineage' },
  { from:'hawtin',        to:'minimal_house',  strength:2, type:'lineage' },
  { from:'minimal_house', to:'kompakt',        strength:2, type:'influence' },
  { from:'minimal_house', to:'perlon',         strength:2, type:'influence' },
  { from:'minimal_house', to:'robertjohnson',  strength:2, type:'influence' },

  // ── COLOGNE / FRANKFURT ──────────────────────────────────────────────────
  { from:'wmvoigt',       to:'kompakt',        strength:3, type:'lineage' },
  { from:'kompakt',       to:'mmayer',         strength:3, type:'roster' },
  { from:'kompakt',       to:'panthaduprince', strength:3, type:'roster' },
  { from:'kompakt',       to:'gas',            strength:3, type:'roster' },
  { from:'robertjohnson', to:'perlon',         strength:3, type:'lineage' },
  { from:'perlon',        to:'villalobos',     strength:3, type:'roster' },
  { from:'perlon',        to:'zip',            strength:3, type:'roster' },
  { from:'perlon',        to:'dial',           strength:2, type:'aesthetic' },
  { from:'kompakt',       to:'efdemin',        strength:1, type:'aesthetic' },

  // ── PLAYHOUSE / ROMAN FLÜGEL ─────────────────────────────────────────────
  { from:'robertjohnson', to:'playhouse',      strength:2, type:'lineage' },
  { from:'playhouse',     to:'villalobos',     strength:3, type:'roster' },
  { from:'playhouse',     to:'roman_flugel',   strength:3, type:'roster' },
  { from:'perlon',        to:'roman_flugel',   strength:2, type:'roster' },
  { from:'dial',          to:'roman_flugel',   strength:3, type:'roster' },
  { from:'robertjohnson', to:'roman_flugel',   strength:2, type:'roster' },
  { from:'roman_flugel',  to:'villalobos',     strength:1, type:'aesthetic' },

  // ── HAMBURG ───────────────────────────────────────────────────────────────
  { from:'dial',          to:'lawrence',       strength:3, type:'roster' },
  { from:'dial',          to:'efdemin',        strength:3, type:'roster' },
  { from:'dial',          to:'lbhonne',        strength:3, type:'roster' },
  { from:'smallville',    to:'lawrence',       strength:3, type:'roster' },
  { from:'smallville',    to:'move_d',         strength:3, type:'roster' },
  { from:'smallville',    to:'traumprinz',     strength:2, type:'roster' },
  { from:'smallville',    to:'lbhonne',        strength:2, type:'roster' },

  // ── INNERVISIONS / MELODIC ───────────────────────────────────────────────
  { from:'innervisions',  to:'dixon',          strength:3, type:'roster' },
  { from:'innervisions',  to:'ame',            strength:3, type:'roster' },
  { from:'afterlife',     to:'taleofus',       strength:3, type:'roster' },
  { from:'innervisions',  to:'afterlife',      strength:1, type:'aesthetic' },

  // ── GIEGLING ──────────────────────────────────────────────────────────────
  { from:'dial',          to:'giegling',       strength:2, type:'aesthetic' },
  { from:'smallville',    to:'giegling',       strength:2, type:'aesthetic' },
  { from:'giegling',      to:'traumprinz',     strength:3, type:'roster' },
  { from:'giegling',      to:'djhealer',       strength:3, type:'roster' },
  { from:'giegling',      to:'leafar',         strength:3, type:'roster' },
  { from:'giegling',      to:'kettenkarussell',strength:3, type:'roster' },
  { from:'giegling',      to:'konstantin',     strength:3, type:'roster' },
  { from:'giegling',      to:'edward',         strength:3, type:'roster' },
  { from:'konstantin',    to:'kettenkarussell',strength:3, type:'collab' },
  { from:'leafar',        to:'kettenkarussell',strength:3, type:'collab' },
  { from:'giegling',      to:'lbhonne',        strength:2, type:'influence' },
  { from:'giegling',      to:'projectindigo',  strength:2, type:'aesthetic' },
  { from:'leafar',        to:'lbhonne',        strength:2, type:'influence' },

  // ── SWISS CLUSTER ─────────────────────────────────────────────────────────
  { from:'projectindigo', to:'lbhonne',        strength:3, type:'roster' },
  { from:'projectindigo', to:'stolar',         strength:3, type:'roster' },
  { from:'projectindigo', to:'benkaczor',      strength:3, type:'roster' },
  { from:'orion',         to:'stolar',         strength:3, type:'roster' },
  { from:'orion',         to:'projectindigo',  strength:2, type:'aesthetic' },
  { from:'lbhonne',       to:'benkaczor',      strength:2, type:'aesthetic' },

  // ── SCANDINAVIA ───────────────────────────────────────────────────────────
  { from:'ambient',        to:'royksopp',        strength:2, type:'influence' },
  { from:'royksopp',       to:'the_knife',       strength:1, type:'aesthetic' },
  { from:'the_knife',      to:'fever_ray',       strength:3, type:'lineage'   },
  { from:'biosphere',      to:'rune_grammofon',  strength:3, type:'roster'    },
  { from:'rune_grammofon', to:'biosphere',       strength:3, type:'roster'    },
  { from:'todd_terje',     to:'prins_thomas',    strength:2, type:'aesthetic' },
  { from:'prins_thomas',   to:'todd_terje',      strength:2, type:'aesthetic' },
  { from:'ambient_techno', to:'royksopp',        strength:1, type:'influence' },
  { from:'orion',          to:'nocturne',        strength:2, type:'aesthetic' },
  { from:'giegling',      to:'nocturne',       strength:1, type:'influence' },
  { from:'innervisions',  to:'studio_barnhus', strength:2, type:'aesthetic' },
  { from:'kompakt',       to:'studio_barnhus', strength:1, type:'aesthetic' },
  { from:'smallville',    to:'studio_barnhus', strength:2, type:'aesthetic' },
  { from:'studio_barnhus',to:'axel_boman',     strength:3, type:'roster' },
  { from:'nocturne',      to:'studio_barnhus', strength:2, type:'aesthetic' },

  // Ambient
  { from:'brian_eno',     to:'ambient',         strength:3, type:'lineage' },
  { from:'ambient',       to:'idm',             strength:2, type:'influence' },
  { from:'ambient',       to:'ambient_techno',  strength:3, type:'lineage' },
  { from:'ambient',       to:'gas',             strength:2, type:'influence' },
  { from:'ambient',       to:'boards_of_canada',strength:2, type:'influence' },
  { from:'ambient',       to:'monolake',        strength:2, type:'influence' },
  { from:'ambient',       to:'biosphere',       strength:2, type:'influence' },

  // Ambient Techno
  { from:'detroit_scene', to:'ambient_techno',  strength:2, type:'influence' },
  { from:'ambient_techno',to:'chain_reaction',  strength:3, type:'lineage' },
  { from:'ambient_techno',to:'biosphere',       strength:3, type:'roster' },
  { from:'ambient_techno',to:'aphex_twin',      strength:2, type:'roster' },
  { from:'ambient_techno',to:'monolake',        strength:2, type:'aesthetic' },
  { from:'idm',           to:'ambient_techno',  strength:2, type:'aesthetic' },

  // Progressive House
  { from:'acid_house',       to:'progressive_house', strength:2, type:'lineage' },
  { from:'chicago_scene',    to:'progressive_house', strength:2, type:'influence' },
  { from:'progressive_house',to:'sasha',             strength:3, type:'roster' },
  { from:'progressive_house',to:'taleofus',          strength:1, type:'influence' },

  // IDM
  { from:'acid_house',    to:'idm',            strength:2, type:'lineage' },
  { from:'detroit_scene', to:'idm',            strength:2, type:'influence' },
  { from:'kraftwerk',     to:'idm',            strength:2, type:'influence' },
  { from:'idm',           to:'warp',           strength:3, type:'lineage' },
  { from:'idm',           to:'aphex_twin',     strength:3, type:'roster' },
  { from:'idm',           to:'autechre',       strength:3, type:'roster' },

  // Tech House
  { from:'chicago_scene', to:'tech_house',     strength:2, type:'influence' },
  { from:'detroit_scene', to:'tech_house',     strength:2, type:'influence' },
  { from:'tech_house',    to:'fabric',         strength:2, type:'roster' },
  { from:'tech_house',    to:'kompakt',        strength:1, type:'aesthetic' },
  { from:'tech_house',    to:'perlon',         strength:1, type:'aesthetic' },

  // ── UK — WARP ────────────────────────────────────────────────────────────
  { from:'acid_house',    to:'warp',           strength:3, type:'lineage' },
  { from:'detroit_scene', to:'warp',           strength:2, type:'influence' },
  { from:'chicago_scene', to:'warp',           strength:1, type:'influence' },
  { from:'warp',          to:'modern_love',    strength:2, type:'aesthetic' },
  { from:'warp',          to:'hessle_audio',   strength:1, type:'aesthetic' },

  // ── UK — FABRIC ───────────────────────────────────────────────────────────
  { from:'acid_house',    to:'fabric',         strength:2, type:'lineage' },
  { from:'tresor_records',to:'fabric',         strength:2, type:'aesthetic' },
  { from:'downwards',     to:'fabric',         strength:1, type:'aesthetic' },

  // ── UK — BIRMINGHAM ───────────────────────────────────────────────────────
  { from:'chicago_scene', to:'downwards',      strength:2, type:'influence' },
  { from:'tresor_records',to:'downwards',      strength:2, type:'aesthetic' },
  { from:'downwards',     to:'surgeon',        strength:3, type:'roster' },
  { from:'downwards',     to:'regis',          strength:3, type:'roster' },
  { from:'surgeon',       to:'regis',          strength:3, type:'aesthetic' },

  // ── UK — GLASGOW ──────────────────────────────────────────────────────────
  { from:'acid_house',    to:'sub_club',       strength:2, type:'lineage' },
  { from:'detroit_scene', to:'sub_club',       strength:2, type:'influence' },
  { from:'sub_club',      to:'soma',           strength:3, type:'lineage' },
  { from:'soma',          to:'slam',           strength:3, type:'roster' },
  { from:'sub_club',      to:'slam',           strength:3, type:'roster' },
  { from:'detroit_scene', to:'slam',           strength:2, type:'influence' },

  // ── UK — MANCHESTER / MODERN LOVE ────────────────────────────────────────
  { from:'basicchannel',  to:'modern_love',    strength:2, type:'influence' },
  { from:'modern_love',   to:'andy_stott',     strength:3, type:'roster' },
  { from:'basicchannel',  to:'andy_stott',     strength:2, type:'influence' },
  { from:'acid_house',    to:'fuse_london',    strength:1, type:'lineage' },
  { from:'levan',         to:'acid_house',     strength:1, type:'influence' },

  // ── NETHERLANDS ───────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'clone',          strength:1, type:'influence' },
  { from:'clone',         to:'delsin',         strength:2, type:'aesthetic' },
  { from:'delsin',        to:'legowelt',       strength:3, type:'roster' },
  { from:'delsin',        to:'i_f',            strength:3, type:'roster' },
  { from:'clone',         to:'rush_hour',      strength:1, type:'aesthetic' },
  { from:'smallville',    to:'rush_hour',      strength:1, type:'aesthetic' },
  { from:'detroit_scene', to:'dekmantel',      strength:3, type:'influence' },
  { from:'clone',         to:'dekmantel',      strength:2, type:'aesthetic' },
  { from:'delsin',        to:'dekmantel',      strength:2, type:'aesthetic' },
  { from:'smallville',    to:'dekmantel',      strength:2, type:'aesthetic' },
  { from:'dekmantel',     to:'trouw',          strength:2, type:'aesthetic' },
  { from:'tresor_club',   to:'trouw',          strength:1, type:'aesthetic' },

  // ── FRANCE ───────────────────────────────────────────────────────────────
  { from:'chicago_scene',  to:'french_touch',   strength:2, type:'influence' },
  { from:'daft_punk',      to:'french_touch',   strength:3, type:'lineage'   },
  { from:'cassius',        to:'french_touch',   strength:3, type:'lineage'   },
  { from:'air',            to:'french_touch',   strength:2, type:'lineage'   },
  { from:'modjo',          to:'french_touch',   strength:2, type:'lineage'   },
  { from:'laurent_garnier',to:'french_touch',   strength:2, type:'influence' },
  { from:'french_touch',   to:'ed_banger',      strength:2, type:'lineage'   },
  { from:'french_touch',   to:'kitsune',        strength:2, type:'lineage'   },
  { from:'busy_p',         to:'ed_banger',      strength:3, type:'lineage'   },
  { from:'busy_p',         to:'daft_punk',      strength:3, type:'roster'    },
  { from:'justice',        to:'ed_banger',      strength:3, type:'roster'    },
  { from:'ed_banger',      to:'justice',        strength:3, type:'roster'    },
  { from:'chicago_scene',  to:'versatile',      strength:1, type:'influence' },
  { from:'versatile',      to:'correspondant',  strength:1, type:'aesthetic' },
  { from:'kompakt',        to:'pdj',            strength:1, type:'aesthetic' },

  // ── JAPAN ────────────────────────────────────────────────────────────────
  { from:'smallville',    to:'mule_musiq',     strength:2, type:'aesthetic' },
  { from:'dial',          to:'mule_musiq',     strength:1, type:'aesthetic' },
  { from:'mule_musiq',    to:'fina',           strength:2, type:'aesthetic' },
  { from:'kompakt',       to:'mule_musiq',     strength:1, type:'influence' },

  // ── SOUTH AFRICA ─────────────────────────────────────────────────────────
  // Founding lineage
  { from:'chicago_scene',    to:'house_afrika',     strength:2, type:'influence' },
  { from:'heard',            to:'house_afrika',     strength:2, type:'influence' },
  { from:'vinny_da_vinci',   to:'house_afrika',     strength:3, type:'lineage' },
  { from:'house_afrika',     to:'vinny_da_vinci',   strength:3, type:'roster' },
  { from:'house_afrika',     to:'dj_christos',      strength:3, type:'roster' },
  { from:'house_afrika',     to:'soul_candi',       strength:2, type:'influence' },
  { from:'house_afrika',     to:'blackcoffee',      strength:2, type:'influence' },
  { from:'dj_christos',      to:'soul_candi',       strength:2, type:'influence' },
  { from:'soul_candi',       to:'spring_fiesta',    strength:3, type:'lineage' },
  { from:'soul_candi',       to:'blackcoffee',      strength:2, type:'roster' },
  // Black Coffee / Soulistic
  { from:'blackcoffee',      to:'soulistic_music',  strength:3, type:'lineage' },
  { from:'soulistic_music',  to:'culoe_de_song',    strength:3, type:'roster' },
  { from:'soulistic_music',  to:'black_motion',     strength:2, type:'influence' },
  { from:'blackcoffee',      to:'culoe_de_song',    strength:2, type:'influence' },
  { from:'blackcoffee',      to:'black_motion',     strength:2, type:'influence' },
  // International connections
  { from:'maw',              to:'afro_deep',        strength:1, type:'influence' },
  { from:'afro_deep',        to:'blackcoffee',      strength:2, type:'influence' },
  // Cape Town
  { from:'soul_candi',       to:'stay_true_sounds', strength:2, type:'influence' },
  { from:'blackcoffee',      to:'stay_true_sounds', strength:1, type:'influence' },
  // Gqom
  { from:'house_afrika',     to:'dj_lag',           strength:1, type:'influence' },
  { from:'blackcoffee',      to:'dj_lag',           strength:1, type:'influence' },

  // ── LATIN AMERICA ─────────────────────────────────────────────────────────
  { from:'tresor_records',to:'brazil_scene',   strength:1, type:'influence' },

  // ── EASTERN EUROPE ────────────────────────────────────────────────────────
  { from:'berghain',      to:'gost_zvuk',      strength:1, type:'influence' },
  { from:'tresor_records',to:'pdj_warsaw',     strength:1, type:'influence' },

  // ── AMBIENT ──────────────────────────────────────────────────────────────
  { from:'deepchord',     to:'oleeva',         strength:1, type:'influence' },
  { from:'panthaduprince',to:'oleeva',         strength:1, type:'aesthetic' },
  { from:'gas',           to:'oleeva',         strength:1, type:'aesthetic' },

  // ── INSTRUMENTS & MANUFACTURERS ──────────────────────────────────────────
  { from:'roland',        to:'tr808',          strength:3, type:'lineage' },
  { from:'roland',        to:'tr909',          strength:3, type:'lineage' },
  { from:'roland',        to:'tb303',          strength:3, type:'lineage' },
  { from:'roland',        to:'sh101',          strength:3, type:'lineage' },
  { from:'tr808',         to:'chicago_scene',  strength:3, type:'influence' },
  { from:'tr808',         to:'detroit_scene',  strength:3, type:'influence' },
  { from:'tr909',         to:'detroit_scene',  strength:3, type:'influence' },
  { from:'tr909',         to:'chicago_scene',  strength:2, type:'influence' },
  { from:'tb303',         to:'chicago_scene',  strength:3, type:'influence' },
  { from:'tb303',         to:'acid_house',     strength:3, type:'influence' },
  { from:'sh101',         to:'detroit_scene',  strength:2, type:'influence' },
  { from:'sh101',         to:'chicago_scene',  strength:2, type:'influence' },
  { from:'monolake',      to:'ableton',        strength:3, type:'lineage' },
  { from:'ableton',       to:'hawtin',         strength:3, type:'influence' },
  { from:'ableton',       to:'four_tet',       strength:1, type:'influence' },
  { from:'elektron',      to:'skee_mask',      strength:2, type:'influence' },
  { from:'elektron',      to:'four_tet',       strength:1, type:'influence' },

  // ── UK — BOARDS OF CANADA / FOUR TET ────────────────────────────────────
  { from:'warp',          to:'boards_of_canada', strength:3, type:'roster' },
  { from:'boards_of_canada',to:'four_tet',     strength:2, type:'influence' },
  { from:'four_tet',      to:'floating_points', strength:2, type:'influence' },
  { from:'hessle_audio',  to:'djrum',          strength:3, type:'roster' },
  { from:'hessle_audio',  to:'blawan',         strength:3, type:'roster' },
  { from:'djrum',         to:'blawan',         strength:2, type:'aesthetic' },
  { from:'downwards',     to:'blawan',         strength:1, type:'influence' },
  { from:'modern_love',   to:'blawan',         strength:1, type:'aesthetic' },

  // ── UK — WEATHERALL / ACTRESS ────────────────────────────────────────────
  { from:'acid_house',    to:'weatherall',     strength:3, type:'lineage' },
  { from:'warp',          to:'weatherall',     strength:2, type:'roster' },
  { from:'basicchannel',  to:'actress',        strength:2, type:'influence' },
  { from:'warp',          to:'actress',        strength:1, type:'aesthetic' },
  { from:'modern_love',   to:'actress',        strength:2, type:'aesthetic' },

  // ── UK — GARAGE / GRIME / DUBSTEP ────────────────────────────────────────
  { from:'acid_house',      to:'uk_garage',       strength:2, type:'lineage'   },
  { from:'uk_garage',       to:'2step',           strength:3, type:'lineage'   },
  { from:'uk_garage',       to:'grime',           strength:3, type:'lineage'   },
  { from:'2step',           to:'dubstep',         strength:3, type:'lineage'   },
  { from:'rinse_fm',        to:'grime',           strength:3, type:'lineage'   },
  { from:'rinse_fm',        to:'dubstep',         strength:2, type:'influence' },
  { from:'wiley',           to:'grime',           strength:3, type:'lineage'   },
  { from:'grime',           to:'wiley',           strength:2, type:'roster'    },
  { from:'digital_mystikz', to:'dubstep',         strength:3, type:'lineage'   },
  { from:'digital_mystikz', to:'dmz',             strength:3, type:'lineage'   },
  { from:'dmz',             to:'skream',          strength:2, type:'roster'    },
  { from:'skream',          to:'dubstep',         strength:3, type:'lineage'   },
  { from:'dubstep',         to:'burial',          strength:3, type:'influence' },
  { from:'uk_garage',       to:'burial',          strength:2, type:'influence' },

  // ── UK — LEON VYNEHALL / LONE / SASHA ────────────────────────────────────
  { from:'chicago_scene', to:'leon_vynehall',  strength:2, type:'influence' },
  { from:'smallville',    to:'leon_vynehall',  strength:2, type:'influence' },
  { from:'acid_house',    to:'sasha',          strength:3, type:'lineage' },
  { from:'hacienda',      to:'sasha',          strength:3, type:'roster' },
  { from:'warp',          to:'lone',           strength:1, type:'aesthetic' },
  { from:'rs_records',    to:'lone',           strength:2, type:'roster' },

  // ── SANDWELL DISTRICT ─────────────────────────────────────────────────────
  { from:'downwards',     to:'sandwell_district', strength:3, type:'lineage' },
  { from:'basicchannel',  to:'sandwell_district', strength:2, type:'influence' },
  { from:'function',      to:'sandwell_district', strength:3, type:'lineage' },
  { from:'regis',         to:'sandwell_district', strength:3, type:'roster' },
  { from:'ostgut_ton',    to:'sandwell_district', strength:1, type:'aesthetic' },

  // ── US — MIKE PARKER ─────────────────────────────────────────────────────
  { from:'detroit_scene', to:'mike_parker',    strength:2, type:'influence' },
  { from:'basicchannel',  to:'mike_parker',    strength:2, type:'influence' },
  { from:'kompakt',       to:'mike_parker',    strength:1, type:'aesthetic' },

  // ── FLOATING POINTS / MATTHEW JONSON ─────────────────────────────────────
  { from:'kompakt',       to:'matthew_jonson', strength:2, type:'influence' },
  { from:'perlon',        to:'matthew_jonson', strength:1, type:'aesthetic' },

  // ── KIASMOS / DJ SPRINKLES ────────────────────────────────────────────────
  // ── L.I.E.S. RECORDS ─────────────────────────────────────────────────────
  { from:'nyc_scene',     to:'lies_records',   strength:2, type:'influence' },
  { from:'chicago_scene', to:'lies_records',   strength:2, type:'influence' },
  { from:'lies_records',  to:'djsprinkles',    strength:2, type:'influence' },
  { from:'lies_records',  to:'livity_sound',   strength:1, type:'influence' },

  { from:'chicago_scene', to:'djsprinkles',    strength:3, type:'lineage' },
  { from:'nyc_scene',     to:'djsprinkles',    strength:3, type:'lineage' },
  { from:'gas',           to:'kiasmos',        strength:2, type:'influence' },
  { from:'basicchannel',  to:'kiasmos',        strength:1, type:'aesthetic' },

  // ── SKEE MASK / THE FIELD / MINILOGUE ─────────────────────────────────────
  { from:'basicchannel',  to:'skee_mask',      strength:2, type:'influence' },
  { from:'detroit_scene', to:'skee_mask',      strength:2, type:'influence' },
  { from:'kompakt',       to:'the_field',      strength:3, type:'roster' },
  { from:'basicchannel',  to:'the_field',      strength:2, type:'influence' },
  { from:'kompakt',       to:'minilogue',      strength:1, type:'aesthetic' },
  { from:'perlon',        to:'minilogue',      strength:1, type:'aesthetic' },
  { from:'cocoon',        to:'minilogue',      strength:3, type:'roster' },
  { from:'minilogue',     to:'sebastian_mullaert', strength:3, type:'lineage' },
  { from:'mule_musiq',    to:'sebastian_mullaert', strength:2, type:'roster' },

  // ── HAMBURG — CARSTEN JOST ────────────────────────────────────────────────
  { from:'dial',          to:'carsten_jost',   strength:3, type:'roster' },
  { from:'perlon',        to:'carsten_jost',   strength:1, type:'aesthetic' },

  // ── GIEGLING — DWIG ───────────────────────────────────────────────────────
  { from:'giegling',      to:'dwig',           strength:3, type:'roster' },

  // ── NORTHERN ELECTRONICS ──────────────────────────────────────────────────
  { from:'basicchannel',  to:'northern_electronics', strength:2, type:'influence' },
  { from:'tresor_records',to:'northern_electronics', strength:2, type:'influence' },
  { from:'northern_electronics',to:'northern_electronics_artists', strength:3, type:'roster' },

  // ── VANCOUVER ─────────────────────────────────────────────────────────────
  { from:'chicago_scene', to:'mood_hut',       strength:2, type:'influence' },
  { from:'nyc_scene',     to:'mood_hut',       strength:2, type:'influence' },
  { from:'smallville',    to:'mood_hut',       strength:2, type:'aesthetic' },
  { from:'mood_hut',      to:'pender_street_steppers', strength:3, type:'roster' },
  { from:'mood_hut',      to:'jack_j',         strength:3, type:'roster' },
  { from:'pender_street_steppers',to:'jack_j', strength:3, type:'aesthetic' },

  // ── ROTTERDAM ─────────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'perron',         strength:2, type:'influence' },
  { from:'clone',         to:'nousklaer',      strength:2, type:'aesthetic' },
  { from:'rush_hour',     to:'nousklaer',      strength:1, type:'aesthetic' },
  { from:'perron',        to:'clone',          strength:2, type:'aesthetic' },

  // ── EVENTS ────────────────────────────────────────────────────────────────
  { from:'tresor_club',   to:'love_parade',    strength:3, type:'lineage' },
  { from:'detroit_scene', to:'love_parade',    strength:3, type:'influence' },
  { from:'berghain',      to:'love_parade',    strength:2, type:'lineage' },
  { from:'berghain',      to:'boiler_room',    strength:2, type:'roster' },
  { from:'fabric',        to:'boiler_room',    strength:2, type:'roster' },
  { from:'trouw',         to:'de_school',      strength:3, type:'lineage' },
  { from:'dekmantel',     to:'de_school',      strength:2, type:'aesthetic' },

  // ── KANN RECORDS ──────────────────────────────────────────────────────────
  { from:'kompakt',       to:'kann_records',   strength:2, type:'influence' },
  { from:'dial',          to:'kann_records',   strength:1, type:'aesthetic' },

  // ── CHAIN REACTION ────────────────────────────────────────────────────────
  { from:'basicchannel',  to:'chain_reaction', strength:3, type:'lineage' },
  { from:'chain_reaction',to:'monolake',       strength:3, type:'roster' },
  { from:'chain_reaction',to:'fluxion',        strength:3, type:'roster' },
  { from:'basicchannel',  to:'fluxion',        strength:2, type:'influence' },

  // ── CLAUDIO PRC ───────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'claudio_prc',    strength:2, type:'influence' },
  { from:'basicchannel',  to:'claudio_prc',    strength:2, type:'influence' },
  { from:'sandwell_district',to:'claudio_prc', strength:1, type:'aesthetic' },

  // ── MOVE D ────────────────────────────────────────────────────────────────
  { from:'chicago_scene', to:'move_d',         strength:2, type:'influence' },
  { from:'dial',          to:'move_d',         strength:1, type:'aesthetic' },

  // ── SEWER SENDER ─────────────────────────────────────────────────────────
  { from:'dial',          to:'sewer_sender',   strength:1, type:'aesthetic' },
  { from:'northern_electronics',to:'sewer_sender', strength:1, type:'aesthetic' },

  // ── HELP RECORDINGS / AARHUS ─────────────────────────────────────────────
  { from:'dj_central',    to:'help_recordings', strength:3, type:'lineage' },
  { from:'dj_sports',     to:'help_recordings', strength:3, type:'lineage' },
  { from:'dj_central',    to:'dj_sports',       strength:3, type:'aesthetic' },
  { from:'dekmantel',     to:'dj_central',      strength:2, type:'roster' },
  { from:'chicago_scene', to:'dj_central',      strength:2, type:'influence' },
  { from:'dial',          to:'dj_central',      strength:2, type:'influence' },
  { from:'chicago_scene', to:'dj_sports',       strength:2, type:'influence' },
  { from:'clone',         to:'help_recordings', strength:1, type:'aesthetic' },

  // ── LOST IN A MOMENT ──────────────────────────────────────────────────────
  { from:'innervisions',  to:'lost_in_a_moment', strength:3, type:'lineage' },
  { from:'ame',           to:'lost_in_a_moment', strength:3, type:'lineage' },
  { from:'dixon',         to:'lost_in_a_moment', strength:3, type:'lineage' },
  { from:'trouw',         to:'lost_in_a_moment', strength:2, type:'aesthetic' },

  // ── FRANÇOIS K ───────────────────────────────────────────────────────────
  { from:'paradise_garage',to:'francois_k',      strength:3, type:'roster' },
  { from:'nyc_scene',     to:'francois_k',       strength:3, type:'roster' },
  { from:'chicago_scene', to:'francois_k',       strength:2, type:'influence' },
  { from:'francois_k',    to:'maw',              strength:2, type:'influence' },

  // ── KUNIYUKI ─────────────────────────────────────────────────────────────
  { from:'mule_musiq',    to:'kuniyuki',         strength:3, type:'roster' },
  { from:'chicago_scene', to:'kuniyuki',         strength:2, type:'influence' },
  { from:'move_d',        to:'kuniyuki',         strength:2, type:'influence' },

  // ── DJ TENNIS ────────────────────────────────────────────────────────────
  { from:'innervisions',  to:'dj_tennis',        strength:2, type:'influence' },
  { from:'afterlife',     to:'dj_tennis',        strength:2, type:'influence' },
  { from:'chicago_scene', to:'dj_tennis',        strength:2, type:'influence' },

  // ── MACEO PLEX ────────────────────────────────────────────────────────────
  { from:'afterlife',     to:'maceo_plex',       strength:2, type:'roster' },
  { from:'taleofus',      to:'maceo_plex',       strength:2, type:'aesthetic' },
  { from:'detroit_scene', to:'maceo_plex',       strength:2, type:'influence' },

  // ── MIND AGAINST ─────────────────────────────────────────────────────────
  { from:'afterlife',     to:'mind_against',     strength:3, type:'roster' },
  { from:'taleofus',      to:'mind_against',     strength:2, type:'aesthetic' },
  { from:'dj_tennis',     to:'mind_against',     strength:2, type:'aesthetic' },

  // ── HATE ─────────────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'hate',             strength:2, type:'influence' },
  { from:'tresor_records',to:'hate',             strength:2, type:'influence' },
  { from:'sandwell_district',to:'hate',          strength:1, type:'aesthetic' },

  // ── MARTINOU ─────────────────────────────────────────────────────────────
  { from:'sewer_sender',  to:'martinou',         strength:3, type:'roster' },
  { from:'dial',          to:'martinou',         strength:1, type:'aesthetic' },

  // ── VRIL ──────────────────────────────────────────────────────────────────
  { from:'delsin',        to:'vril',             strength:3, type:'roster' },
  { from:'tresor_records',to:'vril',             strength:2, type:'roster' },
  { from:'basicchannel',  to:'vril',             strength:2, type:'influence' },
  { from:'detroit_scene', to:'vril',             strength:2, type:'influence' },

  // ── DJ KOZE ───────────────────────────────────────────────────────────────
  { from:'golden_pudel',  to:'dj_koze',          strength:3, type:'roster' },
  { from:'kompakt',       to:'dj_koze',          strength:2, type:'aesthetic' },
  { from:'dial',          to:'dj_koze',          strength:1, type:'aesthetic' },

  // ── BONOBO ────────────────────────────────────────────────────────────────
  { from:'four_tet',      to:'bonobo',           strength:2, type:'aesthetic' },
  { from:'floating_points',to:'bonobo',          strength:2, type:'aesthetic' },
  { from:'boards_of_canada',to:'bonobo',         strength:2, type:'influence' },
  { from:'chicago_scene', to:'bonobo',           strength:1, type:'influence' },

  // ── BURIAL ────────────────────────────────────────────────────────────────
  { from:'four_tet',      to:'burial',           strength:3, type:'aesthetic' },
  { from:'basicchannel',  to:'burial',           strength:2, type:'influence' },
  { from:'boards_of_canada',to:'burial',         strength:2, type:'influence' },
  { from:'acid_house',    to:'burial',           strength:2, type:'influence' },

  // ── CORSICA STUDIOS ───────────────────────────────────────────────────────
  { from:'fabric',        to:'corsica_studios',  strength:2, type:'aesthetic' },
  { from:'hessle_audio',  to:'corsica_studios',  strength:3, type:'roster' },
  { from:'blawan',        to:'corsica_studios',  strength:2, type:'roster' },
  { from:'sandwell_district',to:'corsica_studios',strength:1, type:'influence' },

  // ── IBIZA ─────────────────────────────────────────────────────────────────
  { from:'acid_house',    to:'ibiza',            strength:3, type:'lineage' },
  { from:'hacienda',      to:'ibiza',            strength:2, type:'influence' },
  { from:'maceo_plex',    to:'ibiza',            strength:3, type:'roster' },
  { from:'blackcoffee',   to:'ibiza',            strength:2, type:'roster' },

  // ── GOLDEN PUDEL ─────────────────────────────────────────────────────────
  { from:'golden_pudel',  to:'helena_hauff',     strength:3, type:'roster' },
  { from:'dial',          to:'golden_pudel',     strength:1, type:'aesthetic' },
  { from:'smallville',    to:'golden_pudel',     strength:1, type:'aesthetic' },

  // ── HELENA HAUFF ─────────────────────────────────────────────────────────
  { from:'actress',       to:'helena_hauff',     strength:3, type:'influence' },
  { from:'detroit_scene', to:'helena_hauff',     strength:2, type:'influence' },
  { from:'sandwell_district',to:'helena_hauff',  strength:2, type:'aesthetic' },
  { from:'blawan',        to:'helena_hauff',     strength:1, type:'aesthetic' },

  // ── BRIAN ENO ─────────────────────────────────────────────────────────────
  { from:'kraftwerk',     to:'brian_eno',        strength:1, type:'aesthetic' },
  { from:'brian_eno',     to:'biosphere',        strength:3, type:'influence' },
  { from:'brian_eno',     to:'aphex_twin',       strength:3, type:'influence' },
  { from:'brian_eno',     to:'boards_of_canada', strength:2, type:'influence' },
  { from:'brian_eno',     to:'gas',              strength:2, type:'influence' },
  { from:'brian_eno',     to:'burial',           strength:2, type:'influence' },

  // ── APHEX TWIN ────────────────────────────────────────────────────────────
  { from:'rs_records',    to:'aphex_twin',       strength:3, type:'roster' },
  { from:'warp',          to:'aphex_twin',       strength:3, type:'roster' },
  { from:'aphex_twin',    to:'autechre',         strength:2, type:'aesthetic' },
  { from:'aphex_twin',    to:'boards_of_canada', strength:2, type:'influence' },
  { from:'aphex_twin',    to:'burial',           strength:2, type:'influence' },
  { from:'aphex_twin',    to:'four_tet',         strength:2, type:'influence' },

  // ── AUTECHRE ──────────────────────────────────────────────────────────────
  { from:'warp',          to:'autechre',         strength:3, type:'roster' },
  { from:'detroit_scene', to:'autechre',         strength:2, type:'influence' },

  // ── RASTER-NOTON / ALVA NOTO ──────────────────────────────────────────────
  { from:'basicchannel',  to:'raster_noton',     strength:2, type:'influence' },
  { from:'raster_noton',  to:'alva_noto',        strength:3, type:'roster' },
  { from:'raster_noton',  to:'vladislav_delay',  strength:2, type:'roster' },
  { from:'pan_sonic',     to:'alva_noto',        strength:2, type:'aesthetic' },

  // ── MOODYMANN ─────────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'moodymann',        strength:3, type:'roster' },
  { from:'disco',         to:'moodymann',        strength:2, type:'influence' },
  { from:'heard',         to:'moodymann',        strength:2, type:'influence' },

  // ── BIOSPHERE ─────────────────────────────────────────────────────────────
  { from:'apollo_rec',    to:'biosphere',        strength:3, type:'roster' },
  { from:'basicchannel',  to:'biosphere',        strength:2, type:'influence' },

  // ── PAN SONIC ─────────────────────────────────────────────────────────────
  { from:'pan_sonic',     to:'vladislav_delay',  strength:2, type:'aesthetic' },
  { from:'pan_sonic',     to:'puce_mary',        strength:2, type:'influence' },

  // ── VLADISLAV DELAY ───────────────────────────────────────────────────────
  { from:'chain_reaction',to:'vladislav_delay',  strength:3, type:'roster' },

  // ── TODD TERJE ────────────────────────────────────────────────────────────
  { from:'disco',         to:'todd_terje',       strength:3, type:'influence' },

  // ── POSH ISOLATION / PUCE MARY ────────────────────────────────────────────
  { from:'northern_electronics',to:'posh_isolation', strength:2, type:'aesthetic' },
  { from:'posh_isolation',to:'puce_mary',        strength:3, type:'roster' },
  { from:'sandwell_district',to:'puce_mary',     strength:1, type:'aesthetic' },
  { from:'andy_stott',    to:'puce_mary',        strength:1, type:'aesthetic' },

  // ── KORNÉL KOVÁCS ─────────────────────────────────────────────────────────
  { from:'studio_barnhus',to:'kornel_kovacs',    strength:3, type:'roster' },
  { from:'axel_boman',    to:'kornel_kovacs',    strength:3, type:'aesthetic' },

  // ── ROBAG WRUHME ──────────────────────────────────────────────────────────
  { from:'kompakt',       to:'robag_wruhme',     strength:3, type:'roster' },
  { from:'smallville',    to:'robag_wruhme',     strength:2, type:'roster' },
  { from:'giegling',      to:'robag_wruhme',     strength:1, type:'aesthetic' },
  { from:'dj_koze',       to:'robag_wruhme',     strength:2, type:'aesthetic' },

  // ── LENA WILLIKENS / SALON DES AMATEURS ──────────────────────────────────
  { from:'salon_des_amateurs',to:'lena_willikens', strength:3, type:'roster' },
  { from:'cómeme',        to:'lena_willikens',   strength:3, type:'roster' },
  { from:'kraftwerk',     to:'salon_des_amateurs', strength:1, type:'aesthetic' },

  // ── INTERSTELLAR FUNK ─────────────────────────────────────────────────────
  { from:'clone',         to:'interstellar_funk', strength:3, type:'roster' },
  { from:'dekmantel',     to:'interstellar_funk', strength:3, type:'roster' },

  // ── REGAL ─────────────────────────────────────────────────────────────────
  { from:'hate',          to:'regal',            strength:2, type:'aesthetic' },
  { from:'detroit_scene', to:'regal',            strength:2, type:'influence' },

  // ── DAFT PUNK / FRENCH TOUCH ──────────────────────────────────────────────
  { from:'disco',         to:'daft_punk',        strength:3, type:'influence' },
  { from:'funk',          to:'daft_punk',        strength:2, type:'influence' },
  { from:'chicago_scene', to:'daft_punk',        strength:2, type:'influence' },
  { from:'etienne_de_crecy',to:'daft_punk',      strength:2, type:'aesthetic' },
  { from:'daft_punk',     to:'ed_banger',        strength:3, type:'lineage' },

  // ── ÉTIENNE DE CRÉCY ──────────────────────────────────────────────────────
  { from:'disco',         to:'etienne_de_crecy', strength:3, type:'influence' },
  { from:'chicago_scene', to:'etienne_de_crecy', strength:2, type:'influence' },

  // ── LATIN ROOTS ───────────────────────────────────────────────────────────
  { from:'cumbia',        to:'bomba_estereo',    strength:3, type:'lineage' },
  { from:'cumbia',        to:'systema_solar',    strength:3, type:'lineage' },
  { from:'cumbia',        to:'dengue_dengue_dengue', strength:3, type:'lineage' },
  { from:'cumbia',        to:'zzk_records',      strength:3, type:'lineage' },
  { from:'cumbia',        to:'nortec_collective', strength:2, type:'influence' },
  { from:'tropicalia',    to:'suba',             strength:2, type:'influence' },
  { from:'tropicalia',    to:'brazil_scene',     strength:1, type:'influence' },

  // ── BRAZIL ───────────────────────────────────────────────────────────────
  { from:'funk_carioca',  to:'dj_marlboro',      strength:3, type:'lineage' },
  { from:'funk_carioca',  to:'brazil_scene',     strength:1, type:'influence' },
  { from:'funk_carioca',  to:'gop_tun',          strength:2, type:'influence' },
  { from:'brazil_scene',  to:'d_edge',           strength:3, type:'roster' },
  { from:'tresor_records',to:'d_edge',           strength:2, type:'influence' },
  { from:'d_edge',        to:'brazil_scene',     strength:2, type:'lineage' },
  { from:'d_edge',        to:'gop_tun',          strength:1, type:'aesthetic' },
  { from:'suba',          to:'brazil_scene',     strength:1, type:'influence' },

  // ── ARGENTINA ─────────────────────────────────────────────────────────────
  { from:'cumbia',        to:'aguayo',           strength:2, type:'influence' },
  { from:'kompakt',       to:'aguayo',           strength:2, type:'roster' },
  { from:'aguayo',        to:'cómeme',           strength:3, type:'lineage' },
  { from:'aguayo',        to:'rebolledo',        strength:3, type:'aesthetic' },
  { from:'rebolledo',     to:'pachanga_boys',    strength:3, type:'collab'    },
  { from:'kompakt',       to:'pachanga_boys',    strength:2, type:'roster'    },
  { from:'cómeme',        to:'zzk_records',      strength:2, type:'aesthetic' },

  // ── COLOMBIA ─────────────────────────────────────────────────────────────
  { from:'zzk_records',   to:'bomba_estereo',    strength:2, type:'aesthetic' },
  { from:'zzk_records',   to:'systema_solar',    strength:2, type:'aesthetic' },

  // ── PERU ─────────────────────────────────────────────────────────────────
  { from:'zzk_records',   to:'dengue_dengue_dengue', strength:3, type:'roster' },

  // ── MEXICO ───────────────────────────────────────────────────────────────
  { from:'detroit_scene', to:'nortec_collective', strength:1, type:'influence' },
  { from:'cómeme',        to:'rebolledo',        strength:3, type:'roster' },
  { from:'cómeme',        to:'mis',              strength:1, type:'aesthetic' },

  // ── SWITZERLAND / LUCIANO ─────────────────────────────────────────────────
  { from:'cadenza',       to:'luciano',          strength:3, type:'roster' },
  { from:'cadenza',       to:'aguayo',           strength:2, type:'aesthetic' },
  { from:'luciano',       to:'cadenza',          strength:3, type:'lineage' },
  { from:'basicchannel',  to:'luciano',          strength:1, type:'influence' },
  { from:'ibiza',         to:'luciano',          strength:2, type:'roster' },

  // ── DATALINE ──────────────────────────────────────────────────────────────
  { from:'elektron',      to:'dataline',         strength:3, type:'aesthetic' },
  { from:'basicchannel',  to:'dataline',         strength:2, type:'influence' },
  { from:'ableton',       to:'dataline',         strength:2, type:'aesthetic' },

  // ── JAPAN – PIONEERS ─────────────────────────────────────────────────────
  // Isao Tomita influenced the entire Japanese synthesizer tradition
  { from:'isao_tomita',       to:'ymo',                strength:2, type:'influence' },
  { from:'isao_tomita',       to:'hiroshi_yoshimura',  strength:2, type:'influence' },
  // Brian Eno's Ambient series directly catalysed kankyō ongaku
  { from:'brian_eno',         to:'hiroshi_yoshimura',  strength:3, type:'influence' },
  { from:'brian_eno',         to:'haruomi_hosono',     strength:2, type:'influence' },
  { from:'brian_eno',         to:'ryuichi_sakamoto',   strength:2, type:'influence' },
  // YMO founding members
  { from:'haruomi_hosono',    to:'ymo',                strength:3, type:'lineage' },
  { from:'ryuichi_sakamoto',  to:'ymo',                strength:3, type:'lineage' },
  // Kraftwerk → YMO: shared machine-music philosophy
  { from:'kraftwerk',         to:'ymo',                strength:2, type:'influence' },
  // YMO's downstream influence
  { from:'ymo',               to:'detroit_scene',      strength:2, type:'influence' },
  { from:'ymo',               to:'ken_ishii',          strength:2, type:'influence' },
  { from:'ymo',               to:'fumiya_tanaka',      strength:2, type:'influence' },
  { from:'ymo',               to:'soichi_terada',      strength:1, type:'influence' },
  // Raster-Noton ↔ Sakamoto: documented collaboration with Alva Noto
  { from:'raster_noton',      to:'ryuichi_sakamoto',   strength:3, type:'roster' },

  // ── JAPAN – CLUB ERA ─────────────────────────────────────────────────────
  // Detroit techno → Japanese techno: direct documented influence
  { from:'detroit_scene',     to:'ken_ishii',          strength:3, type:'influence' },
  { from:'detroit_scene',     to:'space_lab_yellow',   strength:3, type:'influence' },
  { from:'detroit_scene',     to:'fumiya_tanaka',      strength:2, type:'influence' },
  // Far East Recording
  { from:'soichi_terada',     to:'far_east_recording', strength:3, type:'lineage' },
  { from:'shinichiro_yokota', to:'far_east_recording', strength:3, type:'lineage' },
  { from:'far_east_recording',to:'soichi_terada',      strength:3, type:'roster' },
  { from:'far_east_recording',to:'shinichiro_yokota',  strength:3, type:'roster' },
  // Deep house lineage into Terada / Yokota
  { from:'heard',             to:'soichi_terada',      strength:2, type:'influence' },
  // Sublime Records roster
  { from:'sublime_records_jp',to:'ken_ishii',          strength:3, type:'roster' },
  { from:'sublime_records_jp',to:'susumu_yokota',      strength:3, type:'roster' },
  { from:'sublime_records_jp',to:'rei_harakami',       strength:3, type:'roster' },
  // Tresor + Perlon connections
  { from:'tresor_records',    to:'fumiya_tanaka',      strength:3, type:'roster' },
  { from:'perlon',            to:'fumiya_tanaka',      strength:3, type:'roster' },
  { from:'villalobos',        to:'fumiya_tanaka',      strength:2, type:'aesthetic' },
  // Space Lab Yellow → Womb: Yellow was the template Womb inherited
  { from:'space_lab_yellow',  to:'womb_tokyo',         strength:2, type:'lineage' },
  { from:'fumiya_tanaka',     to:'womb_tokyo',         strength:3, type:'roster' },
  { from:'ken_ishii',         to:'womb_tokyo',         strength:2, type:'roster' },
  // Aphex Twin stylistically compared to Rei Harakami in press
  { from:'aphex_twin',        to:'rei_harakami',       strength:1, type:'aesthetic' },

  // ── AUSTRALIA ────────────────────────────────────────────────────────────
  { from:'modular_recordings',to:'the_avalanches',     strength:3, type:'roster' },
  { from:'modular_recordings',to:'cut_copy',           strength:3, type:'roster' },
  { from:'the_avalanches',    to:'modular_recordings', strength:3, type:'lineage' },
  { from:'future_classic',    to:'modular_recordings', strength:1, type:'aesthetic' },

  // ── SOUTH KOREA ──────────────────────────────────────────────────────────
  { from:'cakeshop',          to:'peggy_gou',          strength:2, type:'roster' },
  { from:'perlon',            to:'peggy_gou',          strength:1, type:'aesthetic' },
  { from:'ibiza',             to:'peggy_gou',          strength:2, type:'roster' },

  // ── WISDOM TEETH / FACTA / K-LONE ────────────────────────────────────────
  // Post-dubstep roots: same territory as Skull Disco and Livity Sound
  { from:'skull_disco',       to:'wisdom_teeth',       strength:1, type:'aesthetic' },
  { from:'livity_sound',      to:'wisdom_teeth',       strength:2, type:'aesthetic' },
  // Founding
  { from:'facta',             to:'wisdom_teeth',       strength:3, type:'lineage' },
  { from:'k_lone',            to:'wisdom_teeth',       strength:3, type:'lineage' },
  { from:'wisdom_teeth',      to:'facta',              strength:3, type:'roster' },
  { from:'wisdom_teeth',      to:'k_lone',             strength:3, type:'roster' },
  // Rinse FM as platform
  { from:'hessle_audio',      to:'wisdom_teeth',       strength:1, type:'aesthetic' },

  // ── CALL SUPER ───────────────────────────────────────────────────────────
  { from:'hessle_audio',      to:'call_super',         strength:3, type:'roster' },
  { from:'call_super',        to:'objekt',             strength:2, type:'influence' },

  // ── PAN ───────────────────────────────────────────────────────────────────
  { from:'pan_label',         to:'objekt',             strength:3, type:'roster' },
  { from:'pan_label',         to:'jlin',               strength:3, type:'roster' },
  { from:'pan_label',         to:'djsprinkles',        strength:2, type:'roster' },
  { from:'pan_label',         to:'crystallmess',       strength:2, type:'influence' },
  { from:'hessle_audio',      to:'pan_label',          strength:2, type:'influence' },

  // ── SHERELLE / NIA ARCHIVES ───────────────────────────────────────────────
  { from:'planet_mu',         to:'sherelle',           strength:2, type:'influence' },
  { from:'hessle_audio',      to:'sherelle',           strength:2, type:'influence' },
  { from:'sherelle',          to:'nia_archives',       strength:2, type:'influence' },
  { from:'wisdom_teeth',      to:'nia_archives',       strength:1, type:'influence' },
  { from:'planet_mu',         to:'nia_archives',       strength:2, type:'influence' },

  // ── FUNKTION-ONE ─────────────────────────────────────────────────────────
  { from:'funktion_one',      to:'berghain',           strength:2, type:'influence' },
  { from:'funktion_one',      to:'fabric',             strength:2, type:'influence' },
  { from:'funktion_one',      to:'tresor_club',        strength:2, type:'influence' },

  // ── OBJEKT ────────────────────────────────────────────────────────────────
  { from:'hessle_audio',      to:'objekt',             strength:3, type:'roster' },
  { from:'basicchannel',      to:'objekt',             strength:2, type:'aesthetic' },
  { from:'detroit_scene',     to:'objekt',             strength:2, type:'aesthetic' },
  { from:'berghain',          to:'objekt',             strength:2, type:'roster' },

  // ── CRYSTALLMESS ─────────────────────────────────────────────────────────
  { from:'timedance',         to:'crystallmess',       strength:3, type:'roster' },
  { from:'wisdom_teeth',      to:'crystallmess',       strength:2, type:'aesthetic' },
  { from:'berghain',          to:'crystallmess',       strength:2, type:'roster' },
  { from:'boiler_room',       to:'crystallmess',       strength:2, type:'roster' },

  // ── BRISTOL — SKULL DISCO / LIVITY SOUND / TIMEDANCE ─────────────────────
  // Skull Disco roots
  { from:'basicchannel',      to:'skull_disco',        strength:2, type:'influence' },
  { from:'acid_house',        to:'skull_disco',        strength:2, type:'lineage' },
  { from:'skull_disco',       to:'shackleton',         strength:3, type:'roster' },
  // Skull Disco → Livity Sound: the Bristol lineage
  { from:'skull_disco',       to:'livity_sound',       strength:2, type:'lineage' },
  { from:'shackleton',        to:'livity_sound',       strength:1, type:'influence' },
  // Livity Sound founders and roster
  { from:'livity_sound',      to:'peverelist',         strength:3, type:'roster' },
  { from:'peverelist',        to:'livity_sound',       strength:3, type:'lineage' },
  // Livity Sound's sonic inputs
  { from:'basicchannel',      to:'livity_sound',       strength:2, type:'influence' },
  { from:'detroit_scene',     to:'livity_sound',       strength:2, type:'influence' },
  { from:'hessle_audio',      to:'livity_sound',       strength:1, type:'aesthetic' },
  // Peverelist on Hessle Audio
  { from:'hessle_audio',      to:'peverelist',         strength:2, type:'roster' },
  // Fabric booked Shackleton regularly
  { from:'fabric',            to:'shackleton',         strength:2, type:'roster' },
  // Livity Sound → Timedance: direct generational lineage
  { from:'livity_sound',      to:'timedance',          strength:3, type:'lineage' },
  // Boiler Room amplified the Bristol scene internationally
  { from:'boiler_room',       to:'livity_sound',       strength:2, type:'roster' },
  { from:'boiler_room',       to:'timedance',          strength:2, type:'roster' },

  // ── DJ STINGRAY 313 ───────────────────────────────────────────────────────
  { from:'detroit_scene',     to:'dj_stingray',        strength:3, type:'lineage' },
  { from:'tresor_records',    to:'dj_stingray',        strength:2, type:'roster' },
  { from:'basicchannel',      to:'dj_stingray',        strength:1, type:'aesthetic' },

  // ── LOBSTER THEREMIN ─────────────────────────────────────────────────────
  // Roots: Chicago deep house and UK underground
  { from:'chicago_scene',     to:'lobster_theremin',   strength:2, type:'influence' },
  { from:'smallville',        to:'lobster_theremin',   strength:2, type:'aesthetic' },
  { from:'rush_hour',         to:'lobster_theremin',   strength:2, type:'aesthetic' },
  { from:'hessle_audio',      to:'lobster_theremin',   strength:1, type:'aesthetic' },
  // Roster
  { from:'lobster_theremin',  to:'route_8',            strength:3, type:'roster' },
  { from:'lobster_theremin',  to:'interplanetary_criminal', strength:3, type:'roster' },
  // Route 8 was the inaugural release — foundational to the label
  { from:'route_8',           to:'lobster_theremin',   strength:3, type:'lineage' },
  // Route 8 / Farbwechsel Budapest connection
  { from:'route_8',           to:'farbwechsel',        strength:3, type:'lineage' },
  { from:'farbwechsel',       to:'route_8',            strength:3, type:'roster' },
  { from:'lobster_theremin',  to:'farbwechsel',        strength:2, type:'aesthetic' },
  // Interplanetary Criminal: UK rave and Chicago lineage
  { from:'chicago_scene',     to:'interplanetary_criminal', strength:2, type:'influence' },
  { from:'acid_house',        to:'interplanetary_criminal', strength:2, type:'influence' },
  { from:'boiler_room',       to:'interplanetary_criminal', strength:2, type:'roster' },
  // Deep house influences on Route 8
  { from:'heard',             to:'route_8',            strength:2, type:'influence' },
  { from:'dial',              to:'route_8',            strength:1, type:'aesthetic' },

  // ── ROMANIA — ROMINIMAL ───────────────────────────────────────────────────
  // [a:rpia:r] founding and roster
  { from:'rhadoo',            to:'arpia_r',            strength:3, type:'lineage' },
  { from:'petre_inspirescu',  to:'arpia_r',            strength:3, type:'lineage' },
  { from:'raresh',            to:'arpia_r',            strength:3, type:'lineage' },
  { from:'arpia_r',           to:'rhadoo',             strength:3, type:'roster' },
  { from:'arpia_r',           to:'petre_inspirescu',   strength:3, type:'roster' },
  { from:'arpia_r',           to:'raresh',             strength:3, type:'roster' },
  // Perlon / Villalobos: primary aesthetic influence on rominimal
  { from:'perlon',            to:'rhadoo',             strength:2, type:'aesthetic' },
  { from:'perlon',            to:'petre_inspirescu',   strength:2, type:'aesthetic' },
  { from:'perlon',            to:'raresh',             strength:2, type:'aesthetic' },
  { from:'villalobos',        to:'rhadoo',             strength:2, type:'aesthetic' },
  { from:'villalobos',        to:'petre_inspirescu',   strength:2, type:'aesthetic' },
  // Robert Johnson: Rhadoo and Raresh hold residencies there
  { from:'robertjohnson',     to:'rhadoo',             strength:3, type:'roster' },
  { from:'robertjohnson',     to:'raresh',             strength:2, type:'roster' },
  // Fabric mixes brought Romanian scene to wider attention
  { from:'fabric',            to:'rhadoo',             strength:2, type:'roster' },
  { from:'fabric',            to:'raresh',             strength:2, type:'roster' },
  // Sunwaves: the Romanian scene's festival centrepiece
  { from:'arpia_r',           to:'sunwaves',           strength:3, type:'lineage' },
  { from:'rhadoo',            to:'sunwaves',           strength:3, type:'lineage' },
  { from:'petre_inspirescu',  to:'sunwaves',           strength:3, type:'lineage' },
  { from:'raresh',            to:'sunwaves',           strength:3, type:'lineage' },

  // Mihai Popoviciu: warmer edge of rominimal
  { from:'perlon',            to:'mihai_popoviciu',    strength:1, type:'aesthetic' },
  { from:'villalobos',        to:'mihai_popoviciu',    strength:1, type:'aesthetic' },
  { from:'kompakt',           to:'mihai_popoviciu',    strength:1, type:'aesthetic' },
  { from:'sunwaves',          to:'mihai_popoviciu',    strength:2, type:'roster' },
  { from:'arpia_r',           to:'mihai_popoviciu',    strength:1, type:'aesthetic' },

  // ── GEORGIA — BASSIANI ────────────────────────────────────────────────────
  // Giegling booked the night of the 2018 police raid — direct connection
  { from:'giegling',          to:'bassiani',           strength:2, type:'roster' },
  // Berghain aesthetic kinship: both politically engaged queer techno spaces
  { from:'berghain',          to:'bassiani',           strength:1, type:'aesthetic' },
  // Tresor techno lineage: Bassiani's sound draws from Berlin industrial tradition
  { from:'tresor_records',    to:'bassiani',           strength:2, type:'influence' },
  // Bassiani Records label
  { from:'bassiani',          to:'bassiani_records',   strength:3, type:'lineage' },
  { from:'bassiani_records',  to:'hvl',                strength:3, type:'roster' },
  { from:'bassiani_records',  to:'irakli',             strength:3, type:'roster' },
  // Residents
  { from:'bassiani',          to:'hvl',                strength:3, type:'roster' },
  { from:'bassiani',          to:'irakli',             strength:3, type:'roster' },
  // Irakli on Dial Records (Hamburg) and Robert Johnson
  { from:'dial',              to:'irakli',             strength:3, type:'roster' },
  { from:'robertjohnson',     to:'irakli',             strength:2, type:'roster' },

  // ── UKRAINE ───────────────────────────────────────────────────────────────
  { from:'berghain',          to:'nastia',             strength:2, type:'roster' },
  { from:'fabric',            to:'nastia',             strength:2, type:'roster' },
  { from:'tresor_records',    to:'nastia',             strength:2, type:'influence' },
  { from:'sandwell_district', to:'nastia',             strength:1, type:'aesthetic' },
  { from:'berghain',          to:'cxema',              strength:1, type:'aesthetic' },
  { from:'tresor_records',    to:'cxema',              strength:1, type:'influence' },
  { from:'nastia',            to:'cxema',              strength:2, type:'lineage' },

  // ── POLAND ────────────────────────────────────────────────────────────────
  // Jacek Sienkiewicz: Warsaw's most international figure
  { from:'perlon',            to:'jacek_sienkiewicz',  strength:2, type:'aesthetic' },
  { from:'kompakt',           to:'jacek_sienkiewicz',  strength:1, type:'aesthetic' },
  { from:'tresor_records',    to:'jacek_sienkiewicz',  strength:2, type:'influence' },
  { from:'jacek_sienkiewicz', to:'smolna',             strength:2, type:'roster' },
  // Brutaż / Smolna are the core of Warsaw scene
  { from:'tresor_records',    to:'smolna',             strength:2, type:'influence' },
  { from:'berghain',          to:'smolna',             strength:1, type:'aesthetic' },
  // Unsound: connects the Polish experimental scene to international network
  { from:'kompakt',           to:'unsound',            strength:2, type:'roster' },
  { from:'perlon',            to:'unsound',            strength:2, type:'roster' },
  { from:'fabric',            to:'unsound',            strength:2, type:'roster' },
  { from:'warp',              to:'unsound',            strength:2, type:'roster' },
  { from:'berghain',          to:'unsound',            strength:1, type:'aesthetic' },

  // ── RUSSIA (additional) ───────────────────────────────────────────────────
  { from:'tresor_records',    to:'arma17',             strength:2, type:'influence' },
  { from:'berghain',          to:'arma17',             strength:2, type:'aesthetic' },
  { from:'ninakraviz',        to:'arma17',             strength:3, type:'roster' },
  { from:'tresor_records',    to:'ninakraviz',         strength:2, type:'influence' },
  { from:'arma17',            to:'ninakraviz',         strength:3, type:'roster' },

  // ── DETROIT — EXPANDED ───────────────────────────────────────────────────
  { from:'detroit_scene',         to:'underground_resistance', strength:3, type:'lineage' },
  { from:'kraftwerk',             to:'underground_resistance', strength:2, type:'influence' },
  { from:'underground_resistance',to:'jeff_mills',            strength:3, type:'roster' },
  { from:'underground_resistance',to:'robert_hood',           strength:3, type:'roster' },
  { from:'jeff_mills',            to:'underground_resistance',strength:3, type:'lineage' },
  { from:'jeff_mills',            to:'axis_records',          strength:3, type:'lineage' },
  { from:'axis_records',          to:'jeff_mills',            strength:3, type:'roster' },
  { from:'axis_records',          to:'robert_hood',           strength:3, type:'roster' },
  { from:'tresor_records',        to:'jeff_mills',            strength:3, type:'roster' },
  { from:'berghain',              to:'jeff_mills',            strength:2, type:'roster' },
  { from:'detroit_scene',         to:'robert_hood',           strength:3, type:'roster' },
  { from:'carl_craig',            to:'planet_e',              strength:3, type:'lineage' },
  { from:'planet_e',              to:'carl_craig',            strength:3, type:'roster' },
  { from:'planet_e',              to:'moodymann',             strength:3, type:'roster' },
  { from:'heard',                 to:'carl_craig',            strength:2, type:'influence' },

  // ── FRANCE — LAURENT GARNIER ─────────────────────────────────────────────
  { from:'hacienda',              to:'laurent_garnier',       strength:3, type:'roster' },
  { from:'chicago_scene',         to:'laurent_garnier',       strength:2, type:'influence' },
  { from:'detroit_scene',         to:'laurent_garnier',       strength:2, type:'influence' },
  { from:'laurent_garnier',       to:'rex_club',              strength:3, type:'roster' },
  { from:'laurent_garnier',       to:'f_communications',      strength:3, type:'lineage' },
  { from:'f_communications',      to:'laurent_garnier',       strength:3, type:'roster' },
  { from:'tresor_records',        to:'laurent_garnier',       strength:2, type:'roster' },
  { from:'fabric',                to:'laurent_garnier',       strength:2, type:'roster' },

  // ── HYPERDUB / PLANET MU ─────────────────────────────────────────────────
  { from:'basicchannel',          to:'hyperdub',              strength:2, type:'influence' },
  { from:'kode9',                 to:'hyperdub',              strength:3, type:'lineage' },
  { from:'hyperdub',              to:'kode9',                 strength:3, type:'roster' },
  { from:'hyperdub',              to:'burial',                strength:3, type:'roster' },
  { from:'burial',                to:'hyperdub',              strength:3, type:'lineage' },
  { from:'hyperdub',              to:'dj_rashad',             strength:3, type:'roster' },
  { from:'hyperdub',              to:'jlin',                  strength:3, type:'roster' },
  { from:'planet_mu',             to:'jlin',                  strength:3, type:'roster' },
  { from:'planet_mu',             to:'dj_rashad',             strength:2, type:'roster' },

  // ── HESSLE AUDIO EXTENDED ────────────────────────────────────────────────
  { from:'hessle_audio',          to:'ben_ufo',               strength:3, type:'roster' },
  { from:'hessle_audio',          to:'pangaea',               strength:3, type:'roster' },
  { from:'ben_ufo',               to:'hessle_audio',          strength:3, type:'lineage' },
  { from:'pangaea',               to:'hessle_audio',          strength:3, type:'lineage' },

  // ── BRISTOL — TECTONIC / PINCH ───────────────────────────────────────────
  { from:'pinch',                 to:'tectonic',              strength:3, type:'lineage' },
  { from:'tectonic',              to:'pinch',                 strength:3, type:'roster' },
  { from:'skull_disco',           to:'tectonic',              strength:2, type:'influence' },
  { from:'shackleton',            to:'tectonic',              strength:3, type:'roster' },
  { from:'livity_sound',          to:'tectonic',              strength:2, type:'influence' },

  // ── MANCHESTER — DEMDIKE STARE ───────────────────────────────────────────
  { from:'modern_love',           to:'demdike_stare',         strength:3, type:'roster' },
  { from:'basicchannel',          to:'demdike_stare',         strength:2, type:'influence' },
  { from:'andy_stott',            to:'demdike_stare',         strength:2, type:'lineage' },

  // ── SPECIAL REQUEST ──────────────────────────────────────────────────────
  { from:'acid_house',            to:'special_request',       strength:3, type:'lineage' },
  { from:'fabric',                to:'special_request',       strength:2, type:'roster' },
  { from:'hessle_audio',          to:'special_request',       strength:1, type:'influence' },

  // ── BERLIN — BERGHAIN RESIDENTS ──────────────────────────────────────────
  { from:'berghain',              to:'ben_klock',             strength:3, type:'roster' },
  { from:'basicchannel',          to:'ben_klock',             strength:2, type:'influence' },
  { from:'ben_klock',             to:'klockworks',            strength:3, type:'lineage' },
  { from:'klockworks',            to:'ben_klock',             strength:3, type:'roster' },
  { from:'ostgut_ton',            to:'ben_klock',             strength:3, type:'roster' },
  { from:'berghain',              to:'len_faki',              strength:3, type:'roster' },
  { from:'tresor_records',        to:'len_faki',              strength:2, type:'influence' },

  // ── BELGIUM — NEW WAVE ───────────────────────────────────────────────────
  // ── LOLA HARO / SMALL STEPS ─────────────────────────────────────────────
  { from:'lola_haro',             to:'small_steps',           strength:3, type:'lineage' },
  { from:'small_steps',           to:'lola_haro',             strength:3, type:'roster' },
  { from:'amelie_lens',           to:'lola_haro',             strength:1, type:'influence' },
  { from:'charlotte_de_witte',    to:'lola_haro',             strength:1, type:'influence' },
  { from:'dettmann',              to:'lola_haro',             strength:2, type:'influence' },

  { from:'berghain',              to:'amelie_lens',           strength:2, type:'roster' },
  { from:'tresor_records',        to:'amelie_lens',           strength:2, type:'influence' },
  { from:'berghain',              to:'charlotte_de_witte',    strength:2, type:'roster' },
  { from:'tresor_records',        to:'charlotte_de_witte',    strength:2, type:'influence' },
  { from:'rs_records',            to:'charlotte_de_witte',    strength:2, type:'influence' },

  // ── SPAIN — SEMANTICA ────────────────────────────────────────────────────
  { from:'svreca',                to:'semantica',             strength:3, type:'lineage' },
  { from:'semantica',             to:'svreca',                strength:3, type:'roster' },
  { from:'basicchannel',          to:'semantica',             strength:2, type:'influence' },
  { from:'perlon',                to:'svreca',                strength:2, type:'influence' },
  { from:'berghain',              to:'svreca',                strength:2, type:'roster' },
  { from:'semantica',             to:'claudio_prc',           strength:3, type:'roster' },

  // ── CHICAGO — FOOTWORK ───────────────────────────────────────────────────
  { from:'chicago_scene',         to:'teklife',               strength:3, type:'lineage' },
  { from:'teklife',               to:'dj_rashad',             strength:3, type:'roster' },
  { from:'dj_rashad',             to:'teklife',               strength:3, type:'lineage' },
  { from:'dj_rashad',             to:'jlin',                  strength:2, type:'influence' },
  { from:'chicago_scene',         to:'dj_rashad',             strength:3, type:'lineage' },
  { from:'chicago_scene',         to:'jlin',                  strength:2, type:'lineage' },
  { from:'four_tet',              to:'dj_rashad',             strength:2, type:'influence' },
  { from:'burial',                to:'dj_rashad',             strength:1, type:'influence' },

  // ── SCENE / EVENT NODES ───────────────────────────────────────────────────
  // Ibiza Connection 1987
  { from:'chicago_scene',    to:'ibiza_moment',      strength:2, type:'influence' },
  { from:'knuckles',         to:'ibiza_moment',      strength:2, type:'influence' },
  { from:'ibiza_moment',     to:'hacienda',           strength:3, type:'lineage' },
  { from:'ibiza',            to:'ibiza_moment',      strength:2, type:'lineage' },

  // Summer of Love 1988
  { from:'ibiza_moment',     to:'summer_of_love',    strength:3, type:'lineage' },
  { from:'hacienda',         to:'summer_of_love',    strength:3, type:'roster' },
  { from:'chicago_scene',    to:'summer_of_love',    strength:2, type:'influence' },

  // Berlin Zero Hour 1991
  { from:'detroit_scene',    to:'berlin_zero_hour',  strength:2, type:'influence' },
  { from:'underground_resistance', to:'berlin_zero_hour', strength:3, type:'lineage' },
  { from:'jeff_mills',       to:'berlin_zero_hour',  strength:3, type:'lineage' },
  { from:'berlin_zero_hour', to:'tresor_club',        strength:3, type:'lineage' },
  { from:'berlin_zero_hour', to:'tresor_records',     strength:3, type:'lineage' },
  { from:'berlin_zero_hour', to:'berghain',           strength:2, type:'lineage' },

  // Detroit–Berlin Axis 1992
  { from:'belleville3',      to:'detroit_berlin_axis', strength:3, type:'lineage' },
  { from:'underground_resistance', to:'detroit_berlin_axis', strength:3, type:'lineage' },
  { from:'jeff_mills',       to:'detroit_berlin_axis', strength:3, type:'lineage' },
  { from:'detroit_berlin_axis', to:'tresor_records',  strength:3, type:'lineage' },
  { from:'detroit_berlin_axis', to:'berlin_zero_hour', strength:2, type:'aesthetic' },

  // Chicago to Jo'burg 1994
  { from:'chicago_scene',    to:'chicago_to_sa',     strength:2, type:'influence' },
  { from:'knuckles',         to:'chicago_to_sa',     strength:2, type:'influence' },
  { from:'chicago_to_sa',    to:'house_afrika',       strength:3, type:'lineage' },
  { from:'chicago_to_sa',    to:'soul_candi',         strength:3, type:'lineage' },
  { from:'chicago_to_sa',    to:'blackcoffee',        strength:2, type:'influence' },

  // ── NEW ADDITIONS — edges backed by node descriptions only ───────────────

  // Sven Väth / Cocoon
  { from:'detroit_scene',      to:'sven_vath',          strength:2, type:'influence' },  // desc: "brought Detroit techno's rhythmic template to a European audience"
  { from:'sven_vath',          to:'cocoon',             strength:3, type:'roster' },      // desc: "In 1999 he launched Cocoon Records"

  // Sven Marquardt
  { from:'berghain',           to:'sven_marquardt',     strength:3, type:'roster' },      // desc: "door selector at Berghain since the club's opening in 2004"

  // Ellen Allien / BPitch Control
  { from:'berlin_zero_hour',   to:'ellen_allien',       strength:2, type:'aesthetic' },   // desc: born East Berlin, part of post-unification Berlin techno culture
  { from:'ellen_allien',       to:'bpitch',             strength:3, type:'roster' },      // desc: "founded BPitch Control in 1999"
  { from:'berlin_zero_hour',   to:'bpitch',             strength:2, type:'aesthetic' },   // desc: label described as "Berlin-specific"

  // A Guy Called Gerald / Metalheadz
  { from:'hacienda',           to:'a_guy_called_gerald', strength:2, type:'influence' },  // desc: "Voodoo Ray...a staple at the Haçienda"
  { from:'summer_of_love',     to:'a_guy_called_gerald', strength:2, type:'aesthetic' },  // desc: "one of the most loved records of the rave era"
  { from:'metalheadz',         to:'a_guy_called_gerald', strength:2, type:'influence' },  // desc: "moved into jungle and drum and bass" — Metalheadz is the primary D&B lineage node
  { from:'hacienda',           to:'metalheadz',         strength:2, type:'lineage' },     // metalheadz desc: "emerged directly from the UK rave and jungle scenes...the Haçienda"

  // James Holden
  { from:'aphex_twin',         to:'james_holden',       strength:2, type:'influence' },   // desc: "cited Aphex Twin's analogue synthesis work as a formative influence"

  // Theo Parrish
  { from:'detroit_scene',      to:'theo_parrish',       strength:3, type:'lineage' },     // desc: "based in Ypsilanti, Michigan...Detroit's electronic legacy"
  { from:'heard',              to:'theo_parrish',       strength:3, type:'influence' },   // desc: "Larry Heard's deep house lineage...cited Larry Heard as a foundational influence"

  // Stephan Bodzin
  { from:'cocoon',             to:'stephan_bodzin',     strength:2, type:'roster' },      // desc: "early work, including material on Cocoon Recordings"

  // Caribou / Daphni
  { from:'caribou',            to:'daphni',             strength:3, type:'lineage' },     // desc: "Daphni is the house and techno alias of Dan Snaith (Caribou)"

  // Deetron
  { from:'cocoon',             to:'deetron',            strength:2, type:'roster' },      // desc: "released on Music Man Records, Cocoon, and Kompakt"

  // Illian Tape
  { from:'detroit_scene',      to:'illian_tape',        strength:2, type:'influence' },   // desc: "rooted in the Detroit techno tradition...Zenker Brothers have cited Detroit"

  // John Talabot
  { from:'chicago_scene',      to:'john_talabot',       strength:2, type:'influence' },   // desc: "emotional depth of Chicago deep house, building on the Larry Heard–descended tradition"
  { from:'heard',              to:'john_talabot',       strength:2, type:'influence' },   // desc: "Larry Heard–descended tradition"

  // Jamie xx
  { from:'john_talabot',       to:'jamie_xx',           strength:2, type:'aesthetic' },   // jamie_xx desc: "Young Turks connection puts him in proximity to John Talabot"

  // Melchior Productions Ltd
  { from:'clone',              to:'melchior_productions', strength:3, type:'roster' },    // desc: "Releases on Clone Records (Rotterdam)"

  // Kalahari Oyster Cult
  { from:'blackcoffee',        to:'kalahari_oyster_cult', strength:2, type:'influence' }, // desc: "draws from South African house — the tradition that includes artists like Black Coffee"

  // Elektron instruments
  { from:'elektron',           to:'machinedrum',          strength:3, type:'lineage' },
  { from:'elektron',           to:'monomachine',          strength:3, type:'lineage' },
  { from:'elektron',           to:'octatrack',            strength:3, type:'lineage' },

  // Hivern Discs
  { from:'john_talabot',       to:'hivern_discs',         strength:3, type:'roster' },   // desc: "Hivern Discs was founded in Barcelona around 2008 by John Talabot"

  // ── UK — JUNGLE / DRUM AND BASS ──────────────────────────────────────────
  { from:'acid_house',         to:'jungle',               strength:3, type:'lineage'   }, // rave scene gave jungle its energy and sample sources
  { from:'summer_of_love',     to:'jungle',               strength:2, type:'lineage'   }, // Jungle emerged from rave culture
  { from:'funk',               to:'jungle',               strength:2, type:'influence' }, // funk breaks / breakbeat sampling central to jungle
  { from:'jungle',             to:'drum_and_bass',         strength:3, type:'lineage'   }, // jungle evolved directly into D&B
  { from:'reinforced_records', to:'jungle',               strength:3, type:'lineage'   }, // Reinforced was the foundational jungle label
  { from:'reinforced_records', to:'4hero',                strength:3, type:'roster'    }, // 4hero were the founders of Reinforced
  { from:'4hero',              to:'jungle',               strength:3, type:'lineage'   }, // 4hero seminal jungle/D&B producers
  { from:'4hero',              to:'drum_and_bass',        strength:3, type:'lineage'   },
  { from:'moving_shadow',      to:'jungle',               strength:3, type:'lineage'   }, // Moving Shadow key early jungle label
  { from:'moving_shadow',      to:'drum_and_bass',        strength:3, type:'lineage'   },
  { from:'goldie',             to:'drum_and_bass',        strength:3, type:'lineage'   }, // Goldie defined the D&B sound with Timeless
  { from:'goldie',             to:'metalheadz',           strength:3, type:'roster'    }, // Goldie founded Metalheadz
  { from:'goldie',             to:'jungle',               strength:2, type:'lineage'   },
  { from:'grooverider',        to:'jungle',               strength:3, type:'lineage'   }, // Grooverider was among the first to play the music
  { from:'grooverider',        to:'drum_and_bass',        strength:3, type:'lineage'   },
  { from:'fabio',              to:'jungle',               strength:3, type:'lineage'   }, // Fabio & Grooverider pioneered the sound at Rage
  { from:'fabio',              to:'drum_and_bass',        strength:3, type:'lineage'   },
  { from:'ltj_bukem',         to:'drum_and_bass',        strength:3, type:'lineage'   }, // LTJ Bukem defined liquid/atmospheric D&B
  { from:'ltj_bukem',         to:'good_looking_records', strength:3, type:'roster'    },
  { from:'good_looking_records',to:'drum_and_bass',       strength:2, type:'lineage'   },
  { from:'roni_size',          to:'drum_and_bass',        strength:3, type:'lineage'   }, // Mercury Prize-winning New Forms
  { from:'andy_c',             to:'drum_and_bass',        strength:3, type:'lineage'   }, // Andy C is synonymous with D&B
  { from:'andy_c',             to:'ram_records',          strength:3, type:'roster'    },
  { from:'ram_records',        to:'drum_and_bass',        strength:3, type:'lineage'   },
  { from:'drum_and_bass',      to:'metalheadz',           strength:3, type:'lineage'   }, // Metalheadz is the flagship D&B label
  { from:'hacienda',           to:'grooverider',          strength:2, type:'influence' }, // rave circuit connections
  { from:'acid_house',         to:'drum_and_bass',        strength:2, type:'influence' },

  // ── DETROIT — MISSING NODES ──────────────────────────────────────────────
  { from:'underground_resistance', to:'mike_banks',       strength:3, type:'roster'    }, // Banks co-founded UR with Atkins
  { from:'mike_banks',         to:'underground_resistance',strength:3, type:'roster'   },
  { from:'detroit_scene',      to:'mike_banks',           strength:3, type:'lineage'   },
  { from:'underground_resistance', to:'dj_rolando',       strength:3, type:'roster'    }, // Jaguar on UR
  { from:'detroit_scene',      to:'blake_baxter',         strength:3, type:'lineage'   }, // early Detroit techno pioneer
  { from:'belleville3',        to:'blake_baxter',         strength:2, type:'aesthetic' },
  { from:'detroit_scene',      to:'santonio_echols',      strength:3, type:'lineage'   }, // early Detroit DJ/producer
  { from:'underground_resistance', to:'santonio_echols',  strength:2, type:'influence' },

  // ── AMBIENT / EXPERIMENTAL ────────────────────────────────────────────────
  { from:'brian_eno',          to:'harold_budd',          strength:3, type:'lineage'   }, // Eno and Budd recorded together (The Plateaux of Mirror, 1980)
  { from:'brian_eno',          to:'william_basinski',     strength:2, type:'influence' }, // Basinski cites tape loops and Eno ambient
  { from:'harold_budd',        to:'william_basinski',     strength:2, type:'aesthetic' },
  { from:'brian_eno',          to:'stars_of_the_lid',     strength:2, type:'influence' },
  { from:'stars_of_the_lid',   to:'tim_hecker',           strength:2, type:'aesthetic' },
  { from:'william_basinski',   to:'tim_hecker',           strength:2, type:'aesthetic' },
  { from:'merzbow',            to:'tim_hecker',           strength:1, type:'aesthetic' },
  { from:'brian_eno',          to:'tim_hecker',           strength:2, type:'influence' },

  // ── CHICAGO — MISSING NODES ───────────────────────────────────────────────
  { from:'chicago_scene',      to:'dj_rush',              strength:3, type:'lineage'   }, // hard techno / Chicago
  { from:'chicago_scene',      to:'paul_johnson',         strength:3, type:'lineage'   }, // Chicago house legend
  { from:'warehouse',          to:'paul_johnson',         strength:2, type:'lineage'   },
  { from:'chicago_scene',      to:'dj_sneak',             strength:3, type:'lineage'   }, // Chicago house
  { from:'knuckles',           to:'dj_sneak',             strength:2, type:'influence' },

  // ── CHICAGO — RON HARDY / PHUTURE ────────────────────────────────────────
  // chicago_scene→ron_hardy already defined earlier (roster, line ~63); duplicate removed
  { from:'ron_hardy',          to:'musicbox',             strength:3, type:'roster'    },
  { from:'musicbox',           to:'chicago_scene',        strength:3, type:'lineage'   },
  { from:'musicbox',           to:'phuture',              strength:3, type:'lineage'   },
  { from:'ron_hardy',          to:'phuture',              strength:3, type:'lineage'   }, // Hardy was first to play Acid Tracks
  { from:'phuture',            to:'acid_house',           strength:3, type:'lineage'   }, // Acid Tracks directly created acid house
  { from:'trax',               to:'phuture',              strength:3, type:'roster'    }, // Acid Tracks released on Trax
  { from:'knuckles',           to:'ron_hardy',            strength:2, type:'aesthetic' }, // parallel pioneers of the same scene
  { from:'warehouse',          to:'ron_hardy',            strength:2, type:'aesthetic' }, // Music Box as counterpart to the Warehouse

  // ── DETROIT — MOVEMENT FESTIVAL ──────────────────────────────────────────
  { from:'detroit_scene',      to:'movement_festival',    strength:3, type:'lineage'   },
  { from:'belleville3',        to:'movement_festival',    strength:3, type:'influence' }, // Atkins/May/Saunderson play every year
  { from:'underground_resistance', to:'movement_festival',strength:2, type:'influence' },

  // ── UK RAVE — ORBITAL / LEFTFIELD / CARL COX ─────────────────────────────
  { from:'acid_house',         to:'orbital',              strength:3, type:'lineage'   }, // Orbital emerged directly from rave
  { from:'summer_of_love',     to:'orbital',              strength:3, type:'lineage'   },
  { from:'acid_house',         to:'leftfield',            strength:3, type:'lineage'   }, // Leftfield from UK acid house underground
  { from:'chicago_scene',      to:'leftfield',            strength:2, type:'influence' }, // Chicago deep house into Leftism
  { from:'acid_house',         to:'carl_cox',             strength:3, type:'lineage'   }, // Cox was a rave-era pioneer
  { from:'hacienda',           to:'carl_cox',             strength:2, type:'influence' }, // Haçienda circuit
  { from:'orbital',            to:'warp',                 strength:2, type:'aesthetic' }, // Orbital/Warp shared experimental electronic space
  { from:'leftfield',          to:'jungle',               strength:1, type:'aesthetic' }, // Leftfield and jungle cross-pollinated

  // ── BRAZIL — BAILE FUNK ───────────────────────────────────────────────────
  { from:'funk',               to:'baile_funk',           strength:3, type:'lineage'   }, // Miami bass / electro / funk lineage
  { from:'electro',            to:'baile_funk',           strength:2, type:'lineage'   }, // electro templates imported via tapes
  { from:'black_club_culture', to:'baile_funk',           strength:2, type:'lineage'   }, // favela communities, Black cultural production

  // ── BERLIN / LONDON — CONTEMPORARY ───────────────────────────────────────
  { from:'illian_tape',        to:'mobilegirl',           strength:3, type:'roster'    }, // Mobilegirl releases on Ilian Tape
  { from:'lobster_theremin',   to:'perko',                strength:3, type:'roster'    }, // Perko on Lobster Theremin
  { from:'pc_music',           to:'coucou_chloe',         strength:3, type:'roster'    }, // Coucou Chloé on PC Music
  { from:'sophie',             to:'coucou_chloe',         strength:2, type:'aesthetic' }, // shared PC Music hyper-compressed aesthetic
  { from:'ag_cook',            to:'coucou_chloe',         strength:2, type:'aesthetic' },

  // ── POST-CLUB AMBIENT ─────────────────────────────────────────────────────
  { from:'burial',             to:'mount_kimbie',         strength:3, type:'influence' }, // Burial's fragmented bass/beats directly influenced MK
  { from:'dubstep',            to:'mount_kimbie',         strength:2, type:'lineage'   }, // post-dubstep sound
  { from:'hyperdub',           to:'mount_kimbie',         strength:1, type:'aesthetic' }, // shared London bass/emotional landscape
  { from:'brian_eno',          to:'the_caretaker',        strength:2, type:'influence' }, // tape loop / decay lineage
  { from:'william_basinski',   to:'the_caretaker',        strength:3, type:'aesthetic' }, // both work with deteriorating recorded material
  { from:'ambient',            to:'the_caretaker',        strength:2, type:'lineage'   },

  // ── BIRMINGHAM — BRITISH MURDER BOYS ────────────────────────────────────
  { from:'sandwell_district',  to:'regis',                strength:3, type:'roster'    },
  { from:'tresor_records',     to:'regis',                strength:2, type:'roster'    },
  { from:'regis',              to:'british_murder_boys',  strength:3, type:'lineage'   },
  { from:'surgeon',            to:'british_murder_boys',  strength:3, type:'lineage'   },
  { from:'downwards',          to:'british_murder_boys',  strength:3, type:'roster'    },

  // ── GLASGOW — OPTIMO ─────────────────────────────────────────────────────
  { from:'sub_club',           to:'optimo',               strength:3, type:'lineage'   }, // Optimo was a Sub Club residency
  { from:'optimo',             to:'surgeon',              strength:2, type:'influence' }, // Optimo championed Birmingham artists
  { from:'optimo',             to:'sandwell_district',    strength:2, type:'influence' },

  // ── DECONSTRUCTED CLUB ───────────────────────────────────────────────────
  { from:'non_worldwide',      to:'nkisi',                strength:3, type:'roster'    }, // Nkisi co-founded NON Worldwide
  { from:'puce_mary',          to:'nkisi',                strength:2, type:'aesthetic' }, // both in industrial/experimental club space
  { from:'posh_isolation',     to:'nkisi',                strength:1, type:'aesthetic' },
  { from:'non_worldwide',      to:'lotic',                strength:2, type:'aesthetic' }, // Lotic connected to NON/Janus scene
  { from:'burial',             to:'lotic',                strength:1, type:'aesthetic' }, // UK bass lineage into deconstructed club
  { from:'nkisi',              to:'eartheater',           strength:1, type:'aesthetic' }, // both on experimental circuit / PAN adjacent
  { from:'eartheater',         to:'pan_sonic',            strength:1, type:'aesthetic' }, // PAN label aesthetic lineage

  // ── PC MUSIC / SOPHIE / ARCA ─────────────────────────────────────────────
  { from:'sophie',             to:'pc_music',             strength:3, type:'aesthetic' }, // SOPHIE and PC Music shared aesthetic DNA
  { from:'pc_music',           to:'ag_cook',              strength:3, type:'roster'    }, // A.G. Cook founded PC Music
  { from:'sophie',             to:'ag_cook',              strength:3, type:'aesthetic' }, // close collaborators / mutual influence
  { from:'warp',               to:'sophie',               strength:1, type:'aesthetic' }, // Warp aesthetic lineage of experimental pop
  { from:'aphex_twin',         to:'sophie',               strength:2, type:'influence' }, // hyperreal synthesis lineage
  { from:'sophie',             to:'arca',                 strength:3, type:'aesthetic' }, // SOPHIE and Arca were close; overlapping scenes
  { from:'arca',               to:'sophie',               strength:2, type:'aesthetic' },
  { from:'warp',               to:'arca',                 strength:1, type:'aesthetic' }, // Arca in the broader Warp-adjacent experimental world
  { from:'hyperdub',           to:'arca',                 strength:1, type:'aesthetic' }, // UK bass + experimental lineage
  { from:'burial',             to:'arca',                 strength:1, type:'aesthetic' }, // shared emotional intensity / UK underground

  // ── QUEER UNDERGROUND — T4T LUV NRG ────────────────────────────────────
  { from:'octo_octa',         to:'t4t_luv_nrg',          strength:3, type:'lineage'   }, // co-founded label
  { from:'eris_drew',         to:'t4t_luv_nrg',          strength:3, type:'lineage'   }, // co-founded label
  { from:'t4t_luv_nrg',      to:'octo_octa',             strength:3, type:'roster'    },
  { from:'t4t_luv_nrg',      to:'eris_drew',             strength:3, type:'roster'    },
  { from:'octo_octa',         to:'eris_drew',             strength:3, type:'aesthetic' }, // co-founders / close collaborators
  { from:'heard',             to:'octo_octa',             strength:2, type:'influence' }, // Larry Heard deep house lineage
  { from:'heard',             to:'eris_drew',             strength:2, type:'influence' }, // Chicago deep house roots
  { from:'levan',             to:'octo_octa',             strength:2, type:'influence' }, // Paradise Garage tradition
  { from:'knuckles',          to:'eris_drew',             strength:2, type:'influence' }, // Chicago house roots
  { from:'paradise_garage',   to:'octo_octa',             strength:1, type:'influence' }, // spiritual lineage

  // ── WHITE LABEL ───────────────────────────────────────────────────────────
  { from:'white_label',  to:'jungle',          strength:3, type:'lineage'   }, // white label was the primary distribution format for jungle
  { from:'white_label',  to:'drum_and_bass',   strength:3, type:'lineage'   }, // D&B economy ran almost entirely on white labels
  { from:'white_label',  to:'dubstep',         strength:2, type:'lineage'   }, // dubstep promos circulated as white labels
  { from:'white_label',  to:'uk_garage',       strength:2, type:'lineage'   }, // UK garage built on the same white label infrastructure
  { from:'white_label',  to:'rinse_fm',        strength:2, type:'aesthetic' }, // pirate radio and white labels were symbiotic
  { from:'moving_shadow',to:'white_label',     strength:2, type:'aesthetic' }, // Moving Shadow emblematic of the white label era
  { from:'metalheadz',   to:'white_label',     strength:2, type:'aesthetic' }, // Metalheadz releases began as white labels

  // ── GQOM ─────────────────────────────────────────────────────────────────
  { from:'dj_lag',             to:'gqom',                 strength:3, type:'lineage'   }, // DJ Lag central to gqom internationally
  { from:'gqom',               to:'dj_lag',               strength:3, type:'lineage'   },
  { from:'black_club_culture', to:'gqom',                 strength:2, type:'lineage'   }, // African club culture roots
  { from:'non_worldwide',      to:'gqom',                 strength:2, type:'influence' }, // NON Worldwide platform for African club forms

  // ── ROSS FROM FRIENDS / EJECA / LAST PINES ───────────────────────────────
  { from:'four_tet',           to:'ross_from_friends',    strength:2, type:'influence' }, // textural electronics, blurring of live/electronic
  { from:'floating_points',    to:'ross_from_friends',    strength:2, type:'aesthetic' }, // shared London experimental deep house orbit
  { from:'lone',               to:'ross_from_friends',    strength:2, type:'aesthetic' }, // lo-fi rave aesthetic, UK bedroom electronic
  { from:'lobster_theremin',   to:'ross_from_friends',    strength:2, type:'roster'    }, // A Heartwarming Selection released on Lobster Theremin
  { from:'leon_vynehall',      to:'ejeca',                strength:2, type:'aesthetic' }, // contemporary UK deep house scene
  { from:'lobster_theremin',   to:'ejeca',                strength:1, type:'aesthetic' }, // UK deep house label orbit
  { from:'four_tet',           to:'ejeca',                strength:1, type:'influence' }, // sample-led UK electronic lineage
  { from:'leon_vynehall',      to:'last_pines',           strength:2, type:'aesthetic' }, // London minimal deep tech lineage
  { from:'call_super',         to:'last_pines',           strength:2, type:'aesthetic' }, // UK post-club minimal electronics
  { from:'ross_from_friends',  to:'ejeca',                strength:2, type:'aesthetic' }, // contemporary UK feel-good / lo-fi house scene

  // ── BERLIN — DIYNAMIC / INNERVISIONS EXTENDED ────────────────────────────
  { from:'diynamic',            to:'solomun',             strength:3, type:'roster'    },
  { from:'diynamic',            to:'stimming',            strength:3, type:'roster'    },
  { from:'solomun',             to:'diynamic',            strength:3, type:'lineage'   },
  { from:'innervisions',        to:'henrik_schwarz',      strength:3, type:'roster'    },
  { from:'innervisions',        to:'marcus_worgull',      strength:3, type:'roster'    },
  { from:'innervisions',        to:'recondite',           strength:2, type:'roster'    },
  { from:'innervisions',        to:'diynamic',            strength:2, type:'aesthetic' },
  { from:'panorama_bar',        to:'diynamic',            strength:2, type:'aesthetic' },
  { from:'smallville',          to:'recondite',           strength:2, type:'aesthetic' },
  { from:'dial',                to:'recondite',           strength:2, type:'aesthetic' },

  // ── BERLIN — BPITCH CONTROL ───────────────────────────────────────────────
  { from:'bpitch',              to:'paul_kalkbrenner',    strength:3, type:'roster'    },
  { from:'bpitch',              to:'modeselektor',        strength:3, type:'roster'    },
  { from:'bpitch',              to:'apparat',             strength:3, type:'roster'    },
  { from:'modeselektor',        to:'apparat',             strength:3, type:'aesthetic' },
  { from:'berghain',            to:'paul_kalkbrenner',    strength:2, type:'roster'    },

  // ── BERLIN — OSTGUT TON / KOBOSIL ────────────────────────────────────────
  { from:'ostgut_ton',          to:'kobosil',             strength:3, type:'roster'    },
  { from:'berghain',            to:'kobosil',             strength:3, type:'roster'    },
  { from:'tresor_records',      to:'kobosil',             strength:2, type:'influence' },

  // ── BERLIN — WATERGATE ────────────────────────────────────────────────────
  { from:'watergate',           to:'innervisions',        strength:3, type:'aesthetic' },
  { from:'watergate',           to:'dixon',               strength:3, type:'roster'    },
  { from:'watergate',           to:'ame',                 strength:3, type:'roster'    },
  { from:'panorama_bar',        to:'watergate',           strength:2, type:'aesthetic' },
  { from:'watergate',           to:'diynamic',            strength:2, type:'aesthetic' },

  // ── BERLIN — GET PHYSICAL ─────────────────────────────────────────────────
  { from:'berlin_zero_hour',    to:'get_physical',        strength:1, type:'aesthetic' },
  { from:'kompakt',             to:'get_physical',        strength:1, type:'aesthetic' },
  { from:'panorama_bar',        to:'get_physical',        strength:2, type:'aesthetic' },

  // ── MELODIC TECHNO / HARD TECHNO ─────────────────────────────────────────
  { from:'melodic_techno',      to:'innervisions',        strength:3, type:'influence' },
  { from:'melodic_techno',      to:'afterlife',           strength:3, type:'influence' },
  { from:'melodic_techno',      to:'diynamic',            strength:3, type:'influence' },
  { from:'innervisions',        to:'melodic_techno',      strength:2, type:'lineage'   },
  { from:'afterlife',           to:'melodic_techno',      strength:2, type:'lineage'   },
  { from:'ebm',                 to:'hard_techno',         strength:2, type:'influence' },
  { from:'ebm',                 to:'surgeon',             strength:2, type:'influence' },
  { from:'ebm',                 to:'regis',               strength:2, type:'influence' },
  { from:'ebm',                 to:'tresor_records',      strength:2, type:'influence' },
  { from:'hard_techno',         to:'kobosil',             strength:3, type:'lineage'   },
  { from:'hard_techno',         to:'berghain',            strength:2, type:'influence' },
  { from:'hard_techno',         to:'ostgut_ton',          strength:1, type:'influence' },
  { from:'detroit_scene',       to:'ebm',                 strength:1, type:'influence' },

  // ── UK — HESSLE AUDIO / PEARSON SOUND / JOY ORBISON ─────────────────────
  { from:'hessle_audio',        to:'pearson_sound',       strength:3, type:'roster'    },
  { from:'pearson_sound',       to:'hessle_audio',        strength:3, type:'lineage'   },
  { from:'hessle_audio',        to:'joy_orbison',         strength:3, type:'roster'    },
  { from:'four_tet',            to:'joy_orbison',         strength:2, type:'influence' },
  { from:'floating_points',     to:'joy_orbison',         strength:2, type:'aesthetic' },

  // ── UK — NUMBERS / JACKMASTER ─────────────────────────────────────────────
  { from:'numbers',             to:'jackmaster',          strength:3, type:'roster'    },
  { from:'sub_club',            to:'jackmaster',          strength:3, type:'roster'    },
  { from:'sub_club',            to:'numbers',             strength:2, type:'lineage'   },
  { from:'numbers',             to:'joy_orbison',         strength:2, type:'roster'    },

  // ── UK — WARP / PLAID / NIGHTMARES ON WAX ────────────────────────────────
  { from:'warp',                to:'plaid',               strength:3, type:'roster'    },
  { from:'warp',                to:'nightmares_on_wax',   strength:3, type:'roster'    },
  { from:'idm',                 to:'plaid',               strength:3, type:'roster'    },
  { from:'boards_of_canada',    to:'nightmares_on_wax',   strength:1, type:'aesthetic' },
  { from:'acid_house',          to:'nightmares_on_wax',   strength:2, type:'lineage'   },

  // ── UK — NINJA TUNE ───────────────────────────────────────────────────────
  { from:'ninja_tune',          to:'bonobo',              strength:3, type:'roster'    },
  { from:'warp',                to:'ninja_tune',          strength:1, type:'aesthetic' },
  { from:'ninja_tune',          to:'four_tet',            strength:1, type:'aesthetic' },

  // ── UK — GRIME / SKEPTA / DIZZEE RASCAL ──────────────────────────────────
  { from:'grime',               to:'skepta',              strength:3, type:'roster'    },
  { from:'grime',               to:'dizzee_rascal',       strength:3, type:'roster'    },
  { from:'wiley',               to:'skepta',              strength:3, type:'influence' },
  { from:'wiley',               to:'dizzee_rascal',       strength:3, type:'influence' },
  { from:'rinse_fm',            to:'skepta',              strength:3, type:'roster'    },
  { from:'rinse_fm',            to:'dizzee_rascal',       strength:2, type:'roster'    },

  // ── UK — MUMDANCE ─────────────────────────────────────────────────────────
  { from:'grime',               to:'mumdance',            strength:2, type:'influence' },
  { from:'footwork',            to:'mumdance',            strength:2, type:'influence' },
  { from:'rinse_fm',            to:'mumdance',            strength:2, type:'roster'    },

  // ── ITALY — GIORGIO MORODER / COSMIC DISCO ───────────────────────────────
  { from:'disco',               to:'giorgio_moroder',     strength:2, type:'influence' },
  { from:'giorgio_moroder',     to:'italo_disco',         strength:3, type:'lineage'   },
  { from:'italo_disco',         to:'daniele_baldelli',    strength:2, type:'influence' },
  { from:'daniele_baldelli',    to:'cosmic_venue',        strength:3, type:'roster'    },
  { from:'daniele_baldelli',    to:'cosmic_disco_style',  strength:3, type:'lineage'   },
  { from:'cosmic_venue',        to:'cosmic_disco_style',  strength:3, type:'lineage'   },
  { from:'cosmic_disco_style',  to:'italo_disco',         strength:2, type:'lineage'   },
  { from:'afrofuturism',        to:'cosmic_disco_style',  strength:2, type:'influence' },

  // ── ITALY — TENAX / MARCO CAROLA / JOSEPH CAPRIATI ───────────────────────
  { from:'tenax',               to:'marco_carola',        strength:3, type:'roster'    },
  { from:'tenax',               to:'joseph_capriati',     strength:3, type:'roster'    },
  { from:'tenax',               to:'enrico_sangiuliano',  strength:2, type:'roster'    },
  { from:'cosmic_venue',        to:'tenax',               strength:2, type:'lineage'   },
  { from:'berghain',            to:'marco_carola',        strength:2, type:'roster'    },
  { from:'tresor_records',      to:'marco_carola',        strength:2, type:'influence' },
  { from:'drumcode',            to:'joseph_capriati',     strength:3, type:'roster'    },
  { from:'drumcode',            to:'enrico_sangiuliano',  strength:3, type:'roster'    },

  // ── ITALY — AFTERLIFE / AGENTS OF TIME / ANYMA ────────────────────────────
  { from:'afterlife',           to:'agents_of_time',      strength:3, type:'roster'    },
  { from:'afterlife',           to:'anyma',               strength:3, type:'roster'    },
  { from:'melodic_techno',      to:'agents_of_time',      strength:2, type:'aesthetic' },
  { from:'melodic_techno',      to:'anyma',               strength:2, type:'aesthetic' },

  // ── SWEDEN — DRUMCODE / ADAM BEYER ───────────────────────────────────────
  { from:'detroit_scene',       to:'drumcode',            strength:2, type:'influence' },
  { from:'tresor_records',      to:'drumcode',            strength:2, type:'influence' },
  { from:'adam_beyer',          to:'drumcode',            strength:3, type:'lineage'   },
  { from:'drumcode',            to:'adam_beyer',          strength:3, type:'roster'    },
  { from:'berghain',            to:'adam_beyer',          strength:2, type:'roster'    },

  // ── DETROIT — FXHE / OMAR S / KYLE HALL ──────────────────────────────────
  { from:'detroit_scene',       to:'omar_s',              strength:3, type:'lineage'   },
  { from:'detroit_scene',       to:'fxhe',                strength:3, type:'lineage'   },
  { from:'detroit_scene',       to:'kyle_hall',           strength:3, type:'lineage'   },
  { from:'omar_s',              to:'fxhe',                strength:3, type:'lineage'   },
  { from:'fxhe',                to:'omar_s',              strength:3, type:'roster'    },
  { from:'fxhe',                to:'kyle_hall',           strength:3, type:'roster'    },
  { from:'moodymann',           to:'omar_s',              strength:2, type:'aesthetic' },
  { from:'carl_craig',          to:'kyle_hall',           strength:2, type:'influence' },

  // ── FOOTWORK ─────────────────────────────────────────────────────────────
  { from:'chicago_scene',       to:'footwork',            strength:3, type:'lineage'   },
  { from:'teklife',             to:'footwork',            strength:3, type:'lineage'   },
  { from:'footwork',            to:'dj_rashad',           strength:3, type:'lineage'   },
  { from:'footwork',            to:'jlin',                strength:3, type:'lineage'   },

  // ── MOMENTS — MAYDAY / ADE / DEKMANTEL FEST ──────────────────────────────
  { from:'detroit_scene',       to:'mayday_rave',         strength:2, type:'influence' },
  { from:'underground_resistance',to:'mayday_rave',       strength:2, type:'influence' },
  { from:'tresor_club',         to:'mayday_rave',         strength:2, type:'aesthetic' },
  { from:'berlin_zero_hour',    to:'mayday_rave',         strength:2, type:'aesthetic' },
  { from:'mayday_rave',         to:'tresor_records',      strength:2, type:'aesthetic' },
  { from:'dekmantel',           to:'dekmantel_fest',      strength:3, type:'lineage'   },
  { from:'dekmantel_fest',      to:'dekmantel',           strength:3, type:'lineage'   },
  { from:'trouw',               to:'dekmantel_fest',      strength:2, type:'aesthetic' },
  { from:'clone',               to:'dekmantel_fest',      strength:2, type:'aesthetic' },
  { from:'ade',                 to:'dekmantel_fest',      strength:2, type:'lineage'   },
  { from:'clone',               to:'ade',                 strength:2, type:'aesthetic' },
  { from:'rush_hour',           to:'ade',                 strength:2, type:'aesthetic' },
  { from:'detroit_scene',       to:'ade',                 strength:2, type:'influence' },

  // ── KOSMISCHE / BERLIN SCHOOL ─────────────────────────────────────────────
  { from:'kraftwerk',           to:'tangerine_dream',     strength:2, type:'aesthetic' },
  { from:'tangerine_dream',     to:'cluster',             strength:2, type:'aesthetic' },
  { from:'tangerine_dream',     to:'ambient',             strength:3, type:'influence' },
  { from:'tangerine_dream',     to:'brian_eno',           strength:2, type:'influence' },
  { from:'tangerine_dream',     to:'berlin_zero_hour',    strength:2, type:'lineage'   },
  { from:'cluster',             to:'brian_eno',           strength:3, type:'lineage'   },
  { from:'brian_eno',           to:'cluster',             strength:3, type:'lineage'   },
  { from:'cluster',             to:'ambient',             strength:3, type:'influence' },
  { from:'cluster',             to:'basicchannel',        strength:2, type:'influence' },
  { from:'kraftwerk',           to:'cluster',             strength:2, type:'aesthetic' },

  // ── FJAAK ────────────────────────────────────────────────────────────────
  { from:'modeselektor',        to:'fjaak',               strength:2, type:'roster'    },
  { from:'rodhad',              to:'fjaak',               strength:2, type:'collab'    },

  // ── MODERAT ──────────────────────────────────────────────────────────────
  { from:'modeselektor',        to:'moderat',             strength:3, type:'lineage'   },
  { from:'apparat',             to:'moderat',             strength:3, type:'lineage'   },
  { from:'bpitch',              to:'moderat',             strength:3, type:'roster'    },
  { from:'berlin_zero_hour',    to:'moderat',             strength:1, type:'aesthetic' },

  // ── BOYS NOIZE ────────────────────────────────────────────────────────────
  { from:'bpitch',              to:'boys_noize',          strength:1, type:'aesthetic' },
  { from:'daft_punk',           to:'boys_noize',          strength:2, type:'influence' },
  { from:'detroit_scene',       to:'boys_noize',          strength:2, type:'influence' },
  { from:'hard_techno',         to:'boys_noize',          strength:2, type:'influence' },

  // ── PERMANENT VACATION ────────────────────────────────────────────────────
  { from:'italo_disco',         to:'permanent_vacation',  strength:3, type:'influence' },
  { from:'cosmic_disco_style',  to:'permanent_vacation',  strength:3, type:'influence' },
  { from:'permanent_vacation',  to:'todd_terje',          strength:3, type:'roster'    },
  { from:'permanent_vacation',  to:'prins_thomas',        strength:3, type:'roster'    },
  { from:'permanent_vacation',  to:'dj_koze',             strength:2, type:'roster'    },
  { from:'disco',               to:'permanent_vacation',  strength:2, type:'influence' },

  // ── PALMS TRAX / EMOTIONAL RESCUE ─────────────────────────────────────────
  { from:'dekmantel',           to:'palms_trax',          strength:3, type:'roster'    },
  { from:'lobster_theremin',    to:'palms_trax',          strength:3, type:'roster'    },
  { from:'emotional_rescue',    to:'palms_trax',          strength:3, type:'roster'    },
  { from:'chicago_scene',       to:'palms_trax',          strength:2, type:'influence' },
  { from:'cosmic_disco_style',  to:'palms_trax',          strength:2, type:'influence' },
  { from:'italo_disco',         to:'palms_trax',          strength:2, type:'influence' },
  { from:'italo_disco',         to:'emotional_rescue',    strength:3, type:'influence' },
  { from:'cosmic_disco_style',  to:'emotional_rescue',    strength:3, type:'influence' },
  { from:'permanent_vacation',  to:'emotional_rescue',    strength:2, type:'aesthetic' },
  { from:'chicago_scene',       to:'emotional_rescue',    strength:2, type:'influence' },
  { from:'hivern_discs',        to:'emotional_rescue',    strength:2, type:'aesthetic' },

  // ── ARKAJO / DORISBURG / KONTRA-MUSIK ─────────────────────────────────────
  { from:'studio_barnhus',      to:'arkajo',              strength:3, type:'roster'    },
  { from:'innervisions',        to:'arkajo',              strength:1, type:'aesthetic' },
  { from:'dorisburg',           to:'kontra_musik',        strength:3, type:'lineage'   },
  { from:'kontra_musik',        to:'dorisburg',           strength:3, type:'roster'    },
  { from:'basicchannel',        to:'dorisburg',           strength:2, type:'influence' },
  { from:'dial',                to:'dorisburg',           strength:2, type:'aesthetic' },
  { from:'giegling',            to:'dorisburg',           strength:1, type:'aesthetic' },
  { from:'puce_mary',           to:'kontra_musik',        strength:3, type:'roster'    },
  { from:'northern_electronics',to:'kontra_musik',        strength:2, type:'aesthetic' },
  { from:'studio_barnhus',      to:'kontra_musik',        strength:2, type:'aesthetic' },

  // ── SÓNAR FESTIVAL ────────────────────────────────────────────────────────
  { from:'hivern_discs',        to:'sonar_festival',      strength:3, type:'roster'    },
  { from:'john_talabot',        to:'sonar_festival',      strength:3, type:'aesthetic' },
  { from:'aphex_twin',          to:'sonar_festival',      strength:3, type:'aesthetic' },
  { from:'autechre',            to:'sonar_festival',      strength:2, type:'aesthetic' },
  { from:'daft_punk',           to:'sonar_festival',      strength:3, type:'aesthetic' },
  { from:'villalobos',          to:'sonar_festival',      strength:2, type:'aesthetic' },

  // ── SHEFFIELD / EARLY WARP ────────────────────────────────────────────────
  { from:'kraftwerk',           to:'cabaret_voltaire',    strength:2, type:'influence' },
  { from:'cabaret_voltaire',    to:'warp',                strength:3, type:'lineage'   },
  { from:'cabaret_voltaire',    to:'acid_house',          strength:2, type:'influence' },
  { from:'cabaret_voltaire',    to:'ebm',                 strength:3, type:'lineage'   },
  { from:'cabaret_voltaire',    to:'sandwell_district',   strength:2, type:'influence' },
  { from:'lfo',                 to:'warp',                strength:3, type:'roster'    },
  { from:'lfo',                 to:'acid_house',          strength:2, type:'lineage'   },
  { from:'forgemasters',        to:'warp',                strength:3, type:'lineage'   },
  { from:'the_black_dog',       to:'warp',                strength:3, type:'roster'    },
  { from:'the_black_dog',       to:'plaid',               strength:3, type:'lineage'   },
  { from:'plaid',               to:'the_black_dog',       strength:3, type:'lineage'   },
  { from:'808_state',           to:'acid_house',          strength:3, type:'lineage'   },
  { from:'808_state',           to:'hacienda',            strength:3, type:'roster'    },
  { from:'acid_house',          to:'lfo',                 strength:2, type:'influence' },
  { from:'acid_house',          to:'forgemasters',        strength:2, type:'influence' },
  { from:'detroit_scene',       to:'lfo',                 strength:2, type:'influence' },
  { from:'detroit_scene',       to:'808_state',           strength:2, type:'influence' },
  { from:'warp',                to:'808_state',           strength:2, type:'aesthetic' },

  // ── IDM EXPANDED ─────────────────────────────────────────────────────────
  { from:'warp',                to:'squarepusher',        strength:3, type:'roster'    },
  { from:'idm',                 to:'squarepusher',        strength:3, type:'roster'    },
  { from:'idm',                 to:'the_black_dog',       strength:3, type:'roster'    },
  { from:'idm',                 to:'global_communication',strength:3, type:'roster'    },
  { from:'idm',                 to:'venetian_snares',     strength:2, type:'influence' },
  { from:'idm',                 to:'amon_tobin',          strength:2, type:'influence' },
  { from:'idm',                 to:'mu_ziq',              strength:3, type:'roster'    },
  { from:'drum_and_bass',       to:'squarepusher',        strength:2, type:'influence' },
  { from:'aphex_twin',          to:'squarepusher',        strength:2, type:'aesthetic' },
  { from:'mu_ziq',              to:'planet_mu',           strength:3, type:'lineage'   },
  { from:'planet_mu',           to:'mu_ziq',              strength:3, type:'roster'    },
  { from:'planet_mu',           to:'venetian_snares',     strength:3, type:'roster'    },
  { from:'venetian_snares',     to:'planet_mu',           strength:3, type:'lineage'   },
  { from:'apollo_rec',          to:'global_communication',strength:3, type:'roster'    },
  { from:'ambient_techno',      to:'global_communication',strength:3, type:'aesthetic' },
  { from:'ninja_tune',          to:'amon_tobin',          strength:3, type:'roster'    },
  { from:'drum_and_bass',       to:'amon_tobin',          strength:2, type:'influence' },
  { from:'warp',                to:'the_black_dog',       strength:3, type:'roster'    },

  // ── FLYING LOTUS / BRAINFEEDER ────────────────────────────────────────────
  { from:'warp',                to:'flying_lotus',        strength:3, type:'roster'    },
  { from:'flying_lotus',        to:'brainfeeder',         strength:3, type:'lineage'   },
  { from:'brainfeeder',         to:'flying_lotus',        strength:3, type:'roster'    },
  { from:'idm',                 to:'flying_lotus',        strength:2, type:'influence' },
  { from:'footwork',            to:'flying_lotus',        strength:2, type:'influence' },
  { from:'four_tet',            to:'flying_lotus',        strength:2, type:'aesthetic' },
  { from:'ninja_tune',          to:'brainfeeder',         strength:1, type:'aesthetic' },

  // ── CURRENT AMERICA ───────────────────────────────────────────────────────
  { from:'chicago_scene',       to:'the_black_madonna',   strength:3, type:'lineage'   },
  { from:'chicago_scene',       to:'honey_dijon',         strength:3, type:'lineage'   },
  { from:'chicago_scene',       to:'hieroglyphic_being',  strength:3, type:'lineage'   },
  { from:'heard',               to:'the_black_madonna',   strength:3, type:'influence' },
  { from:'heard',               to:'honey_dijon',         strength:3, type:'influence' },
  { from:'warehouse',           to:'honey_dijon',         strength:2, type:'lineage'   },
  { from:'queer_dancefloor',    to:'the_black_madonna',   strength:3, type:'influence' },
  { from:'queer_dancefloor',    to:'honey_dijon',         strength:3, type:'influence' },
  { from:'berghain',            to:'the_black_madonna',   strength:2, type:'roster'    },
  { from:'fabric',              to:'the_black_madonna',   strength:2, type:'roster'    },
  { from:'lies_records',        to:'umfang',              strength:2, type:'aesthetic' },
  { from:'chicago_scene',       to:'umfang',              strength:2, type:'influence' },
  { from:'chicago_scene',       to:'avalon_emerson',      strength:2, type:'influence' },
  { from:'lobster_theremin',    to:'avalon_emerson',      strength:2, type:'aesthetic' },
  { from:'dekmantel',           to:'avalon_emerson',      strength:2, type:'roster'    },
  { from:'detroit_scene',       to:'jay_daniel',          strength:3, type:'lineage'   },
  { from:'moodymann',           to:'jay_daniel',          strength:2, type:'influence' },
  { from:'omar_s',              to:'jay_daniel',          strength:2, type:'influence' },

  // ── SCANDINAVIA EXPANDED ─────────────────────────────────────────────────
  { from:'kontra_musik',        to:'varg',                strength:3, type:'roster'    },
  { from:'northern_electronics',to:'varg',                strength:2, type:'aesthetic' },
  { from:'posh_isolation',      to:'varg',                strength:2, type:'aesthetic' },
  { from:'avian',               to:'shxcxchcxsh',         strength:3, type:'roster'    },
  { from:'avian',               to:'skee_mask',           strength:3, type:'roster'    },
  { from:'surgeon',             to:'avian',               strength:3, type:'lineage'   },
  { from:'downwards',           to:'avian',               strength:2, type:'lineage'   },
  { from:'kontra_musik',        to:'shxcxchcxsh',         strength:2, type:'aesthetic' },
  { from:'sub_club',            to:'courtesy',            strength:2, type:'roster'    },
  { from:'posh_isolation',      to:'courtesy',            strength:2, type:'aesthetic' },
  { from:'numbers',             to:'courtesy',            strength:2, type:'aesthetic' },
  { from:'berghain',            to:'courtesy',            strength:2, type:'roster'    },
  { from:'drumcode',            to:'par_grindvik',        strength:3, type:'roster'    },
  { from:'berghain',            to:'par_grindvik',        strength:2, type:'roster'    },

  // ── SERBIA ────────────────────────────────────────────────────────────────
  { from:'berghain',            to:'tijana_t',            strength:2, type:'roster'    },
  { from:'ostgut_ton',          to:'tijana_t',            strength:3, type:'roster'    },
  { from:'tijana_t',            to:'drugstore',           strength:3, type:'roster'    },
  { from:'tresor_records',      to:'drugstore',           strength:2, type:'influence' },
  { from:'berghain',            to:'drugstore',           strength:2, type:'aesthetic' },
  { from:'detroit_scene',       to:'exit_festival',       strength:2, type:'influence' },
  { from:'berghain',            to:'exit_festival',       strength:2, type:'roster'    },
  { from:'drugstore',           to:'exit_festival',       strength:2, type:'lineage'   },

  // ── PORTUGAL / KUDURO ─────────────────────────────────────────────────────
  { from:'black_club_culture',  to:'kuduro',              strength:2, type:'lineage'   },
  { from:'baile_funk',          to:'kuduro',              strength:2, type:'aesthetic' },
  { from:'kuduro',              to:'principe',            strength:3, type:'lineage'   },
  { from:'principe',            to:'dj_marfox',           strength:3, type:'roster'    },
  { from:'kuduro',              to:'dj_marfox',           strength:3, type:'lineage'   },
  { from:'non_worldwide',       to:'principe',            strength:2, type:'aesthetic' },
  { from:'pan_label',           to:'principe',            strength:2, type:'aesthetic' },

  // ── FRANCE EXPANDED ──────────────────────────────────────────────────────
  { from:'tresor_records',      to:'concrete_paris',      strength:2, type:'influence' },
  { from:'berghain',            to:'concrete_paris',      strength:2, type:'aesthetic' },
  { from:'rex_club',            to:'concrete_paris',      strength:2, type:'lineage'   },
  { from:'daft_punk',           to:'club_cheval',         strength:2, type:'influence' },
  { from:'ed_banger',           to:'club_cheval',         strength:2, type:'influence' },
  { from:'french_touch',        to:'club_cheval',         strength:2, type:'lineage'   },
  { from:'correspondant',       to:'antinote',            strength:2, type:'aesthetic' },
  { from:'hivern_discs',        to:'antinote',            strength:2, type:'aesthetic' },
  { from:'permanent_vacation',  to:'antinote',            strength:2, type:'aesthetic' },
  { from:'chicago_scene',       to:'antinote',            strength:2, type:'influence' },

  // ── ASIA EXPANDED ─────────────────────────────────────────────────────────
  { from:'detroit_scene',       to:'white_shanghai',      strength:2, type:'influence' },
  { from:'berghain',            to:'white_shanghai',      strength:2, type:'aesthetic' },
  { from:'tresor_records',      to:'white_shanghai',      strength:2, type:'influence' },
  { from:'womb_tokyo',          to:'white_shanghai',      strength:2, type:'aesthetic' },
  { from:'pan_label',           to:'genome_666',          strength:2, type:'aesthetic' },
  { from:'non_worldwide',       to:'genome_666',          strength:2, type:'aesthetic' },
  { from:'white_shanghai',      to:'yeti_out',            strength:2, type:'aesthetic' },
  { from:'cakeshop',            to:'yeti_out',            strength:2, type:'aesthetic' },
  { from:'womb_tokyo',          to:'yeti_out',            strength:2, type:'aesthetic' },

  // ── UK RAVE CLASSICS ──────────────────────────────────────────────────────
  { from:'kraftwerk',           to:'new_order',           strength:2, type:'influence' },
  { from:'giorgio_moroder',     to:'new_order',           strength:2, type:'influence' },
  { from:'hacienda',            to:'new_order',           strength:3, type:'roster'    },
  { from:'new_order',           to:'hacienda',            strength:3, type:'lineage'   },
  { from:'acid_house',          to:'new_order',           strength:2, type:'influence' },
  { from:'new_order',           to:'daft_punk',           strength:2, type:'influence' },
  { from:'new_order',           to:'acid_house',          strength:2, type:'influence' },
  { from:'acid_house',          to:'underworld',          strength:3, type:'lineage'   },
  { from:'hacienda',            to:'underworld',          strength:2, type:'roster'    },
  { from:'fabric',              to:'underworld',          strength:2, type:'roster'    },
  { from:'underworld',          to:'four_tet',            strength:1, type:'influence' },
  { from:'acid_house',          to:'chemical_brothers',   strength:3, type:'lineage'   },
  { from:'hacienda',            to:'chemical_brothers',   strength:3, type:'roster'    },
  { from:'new_order',           to:'chemical_brothers',   strength:2, type:'influence' },
  { from:'chemical_brothers',   to:'daft_punk',           strength:2, type:'aesthetic' },
  { from:'chemical_brothers',   to:'four_tet',            strength:1, type:'influence' },

  // ── DETROIT EXPANDED ──────────────────────────────────────────────────────
  { from:'detroit_scene',       to:'dopplereffekt',       strength:3, type:'lineage'   },
  { from:'drexciya',            to:'dopplereffekt',       strength:3, type:'lineage'   },
  { from:'dopplereffekt',       to:'drexciya',            strength:3, type:'lineage'   },
  { from:'electro',             to:'dopplereffekt',       strength:3, type:'lineage'   },
  { from:'kraftwerk',           to:'dopplereffekt',       strength:2, type:'influence' },
  { from:'dopplereffekt',       to:'adult_dot',           strength:2, type:'aesthetic' },
  { from:'detroit_scene',       to:'adult_dot',           strength:3, type:'lineage'   },
  { from:'dance_mania',         to:'adult_dot',           strength:1, type:'influence' },
  { from:'chicago_scene',       to:'green_velvet',        strength:3, type:'lineage'   },
  { from:'acid',                to:'green_velvet',        strength:3, type:'lineage'   },
  { from:'dance_mania',         to:'green_velvet',        strength:2, type:'aesthetic' },
  { from:'trax',                to:'green_velvet',        strength:1, type:'aesthetic' },
  { from:'detroit_scene',       to:'daniel_bell',         strength:3, type:'lineage'   },
  { from:'minimal_house',       to:'daniel_bell',         strength:3, type:'lineage'   },
  { from:'tresor_records',      to:'daniel_bell',         strength:3, type:'roster'    },
  { from:'daniel_bell',         to:'villalobos',          strength:2, type:'influence' },
  { from:'daniel_bell',         to:'marco_carola',        strength:2, type:'influence' },

  // ── GERMANY EXPANDED ─────────────────────────────────────────────────────
  { from:'basicchannel',        to:'pole',                strength:3, type:'influence' },
  { from:'chain_reaction',      to:'pole',                strength:2, type:'influence' },
  { from:'berlin_zero_hour',    to:'pole',                strength:2, type:'aesthetic' },
  { from:'kompakt',             to:'mouse_on_mars',       strength:2, type:'aesthetic' },
  { from:'idm',                 to:'mouse_on_mars',       strength:2, type:'influence' },
  { from:'autechre',            to:'mouse_on_mars',       strength:2, type:'aesthetic' },
  { from:'dj_hell',             to:'miss_kittin',         strength:3, type:'aesthetic' },
  { from:'dj_hell',             to:'the_hacker',          strength:3, type:'aesthetic' },
  { from:'dj_hell',             to:'dopplereffekt',       strength:3, type:'aesthetic' },
  { from:'electro',             to:'dj_hell',             strength:2, type:'lineage'   },
  { from:'detroit_scene',       to:'dj_hell',             strength:2, type:'influence' },
  { from:'ebm',                 to:'dj_hell',             strength:2, type:'influence' },

  // ── NETHERLANDS — HARD ELECTRO ────────────────────────────────────────────
  { from:'clone',               to:'i_f',                 strength:3, type:'roster'    },
  { from:'electro',             to:'i_f',                 strength:3, type:'lineage'   },
  { from:'detroit_scene',       to:'i_f',                 strength:2, type:'influence' },
  { from:'bunker_records',      to:'i_f',                 strength:3, type:'roster'    },
  { from:'bunker_records',      to:'legowelt',            strength:3, type:'roster'    },
  { from:'electro',             to:'bunker_records',      strength:3, type:'lineage'   },
  { from:'clone',               to:'bunker_records',      strength:2, type:'aesthetic' },

  // ── FRANCE ELECTROCLASH ───────────────────────────────────────────────────
  { from:'miss_kittin',         to:'the_hacker',          strength:3, type:'aesthetic' },
  { from:'the_hacker',         to:'miss_kittin',          strength:3, type:'aesthetic' },
  { from:'ebm',                 to:'the_hacker',          strength:3, type:'influence' },
  { from:'ebm',                 to:'miss_kittin',         strength:2, type:'influence' },
  { from:'electro',             to:'miss_kittin',         strength:2, type:'influence' },
  { from:'french_touch',        to:'miss_kittin',         strength:1, type:'aesthetic' },

  // ── MONTREAL ─────────────────────────────────────────────────────────────
  { from:'tiga',                to:'turbo_recordings',    strength:3, type:'lineage'   },
  { from:'turbo_recordings',    to:'tiga',                strength:3, type:'roster'    },
  { from:'turbo_recordings',    to:'boys_noize',          strength:2, type:'roster'    },
  { from:'dj_hell',             to:'tiga',                strength:2, type:'aesthetic' },
  { from:'miss_kittin',         to:'tiga',                strength:2, type:'aesthetic' },
  { from:'cocoon',              to:'tiga',                strength:2, type:'aesthetic' },

  // ── USA — PHILADELPHIA ────────────────────────────────────────────────────
  { from:'acid',                to:'josh_wink',           strength:3, type:'lineage'   },
  { from:'chicago_scene',       to:'josh_wink',           strength:2, type:'influence' },
  { from:'fabric',              to:'josh_wink',           strength:2, type:'roster'    },

  // ── AUSTRIA ───────────────────────────────────────────────────────────────
  { from:'kompakt',             to:'elektro_guzzi',       strength:2, type:'aesthetic' },
  { from:'perlon',              to:'elektro_guzzi',       strength:2, type:'aesthetic' },
  { from:'berghain',            to:'elektro_guzzi',       strength:2, type:'roster'    },
  { from:'minimal_house',       to:'elektro_guzzi',       strength:2, type:'influence' },

  // ── KOREA EXPANDED ───────────────────────────────────────────────────────
  { from:'chicago_scene',       to:'yaeji',               strength:2, type:'influence' },
  { from:'queer_dancefloor',    to:'yaeji',               strength:2, type:'influence' },
  { from:'cakeshop',            to:'yaeji',               strength:2, type:'roster'    },
  { from:'four_tet',            to:'yaeji',               strength:2, type:'influence' },
  { from:'chicago_scene',       to:'park_hye_jin',        strength:2, type:'influence' },
  { from:'ninja_tune',          to:'park_hye_jin',        strength:3, type:'roster'    },
  { from:'cakeshop',            to:'park_hye_jin',        strength:2, type:'aesthetic' },

  // ── 2020s — BICEP / OVERMONO / FRED AGAIN.. ──────────────────────────────
  { from:'ninja_tune',          to:'bicep',               strength:3, type:'roster'    },
  { from:'four_tet',            to:'bicep',               strength:2, type:'aesthetic' },
  { from:'innervisions',        to:'bicep',               strength:2, type:'aesthetic' },
  { from:'melodic_techno',      to:'bicep',               strength:2, type:'aesthetic' },
  { from:'italo_disco',         to:'bicep',               strength:2, type:'influence' },
  { from:'chicago_scene',       to:'bicep',               strength:2, type:'influence' },
  { from:'bicep',               to:'overmono',            strength:2, type:'aesthetic' },
  { from:'avian',               to:'overmono',            strength:2, type:'aesthetic' },
  { from:'hessle_audio',        to:'overmono',            strength:2, type:'aesthetic' },
  { from:'warp',                to:'overmono',            strength:1, type:'aesthetic' },
  // ── BATU / ILIAN TAPE ─────────────────────────────────────────────────────
  { from:'timedance',           to:'batu',                strength:3, type:'roster'    },
  { from:'hessle_audio',        to:'batu',                strength:2, type:'aesthetic' },
  { from:'livity_sound',        to:'batu',                strength:2, type:'aesthetic' },
  { from:'ilian_tape',          to:'batu',                strength:3, type:'roster'    },
  { from:'ilian_tape',          to:'skee_mask',           strength:3, type:'roster'    },
  { from:'basicchannel',        to:'ilian_tape',          strength:2, type:'influence' },
  { from:'detroit_scene',       to:'ilian_tape',          strength:2, type:'influence' },
  { from:'timedance',           to:'ilian_tape',          strength:2, type:'aesthetic' },
  { from:'hessle_audio',        to:'ilian_tape',          strength:2, type:'aesthetic' },

  // ── HAAi ─────────────────────────────────────────────────────────────────
  { from:'fabric',              to:'haai',                strength:3, type:'roster'    },
  { from:'berghain',            to:'haai',                strength:2, type:'roster'    },
  { from:'concrete_paris',      to:'haai',                strength:2, type:'roster'    },
  { from:'timedance',           to:'haai',                strength:2, type:'aesthetic' },

  // ── EAST AFRICA ───────────────────────────────────────────────────────────
  { from:'pan_label',           to:'kmru',                strength:2, type:'aesthetic' },
  { from:'non_worldwide',       to:'kmru',                strength:2, type:'aesthetic' },
  { from:'warp',                to:'kmru',                strength:3, type:'roster'    },
  { from:'pan_label',           to:'slikback',            strength:3, type:'roster'    },
  { from:'footwork',            to:'slikback',            strength:2, type:'influence' },
  { from:'dj_lag',              to:'slikback',            strength:2, type:'aesthetic' },
  { from:'dj_lag',              to:'kmru',                strength:2, type:'aesthetic' },
  { from:'non_worldwide',       to:'slikback',            strength:2, type:'aesthetic' },

  // ── NEW ARTISTS ──────────────────────────────────────────────────────────
  // Mira Schwarzwälder
  { from:'innervisions',        to:'mira_schwarzwalder',  strength:2, type:'aesthetic' },
  { from:'watergate',           to:'mira_schwarzwalder',  strength:2, type:'aesthetic' },
  { from:'projectindigo',       to:'mira_schwarzwalder',  strength:2, type:'aesthetic' },
  { from:'orion',               to:'mira_schwarzwalder',  strength:2, type:'aesthetic' },
  { from:'berghain',            to:'mira_schwarzwalder',  strength:2, type:'roster'    },

  // Chaos in the CBD
  { from:'rush_hour',           to:'chaos_in_the_cbd',    strength:2, type:'roster'    },
  { from:'deep_house',          to:'chaos_in_the_cbd',    strength:3, type:'lineage'   },
  { from:'four_tet',            to:'chaos_in_the_cbd',    strength:2, type:'aesthetic' },
  { from:'floating_points',     to:'chaos_in_the_cbd',    strength:2, type:'aesthetic' },
  { from:'smallville',          to:'chaos_in_the_cbd',    strength:2, type:'aesthetic' },
  { from:'heard',               to:'chaos_in_the_cbd',    strength:2, type:'influence' },

  // Anja Schneider + Mobilee
  { from:'bpitch',              to:'anja_schneider',      strength:2, type:'roster'    },
  { from:'anja_schneider',      to:'mobilee',             strength:3, type:'lineage'   },
  { from:'mobilee',             to:'anja_schneider',      strength:3, type:'roster'    },
  { from:'watergate',           to:'anja_schneider',      strength:3, type:'roster'    },
  { from:'innervisions',        to:'mobilee',             strength:2, type:'aesthetic' },
  { from:'kompakt',             to:'mobilee',             strength:2, type:'aesthetic' },

  // Harrison BDP
  { from:'lobster_theremin',    to:'harrison_bdp',        strength:2, type:'aesthetic' },
  { from:'hessle_audio',        to:'harrison_bdp',        strength:2, type:'aesthetic' },
  { from:'deep_house',          to:'harrison_bdp',        strength:2, type:'lineage'   },

  // Lee Burridge
  { from:'innervisions',        to:'lee_burridge',        strength:2, type:'aesthetic' },
  { from:'ibiza',               to:'lee_burridge',        strength:2, type:'roster'    },
  { from:'progressive_house',   to:'lee_burridge',        strength:2, type:'lineage'   },
  { from:'melodic_techno',      to:'lee_burridge',        strength:2, type:'aesthetic' },
  { from:'fabric',              to:'lee_burridge',        strength:2, type:'roster'    },

  // Mano Le Tough
  { from:'permanent_vacation',  to:'mano_le_tough',       strength:3, type:'roster'    },
  { from:'innervisions',        to:'mano_le_tough',       strength:2, type:'aesthetic' },
  { from:'melodic_techno',      to:'mano_le_tough',       strength:2, type:'aesthetic' },
  { from:'watergate',           to:'mano_le_tough',       strength:2, type:'aesthetic' },

  // Midland
  { from:'hessle_audio',        to:'midland',             strength:2, type:'aesthetic' },
  { from:'lobster_theremin',    to:'midland',             strength:2, type:'aesthetic' },
  { from:'fabric',              to:'midland',             strength:2, type:'roster'    },
  { from:'deep_house',          to:'midland',             strength:2, type:'lineage'   },
  { from:'acid_house',          to:'midland',             strength:2, type:'influence' },

  // Moloko
  { from:'forgemasters',        to:'moloko',              strength:2, type:'aesthetic' },
  { from:'new_order',           to:'moloko',              strength:2, type:'influence' },
  { from:'acid_house',          to:'moloko',              strength:2, type:'influence' },
  { from:'chicago_scene',       to:'moloko',              strength:2, type:'influence' },
  { from:'hacienda',            to:'moloko',              strength:2, type:'aesthetic' },

  // Oxia
  { from:'minimal_house',       to:'oxia',                strength:3, type:'lineage'   },
  { from:'kompakt',             to:'oxia',                strength:2, type:'aesthetic' },
  { from:'villalobos',          to:'oxia',                strength:2, type:'aesthetic' },
  { from:'daniel_bell',         to:'oxia',                strength:2, type:'influence' },

  // Pavel Petrov
  { from:'kompakt',             to:'pavel_petrov',        strength:2, type:'roster'    },
  { from:'innervisions',        to:'pavel_petrov',        strength:2, type:'aesthetic' },
  { from:'dial',                to:'pavel_petrov',        strength:2, type:'aesthetic' },
  { from:'sonar_festival',      to:'pavel_petrov',        strength:2, type:'aesthetic' },

  // ── ROBERT OWENS / FLOORPLAN ─────────────────────────────────────────────
  { from:'chicago_scene',       to:'robert_owens',        strength:3, type:'lineage'   },
  { from:'heard',               to:'robert_owens',        strength:3, type:'aesthetic' },
  { from:'trax',                to:'robert_owens',        strength:3, type:'roster'    },
  { from:'warehouse',           to:'robert_owens',        strength:2, type:'aesthetic' },
  { from:'deep_house',          to:'robert_owens',        strength:3, type:'lineage'   },
  { from:'black_club_culture',  to:'robert_owens',        strength:3, type:'lineage'   },

  { from:'robert_hood',         to:'floorplan',           strength:3, type:'lineage'   },
  { from:'mplant',              to:'floorplan',           strength:3, type:'roster'    },
  { from:'innervisions',        to:'floorplan',           strength:3, type:'roster'    },
  { from:'deep_house',          to:'floorplan',           strength:3, type:'lineage'   },
  { from:'chicago_scene',       to:'floorplan',           strength:2, type:'influence' },
  { from:'black_club_culture',  to:'floorplan',           strength:3, type:'influence' },
  { from:'robert_owens',        to:'floorplan',           strength:2, type:'aesthetic' },

  { from:'mobilee',             to:'sebo_k',              strength:3, type:'roster'    },
  { from:'watergate',           to:'sebo_k',              strength:3, type:'roster'    },
  { from:'deep_house',          to:'sebo_k',              strength:3, type:'lineage'   },
  { from:'chicago_scene',       to:'sebo_k',              strength:2, type:'influence' },
  { from:'innervisions',        to:'sebo_k',              strength:2, type:'aesthetic' },

  // ── CHICAGO DEEP ─────────────────────────────────────────────────────────
  { from:'chicago_scene',       to:'derrick_carter',      strength:3, type:'lineage'   },
  { from:'smartbar',            to:'derrick_carter',      strength:3, type:'roster'    },
  { from:'heard',               to:'derrick_carter',      strength:2, type:'influence' },
  { from:'deep_house',          to:'derrick_carter',      strength:3, type:'lineage'   },
  { from:'chicago_scene',       to:'boo_williams',        strength:3, type:'lineage'   },
  { from:'deep_house',          to:'boo_williams',        strength:3, type:'lineage'   },
  { from:'heard',               to:'boo_williams',        strength:3, type:'influence' },
  { from:'smallville',          to:'boo_williams',        strength:2, type:'roster'    },
  { from:'chicago_scene',       to:'glenn_underground',   strength:3, type:'lineage'   },
  { from:'deep_house',          to:'glenn_underground',   strength:3, type:'lineage'   },
  { from:'heard',               to:'glenn_underground',   strength:3, type:'influence' },
  { from:'derrick_carter',      to:'glenn_underground',   strength:2, type:'aesthetic' },

  // ── NYC HOUSE ─────────────────────────────────────────────────────────────
  { from:'nyc_scene',           to:'todd_terry',          strength:3, type:'lineage'   },
  { from:'chicago_scene',       to:'todd_terry',          strength:2, type:'influence' },
  { from:'nyc_scene',           to:'mood_ii_swing',       strength:3, type:'lineage'   },
  { from:'paradise_garage',     to:'mood_ii_swing',       strength:2, type:'influence' },
  { from:'deep_house',          to:'mood_ii_swing',       strength:3, type:'lineage'   },
  { from:'maw',                 to:'mood_ii_swing',       strength:2, type:'aesthetic' },
  { from:'nyc_scene',           to:'danny_tenaglia',      strength:3, type:'lineage'   },
  { from:'knuckles',            to:'danny_tenaglia',      strength:2, type:'influence' },
  { from:'fabric',              to:'danny_tenaglia',      strength:2, type:'roster'    },
  { from:'deep_house',          to:'danny_tenaglia',      strength:3, type:'lineage'   },

  // ── MIAMI — MURK ──────────────────────────────────────────────────────────
  { from:'chicago_scene',       to:'murk',                strength:2, type:'influence' },
  { from:'nyc_scene',           to:'murk',                strength:2, type:'influence' },
  { from:'deep_house',          to:'murk',                strength:2, type:'lineage'   },
  { from:'daft_punk',           to:'murk',                strength:2, type:'aesthetic' },
  { from:'villalobos',          to:'murk',                strength:2, type:'influence' },

  // ── RUNNING BACK / GERD JANSON ────────────────────────────────────────────
  { from:'gerd_janson',         to:'running_back',        strength:3, type:'lineage'   },
  { from:'running_back',        to:'gerd_janson',         strength:3, type:'roster'    },
  { from:'running_back',        to:'isolee',              strength:3, type:'roster'    },
  { from:'running_back',        to:'move_d',              strength:2, type:'roster'    },
  { from:'running_back',        to:'tornado_wallace',     strength:2, type:'roster'    },
  { from:'deep_house',          to:'gerd_janson',         strength:3, type:'influence' },
  { from:'kompakt',             to:'running_back',        strength:2, type:'aesthetic' },
  { from:'smallville',          to:'running_back',        strength:2, type:'aesthetic' },

  // ── PLASTIC PEOPLE ────────────────────────────────────────────────────────
  { from:'dubstep',             to:'plastic_people',      strength:3, type:'lineage'   },
  { from:'rinse_fm',            to:'plastic_people',      strength:3, type:'aesthetic' },
  { from:'fabric',              to:'plastic_people',      strength:2, type:'aesthetic' },
  { from:'four_tet',            to:'plastic_people',      strength:3, type:'roster'    },
  { from:'floating_points',     to:'plastic_people',      strength:3, type:'roster'    },
  { from:'burial',              to:'plastic_people',      strength:2, type:'aesthetic' },
  { from:'uk_garage',           to:'plastic_people',      strength:2, type:'lineage'   },

  // ── RODRIGUEZ JR. / MOR ELIAN ─────────────────────────────────────────────
  { from:'mobilee',             to:'rodriguez_jr',        strength:3, type:'roster'    },
  { from:'deep_house',          to:'rodriguez_jr',        strength:2, type:'lineage'   },
  { from:'innervisions',        to:'rodriguez_jr',        strength:2, type:'aesthetic' },
  { from:'berghain',            to:'mor_elian',           strength:2, type:'roster'    },
  { from:'concrete_paris',      to:'mor_elian',           strength:2, type:'roster'    },
  { from:'basicchannel',        to:'mor_elian',           strength:2, type:'influence' },
  { from:'pan_label',           to:'mor_elian',           strength:2, type:'aesthetic' },

  // ── DANIEL AVERY / PHANTASY SOUND ─────────────────────────────────────────
  { from:'daniel_avery',        to:'phantasy_sound',      strength:3, type:'lineage'   },
  { from:'phantasy_sound',      to:'daniel_avery',        strength:3, type:'roster'    },
  { from:'acid_house',          to:'daniel_avery',        strength:3, type:'influence' },
  { from:'warp',                to:'daniel_avery',        strength:2, type:'aesthetic' },
  { from:'four_tet',            to:'daniel_avery',        strength:2, type:'aesthetic' },
  { from:'hessle_audio',        to:'daniel_avery',        strength:1, type:'aesthetic' },
  { from:'warp',                to:'phantasy_sound',      strength:2, type:'aesthetic' },

  // ── ISOLÉE ────────────────────────────────────────────────────────────────
  { from:'playhouse',           to:'isolee',              strength:3, type:'roster'    },
  { from:'minimal_house',       to:'isolee',              strength:3, type:'lineage'   },
  { from:'kompakt',             to:'isolee',              strength:2, type:'aesthetic' },
  { from:'villalobos',          to:'isolee',              strength:2, type:'aesthetic' },
  { from:'move_d',              to:'isolee',              strength:2, type:'aesthetic' },

  // ── TORNADO WALLACE / EFFICIENT SPACE ─────────────────────────────────────
  { from:'tornado_wallace',     to:'efficient_space',     strength:3, type:'lineage'   },
  { from:'efficient_space',     to:'tornado_wallace',     strength:3, type:'roster'    },
  { from:'cosmic_disco_style',  to:'tornado_wallace',     strength:3, type:'influence' },
  { from:'permanent_vacation',  to:'tornado_wallace',     strength:2, type:'aesthetic' },
  { from:'italo_disco',         to:'tornado_wallace',     strength:2, type:'influence' },
  { from:'modular_recordings',  to:'efficient_space',     strength:1, type:'aesthetic' },

  { from:'s_a_m',               to:'delaphine',           strength:3, type:'lineage'   },
  { from:'delaphine',           to:'s_a_m',               strength:3, type:'roster'    },
  { from:'deep_house',          to:'s_a_m',               strength:2, type:'lineage'   },

  // ── YOUTUBE CHANNELS ─────────────────────────────────────────────────────
  { from:'mazlow_unknown',      to:'berghain',            strength:2, type:'aesthetic' },
  { from:'mazlow_unknown',      to:'ostgut_ton',          strength:2, type:'aesthetic' },
  { from:'mazlow_unknown',      to:'dystopian',           strength:2, type:'aesthetic' },
  { from:'acidalia',            to:'acid',                strength:3, type:'aesthetic' },
  { from:'acidalia',            to:'chicago_scene',       strength:2, type:'aesthetic' },
  { from:'acidalia',            to:'hard_techno',         strength:2, type:'aesthetic' },
  { from:'slav_channel',        to:'gost_zvuk',           strength:2, type:'aesthetic' },
  { from:'slav_channel',        to:'bassiani',            strength:2, type:'aesthetic' },
  { from:'slav_channel',        to:'cxema',               strength:2, type:'aesthetic' },
  { from:'moskalusk',           to:'ostgut_ton',          strength:2, type:'aesthetic' },
  { from:'moskalusk',           to:'tresor_records',      strength:2, type:'aesthetic' },
  { from:'moskalusk',           to:'gost_zvuk',           strength:2, type:'aesthetic' },
  { from:'verzila',             to:'innervisions',        strength:2, type:'aesthetic' },
  { from:'verzila',             to:'smallville',          strength:2, type:'aesthetic' },
  { from:'verzila',             to:'dial',                strength:2, type:'aesthetic' },

  // ── SPEEDY J ─────────────────────────────────────────────────────────────
  { from:'warp',                to:'speedy_j',            strength:3, type:'roster'    },
  { from:'tresor_records',      to:'speedy_j',            strength:3, type:'roster'    },
  { from:'detroit_scene',       to:'speedy_j',            strength:2, type:'influence' },
  { from:'clone',               to:'speedy_j',            strength:2, type:'aesthetic' },
  { from:'perron',              to:'speedy_j',            strength:2, type:'aesthetic' },

  // ── SPFDJ ─────────────────────────────────────────────────────────────────
  { from:'hard_techno',         to:'spfdj',               strength:3, type:'lineage'   },
  { from:'ebm',                 to:'spfdj',               strength:2, type:'influence' },
  { from:'berghain',            to:'spfdj',               strength:2, type:'roster'    },
  { from:'tresor_records',      to:'spfdj',               strength:1, type:'influence' },
  { from:'token',               to:'spfdj',               strength:1, type:'aesthetic' },

  // ── STOOR (Speedy J live event, Rotterdam) ───────────────────────────────
  { from:'speedy_j',            to:'stoor',               strength:3, type:'lineage'   },
  { from:'speedy_j',            to:'nadia_struwig',       strength:3, type:'aesthetic' },
  { from:'stoor',               to:'nadia_struwig',       strength:3, type:'roster'    },
  { from:'perron',              to:'stoor',               strength:2, type:'aesthetic' },
  { from:'elektro_guzzi',       to:'stoor',               strength:1, type:'aesthetic' },

  // ── NADIA STRUWIG ─────────────────────────────────────────────────────────
  { from:'clone',               to:'nadia_struwig',       strength:2, type:'aesthetic' },
  { from:'basicchannel',        to:'nadia_struwig',       strength:2, type:'influence' },
  { from:'berghain',            to:'nadia_struwig',       strength:2, type:'roster'    },

  // ── UK TECH HOUSE — WIGGLE / PURE SCIENCE ─────────────────────────────────
  { from:'eddie_richards',      to:'wiggle',              strength:3, type:'roster'    },
  { from:'terry_francis',       to:'wiggle',              strength:3, type:'roster'    },
  { from:'nathan_coles',        to:'wiggle',              strength:3, type:'roster'    },
  { from:'mr_c',                to:'wiggle',              strength:2, type:'aesthetic' },
  { from:'wiggle',              to:'tech_house',          strength:3, type:'lineage'   },
  { from:'wiggle',              to:'fabric',              strength:3, type:'lineage'   },
  { from:'eddie_richards',      to:'tech_house',          strength:3, type:'influence' },
  { from:'eddie_richards',      to:'fabric',              strength:2, type:'roster'    },
  { from:'terry_francis',       to:'fabric',              strength:2, type:'roster'    },
  { from:'nathan_coles',        to:'fabric',              strength:2, type:'roster'    },
  { from:'pure_science',        to:'wiggle',              strength:2, type:'aesthetic' },
  { from:'pure_science',        to:'fabric',              strength:3, type:'aesthetic' },
  { from:'pure_science',        to:'tech_house',          strength:2, type:'aesthetic' },
  { from:'mr_c',                to:'tech_house',          strength:3, type:'influence' },
  { from:'acid_house',          to:'eddie_richards',      strength:3, type:'influence' },
  { from:'acid_house',          to:'mr_c',                strength:3, type:'influence' },
  { from:'acid_house',          to:'pure_science',        strength:2, type:'influence' },

  // ── LA FLEUR / MATTHIAS EL MANSOURI ──────────────────────────────────────
  { from:'la_fleur',            to:'dj_koze',             strength:2, type:'influence' },
  { from:'matthias_el_mansouri', to:'panorama_bar',       strength:1, type:'roster'    },

  // ── RYAN ELLIOTT ─────────────────────────────────────────────────────────
  { from:'ryan_elliott',        to:'panorama_bar',        strength:3, type:'roster'    },
  { from:'ryan_elliott',        to:'ostgut_ton',          strength:2, type:'roster'    },

  // ── DJ GREGORY ────────────────────────────────────────────────────────────
  { from:'dj_gregory',          to:'french_touch',        strength:2, type:'aesthetic' },
  { from:'defected',            to:'dj_gregory',          strength:2, type:'roster'    },

  // ── MALA ──────────────────────────────────────────────────────────────────
  { from:'mala',                to:'digital_mystikz',     strength:3, type:'roster'    },
  { from:'mala',                to:'dmz',                 strength:3, type:'roster'    },
  { from:'mala',                to:'dubstep',             strength:3, type:'influence' },

  // ── SIR SPYRO ─────────────────────────────────────────────────────────────
  { from:'sir_spyro',           to:'rinse_fm',            strength:3, type:'roster'    },
  { from:'sir_spyro',           to:'grime',               strength:3, type:'influence' },

  // ── JYOTY ─────────────────────────────────────────────────────────────────
  { from:'jyoty',               to:'rinse_fm',            strength:2, type:'roster'    },

  // ── SKRILLEX ──────────────────────────────────────────────────────────────
  { from:'skrillex',            to:'dubstep',             strength:2, type:'influence' },

  // ── PANCRATIO ─────────────────────────────────────────────────────────────
  { from:'love_on_the_rocks',   to:'pancratio',           strength:2, type:'roster'    },

  // ── PARAMIDA / LOVE ON THE ROCKS ─────────────────────────────────────────
  { from:'paramida',            to:'panorama_bar',        strength:3, type:'roster'    },
  { from:'paramida',            to:'love_on_the_rocks',   strength:3, type:'roster'    },

  // ── LOGIC1000 ─────────────────────────────────────────────────────────────
  { from:'four_tet',            to:'logic1000',           strength:2, type:'influence' },

  // ── DJ SEINFELD ───────────────────────────────────────────────────────────
  { from:'dj_seinfeld',         to:'lobster_theremin',    strength:2, type:'roster'    },
  { from:'dj_seinfeld',         to:'ninja_tune',          strength:2, type:'roster'    },
  { from:'dj_seinfeld',         to:'ross_from_friends',   strength:1, type:'aesthetic' },

  // ── NINA KRAVIZ (id:'ninakraviz') — new connections ─────────────────────
  { from:'ninakraviz',          to:'trip',                strength:3, type:'roster'    },
  { from:'ninakraviz',          to:'berghain',            strength:2, type:'roster'    },
  { from:'ninakraviz',          to:'panorama_bar',        strength:2, type:'roster'    },

  // ── MARCEL DETTMANN (id:'dettmann') — new connections ────────────────────
  { from:'dettmann',            to:'berghain',            strength:3, type:'roster'    },
  { from:'dettmann',            to:'mdr',                 strength:3, type:'roster'    },

  // ── SARA LANDRY ────────────────────────────────────────────────────────────
  { from:'sara_landry',         to:'hard_techno',         strength:2, type:'influence' },
  { from:'sara_landry',         to:'boiler_room',         strength:2, type:'roster'    },

  // ── PARIAH ─────────────────────────────────────────────────────────────────
  { from:'pariah',              to:'hessle_audio',        strength:2, type:'roster'    },

  // ── DJ EZ ──────────────────────────────────────────────────────────────────
  { from:'dj_ez',               to:'uk_garage',           strength:3, type:'influence' },
  { from:'dj_ez',               to:'2step',               strength:2, type:'influence' },
  { from:'dj_ez',               to:'rinse_fm',            strength:2, type:'roster'    },

  // ── JOB JOBSE ──────────────────────────────────────────────────────────────
  { from:'job_jobse',           to:'panorama_bar',        strength:2, type:'roster'    },

  // ── CCL ────────────────────────────────────────────────────────────────────
  { from:'ccl',                 to:'berghain',            strength:2, type:'roster'    },

  // ── VERRACO ────────────────────────────────────────────────────────────────
  { from:'verraco',             to:'timedance',           strength:2, type:'roster'    },

  // ── HUNEE ──────────────────────────────────────────────────────────────────
  { from:'hunee',               to:'rush_hour',           strength:3, type:'roster'    },

  // ── SAMMY VIRJI ────────────────────────────────────────────────────────────
  { from:'sammy_virji',         to:'uk_garage',           strength:2, type:'influence' },
  { from:'sammy_virji',         to:'2step',               strength:2, type:'influence' },

  // ── RICARDO VILLALOBOS (id:'villalobos') — new connections ───────────────
  { from:'villalobos',          to:'cadenza',             strength:2, type:'roster'    },

  // ── RICHIE HAWTIN (id:'hawtin') — new connections ─────────────────────────
  { from:'tresor_records',      to:'hawtin',              strength:2, type:'roster'    },

  // ── DBRIDGE ────────────────────────────────────────────────────────────────
  { from:'dbridge',             to:'metalheadz',          strength:2, type:'roster'    },
  { from:'dbridge',             to:'drum_and_bass',       strength:3, type:'influence' },

  // ── SHANTI CELESTE ─────────────────────────────────────────────────────────
  { from:'shanti_celeste',      to:'timedance',           strength:1, type:'aesthetic' },
  { from:'shanti_celeste',      to:'boiler_room',         strength:2, type:'roster'    },

  // ── BORIS BREJCHA ──────────────────────────────────────────────────────────
  { from:'boris_brejcha',       to:'cocoon',              strength:1, type:'aesthetic' },
  { from:'boris_brejcha',       to:'perlon',              strength:1, type:'aesthetic' },

  // ── INDIRA PAGANOTTO ───────────────────────────────────────────────────────
  { from:'indira_paganotto',    to:'charlotte_de_witte',  strength:2, type:'roster'    },
  { from:'indira_paganotto',    to:'hard_techno',         strength:2, type:'influence' },
  { from:'indira_paganotto',    to:'trip',                strength:1, type:'roster'    },

  // ── KI/KI ──────────────────────────────────────────────────────────────────
  { from:'ki_ki',               to:'panorama_bar',        strength:1, type:'roster'    },

  // ── JORIS VOORN ────────────────────────────────────────────────────────────
  { from:'joris_voorn',         to:'carl_craig',          strength:2, type:'influence' },
  { from:'joris_voorn',         to:'panorama_bar',        strength:2, type:'roster'    },

  // ── POLYGONIA ──────────────────────────────────────────────────────────────
  { from:'polygonia',           to:'berghain',            strength:1, type:'roster'    },

  // ── ALARICO ────────────────────────────────────────────────────────────────
  { from:'alarico',             to:'hard_techno',         strength:2, type:'influence' },

  // ── IGNEZ ──────────────────────────────────────────────────────────────────
  { from:'ignez',               to:'token',               strength:2, type:'roster'    },
  { from:'ignez',               to:'rodhad',              strength:2, type:'aesthetic' },

  // ── SAMA ABDULHADI ─────────────────────────────────────────────────────────
  { from:'sama_abdulhadi',      to:'boiler_room',         strength:3, type:'roster'    },

  // ── MONIKA KRUSE ───────────────────────────────────────────────────────────
  { from:'monika_kruse',        to:'tresor_club',         strength:2, type:'roster'    },
  { from:'monika_kruse',        to:'terminal_m',          strength:3, type:'roster'    },
  { from:'monika_kruse',        to:'berghain',            strength:2, type:'roster'    },

  // ── NOVAH ──────────────────────────────────────────────────────────────────
  { from:'novah',               to:'hard_techno',         strength:2, type:'influence' },

  // ── PURPLE DISCO MACHINE ───────────────────────────────────────────────────
  { from:'purple_disco_machine', to:'daft_punk',          strength:2, type:'influence' },
  { from:'purple_disco_machine', to:'french_touch',       strength:1, type:'aesthetic' },

  // ── TAMA SUMO ──────────────────────────────────────────────────────────────
  { from:'tama_sumo', to:'tresor_club',    strength:3, type:'roster' },
  { from:'tama_sumo', to:'panorama_bar',   strength:3, type:'roster' },
  { from:'tama_sumo', to:'ostgut_ton',     strength:2, type:'roster' },

  // ── LUKE SLATER ────────────────────────────────────────────────────────────
  { from:'luke_slater', to:'berghain',     strength:3, type:'roster' },
  { from:'luke_slater', to:'ostgut_ton',   strength:2, type:'roster' },

  // ── ND_BAUMECKER ───────────────────────────────────────────────────────────
  { from:'nd_baumecker', to:'panorama_bar', strength:3, type:'roster' },
  { from:'nd_baumecker', to:'ostgut_ton',   strength:2, type:'roster' },

  // ── STEFFI ─────────────────────────────────────────────────────────────────
  { from:'steffi', to:'panorama_bar',      strength:3, type:'roster' },
  { from:'steffi', to:'ostgut_ton',        strength:3, type:'roster' },
  { from:'steffi', to:'virginia',          strength:2, type:'aesthetic' },

  // ── VIRGINIA ───────────────────────────────────────────────────────────────
  { from:'virginia', to:'panorama_bar',    strength:3, type:'roster' },
  { from:'virginia', to:'steffi',          strength:2, type:'aesthetic' },

  // ── NORMAN NODGE ───────────────────────────────────────────────────────────
  { from:'norman_nodge', to:'berghain',    strength:3, type:'roster' },
  { from:'norman_nodge', to:'ostgut_ton',  strength:2, type:'roster' },
  { from:'norman_nodge', to:'dettmann',    strength:2, type:'influence' },

  // ── JANE FITZ ──────────────────────────────────────────────────────────────
  { from:'jane_fitz', to:'tresor_club',    strength:2, type:'roster' },
  { from:'jane_fitz', to:'panorama_bar',   strength:2, type:'roster' },
  { from:'jane_fitz', to:'rinse_fm',       strength:2, type:'roster' },

  // ── DC-10 / CIRCOLOCO ──────────────────────────────────────────────────────
  { from:'ibiza',       to:'dc10',         strength:3, type:'lineage' },
  { from:'dc10',        to:'circoloco',    strength:3, type:'lineage' },
  { from:'dc10',        to:'berghain',     strength:2, type:'aesthetic' },  // parallel underground ecosystems
  { from:'circoloco',   to:'berghain',     strength:2, type:'aesthetic' },

  // ── SETH TROXLER ──────────────────────────────────────────────────────────
  { from:'seth_troxler', to:'dc10',         strength:3, type:'roster' },
  { from:'seth_troxler', to:'circoloco',    strength:3, type:'roster' },
  { from:'seth_troxler', to:'panorama_bar', strength:2, type:'roster' },
  { from:'seth_troxler', to:'fabric',       strength:2, type:'roster' },

  // ── TANIA VULCANO ─────────────────────────────────────────────────────────
  { from:'tania_vulcano', to:'circoloco',   strength:3, type:'roster' },
  { from:'tania_vulcano', to:'dc10',        strength:3, type:'roster' },

  // ── LOCO DICE ─────────────────────────────────────────────────────────────
  { from:'loco_dice', to:'circoloco',       strength:3, type:'roster' },
  { from:'loco_dice', to:'dc10',            strength:3, type:'roster' },
  { from:'loco_dice', to:'berghain',        strength:2, type:'roster' },
  { from:'loco_dice', to:'villalobos',      strength:2, type:'aesthetic' },

  // ── MATADOR ───────────────────────────────────────────────────────────────
  { from:'matador', to:'dc10',              strength:2, type:'roster' },
  { from:'matador', to:'circoloco',         strength:2, type:'roster' },
  { from:'matador', to:'berghain',          strength:2, type:'roster' },
  { from:'matador', to:'fabric',            strength:1, type:'roster' },
  { from:'matador', to:'hawtin',            strength:2, type:'aesthetic' },

  // ── CRAIG RICHARDS ────────────────────────────────────────────────────────
  { from:'craig_richards', to:'fabric',     strength:3, type:'roster' },

  // ── ANCIENT METHODS ───────────────────────────────────────────────────────
  { from:'ancient_methods', to:'berghain',  strength:3, type:'roster' },
  { from:'ancient_methods', to:'blawan',    strength:2, type:'aesthetic' },

  // ── CINTHIE ───────────────────────────────────────────────────────────────
  { from:'cinthie', to:'panorama_bar',      strength:3, type:'roster' },

  // ── PAULA TEMPLE ──────────────────────────────────────────────────────────
  { from:'paula_temple', to:'berghain',     strength:2, type:'roster' },
  { from:'paula_temple', to:'surgeon',      strength:1, type:'aesthetic' },

  // ── THE PRODIGY ───────────────────────────────────────────────────────────
  { from:'summer_of_love',  to:'the_prodigy',   strength:3, type:'lineage' },
  { from:'acid',            to:'the_prodigy',   strength:3, type:'influence' },
  { from:'the_prodigy',     to:'chemical_brothers', strength:2, type:'aesthetic' },
  { from:'the_prodigy',     to:'orbital',       strength:2, type:'aesthetic' },
  { from:'the_prodigy',     to:'lfo',           strength:2, type:'aesthetic' },
  { from:'the_prodigy',     to:'drum_and_bass', strength:2, type:'influence' },

  // ── JUAN ATKINS ───────────────────────────────────────────────────────────
  { from:'juan_atkins',     to:'belleville3',   strength:3, type:'lineage' },
  { from:'juan_atkins',     to:'metroplex',     strength:3, type:'roster' },
  { from:'kraftwerk',       to:'juan_atkins',   strength:3, type:'influence' },
  { from:'juan_atkins',     to:'detroit_scene', strength:3, type:'lineage' },
  { from:'juan_atkins',     to:'electro',       strength:3, type:'lineage' },

  // ── MARSHALL JEFFERSON ────────────────────────────────────────────────────
  { from:'marshall_jefferson', to:'chicago_scene', strength:3, type:'lineage' },
  { from:'marshall_jefferson', to:'trax',          strength:3, type:'roster' },
  { from:'marshall_jefferson', to:'dj_international', strength:2, type:'roster' },
  { from:'marshall_jefferson', to:'knuckles',      strength:2, type:'aesthetic' },
  { from:'marshall_jefferson', to:'heard',         strength:2, type:'aesthetic' },
  { from:'marshall_jefferson', to:'robert_owens',  strength:3, type:'collaboration' },

  // ── THE ORB ───────────────────────────────────────────────────────────────
  { from:'brian_eno',       to:'the_orb',       strength:3, type:'influence' },
  { from:'summer_of_love',  to:'the_orb',       strength:2, type:'lineage' },
  { from:'the_orb',         to:'ambient',       strength:3, type:'lineage' },
  { from:'the_orb',         to:'ambient_techno', strength:2, type:'lineage' },
  { from:'the_orb',         to:'global_communication', strength:2, type:'aesthetic' },
  { from:'the_orb',         to:'biosphere',     strength:2, type:'aesthetic' },

  // ── JOHN DIGWEED ──────────────────────────────────────────────────────────
  { from:'john_digweed',    to:'sasha',         strength:3, type:'collaboration' },
  { from:'john_digweed',    to:'progressive_house', strength:3, type:'aesthetic' },
  { from:'john_digweed',    to:'fabric',        strength:2, type:'roster' },

  // ── SPIRAL TRIBE ──────────────────────────────────────────────────────────
  { from:'summer_of_love',  to:'spiral_tribe',  strength:3, type:'lineage' },
  { from:'acid',            to:'spiral_tribe',  strength:2, type:'influence' },
  { from:'spiral_tribe',    to:'orbital',       strength:1, type:'aesthetic' },

  // ── TONY HUMPHRIES ────────────────────────────────────────────────────────
  { from:'tony_humphries',  to:'zanzibar',      strength:3, type:'roster' },
  { from:'tony_humphries',  to:'nyc_scene',     strength:3, type:'lineage' },
  { from:'tony_humphries',  to:'deep_house',    strength:3, type:'aesthetic' },
  { from:'tony_humphries',  to:'levan',         strength:2, type:'aesthetic' },
  { from:'disco',           to:'tony_humphries', strength:2, type:'influence' },

  // ── DJ INTERNATIONAL RECORDS ──────────────────────────────────────────────
  { from:'chicago_scene',   to:'dj_international', strength:3, type:'lineage' },
  { from:'knuckles',        to:'dj_international', strength:2, type:'roster' },
  { from:'marshall_jefferson', to:'dj_international', strength:2, type:'roster' },
  { from:'dj_international', to:'trax',         strength:2, type:'aesthetic' },

  // ── MINISTRY OF SOUND ─────────────────────────────────────────────────────
  { from:'paradise_garage', to:'ministry_of_sound', strength:3, type:'influence' },
  { from:'levan',           to:'ministry_of_sound', strength:2, type:'collaboration' },
  { from:'sasha',           to:'ministry_of_sound', strength:3, type:'roster' },
  { from:'danny_tenaglia',  to:'ministry_of_sound', strength:2, type:'roster' },
  { from:'carl_cox',        to:'ministry_of_sound', strength:2, type:'roster' },
  { from:'ministry_of_sound', to:'progressive_house', strength:3, type:'aesthetic' },
  { from:'ministry_of_sound', to:'drum_and_bass', strength:2, type:'aesthetic' },
  { from:'ministry_of_sound', to:'uk_garage',   strength:2, type:'aesthetic' },

  // ── ZANZIBAR ──────────────────────────────────────────────────────────────
  { from:'zanzibar',        to:'nyc_scene',     strength:3, type:'lineage' },
  { from:'zanzibar',        to:'deep_house',    strength:3, type:'aesthetic' },
  { from:'paradise_garage', to:'zanzibar',      strength:2, type:'aesthetic' },

  // ── TECHNICS SL-1200 ──────────────────────────────────────────────────────
  { from:'roland',          to:'technics_1200', strength:2, type:'aesthetic' },
  { from:'technics_1200',   to:'levan',         strength:2, type:'influence' },
  { from:'technics_1200',   to:'knuckles',      strength:2, type:'influence' },
  { from:'technics_1200',   to:'jeff_mills',    strength:2, type:'influence' },
  { from:'technics_1200',   to:'belleville3',   strength:2, type:'influence' },

  // ── DERRICK MAY ───────────────────────────────────────────────────────────
  { from:'derrick_may',     to:'belleville3',   strength:3, type:'lineage' },
  { from:'derrick_may',     to:'transmat',      strength:3, type:'roster' },
  { from:'kraftwerk',       to:'derrick_may',   strength:3, type:'influence' },
  { from:'derrick_may',     to:'detroit_scene', strength:3, type:'lineage' },
  { from:'juan_atkins',     to:'derrick_may',   strength:3, type:'collaboration' },

  // ── KEVIN SAUNDERSON ──────────────────────────────────────────────────────
  { from:'kevin_saunderson', to:'belleville3',  strength:3, type:'lineage' },
  { from:'kevin_saunderson', to:'kms',          strength:3, type:'roster' },
  { from:'kraftwerk',        to:'kevin_saunderson', strength:3, type:'influence' },
  { from:'kevin_saunderson', to:'detroit_scene', strength:3, type:'lineage' },
  { from:'juan_atkins',      to:'kevin_saunderson', strength:3, type:'collaboration' },

  // ── THE KLF ───────────────────────────────────────────────────────────────
  { from:'summer_of_love',  to:'the_klf',       strength:3, type:'lineage' },
  { from:'acid',            to:'the_klf',       strength:2, type:'influence' },
  { from:'the_klf',         to:'the_orb',       strength:3, type:'collaboration' },
  { from:'the_klf',         to:'ambient',       strength:2, type:'lineage' },

  // ── AFRIKA BAMBAATAA ──────────────────────────────────────────────────────
  { from:'kraftwerk',       to:'afrika_bambaataa', strength:3, type:'influence' },
  { from:'funk',            to:'afrika_bambaataa', strength:2, type:'lineage' },
  { from:'afrika_bambaataa', to:'electro',      strength:3, type:'lineage' },
  { from:'afrika_bambaataa', to:'juan_atkins',  strength:2, type:'influence' },
  { from:'tr808',           to:'afrika_bambaataa', strength:3, type:'influence' },

  // ── DAVID MANCUSO ─────────────────────────────────────────────────────────
  { from:'disco',           to:'david_mancuso', strength:3, type:'lineage' },
  { from:'black_club_culture', to:'david_mancuso', strength:3, type:'lineage' },
  { from:'queer_dancefloor', to:'david_mancuso', strength:3, type:'lineage' },
  { from:'david_mancuso',   to:'levan',         strength:3, type:'influence' },
  { from:'david_mancuso',   to:'knuckles',      strength:3, type:'influence' },
  { from:'david_mancuso',   to:'paradise_garage', strength:3, type:'influence' },
  { from:'david_mancuso',   to:'nyc_scene',     strength:3, type:'lineage' },

  // ── SUN RA ────────────────────────────────────────────────────────────────
  { from:'sun_ra',          to:'afrofuturism',  strength:3, type:'lineage' },
  { from:'funk',            to:'sun_ra',        strength:2, type:'lineage' },
  { from:'sun_ra',          to:'detroit_scene', strength:2, type:'influence' },
  { from:'sun_ra',          to:'belleville3',   strength:2, type:'influence' },

  // ── PAUL OAKENFOLD ────────────────────────────────────────────────────────
  { from:'acid',            to:'paul_oakenfold', strength:3, type:'influence' },
  { from:'summer_of_love',  to:'paul_oakenfold', strength:3, type:'lineage' },
  { from:'paul_oakenfold',  to:'hacienda',      strength:2, type:'roster' },
  { from:'paul_oakenfold',  to:'progressive_house', strength:2, type:'lineage' },
  { from:'paul_oakenfold',  to:'danny_rampling', strength:3, type:'collaboration' },

  // ── DANNY RAMPLING ────────────────────────────────────────────────────────
  { from:'acid',            to:'danny_rampling', strength:3, type:'influence' },
  { from:'summer_of_love',  to:'danny_rampling', strength:3, type:'lineage' },
  { from:'danny_rampling',  to:'shoom',         strength:3, type:'roster' },
  { from:'danny_rampling',  to:'paul_oakenfold', strength:3, type:'collaboration' },

  // ── SHOOM ─────────────────────────────────────────────────────────────────
  { from:'acid',            to:'shoom',         strength:3, type:'lineage' },
  { from:'summer_of_love',  to:'shoom',         strength:3, type:'lineage' },
  { from:'shoom',           to:'hacienda',      strength:2, type:'aesthetic' },

  // ── PRIMAL SCREAM ─────────────────────────────────────────────────────────
  { from:'acid',            to:'primal_scream', strength:3, type:'influence' },
  { from:'weatherall',      to:'primal_scream', strength:3, type:'collaboration' },
  { from:'summer_of_love',  to:'primal_scream', strength:2, type:'influence' },
  { from:'primal_scream',   to:'weatherall',    strength:3, type:'collaboration' },

  // ── JESSE SAUNDERS ────────────────────────────────────────────────────────
  { from:'chicago_scene',   to:'jesse_saunders', strength:3, type:'lineage' },
  { from:'jesse_saunders',  to:'musicbox',      strength:2, type:'roster' },
  { from:'jesse_saunders',  to:'knuckles',      strength:2, type:'aesthetic' },
  { from:'jesse_saunders',  to:'dj_international', strength:2, type:'roster' },

  // ── SUBURBAN KNIGHT ───────────────────────────────────────────────────────
  { from:'detroit_scene',   to:'suburban_knight', strength:3, type:'lineage' },
  { from:'transmat',        to:'suburban_knight', strength:3, type:'roster' },
  { from:'derrick_may',     to:'suburban_knight', strength:2, type:'lineage' },

  // ── STEVE "SILK" HURLEY ───────────────────────────────────────────────────
  { from:'chicago_scene',     to:'steve_silk_hurley', strength:3, type:'lineage' },
  { from:'dj_international',  to:'steve_silk_hurley', strength:3, type:'roster' },
  { from:'jesse_saunders',    to:'steve_silk_hurley', strength:2, type:'aesthetic' },

  // ── FARLEY "JACKMASTER" FUNK ──────────────────────────────────────────────
  { from:'chicago_scene',      to:'farley_jackmaster_funk', strength:3, type:'lineage' },
  { from:'dj_international',   to:'farley_jackmaster_funk', strength:3, type:'roster' },
  { from:'farley_jackmaster_funk', to:'steve_silk_hurley',  strength:2, type:'aesthetic' },

  // ── LIL LOUIS ─────────────────────────────────────────────────────────────
  { from:'chicago_scene',  to:'lil_louis',   strength:3, type:'lineage' },
  { from:'ron_hardy',      to:'lil_louis',   strength:3, type:'lineage' },
  { from:'musicbox',       to:'lil_louis',   strength:3, type:'roster' },

  // ── THE LOFT ──────────────────────────────────────────────────────────────
  { from:'david_mancuso',  to:'the_loft',        strength:3, type:'roster' },
  { from:'the_loft',       to:'levan',            strength:3, type:'lineage' },
  { from:'the_loft',       to:'knuckles',         strength:3, type:'lineage' },
  { from:'the_loft',       to:'paradise_garage',  strength:3, type:'lineage' },
  { from:'the_loft',       to:'warehouse',        strength:3, type:'lineage' },

  // ── FINGERS INC. ──────────────────────────────────────────────────────────
  { from:'larry_heard',    to:'fingers_inc',     strength:3, type:'roster' },
  { from:'robert_owens',   to:'fingers_inc',     strength:3, type:'roster' },
  { from:'chicago_scene',  to:'fingers_inc',     strength:3, type:'lineage' },
  { from:'trax',           to:'fingers_inc',     strength:2, type:'roster' },

  // ── TEN CITY ──────────────────────────────────────────────────────────────
  { from:'chicago_scene',   to:'ten_city',       strength:3, type:'lineage' },
  { from:'dj_international', to:'ten_city',      strength:3, type:'roster' },
  { from:'fingers_inc',     to:'ten_city',       strength:2, type:'aesthetic' },

  // ── MODEL 500 ─────────────────────────────────────────────────────────────
  { from:'juan_atkins',    to:'model_500',       strength:3, type:'roster' },
  { from:'metroplex',      to:'model_500',       strength:3, type:'roster' },
  { from:'detroit_scene',  to:'model_500',       strength:3, type:'lineage' },
  { from:'belleville3',    to:'model_500',       strength:3, type:'lineage' },

  // ── PHOTEK ────────────────────────────────────────────────────────────────
  { from:'grooverider',    to:'photek',          strength:2, type:'aesthetic' },
  { from:'goldie',         to:'photek',          strength:2, type:'aesthetic' },
  { from:'moving_shadow',  to:'photek',          strength:2, type:'influence' },

  // ── LARRY HEARD (MR. FINGERS) ─────────────────────────────────────────────
  { from:'chicago_scene',  to:'larry_heard',     strength:3, type:'lineage' },
  { from:'trax',           to:'larry_heard',     strength:3, type:'roster' },
  { from:'larry_heard',    to:'robert_owens',    strength:3, type:'collaboration' },
  { from:'larry_heard',    to:'musicbox',        strength:2, type:'aesthetic' },

  // ── BASIC CHANNEL ─────────────────────────────────────────────────────────
  { from:'berlin_zero_hour',      to:'basic_channel',  strength:3, type:'lineage' },
  { from:'detroit_scene',         to:'basic_channel',  strength:3, type:'influence' },
  { from:'underground_resistance', to:'basic_channel', strength:2, type:'influence' },
  { from:'basic_channel',         to:'chain_reaction', strength:3, type:'lineage' },

  // ── MASTERS AT WORK ───────────────────────────────────────────────────────
  { from:'nyc_scene',       to:'masters_at_work', strength:3, type:'lineage' },
  { from:'paradise_garage', to:'masters_at_work', strength:3, type:'influence' },
  { from:'levan',           to:'masters_at_work', strength:2, type:'influence' },

  // ── KERRI CHANDLER ────────────────────────────────────────────────────────
  { from:'nyc_scene',      to:'kerri_chandler',  strength:3, type:'lineage' },
  { from:'paradise_garage', to:'kerri_chandler', strength:2, type:'influence' },
  { from:'larry_heard',    to:'kerri_chandler',  strength:2, type:'influence' },

  // ── CYBOTRON ──────────────────────────────────────────────────────────────
  { from:'juan_atkins',    to:'cybotron',        strength:3, type:'roster' },
  { from:'detroit_scene',  to:'cybotron',        strength:3, type:'lineage' },
  { from:'kraftwerk',      to:'cybotron',        strength:3, type:'influence' },
  { from:'cybotron',       to:'model_500',       strength:3, type:'lineage' },
  { from:'cybotron',       to:'belleville3',     strength:3, type:'lineage' },

  // ── INNER CITY ────────────────────────────────────────────────────────────
  { from:'kevin_saunderson', to:'inner_city',    strength:3, type:'roster' },
  { from:'kms',              to:'inner_city',    strength:3, type:'roster' },
  { from:'detroit_scene',    to:'inner_city',    strength:3, type:'lineage' },
  { from:'belleville3',      to:'inner_city',    strength:3, type:'lineage' },

  // ── FRANKIE BONES ─────────────────────────────────────────────────────────
  { from:'summer_of_love',  to:'frankie_bones',  strength:3, type:'influence' },
  { from:'nyc_scene',       to:'frankie_bones',  strength:3, type:'lineage' },
  { from:'frankie_bones',   to:'nyc_scene',      strength:3, type:'lineage' },

  // ── BLAZE ─────────────────────────────────────────────────────────────────
  { from:'nyc_scene',       to:'blaze',          strength:3, type:'lineage' },
  { from:'paradise_garage', to:'blaze',          strength:2, type:'influence' },
  { from:'kerri_chandler',  to:'blaze',          strength:2, type:'aesthetic' },
  { from:'masters_at_work', to:'blaze',          strength:2, type:'aesthetic' },

  // ── STUDIO 54 ─────────────────────────────────────────────────────────────
  { from:'disco',          to:'studio_54',       strength:3, type:'roster' },
  { from:'nyc_scene',      to:'studio_54',       strength:3, type:'lineage' },
  { from:'studio_54',      to:'paradise_garage', strength:2, type:'lineage' },
  { from:'studio_54',      to:'the_loft',        strength:2, type:'aesthetic' },

  // ── CONGO NATTY ───────────────────────────────────────────────────────────
  { from:'jungle',             to:'congo_natty',    strength:3, type:'lineage' },
  { from:'reinforced_records', to:'congo_natty',    strength:2, type:'aesthetic' },
  { from:'congo_natty',        to:'jungle',         strength:3, type:'lineage' },

  // ── HOSPITAL RECORDS ──────────────────────────────────────────────────────
  { from:'goldie',          to:'hospital_records', strength:2, type:'aesthetic' },
  { from:'ltj_bukem',       to:'hospital_records', strength:2, type:'aesthetic' },
  { from:'grooverider',     to:'hospital_records', strength:2, type:'aesthetic' },

  // ── HARDFLOOR ─────────────────────────────────────────────────────────────
  { from:'acid',             to:'hardfloor',      strength:3, type:'influence' },
  { from:'sven_vath',        to:'hardfloor',      strength:3, type:'roster' },
  { from:'phuture',          to:'hardfloor',      strength:2, type:'influence' },
  { from:'berlin_zero_hour', to:'hardfloor',      strength:2, type:'aesthetic' },

  // ── SALSOUL RECORDS ───────────────────────────────────────────────────────
  { from:'disco',            to:'salsoul',        strength:3, type:'roster' },
  { from:'nyc_scene',        to:'salsoul',        strength:3, type:'lineage' },
  { from:'salsoul',          to:'levan',          strength:2, type:'aesthetic' },
  { from:'salsoul',          to:'chicago_scene',  strength:2, type:'influence' },

  // ── WEST END RECORDS ──────────────────────────────────────────────────────
  { from:'disco',            to:'west_end_records', strength:3, type:'roster' },
  { from:'nyc_scene',        to:'west_end_records', strength:3, type:'lineage' },
  { from:'levan',            to:'west_end_records', strength:2, type:'roster' },
  { from:'paradise_garage',  to:'west_end_records', strength:2, type:'aesthetic' },

  // ── NICKY SIANO ───────────────────────────────────────────────────────────
  { from:'disco',            to:'nicky_siano',    strength:3, type:'lineage' },
  { from:'nyc_scene',        to:'nicky_siano',    strength:3, type:'lineage' },
  { from:'nicky_siano',      to:'levan',          strength:3, type:'lineage' },
  { from:'nicky_siano',      to:'knuckles',       strength:3, type:'lineage' },
  { from:'david_mancuso',    to:'nicky_siano',    strength:2, type:'aesthetic' },

  // ── LOEFAH ────────────────────────────────────────────────────────────────
  { from:'dmz',              to:'loefah',         strength:3, type:'roster' },
  { from:'digital_mystikz',  to:'loefah',         strength:3, type:'collaboration' },
  { from:'dubstep',          to:'loefah',         strength:3, type:'lineage' },
  { from:'mala',             to:'loefah',         strength:3, type:'collaboration' },

  // ── ARTHUR RUSSELL ────────────────────────────────────────────────────────
  { from:'nyc_scene',        to:'arthur_russell', strength:3, type:'lineage' },
  { from:'west_end_records', to:'arthur_russell', strength:3, type:'roster' },
  { from:'levan',            to:'arthur_russell', strength:3, type:'collaboration' },
  { from:'paradise_garage',  to:'arthur_russell', strength:2, type:'aesthetic' },
  { from:'disco',            to:'arthur_russell', strength:2, type:'lineage' },

  // ── PATRICK COWLEY ────────────────────────────────────────────────────────
  { from:'disco',            to:'patrick_cowley', strength:3, type:'lineage' },
  { from:'giorgio_moroder',  to:'patrick_cowley', strength:3, type:'influence' },
  { from:'italo_disco',      to:'patrick_cowley', strength:2, type:'aesthetic' },

  // ── THROBBING GRISTLE ─────────────────────────────────────────────────────
  { from:'cabaret_voltaire',  to:'throbbing_gristle', strength:2, type:'aesthetic' },
  { from:'throbbing_gristle', to:'ebm',               strength:3, type:'lineage' },
  { from:'throbbing_gristle', to:'front_242',          strength:3, type:'lineage' },
  { from:'throbbing_gristle', to:'cabaret_voltaire',   strength:2, type:'aesthetic' },

  // ── FRONT 242 ─────────────────────────────────────────────────────────────
  { from:'ebm',              to:'front_242',      strength:3, type:'lineage' },
  { from:'throbbing_gristle', to:'front_242',     strength:3, type:'lineage' },
  { from:'front_242',        to:'detroit_scene',  strength:2, type:'influence' },
  { from:'front_242',        to:'underground_resistance', strength:2, type:'influence' },

  // ── NITZER EBB ────────────────────────────────────────────────────────────
  { from:'ebm',              to:'nitzer_ebb',     strength:3, type:'lineage' },
  { from:'throbbing_gristle', to:'nitzer_ebb',    strength:3, type:'influence' },
  { from:'daf',              to:'nitzer_ebb',     strength:3, type:'influence' },
  { from:'front_242',        to:'nitzer_ebb',     strength:2, type:'aesthetic' },

  // ── D.A.F. ────────────────────────────────────────────────────────────────
  { from:'ebm',              to:'daf',            strength:3, type:'lineage' },
  { from:'throbbing_gristle', to:'daf',           strength:2, type:'influence' },
  { from:'daf',              to:'front_242',      strength:3, type:'lineage' },
  { from:'daf',              to:'liaisons_dangereuses', strength:3, type:'lineage' },

  // ── LIAISONS DANGEREUSES ──────────────────────────────────────────────────
  { from:'daf',              to:'liaisons_dangereuses', strength:3, type:'lineage' },
  { from:'liaisons_dangereuses', to:'chicago_scene', strength:2, type:'influence' },
  { from:'liaisons_dangereuses', to:'detroit_scene', strength:2, type:'influence' },

  // ── AMNESIA IBIZA ─────────────────────────────────────────────────────────
  { from:'ibiza_moment',     to:'amnesia_ibiza',  strength:3, type:'roster' },
  { from:'amnesia_ibiza',    to:'summer_of_love', strength:3, type:'lineage' },
  { from:'amnesia_ibiza',    to:'paul_oakenfold', strength:3, type:'lineage' },
  { from:'amnesia_ibiza',    to:'danny_rampling', strength:3, type:'lineage' },

  // -- STUDIO ONE --------------------------------------------------------
  { from:'studio_one',       to:'king_tubby',       strength:3, type:'lineage' },
  { from:'studio_one',       to:'lee_scratch_perry', strength:3, type:'roster' },

  // -- KING TUBBY --------------------------------------------------------
  { from:'king_tubby',       to:'lee_scratch_perry', strength:3, type:'aesthetic' },
  { from:'king_tubby',       to:'jungle',            strength:3, type:'lineage' },
  { from:'king_tubby',       to:'dubstep',           strength:2, type:'lineage' },

  // -- LEE SCRATCH PERRY -------------------------------------------------
  { from:'lee_scratch_perry', to:'jungle',           strength:2, type:'lineage' },
  { from:'lee_scratch_perry', to:'congo_natty',      strength:3, type:'influence' },

  // -- FELA KUTI ---------------------------------------------------------
  { from:'fela_kuti',        to:'tony_allen',        strength:3, type:'roster' },

  // -- TONY ALLEN --------------------------------------------------------
  { from:'tony_allen',       to:'nujabes',           strength:2, type:'influence' },

  // -- GALAXY 2 GALAXY ---------------------------------------------------
  { from:'underground_resistance', to:'galaxy_2_galaxy', strength:3, type:'roster' },
  { from:'detroit_scene',   to:'galaxy_2_galaxy',   strength:3, type:'lineage' },

  // -- EDDIE FOWLKES -----------------------------------------------------
  { from:'detroit_scene',   to:'eddie_fowlkes',     strength:3, type:'lineage' },
  { from:'belleville3',     to:'eddie_fowlkes',     strength:3, type:'aesthetic' },
  { from:'metroplex',       to:'eddie_fowlkes',     strength:3, type:'roster' },

  // -- THE MUSIC INSTITUTE -----------------------------------------------
  { from:'detroit_scene',   to:'the_music_institute', strength:3, type:'lineage' },
  { from:'belleville3',     to:'the_music_institute', strength:3, type:'roster' },
  { from:'the_music_institute', to:'underground_resistance', strength:3, type:'lineage' },

  // -- AUX 88 ------------------------------------------------------------
  { from:'detroit_scene',   to:'aux_88',            strength:3, type:'lineage' },
  { from:'model_500',       to:'aux_88',            strength:2, type:'influence' },

  // -- J DILLA -----------------------------------------------------------
  { from:'detroit_scene',   to:'j_dilla',           strength:2, type:'lineage' },
  { from:'slum_village',    to:'j_dilla',           strength:3, type:'roster' },
  { from:'j_dilla',         to:'slum_village',      strength:3, type:'roster' },
  { from:'j_dilla',         to:'stones_throw',      strength:3, type:'roster' },
  { from:'j_dilla',         to:'madlib',            strength:3, type:'aesthetic' },
  { from:'j_dilla',         to:'nujabes',           strength:2, type:'aesthetic' },

  // -- SLUM VILLAGE ------------------------------------------------------
  { from:'detroit_scene',   to:'slum_village',      strength:2, type:'lineage' },

  // -- STONES THROW ------------------------------------------------------
  { from:'madlib',          to:'stones_throw',      strength:3, type:'roster' },
  { from:'mf_doom',         to:'stones_throw',      strength:3, type:'roster' },

  // -- MADLIB ------------------------------------------------------------
  { from:'stones_throw',    to:'madlib',            strength:3, type:'roster' },
  { from:'madlib',          to:'mf_doom',           strength:3, type:'collaboration' },

  // -- MF DOOM -----------------------------------------------------------
  { from:'stones_throw',    to:'mf_doom',           strength:3, type:'roster' },

  // -- NUJABES -----------------------------------------------------------
  { from:'j_dilla',         to:'nujabes',           strength:2, type:'aesthetic' },

  // -- COLDCUT -----------------------------------------------------------
  { from:'coldcut',         to:'ninja_tune',        strength:3, type:'roster' },

  // -- BASEMENT JAXX -----------------------------------------------------
  { from:'chicago_scene',   to:'basement_jaxx',     strength:2, type:'influence' },
  { from:'xl_recordings',   to:'basement_jaxx',     strength:3, type:'roster' },

  // -- FATBOY SLIM -------------------------------------------------------
  { from:'summer_of_love',  to:'fatboy_slim',       strength:3, type:'lineage' },

  // -- MR. SCRUFF --------------------------------------------------------
  { from:'ninja_tune',      to:'mr_scruff',         strength:3, type:'roster' },

  // -- MOBY --------------------------------------------------------------
  { from:'detroit_scene',   to:'moby',              strength:2, type:'influence' },
  { from:'summer_of_love',  to:'moby',              strength:2, type:'influence' },

  // -- DEATH IN VEGAS ----------------------------------------------------
  { from:'summer_of_love',  to:'death_in_vegas',    strength:2, type:'influence' },
  { from:'throbbing_gristle', to:'death_in_vegas',  strength:2, type:'influence' },

  // -- TODD EDWARDS ------------------------------------------------------
  { from:'chicago_scene',   to:'todd_edwards',      strength:2, type:'influence' },
  { from:'todd_edwards',    to:'uk_garage',         strength:3, type:'lineage' },

  // -- ARTFUL DODGER -----------------------------------------------------
  { from:'uk_garage',       to:'artful_dodger',     strength:3, type:'lineage' },
  { from:'todd_edwards',    to:'artful_dodger',     strength:2, type:'influence' },

  // -- SO SOLID CREW -----------------------------------------------------
  { from:'uk_garage',       to:'so_solid_crew',     strength:3, type:'lineage' },
  { from:'so_solid_crew',   to:'grime',             strength:3, type:'lineage' },

  // -- MOTORBASS ---------------------------------------------------------
  { from:'chicago_scene',   to:'motorbass',         strength:2, type:'influence' },
  { from:'disco',           to:'motorbass',         strength:2, type:'influence' },
  { from:'motorbass',       to:'daft_punk',         strength:3, type:'lineage' },

  // -- BOB SINCLAR -------------------------------------------------------
  { from:'disco',           to:'bob_sinclar',       strength:2, type:'influence' },
  { from:'motorbass',       to:'bob_sinclar',       strength:2, type:'aesthetic' },

  // -- DIMITRI FROM PARIS ------------------------------------------------
  { from:'disco',           to:'dimitri_from_paris', strength:3, type:'influence' },
  { from:'motorbass',       to:'dimitri_from_paris', strength:2, type:'aesthetic' },

  // -- MUTE RECORDS ------------------------------------------------------
  { from:'mute_records',    to:'depeche_mode',      strength:3, type:'roster' },
  { from:'mute_records',    to:'nitzer_ebb',        strength:3, type:'roster' },
  { from:'mute_records',    to:'daf',               strength:3, type:'roster' },

  // -- FACTORY RECORDS ---------------------------------------------------
  { from:'factory_records', to:'summer_of_love',    strength:2, type:'lineage' },

  // -- XL RECORDINGS ----------------------------------------------------
  { from:'xl_recordings',   to:'basement_jaxx',     strength:3, type:'roster' },

  // -- DEPECHE MODE ------------------------------------------------------
  { from:'mute_records',    to:'depeche_mode',      strength:3, type:'roster' },
  { from:'ebm',             to:'depeche_mode',      strength:2, type:'influence' },

  // -- SUICIDE -----------------------------------------------------------
  { from:'suicide_band',    to:'ebm',               strength:3, type:'lineage' },
  { from:'suicide_band',    to:'throbbing_gristle', strength:2, type:'aesthetic' },

  // -- NEW BEAT ----------------------------------------------------------
  { from:'ebm',             to:'new_beat',          strength:3, type:'lineage' },
  { from:'daf',             to:'new_beat',          strength:2, type:'influence' },

  // -- GLOBAL COMMUNICATIONS ----------------------------------------------
  { from:'ambient',         to:'global_communications', strength:3, type:'lineage' },
  { from:'the_black_dog',   to:'global_communications', strength:2, type:'aesthetic' },

  // -- THE BLACK DOG -------------------------------------------------------
  { from:'warp',            to:'the_black_dog',     strength:3, type:'roster' },
  { from:'detroit_scene',   to:'the_black_dog',     strength:2, type:'influence' },

  // -- GILLES PETERSON ---------------------------------------------------
  { from:'gilles_peterson', to:'talkin_loud',       strength:3, type:'roster' },
  { from:'gilles_peterson', to:'brownswood_recordings', strength:3, type:'roster' },

  // -- TALKIN' LOUD -------------------------------------------------------
  { from:'talkin_loud',     to:'brownswood_recordings', strength:3, type:'lineage' },
];