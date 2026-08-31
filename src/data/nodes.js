export const NODES = [
  // ── ROOTS ──────────────────────────────────────────────────────────────
  { id:'disco', label:'Disco', type:'label', genre:'disco', era:1975, city:'New York', country:'US',
    desc:'Disco emerged in New York in the early 1970s within Black, Latino, and gay communities. Its structural elements — four-on-the-floor kick drum, syncopated hi-hats, extended running times, and emphasis on continuous DJ mixing — became the direct foundation of house music. Key venues included The Loft (opened 1970 by David Mancuso), the Gallery (Nicky Siano), and later the Paradise Garage. The commercial backlash of 1979 drove the music underground, where it shed its orchestration and evolved into house.',
    releases: [
      { title: '"I Feel Love" — Donna Summer', year: 1977 },
      { title: '"Got to Be Real" — Cheryl Lynn', year: 1978 },
      { title: '"He\'s the Greatest Dancer" — Sister Sledge', year: 1979 },
    ]},

  { id:'funk', label:'Funk / Soul', type:'artist', genre:'soul', era:1968, city:'Various', country:'US',
    desc:'James Brown, Parliament-Funkadelic, and Sly and the Family Stone established funk\'s core language in the late 1960s: rhythm as the primary compositional element, polyrhythmic interlocking grooves, and the communal energy of live performance. This language entered house music through disco and the gospel-house tradition. It entered Detroit techno through an indirect route: Kraftwerk absorbed funk\'s rhythmic logic and translated it into electronic form, and the Detroit producers subsequently drew on both.',
    releases: [
      { title: '"Cold Sweat" — James Brown', year: 1967 },
      { title: '"Sex Machine" — James Brown', year: 1970 },
      { title: '"Flash Light" — Parliament', year: 1977 },
    ]},

  { id:'kraftwerk', label:'Kraftwerk', type:'artist', genre:'experimental', era:1970, city:'Düsseldorf', country:'DE',
    desc:'Formed in Düsseldorf in 1969 by Ralf Hütter and Florian Schneider. Kraftwerk developed a studio-based approach using drum machines, synthesizers, and sequencers as primary compositional tools, treating repetition and machine rhythm as aesthetic values rather than limitations. Their records reached Detroit via radio and import shops and were a documented influence on Juan Atkins, Derrick May, and Kevin Saunderson. Afrika Bambaataa sampled their 1977 track "Trans-Europe Express" for "Planet Rock" (1982), producing electro — another direct ancestor of Detroit techno.',
    releases: [
      { title: 'Autobahn', year: 1974 },
      { title: 'Trans-Europe Express', year: 1977 },
      { title: 'The Man-Machine', year: 1978 },
      { title: 'Computer World', year: 1981 },
    ]},


  // ── CULTURAL HERITAGE ───────────────────────────────────────────────────
  { id:'black_club_culture', label:'Black Club Culture', type:'culture', genre:'soul', era:1970, city:'Chicago', country:'US',
    desc:'House music and techno did not emerge from nowhere. They emerged from a specific community: Black Americans in Chicago, Detroit, and New York who had been building cultures of communal dance and music-making for generations — from the rent parties of the Harlem Renaissance to the juke joints of the South to the Black-owned ballrooms of Chicago\'s Bronzeville. When mainstream white America excluded Black communities from its clubs, hotels, and concert halls, those communities built their own spaces. The Warehouse, the Music Box, the Paradise Garage — these were not incidental venues. They were sanctuaries, created by and for people the dominant culture had decided did not exist. House music is a Black art form. Understanding its technical vocabulary without understanding this social context is like studying a language while refusing to learn who speaks it.',
    releases: [] },

  { id:'queer_dancefloor', label:'Queer Dancefloor', type:'culture', genre:'chicago', era:1972, city:'New York', country:'US',
    desc:'The clubs where house music was born were queer spaces. The Warehouse was a club for Black gay men on Chicago\'s South Side. The Paradise Garage served a primarily Black and Latino gay clientele on King Street in Manhattan. The Loft, opened by David Mancuso in his own apartment in 1970, was a space built on the explicit model of community over commerce, open to people excluded everywhere else. These clubs existed because their patrons had nowhere else to go — mainstream venues turned them away by race, sexuality, or both. The music that grew in these spaces carried the emotional weight of communities under sustained pressure. The four-on-the-floor beat, the gospel chord voicings, the long slow builds toward release — these were not merely formal choices. They were the sound of people insisting on joy in a world that had repeatedly denied it. House music\'s emotional vocabulary is inseparable from the specific experience of its creators.',
    releases: [] },

  { id:'ballroom', label:'Ballroom Culture', type:'culture', genre:'soul', era:1968, city:'New York', country:'US',
    desc:'The New York ballroom scene — balls, houses, voguing — is one of the most distinctive cultural forms to emerge from the intersection of Black and Latinx LGBTQ+ experience in America. Beginning in Harlem in the 1960s, the scene organised itself around houses: chosen family units, named for their founders, that competed at balls where participants walked categories and performed voguing, a dance form built from poses borrowed from fashion magazines and transformed into something athletic, theatrical, and politically charged. The houses — Xtravaganza, Ninja, Pendavis, Ebony, Balenciaga — functioned as genuine families for young people rejected by their biological ones. House music and ballroom are inseparable: the same DJs, the same community, the same beat. The AIDS crisis devastated the ballroom world as it devastated the broader queer communities it was embedded in, and much of this history went unrecorded. Paris Is Burning (Jennie Livingston, 1990) is the most widely seen document of the scene at its height.',
    releases: [] },

  { id:'afrofuturism', label:'Afrofuturism', type:'culture', genre:'detroit', era:1985, city:'Detroit', country:'US',
    desc:'Afrofuturism — the use of technology, science fiction, and speculative imagery to explore Black experience and imagine Black futures — was not an academic concept when the Belleville Three were making Detroit techno. It was a living tradition: Sun Ra\'s cosmic mythology, Parliament-Funkadelic\'s Mothership Connection, the robots and machines of Kraftwerk translated through a Black American context. Juan Atkins, Derrick May, and Kevin Saunderson grew up in post-industrial Detroit — a city that had been one of the great centres of Black American prosperity and had then been systematically abandoned. Their response was to take the machines that had displaced their communities and build a music that pointed toward futures those communities were not supposed to have. Drexciya extended this into a complete underwater mythology of Afrofuturist grief and defiance. Underground Resistance made the political dimension explicit. Techno is a Black music that imagines what comes next — and that insistence on futurity is not decorative. It is the point.',
    releases: [] },

  { id:'italo_disco', label:'Italo Disco', type:'style', genre:'disco', era:1977, city:'Milan', country:'IT',
    desc:'Italo disco emerged in Italy in the late 1970s and peaked in the early 1980s. Its producers stripped American disco of its live orchestration and rebuilt it with synthesizers, drum machines, and elaborately processed vocals — faster, colder, and more explicitly electronic than the New York original. Giorgio Moroder\'s Munich productions for Donna Summer were a direct precursor; Italian producers including Klein & MBO, Alexander Robotnick, and Gazebo took the form in a more synthetic direction. The extended club mixes and electronic production methods of italo disco were directly absorbed by the first Chicago house producers, who were spinning imported Italian 12-inches alongside American disco in the city\'s early clubs.',
    releases: [
      { title: '"I Feel Love" — Donna Summer (Giorgio Moroder prod.)', year: 1977 },
      { title: '"Problèmes d\'amour" — Alexander Robotnick', year: 1983 },
      { title: '"You Are in My System" — The System', year: 1983 },
    ]},

  { id:'electro', label:'Electro', type:'style', genre:'detroit', era:1982, city:'New York', country:'US',
    desc:'Electro was born from the collision of Kraftwerk\'s machine rhythms with New York hip-hop. Afrika Bambaataa\'s "Planet Rock" (1982), produced by Arthur Baker, sampled Kraftwerk\'s "Trans-Europe Express" and fused it with a Roland TR-808 and hip-hop vocal culture, creating a template that spread rapidly through New York, Los Angeles, and the nascent Miami bass scene. The genre is defined by its TR-808, an absence of live instrumentation, and an explicit futurism. Electro entered Detroit directly: Juan Atkins, Derrick May, and Kevin Saunderson were documented fans of both Kraftwerk and Bambaataa. Drexciya later extended electro\'s vocabulary into a fully realised Afrofuturist mythology.',
    releases: [
      { title: '"Planet Rock" — Afrika Bambaataa & the Soulsonic Force', year: 1982 },
      { title: '"Looking for the Perfect Beat" — Afrika Bambaataa', year: 1983 },
      { title: '"Clear" — Cybotron', year: 1983 },
    ]},

  // ── CHICAGO ─────────────────────────────────────────────────────────────
  { id:'chicago_scene', label:'Chicago House', type:'style', genre:'chicago', era:1982, city:'Chicago', country:'US',
    desc:'House music emerged in Chicago in the early 1980s, primarily in Black and Latino gay clubs on the city\'s South and West Sides. DJs began extending and layering records using drum machines — principally the Roland TR-808 and TR-909 — and tape edits, creating a continuous sound distinct from disco. The Roland TB-303 bass synthesizer, used in ways its designers had not intended, produced the sound that defined acid house from 1986 onward. By 1984 this music was appearing on local labels; by 1986 it had reached the United Kingdom.',
    releases: [
      { title: '"On and On" — Jesse Saunders & Vince Lawrence', year: 1984 },
      { title: '"Move Your Body" — Marshall Jefferson', year: 1986 },
      { title: '"Acid Tracks" — Phuture', year: 1987 },
    ]},

  { id:'warehouse', label:'The Warehouse', type:'venue', genre:'chicago', era:1977, city:'Chicago', country:'US',
    desc:'The Warehouse was a nightclub in Chicago\'s West Loop, opened in 1977 and primarily serving a Black gay clientele. Frankie Knuckles held his residency there from 1977 to 1982, playing to crowds that had no other comparable space in the city. The club gave house music its name: patrons referred to the music played there as "house music" or music from the Warehouse. When Knuckles departed in 1982, Ron Hardy took over the residency. The building no longer exists.' },

  { id:'musicbox', label:'Music Box', type:'venue', genre:'chicago', era:1982, city:'Chicago', country:'US',
    desc:'The Music Box was a Chicago club at 325 South Michigan Avenue where Ron Hardy held his residency from 1982 until 1992. It operated as a counterpart to Knuckles\' more polished approach — Hardy was known for playing tracks at unconventional speeds, testing unreleased and unlabelled recordings, and pushing the music in a harder, more experimental direction. Early recordings by Larry Heard and Phuture were reportedly first played at the Music Box.' },

  { id:'knuckles', label:'Frankie Knuckles', type:'artist', genre:'chicago', era:1977, city:'Chicago', country:'US',
    desc:'Frankie Knuckles was a New York-born DJ who moved to Chicago in 1977 to take the residency at the Warehouse. His approach — extended edits of existing records, drum machine layers, continuous mixing — established the structural template for house music. After leaving the Warehouse in 1982 he opened the Power Plant, continuing to develop the form. His later production work, including collaborations with Jamie Principle, produced some of the earliest house records to achieve international distribution. He passed away in Chicago in March 2014.',
    releases: [
      { title: '"Your Love" (with Jamie Principle, Trax)', year: 1987 },
      { title: '"Baby Wants to Ride" (with Jamie Principle, Trax)', year: 1987 },
      { title: '"The Whistle Song" (Virgin)', year: 1991 },
      { title: '"Too Many Fish" (Virgin)', year: 1995 },
    ]},

  { id:'heard', label:'Larry Heard', type:'artist', genre:'deep', era:1986, city:'Chicago', country:'US',
    desc:'Larry Heard is a Chicago musician who began producing electronic music in the mid-1980s, recording as Mr. Fingers. Working with a Roland drum machine and a Juno-60 synthesizer, he produced a series of records in 1986 that established the vocabulary of deep house: slower tempos, minor chord progressions, and an emotional directness distinct from the harder, more percussive side of Chicago house. He has continued producing and performing for four decades.',
    releases: [
      { title: '"Can You Feel It" (as Mr. Fingers)', year: 1986 },
      { title: '"Washing Machine" (as Mr. Fingers)', year: 1986 },
      { title: '"Mystery of Love" (as Mr. Fingers)', year: 1986 },
      { title: '"Bring Down the Walls" (as Mr. Fingers)', year: 1987 },
    ]},

  { id:'deep_house', label:'Deep House', type:'style', genre:'deep', era:1986, city:'Chicago', country:'US',
    desc:'Deep house is the emotionally introspective branch of Chicago house, characterised by slower tempos, complex chord voicings rooted in gospel and soul, and a focus on mood over percussive impact. Larry Heard\'s 1986 bedroom recordings as Mr. Fingers are its founding documents: produced alone with a Roland TR-909 and a Juno-60, they introduced minor-key progressions and a spaciousness that had no precedent in the harder side of house music. Where acid house moved toward abstraction, deep house retained the warmth of Black American music — the church, the blues, the feeling beneath the beat. Its influence runs from New York (Masters at Work, Kerri Chandler) to Hamburg (Dial, Smallville) to Tokyo (Mule Musiq) and through the entire international network of producers still working in the tradition today.',
    releases: [
      { title: '"Can You Feel It" — Mr. Fingers (Trax)', year: 1986 },
      { title: '"Mystery of Love" — Mr. Fingers (Trax)', year: 1986 },
      { title: '"Your Love" — Frankie Knuckles pres. Jamie Principle', year: 1987 },
    ]},

  { id:'acid', label:'Acid House', type:'style', genre:'chicago', era:1987, city:'Chicago', country:'US',
    desc:'Acid house emerged from a specific accident: Chicago producers discovering that the Roland TB-303 bass synthesizer — designed for guitarists who wanted a practice accompaniment device — produced an entirely unintended sound when its resonance and cutoff controls were manipulated. Phuture\'s "Acid Tracks" (1987), the first acid record, was recorded by DJ Pierre, Spanky, and Herb J using this technique and tested by Ron Hardy at the Music Box. The squelching, morphing TB-303 bassline became the defining sonic signature of an entire era. From Chicago the sound crossed the Atlantic to UK clubs and open-air raves, mutating into the broader rave movement of 1988–1990 and eventually into the lineages that produced trance, hard house, and contemporary acid techno.',
    releases: [
      { title: '"Acid Tracks" — Phuture (Trax)', year: 1987 },
      { title: '"Do It Proper" — Jamie Principle & Frankie Knuckles', year: 1987 },
      { title: '"Washing Machine" — Mr. Fingers (Trax)', year: 1987 },
    ]},

  { id:'trax', label:'Trax Records', type:'label', genre:'chicago', era:1984, city:'Chicago', country:'US',
    desc:'Trax Records was founded in Chicago in 1984 by Larry Sherman. It became the most important early house label, releasing the records that defined the genre in its first years. The label\'s business practices were widely criticised — many artists reported not receiving royalties — but its catalogue remains foundational. Sherman passed away in 2019; ownership of the back catalogue has remained contested.',
    releases: [
      { title: '"On and On" — Jesse Saunders & Vince Lawrence', year: 1984 },
      { title: '"Move Your Body" — Marshall Jefferson', year: 1986 },
      { title: '"Can You Feel It" — Mr. Fingers', year: 1986 },
      { title: '"Acid Tracks" — Phuture', year: 1987 },
      { title: '"Your Love" — Frankie Knuckles pres. Jamie Principle', year: 1987 },
    ]},

  { id:'dance_mania', label:'Dance Mania', type:'label', genre:'chicago', era:1985, city:'Chicago', country:'US',
    desc:'Dance Mania was founded in Chicago in the mid-1980s by Ray Barney. The label released a harder, faster strain of Chicago house — higher tempos, 808 drums, raw production — that became known as ghetto house. Artists including DJ Funk, DJ Deeon, and Jammin\' Gerald defined the label\'s sound. Dance Mania\'s aesthetic influenced footwork, a percussive, highly rhythmic Chicago genre that developed in the 2000s.',
    releases: [
      { title: '"Work That Mutha F**ker" — DJ Deeon', year: 1995 },
      { title: '"Make It Bounce" — DJ Funk', year: 1996 },
      { title: '"Getto Hypnotized" — Parris Mitchell', year: 1997 },
    ]},

  { id:'smartbar', label:'Smart Bar', type:'venue', genre:'chicago', era:1982, city:'Chicago', country:'US',
    desc:'Smart Bar opened in 1982 in the basement of the Metro concert hall on North Clark Street in Chicago\'s Wrigleyville neighborhood. It has operated continuously since its opening, making it one of the longest-running clubs associated with the original Chicago house scene. It has hosted many of the genre\'s founding figures across four decades of operation.' },

  // ── NYC ──────────────────────────────────────────────────────────────────
  { id:'nyc_scene', label:'NYC / Paradise Garage', type:'label', genre:'soul', era:1977, city:'New York', country:'US',
    desc:'New York\'s contribution to house music developed in parallel with Chicago\'s, centered on the loft party tradition pioneered by David Mancuso at the Loft from 1970 and later on Larry Levan\'s residency at the Paradise Garage. The New York sound was more eclectic and gospel-influenced than Chicago house, retaining fuller arrangements and a broader musical palette. It gave rise to garage house and, through a chain of influence, to UK Garage in the early 1990s.',
    releases: [
      { title: '"Is It All Over My Face" — Loose Joints', year: 1980 },
      { title: '"Heartbeat" — Taana Gardner', year: 1981 },
      { title: '"French Kiss" — Lil Louis', year: 1989 },
    ]},

  { id:'paradise_garage', label:'Paradise Garage', type:'venue', genre:'soul', era:1977, city:'New York', country:'US',
    desc:'The Paradise Garage was a members-only club at 84 King Street in Manhattan, open from 1977 to 1987. It was designed around a sound system built by Richard Long and was primarily a Black gay space. Larry Levan held the residency for the club\'s entire existence. The Garage gave its name to a sub-genre — UK garage — through the influence its recordings and reputation had on London DJs and producers in the early 1990s.' },

  { id:'levan', label:'Larry Levan', type:'artist', genre:'soul', era:1977, city:'New York', country:'US',
    desc:'Larry Levan was a New York-born DJ and producer who held the residency at the Paradise Garage from 1977 until it closed in 1987. His decade-long residency established the model of the DJ as musical curator and emotional architect of a night. He produced and remixed records for West End, Salsoul, and other New York labels. He passed away in New York in November 1992.',
    releases: [
      { title: '"Is It All Over My Face" (remix) — Loose Joints', year: 1980 },
      { title: '"Heartbeat" (remix) — Taana Gardner', year: 1981 },
      { title: '"Give Your Body Up to the Music" — Billy Nichols (West End)', year: 1979 },
    ]},

  { id:'maw', label:'Masters at Work', type:'artist', genre:'soul', era:1990, city:'New York', country:'US',
    desc:'Masters at Work (MAW) is a production partnership between Louie Vega and Kenny "Dope" Gonzalez, formed in New York around 1990. Their productions developed the NuYorican sound — soulful house music built around Latin percussion, gospel-influenced vocal arrangements, and strong melodic content. Their work has been released on their own MAW Records and licensed widely. Both artists also maintain extensive solo and collaborative output beyond the MAW project.',
    releases: [
      { title: '"To Be in Love" — MAW feat. India', year: 1997 },
      { title: 'Nuyorican Soul (album)', year: 1997 },
      { title: '"Ride on the Rhythm" — Little Louie & Marc Anthony', year: 1992 },
      { title: '"The Ha Dance" — Masters At Work', year: 1991 },
    ]},

  { id:'kerri', label:'Kerri Chandler', type:'artist', genre:'soul', era:1992, city:'New Jersey', country:'US',
    desc:'Kerri Chandler is a New Jersey-born producer and DJ who began releasing music in the early 1990s. His productions are built around complex chord progressions with a strong gospel character, rooted in the Black church music tradition of his upbringing. He founded the Madhouse label in 1996 and later Kaoz Theory. His work has been consistently cited by European deep house producers as a primary influence.',
    releases: [
      { title: '"Bar A Thym"', year: 2005 },
      { title: '"Rain" (as Kerri Chandler & Jerome Sydenham)', year: 1994 },
      { title: '"Atmosphere" EP', year: 1993 },
      { title: 'Spaces and Places (album)', year: 2012 },
    ]},

  // ── DETROIT ──────────────────────────────────────────────────────────────
  { id:'detroit_scene', label:'Detroit Techno', type:'style', genre:'detroit', era:1985, city:'Detroit', country:'US',
    desc:'Detroit techno emerged in the mid-1980s, developed primarily by Juan Atkins, Derrick May, and Kevin Saunderson — three producers who grew up together in Belleville, Michigan. Their music combined the rhythmic structures of Chicago house with the synthesizer-based aesthetic they had absorbed from Kraftwerk and European electronic music, filtered through the social reality of a city experiencing severe deindustrialisation. The Belleville Three understood the music as a specifically Black American art form — futurist in outlook, rooted in the Afrofuturist tradition of Parliament-Funkadelic and the post-industrial Midwest.',
    releases: [
      { title: '"No UFOs" — Model 500 (Metroplex)', year: 1985 },
      { title: '"Strings of Life" — Rhythim Is Rhythim (Transmat)', year: 1987 },
      { title: '"Good Life" — Inner City (KMS)', year: 1988 },
    ]},

  { id:'belleville3', label:'Belleville Three', type:'artist', genre:'detroit', era:1985, city:'Detroit', country:'US',
    desc:'Juan Atkins, Derrick May, and Kevin Saunderson are three Detroit producers who met as teenagers in Belleville, Michigan. Atkins began producing as Cybotron with Rick Davis in the early 1980s, then founded Metroplex in 1985. May founded Transmat in 1986. Saunderson founded KMS in 1987. Each pursued a distinct direction: Atkins the most rooted in electro, May the most abstract, Saunderson the most pop-accessible. Together their output in the late 1980s defined the range and character of Detroit techno.',
    releases: [
      { title: '"No UFOs" — Model 500', year: 1985 },
      { title: '"Strings of Life" — Rhythim Is Rhythim', year: 1987 },
      { title: '"Big Fun" — Inner City', year: 1988 },
      { title: '"Nude Photo" — Rhythim Is Rhythim', year: 1987 },
    ]},

  { id:'deepchord', label:'DeepChord', type:'artist', genre:'ambient', era:2000, city:'Detroit', country:'US',
    desc:'DeepChord is the primary alias of Rod Modell, a Detroit-based producer who also records as CV313. His work is rooted in the dub techno aesthetic developed by Basic Channel and Chain Reaction in Berlin, emphasising texture, spatial depth, and extended development over rhythmic density. He has released on his own DeepChord imprint and on Soma. His collaborations with Echospace (Steven Hitchell) are among the most substantial bodies of work in the dub techno genre.',
    releases: [
      { title: 'The Coldest Season (as Echospace, Modern Love)', year: 2007 },
      { title: 'Spatialdimension (as Echospace, echospace313)', year: 2007 },
      { title: 'Liumin (as Echospace, Modern Love)', year: 2010 },
    ]},

  { id:'metroplex', label:'Metroplex', type:'label', genre:'detroit', era:1985, city:'Detroit', country:'US',
    desc:'Metroplex was founded in Detroit in 1985 by Juan Atkins following the dissolution of his Cybotron project. Its first release was Model 500\'s "No UFOs" (1985). The label has operated continuously since its founding and remains owned and run by Atkins, making it the longest-running Detroit techno label. Its catalogue spans Atkins\'s own work across multiple aliases alongside releases by other Detroit producers.',
    releases: [
      { title: '"No UFOs" — Model 500', year: 1985 },
      { title: '"Future" — Model 500', year: 1985 },
      { title: '"Off to Battle" — Model 500', year: 1987 },
      { title: '"The Chase" — Model 500', year: 1989 },
    ]},

  { id:'transmat', label:'Transmat', type:'label', genre:'detroit', era:1986, city:'Detroit', country:'US',
    desc:'Transmat was founded in Detroit in 1986 by Derrick May, initially as a subsidiary of Metroplex. Its second release, "Strings of Life" (1987) by May\'s alias Rhythim Is Rhythim, became one of the most influential records in techno\'s history and played a central role in establishing the music\'s audience in Europe. Transmat also released early work by Carl Craig under his Psyche alias.',
    releases: [
      { title: '"Nude Photo" — Rhythim Is Rhythim', year: 1987 },
      { title: '"Strings of Life" — Rhythim Is Rhythim', year: 1987 },
      { title: '"It Is What It Is" — Rhythim Is Rhythim', year: 1988 },
      { title: '"Neurotic Behavior" — Psyche (Carl Craig)', year: 1989 },
    ]},

  { id:'kms', label:'KMS Records', type:'label', genre:'detroit', era:1987, city:'Detroit', country:'US',
    desc:'KMS Records was founded in Detroit in 1987 by Kevin Saunderson. The label is best known for the Inner City records Saunderson produced with vocalist Paris Grey, which achieved significant commercial success internationally. "Big Fun" and "Good Life" (both 1988) reached the UK charts and brought Detroit techno to mainstream radio audiences globally.',
    releases: [
      { title: '"Big Fun" — Inner City', year: 1988 },
      { title: '"Good Life" — Inner City', year: 1988 },
      { title: '"Waterfalls" — Inner City', year: 1990 },
      { title: '"Be There" — Inner City', year: 1992 },
    ]},

  { id:'planet_e', label:'Planet E', type:'label', genre:'detroit', era:1991, city:'Detroit', country:'US',
    desc:'Planet E Communications was founded in Detroit in 1991 by Carl Craig. Its catalogue spans Craig\'s own productions across multiple aliases as well as releases by Moodymann, Kenny Larkin, and Recloose. The label has operated continuously for over thirty years and is based in Detroit. It represents a more jazz-informed and orchestrally inclined branch of the Detroit tradition.',
    releases: [
      { title: '"4 Jazz Funk Classics" — 69 (Carl Craig)', year: 1992 },
      { title: '"The Floor" — Paperclip People (Carl Craig)', year: 1994 },
      { title: '"Bug in the Bass Bin" — Innerzone Orchestra (Carl Craig)', year: 1999 },
      { title: '"It\'s Yours" — Moodymann', year: 1997 },
    ]},

  { id:'mplant', label:'M-Plant', type:'label', genre:'minimal', era:1994, city:'Detroit', country:'US',
    desc:'M-Plant was founded in Detroit in 1994 by Robert Hood as a home for his minimal productions and for his gospel-house alias Floorplan, a project he develops with his daughter Lyric Hood. The debut release was Hood\'s Minimal Nation (1994), an extended collection of stripped-down techno tracks that became a reference point for the development of minimal techno as a distinct form.',
    releases: [
      { title: '"Internal Empire" — Robert Hood', year: 1994 },
      { title: '"Never Grow Old" — Floorplan', year: 2010 },
      { title: '"Victorious" — Floorplan', year: 2013 },
    ]},

  { id:'drexciya', label:'Drexciya', type:'artist', genre:'detroit', era:1992, city:'Detroit', country:'US', bandcamp:'drexciya', bandcamp_album:'4001767279',
    desc:'Drexciya was a Detroit duo formed by James Stinson and Gerald Donald. They built a sustained Afrofuturist mythology around their releases — an aquatic civilisation descended from enslaved Africans lost at sea during the Middle Passage — expressed through machine-paced electro with compressed, underwater-like production. Their releases appeared on Underground Resistance, Tresor, and Clone. Stinson passed away in September 2002; Donald continued producing under other aliases.',
    releases: [
      { title: '"Aquatic Invasion" EP (Underground Resistance)', year: 1992 },
      { title: 'Neptune\'s Lair (Tresor)', year: 1999 },
      { title: 'Harnessed the Storm (Tresor)', year: 2002 },
    ]},

  // ── CANADA ───────────────────────────────────────────────────────────────
  { id:'plus8', label:'Plus 8', type:'label', genre:'detroit', era:1990, city:'Windsor', country:'CA',
    desc:'Plus 8 was founded in Windsor, Ontario in 1990 by Richie Hawtin and John Acquaviva. Windsor sits directly across the Detroit River from Detroit, and the label operated within the same scene as the Detroit labels. It released Hawtin\'s FUSE and Plastikman projects alongside records by Speedy J and Kenny Larkin. A track from Plus 8 appeared on Warp\'s Artificial Intelligence compilation in 1992.',
    releases: [
      { title: '"Spastik" — Plastikman (Richie Hawtin)', year: 1993 },
      { title: 'Sheet One — Plastikman (Richie Hawtin)', year: 1993 },
      { title: '"Industrialyzer" — FUSE (Richie Hawtin)', year: 1992 },
      { title: '"De-Orbit" — Speedy J', year: 1992 },
    ]},

  { id:'mnuslabel', label:'M_nus', type:'label', genre:'minimal', era:1998, city:'Windsor', country:'CA',
    desc:'M_nus was founded by Richie Hawtin in 1998. The label became associated with a reduced, minimal approach to techno characterised by long track durations, emphasis on timbre over melody, and dark, precise production. It was closely tied to Hawtin\'s own evolution as a producer and his adoption of laptop-based live performance. M_nus connected the Detroit second wave aesthetically to the European minimal techno scene of the early 2000s.',
    releases: [
      { title: 'Consumed — Plastikman', year: 1998 },
      { title: 'Closer — Plastikman', year: 2003 },
      { title: '"F.U.S.E." — Richie Hawtin', year: 1998 },
    ]},

  { id:'hawtin', label:'Richie Hawtin', type:'artist', genre:'minimal', era:1990, city:'Windsor', country:'CA',
    desc:'Richie Hawtin was born in Banstead, Surrey, England in 1970 and grew up in Windsor, Ontario. He co-founded Plus 8 in 1990 and later M_nus in 1998. Recording primarily as Plastikman, his output in the 1990s was central to the development of minimal and acid techno. His adoption of Ableton Live for live performance in the early 2000s was influential in the broader shift toward laptop-based electronic music.',
    releases: [
      { title: 'Sheet One (as Plastikman, Plus 8)', year: 1993 },
      { title: 'Consumed (as Plastikman, M_nus)', year: 1998 },
      { title: 'DE9: Closer to the Edit (M_nus)', year: 2001 },
      { title: 'Closer (as Plastikman, M_nus)', year: 2003 },
    ]},

  { id:'fredeverything', label:'Fred Everything', type:'artist', genre:'soul', era:1999, city:'Montreal', country:'CA',
    desc:'Fred Everything is a Montreal-based producer and DJ who has been releasing music since the late 1990s. His work is rooted in the soulful, gospel-influenced deep house tradition of Chicago and New York rather than European minimalism. He has released on his own Lazy Days Recordings and on Smallville, Classic, and Rebirth, among others.',
    releases: [
      { title: '"Tired of Being Alone" feat. Bajka (Lazy Days)', year: 2010 },
      { title: '"In the Morning" feat. Sio', year: 2015 },
      { title: 'Bringing Back the Jazz (Lazy Days)', year: 2018 },
    ]},

  { id:'lazydays', label:'Lazy Days Recordings', type:'label', genre:'soul', era:2009, city:'Montreal', country:'CA',
    desc:'Lazy Days Recordings was founded in Montreal in 2009 by Fred Everything. The label releases soulful deep house rooted in the Chicago and New York gospel-house tradition — chord-led, vocally rich, and emotionally direct. It has released consistently since its founding and represents a contemporary North American continuation of that lineage.',
    releases: [
      { title: '"Tired of Being Alone" — Fred Everything feat. Bajka', year: 2010 },
      { title: '"Take You There" — Fred Everything', year: 2013 },
      { title: 'Bringing Back the Jazz — Fred Everything', year: 2018 },
    ]},

  // ── UK ───────────────────────────────────────────────────────────────────
  { id:'acid_house', label:'UK Acid House / Rave', type:'label', genre:'chicago', era:1988, city:'Manchester', country:'UK',
    desc:'Chicago acid house records began circulating in London via import shops and pirate radio stations in 1987. A group of London DJs — among them Danny Rampling, Paul Oakenfold, Nicky Holloway, and Johnny Walker — encountered the music in Ibiza in the summer of 1987 and began replicating the experience in UK clubs. By 1988 the scene had expanded from small London clubs to unlicensed events in fields and warehouses across England, a period referred to as the Second Summer of Love. The Criminal Justice and Public Order Act 1994 was partly directed at criminalising this model of outdoor unlicensed events.',
    releases: [
      { title: '"Voodoo Ray" — A Guy Called Gerald', year: 1988 },
      { title: '"Theme from S-Express" — S-Express', year: 1988 },
      { title: '"Pacific State" — 808 State', year: 1989 },
    ]},

  { id:'hacienda', label:'The Haçienda', type:'venue', genre:'chicago', era:1982, city:'Manchester', country:'UK',
    desc:'The Haçienda was a nightclub operated by Factory Records at 11–13 Whitworth Street West in Manchester, open from May 1982 to June 1997. Designed by Ben Kelly and co-owned by New Order, it was initially an unprofitable venture. From 1986, resident DJs Mike Pickering and Graeme Park introduced Chicago house music to Manchester audiences. By 1988 the club was central to the UK acid house movement. The building was demolished after closure and replaced with apartments.' },

  { id:'ibiza_moment', label:'Ibiza Connection', type:'moment', genre:'chicago', era:1987, city:'Ibiza', country:'ES',
    desc:'Summer 1987: Danny Rampling, Paul Oakenfold, Nicky Holloway and Johnny Walker holiday in Ibiza and hear DJ Alfredo playing Chicago house at Amnesia. They return to London and within months detonate the UK acid house explosion. The direct chain: Chicago → Ibiza → London.' },

  { id:'summer_of_love', label:'Summer of Love', type:'moment', genre:'chicago', era:1988, city:'Manchester', country:'UK',
    desc:'By summer 1988 acid house had moved from London clubs to fields outside the M25 motorway. Tens of thousands at unlicensed raves. The Haçienda in Manchester became the spiritual HQ. The UK government responded with the Criminal Justice Act 1994, outlawing gatherings around music with "repetitive beats" — pushing the scene underground and creating conditions for everything that followed.' },

  { id:'progressive_house', label:'Progressive House', type:'style', genre:'melodic', era:1992, city:'Manchester', country:'UK',
    desc:'Progressive house emerged in the early 1990s UK as DJs and producers began extending the architecture of house music — longer builds, more tonal development, less emphasis on immediate peak-time impact. Sasha, John Digweed, and the Renaissance club night in Mansfield were its central figures. Where acid house had been immediate and raw, progressive house pursued emotional development over extended periods, designed for marathon sets rather than individual tracks. It became commercially enormous by the mid-1990s, spawning a generation of arena-scale DJs and a production aesthetic that fed directly into trance and melodic techno. The form\'s influence on contemporary melodic electronic music is total, even where the lineage is unacknowledged.',
    releases: [
      { title: 'Renaissance: The Mix Collection (Sasha & Digweed)', year: 1994 },
      { title: 'Digweed: Bedrock (mix)', year: 1999 },
      { title: '"Xpander EP" — Sasha (Deconstruction)', year: 1999 },
    ]},

  { id:'idm', label:'IDM', type:'style', genre:'experimental', era:1992, city:'Sheffield', country:'UK',
    desc:'IDM — "intelligent dance music," a category introduced by Warp Records for their Artificial Intelligence compilation in 1992 — describes electronic music that prioritises composition and attentive listening over dancefloor function. The Warp roster of the early 1990s included Aphex Twin, Autechre, Boards of Canada, and Plaid, drawing on Detroit techno\'s technical ambition, UK rave\'s rhythmic vocabulary, and experimental music\'s interest in dissonance and form. The "intelligent" qualifier was disputed immediately — Aphex Twin himself rejected it — and is now understood as a period descriptor rather than a value judgement. IDM established the idea that electronic music could be entirely post-functional, interested in texture and complexity for their own sake.',
    releases: [
      { title: 'Artificial Intelligence (Warp compilation)', year: 1992 },
      { title: 'Selected Ambient Works 85–92 — Aphex Twin', year: 1992 },
      { title: 'Incunabula — Autechre (Warp)', year: 1993 },
    ]},

  { id:'ambient_techno', label:'Ambient Techno', type:'style', genre:'ambient', era:1992, city:'London', country:'UK',
    desc:'Ambient techno placed the emotional and spatial vocabulary of ambient music inside the rhythmic architecture of techno. The form crystallised around two independent points: the Apollo Records compilation Ambience (1992), released by R&S\'s ambient subdivision and featuring the Black Dog, Aphex Twin, and Biosphere; and The Orb\'s Adventures Beyond the Ultraworld (1991), which stretched house rhythms across long, slowly evolving textural landscapes. In Berlin, Basic Channel\'s Chain Reaction offshoot developed a parallel ambient dub techno aesthetic through the late 1990s — low-frequency pulses, wet reverb, and a near-beatless quality that emphasised physical resonance over rhythmic propulsion. Ambient techno\'s contribution was to show that techno\'s energy could be expressed as sustained tension rather than percussive impact.',
    releases: [
      { title: 'Adventures Beyond the Ultraworld — The Orb', year: 1991 },
      { title: 'Ambience (Apollo/R&S compilation)', year: 1992 },
      { title: '76:14 — Global Communication', year: 1994 },
      { title: 'Substrata — Biosphere (All Saints)', year: 1997 },
    ]},

  { id:'tech_house', label:'Tech House', type:'style', genre:'techhouse', era:1995, city:'London', country:'UK',
    desc:'Tech house emerged in the mid-1990s as producers began combining the percussive intensity and dark sound design of techno with the rhythmic swing and groove orientation of house. The term described a practical approach rather than a precise aesthetic: music too groovy to be pure techno, too hard to be pure house. It became the dominant style at venues like Fabric in London and among a generation of producers who had grown up on both genres simultaneously. The form has no fixed geography — its centre of gravity has moved from UK to Ibiza to Berlin and back — but its presence in contemporary club music is so pervasive that it has effectively become the default setting for much of the global dancefloor.',
    releases: [
      { title: '"Body Jackin\'" — Inland Knights', year: 1998 },
      { title: '"Muzik Xpress" — Steve Bug', year: 1999 },
      { title: '"Music Is the Answer" — Danny Tenaglia', year: 1998 },
    ]},

  { id:'warp', label:'Warp Records', type:'label', genre:'experimental', era:1989, city:'Sheffield', country:'UK', bandcamp:'warp',
    desc:'Warp was founded in Sheffield in 1989 by Steve Beckett and Rob Mitchell, operating from their FON record shop. Its first releases documented Sheffield\'s bleep and bass scene. The 1992 Artificial Intelligence compilation brought together artists including Aphex Twin, Autechre, and Richie Hawtin under an umbrella later labelled IDM (intelligent dance music). Warp has operated from Sheffield throughout its existence and remains one of the most significant independent electronic music labels in the UK.',
    releases: [
      { title: '"Track With No Name" — Forgemasters', year: 1989 },
      { title: '"LFO" — LFO', year: 1990 },
      { title: 'Artificial Intelligence (compilation)', year: 1992 },
      { title: 'Selected Ambient Works Volume II — Aphex Twin', year: 1994 },
      { title: 'Amber — Autechre', year: 1994 },
      { title: 'Music Has the Right to Children — Boards of Canada', year: 1998 },
    ]},

  { id:'fabric', label:'Fabric', type:'venue', genre:'techno', era:1999, city:'London', country:'UK',
    desc:'Fabric opened on 29 October 1999 in a former cold-storage facility on Charterhouse Street in Smithfield, London. The venue operates three rooms, with Room One featuring a dancefloor designed to transmit bass frequencies physically through the floor. The fabric and fabriclive mix CD series have documented the club\'s programming across more than 100 volumes. In 2016 Islington Council revoked the club\'s licence following two drug-related deaths; the decision was reversed after a public campaign, and the club reopened in January 2017.' },

  { id:'downwards', label:'Downwards', type:'label', genre:'techno', era:1993, city:'Birmingham', country:'UK',
    desc:'Downwards was founded in Birmingham in 1993 by Karl O\'Connor (Regis) and Peter Sutton (Female). The label developed a Birmingham techno sound that combined the rhythmic physicality of Chicago house with European industrial electronics and a deliberately confrontational aesthetic. Surgeon (Anthony Child) was closely associated with the label from its founding. Downwards remains independent and active.',
    releases: [
      { title: '"Magneze" — Surgeon', year: 1994 },
      { title: 'Gymnastics — Regis', year: 1996 },
    ]},

  { id:'soma', label:'Soma Records', type:'label', genre:'techno', era:1991, city:'Glasgow', country:'UK',
    desc:'Soma Quality Recordings was co-founded in Glasgow in 1991 by the DJ duo Slam and Glenn Gibbons. The label is best known internationally for releasing the early recordings of Daft Punk: both the New Wave EP and "Da Funk" appeared on Soma in 1994 before the duo signed to Virgin/Parlophone. Soma has released techno and electronic music from UK and international artists throughout its existence.',
    releases: [
      { title: 'New Wave EP — Daft Punk', year: 1994 },
      { title: '"Da Funk" — Daft Punk', year: 1994 },
      { title: '"Positive Education" — Slam', year: 1994 },
      { title: '"Utopia" — Slam', year: 2000 },
    ]},

  { id:'sub_club', label:'Sub Club', type:'venue', genre:'techno', era:1987, city:'Glasgow', country:'UK',
    desc:'The Sub Club is a basement venue at 22 Jamaica Street in Glasgow, operating since 1 April 1987. It is commonly cited as the longest-running underground dance club in the world under continuous operation. The Subculture night, run by Harri & Domenic, has operated every Saturday since 1994. Optimo (Espacio), a Sunday night run by JD Twitch and JG Wilkes, ran from 1997 to 2010 and was widely regarded as one of the most adventurously programmed club nights in Europe.' },

  { id:'modern_love', label:'Modern Love', type:'label', genre:'ambient', era:2002, city:'Manchester', country:'UK',     desc:'Modern Love was founded in Manchester in 2002. The label became most closely associated with Andy Stott and Miles Whittaker, whose solo and collaborative output defined a particular strain of slow, industrial-influenced electronic music. Stott\'s albums from 2011 and 2012 received substantial critical attention and positioned Modern Love as one of the most significant UK labels for experimental electronic music of that period.',
    releases: [
      { title: 'Passed Me By — Andy Stott', year: 2011 },
      { title: 'We Stay Together — Andy Stott', year: 2011 },
      { title: 'Luxury Problems — Andy Stott', year: 2012 },
      { title: 'Faith in Strangers — Andy Stott', year: 2014 },
    ]},

  { id:'fuse_london', label:'Fuse London', type:'label', genre:'techhouse', era:2008, city:'London', country:'UK',
    desc:'Fuse London was established as a club night at Fabric in 2008 before developing into a label. It occupies the more underground end of the tech house spectrum, focusing on groove-driven, functional dance music. The label has maintained a consistent aesthetic across its releases since its founding.',
    releases: [
      { title: '"Acid Over" — Enzo Siragusa', year: 2011 },
      { title: '"Spectrum" — Skream', year: 2013 },
    ]},

  { id:'paulatemple', label:'Paula Temple', type:'artist', genre:'techno', era:2012, city:'London', country:'UK',
    desc:'Paula Temple is a London-based producer and DJ whose work positions itself at the intersection of techno, noise, and industrial music. She founded the Noise Manifesto label as a platform for her output and her explicitly political practice. Her productions are characterised by heavily distorted textures and unconventional structure.',
    releases: [
      { title: '"Edge of Everything" (Noise Manifesto)', year: 2013 },
      { title: '"Decon-Recon" EP (Noise Manifesto)', year: 2016 },
      { title: '"Colonized" (Noise Manifesto)', year: 2018 },
    ]},

  { id:'surgeon', label:'Surgeon', type:'artist', genre:'techno', era:1992, city:'Birmingham', country:'UK', bandcamp:'dj-surgeon', bandcamp_album:'931518171',
    desc:'Anthony Child records as Surgeon and has been based in Birmingham throughout his career. He co-developed the Downwards label and sound with Karl O\'Connor from 1993 onward. His productions apply Chicago house rhythms to a colder European electronics aesthetic. He has been a resident at Berghain since the mid-2000s. As British Murder Boys — his duo with Regis (Karl O\'Connor) — he produced a more noise-influenced body of work in the early 2000s.',
    releases: [
      { title: 'Basictonalvocabulary (Tresor)', year: 1997 },
      { title: 'Balance 005 (mix compilation)', year: 2003 },
      { title: 'Don\'t Give Way to Fear — British Murder Boys', year: 2003 },
      { title: '"Crash Recoil" (Dynamic Tension)', year: 2010 },
    ]},

  { id:'regis', label:'Regis', type:'artist', genre:'techno', era:1993, city:'Birmingham', country:'UK',
    desc:'Karl O\'Connor records as Regis and co-founded Downwards Records with Female in Birmingham in 1993. Alongside Surgeon, he forms the core of Birmingham\'s industrial techno lineage — music built from EBM, post-industrial noise, and stripped Detroit techno. Together they recorded as British Murder Boys (2001–2006), whose confrontational, uncompromising tracks influenced the harder edges of European techno for a decade. O\'Connor also co-founded Sandwell District and has released on Tresor, making him a key node between Birmingham, Berlin, and Brussels.',
    releases: [
      { title: 'Dwellings (Downwards)', year: 1995 },
      { title: 'Gymnast (Downwards)', year: 2000 },
      { title: 'Gymnast II (Tresor)', year: 2004 },
      { title: '"Manbitch" (Liberation Technologies)', year: 2019 },
    ]},

  { id:'andy_stott', label:'Andy Stott', type:'artist', genre:'ambient', era:2004, city:'Manchester', country:'UK',
    desc:'Andy Stott is a Manchester-based producer who has released all his music on Modern Love. His early records were in a functional techno mode; from 2011 onward his approach changed substantially, moving toward slower, more heavily processed music that draws on industrial, dub, and post-punk. Luxury Problems (2012) incorporated treated vocals by his former piano teacher, Alison Skidmore. He also records as one half of Demdike Stare with Miles Whittaker.',
    releases: [
      { title: 'Passed Me By (Modern Love)', year: 2011 },
      { title: 'We Stay Together (Modern Love)', year: 2011 },
      { title: 'Luxury Problems (Modern Love)', year: 2012 },
      { title: 'Faith in Strangers (Modern Love)', year: 2014 },
      { title: 'Too Many Voices (Modern Love)', year: 2016 },
    ]},

  { id:'hessle_audio', label:'Hessle Audio', type:'label', genre:'experimental', era:2007, city:'London', country:'UK',
    desc:'Hessle Audio was founded in 2007 by Ben UFO, Pangaea, and Pearson Sound. Every release requires unanimous approval from all three founders. The label emerged from the post-dubstep environment of London and Leeds, developing an approach that crossed sub-bass music, house, and techno. Its releases have included early work by Objekt and Blawan alongside the founders\' own productions.',
    releases: [
      { title: '"Headsteppin" — Pearson Sound', year: 2008 },
      { title: '"Play With the Changes" — Pangaea', year: 2011 },
      { title: '"Tinsel & Foil" — Objekt', year: 2012 },
      { title: '"Wet Will Always Dry" — Blawan', year: 2013 },
    ]},

  { id:'slam', label:'Slam', type:'artist', genre:'techno', era:1990, city:'Glasgow', country:'UK',
    desc:'Slam is a Glasgow DJ duo consisting of Stuart McMillan and Orde Meikle. They co-founded Soma Records in 1991 and have been residents at the Sub Club from its early years. In 1993 they received a demo tape from Thomas Bangalter and Guy-Manuel de Homem-Christo and released it on Soma — both the New Wave EP and "Da Funk" (both 1994) appeared on the label before Daft Punk signed to Parlophone.',
    releases: [
      { title: '"Positive Education" (Soma)', year: 1994 },
      { title: '"Stepback" (Soma)', year: 1999 },
      { title: '"Utopia" (Soma)', year: 2000 },
      { title: 'Paragraph (Soma)', year: 2015 },
    ]},

  // ── UK — GARAGE / GRIME / DUBSTEP ────────────────────────────────────────
  { id:'uk_garage', label:'UK Garage', type:'style', genre:'chicago', era:1993, city:'London', country:'UK',
    desc:'UK garage emerged in London in the early 1990s as a mutation of American house and R&B, distinguished by its syncopated rhythmic feel, pitched-up vocal samples, and emphasis on texture over structure. The name came from its proximity to US garage house, but the British version quickly developed its own character: faster tempos, more emphasis on bass, and a lyrical culture drawn from London\'s Black and mixed communities. Pirate radio stations — Rinse FM, Déjà Vu, Heat FM — were the primary distribution mechanism for a sound the mainstream music industry largely ignored. UK garage produced two immediate offspring: 2-step, which stripped the rhythm back and made it more abstract; and grime, which replaced smooth vocals with MCing and roughened every surface.',
    releases: [
      { title: '"Re-Rewind" — Artful Dodger ft. Craig David', year: 1999 },
      { title: '"Flowers" — Sweet Female Attitude', year: 2000 },
    ]},

  { id:'2step', label:'2-Step', type:'style', genre:'chicago', era:1997, city:'London', country:'UK',
    desc:'2-step garage — named for its distinctive off-kilter kick drum pattern, which avoided the four-on-the-floor pulse of house in favour of irregular placements — emerged from London\'s garage scene in the late 1990s as the genre\'s most abstract and rhythmically sophisticated development. Producers including Dem 2, Todd Edwards, and MJ Cole built tracks around the negative space between beats, creating a physical urgency that paradoxically felt less mechanical than conventional house. 2-step\'s influence on subsequent British music was substantial: its drum programming is audible in dubstep, UK funky, and across a generation of producers who learned their craft on its templates.',
    releases: [
      { title: '"Oh L\'Amour" — Dem 2', year: 1998 },
      { title: '"Heartbroken" — T2 ft. Jodie', year: 2007 },
    ]},

  { id:'grime', label:'Grime', type:'style', genre:'chicago', era:2001, city:'London', country:'UK',
    desc:'Grime emerged from East London in 2001-2002 as a radical departure from the smooth aesthetics of UK garage. Where garage had been aspirational and nocturnal, grime was confrontational and diurnal — a music made for afternoons on estates in Bow, Lewisham, and Tottenham rather than Saturday nights in West End clubs. Its defining characteristics were an abrasive electronic sound palette, fast tempos around 140bpm, and MCing as the primary vehicle for expression. Wiley\'s Eskibeat — a sub-genre defined by icy, alien synthesiser patterns — was the sound\'s ground zero. Dizzee Rascal\'s "Boy in da Corner" (2003) brought it to critical attention; a decade later, Skepta, Stormzy, and Novelist made grime a global form.',
    releases: [
      { title: '"Wot Do U Call It?" — Wiley', year: 2004 },
      { title: 'Boy in da Corner — Dizzee Rascal', year: 2003 },
      { title: 'Konnichiwa — Skepta', year: 2016 },
    ]},

  { id:'rinse_fm', label:'Rinse FM', type:'venue', genre:'chicago', era:1994, city:'London', country:'UK',
    desc:'Rinse FM began as a pirate radio station broadcasting from Bow in East London in 1994, transmitting from tower blocks in the area that would become grime\'s geographical heartland. Its importance to the development of UK underground music is difficult to overstate: for twenty years, from UK garage through grime, dubstep, UK funky, and beyond, Rinse was the primary infrastructure through which new sounds reached listeners without mainstream distribution. DJs and MCs including Wiley, Skepta, Dizzee Rascal, Benga, and Skream all passed through its studios as unknown teenagers. In 2010 Rinse became a licensed station and remains on air, a remarkable institutional survival in a media landscape that has eliminated most of its equivalents.',
    releases: [
      { title: 'Rinse FM (pirate launch)', year: 1994 },
      { title: 'Rinse FM (licensed)', year: 2010 },
    ]},

  { id:'dubstep', label:'Dubstep', type:'style', genre:'ambient', era:2001, city:'London', country:'UK',
    desc:'Dubstep emerged in South London around 2001 from a specific collision: the rhythmic language of 2-step garage meeting the bass weight and spatial depth of dub reggae, filtered through UK hardcore and sound system culture. Its defining characteristics were a half-time 140bpm pulse, enormous sub-bass frequencies that required specialist sound systems to reproduce properly, and a structural patience that owed more to dub than to house. Digital Mystikz, Skream, Benga, and Loefah were its early architects; Burial\'s anonymous productions gave the sound an emotional depth that secured its place in music history. The commercial version that emerged after 2010 bears little relationship to the original South London form.',
    releases: [
      { title: '"Midnight Request Line" — Skream', year: 2005 },
      { title: 'Untitled — Burial', year: 2006 },
      { title: '"Anti War Dub" — Digital Mystikz', year: 2005 },
    ]},

  { id:'digital_mystikz', label:'Digital Mystikz', type:'artist', genre:'ambient', era:2002, city:'London', country:'UK',
    desc:'Digital Mystikz — Mala (Mark Lawrence) and Coki (Dean Harris) — were among the founding architects of dubstep, operating from South London and rooted in the sound system culture of dub and jungle that predated the genre. Their productions were distinguished by an almost geological patience: long, dark, bass-heavy tracks that moved slowly and created physical presence through sub-frequencies rather than rhythmic density. Mala\'s solo work extended into Cuba and Detroit, demonstrating the form\'s connections to broader traditions of Black diasporic music. DMZ, the night they co-founded at Mass in Brixton in 2004, became the defining institutional space of early dubstep.',
    releases: [
      { title: '"Anti War Dub"', year: 2005 },
      { title: '"Haunted"', year: 2005 },
      { title: 'Return II Space — Mala', year: 2012 },
    ]},

  { id:'dmz', label:'DMZ', type:'venue', genre:'ambient', era:2004, city:'London', country:'UK',
    desc:'DMZ was a club night held monthly at Mass in Brixton, South London, founded in 2004 by Mala, Coki (together as Digital Mystikz), and Loefah. In its five-year run it became the institutional centre of dubstep\'s original phase — the space where the sound\'s core producers and audiences gathered and where the aesthetic standards of early dubstep were established. The night ran until 2009. Its influence is roughly analogous to the Warehouse in Chicago or Tresor in Berlin: a specific space, in a specific city, during a specific window, where a music found its identity.',
    releases: [
      { title: 'DMZ Recordings Vol. 1', year: 2006 },
    ]},

  { id:'skream', label:'Skream', type:'artist', genre:'ambient', era:2001, city:'London', country:'UK',
    desc:'Oliver Jones — Skream — began producing dubstep in his bedroom in Croydon from the age of thirteen, and became one of the form\'s most prolific and influential producers before turning eighteen. His track "Midnight Request Line" (2005) — a melodic, almost romantic dubstep record built on a spiralling bass motif — became the genre\'s first widely recognised classic. Skream\'s later career moved toward house and disco, a trajectory that paralleled dubstep\'s broader mutation into more accessible forms. His early productions, released on Tempa and DMZ, remain definitive statements of the original sound.',
    releases: [
      { title: '"Midnight Request Line"', year: 2005 },
      { title: 'Skream! (album)', year: 2006 },
    ]},

  { id:'wiley', label:'Wiley', type:'artist', genre:'chicago', era:2001, city:'London', country:'UK',
    desc:'Richard Cowie — Wiley — is the artist most responsible for inventing grime as a musical form. His Eskibeat productions — built from icy synthesiser patterns, unconventional scales, and a rhythmic feel derived from UK garage but stripped of its smoothness — defined the sound\'s aesthetic in 2001-2003. Wiley mentored virtually every significant first-wave grime artist including Dizzee Rascal, Skepta, and JME, and his output as a producer and MC spans more than two decades of consistent innovation. He has been simultaneously celebrated as the Godfather of Grime and controversially marginalised by an industry that profited from the form he built.',
    releases: [
      { title: '"Eskimo"', year: 2002 },
      { title: '"Wot Do U Call It?"', year: 2004 },
      { title: 'Godfather (album)', year: 2017 },
    ]},

  // ── UK — JUNGLE / DRUM AND BASS ─────────────────────────────────────────
  { id:'white_label', label:'White Label', type:'culture', genre:'techno', era:1990, city:'London', country:'UK',
    desc:'White label records are vinyl pressings with no printed sleeve or artist information — just a plain white label, sometimes hand-stamped with a catalogue number or side marker. The practice became central to the UK underground from the early 1990s onward, running through rave, jungle, drum and bass, UK garage, and dubstep. White labels served multiple functions: testing unfinished tracks on dance floors before committing to a pressing, maintaining anonymity for artists releasing on competing labels, and creating scarcity and mystique. DJs guarded their white labels carefully, sometimes scratching off identifying marks or applying false stickers. The white label economy operated largely outside normal retail channels — through specialist record shops, direct from distributors, or handed between DJs — and represented a parallel infrastructure for music that the mainstream industry could not easily co-opt or commodify.',
    },

  { id:'jungle', label:'Jungle', type:'style', genre:'techno', era:1992, city:'London', country:'UK',
    desc:'Jungle emerged in Britain in the early 1990s from the breakbeat hardcore scene, defined by the combination of heavily processed and time-stretched breakbeats — derived from American hip-hop samples, particularly the Amen break from The Winstons\' 1969 recording "Amen, Brother" — over sub-bass patterns drawn from reggae and dub sound system culture. The tempo was fast (160-180bpm) but the rhythmic feel was dense and complex, with multiple layers operating simultaneously. Jungle was explicitly a Black British form: its sound, its community, and its commercial infrastructure were built by and for the children of the Windrush generation and their peers. It was the form in which British electronic music first developed a genuinely independent aesthetic, rather than responding to American or European templates.',
    releases: [
      { title: '"Original Nuttah" — UK Apache & Shy FX', year: 1994 },
      { title: '"Terrorist" — Remarc', year: 1994 },
    ]},

  { id:'drum_and_bass', label:'Drum and Bass', type:'style', genre:'techno', era:1994, city:'London', country:'UK',
    desc:'Drum and bass emerged from jungle in 1994 as producers began to clean up the production aesthetics, reduce rhythmic density, and develop more structured forms. The name reflected the reduction to fundamentals: highly complex drum programming over sub-bass, with everything else stripped back. It developed in multiple directions simultaneously — the dark, ominous techstep of Metalheadz; the melodic, jazz-influenced atmospheric style of LTJ Bukem and Good Looking Records; the commercial rollers of Andy C and RAM Records; and the experimental work of labels like Reinforced and Moving Shadow. Drum and bass remains a genuinely international form, though its emotional and aesthetic core was established in the mid-1990s by a specific network of London producers, DJs, and promoters.',
    releases: [
      { title: '"Timeless" — Goldie', year: 1995 },
      { title: '"Inner City Life" — Goldie', year: 1994 },
      { title: 'New Forms — Roni Size / Reprazent', year: 1997 },
    ]},

  { id:'reinforced_records', label:'Reinforced Records', type:'label', genre:'techno', era:1990, city:'London', country:'UK',
    desc:'Reinforced Records was founded in Dollis Hill, North London in 1990 by 4hero (Dego and Marc Mac) and grew from a mail-order operation to become one of the most important labels in the development of jungle and drum and bass. Its catalogue documents the transition from hardcore rave through jungle to the more sophisticated forms that followed: artists including Goldie (as Rufige Kru), Doc Scott, and Peshay all released foundational work on Reinforced. The label\'s aesthetic was defined by an interest in experimentation and emotional depth that distinguished it from the more functional ends of the genre.',
    releases: [
      { title: '"Terminator" — Rufige Kru (Reinforced)', year: 1992 },
      { title: '"Metropolis" — Rufige Kru (Reinforced)', year: 1993 },
    ]},

  { id:'4hero', label:'4hero', type:'artist', genre:'techno', era:1990, city:'London', country:'UK',
    desc:'4hero — Marc Mac (Marc Clair) and Dego (Dego McFarlane) — were the producers most responsible for the conceptual ambition of early drum and bass. Alongside running Reinforced Records they developed a production style drawing on jazz, soul, and experimental electronics as much as on the breakbeat traditions that defined the genre. Their 1994 album "Parallel Universe" remains one of the most forward-looking records of the rave era. Later work, particularly "Two Pages" (1998), moved explicitly into jazz-influenced territory and anticipated a generation of producers interested in electronic music\'s relationships to Black American jazz traditions. Dego\'s subsequent solo and collaborative work has continued to explore those intersections.',
    releases: [
      { title: 'Parallel Universe (Reinforced)', year: 1994 },
      { title: 'Two Pages (Reinforced)', year: 1998 },
    ]},

  { id:'moving_shadow', label:'Moving Shadow', type:'label', genre:'techno', era:1990, city:'London', country:'UK',
    desc:'Moving Shadow Records was founded in London in 1990 by Rob Playford and became one of the defining labels of the jungle-to-drum-and-bass transition. It released Goldie\'s early work (as Rufige Kru), Omni Trio\'s foundational atmospheric records, and key tracks by Dillinja, Dom & Roland, and others. Playford\'s approach — meticulous mastering, high-pressure conceptual development, and a preference for emotional complexity over functional simplicity — helped establish drum and bass as a form capable of artistic ambition beyond the dancefloor.',
    releases: [
      { title: 'Moving Shadow 50 (compilation)', year: 1996 },
      { title: '"Renegade Snares" — Omni Trio', year: 1993 },
    ]},

  { id:'goldie', label:'Goldie', type:'artist', genre:'techno', era:1992, city:'London', country:'UK',
    desc:'Clifford Joseph Price — Goldie — was a graffiti artist, visual artist, and producer who became the most visible face of drum and bass through extraordinary production skill and an instinct for cultural positioning unusual in the genre. His breakthrough track "Terminator" (as Rufige Kru, 1992) and "Inner City Life" (1994) are among the most emotionally powerful records in the drum and bass canon. His debut album "Timeless" (1995) — which included a 21-minute epic title track — was the first drum and bass album to reach the mainstream music press as a serious artistic statement rather than a genre curiosity. Goldie founded Metalheadz in 1994 with Grooverider and Kemistry; the label\'s Sunday Sessions at the Blue Note became the genre\'s most important regular event.',
    releases: [
      { title: '"Terminator" (as Rufige Kru, Reinforced)', year: 1992 },
      { title: '"Inner City Life" (FFRR)', year: 1994 },
      { title: 'Timeless (FFRR)', year: 1995 },
    ]},

  { id:'grooverider', label:'Grooverider', type:'artist', genre:'techno', era:1988, city:'London', country:'UK',
    desc:'Raymond Bingham — Grooverider — was alongside Fabio one of the two DJs most responsible for building the early rave scene that would become jungle and drum and bass. His sets at Rage at Heaven in London from 1988 onwards were the incubator for much of the music that followed. As a DJ rather than primarily a producer, his influence was felt through selection and sequencing — he played harder, darker, and more uncompromising than almost any of his contemporaries, and the producers who came after him were in many ways trying to make music that met his standards. He co-founded Prototype Recordings and was a central figure at Metalheadz.',
    releases: [
      { title: 'Mysteries of Funk (Higher Ground)', year: 1998 },
      { title: '"Prototype" (Prototype Recordings)', year: 1996 },
    ]},

  { id:'fabio', label:'Fabio', type:'artist', genre:'techno', era:1988, city:'London', country:'UK',
    desc:'Lloyd Psyche — Fabio — partnered with Grooverider at Rage at Heaven from 1988 and became one of the foundational DJs of the jungle and drum and bass world. Where Grooverider tended toward darkness and technical aggression, Fabio cultivated a soulful, melodic approach that influenced the atmospheric and jazz-inflected strands of the genre. His Creative Source label and long-running radio shows on Kiss FM and BBC Radio 1 made him a consistent presence across three decades of British dance music. Fabio and Grooverider together represent the curatorial and DJ tradition that shaped what drum and bass could become, as distinct from the producers who built its recorded catalogue.',
    releases: [
      { title: 'Fabio: Subculture mix (Moving Shadow)', year: 1996 },
    ]},

  { id:'ltj_bukem', label:'LTJ Bukem', type:'artist', genre:'ambient', era:1993, city:'London', country:'UK',
    desc:'Danny Williamson — LTJ Bukem — was the primary architect of the atmospheric or "intelligent" drum and bass strand, using jazz piano samples, lush string textures, and a more spacious approach to drum programming to create a strain of the music that offered an alternative to the genre\'s harder currents. His label Good Looking Records and its imprints became the primary home for this approach. Bukem\'s DJ sets — often several hours long — were structured like musical journeys, and his Progression Sessions events influenced how drum and bass was presented and experienced as a listening form rather than purely functional dance music.',
    releases: [
      { title: '"Horizons" (Good Looking)', year: 1995 },
      { title: '"Music" (Good Looking)', year: 1993 },
    ]},

  { id:'good_looking_records', label:'Good Looking Records', type:'label', genre:'ambient', era:1993, city:'London', country:'UK',
    desc:'Good Looking Records was founded by LTJ Bukem in 1993 as the institutional home for the atmospheric, jazz-influenced strand of drum and bass. Its catalogue — spanning the main label and imprints Earth, Looking Good, and Liquid Funk — documented an approach to the genre that prioritised texture, melody, and emotional weight over rhythmic aggression. Artists including Photek, Peshay, and Intense released early work through the label\'s network. Good Looking\'s approach was influential not only within drum and bass but on the broader culture of ambient electronic music in Britain during the 1990s.',
    releases: [
      { title: '"Logical Progression" (compilation, FFRR)', year: 1996 },
    ]},

  { id:'roni_size', label:'Roni Size / Reprazent', type:'artist', genre:'techno', era:1994, city:'Bristol', country:'UK',
    desc:'Roni Size and his collective Reprazent were based in Bristol and represented a branch of drum and bass that maintained explicit connections to the city\'s live music and jazz culture. Their Mercury Prize-winning debut album "New Forms" (1997) brought drum and bass to a mainstream audience and demonstrated the form\'s capacity for structural sophistication and emotional range. The album\'s use of live instrumentation — bass guitar, piano, acoustic drums — alongside programmed breakbeats produced a sound simultaneously electronic and organic. It remains one of the most complete artistic statements the genre produced. Bristol\'s specific culture — the legacy of the Wild Bunch, Portishead, and Massive Attack — gave Reprazent\'s drum and bass a different character from the London mainstream.',
    releases: [
      { title: 'New Forms (Talkin\' Loud)', year: 1997 },
      { title: 'In the Mode (Talkin\' Loud)', year: 2000 },
    ]},

  { id:'andy_c', label:'Andy C', type:'artist', genre:'techno', era:1992, city:'London', country:'UK',
    desc:'Andrew Clarke — Andy C — is among the most technically accomplished DJs in drum and bass and co-founder of RAM Records, which he launched in 1992 at seventeen. RAM became one of the most commercially successful drum and bass labels, releasing music by Chase & Status, Shy FX, and Camo & Krooked among many others. Andy C\'s DJ style — characterised by rapid mixing, double drops, and a technical precision that became the genre\'s benchmark for live performance — defined what drum and bass DJing looked like at its apex. His large-venue sets established the template for how drum and bass could be performed and experienced at arena scale.',
    releases: [
      { title: 'Andy C: Nightlife series (RAM)', year: 1999 },
      { title: '"Straight Jacket" (RAM)', year: 2012 },
    ]},

  { id:'ram_records', label:'RAM Records', type:'label', genre:'techno', era:1992, city:'London', country:'UK',
    desc:'RAM Records was co-founded in London in 1992 by Andy C and Ant Miles and became one of the most commercially and artistically successful drum and bass labels. Its catalogue spans the full development of the genre from early jungle through contemporary neurofunk and liquid drum and bass. RAM\'s commercial success — unusual in a genre that has often existed at the margins of the mainstream — was matched by its artistic credibility through decades of releasing technically and emotionally demanding music. It remains an active and influential label.',
    releases: [
      { title: 'RAM Records Vol. 1 (compilation)', year: 1993 },
      { title: '"Camo & Krooked: Zeitgeist" (RAM)', year: 2012 },
    ]},

  // ── BELGIUM ───────────────────────────────────────────────────────────────
  { id:'token', label:'Token Records', type:'label', genre:'techno', era:2007, city:'Antwerp', country:'BE',
    desc:'Token Records was founded in Belgium in 2007 by Kr!z. The label releases dark, precise techno at a deliberate pace, prioritising quality over volume. Its core artists include Inigo Kennedy, Ø [Phase], Xhin, and Rødhåd. Token is part of a continuing Belgian engagement with techno that extends back to R&S Records in the 1980s and 1990s.',
    releases: [
      { title: '"The Calling" — Inigo Kennedy', year: 2013 },
      { title: 'Vaudeville — Inigo Kennedy', year: 2014 },
      { title: '"Binary Opposition" — Ø [Phase]', year: 2012 },
      { title: '"Elliptic" — Xhin', year: 2013 },
    ]},

  { id:'rs_records', label:'R&S Records', type:'label', genre:'techno', era:1983, city:'Ghent', country:'BE',
    desc:'R&S Records was founded in Ghent in 1983 by Renaat Vandepapeliere and Sabine Maes, initially releasing Italo disco and electronic pop. By 1990 it had shifted focus to underground electronic music and became the most prominent European techno label of the early 1990s, releasing records by Joey Beltram, Aphex Twin, and others. The label closed in 2000 and relaunched in 2008 alongside its ambient sub-label Apollo.',
    releases: [
      { title: '"Energy Flash" — Energy Flash (Joey Beltram)', year: 1990 },
      { title: '"Mentasm" — Second Phase (Joey Beltram)', year: 1991 },
      { title: '"Digeridoo" — Aphex Twin', year: 1992 },
      { title: '"Dominator" — Human Resource', year: 1991 },
    ]},

  { id:'apollo_rec', label:'Apollo Records', type:'label', genre:'ambient', era:1992, city:'Ghent', country:'BE',
    desc:'Apollo Records was launched in 1992 as an ambient sub-label of R&S Records. It was conceived to release slower, more textural electronic music during a period when ambient techno and introspective electronic music were developing as distinct forms. Global Communication and Aphex Twin both appeared on the label. Apollo relaunched alongside R&S in 2009.',
    releases: [
      { title: '76:14 — Global Communication', year: 1994 },
      { title: 'Surfing on Sine Waves — Polygon Window (Aphex Twin)', year: 1993 },
      { title: '"Marimba" — Mystic Braves', year: 1993 },
    ]},

  { id:'joey_beltram', label:'Joey Beltram', type:'artist', genre:'techno', era:1990, city:'New York', country:'US',
    desc:'Joey Beltram is a New York-born producer who achieved his greatest influence through records released on the Belgian label R&S. His "Energy Flash" (1990) and his Second Phase project\'s "Mentasm" (1991) were central to the sound of European rave culture in the early 1990s. "Mentasm" introduced a heavily detuned bass synthesizer sound — subsequently known as the "hoover" — that became a defining element of Belgian, Dutch, and UK hardcore and rave music.',
    releases: [
      { title: '"Energy Flash" (R&S)', year: 1990 },
      { title: '"Mentasm" — Second Phase (R&S)', year: 1991 },
      { title: '"Subsonic" — Beltram (Warp)', year: 1992 },
      { title: '"New York City" (R&S)', year: 1992 },
    ]},

  // ── GERMANY — BERLIN ────────────────────────────────────────────────────
  { id:'hardwax', label:'Hard Wax', type:'venue', genre:'detroit', era:1989, city:'Berlin', country:'DE',
    desc:'Hard Wax is a record shop co-founded in Berlin in 1989 by Mark Ernestus and Moritz von Oswald at Paul-Lincke-Ufer 44a in Kreuzberg. It was the primary source for Detroit and Chicago records in Berlin before those recordings were available through mainstream distribution, and served as an informal gathering point for the emerging Berlin electronic music community. The shop predates Tresor Club by two years. It continues to operate from the same location.' },

  { id:'basicchannel', label:'Basic Channel', type:'label', genre:'ambient', era:1993, city:'Berlin', country:'DE',
    desc:'Basic Channel was founded in Berlin in 1993 by Moritz von Oswald and Mark Ernestus. The label applied dub production methods — the use of echo, reverb, and delay as compositional elements, drawn from Jamaican studio practice — to Detroit techno structures. Releases appeared in plain white sleeves with minimal information. Basic Channel issued seven twelve-inch records before the founders shifted activity to the Chain Reaction sub-label. Its catalogue has been widely cited as foundational to dub techno and ambient electronic music.',
    releases: [
      { title: '"Phylyps Trak" (BC-02)', year: 1993 },
      { title: '"Quadrant Dub" (BC-06)', year: 1994 },
      { title: '"Enforcement" — Cyrus (BC-01)', year: 1993 },
      { title: '"Lyot Remakt" (BC-07)', year: 1995 },
    ]},


  { id:'monolake', label:'Monolake', type:'artist', genre:'ambient', era:1995, city:'Berlin', country:'DE', bandcamp:'roberthenke', bandcamp_album:'2163278068',
    desc:'Monolake was the project of Robert Henke, with early involvement from Gerhard Behles. Formed in Berlin in the mid-1990s, the project released dub-influenced techno on Chain Reaction. Henke and Behles subsequently co-founded Ableton and developed Ableton Live, the music production software widely used in electronic music today. Henke has continued releasing music as Monolake and working in installation and concert contexts.',
    releases: [
      { title: '"Cyan" (Chain Reaction)', year: 1996 },
      { title: '"Gobi" (Chain Reaction)', year: 1999 },
      { title: 'Cinemascope (Monolake imprint)', year: 2001 },
      { title: 'Ghosts (Imbalance)', year: 2012 },
    ]},

  { id:'tresor_club', label:'Tresor Club', type:'venue', genre:'techno', era:1991, city:'Berlin', country:'DE',
    desc:'Tresor opened on 18 January 1991 in the vault of the former Wertheim department store on Potsdamer Strasse, in the area between former East and West Berlin. The vault room — accessible through a single doorway, with low ceilings and original lockboxes still in the walls — created a particular acoustic environment. The original Tresor closed in 2005 when the building was demolished. A second location opened in 2007 at Köpenicker Strasse 70, in a former heating plant.' },

  { id:'tresor_records', label:'Tresor Records', type:'label', genre:'techno', era:1991, city:'Berlin', country:'DE',
    desc:'Tresor Records was founded alongside the club in 1991 as its label arm. It became one of the first European techno labels to release records at a level of quality comparable to Detroit output, with an international roster including Jeff Mills, Surgeon, Speedy J, and Joey Beltram. The label continues to operate and has released over 200 records.',
    releases: [
      { title: 'Waveform Transmission Vol. 1 — Jeff Mills', year: 1992 },
      { title: '"Goes by the Name of Techno" — Speedy J', year: 1992 },
      { title: '"The Surgeon" — Surgeon', year: 1993 },
      { title: 'Neptune\'s Lair — Drexciya', year: 1999 },
    ]},

  { id:'berlin_zero_hour', label:'Berlin Zero Hour', type:'moment', genre:'techno', era:1991, city:'Berlin', country:'DE',
    desc:'The Berlin Wall falls November 1989, leaving a city full of abandoned buildings and a temporary absence of law. Techno parties move into the vacuum. In 1991 Tresor opens in the vault of the bombed Wertheim department store — Dimitri Hegemann flies in Jeff Mills and the UR catalogue. The Berlin-Detroit axis is formalised. By 2004 Berghain opens in a former East German turbine hall. A city transformed from bombed periphery to the global capital of techno.' },

  { id:'detroit_berlin_axis', label:'Detroit–Berlin Axis', type:'moment', genre:'techno', era:1992, city:'Detroit', country:'US',
    desc:'The direct line between Detroit and Berlin that defined European techno. Underground Resistance records cross the Atlantic. Jeff Mills and Robert Hood fly to Tresor. The Belleville Three play to German crowds who hear in Detroit techno a mirror of their own post-Wall rupture. Two post-industrial cities — one after deindustrialisation, one after division — find a shared vocabulary in machines.' },

  { id:'ostgut_club', label:'Ostgut Club', type:'venue', genre:'techno', era:1998, city:'Berlin', country:'DE',
    desc:'Ostgut was a club in Friedrichshain, Berlin, operating from 1998 to 2003. It was co-founded by Michael Teufele and Norbert Thormann and operated as a queer techno and fetish space. When the building was demolished in 2003, Thormann and Teufele opened Berghain at a nearby site in 2004.' },

  { id:'berghain', label:'Berghain', type:'venue', genre:'techno', era:2004, city:'Berlin', country:'DE',
    desc:'Berghain opened in December 2004 in a former East German heating plant at Am Wriezener Bahnhof in Friedrichshain, co-founded by Michael Teufele and Norbert Thormann. The main floor is a large concrete room with a Funktion-One sound system, operating on weekends from Saturday night into Monday morning. Panorama Bar, the upper floor, runs simultaneously with a house and garage programme. Berghain\'s Ostgut Ton label was founded in 2005.' },

  { id:'ostgut_ton', label:'Ostgut Ton', type:'label', genre:'techno', era:2005, city:'Berlin', country:'DE',
    desc:'Ostgut Ton was founded by Berghain in 2005. Its roster includes Marcel Dettmann, Ben Klock, Len Faki, Function, DVS1, and Efdemin, among others. The label releases both twelve-inch singles and albums and documents the aesthetic associated with Berghain\'s main floor and Panorama Bar. It has published a Berghain compilation series capturing the club\'s resident DJs.',
    releases: [
      { title: 'Berghain 01 (compilation)', year: 2005 },
      { title: 'Dettmann — Marcel Dettmann', year: 2010 },
      { title: 'One — Ben Klock', year: 2009 },
      { title: 'Incubation — Function', year: 2013 },
      { title: 'Decay — Efdemin', year: 2015 },
    ]},

  { id:'dettmann', label:'Marcel Dettmann', type:'artist', genre:'techno', era:2005, city:'Berlin', country:'DE', bandcamp:'marceldettmann', bandcamp_album:'1321514538',
    desc:'Marcel Dettmann is a Berlin-based producer and DJ who has been a resident at Berghain since the club\'s opening years. He releases on Ostgut Ton and his own MOS label. His techno is characterised by precision and sustained intensity over long sets. He was among the first Berghain residents to establish an international profile through appearances at major European events.',
    releases: [
      { title: '"DDR/Return" (Ostgut Ton)', year: 2007 },
      { title: 'Dettmann (Ostgut Ton)', year: 2010 },
      { title: 'Dettmann II (Ostgut Ton)', year: 2013 },
      { title: '"Repulsion" (MOS)', year: 2016 },
    ]},

  { id:'function', label:'Function', type:'artist', genre:'techno', era:2010, city:'Berlin', country:'DE', bandcamp:'function-inf-ny', bandcamp_album:'3802197456',
    desc:'Dave Sumner records as Function and has released on Ostgut Ton and Sandwell District, a label he co-founded. He relocated from Birmingham to Berlin. His techno is meditative and architectural in character, with an emphasis on atmosphere and long compositional development. His album Incubation (Ostgut Ton, 2013) is regarded as a significant work in contemporary techno.',
    releases: [
      { title: 'Incubation (Ostgut Ton)', year: 2013 },
      { title: '"Isolation" (Sandwell District)', year: 2010 },
      { title: '"Detached" (Ostgut Ton)', year: 2011 },
    ]},

  { id:'efdemin', label:'Efdemin', type:'artist', genre:'minimal', era:2008, city:'Berlin', country:'DE', bandcamp:'efdemindial', bandcamp_album:'1319483591',
    desc:'Phillip Sollmann records as Efdemin and has released on Dial Records and Ostgut Ton. His productions have an avant-garde quality within the techno context — unusual structures, considered use of silence, and strong conceptual clarity. His album Decay (Ostgut Ton, 2015) is regarded as one of the more distinctive records in contemporary techno.',
    releases: [
      { title: 'Efdemin (Dial)', year: 2008 },
      { title: 'Chicago (Dial)', year: 2011 },
      { title: 'Decay (Ostgut Ton)', year: 2015 },
    ]},

  { id:'panorama_bar', label:'Panorama Bar', type:'venue', genre:'deep', era:2004, city:'Berlin', country:'DE',
    desc:'Panorama Bar is the upper floor of Berghain, operating simultaneously with the main floor on weekends. It presents a programme of house, deep house, and garage music, distinct from the techno of the floor below. Long-term residents have included Cassy, Steffi, Nick Höppner, and Virginia. It functions as a separate cultural space within the same building as Berghain.' },

  { id:'innervisions', label:'Innervisions', type:'label', genre:'melodic', era:2005, city:'Berlin', country:'DE',
    desc:'Innervisions was founded in Berlin in 2005 by Dixon and Âme, and its defining characteristic is commitment to the long arc. This is a label built for music that earns its emotional resolution over three or four hours rather than three minutes. Âme\'s "Rej" (2005), the first release, is still the clearest statement of what it does: melody and tension, resolved slowly. Dixon, Âme, and Henrik Schwarz are its central artists.',
    releases: [
      { title: '"Rej" — Âme', year: 2005 },
      { title: '"Live" — Âme', year: 2012 },
    ]},

  { id:'dixon', label:'Dixon', type:'artist', genre:'melodic', era:2005, city:'Berlin', country:'DE',
    desc:'Steffen Berkhahn co-founded Innervisions in Berlin in 2005. He is primarily known as a DJ rather than a producer, and has been voted top DJ in Resident Advisor reader polls on multiple occasions. He plays long, varied sets across deep house, techno, and adjacent music.',
    releases: [
      { title: 'RA.274 (podcast/mix)', year: 2012 },
      { title: '"Oblong" (Innervisions)', year: 2014 },
    ]},

  { id:'ame', label:'Âme', type:'artist', genre:'melodic', era:2005, city:'Berlin', country:'DE', bandcamp:'ame-engoli', bandcamp_album:'3845194777',
    desc:'Âme is the production duo of Kristian Beyer and Frank Wiedemann, based in Berlin. They co-founded Innervisions in 2005. Their production "Rej" (2005) became one of the most recognised records in European melodic deep house. They also perform live as a duo, combining synthesizer work with DJ mixing.',
    releases: [
      { title: '"Rej" (Innervisions)', year: 2005 },
      { title: '"Live" (Innervisions)', year: 2012 },
    ]},

  { id:'afterlife', label:'Afterlife', type:'label', genre:'melodic', era:2014, city:'Berlin', country:'DE',
    desc:'Afterlife, founded by Tale of Us in Berlin in 2014, became the defining label of melodic techno\'s commercial ascent — the sound of summit festivals and Cercle performances livestreamed from ancient ruins. Technically polished, emotionally large, deliberately cinematic: the genre at its most accessible without becoming dishonest about what it is. The counterargument, that it domesticated something that once required effort to find, has some truth to it. Both things can be held at once.',
    releases: [
      { title: 'Realm of Consciousness (compilation)', year: 2016 },
      { title: '"North Star" — Tale of Us', year: 2016 },
      { title: '"Monument" — Tale of Us & Vaal', year: 2017 },
      { title: '"Rejoice" — Massano', year: 2022 },
    ]},

  { id:'taleofus', label:'Tale of Us', type:'artist', genre:'melodic', era:2010, city:'Berlin', country:'DE', bandcamp:'taleofus', bandcamp_album:'3260776828',
    desc:'Tale of Us is the project of Matteo Milleri and Carmine Conte, Italian producers based in Berlin. They founded the Afterlife label in 2014. Their productions are melodic and atmospheric, with a cinematic character. They have become widely booked at major European festivals and through the Cercle performance series.',
    releases: [
      { title: '"North Star" (Afterlife)', year: 2016 },
      { title: 'Endless (Deutsche Grammophon)', year: 2017 },
      { title: '"Monument" with Vaal (Afterlife)', year: 2017 },
      { title: '"Opaquer" (Afterlife)', year: 2019 },
    ]},

  { id:'dvs1', label:'DVS1', type:'artist', genre:'techno', era:2010, city:'Berlin', country:'DE', bandcamp:'dvs1hush', bandcamp_album:'1840316539',
    desc:'Zak Khutoretsky records as DVS1. He grew up in Minneapolis and has been based in Berlin. He has been a Berghain resident and releases on his HUSH label and Ben Klock\'s Klockworks. He has published writing on DJ practice and produced educational content on techno performance.',
    releases: [
      { title: '"Black Leather" (Klockworks)', year: 2012 },
      { title: '"Falling" (HUSH)', year: 2013 },
      { title: '"Reflections" (HUSH)', year: 2016 },
    ]},

  { id:'rodhad', label:'Rødhåd', type:'artist', genre:'techno', era:2010, city:'Berlin', country:'DE', bandcamp:'rodhad', bandcamp_album:'1051229826',
    desc:'Rødhåd is a Berlin-based DJ and producer who founded the Dystopian label in 2010. He has performed at Berghain and Panorama Bar and is known for long, slow-building DJ sets in a heavy, hypnotic techno style.',
    releases: [
      { title: '"Wunderblock" EP (Dystopian)', year: 2011 },
      { title: '"Gedankenreise" (Dystopian)', year: 2013 },
      { title: 'Dystopian 10 Years (compilation)', year: 2020 },
    ]},

  { id:'dystopian', label:'Dystopian', type:'label', genre:'techno', era:2010, city:'Berlin', country:'DE',
    desc:'Dystopian occupies the heaviest, most immersive end of the Berghain aesthetic. Founded by Rødhåd in Berlin in 2010, its releases — Rødhåd, Pfirter, Kobosil, Alignment — emphasise sound design over structure: tracks that develop through texture rather than melody, built to maximum effect in rooms with Funktion-One systems. The label name is not ironic. It accurately describes the emotional register of the music.',
    releases: [
      { title: '"Wunderblock" EP — Rødhåd', year: 2011 },
      { title: '"Pressure" — Kobosil', year: 2015 },
      { title: '"False Flag" — Pfirter', year: 2016 },
    ]},

  // ── GERMANY — COLOGNE ────────────────────────────────────────────────────
  { id:'kompakt', label:'Kompakt', type:'label', genre:'minimal', era:1998, city:'Cologne', country:'DE',
    desc:'Kompakt was formalised as a label in Cologne in 1998, growing from a record shop of the same name. Its founders include Michael Mayer, Wolfgang Voigt, Reinhard Voigt, and Jürgen Paape. The label is associated with a clean, groovy minimal house sound. Its annual Total compilation series has documented the label\'s output and aesthetic from 1998 onward. Wolfgang Voigt\'s GAS project, released on Kompakt, represents the label\'s more experimental and ambient dimension.',
    releases: [
      { title: 'Total 1 (compilation)', year: 1999 },
      { title: 'Closer Musik — Closer Musik', year: 2002 },
      { title: 'Immer — Michael Mayer', year: 2002 },
      { title: 'Narkopop — GAS', year: 2017 },
    ]},

  { id:'wmvoigt', label:'Wolfgang Voigt', type:'artist', genre:'ambient', era:1991, city:'Cologne', country:'DE',
    desc:'Wolfgang Voigt co-founded Kompakt in Cologne and has released under a large number of aliases across minimal house, techno, and experimental music. His GAS project, begun in 1995, produces ambient works built from heavily processed orchestral samples. GAS has released six albums, the most recent being Rausch (2018).',
    releases: [
      { title: 'Zauberberg (as GAS, Mille Plateaux)', year: 1997 },
      { title: 'Königsforst (as GAS, Mille Plateaux)', year: 1998 },
      { title: 'Pop (as GAS, Kompakt)', year: 2000 },
      { title: 'Narkopop (as GAS, Kompakt)', year: 2017 },
      { title: 'Rausch (as GAS, Kompakt)', year: 2018 },
    ]},

  { id:'mmayer', label:'Michael Mayer', type:'artist', genre:'minimal', era:1998, city:'Cologne', country:'DE',
    desc:'Michael Mayer is a Cologne-based DJ and producer who serves as label head of Kompakt. His productions and DJ work have contributed to defining the Cologne minimal sound — precise, groovy, and melodically understated. His Immer mix compilation and his entry in the DJ-Kicks series are regarded as strong documents of the Kompakt aesthetic.',
    releases: [
      { title: 'Immer (Kompakt)', year: 2002 },
      { title: 'DJ-Kicks: Michael Mayer (!K7)', year: 2004 },
      { title: '"Falling" (Kompakt)', year: 2014 },
    ]},

  { id:'gas', label:'GAS', type:'artist', genre:'ambient', era:1995, city:'Cologne', country:'DE',
    desc:'GAS is the ambient alias of Wolfgang Voigt, releasing on Kompakt. The project began in 1995 and has produced six albums to date. All GAS recordings are built from sampled orchestral material processed to the point where the source is no longer audible. The music operates without conventional rhythmic structure, consisting of slowly evolving textural masses.',
    releases: [
      { title: 'Zauberberg (Mille Plateaux)', year: 1997 },
      { title: 'Königsforst (Mille Plateaux)', year: 1998 },
      { title: 'Pop (Kompakt)', year: 2000 },
      { title: 'Narkopop (Kompakt)', year: 2017 },
      { title: 'Rausch (Kompakt)', year: 2018 },
    ]},

  { id:'minimal_house', label:'Minimal House', type:'style', genre:'minimal', era:1994, city:'Cologne', country:'DE',
    desc:'Minimal house and minimal techno emerged in the mid-1990s by stripping electronic music to its smallest functional elements. Robert Hood\'s Minimal Nation EP (1994) established the approach in Detroit: a single kick, a hi-hat, a bassline, no more than the form required. In Germany the influence ran through Cologne — Kompakt developed what became known as "microhouse," in which individual sounds carry high compositional weight and attention is directed toward texture and space rather than melody — and through Frankfurt, where Perlon and Playhouse extended the aesthetic with longer running times and even more reduced harmonic content. The form was a direct reaction against the grandiosity of progressive house and the maximalism of peak-time techno, insisting instead on the dignity of small gestures.',
    releases: [
      { title: 'Minimal Nation EP — Robert Hood (Music Man)', year: 1994 },
      { title: '"Spastik" — Plastikman (Plus 8)', year: 1993 },
      { title: 'Total 1 (Kompakt compilation)', year: 1998 },
    ]},

  // ── GERMANY — FRANKFURT ──────────────────────────────────────────────────
  { id:'perlon', label:'Perlon', type:'label', genre:'minimal', era:1999, city:'Frankfurt', country:'DE',
    desc:'Perlon was co-founded in Frankfurt in 1999 by Ricardo Villalobos and Zip. It became associated with microhouse — a reduced form of minimal house in which tracks routinely run to extended lengths, rhythmic elements are implied rather than stated, and individual sonic components carry high compositional weight. The Robert Johnson club in Offenbach was the primary associated venue.',
    releases: [
      { title: '"Thé au Harem d\'Archimède" — Ricardo Villalobos', year: 2004 },
      { title: '"Wunsch" — Zip', year: 2002 },
      { title: '"Rien" — Samim', year: 2007 },
      { title: '"Closer" — Pantytec', year: 2011 },
    ]},

  { id:'villalobos', label:'Ricardo Villalobos', type:'artist', genre:'minimal', era:1999, city:'Frankfurt', country:'DE',
    desc:'Ricardo Villalobos was born in Santiago, Chile, and grew up in Germany. He co-founded Perlon and has released music on Perlon, Playhouse, and other labels. His productions are characterised by extended durations, unusual structural decisions, and an approach to rhythm that owes as much to Latin American music as to European techno. He is also known for long DJ sets of high technical precision.',
    releases: [
      { title: '"Dexter" (Playhouse)', year: 2003 },
      { title: '"Fizheuer Zieheuer" (Playhouse)', year: 2006 },
      { title: 'Fabric 36 (mix compilation)', year: 2007 },
      { title: '"Dependent and Happy" (Playhouse)', year: 2003 },
    ]},

  { id:'zip', label:'Zip', type:'artist', genre:'minimal', era:1999, city:'Frankfurt', country:'DE',
    desc:'Zip co-founded Perlon with Ricardo Villalobos in Frankfurt in 1999. He is a DJ and producer working in a patient, deeply minimal style. He has been closely associated with the Robert Johnson club in Offenbach and has released music primarily through Perlon.',
    releases: [
      { title: '"Wunsch" (Perlon)', year: 2002 },
      { title: '"Raum" (Perlon)', year: 2005 },
      { title: '"So" (Perlon)', year: 2008 },
    ]},

  { id:'robertjohnson', label:'Robert Johnson', type:'venue', genre:'minimal', era:1999, city:'Frankfurt', country:'DE',
    desc:'Robert Johnson is a club in Offenbach, across the Main river from Frankfurt, open since 1999. It became the central venue for the microhouse and minimal aesthetic associated with Perlon, with Ricardo Villalobos and Zip as regular performers. Its programming has consistently prioritised patience and depth over peak-time spectacle. The club continues to operate.' },

  { id:'playhouse', label:'Playhouse Records', type:'label', genre:'minimal', era:1993, city:'Frankfurt', country:'DE',
    desc:'Playhouse was founded in Frankfurt in 1993 by Carsten Klemann. It was the first major platform for the Frankfurt minimal aesthetic — releasing early work by Roman Flügel, Isolée, and Ricardo Villalobos before Perlon existed. Where Perlon was rawer and more conceptually extreme, Playhouse had a lighter touch: melodic, slightly warmer, and more eclectic. The label closed in 2011 but its catalogue remains a key document of a specific Frankfurt sensibility that has no precise equivalent elsewhere.',
    releases: [
      { title: '"Dexter" — Ricardo Villalobos', year: 2003 },
      { title: '"Beau Mot Plage" — Isolée', year: 2000 },
      { title: '"Geht\'s Noch?" — Roman Flügel', year: 2004 },
      { title: '"We Are Reasonable People" — Roman Flügel', year: 2008 },
    ]},

  { id:'roman_flugel', label:'Roman Flügel', type:'artist', genre:'minimal', era:1995, city:'Frankfurt', country:'DE',
    desc:'Roman Flügel has been active in Frankfurt\'s electronic music scene since the early 1990s, recording under multiple aliases — Acid Jesus, Alter Ego, Eight Miles High — before consolidating under his own name. He released foundational work on Playhouse and has since moved fluidly between Dial, Perlon, Smallville, and Giegling, each time adapting without losing the quality that defines his output: a sense of playfulness held in precise tension with structural rigour. His 2013 track "Geht\'s Noch?" became one of the most widely played records of that year without having been designed for that purpose. He is among the very few producers of his generation whose work has consistently aged well.',
    releases: [
      { title: '"Geht\'s Noch?" (Dial)', year: 2013 },
      { title: 'Happiness Is Happening (Running Back)', year: 2013 },
      { title: '"Fantasy Club" (Dial)', year: 2016 },
      { title: '"Rocker" (as Alter Ego, Klang Elektronik)', year: 2001 },
    ]},

  // ── GERMANY — HAMBURG ────────────────────────────────────────────────────
  { id:'dial', label:'Dial Records', type:'label', genre:'deep', era:2002, city:'Hamburg', country:'DE',
    desc:'Dial Records was co-founded in Hamburg in 2002 by Lawrence (Peter Kersten) and Carsten Jost. The label releases deep house and minimal electronic music rooted in the Chicago and New York traditions but filtered through a northern European sensibility. Artists include Lawrence, Efdemin, and Prince of Denmark (Traumprinz). Dial is regarded as one of the most consistently high-quality deep house labels in Europe.',
    releases: [
      { title: '"Yoyogi Park" — Lawrence', year: 2005 },
      { title: 'Efdemin (debut album) — Efdemin', year: 2008 },
      { title: '"Better Off" — Lawrence', year: 2011 },
      { title: 'Yoyogi (Lawrence album)', year: 2012 },
    ]},

  { id:'smallville', label:'Smallville Records', type:'label', genre:'deep', era:2005, city:'Hamburg', country:'DE',
    desc:'Smallville Records was co-founded in Hamburg in 2005 by Lawrence and Move D. The label releases warm, introspective deep house rooted in the Chicago and New York gospel-house tradition. Artists include Lawrence, Move D, Prince of Denmark, LB Honne, and Fred Everything. It is regarded as one of the most consistently respected deep house labels in Europe.',
    releases: [
      { title: '"Find a Way" — Move D', year: 2006 },
      { title: '"Waldbühne" — Lawrence', year: 2009 },
      { title: '"Abwesenheit" — Prince of Denmark', year: 2015 },
    ]},

  { id:'lawrence', label:'Lawrence', type:'artist', genre:'deep', era:2002, city:'Hamburg', country:'DE',
    desc:'Peter Kersten produces as Lawrence and is based in Hamburg. He co-founded Dial Records in 2002 and Smallville Records in 2005. His productions work in a slow, melodic deep house style with a strong harmonic character. He also records as Pärson Sound in a more experimental mode. He is considered one of the central figures in European deep house.',
    releases: [
      { title: '"The Yogi" (Dial)', year: 2003 },
      { title: '"Yoyogi Park" (Dial)', year: 2005 },
      { title: 'Yoyogi (Dial)', year: 2012 },
      { title: '"Rain" (Smallville)', year: 2016 },
    ]},


  { id:'panthaduprince', label:'Pantha du Prince', type:'artist', genre:'ambient', era:2004, city:'Hamburg', country:'DE', bandcamp:'panthaduprinceofficial', bandcamp_album:'377250429',
    desc:'Hendrik Weber records as Pantha du Prince and is based in Hamburg. His music is characterised by crystalline textures, slow tempos, and a connection to minimalist composition. His album Black Noise (Rough Trade, 2010) received substantial critical attention. His collaboration with the Norwegian group The Bell Laboratory, Elements of Light (2013), combined electronic production with live acoustic bells.',
    releases: [
      { title: 'This Bliss (Dial)', year: 2007 },
      { title: 'Black Noise (Rough Trade)', year: 2010 },
      { title: 'Elements of Light (with The Bell Laboratory, Rough Trade)', year: 2013 },
    ]},

  // ── GERMANY — WEIMAR / GIEGLING ─────────────────────────────────────────
  { id:'giegling', label:'Giegling', type:'label', genre:'giegling', era:2009, city:'Weimar', country:'DE',
    desc:'Giegling is a label and collective based in Weimar, founded around 2009 by Konstantin, Leafar Legov, and others who met as students at the Bauhaus University. Its members include Konstantin, Traumprinz, DJ Healer, Leafar Legov, Edward, Kettenkarussell, Dwig, and Vril. The label does not maintain social media accounts and releases music that frequently moves away from functional club formats toward ambient and introspective territory. It is based in Weimar rather than Berlin, and this geographic position is part of its identity.',
    releases: [
      { title: '"All The Things" — Traumprinz', year: 2016 },
      { title: '"Talk" — Leafar Legov', year: 2017 },
      { title: 'Mothercave — Traumprinz', year: 2013 },
    ]},

  { id:'traumprinz', label:'Traumprinz', type:'artist', genre:'giegling', era:2010, city:'Weimar', country:'DE', bandcamp:'allpossibleworlds', bandcamp_album:'2720353527',
    desc:'Traumprinz is a producer who releases under multiple aliases: Traumprinz on Giegling (introspective, ambient-influenced deep house), Prince of Denmark on Smallville (more club-oriented deep house), and DJ Healer on his own All Possible Worlds label. All bodies of work are regarded as important within the deeper end of European underground music.',
    releases: [
      { title: 'Mothercave (Giegling)', year: 2013 },
      { title: '"All The Things" (Giegling)', year: 2016 },
      { title: '"Abwesenheit" (as Prince of Denmark, Smallville)', year: 2015 },
    ]},

  { id:'djhealer', label:'DJ Healer', type:'artist', genre:'giegling', era:2018, city:'Weimar', country:'DE',
    desc:'DJ Healer is an alias of Traumprinz. The album "Nothing 2 Loose" (2018) was released on All Possible Worlds, his own label, and is characterised by ambient and spoken-word elements with a personal, devotional tone at a considerable remove from functional club music. It became one of the most discussed releases in the European underground.',
    releases: [
      { title: 'Nothing 2 Loose (All Possible Worlds)', year: 2018 },
    ]},

  { id:'leafar', label:'Leafar Legov', type:'artist', genre:'giegling', era:2010, city:'Weimar', country:'DE',
    desc:'Leafar Legov (Rafael Vogel) is a co-founder of the Giegling collective in Weimar. His solo releases are warm, melodic deep house with a strong harmonic character. With Konstantin, he forms Kettenkarussell — the duo whose debut EP launched the Giegling label. His work has been cited as a direct influence on LB Honne, among others.',
    releases: [
      { title: '"Talk" (Giegling)', year: 2017 },
      { title: '"Family" (Giegling)', year: 2017 },
    ]},

  { id:'kettenkarussell', label:'Kettenkarussell', type:'artist', genre:'giegling', era:2009, city:'Weimar', country:'DE',
    desc:'Kettenkarussell is the duo of Konstantin and Leafar Legov, both co-founders of the Giegling collective. Their debut EP I Believe You and Me Make Love Forever (Giegling, 2009) was the label\'s first release. Their productions blend deep house and ambient music with a melodic, introspective character.',
    releases: [
      { title: 'I Believe You and Me Make Love Forever (Giegling)', year: 2009 },
      { title: '"Mahagoni" (Giegling)', year: 2013 },
    ]},

  { id:'konstantin', label:'Konstantin', type:'artist', genre:'giegling', era:2009, city:'Weimar', country:'DE',
    desc:'Konstantin is a co-founder of the Giegling collective, established in Weimar following study at the Bauhaus University in the mid-2000s. He DJs under his own name and produces under the alias Herr Koreander. With Leafar Legov, he forms Kettenkarussell — the duo whose debut EP was Giegling\'s first release. He is widely regarded as one of the defining voices of the collective\'s aesthetic.',
    releases: [
      { title: 'Giegling Mix 06: Einsame Inseln (Herr Koreander)', year: 2015 },
      { title: 'Studio R° (Giegling)', year: 2018 },
    ]},

  { id:'edward', label:'Edward', type:'artist', genre:'giegling', era:2018, city:'Berlin', country:'DE', bandcamp:'edward-music', bandcamp_album:'3879708973',
    desc:'Edward is the alias of Gilles Aiken, a Berlin-based DJ and producer and a core member of the Giegling collective. His productions work in a groove-centred, sample-based aesthetic that moves between house, techno, and psychedelic territory. He also releases on White, the imprint he co-runs with Oskar Offermann. His album Fortune Teller (Giegling, 2018) is his most widely recognised work.',
    releases: [
      { title: 'Fortune Teller (Giegling)', year: 2018 },
      { title: 'Underwater Jams', year: 2019 },
      { title: 'Turning (Giegling)', year: 2021 },
    ]},

  // ── SWITZERLAND ──────────────────────────────────────────────────────────
  { id:'projectindigo', label:'Project Indigo', type:'label', genre:'giegling', era:2015, city:'Zurich', country:'CH',
    desc:'Project Indigo was founded in Zurich in 2015 and is a primary label for LB Honne. Its aesthetic aligns with the Giegling and Hamburg deep house networks.',
    releases: [],
  },

  { id:'orion', label:'Orion Records', type:'label', genre:'giegling', era:2016, city:'Zurich', country:'CH',
    desc:'Orion Records is a Zurich underground label founded in 2016, releasing slow, spacious deep house with ambient sensibility. It is connected to the Project Indigo orbit.',
    releases: [],
  },

  { id:'lbhonne', label:'LB Honne', type:'artist', genre:'giegling', era:2015, city:'Zurich', country:'CH',
    desc:'LB Honne is a Zurich-based producer who began releasing music around 2015 on Project Indigo, subsequently releasing on Smallville and Dial. His work is in a warm, melodic deep house style with ambient character. Critical writing on his music has noted the influence of Leafar Legov (Giegling) as a primary reference.',
    releases: [],
  },

  { id:'stolar', label:'Stólar', type:'label', genre:'giegling', era:2017, city:'Berlin', country:'DE',
    desc:'Stólar is a Berlin-based record label run by Philipp Priebe. The label releases ambient-leaning deep house connected to the broader European underground network including Project Indigo and Orion.',
    releases: [],
  },

  { id:'benkaczor', label:'Ben Kaczor', type:'artist', genre:'deep', era:2016, city:'Zurich', country:'CH',
    desc:'Ben Kaczor is a Swiss producer releasing on Dial Records and Orion. His productions work within a precise, warm minimal deep house aesthetic.',
    releases: [
      { title: 'Petrovo Uho (Dial)', year: 2020 },
    ]},

  { id:'luciano', label:'Luciano', type:'artist', genre:'minimal', era:2002, city:'Geneva', country:'CH',
    desc:'Luciano is the project of Luciano Nicolás García Meléndez, born in Santiago, Chile in 1975, based in Geneva, Switzerland since the mid-1990s. He founded the Cadenza label in 2002. He developed a style of minimal techno and house inflected with Afro-Cuban and Latin percussion — earning descriptions like "Latin minimal" — through residencies at DC10 in Ibiza and appearances at the Panorama Bar. His label and his playing shaped the international minimal-to-house transition of the mid-2000s. He also founded the Vagabundos collective for parties mixing global club sounds.',
    releases: [
      { title: '"Doble Cara" (Cadenza)', year: 2004 },
      { title: 'Fabric 45 (Fabric)', year: 2009 },
    ]},

  { id:'cadenza', label:'Cadenza', type:'label', genre:'minimal', era:2002, city:'Geneva', country:'CH',
    desc:'Cadenza was founded in Geneva in 2002 by Luciano and has become one of the significant labels of the post-minimal house movement. Its catalogue includes Luciano, Mathew Jonson, Gaiser, Âme, and Cesar Merveille. The label operates between Geneva and Ibiza and is part of the network connecting Latin American artists to the European club circuit.',
    releases: [
      { title: '"Doble Cara" — Luciano (Cadenza)', year: 2004 },
      { title: '"Robots Need Love Too" — Mathew Jonson (Cadenza)', year: 2006 },
    ]},

  // ── SCANDINAVIA ──────────────────────────────────────────────────────────
  { id:'royksopp', label:'Röyksopp', type:'artist', genre:'ambient', era:2001, city:'Tromsø', country:'NO',
    desc:'Röyksopp — Svein Berge and Torbjørn Brundtland — formed in Tromsø in northern Norway and released their debut album "Melody A.M." in 2001, a record that drew on Scandinavian electronic traditions, ambient music, and downtempo production to create something quietly influential on a decade of electronic pop. The album sold over two million copies and established Tromsø — far above the Arctic Circle — as an unlikely address for internationally recognised electronic music. Röyksopp\'s subsequent career moved between intimate electronic compositions and collaborations with pop vocalists including Robyn and Susanne Sundfør, demonstrating a consistent interest in the meeting point between electronic production and human voice.',
    releases: [
      { title: 'Melody A.M.', year: 2001 },
      { title: 'The Understanding', year: 2005 },
      { title: 'Senior', year: 2010 },
    ]},

  { id:'the_knife', label:'The Knife', type:'artist', genre:'experimental', era:1999, city:'Gothenburg', country:'SE', bandcamp:'theknife', bandcamp_album:'0085002230',
    desc:'The Knife — Karin Dreijer and Olof Dreijer — formed in Gothenburg in 1999 and became one of the most significant electronic acts to emerge from Scandinavia through a combination of sonic experimentation, visual anonymity, and political commitment unusual in the mainstream of European dance music. Their album "Silent Shout" (2006) — built from processed voices pitch-shifted to the point of species ambiguity, over drum machine patterns and dark synthesiser textures — is one of the most original electronic records of the 2000s. The Knife rejected interviews, refused awards, and used their platform consistently and explicitly for feminist and queer politics. A genuinely oppositional cultural project inside a pop-facing form.',
    releases: [
      { title: '"Heartbeats"', year: 2003 },
      { title: 'Silent Shout', year: 2006 },
      { title: 'Shaking the Habitual', year: 2013 },
    ]},

  { id:'fever_ray', label:'Fever Ray', type:'artist', genre:'experimental', era:2009, city:'Stockholm', country:'SE', bandcamp:'feverray', bandcamp_album:'1277714303',
    desc:'Fever Ray is the solo project of Karin Dreijer, released in 2009 after The Knife\'s extended hiatus, and represents the most extreme expression of the aesthetic she and her brother had developed across a decade. The debut album — processed vocals, cavernous synthesiser textures, tribal drum patterns, and an atmosphere of Nordic winter darkness — was a landmark of experimental electronic music. The project\'s visual world — grotesque masks, forest settings, gender-ambiguous imagery — was as important as the audio, establishing a total artwork that resisted reduction to any single genre or context.',
    releases: [
      { title: 'Fever Ray (debut album)', year: 2009 },
      { title: '"If I Had a Heart"', year: 2009 },
      { title: 'Plunge', year: 2017 },
    ]},

  { id:'rune_grammofon', label:'Rune Grammofon', type:'label', genre:'experimental', era:1998, city:'Oslo', country:'NO',
    desc:'Rune Grammofon, founded in Oslo in 1998 by Rune Kristoffersen, became one of the most important European experimental music labels of the 2000s, releasing work at the intersection of jazz, electronic music, and contemporary composition. Its roster — including Biosphere, Supersilent, Nils Petter Molvær, and Jenny Hval — mapped a specifically Nordic approach to experimental music: patient, austere, attentive to space and silence, and rooted in a tradition of post-free-jazz improvisation. The label\'s consistently high-quality physical packaging treated each release as an art object, a stance that influenced how experimental music was presented throughout Europe.',
    releases: [
      { title: 'Supersilent 6', year: 2003 },
      { title: 'Substrata 2 — Biosphere', year: 2020 },
    ]},

  { id:'prins_thomas', label:'Prins Thomas', type:'artist', genre:'ambient', era:2003, city:'Oslo', country:'NO',
    desc:'Thomas Moen Hermansen — Prins Thomas — is a Norwegian DJ and producer whose work has been central to the Scandinavian cosmic disco and space rock revival since the early 2000s. Along with Todd Terje and Lindstrøm, he helped define a distinctly Nordic approach to long-form electronic music: unhurried, spacious, drawing equally from Krautrock, cosmic synth music, and deep house, entirely indifferent to the urgency of Berlin or London club culture. His label Full Pupp became the primary document of this scene. The music is too slow for most European clubs but has found a devoted international audience among listeners who value mood and duration over function.',
    releases: [
      { title: 'Prins Thomas (debut album)', year: 2004 },
      { title: 'Full Pupp 001', year: 2006 },
      { title: 'Principe del Norte', year: 2012 },
    ]},

  { id:'nocturne', label:'noc:turne', type:'artist', genre:'giegling', era:2018, city:'', country:'',
    desc:'noc:turne is an obscure entity in the European underground house and ambient network whose exact nature, location, and catalogue are not clearly documented.',
    releases: [],
  },

  { id:'studio_barnhus', label:'Studio Barnhus', type:'label', genre:'deep', era:2010, city:'Stockholm', country:'SE',
    desc:'Studio Barnhus was founded in Stockholm in 2010 by Axel Boman, Kornél Kovács, and Pedrodollar. The label takes its name from the street where the founding studio was located (Barnhusgatan). Its catalogue spans house, techno, electro, and ambient music with a melodic, humanist character. It has released over eighty records.',
    releases: [
      { title: '"Purple Drank" — Axel Boman', year: 2010 },
      { title: '"Fridas Vals" — Kornél Kovács', year: 2014 },
    ]},

  { id:'axel_boman', label:'Axel Boman', type:'artist', genre:'deep', era:2010, city:'Stockholm', country:'SE',
    desc:'Axel Boman co-founded Studio Barnhus in Stockholm in 2010. His productions are warmly melodic deep house, influenced by the Chicago and New York traditions but with a Swedish lightness and humour distinct from the Germanic underground. He is a regular performer at European clubs and festivals.',
    releases: [
      { title: '"Purple Drank" (Studio Barnhus)', year: 2010 },
      { title: 'Family Vacation (Studio Barnhus)', year: 2013 },
    ]},

  // ── NETHERLANDS ──────────────────────────────────────────────────────────
  { id:'clone', label:'Clone Records', type:'label', genre:'experimental', era:1993, city:'Rotterdam', country:'NL',
    desc:'Clone Records was founded in Rotterdam in 1993 by Serge Verschuur. Its catalogue spans electro, techno, house, and experimental electronic music. It operates alongside a record shop and mail-order service and is one of the most eclectic and long-running independent labels in European underground music. Artists include Legowelt, I-f, and Drexciya.',
    releases: [
      { title: '"Arp\'s Arp" — Legowelt', year: 2001 },
      { title: '"The Clone Theory" — I-f', year: 2002 },
      { title: 'Neptune\'s Lair (reissue) — Drexciya', year: 2012 },
    ]},

  { id:'delsin', label:'Delsin Records', type:'label', genre:'ambient', era:1995, city:'Amsterdam', country:'NL',
    desc:'Delsin Records was founded in Amsterdam in 1995 by I-f and Marsel van der Wielen. It specialises in electro, ambient techno, and experimental electronic music. It was central to the electro revival of the late 1990s and early 2000s and continues to release music from Dutch and international artists.',
    releases: [
      { title: '"Lumberton City" — Legowelt', year: 2003 },
      { title: 'Dark Days — Legowelt', year: 2015 },
    ]},

  { id:'legowelt', label:'Legowelt', type:'artist', genre:'experimental', era:1997, city:'The Hague', country:'NL', bandcamp:'legowelt', bandcamp_album:'0467449780',
    desc:'Danny Wolfers records as Legowelt and is based in The Hague. He has been producing across electro, house, techno, and ambient music since the mid-1990s with a consistently prolific output. He releases on Delsin, Clone, and his own Strange Life label, among many others. His productions are characterised by a lo-fi analog aesthetic and broad engagement with the full history of electronic music.',
    releases: [
      { title: '"Arp\'s Arp" (Clone)', year: 2001 },
      { title: '"Lumberton City" (Delsin)', year: 2003 },
      { title: 'The Paranormal Soul (Pinkman)', year: 2012 },
    ]},


  { id:'rush_hour', label:'Rush Hour', type:'label', genre:'deep', era:2007, city:'Amsterdam', country:'NL',
    desc:'Rush Hour began as an Amsterdam record shop in 1997 and formalized as a label in 2007. It focuses on deep house, disco, and soul-influenced dance music. The shop and label have played an important role in making Amsterdam a significant point of distribution and curation for underground dance music in Europe.',
    releases: [
      { title: '"Rush Hour 10 Years" (compilation)', year: 2017 },
      { title: '"Babe, We\'re Gonna Love Tonight" — Jolly Music', year: 2012 },
    ]},

  { id:'dekmantel', label:'Dekmantel', type:'label', genre:'deep', era:2009, city:'Amsterdam', country:'NL',
    desc:'Dekmantel was founded in Amsterdam in 2009 by Thomas Martojo and Casper Tielrooij. The label grew from club nights centred on Detroit techno and Chicago house. The Dekmantel Festival (established 2013) became one of the most regarded outdoor events in European electronic music. The label and festival are rooted aesthetically in the Detroit and Chicago traditions.',
    releases: [
      { title: 'Selectors 001 — Motor City Drum Ensemble', year: 2016 },
    ]},

  { id:'trouw', label:'Trouw', type:'venue', genre:'deep', era:2010, city:'Amsterdam', country:'NL',
    desc:'Trouw was an Amsterdam club that operated from 2010 to 2015 in a former newspaper printing facility on Wibautstraat. It was regarded as one of the best-programmed clubs in Europe during its operation, with a consistent booking philosophy and strong acoustics. It closed in January 2015 when the building was redeveloped. Several of its regular bookers and booking relationships continue through the Dekmantel platform.' },

  // ── FRANCE ───────────────────────────────────────────────────────────────
  { id:'french_touch', label:'French Touch', type:'style', genre:'deep', era:1995, city:'Paris', country:'FR',
    desc:'French touch was the name given to the cluster of French dance music producers who emerged in Paris in the mid-1990s and briefly became the dominant creative force in global house music. The sound was defined by filtered disco samples — a technique popularised by Daft Punk and Cassius — chopped and stretched over four-four kick drums, with chord stabs and basslines derived from seventies funk and soul. It was warmer and more accessible than Chicago house, less austere than Detroit techno, and deliberately romantic about its influences. Daft Punk\'s "Homework" (1997) and "Discovery" (2001) were its defining statements; the latter introduced a generation of listeners to electronic music worldwide. By the early 2000s French touch had fragmented — some producers moved toward rock (Phoenix), others toward darker electro (Ed Banger, Justice), and others toward ambient and soundtrack work (Air). The name is now used retrospectively for a scene that was largely over before it knew it had begun.',
    releases: [
      { title: '"Da Funk" — Daft Punk', year: 1995 },
      { title: '"Cassius 1999" — Cassius', year: 1999 },
      { title: '"Kelly Watch the Stars" — Air', year: 1998 },
    ]},

  { id:'air', label:'Air', type:'artist', genre:'ambient', era:1995, city:'Paris', country:'FR',
    desc:'Air — Nicolas Godin and Jean-Benoît Dunckel — formed in Versailles in 1995 and became the most internationally recognised of the French touch artists through a sound that was less house than orchestral electronic pop. Their debut album "Moon Safari" (1998) was recorded on analogue synthesizers and mellotrons and reached audiences far beyond the electronic music world. The soundtrack to Sofia Coppola\'s "The Virgin Suicides" (2000) confirmed their position as composers as much as dance producers. Air occupy an unusual position in the genealogy of electronic music: too melodic for the club, too electronic for rock, they carved out a space that was quietly influential on a generation of producers interested in mood, texture, and emotional restraint over rhythmic innovation.',
    releases: [
      { title: 'Moon Safari', year: 1998 },
      { title: 'The Virgin Suicides (OST)', year: 2000 },
      { title: 'Talkie Walkie', year: 2004 },
    ]},

  { id:'cassius', label:'Cassius', type:'artist', genre:'deep', era:1996, city:'Paris', country:'FR',
    desc:'Cassius — Philippe Zdar and Hubert Boombass — were among the most technically skilled producers of the French touch generation. Where Daft Punk favoured compressed, maximised productions, Cassius brought a warmth and spaciousness to their filter-disco productions that reflected Zdar\'s background as a recording engineer and mixer. His credits include records for Beastie Boys, Phoenix, and Franz Ferdinand. Their 1999 debut album established the filtered house template; their later work moved toward a more overtly pop sensibility. Philippe Zdar passed away in June 2019; his legacy as a producer and mixer extends well beyond the electronic music world.',
    releases: [
      { title: '"Cassius 1999"', year: 1999 },
      { title: '"La Mouche"', year: 1999 },
      { title: 'Ibifornia', year: 2016 },
    ]},

  { id:'modjo', label:'Modjo', type:'artist', genre:'deep', era:1999, city:'Paris', country:'FR',
    desc:'Modjo — Yann Destagnol and Romain Tranchart — released "Lady (Hear Me Tonight)" in 2000, a filtered disco track built on a sample from Chic\'s "Soup for One" that became one of the best-selling singles in European chart history. It was in many ways the commercial apex of the French touch movement: everything the genre had developed — the filtered bassline, the chopped sample, the anonymous production aesthetic — compressed into three and a half minutes of radio-ready house music. Modjo released one album and then largely disappeared, which gave their contribution an accidental purity.',
    releases: [
      { title: '"Lady (Hear Me Tonight)"', year: 2000 },
      { title: 'Modjo (album)', year: 2001 },
    ]},

  { id:'justice', label:'Justice', type:'artist', genre:'techno', era:2003, city:'Paris', country:'FR',
    desc:'Justice — Xavier de Rosnay and Gaspard Augé — emerged on Ed Banger Records in 2003 and represented a decisive break with the filtered warmth of first-wave French touch. Where Daft Punk had been romantic about disco, Justice was aggressive about rock: their productions processed synthesizers and drum machines through guitar distortion and compression, creating a sound simultaneously electronic and physically abrasive. Their debut album "†" (Cross, 2007) became one of the defining records of the mid-2000s blog house era. The crosses, the leather jackets, the cathedral-scale rave aesthetic — Justice positioned electronic music as heavy metal for the dancefloor, and the influence of that repositioning is audible across a decade of EDM production.',
    releases: [
      { title: '"We Are Your Friends"', year: 2006 },
      { title: '† (Cross)', year: 2007 },
      { title: 'Audio, Video, Disco', year: 2011 },
    ]},

  { id:'busy_p', label:'Busy P / Ed Banger', type:'label', genre:'techno', era:2003, city:'Paris', country:'FR',
    desc:'Pedro Winter — known as Busy P — managed Daft Punk during the "Discovery" and "Human After All" years before founding Ed Banger Records in 2003. The label became the vehicle for the second wave of French electronic music: harder, rockier, and more confrontational than the filtered house of the 1990s. Justice, SebastiAn, Mr. Oizo, and Uffie defined the Ed Banger sound — a collision of punk energy, hip-hop aesthetics, and electro club music that was deliberately teenage in its attitude. The label\'s visual identity (designed by So Me) was as important as its music, establishing a template for how electronic music could be packaged and branded for a generation raised on skateboarding and streetwear.',
    releases: [
      { title: 'Ed Banger Records (founded)', year: 2003 },
    ]},

  { id:'kitsune', label:'Kitsuné', type:'label', genre:'deep', era:2002, city:'Paris', country:'FR',
    desc:'Kitsuné — founded by Gildas Loaëc and Masaya Kuroki in Paris in 2002 — operated simultaneously as a record label, fashion brand, and cultural platform, and formalised the overlap between electronic music, fashion, and lifestyle that French touch had accidentally pioneered. Their compilation series "Kitsuné Maison" introduced artists including Hot Chip, Two Door Cinema Club, and Yelle to international audiences. The label\'s approach — genre-agnostic, aesthetically coherent, equally comfortable with indie pop and dance music — became a model for the kind of cross-disciplinary cultural operation that the streaming era would later make ubiquitous.',
    releases: [
      { title: 'Kitsuné Maison Vol. 1', year: 2004 },
      { title: 'Kitsuné Maison Vol. 5', year: 2008 },
    ]},

  { id:'versatile', label:'Versatile Records', type:'label', genre:'deep', era:1995, city:'Paris', country:'FR',
    desc:'Versatile Records was founded in Paris in 1995 by DJ Gilb\'r. The label releases house, electro, and disco with a French sensibility and eclectic approach. It has been an active presence in the French house scene across three decades.',
    releases: [
      { title: '"Super Discount" — Etienne de Crécy', year: 1996 },
      { title: '"I Got to Have It" — Lil\'Mo\' Yin Yang', year: 1998 },
    ]},

  { id:'correspondant', label:'Correspondant', type:'label', genre:'deep', era:2012, city:'Paris', country:'FR',
    desc:'Correspondant was founded in Paris in 2012 by Zimmer. The label focuses on melodic deep house and disco-influenced electronic music. It is part of a generation of French labels that emerged in the 2010s and maintains a consistent aesthetic across its releases.',
    releases: [
      { title: '"Sunnyside" — Zimmer', year: 2014 },
      { title: '"Feel It" — Crayon feat. Alex Lustig', year: 2016 },
    ]},

  { id:'institubes', label:'Institubes', type:'label', genre:'techhouse', era:2005, city:'Paris', country:'FR',
    desc:'Institubes was a Paris label active from 2005 to 2010. It released music by Para One, Surkin, Bobmo, and others associated with the French electro-house scene. The label operated at a time when the French underground and blog-era electronic music overlapped significantly.',
    releases: [
      { title: '"Matière Noire" — Para One', year: 2006 },
      { title: '"Tempest" — Surkin', year: 2007 },
      { title: '"Midnight Driving" — Bobmo', year: 2009 },
    ]},

  { id:'pdj', label:'Pan European Recording', type:'label', genre:'minimal', era:2002, city:'Paris', country:'FR',
    desc:'Pan European Recording was a French minimal techno and house label active in the early 2000s. It released music positioned alongside Kompakt and Perlon in aesthetic approach, representing a French contribution to the European minimal wave.',
    releases: [
      { title: '"Parisien" — I:Cube', year: 2003 },
    ]},

  // ── JAPAN – ELECTRONIC PIONEERS ─────────────────────────────────────────
  { id:'isao_tomita', label:'Isao Tomita', type:'artist', genre:'experimental', era:1974, city:'Tokyo', country:'JP',
    desc:'Isao Tomita (1932–2016) was the first Japanese electronic composer to achieve sustained international recognition. After discovering Wendy Carlos\'s Switched-On Bach and acquiring a large Moog synthesizer III, he spent over a year building a home studio and produced elaborate synthesizer realisations of Western orchestral works. His 1974 debut Snowflakes Are Dancing (RCA Red Seal), a Debussy arrangement, received four Grammy nominations — the first Japanese electronic artist so honoured — and became the bestselling classical album in the US that year. His approach to spatial synthesis and textural depth influenced a generation of Japanese electronic composers.',
    releases: [
      { title: 'Snowflakes Are Dancing (RCA Red Seal)', year: 1974 },
      { title: 'Pictures at an Exhibition (RCA Red Seal)', year: 1975 },
      { title: 'The Planets (RCA Red Seal)', year: 1976 },
      { title: 'The Firebird Suite (RCA Red Seal)', year: 1976 },
    ]},

  { id:'ymo', label:'Yellow Magic Orchestra', type:'artist', genre:'experimental', era:1978, city:'Tokyo', country:'JP',
    desc:'Yellow Magic Orchestra — Haruomi Hosono, Ryuichi Sakamoto, and Yukihiro Takahashi — formed in Tokyo in 1978 and became one of the most globally influential groups in electronic music. Using synthesizers, Roland MC-8 microcomputer sequencing, and drum machines programmed with a precision that European and American acts had not yet achieved, they established the aesthetics of electropop, techno, and computer music simultaneously. Juan Atkins has directly cited YMO as an influence on the development of Detroit techno; their 1979 track Computer Game was sampled by Afrika Bambaataa for Planet Rock (1982). They sold over five million records in Japan during their 1978–84 run and all three members pursued significant solo electronic careers.',
    releases: [
      { title: 'Yellow Magic Orchestra (Alfa/A&M)', year: 1978 },
      { title: 'Solid State Survivor (Alfa)', year: 1979 },
      { title: 'BGM (Alfa)', year: 1981 },
      { title: 'Technodelic (Alfa)', year: 1981 },
      { title: 'Service (Alfa)', year: 1983 },
    ]},

  { id:'haruomi_hosono', label:'Haruomi Hosono', type:'artist', genre:'ambient', era:1978, city:'Tokyo', country:'JP',
    desc:'Haruomi Hosono (born 1947, Tokyo) is one of Japan\'s most polymorphic musicians, moving through American folk, tropical exotica, electropop, and ambient over five decades. He co-founded Yellow Magic Orchestra in 1978 and subsequently founded the Non-Standard (electronic funk) and Yen (ambient/environmental music) labels. His 1984 cassette Watering a Flower, commissioned by MUJI as in-store background sound, is a landmark of Japanese functional ambient. His 1989 album Omni Sight Seeing merged Algerian raï, Japanese minyo, and house rhythms in a prescient world-music synthesis; he later collaborated with The Orb and Bill Laswell.',
    releases: [
      { title: 'Bon Voyage Co. (Victor)', year: 1976 },
      { title: 'Watering a Flower (Non-Standard)', year: 1984 },
      { title: 'Omni Sight Seeing (Epic/Sony)', year: 1989 },
      { title: 'Medicine Compilation (Daisyworld)', year: 1993 },
    ]},

  { id:'ryuichi_sakamoto', label:'Ryuichi Sakamoto', type:'artist', genre:'ambient', era:1978, city:'Tokyo', country:'JP',
    desc:'Ryuichi Sakamoto (1952–2023) was among the most celebrated electronic and contemporary composers of his generation. As a YMO member and solo artist from 1978, he explored harsh digital experimentation (B-2 Unit, 1980), glacial piano-ambient (Beauty, 1989), and film scoring at the highest level, winning an Academy Award for The Last Emperor (1987). He collaborated directly with Brian Eno, David Sylvian, Alva Noto (Raster-Noton), and Fennesz, giving him the broadest verified Western electronic connections of any Japanese artist. His final albums async (2017) and 12 (2023), completed while terminally ill, are considered masterpieces of ambient music.',
    releases: [
      { title: 'Thousand Knives (CBS/Sony)', year: 1978 },
      { title: 'B-2 Unit (Alfa)', year: 1980 },
      { title: 'Merry Christmas Mr. Lawrence OST (Virgin)', year: 1983 },
      { title: 'Beauty (Virgin)', year: 1989 },
      { title: 'async (Milan)', year: 2017 },
      { title: '12 (Milan)', year: 2023 },
    ]},

  { id:'hiroshi_yoshimura', label:'Hiroshi Yoshimura', type:'artist', genre:'ambient', era:1982, city:'Tokyo', country:'JP',
    desc:'Hiroshi Yoshimura (1940–2003) was the foundational figure of Japanese kankyō ongaku (environmental music). His 1982 debut Music for Nine Post Cards — originally submitted to the Hara Museum as functional background sound and released on Satoshi Ashikawa\'s Sound Process label — became the cornerstone of the entire tradition. Directly inspired by Brian Eno\'s Ambient series, Yoshimura developed a distinctly Japanese sensibility: spacious, precise, attentive to natural textures, designed to coexist peacefully with everyday life. He subsequently received commissions from hotels, airports, and public institutions across Japan; his work was featured on Light In The Attic\'s Kankyō Ongaku compilation (2019), nominated for a Grammy for Best Historical Album.',
    releases: [
      { title: 'Music for Nine Post Cards (Sound Process)', year: 1982 },
      { title: 'Pier & Loft (Sound Process)', year: 1983 },
      { title: 'WATER COPY (Offshore)', year: 1985 },
      { title: 'Green (Kitty)', year: 1986 },
      { title: 'Wet Land (Offshore)', year: 1993 },
    ]},

  { id:'midori_takada', label:'Midori Takada', type:'artist', genre:'experimental', era:1983, city:'Tokyo', country:'JP',
    desc:'Midori Takada (born 1951, Tokyo) is a percussionist and composer who trained at Tokyo University of the Arts before spending time with the Berlin RIAS Symphonie-Orchester, eventually rejecting the Western classical tradition for African drumming, Indonesian gamelan, and the early minimalism of Steve Reich and Terry Riley. Her 1983 solo debut Through the Looking Glass — recorded over three days for solo marimba, gongs, and found objects — is one of the most extraordinary documents of Japanese experimental music: a sustained minimalist meditation that anticipated ambient percussion by decades. The album was reissued by Palto Flats in 2017 following a YouTube algorithm-driven rediscovery that introduced it to a new generation, and she resumed touring internationally into her seventies.',
    releases: [
      { title: 'Through the Looking Glass (RVC)', year: 1983 },
    ]},

  // ── JAPAN – CLUB ERA ─────────────────────────────────────────────────────
  { id:'space_lab_yellow', label:'Space Lab Yellow', type:'venue', genre:'deep', era:1992, city:'Tokyo', country:'JP',
    desc:'Space Lab Yellow opened in Nishiazabu, Tokyo, in late 1991 and became the city\'s most internationally significant underground electronic venue for nearly two decades. Within its first year it was hosting François K, Larry Heard, and Derrick May — evidence that its bookers understood the lineage they were participating in. Through the 1990s it established Tokyo as a serious node in the global techno and deep house circuit, hosting Theo Parrish, Moodymann, Jeff Mills, Laurent Garnier, and regular Japanese residents who absorbed and refracted these sounds. The listening culture it cultivated — attentive, technically demanding — became the template for the broader Tokyo underground until its closure in 2009.',
    releases: []},

  { id:'soichi_terada', label:'Soichi Terada', type:'artist', genre:'deep', era:1992, city:'Tokyo', country:'JP',
    desc:'Soichi Terada (born 1965, Tokyo) studied computer science and visited New York in 1987 where he fell in love with house music at Paradise Garage and the Loft. His 1989 remix of Nami Shimada\'s Sun Shower — which transformed a J-pop ballad into a deep house vehicle — was championed by Larry Levan at Paradise Garage, creating a direct line between Tokyo and New York\'s dying disco infrastructure. Returning to Tokyo he co-founded Far East Recording with Shinichiro Yokota in 1990, releasing Japanese deep house that virtually no one bought at the time; their 1992 album sold so poorly that Terada stored unsold copies at home for years. Rush Hour (Amsterdam) compiled Sounds from the Far East in 2015, belatedly establishing him as a canonical deep house figure; he also composed scores for the Ape Escape video game series.',
    releases: [
      { title: 'Far East Recording (Far East Recording)', year: 1992 },
      { title: 'Reach Up EP (Far East Recording)', year: 1994 },
      { title: 'Sounds from the Far East (Rush Hour)', year: 2015 },
    ]},

  { id:'shinichiro_yokota', label:'Shinichiro Yokota', type:'artist', genre:'deep', era:1992, city:'Tokyo', country:'JP',
    desc:'Shinichiro Yokota (born 1969) co-founded Far East Recording with Soichi Terada in 1990 after they met at an all-Japan DJ contest in 1987, and together they released New York-style deep house in Tokyo at a time when no audience existed for it. He spent most of the 1990s and 2000s running a custom car parts company after the label\'s debut sold poorly. A 2014 viral YouTube upload of his track Do It Again — mis-credited as Soichi Terada — sparked international attention; he released Do It Again and Again (Rush Hour, 2016), his first full-length in over two decades, mixing new material with unreleased 1990s tracks.',
    releases: [
      { title: 'Far East Recording (Far East Recording)', year: 1992 },
      { title: 'Do It Again and Again (Rush Hour)', year: 2016 },
      { title: 'Ultimate Yokota 1991–2019 (Rush Hour)', year: 2019 },
    ]},

  { id:'far_east_recording', label:'Far East Recording', type:'label', genre:'deep', era:1992, city:'Tokyo', country:'JP',
    desc:'Far East Recording was founded in Tokyo in 1990 by Soichi Terada and Shinichiro Yokota as a vehicle for self-produced New York-style deep house. Its 1992 debut album sold almost nothing at the time — Terada stored the unsold stock at home for years — but the label\'s philosophy of minimal, joyful deep house made on Japanese terms was simply two decades ahead of its audience. Hhatri (London) provided the first international reissue in 2014; Rush Hour (Amsterdam) compiled Sounds from the Far East in 2015, inverting the label\'s reputation almost overnight and making it the clearest evidence that world-class deep house was being made in Tokyo in the early 1990s entirely outside the Western gaze.',
    releases: []},

  { id:'ken_ishii', label:'Ken Ishii', type:'artist', genre:'techno', era:1993, city:'Tokyo', country:'JP',
    desc:'Ken Ishii (born 1970, Sapporo) discovered Detroit techno through imported records in high school and identified completely with the Belleville Three\'s machine-music philosophy. His 1993 debut Garden on the Palm (R&S Records, Belgium) immediately placed him at the top of the NME techno chart, making him the first Japanese artist with sustained international techno press; he simultaneously released on Tokyo\'s Sublime Records. His 1997 music video for Extra, directed by Koji Morimoto, won MTV Europe\'s Best Dance Video, giving him a crossover visibility unusual for underground techno. He composed music for the 1998 Nagano Winter Olympics opening ceremonies and has released on Transmat, Tresor, and Warp.',
    releases: [
      { title: 'Garden on the Palm EP (R&S Records)', year: 1993 },
      { title: 'Reference to Difference (Sublime Records)', year: 1994 },
      { title: 'Extra (R&S Records)', year: 1996 },
      { title: 'Sunseeker (R&S Records)', year: 1999 },
    ]},

  { id:'susumu_yokota', label:'Susumu Yokota', type:'artist', genre:'techno', era:1993, city:'Tokyo', country:'JP', bandcamp:'susumuyokota', bandcamp_album:'3077482968',
    desc:'Susumu Yokota (1960–2015) trained in economics and graphic design, lived in India, and returned to Tokyo to pursue music. His early work on Germany\'s Harthouse label placed him within the Frankfurt hard techno scene; his 1994 Acid Mt. Fuji (Sublime Records) deliberately mapped Japanese nature imagery onto the Detroit/Chicago acid grid and was a watershed for Japanese electronic identity. He quickly pivoted toward a more introspective style on Lo Recordings (London) — Sakura (2000) and Symbol (2005) dissolve orchestral and traditional Japanese textures into electronic washes — while releasing ambient material under the pseudonyms Ebi and Stevia. He passed away in 2015.',
    releases: [
      { title: 'Frankfurt–Tokyo Connection (Harthouse)', year: 1993 },
      { title: 'Acid Mt. Fuji (Sublime Records)', year: 1994 },
      { title: 'Sakura (Lo Recordings)', year: 2000 },
      { title: 'Symbol (Lo Recordings)', year: 2005 },
      { title: 'Dreamer (Lo Recordings)', year: 2013 },
    ]},

  { id:'fumiya_tanaka', label:'Fumiya Tanaka', type:'artist', genre:'minimal', era:1993, city:'Tokyo', country:'JP',
    desc:'Fumiya Tanaka (born 1972, Kyoto) grew up in punk circles before discovering house and techno in 1990 and grasped immediately the structural affinity between punk\'s anti-commercial rigour and minimal techno\'s reduction. He founded Torema Records in 1993 — widely cited as Japan\'s first dedicated electronic dance label — achieving major Sony distribution by 1995, an unusual achievement for underground techno anywhere. He moved to Berlin around 2009 and collaborated with Ricardo Villalobos on the Fumiyandric 12\" (Perlon, 2009), cementing his connection to the microhouse/minimal scene centred on Berghain and Panorama Bar. His marathon DJ sets, often six hours or more, are known for their disciplined structure and refusal of crowd-pleasing moments.',
    releases: [
      { title: 'Unknown Possibility Vol. 1 (Torema)', year: 1997 },
      { title: 'Unknown Possibility Vol. 2 (Tresor)', year: 2001 },
      { title: 'Fumiyandric (with Ricardo Villalobos, Perlon)', year: 2009 },
      { title: 'You Find the Key (Perlon)', year: 2016 },
    ]},

  { id:'sublime_records_jp', label:'Sublime Records', type:'label', genre:'techno', era:1994, city:'Tokyo', country:'JP',
    desc:'Sublime Records was born on the dancefloor of Tokyo\'s Maniac Love club in 1994, and its founding simultaneous releases — Ken Ishii\'s Reference to Difference and Susumu Yokota\'s Acid Mt. Fuji — gave Japanese-made techno a coherent identity for the first time. Its September 1994 launch event at Shibuya Beam Hall featured Speedy J (Rotterdam) performing alongside Yokota and Ishii, crystallising the Japan–Europe techno axis. Through the late 1990s the label nurtured Rei Harakami\'s idiosyncratic microhouse alongside harder techno, maintaining a philosophical range that prevented it from calcifying into a single style. It is retrospectively cited as one of the most significant Japanese electronic labels.',
    releases: []},

  { id:'rei_harakami', label:'Rei Harakami', type:'artist', genre:'ambient', era:1997, city:'Tokyo', country:'JP', bandcamp:'reiharakami', bandcamp_album:'0278229899',
    desc:'Rei Harakami (1970–2011) originally intended to make films at Kyoto University of Arts and stumbled into music while composing soundtracks, discovering a voice so distinct that music became primary. His defining instrument was the Roland SC-88 Pro sound module — a device intended for general MIDI playback — which he coaxed into producing sounds of astonishing intimacy, the electronic equivalent of a hand-drawn line. His albums Red Curb (2001) and Lust (2005), released on Sublime Records, blend ambient, microhouse, and subtle jazz harmony in a style that resisted categorisation and was frequently compared to Aphex Twin\'s ambient releases. He passed away unexpectedly in 2011 aged 40.',
    releases: [
      { title: 'Unrest (Sublime Records)', year: 1998 },
      { title: 'Red Curb (Sublime Records)', year: 2001 },
      { title: 'Lust (Sublime Records)', year: 2005 },
    ]},

  { id:'dj_krush', label:'DJ Krush', type:'artist', genre:'experimental', era:1994, city:'Tokyo', country:'JP',
    desc:'DJ Krush (born Hideaki Ishi, 1962, Tokyo) moved from gang life to DJing after seeing the 1983 film Wild Style, developing a sound of instrumental hip-hop at its most atmospheric: extended turntable compositions using jazz and soul samples as textural material, overlaid with heavy processing that blurs the line between hip-hop and ambient music. His 1994 debut Strictly Turntablized on Mo\' Wax (London — the label of DJ Shadow, UNKLE, Tricky) gave him immediate international credibility, and he became one of Japan\'s most internationally recognised electronic artists. He performed at Glastonbury, Sónar, and Coachella, and in over 60 countries.',
    releases: [
      { title: 'Strictly Turntablized (Mo\' Wax)', year: 1994 },
      { title: 'Meiso (Sony/Mo\' Wax)', year: 1995 },
      { title: 'MiLight (Sony)', year: 1996 },
      { title: 'Zen (Sony)', year: 2001 },
    ]},

  { id:'womb_tokyo', label:'Womb', type:'venue', genre:'techno', era:2000, city:'Tokyo', country:'JP',
    desc:'Womb opened in April 2000 in Shibuya, Tokyo, with a sound system engineered by Steve Dash and one of Asia\'s largest mirror balls. Where Space Lab Yellow specialised in a New York-oriented listening culture, Womb positioned itself as a world-class techno venue at larger scale: Mixmag ranked it No. 2 in the world in 2005 and No. 4 in 2009, placing it alongside Berghain, fabric, and DC10. Its four floors accommodate different sonic registers simultaneously, and its booking policy — Ricardo Villalobos, Fumiya Tanaka, Ken Ishii, Jeff Mills — established Tokyo as a permanent node in the global techno circuit.',
    releases: []},

  // ── AUSTRALIA ────────────────────────────────────────────────────────────
  { id:'the_avalanches', label:'The Avalanches', type:'artist', genre:'experimental', era:2000, city:'Melbourne', country:'AU',
    desc:'The Avalanches formed in Melbourne in the mid-1990s from the noise-punk group Alarm 115. Their 2000 debut Since I Left You draws on approximately 3,500 samples — Italian disco, Calypso, surf rock, film music — assembled into a seamless, euphoric 61-minute sonic novel that is the most cited example of plunderphonics in electronic music. Steve Pavlovic founded Modular Recordings specifically to sign them after hearing their early EP; the album was released internationally via XL Recordings (UK). A 16-year gap before their second album Wildflower (2016) became part of their mythology, and they were instrumental in establishing Melbourne as capable of producing internationally significant electronic music.',
    releases: [
      { title: 'Since I Left You (Modular/XL)', year: 2000 },
      { title: 'Wildflower (Modular/Astralwerks)', year: 2016 },
      { title: 'We Will Always Love You (Modular)', year: 2020 },
    ]},

  { id:'modular_recordings', label:'Modular Recordings', type:'label', genre:'experimental', era:1998, city:'Sydney', country:'AU',
    desc:'Modular Recordings was founded in 1998 by Steve Pavlovic in Sydney after receiving a demo from the pre-Avalanches group, and grew into the most important Australian electronic label of the 2000s. Its roster — The Avalanches, Cut Copy, The Presets, Bag Raiders, Tame Impala — defined a Modular sound: electronic production fused with indie-rock energy, danceable but not club-pure, synthetic but emotionally warm. Regular Modular parties across Australia in the mid-2000s turned the label into a social movement; it licensed internationally through XL Recordings (UK) and Interscope (US). Pavlovic sold a 50% stake to Universal in 2005 and departed in 2016 following a legal dispute.',
    releases: []},

  { id:'cut_copy', label:'Cut Copy', type:'artist', genre:'techhouse', era:2004, city:'Melbourne', country:'AU',
    desc:'Cut Copy began as Dan Whitford\'s Melbourne bedroom project combining new wave synthesizer textures, Chicago house rhythm architecture, and post-punk guitar into a genre-agnostic sound. Signed to Modular Recordings in 2001, their 2008 album In Ghost Colours reached No. 1 on the ARIA chart and brought Australian indie-electronic music to an international audience that included DFA Records-adjacent American listeners and UK fans of Primal Scream and The Chemical Brothers. They performed at rock festivals and dance clubs with equal plausibility, a duality that became a defining feature of the Modular Recordings aesthetic.',
    releases: [
      { title: 'Bright Like Neon Love (Modular)', year: 2004 },
      { title: 'In Ghost Colours (Modular/Interscope)', year: 2008 },
      { title: 'Zonoscope (Modular/Interscope)', year: 2011 },
      { title: 'Free Your Mind (Modular/Interscope)', year: 2013 },
    ]},

  { id:'future_classic', label:'Future Classic', type:'label', genre:'deep', era:2004, city:'Sydney', country:'AU',
    desc:'Future Classic was co-founded in 2004 by Nathan McLay and Jay Ryves from a Sydney terrace and has become one of the most globally significant Australian electronic labels, operating simultaneously as a record label, management firm, and booking agency. Its aesthetic leans toward warmth, melody, and precision — qualities associated with Kompakt or Dial rather than harder club music — and it discovered Flume through an artist competition, developing him into Australia\'s most internationally prominent electronic act. The label also developed Chet Faker (Nick Murphy), Flight Facilities, and SOPHIE\'s Australian-era releases; it remains independent and artist-led.',
    releases: []},

  // ── SOUTH KOREA ──────────────────────────────────────────────────────────
  { id:'cakeshop', label:'Cakeshop', type:'venue', genre:'deep', era:2012, city:'Seoul', country:'KR',
    desc:'Cakeshop opened on 22 September 2012 in a former strip club basement in Itaewon, Seoul, with UK producer xxxy as its first guest. Founded by Gabriel Joseph and Samuel Swanson — both expats embedded in Seoul\'s creative community — it built its programming on the principle that Seoul could support internationally serious underground electronic music. The 200-capacity venue imposed a listening culture drawn from Western underground club norms filtered through Itaewon\'s internationally mixed energy, championing Peggy Gou before her international breakthrough and working with DJ Soulscape\'s 360 Sounds crew. Its eighth birthday in 2020 was celebrated with the launch of Carousel Records as its associated label.',
    releases: []},

  { id:'peggy_gou', label:'Peggy Gou', type:'artist', genre:'techhouse', era:2016, city:'Seoul', country:'KR', bandcamp:'peggygou', bandcamp_album:'544218793',
    desc:'Peggy Gou (born Kim Min-ji, 1991, Incheon) studied classical piano from age 8, relocated to London at 14, studied fashion at the London College of Fashion, and moved to Berlin in 2014 — initially for creative freedom rather than music. She taught herself DJing and production in Berlin\'s club environment and made her recording debut in January 2016 on Radio Slave\'s Rekids label, with her 2016 run of releases on Rekids, Phonica White, and Ninja Tune\'s Technicolour establishing her as a distinctive new voice drawing on 1980s Korean pop, early Chicago house, and Berlin minimal. She founded Gudu Records in 2019 — the name means "shoes" in Korean — and its debut single Starry Night became the first Beatport No. 1 by an Asian artist; (It Goes Like) Nanana (XL Recordings, 2023) brought her mainstream pop crossover.',
    releases: [
      { title: 'Art of War Part 1 EP (Rekids)', year: 2016 },
      { title: 'Once EP (Ninja Tune)', year: 2018 },
      { title: 'Starry Night (Gudu Records)', year: 2019 },
      { title: '(It Goes Like) Nanana (XL Recordings)', year: 2023 },
      { title: 'I Hear You (XL Recordings)', year: 2024 },
    ]},

  // ── JAPAN ────────────────────────────────────────────────────────────────
  { id:'mule_musiq', label:'Mule Musiq', type:'label', genre:'deep', era:2002, city:'Tokyo', country:'JP',
    desc:'Mule Musiq, founded in Tokyo in 2002 by Tadashi Yabe, has done more than any other Japanese label to establish a two-way conversation with European deep house. Cassy, Move D, Gerd Janson, and Kuniyuki have all released on it — a roster that places Tokyo within the same network as Hamburg, Amsterdam, and Berlin. What distinguishes Mule Musiq is taste: Yabe consistently identifies artists before international consensus catches up, which is why the label has maintained its reputation across two decades.',
    releases: [
      { title: '"Your Body" — Cassy', year: 2010 },
      { title: '"For the Love Of" — Gerd Janson', year: 2012 },
      { title: '"Fantasy" — Move D', year: 2014 },
    ]},

  { id:'fina', label:'Fina Records', type:'label', genre:'deep', era:2008, city:'Tokyo', country:'JP',
    desc:'Fina Records is a Tokyo-based deep house label founded in 2008. Its releases are warmly produced and introspective, rooted in the Chicago and Hamburg deep house lineages.',
    releases: [
      { title: '"Guchoki" — Hiroshi Watanabe', year: 2009 },
    ]},

  { id:'smallfish', label:'Smallfish Records', type:'label', genre:'experimental', era:2002, city:'Tokyo', country:'JP',
    desc:'Smallfish Records is a Tokyo record shop and label focused on electronic, experimental, and avant-garde music. Founded in 2002, it has served as a key cultural node for the Tokyo underground, connecting Japanese producers and audiences to international experimental and electronic music.',
    releases: [
      { title: '"Field Recordings from the Edge of Silence" — Various', year: 2004 },
    ]},

  { id:'minaret', label:'Minaret', type:'label', genre:'ambient', era:2010, city:'Tokyo', country:'JP',
    desc:'Minaret is a Tokyo label founded around 2010 that releases ambient and experimental electronic music. It is part of a Japanese tradition of engaging seriously with slow, textural music that extends back to Hiroshi Yoshimura\'s ambient work in the 1980s.',
    releases: [
      { title: '"Shrine" — Various', year: 2012 },
    ]},

  // ── SOUTH AFRICA ─────────────────────────────────────────────────────────
  { id:'afro_deep', label:'Afro Deep / SA Scene', type:'label', genre:'soul', era:2000, city:'Johannesburg', country:'ZA',
    desc:'South Africa developed a distinctive house music scene rooted in kwaito — the township music that had absorbed house rhythms in the late 1980s — and in local gospel and choral traditions. Afro house emerged in Johannesburg and Cape Town in the late 1990s with its own percussive, vocal character. Labels including Soulistic Music brought this sound to international audiences during the 2010s.',
    releases: [
      { title: 'We Dance Again — Black Coffee', year: 2015 },
      { title: '"Superman" — Black Coffee feat. Bucie', year: 2015 },
    ]},

  { id:'blackcoffee', label:'Black Coffee', type:'artist', genre:'soul', era:2005, city:'Johannesburg', country:'ZA',
    desc:'Nkosinathi Innocent Maphumulo performs as Black Coffee and grew up in Durban and Johannesburg. He founded Soulistic Music and built his profile through the South African afro house scene before establishing an international presence through Ibiza residencies from 2015 onward. He won the Grammy Award for Best Dance/Electronic Album in 2023.',
    releases: [
      { title: 'We Dance Again (Soulistic Music)', year: 2015 },
      { title: '"Superman" feat. Bucie (Soulistic)', year: 2015 },
      { title: 'Black Coffee (self-titled)', year: 2023 },
    ]},

  { id:'chicago_to_sa', label:'Chicago to Jo\'burg', type:'moment', genre:'deep', era:1994, city:'Johannesburg', country:'ZA',
    desc:'Chicago house arrives in South Africa via cassette tape and pirate radio in the late 1980s — a sound connecting with Black South African communities in the final years of apartheid. DJ culture grows fast around Johannesburg. House Afrika Records (1994) and Soul Candi (2001) document the local response — already something different: slower, more spacious, more vocal. Black Coffee\'s breakthrough completes the transformation into what the world calls Afro house.' },

  { id:'house_afrika', label:'House Afrika Records', type:'label', genre:'deep', era:1994, city:'Johannesburg', country:'ZA',
    desc:'Founded 1994 by Vinny Da Vinci, Tim White and DJ Strategy out of the Megatrax record shop in Johannesburg. South Africa\'s first dedicated house label and the launchpad for DJ Fresh\'s Fresh House Flava compilation series — the recordings that defined the nascent SA house sound and gave it a commercial vehicle.',
    releases:[
      {title:'Fresh House Flava Vol. 1 (House Afrika)', year:1994},
      {title:'House Afrika Sessions Vol. 1', year:1999},
    ]},

  { id:'vinny_da_vinci', label:'Vinny Da Vinci', type:'artist', genre:'deep', era:1994, city:'Johannesburg', country:'ZA',
    desc:'Co-founder of House Afrika Records and one of the founding generation of South African house DJs. Da Vinci shaped the infrastructure of the local industry alongside DJ Christos and DJ Fresh at a time when house music in SA was crossing racial divides in defiance of apartheid-era segregation.',
    releases:[
      {title:'House Afrika Sessions (House Afrika)', year:2000},
    ]},

  { id:'dj_christos', label:'DJ Christos', type:'artist', genre:'deep', era:1990, city:'Johannesburg', country:'ZA',
    desc:'Christos Katsaitis, known as the Godfather of South African House. Started DJing at 13, playing across racial divides during apartheid at Fourth World and Caesar\'s Palace. Later founded Katsaitis Music (1999), organised the South African Music Conference, and mentored artists including Black Coffee.',
    releases:[
      {title:'House Afrika Sessions Vol. 2 (House Afrika)', year:2000},
    ]},

  { id:'soul_candi', label:'Soul Candi Records', type:'label', genre:'deep', era:2001, city:'Johannesburg', country:'ZA',
    desc:'Founded 2001 in a Birnam basement by DJ Mbuso and partners, Soul Candi grew into South Africa\'s largest house distributor and label. Its Soul Candi Sessions compilation series documented the maturing local sound and provided infrastructure for hundreds of SA house artists over two decades.',
    releases:[
      {title:'Soul Candi Sessions Vol. 1', year:2003},
      {title:'Soul Candi Sessions Vol. 5 (feat. Black Coffee)', year:2007},
    ]},

  { id:'soulistic_music', label:'Soulistic Music', type:'label', genre:'deep', era:2005, city:'Johannesburg', country:'ZA',
    desc:'Founded by Black Coffee as a 360° label and management company. Became the spiritual headquarters of Afro house internationally, nurturing Culoe De Song, Da Capo, Shimza and others from Johannesburg\'s townships into the global circuit. The label\'s mentorship studio model distinguished it from conventional imprints.',
    releases:[
      {title:'Culoe De Song – Elevation EP (Soulistic)', year:2011},
      {title:'Black Coffee – We Dance Again (Soulistic)', year:2015},
    ]},

  { id:'culoe_de_song', label:'Culoe De Song', type:'artist', genre:'deep', era:2007, city:'Johannesburg', country:'ZA',
    desc:'Culolethu Zulu, atmospheric Afro-house specialist and one of Soulistic Music\'s core artists. His productions combine deep bass architectures with Zulu melodic sensibility, earning international releases on labels including !K7 and pointing the way for a generation of SA producers.',
    releases:[
      {title:'Elevation EP (Soulistic Music)', year:2011},
      {title:'Culoe De Song (K7 Records)', year:2013},
    ]},

  { id:'black_motion', label:'Black Motion', type:'artist', genre:'deep', era:2010, city:'Johannesburg', country:'ZA',
    desc:'Duo of Thabo Mabogwane and Bongani Mohosana. Pioneered Afro-percussion house by weaving live hand drums, traditional Zulu vocal elements and South African township rhythms into four-four club structures. Their album The Healers became one of the defining records of the genre.',
    releases:[
      {title:'Talking to the Drums (Family Tree)', year:2011},
      {title:'The Healers: The Last Chapter (Open Mic Productions)', year:2022},
    ]},

  { id:'spring_fiesta', label:'Spring Fiesta', type:'moment', genre:'deep', era:2010, city:'Johannesburg', country:'ZA',
    desc:'Africa\'s largest house music festival, established by Soul Candi\'s Ricardo Da Costa. Held annually in Johannesburg, Spring Fiesta became the definitive showcase for the full ecosystem of SA house — from foundational deep house through Afro-tech and amapiano — pulling 20 000+ attendees and anchoring the local calendar.',
    releases:[]},

  { id:'dj_lag', label:'DJ Lag', type:'artist', genre:'experimental', era:2015, city:'Durban', country:'ZA',
    desc:'Mlungisi Cele, central figure in gqom — the raw, bass-heavy and polyrhythmic electronic style that emerged from Durban\'s township parties around 2012. Lag took gqom to European festivals and contributed to the Black Panther soundtrack (2018), pushing the genre from local pirate radio into the global bass music conversation.',
    releases:[
      {title:'Ice Drop (Goon Club Allstars)', year:2016},
      {title:'Trip to New York EP', year:2018},
    ]},

  { id:'stay_true_sounds', label:'Stay True Sounds', type:'label', genre:'deep', era:2016, city:'Cape Town', country:'ZA',
    desc:'Founded in Cape Town in 2016 by Kid Fonque and Jullian Gomes. Became the benchmark imprint for quality deep house from South Africa\'s Western Cape, introducing DWSON, China Charmeleon and SIO to international audiences and providing a Cape Town counterpoint to the Johannesburg-centric Afro-house wave.',
    releases:[
      {title:'DWSON – You (Stay True Sounds)', year:2019},
    ]},

  // ── LATIN ROOTS ──────────────────────────────────────────────────────────
  { id:'cumbia', label:'Cumbia', type:'label', genre:'disco', era:1968, city:'Barranquilla', country:'CO',
    desc:'Cumbia emerged on Colombia\'s Caribbean coast from a meeting of African, Indigenous, and Spanish colonial musical cultures — its name likely derives from the Umbundu word "cumbé," a type of dance. By the mid-20th century it had become the dominant popular dance music across Latin America, with distinct national variants developing in Mexico (cumbia norteña), Argentina (cumbia villera), Peru (chicha), and beyond. In the 2000s digital cumbia and electrocumbia emerged as major forces in Latin American electronic music, with ZZK Records (Buenos Aires), Bomba Estéreo (Colombia), and Dengue Dengue Dengue (Peru) as key practitioners. It functions for Latin American electronic music as funk and disco do for North American electronic music — the foundational rhythmic body that gets remixed and digitized across generations.',
    releases: []},

  { id:'tropicalia', label:'Tropicália', type:'label', genre:'experimental', era:1968, city:'São Paulo', country:'BR',
    desc:'Tropicália (Tropicalismo) was a Brazilian artistic movement of 1967–68, centred in São Paulo and Rio de Janeiro. Key figures included Caetano Veloso, Gilberto Gil, Gal Costa, Tom Zé, Os Mutantes, and the poet Torquato Neto. Rooted in Oswald de Andrade\'s 1928 Anthropophagic Manifesto — the idea that Brazilian culture\'s strength is in "cannibalising" foreign influences into something entirely new — Tropicália fused samba and bossa nova with rock, psychedelia, imported electronic instruments, and avant-garde composition. It was not electronic music, but it established the cultural framework within which Brazilian artists have felt licensed to radically hybridize foreign sounds into something local. This thinking runs through Suba, São Paulo\'s electronic MPB tradition, and the broader Brazilian capacity to absorb and transform international electronic idioms.',
    releases: [
      { title: 'Tropicália ou Panis et Circencis (Philips)', year: 1968 },
      { title: 'Caetano Veloso (Philips)', year: 1969 },
    ]},

  { id:'funk_carioca', label:'Funk Carioca', type:'label', genre:'disco', era:1989, city:'Rio de Janeiro', country:'BR',
    desc:'Funk carioca (Baile Funk) emerged from Rio de Janeiro\'s favelas in the 1980s, initially absorbing Miami bass and freestyle from the United States before developing its own identity. The pivotal shift came around 1989 when DJs and MCs began rapping in Portuguese over local drum machine beats — separating the genre decisively from its American source material. The tamborzão beat, introduced around 1998 using programmed drum machines, became the rhythmic signature of the mature form. Baile funk spread through pirate radio and parties in the favelas. Internationally, it influenced M.I.A., Diplo (Favela on Blast, 2008), and a generation of global bass music producers.',
    releases: [
      { title: 'Funk Brasil — DJ Marlboro (Rob Som)', year: 1989 },
    ]},

  { id:'dj_marlboro', label:'DJ Marlboro', type:'artist', genre:'disco', era:1989, city:'Rio de Janeiro', country:'BR',
    desc:'Fernando Luiz Mattos da Matta (born 1963, Rio de Janeiro) is one of the primary founding figures of funk carioca. His 1989 LP Funk Brasil (Rob Som) was the first to feature MCs rapping extensively in Portuguese over Miami bass beats, sold 250,000 copies, and is broadly recognised as the founding document of the genre as a distinctly Brazilian form. He has continued producing and DJing through the 2020s, maintaining his role as a central figure in the scene he helped create.',
    releases: [
      { title: 'Funk Brasil (Rob Som)', year: 1989 },
      { title: 'Funk Brasil 2 (Rob Som)', year: 1992 },
    ]},

  { id:'suba', label:'Suba', type:'artist', genre:'ambient', era:1997, city:'São Paulo', country:'BR',
    desc:'Mitar Subotić (born 1961, Novi Sad, Yugoslavia) moved to São Paulo in the early 1990s and became one of the most inventive figures in Brazilian electronic music before his passing in November 1999. His posthumously completed album São Paulo Confessions (Ziriguiboom/Six Degrees, 2000) is a landmark of Brazilian electronic music — traditional MPB, bossa nova, and samba filtered through electronic arrangements into something unmistakably new. He produced Bebel Gilberto\'s Tanto Tempo, the best-selling Brazilian album outside Brazil at the time of release. His work continues the Tropicália tradition of radical synthesis.',
    releases: [
      { title: 'São Paulo Confessions (Ziriguiboom/Six Degrees)', year: 2000 },
    ]},

  // ── BRAZIL ───────────────────────────────────────────────────────────────
  { id:'brazil_scene', label:'São Paulo Underground', type:'label', genre:'techno', era:2000, city:'São Paulo', country:'BR',
    desc:'São Paulo has developed one of the most active techno scenes outside Europe. Clubs including D-Edge (opened 2003) have hosted international artists and supported local production. The city\'s scale and social intensity have shaped a local techno aesthetic that tends toward the hard and industrial.',
    releases: [],
  },

  { id:'d_edge', label:'D-Edge', type:'venue', genre:'techno', era:2003, city:'São Paulo', country:'BR',
    desc:'D-Edge opened in São Paulo in 2003 and became the central club venue for São Paulo\'s techno scene and Brazil\'s most internationally recognised club. Founded by Renato Ratier, Alex Antunes, Dani Doré and Cris Doré, the venue hosted major European and American techno artists while developing a local scene around a sound that tends hard and industrial. It was repeatedly ranked among the world\'s best clubs in international polls and is central to the development of a distinctly Brazilian techno aesthetic that absorbs influences from Berlin and Detroit.',
    releases: []},

  { id:'gop_tun', label:'Gop Tun', type:'label', genre:'experimental', era:2012, city:'São Paulo', country:'BR',
    desc:'Gop Tun is a São Paulo-based label and collective founded around 2012, focused on experimental club music and bass-oriented sounds drawing on baile funk, footwork, and global club music. It is part of a generation of Brazilian labels — alongside Príncipe (Lisbon) and others — that treat Brazilian rhythm traditions as raw material for radical electronic experimentation.',
    releases: []},


  // ── ARGENTINA ────────────────────────────────────────────────────────────
  { id:'cómeme', label:'Cómeme', type:'label', genre:'minimal', era:2010, city:'Buenos Aires', country:'AR',
    desc:'Cómeme was founded by Matias Aguayo around 2010, operating between Buenos Aires and Cologne. The label releases rhythmically sophisticated dance music drawing on cumbia, minimal techno, and global club music. Its roster reflects a genuinely internationalist approach.',
    releases: [
      { title: '"El Sucu Tucu" — Matias Aguayo', year: 2011 },
      { title: '"Rollerskate" — Rebolledo', year: 2012 },
      { title: '"Una Sola Cosa" — Matias Aguayo', year: 2013 },
    ]},

  { id:'aguayo', label:'Matias Aguayo', type:'artist', genre:'minimal', era:2005, city:'Buenos Aires', country:'AR', bandcamp:'matiasaguayo', bandcamp_album:'0270349786',
    desc:'Matias Aguayo was born in Chile and is based between Buenos Aires and Cologne. He founded the Cómeme label. His productions combine European minimal techno with Latin American rhythmic traditions and a playful approach to structure. He has released on Kompakt and his own label.',
    releases: [
      { title: 'Ay Ay Ay (Kompakt)', year: 2006 },
      { title: '"El Sucu Tucu" (Cómeme)', year: 2011 },
      { title: 'Ping Pong (Cómeme)', year: 2013 },
    ]},

  { id:'zzk_records', label:'ZZK Records', type:'label', genre:'disco', era:2008, city:'Buenos Aires', country:'AR',
    desc:'ZZK Records was founded in Buenos Aires in 2008 by Grant C. Dull (El Remolon) and Guillermo Canale (DJ Gato). It became the primary label for digital cumbia (cumbia digital) and electrocumbia — a movement that processes traditional cumbia, chicha, and Andean folk through electronic production tools. Key artists include El Remolón, King Coya, Chancha Via Circuito, and Frikstailers. ZZK established Buenos Aires as a world centre for electronic music rooted in Latin American rhythm traditions, with releases distributed through Nacional Records in the US and licensed internationally.',
    releases: [
      { title: '"Cumbia del Olvido" — Chancha Via Circuito', year: 2010 },
      { title: 'Río Arriba — Chancha Via Circuito (ZZK)', year: 2010 },
      { title: '"Cumbia de la Loma" — El Remolón (ZZK)', year: 2011 },
    ]},

  // ── COLOMBIA ─────────────────────────────────────────────────────────────
  { id:'bomba_estereo', label:'Bomba Estéreo', type:'artist', genre:'experimental', era:2005, city:'Bogotá', country:'CO',
    desc:'Bomba Estéreo was formed in Bogotá in 2005 by Simón Mejía (production) and Li Saumet (vocals). They fuse traditional Colombian rhythms — cumbia, porro, mapalé — with electronic production, rock, and global club music. Their approach is deeply political, with lyrics centring Afro-Colombian and indigenous traditions. Amanecer (2013, Sony Latin) and Ayo (2017) brought them to wide international audiences. They represent the most prominent contemporary fusion of Colombian folklore and electronic music.',
    releases: [
      { title: 'Fuego (Nacional Records)', year: 2012 },
      { title: 'Amanecer (Sony Latin)', year: 2013 },
      { title: 'Ayo (Sony Latin)', year: 2017 },
    ]},

  { id:'systema_solar', label:'Systema Solar', type:'artist', genre:'experimental', era:2006, city:'Barranquilla', country:'CO',
    desc:'Systema Solar is a Barranquilla-based collective formed around 2006, drawing members from across Colombia. They make cumbia-derived electronic music that incorporates champeta, porro, vallenato, and Afro-Colombian ritual music. Their productions use both electronic tools and traditional percussion alongside costumes and visual art that draw from Afro-Colombian carnival tradition. Their 2010 self-titled debut (Nacional Records) established them internationally.',
    releases: [
      { title: 'Systema Solar (Nacional Records)', year: 2010 },
      { title: '"El Bombazo" (Nacional)', year: 2013 },
    ]},

  // ── PERU ─────────────────────────────────────────────────────────────────
  { id:'dengue_dengue_dengue', label:'Dengue Dengue Dengue', type:'artist', genre:'experimental', era:2010, city:'Lima', country:'PE',
    desc:'Dengue Dengue Dengue is the Lima-based project of Felipe Salmon and Rafael Perez (from 2010), producing electronic music rooted in chicha — the Peruvian fusion of cumbia with Andean huayno — and in Afro-Peruvian and Amazonian traditions. Their music uses synthesizers and electronics alongside field recordings and traditional rhythm structures. They released on ZZK Records and their own Buh Records. The project represents a specifically Andean strand of Latin American electronic music distinct from the Argentine and Brazilian approaches.',
    releases: [
      { title: 'Siete Raíces (ZZK)', year: 2012 },
      { title: 'Zenit (ZZK)', year: 2015 },
    ]},

  // ── MEXICO ───────────────────────────────────────────────────────────────
  { id:'nortec_collective', label:'Nortec Collective', type:'label', genre:'experimental', era:1999, city:'Tijuana', country:'MX',
    desc:'Nortec Collective was formed in Tijuana in 1999 by Pepe Mogt and Ramón Amezcua (Bostich + Fussible) along with other artists. They developed "Nortec" — a fusion of norteño and banda brass with techno and electronic production. Tijuana\'s position on the US-Mexico border, with access to both American club culture and northern Mexican folk traditions, defined the project\'s character. The Body of the Crime (Palm Pictures, 2001) was their breakthrough. The project demonstrated that electronic music could be built around distinctly regional Mexican materials rather than international club conventions.',
    releases: [
      { title: 'The Body of the Crime (Palm Pictures)', year: 2001 },
      { title: 'Tijuana Sessions Vol. 3 (Palm Pictures)', year: 2003 },
    ]},

  { id:'mis', label:'Mexican Institute of Sound', type:'artist', genre:'experimental', era:2004, city:'Mexico City', country:'MX',
    desc:'Camilo Lara records as Mexican Institute of Sound (Instituto Mexicano del Sonido) and is based in Mexico City. He began releasing music in 2004 and released on Nacional Records. His productions combine electronic dance music with Mexican folk music — mariachi, cumbia, nortec — alongside samples from Mexican film and television. He has produced for artists including Beck and Nelly Furtado. His work applies a pop intelligence to the fusion of Mexican traditions and electronic idioms.',
    releases: [
      { title: 'Méjico Máxico (Nacional Records)', year: 2006 },
      { title: 'Soy Sauce (Nacional Records)', year: 2008 },
      { title: 'Corridos Prohibidos (Nacional Records)', year: 2011 },
    ]},

  { id:'rebolledo', label:'Rebolledo', type:'artist', genre:'minimal', era:2008, city:'Mexico City', country:'MX',
    desc:'Marco Antonio Reyes Michaus records as Rebolledo and is based in Mexico City. He co-founded Comeme with Matias Aguayo and releases on that label as well as on Beats in Space, ESP Institute, and others. His productions are rooted in minimal techno and house with a loose, groove-oriented character. He is a central figure in a Mexican electronic music scene that connects to the Cómeme and Panorama Bar networks.',
    releases: [
      { title: '"Rollerskate" (Cómeme)', year: 2012 },
      { title: 'Siete (Beats in Space)', year: 2014 },
    ]},

  { id:'pachanga_boys', label:'Pachanga Boys', type:'artist', genre:'minimal', era:2011, city:'Cologne', country:'DE', bandcamp:'pachangaboys', bandcamp_album:'1951222936',
    desc:'Pachanga Boys is the duo of Aksel Schaufler (Superpitcher, Cologne) and Mauricio Rebolledo (Mexico City), who met in Playa del Carmen, Mexico. Schaufler releases on Kompakt-affiliated Hippie Dance; Rebolledo co-founded Cómeme. Together they created an extended, groove-driven melodic house sound with psychedelic reach. Their track "Time" (2011) became one of the defining anthems of the European minimal and melodic house underground.',
    releases: [
      { title: '"Time" (Hippie Dance)', year: 2011 },
      { title: 'We Are Really Sorry (Hippie Dance)', year: 2012 },
    ]},

  // ── RUSSIA ───────────────────────────────────────────────────────────────
  { id:'ninakraviz', label:'Nina Kraviz', type:'artist', genre:'techno', era:2010, city:'Moscow', country:'RU',
    desc:'Nina Kraviz was born in Irkutsk, Russia. She began DJing and producing in Moscow and released her self-titled debut album on Rekids in 2012. She founded the трип (Trip) label in 2014. Her productions range from acid and house to harder techno. She has become one of the most internationally prominent DJs in contemporary techno.',
    releases: [
      { title: '"I\'m Gonna Get You" (Rekids)', year: 2010 },
      { title: 'Nina Kraviz (Rekids)', year: 2012 },
      { title: '"Ghetto Kraviz" (трип)', year: 2014 },
    ]},

  { id:'gost_zvuk', label:'Gost Zvuk', type:'label', genre:'techno', era:2012, city:'Moscow', country:'RU',
    desc:'Gost Zvuk was founded in Moscow in 2012. It is the most prominent label to emerge from the Russian techno and industrial electronic music underground. Artists include Buttechno and Basic Tape. The label\'s output engages with the global underground on its own terms, informed by the Detroit and Berlin traditions while developing a distinct aesthetic.',
    releases: [
      { title: '"Diatom" — Buttechno', year: 2013 },
      { title: '"System" — Basic Tape', year: 2015 },
      { title: '"Process" — Buttechno', year: 2016 },
    ]},

  // ── EASTERN EUROPE ────────────────────────────────────────────────────────
  { id:'pdj_warsaw', label:'Brutaż', type:'label', genre:'techno', era:2013, city:'Warsaw', country:'PL',
    desc:'Brutaż is a Warsaw label and club night founded in 2013. It is part of a Polish underground techno scene active around clubs including Smolna. Its releases are hard, functional techno with a character its founders describe as rough or raw — the word brutaż suggests unpolished directness in Polish.',
    releases: [
      { title: '"Brutaż 001" — Various', year: 2014 },
      { title: '"Brutaż 005" — Various', year: 2016 },
    ]},

  // ── ROMANIA — ROMINIMAL ──────────────────────────────────────────────────
  { id:'rhadoo', label:'Rhadoo', type:'artist', genre:'minimal', era:2004, city:'Bucharest', country:'RO',
    desc:'Rhadoo (Radu Mihalache) is one of the three founders of the Romanian minimal sound known as rominimal, alongside Petre Inspirescu and Raresh — together performing as the RPR Soundsystem. His DJ sets are characterised by extreme patience, long structural arcs, and a deeply hypnotic quality derived from Perlon and Robert Johnson aesthetics filtered through a specifically Eastern European sensibility. His fabric 72 mix (2013) brought international attention to the Bucharest scene. He holds a residency at Robert Johnson in Offenbach, one of the few non-Western European DJs with this status.',
    releases: [
      { title: 'fabric 72 (Fabric)', year: 2013 },
      { title: 'Sunwaves Mix (Sunwaves)', year: 2010 },
    ]},

  { id:'petre_inspirescu', label:'Petre Inspirescu', type:'artist', genre:'minimal', era:2006, city:'Bucharest', country:'RO',
    desc:'Petre Inspirescu is a Bucharest DJ and producer and co-founder of the [a:rpia:r] label alongside Rhadoo and Raresh. He is one of the three core figures of rominimal — the stripped, patient, deeply hypnotic minimal techno style that emerged from Bucharest in the mid-2000s, developed in dialogue with the Perlon and Robert Johnson aesthetic. His productions and DJ sets share the Romanian style\'s characteristic restraint: tracks that develop slowly, resist resolution, and reward sustained attention.',
    releases: [
      { title: '"Gre" ([a:rpia:r])', year: 2007 },
      { title: '"Mamagubida" ([a:rpia:r])', year: 2011 },
    ]},

  { id:'raresh', label:'Raresh', type:'artist', genre:'minimal', era:2006, city:'Bucharest', country:'RO',
    desc:'Raresh is a Bucharest DJ and producer who co-founded [a:rpia:r] with Rhadoo and Petre Inspirescu. His fabric 78 mix (2014) followed Rhadoo\'s fabric 72 in placing the Romanian scene within the international conversation. As a member of the RPR Soundsystem he has performed extended back-to-back sessions at Sunwaves, Robert Johnson, and at venues across Europe. His individual style tends slightly warmer and more percussive than his labelmates, but shares the same underlying patience and structural rigour.',
    releases: [
      { title: 'fabric 78 (Fabric)', year: 2014 },
    ]},

  { id:'arpia_r', label:'[a:rpia:r]', type:'label', genre:'minimal', era:2006, city:'Bucharest', country:'RO',
    desc:'[a:rpia:r] is a Bucharest label founded in 2006 by Rhadoo, Petre Inspirescu, and Raresh. Its name is a phonetic rendering of its founders\' initials. The label is the primary document of rominimal — the distinct minimal techno aesthetic that emerged in Bucharest from an encounter with Perlon and Robert Johnson. Releases are almost exclusively by the three founders and are characterised by long, contemplative tracks with highly developed rhythmic detail and near-total avoidance of melodic decoration. The label has released fewer than two dozen records and every one is considered significant within the minimal techno canon.',
    releases: [
      { title: '[a:rpia:r] 001 — Rhadoo', year: 2006 },
      { title: '[a:rpia:r] 005 — Petre Inspirescu', year: 2007 },
      { title: '[a:rpia:r] 014 — Raresh', year: 2011 },
    ]},

  { id:'sunwaves', label:'Sunwaves Festival', type:'moment', genre:'minimal', era:2007, city:'Bucharest', country:'RO',
    desc:'Sunwaves is a Romanian beach festival held at Mamaia on the Black Sea coast, founded in 2007. It operates on a format of continuous 24-hour techno and minimal across several stages, with extended sets by resident DJs including Rhadoo, Petre Inspirescu, and Raresh lasting six to twelve hours. The festival operates without a conventional headliner model — the emphasis is on marathon listening sessions rather than peak moments — and has become one of the most discussed events in the international minimal techno community. Its unofficial recordings circulate widely and are considered essential documents of rominimal in its mature form.',
    releases: []},

  { id:'mihai_popoviciu', label:'Mihai Popoviciu', type:'artist', genre:'minimal', era:2005, city:'Bucharest', country:'RO',
    desc:'Mihai Popoviciu is a Bucharest-born producer and DJ whose sound sits at the intersection of rominimal and warm deep house — less arid than the RPR Soundsystem but sharing the same patience and rhythmic sophistication. His debut release appeared on International DeeJay Gigolos (Hellcat) in 2005; subsequent work appeared on Drumpoet Community, Robsoul, Poker Flat, and Kompakt. He occupies the warmer, more song-adjacent edge of the Bucharest scene and has maintained consistent international presence across two decades.',
    releases: [
      { title: '"Ritual" EP (International DeeJay Gigolos)', year: 2005 },
      { title: '"Moon Walk" EP (Drumpoet Community)', year: 2010 },
      { title: '"Raver" (Drumpoet Community)', year: 2014 },
    ]},

  // ── GEORGIA — BASSIANI ────────────────────────────────────────────────────
  { id:'bassiani', label:'Bassiani', type:'venue', genre:'minimal', era:2014, city:'Tbilisi', country:'GE',
    desc:'Bassiani is a club in Tbilisi, Georgia, founded in 2014 and located beneath the Dinamo Tbilisi football stadium in a former Soviet-era swimming pool infrastructure. It rapidly became one of the most politically significant clubs in contemporary electronic music: in a country where LGBTQ+ rights remain constrained, Bassiani operated openly as a queer and progressive space, functioning as a cultural counterweight to Georgian conservatism. On May 12, 2018, Georgian police raided the club during a night curated by the Giegling collective from Weimar, claiming a drug operation; thousands of Tbilisi residents gathered outside in protest, and the event catalysed a national discussion about civil liberties and the government\'s relationship to youth culture. The club has been rated among the world\'s best by Resident Advisor and has hosted all major figures in contemporary minimal and dark techno.',
    releases: []},

  { id:'bassiani_records', label:'Bassiani Records', type:'label', genre:'minimal', era:2016, city:'Tbilisi', country:'GE',
    desc:'Bassiani Records was founded in 2016 as the in-house label of the Bassiani club in Tbilisi. Its releases document the Georgian underground scene and international artists connected to the club. Releases include work by resident artists HVL and Irakli alongside international figures.',
    releases: [
      { title: 'Bassiani 001 — HVL', year: 2016 },
      { title: 'Bassiani 003 — Various', year: 2017 },
    ]},

  { id:'hvl', label:'HVL', type:'artist', genre:'minimal', era:2015, city:'Tbilisi', country:'GE',
    desc:'HVL is a Tbilisi-based DJ duo and the resident act most closely associated with Bassiani. They were performing at the club on the night of the May 2018 police raid — their DJ set was interrupted mid-way through — becoming unwilling symbols of the political confrontation between Georgian club culture and state power. Their music operates in a dark, hypnotic minimal techno register consistent with the Bassiani aesthetic: industrial textures, slow builds, and structural patience characteristic of the global post-Perlon underground.',
    releases: [
      { title: 'Bassiani 001 (Bassiani Records)', year: 2016 },
    ]},

  { id:'irakli', label:'Irakli', type:'artist', genre:'minimal', era:2016, city:'Tbilisi', country:'GE',
    desc:'Irakli is a Tbilisi-born DJ and producer closely associated with Bassiani. His 2021 debut album Major Signals appeared on Dial Records in Hamburg — a direct validation from one of the most respected labels in European deep and minimal music. His 2023 live recording Mechanical Moon at Robert Johnson (the Offenbach club central to rominimal and Perlon) placed him within the same network that shaped Rhadoo and the Romanian scene. His music moves between dark minimal techno and deeper, more introspective territory.',
    releases: [
      { title: 'Major Signals (Dial)', year: 2021 },
      { title: 'Mechanical Moon at Robert Johnson (Robert Johnson)', year: 2023 },
    ]},

  // ── UKRAINE ───────────────────────────────────────────────────────────────
  { id:'nastia', label:'Nastia', type:'artist', genre:'techno', era:2005, city:'Kyiv', country:'UA',
    desc:'Nastia (Anastasia Tymoshenko, born 1987 in Zaporizhzhia) is the most internationally prominent figure to emerge from the Ukrainian electronic music scene. She began DJing in Kyiv in the early 2000s, developing a hard, industrial techno style that drew on the Berlin, Birmingham, and Detroit traditions. Her sets are technically demanding and dynamically extreme, making her a regular at Berghain, Fabric, and festivals across Europe. She has released on her own Nechto imprint and on various labels. Her career has given Kyiv visibility in global underground techno.',
    releases: [
      { title: 'Nechto 001 — Nastia (Nechto)', year: 2012 },
      { title: 'Triangular Frequencies — Nastia (Drumma)', year: 2016 },
    ]},

  { id:'cxema', label:'Cxema', type:'moment', genre:'techno', era:2014, city:'Kyiv', country:'UA',
    desc:'Cxema (from the Ukrainian слово схема, "scheme" or "diagram") is a Kyiv-based party collective founded in 2014 by Slava Lepsheev. It operates in unconventional spaces — galleries, factories, museums — rather than established clubs, positioning its events as artistic experiences as much as parties. Its programming has emphasised contemporary electronic music rooted in minimal, industrial, and dark techno, and it has helped define a visual and social identity for Kyiv\'s underground that resonates internationally. Following Russia\'s full-scale invasion of Ukraine in 2022, Cxema has hosted benefit events and continued operating as a statement of cultural resilience.',
    releases: []},

  // ── POLAND ────────────────────────────────────────────────────────────────
  { id:'jacek_sienkiewicz', label:'Jacek Sienkiewicz', type:'artist', genre:'minimal', era:2002, city:'Warsaw', country:'PL',
    desc:'Jacek Sienkiewicz is a Warsaw-born producer and DJ who has been releasing music since the early 2000s on his own Recognition label and on Cocoon Recordings. His debut Techne LP on Cocoon (2002) placed him within the Frankfurt-rooted minimal techno network at an early stage. His productions are detailed, rhythmically sophisticated minimal techno with a strong structural intelligence. He is the most internationally recognised Polish electronic music producer, with releases that have consistently engaged with the German and broader European minimal canon over two decades.',
    releases: [
      { title: 'Techne (Cocoon Recordings)', year: 2002 },
      { title: '"Prolog" EP (Recognition)', year: 2005 },
      { title: 'Sequence of Changes (Recognition)', year: 2011 },
    ]},

  { id:'smolna', label:'Smolna', type:'venue', genre:'techno', era:2015, city:'Warsaw', country:'PL',
    desc:'Smolna is a Warsaw club that opened in 2015 and became the most internationally recognised venue in the Polish underground techno scene. Located in a basement on Smolna Street in central Warsaw, it programmes dark, minimal, and hard techno alongside deeper house music. It is the primary home of the Warsaw underground and has hosted international artists alongside the scene around Brutaż and the local minimal scene.',
    releases: []},

  { id:'unsound', label:'Unsound Festival', type:'moment', genre:'experimental', era:2003, city:'Kraków', country:'PL',
    desc:'Unsound is a Kraków-based festival founded in 2003 by Mat Schulz. It focuses on experimental, avant-garde, and underground electronic music and has hosted an extraordinary breadth of artists across its two-decade history: from Burial and Four Tet to Peter Rehberg, Actress, footwork, industrial techno, and sound art. Its consistent refusal of easy genre categories and its emphasis on new commissions and live performances make it one of the most intellectually rigorous electronic music festivals in the world. It also runs editions in New York and other cities.',
    releases: []},

  // ── RUSSIA (additional) ───────────────────────────────────────────────────
  { id:'arma17', label:'Arma 17', type:'venue', genre:'techno', era:2008, city:'Moscow', country:'RU',
    desc:'Arma 17 was a Moscow club that operated from 2008 to 2014 in a former gas-holder building on the Yauza River. It was the first Moscow venue to achieve sustained international credibility, hosting Berghain residents and German techno acts alongside a developing local scene. Its closing in 2014 — under pressure from Moscow\'s increasingly hostile regulatory environment — was a significant moment in the history of Russian club culture. Nina Kraviz was among the resident artists during its operation. Arma 17 helped establish the possibility of a world-class techno scene in Moscow.',
    releases: []},

  // ── AMBIENT / MISC ────────────────────────────────────────────────────────
  { id:'oleeva', label:'Oleeva Records', type:'label', genre:'ambient', era:2018, city:'London', country:'UK',
    desc:'Oleeva Records is a London-based label founded in 2018 releasing ambient and deep house-adjacent material.',
    releases: [],
  },

  // ── DETROIT — EXPANDED ───────────────────────────────────────────────────
  { id:'underground_resistance', label:'Underground Resistance', type:'label', genre:'detroit', era:1991, city:'Detroit', country:'US',
    desc:'Underground Resistance was founded in Detroit in 1991 by Mike Banks ("Mad Mike") and Jeff Mills. Anti-commercial, anonymous, and militaristic, the label channelled the energy of Detroit\'s Black working class through confrontational industrial techno. Its Galaxy 2 Galaxy project (1993) articulated a spiritual lineage connecting blues, jazz, funk, and electronic music as continuous expressions of African American experience. Jeff Mills departed after two years; Banks continued with Robert Hood, and later brought in Gerald Donald and James Stinson as Drexciya. UR\'s deliberate opacity — artist names often omitted, releases appearing without warning — made it one of the most ideologically coherent and influential labels in electronic music history.',
    releases: [
      { title: '"The Theory" (UR001)', year: 1991 },
      { title: 'Galaxy 2 Galaxy — Galaxy 2 Galaxy (UR012)', year: 1993 },
      { title: 'Timeline — Various (UR038)', year: 2000 },
    ]},

  { id:'jeff_mills', label:'Jeff Mills', type:'artist', genre:'detroit', era:1991, city:'Detroit', country:'US',
    desc:'Jeff Mills was born in Detroit in 1963 and began DJing as "The Wizard" on WJLB radio in the mid-1980s, developing a rapid, three-deck mixing style from the urban contemporary format that became one of the most technically demanding approaches in club music. He co-founded Underground Resistance with Mike Banks in 1991 before departing to found Axis Records in 1992. His Tresor mixes (1994, 2001) set the benchmark for functional techno DJing. "The Bells" (Axis, 1996) is among the most recognised records in techno history. He has collaborated with orchestras, opera companies, and visual artists globally and has never ceased releasing or performing at extraordinary pace across four decades. He is widely considered one of the most important figures in the entire history of electronic music.',
    releases: [
      { title: 'Tresor II — Berlin-Detroit (Tresor)', year: 1994 },
      { title: '"The Bells" (Axis)', year: 1996 },
      { title: 'Exhibitionist (Tresor)', year: 2001 },
    ]},

  { id:'robert_hood', label:'Robert Hood', type:'artist', genre:'detroit', era:1991, city:'Detroit', country:'US',
    desc:'Robert Hood emerged from the Underground Resistance circle in Detroit and developed minimal techno — stripping techno to its purest structural elements, removing every component not essential to the music\'s hypnotic and physical effect. His Minimal Nation LP (Axis Records, 1994) is the foundational document of the entire minimal techno tradition, preceding the European minimal wave by a decade and directly influencing every producer from Plastikman to the Cologne scene. He also records as Floorplan, a deep gospel-house project with his daughter Lyric Hood; their "Never Grow Old" (2012) reached audiences far beyond the underground. His influence on European producers is enormous and often insufficiently acknowledged.',
    releases: [
      { title: 'Minimal Nation (Axis)', year: 1994 },
      { title: '"Moveable Parts" (M-Plant)', year: 1996 },
      { title: '"Never Grow Old" (as Floorplan, Clone)', year: 2012 },
    ]},

  { id:'carl_craig', label:'Carl Craig', type:'artist', genre:'detroit', era:1991, city:'Detroit', country:'US',
    desc:'Carl Craig was born in Detroit in 1969 and came to music through Derrick May, who became his mentor and early collaborator. His productions under aliases including Psyche, BFC, and 69 explored the warmer, more melodic, more jazz-inflected dimension of Detroit techno. He founded Planet E Communications in 1991. His Landcruising album (1995) and More Songs About Food and Revolutionary Art (1997) are among the most critically regarded Detroit records. He has collaborated with Moritz von Oswald, Moodymann, Paperclip People, and the Orchestre National de Lyon. Planet E has remained one of Detroit\'s most consistently active labels for over thirty years.',
    releases: [
      { title: 'Landcruising (Planet E)', year: 1995 },
      { title: 'More Songs About Food and Revolutionary Art (Planet E)', year: 1997 },
      { title: 'Versus — with Moritz von Oswald (Honestly)', year: 2012 },
    ]},

  { id:'axis_records', label:'Axis Records', type:'label', genre:'detroit', era:1992, city:'Detroit', country:'US',
    desc:'Axis Records was founded in Detroit in 1992 by Jeff Mills following his departure from Underground Resistance. In its first three decades it released over a hundred records — including "The Bells" (1996), one of the most recognised tracks in techno — as well as Robert Hood\'s Minimal Nation (1994) and work by Mills under multiple aliases. The label has operated without commercial compromise throughout its existence.',
    releases: [
      { title: 'Minimal Nation — Robert Hood (Axis)', year: 1994 },
      { title: '"The Bells" — Jeff Mills (Axis)', year: 1996 },
      { title: 'Director\'s Cut Chapter One — Jeff Mills (Axis)', year: 2011 },
    ]},

  // ── FRANCE — LAURENT GARNIER ─────────────────────────────────────────────
  { id:'rex_club', label:'Rex Club', type:'venue', genre:'techno', era:1989, city:'Paris', country:'FR',
    desc:'The Rex Club is a Parisian venue that opened in the 1980s on Boulevard Poissonnière. Its basement became one of Europe\'s most important techno venues during the 1990s through Laurent Garnier\'s residency and a booking philosophy that prioritised extended sets and genuine underground artists over commercial considerations. The club has continued operating through the 2020s with a consistent reputation for seriousness — long sets, committed audiences — that places it alongside Robert Johnson and Berghain as a model of depth-over-spectacle club programming.',
    releases: []},

  { id:'laurent_garnier', label:'Laurent Garnier', type:'artist', genre:'techno', era:1989, city:'Paris', country:'FR',
    desc:'Laurent Garnier was born near Paris in 1966 and discovered house music in Chicago in 1987 while working at the French Embassy. He took up a residency at The Haçienda in Manchester in 1989, among the first European DJs to do so. He founded F Communications in Paris in 1994 and held a long residency at the Rex Club, helping make Paris a significant node in the global techno circuit. His productions — "Crispy Bacon" (1997), "The Man With the Red Face" (2000), and the Unreasonable Behaviour album (2000) — are definitive French techno documents. He is the most internationally prominent French electronic artist before Daft Punk and has remained active without interruption for nearly four decades.',
    releases: [
      { title: '"Crispy Bacon" (F Communications)', year: 1997 },
      { title: 'Unreasonable Behaviour (F Communications)', year: 2000 },
      { title: '"The Man With the Red Face" (F Communications)', year: 2000 },
    ]},

  { id:'f_communications', label:'F Communications', type:'label', genre:'techno', era:1994, city:'Paris', country:'FR',
    desc:'F Communications was founded in Paris in 1994 by Laurent Garnier. The label became one of the most significant French electronic labels of the 1990s and 2000s, releasing Garnier alongside I:Cube, DJ Deep, Scan X, and Lil Louis — representing a distinctly French approach to techno: more melodic, more open to song structure, and more influenced by American house than the German mainstream. It helped establish France as a serious contributor to the European techno tradition.',
    releases: [
      { title: '"Crispy Bacon" — Laurent Garnier (FC)', year: 1997 },
      { title: 'Unreasonable Behaviour — Laurent Garnier (FC)', year: 2000 },
      { title: '"Made in France" — Various (FC compilation)', year: 1995 },
    ]},

  // ── UK — HYPERDUB / PLANET MU ────────────────────────────────────────────
  { id:'hyperdub', label:'Hyperdub', type:'label', genre:'experimental', era:2004, city:'London', country:'UK', bandcamp:'hyperdub',
    desc:'Hyperdub was founded in London in 2004 by Steve Goodman (Kode9). Beginning as a website and netlabel, it became the primary home for dubstep-adjacent experimental bass music. Burial\'s self-titled debut (2006) and Untrue (2007) established it as a label of major artistic importance. Subsequent releases by Laurel Halo, Ikonika, Jessy Lanza, Actress, and Jlin extended the label across a decade of global experimental club music. It released DJ Rashad\'s Double Cup in 2013 and Jlin\'s early tracks, making it a key bridge between the UK underground and the Chicago footwork scene. It is among the most consistently significant UK labels of the 2000s–2020s.',
    releases: [
      { title: 'Burial — Burial (Hyperdub)', year: 2006 },
      { title: 'Untrue — Burial (Hyperdub)', year: 2007 },
      { title: 'Double Cup — DJ Rashad (Hyperdub)', year: 2013 },
      { title: 'Dark Energy — Jlin (Hyperdub)', year: 2015 },
    ]},

  { id:'kode9', label:'Kode9', type:'artist', genre:'experimental', era:2004, city:'London', country:'UK', bandcamp:'kode9', bandcamp_album:'0107193543',
    desc:'Steve Goodman records as Kode9 and founded Hyperdub in London in 2004. His theoretical writing — Sonic Warfare (2009, MIT Press) — is among the most influential texts on bass music and its physical-political dimensions. His productions with the late Spaceape (Stephen Gordon) introduced dub-influenced, voice-led electronics into what became dubstep. He is responsible for signing and releasing Burial\'s first recordings — one of the most consequential curatorial decisions in British underground music.',
    releases: [
      { title: 'Memories of the Future — Kode9 & Spaceape (Hyperdub)', year: 2006 },
      { title: 'Black Sun — Kode9 & Spaceape (Hyperdub)', year: 2012 },
    ]},

  { id:'planet_mu', label:'Planet Mu', type:'label', genre:'experimental', era:1995, city:'London', country:'UK',
    desc:'Planet Mu was founded in London in 1995 by Mike Paradinas (µ-Ziq). Beginning as a vehicle for Paradinas\'s own releases, it subsequently signed Venetian Snares, Ceephax, and a range of IDM and broken beat artists. In 2013 it released Jlin\'s early tracks and her debut album Dark Energy (2015), becoming the primary international label for footwork outside the US and transforming its own profile in the process. It is one of the most diverse and consistently interesting independent electronic labels in the UK across three decades.',
    releases: [
      { title: 'Lunatic Harness — µ-Ziq (Planet Mu)', year: 1997 },
      { title: 'Rossz Csillag Alatt Született — Venetian Snares (Planet Mu)', year: 2005 },
      { title: 'Dark Energy — Jlin (Planet Mu)', year: 2015 },
    ]},

  // ── UK — HESSLE AUDIO EXTENDED / BRISTOL ─────────────────────────────────
  { id:'ben_ufo', label:'Ben UFO', type:'artist', genre:'experimental', era:2007, city:'London', country:'UK',
    desc:'Ben Thomson records as Ben UFO and co-founded Hessle Audio in London in 2007 alongside Pangaea and Blawan. Primarily a DJ and selector rather than a producer, he has been consistently rated among the finest DJs in the world. His sets move fluidly across UK bass, techno, house, and experimental club music with a command of the underground that has been widely cited as formative by a generation of younger DJs. His long-running NTS Radio show and Hessle Audio events have been significant platforms for the London underground.',
    releases: [
      { title: 'Hessle Audio Night (live recordings)', year: 2010 },
    ]},

  { id:'pangaea', label:'Pangaea', type:'artist', genre:'experimental', era:2007, city:'London', country:'UK',
    desc:'Kevin McAulay records as Pangaea and co-founded Hessle Audio in London in 2007. His productions blend bass-heavy structures with industrial textures and broken rhythms. As one of three co-founders of Hessle Audio alongside Ben UFO and Blawan, he helped define one of the most influential UK labels of the 2010s. He has released on Hessle Audio and his own Hadal Zone label.',
    releases: [
      { title: '"Hazel" (Hessle Audio)', year: 2011 },
      { title: '"In Colour" (Hessle Audio)', year: 2013 },
      { title: '"Unfold" (Hessle Audio)', year: 2016 },
    ]},

  { id:'call_super', label:'Call Super', type:'artist', genre:'experimental', era:2012, city:'London', country:'UK', bandcamp:'callsuper', bandcamp_album:'2315348673',
    desc:'JR Seaton releases as Call Super. His productions sit between techno, electro and post-club abstraction — meticulously detailed and resistant to easy genre placement. A key figure in the Hessle Audio orbit, he has also released on Dekmantel, Optimo Music and his own Phinery imprint, embodying the strand of UK electronic music that refuses to separate the intellectual from the physical.',
    releases:[
      {title:'"Arpo" (Hessle Audio)', year:2013},
      {title:'Suzi Ecto (Hessle Audio)', year:2014},
      {title:'Arpo Revisited (Dekmantel)', year:2016},
      {title:'The Present Tense (Phinery)', year:2019},
    ]},

  { id:'funktion_one', label:'Funktion-One', type:'label', genre:'experimental', era:1992, city:'London', country:'UK',
    desc:'Sound system company founded by Tony Andrews and John Newsham. Funktion-One speakers became the defining acoustic infrastructure of the global underground — installed in Berghain, fabric, Tresor, Printworks and dozens of the most important clubs. The company\'s obsession with reproducing low frequencies faithfully shaped how DJs and producers think about bass, making it one of the few non-musical entities with genuine influence on the sound and culture of electronic music.',
    releases:[]},

  { id:'demdike_stare', label:'Demdike Stare', type:'artist', genre:'experimental', era:2008, city:'Manchester', country:'UK',
    desc:'Demdike Stare is the project of Sean Canty and Miles Whittaker, based in Manchester. They produce dense, collage-based electronics drawing from horror film soundtracks, industrial, dub, and electronic body music, with a distinctly archival sensibility rooted in Manchester\'s record-collecting culture. Their Tryptych series (Modern Love, 2011) is regarded as one of the most important documents of contemporary experimental electronics. Whittaker also releases as Millie & Andrea (with Andy Stott) and is central to the Modern Love label.',
    releases: [
      { title: 'Voices of Dust (Modern Love)', year: 2009 },
      { title: 'Tryptych (Modern Love)', year: 2011 },
      { title: 'Testpressing series (Modern Love)', year: 2012 },
    ]},

  { id:'special_request', label:'Special Request', type:'artist', genre:'experimental', era:2014, city:'London', country:'UK', bandcamp:'special-request', bandcamp_album:'4275236258',
    desc:'Paul Woolford records as Special Request and has been active in the UK underground since the late 1990s under various aliases. The Special Request project, launched in 2014, channelled the hardcore continuum — jungle, drum & bass, rave — into a contemporary techno and club music context, producing dense, polyrhythmic music with a distinctive nostalgic charge. His Vortex album (Houndstooth, 2019) received substantial critical attention as a document of the rave revival. He is one of the central figures in the reintegration of UK hardcore into the contemporary underground.',
    releases: [
      { title: 'Belief System (Houndstooth)', year: 2017 },
      { title: 'Vortex (Houndstooth)', year: 2019 },
      { title: 'Falling / Burning (Houndstooth)', year: 2021 },
    ]},

  { id:'pinch', label:'Pinch', type:'artist', genre:'experimental', era:2005, city:'Bristol', country:'UK',
    desc:'Tom Sherwood records as Pinch and founded Tectonic Recordings in Bristol in 2005. His productions draw heavily on Jamaican sound system culture, dub reggae, and UK bass music. His collaboration with Shackleton — an eponymous LP on Tectonic (2008) — is one of the key documents of the Bristol underground, fusing Shackleton\'s percussive ritualism with Pinch\'s sub-bass architecture. He has released on Planet Mu and his own Tectonic, and his Tectonic parties have been central to Bristol bass culture for two decades.',
    releases: [
      { title: '"Qawwali" (Tectonic)', year: 2007 },
      { title: 'Pinch & Shackleton (Tectonic)', year: 2008 },
      { title: 'Part & Parcel (Tectonic)', year: 2012 },
    ]},

  { id:'tectonic', label:'Tectonic', type:'label', genre:'experimental', era:2005, city:'Bristol', country:'UK',
    desc:'Tectonic Recordings was founded in Bristol in 2005 by Pinch. The label releases music rooted in dub, sub-bass, and UK sound system culture. Its catalogue connects the post-dubstep Bristol underground to the Skull Disco and Livity Sound networks and includes the Pinch & Shackleton collaboration and releases by Mala (Digital Mystikz) and other key bass music figures. It is one of the defining Bristol labels.',
    releases: [
      { title: 'Pinch & Shackleton (Tectonic)', year: 2008 },
      { title: '"Qawwali" — Pinch (Tectonic)', year: 2007 },
    ]},

  // ── BERLIN — BERGHAIN RESIDENTS ──────────────────────────────────────────
  { id:'ben_klock', label:'Ben Klock', type:'artist', genre:'techno', era:2006, city:'Berlin', country:'DE', bandcamp:'benklock', bandcamp_album:'2544763768',
    desc:'Ben Klock is a Berlin DJ and producer who has held a Berghain residency since the club opened in 2004, making him one of its longest-serving residents. He founded the Klockworks label in 2007. His productions are dense, layered, and atmospheric — industrial and minimal simultaneously — with exceptional attention to the build and release of tension across extended sets. His Fabric 66 mix (2013) is among the most praised in that label\'s catalogue. He is one of the central figures in defining the Berghain sound internationally.',
    releases: [
      { title: '"Subzero" (Ostgut Ton)', year: 2008 },
      { title: 'One (Ostgut Ton)', year: 2009 },
      { title: 'Fabric 66 (Fabric)', year: 2013 },
    ]},

  { id:'klockworks', label:'Klockworks', type:'label', genre:'techno', era:2007, city:'Berlin', country:'DE',
    desc:'Klockworks was founded in Berlin in 2007 by Ben Klock. The label releases dark, atmospheric, industrial-leaning techno in the Berghain aesthetic. Artists include Markus Suckut, Truncate, Norman Nodge, Recondite, and Stef Mendesidis. It is one of the primary documents of the Berghain sound and has maintained consistent quality across nearly two decades.',
    releases: [
      { title: 'KW01 — Ben Klock', year: 2007 },
      { title: 'KW10 — Truncate', year: 2011 },
      { title: 'KW20 — Norman Nodge', year: 2015 },
    ]},

  { id:'pan_label', label:'PAN', type:'label', genre:'experimental', era:2008, city:'Berlin', country:'DE',
    desc:'PAN (formerly Physical Audio Network) was founded in Berlin in 2008 by Bill Kouligas. The label occupies the intersection of experimental electronics, club music and contemporary composition — releasing Objekt\'s Flatland, Jlin\'s Autobiography, Holly Herndon\'s Platform, Amnesia Scanner\'s Another Life and work by Terre Thaemlitz, Fatima Al Qadiri and Klein. PAN operates without genre loyalty, treating the club and the concert hall as equally valid contexts, and has become one of the most internationally respected experimental music labels of the 21st century.',
    releases:[
      {title:'Objekt – Flatland (PAN)', year:2014},
      {title:'Jlin – Autobiography (PAN)', year:2017},
      {title:'Holly Herndon – Platform (PAN)', year:2015},
      {title:'Amnesia Scanner – Another Life (PAN)', year:2018},
    ]},

  { id:'len_faki', label:'Len Faki', type:'artist', genre:'techno', era:2005, city:'Berlin', country:'DE',
    desc:'Len Faki is a Berlin DJ, producer, and long-serving Berghain resident who founded the Figure label. His productions are dark and driving, fusing industrial techno with acid and a distinctive physicality. He has released on Blueprint, Tresor, and Figure. The Figure label has released music by Answer Code Request, Truncate, Shifted, and Paula Temple, and is one of the central imprints defining hard Berlin techno of the 2010s–2020s.',
    releases: [
      { title: '"Shades of Decay" (Figure)', year: 2007 },
      { title: '"Mekong Delta" (Tresor)', year: 2010 },
      { title: '"Square & Circles" (Figure)', year: 2014 },
    ]},

  // ── BELGIUM — NEW WAVE ───────────────────────────────────────────────────
  { id:'amelie_lens', label:'Amélie Lens', type:'artist', genre:'techno', era:2017, city:'Antwerp', country:'BE',
    desc:'Amélie Lens is an Antwerp DJ and producer who rose rapidly to prominence from 2017 onward, becoming one of the most internationally booked artists in techno. She founded the Exhale label in 2017. Her style is hard, driving techno with atmospheric pads — physically demanding but not crude — and has released on Drumcode, Turbo, and Exhale. She represents a new generation of Belgian techno artists achieving global profile alongside Charlotte de Witte.',
    releases: [
      { title: '"Forever" (Turbo)', year: 2017 },
      { title: '"Hypnotized" (Exhale)', year: 2018 },
      { title: '"Between" (Exhale)', year: 2019 },
    ]},

  { id:'charlotte_de_witte', label:'Charlotte de Witte', type:'artist', genre:'techno', era:2016, city:'Ghent', country:'BE',
    desc:'Charlotte de Witte is a Ghent DJ and producer who founded the KNTXT label in 2018 after early releases on Turbo Recordings. Her style is dark, minimal, and hypnotic — drawing from the harder end of the Berlin spectrum while retaining melodic sophistication. She has held residencies at major European venues and festivals and has become one of the most globally booked DJs in contemporary techno. Her profile has grown through relentless touring and consistent quality of release.',
    releases: [
      { title: '"Doppler" (Turbo)', year: 2017 },
      { title: '"Sgat" (KNTXT)', year: 2019 },
      { title: '"Dopamine" (KNTXT)', year: 2021 },
    ]},

  // ── BELGIUM — LOLA HARO / SMALL STEPS ───────────────────────────────────
  { id:'lola_haro', label:'Lola Haro', type:'artist', genre:'experimental', era:2018, city:'Brussels', country:'BE',
    desc:'Brussels-based DJ and digger raised near Antwerp, where her parents were regulars at Café d\'Anvers. Haro emerged from the Belgian underground in 2018 with a reputation for emotionally driven, genre-spanning selections threading spectral electro, deep house and leftfield club music. Marcel Dettmann has described her sound as "deep and emotional." She founded the Small Steps label and event series in 2022 and holds a monthly residency at Kiosk Radio.',
    releases:[
      {title:'Small Steps 001 (Small Steps)', year:2022},
    ]},

  { id:'small_steps', label:'Small Steps', type:'label', genre:'experimental', era:2022, city:'Brussels', country:'BE',
    desc:'Record label and recurring club event series founded by Lola Haro in October 2022. Conceived as a platform for dreamy, mood-driven electronic music that resists easy genre placement. Releases span Brussels and Amsterdam-based artists; events run across Brussels, Ghent and Amsterdam. Closely tied to Kiosk Radio\'s programming.',
    releases:[
      {title:'DJ Balduin – Small Steps 002 (Small Steps)', year:2023},
      {title:'Hame – Small Steps 003 (Small Steps)', year:2024},
    ]},

  // ── SPAIN — SEMANTICA ────────────────────────────────────────────────────
  { id:'svreca', label:'Svreca', type:'artist', genre:'minimal', era:2005, city:'Madrid', country:'ES',
    desc:'Svreca (Jorge Barreiro) is a Madrid-based DJ and producer who founded Semantica Records in 2005. His productions and DJ sets work in a dark, hypnotic minimal techno register engaging with both the Spanish underground and the broader European network centred on Berlin and Frankfurt. He is the most internationally respected Spanish techno artist and the primary architect of Spain\'s significant contribution to the post-2000 minimal and dark techno tradition.',
    releases: [
      { title: '"Swarm Intelligence" (Semantica)', year: 2007 },
      { title: '"Sinequanone" (Semantica)', year: 2011 },
      { title: '"Neon Nimbus" (Semantica)', year: 2016 },
    ]},

  { id:'semantica', label:'Semantica', type:'label', genre:'minimal', era:2005, city:'Madrid', country:'ES',
    desc:'Semantica Records was founded in Madrid in 2005 by Svreca. It became Spain\'s most internationally significant underground techno label, releasing music by Svreca alongside Claudio PRC (Sardinia/Berlin), Paula Temple, Varg, Shifted, and others. Its aesthetic is dark, dense, and hypnotic — rooted in Basic Channel and the industrial techno tradition but developing a distinctly Iberian character. It holds a similar position in the Spanish underground to that which Perlon holds in Germany.',
    releases: [
      { title: 'Semantica 001 — Svreca', year: 2005 },
      { title: '"Clear Depths" — Claudio PRC (Semantica)', year: 2009 },
      { title: 'Semantica 50 — Various', year: 2016 },
    ]},

  // ── CHICAGO — FOOTWORK ───────────────────────────────────────────────────
  { id:'teklife', label:'Teklife', type:'label', genre:'chicago', era:2012, city:'Chicago', country:'US',
    desc:'Teklife is a Chicago collective and label founded around 2012 as the formal vehicle for DJ Rashad, DJ Spinn, Traxman, and their collaborators in the footwork scene. Footwork — hyperactive, polyrhythmic dance music at 160 BPM built from stripped house percussion, vocal samples, and melodic fragments — had developed in Chicago since the late 1990s from juke and ghetto house. Following DJ Rashad\'s passing in April 2014, Teklife continued as both a tribute to his legacy and a platform for the broader footwork community. Its aesthetic connects directly to Chicago house rhythmically while departing from it completely in tempo and structural logic.',
    releases: [
      { title: 'Double Cup — DJ Rashad (Hyperdub)', year: 2013 },
      { title: 'We Beefin?! — DJ Rashad & DJ Spinn (Teklife)', year: 2013 },
      { title: 'Teklife Vol. 1: Welcome to Chicago (Teklife)', year: 2014 },
    ]},

  { id:'dj_rashad', label:'DJ Rashad', type:'artist', genre:'chicago', era:2010, city:'Chicago', country:'US',
    desc:'DJ Rashad (Rashad Harden, 1979–2014) was the most internationally prominent figure in Chicago footwork. A co-founder of Teklife alongside DJ Spinn, he developed and defined the genre from the late 1990s until his passing in April 2014. His Double Cup album (Hyperdub, 2013) — joyful, dense, structurally radical — remains the fullest document of the footwork aesthetic and one of the most acclaimed electronic albums of the decade. His influence spread far beyond footwork: Burial, Four Tet, and producers across the global underground have cited footwork rhythms as formative, and Jlin has explicitly named him as her central influence.',
    releases: [
      { title: 'Double Cup (Hyperdub)', year: 2013 },
      { title: 'We Beefin?! — with DJ Spinn (Teklife)', year: 2013 },
      { title: 'HEKA (Hyperdub, posthumous)', year: 2016 },
    ]},

  { id:'jlin', label:'Jlin', type:'artist', genre:'experimental', era:2015, city:'Chicago', country:'US', bandcamp:'jlin', bandcamp_album:'1810844722',
    desc:'Jlin (Jerrilynn Patton) is a producer from Gary, Indiana who emerged from the Chicago footwork scene with her debut album Dark Energy (Planet Mu, 2015). Her music departed from standard footwork in its density, structural complexity, and refusal of dancefloor legibility — Dark Energy was immediately recognised as transcending its genre. Black Origami (Planet Mu, 2017) consolidated her position as one of the most significant experimental electronic composers of her generation. She has collaborated with Holly Herndon, produced scores for contemporary dance by William Forsythe, and composed works for the Kronos Quartet. Her influence extends from footwork into contemporary composition globally.',
    releases: [
      { title: 'Dark Energy (Planet Mu)', year: 2015 },
      { title: 'Black Origami (Planet Mu)', year: 2017 },
      { title: 'Embryo (Planet Mu)', year: 2019 },
    ]},

  // ── INSTRUMENTS & MANUFACTURERS ──────────────────────────────────────────
  { id:'roland', label:'Roland', type:'label', genre:'experimental', era:1972, city:'Osaka', country:'JP',
    desc:'Roland Corporation was founded in Osaka in 1972 by Ikutaro Kakehashi. Its drum machines and synthesizers became the primary physical substrate of electronic dance music. The TR-808 (1980), TR-909 (1981), TB-303 (1981), and SH-101 (1982) were commercial failures on release and sold cheaply on the secondhand market, where they were adopted by Chicago house and Detroit techno producers for purposes their designers had not intended. No other single company has had a comparable impact on the material production of electronic music.',
    releases: [] },

  { id:'tr808', label:'TR-808', type:'label', genre:'detroit', era:1980, city:'Osaka', country:'JP',
    desc:'The Roland TR-808 Rhythm Composer, released in 1980, was discontinued after two years due to poor sales. Its characteristic bass drum — a decaying sine wave rather than a sampled sound — became central to Chicago house and hip-hop. The 808 bass drum is the most widely used percussion sound in recorded popular music.',
    releases: [] },

  { id:'tr909', label:'TR-909', type:'label', genre:'detroit', era:1981, city:'Osaka', country:'JP',
    desc:'The Roland TR-909 Rhythm Composer was released in 1981 and discontinued the following year. It produced a harder, more metallic sound than the 808, with a characteristic snare and hi-hat that became the dominant percussion palette of Detroit techno and subsequently of all major strands of club music. Its combination with the TB-303 defined acid house.',
    releases: [] },

  { id:'tb303', label:'TB-303', type:'label', genre:'chicago', era:1981, city:'Osaka', country:'JP',
    desc:'The Roland TB-303 Bass Line was released in 1981 as an automated accompaniment for solo guitarists and was a commercial failure. Its distinctive gliding, resonant sound — produced when operated outside its intended parameters — was discovered by Chicago producers around 1985. "Acid Tracks" by Phuture (1987), the first explicit acid house record, was built around a single TB-303. The instrument subsequently defined acid house and influenced every subsequent mutation of electronic music.',
    releases: [] },

  { id:'sh101', label:'SH-101', type:'label', genre:'experimental', era:1982, city:'Osaka', country:'JP',
    desc:'The Roland SH-101 is a monophonic synthesizer released in 1982. Inexpensive and portable, it was adopted across electronic music for its sharp, immediate sound. It is particularly associated with early Chicago house, Detroit techno, and later acid and minimal techno production. Its sequencer made it useful for live performance contexts.',
    releases: [] },

  { id:'elektron', label:'Elektron', type:'label', genre:'experimental', era:1998, city:'Gothenburg', country:'SE',
    desc:'Elektron was founded in Gothenburg in 1998 and makes hardware sequencers, synthesizers, and drum machines. The Machinedrum (2001), Monomachine (2003), Octatrack (2011), and Digitakt (2017) series have been widely adopted in live electronic performance and studio production. Elektron instruments are characterised by deep parameter locks and pattern chaining, enabling a compositional approach distinct from software-based methods.',
    releases: [] },

  { id:'machinedrum', label:'Machinedrum', type:'label', genre:'experimental', era:2001, city:'Gothenburg', country:'SE',
    desc:'The concept the Machinedrum (2001) introduced — the parameter lock — changed how hardware sequencing was understood: every step in a pattern could carry its own synthesis settings, a different pitch, decay, or filter value for each individual hit. The result was rhythmic programming of an expressiveness that software DAWs, focused on linear arrangement, couldn\'t match. It became the instrument of choice for live techno acts across Berlin and Detroit who wanted drums that moved and breathed rather than simply repeated.',
    releases: [] },

  { id:'monomachine', label:'Monomachine', type:'label', genre:'experimental', era:2003, city:'Gothenburg', country:'SE',
    desc:'The Monomachine (2003) packed six synthesis engines — FM, wavetable, virtual analogue, and others — into a single box and sequenced them with the same parameter-lock logic as the Machinedrum. Its digital architecture produces a sound that seems warmer and more physical than its specs suggest: a presence in the midrange that producers describe as immediate. When Elektron discontinued it in 2018, secondhand prices climbed. The instrument had become irreplaceable precisely because nothing else sounds quite like it.',
    releases: [] },

  { id:'octatrack', label:'Octatrack', type:'label', genre:'experimental', era:2011, city:'Gothenburg', country:'SE',
    desc:'The Octatrack (2011) is the most demanding instrument Elektron has made. An eight-track sampler and sequencer, it carries a scene-crossfading system that lets the performer morph between entirely different parameter states in real time — a feature with no close equivalent. Its interface is notoriously deep; dedicated communities exist online simply to document what it can do. For producers who master it, the Octatrack enables a spontaneity that pre-arranged sets cannot replicate. It has become the organisational spine of a generation of hardware-based live acts.',
    releases: [] },

  { id:'dataline', label:'Dataline', type:'artist', genre:'experimental', era:2012, city:'Gothenburg', country:'SE',
    desc:'Cenk Sayinli (born Istanbul, Turkey) has released music as Dataline since the early 2000s, though his first widely distributed records appeared in 2012 on NOORDEN (Cologne). His music spans dub-techno, IDM, and minimal techno — hardware-driven and heavily improvised. He spent approximately a decade as Product Specialist and public demonstrator at Elektron Music Machines in Gothenburg, becoming a significant part of how the company\'s instruments were presented to the world; he later joined Ableton as Hardware QA Engineer from 2022. Key releases: Hear Your Beat (NOORDEN, 2012), Under Waveform (NOORDEN, 2013), Be There (Detroit Underground, 2017).',
    releases: [
      { title: 'Hear Your Beat (NOORDEN)', year: 2012 },
      { title: 'Under Waveform (NOORDEN)', year: 2013 },
      { title: 'Be There (Detroit Underground)', year: 2017 },
    ]},

  { id:'ableton', label:'Ableton', type:'label', genre:'experimental', era:2001, city:'Berlin', country:'DE',
    desc:'Ableton was founded in Berlin in 1999 by Gerhard Behles and Robert Henke (Monolake). Ableton Live, released in 2001, introduced a session view enabling non-linear arrangement and real-time looping that transformed live electronic performance. Its adoption by Richie Hawtin in the early 2000s was widely reported and the software subsequently became the primary production and performance environment across electronic music. Behles and Henke had developed early prototypes while working on the Monolake project at Chain Reaction.',
    releases: [] },

  // ── UK — EXPERIMENTAL / IDM ──────────────────────────────────────────────
  { id:'boards_of_canada', label:'Boards of Canada', type:'artist', genre:'ambient', era:1995, city:'Edinburgh', country:'UK', bandcamp:'boardsofcanada', bandcamp_album:'3411624925',
    desc:'Boards of Canada is the project of Michael Sandison and Marcus Eoin, based near Edinburgh. They released their first widely distributed records on Warp from 1998. Their music samples and processes analogue recordings with a nostalgic, slightly degraded quality that evokes childhood and lost time. Music Has the Right to Children (1998) and Geogaddi (2002) are their most celebrated records.',
    releases: [
      { title: 'Music Has the Right to Children (Warp)', year: 1998 },
      { title: 'Geogaddi (Warp)', year: 2002 },
      { title: 'The Campfire Headphase (Warp)', year: 2005 },
      { title: 'Tomorrow\'s Harvest (Warp)', year: 2013 },
    ]},

  { id:'four_tet', label:'Four Tet', type:'artist', genre:'experimental', era:1999, city:'London', country:'UK', bandcamp:'fourtet', bandcamp_album:'1714700601',
    desc:'Kieran Hebden records as Four Tet and has been based in London throughout his career. He began releasing on Domino Records in 1999 and has subsequently released on his own Text label. His early records combined sampled acoustic jazz and folk with IDM production; later work moved toward house and club music while retaining a strong melodic identity. He has collaborated extensively with Burial and Floating Points.',
    releases: [
      { title: 'Rounds (Domino)', year: 2003 },
      { title: 'There Is Love in You (Domino)', year: 2010 },
      { title: 'Pink (Text)', year: 2012 },
      { title: 'New Energy (Text)', year: 2017 },
    ]},

  { id:'actress', label:'Actress', type:'artist', genre:'experimental', era:2008, city:'London', country:'UK', bandcamp:'actress', bandcamp_album:'0035817025',
    desc:'Darren Cunningham records as Actress and was born in Wolverhampton, later based in London. He founded the Werkdiscs label as the home for his releases. His music works across a range of tempos and textures — from near-ambient to club-functional — with a deliberately degraded, grainy production aesthetic. Hazyville (2008), R.I.P. (2012), and Ghettoville (2014) are his principal albums.',
    releases: [
      { title: 'Hazyville (Werkdiscs)', year: 2008 },
      { title: 'Splazsh (Werkdiscs/Ninja Tune)', year: 2010 },
      { title: 'R.I.P. (Werkdiscs/Ninja Tune)', year: 2012 },
      { title: 'Ghettoville (Werkdiscs/Ninja Tune)', year: 2014 },
    ]},

  { id:'weatherall', label:'Andrew Weatherall', type:'artist', genre:'experimental', era:1990, city:'London', country:'UK',
    desc:'Andrew Weatherall was a London DJ, producer, and label founder. His 1990 remix of Primal Scream\'s "Loaded" and production of Screamadelica (1991) placed him at the centre of the UK acid house-into-rock crossover. He subsequently founded the Sabres of Paradise project and label and later recorded as Two Lone Swordsmen with Keith Tenniswood. His influence extended across house, techno, post-punk, and dub. He passed away in London in February 2020.',
    releases: [
      { title: 'Screamadelica (produced) — Primal Scream (Creation)', year: 1991 },
      { title: 'Haunted Dancehall — Sabres of Paradise (Sabres of Paradise)', year: 1994 },
      { title: 'From the Double Gone Chapel — Two Lone Swordsmen (Warp)', year: 2004 },
      { title: 'A Pox on the Pioneers (Rotters Golf Club)', year: 2009 },
    ]},

  { id:'djrum', label:'DJrum', type:'artist', genre:'experimental', era:2012, city:'London', country:'UK', bandcamp:'djrum', bandcamp_album:'1924727225',
    desc:'Felix Manuel records as DJrum and is based in London. His productions span a wide range of tempos and moods, from ambient to hard percussive techno, and resist easy genre categorisation. He has released on Hessle Audio and his own labels. His Portrait With Firewood album (2018) is regarded as a strong document of his range.',
    releases: [
      { title: '"Seven Lies" (Hessle Audio)', year: 2013 },
      { title: 'Portrait With Firewood (R&S)', year: 2018 },
      { title: '"Jig Inna Jungle" (Dolly)', year: 2020 },
    ]},

  { id:'blawan', label:'Blawan', type:'artist', genre:'techno', era:2011, city:'London', country:'UK',
    desc:'Jamie Roberts records as Blawan and grew up in Yorkshire before relocating to London. His early releases on Hessle Audio combined sub-bass house with industrial noise. His subsequent work moved toward harder industrial techno. He co-founded Ternesc with Pariah and has released on his own Raw Torque label. His productions are characterised by extreme dynamic range and a confrontational aesthetic.',
    releases: [
      { title: '"Getting Me Down" (Hessle Audio)', year: 2011 },
      { title: '"Why They Hide Their Bodies Under My Garage?" (Hessle Audio)', year: 2012 },
      { title: 'Wet Will Always Dry (Hessle Audio)', year: 2013 },
      { title: 'Wet My Plants (Ternesc)', year: 2016 },
    ]},

  { id:'leon_vynehall', label:'Leon Vynehall', type:'artist', genre:'deep', era:2013, city:'London', country:'UK', bandcamp:'leonvynehall', bandcamp_album:'4071241862',
    desc:'Leon Vynehall is a London-based producer whose work develops a deep house aesthetic with strong melodic and cinematic qualities. He began releasing on Wolf Music in 2013 and subsequently on Ninja Tune. His album Nothing Is Still (2018) incorporated personal family history into an ambient-leaning deep house framework. He has been widely cited as a significant figure in contemporary British deep house.',
    releases: [
      { title: '"Butterflies" (Wolf Music)', year: 2013 },
      { title: 'Rojus (Brainfeeder)', year: 2016 },
      { title: 'Nothing Is Still (Ninja Tune)', year: 2018 },
    ]},

  { id:'lone', label:'Lone', type:'artist', genre:'experimental', era:2008, city:'Nottingham', country:'UK',
    desc:'Matt Cutler records as Lone and is based in Nottingham. He began releasing on Dealmaker before moving to R&S and Greco-Roman. His music draws on early 1990s rave and IDM aesthetics — colourful, sample-dense, with a strong sense of euphoria — as well as Detroit electronic and Chicago house. He has released consistently since the late 2000s with a broad stylistic range.',
    releases: [
      { title: 'Lemurian (Dealmaker)', year: 2009 },
      { title: 'Galaxy Garden (R&S)', year: 2012 },
      { title: 'Reality Testing (R&S)', year: 2014 },
      { title: 'Levitate (Greco-Roman)', year: 2016 },
    ]},

  { id:'ross_from_friends', label:'Ross from Friends', type:'artist', genre:'deep', era:2017, city:'London', country:'UK', bandcamp:'rossfromfriends', bandcamp_album:'2290899204',
    desc:'Felix Clary Weatherall records as Ross from Friends. Growing up in Suffolk and moving to London, he began releasing online in the mid-2010s — bedroom productions combining lo-fi sensibility with deep house, UK rave and broken beat influences. His EP A Heartwarming Selection (2018) brought wider attention, followed by Tread (Brainfeeder, 2021), which expanded into live instrumentation and modular synthesis while retaining his signature hazy intimacy. His music sits in a lineage with Four Tet\'s blurring of electronic and live-recorded texture, filtered through the aesthetics of London\'s post-club underground.',
    releases: [
      { title: 'A Heartwarming Selection EP (Lobster Theremin)', year: 2018 },
      { title: 'Tread (Brainfeeder)', year: 2021 },
    ]},

  { id:'ejeca', label:'Ejeca', type:'artist', genre:'deep', era:2016, city:'London', country:'UK', bandcamp:'ejeca', bandcamp_album:'1071678593',
    desc:'EJECA is a UK-based electronic producer known for warmly nostalgic, sample-rooted house music. Drawing from French touch, Chicago house and disco, his productions loop and recontextualise classic electronic references — Daft Punk, Stardust, classic soul — into new arrangements with a distinctly feel-good energy. He works across original productions and remix projects, releasing independently and via UK labels.',
    releases: [
      { title: 'Keep Climbing EP', year: 2022 },
      { title: 'Daft Essentials (self-released)', year: 2026 },
    ]},

  { id:'last_pines', label:'Last Pines', type:'artist', genre:'deep', era:2024, city:'London', country:'UK', bandcamp:'lastpines', bandcamp_album:'0685012952',
    desc:'Last Pines is a London-based producer working in minimal deep tech and minimal house. Their releases blend the textural density of minimal techno with deep house groove — long-form tracks where subtle percussive shifts and low-end pressure accumulate slowly. Terminal Swiv (2026) is their debut release.',
    releases: [
      { title: 'The Gathering EP', year: 2024 },
      { title: 'Terminal Swiv', year: 2026 },
    ]},

  { id:'sasha', label:'Sasha', type:'artist', genre:'melodic', era:1991, city:'Manchester', country:'UK',
    desc:'Alexander Coe, performing as Sasha, is a Welsh-born DJ who rose to prominence in Manchester in the early 1990s. He was central to the progressive house movement of the mid-1990s, playing long warmup sets and developing a mixing style built around extended builds and tonal blending. He has released on deConstruction, Eye Q, and his own label Emfire. His 1994 Essential Mix and his collaborations with John Digweed were defining documents of the progressive house era.',
    releases: [
      { title: 'Airdrawndagger (BMG/MCA)', year: 2002 },
      { title: '"Xpander" EP (deConstruction)', year: 1999 },
      { title: 'Involver (Global Underground)', year: 2004 },
    ]},

  // ── UK — SANDWELL DISTRICT ────────────────────────────────────────────────
  { id:'sandwell_district', label:'Sandwell District', type:'label', genre:'techno', era:2006, city:'Birmingham', country:'UK',
    desc:'Sandwell District was a label, night, and collective founded around 2006 by Function (Dave Sumner), Silent Servant, and Regis (Karl O\'Connor). Its output combined the industrial heritage of Birmingham techno with Basic Channel dub aesthetics and a deliberately opaque, minimalist visual identity. The collective dissolved around 2011. Artists including Rrose and Vatican Shadow were associated with it. It is widely cited as one of the defining labels in dark industrial techno.',
    releases: [
      { title: '"Surveillance" — Function (SD-05)', year: 2007 },
      { title: '"Feed Forward" — Function (SD-10)', year: 2009 },
      { title: '"Cascades" — Silent Servant (SD-11)', year: 2010 },
    ]},

  // ── US — MINIMAL / TECHNO ─────────────────────────────────────────────────
  { id:'mike_parker', label:'Mike Parker', type:'artist', genre:'minimal', era:2000, city:'Buffalo', country:'US', bandcamp:'mikeparker', bandcamp_album:'1490032319',
    desc:'Mike Parker is a Buffalo-based producer and label owner whose work has appeared almost exclusively on his own Geophone label since 2000. His techno is minimal and hypnotic — long tracks built from densely layered rhythmic textures with minimal melodic content. He has maintained a low public profile and does not perform live frequently. His catalogue is regarded as one of the most consistently rigorous in American minimal techno.',
    releases: [
      { title: 'Dispatches (Geophone)', year: 2001 },
      { title: '"GPH14" (Geophone)', year: 2014 },
      { title: 'Voiceprint (Geophone)', year: 2015 },
    ]},

  // ── INTERNATIONAL — VARIOUS ───────────────────────────────────────────────
  { id:'floating_points', label:'Floating Points', type:'artist', genre:'experimental', era:2009, city:'London', country:'UK', bandcamp:'floatingpoints', bandcamp_album:'2214058814',
    desc:'Sam Shepherd records as Floating Points. He completed a PhD in neuroscience while developing his music career. His early releases on Eglo combined jazz and electronic music; subsequent work on his own Pluto label has moved toward dance floor contexts while retaining strong harmonic complexity. His collaboration with Pharoah Sanders and the London Symphony Orchestra, Promises (2021), received wide critical attention. He performs live with an ensemble.',
    releases: [
      { title: 'Elaenia (Pluto)', year: 2015 },
      { title: 'Crush (Pluto)', year: 2019 },
      { title: 'Promises — with Pharoah Sanders & LSO (Luaka Bop)', year: 2021 },
      { title: 'Cascade (Pluto)', year: 2024 },
    ]},

  { id:'matthew_jonson', label:'Matthew Jonson', type:'artist', genre:'minimal', era:2003, city:'Toronto', country:'CA',
    desc:'Matthew Jonson is a Toronto-born producer and live performer who has been based in Berlin for much of his career. He releases on Wagon Repair (a label he co-founded), Circus Company, and Crosstown Rebels. His live sets combine hardware synthesizers with sequenced patterns in extended performances. His track "Typerope" is among the most recognized records in melodic minimal techno.',
    releases: [
      { title: '"Typerope" (Wagon Repair)', year: 2004 },
      { title: '"The Motivator" (Wagon Repair)', year: 2006 },
      { title: 'Modern Love Story (Wagon Repair)', year: 2011 },
    ]},

  { id:'kiasmos', label:'Kiasmos', type:'artist', genre:'ambient', era:2014, city:'Reykjavik', country:'IS', bandcamp:'kiasmos', bandcamp_album:'3693906721',
    desc:'Kiasmos is the collaboration between Ólafur Arnalds and Janus Rasmussen, both Icelandic musicians based between Reykjavik and Berlin. The project combines Arnalds\'s background in neo-classical composition with Rasmussen\'s electronic production. Their self-titled debut album (2014) on Erased Tapes established an aesthetic of processed piano, pulsing electronic rhythm, and slow harmonic movement that has been widely influential within modern ambient and melodic techno.',
    releases: [
      { title: 'Kiasmos (Erased Tapes)', year: 2014 },
      { title: '"Blurred" EP (Erased Tapes)', year: 2014 },
      { title: 'Swept (Erased Tapes)', year: 2023 },
    ]},

  { id:'lies_records', label:'L.I.E.S. Records', type:'label', genre:'experimental', era:2010, city:'New York', country:'US',
    desc:'Long Island Electrical Systems, founded by Ron Morelli in New York in 2010. L.I.E.S. became the defining label of a raw, lo-fi strain of American house and techno — deliberately rough-textured, anti-glossy, rooted in the grit of the city rather than European club perfectionism. Its catalogue spans mutant house, industrial techno and tape-damaged electronics, with key releases from Prostitutes, Gunnar Haslam, Beau Wanzer and Bookworms. It shaped a global aesthetic that pushed back against the over-produced mainstream of the early 2010s.',
    releases:[
      {title:'Traxx – No Genre (L.I.E.S.)', year:2011},
      {title:'Prostitutes – L.I.E.S. 007 (L.I.E.S.)', year:2011},
      {title:'Various – American Noise (L.I.E.S.)', year:2012},
      {title:'Ron Morelli – Spit (L.I.E.S.)', year:2013},
    ]},

  { id:'djsprinkles', label:'DJ Sprinkles', type:'artist', genre:'experimental', era:2009, city:'New York', country:'US',
    desc:'DJ Sprinkles is an alias of Terre Thaemlitz, a New York-born producer and theorist who has been based in Tokyo since the late 1990s. Midtown 120 Blues (Comatonse, 2009) is a conceptually engaged work connecting the history of New York house music — specifically its emergence from Black, Latino, and transgender communities — to contemporary critical discourse. Thaemlitz writes extensively on identity, labour, and the conditions of music production.',
    releases: [
      { title: 'Midtown 120 Blues (Comatonse)', year: 2009 },
      { title: 'Soulnessless (Comatonse)', year: 2012 },
    ]},

  { id:'skee_mask', label:'Skee Mask', type:'artist', genre:'techno', era:2016, city:'Munich', country:'DE',
    desc:'Skee Mask remains anonymous, Munich-based, and entirely oriented toward the music rather than the profile. His debut Shred (Ilian Tape, 2016) combined breakbeats, dub techno, and ambient passages in a way that sounded fully formed rather than exploratory. Compro (2018) pushed the breakbeat architecture deeper and achieved wide critical recognition; Pool (2021) moved into slower, more textural territory. His body of work demonstrates what Ilian Tape at its best is for: records made without reference to trend.',
    releases: [
      { title: 'Shred (Ilian Tape)', year: 2016 },
      { title: 'Compro (Ilian Tape)', year: 2018 },
      { title: 'Pool (Ilian Tape)', year: 2021 },
    ]},

  // ── GERMANY / SWEDEN — MISC ───────────────────────────────────────────────
  { id:'the_field', label:'The Field', type:'artist', genre:'minimal', era:2007, city:'Stockholm', country:'SE', bandcamp:'thefield', bandcamp_album:'2286154674',
    desc:'Axel Willner records as The Field and grew up in Stockholm before relocating to Berlin. His debut album From Here We Go Sublime (Kompakt, 2007) built tracks from heavily looped vocal and instrumental samples processed to the point of abstraction, producing music of unusual warmth and hypnotic depth. He has released on Kompakt throughout his career.',
    releases: [
      { title: 'From Here We Go Sublime (Kompakt)', year: 2007 },
      { title: 'Yesterday & Today (Kompakt)', year: 2009 },
      { title: 'Looping State of Mind (Kompakt)', year: 2011 },
      { title: 'The Follower (Kompakt)', year: 2016 },
    ]},

  { id:'minilogue', label:'Minilogue', type:'artist', genre:'minimal', era:2006, city:'Gothenburg', country:'SE',
    desc:'Minilogue is the project of Marcus Henriksson and Sebastian Mullaert, based between Gothenburg and Malmö. Their productions are warm and melodic within minimal techno structures, with a strong sense of organic development. They have released on Cocoon, Crosstown Rebels, and other labels. Mullaert has also recorded extensively as Corners and under his own name in a more electronic-acoustic direction.',
    releases: [
      { title: '"Hitchhiking" (Cocoon)', year: 2006 },
      { title: 'Animals (Cocoon)', year: 2009 },
      { title: '"The Leopard" (Crosstown Rebels)', year: 2011 },
    ]},

  { id:'sebastian_mullaert', label:'Sebastian Mullaert', type:'artist', genre:'melodic', era:2014, city:'Malmö', country:'SE',
    desc:'Sebastian Mullaert (based in southern Sweden) began as a classical musician — organ and violin — before discovering house and techno in the mid-1990s. He co-founded the duo Minilogue with Marcus Henriksson, releasing two albums on Sven Väth\'s Cocoon label: Animals (2008) and Blomma (2013). After Minilogue wound down in 2014 he developed a solo practice rooted in improvisation, ambient techno, and the meeting point of acoustic and electronic sound. His album A Place Called Inkonst (Kontra Musik, 2019) is a key document of this direction. He also records as Wa Wu We — a project exploring meditation and free improvisation — and in 2018 founded Circle of Live, an event series and label centred on real-time collaborative performance. He has released on Mule Musiq, Mule Electronic, Kontra Musik, Hypercolour, and Traum.',
    releases: [
      { title: 'Voices Around The Fire (Mule Electronic)', year: 2010 },
      { title: 'Windmaker EP (Hypercolour)', year: 2016 },
      { title: 'A Place Called Inkonst (Kontra Musik)', year: 2019 },
    ]},

  { id:'carsten_jost', label:'Carsten Jost', type:'artist', genre:'deep', era:2004, city:'Hamburg', country:'DE',
    desc:'Carsten Jost co-founded Dial Records in Hamburg in 2002 with Lawrence. He releases minimal, deep house under his own name on Dial and has been a core figure in the Hamburg deep house network. His productions are patient and harmonically developed, working within the same aesthetic territory as Lawrence but with a slightly more minimal quality.',
    releases: [
      { title: '"Lautsprecherbox" (Dial)', year: 2004 },
      { title: '"Andenken" (Dial)', year: 2009 },
    ]},

  { id:'dwig', label:'Dwig', type:'artist', genre:'giegling', era:2013, city:'Weimar', country:'DE',
    desc:'Dwig is a Giegling member whose releases work in a slow, ambient-influenced deep house style. Their debut album Forget the Pink Elephant (Giegling, 2014) is a significant work within the Giegling catalogue, developing the collective\'s characteristic introspective aesthetic across a full-length format.',
    releases: [
      { title: 'Fettwanzenblues (Giegling)', year: 2013 },
      { title: 'Forget the Pink Elephant (Giegling)', year: 2014 },
    ]},

  // ── NORTH EUROPE — NORTHERN ELECTRONICS ───────────────────────────────────
  { id:'northern_electronics', label:'Northern Electronics', type:'label', genre:'ambient', era:2012, city:'Stockholm', country:'SE',
    desc:'Northern Electronics was founded in Stockholm in 2012 by Anthony Linell, who records as Abdulla Rashim. The label releases dark, textural ambient and industrial-influenced electronic music. Artists include Abdulla Rashim, Varg, Acronym, and Repeater. The label operates with minimal information on its releases and has developed a distinctive aesthetic that draws on both ambient techno and Nordic industrial traditions.',
    releases: [
      { title: 'Unanimity — Abdulla Rashim', year: 2014 },
      { title: '"A Shell of Speed" — Abdulla Rashim', year: 2015 },
      { title: '"Fawn" — Varg', year: 2014 },
    ]},

  // ── VANCOUVER ─────────────────────────────────────────────────────────────
  { id:'mood_hut', label:'Mood Hut', type:'label', genre:'deep', era:2012, city:'Vancouver', country:'CA',
    desc:'Mood Hut is a Vancouver label and studio collective founded around 2012 by Liam Butler and Jack Jutson, who perform as Pender Street Steppers and individually as Jack J. The label releases warm, loosely recorded deep house with a strong influence from the New York and Chicago traditions, produced with an analogue, live-in-room aesthetic. It has become one of the most distinctive voices in North American deep house.',
    releases: [
      { title: 'Bubble World — Pender Street Steppers', year: 2014 },
      { title: '"The Glass City" — Pender Street Steppers', year: 2015 },
      { title: '"Raining Again" — Pender Street Steppers', year: 2017 },
    ]},

  { id:'pender_street_steppers', label:'Pender Street Steppers', type:'artist', genre:'deep', era:2012, city:'Vancouver', country:'CA',
    desc:'Pender Street Steppers is the duo of Liam Butler and Jack Jutson, the two principals of Mood Hut in Vancouver. Their productions are warm, shuffled deep house recorded with a live, analogue quality. Their debut Bubble World (2014) established the Mood Hut aesthetic as a distinct presence within North American deep house. Butler and Jutson also release as Jack J and individually under other aliases.',
    releases: [
      { title: 'Bubble World (Mood Hut)', year: 2014 },
      { title: '"The Glass City / Golden Garden" (Mood Hut)', year: 2015 },
      { title: '"Our Time" (Mood Hut)', year: 2019 },
    ]},

  { id:'jack_j', label:'Jack J', type:'artist', genre:'deep', era:2013, city:'Vancouver', country:'CA',
    desc:'Jack Jutson records as Jack J and is a co-founder of Mood Hut in Vancouver. His solo productions are introspective deep house with a strong connection to the New York and Chicago garage traditions. He has released on Mood Hut and on Cocktail d\'Amore Music. As one half of Pender Street Steppers he helped define the label\'s communal aesthetic.',
    releases: [
      { title: '"Holding Your Hand" (Mood Hut)', year: 2013 },
      { title: '"Slow Swerve" (Cocktail d\'Amore)', year: 2016 },
    ]},

  // ── NETHERLANDS — ROTTERDAM ───────────────────────────────────────────────
  { id:'perron', label:'Perron', type:'venue', genre:'techno', era:1992, city:'Rotterdam', country:'NL',
    desc:'Perron was a Rotterdam club that operated in the early 1990s in a former railway station building. It was one of the earliest large-scale venues for techno and electronic dance music in the Netherlands, hosting international artists during the period when Detroit and Berlin techno were first establishing European audiences. It played a role in Rotterdam\'s emergence as one of the key cities in Dutch club culture alongside Amsterdam.' },

  { id:'nousklaer', label:'Nous\'klaer Audio', type:'label', genre:'experimental', era:2013, city:'Rotterdam', country:'NL',
    desc:'Nous\'klaer Audio is an independent label from Rotterdam founded around 2013. Its releases work across house, IDM, and experimental electronic music with a low-key, eclectic approach. Artists include Upsammy, Konduku, Oceanic, and Koraal. The label has produced several vinyl compilation series including Paerels. It is part of the Rotterdam underground that connects to the broader Dutch and Belgian electronic music network.',
    releases: [
      { title: 'Paerels (compilation)', year: 2017 },
      { title: 'Paerels II (compilation)', year: 2020 },
    ]},

  // ── UK — LOBSTER THEREMIN ────────────────────────────────────────────────
  { id:'lobster_theremin', label:'Lobster Theremin', type:'label', genre:'deep', era:2012, city:'London', country:'UK', bandcamp:'lobstertheremin',
    desc:'Lobster Theremin was founded in London in 2012 by James Donadio. It became one of the most important independent labels in the UK underground across the following decade, releasing music across deep house, lo-fi electronics, experimental techno, and ambient — a deliberately eclectic catalogue held together by consistent aesthetic taste rather than genre alignment. Its roster connects Budapest (Route 8), Manchester (Interplanetary Criminal), Chicago (Phoebe), and Venezuela (Cardopusher) within a single network rooted in London. The label also operates Lobster Theremin Ambient, a sublabel for more diffuse and archival material. Its commercial and critical profile is entirely underground — no majors, no crossover — yet its influence on the sound of 2010s-to-2020s UK club music is substantial.',
    releases: [
      { title: '"Happiness" — Route 8 (LT001)', year: 2012 },
      { title: '"Freaky Dancing" — Interplanetary Criminal (LT050)', year: 2019 },
      { title: '"Two Dogs in a House" EP (LT012)', year: 2014 },
    ]},

  { id:'route_8', label:'Route 8', type:'artist', genre:'deep', era:2012, city:'Budapest', country:'HU',
    desc:'Bálint Cseke records as Route 8 and is based in Budapest. His early releases on Lobster Theremin — beginning with the label\'s first release in 2012 — established a sound of emotionally intense lo-fi deep house, warm and slightly degraded, indebted to the Chicago and New York garage traditions but unmistakably European. He co-founded the Budapest label and collective Farbwechsel (founded 2012), which connects the Hungarian underground to the Lobster Theremin orbit. Route 8 is one of the most consistently productive figures in contemporary deep house and has released prolifically across his own and international labels.',
    releases: [
      { title: '"Happiness" (Lobster Theremin)', year: 2012 },
      { title: '"Can\'t Stop the Rhythm" (Lobster Theremin)', year: 2014 },
      { title: '"Daydreaming" (Lobster Theremin)', year: 2016 },
    ]},

  { id:'interplanetary_criminal', label:'Interplanetary Criminal', type:'artist', genre:'techhouse', era:2019, city:'Manchester', country:'UK',
    desc:'Interplanetary Criminal is a Manchester DJ and producer whose breakthrough came through releases on Lobster Theremin from 2019 onward. His music is energetic and rhythmically forceful — jacking, rave-influenced house with strong roots in Chicago and UK rave culture — and his DJ sets became known for an infectious physicality that built rapid word-of-mouth. His Boiler Room appearances and festival bookings at Parklife and Printworks accelerated his profile significantly. He represents a new generation of UK selectors who developed through internet culture and club residencies simultaneously, reaching international audiences without the gradual trajectory of an earlier era.',
    releases: [
      { title: '"Freaky Dancing" (Lobster Theremin)', year: 2019 },
      { title: '"Acid Melt" (Lobster Theremin)', year: 2020 },
      { title: '"Emergency Room" (own)', year: 2022 },
    ]},

  { id:'farbwechsel', label:'Farbwechsel', type:'label', genre:'deep', era:2012, city:'Budapest', country:'HU',
    desc:'Farbwechsel is a Budapest label and collective founded in 2012, closely associated with Route 8 (Bálint Cseke). It is the primary home for the Budapest deep house scene that Route 8 helped develop, and maintains an aesthetic rooted in lo-fi electronics, warm synthesizer textures, and a distinctly Eastern European emotional register. Farbwechsel connects to the Lobster Theremin network and represents Budapest as a node in the European underground house circuit that extends from London through Hamburg.',
    releases: [
      { title: 'Farbwechsel 001 — Route 8', year: 2012 },
      { title: 'Farbwechsel 010 — Various', year: 2015 },
    ]},

  // ── UK — WISDOM TEETH ────────────────────────────────────────────────────
  { id:'wisdom_teeth', label:'Wisdom Teeth', type:'label', genre:'experimental', era:2014, city:'London', country:'UK',
    desc:'Wisdom Teeth was founded in London in 2014 by childhood friends Oscar Henson (Facta) and Joe Gladwell (K-LONE). It began as a vehicle for the experimental bass-heavy dance music coming out of UK clubs during the post-dubstep fallout — drawing from grime, garage, techno, and experimental electronics — and over its first decade grew into one of the UK\'s most reliable and distinctive underground imprints. Its catalogue of 35+ releases has featured Wen, Acre, Hodge, Simo Cell, Lurka, Purelink, Tammo Hesselink, rRoxymore, and Crystallmess alongside the founders. Its 2024 compilation Pattern Gardening — billed as the label\'s take on minimal, microhouse, and tech-house — marked a pivot toward more groove-driven territory while retaining the label\'s characteristic "plinky plonky" melodic sensibility. Crack Magazine, Resident Advisor, and DJ Mag have all cited it as a peer of Livity Sound, Timedance, and Keysound in defining the UK experimental club sound of the 2010s–2020s.',
    releases: [
      { title: '"Polywhirl" — Facta / "Late Night" — Wen (WT001)', year: 2014 },
      { title: '"Cape Cira" — K-LONE (WT027)', year: 2020 },
      { title: 'To Illustrate (WT030, compilation)', year: 2022 },
      { title: 'Pattern Gardening (WT035, compilation)', year: 2024 },
    ]},

  { id:'facta', label:'Facta', type:'artist', genre:'experimental', era:2014, city:'London', country:'UK',
    desc:'Oscar Henson records as Facta and co-founded Wisdom Teeth in London in 2014. His productions move between broken rhythms, textured synthesis, and melodic bass music — resisting genre consolidation in a way consistent with the Wisdom Teeth aesthetic. His 2019 LP "Blush" is regarded as a strong document of contemporary UK experimental electronics. Alongside K-LONE he hosts a long-running show on Rinse FM that has served as a curatorial platform for the broader Wisdom Teeth network.',
    releases: [
      { title: '"Polywhirl" (Wisdom Teeth)', year: 2014 },
      { title: 'Blush (Wisdom Teeth)', year: 2019 },
      { title: 'To Illustrate (with K-LONE, Wisdom Teeth)', year: 2022 },
    ]},

  { id:'k_lone', label:'K-LONE', type:'artist', genre:'ambient', era:2014, city:'London', country:'UK', bandcamp:'k-lone', bandcamp_album:'0341866469',
    desc:'Joe Gladwell records as K-LONE and co-founded Wisdom Teeth in London in 2014. While his club productions work in the same experimental bass music territory as his labelmates, his 2020 solo album Cape Cira (Wisdom Teeth) is a sustained ambient work — slow, spatial, and deeply considered — that stands apart from the functional club context and has been praised as one of the strongest ambient records of its era. This dual capacity — club tools and ambient listening — is characteristic of the Wisdom Teeth aesthetic at its most developed.',
    releases: [
      { title: '"Late Night" (Wisdom Teeth)', year: 2014 },
      { title: 'Cape Cira (Wisdom Teeth)', year: 2020 },
      { title: 'To Illustrate (with Facta, Wisdom Teeth)', year: 2022 },
    ]},

  { id:'sherelle', label:'Sherelle', type:'artist', genre:'experimental', era:2019, city:'London', country:'UK',
    desc:'London DJ who broke through via a 2019 fabric mix and a reputation for playing breakbeat, jungle and drum & bass at speeds and in contexts that had been colonised by techno — an act of genre recontextualisation that influenced a generation of selectors. Her Fabric x Sherelle compilation (2021) was widely cited as one of the best DJ mixes of that year, and her Radio 1 residency brought jungle-speed electronics to a mass audience without softening the edges.',
    releases:[
      {title:'fabriclive 93 (fabric)', year:2019},
      {title:'Fabric x Sherelle (fabric)', year:2021},
    ]},

  { id:'nia_archives', label:'Nia Archives', type:'artist', genre:'experimental', era:2021, city:'London', country:'UK',
    desc:'Nia Archives (Nia Sheron Doreen Thomas) fuses jungle\'s chopped breaks and bass with introspective songwriting and a distinctly Gen Z sensibility — producing records that work as both club tools and bedroom listening. Her debut album Silence Is Loud (2024) entered the UK albums chart and earned BRIT Award nominations. She founded Up Ya Archives in 2025 to platform new-generation jungle producers, extending the genre\'s lineage into the next cycle.',
    releases:[
      {title:'"Forbidden Feelingz" (Hijinx)', year:2022},
      {title:'Headz Gone West EP (Hijinx)', year:2023},
      {title:'Silence Is Loud (Island)', year:2024},
    ]},

  // ── UK/BERLIN — OBJEKT ───────────────────────────────────────────────────
  { id:'objekt', label:'Objekt', type:'artist', genre:'techno', era:2011, city:'Berlin', country:'DE', bandcamp:'objekt', bandcamp_album:'3840456850',
    desc:'TJ Hertz records as Objekt. Born in Tokyo to British-American and Filipino parents, he grew up in Belgium and the UK and settled in Berlin in 2009 after studying electronic engineering at Oxford. His first records — self-titled white-labels released in 2011 — immediately established a reputation for technically exceptional production: dense, complex, and rhythmically precise across a range of tempos and genres from IDM to techno to broken beats. His Cactus/Porcupine 12" on Hessle Audio (2012) is a landmark; his debut album Flatland (PAN, 2014) and its follow-up Cocoon Crush (PAN, 2018) are among the most critically acclaimed techno albums of the decade. "Ganzfeld" was voted RA\'s #1 track of 2014. Mixmag named him DJ of the Year in 2018. A decade-plus of consistent excellence makes him one of the few artists who can claim to have genuinely shaped the sound of Berlin techno from outside its original circle.',
    releases: [
      { title: 'Cactus / Porcupine (Hessle Audio)', year: 2012 },
      { title: 'Flatland (PAN)', year: 2014 },
      { title: 'Cocoon Crush (PAN)', year: 2018 },
    ]},

  // ── FRANCE — CRYSTALLMESS ────────────────────────────────────────────────
  { id:'crystallmess', label:'Crystallmess', type:'artist', genre:'experimental', era:2022, city:'Paris', country:'FR',
    desc:'Christelle Oyiri records and performs as Crystallmess. Born and raised in the Parisian suburbs to parents of Ivorian and Guadeloupean origin, she works as a DJ, producer, writer, and multidisciplinary artist. Her DJing moves fluidly between pummelling techno, high-speed electro, and melodic trance while her research and performance practice engages with club culture, colonial alienation, and diaspora identity. She has released on Timedance (Bristol) and appeared on the Wisdom Teeth compilation. Her profile grew rapidly through appearances at Berghain, Primavera Sound, Le Guess Who?, and Boiler Room. In 2024 she was awarded the Tate Modern Infinities Commission — chosen by a jury that included Brian Eno and artist Anne Imhof — the most significant institutional validation the UK\'s major museum has given to an underground club artist. She represents the generation of diasporic DJs for whom the genre distinctions of the previous era are simply not relevant.',
    releases: [
      { title: 'Timedance release (Timedance)', year: 2023 },
      { title: 'Pattern Gardening contribution (Wisdom Teeth)', year: 2024 },
    ]},

  // ── UK — BRISTOL (SKULL DISCO / LIVITY SOUND / TIMEDANCE) ────────────────
  { id:'skull_disco', label:'Skull Disco', type:'label', genre:'experimental', era:2005, city:'Bristol', country:'UK',
    desc:'Skull Disco was an independent label founded in 2005 by Sam Shackleton and Laurie "Appleblim" Osborne, operating between London and Bristol. Active for only three years and a dozen releases before dissolving in 2008, it nonetheless became one of the most influential imprints in the post-dubstep underground. Its sound fused the heavy sub-bass and fractured rhythms of dubstep with African and Middle Eastern percussion, ethnic vocals, and the dub processing of Basic Channel — producing music that was percussive, ritualistic, and utterly distinct from anything around it. Its dissolution was a catalyst: artists including Scuba, Martyn, and the emerging Bristol scene absorbed its logic, and the label is now regarded as a direct upstream source of Bristol\'s subsequent experimental techno and bass lineage.',
    releases: [
      { title: 'Soundboy Punishments (Skull Disco)', year: 2007 },
      { title: 'Stalker / Blood on My Hands (Skull Disco)', year: 2007 },
    ]},

  { id:'shackleton', label:'Shackleton', type:'artist', genre:'experimental', era:2005, city:'London', country:'UK', bandcamp:'shackleton', bandcamp_album:'572964031',
    desc:'Sam Shackleton co-founded Skull Disco in 2005 and has been producing since the mid-2000s. His music is among the most singular in electronic music: extended percussive compositions drawing on African drumming, Middle Eastern tonality, and Basic Channel-derived dub processing, arranged in dense polyrhythmic spirals that resist genre categorisation. After Skull Disco closed he founded Woe to the Septic Heart and later released on Honest Jon\'s. His later work incorporated live instruments, spoken word, and extended compositional forms. He is one of the most consistently original voices in the underground and has been active in Berlin for much of the 2010s–2020s.',
    releases: [
      { title: 'Soundboy Punishments (Skull Disco)', year: 2007 },
      { title: 'Music for the Quiet Hour / The Drawbar Organ EPs (Woe to the Septic Heart)', year: 2012 },
      { title: 'Devotional Songs (Woe to the Septic Heart)', year: 2016 },
    ]},

  { id:'livity_sound', label:'Livity Sound', type:'label', genre:'experimental', era:2011, city:'Bristol', country:'UK',
    desc:'Livity Sound was founded in Bristol in 2011 by Tom Ford (Peverelist). A collaborative imprint shared with Kowton and Asusu, it became the primary document of the "Bristol techno" sound — a hybrid of UK bass culture (dubstep, UK funky, grime) with four-to-the-floor techno and sound system dub processing. Their 2013 Livity Sound compilation is a definitive document of the approach. The label subsequently expanded to include Batu, Simo Cell, Forest Drive West, Hodge, and Laurel Halo, making it one of the most globally connected experimental club labels in the UK. Its founding aesthetic of drums-and-bass spaciousness as a compositional value — directly descending from Basic Channel and Skull Disco — has influenced a generation of European producers.',
    releases: [
      { title: 'Livity Sound (self-titled compilation)', year: 2013 },
      { title: '"Bring the Rankin" — Kowton', year: 2012 },
      { title: '"In Motion" — Asusu', year: 2013 },
    ]},

  { id:'peverelist', label:'Peverelist', type:'artist', genre:'experimental', era:2007, city:'Bristol', country:'UK',
    desc:'Tom Ford records as Peverelist and is based in Bristol. He is the founder of Livity Sound and one of the central architects of the Bristol experimental techno sound. His productions blend four-to-the-floor techno structures with the spacious, sub-heavy processing of UK bass and sound system culture. His 2007 single "Roll With the Punches" (Punch Drunk) is a landmark of post-dubstep. He has released on Livity Sound and Hessle Audio, and his DJ sets are characterised by breadth — drawing freely from house, techno, footwork, and sound system traditions within the same set.',
    releases: [
      { title: '"Roll With the Punches" (Punch Drunk)', year: 2007 },
      { title: '"Jarvik Mindstate" (Livity Sound)', year: 2012 },
      { title: '"Between the Beats" (Livity Sound)', year: 2015 },
    ]},

  { id:'timedance', label:'Timedance', type:'label', genre:'experimental', era:2016, city:'Bristol', country:'UK',
    desc:'Timedance was founded in Bristol in 2016 by Batu (Amos Childs). Beginning directly from the Livity Sound lineage, it developed a sound that extended the Bristol experimental techno approach into deeper engagements with global club music — singeli, footwork, Jersey club — without losing the sound system weight of its roots. Rated in Resident Advisor\'s top labels of 2016 in its debut year, it has grown into one of the most internationally respected UK labels of the 2020s. Artists include Batu, object blue, Hodge, Folamour, and Crystallmess. Its 2025 Beatportal "Label of the Month" feature confirmed its sustained relevance a decade after founding.',
    releases: [
      { title: 'Timedance 001 — Batu', year: 2016 },
      { title: 'Timedance 010 — Hodge', year: 2018 },
      { title: 'Timedance 020 — Various', year: 2021 },
    ]},

  // ── US — DJ STINGRAY ─────────────────────────────────────────────────────
  { id:'dj_stingray', label:'DJ Stingray 313', type:'artist', genre:'techno', era:2003, city:'Detroit', country:'US',
    desc:'Sherard Ingram records as DJ Stingray 313 and is based in Detroit. He is one of the most significant figures in the contemporary Detroit techno and electro underground. A close associate of the Underground Resistance and Drexciya orbits, he also records as Dopplereffekt (a project exploring clinical, scientific electronics) and has released on Tresor, Frustrated Funk, Ilian Tape, and his own Membrain label. His DJ sets are technically exceptional and encyclopedically rooted in Detroit electronic music history, while his productions push toward the boundary of electro, techno, and machine funk. He represents a direct continuity between the founding Detroit generation and the contemporary global underground.',
    releases: [
      { title: '"Aquatactics" (Frustrated Funk)', year: 2003 },
      { title: '"Pressure" (Membrain)', year: 2010 },
      { title: '"Interstellar Fugue" (Ilian Tape)', year: 2019 },
    ]},

  // ── EVENTS & PLATFORMS ────────────────────────────────────────────────────
  { id:'love_parade', label:'Love Parade', type:'moment', genre:'techno', era:1989, city:'Berlin', country:'DE',
    desc:'The Love Parade was a Berlin street parade and festival that began in 1989 on the Kurfürstendamm with approximately 150 participants. By 1999 it drew an estimated 1.5 million people and had become the largest electronic music event in the world. It represented the global expansion of Berlin techno culture and its absorption into popular consciousness. The parade was cancelled from 2004 and relaunched as a stadium event in other German cities; a crowd crush at the 2010 Duisburg edition killed twenty-one people and ended the event.' },

  { id:'boiler_room', label:'Boiler Room', type:'moment', genre:'experimental', era:2010, city:'London', country:'UK',
    desc:'Boiler Room was founded in London in 2010 as a live-streaming platform for DJ sets, initially from a studio in North London. It expanded rapidly to record DJ and live performances in clubs and warehouses internationally. By the mid-2010s Boiler Room sets were widely credited with extending the reach of underground electronic music to global audiences who would not otherwise have attended the events. Its archive documents a significant portion of contemporary DJ culture.' },

  { id:'de_school', label:'De School', type:'venue', genre:'techno', era:2016, city:'Amsterdam', country:'NL',
    desc:'De School was an Amsterdam club that opened in January 2016 in a former technical school building on Dr. Jan van Breemenstraat in the west of the city. It operated alongside a restaurant, gallery, and gym in the building. Its programming was considered a successor to Trouw in both aesthetic and social approach. De School closed in January 2024, having extended its original planned lease through an extended second phase following the Covid-19 closure.' },

  { id:'kann_records', label:'Kann Records', type:'label', genre:'deep', era:2012, city:'Munich', country:'DE',
    desc:'Kann Records was founded in Munich by Map.ache and has become one of the most warmly regarded German deep house labels of the 2010s–2020s — releasing music that feels handcrafted and harmonically attentive, positioned between the Cologne and Hamburg traditions without belonging entirely to either. Its catalogue is small by design and consistently high in quality: the label that releases less, releases well.',
    releases: [] },

  // ── GERMANY — WEIMAR / GIEGLING (additional) ─────────────────────────────
  { id:'wun_two', label:'Wun Two', type:'artist', genre:'experimental', era:2012, city:'Stuttgart', country:'DE',
    desc:'Wun Two is a German producer based in Stuttgart whose instrumental music draws on hip-hop sampling culture and lo-fi production aesthetics. His work is positioned between hip-hop beat culture and ambient electronic music, often described as beat music or lo-fi. He has released prolifically across digital and vinyl formats on his own label and others.',
    releases: [
      { title: 'Murasaki (own)', year: 2015 },
      { title: 'Shōwa (own)', year: 2017 },
    ]},

  // ── BERLIN — CHAIN REACTION ───────────────────────────────────────────────
  { id:'chain_reaction', label:'Chain Reaction', type:'label', genre:'ambient', era:1995, city:'Berlin', country:'DE',
    desc:'Chain Reaction was a Berlin record label founded in 1995 by Basic Channel members Moritz von Oswald and Mark Ernestus as a vehicle for artists working in the orbit of their dub techno aesthetic but at arm\'s length from the Basic Channel imprint. The label released records by Monolake, Porter Ricks, Vainqueur, Fluxion, Air Liquide, and others throughout the late 1990s. Its output defined a strand of deeply atmospheric, slowly evolving electronic music that influenced ambient and dub techno for decades.',
    releases: [
      { title: 'Biokinetics — Porter Ricks', year: 1996 },
      { title: 'Elevations — Vainqueur', year: 1997 },
      { title: 'Hongkong — Monolake', year: 1997 },
    ]},

  // ── GREECE — DUB TECHNO ────────────────────────────────────────────────────
  { id:'fluxion', label:'Fluxion', type:'artist', genre:'ambient', era:1999, city:'Athens', country:'GR',
    desc:'Fluxion is the alias of Konstantinos Soublis, a Greek electronic music producer whose work spans dub techno, ambient, and experimental electronics. His first recordings appeared on Basic Channel\'s Chain Reaction imprint in the late 1990s and were compiled on two Vibrant Forms albums (Chain Reaction, 1999 and 2000). These established him as one of the key figures in the Chain Reaction constellation alongside Monolake, Porter Ricks, and Vainqueur. He subsequently founded Vibrant Music, continuing to produce slowly evolving, texture-led music for several decades.',
    releases: [
      { title: 'Vibrant Forms (Chain Reaction)', year: 1999 },
      { title: 'Vibrant Forms II (Chain Reaction)', year: 2000 },
    ]},

  // ── BERLIN — MINIMAL / DARK TECHNO ────────────────────────────────────────
  { id:'claudio_prc', label:'Claudio PRC', type:'artist', genre:'techno', era:2009, city:'Berlin', country:'DE',
    desc:'Claudio PRC is a Sardinian-born producer and DJ based in Berlin. His music draws on Detroit techno and electroacoustic traditions, combining lean rhythmic structures with abstract sound design and industrial texture. He released a series of EPs on the Berlin label Prologue from 2009 onwards — including Clear Depths (2010), Vacuum Substance (2010), and Inner State (2012) — and has also appeared on Semantica Records and Stroboscopic Artefacts.',
    releases: [
      { title: 'Clear Depths EP (Prologue)', year: 2010 },
      { title: 'Vacuum Substance EP (Prologue)', year: 2010 },
      { title: 'Inner State (Prologue)', year: 2012 },
    ]},

  // ── GERMANY — HEIDELBERG / AMBIENT HOUSE ──────────────────────────────────
  { id:'move_d', label:'Move D', type:'artist', genre:'deep', era:1992, city:'Heidelberg', country:'DE',
    desc:'Move D is the alias of David Moufang, a German producer born in 1966 in Heidelberg. His music spans deep house, ambient, and experimental electronics with a distinctly European sensibility outside the Berlin and Frankfurt centres. In 1992 he co-founded Source Records in Heidelberg, and his debut LP Kunststoff (Source, 1994) established him as a key voice in German ambient house alongside a prolific series of collaborative recordings with the late Pete Namlook. He has subsequently released on Workshop, Smallville, Modern Love, Running Back, and Warp, and compiled the fabric 74 mix in 2014.',
    releases: [
      { title: 'Kunststoff (Source Records)', year: 1994 },
      { title: 'fabric 74', year: 2014 },
    ]},

  // ── SWEDEN — SEWER SENDER ─────────────────────────────────────────────────
  { id:'sewer_sender', label:'Sewer Sender', type:'label', genre:'experimental', era:2014, city:'', country:'SE',
    desc:'Sewer Sender is a small independent Swedish electronic music label releasing vinyl and digital recordings by artists including Eletun Selona, Martinou, and Nokato Nomer. Its catalogue covers experimental electronics, ambient, and abstract music with a lo-fi, DIY aesthetic. Connections to the Hamburg and Dial orbit are evidenced by contributions from Ben Kaczor. The label occupies a similar niche to Nous\'klaer Audio — small, focused, and resistant to easy genre classification.',
    releases: [
      { title: 'Deep Sea Seated Concrete Solid — Martinou', year: 2016 },
      { title: 'The Dawn of New — Eletun Selona', year: 2024 },
    ]},

  // ── DENMARK — AARHUS / HELP RECORDINGS ───────────────────────────────────
  { id:'help_recordings', label:'Help Recordings', type:'label', genre:'deep', era:2013, city:'Aarhus', country:'DK',
    desc:'Help Recordings is an Aarhus-based label founded by a collective of Danish producers including the brothers Natal Zaks (DJ Central / Central) and Milan Zaks (DJ Sports). The label releases house music and experimental electronics with a distinctly Scandinavian sensibility — subtle, melodic, and unhurried. Its catalogue has been distributed through Clone and it has attracted attention through Natal Zaks\'s concurrent relationship with Dekmantel. The label represents Aarhus as an emerging node in Danish and broader Scandinavian club culture outside Copenhagen.',
    releases: [
      { title: 'Irrelevant Material (compilation)', year: 2016 },
    ]},

  { id:'dj_central', label:'DJ Central', type:'artist', genre:'deep', era:2013, city:'Aarhus', country:'DK',
    desc:'DJ Central is the alias of Natal Zaks, a Danish producer and DJ from Aarhus and co-founder of Help Recordings. He also records as Central. His music is understated melodic house with a warm, analogue character, influenced by the Chicago and Detroit traditions as filtered through the Hamburg and Cologne schools. He has released on Help Recordings and on Dekmantel, and records as Sportscentral with his brother Milan Zaks (DJ Sports).',
    releases: [
      { title: '"Gratitude" (Help Recordings)', year: 2014 },
      { title: '"Om Dans" (Help Recordings)', year: 2016 },
    ]},

  { id:'dj_sports', label:'DJ Sports', type:'artist', genre:'deep', era:2013, city:'Aarhus', country:'DK',
    desc:'DJ Sports is the alias of Milan Zaks, a Danish producer from Aarhus and co-founder of Help Recordings. His music draws on house and garage traditions with a lo-fi, spontaneous quality. He has released on Help Recordings and on Firecracker Recordings, where his debut album Modern Species appeared in 2018. He records as Sportscentral alongside his brother Natal Zaks (DJ Central / Central).',
    releases: [
      { title: 'Modern Species (Firecracker Recordings)', year: 2018 },
    ]},

  // ── EVENTS — INNERVISIONS / AMSTERDAM ────────────────────────────────────
  { id:'lost_in_a_moment', label:'Lost in a Moment', type:'moment', genre:'melodic', era:2014, city:'Amsterdam', country:'NL',
    desc:'Lost in a Moment is an itinerant event series conceived by Innervisions, the Berlin label run by Âme and Dixon. Its editions have taken place at unusual sites including a 19th-century sea fort on Pampus Island east of Amsterdam, locations in Barcelona, London, and Rio de Janeiro. The programming is rooted in the melodic and atmospheric house and techno of the Innervisions aesthetic. The series is part of a broader movement toward site-specific, long-format electronic music events beyond the traditional club context.' },

  // ── SCANDINAVIA — NORTHERN ELECTRONICS ARTISTS ────────────────────────────
  // ── HAMBURG — DJ KOZE ────────────────────────────────────────────────────
  { id:'dj_koze', label:'DJ Koze', type:'artist', genre:'deep', era:2003, city:'Hamburg', country:'DE',
    desc:'Stefan Kozalla performs as DJ Koze and is based in Hamburg. He is a central figure of the Golden Pudel club and the city\'s eccentric underground, known for DJ sets that range across genres with an idiosyncratic logic. He founded Pampa Records in 2012 as the home for his productions and those of close collaborators. His albums Amygdala (2013) and Knock Knock (2018) are regarded as two of the most inventive records in contemporary electronic music — wide-ranging, emotionally direct, and resistant to category.',
    releases: [
      { title: 'Amygdala (Pampa Records)', year: 2013 },
      { title: 'Knock Knock (Pampa Records)', year: 2018 },
      { title: '"Pick Up" feat. José González (Pampa)', year: 2018 },
    ]},

  // ── HAMBURG — GOLDEN PUDEL / HELENA HAUFF ────────────────────────────────
  { id:'golden_pudel', label:'Golden Pudel', type:'venue', genre:'experimental', era:1992, city:'Hamburg', country:'DE',
    desc:'The Golden Pudel — formally Kulturclub Golden Pudel — is a small club on the Hamburg waterfront at the Fischmarkt, founded in 1992 by artist and musician Rocko Schamoni. It is one of the longest-running underground clubs in Germany and operates with a deliberately lo-fi, anti-commercial ethos: low capacity, cheap entry, and a booking philosophy rooted in genuine curatorial intent rather than market logic. It has been a formative space for Hamburg DJs including Helena Hauff and DJ Koze, and represents a strand of Hamburg club culture distinct from the label-and-studio network around Dial and Smallville. The club was gutted by arson in 2015 and rebuilt with community support.' },

  // ── HAMBURG — HELENA HAUFF ────────────────────────────────────────────────
  { id:'helena_hauff', label:'Helena Hauff', type:'artist', genre:'techno', era:2014, city:'Hamburg', country:'DE', bandcamp:'helenahauff', bandcamp_album:'1615473620',
    desc:'Helena Hauff is a Hamburg-born DJ and producer. She began DJing in Hamburg\'s Golden Pudel club, one of the longest-running underground venues in the city. Her productions and DJ sets work in a raw, fast, analogue style that draws on electro, EBM, and industrial techno. She has released on Werkdiscs (Actress\'s label), her own Return to Disorder imprint, and Ninja Tune. Her Boiler Room set from 2013 was widely circulated and contributed to her international profile.',
    releases: [
      { title: 'Discreet Desires (Werkdiscs/Ninja Tune)', year: 2015 },
      { title: 'Qualm (Werkdiscs/Ninja Tune)', year: 2018 },
      { title: '"Actio Reactio" (Return to Disorder)', year: 2014 },
    ]},

  // ── BERLIN — VRIL ────────────────────────────────────────────────────────
  { id:'vril', label:'Vril', type:'artist', genre:'techno', era:2013, city:'Berlin', country:'DE',
    desc:'Vril is a Berlin-based DJ and producer whose identity has been kept private. He releases on Delsin Records in Amsterdam and on Tresor, and runs his own Vril Music imprint. His productions work in a hypnotic, loop-based style that sits at the junction of deep house and techno — tracks built from slowly shifting textures and precisely interlocked rhythmic cycles. His Delsin album Torus (2013) is regarded as one of the stronger European techno records of that decade.',
    releases: [
      { title: 'Torus (Delsin)', year: 2013 },
      { title: '"Cue" (Tresor)', year: 2016 },
      { title: '"Interceptor" (Vril Music)', year: 2018 },
    ]},

  // ── LONDON — BONOBO / BURIAL / CORSICA STUDIOS ───────────────────────────
  { id:'bonobo', label:'Bonobo', type:'artist', genre:'deep', era:2000, city:'London', country:'UK', bandcamp:'bonobomusic', bandcamp_album:'589833369',
    desc:'Simon Green records as Bonobo and grew up in Southampton before relocating to London. His debut Animal Magic (Tru Thoughts, 2000) established a sound rooted in jazz sampling and organic electronics. Subsequent albums Days to Come (2006), Black Sands (Ninja Tune, 2010), The North Borders (2013), and Migration (2017) expanded in scale while retaining a strong harmonic identity. His music sits at an intersection of jazz, deep house, and ambient electronic music, and he performs live with a large ensemble.',
    releases: [
      { title: 'Days to Come (Ninja Tune)', year: 2006 },
      { title: 'Black Sands (Ninja Tune)', year: 2010 },
      { title: 'The North Borders (Ninja Tune)', year: 2013 },
      { title: 'Migration (Ninja Tune)', year: 2017 },
    ]},

  { id:'burial', label:'Burial', type:'artist', genre:'experimental', era:2006, city:'London', country:'UK', bandcamp:'burial', bandcamp_album:'4015966257',
    desc:'Burial is an anonymous producer from South London. His debut album Burial (Hyperdub, 2006) and its follow-up Untrue (Hyperdub, 2007) placed him at the centre of a significant shift in British electronic music — combining UK garage rhythms with a heavily processed, melancholic atmospherics. His identity remained unknown until 2008. He has collaborated extensively with Four Tet and Massive Attack, and his records continue to appear sporadically on Hyperdub. His influence on atmospheric electronic music and what became known as post-dubstep is difficult to overstate.',
    releases: [
      { title: 'Burial (Hyperdub)', year: 2006 },
      { title: 'Untrue (Hyperdub)', year: 2007 },
      { title: '"Moth / Wolf Cub" with Four Tet (Text)', year: 2009 },
      { title: 'Ego Death with Four Tet (Hyperdub)', year: 2023 },
    ]},

  { id:'corsica_studios', label:'Corsica Studios', type:'venue', genre:'techno', era:2006, city:'London', country:'UK',
    desc:'Corsica Studios is a south London club in Elephant and Castle, operating since the mid-2000s. It is known for adventurous programming across techno, experimental electronic music, and club-adjacent genres, operating two rooms with a sound system calibrated for listening. It has hosted events by Hessle Audio, Blawan, Actress, and visiting international artists. Its booking philosophy prioritises artists and sounds that sit outside the mainstream of London nightlife, and it has remained independent through a period when most comparable venues have closed.',
  },

  // ── IBIZA ─────────────────────────────────────────────────────────────────
  { id:'ibiza', label:'Ibiza', type:'venue', genre:'techhouse', era:1987, city:'Ibiza', country:'ES',
    desc:'Ibiza is a Spanish island whose club scene became central to electronic music culture through a specific historical moment in 1987, when a group of London DJs — including Paul Oakenfold, Danny Rampling, Nicky Holloway, and Johnny Walker — heard Alfredo\'s eclectic Balearic sets at Amnesia and returned to London to create the acid house scene at Shoom and Spectrum. Since then the island has evolved through trance, progressive house, and commercial EDM into a venue for techno and deeper electronic music, particularly through clubs including DC10 and Privilege, and residencies by artists including Carl Cox, Maceo Plex, and Black Coffee.',
  },

  // ── NEW ADDITIONS ─────────────────────────────────────────────────────────
  { id:'dj_tennis', label:'DJ Tennis', type:'artist', genre:'melodic', era:2012, city:'Berlin', country:'DE',
    desc:'Giorgio Li Calzi performs as DJ Tennis and was born in Sicily. He co-founded the Life and Death label in Berlin in 2011 alongside other Berlin-based figures. He is known for marathon DJ sets that build across house and techno without settling in either, drawing on a wide catalogue with a pronounced harmonic intelligence. He has released on Life and Death, Get Physical, and Crosstown Rebels, and performs globally at major clubs and festivals.',
    releases: [
      { title: '"Isobar" (Life and Death)', year: 2012 },
      { title: '"L\'Età Dell\'Oro" (Life and Death)', year: 2014 },
      { title: '"Stay True" (Crosstown Rebels)', year: 2017 },
    ]},

  { id:'maceo_plex', label:'Maceo Plex', type:'artist', genre:'melodic', era:2012, city:'Barcelona', country:'ES',
    desc:'Eric Estornel was born in Miami to Cuban parents and is based in Barcelona. He releases as Maceo Plex and as Maetrik, a harder techno alias. He founded Ellum Audio in 2013. His productions combine cinematic melodic textures with peak-time techno structures and have brought him to residencies at DC10 in Ibiza and major festival bookings. He has also released on Afterlife, where his track "Solar" became one of the label\'s most-played records.',
    releases: [
      { title: '"Astronaut" (Crosstown Rebels)', year: 2012 },
      { title: '"Solar" (Afterlife)', year: 2018 },
      { title: '"Conjure" (Ellum Audio)', year: 2019 },
    ]},

  { id:'mind_against', label:'Mind Against', type:'artist', genre:'melodic', era:2013, city:'Berlin', country:'DE',
    desc:'Mind Against is the project of Italian brothers Alessandro and Federico Fognini, based in Berlin. They are among the core artists of the Afterlife label — founded by Tale of Us — and their productions share its cinematic, slowly evolving character. Their records move through deep house and melodic techno with a strong emphasis on atmosphere over percussive energy. Their track "Anfisa" became one of the early defining Afterlife releases.',
    releases: [
      { title: '"Anfisa" (Afterlife)', year: 2016 },
      { title: '"Redruth" (Afterlife)', year: 2018 },
      { title: '"XIII" (Life and Death)', year: 2020 },
    ]},

  { id:'francois_k', label:'François K', type:'artist', genre:'deep', era:1985, city:'New York', country:'US',
    desc:'François Kevorkian was born in Lyon, France, and moved to New York in the late 1970s. He became a pivotal figure in the NYC house and garage scene as a DJ, remixer, and producer. He played at the Paradise Garage alongside Larry Levan and was a central presence at the Body & SOUL party from its founding in 1996 through 2004. He founded Wave Music in 1994. His remixes — spanning soul, jazz, house, and techno — are regarded as benchmark works of the form.',
    releases: [
      { title: 'FK Presents Choice: A Collection of Classics (Wave Music)', year: 2000 },
      { title: '"Underwater Dancehall" (Wave Music)', year: 2002 },
      { title: 'Deep Space NYC (mix)', year: 2006 },
    ]},

  { id:'kuniyuki', label:'Kuniyuki', type:'artist', genre:'deep', era:2006, city:'Tokyo', country:'JP',
    desc:'Kuniyuki Takahashi is a Japanese producer from Sapporo who releases primarily on Mule Musiq in Tokyo. His productions blend deep house with jazz harmony, acoustic instrumentation, and ambient texture in a way that connects the Chicago and New York deep house traditions to a Japanese sensibility rooted in attentiveness and craft. He is among the most internationally recognised Japanese producers in underground deep house.',
    releases: [
      { title: '"Kaze / Earth" (Mule Musiq)', year: 2008 },
      { title: 'Circles (Mule Musiq)', year: 2012 },
      { title: '"Feather" (Mule Musiq)', year: 2015 },
    ]},

  { id:'hate', label:'HATE', type:'label', genre:'techno', era:2001, city:'Madrid', country:'ES',
    desc:'HATE is a Spanish techno label founded in Madrid by Oscar Mulero around 2001. It releases hard, functional techno with roots in the Detroit and industrial traditions, prioritising rhythmic precision and sound design over melodic content. The label is one of the most internationally recognised Spanish contributions to European underground techno, and Oscar Mulero himself has been a significant figure in Spanish techno since the early 1990s.',
    releases: [
      { title: '"Dark Corridor" — Oscar Mulero (HATE)', year: 2003 },
      { title: '"Clandestine" — Oscar Mulero (HATE)', year: 2009 },
      { title: '"Post-Scriptum" — Oscar Mulero (HATE)', year: 2016 },
    ]},

  { id:'martinou', label:'Martinou', type:'artist', genre:'experimental', era:2014, city:'', country:'SE',
    desc:'Martinou is a Swedish producer releasing on the Sewer Sender label. His debut album Deep Sea Seated Concrete Solid (Sewer Sender, 2016) is a work of textural ambient and experimental electronics with a slow, submerged quality. He is part of a small Scandinavian network of producers engaged with ambient and deep house at a considerable remove from club contexts, connected loosely to the Dial and northern European underground orbit.',
    releases: [
      { title: 'Deep Sea Seated Concrete Solid (Sewer Sender)', year: 2016 },
    ]},

  { id:'northern_electronics_artists', label:'Abdulla Rashim', type:'artist', genre:'ambient', era:2012, city:'Stockholm', country:'SE',
    desc:'Anthony Linell records as Abdulla Rashim and founded Northern Electronics in Stockholm. His productions are dark, slowly evolving ambient and industrial-influenced electronic music. He has released exclusively on Northern Electronics and his own imprints, maintaining a deliberately opaque public profile consistent with the label\'s minimal approach.',
    releases: [
      { title: 'Unanimity (Northern Electronics)', year: 2014 },
      { title: 'For Those Who Strive (Northern Electronics)', year: 2015 },
      { title: 'Eget Rum (Northern Electronics)', year: 2018 },
    ]},

  // ── AMBIENT PIONEERS ──────────────────────────────────────────────────────
  { id:'ambient', label:'Ambient', type:'style', genre:'ambient', era:1978, city:'London', country:'UK',
    desc:'Ambient music was defined and named by Brian Eno with his 1978 record Music for Airports — music that "must be as ignorable as it is interesting," designed to exist in space rather than demand attention. The concept had precedents in Erik Satie\'s furniture music, John Cage\'s 4\'33", and the drone works of La Monte Young, but Eno gave it a practical form and vocabulary that proved enormously generative. Ambient music entered the electronic world via synthesizer technology: where rock and pop used synthesis to simulate acoustic instruments, ambient used it to create textures with no acoustic reference at all. The form subsequently absorbed field recording, generative processes, and digital processing, and became the shared foundation beneath IDM, ambient techno, dub techno, and the entire post-club landscape of introspective electronic music.',
    releases: [
      { title: 'Discreet Music — Brian Eno (Obscure)', year: 1975 },
      { title: 'Ambient 1: Music for Airports — Brian Eno (EG)', year: 1978 },
      { title: 'Ambient 4: On Land — Brian Eno (EG)', year: 1982 },
    ]},

  { id:'brian_eno', label:'Brian Eno', type:'artist', genre:'ambient', era:1975, city:'London', country:'UK',
    desc:'Brian Eno (born 1948, Woodbridge, Suffolk) established the formal grammar of ambient music with Discreet Music (1975) and the four-volume Ambient series beginning with Music for Airports (1978), coining the term and defining it as music that could "accommodate many levels of listening attention without enforcing one." Operating on his own Obscure and Opal labels and later through Virgin and EG Records, he influenced every subsequent practitioner of the idiom. His guitar-tape collaborations with Robert Fripp anticipated drone music; his production of Talking Heads and Bowie\'s Berlin trilogy showed that the same ideas reshaped rock. Biosphere, Aphex Twin, Boards of Canada, and the entire Apollo Records ambient techno lineage cite him as a primary reference.',
    releases: [
      { title: 'Discreet Music (Obscure)', year: 1975 },
      { title: 'Ambient 1: Music for Airports (EG)', year: 1978 },
      { title: 'Ambient 4: On Land (EG)', year: 1982 },
    ]},

  { id:'aphex_twin', label:'Aphex Twin', type:'artist', genre:'ambient', era:1991, city:'London', country:'UK', bandcamp:'aphextwin', bandcamp_album:'964967358',
    desc:'Richard D. James (born 1971, Limerick, Ireland; raised in Lanner, Cornwall) began on self-built and modified hardware as a teenager. His Analogue Bubblebath EP (Mighty Force, 1991) attracted immediate attention; Selected Ambient Works 85-92 (R&S, 1992) established him centrally in the nascent IDM scene. Selected Ambient Works Volume II (Warp, 1994) — dark, beatless, entirely its own thing — became one of the most influential electronic records ever made. He co-founded Rephlex Records (1991, Cornwall/London) with Grant Wilson-Claridge as a home for braindance and left-field electronic music.',
    releases: [
      { title: 'Selected Ambient Works 85-92 (R&S)', year: 1992 },
      { title: 'Selected Ambient Works Volume II (Warp)', year: 1994 },
      { title: 'Richard D. James Album (Warp)', year: 1996 },
      { title: 'Drukqs (Warp)', year: 2001 },
    ]},

  { id:'autechre', label:'Autechre', type:'artist', genre:'experimental', era:1992, city:'Manchester', country:'UK', bandcamp:'autechre', bandcamp_album:'3645815932',
    desc:'Rob Brown and Sean Booth, both from Rochdale, Greater Manchester, formed Autechre in 1987 and became a defining presence on Warp Records after appearing on the Artificial Intelligence compilation (1992). Their debut Incunabula (1993) combined hip-hop rhythmic logic with abstract electronic texture. Through the following decades they progressively dismantled groove in favour of increasingly complex rhythmic structures and machine-like sound design, creating one of the most technically radical and aesthetically consistent bodies of work in electronic music.',
    releases: [
      { title: 'Incunabula (Warp)', year: 1993 },
      { title: 'Amber (Warp)', year: 1994 },
      { title: 'Tri Repetae (Warp)', year: 1995 },
      { title: 'Confield (Warp)', year: 2001 },
    ]},

  // ── RASTER-NOTON / ALVA NOTO ──────────────────────────────────────────────
  { id:'raster_noton', label:'Raster-Noton', type:'label', genre:'experimental', era:1999, city:'Chemnitz', country:'DE',
    desc:'Raster-Noton emerged from a merger of Noton (Carsten Nicolai\'s label, founded 1994) and Rastermusik (founded 1996 in Chemnitz by Olaf Bender and Frank Bretschneider). The combined label, established 1999, became the primary home for rigorous minimalist and glitch-based electronic music. Its roster included Alva Noto, Byetone (Olaf Bender), Frank Bretschneider, Ryoji Ikeda, and Vladislav Delay. The label split in 2017 into Raster (Bender/Bretschneider) and Noton (Nicolai).',
    releases: [
      { title: 'Pilot — Byetone (Raster-Noton)', year: 2000 },
      { title: 'Noto — Alva Noto (Raster-Noton)', year: 2002 },
      { title: 'Multila — Vladislav Delay (Raster-Noton)', year: 2000 },
    ]},

  { id:'alva_noto', label:'Alva Noto', type:'artist', genre:'experimental', era:2001, city:'Chemnitz', country:'DE',
    desc:'Carsten Nicolai (born 1965, Karl-Marx-Stadt/Chemnitz) works as Alva Noto across music, visual art, and sound installation. He co-founded Noton in 1994 (later merged into Raster-Noton) and built a body of work from sine tones, glitch artefacts, field recordings, and digital noise. His long-running collaborative series with Ryuichi Sakamoto (Vrioon 2002, Insen 2005, Summvs 2011) brought the Raster-Noton aesthetic to a wider audience. He collaborates regularly with Mika Vainio of Pan Sonic and Ryoji Ikeda within the minimalist electronic network.',
    releases: [
      { title: 'Transvray (Raster-Noton)', year: 2000 },
      { title: 'Vrioon (with Ryuichi Sakamoto, Raster-Noton)', year: 2002 },
      { title: 'Unitxt (Raster-Noton)', year: 2008 },
    ]},

  // ── DETROIT — MOODYMANN ───────────────────────────────────────────────────
  { id:'moodymann', label:'Moodymann', type:'artist', genre:'deep', era:1994, city:'Detroit', country:'US',
    desc:'Kenny Dixon Jr. records as Moodymann and founded KDJ Records in Detroit in 1994. Where the Belleville Three pursued a futurist electronic aesthetic, Moodymann rooted his music in the soul, funk, and gospel textures of Detroit\'s Black communities. His tracks sample classic soul, build around late-night grooves, and occasionally incorporate spoken-word passages. Released internationally on Peacefrog and Defected, his work expanded what Detroit electronic music could mean and remains a key reference for European deep house producers.',
    releases: [
      { title: 'Silent Introduction (KDJ)', year: 1997 },
      { title: 'Forevernevermore (KDJ)', year: 2000 },
      { title: 'Mahogani Music (KDJ)', year: 2004 },
    ]},

  // ── SCANDINAVIA — AMBIENT / EXPERIMENTAL ─────────────────────────────────
  { id:'biosphere', label:'Biosphere', type:'artist', genre:'ambient', era:1991, city:'Tromsø', country:'NO', bandcamp:'biosphere', bandcamp_album:'616828950',
    desc:'Geir Jenssen (born 1962, Tromsø, Norway) has recorded as Biosphere since the early 1990s. His Microgravity (1992, Apollo/R&S) appeared on the Belgian label that hosted early Aphex Twin. His masterwork Substrata (1997, All Saints) — inspired by the flat, frozen landscape of the Norwegian Arctic — is one of the most quietly sustained ambient records ever made. Biosphere draws from scientific field recordings, shortwave radio, cold geography, and drone composition, situating him in a distinct lineage from Eno-influenced ambient but arriving at some of the same places.',
    releases: [
      { title: 'Microgravity (Apollo/R&S)', year: 1992 },
      { title: 'Patashnik (Apollo/R&S)', year: 1994 },
      { title: 'Substrata (All Saints)', year: 1997 },
    ]},

  { id:'pan_sonic', label:'Pan Sonic', type:'artist', genre:'experimental', era:1993, city:'Turku', country:'FI',
    desc:'Mika Vainio (1963–2017) and Ilpo Väisänen formed Pan Sonic (originally Panasonic, renamed 1999 after a trademark dispute) in Turku, Finland in 1993. Releasing on the Finnish Sähkö Recordings and the UK\'s Blast First label, they built an aesthetic from the hardest, most reduced sounds achievable with analogue synthesizers and self-built electronics — a noise minimalism that influenced Alva Noto and the Raster-Noton circle, Puce Mary, and the broader post-industrial underground. Mika Vainio\'s subsequent solo work extended these methods until his passing in 2017.',
    releases: [
      { title: 'Vakio (Sähkö)', year: 1995 },
      { title: 'Kulma (Blast First)', year: 1997 },
      { title: 'A (Blast First)', year: 1999 },
    ]},

  { id:'vladislav_delay', label:'Vladislav Delay', type:'artist', genre:'ambient', era:1999, city:'Helsinki', country:'FI', bandcamp:'vladislavdelay', bandcamp_album:'2559861354',
    desc:'Sasu Ripatti (born 1976, Oulu, Finland) records as Vladislav Delay and also as Luomo and Uusitalo. His debut material appeared on Chain Reaction — Basic Channel\'s Berlin sublabel — in 1999–2000, making him one of the few Finnish artists to penetrate the inner circle of dub techno. His album Multila (Chain Reaction, 2000) applies dub processing to a stripped, abstract framework closer to concrete music than to dance music. He released further material on Raster-Noton and founded his own Huume Recordings label.',
    releases: [
      { title: 'Ele (Chain Reaction)', year: 1999 },
      { title: 'Multila (Chain Reaction)', year: 2000 },
      { title: 'Whistleblower (Huume)', year: 2012 },
    ]},

  { id:'todd_terje', label:'Todd Terje', type:'artist', genre:'disco', era:2006, city:'Oslo', country:'NO',
    desc:'Terje Olsen (born 1975, Mjøndalen, Norway) records as Todd Terje and releases on his own Olsen Records label (Oslo). A central figure in the Norwegian cosmic house revival alongside Lindstrøm and Prins Thomas, he constructs extended space disco and nu-disco tracks referencing Italo disco, Giorgio Moroder, and late-1970s synthesizer aesthetics. His debut album It\'s Album Time (2014) achieved genuine crossover success. His remixes of Roxy Music and Bryan Ferry connect him to a broader culture of disco consciousness.',
    releases: [
      { title: '"Inspector Norse" (Olsen)', year: 2012 },
      { title: 'It\'s Album Time (Olsen)', year: 2014 },
    ]},

  { id:'posh_isolation', label:'Posh Isolation', type:'label', genre:'experimental', era:2009, city:'Copenhagen', country:'DK', bandcamp:'poshisolation', bandcamp_album:'2637325331',
    desc:'Founded in Copenhagen in 2009 by Loke Rahbek and Christian Stadsgaard, Posh Isolation operates at the intersection of industrial music, EBM, dark ambient, and experimental electronics. Its roster — Frederikke Hoffmeier (Puce Mary), Loke Rahbek (Lust for Youth), Damien Dubrovnik — represents the most sustained experimental electronic label practice to emerge from Scandinavia in the 2010s. The label has released over 100 records, maintaining a consistent aesthetic identity across cassette, vinyl, and digital formats.',
    releases: [
      { title: 'The Drought — Puce Mary (Posh Isolation)', year: 2018 },
      { title: 'Always Coming Home — Lust for Youth (Posh Isolation)', year: 2011 },
    ]},

  { id:'puce_mary', label:'Puce Mary', type:'artist', genre:'experimental', era:2011, city:'Copenhagen', country:'DK', bandcamp:'puce-mary', bandcamp_album:'2400322426',
    desc:'Frederikke Hoffmeier (based in Copenhagen) records as Puce Mary and is one of the central figures of the Posh Isolation label. Her practice draws from industrial music, power electronics, and dark ambient — releases such as The Spiral (2014) and The Drought (2018, PAN) are confrontational, emotionally direct works that bring the body of noise music into contact with songwriting instincts. She is Denmark\'s most internationally visible experimental electronic artist.',
    releases: [
      { title: 'The Spiral (Posh Isolation)', year: 2014 },
      { title: 'The Drought (PAN)', year: 2018 },
      { title: 'Persona (Posh Isolation)', year: 2020 },
    ]},

  { id:'kornel_kovacs', label:'Kornél Kovács', type:'artist', genre:'deep', era:2012, city:'Stockholm', country:'SE', bandcamp:'kornelkovacs', bandcamp_album:'3992184321',
    desc:'Kornél Kovács (born in Sweden of Hungarian heritage) is a co-founder of Studio Barnhus alongside Axel Boman and Petter Nordkvist. His productions are eclectic house music combining melodic energy with rhythmic sophistication. As part of the Studio Barnhus trio he has helped define Stockholm\'s contemporary house identity through releases, residencies, and the label\'s internationally distributed catalogue. His record The Guide (Studio Barnhus, 2016) was widely praised.',
    releases: [
      { title: 'The Guide (Studio Barnhus)', year: 2016 },
      { title: 'Beni Udjin EP (Studio Barnhus)', year: 2014 },
    ]},

  // ── GERMANY — NEW VOICES ──────────────────────────────────────────────────
  { id:'robag_wruhme', label:'Robag Wruhme', type:'artist', genre:'deep', era:2006, city:'Weimar', country:'DE', bandcamp:'robagwruhme', bandcamp_album:'1221722553',
    desc:'Gabor Schablitzki (born in Rudolstadt, Thuringia; based in the Weimar area) records as Robag Wruhme and previously as half of the duo Wighnomy Brothers (Smallville Records, Hamburg). His solo productions — released primarily on Kompakt (Cologne) and Pampa Records (DJ Koze\'s Hamburg label) — are introspective deep house, combining melodic warmth with a structural delicacy characteristic of the Kompakt aesthetic. His connection to Weimar places him geographically alongside the Giegling collective, though his label affiliations are distinct.',
    releases: [
      { title: 'Thora Vukk (Kompakt)', year: 2011 },
      { title: 'Wuzzelbud KK (Smallville)', year: 2009 },
    ]},

  { id:'lena_willikens', label:'Lena Willikens', type:'artist', genre:'experimental', era:2010, city:'Düsseldorf', country:'DE',
    desc:'Based in Cologne and identified with her long residency at Salon des Amateurs in Düsseldorf, Lena Willikens is one of the most distinctive DJs to emerge from Germany in the 2010s. Her sets draw from industrial, EBM, new wave, no wave, tribal, and dark electronics in ways that resist easy category. She has released on Cómeme Records (Buenos Aires/Cologne) and Dekmantel. She represents a strand of the Düsseldorf/Cologne axis that inherits both the industrial and the Kraftwerk-rooted electronic avant-garde.',
    releases: [
      { title: 'Phantom Delia (Cómeme)', year: 2016 },
      { title: 'VVVV (with Sarah Farina, Rush Hour)', year: 2019 },
    ]},

  { id:'salon_des_amateurs', label:'Salon des Amateurs', type:'venue', genre:'experimental', era:2006, city:'Düsseldorf', country:'DE',
    desc:'Salon des Amateurs is a club and event series in Düsseldorf that opened around 2006. It became a defining context for a generation of German DJs working outside conventional techno and house categories — industrial, no wave, EBM, and abstract electronics all found a platform here. Lena Willikens held a long residency; other associated figures included Gerd Janson, Vladimir Ivkovic, and Move D. The salon\'s programming approach shaped a distinct strand of German club culture that valued curation and eclecticism over genre orthodoxy.',
    releases: []},

  // ── NETHERLANDS — INTERSTELLAR FUNK ──────────────────────────────────────
  { id:'interstellar_funk', label:'Interstellar Funk', type:'artist', genre:'experimental', era:2012, city:'Amsterdam', country:'NL', bandcamp:'interstellarfunk', bandcamp_album:'3697715538',
    desc:'Olf van Elden (Amsterdam) records as Interstellar Funk and releases on Clone Records (Rotterdam) and Dekmantel (Amsterdam). His productions combine post-punk electronics, new wave, and analogue club music in ways that recall the original connections between industrial music and dance. His debut album Into the Echo (Dekmantel, 2018) is a representative statement of this approach. He co-founded Tape Records Amsterdam.',
    releases: [
      { title: 'Danza Macabra EP (Clone)', year: 2013 },
      { title: 'Into the Echo (Dekmantel)', year: 2018 },
    ]},

  // ── SPAIN — REGAL ─────────────────────────────────────────────────────────
  { id:'regal', label:'Regal', type:'artist', genre:'techno', era:2012, city:'Madrid', country:'ES',
    desc:'Gabriel Cassina (born 1989, Madrid) records as Regal and founded Involve Records (Madrid) in 2012. His productions are acid techno with trance and electro references — technically precise and musically extreme. Involve has released records by Ellen Allien, Lady Starlight, and Amelie Lens. Regal is part of the Madrid techno scene that partly overlaps with Oscar Mulero\'s HATE label, though the two labels have distinct aesthetic orientations.',
    releases: [
      { title: 'Exo EP (Involve)', year: 2012 },
      { title: 'Negative Feedback Resistor (Semantica)', year: 2015 },
    ]},

  // ── FRANCE — DAFT PUNK / FRENCH TOUCH ────────────────────────────────────
  { id:'daft_punk', label:'Daft Punk', type:'artist', genre:'disco', era:1994, city:'Paris', country:'FR',
    desc:'Thomas Bangalter (born 1975) and Guy-Manuel de Homem-Christo (born 1974) formed Daft Punk in Paris in 1993. Their first single "The New Wave" (1994) appeared on Soma Quality Recordings in Glasgow — the Scottish techno label run by Slam — before moving to Virgin and their own Roulé imprint. Homework (1997) was the commercial breakthrough of French Touch, built from sampled disco and funk filtered through house production. Pedro Winter (Busy P), their manager, later founded Ed Banger Records using the network built around the group.',
    releases: [
      { title: '"Da Funk" / "Alive" (Soma/Virgin)', year: 1995 },
      { title: 'Homework (Virgin/Daft Life)', year: 1997 },
      { title: 'Discovery (Virgin/Daft Life)', year: 2001 },
    ]},

  { id:'etienne_de_crecy', label:'Étienne de Crécy', type:'artist', genre:'disco', era:1996, city:'Paris', country:'FR', bandcamp:'etiennedecrecy', bandcamp_album:'2671923751',
    desc:'Étienne de Crécy (born 1969, Paris) recorded as half of Motorbass alongside Philippe Zdar. Their album Pansoul (1996) is considered the first full statement of French Touch — disco samples processed through house production into something simultaneously nostalgic and new. De Crécy\'s solo Super Discount series (1997 onward) extended this approach commercially. He is among the direct progenitors of the Parisian filtered house style that Daft Punk would take to a global audience.',
    releases: [
      { title: 'Pansoul — Motorbass (Source)', year: 1996 },
      { title: 'Super Discount (Source/Solid)', year: 1997 },
      { title: 'Super Discount 2 (Different)', year: 2004 },
    ]},

  { id:'ed_banger', label:'Ed Banger Records', type:'label', genre:'techhouse', era:2003, city:'Paris', country:'FR',
    desc:'Founded in Paris in 2003 by Pedro Winter (Busy P), previously Daft Punk\'s manager. Ed Banger\'s initial releases — Justice, Mr. Oizo, SebastiAn — defined a second wave of French electronic music characterised by compressed, distorted, arena-scaled sound, departing from the filtered disco warmth of French Touch into something harder. Justice\'s Cross (2007) became one of the defining electronic albums of the decade. The label remains active and continues to release from its Paris base.',
    releases: [
      { title: 'Trelex EP — Justice (Ed Banger)', year: 2003 },
      { title: '† (Cross) — Justice (Ed Banger)', year: 2007 },
      { title: '"Flat Beat" — Mr. Oizo (F Communications)', year: 1999 },
    ]},

  // ── New additions ─────────────────────────────────────────────────────────

  { id:'cocoon', label:'Cocoon Records', type:'label', genre:'techno', era:1999, city:'Frankfurt', country:'DE',
    desc:'Cocoon Records cannot be separated from the Amnesia residency that Sven Väth held for over two decades in Ibiza — the label extended that Monday-night sensibility onto vinyl. Broad in emotional range, from deep atmospheric house to hard industrial rhythms, it documented the annual Ibiza season through its compilation series with a consistency few club labels have matched. Richie Hawtin, Ricardo Villalobos, and Jacek Sienkiewicz all released within its orbit.',
    releases: [
      { title: 'Contact — Sven Väth (Cocoon)', year: 2000 },
    ]},

  { id:'bpitch', label:'BPitch Control', type:'label', genre:'techno', era:1999, city:'Berlin', country:'DE',
    desc:'BPitch Control occupied the feeling-oriented territory that Berghain\'s Ostgut Ton left open. Where Ostgut Ton documented the hard, functional end of the Berlin sound, BPitch — founded by Ellen Allien in 1999 — released Apparat\'s early records, Modeselektor\'s debut, Paul Kalkbrenner\'s first releases, and Allien\'s own albums. The combined output of the two labels in the 2000s is the fullest picture of what Berlin techno actually meant in that decade.',
    releases: [
      { title: 'Berlinette — Ellen Allien (BPitch)', year: 2003 },
      { title: 'Orchestra of Bubbles — Ellen Allien & Apparat (BPitch)', year: 2006 },
    ]},

  { id:'metalheadz', label:'Metalheadz', type:'label', genre:'experimental', era:1994, city:'London', country:'UK',
    desc:'Metalheadz was where drum and bass\'s ambition was most concentrated. Goldie founded it in London in 1994, at the moment when the music was separating from jungle — the tempo held but the sample-heavy aesthetic thinned, and the more architecturally serious producers moved toward jazz-inflected harmonics and extended compositional structures. Early releases by Goldie himself, Doc Scott, and Photek set a standard of rhythmic complexity and emotional range that the genre has not since exceeded. Timeless (1995) remains its most complete single statement.',
    releases: [
      { title: 'Timeless — Goldie (ffrr/London)', year: 1995 },
      { title: 'Form & Function (Metalheadz)', year: 1996 },
    ]},

  { id:'sven_vath', label:'Sven Väth', type:'artist', genre:'techno', era:1993, city:'Frankfurt', country:'DE',
    desc:'Sven Väth built Frankfurt into a rival pole to Berlin, co-founding Eye Q and Harthouse Records in 1992 and holding his Omen club residency at the centre of it. Then, in 1999, he launched Cocoon Records and the Amnesia residency in Ibiza that would run for over two decades and define what a summer techno event could be. His DJ sets — often six hours or longer — synthesise trance, techno, and deep house into a distinctly emotional style that has influenced a generation of European DJs.',
    releases: [
      { title: 'L\'Esperanza (Eye Q)', year: 1993 },
      { title: 'The Beauty and the Beast (Eye Q)', year: 1994 },
      { title: 'Contact (Cocoon)', year: 2000 },
    ]},

  { id:'sven_marquardt', label:'Sven Marquardt', type:'artist', genre:'techno', era:2004, city:'Berlin', country:'DE',
    desc:'Sven Marquardt grew up in East Berlin\'s punk and art underground and spent the 1980s photographing it. Since Berghain opened in 2004 he has been the face of its door — and the door is his most significant cultural contribution. An entrance that refuses celebrity logic and holds the club as a genuinely subcultural rather than promotional space. His autobiography Die Nacht ist Leben (2014) traces the line from GDR punk to that doorframe: a line that only Berlin could produce.',
    releases: [
      { title: 'Die Nacht ist Leben (autobiography)', year: 2014 },
    ]},

  { id:'ellen_allien', label:'Ellen Allien', type:'artist', genre:'techno', era:1999, city:'Berlin', country:'DE', bandcamp:'ellenallien', bandcamp_album:'55410409',
    desc:'Born in East Berlin in 1969, Ellen Allien founded BPitch Control in 1999 and spent the following decade making Berlin techno with a pop sensibility that never became commercial — hypnotic rhythms alongside melodic, emotional textures. Her collaborative album with Apparat, Orchestra of Bubbles (2006), expanded the emotional range of what Berlin electronics could encompass. Alongside Berghain\'s Ostgut Ton, BPitch was the other lens through which the world understood Berlin techno in the 2000s. She remains one of the city\'s most internationally active DJs.',
    releases: [
      { title: 'Berlinette (BPitch Control)', year: 2003 },
      { title: 'Thrills (BPitch Control)', year: 2005 },
      { title: 'Orchestra of Bubbles — w/ Apparat (BPitch Control)', year: 2006 },
    ]},

  { id:'a_guy_called_gerald', label:'A Guy Called Gerald', type:'artist', genre:'chicago', era:1988, city:'Manchester', country:'UK',
    desc:'"Voodoo Ray" (1988) was made on a cheap sampler with limited programming and became one of the most loved records of the rave era — a Haçienda staple that defined the Manchester acid house moment as completely as any single release could. What Gerald Simpson did next was equally significant: he moved into jungle and drum and bass, releasing Black Secret Technology (1995), a landmark of the form. His career traces the full arc from the Second Summer of Love to the mid-1990s underground, almost without a gap.',
    releases: [
      { title: '"Voodoo Ray" (Rham!)', year: 1988 },
      { title: 'Hot Lemonade (Columbia)', year: 1989 },
      { title: 'Black Secret Technology (Juice Box)', year: 1995 },
    ]},

  { id:'james_holden', label:'James Holden', type:'artist', genre:'melodic', era:2002, city:'London', country:'UK', bandcamp:'jamesholden', bandcamp_album:'1481898548',
    desc:'James Holden founded Border Community in 2002, but the label was always a vehicle for something more restless than its melodic techno reputation suggested. He has cited Aphex Twin\'s analogue synthesis work as a formative influence on his approach to texture — and that restlessness culminated in The Inheritors (2013), a landmark of analogue synthesis and polyrhythmic complexity that broke clean from his earlier trance-adjacent idiom. His later work with The Animal Spirits band dissolves genre distinctions entirely.',
    releases: [
      { title: 'The Idiots Are Winning (Border Community)', year: 2006 },
      { title: 'The Inheritors (Border Community)', year: 2013 },
      { title: 'Lifer — James Holden & The Animal Spirits (Border Community)', year: 2017 },
    ]},

  { id:'theo_parrish', label:'Theo Parrish', type:'artist', genre:'deep', era:1997, city:'Detroit', country:'US',
    desc:'Theo Parrish makes house music that doesn\'t accommodate easy listening. His productions — dense, raw, rhythmically complex — draw from jazz, soul, and Larry Heard\'s deep house lineage, which he has explicitly named as foundational to how he approaches feeling in music. Based in Ypsilanti, Michigan, he founded Sound Signature Records in 1997 and has since built one of the most uncompromising bodies of work in the music. His DJ sets are notoriously long: physically transformative experiences that require and reward committed attention.',
    releases: [
      { title: 'Ugly Edits (Sound Signature)', year: 1997 },
      { title: 'American Intelligence (Sound Signature)', year: 2003 },
      { title: 'Parallel Dimensions (Sound Signature)', year: 2014 },
    ]},

  { id:'stephan_bodzin', label:'Stephan Bodzin', type:'artist', genre:'melodic', era:2007, city:'Berlin', country:'DE',
    desc:'Stephan Bodzin builds everything on analogue synthesisers — no samples, no shortcuts — and the scale his productions achieve with those constraints is the point. His 2012 album Powers of Ten established him among the defining melodic techno producers of the decade. His live shows carry an additional argument: extended immersive sets built from hardware rather than files, which helped define a hybrid live performance format at a time when laptop performance was becoming the norm.',
    releases: [
      { title: 'Powers of Ten (Herzblut/Mote Evolver)', year: 2012 },
      { title: 'Sungam (Afterlife)', year: 2020 },
    ]},

  { id:'caribou', label:'Caribou', type:'artist', genre:'experimental', era:2003, city:'London', country:'UK', bandcamp:'caribouband', bandcamp_album:'2088310273',
    desc:'Dan Snaith holds a PhD in mathematics from Imperial College and records as Caribou. The two facts are not unrelated: his music has the patience of someone who knows how long precision takes. Across albums from the krautrock-influenced Manitoba records through the swimming, layered textures of Swim (2010) to the pop-adjacent Suddenly (2020), he has drawn freely from psychedelic rock, jazz, and electronic production without the restlessness of an artist chasing trends. Swim is widely considered a landmark of electronic music in the 2010s.',
    releases: [
      { title: 'Up in Flames (Manitoba/Caribou) (Domino)', year: 2003 },
      { title: 'Swim (Merge)', year: 2010 },
      { title: 'Our Love (Merge)', year: 2014 },
    ]},

  { id:'daphni', label:'Daphni', type:'artist', genre:'techno', era:2012, city:'London', country:'UK',
    desc:'Daphni is Dan Snaith stripped to function. Where Caribou layers and elaborates, Daphni removes: rolling drums, minimal structure, movement as the primary goal. The album Jiaolong (2012) on Merge compiled tracks from his DJ sets and revealed an entirely different range — the same production intelligence operating in a different emotional register. He has continued to release material on Haunt and Jiaolong, maintaining the two projects as genuinely distinct rather than as a brand exercise.',
    releases: [
      { title: 'Jiaolong (Merge)', year: 2012 },
      { title: 'JIAOLONG (repress + bonus) (Merge)', year: 2019 },
    ]},

  { id:'deetron', label:'Deetron', type:'artist', genre:'techno', era:2003, city:'Zurich', country:'CH',
    desc:'Something in Samuel Moser\'s productions resists the Germanic industrial template — the jazz-informed chord structures, the warmth that holds even at high tempos. His Fabric 72 mix (2013) is a sustained argument that techno can be emotionally generous rather than merely physical. Releasing on Music Man, Cocoon, and Kompakt across two decades, he has made a distinctly Swiss contribution to European underground techno: technically precise, but never cold.',
    releases: [
      { title: 'Communicate (Music Man)', year: 2009 },
      { title: 'Fabric 72 (Fabric)', year: 2013 },
    ]},

  { id:'illian_tape', label:'Illian Tape', type:'label', genre:'techno', era:2010, city:'Munich', country:'DE',
    desc:'Munich, not Berlin — that displacement matters. Illian Tape, run by the Zenker Brothers, drew from the deep, patient side of Detroit: Carl Craig and Drexciya rather than industrial wall-of-sound. The result was records of unusual textural richness for a small techno imprint. Skee Mask arrived in 2016; his Compro (2018) is the most complete statement of what the label sounds like when everything is working.',
    releases: [
      { title: 'Immersion — Zenker Brothers (Illian Tape)', year: 2016 },
      { title: 'Shades EP — Zenker Brothers (Illian Tape)', year: 2011 },
    ]},

  { id:'hivern_discs', label:'Hivern Discs', type:'label', genre:'deep', era:2008, city:'Barcelona', country:'ES',
    desc:'Hivern Discs built a distinctly Iberian sensibility into deep house — Balearic warmth filtered through post-punk melancholy and the emotional weight of the Chicago tradition. Founded in Barcelona around 2008 by John Talabot and Pional, it provided the base from which Talabot launched onto Permanent Vacation, Young Turks, and DFA. The name translates roughly as "winter discs," which captures something of the mood: this is house music for after the summer party is over.',
    releases: [
      { title: 'Families EP — John Talabot (Hivern Discs)', year: 2009 },
      { title: 'So Will Be Now — Pional (Hivern Discs)', year: 2012 },
    ]},

  { id:'john_talabot', label:'John Talabot', type:'artist', genre:'deep', era:2009, city:'Barcelona', country:'ES',
    desc:'∞ (Fin, 2012) on Permanent Vacation and Young Turks is the clearest statement of what John Talabot does: Balearic warmth and Chicago deep house solemnity folded together into something patient and nostalgically textured, drawing on the Larry Heard tradition without mimicking it. Emerging from the Hivern Discs circle in Barcelona, he became one of the defining voices of European deep house in the early 2010s — a reputation he has sustained through releases on DFA and his own imprint.',
    releases: [
      { title: 'Families EP (Hivern Discs)', year: 2009 },
      { title: '∞ (Fin) (Permanent Vacation / Young Turks)', year: 2012 },
    ]},

  { id:'jamie_xx', label:'Jamie xx', type:'artist', genre:'disco', era:2011, city:'London', country:'UK', bandcamp:'jamiexx', bandcamp_album:'150871303',
    desc:'Jamie Smith records as Jamie xx and is a member of The xx. What his solo work did — on In Colour (Young Turks, 2015) — was compress London\'s underground history into something pop-scaled: UK garage, house, and grime folded into tracks that felt simultaneously intimate and enormous. The album became one of the most critically celebrated British electronic records of the decade, making the case that club-adjacent music could be emotionally coherent pop. He has also produced for Rihanna and Gil Scott-Heron.',
    releases: [
      { title: 'In Colour (Young Turks)', year: 2015 },
      { title: '"Far Nearer" (Young Turks)', year: 2011 },
    ]},

  { id:'nicolas_jaar', label:'Nicolas Jaar', type:'artist', genre:'experimental', era:2011, city:'New York', country:'US', bandcamp:'nicolasjaar', bandcamp_album:'2134150780',
    desc:'Space Is Only Noise (2011) arrived when Nicolas Jaar was twenty. Released on Wolf + Lamb and his own Clown & Sunset label, the album — minimal, patient, drawing on dub, jazz, and ambient as freely as on house — established him immediately as one of the most artistically ambitious producers in electronic music. He has since moved into film and conceptual music contexts under various aliases, and Clown & Sunset continues to release material that refuses genre classification.',
    releases: [
      { title: 'Space Is Only Noise (Wolf + Lamb / Clown & Sunset)', year: 2011 },
      { title: 'Sirens (Other People)', year: 2016 },
    ]},

  { id:'melchior_productions', label:'Melchior Productions Ltd', type:'artist', genre:'minimal', era:2009, city:'Amsterdam', country:'NL',
    desc:'Melchior Sultana releases as Melchior Productions Ltd, primarily on Clone Records in Rotterdam, and his music makes no move toward spectacle. Minimal, functional, quietly precise — these are records built for the middle sections of long sets, not for peak moments. That anti-spectacularity is a philosophy in itself, one that sits squarely within the Amsterdam and Rotterdam tradition of music that serves the floor rather than the DJ\'s ego.',
    releases: [
      { title: 'Melchior Productions Vol. 1 (Clone)', year: 2009 },
    ]},

  { id:'kalahari_oyster_cult', label:'Kalahari Oyster Cult', type:'label', genre:'deep', era:2015, city:'Berlin', country:'DE',
    desc:'Where much of Berlin club culture looks inward, Kalahari Oyster Cult turns to face South African house, West African rhythms, and global club forms. Founded in the mid-2010s, it operates with a consistent mission: to make the African lineages of electronic music audible within a city that has too often overlooked them. The result connects Berlin to the global house network as it actually exists — not just the lineage that runs through Detroit.',
    releases: [
      { title: 'Kalahari Oyster Cult Vol. 1 (KOC)', year: 2015 },
    ]},

  // ── DETROIT — ADDITIONAL ──────────────────────────────────────────────────
  { id:'mike_banks', label:'Mike Banks', type:'artist', genre:'detroit', era:1991, city:'Detroit', country:'US',
    desc:'Robert Hood and Mike Banks are the core of Underground Resistance — Banks (known as "Agent X") as the organisational and sonic backbone. Where Derrick May and Kevin Saunderson built bridges toward European audiences, Banks kept Underground Resistance deliberately opaque, releasing records in plain sleeves, refusing interviews, and insisting on Detroit\'s autonomy. He produced the early UR catalogue alongside Hood, and the label\'s militant identity — one of the most sustained acts of artistic self-determination in electronic music — is largely his creation.',
    releases: [
      { title: 'Galaxy 2 Galaxy — Underground Resistance (UR)', year: 1993 },
      { title: 'Interstellar Fugitives — Underground Resistance (UR)', year: 1998 },
    ]},

  { id:'dj_rolando', label:'DJ Rolando', type:'artist', genre:'detroit', era:1999, city:'Detroit', country:'US',
    desc:'Rolando Rocha released "Jaguar" on Underground Resistance in 1999 — one of the most celebrated and widely bootlegged records in Detroit techno. The track\'s arpeggiated acid line and cinematic sweep made it an immediate classic, heard in every major European club within months of release. Like much UR output it was credited only to an alias (The Aztec Mystic) and appeared in an unmarked sleeve. Rolando subsequently released material on his own label and on labels outside the UR family, but Jaguar remains the defining statement.',
    releases: [
      { title: '"Jaguar" as Aztec Mystic (Underground Resistance)', year: 1999 },
      { title: '"Knights of the Jaguar" (remixes)', year: 2000 },
    ]},

  { id:'blake_baxter', label:'Blake Baxter', type:'artist', genre:'detroit', era:1987, city:'Detroit', country:'US',
    desc:'Blake Baxter was one of the earliest Detroit techno producers, releasing on Transmat (Derrick May\'s label) in the late 1980s. His records drew more explicitly on the sexual and physical energy of classic soul and funk than the more cerebral futurism of the Belleville Three — tracks like "When We Used to Play" (1987) carry a raw, insistent quality that distinguishes his work within the Detroit canon. He later released on Belgian label R&S, part of the wave of Detroit artists who found their primary audience in Europe.',
    releases: [
      { title: '"When We Used to Play" (Transmat)', year: 1987 },
      { title: '"Prince of Techno" (KMS)', year: 1989 },
    ]},

  { id:'santonio_echols', label:'Santonio Echols', type:'artist', genre:'detroit', era:1988, city:'Detroit', country:'US',
    desc:'Santonio Echols is one of the less documented figures of the early Detroit scene — a DJ and producer active in the formative years who represents the breadth of talent that existed beyond the Belleville Three circle. His productions appeared on early Detroit and Chicago imprints and he played the city\'s clubs throughout the late 1980s and into the 1990s. Like several Detroit contemporaries, his work was valued more readily by European DJs and collectors than by the city\'s mainstream at the time.',
    releases: [
      { title: '"You Used to Hold Me" (KMS)', year: 1988 },
    ]},

  // ── AMBIENT / EXPERIMENTAL — ADDITIONAL ───────────────────────────────────
  { id:'harold_budd', label:'Harold Budd', type:'artist', genre:'ambient', era:1978, city:'Los Angeles', country:'US',
    desc:'Harold Budd (1936–2020) was an American composer and pianist whose work from the late 1970s defined a quieter, more acoustically grounded form of ambient music. His collaborations with Brian Eno — The Plateaux of Mirror (1980) and The Pearl (1984), both on EG Records — are foundational ambient works. Budd\'s piano style, characterised by sustained tones, long reverb tails, and deliberate sparseness, influenced two generations of ambient composers including Stars of the Lid, Grouper, and Johann Johannsson.',
    releases: [
      { title: 'The Plateaux of Mirror (with Brian Eno, EG)', year: 1980 },
      { title: 'The Pearl (with Brian Eno, EG)', year: 1984 },
      { title: 'Lovely Thunder (EG)', year: 1986 },
    ]},

  { id:'william_basinski', label:'William Basinski', type:'artist', genre:'ambient', era:2002, city:'New York', country:'US', bandcamp:'williambasinski', bandcamp_album:'1686158765',
    desc:'William Basinski (born 1958, Houston, Texas; based in New York and Los Angeles) created The Disintegration Loops (2002–2003) by playing deteriorating magnetic tape and recording the decay in real time — documenting the physical dissolution of the medium. The series was completed on 11 September 2001; Basinski watched the World Trade Center collapse while finishing the final transfer, and the recordings became an accidental elegy. The Disintegration Loops are among the most emotionally and conceptually substantial works in recorded music of the 2000s.',
    releases: [
      { title: 'The Disintegration Loops I–IV (2062)', year: 2002 },
      { title: 'Melancholia (2062)', year: 2003 },
      { title: 'On Time Out of Time (Temporary Residence)', year: 2019 },
    ]},

  { id:'stars_of_the_lid', label:'Stars of the Lid', type:'artist', genre:'ambient', era:1995, city:'Austin', country:'US', bandcamp:'starsofthelid', bandcamp_album:'605498052',
    desc:'Brian McBride and Adam Wiltzie formed Stars of the Lid in Austin, Texas in 1992. Their music — primarily orchestral strings, processed guitars, and sustained tones — produces a kind of slow-motion grandeur that earned the description "symphonic ambient." And Their Refinement of the Decline (2007, Kranky) is the defining statement, a two-disc work of overwhelming scale and patience. Wiltzie has extended the same approach as A Winged Victory for the Sullen (with Dustin O\'Halloran). Their influence runs through neo-classical composition and post-rock as well as ambient.',
    releases: [
      { title: 'The Tired Sounds of Stars of the Lid (Kranky)', year: 2001 },
      { title: 'And Their Refinement of the Decline (Kranky)', year: 2007 },
    ]},

  { id:'tim_hecker', label:'Tim Hecker', type:'artist', genre:'ambient', era:2001, city:'Montreal', country:'CA', bandcamp:'timhecker', bandcamp_album:'568592522',
    desc:'Tim Hecker (born 1974, Vancouver) is among the most critically recognised ambient composers of his generation. Working primarily with synthesizers, organs, and digital processing, he builds music from dense, dissonant layers — harmonic clouds that shift slowly across long durations. Harmony in Ultraviolet (2006, Alien8) and Ravedeath, 1972 (2011, Kranky) are his most celebrated records; the latter, recorded in a Reykjavik church, brought organ and feedback processing into a new synthesis. Hecker consistently works at the edge of what \'ambient\' can mean, incorporating noise, distortion, and structural dissonance.',
    releases: [
      { title: 'Harmony in Ultraviolet (Alien8)', year: 2006 },
      { title: 'An Imaginary Country (Kranky)', year: 2009 },
      { title: 'Ravedeath, 1972 (Kranky)', year: 2011 },
      { title: 'Virgins (Kranky)', year: 2013 },
    ]},

  { id:'merzbow', label:'Merzbow', type:'artist', genre:'experimental', era:1980, city:'Tokyo', country:'JP', bandcamp:'merzbow', bandcamp_album:'130191376',
    desc:'Masami Akita (born 1956, Tokyo) has recorded as Merzbow since 1979, producing one of the largest and most uncompromising bodies of work in noise music. Named after Kurt Schwitters\' Merzbau installation, his recordings — often walls of processed feedback, circuit-bent electronics, and extreme volume — define the genre of harsh noise. He has released hundreds of records across every format. His influence on experimental electronic music is indirect but pervasive: the logic of noise as material (rather than as failure) runs through industrial, power electronics, and the harder fringes of ambient.',
    releases: [
      { title: 'Venereology (Release Entertainment)', year: 1994 },
      { title: '1930 (Extreme)', year: 2002 },
      { title: 'Takahe Collage (Bandcamp)', year: 2020 },
    ]},

  // ── CHICAGO — ADDITIONAL ─────────────────────────────────────────────────
  { id:'dj_rush', label:'DJ Rush', type:'artist', genre:'techno', era:1992, city:'Chicago', country:'US',
    desc:'DJ Rush (Melvin Mercer) is a Chicago-based DJ and producer who made his name in the hard techno territory — aggressive, fast, and functional. His label Muzik Included became a home for rolling, physical techno, and he built a European career based on marathon sets that valued endurance and physicality over melodic development. He is a key figure in the transmission of Chicago\'s harder electronic traditions to European techno audiences in the 1990s and 2000s.',
    releases: [
      { title: '"Get on Up" (Muzik Included)', year: 1996 },
      { title: '"Gotta Have It" (Muzik Included)', year: 1999 },
    ]},

  { id:'paul_johnson', label:'Paul Johnson', type:'artist', genre:'chicago', era:1992, city:'Chicago', country:'US',
    desc:'Paul Johnson is a Chicago house producer whose career spans the full history of the genre. His track "Get Get Down" (Trax Records, 1999) became one of the most recognisable Chicago house records internationally, used as a reference point for the sound worldwide. Johnson emerged from the same Trax Records environment as Larry Heard and DJ Pierre, and his productions maintain the stripped-back, groove-centred approach of deep Chicago house while carrying it into the late 1990s and beyond.',
    releases: [
      { title: '"Get Get Down" (Trax)', year: 1999 },
      { title: '"Do It Anyway" (Trax)', year: 1997 },
    ]},

  { id:'dj_sneak', label:'DJ Sneak', type:'artist', genre:'chicago', era:1994, city:'Chicago', country:'US',
    desc:'Carlos Sosa (born 1969, Puerto Rico; raised in Chicago) records as DJ Sneak. A resident at Chicago\'s Smartbar, he developed a funky, percussion-heavy approach to house music rooted in the Latin and Puerto Rican communities of Chicago\'s West Side. Releasing on Cajual Records (Derrick Carter and Mark Grant\'s label) and internationally on Nervous Records and Distance, he brought a distinctly Chicago funk sensibility to European house audiences in the late 1990s. He was among the DJs who helped define the "Chicago style" heard in Ibiza and UK clubs.',
    releases: [
      { title: '"You Can\'t Hide from Your Bud" (Cajual)', year: 1996 },
      { title: '"I Can\'t Make Up My Mind" (Sneak Trax)', year: 2000 },
    ]},

  // ── BIRMINGHAM — BRITISH MURDER BOYS ─────────────────────────────────────
  { id:'british_murder_boys', label:'British Murder Boys', type:'artist', genre:'techno', era:2001, city:'Birmingham', country:'UK',
    desc:'British Murder Boys is the collaborative project of Surgeon (Anthony Child) and Regis (Karl O\'Connor), formed in Birmingham in 2001. Their records on Downwards — brutal, confrontational, high-BPM techno drawing on EBM and power electronics — represent the outer limit of the Downwards aesthetic and remain foundational for European dark techno. The project ran intermittently until around 2006. Both members continued their solo work; the BMB catalogue holds a specific weight as a document of Birmingham\'s most extreme electronic tradition.',
    releases: [
      { title: 'Fucking Hell (Downwards)', year: 2001 },
      { title: 'I\'ve Only Just Begun (Downwards)', year: 2003 },
    ]},

  // ── GLASGOW — OPTIMO ──────────────────────────────────────────────────────
  { id:'optimo', label:'Optimo', type:'venue', genre:'experimental', era:1997, city:'Glasgow', country:'UK',
    desc:'Optimo (Espacio) was a Sunday night residency at the Sub Club, Glasgow, run by JD Twitch (Keith McIvor) and JG Wilkes from 1997 to 2010. It became one of the most influential club nights in Europe — not for a genre but for a refusal of genre. Any given Optimo set might move from industrial to no wave to dub techno to post-punk to cosmic disco without announcement. The night shaped a generation of DJs who understood eclecticism as a philosophy rather than a compromise. Twitch and Wilkes continue as Optimo Music, releasing records in the same spirit.',
    releases: [
      { title: 'Optimo Espacio Compilation (Optimo Music)', year: 2007 },
    ]},

  // ── DECONSTRUCTED CLUB ────────────────────────────────────────────────────
  { id:'non_worldwide', label:'NON Worldwide', type:'label', genre:'experimental', era:2015, city:'Various', country:'--',
    desc:'NON Worldwide is a collective and label founded in 2014–15 by Angel Ho, Chino Amobi, and Nkisi. Operating across Africa, the African diaspora, and the global south, it positioned itself explicitly against the whiteness and Eurocentrism of experimental electronic music. Its releases — noise, club music, industrial, and spoken word — were acts of political positioning as much as aesthetic statements. The collective dissolved around 2020, but its influence on the discourse around identity and club music remained formative.',
    releases: [
      { title: 'Anthology of Invisible Hands Vol. 1 (NON)', year: 2016 },
    ]},

  { id:'nkisi', label:'Nkisi', type:'artist', genre:'experimental', era:2016, city:'Brussels', country:'BE', bandcamp:'nkisi', bandcamp_album:'2426196005',
    desc:'Melika Ngombe Kolongo (born in the Democratic Republic of Congo; based in Brussels) records as Nkisi and co-founded NON Worldwide. Her music draws on industrial and noise traditions, ancestral Congolese spiritual practice, and the physicality of club music — producing something that is simultaneously confrontational and rooted. Her album 7 Directions (UIQ, 2019) is a defining work of deconstructed club, using polyrhythm, texture, and duration as political tools. She studies and teaches in Brussels, where her academic and artistic practices are inseparable.',
    releases: [
      { title: '7 Directions (UIQ)', year: 2019 },
      { title: 'Vormzeep (Entr\'acte)', year: 2016 },
    ]},

  { id:'lotic', label:'Lotic', type:'artist', genre:'experimental', era:2014, city:'Berlin', country:'US', bandcamp:'loticmusic', bandcamp_album:'2761587382',
    desc:'J\'Kerian Morgan (born in Houston, Texas; based in Berlin) records as Lotic. Beginning with dark, abrasive club edits released on Tri Angle and Janus, their work evolved into something more emotionally exposed — Power (Tri Angle, 2018) combined deconstructed club structures with operatic vocal processing in ways that felt genuinely new. Lotic was a resident at Janus, the Berlin club night that prefigured the deconstructed club movement. Their work draws explicitly on Black American music and queer experience, situated within experimental European club culture.',
    releases: [
      { title: 'Heterocetera (Janus)', year: 2015 },
      { title: 'Power (Tri Angle)', year: 2018 },
    ]},

  { id:'eartheater', label:'Eartheater', type:'artist', genre:'experimental', era:2015, city:'New York', country:'US', bandcamp:'eartheater', bandcamp_album:'730776323',
    desc:'Alexandra Drewchin records as Eartheater and releases on PAN (Berlin). Her music is difficult to locate in any existing genre: harp, voice, beats, and synthesis combine in ways that resist both the club and the concert hall. Trinity (PAN, 2019) was broadly acclaimed; Powders (PAN, 2023) extended the approach further into maximalist classical-electronic territory. She represents a current of experimental music that takes femininity seriously as a compositional force rather than as a subject position.',
    releases: [
      { title: 'RIP Chrysalis (PAN)', year: 2018 },
      { title: 'Trinity (PAN)', year: 2019 },
      { title: 'Powders (PAN)', year: 2023 },
    ]},

  // ── PC MUSIC / HYPERPOP ───────────────────────────────────────────────────
  { id:'sophie', label:'SOPHIE', type:'artist', genre:'experimental', era:2013, city:'London', country:'UK',
    desc:'Sophie Xeon (1986–2021) made some of the most sonically radical pop music of the 2010s — hyperreal, plasticky, brutally compressed, physically intense. Her early releases on Numbers and Transgressive Records (including "BIPP" and "Lemonade") established an aesthetic that influenced a generation of producers before she released a proper album. OIL OF EVERY PEARL\'S UN-INSIDES (2018, MSMSMSM) revealed the full scope of her vision, from noise to ballads. She passed away in Athens in January 2021. Her influence on contemporary production is ongoing and pervasive.',
    releases: [
      { title: '"BIPP" (Numbers)', year: 2013 },
      { title: '"Lemonade" / "Hard" (Numbers)', year: 2014 },
      { title: 'OIL OF EVERY PEARL\'S UN-INSIDES (MSMSMSM)', year: 2018 },
    ]},

  { id:'pc_music', label:'PC Music', type:'label', genre:'experimental', era:2013, city:'London', country:'UK', bandcamp:'pcmusic', bandcamp_album:'885919557',
    desc:'PC Music was founded in London in 2013 by A.G. Cook as a vehicle for his own music and that of collaborators including Hannah Diamond, QT, Danny L Harle, and Coucou Chloe. The label\'s aesthetic — hyper-compressed production, deliberately artificial vocals, references to advertising and consumer culture — was initially read as ironic but proved to be entirely sincere. It anticipated the hyperpop genre by several years and influenced the production style of Charli XCX, 100 gecs, and much of the experimental pop landscape of the late 2010s and 2020s.',
    releases: [
      { title: 'QT — "Hey QT" (PC Music)', year: 2014 },
      { title: 'Hannah Diamond — "Pink & Blue" (PC Music)', year: 2014 },
      { title: 'A.G. Cook — Apple (PC Music)', year: 2020 },
    ]},

  { id:'ag_cook', label:'A.G. Cook', type:'artist', genre:'experimental', era:2013, city:'London', country:'UK',
    desc:'Alexander Guy Cook founded PC Music in London in 2013 and rapidly became one of the most influential producers in experimental pop and club music — not through conventional channels but through an aesthetic of radical artificiality that proved contagious. His production work for Charli XCX (including the album Charli, 2019) brought the PC Music approach to a large audience. Apple (2020) and 7G (2020) are sprawling, maximalist works that map the full range of his sonic interests. He produced Charli XCX\'s Brat (2024), one of the most discussed albums of that year.',
    releases: [
      { title: 'Apple (PC Music)', year: 2020 },
      { title: '7G (PC Music)', year: 2020 },
    ]},

  // ── ARCA ─────────────────────────────────────────────────────────────────
  { id:'arca', label:'Arca', type:'artist', genre:'experimental', era:2012, city:'London', country:'VE', bandcamp:'arca1000000', bandcamp_album:'661734388',
    desc:'Alejandra Ghersi (born 1989, Caracas, Venezuela; based in London and Barcelona) records as Arca. Her early mixtapes (Stretch 1 and 2, &&&&&) established an aesthetic of fragmented, visceral club music; subsequent albums on Mute Records extended this into maximalist opera, noise, and drone. She produced for Kanye West (Yeezus, 2013), Björk (Vulnicura, 2015), and FKA twigs (LP1, 2014), bringing her sound design to records heard by millions. Her own albums — especially Mutant (2015), AΛA (2017), and the self-titled Arca (2017) — are among the most significant experimental records of their decade.',
    releases: [
      { title: 'Xen (Mute)', year: 2014 },
      { title: 'Mutant (Mute)', year: 2015 },
      { title: 'Arca (XL)', year: 2017 },
      { title: 'KiCk i (XL)', year: 2020 },
    ]},

  // ── CHICAGO — RON HARDY / PHUTURE ────────────────────────────────────────
  { id:'ron_hardy', label:'Ron Hardy', type:'artist', genre:'chicago', era:1982, city:'Chicago', country:'US',
    desc:'Ron Hardy (1958–1992) ran the Music Box on South Michigan Avenue from 1983 to 1987, alongside Frankie Knuckles at the Warehouse and Paradise Garage as one of the three defining DJ environments of early house music. His approach was rawer and more confrontational than Knuckles — he played at higher tempos, mixed in industrial and experimental records alongside house and disco, and built sets of sustained physical intensity. He was the first DJ to play Phuture\'s "Acid Tracks" (1985), playing an acetate of the track repeatedly before its official release on Trax in 1987. He passed away in 1992.',
    releases: [
      { title: 'Music Box (recorded sets, various)', year: 1984 },
    ]},


  { id:'phuture', label:'Phuture', type:'artist', genre:'chicago', era:1985, city:'Chicago', country:'US',
    desc:'Phuture — DJ Pierre (Nathaniel Pierre Jones), Spanky (Earl Smith Jr.), and Herb J (Herbert Jackson Jones) — created acid house with "Acid Tracks" in 1985–87. The track was built from a Roland TB-303 bass synthesizer that Pierre had bought cheaply and could not get to play a conventional bass line; the resulting squelching, sliding tones were unlike anything in house or anywhere else. Ron Hardy played acetates at the Music Box repeatedly; the track was released on Trax Records in 1987 and immediately reached the UK, where it became the sonic signature of the Summer of Love. Acid house as a genre derives entirely from this one instrument used this one way.',
    releases: [
      { title: '"Acid Tracks" (Trax)', year: 1987 },
      { title: '"Your Only Friend" (Trax)', year: 1989 },
    ]},

  { id:'movement_festival', label:'Movement Festival', type:'moment', genre:'detroit', era:2000, city:'Detroit', country:'US',
    desc:'Movement Electronic Music Festival has been held annually in Detroit\'s Hart Plaza on Memorial Day weekend since 2000 (originally as the Detroit Electronic Music Festival, organised by Paxahau from 2006 onward). It is the largest gathering of the global techno community held in the city where techno originated, and consistently books the Detroit originators — Juan Atkins, Derrick May, Kevin Saunderson, Underground Resistance — alongside international artists. The festival\'s location in Hart Plaza, on the Detroit River, is inseparable from its symbolic weight.',
    releases: []},

  // ── UK RAVE — DEEPER ─────────────────────────────────────────────────────
  { id:'orbital', label:'Orbital', type:'artist', genre:'experimental', era:1989, city:'London', country:'UK', bandcamp:'orbitalofficial', bandcamp_album:'890613488',
    desc:'Phil and Paul Hartnoll from Sevenoaks, Kent formed Orbital in 1989, taking their name from the M25 motorway that ringed London and along which early rave convoys travelled. Their self-titled debut single "Chime" (FFRR, 1990) was a rave floor staple; subsequent albums on Internal/FFRR — Orbital (Brown Album, 1993), Orbital 2 (Brown Album), Snivilisation (1994), In Sides (1996) — moved the music progressively further from club use toward introspective, long-form electronic composition. They played live with rack hardware and torchlight headgear at outdoor events and Glastonbury in ways that redefined what electronic live performance could mean in the early 1990s.',
    releases: [
      { title: '"Chime" (FFRR)', year: 1990 },
      { title: 'Orbital (FFRR)', year: 1991 },
      { title: 'In Sides (Internal)', year: 1996 },
    ]},

  { id:'leftfield', label:'Leftfield', type:'artist', genre:'experimental', era:1990, city:'London', country:'UK',
    desc:'Neil Barnes and Paul Daley formed Leftfield in London in 1989–90. Their debut single "Not Forgotten" (Outer Rhythm, 1990) was an immediate underground house classic. They established their own Hard Hands label and built an aesthetic that connected Chicago house bass to dub influence and live instrumentation — album Leftism (Hard Hands, 1995) was one of the most critically acclaimed electronic albums of the decade. "Open Up" (featuring John Lydon, 1993) demonstrated the breadth of their connections. They were a significant thread in the transformation of underground house into a broader electronic music culture in the UK.',
    releases: [
      { title: '"Not Forgotten" (Outer Rhythm)', year: 1990 },
      { title: 'Leftism (Hard Hands)', year: 1995 },
      { title: 'Rhythm and Stealth (Hard Hands)', year: 1999 },
    ]},

  { id:'carl_cox', label:'Carl Cox', type:'artist', genre:'techno', era:1988, city:'London', country:'UK',
    desc:'Carl Cox (born 1962, Oldham; raised in Carshalton, Surrey) was one of the defining DJs of the UK rave era and its aftermath. Known for three-deck mixing at the original Sunrise and Biology illegal parties in 1988–89, he became synonymous with the Orbit club in Morley, Yorkshire, and subsequently with the Underground and Space in Ibiza. His sets synthesised Chicago house and Detroit techno with the high-BPM energy of UK rave, and his ability to read and sustain a crowd across extended sets established standards for techno DJing that remain influential.',
    releases: [
      { title: 'F.A.C.T. (Worldwide DJ)', year: 1995 },
      { title: 'At the End of the Cliché (Intec)', year: 2005 },
    ]},

  // ── BRAZIL — BAILE FUNK ───────────────────────────────────────────────────
  { id:'baile_funk', label:'Baile Funk', type:'style', genre:'experimental', era:1989, city:'Rio de Janeiro', country:'BR',
    desc:'Baile funk (also Funk Carioca) emerged in the favelas and suburbs of Rio de Janeiro from the late 1980s onward, built on Miami bass and electro templates imported via informal tape networks. DJs at baile parties in the Zona Norte and Zona Oeste stripped the imported music to its rhythmic skeleton and added Portuguese vocals, producing something entirely local — hard, repetitive, bass-heavy, and explicitly tied to its communities. It is one of the clearest examples anywhere of a working-class community transforming imported electronic music into an autonomous local form. DJ Marlboro documented and spread it from the early 1990s.',
    releases: [
      { title: 'DJ Marlboro — Funk Brasil (RCA)', year: 1989 },
    ]},

  // ── BERLIN / LONDON — CONTEMPORARY ───────────────────────────────────────
  { id:'mobilegirl', label:'Mobilegirl', type:'artist', genre:'experimental', era:2016, city:'Berlin', country:'DE',
    desc:'Mobilegirl (based in Berlin) releases on Ilian Tape and operates at the intersection of ambient and club music — precise drum programming, melodic synthesis, and a sense of space that distinguishes her productions within the harder techno context of the Ilian Tape catalogue. Her work represents the expansion of the Munich label\'s sound toward more textural and atmospheric territory. She is one of the contemporary artists who connects the Ilian Tape aesthetic to the broader German electronic lineage.',
    releases: [
      { title: 'Swim (Ilian Tape)', year: 2019 },
    ]},

  { id:'perko', label:'Perko', type:'artist', genre:'experimental', era:2013, city:'London', country:'UK',
    desc:'Perko (based in London) releases on Lobster Theremin and is part of the London scene that connects warehouse techno, ambient, and broken electronics. His productions are textural and abstract, avoiding genre landmarks in favour of mood and density. As a DJ he moves between tempos and styles in ways that reflect the eclecticism of Lobster Theremin\'s catalogue — connecting UK dance music heritage to contemporary European club practices.',
    releases: [
      { title: 'Sonder Somatic (Lobster Theremin)', year: 2015 },
    ]},

  { id:'coucou_chloe', label:'Coucou Chloé', type:'artist', genre:'experimental', era:2015, city:'London', country:'UK',
    desc:'Chloé Raunet releases as Coucou Chloé on PC Music and has collaborated with A.G. Cook and SOPHIE. Her productions are maximalist club music — compressed, visceral, fluorescent — that take the PC Music aesthetic into harder, more physically extreme territory. Tracks like "Crump" (PC Music, 2017) were immediate touchstones for a generation of producers working in the space between club and experimental pop.',
    releases: [
      { title: '"Crump" (PC Music)', year: 2017 },
      { title: '"Anarchy" (PC Music)', year: 2019 },
    ]},

  // ── POST-CLUB AMBIENT ─────────────────────────────────────────────────────
  { id:'the_caretaker', label:'The Caretaker', type:'artist', genre:'ambient', era:1999, city:'Berlin', country:'UK', bandcamp:'thecaretaker', bandcamp_album:'2425378851',
    desc:'James Leyland Kirby records as The Caretaker, taking the name from The Shining. Using degraded and looped 1930s–40s ballroom recordings, he built a body of work around memory, decay, and loss — beginning with Selected Memories from the Haunted Ballroom (1999) and culminating in the six-part Everywhere at the End of Time (2016–2019), a 6.5-hour conceptual work documenting the progression of dementia through the progressive deterioration of the source material. It is one of the most discussed and emotionally affecting works in contemporary ambient music.',
    releases: [
      { title: 'Selected Memories from the Haunted Ballroom (V/VM Test)', year: 1999 },
      { title: 'Theoretically Pure Anterograde Amnesia (History Always Favours the Winners)', year: 2005 },
      { title: 'Everywhere at the End of Time (History Always Favours the Winners)', year: 2016 },
    ]},

  { id:'mount_kimbie', label:'Mount Kimbie', type:'artist', genre:'experimental', era:2009, city:'London', country:'UK', bandcamp:'mountkimbie', bandcamp_album:'4118666776',
    desc:'Dominic Maker and Kai Campos formed Mount Kimbie in London in 2008, releasing on Hotflush Recordings. Their debut Crooks & Lovers (2010) was a defining document of the post-dubstep moment — fragmented beats, treated vocals, bass that suggested rather than dominated, melodic material that arrived and dissolved. It influenced a wide range of producers working in the space between electronic music and song. Later albums on Warp moved toward more conventional song structures while retaining the textural sensibility.',
    releases: [
      { title: 'Crooks & Lovers (Hotflush)', year: 2010 },
      { title: 'Cold Spring Fault Less Youth (Warp)', year: 2013 },
    ]},

  // ── QUEER UNDERGROUND — T4T LUV NRG ─────────────────────────────────────
  { id:'octo_octa', label:'Octo Octa', type:'artist', genre:'deep', era:2012, city:'New York', country:'US', bandcamp:'octoocta', bandcamp_album:'481660896',
    desc:'Octo Octa (Maya Bouldry-Morrison) is a producer and DJ whose work draws on the Chicago and New York deep house traditions, filtered through an introspective and emotionally direct sensibility. Her albums Between Two Selves (Honey Soundsystem, 2017) and Resonant Body (T4T LUV NRG, 2018) are among the most personal and fully realised deep house records of the decade. She co-founded T4T LUV NRG with Eris Drew, a label centred on trans and queer dance culture. Her productions are rooted in the warmth of Larry Heard and the Paradise Garage tradition while remaining distinctly contemporary.',
    releases: [
      { title: 'Between Two Selves (Honey Soundsystem)', year: 2017 },
      { title: 'Resonant Body (T4T LUV NRG)', year: 2018 },
      { title: 'For All The Love — with Eris Drew (T4T LUV NRG)', year: 2022 },
    ]},

  { id:'eris_drew', label:'Eris Drew', type:'artist', genre:'deep', era:2015, city:'New York', country:'US', bandcamp:'erisdrew', bandcamp_album:'3018135629',
    desc:'Eris Drew is a DJ and producer whose sets and records draw together Chicago house, early rave, and ecstatic dance tradition. Deeply versed in Chicago house history, her DJ practice connects the emotional architecture of the Paradise Garage and the Music Box to contemporary club floors. She co-founded T4T LUV NRG with Octo Octa and released Quivering in Time (T4T LUV NRG, 2019), a debut album rooted in deep house and rave textures. Her sets are known for their emotional arc and historical range.',
    releases: [
      { title: 'Quivering in Time (T4T LUV NRG)', year: 2019 },
      { title: 'For All The Love — with Octo Octa (T4T LUV NRG)', year: 2022 },
    ]},

  { id:'t4t_luv_nrg', label:'T4T LUV NRG', type:'label', genre:'deep', era:2018, city:'New York', country:'US',
    desc:'T4T LUV NRG is a record label and collective founded by Octo Octa and Eris Drew in 2018, centred on trans and queer dance culture. The name stands for Trans 4 Trans Love Energy. The label has released albums and EPs by its founders alongside a growing roster from the queer underground, positioning itself within the deep house tradition while building an explicitly political and community-oriented identity.',
    releases: [
      { title: 'Resonant Body — Octo Octa', year: 2018 },
      { title: 'Quivering in Time — Eris Drew', year: 2019 },
      { title: 'For All The Love — Octo Octa & Eris Drew', year: 2022 },
    ]},

  // ── GQOM ─────────────────────────────────────────────────────────────────
  { id:'gqom', label:'Gqom', type:'style', genre:'experimental', era:2012, city:'Durban', country:'ZA',
    desc:'Gqom (Zulu for "to hit" or "drum") emerged from the townships of Durban, South Africa, around 2010–12. Built from cheap DAWs (primarily FL Studio), it is minimal, percussive, and dark — repetitive kick patterns, sparse synth stabs, long duration — the opposite of the polished production associated with commercial house. It spread through WhatsApp and informal sharing before reaching European labels and clubs. DJ Lag was central to its international visibility. Gqom is one of the clearest examples of a genuinely autonomous electronic tradition emerging outside the Euro-American axis.',
    releases: [
      { title: 'Various — Gqom Oh! The Sound of Durban Vol. 1 (Gqom Oh!)', year: 2016 },
      { title: 'DJ Lag — Ice Drop (Gqom Oh!)', year: 2017 },
    ]},

  // ── INNERVISIONS / BERLIN DEEP SCENE ─────────────────────────────────────
  { id:'diynamic', label:'Diynamic', type:'label', genre:'melodic', era:2005, city:'Hamburg', country:'DE',
    desc:'Diynamic was founded in 2005 by Solomun and Adriano Trolio in Hamburg. It grew from a local underground imprint into one of the defining labels of melodic, emotive house and techno. Known for a polished, emotionally direct sound bridging club functionality with melancholic warmth, Diynamic was central to the wider melodic techno movement and launched the careers of Stimming, HOSH, and others.',
    releases:[
      { title:'Various — Diynamic Music Vol. 1', year:2009 },
      { title:'Solomun — Home (Diynamic)', year:2012 },
    ]},

  { id:'solomun', label:'Solomun', type:'artist', genre:'melodic', era:2006, city:'Hamburg', country:'DE',
    desc:'Bojan Peričin, born in Bosnia and raised in Hamburg, co-founded Diynamic Music and became one of the most in-demand DJs of his generation. His sound blends deep, emotive house with melodic techno textures. His Ibiza residency +1 at Pacha helped define the late-2010s Ibiza sound. His earlier Diynamic releases show a rawer, more dancefloor-oriented sensibility rooted in Hamburg\'s underground.',
    releases:[
      { title:'Dance Baby (Diynamic)', year:2010 },
      { title:'+1 (Diynamic)', year:2014 },
    ]},

  { id:'stimming', label:'Stimming', type:'artist', genre:'melodic', era:2007, city:'Hamburg', country:'DE',
    desc:'Martin Stimming is a Hamburg-based producer whose music sits in the overlap between organic house, melodic techno, and ambient. A core Diynamic artist, he is known for intricate percussion and a fluid, emotionally warm sound. His album Alp is a pastoral peak of the Diynamic aesthetic — live instruments, breathing arrangements, and deep groove coexisting in long-form tracks.',
    releases:[
      { title:'Alp (Diynamic)', year:2014 },
      { title:'Matador (Diynamic)', year:2018 },
    ]},

  { id:'henrik_schwarz', label:'Henrik Schwarz', type:'artist', genre:'deep', era:2001, city:'Berlin', country:'DE',
    desc:'Henrik Schwarz is a Berlin-based producer and live performer equally at home in deep house, techno, classical arrangement, and experimental electronics. His Innervisions releases helped define the label\'s direction in its early years. He is also known for genre-defying collaborations including work with the Metropole Orkest and extended improvisational live sets.',
    releases:[
      { title:'Wonderful World (Innervisions)', year:2006 },
      { title:'Instruments (Innervisions)', year:2009 },
    ]},

  { id:'marcus_worgull', label:'Marcus Worgull', type:'artist', genre:'deep', era:2005, city:'Berlin', country:'DE',
    desc:'Marcus Worgull is a Berlin-based producer and DJ — one of the key artists on Innervisions alongside Dixon and Âme. His productions blend deep house warmth with techno momentum. His DJ sets are known for long, exploratory arcs and he has contributed significantly to the Innervisions sound through both original productions and remixes.',
    releases:[
      { title:'Babel (Innervisions)', year:2011 },
      { title:'In Between (Innervisions)', year:2018 },
    ]},

  { id:'paul_kalkbrenner', label:'Paul Kalkbrenner', type:'artist', genre:'techno', era:2001, city:'Berlin', country:'DE',
    desc:'Paul Kalkbrenner grew up in East Berlin and began releasing on BPitch Control in the early 2000s. His music is hard-edged Berlin techno with melodic elements. His breakthrough came with the film Berlin Calling (2008), in which he starred and provided the soundtrack — making him one of the few electronic artists to cross into mainstream cultural visibility through cinema. Sky and Sand became a European hit.',
    releases:[
      { title:'Berlin Calling OST (BPitch Control)', year:2008 },
      { title:'Icke Wieder (BPitch Control)', year:2011 },
    ]},

  { id:'modeselektor', label:'Modeselektor', type:'artist', genre:'experimental', era:2002, city:'Berlin', country:'DE',
    desc:'Modeselektor is the Berlin duo of Gernot Bronsert and Sebastian Szary. Their music fuses techno, hip-hop, dubstep, IDM, and bass music into a high-energy hybrid sound. Long associated with BPitch Control and later their own Monkeytown label, they are one half of Moderat — their celebrated collaboration with Apparat — and are known for one of the most physically intense live shows in Berlin electronic music.',
    releases:[
      { title:'Hello Mom! (BPitch Control)', year:2005 },
      { title:'Happy Birthday! (BPitch Control)', year:2007 },
    ]},

  { id:'fjaak', label:'FJAAK', type:'artist', genre:'techno', era:2012, city:'Berlin', country:'DE', bandcamp:'fjaak', bandcamp_album:'1074359548',
    desc:'FJAAK is the Berlin duo of Felix Wagner and Aaron Röbig, who grew up together in Spandau and began making music as teenagers. Their productions are built entirely on analogue equipment and span driving warehouse techno, slower textural work, and influences from UK garage and breakbeat. They released on Klasse Recordings before signing to Modeselektor\'s 50 Weapons imprint in 2014, then moving to Monkeytown. In 2019 they founded their own SPANDAU20 label.',
    releases:[
      { title:'Remember Me (Klasse Recordings)', year:2013 },
      { title:'FJAAK (Monkeytown)', year:2017 },
    ]},

  { id:'apparat', label:'Apparat', type:'artist', genre:'experimental', era:2001, city:'Berlin', country:'DE',
    desc:'Sascha Ring produces as Apparat, making electronic music between post-rock, ambient, and techno. His albums on Shitkatapult and Mute Records blended live instrumentation with dense electronic processing and atmospheric melancholy. He is one half of Moderat alongside Modeselektor — a project that generated three albums reaching audiences well beyond club culture. His solo work increasingly explores orchestral and cinematic directions.',
    releases:[
      { title:'Walls (Mute)', year:2009 },
      { title:'The Devil\'s Walk (Mute)', year:2011 },
    ]},

  { id:'recondite', label:'Recondite', type:'artist', genre:'ambient', era:2008, city:'Munich', country:'DE',
    desc:'Lorenz Brunner produces as Recondite, making dub techno and ambient music of unusual harmonic depth. His work on Innervisions and Hotflush Recordings is defined by long, breathable tracks built from decaying chords, muffled percussion, and a muted tonal palette — the quieter, more introverted face of the Innervisions sound.',
    releases:[
      { title:'Hinterland (Innervisions)', year:2013 },
      { title:'Pulsing (Hotflush)', year:2015 },
    ]},

  { id:'kobosil', label:'Kobosil', type:'artist', genre:'techno', era:2012, city:'Berlin', country:'DE',
    desc:'Kobosil is a key figure of the post-Berghain Berlin techno generation. His releases on Ostgut Ton have pushed the label\'s sound in a harder, more industrial direction — pounding kick drums, metallic percussion, and a confrontational energy. His live sets at Berghain are known for their physicality and resistance to easy melodic resolution.',
    releases:[
      { title:'RB1 (Ostgut Ton)', year:2015 },
      { title:'M (Ostgut Ton)', year:2019 },
    ]},

  { id:'get_physical', label:'Get Physical Music', type:'label', genre:'minimal', era:2002, city:'Berlin', country:'DE',
    desc:'Get Physical was founded in Berlin in 2002 by M.A.N.D.Y. and DJ T. with Booka Shade as an early central figure. It occupied the space between the deep minimal sound of Kompakt and Perlon and a warmer, groovier house aesthetic. Its releases helped define the Berlin sound of the mid-2000s and the Body Language compilation series became an influential document of the era.',
    releases:[
      { title:'Various — Body Language Vol. 1 (Get Physical)', year:2004 },
    ]},

  { id:'watergate', label:'Watergate', type:'venue', genre:'minimal', era:2002, city:'Berlin', country:'DE',
    desc:'Watergate opened in 2002 on the banks of the Spree in Kreuzberg. Its two rooms — one facing the river through floor-to-ceiling glass — and careful booking made it one of the essential Berlin clubs outside Berghain. A stronghold of house, minimal, and deep techno, it was central to the Innervisions aesthetic and regularly hosted Dixon, Âme, and the wider Innervisions roster.',
    },

  // ── UK ADDITIONS ─────────────────────────────────────────────────────────
  { id:'joy_orbison', label:'Joy Orbison', type:'artist', genre:'deep', era:2009, city:'London', country:'UK',
    desc:'Peter O\'Grady records as Joy Orbison. His 2009 debut Hyph Mngo on Hotflush was one of the most important UK club records of the late 2000s — a hybrid of dubstep space, UK garage rhythm, and deep house warmth that pointed toward what would become the post-dubstep sound. He has released on Hessle Audio and his own Doldrums imprint, and records in collaboration with Will Bankhead as Boddika.',
    releases:[
      { title:'Hyph Mngo (Hotflush)', year:2009 },
      { title:'Still Slipping Vol. 1 (XL)', year:2021 },
    ]},

  { id:'pearson_sound', label:'Pearson Sound', type:'artist', genre:'deep', era:2008, city:'London', country:'UK',
    desc:'David Kennedy began releasing as Ramadanman in 2008, quickly becoming a central figure of the UK bass and post-dubstep scene through Hessle Audio. He later shifted to the name Pearson Sound, releasing harder, more techno-adjacent material while maintaining the percussive complexity of his earlier work. A member of the Hessle Audio trio with Ben UFO and Pangaea.',
    releases:[
      { title:'Pearson Sound (Hessle Audio)', year:2012 },
      { title:'Alien Mode (Hessle Audio)', year:2018 },
    ]},

  { id:'jackmaster', label:'Jackmaster', type:'artist', genre:'house', era:2007, city:'Glasgow', country:'UK',
    desc:'Jack Revill is one of Glasgow\'s most celebrated DJs and co-founder of Numbers. His DJ sets fuse house, techno, electro, and bass music in ways that reflect Glasgow\'s unusually eclectic dance culture. Through Numbers he has championed music from Rustie, Girl Unit, and Actress, helping define a distinctly British club music that owes as much to Chicago house as to grime.',
    releases:[
      { title:'Live at Robert Johnson Vol. 14 (Playhouse)', year:2012 },
    ]},

  { id:'numbers', label:'Numbers', type:'label', genre:'experimental', era:2006, city:'Glasgow', country:'UK',
    desc:'Numbers is a Glasgow label co-founded by Jackmaster and Spencer Grady. It occupies a unique position in UK club music — releasing music from house and techno to grime and experimental bass, unified by a design sensibility and Glasgow\'s hybrid, all-inclusive club culture. Key releases from Rustie, Girl Unit, Actress, and S-Type made it one of the most important UK labels of the 2010s.',
    releases:[
      { title:'Rustie — Glass Swords (Numbers)', year:2011 },
    ]},

  { id:'plaid', label:'Plaid', type:'artist', genre:'experimental', era:1991, city:'London', country:'UK',
    desc:'Andy Turner and Ed Handley formed Plaid in London, initially as part of the Black Dog Productions collective. Their music on Warp Records is among the most harmonically complex in IDM — detailed, melodic, with an almost narrative quality. Albums like Not for Threes and Spokes represent peak-period Warp at its most compositionally sophisticated.',
    releases:[
      { title:'Not for Threes (Warp)', year:1997 },
      { title:'Spokes (Warp)', year:2003 },
    ]},

  { id:'nightmares_on_wax', label:'Nightmares on Wax', type:'artist', genre:'deep', era:1989, city:'Leeds', country:'UK',
    desc:'George Evelyn records as Nightmares on Wax from Leeds. His music sits in the overlap between hip-hop beats, soul samples, and deep house atmosphere — warm, unhurried, and rooted in West Yorkshire sound systems and record shops. Smokers Delight (1995) defines a strain of blissed-out sample-based house that has remained influential across two generations.',
    releases:[
      { title:'A Word of Science (Warp)', year:1992 },
      { title:'Smokers Delight (Warp)', year:1995 },
    ]},

  { id:'skepta', label:'Skepta', type:'artist', genre:'grime', era:2003, city:'London', country:'UK',
    desc:'Joseph Adenuga Jr., known as Skepta, is from Tottenham and is one of the defining figures of grime. After years of mixtapes and Boy Better Know imprint releases, Konnichiwa (2016) brought him mainstream recognition and the Mercury Prize. His production is spare and confrontational — flat 8-bar structures, clashing synths, and a delivery that emphasises rhythm over melody.',
    releases:[
      { title:'Doin\' It Again (BBK)', year:2009 },
      { title:'Konnichiwa (Boy Better Know)', year:2016 },
    ]},

  { id:'dizzee_rascal', label:'Dizzee Rascal', type:'artist', genre:'grime', era:2003, city:'London', country:'UK',
    desc:'Dylan Mills, born in Bow, East London, released Boy in da Corner in 2003 at age 18 — winning the Mercury Prize and defining what grime could be at its most raw. Produced on Fruity Loops, the album\'s claustrophobic sonics and hyper-speed lyrical delivery were unlike anything in British music. Dizzee bridged grime\'s origins in pirate radio with wider pop success throughout the 2000s.',
    releases:[
      { title:'Boy in da Corner (XL)', year:2003 },
      { title:'Showtime (XL)', year:2004 },
    ]},

  { id:'ninja_tune', label:'Ninja Tune', type:'label', genre:'experimental', era:1990, city:'London', country:'UK',
    desc:'Ninja Tune was founded in London in 1990 by Coldcut (Matt Black and Jonathan More) as an alternative to major label structures. It became one of the most important British independents, releasing music from Bonobo, Amon Tobin, Roots Manuva, Cinematic Orchestra, and many others. Ninja Tune\'s aesthetic sits between electronic, hip-hop, and jazz — consistently rooted in rhythm and sample culture.',
    releases:[
      { title:'Various — Xen Cuts (Ninja Tune)', year:2001 },
    ]},

  { id:'mumdance', label:'Mumdance', type:'artist', genre:'experimental', era:2010, city:'London', country:'UK',
    desc:'Jack Adams records as Mumdance and has been one of the most adventurous figures in UK club music. Beginning in grime-adjacent territory, he moved toward a harder sound combining industrial textures, footwork rhythms, and techno structures. His Fabriclive mix and releases on Different Circles (with Logos) helped define a strain of UK bass music with global reach.',
    releases:[
      { title:'Take Time (Tectonic)', year:2013 },
      { title:'Fabric 98 (Fabric)', year:2018 },
    ]},

  // ── ITALIAN SCENE ────────────────────────────────────────────────────────
  { id:'giorgio_moroder', label:'Giorgio Moroder', type:'artist', genre:'disco', era:1969, city:'Munich', country:'IT',
    desc:'Giorgio Moroder was born in South Tyrol and based himself in Munich from the late 1960s. He became the architect of electronic dance music as we know it. His productions for Donna Summer — especially I Feel Love (1977) — were the first globally significant dance tracks built entirely from synthesizers and drum machines. The influence is incalculable: I Feel Love alone pointed the way toward house, techno, electro, and every subsequent form of synthesizer-based dance music.',
    releases:[
      { title:'Donna Summer — I Feel Love (Casablanca)', year:1977 },
      { title:'From Here to Eternity (Casablanca)', year:1977 },
    ]},

  { id:'daniele_baldelli', label:'Daniele Baldelli', type:'artist', genre:'disco', era:1977, city:'Brescia', country:'IT',
    desc:'Daniele Baldelli was a resident DJ at Cosmic in Lazise from 1979 to 1984, where he pioneered a style known as Cosmic or Afro — blending African rhythms, electro, synth pop, and early electronic music at unusually slow tempos. This approach prefigured house music and ambient techno. The Cosmic scene he helped create was one of the most distinctive European dance cultures of the early 1980s, largely unknown internationally until its reappraisal decades later.',
    releases:[
      { title:'Cosmic — The Original Cosmic DJ (Irma)', year:2001 },
    ]},

  { id:'cosmic_venue', label:'Cosmic', type:'venue', genre:'disco', era:1979, city:'Lazise', country:'IT',
    desc:'Cosmic was an open-air venue in Lazise on the shore of Lake Garda, active from 1979 to 1984. Under the residency of Daniele Baldelli and Don Luca, it became the epicentre of the Afro/Cosmic sound — a slow, psychedelic DJing style blending African percussion, electronic music, and space-age synth records. The sound anticipated both ambient techno and the slower forms of house, and Cosmic remains a touchstone of alternative Italian club history.',
    },

  { id:'marco_carola', label:'Marco Carola', type:'artist', genre:'techno', era:1995, city:'Naples', country:'IT',
    desc:'Marco Carola began his career in the Naples underground and became one of the most technically precise techno DJs of his generation. His releases on Music Man Records and Drumcode helped define hard European techno of the late 1990s. Later associated with Villalobos and the Perlon minimal scene, he eventually returned to harder techno through his long-running Ibiza party Music On.',
    releases:[
      { title:'Play It Loud (Music Man)', year:1998 },
      { title:'Sola (Minus)', year:2005 },
    ]},

  { id:'joseph_capriati', label:'Joseph Capriati', type:'artist', genre:'techno', era:2007, city:'Naples', country:'IT',
    desc:'Joseph Capriati emerged from the Naples underground as a teenager and rose rapidly into the front rank of European techno. His releases on Drumcode and his own Redimension label are high-energy and densely percussive, rooted in a Neapolitan tradition of intense, physically aggressive electronic music. His marathon sets at Fabric and DC10 Ibiza have built a devoted international following.',
    releases:[
      { title:'Heartbeat (Drumcode)', year:2012 },
      { title:'Metamorphosis (Redimension)', year:2019 },
    ]},

  { id:'agents_of_time', label:'Agents of Time', type:'artist', genre:'melodic', era:2015, city:'Rome', country:'IT',
    desc:'Agents of Time are a Rome-based duo who emerged through the Afterlife label. Their music sits in the melodic techno register established by Tale of Us — long-form, atmospheric, emotionally elevated — but with a notably darker and more cinematic quality. Their appearances at Fabric and major European festivals have made them among the most prominent Italian electronic exports of the 2020s.',
    releases:[
      { title:'Agents of Time (Afterlife)', year:2018 },
      { title:'The Fable (Afterlife)', year:2021 },
    ]},

  { id:'anyma', label:'Anyma', type:'artist', genre:'melodic', era:2020, city:'Milan', country:'IT',
    desc:'Anyma is the solo project of Matteo Milleri, one half of Tale of Us. Where Tale of Us operates as a DJ-led project, Anyma explores the boundary between melodic techno, ambient, and audiovisual live performance. His debut release Genesys on Afterlife quickly became one of the label\'s most streamed records, and his live show — a sophisticated AV production — embodies the theatrical maximalism of the Afterlife aesthetic.',
    releases:[
      { title:'Genesys (Afterlife)', year:2022 },
      { title:'Eternity (Afterlife)', year:2023 },
    ]},

  { id:'black_loops', label:'Black Loops', type:'artist', genre:'deep', era:2015, city:'Arezzo', country:'IT', bandcamp:'blackloops', bandcamp_album:'2762269107',
    desc:'Riccardo Paffetti records as Black Loops and is based in Italy. His productions are rooted in deep house and the 1990s UK and New York house traditions, combining live drums, analogue synthesizers, and sample-based layering. He was named Traxsource #1 Deep House Artist of 2017 and has released on Toy Tonics, Freerange, Classic, and Shall Not Fade.',
    releases:[
      { title:'Early EPs (Toy Tonics)', year:2016 },
      { title:'Always Moving (Freerange)', year:2025 },
    ]},

  { id:'enrico_sangiuliano', label:'Enrico Sangiuliano', type:'artist', genre:'techno', era:2010, city:'Turin', country:'IT',
    desc:'Enrico Sangiuliano is a Turin-based producer and DJ who has become one of Italy\'s most internationally recognised techno artists. His releases on Drumcode, Hotflush, and his own NYX imprint blend driving techno with hypnotic, evolving arrangements. He represents a harder-edged strain of Italian techno drawing on the country\'s deep rave history while engaging with contemporary club aesthetics.',
    releases:[
      { title:'Biomorph (Drumcode)', year:2018 },
      { title:'Physical Moments (NYX)', year:2020 },
    ]},

  { id:'tenax', label:'Tenax', type:'venue', genre:'techno', era:1981, city:'Florence', country:'IT',
    desc:'Tenax is a Florence club running since 1981, making it one of the longest-standing techno and electronic music venues in Italy. Passing through disco, new wave, and eventually techno, it became internationally known from the 1990s as a destination for serious electronic music. A living link in the chain connecting the Italian tradition — from Cosmic through Italo Disco — to contemporary club culture.',
    },

  // ── DETROIT ADDITIONS ────────────────────────────────────────────────────
  { id:'omar_s', label:'Omar S', type:'artist', genre:'detroit', era:2004, city:'Detroit', country:'US',
    desc:'Alexander Omar Smith records as Omar S on his own FXHE Records. His music is raw, deliberately unpolished Detroit house and techno — drum machines recorded hot, chords riding the red, arrangements that feel live and human rather than engineered. He represents a strand of Detroit music that rejects European sophistication in favour of directness, funk, and a commitment to the physical dimensions of dance.',
    releases:[
      { title:'Thank U 4 Letting Me Be Myself (FXHE)', year:2009 },
      { title:'It Can Be Done But Only I Can Do It (FXHE)', year:2011 },
    ]},

  { id:'fxhe', label:'FXHE Records', type:'label', genre:'detroit', era:2004, city:'Detroit', country:'US',
    desc:'FXHE Records (For Exact Information) is Omar S\'s personal Detroit label operating entirely outside the conventional music industry — irregular schedules, limited pressings, deliberately lo-fi presentation. FXHE releases are valued precisely for their resistance to polish and marketing: raw Detroit house and techno issued with handwritten labels and unconventional catalogue logic.',
    },

  { id:'kyle_hall', label:'Kyle Hall', type:'artist', genre:'detroit', era:2009, city:'Detroit', country:'US',
    desc:'Kyle Hall began releasing music as a teenager in Detroit, making him one of the youngest heirs to the city\'s electronic tradition. His output on his Wild Oats label blends house, techno, ghetto tech, and footwork influences with a Detroit emotional sensibility. Championed by Omar S and the FXHE circle, his early releases were some of the most exciting Detroit music of the 2010s.',
    releases:[
      { title:'The Boat Party EP (Wild Oats)', year:2011 },
      { title:'From the Ground Up (Wild Oats)', year:2015 },
    ]},

  // ── SWEDISH ADDITIONS ────────────────────────────────────────────────────
  { id:'drumcode', label:'Drumcode', type:'label', genre:'techno', era:1996, city:'Stockholm', country:'SE',
    desc:'Drumcode was founded by Adam Beyer in Stockholm in 1996 and grew into one of the most successful techno labels internationally. Its sound is polished, high-energy driving techno built for large rooms. Artists including Enrico Sangiuliano, Joseph Capriati, Alan Fitzpatrick, and Bart Skils have released on the label. Drumcode\'s touring showcases and weekly radio show give it a reach extending well beyond the underground.',
    },

  { id:'adam_beyer', label:'Adam Beyer', type:'artist', genre:'techno', era:1994, city:'Stockholm', country:'SE',
    desc:'Adam Beyer is the Stockholm-born founder of Drumcode Records. Beginning in the mid-1990s Swedish rave scene, he developed a precise, driving techno sound that became the Drumcode template — functional, high-energy, finely engineered. He has been one of the most consistent touring techno DJs for three decades, and Drumcode has grown under his stewardship into a global brand with a roster of international artists.',
    releases:[
      { title:'Drumcode A Sides Vol. 1 (Drumcode)', year:2009 },
    ]},

  // ── NEW STYLES ────────────────────────────────────────────────────────────
  { id:'cosmic_disco_style', label:'Cosmic / Afro', type:'style', genre:'disco', era:1979, city:'Lazise', country:'IT',
    desc:'The Cosmic or Afro style emerged from the Cosmic club in Lazise and similar Italian venues in the late 1970s and early 1980s. DJs like Daniele Baldelli played African percussion records, early electro, and obscure synth music at slower tempos, creating a hallucinatory, hypnotic effect unlike dominant disco. Its influence can be heard in balearic music, ambient house, and the more contemplative strands of house and techno.',
    releases:[
      { title:'Various — I Love Cosmic (Irma)', year:2002 },
    ]},

  { id:'ebm', label:'EBM', type:'style', genre:'experimental', era:1981, city:'Brussels', country:'BE',
    desc:'Electronic Body Music — the term coined by Belgian band Front 242 — describes harsh, rhythmically aggressive electronic music fusing industrial noise with dancefloor functionality. Originating in Belgium and Germany in the early 1980s through Front 242, Nitzer Ebb, and DAF, EBM established the template for industrial dance music and many strains of hard techno. Its influence runs through Downwards, Surgeon, and the harder end of contemporary techno.',
    releases:[
      { title:'Front 242 — Geography (Wax Trax!)', year:1982 },
      { title:'Nitzer Ebb — That Total Age (Mute)', year:1987 },
    ]},

  { id:'melodic_techno', label:'Melodic Techno', type:'style', genre:'melodic', era:2012, city:'Berlin', country:'DE',
    desc:'Melodic techno emerged as a widely recognised descriptor in the 2010s for electronic music combining techno\'s driving rhythms with extended harmonic development, emotional arcs, and a cinematic quality. Associated with Afterlife, Innervisions, and Diynamic, it draws roots from progressive house and trance as much as techno. Whether genre or marketing category, it represents one of the dominant sounds of 2010s–2020s club culture.',
    releases:[
      { title:'Tale of Us — Endless (Afterlife)', year:2017 },
    ]},

  { id:'hard_techno', label:'Hard Techno', type:'style', genre:'techno', era:2018, city:'Berlin', country:'DE',
    desc:'Hard techno re-emerged as a dominant club sound in Berlin from around 2018, led by artists like SPFDJ, KI/KI, and Alignment. Drawing on EBM, industrial, and the legacy of Surgeon and Downwards, it emphasises high tempos (135–145 BPM), distorted kicks, and a confrontational physical energy. Its rise was accelerated by social media and became one of the defining sounds of post-pandemic club culture globally.',
    releases:[
      { title:'SPFDJ — Crush EP', year:2020 },
    ]},

  { id:'footwork', label:'Footwork', type:'style', genre:'chicago', era:2010, city:'Chicago', country:'US',
    desc:'Footwork — also called Juke — emerged from the South Side of Chicago in the 2000s, growing out of ghetto house and African-American dance battle culture. Characterised by hyperfast tempos (155–165 BPM), chopped vocal samples, and rhythmic complexity designed for the footwork dance form, it reached international audiences largely through Hyperdub\'s releases of DJ Rashad and DJ Spinn. Rashad\'s Double Cup (2013) is the landmark document of the style.',
    releases:[
      { title:'DJ Rashad — Double Cup (Hyperdub)', year:2013 },
      { title:'Various — Bangs & Works Vol. 1 (Planet Mu)', year:2010 },
    ]},

  // ── NEW MOMENTS ──────────────────────────────────────────────────────────
  { id:'mayday_rave', label:'Mayday', type:'moment', genre:'techno', era:1991, city:'Dortmund', country:'DE',
    desc:'Mayday is Germany\'s longest-running electronic music event, first held on 1 May 1991 in Dortmund. Founded by Westbam and others, it was one of the first large-scale raves in unified Germany — bringing together Detroit and Chicago electronic music with German industrial and new beat in a post-Wall euphoria. It grew to fill arenas throughout the 1990s and remains a touchstone of German rave history.',
    releases:[
      { title:'Various — Mayday — The History (Low Spirit)', year:1998 },
    ]},

  { id:'ade', label:'Amsterdam Dance Event', type:'moment', genre:'house', era:1996, city:'Amsterdam', country:'NL',
    desc:'The Amsterdam Dance Event (ADE) was established in 1996 as an annual conference and club festival every October. It grew into the world\'s largest club music conference, bringing together DJs, producers, and label owners from across the globe. ADE\'s scale and centrality to the global dance industry gives it a different character from artist-led festivals — simultaneously networking event and cultural showcase.',
    },

  { id:'dekmantel_fest', label:'Dekmantel Festival', type:'moment', genre:'house', era:2012, city:'Amsterdam', country:'NL',
    desc:'Dekmantel Festival began in Amsterdam in 2012 as an extension of the Dekmantel record label. It grew rapidly into one of Europe\'s most respected electronic music festivals, known for a programme that connects Detroit techno, Chicago house, experimental electronics, and new club music without compromise. Held in the Amsterdamse Bos each August, it has become a benchmark for curatorial quality in festival programming.',
    },

  // ── GERMANY — KOSMISCHE / BERLIN SCHOOL ─────────────────────────────────
  { id:'tangerine_dream', label:'Tangerine Dream', type:'artist', genre:'experimental', era:1967, city:'Berlin', country:'DE',
    desc:'Tangerine Dream were founded in West Berlin in 1967 by Edgar Froese and became one of the defining groups of Kosmische Musik and the Berlin School of electronic music. Their synthesiser-based albums of the mid-1970s — Phaedra, Rubycon, Stratosfear — built extended, improvised soundscapes that rejected song structure entirely in favour of textural development and slow transformation. These records were foundational for ambient music, film scores, and the atmospheric currents within Berlin techno. The group toured extensively and recorded prolifically until Froese\'s death in 2015.',
    releases: [
      { title: 'Phaedra (Virgin)', year: 1974 },
      { title: 'Rubycon (Virgin)', year: 1975 },
      { title: 'Stratosfear (Virgin)', year: 1976 },
      { title: 'Ricochet (live, Virgin)', year: 1975 },
    ]},

  { id:'cluster', label:'Cluster', type:'artist', genre:'experimental', era:1969, city:'Düsseldorf', country:'DE',
    desc:'Cluster — Hans-Joachim Roedelius and Dieter Moebius — formed in the late 1960s and became one of the foundational groups of Kosmische Musik. Their approach was noisier and more organic than Kraftwerk, built on improvisation and unconventional timbres. Collaborations with Brian Eno in 1977 and 1978 (Cluster & Eno; After the Heat, with Roedelius) were seminal for ambient music — Eno credited the partnership as a direct influence on his Ambient series. Their influence runs through industrial music, dub techno, and the wider culture of European experimental electronics.',
    releases: [
      { title: 'Cluster (Brain)', year: 1971 },
      { title: 'Zuckerzeit (Brain)', year: 1974 },
      { title: 'Cluster & Eno (Sky)', year: 1977 },
      { title: 'After the Heat — Eno Moebius Roedelius (Sky)', year: 1978 },
    ]},

  // ── BERLIN — MODERAT / BOYS NOIZE ───────────────────────────────────────
  { id:'moderat', label:'Moderat', type:'artist', genre:'experimental', era:2009, city:'Berlin', country:'DE',
    bandcamp:'moderat', bandcamp_album:'337366128',
    desc:'Moderat is a Berlin collaborative project formed by Modeselektor and Apparat (Sascha Ring). The trio had known each other since the late 1990s Berlin underground and released a self-titled debut in 2009, followed by II (2013) and III (2016). Their music combines Modeselektor\'s rhythmic club production with Apparat\'s melodic, emotionally direct songwriting, producing a form of electronic music that found wide audiences without losing its German underground roots. Their live shows — elaborate audiovisual productions — became among the most acclaimed on the international festival circuit during the 2010s.',
    releases: [
      { title: 'Moderat (BPitch Control)', year: 2009 },
      { title: 'II (BPitch Control)', year: 2013 },
      { title: 'III (BPitch Control)', year: 2016 },
      { title: 'MORE D4TA (Mute)', year: 2022 },
    ]},

  { id:'boys_noize', label:'Boys Noize', type:'artist', genre:'techno', era:2004, city:'Berlin', country:'DE',
    desc:'Alex Ridha — Boys Noize — is a Hamburg-born, Berlin-based producer and DJ who founded Boys Noize Records in 2004. His productions combine electro and techno influences with an aggressive energy that became part of Berlin\'s mid-2000s electro and hard techno moment. Boys Noize Records has released music by Gesaffelstein, Erol Alkan, and others. Ridha has collaborated with Daft Punk\'s Guy-Manuel de Homem-Christo as Crydamoure and worked extensively in film and commercial music without abandoning his underground roots.',
    releases: [
      { title: 'Oi Oi Oi (Boys Noize Records)', year: 2007 },
      { title: '"Power" (Boys Noize Records)', year: 2009 },
    ]},

  // ── MUNICH — PERMANENT VACATION ─────────────────────────────────────────
  { id:'permanent_vacation', label:'Permanent Vacation', type:'label', genre:'disco', era:2007, city:'Munich', country:'DE',
    desc:'Permanent Vacation was founded in Munich in 2007 by John Gomez and Leri Ahel. It became a central label for the nu-Italo and cosmic revival in contemporary electronic music — characterised by melody, warmth, and a nostalgic quality that drew directly from Daniele Baldelli\'s cosmic disco and Balearic music. Todd Terje, Prins Thomas, DJ Koze, and Chromatics all released on the label. Its aesthetic was significant in demonstrating that the history of European dance music could be revisited with artistic rigour rather than mere pastiche.',
    releases: [
      { title: '"Inspector Norse" — Todd Terje (Perm. Vacation)', year: 2012 },
      { title: '"Swing Tight" — Chromatics (Perm. Vacation)', year: 2007 },
    ]},

  // ── LONDON — PALMS TRAX / EMOTIONAL RESCUE ───────────────────────────────
  { id:'palms_trax', label:'Palms Trax', type:'artist', genre:'deep', era:2014, city:'London', country:'UK',
    desc:'Palms Trax is the project of Thomas Prenner, a British producer based between London and Berlin. His productions draw on early Chicago deep house, Italo disco, and cosmic music, creating a warm and melodic approach to club music with an emphasis on feeling over function. He has released on Dekmantel, Lobster Theremin, and Emotional Rescue, and his DJ sets are research-heavy, connecting contemporary electronic music to deeper historical sources.',
    releases: [
      { title: '"Equations" EP (Dekmantel)', year: 2016 },
      { title: '"At Swim" (Lobster Theremin)', year: 2018 },
    ]},

  { id:'emotional_rescue', label:'Emotional Rescue', type:'label', genre:'disco', era:2008, city:'London', country:'UK',
    desc:'Emotional Rescue is a London label founded in 2008 by Nick Woolfson. It occupies an idiosyncratic position in contemporary electronic music, releasing records across disco, Balearic, cosmic, and deep house genres with an emphasis on warmth and historical depth. Palms Trax, John Talabot, and various rediscovered archive recordings have appeared on the label alongside contemporary artists working in related territory. Its approach — careful curation, cross-genre reach, and a refusal to restrict itself to any single sound — has made it a model for independent labels operating outside genre boundaries.',
    releases: [
      { title: 'ER-014 — Palms Trax', year: 2016 },
    ]},

  // ── SWEDEN — ARKAJO / DORISBURG / KONTRA-MUSIK ──────────────────────────
  { id:'arkajo', label:'Arkajo', type:'artist', genre:'experimental', era:2012, city:'Gothenburg', country:'SE',
    desc:'Arkajo is the project of Anders Karlsson, a Gothenburg-based producer associated with the Studio Barnhus circle. His work sits between the melodic house tradition of Studio Barnhus and more abstract experimental music — long-form structures, processed textures, and a compositional patience that owes as much to contemporary classical music as to club contexts.',
    releases: [
      { title: 'Sunbloom (Studio Barnhus)', year: 2019 },
    ]},

  { id:'dorisburg', label:'Dorisburg', type:'artist', genre:'experimental', era:2008, city:'Stockholm', country:'SE',
    desc:'Dorisburg is the project of Marcus Joons, a Stockholm-based producer who founded the Kontra-Musik label in 2010. His music is characterised by dense, layered textures, hypnotic rhythmic structures, and a spatial depth rooted in dub techno and experimental club music. His approach treats the club as a site for meditative experience, and his DJ sets reflect an omnivorous engagement with electronic music history. His 2017 Fabric mix was widely cited as one of the best in the series.',
    releases: [
      { title: 'Transience (Kontra-Musik)', year: 2015 },
      { title: 'Fabric 87 (mix CD)', year: 2017 },
    ]},

  { id:'kontra_musik', label:'Kontra-Musik', type:'label', genre:'experimental', era:2010, city:'Stockholm', country:'SE',
    desc:'Kontra-Musik was founded in Stockholm in 2010 by Marcus Joons (Dorisburg). It has become one of Sweden\'s most internationally respected electronic labels, releasing music at the intersection of dub techno, minimal club music, noise, and experimental composition. Artists including Dorisburg, Puce Mary, and Varg have released on the label. Its aesthetic resists genre classification while maintaining a consistent commitment to depth, spatial sound design, and conceptual rigour.',
    releases: [
      { title: 'Kontra-Musik 001 — Dorisburg', year: 2010 },
    ]},

  // ── BARCELONA — SÓNAR FESTIVAL ───────────────────────────────────────────
  { id:'sonar_festival', label:'Sónar Festival', type:'moment', genre:'experimental', era:1994, city:'Barcelona', country:'ES',
    desc:'Sónar began in Barcelona in 1994 as a three-day festival combining music, art, and audiovisual work. It was among the first major festivals to present electronic music as a form deserving institutional attention equivalent to other art forms. By the 2000s it had become one of the most internationally recognised platforms for the full range of electronic music — from club music to experimental composition. Its Sónar+D conference positioned it at the intersection of technology and culture. Aphex Twin, Autechre, Daft Punk, and hundreds more performed there across its first three decades.',
    },

  // ── SHEFFIELD / EARLY WARP / IDM ─────────────────────────────────────────
  { id:'cabaret_voltaire', label:'Cabaret Voltaire', type:'artist', genre:'experimental', era:1973, city:'Sheffield', country:'UK',
    desc:'Cabaret Voltaire — Richard H. Kirk, Stephen Mallinder, and Chris Watson — formed in Sheffield in 1973 and became one of the foundational groups of industrial music, post-punk electronics, and what would become techno. Working with tape manipulation, synthesisers, and sequencers at a time when most British music was guitar-based, they produced a body of work between 1978 and 1994 that directly influenced the entire Sheffield electronic scene, early house music, and Berlin\'s industrial techno lineage. Their track "Yashar" (1983), remixed by John Robie, was an early document of the intersection between industrial electronics and club music. Kirk continued under various monikers, releasing on Warp into the 1990s.',
    releases: [
      { title: 'Red Mecca (Rough Trade)', year: 1981 },
      { title: '"Yashar" (Some Bizzare)', year: 1983 },
      { title: 'The Crackdown (Some Bizzare)', year: 1983 },
      { title: 'Code (EMI)', year: 1987 },
    ]},

  { id:'lfo', label:'LFO', type:'artist', genre:'experimental', era:1988, city:'Leeds', country:'UK',
    desc:'LFO — Mark Bell and Gez Varley — were among the founding artists of Warp Records. Their 1990 twelve-inch "LFO" defined bleep techno: a Leeds-Sheffield hybrid sound built from heavily filtered sub-bass, stark Roland drum machine patterns, and melodic synthesiser blips drawn from Detroit and Chicago but inflected with something distinctly Northern English. The record spent fourteen weeks on the UK singles chart, an unprecedented achievement for underground electronic music. Mark Bell subsequently became a principal collaborator with Björk, co-producing Post, Homogenic, and Vespertine. Varley departed after the first album; Bell continued LFO until his death in 2014.',
    releases: [
      { title: '"LFO" (Warp)', year: 1990 },
      { title: 'Frequencies (Warp)', year: 1991 },
      { title: 'Advance (Warp)', year: 1996 },
    ]},

  { id:'forgemasters', label:'Forgemasters', type:'artist', genre:'experimental', era:1989, city:'Sheffield', country:'UK',
    desc:'Forgemasters — Robert Gordon, Sean Maher, and Winston Hazel — released "Track with No Name" as Warp Records\' second release (WAP 2) in 1989. The track was one of the first documents of bleep techno: a Sheffield mutation of Detroit and Chicago electronic music filtered through the city\'s industrial heritage and sound system culture. Gordon subsequently co-founded FON Records with Mark Brydon (later of Moloko). Hazel continued as a DJ and became a central figure in Sheffield\'s long-running electronic music culture.',
    releases: [
      { title: '"Track With No Name" (Warp WAP 2)', year: 1989 },
    ]},

  { id:'the_black_dog', label:'The Black Dog', type:'artist', genre:'experimental', era:1989, city:'Sheffield', country:'UK',
    desc:'The Black Dog formed in Sheffield in 1989 with Ken Downie, Ed Handley, and Andy Turner. They were among the first artists on Warp Records, releasing a series of twelve-inches and the landmark album "Bytes" (1993) — credited to Black Dog Productions and featuring Plaid — that helped define the IDM aesthetic. Handley and Turner left to form Plaid; Downie continued as The Black Dog, maintaining a prolific output across subsequent decades. The group is a direct lineage node between Sheffield\'s industrial heritage, Warp\'s early bleep sound, and the fully formed IDM tradition.',
    releases: [
      { title: 'Bytes — Black Dog Productions (Warp)', year: 1993 },
      { title: 'Spanners (Warp)', year: 1995 },
      { title: 'Further Vexations (Dust Science)', year: 2008 },
    ]},

  { id:'808_state', label:'808 State', type:'artist', genre:'experimental', era:1988, city:'Manchester', country:'UK',
    desc:'808 State formed in Manchester in 1988 around Graham Massey, Gerald Simpson (A Guy Called Gerald), Darren Partridge, and Andrew Barker. Their early releases on Creed Records were among the first British techno records; their album Ninety (1989) and its follow-up 90 (1989) defined the Manchester variant of bleep and bass. They were closely associated with the Haçienda and the Summer of Love and produced a body of work that connects Manchester\'s rave culture to Sheffield\'s electronic lineage. Massey later collaborated extensively with Björk. Despite being based in Manchester, their sonic aesthetic is inseparable from the Sheffield/Warp bleep tradition.',
    releases: [
      { title: 'Newbuild (Creed)', year: 1988 },
      { title: '90 (ZTT)', year: 1989 },
      { title: 'ex:el (ZTT)', year: 1991 },
    ]},

  { id:'squarepusher', label:'Squarepusher', type:'artist', genre:'experimental', era:1994, city:'London', country:'UK',
    desc:'Tom Jenkinson — Squarepusher — has released on Warp since 1996 and represents the most technically demanding intersection of IDM, jazz, and drum and bass within the label\'s catalogue. His early records combined hyperactive breakbeats derived from jungle with live bass guitar playing of extraordinary complexity, creating music that operated simultaneously in club and concert contexts. Albums including Hard Normal Daddy (1997) and Music Is Rotted One Note (1998) established templates for technically ambitious electronic music that subsequent generations continued to develop. His approach to live performance — often solo with bass guitar and live electronics — is unique in the Warp roster.',
    releases: [
      { title: 'Feed Me Weird Things (Warp)', year: 1996 },
      { title: 'Hard Normal Daddy (Warp)', year: 1997 },
      { title: 'Go Plastic (Warp)', year: 2001 },
    ]},

  { id:'mu_ziq', label:'µ-Ziq', type:'artist', genre:'experimental', era:1992, city:'London', country:'UK',
    desc:'Mike Paradinas — µ-Ziq — released his first records on Rephlex (Aphex Twin\'s label) in the early 1990s and went on to found Planet Mu in 1995. His productions blend melodic IDM, breakbeat, and abstract electronics into a warmly idiosyncratic body of work. Planet Mu became one of the most important labels in experimental electronic music, releasing early footwork and juke records by DJ Rashad and Jlin alongside Venetian Snares, Burial-adjacent artists, and an enormous range of experimental club music. Paradinas has continued releasing as µ-Ziq alongside running the label.',
    releases: [
      { title: 'Tango N\'Vectif (Virgin/Astralwerks)', year: 1993 },
      { title: 'In Pine Effect (Planet Mu)', year: 1995 },
      { title: 'Bilious Paths (Planet Mu)', year: 2003 },
    ]},

  { id:'global_communication', label:'Global Communication', type:'artist', genre:'ambient', era:1992, city:'Bath', country:'UK',
    desc:'Global Communication was the project of Tom Middleton and Mark Pritchard, formed in Bath in the early 1990s. Their album 76:14 (1994), released on Dedicated and licensed to R&S\'s Apollo sub-label, is one of the definitive ambient electronic records — a sequence of beatless, slow-moving pieces named after their running times, drawing on Detroit ambient techno, Basic Channel, and the atmospheric currents of early rave. Middleton and Pritchard also recorded as Reload, Jedi Knights, and other aliases across multiple labels and styles. 76:14 has been continuously cited as an influence on ambient electronic music for three decades.',
    releases: [
      { title: '76:14 (Dedicated / Apollo)', year: 1994 },
      { title: 'Maiden Voyage — Reload (Evolution)', year: 1993 },
    ]},

  { id:'venetian_snares', label:'Venetian Snares', type:'artist', genre:'experimental', era:1999, city:'Winnipeg', country:'CA',
    desc:'Aaron Funk — Venetian Snares — is a Winnipeg-based producer who has released the majority of his work on Planet Mu. His productions are characterised by extremely fast breakbeats (often at 180-300bpm), complex polyrhythmic programming, and emotional contrasts between brutal percussion and melodic or orchestral elements. Albums including Rossz Csillag Alatt Született (2005) — built around Hungarian classical music samples — and Cavalcade of Glee and Dadaist Happy Hardcore Pom Poms (2003) demonstrate both his technical ambition and his refusal to operate within any single genre. He is the central figure of breakcore as a practice if not a scene.',
    releases: [
      { title: 'Winnipeg Is a Frozen Shithole (Planet Mu)', year: 2001 },
      { title: 'Rossz Csillag Alatt Született (Planet Mu)', year: 2005 },
      { title: 'Detrimentalist (Planet Mu)', year: 2008 },
    ]},

  { id:'amon_tobin', label:'Amon Tobin', type:'artist', genre:'experimental', era:1996, city:'London', country:'UK',
    desc:'Amon Tobin — born in Brazil, based in London for much of his career — has released on Ninja Tune since the late 1990s. His productions layer dense textures from jazz, film music, and electronic sources into precisely constructed tracks that resist easy genre placement. Albums including Bricolage (1997), Permutation (1998), and Foley Room (2005) — the latter built entirely from recorded sound effects — demonstrate a compositional approach more in common with electroacoustic music than with club traditions. His live show "ISAM" (2011), featuring elaborate 3D projection mapping, was among the most ambitious audiovisual productions in electronic music.',
    releases: [
      { title: 'Bricolage (Ninja Tune)', year: 1997 },
      { title: 'Permutation (Ninja Tune)', year: 1998 },
      { title: 'Foley Room (Ninja Tune)', year: 2005 },
    ]},

  // ── CURRENT AMERICA ─────────────────────────────────────────────────────
  { id:'jay_daniel', label:'Jay Daniel', type:'artist', genre:'deep', era:2012, city:'Detroit', country:'US',
    desc:'Jay Daniel is a Detroit-based producer and DJ who represents a younger generation of artists carrying forward the city\'s deep house and techno traditions. His releases on Technicolour, Lobster Theremin, and other labels blend Detroit\'s deep house warmth with a contemporary production sensibility. He has been championed by figures including Omar S and Moodymann, situating him firmly within the Detroit continuum while reflecting the influences of London and European underground club music.',
    releases: [
      { title: '"Talk to Me" (Technicolour)', year: 2015 },
    ]},

  { id:'the_black_madonna', label:'The Black Madonna', type:'artist', genre:'house', era:2013, city:'Chicago', country:'US',
    desc:'Marea Stamper — The Black Madonna — is a Chicago-born DJ and producer who became one of the most politically engaged and technically accomplished DJs of her generation. Rooted in Chicago house and the queer dancefloor tradition, her sets and productions combine the emotional directness of Larry Heard with harder-edged influences from Belgian and British techno. She founded We Still Believe in 2015, a label and platform centred on inclusivity in electronic music. She has since performed under the name Marea, reflecting a shift in her artistic identity while maintaining her connection to the Chicago deep house lineage.',
    releases: [
      { title: '"He Is the Voice I Hear" (Running Back)', year: 2014 },
      { title: '"He Is the Voice I Hear (Remixes)"', year: 2015 },
    ]},

  { id:'honey_dijon', label:'Honey Dijon', type:'artist', genre:'house', era:2000, city:'Chicago', country:'US',
    desc:'Honey Dijon is a Chicago-born, New York-based DJ and producer who has been a central figure in queer house music for two decades. Her approach is rooted directly in the Chicago house tradition — she grew up attending the Music Box and the Warehouse\'s successor nights — and her DJ sets are built around deep house, disco, and club music with a consistent political and cultural perspective around Black and trans identity. Her production work has appeared on Classic Music Company, djkoze\'s Pampa Records, and her own label, and she has become one of the most booked DJs in the world while remaining tightly connected to her Chicago roots.',
    releases: [
      { title: '"The Best of Me" ft. Josh Caffe (Classic)', year: 2021 },
      { title: 'Black Girl Magic (Classic)', year: 2022 },
    ]},

  { id:'hieroglyphic_being', label:'Hieroglyphic Being', type:'artist', genre:'experimental', era:2000, city:'Chicago', country:'US',
    desc:'Jamal Moss — Hieroglyphic Being — is a Chicago producer and DJ who has operated in the underground since the early 2000s, releasing a vast catalogue of abrasive, lo-fi electronic music that connects Chicago\'s house tradition to industrial, noise, and free jazz. His releases on Mathematics Recordings (his own label) number in the dozens and cover territory from rough, functional club music to abstract sound experiments. He has also released on RVNG Intl. and ESP-Disk, situating him at the intersection of electronic music and the American experimental music tradition. His approach maintains a direct connection to the spiritual and political dimensions of Chicago\'s original house scene.',
    releases: [
      { title: 'Tetrachromacy (RVNG Intl.)', year: 2014 },
      { title: 'The Acid Documents (Mathematics)', year: 2015 },
    ]},

  { id:'avalon_emerson', label:'Avalon Emerson', type:'artist', genre:'house', era:2015, city:'San Francisco', country:'US',
    desc:'Avalon Emerson is a San Francisco-born, Berlin-based DJ and producer who emerged in 2015 with releases on Whities and Thisisnotanexit and quickly became one of the most acclaimed DJs in contemporary electronic music. Her productions draw on Chicago house, electro, and trance while resisting easy categorisation, and her DJ sets are known for their range and intelligence. She has released on her own label &&& (Ampersand) and on Ghostly International, and her debut album "& (Ampersand)" (2023) demonstrated a capacity for pop songwriting alongside her club work.',
    releases: [
      { title: '"The Frontier" (Whities)', year: 2016 },
      { title: '"Whities 009" EP', year: 2016 },
      { title: '& (Ampersand) (Ghostly)', year: 2023 },
    ]},

  { id:'umfang', label:'Umfang', type:'artist', genre:'techno', era:2013, city:'New York', country:'US',
    desc:'Emma Olson — Umfang — is a New York-based DJ and producer and co-founder of Technofeminism, a collective and zine addressing gender politics in club culture. Her productions and DJ sets operate in the territory between Chicago house, New York club music, and European techno, reflecting an approach shaped by the intersection of underground club culture and political organising. She has released on L.I.E.S. Records and associated labels, and Technofeminism has been influential in articulating a feminist practice within techno culture.',
    releases: [
      { title: 'Symptoms (Technicolour)', year: 2018 },
    ]},

  { id:'flying_lotus', label:'Flying Lotus', type:'artist', genre:'experimental', era:2006, city:'Los Angeles', country:'US',
    desc:'Steven Ellison — Flying Lotus — is a Los Angeles-based producer and the founder of Brainfeeder Records. His great-aunt was Alice Coltrane, and his music reflects both that jazz heritage and a deep engagement with hip-hop, footwork, and electronic music. Cosmogramma (2010) and You\'re Dead! (2014) are among the most significant crossover records between jazz tradition and contemporary electronic production. Brainfeeder has become one of the most important independent labels in the US, releasing Thundercat, Kamasi Washington, and others at the intersection of jazz and club music.',
    releases: [
      { title: 'Reset EP (Warp)', year: 2006 },
      { title: 'Los Angeles (Warp)', year: 2008 },
      { title: 'Cosmogramma (Warp)', year: 2010 },
      { title: "You're Dead! (Warp)", year: 2014 },
    ]},

  { id:'brainfeeder', label:'Brainfeeder', type:'label', genre:'experimental', era:2008, city:'Los Angeles', country:'US',
    desc:'Brainfeeder was founded in Los Angeles in 2008 by Flying Lotus and has become one of the defining labels at the intersection of jazz, hip-hop, and electronic music. Its roster — Thundercat, Kamasi Washington, Lapalux, Mono/Poly — represents a specific LA aesthetic rooted in the Low End Theory club night, which brought together beat producers, jazz musicians, and MCs in a shared space. Brainfeeder positioned Los Angeles, previously less visible in electronic music discourse than Chicago, Detroit, or New York, as a city with its own distinct and historically rooted electronic culture.',
    releases: [
      { title: 'Cosmogramma — Flying Lotus', year: 2010 },
      { title: 'The Golden Age of Apocalypse — Thundercat', year: 2011 },
    ]},

  // ── SCANDINAVIA EXPANDED ─────────────────────────────────────────────────
  { id:'varg', label:'Varg', type:'artist', genre:'techno', era:2012, city:'Stockholm', country:'SE',
    desc:'Varg is a Stockholm-based producer whose work occupies the extreme end of industrial techno — brutal, heavily distorted percussion, hostile atmospheres, and a conceptual practice that engages with Nordic mythology, nature, and a dark romanticism at odds with conventional dance music. He has released on Kontra-Musik and his own label and is associated with the Swedish industrial underground alongside artists like Shxcxchcxsh. His work is not functional club music in any conventional sense; it is instead a challenge to the listener, situated at the perimeter of what techno can mean.',
    releases: [
      { title: 'Nord (Northern Electronics)', year: 2013 },
      { title: 'Misantropen (Posh Isolation)', year: 2015 },
    ]},

  { id:'shxcxchcxsh', label:'Shxcxchcxsh', type:'artist', genre:'techno', era:2012, city:'Stockholm', country:'SE',
    desc:'Shxcxchcxsh is a Stockholm-based duo — Lars Hammar and Shanna Jones — whose releases on Surgeon\'s Avian label have been among the most critically admired techno records of the 2010s. Their music is built from modular synthesis, with dense, constantly evolving textures and a rhythmic approach that is simultaneously complex and physically compelling. The Skrika EP (2013) and SummArpDa (2015) are landmark records in contemporary techno. Their approach resists both the minimal clarity of Berlin techno and the brutalism of industrial — it is intricate, warm at its edges, and highly distinctive.',
    releases: [
      { title: 'Skrika (Avian)', year: 2013 },
      { title: 'SummArpDa (Avian)', year: 2015 },
      { title: 'STRGTHS (Avian)', year: 2018 },
    ]},

  { id:'avian', label:'Avian', type:'label', genre:'techno', era:2010, city:'Birmingham', country:'UK',
    desc:'Avian was founded by Surgeon (Anthony Child) in Birmingham around 2010. It became one of the most respected techno labels of the decade, releasing records by Surgeon, Shxcxchcxsh, Skee Mask, and British Murder Boys among others. The label\'s aesthetic is built from a shared commitment to technical precision, physical intensity, and an approach to production that resists both minimalism and maximalism in favour of density and detail. Its Swedish and German roster alongside its Birmingham roots reflect how international contemporary techno\'s geography has become.',
    releases: [
      { title: 'Avian 01 — Surgeon', year: 2010 },
      { title: 'Skrika — Shxcxchcxsh', year: 2013 },
    ]},

  { id:'courtesy', label:'Courtesy', type:'artist', genre:'techno', era:2014, city:'Copenhagen', country:'DK',
    desc:'Courtesy is a Copenhagen-based DJ and producer whose work sits between industrial techno and more abstract club forms. She has played at Berghain, Fabric, and other major European venues, and her sets are characterised by a rigorous approach to energy management and a wide range of references. She is part of the broader Copenhagen underground connected to Posh Isolation and the Nordic experimental scene, while maintaining relationships with Glasgow\'s Numbers label and other UK-based networks.',
    releases: [
      { title: '"PLEX" (Local Action)', year: 2021 },
    ]},

  { id:'par_grindvik', label:'Pär Grindvik', type:'artist', genre:'techno', era:2002, city:'Stockholm', country:'SE',
    desc:'Pär Grindvik is a Stockholm-based DJ and producer who has released on Drumcode and founded Infrastructure New York alongside other Stockholm-based artists. His techno is precise and driving, sitting within the harder current of Swedish techno represented by Drumcode while incorporating deeper and more atmospheric elements. He has been a consistent presence at Berghain and the major European techno clubs for over two decades, and his label work has helped define a Stockholm–New York techno axis.',
    releases: [
      { title: '"Sugarcoated Poison Pill" (Drumcode)', year: 2009 },
      { title: 'Infrastructure Series (Infrastructure NY)', year: 2010 },
    ]},

  // ── SERBIA ───────────────────────────────────────────────────────────────
  { id:'drugstore', label:'Drugstore', type:'venue', genre:'techno', era:2002, city:'Belgrade', country:'RS',
    desc:'Drugstore is a club in Belgrade that became one of Eastern Europe\'s most respected techno venues during the 2000s and 2010s. Alongside clubs in Warsaw, Tbilisi, and Kyiv, it represented the growth of a serious underground techno culture in post-socialist cities — spaces where music and political freedom were intertwined in specific ways. Drugstore\'s booking policy drew heavily from the Berghain aesthetic while developing a distinctly Serbian character. Tijana T and other Belgrade-based artists developed their sound and audiences there.',
    },

  { id:'tijana_t', label:'Tijana T', type:'artist', genre:'techno', era:2009, city:'Belgrade', country:'RS',
    desc:'Tijana Todorović — Tijana T — is a Belgrade-born DJ and producer who became one of the most internationally recognised artists from the Serbian underground. Her sets blend industrial techno with deeper house influences, and she has played at Berghain, fabric, and Panorama Bar while maintaining her connection to the Belgrade scene. She has released on Ostgut Ton and Optimo Music, and her profile represents the integration of Eastern European underground club culture into the broader international techno circuit.',
    releases: [
      { title: '"Untitled" (Ostgut Ton)', year: 2016 },
    ]},

  { id:'exit_festival', label:'Exit Festival', type:'moment', genre:'techno', era:2000, city:'Novi Sad', country:'RS',
    desc:'Exit Festival began in 2000 as a student protest movement against the Milošević regime, held in the streets of Novi Sad. After Milošević\'s fall it became a music festival and moved to the Petrovaradin Fortress. It is one of Europe\'s largest and most geographically distinctive festivals — the fortress setting and the political origins give it a character unlike any other European event. Its electronic programme has included Berghain residents, major international techno and house acts, and regional artists, making it a key platform for the integration of Balkan club culture into the European mainstream.',
    },

  // ── PORTUGAL / KUDURO ────────────────────────────────────────────────────
  { id:'kuduro', label:'Kuduro', type:'style', genre:'experimental', era:1984, city:'Luanda', country:'AO',
    desc:'Kuduro is a music and dance style that developed in Luanda, Angola in the mid-1980s, combining Angolan semba rhythms with electronic production techniques and a physically demanding, acrobatic dance form. Brought to Lisbon by Angolan immigrants, it developed a distinct Portuguese variant in the city\'s suburban periphery — particularly in Damaia, Amadora, and Cacém — that intersected with house, R&B, and international bass music. Producers including DJ Marfox, DJ Nigga Fox, and Dino d\'Santiago developed this Lisbon kuduro into a form with its own identity, documented primarily on the Príncipe label from 2011.',
    },

  { id:'principe', label:'Príncipe', type:'label', genre:'experimental', era:2011, city:'Lisbon', country:'PT',
    desc:'Príncipe Discos was founded in Lisbon in 2011 by José Moura and Nuno dos Santos (Violet) to document the kuduro and batukadeiras scene developing in the city\'s Afro-Portuguese suburbs. Its releases by DJ Marfox, DJ Nigga Fox, Nídia, and others brought this music to an international audience of record collectors and electronic music listeners who had no connection to the communities that made it. The label\'s success raised complex questions about cultural mediation — it simultaneously preserved important music and introduced it to contexts for which it was not originally made. Its aesthetic is raw, rhythmically complex, and unlike anything else in European electronic music.',
    releases: [
      { title: 'Principe 01 — DJ Marfox', year: 2011 },
      { title: '"Vou Ficar Na Memória de Quem Gosta de Mim" — Nídia', year: 2017 },
    ]},

  { id:'dj_marfox', label:'DJ Marfox', type:'artist', genre:'experimental', era:2008, city:'Lisbon', country:'PT',
    desc:'Márcio Gonçalves — DJ Marfox — is a Lisbon-based producer and DJ from Damaia who is one of the central figures in the development of Lisbon kuduro and its intersection with international bass music. His productions are characterised by extremely fast, syncopated rhythms, a stripped and aggressive approach to production, and a deep rootedness in the Afro-Portuguese suburban culture of Lisbon\'s periphery. He has released extensively on Príncipe Discos and has been included in contemporary art contexts through collaborations with visual artists and curators, making him one of the rare underground electronic artists whose work has crossed into both the art world and the global club circuit.',
    releases: [
      { title: 'Tsunami (Príncipe)', year: 2013 },
      { title: 'Afro Zone (Príncipe)', year: 2016 },
    ]},

  // ── FRANCE EXPANDED ──────────────────────────────────────────────────────
  { id:'concrete_paris', label:'Concrete', type:'venue', genre:'techno', era:2011, city:'Paris', country:'FR',
    desc:'Concrete opened in 2011 on a barge moored at Port de la Rapée in Paris and quickly became one of the most respected contemporary techno clubs in Europe. Its programming draws from the Berghain aesthetic — long sets, dark sound systems, a serious curatorial approach — while reflecting the specific character of Paris\'s electronic underground. The venue also operates a record label and has hosted sets by Dj Stingray, Surgeon, Rhadoo, and many others. Its success was part of a broader revival of Paris as a serious techno city after years in which the city was better known for its house and French touch heritage.',
    },

  { id:'club_cheval', label:'Club Cheval', type:'label', genre:'house', era:2012, city:'Paris', country:'FR',
    desc:'Club Cheval is a Paris-based collective and label founded around 2012, comprising producers Canblaster, Myd, Panteros666, and Hard Ton. Their music occupies the intersection of French touch, electro, and contemporary club music — fast, melodic, and self-consciously playful in a way that connects them to the Daft Punk tradition while reflecting the more abrasive production aesthetics of the 2010s. Club Cheval represents a generation of French producers for whom the French Touch legacy was history rather than a living movement, and whose work processes that inheritance critically.',
    releases: [
      { title: 'Discipline EP (Club Cheval)', year: 2013 },
    ]},

  { id:'antinote', label:'Antinote', type:'label', genre:'deep', era:2011, city:'Paris', country:'FR',
    desc:'Antinote is a Paris-based label founded in 2011 by Zaltan and Sacha Hoedemaker. It has developed a reputation for eclectic, quality-focused releases across deep house, new wave, electronics, and various undefined genres, with a consistent aesthetic sensibility that values warmth, idiosyncrasy, and a refusal to follow market logic. Artists including Zaltan himself, Pional, and Rebolledo have released on the label. Antinote\'s approach is closely related to the broader network of Balearic and cosmic-influenced European labels (Permanent Vacation, Emotional Rescue, Hivern Discs) while maintaining a distinctly Parisian character.',
    releases: [
      { title: 'Antinote 001 — Zaltan', year: 2011 },
    ]},

  // ── ASIA EXPANDED ────────────────────────────────────────────────────────
  { id:'white_shanghai', label:'WHITE', type:'venue', genre:'techno', era:2013, city:'Shanghai', country:'CN',
    desc:'WHITE is a Shanghai techno club that opened in 2013 and became the most internationally connected venue in the Chinese electronic music scene. Its booking policy is directly modelled on Berghain — long sets, physically powerful sound systems, an emphasis on artist and audience experience over spectacle — and it has hosted Jeff Mills, Marcel Dettmann, Ben Klock, and many other European and American techno artists alongside Chinese producers. WHITE has been central to the development of a technically sophisticated electronic music scene in Shanghai, distinct from the EDM-oriented venues that dominate China\'s commercial music landscape.',
    },

  { id:'yeti_out', label:'Yeti Out', type:'label', genre:'experimental', era:2014, city:'Hong Kong', country:'HK',
    desc:'Yeti Out is a Hong Kong-based collective, label, and party series founded by brothers Arthur and Tom Bui that has become one of the most active connective tissues between Asian electronic music scenes and the international network. Operating across Hong Kong, Shanghai, Tokyo, and beyond, Yeti Out books international artists alongside local talent, releases music on its label, and has been significant in creating genuine dialogue between Asian underground electronic music and its European and American counterparts — rather than simply importing Western sounds, it has fostered the development of distinctly Asian electronic music.',
    releases: [
      { title: 'Yeti Out Radio (Mixcloud series)', year: 2014 },
    ]},

  // ── 2020s — UK ──────────────────────────────────────────────────────────
  { id:'bicep', label:'Bicep', type:'artist', genre:'melodic', era:2015, city:'Belfast', country:'UK',
    bandcamp:'bicep', bandcamp_album:'4195161359',
    desc:'Matt McBriar and Andy Ferguson — Bicep — are from Belfast and based in London. They began as the blog Feel My Bicep (2008), championing obscure house and dance records, before developing a production practice rooted in the same influences: Chicago house, Italo disco, Detroit techno, and classic Irish rave music. Their self-titled debut album (2017) was critically acclaimed; Isles (2021) reached number one in the UK albums chart, an unusual achievement for an instrumental electronic album and a significant moment for dance music\'s commercial visibility. Their live shows, featuring elaborate audiovisual production, have sold out major venues worldwide.',
    releases: [
      { title: 'Bicep (Ninja Tune)', year: 2017 },
      { title: 'Isles (Ninja Tune)', year: 2021 },
      { title: '"Glue" (Ninja Tune)', year: 2017 },
    ]},

  { id:'overmono', label:'Overmono', type:'artist', genre:'techno', era:2020, city:'London', country:'UK',
    desc:'Overmono is the collaborative project of brothers Ed Russell (also known as Truss) and Tom Russell (also known as Tessela). Both had established solo careers in UK techno and club music before beginning to release together. Their music combines elements of UK rave, grime, and techno with a warmth and emotional directness that gave them a significantly wider audience than either had reached separately. Good Lies (2023) on XL Recordings demonstrated that technically demanding electronic music could find mainstream audiences without compromising its roots.',
    releases: [
      { title: '"So U Kno" (XL)', year: 2021 },
      { title: 'Good Lies (XL)', year: 2023 },
    ]},

  { id:'batu', label:'Batu', type:'artist', genre:'techno', era:2017, city:'Bristol', country:'UK',
    desc:'Jack Byers — Batu — is a Bristol-based producer and DJ who emerged through Timedance, the label co-founded with Peverelist, and has released on Hessle Audio, ILIAN TAPE, and his own Timedance imprint. His productions occupy a space between Bristol\'s physical, system-music tradition and the more abstract approaches of Hessle Audio and Munich\'s ILIAN TAPE. His DJ sets are technically demanding and intellectually serious, building long arcs across extended sets. He is one of the most critically respected producers of his generation.',
    releases: [
      { title: 'Burden of Patience (Timedance)', year: 2020 },
      { title: 'Opal Tapes appearances', year: 2017 },
    ]},

  { id:'haai', label:'HAAi', type:'artist', genre:'techno', era:2018, city:'London', country:'UK',
    desc:'Teneil Throssell — HAAi — is a Sydney-born, London-based DJ and producer who became one of the most respected selectors in international techno and club music from 2018 onward. Her sets blend techno, acid, and more experimental electronic music with an emotional intelligence and technical command that led to residencies at fabric and invitations to Berghain, Panorama Bar, and Concrete. She has released on her own BOHica label and on respected underground labels, and her BBC Radio 6 Music show has been a platform for new and archival electronic music.',
    releases: [
      { title: '"Motorik Romantic" (BOHica)', year: 2020 },
      { title: 'Baby, We\'re Ascending (Mute)', year: 2022 },
    ]},

  // ── 2020s — ILIAN TAPE ────────────────────────────────────────────────────
  { id:'ilian_tape', label:'ILIAN TAPE', type:'label', genre:'techno', era:2012, city:'Munich', country:'DE',
    desc:'ILIAN TAPE was founded in Munich in 2012 by the Zenker Brothers (Marco and Dario Zenker). It became one of the defining labels of contemporary techno through a series of meticulously produced releases by Skee Mask, Batu, Ancient Methods, Stenny, and the Zenkers themselves. The label\'s aesthetic — textured, layered techno with a strong sense of space and detail — drew on Detroit and the dub traditions of Basic Channel while developing a distinct contemporary identity. Its Munich base gave it a character separate from Berlin\'s more high-profile scene.',
    releases: [
      { title: 'ILIAN TAPE 01 — Zenker Brothers', year: 2012 },
      { title: 'Illian Tape 40 — Skee Mask', year: 2017 },
    ]},

  // ── 2020s — EAST AFRICA ──────────────────────────────────────────────────
  { id:'kmru', label:'KMRU', type:'artist', genre:'experimental', era:2019, city:'Nairobi', country:'KE',
    desc:'Joseph Kamaru — KMRU — is a Nairobi-based producer and artist who has become one of the most internationally recognised voices in contemporary experimental electronic music. His work encompasses ambient electronics, noise, and field recordings from Nairobi\'s sonic environment, situating his practice at the intersection of African urban sound culture and a global tradition of experimental electronic music. Releases on Shelter Press, Warp, and other labels have reached a wide critical audience. He is also active as a researcher and writer on sound and technology in African contexts.',
    releases: [
      { title: 'Opaquer (Bandcamp)', year: 2019 },
      { title: 'Peel (Warp)', year: 2020 },
      { title: 'Temporary Suspension (Editions Mego)', year: 2021 },
    ]},

  { id:'slikback', label:'Slikback', type:'artist', genre:'techno', era:2018, city:'Nairobi', country:'KE',
    desc:'Slikback is a Nairobi-based producer whose music sits at the intersection of club music, gqom, footwork, and experimental electronics. His productions are physically intense — fast, percussive, and heavily textured — while drawing from a range of African musical traditions that his European contemporaries do not share. Releases on Nyege Nyege Tapes (Uganda), PAN, and other labels have positioned him within the global underground of club and experimental music, while his identity as a Kenyan artist challenges the European-centrism that has historically dominated that world.',
    releases: [
      { title: 'TOMO (Nyege Nyege Tapes)', year: 2019 },
      { title: 'LIMEN (PAN)', year: 2020 },
    ]},

  // ── NETHERLANDS — SPEEDY J ───────────────────────────────────────────────
  { id:'speedy_j', label:'Speedy J', type:'artist', genre:'techno', era:1992, city:'Rotterdam', country:'NL',
    bandcamp:'speedyj', bandcamp_album:'1511428376',
    desc:'Jochem George Paap — Speedy J — is a Rotterdam-born producer who became one of the most important figures in European techno through records on Warp and Tresor in the early 1990s. His album Ginger (1993, Warp) was among the first European techno albums to be taken seriously as a studio work rather than a functional club release, and his subsequent records on Tresor explored increasingly industrial and abstract territory. He co-founded the Electric Deluxe label in 2007, which continues to release his productions and those of a small international roster. His career arc — from bleep techno to industrialised abstraction — maps the full development of Dutch engagement with Detroit and European techno.',
    releases: [
      { title: 'Ginger (Warp)', year: 1993 },
      { title: 'Public Energy No. 1 (Tresor)', year: 1997 },
      { title: 'A Shocking Hobby (Electric Deluxe)', year: 2010 },
    ]},

  // ── BELGIUM — SPFDJ ──────────────────────────────────────────────────────
  { id:'spfdj', label:'SPFDJ', type:'artist', genre:'techno', era:2018, city:'Brussels', country:'BE',
    desc:'SPFDJ (Maxime Berger) is a Brussels-based DJ and producer who became one of the defining figures of the hard techno revival of the 2020s. His DJ sets — built from hard, fast, industrial techno at 145-150bpm — have been credited with bringing a new generation of listeners to a harder strain of club music that had existed in the underground since the 1990s but had been largely absent from the mainstream festival circuit. His rise coincided with a broader shift in European club culture toward harder, more physically aggressive sounds, and his Berghain appearances and festival slots confirmed his crossover from underground to wide recognition.',
    releases: [
      { title: '"Protocol" (SPFDJ)', year: 2020 },
      { title: '"Acid Rain" (SPFDJ)', year: 2021 },
    ]},

  // ── BELFAST — STOOR ──────────────────────────────────────────────────────
  // ── ROTTERDAM — STOOR (Speedy J live event) ──────────────────────────────
  { id:'stoor', label:'STOOR', type:'moment', genre:'techno', era:2015, city:'Rotterdam', country:'NL',
    desc:'STOOR is a live electronic music event series conceived and hosted by Speedy J in Rotterdam. The name — Dutch for "disturb" or "interfere" — reflects the event\'s focus on confrontational, high-intensity live performance rather than DJ sets. STOOR brings together artists performing entirely on hardware and modular systems, with no laptops, in a format that foregrounds the physical and spontaneous aspects of electronic music-making. It is part of Speedy J\'s broader investment in live electronic performance culture through his Electric Deluxe label, and has featured performances by artists including Nadia Struiwigh, whose modular live sets are a recurring centrepiece of the event.',
    },

  // ── NETHERLANDS — NADIA STRUWIG ──────────────────────────────────────────
  { id:'nadia_struwig', label:'Nadia Struiwigh', type:'artist', genre:'techno', era:2016, city:'Rotterdam', country:'NL',
    desc:'Nadia Struiwigh is a Rotterdam-based live electronic producer known for her modular synthesis and hardware-based performances. A regular presence at STOOR — Speedy J\'s Rotterdam live event series — and on the broader European live electronics circuit, her performances are built entirely in real time from modular and semi-modular synthesisers, without pre-recorded elements. Her approach places her within a tradition of Dutch live electronic performance that runs through Speedy J and the Electric Deluxe network, and her work has drawn attention from Berghain, Boiler Room, and the international festival circuit.',
    releases: [
      { title: 'Live at STOOR (Rotterdam)', year: 2018 },
    ]},

  // ── NEW ARTISTS ──────────────────────────────────────────────────────────
  { id:'mira_schwarzwalder', label:'Mira Schwarzwälder', type:'artist', genre:'deep', era:2013, city:'Zurich', country:'CH',
    desc:'Mira Schwarzwälder is a Zurich-based DJ and producer at the heart of the Swiss electronic scene. Her releases on Innervisions, Rekids, Correspondant, and Macro have established a sound built on deep, emotionally intelligent house music with a pronounced sense of space and detail. She plays regularly at Berghain, Watergate, and Fabric, and her sets reflect an approach grounded in long-form development and textural subtlety. She is part of the same Swiss cluster that produced the Projectindigo and Orion collectives — a small but internationally respected scene operating out of Zurich and Basel.',
    releases: [
      { title: '"Weit" EP (Correspondant)', year: 2017 },
      { title: '"Orbit" EP (Rekids)', year: 2019 },
    ]},

  { id:'chaos_in_the_cbd', label:'Chaos in the CBD', type:'artist', genre:'deep', era:2014, city:'London', country:'NZ',
    desc:'Chaos in the CBD is the project of Auckland-born duo Jonti Searll and Sam Hughes, based in London. Their music draws on jazz harmony, Chicago deep house, and the ambient electronic traditions of FXHE and Smallville. Releases on Young Art Records, Rush Hour, and Correspondant brought their warm, melodic approach to an international audience. Their sound — sophisticated chord voicings, soft percussion, digital synthesis — owes as much to ECM Records and Larry Heard as to contemporary club music, and positions them within a generation of producers who treat deep house as a compositional form.',
    releases: [
      { title: '"Midnight In Peckham" (Midnight Shift)', year: 2014 },
      { title: 'Midnight in Peckham EP (Young Art)', year: 2014 },
      { title: '"Lenz" (Correspondant)', year: 2018 },
    ]},

  { id:'anja_schneider', label:'Anja Schneider', type:'artist', genre:'minimal', era:2003, city:'Berlin', country:'DE',
    desc:'Anja Schneider is a Berlin-based DJ, producer, and the founder of Mobilee Records, which she launched in 2006. Previously associated with BPitch Control, she became one of the most internationally active German DJs of the 2000s and 2010s, resident at Watergate and a frequent presence at Berghain and Fabric. Her productions balance the functional precision of Berlin minimal with a warmth and directness distinguishing her from harder German techno, and Mobilee has documented a similar aesthetic through releases by Rodriguez Jr., Sebo K., and others.',
    releases: [
      { title: '"Skunk" (Mobilee)', year: 2008 },
      { title: '"Stranded" (Mobilee)', year: 2014 },
    ]},

  { id:'mobilee', label:'Mobilee Records', type:'label', genre:'minimal', era:2006, city:'Berlin', country:'DE',
    desc:'Mobilee Records was founded in Berlin in 2006 by Anja Schneider. It became one of the primary platforms for Berlin minimal house and the transitional sounds between deep house and melodic techno, releasing music by Rodriguez Jr., Sebo K., Reboot, and Anja Schneider herself. The label\'s aesthetic is characterised by warmth, rhythmic sophistication, and musicality — a middle ground between the precision of Kompakt and the emotional directness of Innervisions.',
    releases: [
      { title: 'Mobilee 001 — Anja Schneider', year: 2006 },
    ]},

  { id:'harrison_bdp', label:'Harrison BDP', type:'artist', genre:'deep', era:2016, city:'London', country:'UK',
    desc:'Harrison BDP is a London-based DJ and producer working at the intersection of deep house, minimal techno, and the UK underground. His releases reflect a sound built on hypnotic grooves, careful low-end construction, and an approach shaped by both Chicago deep house and the UK post-dubstep tradition. He operates within the network of London labels and nights that connects Lobster Theremin, Hessle Audio, and the broader UK underground circuit.',
    releases: [
      { title: 'Various underground releases', year: 2016 },
    ]},

  { id:'lee_burridge', label:'Lee Burridge', type:'artist', genre:'deep', era:1995, city:'London', country:'UK',
    desc:'Lee Burridge is a British DJ and the founder of All Day I Dream, a label and event series dedicated to melodic, emotive electronic music. One of the first generation of international DJs to build a recognisable identity around Balearic and deep house sounds, he has played for three decades at clubs including Fabric and at festivals and open-air settings worldwide. All Day I Dream — known for daytime outdoor events with a dream-like aesthetic — has been enormously influential on the contemporary melodic house and organic house scene, codifying a sensibility around emotional warmth and natural settings.',
    releases: [
      { title: 'All Day I Dream compilations series', year: 2013 },
    ]},

  { id:'mano_le_tough', label:'Mano Le Tough', type:'artist', genre:'melodic', era:2010, city:'Dublin', country:'IE',
    desc:'Niall Mannion — Mano Le Tough — is a Dublin-born, Berlin-based producer and DJ who has become one of the central artists in melodic house. His releases on Permanent Vacation, Wild Oats, Internasjonal, and his own Maeve label are built from a consistent aesthetic: emotional melodic lines, deep house rhythms, and an organic warmth that draws from house music\'s Chicago origins while inhabiting a contemporary European production style. His track "Primrose" (2013) is widely cited as a distillation of the melodic house aesthetic at its most effective.',
    releases: [
      { title: '"Primrose" (Permanent Vacation)', year: 2013 },
      { title: '"Nagisa" (Permanent Vacation)', year: 2014 },
    ]},

  { id:'midland', label:'Midland', type:'artist', genre:'deep', era:2012, city:'Birmingham', country:'UK',
    desc:'Matt Sherwood — Midland — is a Birmingham-born, London-based producer and DJ who emerged in the early 2010s with releases on Graded, Delsin, and Mr. Saturday Night. His productions fuse Chicago deep house, UK rave heritage, and introspective techno in a way that bridges several traditions without belonging fully to any of them. He has become one of the most in-demand DJs on the international underground circuit, and his DJ sets — characterised by broad range and technical precision — have helped revive interest in the deeper, house-inflected end of the UK electronic tradition.',
    releases: [
      { title: '"Final Credits" (Graded)', year: 2013 },
      { title: '"Bring It Around" (Hypercolour)', year: 2014 },
    ]},

  { id:'moloko', label:'Moloko', type:'artist', genre:'experimental', era:1995, city:'Sheffield', country:'UK',
    desc:'Moloko was the project of Roisin Murphy (from Arklow, Ireland) and Mark Brydon (from Sheffield). Brydon co-founded FON Records in Sheffield — the label that gave the early Warp scene its infrastructure — and brought deep knowledge of Sheffield\'s electronic culture to the partnership. Moloko developed a house-rooted electronic pop that resisted easy categorisation: funkier than trip-hop, more melodic than house, more politically aware than pop. "Sing It Back" (1999) in the Boris Dlugosch remix became a global house music hit. Murphy\'s subsequent solo career — particularly the albums Overpowered (2007) and Róisín Machine (2020) — extended the Moloko aesthetic in directions that confirmed her as one of the most significant voices in European dance music.',
    releases: [
      { title: 'Do You Like My Tight Sweater? (Echo)', year: 1995 },
      { title: '"Sing It Back" (Echo)', year: 1999 },
      { title: 'Things to Make and Do (Echo)', year: 2000 },
    ]},

  { id:'oxia', label:'Oxia', type:'artist', genre:'minimal', era:2003, city:'Lyon', country:'FR',
    desc:'Xavier Thomas — Oxia — is a Lyon-born, Berlin-based producer and DJ who became one of the defining artists of European minimal techno through releases on Systematic Recordings. His track "Whole" (Systematic, 2004) is considered a classic of the genre — a deep, hypnotic composition that demonstrated how minimal techno could sustain emotional depth without sacrificing rhythmic function. Releases on Diversions Music (his own label) and others have maintained a consistent approach: dense layering, careful timbral development, and a patience that rewards attentive listening as much as dancing.',
    releases: [
      { title: '"Whole" (Systematic Recordings)', year: 2004 },
      { title: '"Introspection" (Diversions Music)', year: 2008 },
    ]},

  { id:'pavel_petrov', label:'Pavel Petrov', type:'artist', genre:'deep', era:2005, city:'Prague', country:'CZ',
    desc:'Pavel Petrov is a Prague-based DJ and producer who has built an international reputation for deep, melodic techno with a distinctly Eastern European character. Releases on Kompakt, Innervisions, and his own Areal label reflect a consistent aesthetic built from hypnotic rhythms, melodic synthesiser work, and a sense of space and patience connecting Prague\'s underground to the broader European minimal tradition. His long DJ sets — often four to six hours — are central to his reputation, and his presence at Sónar, fabric, and Berghain has confirmed him as a significant figure in contemporary electronic music.',
    releases: [
      { title: '"We Are" (Kompakt)', year: 2015 },
      { title: 'Areal series (Areal Records)', year: 2010 },
    ]},

  { id:'robert_owens', label:'Robert Owens', type:'artist', genre:'chicago', era:1986, city:'Chicago', country:'US',
    desc:'Robert Owens is a Chicago vocalist and DJ whose voice is one of the defining sounds of deep house. His collaborations with Larry Heard — particularly "Bring Down the Walls" and "Mysteries of Love" released under the Mr. Fingers name in the late 1980s — established a template for gospel-inflected, emotionally direct house music that has influenced every subsequent generation of deep house producers. His solo recordings and ongoing DJ career have maintained that emotional directness across four decades, and his voice remains immediately recognisable as a document of Chicago house at its most spiritually profound.',
    releases: [
      { title: '"Bring Down the Walls" — Mr. Fingers ft. Robert Owens (Trax)', year: 1987 },
      { title: '"I\'ll Be Your Friend" (Fourth & Broadway)', year: 1992 },
      { title: '"Mine to Give" ft. Robbie Rivera', year: 2001 },
    ]},

  { id:'floorplan', label:'Floorplan', type:'artist', genre:'deep', era:2008, city:'Detroit', country:'US',
    desc:'Floorplan is Robert Hood\'s house and gospel-influenced project, operating alongside his minimal techno work as Robert Hood. Where Hood\'s techno productions are austere and functionalist, Floorplan explores the emotional and spiritual connections between house music and Black American church traditions — gospel, soul, and the sanctified sound that runs from Chicago\'s Black church culture directly into the Warehouse and Music Box. The track "Never Grow Old" (2013, Innervisions) became one of the most-played records of its era, a synthesis of Hood\'s technical minimalism and deep house\'s spiritual depth that demonstrated how completely the two traditions belong together.',
    releases: [
      { title: '"Tell You No Lie" (M-Plant)', year: 2008 },
      { title: '"Never Grow Old" (Innervisions)', year: 2013 },
      { title: 'Paradise (M-Plant)', year: 2013 },
    ]},

  { id:'sebo_k', label:'Sebo K', type:'artist', genre:'deep', era:2005, city:'Berlin', country:'DE',
    desc:'Sebo K is a Berlin-based DJ and producer whose warm, deeply musical approach to house has made him a fixture of the city\'s underground since the mid-2000s. His releases on Mobilee Records, Werkstatt Recordings, and Running Back reflect an aesthetic rooted in Chicago deep house and soul, filtered through the sensibilities of the Berlin scene. His DJ sets — long, unhurried, and emotionally generous — have earned him residencies at Watergate and consistent bookings at the major European clubs. He is one of the clearest examples of a producer who takes the spiritual content of early house music seriously.',
    releases: [
      { title: '"On My Own" (Mobilee)', year: 2008 },
      { title: '"Take It Easy" (Mobilee)', year: 2011 },
    ]},

  // ── CHICAGO DEEP ─────────────────────────────────────────────────────────
  { id:'derrick_carter', label:'Derrick Carter', type:'artist', genre:'chicago', era:1992, city:'Chicago', country:'US',
    desc:'Derrick Carter is a Chicago DJ and producer who has been one of the city\'s most important musical ambassadors since the early 1990s. Where many Chicago artists became identified with a specific sound, Carter\'s range has always been wide — from deep house to disco, from garage to more experimental electronic music. He co-founded Classic Music Company and has released on Skint, Peacefrog, and many others. His residency at Smartbar and his influence on a generation of European DJs who came to Chicago to hear him — including many associated with the Berlin and Hamburg scenes — make him a crucial connective figure between American and European house.',
    releases: [
      { title: 'Future Disco (Skint)', year: 1998 },
      { title: '"Let It" (Classic Music Company)', year: 2001 },
    ]},

  { id:'boo_williams', label:'Boo Williams', type:'artist', genre:'deep', era:1994, city:'Chicago', country:'US',
    desc:'Boo Williams is a Chicago deep house producer and DJ whose work documents the continuation of Larry Heard\'s deep house tradition into the mid-1990s and beyond. His releases on Trax, Peacefrog, and Smallville reflect a production approach built on slowly evolving chord progressions, restrained percussion, and an emotional patience that connects directly to "Can You Feel It" and "Mystery of Love." He is one of the artists most responsible for maintaining the spiritual and emotional depth of Chicago deep house as a living practice rather than a historical artefact.',
    releases: [
      { title: '"Spirit of Trax" (Trax)', year: 1995 },
      { title: 'Home Boy (Peacefrog)', year: 1999 },
    ]},

  { id:'glenn_underground', label:'Glenn Underground', type:'artist', genre:'deep', era:1993, city:'Chicago', country:'US',
    desc:'Glenn Underground — Glenn Cooper — is a Chicago producer and DJ whose work represents the deepest, most extended end of the Chicago house tradition. His productions on Cajual, Sello Muzik (his own label), and other outlets are built from long, slowly evolving structures, complex chord voicings, and a trance-like patience that owes as much to jazz and gospel as to club music. He is one of the purest expressions of what deep house means when it is taken seriously as a compositional form rather than a functional dance genre.',
    releases: [
      { title: 'Atmosphere (Peacefrog)', year: 1996 },
      { title: 'C.V.O. (Sello Muzik)', year: 1998 },
    ]},

  // ── NYC HOUSE ─────────────────────────────────────────────────────────────
  { id:'todd_terry', label:'Todd Terry', type:'artist', genre:'chicago', era:1988, city:'New York', country:'US',
    desc:'Todd Terry is a Brooklyn-born DJ and producer who was one of the first New York artists to fully synthesise Chicago house with the harder rhythms and raw energy of New York\'s underground. His early productions on Freeze Records — particularly "Can You Party" (1988) and "Bango (To the Batmobile)" — were foundational for New York house and influenced the development of UK rave and garage. He produced for Everything But the Girl ("Missing", 1994) and has maintained a continuous recording and DJ career for four decades. His rough, sample-heavy approach contrasted with the smoother garage sound and helped define New York house\'s particular character.',
    releases: [
      { title: '"Can You Party" (Freeze)', year: 1988 },
      { title: '"Bango (To the Batmobile)" (Freeze)', year: 1990 },
      { title: '"Keep On Jumpin\'" (Manifesto)', year: 1996 },
    ]},

  { id:'mood_ii_swing', label:'Mood II Swing', type:'artist', genre:'deep', era:1990, city:'New York', country:'US',
    desc:'Mood II Swing — Lem Springsteen and John Ciafone — are a New York production duo who became central figures in the NYC garage and deep house scene of the 1990s. Their productions for Shelter Records and Strictly Rhythm brought a gospel-influenced warmth and orchestral sophistication to New York house, drawing directly on the Paradise Garage and Larry Levan\'s legacy. They produced for Byron Stingily, Inaya Day, and many others, and their remixes — for Everything But the Girl, Janet Jackson, and dozens of underground artists — helped define how deep house and garage sounded in the mid-1990s.',
    releases: [
      { title: '"Do It" (Vibe)', year: 1991 },
      { title: '"I See A New Day" (Strictly Rhythm)', year: 1993 },
    ]},

  { id:'danny_tenaglia', label:'Danny Tenaglia', type:'artist', genre:'deep', era:1990, city:'New York', country:'US',
    desc:'Danny Tenaglia is a Brooklyn-born DJ who became one of the defining figures of New York underground house music in the 1990s. A protégé of Frankie Knuckles who refined his approach at Miami clubs before returning to New York, Tenaglia developed a residency at Twilo in Manhattan that became one of the most celebrated in the city\'s dance music history. His marathon DJ sets — often running six to twelve hours — and his productions for Twisted America and other labels positioned him at the centre of a NYC underground that connected the Paradise Garage legacy to the international club circuit. His influence on European DJs who came to New York to experience his sets is significant.',
    releases: [
      { title: '"Bottom Feeder" (Twisted America)', year: 1996 },
      { title: 'Global Underground 007: Athens (Boxset)', year: 1998 },
    ]},

  // ── MIAMI — MURK ──────────────────────────────────────────────────────────
  { id:'murk', label:'Murk', type:'artist', genre:'deep', era:1991, city:'Miami', country:'US',
    desc:'Murk is the Miami production duo of Oscar G (Oscar Gaetan) and Ralph Falcon. Their productions from the early 1990s onward — on their own Murk Records and through remixes for international labels — developed a distinctively Miami approach to house music: tribal percussion, raw funk, and an uncompromising physicality that drew from Cuban and Latin musical roots as much as from Chicago. Daft Punk sampled their "Olé Olé" for "One More Time." Their influence on the development of minimal and tech house in Europe has been acknowledged by producers including Ricardo Villalobos. As remixers, they touched virtually every significant house artist of the 1990s and 2000s.',
    releases: [
      { title: '"Reach Up" (Murk)', year: 1992 },
      { title: '"Fired Up" (Murk)', year: 1992 },
      { title: '"Dark Beat" (Murk)', year: 1993 },
    ]},

  // ── FRANKFURT — RUNNING BACK / GERD JANSON ────────────────────────────────
  { id:'gerd_janson', label:'Gerd Janson', type:'artist', genre:'deep', era:2003, city:'Frankfurt', country:'DE',
    desc:'Gerd Janson is a Frankfurt-based DJ and the founder of Running Back Records. His DJ sets are among the most eclectic and knowledgeable in house music — ranging across disco, deep house, Italo, Balearic, and experimental electronics in ways that refuse genre boundaries while maintaining an unwavering commitment to quality and feeling. Running Back has become one of the most consistently respected labels in house music, and Janson\'s taste-making has been influential across the European and American underground. He is one of the clearest examples of a DJ who is also a musical scholar — his sets are an education.',
    releases: [
      { title: 'Running Back label releases', year: 2007 },
    ]},

  { id:'running_back', label:'Running Back', type:'label', genre:'deep', era:2007, city:'Frankfurt', country:'DE',
    desc:'Running Back was founded in Frankfurt in 2007 by Gerd Janson. It has become one of the most respected house and electronic labels, releasing music by Isolée, Dennis Ferrer, Anthony Shake Shakir, Move D, Tornado Wallace, and many others. The label\'s aesthetic is defined by Janson\'s omnivorous taste — it encompasses disco, deep house, minimal, Balearic, and experimental electronic music while maintaining a consistent commitment to quality over genre. Running Back is one of the labels that has best demonstrated how the entire tradition of dance music can be treated as a unified field rather than a set of separate genres.',
    releases: [
      { title: 'Running Back 001 — Isolée', year: 2007 },
    ]},

  // ── LONDON — PLASTIC PEOPLE ───────────────────────────────────────────────
  { id:'plastic_people', label:'Plastic People', type:'venue', genre:'experimental', era:1994, city:'London', country:'UK',
    desc:'Plastic People was a basement club at 147-149 Curtain Road in Shoreditch, London, open from 1994 to 2015. Despite its modest size — capacity around 200 — it was one of the most influential clubs in UK electronic music history, serving as a primary incubator for dubstep, UK funky, and various forms of experimental club music. Benji B\'s Deviation night there was where dubstep and grime DJs encountered the international underground; Four Tet, Floating Points, and many others played formative early sets in its basement. The club closed in 2015 after a licensing dispute. Its loss was mourned as the end of an era for London\'s underground.',
    },

  // ── BERLIN — RODRIGUEZ JR. / MOR ELIAN ───────────────────────────────────
  { id:'rodriguez_jr', label:'Rodriguez Jr.', type:'artist', genre:'deep', era:2008, city:'Paris', country:'FR',
    desc:'Rodriguez Jr. — Olivier Mateu — is a French producer and live artist based in Berlin. His releases on Mobilee Records, Yoshitoshi, and other labels combine deep house structures with a live performance approach centred on synthesisers and hardware, giving his music a warmth and spontaneity unusual in studio-produced house. His live sets — performed entirely on hardware — have become a hallmark of the contemporary European festival and club circuit, and he represents a strand of French electronic production that connects the French touch heritage to the Berlin melodic house tradition.',
    releases: [
      { title: '"Neon" (Mobilee)', year: 2010 },
      { title: '"Fleurs" (Mobilee)', year: 2014 },
    ]},

  { id:'mor_elian', label:'Mor Elian', type:'artist', genre:'experimental', era:2017, city:'Berlin', country:'DE',
    desc:'Mor Elian is an Israeli-born, Berlin-based producer and DJ whose releases on Pentatone (her own label) have established her as one of the most distinctive voices in contemporary experimental club music. Her productions draw on dub, techno, and abstract electronics with a physicality and textural richness that owes something to the Basic Channel tradition while remaining entirely contemporary. She plays regularly at Berghain and Concrete, and her label has developed a consistent aesthetic around deep, rhythmically complex music that rewards patient listening.',
    releases: [
      { title: 'Pentatone series (Pentatone)', year: 2017 },
    ]},

  // ── UK — DANIEL AVERY / PHANTASY SOUND ────────────────────────────────────
  { id:'phantasy_sound', label:'Phantasy Sound', type:'label', genre:'experimental', era:2008, city:'London', country:'UK',
    desc:'Phantasy Sound was founded in London in 2008 by Erol Alkan. It has become one of the UK\'s most respected independent labels, releasing music by Daniel Avery, Ghost Poet, Connan Mockasin, and others. The label\'s aesthetic spans dance music, indie, and experimental electronics, unified by a commitment to emotional intensity and sonic ambition. Phantasy is unusual in treating club music and song-based music as equivalent rather than separate, reflecting Alkan\'s own career as both a DJ and a producer for rock and pop artists.',
    releases: [
      { title: 'Drone Logic — Daniel Avery (Phantasy)', year: 2013 },
    ]},

  { id:'daniel_avery', label:'Daniel Avery', type:'artist', genre:'experimental', era:2012, city:'London', country:'UK',
    desc:'Daniel Avery is a Brighton-born, London-based producer and DJ who emerged through the Phantasy Sound label and has become one of the most critically respected British electronic artists of his generation. His debut album Drone Logic (2013) synthesised acid house, drone music, and techno into a personal and emotionally direct body of work. His subsequent albums have moved into more ambient and experimental territory while maintaining the physical intensity of his club work. He is associated with the post-rave tradition that runs from Warp through Four Tet to a broader culture of producers who treat electronic music as serious compositional practice.',
    releases: [
      { title: 'Drone Logic (Phantasy)', year: 2013 },
      { title: 'Song For Alpha (Phantasy)', year: 2018 },
      { title: 'Love + Light (Phantasy)', year: 2020 },
    ]},

  // ── GERMANY — ISOLÉE ──────────────────────────────────────────────────────
  { id:'isolee', label:'Isolée', type:'artist', genre:'minimal', era:1999, city:'Heidelberg', country:'DE',
    desc:'Isolée — Rajko Müller — is a Heidelberg-born producer who became one of the defining artists of German minimal and microhouse through releases on Playhouse Records and later Running Back. His debut album Rest (2000, Playhouse) is a landmark of minimal house: meticulously constructed, rhythmically complex, and simultaneously austere and warm. His influence on the development of European minimal — on Villalobos, on Perlon, on the Cologne scene generally — is significant. He releases infrequently but each record is considered carefully and occupies a distinct place in the minimal tradition.',
    releases: [
      { title: 'Rest (Playhouse)', year: 2000 },
      { title: '"Beau Mot Plage" (Playhouse)', year: 2001 },
      { title: '"Schrapnell" (Running Back)', year: 2012 },
    ]},

  // ── AUSTRALIA — TORNADO WALLACE / EFFICIENT SPACE ────────────────────────
  { id:'efficient_space', label:'Efficient Space', type:'label', genre:'disco', era:2015, city:'Melbourne', country:'AU',
    desc:'Efficient Space is a Melbourne-based label founded by Tornado Wallace dedicated to cosmic, Balearic, and world dance music — releasing compilations of rare and obscure dance music from Africa, Latin America, Asia, and beyond alongside contemporary artists working in related territory. The label is part of a broader Australian engagement with global dance music that goes beyond European and American references, and its releases have introduced many listeners to non-Western dance traditions that predate or run parallel to house music\'s development.',
    releases: [
      { title: 'Sky Walking (Efficient Space)', year: 2017 },
    ]},

  { id:'tornado_wallace', label:'Tornado Wallace', type:'artist', genre:'disco', era:2015, city:'Melbourne', country:'AU',
    desc:'Tornado Wallace is a Melbourne-based producer and DJ whose music sits at the intersection of cosmic disco, Balearic music, and Australian bush culture. His releases on Efficient Space and Beats in Space are built from a warm, improvised aesthetic that draws on Daniele Baldelli\'s cosmic tradition, African rhythms, and the eternal summer of Australian outdoor parties. He founded Efficient Space as a platform for global dance music outside Western commercial circuits, and his own productions are among the most emotionally generous and physically alive in contemporary electronic music.',
    releases: [
      { title: 'Lonely Planet (Efficient Space)', year: 2017 },
      { title: 'Presence (Beats in Space)', year: 2020 },
    ]},

  { id:'s_a_m', label:'S.A.M', type:'artist', genre:'deep', era:2012, city:'Amsterdam', country:'NL',
    desc:'S.A.M is a Danish-born producer and DJ based in the Netherlands. His releases on Delaphine Records and other labels work at the intersection of deep house, minimal techno, and experimental club music.',
    releases: [
      { title: 'Delaphine releases', year: 2014 },
    ]},

  { id:'delaphine', label:'Delaphine Records', type:'label', genre:'deep', era:2013, city:'Amsterdam', country:'NL',
    desc:'Delaphine Records is an Amsterdam-based label releasing deep, hypnotic electronic music at the intersection of house and minimal techno. It is part of the Dutch underground network centred on Amsterdam — a small but internationally respected scene operating quietly outside the major metropolitan hubs. The label\'s releases reflect a curatorial sensibility that prioritises depth, patience, and musical substance over trend or volume.',
    releases: [
      { title: 'Delaphine 001', year: 2013 },
    ]},

  // ── YOUTUBE CHANNELS — CURATORIAL PLATFORMS ──────────────────────────────
  { id:'mazlow_unknown', label:'MazlowUnknown', type:'channel', genre:'experimental', era:2015, city:'Various', country:'DE',
    desc:'MazlowUnknown is a YouTube channel dedicated to curating and uploading rare, deep, and emerging electronic music — operating as a kind of independent taste-making platform in the tradition of record shops and fanzines. Channels like this have become primary discovery infrastructure for underground electronic music, connecting producers with global audiences outside the traditional label and radio systems. The channel draws from techno, experimental, and deep electronic music with an editorial sensibility that reflects genuine expertise rather than algorithmic curation.',
    },

  { id:'acidalia', label:'Acidalia', type:'channel', genre:'techno', era:2016, city:'Various', country:'BE',
    desc:'Acidalia is a YouTube channel focused on acid, techno, and club music, functioning as a continuous archive and discovery platform. Its curatorial identity — centred on the acidic, hardware-driven end of club music — mirrors the role that specialist record shops and pirate radio once played: giving marginal but important sounds a dedicated platform and building communities of listeners who would not otherwise find each other. The channel name references acid house\'s chemical metaphor while the programming extends across the full lineage from Phuture to contemporary hardware-based productions.',
    },

  { id:'slav_channel', label:'Slav', type:'channel', genre:'experimental', era:2017, city:'Various', country:'RU',
    desc:'Slav is a YouTube channel channelling Eastern European and global underground electronic music, operating at the intersection of techno, industrial, and experimental club sounds. Its curatorial sensibility reflects the aesthetic of post-Soviet underground scenes — Bassiani, Cxema, the Romanian minimal lineage — and presents this music to an international audience that might not otherwise access it. Like the best of these channels, it is effectively an editorial statement about what matters in electronic music, assembled without institutional resources or commercial motive.',
    },

  { id:'moskalusk', label:'Moskalusk', type:'channel', genre:'techno', era:2016, city:'Various', country:'RU',
    desc:'Moskalusk is a YouTube channel dedicated to techno and electronic music from the deeper, harder end of the spectrum. Its programming draws heavily from Eastern European producers and the international techno underground, and it has played a significant role in connecting Slavic underground scenes with a global audience. The channel operates as a curation platform with a clear editorial identity — refusing the commercial and festival-headliner techno that dominates the genre\'s mainstream visibility in favour of more austere and physically demanding music.',
    },

  { id:'verzila', label:'verzila', type:'channel', genre:'deep', era:2018, city:'Various', country:'NL',
    desc:'verzila is a YouTube channel with a curatorial focus on deep, hypnotic, and emotionally rich electronic music — operating across deep house, ambient techno, and experimental club music with an editorial sensibility that prioritises texture and feeling over tempo and function. Channels like verzila have effectively replaced the role of specialist magazines and radio programmes in introducing listeners to unfamiliar music, and their playlists have become reference documents for the sounds that matter in a given moment of underground electronic culture.',
    },

  { id:'genome_666', label:'Genome 6.66 Mbp', type:'label', genre:'experimental', era:2015, city:'Various', country:'CN',
    desc:'Genome 6.66 Mbp is a label and collective associated with the Chinese and broader Asian underground electronic scene, releasing music that intersects experimental club music, noise, and post-internet aesthetics. Its artists — operating from Beijing, Shanghai, and elsewhere — engage with both the global techno and experimental electronic traditions and specifically Chinese cultural and social contexts. The label represents a generation of Asian electronic artists who have developed their practice partly through the global internet-era underground rather than through physical proximity to established scenes, producing music that is simultaneously globally connected and locally distinct.',
    releases: [
      { title: 'Various releases (Genome 6.66 Mbp)', year: 2015 },
    ]},

  // ── UK — RAVE / ELECTRONIC CLASSICS ──────────────────────────────────────
  { id:'new_order', label:'New Order', type:'artist', genre:'experimental', era:1980, city:'Manchester', country:'UK',
    desc:'New Order formed in Manchester in 1980 from the remains of Joy Division following Ian Curtis\'s death. Their synthesis of post-punk with synthesisers and drum machines — particularly on singles like "Blue Monday" (1983), the best-selling twelve-inch in history — created a template that directly shaped acid house, the Haçienda, and British dance music more broadly. Peter Hook\'s melodic bass style and Bernard Sumner\'s synthesiser approach were foundational influences on producers across the 1980s and 1990s. "Blue Monday" was produced in direct response to hearing Kraftwerk and Giorgio Moroder, making New Order the explicit channel through which Düsseldorf and Munich\'s machine music entered Manchester and then the global dance music economy.',
    releases: [
      { title: '"Blue Monday" (Factory)', year: 1983 },
      { title: 'Power, Corruption & Lies (Factory)', year: 1983 },
      { title: 'Low-life (Factory)', year: 1985 },
      { title: 'Technique (Factory)', year: 1989 },
    ]},

  { id:'underworld', label:'Underworld', type:'artist', genre:'experimental', era:1980, city:'London', country:'UK',
    bandcamp:'underworld', bandcamp_album:'3531217747',
    desc:'Underworld — Karl Hyde and Rick Smith — developed from a mid-1980s band into one of the defining electronic acts of the 1990s rave era. "Born Slippy .NUXX" (1995) and its appearance in Trainspotting made them mainstream-visible, but their album catalogue — from Dubnobasswithmyheadman (1994) through Second Toughest in the Infants (1996) — is among the most musically ambitious in British electronic music. Their approach combined techno\'s rhythmic drive with Hyde\'s stream-of-consciousness vocal style and a textural sophistication rooted in ambient electronics. They have continued releasing at a high level for four decades.',
    releases: [
      { title: 'Dubnobasswithmyheadman (Junior Boy\'s Own)', year: 1994 },
      { title: 'Second Toughest in the Infants (Junior Boy\'s Own)', year: 1996 },
      { title: '"Born Slippy .NUXX" (Junior Boy\'s Own)', year: 1995 },
    ]},

  { id:'chemical_brothers', label:'Chemical Brothers', type:'artist', genre:'experimental', era:1991, city:'Manchester', country:'UK',
    desc:'Tom Rowlands and Ed Simons — The Chemical Brothers — met at Manchester University in 1989 and became one of the defining acts of British big beat and electronic music during the 1990s. Beginning as DJs at The Naked Eye, their early productions combined sampled breakbeats with acid house textures and psychedelic elements into a viscerally physical club music. Albums including Exit Planet Dust (1995), Dig Your Own Hole (1997), and Surrender (1999) brought electronic music to arena audiences without sacrificing rhythmic and sonic integrity. Their influence on the generation of electronic producers who followed is pervasive and difficult to overstate.',
    releases: [
      { title: 'Exit Planet Dust (Junior Boy\'s Own)', year: 1995 },
      { title: 'Dig Your Own Hole (Freestyle Dust)', year: 1997 },
      { title: 'Surrender (Freestyle Dust)', year: 1999 },
      { title: 'Come with Us (Freestyle Dust)', year: 2002 },
    ]},

  // ── DETROIT EXPANDED ──────────────────────────────────────────────────────
  { id:'dopplereffekt', label:'Dopplereffekt', type:'artist', genre:'experimental', era:1992, city:'Detroit', country:'US',
    desc:'Dopplereffekt is a Detroit-based project by Gerald Donald (also known as Heinrich Mueller), who was also a member of Drexciya. Operating with a consistently pseudonymous approach that refused biographical disclosure, Dopplereffekt produced electro and technoid music drawing on German industrial and Kraftwerk as heavily as on Detroit\'s own traditions. Releases on Dataphysix, International Deejay Gigolos, and their own label from the early 1990s onwards are among the most influential in Detroit electro and in the broader culture of anonymous, concept-driven electronic music. The project\'s engagement with science, biology, and systems theory as lyrical themes was singular.',
    releases: [
      { title: 'Infophysix (Dataphysix)', year: 1996 },
      { title: 'Gesamtkunstwerk (Dataphysix)', year: 1999 },
      { title: 'Calabi Yau Space (Leisure System)', year: 2007 },
    ]},

  { id:'adult_dot', label:'Adult.', type:'artist', genre:'experimental', era:1998, city:'Detroit', country:'US',
    desc:'Adult. — Nicola Kuperus and Adam Lee Miller — formed in Detroit in 1998 and developed a minimalist synth-punk and electropunk practice that sat at the intersection of dance music, noise, and post-punk. Their releases on Ersatz Audio (their own label) and Thrill Jockey fused the rawness of industrial music with functional dance rhythms and confrontational vocals. As Detroit artists working in the late 1990s and 2000s, they represent a different facet of the city\'s electronic tradition — its connection to the American underground, industrial music, and the no-wave lineage — than the more globally celebrated techno narrative.',
    releases: [
      { title: 'Resuscitation (Ersatz Audio)', year: 2001 },
      { title: 'Anxiety Always (Thrill Jockey)', year: 2003 },
    ]},

  { id:'green_velvet', label:'Green Velvet', type:'artist', genre:'house', era:1992, city:'Chicago', country:'US',
    desc:'Curtis Alan Jones — Green Velvet, also known as Cajmere — is a Chicago producer and DJ who has been a consistent and influential voice in Chicago house since the early 1990s. His label Relief Records, founded in 1992, was a platform for rough, functional house music in the tradition of Dance Mania while drawing on acid and harder techno elements. Green Velvet\'s productions — particularly "Answering Machine" (1995) and "Flash" (2012) — balance absurdist humour with serious rhythmic construction. His DJ sets are technically accomplished and reflect an encyclopaedic knowledge of house music\'s history.',
    releases: [
      { title: '"Answering Machine" (Relief)', year: 1995 },
      { title: '"La La Land" (Relief)', year: 1997 },
      { title: '"Flash" (Green Velvet)', year: 2012 },
    ]},

  { id:'daniel_bell', label:'Daniel Bell', type:'artist', genre:'minimal', era:1993, city:'Detroit', country:'US',
    desc:'Daniel Bell is a Detroit-born producer whose early releases under the DBX alias in the 1990s were foundational for minimal tech-house. His stripped, hypnotic productions — released on Tresor, Harmonie Park, and his own Accelerate label — applied Detroit\'s rhythmic discipline to the minimal aesthetics developing simultaneously in Chicago and Europe. Bell was an early proponent of the looped, detail-focused approach to techno that would come to define the Cologne minimal scene, and his influence on producers including Ricardo Villalobos and Marco Carola is well documented.',
    releases: [
      { title: '"Losing Control" — DBX (Tresor)', year: 1994 },
      { title: '"You" — DBX (Harmonie Park)', year: 1996 },
    ]},

  // ── GERMANY EXPANDED ─────────────────────────────────────────────────────
  { id:'pole', label:'Pole', type:'artist', genre:'ambient', era:1998, city:'Berlin', country:'DE',
    desc:'Pole is the project of Stefan Betke, a Berlin-based producer who began releasing music in 1998 after a broken Waldorf 4-Pole filter became the sonic signature of his approach. The filter\'s characteristic crackling and hissing sound became the basis for a dub techno practice that extended Basic Channel\'s template into more minimal and fragile territory. His trilogy of self-titled albums (1998–2000) are among the defining records of Berlin\'s dub electronics tradition. Betke founded the Scape label in 2001, which has released music by Moritz von Oswald, ~scape collective, and others at the intersection of dub, techno, and contemporary composition.',
    releases: [
      { title: 'Pole 1 (Kiff SM)', year: 1998 },
      { title: 'Pole 2 (Kiff SM)', year: 1999 },
      { title: 'Pole 3 (Kiff SM)', year: 2000 },
    ]},

  { id:'mouse_on_mars', label:'Mouse on Mars', type:'artist', genre:'experimental', era:1993, city:'Cologne', country:'DE',
    desc:'Mouse on Mars — Jan St. Werner and Andi Toma — formed in Cologne in 1993 and have released on Thrill Jockey and Sonig across a thirty-year career that has consistently resisted genre classification. Their music combines the machine aesthetics of Cologne\'s electronic tradition with a playfulness, formal experimentation, and engagement with jazz and improvised music that is unique in the German scene. Albums including Iaora Tahiti (1995), Glam (1998), and Idiology (2001) are touchstones of Cologne experimental electronic music. Werner has also collaborated extensively with Markus Popp (Oval) and others at the intersection of digital audio and conceptual art.',
    releases: [
      { title: 'Vulvaland (Too Pure)', year: 1994 },
      { title: 'Iaora Tahiti (Thrill Jockey)', year: 1995 },
      { title: 'Glam (Thrill Jockey)', year: 1998 },
    ]},

  { id:'dj_hell', label:'DJ Hell', type:'artist', genre:'experimental', era:1991, city:'Munich', country:'DE',
    desc:'Helmut Josef Geier — DJ Hell — is a Munich-born DJ and producer who founded International Deejay Gigolos Records in Munich in 1997. The label became one of the primary platforms for electropunk, electroclash, and the 2000s revival of electro and new wave aesthetics in a club context, releasing music by Miss Kittin, The Hacker, Dopplereffekt, and others. Hell\'s DJ sets and recordings positioned him at the intersection of the German club tradition, new wave nostalgia, and the New York and Paris underground scenes that coalesced around electroclash in the early 2000s.',
    releases: [
      { title: 'Electronicbody/Housemusic (Gigolo)', year: 1999 },
      { title: 'Teufelswerk (Gigolo)', year: 2000 },
      { title: 'Zukunftsmusik (Gigolo)', year: 2013 },
    ]},

  // ── NETHERLANDS — HARD ELECTRO ────────────────────────────────────────────
  { id:'i_f', label:'I-F', type:'artist', genre:'experimental', era:1993, city:'Den Haag', country:'NL',
    desc:'I-F — Interstellar Funk\'s predecessor and a completely separate artist — is a Den Haag-based DJ and producer who has been a central figure in Dutch electro and hard electronic music since the early 1990s. Releasing on Clone Records and his own Viewlexx imprint, his productions apply a hard, uncompromising approach to electro and space disco that draws from Detroit, industrial, and European machine music equally. His compilations Mixed Up in the Hague volumes are essential documents of the Den Haag electro underground.',
    releases: [
      { title: '"Space Invaders Are Smoking Grass" (Viewlexx)', year: 1997 },
      { title: 'Mixed Up in the Hague (Viewlexx)', year: 1997 },
    ]},

  { id:'bunker_records', label:'Bunker Records', type:'label', genre:'experimental', era:1997, city:'Den Haag', country:'NL',
    desc:'Bunker Records was founded in Den Haag in 1997 and became one of the defining labels for hard, primitive electro and techno in Europe. Its releases — by I-F, Legowelt, Colder, and others — applied a stripped, lo-fi production aesthetic and an obsessive focus on rhythm and texture that contrasted sharply with the polished minimal techno developing simultaneously in Cologne and Berlin. Bunker\'s influence on subsequent generations of raw, DIY electronic music — from Creme Organization to the contemporary dark electro scene — is significant and largely uncelebrated in mainstream electronic music history.',
    releases: [
      { title: 'Bunker 001 — DJ Deeon', year: 1997 },
      { title: 'Bunker 3000 — Bunker 3000 (compilation)', year: 2000 },
    ]},

  // ── FRANCE — ELECTROCLASH / ELECTROPOP ────────────────────────────────────
  { id:'miss_kittin', label:'Miss Kittin', type:'artist', genre:'experimental', era:1997, city:'Grenoble', country:'FR',
    desc:'Caroline Hervé — Miss Kittin — is a French DJ and vocalist from Grenoble who became one of the defining figures of the electroclash movement through her collaborations with The Hacker. Their single "Frank Sinatra" (1999) and album First Album (2001) are among the most cited records of the early 2000s intersection of electro, new wave, and club music. Kittin\'s DJ sets became influential in their own right, and she released solo records on DJ Hell\'s Gigolo label and later on her own label. She represents the French contribution to electroclash alongside Daft Punk\'s less ironic French touch.',
    releases: [
      { title: '"Frank Sinatra" — Miss Kittin & The Hacker (Gigolo)', year: 1999 },
      { title: 'First Album — Miss Kittin & The Hacker (Gigolo)', year: 2001 },
      { title: 'I Com (Kitty-Yo)', year: 2004 },
    ]},

  { id:'the_hacker', label:'The Hacker', type:'artist', genre:'experimental', era:1997, city:'Grenoble', country:'FR',
    desc:'Michel Amato — The Hacker — is a French producer and DJ from Grenoble who formed the defining electroclash partnership with Miss Kittin. His productions draw directly from EBM, industrial, and electro, applying a harder, more abrasive approach to club music than the French touch contemporaries working in Paris. Releases on International Deejay Gigolos and his own label Broque reflect a consistent commitment to machine music\'s harsher ends. The Hacker\'s DJ sets — typically harder and more aggressive than Kittin\'s — were a significant influence on the European electro-techno scene of the 2000s.',
    releases: [
      { title: 'First Album — Miss Kittin & The Hacker (Gigolo)', year: 2001 },
      { title: '做噪音 (Making Noise) (Gigolo)', year: 2006 },
    ]},

  // ── CANADA — MONTREAL ─────────────────────────────────────────────────────
  { id:'turbo_recordings', label:'Turbo Recordings', type:'label', genre:'techno', era:2001, city:'Montreal', country:'CA',
    desc:'Turbo Recordings was founded in Montreal in 2001 by Tiga and is one of the most internationally recognised Canadian electronic music labels. Its catalogue spans electro, techno, house, and electroclash, with releases by Tiga, Jesper Dahlbäck, Boys Noize, and others. Turbo positioned Montreal — a city with a lively underground club scene but relatively low international profile in electronic music — as a significant node in the global techno economy. The label\'s aesthetic has shifted considerably over two decades but maintains a commitment to high production values and an irreverent sensibility.',
    releases: [
      { title: '"You Gonna Want Me" — Tiga (Turbo)', year: 2001 },
      { title: 'Sexor — Tiga (Turbo)', year: 2006 },
    ]},

  { id:'tiga', label:'Tiga', type:'artist', genre:'experimental', era:1997, city:'Montreal', country:'CA',
    desc:'Tiga Sontag is a Montreal-born DJ and producer who co-founded Turbo Recordings and became one of the most internationally visible Canadian electronic artists. His productions blend electroclash, techno, and electro with a pop sensibility that made him a significant figure in the early 2000s electroclash moment and subsequent shifts in club music. His cover of Corey Hart\'s "Sunglasses at Night" was a minor global hit; subsequent albums demonstrated a more consistent engagement with functional club music. He has remained active as a DJ and producer while running Turbo.',
    releases: [
      { title: 'Sexor (Turbo)', year: 2006 },
      { title: '"You Gonna Want Me" (Turbo)', year: 2001 },
    ]},

  // ── USA — PHILADELPHIA / MIDWEST ──────────────────────────────────────────
  { id:'josh_wink', label:'Josh Wink', type:'artist', genre:'house', era:1991, city:'Philadelphia', country:'US',
    desc:'Josh Winkelman — Josh Wink — is a Philadelphia-born DJ and producer and the founder of Ovum Recordings (1994). His track "Higher State of Consciousness" (1995) was one of the defining acid house records of the 1990s, bringing the TB-303 back into mainstream club music in a period when it had largely disappeared from production. Wink has maintained a consistent recording and DJing career for three decades, operating between Philadelphia\'s underground and the European club circuit. Ovum Recordings has documented the Philadelphia scene and connected it to a global network of producers working in deep house, techno, and experimental electronic music.',
    releases: [
      { title: '"Higher State of Consciousness" (Strictly Rhythm)', year: 1995 },
      { title: '"Don\'t Laugh" (Ovum)', year: 1994 },
    ]},

  // ── AUSTRIA — VIENNA ──────────────────────────────────────────────────────
  { id:'elektro_guzzi', label:'Elektro Guzzi', type:'artist', genre:'techno', era:2007, city:'Vienna', country:'AT',
    desc:'Elektro Guzzi is a Vienna-based trio — Bernhard Hammer (guitar), Jakob Schneidewind (bass), and Bernhard Breuer (drums) — who perform minimal techno entirely on live instruments, without electronics or sequencers. Their approach takes the repetitive, process-based structures of minimal techno and executes them as chamber music, creating a music that is simultaneously recognisable as techno and radically different from any other act in that tradition. Releases on Macro Recordings have documented a practice that asks fundamental questions about what techno is and what distinguishes it from other forms of pattern-based music.',
    releases: [
      { title: 'Elektro Guzzi (Macro)', year: 2009 },
      { title: 'Parquet (Macro)', year: 2012 },
      { title: 'Polyester (Macro)', year: 2015 },
    ]},

  // ── SOUTH KOREA EXPANDED ─────────────────────────────────────────────────
  { id:'yaeji', label:'Yaeji', type:'artist', genre:'house', era:2017, city:'New York', country:'KR',
    desc:'Yaeji (Jaehyun Lee) is a Korean-American producer and DJ based in New York who emerged in 2017 with a self-titled EP that combined Chicago house and New York club music with Korean-language vocals and a distinct visual identity. Her music operates in the intersection of house, ambient, and pop, with a lo-fi aesthetic and emotional directness that connects her to the Chicago deep house tradition while remaining firmly contemporary. She has performed at Berghain and major festivals worldwide, and her success represents a broader shift in electronic music toward a more internationally diverse range of voices.',
    releases: [
      { title: 'Yaeji EP (Godmode)', year: 2017 },
      { title: 'EP2 (Godmode)', year: 2017 },
      { title: 'What We Drew (Godmode)', year: 2020 },
    ]},

  { id:'park_hye_jin', label:'Park Hye Jin', type:'artist', genre:'house', era:2018, city:'Seoul', country:'KR',
    desc:'Park Hye Jin is a Seoul-born, Los Angeles-based DJ and producer who emerged from the Seoul club scene and quickly achieved international recognition. Her productions combine Chicago-rooted house rhythms with Korean lyrics and a stripped, lo-fi production sensibility. She has released on Ninja Tune and played at Boiler Room, Fabric, and other major international platforms. Park Hye Jin represents a generation of Korean artists who have absorbed the deep house tradition and transformed it through a specifically Korean cultural perspective, creating music that is both globally literate and distinctly positioned.',
    releases: [
      { title: 'How can I (Ninja Tune)', year: 2020 },
      { title: 'Before I Die (Ninja Tune)', year: 2021 },
    ]},

  // ── UK TECH HOUSE — WIGGLE / PURE SCIENCE ────────────────────────────────
  { id:'pure_science', label:'Pure Science', type:'artist', genre:'techhouse', era:1990, city:'London', country:'UK',
    bandcamp:'purescience',
    desc:'Pure Science is the London-based project of Phivo, who began releasing music in 1990 under the name The Scientist on Kickin Records — co-producing early releases with DJ Hype that reached No. 1 in the UK Dance and Independent Charts. He subsequently founded the P.S. Communications label and its sister imprint B+positive, operating as a live hardware performer and DJ at the Wiggle parties, Rage, and Ministry of Sound. His Fabric 05 mix (2002) is among the most respected in that series. He has been called "the Prince of Tech House" and is listed among the most significant figures of the UK tech house era.',
    releases: [
      { title: '"The Bee" / "The Exorcist" as The Scientist (Kickin)', year: 1990 },
      { title: 'The Red One EP (P.S. Communications)', year: 1998 },
      { title: 'Balanced EP (P.S. Communications)', year: 1999 },
      { title: 'Fabric 05 (Fabric)', year: 2002 },
    ]},

  { id:'wiggle', label:'Wiggle', type:'venue', genre:'techhouse', era:1994, city:'London', country:'UK',
    desc:'Wiggle was a London party series co-founded in 1994 by Nathan Coles and Terry Francis, with Eddie Richards as the third resident. Beginning as a series of warehouse parties, it synthesised the toughness of techno with the swing of house and is widely credited with incubating tech house as a genre — the term itself reportedly coming from a Mr. C mixtape labelled "Tech" on one side and "House" on the other. Wiggle later held a long residency at Fabric. Its three residents — Coles, Francis, and Richards — became Fabric residents for over a decade, making Wiggle the main through-line connecting London\'s early 1990s warehouse rave scene with its 2000s club infrastructure.',
    },

  { id:'eddie_richards', label:'Eddie Richards', type:'artist', genre:'techhouse', era:1988, city:'London', country:'UK',
    desc:'Eddie Richards — also known as Evil Eddie Richards and Jolly Roger — is regarded as the "Godfather of Tech House." He was among the first DJs to champion house music in the UK, holding a residency at Camden Palace in the mid-1980s and later at Clink Street alongside Mr. C, where he helped introduce house to British club culture. His 1988 production "Acidman" (as Jolly Roger) reached the UK National Top 20. As a founding Wiggle resident from 1994 and a Fabric resident for over a decade, he was one of the central architects of the UK tech house scene, and his influence on producers and DJs who followed is difficult to overstate.',
    releases: [
      { title: '"Acidman" as Jolly Roger (10 Records)', year: 1988 },
    ]},

  { id:'terry_francis', label:'Terry Francis', type:'artist', genre:'techhouse', era:1994, city:'London', country:'UK',
    desc:'Terry Francis is a London DJ and producer who co-founded the Wiggle party series in 1994 alongside Nathan Coles and Eddie Richards. Wiggle was the crucible of UK tech house, synthesising Detroit techno and Chicago house in a raw, warehouse setting. Francis won Muzik Magazine\'s Best New DJ award in 1997 and subsequently became a Fabric resident for over a decade. His sets are noted for their consistency and structural integrity — a long-form, patient approach to the dancefloor that avoids peaks-and-valleys programming in favour of sustained groove.',
    releases: [
      { title: 'Fabric 36 (Fabric)', year: 2007 },
    ]},

  { id:'nathan_coles', label:'Nathan Coles', type:'artist', genre:'techhouse', era:1994, city:'London', country:'UK',
    desc:'Nathan Coles (1970–2023) was a London DJ described as an originator and towering figure of the UK tech house scene. He co-founded Wiggle in 1994 with Terry Francis and Eddie Richards, and was a Fabric resident for over a decade. Before Wiggle he organised the Release parties, one of London\'s important early 1990s underground events. His sets were known for their musical breadth and emotional depth, and his death in February 2023 prompted widespread tributes from the international electronic music community. He is remembered as one of the central figures in shaping the sound of London\'s underground across three decades.',
    },

  { id:'mr_c', label:'Mr. C', type:'artist', genre:'techhouse', era:1988, city:'London', country:'UK',
    desc:'Richard West — Mr. C — was a key figure in the origins of UK tech house. His mixtape with one side labelled "Tech" and the other "House" reportedly gave the genre its name. He held a residency at the Clink Street club with Eddie Richards from the late 1980s and ran The Drop parties, which were instrumental in incubating the sound alongside Wiggle. He co-founded The End nightclub in London in 1995 and ran the Phuture Trax label. Earlier, he was the MC and vocalist for The Shamen, whose "Move Any Mountain" reached No. 4 in the UK Singles Chart in 1991, giving him a visibility that bridged the acid house underground and pop mainstream.',
    releases: [
      { title: '"Move Any Mountain" — The Shamen (One Little Indian)', year: 1991 },
    ]},

  // ── GERMANY — RYAN ELLIOTT / PARAMIDA / LOVE ON THE ROCKS ───────────────
  { id:'ryan_elliott', label:'Ryan Elliott', type:'artist', genre:'techhouse', era:2005, city:'Detroit', country:'US',
    desc:'Ryan Elliott is a Detroit-born DJ and producer based in Berlin. After building a reputation in Detroit\'s club scene, he moved to Berlin in 2009 and became one of the few artists to hold a residency playing both Berghain\'s main floor and Panorama Bar regularly. He has released on Ostgut Ton and founded his own label Faith Beat in 2019.',
    releases: [] },

  // ── FRANCE — DJ GREGORY ───────────────────────────────────────────────────
  { id:'dj_gregory', label:'DJ Gregory', type:'artist', genre:'deep', era:1994, city:'Paris', country:'FR',
    desc:'DJ Gregory is the alias of Grégory Darsa, a Paris-based DJ and producer active in French house since the early 1990s. In the mid-1990s he co-hosted a radio show on Paris station FG alongside DJ Deep and Alex from Tokyo dedicated to house and electronic music. His productions draw on Afro-Latin rhythms and deep house, and he has released on Faya Combo, Yellow Productions, Defected, and Basic.',
    releases: [] },

  // ── UK — DEFECTED / MALA / SIR SPYRO / JYOTY / SKRILLEX ─────────────────
  { id:'defected', label:'Defected Records', type:'label', genre:'deep', era:1999, city:'London', country:'UK',
    desc:'Defected Records is a London house music label founded in 1999 by Simon Dunmore. It is one of the longest-running independent house labels in the UK. Its first release was Soulsearcher\'s "I Can\'t Get Enough", and Roger Sanchez\'s "Another Chance" (2001) reached number one on the UK Singles Chart. The label has maintained a consistent focus on soulful and vocal house music across its history.',
    releases: [] },

  { id:'mala', label:'Mala', type:'artist', genre:'ambient', era:2002, city:'London', country:'UK',
    desc:'Mala (Mark Lawrence) is a South London producer and DJ who, as one half of Digital Mystikz alongside Coki, was a founding figure of dubstep. He co-founded the DMZ club night in Brixton in 2005 with Loefah and Coki — a bimonthly event at the Mass complex that became central to the development of the sound. In 2006 he founded the label Deep Medi Musik for his solo work rooted in dub, reggae, and bass music.',
    releases: [] },

  { id:'sir_spyro', label:'Sir Spyro', type:'artist', genre:'chicago', era:2005, city:'London', country:'UK',
    desc:'Sir Spyro (Karl Joseph) is an East London DJ, producer, and MC from a Saint Lucian and Jamaican background whose career has been rooted in grime since the mid-2000s. He held a residency on Rinse FM from 2005 to 2017 and has hosted BBC Radio 1Xtra\'s Grime Show since then. He produced Stormzy\'s 2017 single "Big for Your Boots", which reached number six on the UK Singles Chart.',
    releases: [] },

  { id:'jyoty', label:'Jyoty', type:'artist', genre:'deep', era:2017, city:'London', country:'UK',
    desc:'Jyoty (Jyoty Singh) is an Indian-Dutch DJ and broadcaster born in Amsterdam in 1990 and based in London. She began DJing in 2017 and her 2019 Boiler Room performance accumulated over five million plays across YouTube and TikTok. Her sets move across baile funk, amapiano, afrobeats, dancehall, jungle, garage, and grime. She has held a regular slot on Rinse FM.',
    releases: [] },

  // ── US — SKRILLEX ─────────────────────────────────────────────────────────
  { id:'skrillex', label:'Skrillex', type:'artist', genre:'experimental', era:2010, city:'Los Angeles', country:'US',
    desc:'Skrillex is the alias of Sonny Moore (born 1988, Los Angeles), who began as vocalist of post-hardcore band From First to Last before turning to electronic music production in 2008. His 2010 EP Scary Monsters and Nice Sprites brought a maximalist, bass-heavy take on dubstep to mainstream audiences and won the Grammy for Best Dance/Electronica Album. He founded the label OWSLA in 2011.',
    releases: [
      { title: 'Scary Monsters and Nice Sprites EP (mau5trap / Big Beat)', year: 2010 },
    ]},

  // ── ITALY — PANCRATIO ─────────────────────────────────────────────────────
  { id:'pancratio', label:'Pancratio', type:'artist', genre:'deep', era:2017, city:'Rome', country:'IT',
    desc:'Pancratio (Gian Luigi Mendozza) is a producer and composer from Rome. He founded the Onetriptoavyon label as a vehicle for his own productions spanning deep house, ambient, and experimental club music. His Love Letters EP (2025) appeared on PARAMIDA\'s Berlin label Love on the Rocks.',
    releases: [] },

  // ── MEDIA — RESIDENT ADVISOR ──────────────────────────────────────────────
  { id:'resident_advisor', label:'Resident Advisor', type:'moment', genre:'experimental', era:2001, city:'London', country:'UK',
    desc:'Resident Advisor (RA) is an electronic music media platform and events guide founded in Sydney in 2001 by Paul Clement and Nick Sabine. Originally focused on the Australian dance music scene, it expanded globally and incorporated in the UK in 2006 with a Berlin office opening in 2007. It has become one of the most widely read publications covering electronic music internationally, running news, reviews, artist profiles, a podcast series, and RA Films from 2011.',
    releases: [] },

  // ── GERMANY — PARAMIDA / LOVE ON THE ROCKS ───────────────────────────────
  { id:'paramida', label:'PARAMIDA', type:'artist', genre:'deep', era:2015, city:'Berlin', country:'DE',
    desc:'PARAMIDA is a Berlin-based DJ and producer with German and Persian heritage. She first performed at Berghain\'s Panorama Bar in 2015 and became a resident DJ there in 2020. In 2014 she founded Love on the Rocks, a label releasing deep house, nu-disco, trance, and acid from producers across different countries. She received a BBC Radio 1 Essential Mix commission in 2024 and was named one of BBC\'s 100 Women in 2023.',
    releases: [] },

  { id:'love_on_the_rocks', label:'Love on the Rocks', type:'label', genre:'deep', era:2014, city:'Berlin', country:'DE',
    desc:'Love on the Rocks is a Berlin-based label founded in 2014 by PARAMIDA. Its catalogue spans deep house, nu-disco, trance, acid, and ambient music, with a focus on outsider dance culture from producers across multiple countries.',
    releases: [] },

  // ── AUSTRALIA — LOGIC1000 ─────────────────────────────────────────────────
  { id:'logic1000', label:'Logic1000', type:'artist', genre:'deep', era:2018, city:'Sydney', country:'AU',
    desc:'Logic1000 is the alias of Samantha Poulter, a producer and DJ born in Sydney, Australia. She released her first EP in 2018, and her profile grew after Four Tet played her music in his Coachella DJ set. She moved from Sydney to London and then to Berlin. Her debut album Mother was released on Because Music in 2024 and received broad critical attention. She released a DJ-Kicks compilation in 2025.',
    releases: [
      { title: 'Mother (Because Music)', year: 2024 },
    ]},

  // ── SWEDEN — LA FLEUR / MATTHIAS EL MANSOURI / DJ SEINFELD ──────────────
  { id:'dj_seinfeld', label:'DJ Seinfeld', type:'artist', genre:'deep', era:2016, city:'Malmö', country:'SE',
    desc:'DJ Seinfeld is the alias of Armand Jakobsson, born in Malmö in 1991. He emerged in 2016 as part of a lo-fi house movement alongside artists including Ross From Friends and released his debut on Lobster Theremin. His album Mirrors (2021) and subsequent releases on Ninja Tune brought his melancholic, hazy house productions to a wider international audience.',
    releases: [
      { title: 'Mirrors (Ninja Tune)', year: 2021 },
    ]},

  { id:'la_fleur', label:'La Fleur', type:'artist', genre:'melodic', era:2016, city:'Stockholm', country:'SE',
    desc:'La Fleur is a Stockholm-based producer and DJ who releases on Pampa Records, the Hamburg label founded by DJ Koze. Her productions work in a melodic, emotionally direct deep house style. She is among the Swedish artists who have developed an international profile through connections to the Hamburg and Berlin underground networks.',
    releases: [] },

  { id:'matthias_el_mansouri', label:'Matthias El Mansouri', type:'artist', genre:'deep', era:2015, city:'', country:'SE',
    desc:'Matthias El Mansouri is a Swedish producer who has performed at Panorama Bar in Berlin. Further details are limited in documented sources.',
    releases: [] },

  // ── LABELS: TRIP / MDR / TERMINAL M ──────────────────────────────────────
  { id:'trip', label:'Trip', type:'label', genre:'techno', era:2014, city:'Berlin', country:'DE',
    desc:'Trip is the Berlin-based label founded by Nina Kraviz in 2014. It releases experimental and hypnotic techno and electronic music, and has hosted releases from artists including Objekt, Surgeon, and DJ Stingray.',
    releases: [] },

  { id:'mdr', label:'MDR', type:'label', genre:'techno', era:2009, city:'Berlin', country:'DE',
    desc:'MDR is the Berlin techno label run by Marcel Dettmann, founded around 2009. Its output reflects Dettmann\'s functional, stripped-back approach to techno.',
    releases: [] },

  { id:'terminal_m', label:'Terminal M', type:'label', genre:'techno', era:2000, city:'Berlin', country:'DE',
    desc:'Terminal M is the techno label founded by Monika Kruse in 2000. It has released music from artists including Kaiserdisco, UMEK, and Stephan Hinz, and sits at the functional, driving end of European techno.',
    releases: [] },

  // ── RUSSIA — NINA KRAVIZ (exists as id:'ninakraviz') ──────────────────────
  // ── GERMANY — MARCEL DETTMANN (exists as id:'dettmann') ──────────────────

  // ── US — SARA LANDRY ─────────────────────────────────────────────────────
  { id:'sara_landry', label:'Sara Landry', type:'artist', genre:'techno', era:2018, city:'Various', country:'US',
    desc:'Sara Landry is an American DJ and producer born in Sausalito, California in 1993. She was based in Austin, Texas before relocating to Amsterdam. She is known for high-energy industrial techno sets and founded Hekate Records in 2021.',
    releases: [] },

  // ── UK — PARIAH ──────────────────────────────────────────────────────────
  { id:'pariah', label:'Pariah', type:'artist', genre:'experimental', era:2012, city:'London', country:'UK',
    desc:'Pariah is the alias of Robin Stewart, a UK electronic music producer. He is affiliated with the Hessle Audio label and has released on R&S Records and Houndstooth. Together with Blawan he forms the industrial techno duo Karenn.',
    releases: [
      { title: 'Here From Where We Are (R&S Records)', year: 2012 },
    ]},

  // ── UK — DJ EZ ───────────────────────────────────────────────────────────
  { id:'dj_ez', label:'DJ EZ', type:'artist', genre:'chicago', era:1994, city:'London', country:'UK',
    desc:'DJ EZ (born Paul Newman) is a London DJ from Tottenham who became a central figure in UK garage through his residency at the Club UK nights and his weekly show on Kiss 100. He compiled the Pure Garage series and has maintained a show on Rinse FM. He is widely regarded as one of the most skilled mixers in UK garage history.',
    releases: [
      { title: 'Pure Garage (compilation, Warner/WEA)', year: 2001 },
    ]},

  // ── NL — JOB JOBSE ───────────────────────────────────────────────────────
  { id:'job_jobse', label:'Job Jobse', type:'artist', genre:'deep', era:2010, city:'Amsterdam', country:'NL',
    desc:'Job Jobse is an Amsterdam DJ who co-ran the booking operation at Trouw and has delivered extended Sunday closing sets at Panorama Bar in Berlin. He runs the De Vlieger and Planet Strangelove labels and plays a broad, genre-agnostic range of dance music.',
    releases: [] },

  // ── GERMANY — CCL ────────────────────────────────────────────────────────
  { id:'ccl', label:'CCL', type:'artist', genre:'experimental', era:2019, city:'Berlin', country:'DE',
    desc:'CCL is a Berlin-based DJ originally from Seattle. She holds a residency at OHM, the club within the Berghain complex, and organises the queer-focused subglow party. Her sets draw on bass music, footwork, and club-oriented experimental electronic music.',
    releases: [] },

  // ── COLOMBIA — VERRACO ───────────────────────────────────────────────────
  { id:'verraco', label:'Verraco', type:'artist', genre:'experimental', era:2021, city:'Medellín', country:'CO',
    desc:'Verraco is a Colombian DJ and producer from Medellín. He co-runs the TraTraTrax label with Shackleton and has released music on Timedance and XL Recordings. His music is rooted in cumbia and Caribbean percussion filtered through club-oriented production.',
    releases: [] },

  // ── NL — HUNEE ───────────────────────────────────────────────────────────
  { id:'hunee', label:'HUNEE', type:'artist', genre:'deep', era:2012, city:'Amsterdam', country:'NL',
    desc:'HUNEE (Hun Choi) is an Amsterdam DJ of South Korean descent who grew up in Bochum, Germany. He is closely associated with the Rush Hour label and store in Amsterdam and plays a wide-ranging selection spanning house, techno, and global club music.',
    releases: [] },

  // ── UK — SAMMY VIRJI ─────────────────────────────────────────────────────
  { id:'sammy_virji', label:'Sammy Virji', type:'artist', genre:'chicago', era:2018, city:'London', country:'UK',
    desc:'Sammy Virji is a London DJ and producer working in UK garage and bassline. He founded Kiwi Records and has released on Defected and other labels. His productions update the UK garage sound for contemporary dancefloors.',
    releases: [] },

  // ── RICARDO VILLALOBOS (exists as id:'villalobos') ───────────────────────
  // ── RICHIE HAWTIN (exists as id:'hawtin') ────────────────────────────────

  // ── UK — DBRIDGE ─────────────────────────────────────────────────────────
  { id:'dbridge', label:'dBridge', type:'artist', genre:'techno', era:1998, city:'London', country:'UK',
    desc:'dBridge (Darren White) is a UK drum and bass producer and DJ. He was a member of drum and bass group Bad Company in the late 1990s and went on to release on Metalheadz. He founded Exit Records in 2007 as a vehicle for drum and bass with experimental and techno influences.',
    releases: [
      { title: 'Exit Records inaugural releases', year: 2007 },
    ]},

  // ── UK — SHANTI CELESTE ──────────────────────────────────────────────────
  { id:'shanti_celeste', label:'Shanti Celeste', type:'artist', genre:'deep', era:2017, city:'Bristol', country:'UK',
    desc:'Shanti Celeste is a DJ and producer born in Temuco, Chile, who moved to the UK as a child and is based in Bristol. She founded the Peach Discs label in 2017 and is associated with the Bristol electronic music community around labels including Timedance. She has released on Apron Records and Idle Hands.',
    releases: [] },

  // ── GERMANY — BORIS BREJCHA ──────────────────────────────────────────────
  { id:'boris_brejcha', label:'Boris Brejcha', type:'artist', genre:'minimal', era:2006, city:'Frankfurt', country:'DE',
    desc:'Boris Brejcha is a German DJ and producer born in 1981 near Ludwigshafen. He developed a style he calls "high-tech minimal", blending minimal techno with trance-influenced melodic elements. He founded Fckng Serious Records in 2015 and has become one of the most-streamed artists in German techno.',
    releases: [] },

  // ── SPAIN — INDIRA PAGANOTTO ─────────────────────────────────────────────
  { id:'indira_paganotto', label:'Indira Paganotto', type:'artist', genre:'techno', era:2018, city:'Barcelona', country:'ES',
    desc:'Indira Paganotto is a Spanish DJ and producer born in Las Palmas, Canary Islands in 1992. She has released on KNTXT (Charlotte de Witte\'s label), Trip (Nina Kraviz\'s label), and her own Artcore label (founded 2022). She is known for hard, functional techno and has built an international touring profile since 2018.',
    releases: [] },

  // ── NL — KI/KI ───────────────────────────────────────────────────────────
  { id:'ki_ki', label:'KI/KI', type:'artist', genre:'techno', era:2020, city:'Amsterdam', country:'NL',
    desc:'KI/KI is an Amsterdam DJ who co-runs the Spielraum party and record shop. She works across acid techno and trance and was the first woman to win the Dutch Edison Award in electronic music. She has 1.3 million monthly Spotify listeners as of 2025.',
    releases: [] },

  // ── NL — JORIS VOORN ─────────────────────────────────────────────────────
  { id:'joris_voorn', label:'Joris Voorn', type:'artist', genre:'deep', era:2002, city:'Amsterdam', country:'NL',
    desc:'Joris Voorn is a Dutch DJ and producer born in 1977. He founded the Green label in 2002 and Rejected in 2015. His early career received support from Carl Craig and Derrick May. He plays across techno, house, and ambient, and has performed at festivals and clubs internationally for over two decades.',
    releases: [
      { title: 'Future History (Green)', year: 2006 },
    ]},

  // ── GERMANY — POLYGONIA ──────────────────────────────────────────────────
  { id:'polygonia', label:'Polygonia', type:'artist', genre:'techno', era:2019, city:'Munich', country:'DE',
    desc:'Polygonia (Lindsey Wang) is a Munich-based DJ and producer. She co-founded the IO collective and label in 2018 and the QEONE label in 2022. She holds a residency at BLITZ Munich and has performed at Berghain. Her sets range across psychedelic techno and experimental club music.',
    releases: [] },

  // ── ITALY — ALARICO ──────────────────────────────────────────────────────
  { id:'alarico', label:'Alarico', type:'artist', genre:'techno', era:2019, city:'Milan', country:'IT',
    desc:'Alarico (Alarico Zucchi) is a Milan-based DJ and producer who began performing under that alias in 2019. He founded Katana Records and is one half of the Funk Assault duo alongside German producer Chlär. His music occupies a functional, hard-edged corner of contemporary European techno.',
    releases: [] },

  // ── NL — IGNEZ ───────────────────────────────────────────────────────────
  { id:'ignez', label:'Ignez', type:'artist', genre:'techno', era:2018, city:'Amsterdam', country:'NL',
    desc:'Ignez is a Dutch techno producer who has released on Token Records and the SK_eleven imprint, and runs Somov Records. They have collaborated with Rødhåd and operate in the harder, industrial end of contemporary European techno.',
    releases: [] },

  // ── PALESTINE — SAMA ABDULHADI ───────────────────────────────────────────
  { id:'sama_abdulhadi', label:'Sama Abdulhadi', type:'artist', genre:'techno', era:2018, city:'Ramallah', country:'PS',
    desc:'Sama Abdulhadi is a Palestinian DJ and producer born in Amman in 1990 to a family that returned to Ramallah in 1993. Her Boiler Room set filmed in Ramallah in 2018 accumulated over three million views and brought her international attention. She co-founded the Union Collective to support DJs in Palestine and the Resilience platform for artists in conflict zones.',
    releases: [] },

  // ── GERMANY — MONIKA KRUSE ───────────────────────────────────────────────
  { id:'monika_kruse', label:'Monika Kruse', type:'artist', genre:'techno', era:1997, city:'Berlin', country:'DE',
    desc:'Monika Kruse is a German DJ and producer born in West Berlin in 1971 who grew up in Munich. She founded the Terminal M label in 2000. She played Tresor Club extensively during the 1990s Berlin techno scene and has remained a regular presence at Berghain.',
    releases: [] },

  // ── BELGIUM — NOVAH ──────────────────────────────────────────────────────
  { id:'novah', label:'NOVAH', type:'artist', genre:'techno', era:2023, city:'Antwerp', country:'BE',
    desc:'NOVAH is an Antwerp-based DJ and producer working in hard techno. She has released on Taapion, the label run by producer Shlømo, and has performed at Fabric and other European clubs.',
    releases: [] },

  // ── GERMANY — PURPLE DISCO MACHINE ──────────────────────────────────────
  { id:'purple_disco_machine', label:'Purple Disco Machine', type:'artist', genre:'disco', era:2012, city:'Dresden', country:'DE',
    desc:'Purple Disco Machine is the alias of Tino Piontek, born in Dresden in 1980. He began releasing under this name in 2012, developing a nu-disco and house sound influenced by 1970s funk and French Touch. His track My House appeared on OFF Recordings in 2013 and established his international profile.',
    releases: [
      { title: 'My House (OFF Recordings)', year: 2013 },
    ]},

  // ── BERGHAIN RESIDENTS ─────────────────────────────────────────────────────
  { id:'tama_sumo', label:'Tama Sumo', type:'artist', genre:'deep', era:1993, city:'Berlin', country:'DE',
    desc:'Tama Sumo (Kerstin Egert) is a Berlin-based DJ born in Bavaria who began DJing in 1993 at Drama bar in Kreuzberg. She became a Tresor resident in 1994, remaining for a decade. When Ostgut became Berghain and Panorama Bar, she transitioned to become one of its central long-running residents. Her sets are known for traversing house, jazz, disco, broken beat, soul, funk, and Afrobeat — a deeply eclectic approach built over decades of careful listening.',
    releases: [] },

  { id:'luke_slater', label:'Luke Slater', type:'artist', genre:'techno', era:1993, city:'London', country:'UK',
    desc:'Luke Slater is a British DJ and producer who has been one of Berghain\'s longest-serving residents and one of the architects of psychedelic, polyrhythmic British techno. Recording as Planetary Assault Systems, his productions are muscular, purposeful, and built for the Berghain main floor — bleepy, multi-layered loops that develop slowly and with great physical force. He has released on Ostgut Ton, Peacefrog, and his own Mote-Evolver imprint.',
    releases: [
      { title: 'Plantae (Ostgut Ton)', year: 2019 },
    ] },

  { id:'nd_baumecker', label:'nd_baumecker', type:'artist', genre:'deep', era:2004, city:'Berlin', country:'DE',
    desc:'Andreas Baumecker began his DJ career in Frankfurt in 1991 before moving to Berlin in 2004. As a Berghain and Panorama Bar resident, his sets are known as deep, unpredictable, funky, and melodic — flowing between rhythms and genres with seamless craft. Since 2010 he has produced with Sam Barker as Barker & Baumecker, releasing on Ostgut Ton.',
    releases: [
      { title: 'Turns (Ostgut Ton)', year: 2013 },
    ] },

  { id:'steffi', label:'Steffi', type:'artist', genre:'deep', era:2008, city:'Berlin', country:'NL',
    desc:'Steffi is a Dutch-born DJ and producer who grew up in the Netherlands and moved to Berlin in 2007, becoming a resident at Panorama Bar. She releases on Ostgut Ton — her debut album Yours & Mine appeared in 2011 — and her sound has evolved across warm reflective techno and intricate electro. She has collaborated extensively with Virginia, with whom she shares both a residency and a musical sensibility.',
    releases: [
      { title: 'Yours & Mine (Ostgut Ton)', year: 2011 },
      { title: 'Power of Anonymity (Ostgut Ton)', year: 2014 },
    ] },

  { id:'virginia', label:'Virginia', type:'artist', genre:'deep', era:2012, city:'Berlin', country:'DE',
    desc:'Virginia is a Berlin-based DJ and vocalist who grew up in Munich and holds a long-standing residency at Panorama Bar since 2012. Her sets fuse warm analogue house and electro with live vocals. She has collaborated with Steffi on the 2019 album Work A Change, exploring electro terrain together, and released her own album Fierce For The Night on Berghain\'s label in 2016.',
    releases: [
      { title: 'Fierce For The Night (Berghain)', year: 2016 },
    ] },

  { id:'norman_nodge', label:'Norman Nodge', type:'artist', genre:'techno', era:2005, city:'Berlin', country:'DE',
    desc:'Norman Nodge was born in Leipzig and raised in Brandenburg, beginning to promote techno parties after the wall came down. He mentored Marcel Dettmann in techno during the 1990s before stepping back from DJing for a decade. In 2005 Marcel Dettmann brought him to Berghain management, where he became a resident. A lawyer by profession, he plays Berghain monthly and is known as a master of the warm-up, with a sound that is forceful, dubby, and hypnotic. He has released on MDR and Ostgut Ton.',
    releases: [
      { title: 'Berghain 06 (Ostgut Ton)', year: 2012 },
    ] },

  { id:'jane_fitz', label:'Jane Fitz', type:'artist', genre:'deep', era:2000, city:'London', country:'UK',
    desc:'Jane Fitz is a London-based DJ with over two decades of experience, known for an eclectic approach spanning UK acid, deep and spacey house, psychedelic techno, and ambient. A resident at the non-profit festival Freerotation and The Pickle Factory in London, she has played at Tresor, Panorama Bar, and Concrete. She produces under the Invisible Menders alias with Dom Ahtuam, releasing on Porn Wax and related labels, and holds a regular slot on Rinse FM.',
    releases: [] },

  // ── DC-10 / CIRCOLOCO ─────────────────────────────────────────────────────
  { id:'dc10', label:'DC-10', type:'venue', genre:'techhouse', era:1999, city:'Ibiza', country:'ES',
    desc:'DC-10 is a club in San José near Ibiza airport, built around a former aircraft hangar. Its raw, unpretentious aesthetic — exposed concrete, low ceilings, an outdoor terrace that runs through the night — positioned it as a direct alternative to the island\'s commercial superclubs. The Circoloco Monday parties launched in 1999 became one of the most celebrated underground club nights in Europe, drawing a roster built around Tania Vulcano, Seth Troxler, Loco Dice, and DJ Harvey. DC-10 attracted the same artists who played Berghain and fabric, creating a counterpart to Berlin\'s underground scene on Mediterranean soil.' },

  { id:'circoloco', label:'Circoloco', type:'moment', genre:'techhouse', era:1999, city:'Ibiza', country:'ES',
    desc:'Circoloco is a DJ collective and party brand founded in 1999 by Antonio Carbonaro and Giancarlo Greco at DC-10 in Ibiza. The Monday residency became one of the most respected underground club nights in the world over the following two decades, running through the Ibiza summer season with a roster that consistently centred Tania Vulcano, Seth Troxler, Loco Dice, and Damian Lazarus. The night extended into a global touring brand staging events at fabric, Watergate, and festivals worldwide. Circoloco defined a specific Ibiza aesthetic — deep, long, and explicitly disconnected from the mainstream commercial circuit that dominated the island.' },

  // ── SETH TROXLER ──────────────────────────────────────────────────────────
  { id:'seth_troxler', label:'Seth Troxler', type:'artist', genre:'deep', era:2008, city:'Detroit', country:'US',
    desc:'Seth Troxler was born in 1984 in South Lyon, Michigan. He became one of the most prominent DJs of his generation, building a reputation for deep, hypnotic house and techno distinguished by an improvisational quality and a refusal of formulaic programming. He co-founded the Wolf + Lamb label and collective in Brooklyn with Gadi Mizrahi and released on Crosstown Rebels and Skint. A long-running resident at DC-10\'s Circoloco parties in Ibiza, he held one of the most documented DJ-to-club relationships in the contemporary scene. Now based in Berlin, he has played extensively at Panorama Bar, fabric, and clubs across Europe, the US, and beyond.' },

  // ── TANIA VULCANO ─────────────────────────────────────────────────────────
  { id:'tania_vulcano', label:'Tania Vulcano', type:'artist', genre:'deep', era:1999, city:'Ibiza', country:'ES',
    desc:'Tania Vulcano was born in Ibiza and is one of the foundational residents of Circoloco at DC-10, holding a weekly slot from the party\'s first season in 1999. Known for an eclectic, instinctive approach that moves between house, techno, and harder-to-define territory, she is among the small number of DJs whose sustained presence shaped the identity of a specific club night over more than two decades. Her sets are characterised by long arcs, unusual selections, and an emotional directness that has made her one of the most respected selectors in the Ibiza circuit.' },

  // ── LOCO DICE ─────────────────────────────────────────────────────────────
  { id:'loco_dice', label:'Loco Dice', type:'artist', genre:'techno', era:2000, city:'Düsseldorf', country:'DE',
    desc:'Loco Dice was born in Hameln, Germany of Tunisian heritage and raised in Düsseldorf, where he began as a hip-hop DJ before moving into techno and house in the late 1990s. A long-running resident at DC-10\'s Circoloco and a close associate of Ricardo Villalobos, he founded the Desolat label in 2008 and built it into one of the most consistently-released minimal/techno imprints of the following decade. Known for a fluid, hypnotic style at the intersection of techno and deep house, he has been a regular at Berghain, fabric, and the leading underground clubs worldwide.',
    releases: [
      { title: 'Serengeti Calling (Desolat)', year: 2010 },
    ] },

  // ── MATADOR ───────────────────────────────────────────────────────────────
  { id:'matador', label:'Matador', type:'artist', genre:'techno', era:2006, city:'Cork', country:'IE',
    desc:'Matador is the alias of Gavin Lynch, a DJ and producer from Cork, Ireland. Known for a dark, industrial-influenced techno aesthetic, he built early connections through Richie Hawtin\'s Minus circle and has released on Blueprint, Cocoon, and related labels. A long-running resident at DC-10\'s Circoloco and a regular at Berghain and fabric, he is one of the few Irish artists to have become a central figure in the European techno circuit. His productions favour tension and precision over melody, drawing on industrial and EBM influences filtered through the minimal techno tradition.',
    releases: [
      { title: 'Matador 01 EP (Minus)', year: 2010 },
    ] },

  // ── CRAIG RICHARDS ────────────────────────────────────────────────────────
  { id:'craig_richards', label:'Craig Richards', type:'artist', genre:'deep', era:1999, city:'London', country:'UK',
    desc:'Craig Richards is the co-founder and artistic director of fabric in London, where he has held a resident DJ position since the club opened in 1999. His influence on fabric\'s identity — the aesthetic of room 1, the booking policy, the long-form approach to a night — is inseparable from the club\'s reputation. As a DJ he is known for deep, exploratory sets that move fluidly between house, techno, and ambient over extended durations. He has released mixes on the fabric mix series and runs his own label.',
    releases: [
      { title: 'Fabric 24 (mix compilation)', year: 2005 },
    ] },

  // ── ANCIENT METHODS ───────────────────────────────────────────────────────
  { id:'ancient_methods', label:'Ancient Methods', type:'artist', genre:'techno', era:2011, city:'Berlin', country:'DE',
    desc:'Ancient Methods is an anonymous Berlin-based producer and DJ operating at the intersection of techno, industrial, and EBM. Active since around 2011 on the Methkin label, the project produces dense, aggressive music drawing on industrial textures and the functional minimalism of peak-hour techno. A regular at Berghain and representative of the harder end of the Berlin underground, Ancient Methods has maintained total anonymity while building a significant following through recorded output and club appearances.' },

  // ── CINTHIE ───────────────────────────────────────────────────────────────
  { id:'cinthie', label:'Cinthie', type:'artist', genre:'deep', era:2012, city:'Berlin', country:'DE',
    desc:'Cinthie was born and raised in East Berlin. A Panorama Bar resident, she is known for a deep, warm sound drawing on house, disco, and soul rather than peak-hour techno. She runs the 803 Crystal Grooves, Beste Modus, and Aethon labels, with productions that share the unhurried, groove-centred quality of her DJ sets. She is the partner of Lawrence, the Hamburg-based producer whose work for Dial and Mule Musiq has defined a strand of the German deep house tradition.',
    releases: [] },

  // ── PAULA TEMPLE ──────────────────────────────────────────────────────────
  { id:'paula_temple', label:'Paula Temple', type:'artist', genre:'techno', era:2013, city:'London', country:'UK',
    desc:'Paula Temple is a British DJ and producer known for industrial and noise-influenced techno. She runs the Noise Manifesto label and has produced work that draws on the harder end of the techno canon while incorporating industrial music and noise aesthetics. A regular at Berghain and an internationally active artist, she has been an outspoken advocate for trans rights and LGBTQ+ inclusion in club culture. Her sets are physically demanding and technically precise, operating at the boundary between techno and experimental noise.' },

  // ── THE PRODIGY ───────────────────────────────────────────────────────────
  { id:'the_prodigy', label:'The Prodigy', type:'artist', genre:'rave', era:1990, city:'Braintree', country:'GB',
    desc:'The Prodigy formed in 1990 in Braintree, Essex, founded by Liam Howlett as a studio project that rapidly expanded into a live act featuring Keith Flint and Maxim. Emerging directly from the UK rave scene, early recordings were rooted in hardcore breakbeat and acid, but Howlett pushed the sound into increasingly abrasive directions. Music for the Jilted Generation (1994) was in part a response to the Criminal Justice Act, positioning the group within the politics of UK rave culture. The Fat of the Land (1997) achieved global commercial success while retaining aggressive production values that distinguished them from the contemporaneous Britpop mainstream. Their crossover success brought the rave lineage — breakbeat, acid, hardcore — into wider cultural visibility, and their influence extends across big beat, drum and bass, and electronic rock.',
    releases: [
      { title: 'Experience', year: 1992 },
      { title: 'Music for the Jilted Generation', year: 1994 },
      { title: 'The Fat of the Land', year: 1997 },
    ]},

  // ── JUAN ATKINS ───────────────────────────────────────────────────────────
  { id:'juan_atkins', label:'Juan Atkins', type:'artist', genre:'detroit', era:1981, city:'Belleville', country:'US',
    desc:'Juan Atkins is one of the three founders of Detroit techno, alongside Derrick May and Kevin Saunderson — the Belleville Three. In the early 1980s he recorded as Cybotron with Rick Davis, producing electro records that established Detroit\'s machine aesthetic. He founded Metroplex Records in 1985, releasing his own Model 500 alias and establishing a template for independent techno production. "No UFOs" (1985) is widely cited as one of the first canonical Detroit techno records. Atkins absorbed Kraftwerk, George Clinton, and Alvin Toffler\'s writing on the post-industrial future in roughly equal measure, translating that synthesis into a machine music that treated Detroit\'s deindustrialisation not as a wound but as a launch pad.',
    releases: [
      { title: '"Clear" — Cybotron', year: 1983 },
      { title: '"No UFOs" — Model 500', year: 1985 },
      { title: '"Classics" — Model 500', year: 1995 },
    ]},

  // ── MARSHALL JEFFERSON ────────────────────────────────────────────────────
  { id:'marshall_jefferson', label:'Marshall Jefferson', type:'artist', genre:'chicago', era:1984, city:'Chicago', country:'US',
    desc:'Marshall Jefferson is a Chicago house pioneer whose 1986 recording "Move Your Body" is considered the first house track built around a full piano melody — a radical departure from the drum machine minimalism of early house. Released on Trax Records, the track demonstrated that house music could absorb gospel and soul harmonic language without abandoning its electronic origins. Jefferson produced extensively throughout the late 1980s, working with Robert Owens and contributing to the development of acid house. He also released on DJ International Records alongside Steve "Silk" Hurley and Farley "Jackmaster" Funk, and later produced for the Ten City vocal group. His production touched virtually every strand of Chicago\'s golden-era house output.',
    releases: [
      { title: '"Move Your Body"', year: 1986 },
      { title: '"Open Our Eyes" — Jungle Wonz', year: 1988 },
    ]},

  // ── THE ORB ───────────────────────────────────────────────────────────────
  { id:'the_orb', label:'The Orb', type:'artist', genre:'ambient', era:1988, city:'London', country:'GB',
    desc:'The Orb was formed in London in 1988 by Alex Paterson, initially with Jimmy Cauty (who departed to focus on the KLF). Drawing on Brian Eno\'s ambient theory and the chill-out rooms developing around the UK rave scene, The Orb pioneered ambient house — a form that retained the tempo and harmonic palette of rave music while prioritising texture and atmosphere over dancefloor function. Adventures Beyond the Ultraworld (1991) and "Blue Room" (1992) — at 39 minutes 57 seconds, the longest track to enter the UK Top 40 — defined the genre. Paterson and Thomas Fehlmann\'s long-running collaboration sustained the project across three decades.',
    releases: [
      { title: 'Adventures Beyond the Ultraworld', year: 1991 },
      { title: 'U.F.Orb', year: 1992 },
      { title: 'Orbus Terrarum', year: 1995 },
    ]},

  // ── JOHN DIGWEED ──────────────────────────────────────────────────────────
  { id:'john_digweed', label:'John Digweed', type:'artist', genre:'progressive', era:1992, city:'Hastings', country:'GB',
    desc:'John Digweed built his career from Hastings on the English south coast, developing a DJ style centred on long, tightly structured progressive house sets that prioritised narrative arc. His partnership with Sasha — documented on Renaissance: The Mix Collection (1994) and Northern Exposure (1996) — defined the sound of progressive house at its commercial peak and brought the form to international audiences. Digweed founded the Bedrock label in 1999 and maintained a long residency at Fabric in London. His appearances at Twilo in New York were among the most attended club nights of that city\'s late 1990s clubbing era.',
    releases: [
      { title: 'Renaissance: The Mix Collection (with Sasha)', year: 1994 },
      { title: 'Northern Exposure (with Sasha)', year: 1996 },
      { title: 'Bedrock', year: 1999 },
    ]},

  // ── SPIRAL TRIBE ──────────────────────────────────────────────────────────
  { id:'spiral_tribe', label:'Spiral Tribe', type:'culture', genre:'techno', era:1990, city:'London', country:'GB',
    desc:'Spiral Tribe was a London-based sound system collective founded in 1990 that became central to the UK free party movement. The collective organised large-scale illegal raves, culminating in the Castlemorton Common Festival in May 1992 — estimated at 40,000 attendees — which provoked intense media and political backlash. Thirteen Spiral Tribe members were subsequently prosecuted; the Criminal Justice and Public Order Act 1994, which criminalised gatherings featuring amplified music with "a succession of repetitive beats", was in significant part a response to free party culture. Spiral Tribe relocated to mainland Europe following the legal pressure, influencing the development of the French and European free tekno scene through their SP23 label.',
    releases: [] },

  // ── TONY HUMPHRIES ────────────────────────────────────────────────────────
  { id:'tony_humphries', label:'Tony Humphries', type:'artist', genre:'deep', era:1981, city:'Newark', country:'US',
    desc:'Tony Humphries served as the resident DJ at Club Zanzibar in Newark, New Jersey from the early 1980s through the 1990s, establishing it as one of the defining spaces of the New York metropolitan deep house and garage scene. Alongside Larry Levan at the Paradise Garage, Humphries developed a DJing approach that prioritised emotional depth and long-arc sets over purely functional dancefloor programming. His weekly show on KISS FM (92.7) in New York brought this aesthetic to a radio audience. As a remixer he worked extensively across house, pop, and R&B, consistently finding the deep house core within commercial material.',
    releases: [] },

  // ── DJ INTERNATIONAL RECORDS ──────────────────────────────────────────────
  { id:'dj_international', label:'DJ International Records', type:'label', genre:'chicago', era:1985, city:'Chicago', country:'US',
    desc:'DJ International Records was founded in Chicago in 1985 by Rocky Jones and became the city\'s second major house label alongside Trax Records. Its roster included Frankie Knuckles, Farley "Jackmaster" Funk, Marshall Jefferson, Steve "Silk" Hurley, and Jesse Saunders. Steve "Silk" Hurley\'s "Jack Your Body", released on DJ International in 1986, became the first house record to reach number one on the UK Singles Chart in January 1987 — the moment at which house music\'s commercial potential in Britain became apparent to the mainstream industry. The label documented Chicago house at its most commercially ambitious, capturing a strand of the scene distinct from the rawer productions of Trax.',
    releases: [
      { title: '"Jack Your Body" — Steve "Silk" Hurley', year: 1986 },
      { title: '"Love Can\'t Turn Around" — Farley Jackmaster Funk', year: 1986 },
    ]},

  // ── MINISTRY OF SOUND ─────────────────────────────────────────────────────
  { id:'ministry_of_sound', label:'Ministry of Sound', type:'venue', genre:'progressive', era:1991, city:'London', country:'GB',
    desc:'Ministry of Sound opened in Elephant and Castle, London, in September 1991, founded by James Palumbo and Justin Berkmann. Berkmann had been inspired by the Paradise Garage in New York and invited Larry Levan to DJ the opening night. The venue was built around a purpose-designed sound system and a strict no-talking policy on the dancefloor, importing principles of the New York garage clubs into a London context. It became the defining British superclub of the 1990s and expanded into one of the world\'s largest independent dance music labels, with artists including Sasha, Danny Tenaglia, and Carl Cox building long associations with the venue.',
    releases: [] },

  // ── ZANZIBAR ──────────────────────────────────────────────────────────────
  { id:'zanzibar', label:'Club Zanzibar', type:'venue', genre:'deep', era:1981, city:'Newark', country:'US',
    desc:'Club Zanzibar operated in Newark, New Jersey from 1981, serving a primarily Black and Latino clientele and functioning as one of the key venues for deep house and garage music in the New York metropolitan area. Tony Humphries\' residency through the 1980s and 1990s made Zanzibar a central institution in the formation of the New York garage sound alongside the Paradise Garage. The club\'s combination of a serious sound system, a loyal community, and programming that prioritised depth over spectacle placed it in the same tradition as the Warehouse, the Music Box, and the Paradise Garage — spaces that incubated the early house and garage scene.',
    releases: [] },

  // ── TECHNICS SL-1200 ──────────────────────────────────────────────────────
  { id:'technics_1200', label:'Technics SL-1200', type:'label', genre:'detroit', era:1972, city:'Osaka', country:'JP',
    desc:'The Technics SL-1200, introduced by Matsushita Electric (now Panasonic) in 1972, became the universal standard DJ turntable by the early 1980s. The SL-1200 MK2, released in 1978, offered a direct-drive motor with high torque — enabling the slip-cueing and manual manipulation central to hip-hop DJing — combined with a variable pitch control that allowed DJs to match tempos between records. Its durability, torque, and precision made it the de facto instrument of DJ culture worldwide, used in identical form by Larry Levan, Jeff Mills, Frankie Knuckles, and virtually every significant DJ of the following four decades. Technics discontinued the MK2 series in 2010 and reintroduced the line as the SL-1200G in 2016.',
    releases: [] },

  // ── DERRICK MAY ───────────────────────────────────────────────────────────
  { id:'derrick_may', label:'Derrick May', type:'artist', genre:'detroit', era:1986, city:'Belleville', country:'US',
    desc:'Derrick May is one of the three founders of Detroit techno — the Belleville Three — alongside Juan Atkins and Kevin Saunderson. Recording as Rhythim Is Rhythim, he released "Strings of Life" in 1987 on Transmat Records, a track built around a cascading piano loop that remains one of the most celebrated records in techno history. May founded Transmat Records in 1986, which became a foundational Detroit techno label. His productions are characterised by an emotional complexity that distinguished them from the more austere machine aesthetic of contemporaries — a quality he described as "the synthesis of George Clinton and Kraftwerk." His studio output has been sparse relative to his influence, with a career sustained as much by his reputation as a DJ as by his recorded work.',
    releases: [
      { title: '"Nude Photo" — Rhythim Is Rhythim', year: 1987 },
      { title: '"Strings of Life" — Rhythim Is Rhythim', year: 1987 },
      { title: '"It Is What It Is" — Rhythim Is Rhythim', year: 1990 },
    ]},

  // ── KEVIN SAUNDERSON ──────────────────────────────────────────────────────
  { id:'kevin_saunderson', label:'Kevin Saunderson', type:'artist', genre:'detroit', era:1986, city:'Belleville', country:'US',
    desc:'Kevin Saunderson is one of the three founders of Detroit techno — the Belleville Three — alongside Juan Atkins and Derrick May. He founded KMS Records in Detroit, which became a key label for Detroit techno and house crossovers. As E-Dancer he produced underground techno; as Inner City, in collaboration with vocalist Paris Grey, he recorded "Big Fun" and "Good Life" (1988) — tracks that brought Detroit\'s machine aesthetic into contact with gospel-inflected pop vocals and reached mainstream chart positions in the UK and across Europe. This commercial reach gave Detroit techno its broadest popular audience and distinguished Saunderson\'s trajectory from those of his Belleville Three counterparts.',
    releases: [
      { title: '"Big Fun" — Inner City', year: 1988 },
      { title: '"Good Life" — Inner City', year: 1988 },
      { title: '"Heavenly" — E-Dancer', year: 1998 },
    ]},

  // ── THE KLF ───────────────────────────────────────────────────────────────
  { id:'the_klf', label:'The KLF', type:'artist', genre:'rave', era:1987, city:'London', country:'GB',
    desc:'The KLF — Bill Drummond and Jimmy Cauty — operated from 1987 to 1992 as one of the most commercially successful and conceptually radical acts in British pop. Beginning as The Justified Ancients of Mu Mu, they produced stadium house anthems including "What Time Is Love?" (1988), "3 A.M. Eternal" (1991), and "Justified and Ancient" (1991), all of which reached number one in the UK. Their 1990 album Chill Out — a continuous ambient journey recorded in a single session — is a foundational document of the ambient house genre. Cauty had been an early collaborator with Alex Paterson, forming the initial version of The Orb together. In 1992 the duo deleted their entire catalog and publicly retired; in 1994 they burned £1,000,000 on the island of Jura. Their combination of pop ambition, rave aesthetics, and willingness to destroy their own commercial position placed them at the intersection of multiple scenes simultaneously.',
    releases: [
      { title: 'Chill Out', year: 1990 },
      { title: '"3 A.M. Eternal"', year: 1991 },
      { title: '"Justified and Ancient"', year: 1991 },
    ]},

  // ── AFRIKA BAMBAATAA ──────────────────────────────────────────────────────
  { id:'afrika_bambaataa', label:'Afrika Bambaataa', type:'artist', genre:'detroit', era:1982, city:'Bronx', country:'US',
    desc:'Afrika Bambaataa — born Kevin Donovan — grew up in the South Bronx and founded the Zulu Nation in 1973, transforming a gang into a cultural organisation centred on hip-hop. In 1982 he recorded "Planet Rock" with the Soulsonic Force, produced by Arthur Baker. "Planet Rock" sampled Kraftwerk\'s "Trans-Europe Express" and "Numbers", fusing them with a Roland TR-808 and hip-hop vocal culture to create electro — a genre that became a direct ancestor of Detroit techno. The Detroit producers Juan Atkins, Derrick May, and Kevin Saunderson all acknowledged both Kraftwerk and Bambaataa as influences. "Planet Rock" is one of the most sampled and remixed records in electronic music history and established the template for machine music that prioritised futurism and rhythm over rock instrumentation.',
    releases: [
      { title: '"Planet Rock" — Afrika Bambaataa & the Soulsonic Force', year: 1982 },
      { title: '"Looking for the Perfect Beat"', year: 1983 },
      { title: '"Renegades of Funk"', year: 1983 },
    ]},

  // ── DAVID MANCUSO ─────────────────────────────────────────────────────────
  { id:'david_mancuso', label:'David Mancuso', type:'artist', genre:'disco', era:1970, city:'New York', country:'US',
    desc:'David Mancuso opened The Loft in his home at 647 Broadway, New York, in February 1970, inviting guests by word of mouth to what he described as rent parties. The Loft was not a commercial club — there was no liquor licence, guests brought their own food and drink, and there was no DJ booth in the conventional sense. Mancuso played records on a high-fidelity sound system of his own specification, prioritising audio quality above all. His focus on community, sound quality, and the creation of a safe space for Black and gay New Yorkers directly shaped the generation of DJs who followed him — Larry Levan and Frankie Knuckles danced at The Loft before beginning their own careers. Every principle of the DJ as curator, and of the club as sanctuary rather than business, traces back to Mancuso and The Loft.',
    releases: [] },

  // ── SUN RA ────────────────────────────────────────────────────────────────
  { id:'sun_ra', label:'Sun Ra', type:'artist', genre:'experimental', era:1956, city:'Chicago', country:'US',
    desc:'Sun Ra — born Herman Blount in Birmingham, Alabama in 1914 — was a pianist, composer, and bandleader who led the Arkestra from Chicago through New York to Philadelphia across four decades. He was among the first musicians to use the Moog synthesizer and electronic keyboards as central compositional tools, integrating them with free jazz, big band, and ancient Egyptian cosmology within a total theatre built around the conviction that he had originated on Saturn. His Saturn Records label, self-operated from the 1950s, prefigured the independent label model. The Detroit producers explicitly acknowledged his influence: afrofuturism as a cultural framework for Detroit techno draws directly on Sun Ra\'s fusion of machine aesthetics, Black identity, and cosmic imagination. He died in 1993 in Birmingham, Alabama.',
    releases: [
      { title: 'Jazz in Silhouette', year: 1959 },
      { title: 'The Heliocentric Worlds of Sun Ra', year: 1965 },
      { title: 'Space Is the Place', year: 1973 },
    ]},

  // ── PAUL OAKENFOLD ────────────────────────────────────────────────────────
  { id:'paul_oakenfold', label:'Paul Oakenfold', type:'artist', genre:'progressive', era:1987, city:'London', country:'GB',
    desc:'Paul Oakenfold was one of four British DJs — alongside Danny Rampling, Nicky Holloway, and Johnny Walker — who attended Ibiza\'s Amnesia club in the summer of 1987, where they encountered DJ Alfredo\'s eclectic mixing style and the emerging acid house sound. Returning to London, Oakenfold launched Spectrum at Heaven nightclub in April 1988, one of the key spaces where acid house reached a mass UK audience. He later held a residency at the Haçienda in Manchester and founded Perfecto Records, releasing progressive trance and electronic music across the 1990s. His productions and remixes for artists including U2 and Happy Mondays brought club culture into rock contexts, and his long-running radio show transmitted the progressive and trance aesthetic globally.',
    releases: [
      { title: 'Tranceport', year: 1998 },
      { title: 'Bunkka', year: 2002 },
    ]},

  // ── DANNY RAMPLING ────────────────────────────────────────────────────────
  { id:'danny_rampling', label:'Danny Rampling', type:'artist', genre:'chicago', era:1987, city:'London', country:'GB',
    desc:'Danny Rampling was one of the four British DJs present at Ibiza\'s Amnesia club in the summer of 1987, alongside Paul Oakenfold, Nicky Holloway, and Johnny Walker. On returning to London, Rampling opened Shoom in December 1987 — a small club in a Southwark fitness centre that became the epicentre of UK acid house. The smiley face logo Rampling adopted for Shoom became the defining symbol of the acid house era. Shoom was a genuinely underground space, with a capacity of around 300, strict door policies, and a culture built around community and the new music rather than celebrity. Rampling subsequently held a long-running show on BBC Radio 1 and remained a key figure in the development of UK dance music culture.',
    releases: [] },

  // ── SHOOM ─────────────────────────────────────────────────────────────────
  { id:'shoom', label:'Shoom', type:'venue', genre:'chicago', era:1987, city:'London', country:'GB',
    desc:'Shoom opened in December 1987 at The Fitness Centre in Southwark, London, run by Danny Rampling. With a capacity of approximately 300 and a strict door policy, it was the club most closely identified with the moment acid house crossed from Ibiza and Chicago into British youth culture. The smiley face logo it popularised became the visual emblem of the second summer of love. Shoom was small, intense, and deliberately exclusive — a quality that distinguished it from the arena-scale raves that followed. Its influence on UK club culture was disproportionate to its size: virtually every subsequent strand of British dance music culture can be traced to the network of people and ideas that passed through Shoom in 1988.',
    releases: [] },

  // ── PRIMAL SCREAM ─────────────────────────────────────────────────────────
  { id:'primal_scream', label:'Primal Scream', type:'artist', genre:'chicago', era:1990, city:'Glasgow', country:'GB',
    desc:'Primal Scream formed in Glasgow in 1982 under Bobby Gillespie, originally as a post-punk guitar band. Their trajectory changed when Andrew Weatherall remixed "I\'m Losing More Than I\'ll Ever Have" as "Loaded" in 1990 — a record that fused rock vocals with acid house production and became a UK hit. Screamadelica (1991), produced primarily by Weatherall with contributions from Terry Farley and Hugo Nicolson, extended this synthesis across a full album combining gospel, acid house, dub, and rock. It is among the most celebrated British albums of its decade. The record demonstrated that acid house\'s production methodology could absorb and transform other musical traditions rather than simply replace them, and it brought the sound of UK club culture to an audience that had not previously engaged with it.',
    releases: [
      { title: '"Loaded"', year: 1990 },
      { title: 'Screamadelica', year: 1991 },
    ]},

  // ── JESSE SAUNDERS ────────────────────────────────────────────────────────
  { id:'jesse_saunders', label:'Jesse Saunders', type:'artist', genre:'chicago', era:1984, city:'Chicago', country:'US',
    desc:'Jesse Saunders is a Chicago DJ and producer whose 1984 recording "On and On" — co-written with Vince Lawrence and recorded with vocalist Paris Brightledge — is among the earliest commercially pressed house records. Released on Saunders\'s own Jes Say label and later distributed more broadly, the record documented the Chicago house sound at its very inception and demonstrated that the music being made in the city\'s clubs could sustain commercial release. Saunders was resident at the Music Box alongside Ron Hardy and played a formative role in the Chicago scene\'s early development. He subsequently founded the On Trax distribution company, which helped channel independent Chicago house recordings to wider audiences.',
    releases: [
      { title: '"On and On"', year: 1984 },
    ]},

  // ── SUBURBAN KNIGHT ───────────────────────────────────────────────────────
  { id:'suburban_knight', label:'Suburban Knight', type:'artist', genre:'detroit', era:1989, city:'Detroit', country:'US',
    desc:'Suburban Knight is the project of James Pennington, a Detroit producer operating in the city\'s techno underground since the late 1980s. His 1990 Transmat release "The Art of Stalking" established a sound characterised by paranoid, labyrinthine percussion and a sense of pursuit that drew on the specific atmosphere of Detroit\'s streets rather than any abstract futurism. Pennington remained a consistent presence in Detroit\'s underground through the following decades, releasing on Transmat and other labels and maintaining a low public profile in the tradition of the city\'s anonymous producers. His work represents the darker, more psychological strand of Detroit techno — less concerned with cosmic speculation than with the immediate texture of urban experience.',
    releases: [
      { title: '"The Art of Stalking"', year: 1990 },
      { title: '"Hi-Tech Jazz"', year: 1990 },
    ]},

  // ── STEVE "SILK" HURLEY ───────────────────────────────────────────────────
  { id:'steve_silk_hurley', label:'Steve "Silk" Hurley', type:'artist', genre:'chicago', era:1985, city:'Chicago', country:'US',
    desc:'Steve "Silk" Hurley is a Chicago DJ and producer whose 1986 recording "Jack Your Body", released on DJ International Records, became the first house track to reach number one on the UK Singles Chart in January 1987. The record arrived in Britain without mainstream promotion and climbed the chart through club play and word of mouth, demonstrating the commercial reach of house music to an industry that had largely ignored it. Hurley had previously recorded as JM Silk with Keith Nunnally, releasing "I Can\'t Turn Around" (1985) and other records on DJ International. "Jack Your Body" remains one of the most significant single events in the international spread of Chicago house.',
    releases: [
      { title: '"I Can\'t Turn Around" — JM Silk', year: 1985 },
      { title: '"Jack Your Body"', year: 1986 },
    ]},

  // ── FARLEY "JACKMASTER" FUNK ──────────────────────────────────────────────
  { id:'farley_jackmaster_funk', label:'Farley "Jackmaster" Funk', type:'artist', genre:'chicago', era:1982, city:'Chicago', country:'US',
    desc:'Farley "Jackmaster" Funk — born Ernest Duane James — was one of the Hot Mix 5, the group of DJs who broadcast on WBMX radio in Chicago in the early 1980s, introducing a mass audience to the emerging house sound through a weekly mix show. His 1986 DJ International release "Love Can\'t Turn Around", featuring vocalist Darryl Pandy, reached number ten on the UK Singles Chart and was among the first Chicago house tracks to achieve significant British commercial success — preceding Steve "Silk" Hurley\'s chart-topper by several months. His radio work through WBMX was foundational in spreading house music beyond Chicago\'s clubs to a broader audience.',
    releases: [
      { title: '"Love Can\'t Turn Around" feat. Darryl Pandy', year: 1986 },
      { title: '"Farley Knows House"', year: 1987 },
    ]},

  // ── LIL LOUIS ─────────────────────────────────────────────────────────────
  { id:'lil_louis', label:'Lil Louis', type:'artist', genre:'chicago', era:1987, city:'Chicago', country:'US',
    desc:'Lil Louis — born Marvin Louis Burns in Chicago — is a producer and DJ whose 1989 recording "French Kiss", released on FFRR Records, became one of the most distinctive and widely recognised house tracks of its era. The record is structured around a gradually decelerating tempo that drops almost to half-speed at its centre before rebuilding, accompanied by a vocal performance of simulated intimacy that made it both controversial and impossible to ignore. It reached number two on the UK Singles Chart. Louis had been active in Chicago\'s house scene from the mid-1980s and worked alongside Ron Hardy at the Music Box. "French Kiss" demonstrated that house music could sustain formal experimentation — a structural gesture as radical as anything produced in the genre.',
    releases: [
      { title: '"French Kiss"', year: 1989 },
      { title: '"I Called U"', year: 1989 },
    ]},

  // ── THE LOFT ──────────────────────────────────────────────────────────────
  { id:'the_loft', label:'The Loft', type:'venue', genre:'disco', era:1970, city:'New York', country:'US',
    desc:'The Loft opened on Valentine\'s Day 1970 in David Mancuso\'s home at 647 Broadway, New York. Unlike commercial clubs, The Loft had no liquor licence, no cover charge, and no formal DJ booth — guests were invited by word of mouth to a party where Mancuso played records on a high-fidelity sound system he built and refined over decades. The Loft established the model of the DJ as host and curator, the dancefloor as sanctuary, and sonic quality as a moral commitment. Larry Levan and Frankie Knuckles both danced at The Loft before beginning their careers. When Knuckles moved to Chicago and opened the Warehouse, and Levan later opened the Paradise Garage, both were consciously extending The Loft\'s principles into new cities. The entire lineage of the DJ-centred club — from Chicago to Detroit to London — begins here.',
    releases: [] },

  // ── FINGERS INC. ──────────────────────────────────────────────────────────
  { id:'fingers_inc', label:'Fingers Inc.', type:'artist', genre:'chicago', era:1985, city:'Chicago', country:'US',
    desc:'Fingers Inc. was the Chicago group formed by producer Larry Heard, vocalist Robert Owens, and keyboardist Ron Wilson. Operating between 1985 and 1988, they were the vocal wing of the deep house sound Heard had begun developing as Mr. Fingers — their records added the warmth of a human voice to the stripped-back, emotionally direct production style that Heard had largely arrived at alone. Key releases include "Mystery of Love" (1985) and "Bring Down the Walls" (1986), both circulated through Jack Trax in the UK and Trax Records in the US. Their 1988 LP "Another Side" on DJM Records remains among the most fully realised statements of early deep house, and Robert Owens\'s vocal presence established a template for gospel-influenced house singing that persists across the genre to the present day.',
    releases: [
      { title: '"Mystery of Love"', year: 1985 },
      { title: '"Bring Down the Walls"', year: 1986 },
      { title: 'Another Side (album)', year: 1988 },
    ]},

  // ── TEN CITY ──────────────────────────────────────────────────────────────
  { id:'ten_city', label:'Ten City', type:'artist', genre:'chicago', era:1987, city:'Chicago', country:'US',
    desc:'Ten City was a Chicago vocal house group whose records brought the expressive tradition of gospel and soul directly into the house club. The group centred on the voice of Byron Stingily, one of the most technically accomplished vocalists to emerge from the Chicago scene, whose range and delivery placed Ten City outside the mechanical minimalism of early house and into something more deliberately song-oriented. They released on DJ International Records — the same label that distributed much of the scene\'s output to the UK — with early singles including "That\'s the Way Love Is" (1987) and albums including "Foundation" (1989) and "State of Mind" (1990). After the group dissolved, Stingily pursued a solo career in house music, where his voice remained a recurring presence in the following decades.',
    releases: [
      { title: '"That\'s the Way Love Is"', year: 1987 },
      { title: 'Foundation (album)', year: 1989 },
      { title: 'State of Mind (album)', year: 1990 },
    ]},

  // ── MODEL 500 ─────────────────────────────────────────────────────────────
  { id:'model_500', label:'Model 500', type:'artist', genre:'detroit', era:1985, city:'Detroit', country:'US',
    desc:'Model 500 is the principal recording project of Juan Atkins, released on his own Metroplex label. "No UFO\'s" (1985) and "Night Drive (Thru-Babylon)" (1985) are among the first records that can be identified as Detroit techno in its mature form — recordings in which the influence of European electronic music and American funk had been distilled into something specific to the city and its moment. Where Atkins\'s earlier Cybotron project (with Richard Davis) had moved between electro and synthesiser pop, Model 500 stripped the sound down to its functional core: machine percussion, synthesiser bass, and a disciplined use of texture and space. The label Metroplex operated as the initial distribution channel for the Detroit sound, predating the formation of Transmat and Underground Resistance.',
    releases: [
      { title: '"No UFO\'s"', year: 1985 },
      { title: '"Night Drive (Thru-Babylon)"', year: 1985 },
      { title: '"The Chase"', year: 1989 },
    ]},

  // ── PHOTEK ────────────────────────────────────────────────────────────────
  { id:'photek', label:'Photek', type:'artist', genre:'techno', era:1994, city:'London', country:'UK',
    desc:'Photek is the project of Rupert Parkes, a UK producer whose work in the mid-1990s pushed drum and bass\'s rhythmic complexity further than almost any of his contemporaries. His records — released primarily on his own Photek Productions label — were built around drum patterns of extraordinary intricacy, drawing as much from jazz percussion and martial arts philosophy as from the rave and jungle lineage he emerged from. "Ni Ten Ichi Ryu (Two Swords Technique)" (1995) is widely regarded as one of the most technically sophisticated pieces of drum programming in the genre, and his album "Modus Operandi" (1997) remains a critical touchstone. Parkes subsequently moved toward more minimal and techno-influenced production, demonstrating the same formalist discipline across different tempos and contexts.',
    releases: [
      { title: '"Ni Ten Ichi Ryu (Two Swords Technique)"', year: 1995 },
      { title: '"The Hidden Camera"', year: 1996 },
      { title: 'Modus Operandi (album)', year: 1997 },
    ]},

  // ── LARRY HEARD (MR. FINGERS) ─────────────────────────────────────────────
  { id:'larry_heard', label:'Larry Heard', type:'artist', genre:'chicago', era:1985, city:'Chicago', country:'US',
    desc:'Larry Heard is a Chicago producer and musician whose recordings under the name Mr. Fingers in 1985–86 essentially created what became known as deep house — a strand of house music built on slower tempos, piano chords, Roland drum machine patterns, and an emotional directness closer to gospel and soul than to disco. "Can You Feel It" (1986, Trax Records), recorded alone in his bedroom, is among the most significant records in the history of house music: its combination of restraint, feeling, and structural simplicity defined a sound that influenced producers across Chicago, New York, and the UK for the following four decades. With Robert Owens and Ron Wilson he recorded as Fingers Inc., releasing tracks on Trax and Jack Trax that deepened the same approach with live vocals. Heard continued recording into the 1990s under his own name and on his Alleviated Music label, maintaining artistic independence throughout.',
    releases: [
      { title: '"Can You Feel It" — Mr. Fingers', year: 1986 },
      { title: '"Washing Machine" — Mr. Fingers', year: 1986 },
      { title: '"Mystery of Love" — Fingers Inc.', year: 1985 },
    ]},

  // ── BASIC CHANNEL ─────────────────────────────────────────────────────────
  { id:'basic_channel', label:'Basic Channel', type:'label', genre:'techno', era:1993, city:'Berlin', country:'DE',
    desc:'Basic Channel is the Berlin-based label and production project of Moritz von Oswald and Mark Ernestus, launched in 1993. Their records — released on 12-inch vinyl with minimal sleeve information, typically without track listings or personnel credits — fused the mechanical grid of Detroit techno with the long reverb tails, heavy bass frequencies, and spatial depth of Jamaican dub, creating what became known as dub techno. Releases such as "Phylyps Trak" (1993), "Quadrant Dub" (1993), and "Octagon" (1994) established an aesthetic in which texture, space, and gradual evolution took precedence over melody or harmonic movement. Their Chain Reaction sublabel extended the sound to a wider circle of producers. Basic Channel\'s approach defined one of the most influential sonic territories in 1990s electronic music, shaping producers in Berlin, London, and across Europe.',
    releases: [
      { title: '"Phylyps Trak"', year: 1993 },
      { title: '"Quadrant Dub"', year: 1993 },
      { title: '"Octagon"', year: 1994 },
    ]},

  // ── MASTERS AT WORK ───────────────────────────────────────────────────────
  { id:'masters_at_work', label:'Masters at Work', type:'artist', genre:'deep', era:1990, city:'New York', country:'US',
    desc:'Masters at Work is the New York production partnership of Louie Vega (born 1965, Bronx) and Kenny "Dope" Gonzalez (born 1970, Brooklyn), formed around 1990. Working from the tradition of the Paradise Garage and the deeper end of the New York club continuum, they built a body of work that bridged deep house, garage house, and Latin-influenced soul — a sound rooted in the New York borough experience rather than European minimalism. They produced records under multiple aliases and released on their MAW Records label, and their Nuyorican Soul project (1997, recorded with Jorge Morales and featuring vocalists including India, George Benson, and Jocelyn Brown) represented an attempt to document the Latin soul and house continuum through a full album. Their remixes and productions for other artists — including Diane Ross, Roy Ayers, and countless club records — made them among the most prolific and influential production teams of the 1990s.',
    releases: [
      { title: 'Nuyorican Soul (album)', year: 1997 },
    ]},

  // ── KERRI CHANDLER ────────────────────────────────────────────────────────
  { id:'kerri_chandler', label:'Kerri Chandler', type:'artist', genre:'deep', era:1993, city:'Newark', country:'US',
    desc:'Kerri Chandler is a New Jersey-born producer and DJ whose work from the early 1990s onward represents one of the most sustained explorations of deep house\'s relationship with gospel, soul, and emotional directness. His releases on Shelter Records — including "Bar A Thym" (1994) — and the label Madhouse Records (co-founded with Jerome Sydenham) established a sound characterised by raw drum machine programming, warm bass frequencies, and a sense of unresolved longing. Chandler grew up in a musical household — his father was a singer and his family was involved in the church — and the gospel influence in his work is structural as much as atmospheric. He continued recording and releasing through the 2000s and 2010s, maintaining a reputation as one of deep house\'s most consistent and uncompromised practitioners.',
    releases: [
      { title: '"Bar A Thym"', year: 1994 },
      { title: '"Rain"', year: 1994 },
    ]},

  // ── CYBOTRON ──────────────────────────────────────────────────────────────
  { id:'cybotron', label:'Cybotron', type:'artist', genre:'detroit', era:1981, city:'Detroit', country:'US',
    desc:'Cybotron was the duo of Juan Atkins and Rik Davis, formed in the Detroit area in the early 1980s. Their recordings sit at the junction of electro, funk, and the European synthesiser music that Atkins had absorbed through Kraftwerk and Giorgio Moroder — the same fusion that would produce Detroit techno, but arrived at here before the genre had a name. "Alleys of Your Mind" (1981, Deep Space Records) was their debut, a hard, cold piece of drum-machine funk. "Clear" (1983, Fantasy Records) became their most widely circulated record, its grid-locked percussion and descending synthesiser figure heard across clubs in Detroit, Chicago, and New York. When Davis and Atkins parted ways in 1985, Atkins continued as Model 500 on his own Metroplex label, translating the Cybotron sound into what became the template for Detroit techno.',
    releases: [
      { title: '"Alleys of Your Mind"', year: 1981 },
      { title: '"Clear"', year: 1983 },
      { title: '"Techno City"', year: 1984 },
    ]},

  // ── INNER CITY ────────────────────────────────────────────────────────────
  { id:'inner_city', label:'Inner City', type:'artist', genre:'detroit', era:1988, city:'Detroit', country:'US',
    desc:'Inner City is the project of Kevin Saunderson and vocalist Paris Grey, formed in Detroit in 1988. Where Saunderson\'s earlier techno productions were functional and floor-focused, Inner City reached toward a more song-oriented sound — "Big Fun" and "Good Life", both released in 1988 on the Ten label in the UK and distributed through Network Records, crossed into mainstream chart positions in Britain and Europe, becoming among the first Detroit-derived records to achieve significant commercial reach. The warm, gospel-touched vocal performances of Paris Grey gave the project a distinct identity from the colder textures of contemporaneous Detroit techno. Inner City made the case that the Detroit sound could carry radio-friendly emotion without losing its structural integrity.',
    releases: [
      { title: '"Big Fun"', year: 1988 },
      { title: '"Good Life"', year: 1988 },
      { title: '"Pennies from Heaven"', year: 1992 },
    ]},

  // ── FRANKIE BONES ─────────────────────────────────────────────────────────
  { id:'frankie_bones', label:'Frankie Bones', type:'artist', genre:'rave', era:1989, city:'New York', country:'US',
    desc:'Frankie Bones is a Brooklyn-born DJ who played a documented role in the transmission of UK rave culture to the United States. After travelling to the UK in 1989 and experiencing the acid house and rave scene firsthand — including performing at events alongside the UK\'s leading DJs — he returned to New York and began organising Storm Rave events in Brooklyn from 1990 onward, adapting the energy and format of the UK warehouse party to the American context. He is frequently cited as the person who coined the phrase PLUR — Peace, Love, Unity, Respect — as a guiding ethos for the rave community. His role was logistical and cultural as much as musical: he built the infrastructure of the US east coast rave scene at a point when there was none.',
    releases: [
      { title: 'Storm Rave series (events)', year: 1990 },
    ]},

  // ── BLAZE ─────────────────────────────────────────────────────────────────
  { id:'blaze', label:'Blaze', type:'artist', genre:'deep', era:1990, city:'Newark', country:'US',
    desc:'Blaze is the Newark, New Jersey duo of Josh Milan and Kevin Hedge, whose records from the early 1990s brought a gospel-saturated warmth to deep house that set them apart from the more austere end of the genre. Their signature track "Lovelee Dae" (1990) — built on piano chords, a spoken vocal, and a rhythm that breathes rather than drives — became one of the most sampled and re-released tracks in the deep house tradition, demonstrating a staying power rooted in emotional directness rather than formal complexity. Milan and Hedge grew up in church communities in New Jersey and made no attempt to separate that musical inheritance from their club output. Blaze represented the gospel-house axis of the NYC/NJ scene with a consistency matched by few of their contemporaries.',
    releases: [
      { title: '"Lovelee Dae"', year: 1990 },
    ]},
];
