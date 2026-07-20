// ─────────────────────────────────────────────────────────────────────────────
// Teacher Guides — Unit 4: Astronomy: The Seasonal Sky
// GUIDES keyed by lesson id. VOCAB is merged into the global VOCAB_DEFS.
// ─────────────────────────────────────────────────────────────────────────────

export const GUIDES = {
  "4.1": {
    glance: {
      time: "20 min prep + 3 short outdoor checks (9am, noon, 3pm)",
      where: "Outdoors, a sunny patch of dirt or a pot of sand",
      prep: "5 min",
      heart: "The evidence comes before the explanation.",
      oneThing: "Do NOT explain why the shadow moves today. Just measure it, three times, and hold the question overnight.",
    },
    background: {
      text: [
        "You do not need to know any astronomy to teach this lesson — you need a stick, some sunshine, and the willingness to wait until 3pm. Stand a stick upright in the ground and trace its shadow three times during the day. The shadow shrinks toward noon and swings around. That is all today asks: real evidence, honestly gathered, with no explanation yet attached.",
        "The one idea underneath everything in this unit is this: it looks like the sun moves across our sky, but the shadow evidence — gathered patiently, all day — is actually the first clue that it is we who are turning, not the sun who is racing overhead. You are not required to prove that today. You are only required to notice, together, that something changed, and to let the mystery sit un-explained until Lesson 4.2 hands your child the key. That patience is the whole art of this lesson."
      ],
      keyFacts: [
        "A shadow forms because the stick blocks sunlight — it points opposite the sun.",
        "The shadow is shortest near local noon, when the sun is highest.",
        "The shadow's direction swings through the day as the sun's position in the sky changes.",
        "A sundial is simply this stick-and-shadow idea, made permanent and marked with the hours.",
        "Today's question — is the sun really 'moving,' or is something else? — is answered next lesson. Let it hang.",
      ],
      sayItAloud: null,
    },
    supplies: [
      { item: "A straight stick or dowel, 12–18 inches", note: "A pencil, a broom handle, or a chopstick works; anything that stands upright and casts a clean shadow." },
      { item: "A patch of bare dirt, sand, or a large paper taped down outdoors", note: "No yard? A large flowerpot of soil, or a stiff paper plate on a sunny porch step, holds the stick just as well." },
      { item: "Chalk or pencil, and a watch or phone clock", note: "Any way to trace an outline and note the time." },
      { item: "Nature journal", note: "Any blank notebook." },
    ],
    prepNote: "Check tomorrow's forecast tonight — you need a mostly sunny day. Choose a stick and a spot before breakfast so you are not scrambling at 9am.",
    flow: [
      { min: "5", text: "Set the stick. Push it upright into the dirt or sand. Say: “We're going to be sundial-makers today. Watch this shadow three times and tell me what changes.”" },
      { min: "5", text: "9am check. Trace the shadow's outline with chalk. Write “9am” beside it. No comment yet." },
      { min: "5", text: "Noon check. Trace again, label “noon.” Ask: “Is it the same shape? Longer or shorter?”" },
      { min: "5", text: "3pm check. Trace a third time, label “3pm.”" },
      { min: "5", text: "Look at all three together. Ask the Key Question aloud: “We say ‘the sun moves across the sky.’ Is that what's actually happening? What would you have to prove to answer that question?” Do not answer — let it hang until tomorrow." },
    ],
    discussion: {
      launch: "Look at your three shadow tracings together. What changed? What do you think caused the change?",
      formIA: "“Which shadow was the shortest? Which direction did the shadow point in the morning — and in the afternoon? Show me with your arm.”",
      formIIA: "“Describe the whole pattern in one sentence. What would you need to measure or watch, over a longer time, to find out what's really moving — the sun, or us?”",
      ifAsked: [
        { q: "So is the sun moving or not?", a: "That's exactly the right question to be holding onto — tomorrow's reading answers it, with this very evidence." },
        { q: "Why is the shadow shortest at noon?", a: "Because the sun is highest in the sky at that time, so its light comes down closer to straight overhead, giving the stick the shortest shadow." },
        { q: "Could I use this to tell time without a clock?", a: "Yes — that is exactly what a sundial is. People told time this way for thousands of years before clocks existed." },
      ],
    },
    worship: {
      scripture: "“He appointed the moon for seasons: the sun knoweth his going down.” (Psalm 103:19 LXX / 104:19)",
      patristic: "St. Basil the Great, in the Hexaemeron, marveled that the sun's daily course was set by God not without purpose but for the use of living beings — even something as ordinary as a shadow's swing was made to serve us.",
      godward: "“This stick and its shadow have been quietly telling time since before clocks existed. God set that rhythm going — and today, for the first time, you watched it with your own eyes.”",
    },
    challenges: [
      { problem: "It's cloudy today.", fix: "Wait for the next sunny day — this lesson does not work without direct sun. In the meantime, preview tomorrow's reading title so you're ready to move the moment the sky clears." },
      { problem: "You forget one of the three checks.", fix: "Two tracings still show a real change; note honestly in the journal “we missed the noon check” and discuss with what you have. Perfection isn't the point — noticing is." },
      { problem: "A child wants the answer right now.", fix: "Say warmly, “I know — I want to tell you too. But scientists wait for enough evidence before they explain. One more sleep.”" },
      { problem: "You genuinely aren't sure yourself why the shadow moves.", fix: "Wonderful — say so out loud: “I'm not sure either. Let's find out together tomorrow.” You are modeling honest inquiry, which is the whole point of the lesson." },
    ],
    models: {
      formIA: "“In the morning the shadow was long and pointed one way. At noon it got short. Then in the afternoon it got long again but pointed the other way. I don't know why yet.”",
      formIIA: "“The shadow was longest in the morning, shrank until noon, then grew long again in the opposite direction by 3pm. This looks like the sun changed position in the sky through the day. To know for certain whether the sun moves or the Earth moves, I'd need more evidence than one day's shadows.”",
      journal: "Three shadow tracings with times labeled, IA: one sentence describing what happened; IIA: a paragraph connecting the shadow pattern to the unanswered question about what's really moving.",
    },
    extensions: {
      minimum: "If you can only manage two checks (morning and afternoon), that's still a real comparison — skip noon before you skip the lesson entirely.",
      goOutside: "That evening, step out and simply look up at the twilight sky together — no task, just look. It sets up Lesson 4.4's first real stargazing session.",
      make: "Leave the stick in place all week and keep adding a midday tracing — watch how the noon shadow slowly changes length as the season shifts.",
      readMore: "If a child is eager, let them guess (out loud, no penalty for being wrong) what tomorrow's reading title, “The Spinning Earth,” might mean.",
      connect: "This is the same patient, wait-for-the-evidence posture the whole unit will ask for — from moon phases to planets, look first, explain later.",
      multiAge: "The older child can be the official time-recorder and chalk-tracer; the younger child gets to be the one who declares “shorter!” or “longer!” at each check.",
      youngest: "For a 5–6-year-old: just have them notice and point — “was the shadow long or short?” at each check. That's the whole lesson for that age.",
      digDeeper: null,
    },
  },

  "4.2": {
    glance: {
      time: "30–35 min, best in early evening so the room can be darkened",
      where: "Indoors, a room that can go dark",
      prep: "5 min",
      heart: "One demonstration you can hold in your hands explains what a lecture never could.",
      oneThing: "Do the flashlight-and-globe demonstration yourself — don't just describe it. Watching day and night sweep across a globe is the whole lesson.",
    },
    background: {
      text: [
        "This is the lesson that finally answers yesterday's held question. You do not need to understand orbital mechanics — you need a flashlight, a globe (or a ball with a dot drawn on it for “home”), and a darkened room. Turn the globe slowly in the flashlight's beam and your child will see, with their own eyes, what a thousand words could not make clear: half the globe is always lit, and it's the turning of the globe — not the sun racing around it — that sweeps day into night.",
        "The one idea for today: Earth spins on its axis once a day (giving us day and night), and Earth also leans as it travels around the sun once a year (giving us the seasons). These are two different motions doing two different jobs — don't let them blur together. And here is the detail that surprises everyone, including most adults: Earth is actually slightly closer to the sun in January than in July. Closeness isn't what makes summer warm — the tilt is. Let that be the delightful surprise of the day, not a fact to rush past."
      ],
      keyFacts: [
        "Rotation = Earth spinning on its axis once every 24 hours → day and night.",
        "Revolution = Earth traveling all the way around the sun once every year → seasons, alongside the axial tilt.",
        "Axial tilt: Earth's axis leans about 23.5 degrees — it does NOT stand straight up.",
        "When your hemisphere leans toward the sun, you get summer; leaning away gives winter — regardless of distance.",
        "Solstice = the two days when a hemisphere leans most toward or away from the sun; equinox = the two days when neither hemisphere is favored.",
      ],
      sayItAloud: [
        "axis = “AK-sis”",
        "solstice = “SOL-stiss”",
        "equinox = “EE-kwih-nox”",
      ],
    },
    supplies: [
      { item: "A globe", note: "No globe? Any ball (basketball, orange, balloon) with a sticker for “home” works fine." },
      { item: "A flashlight", note: "A phone flashlight or lamp with the shade off both work." },
      { item: "Reading: “The Story-Book of Science,” Ch. LV — Day and Night", note: "Free online: https://www.gutenberg.org/files/56795/56795-h/56795-h.htm#ch55 (Librivox audio also available)" },
      { item: "Second reading (optional, Age 11): “Astronomy for Amateurs,” Ch. VIII — The Earth", note: "Free online: https://www.gutenberg.org/ebooks/48216" },
    ],
    prepNote: "Pick a room that darkens well — pull the curtains before you begin so you aren't fumbling mid-demonstration.",
    flow: [
      { min: "5", text: "Darken the room. Hold the flashlight steady at one end as the “sun.” Hold the globe at the other end as “Earth.”" },
      { min: "8", text: "Rotate the globe slowly on its axis. Watch day sweep into night across its surface. Ask: “Where is home right now — day or night?”" },
      { min: "7", text: "Tilt the globe's axis and walk it slowly all the way around the flashlight: pause at summer solstice (your hemisphere leaning toward the sun), winter solstice (leaning away), and the two equinoxes (neither hemisphere favored)." },
      { min: "5", text: "Read aloud the assigned spine chapter together (or the section on day and night)." },
      { min: "5", text: "Narrate. Ask Age 8: “Why do we have day and night? Why summer and winter?” Ask Age 11 the closer-in-January surprise question." },
      { min: "3", text: "Close by naming today's two big words together: rotation and revolution. “Which one gives us day and night? Which one gives us seasons?”" },
    ],
    discussion: {
      launch: "What did the globe show you that just talking about it couldn't?",
      formIA: "“Show me with the globe: where's daytime right now? Where's nighttime? What made summer happen in the demonstration?”",
      formIIA: "“Explain the difference between rotation and revolution in your own words. Why do we have seasons if the tilt — not the distance — is doing the work?”",
      ifAsked: [
        { q: "If we're closer to the sun in January, why is it cold then?", a: "Distance barely changes our temperature — the tilt does all the real work. In January the Northern Hemisphere is leaning away from the sun, so we get weaker, more slanted sunlight, even though we're a little closer overall." },
        { q: "Does the sun ever actually move?", a: "The sun does move through space, carrying the whole solar system with it — but the daily and seasonal changes we notice from Earth are caused by Earth's own spinning and tilting, not by the sun racing around us." },
        { q: "Why is the axis tilted at all?", a: "Nobody knows for certain — one common idea is an ancient collision early in Earth's history. It's a genuine mystery, and a wonderful one: that tilt is the very thing that gives us our seasons." },
      ],
    },
    worship: {
      scripture: "“Thou hast made summer and winter.” (Psalm 73:17 LXX / 74:17)",
      patristic: "St. Basil the Great wrote in the Hexaemeron that the sun's alternating course was arranged for the perfect fulfilling of the year, so that day, night, and season would each serve the good order of creation.",
      godward: "“The same tilt that gives us summer strawberries also gives us winter snow. One quiet lean of the Earth, doing two different kinds of good, all year round.”",
    },
    challenges: [
      { problem: "The room won't get fully dark.", fix: "A bathroom or closet with the door mostly shut works surprisingly well — you only need enough darkness to see the shadow line clearly on the globe." },
      { problem: "Rotation and revolution get mixed up.", fix: "Give each motion a physical gesture: spin your own body in place for rotation, walk a big circle around a chair for revolution. Bodies remember better than words." },
      { problem: "“Why does the tilt cause seasons?” feels too abstract for Form IA.", fix: "Skip the mechanism for the younger child — let them simply notice “leaning toward = warm, leaning away = cold” from watching the globe, and leave the deeper why to Form IIA." },
      { problem: "No physical globe or ball on hand.", fix: "Draw a large circle for Earth on paper, mark a dot for home, and rotate the paper by hand under a flashlight or lamp — it works nearly as well." },
    ],
    models: {
      formIA: "“When the globe spins around, our dot goes from light to dark — that's day and night. When I tilted it and walked it around the flashlight, our dot got more light in summer and less in winter.”",
      formIIA: "“Rotation is Earth spinning once a day, which gives us day and night. Revolution is Earth traveling once around the sun in a year. Seasons come from the axial tilt — when our hemisphere leans toward the sun we get summer, even though Earth is actually a bit farther from the sun then. In January we're closer, but tilted away, so it's winter anyway. Tilt matters more than distance.”",
      journal: "No journal assigned today — 4.3's diagram gathers today's ideas into a labeled drawing.",
    },
    extensions: {
      minimum: "Do just the tilt-and-walk demonstration (7 min) and skip the reading if time is tight — the physical picture is the irreplaceable part.",
      goOutside: "Step outside right now, if the sun is up, and notice its height in the sky compared to noon — a living preview of tomorrow's ideas.",
      make: "Tape a small paper flag to the globe at “home” so the same demonstration can be repeated anytime this week for review.",
      readMore: "Age 11 readers who love this can preview the Librivox audio of the Story-Book of Science chapter while doing chores.",
      connect: "The Church's own calendar leans on these same rhythms — the date of Pascha depends on the spring equinox and the moon, which this unit will return to.",
      multiAge: "Let the older child hold the flashlight and narrate the demonstration to the younger child in their own words — teaching is the best test of understanding.",
      youngest: "For a 5–6-year-old: just let them spin the globe and say “light” or “dark” as different spots pass the flashlight beam.",
      digDeeper: "For a curious older child: research the difference between a sidereal day (23h 56m, Earth's rotation measured against the stars) and a solar day (24h, measured against the sun). Why are they different lengths?",
    },
  },

  "4.3": {
    glance: {
      time: "25–30 min",
      where: "Indoors, at the table",
      prep: "2 min",
      heart: "A drawing you make yourself is worth ten you only look at.",
      oneThing: "This diagram is the backbone of the whole unit — moon phases, seasonal stars, everything later builds on it. Take the time to get it right today.",
    },
    background: {
      text: [
        "Today there is no new idea to teach — only yesterday's flashlight-and-globe demonstration turned into a drawing your child makes with their own hand. That act of drawing is what makes the idea stick. You are simply the guide standing beside the paper, asking “which way does the axis tilt here?” and letting them work it out.",
        "Keep this diagram — literally keep the page. In the weeks ahead, when the child asks why we see different stars in winter than in summer, or why the moon behaves the way it does, you will turn back to this very drawing and say “remember this?” It is the reference point for the rest of Unit 4."
      ],
      keyFacts: [
        "Earth's orbit around the sun is very close to a circle, drawn as a loop with the sun at the center.",
        "Four key positions on that loop: summer solstice, autumn equinox, winter solstice, spring equinox.",
        "At every position, Earth's axis tilts the same direction in space — it does not flip to “follow” the sun.",
        "Earth spins west to east (the reason the sun appears to rise in the east).",
        "A leap year adds one day roughly every four years because a full orbit actually takes about 365.25 days, not an even 365.",
      ],
      sayItAloud: null,
    },
    supplies: [
      { item: "Nature journal or plain paper", note: "Any blank page; unlined is easiest for a diagram." },
      { item: "Pencil, ruler, and colored pencils", note: "A ruler helps for the orbit circle; colors help distinguish lit vs. shadowed hemisphere." },
      { item: "Yesterday's globe or ball (optional but very helpful)", note: "Keep it out on the table as a live reference while drawing." },
    ],
    prepNote: null,
    flow: [
      { min: "3", text: "Set the task. Say: “Let's turn yesterday's demonstration into a picture you'll keep and use all unit long.”" },
      { min: "5", text: "Draw the sun in the center of the page and a large circle around it for Earth's orbit." },
      { min: "10", text: "Mark four points on the circle. Label them: summer solstice, autumn equinox, winter solstice, spring equinox. At each, draw a small Earth with its axis tilted the same direction, shading which hemisphere gets more direct sunlight." },
      { min: "5", text: "Add arrows showing Earth spins west to east on its axis." },
      { min: "5", text: "(Age 11) Add a note: why does a leap year happen every four years? Talk it through before writing: the extra quarter-day per year adds up." },
      { min: "2", text: "Narrate back. Ask the child to point to the diagram and explain, in their own words, why summer happens where it happens." },
    ],
    discussion: {
      launch: "Point to your diagram: where is Earth when it's summer for us? How can you tell from the picture?",
      formIA: "“Show me on your drawing: which way is the Earth leaning at summer? At winter?”",
      formIIA: "“Walk me through all four positions in order, one full year, using your own diagram.”",
      ifAsked: [
        { q: "Why doesn't the tilt ever change direction?", a: "It's remarkably steady — Earth's axis points toward roughly the same spot in space (near the North Star) all year, which is exactly why the tilt sometimes faces the sun and sometimes faces away as Earth travels around." },
        { q: "Why is there a leap year?", a: "Because one trip around the sun actually takes about 365 and a quarter days, not an even 365. Every four years those extra quarter-days add up to one whole extra day, so we tuck it into February." },
        { q: "Which season is it at the equinox?", a: "Neither hemisphere is favored at an equinox — day and night are close to equal length everywhere on Earth, which is why we call them the spring and autumn equinox." },
      ],
    },
    worship: {
      scripture: "“He appointed the moon for seasons: the sun knoweth his going down.” (Psalm 103:19 LXX / 104:19)",
      patristic: null,
      godward: "“One tilted Earth, one steady loop around the sun, and every season you've ever loved comes out of that simple, faithful pattern.”",
    },
    challenges: [
      { problem: "The circle-and-tilt drawing feels too abstract for Form IA.", fix: "Let the younger child simply color which hemisphere is lit at each position, while the older child adds the labels and the leap-year note." },
      { problem: "Drawing the tilt consistently at all four points is fiddly.", fix: "Draw one small Earth-with-tilt template in the corner first, then trace or copy it at each of the four positions so the angle stays consistent." },
      { problem: "The leap-year explanation confuses the numbers.", fix: "Use a concrete image: “Four quarter-days, saved up like four quarters in a piggy bank, finally buy one whole extra day.”" },
      { problem: "The child wants to skip straight to stars and moons.", fix: "Reassure them this exact diagram will come back again and again this unit — five minutes now saves confusion later." },
    ],
    models: {
      formIA: "“I drew the sun in the middle and Earth going around it. At summer, Earth leans toward the sun and gets more light. At winter it leans away.”",
      formIIA: "“I drew Earth's orbit with four marked points. At each one Earth's axis tilts the same way in space, but its position relative to the sun changes, so sometimes our hemisphere leans in and sometimes away. A leap year happens because a year is really 365 and a quarter days, and those quarters add up to one extra day every four years.”",
      journal: "IA: labeled diagram with the four positions and arrows for spin direction. IIA: same diagram plus a written note explaining the leap year.",
    },
    extensions: {
      minimum: "If time is short, draw just two positions — summer and winter solstice — and skip the equinoxes; the core contrast still lands.",
      goOutside: "Step outside and notice today's actual sun height at midday — compare it, in words, to where your diagram says the sun should be for this season.",
      make: "Tape this diagram to the inside cover of the nature journal so it's easy to flip back to all unit.",
      readMore: "None needed today — this is a drawing lesson, not a reading lesson.",
      connect: "This same yearly circle is what the Church calendar tracks when it fixes Pascha's date each spring — the equinox marked here matters for that calculation too.",
      multiAge: "Older child can be the “tilt-checker,” making sure the younger child's four Earths all lean the same direction in space.",
      youngest: "For a 5–6-year-old: have them just color in “sunny side” and “shadow side” of one simple Earth circle — that's a complete task.",
      digDeeper: null,
    },
  },

  "4.4": {
    glance: {
      time: "1–2 hours after sunset; note the late hour",
      where: "Outdoors, the darkest spot you can find nearby",
      prep: "10 min",
      heart: "Two minutes of silence under real stars teaches more than any chart.",
      oneThing: "Start with two full minutes of silent looking, no talking, before anyone opens a chart or names a single star.",
    },
    background: {
      text: [
        "You do not need to know the constellations to lead this lesson — you need a clear night, a free star chart, and the willingness to stand outside in the dark with your children for an hour. That is the entire skill required. Everything else — finding Polaris, matching shapes to the chart — is something you and the children can discover together, in real time, with the chart in hand.",
        "The one idea for tonight: Polaris, the North Star, sits almost exactly above Earth's North Pole, so it barely moves all night while everything else wheels slowly around it. Find Polaris first, hold the chart so north points toward it, and every other constellation falls into place from there. A twinkling point of light is a star; a steady, non-twinkling point is very likely a planet — that's a genuinely useful trick for a beginner, no equipment required."
      ],
      keyFacts: [
        "Polaris (the North Star) sits almost directly above Earth's North Pole, so it appears to stay nearly still all night.",
        "A constellation is a pattern of stars that people long ago connected with imaginary lines and gave a story or name.",
        "Stars twinkle because their light is bent by moving air in our atmosphere; planets, being much closer and appearing as tiny discs, twinkle far less or not at all.",
        "Magnitude describes a star's brightness as we see it — lower numbers mean brighter stars.",
        "Draw the stars you actually see FIRST, then add constellation lines — don't connect imagined dots before you've truly looked.",
      ],
      sayItAloud: [
        "Polaris = “poh-LAIR-iss”",
        "constellation = “kon-stell-AY-shun”",
        "magnitude = “MAG-nih-tood”",
      ],
    },
    supplies: [
      { item: "A free sky app (Stellarium, SkySafari, or Star Walk) OR printed seasonal chart", note: "Stellarium is free at stellarium.org; or print seasonal charts from Serviss's “Round the Year with the Stars,” Gutenberg #68391." },
      { item: "Reading: “Curiosities of the Sky,” Ch. IV — The Passing of the Constellations", note: "Free online: https://www.gutenberg.org/cache/epub/6630/pg6630-images.html#chap04 (Librivox audio also available)" },
      { item: "Flashlight with red cellophane or a red-light phone setting", note: "Preserves night vision better than white light; a phone on lowest brightness works if nothing else is on hand." },
      { item: "Sky Observation Log worksheets (Form IA and Form IIA)", note: "Printable logs provided with the lesson; a blank notebook page works just as well if you can't print." },
      { item: "Nature journal, pencil, and a warm layer or blanket", note: "You'll be standing still outside for a while — dress for it." },
    ],
    prepNote: "Check the weather and moon phase this afternoon — you need a clear night, and less moonlight is better for seeing faint stars. Plan to go out 1–2 hours after sunset.",
    flow: [
      { min: "2", text: "Step outside and stand in silence. No talking, no chart yet. Just look up." },
      { min: "3", text: "Ask aloud: “How many stars can you see? Does anything look like a pattern? Is anything NOT twinkling?”" },
      { min: "5", text: "Open the chart or app. Find Polaris first — hold the chart with north pointing toward it." },
      { min: "15", text: "Together, locate at least three constellations and one bright named star, matching what's overhead to the chart." },
      { min: "10", text: "Fill in the Sky Observation Log: date, time, constellations found, any planet noticed." },
      { min: "5", text: "Head back inside; narrate what was found before bed while it's fresh." },
    ],
    discussion: {
      launch: "What did you find tonight? Show me with your finger where each one was in the sky.",
      formIA: "“Name the constellations you found. Tell me one story about one of them.”",
      formIIA: "“Name the constellations you found. Explain how you located each one — what reference point did you use?”",
      ifAsked: [
        { q: "Why does Polaris stay in one place?", a: "Because it happens to sit almost exactly above Earth's North Pole — as Earth spins on its axis, everything else appears to circle around that one fixed point." },
        { q: "How do I know if I'm looking at a star or a planet?", a: "Steady, non-twinkling light is a good clue for a planet; twinkling light is almost always a true star." },
        { q: "Why do the constellations look different from the pictures in books?", a: "The connecting lines and figures were imagined by people long ago — the stars themselves rarely look exactly like the bear, hunter, or queen they're named for. That's part of the fun of learning the stories." },
      ],
    },
    worship: {
      scripture: "“The heavens declare the glory of God; and the firmament sheweth His handywork.” (Psalm 18:1 LXX / 19:1)",
      patristic: "St. Basil the Great, in the Hexaemeron, called the stars an adornment of the night sky, given not only for beauty but so that even in darkness we are not left without a witness to the Maker's order.",
      godward: "“Every one of those points of light you found tonight has been shining in that same pattern for longer than any nation on Earth has existed. Stand under that a moment.”",
    },
    challenges: [
      { problem: "It's cloudy or the moon is very bright.", fix: "Reschedule for the next clear, darker night — meanwhile, explore the sky app indoors to preview what you'll look for." },
      { problem: "Too much light pollution to see much.", fix: "Even in bright suburbs, Polaris and a handful of bright stars are usually visible — celebrate finding three, not thirty." },
      { problem: "Children get cold or restless quickly.", fix: "Keep the outdoor portion to the essential 20–25 minutes and finish the log indoors from memory plus notes." },
      { problem: "Bedtime is a real obstacle for an evening lesson.", fix: "Do it on a weekend or shift the whole day's schedule earlier so the evening sky session doesn't cut into sleep." },
    ],
    models: {
      formIA: "“I found the Big Dipper and it pointed me to Polaris. One star didn't twinkle at all — Mom said that one might be a planet.”",
      formIIA: "“I used the Big Dipper's two end stars as pointers to find Polaris, then held the chart with north facing it. From there I located Cassiopeia and Orion. One steady, non-twinkling point of light in the south was likely a planet rather than a star.”",
      journal: "Sky Observation Log filled in with date, time, and constellations found; journal drawing of stars as dots (by brightness) first, constellation lines added after.",
    },
    extensions: {
      minimum: "If only 20 minutes are possible, skip the full log and simply find Polaris plus one constellation — that alone is a genuine first sky session.",
      goOutside: "This whole lesson IS the outdoor extension — consider repeating it informally any clear night this week to build familiarity.",
      make: "Start a running list titled “Stars We've Met” at the back of the nature journal, to add to across the whole unit.",
      readMore: "Preview tomorrow's Starry Messenger picture book about Galileo if a child is eager for more.",
      connect: "The wise men followed a star to Bethlehem — tonight's quiet looking-up is the same posture of attention that led them.",
      multiAge: "Let the older child hold the chart and orient it to Polaris while the younger child calls out shapes they notice.",
      youngest: "For a 5–6-year-old: just find the Big Dipper (or the brightest, easiest shape visible) and count its stars together.",
      digDeeper: null,
    },
  },

  "4.5": {
    glance: {
      time: "35–40 min",
      where: "Indoors for the reading and picture book; can preview the chart from last session",
      prep: "10 min",
      heart: "Careful looking, done long enough, can overturn what everyone had always assumed.",
      oneThing: "Read the whole Starry Messenger picture book aloud without stopping to explain — let the story of Galileo's patient looking carry itself.",
    },
    background: {
      text: [
        "Today is a story day, not a stargazing day, so you can relax indoors with a book in hand. Galileo did not invent the telescope, but he was the first to turn one on the sky night after night and record exactly what he saw — mountains on the moon, four tiny moons circling Jupiter, and the changing shape of Venus. Each of those observations quietly contradicted the old idea that everything in the heavens circled a motionless Earth.",
        "The one idea for today: nearly every culture on Earth — Greek, Egyptian, Chinese, Babylonian, Indigenous American — looked up at the same sky and named patterns in it. That's not a coincidence to shrug off; it's a sign of a shared human hunger to find order and story in what we see overhead. Galileo simply looked more carefully and more patiently than anyone before him, and the sky itself is what convinced people he was right — not his say-so."
      ],
      keyFacts: [
        "Geocentrism = the old model where Earth sits motionless at the center and everything else circles it.",
        "Heliocentrism = the model where Earth and the other planets orbit the sun.",
        "Galileo did not invent the telescope, but was among the first to use it systematically and publish careful, repeated observations.",
        "His key observations: mountains and craters on the moon, four moons orbiting Jupiter (not Earth), and Venus showing phases like the moon.",
        "Retrograde motion is when a planet appears to briefly move backward against the fixed stars — a puzzle that heliocentrism explains more simply than geocentrism did.",
      ],
      sayItAloud: [
        "Galileo = “gal-uh-LAY-oh”",
        "geocentrism = “JEE-oh-SEN-trih-zum”",
        "heliocentrism = “HEE-lee-oh-SEN-trih-zum”",
      ],
    },
    supplies: [
      { item: "Starry Messenger by Peter Sís (picture book)", note: "Library copy is ideal; if unavailable, narrate Galileo's story yourself using the key facts above — the reading can be told, not just read." },
      { item: "Reading: “Round the Year with the Stars” — The Evening Sky", note: "Free online: https://www.gutenberg.org/files/68391/68391-h/68391-h.htm" },
      { item: "Last session's star chart or app (optional)", note: "Handy to reference if discussing why different constellations appear in different seasons." },
    ],
    prepNote: null,
    flow: [
      { min: "3", text: "Open with the question: “Why do you think people long ago named patterns in the stars? What might they have used them for?”" },
      { min: "12", text: "Read Starry Messenger aloud, start to finish, without stopping to quiz — let the story build." },
      { min: "10", text: "Talk about what made Galileo's observations convincing. Ask Age 11 directly: how do we know he was right, and not just confidently wrong?" },
      { min: "10", text: "Read or reference the “Round the Year with the Stars” Evening Sky section together, connecting it to last session's constellations." },
      { min: "5", text: "Narrate and close: each child tells the story of one constellation, or explains why we see different stars in different seasons." },
    ],
    discussion: {
      launch: "Nearly every civilization on Earth named patterns in this same sky. What does that tell you about people, everywhere and always?",
      formIA: "“Tell me the story of one constellation — how did it get its name, and what stars make it up?”",
      formIIA: "“Explain why we see different constellations in summer than in winter. Use your Lesson 4.3 diagram if it helps.”",
      ifAsked: [
        { q: "Did Galileo get in trouble with the Church?", a: "Yes, later in his life — but the full story is more complicated than 'faith versus science.' It involved specific church and university authorities of his day, personalities, and politics, not Christianity itself rejecting careful observation. It's worth digging into honestly rather than settling for the simple version." },
        { q: "How do we see different stars in different seasons?", a: "As Earth travels around the sun through the year, the night side of Earth faces a different direction of space each season — so we look out toward different background stars." },
        { q: "What is retrograde motion?", a: "It's when a planet appears to slow, stop, and briefly move backward against the distant stars — caused by Earth catching up to or being overtaken by another planet as both orbit the sun at different speeds." },
      ],
    },
    worship: {
      scripture: "“The heavens declare the glory of God; and the firmament sheweth His handywork.” (Psalm 18:1 LXX / 19:1)",
      patristic: null,
      godward: "“Every ancient people who ever looked up gave the stars names and stories. That shared hunger to find pattern and meaning in the sky is itself a kind of evidence of how we were made — to look up and wonder.”",
    },
    challenges: [
      { problem: "Starry Messenger isn't available from your library in time.", fix: "Tell Galileo's story yourself, conversationally, using the key facts above — children respond just as well to a well-told oral account." },
      { problem: "The Galileo-and-the-Church question gets tense or oversimplified.", fix: "Keep it factual and calm: real people, real politics, a real (partial) reconciliation later — resist turning it into faith-versus-science. Save deep dives for the digDeeper question." },
      { problem: "Retrograde motion is confusing for Form IIA.", fix: "Use a simple image: two cars on a racetrack, one on the inside lane passing the other — from inside the faster car, the slower car briefly seems to move backward." },
      { problem: "Form IA loses interest during the Galileo discussion.", fix: "Let the younger child simply enjoy the picture book's illustrations and tell you their favorite page — full comprehension isn't the goal at that age." },
    ],
    models: {
      formIA: "“Orion has three stars in a row for his belt. Long ago people saw a hunter in the sky. Galileo looked through his telescope and saw moons going around Jupiter, not Earth.”",
      formIIA: "“As Earth orbits the sun, our night side faces a different part of space each season, so different background stars appear behind the sun's yearly path. Galileo's moon-and-Jupiter observations convinced people because anyone with a telescope could repeat them and see the same thing.”",
      journal: "No journal assigned today — narration carries the lesson; 4.6 gathers this week's constellations into a drawn map.",
    },
    extensions: {
      minimum: "If time is tight, read only Starry Messenger and skip the second spine reading — the biography carries the lesson's heart.",
      goOutside: "If skies are clear tonight, step out briefly and try to spot Jupiter (check a sky app) — imagine seeing what Galileo saw.",
      make: "Sketch a tiny telescope in the margin of the journal next to today's date, as a bookmark for “the day we met Galileo.”",
      readMore: "Older children who love this story might enjoy reading more of Galileo's own letters (in translation) about his observations.",
      connect: "Just as the wise men trusted a star enough to travel toward it, Galileo trusted careful observation enough to risk an unpopular conclusion — both required real courage.",
      multiAge: "Let the older child read a page of Starry Messenger aloud to the younger one for a turn, building read-aloud confidence.",
      youngest: "For a 5–6-year-old: just enjoy the pictures and answer “what's your favorite page?” — that's a complete lesson at that age.",
      digDeeper: "Research what Galileo actually claimed, what the Church authorities of his day actually objected to, and what role Aristotelian university philosophers played in the conflict. Write a paragraph correcting one common misconception.",
    },
  },

  "4.6": {
    glance: {
      time: "30–40 min",
      where: "Indoors, at the table",
      prep: "5 min",
      heart: "A hand-drawn map, made from memory and observation, is owned in a way a printed one never is.",
      oneThing: "Insist on stars-as-dots-first, lines-second — same rule as the sky session. It's what makes this a science drawing, not just decoration.",
    },
    background: {
      text: [
        "Today's task is simple to lead: dark paper, a white pen or chalk, and 2–3 constellations from this week's sky sessions. Your child becomes the mapmaker, choosing which stars to place and which stories to write beside them. You don't need any new astronomy knowledge — just enthusiasm for the drawing and a willingness to ask “which one first?”",
        "The one idea for today: making something with your own hand is how a fact becomes a memory. A child who draws Orion's belt, labels Betelgeuse, and writes down the hunter's story will remember that constellation for years — far longer than one who only read about it. This is also a good week to set aside index cards for planet fact cards, which next week's lessons will use."
      ],
      keyFacts: [
        "Larger dots on the map should represent brighter stars — size shows brightness.",
        "A named star (like Betelgeuse or Sirius) is one bright enough and famous enough to have earned its own name.",
        "Many named stars are binary stars — actually two stars orbiting each other, appearing as one point to the eye.",
        "Stars are also sometimes classified by size: giant stars are enormous, dwarf stars are smaller and dimmer, like our own sun.",
        "The myth or story attached to a constellation is cultural memory, not a scientific fact — both can be true and valuable at once.",
      ],
      sayItAloud: [
        "binary = “BY-nuh-ree”",
      ],
    },
    supplies: [
      { item: "Dark construction paper or black cardstock", note: "Any dark-colored paper on hand; even a black trash bag piece taped flat works in a pinch." },
      { item: "White gel pen or chalk", note: "A white crayon or white colored pencil is a fine substitute." },
      { item: "Constellation Map worksheets (Form IA and Form IIA)", note: "Printable maps provided with the lesson; a blank dark page works too if printing isn't possible." },
      { item: "Index cards (for next week's planet fact cards)", note: "Set aside 8 per student now so they're ready when Lesson 4.12 needs them." },
    ],
    prepNote: null,
    flow: [
      { min: "3", text: "Choose together 2–3 constellations found during this week's sky sessions." },
      { min: "15", text: "On the dark paper, draw the stars as dots first — bigger dots for brighter stars — before adding any connecting lines." },
      { min: "5", text: "Add the connecting lines and write the constellation's name beside each." },
      { min: "7", text: "Label at least one named star per constellation, and (Age 11) note whether it's a giant, dwarf, or binary star." },
      { min: "5", text: "Write the myth or story associated with each constellation from memory or the week's reading." },
      { min: "3", text: "Set aside the index cards for next week, ready to go." },
    ],
    discussion: {
      launch: "Which constellation did you choose to draw first, and why that one?",
      formIA: "“Tell me the name of each star you labeled and one story that goes with its constellation.”",
      formIIA: "“Tell me the brightest star's name and what kind of star it is — giant, dwarf, or binary — and one more fact you know about it.”",
      ifAsked: [
        { q: "What's a binary star?", a: "It's actually two stars orbiting closely around each other, so close together that to our eye — even with a small telescope — they often look like a single point of light." },
        { q: "Why do some stars get names and others don't?", a: "The brightest and most easily recognized stars earned names from ancient sky-watchers long ago; countless fainter stars are simply catalogued by number today." },
        { q: "Is a giant star bigger than our sun?", a: "Yes — a giant star can be tens or even hundreds of times wider than our sun; a dwarf star, like our own sun actually is, is much smaller by comparison." },
      ],
    },
    worship: {
      scripture: "“He telleth the number of the stars; He calleth them all by their names.” (Psalm 146:4 LXX / 147:4)",
      patristic: null,
      godward: "“The Psalm says God calls every star by name. Today you did something like that yourself — you gave each star on your map its place and its story.”",
    },
    challenges: [
      { problem: "No dark paper on hand.", fix: "Use regular paper and simply color the whole background dark with crayon or marker before adding white star dots on top." },
      { problem: "The child rushes straight to drawing lines without placing dots first.", fix: "Gently stop and restart: “Stars first, like real astronomers — the lines come after.” Consistency with the sky-session rule matters." },
      { problem: "Remembering the myths accurately feels hard.", fix: "It's fine to paraphrase loosely or say “I don't remember all the details, but I remember it's about a hunter” — the gist matters more than precision." },
      { problem: "Form IIA's giant/dwarf/binary classification is unfamiliar.", fix: "Give one simple example each: our sun is a dwarf star; Betelgeuse is a giant star; many stars that look single are actually binaries." },
    ],
    models: {
      formIA: "“I drew Orion with his belt of three stars and colored the brightest one bigger. The story is about a hunter who got put in the sky.”",
      formIIA: "“I drew Orion, labeled Betelgeuse as a red giant star, and Rigel as a blue giant. The myth says Orion was a great hunter placed among the stars by the gods.”",
      journal: "Dark-paper constellation map: star dots by brightness, connecting lines, names, at least one myth or story per constellation; IIA adds star classification and an extra fact per named star.",
    },
    extensions: {
      minimum: "If time is short, complete just one constellation fully rather than three done hastily — depth over quantity.",
      goOutside: "Take the finished map outside on the next clear night and try to match it to the real sky.",
      make: "Frame or display the finished star map somewhere visible — it makes a lovely, low-cost piece of art for a child's room.",
      readMore: "None needed — this is a making lesson.",
      connect: "The star that led the wise men to Bethlehem is sometimes discussed by astronomers as a possible conjunction of planets or a nova — a genuine mystery still pondered today.",
      multiAge: "Older child can help the younger one keep dot sizes consistent and spell star names correctly.",
      youngest: "For a 5–6-year-old: let them place the star dots (with guidance on placement) while an older sibling or parent adds the lines and labels.",
      digDeeper: null,
    },
  },

  "4.7": {
    glance: {
      time: "1–2 hours after sunset",
      where: "Outdoors, same dark spot as the first session if possible",
      prep: "5 min",
      heart: "The sky becomes a map you can navigate once you learn to use one star to find the next.",
      oneThing: "Practice constellation-to-constellation navigation — using one shape as a pointer to the next — rather than hunting each one from scratch.",
    },
    background: {
      text: [
        "Tonight's skill builds directly on the first sky session: instead of finding each constellation independently, you use one as a signpost to the next. Orion's belt, for instance, points toward Sirius one direction and toward Aldebaran in Taurus the other. This is exactly how real stargazers navigate the sky, and it turns a confusing dome of stars into a connected, walkable map.",
        "The one idea for tonight, for older students: the ecliptic is the apparent path the sun traces across the background stars over a year, and every planet is always found somewhere close to that same path (called the zodiacal band). That's why ancient astronomers built the zodiac around it — it's not mysticism, it's simply where the wandering lights (planets) are always going to be found."
      ],
      keyFacts: [
        "Constellations can be used as pointers to find neighboring constellations, the way road signs point to the next town.",
        "Orion's belt points one direction toward Sirius (the brightest star in the night sky) and the other toward Aldebaran in Taurus.",
        "The ecliptic is the sun's apparent yearly path across the background stars.",
        "The zodiac constellations are simply the ones that lie along the ecliptic's band.",
        "Planets are always found within the zodiacal band — never far above or below it — because all the planets orbit the sun in nearly the same flat plane.",
      ],
      sayItAloud: [
        "ecliptic = “ee-KLIP-tik”",
        "zodiac = “ZOH-dee-ak”",
      ],
    },
    supplies: [
      { item: "Same sky app or star chart from Lesson 4.4", note: "Reuse whatever worked well the first session." },
      { item: "Nature journal from the first sky session (to add to)", note: "Continuity matters — building on the same map." },
      { item: "Red-light flashlight or dimmed phone", note: "Preserves night vision." },
    ],
    prepNote: "Check the sky and adjust which constellations you look for based on the actual current season — Orion, for example, isn't visible year-round.",
    flow: [
      { min: "5", text: "Head outside and re-find last session's constellations first, as a warm-up." },
      { min: "15", text: "Pick one known constellation and use it as a pointer to find a new one nearby — practice this technique with at least two new constellations." },
      { min: "10", text: "(Age 11) Locate the ecliptic and identify which zodiacal constellations it currently passes through; note any visible planets along that band." },
      { min: "5", text: "Add the new finds to last session's journal map, drawing connecting arrows showing how one led to the next." },
      { min: "5", text: "Narrate and head back inside." },
    ],
    discussion: {
      launch: "Which constellation did you use as a signpost tonight, and what did it point you to?",
      formIA: "“What two new constellations did you find? How did you find them?”",
      formIIA: "“Describe the ecliptic in your own words. Why are planets always found within the zodiacal band and nowhere else in the sky?”",
      ifAsked: [
        { q: "Why is the zodiac used for horoscopes?", a: "Ancient astrologers built predictions around the zodiac constellations, but that's a different practice from astronomy — we're using the zodiacal band simply as a real, useful map of where planets travel, not to predict anything." },
        { q: "Why don't planets wander all over the sky?", a: "All the planets, including Earth, orbit the sun in nearly the same flat plane — so seen from Earth, they always appear to travel along roughly the same narrow path across our sky." },
        { q: "What's the brightest star in the whole night sky?", a: "Sirius, in the constellation Canis Major — Orion's belt points almost directly to it." },
      ],
    },
    worship: {
      scripture: "“He telleth the number of the stars; He calleth them all by their names.” (Psalm 146:4 LXX / 147:4)",
      patristic: null,
      godward: "“Once you learn to let one star point you to the next, the whole sky stops being a confusing scatter and starts being a map — laid out the same way, faithfully, every single night.”",
    },
    challenges: [
      { problem: "Last session's constellations have shifted position or set already.", fix: "That's expected and worth discussing — the sky's appearance changes through the night and the year; use it as a live example of Earth's rotation and orbit in action." },
      { problem: "The ecliptic is hard for a beginner to visually locate.", fix: "Use a sky app's overlay feature if available, or simply note where the moon and any bright planets currently sit — they mark the band directly." },
      { problem: "It's a second late night in one week and everyone's tired.", fix: "Shorten the session to 20 minutes — find just one new constellation using the pointer technique and call it a full success." },
      { problem: "No planets are currently visible for the zodiacal-band discussion.", fix: "That's fine — discuss the concept using the moon's position instead, since it too always travels within that same band." },
    ],
    models: {
      formIA: "“Orion's belt pointed to a bright star and I found Taurus using it. Mom said that bright star was Sirius.”",
      formIIA: "“I used Orion's belt as a pointer both directions — one way to Sirius, the other to Aldebaran in Taurus. The ecliptic is the sun's apparent yearly path across the stars, and planets stay within that same narrow zodiacal band because they all orbit in nearly the same flat plane as Earth.”",
      journal: "Journal map from Lesson 4.4 or 4.6 extended with two new constellations and pointer-arrows; IIA adds the ecliptic line and any visible planets.",
    },
    extensions: {
      minimum: "If only 15 minutes are possible, find just one new constellation using the pointer method — that's the whole technique in miniature.",
      goOutside: "This lesson is fully an outdoor extension of 4.4 — repeat the pointer technique on any clear night to reinforce it.",
      make: "Add a legend or key to the growing journal star map showing which arrows mean “points to.”",
      readMore: "None assigned — this is a practice-and-observe lesson.",
      connect: "The zodiacal band, mapped tonight, is the same region of sky ancient astronomers watched for a bright new star or conjunction — the kind that some scholars think guided the wise men.",
      multiAge: "Older child leads the pointer-navigation technique; younger child gets to be the one who spots and names the new shape once pointed toward it.",
      youngest: "For a 5–6-year-old: just have them point where an older sibling's finger points and say what shape they see.",
      digDeeper: null,
    },
  },

  "4.8": {
    glance: {
      time: "15–20 min tonight; ongoing project through Lesson 4.15",
      where: "Outdoors or by a window, wherever the moon is visible",
      prep: "5 min",
      heart: "Let your child's own guess stand un-corrected for now — the whole unit is designed to test it fairly.",
      oneThing: "Write down the child's honest prediction about what causes moon phases BEFORE any explanation — you'll check it against Lesson 4.9's demonstration.",
    },
    background: {
      text: [
        "This lesson launches a project that runs the rest of the unit: a simple moon journal, sketched on every clear night through Lesson 4.15. Tonight's only job is to check the lunar calendar, look at the moon (or note that it isn't visible tonight and plan the next look), and write down a prediction — no correcting yet.",
        "The one idea for today: most people, children and adults alike, guess that Earth's shadow causes the moon's phases. It's a wonderfully common and wonderfully wrong guess, and Lesson 4.9's orange-and-flashlight demonstration is built specifically to correct it in a way nobody forgets. So let the guess stand today, uncorrected — the surprise next lesson is worth protecting."
      ],
      keyFacts: [
        "A moon phase is how much of the moon's lit half we can see from Earth, depending on its position in orbit.",
        "Waxing means the visible lit portion is growing night to night; waning means it's shrinking.",
        "A crescent moon shows a sliver of light; a gibbous moon shows more than half but not the whole disc.",
        "The moon takes about 29.5 days to cycle through all its phases — a “lunar month.”",
        "This journal continues every clear night through Lesson 4.15 — consistency matters more than any single entry.",
      ],
      sayItAloud: [
        "gibbous = “GIB-us” or “JIB-us” (both are heard)",
      ],
    },
    supplies: [
      { item: "Moon Phase Calendar (timeanddate.com)", note: "Free online: https://www.timeanddate.com/moon/phases/ — check tonight's actual phase and moonrise time." },
      { item: "Moon Journal worksheets (Form IA and Form IIA)", note: "Printable journal pages provided with the lesson; a blank notebook works too — just note date and time at each entry." },
      { item: "Pencil and colored pencils", note: "Grey or yellow for shading the moon's shape." },
    ],
    prepNote: "Check the lunar calendar today before starting — if the moon isn't visible tonight (or is only up during the day), find out when it will be and plan the first real sketch for then.",
    flow: [
      { min: "3", text: "Look up tonight's moon phase and rise time on the calendar together." },
      { min: "3", text: "Ask, before anything else: “What do you already believe causes the moon's phases? Write your guess down — we'll check it soon.”" },
      { min: "5", text: "If the moon is visible, go look at it together and sketch its exact shape, noting direction and height in the sky." },
      { min: "5", text: "If not visible tonight, note that in the journal and mark the calendar for the next good night." },
      { min: "3", text: "Explain the ongoing project: “We'll do this on every clear night through the rest of the unit, building a real record.”" },
    ],
    discussion: {
      launch: "Before we explain anything: what's your best guess right now about why the moon changes shape?",
      formIA: "“What does the moon look like tonight? Draw it exactly as you see it — don't guess at the rest of the circle.”",
      formIIA: "“Draw the moon as you see it, then write your current hypothesis about what causes the phases. Be as specific as you can.”",
      ifAsked: [
        { q: "Is my guess right?", a: "I'm not going to say yet — that's exactly what we're going to test with a demonstration very soon. Hold onto it." },
        { q: "Why can't I see the moon at all tonight?", a: "Check the calendar — near a new moon, it's up mostly during the daytime and lit so faintly (or not at all) that it's hard or impossible to see. It'll return in a few nights." },
        { q: "How long does a full cycle take?", a: "About 29.5 days from one new moon to the next — a little less than a calendar month, which is actually where our word 'month' comes from." },
      ],
    },
    worship: {
      scripture: "“He appointed the moon for seasons: the sun knoweth his going down.” (Psalm 103:19 LXX / 104:19)",
      patristic: null,
      godward: "“Tonight you wrote down your own honest guess, without anyone telling you the answer. That's exactly how real discovery starts — and it's a fitting way to begin watching something God set in motion long before any of us were here to wonder about it.”",
    },
    challenges: [
      { problem: "The moon isn't visible tonight at all.", fix: "That's a valid, useful observation — write it down, check the calendar for the next visible night, and simply delay the first sketch." },
      { problem: "The child refuses to guess, saying “I don't know.”", fix: "Reassure them any guess is welcome and won't be marked wrong — write down “I don't know yet” itself as an honest starting hypothesis." },
      { problem: "Remembering to do this every clear night for weeks feels like a lot.", fix: "Tie it to an existing routine — right after brushing teeth, or right before bed prayers — so it becomes automatic rather than a fought-over task." },
      { problem: "Cloudy stretches interrupt the sequence.", fix: "Skipped nights are fine and realistic — note “cloudy” in the journal rather than skipping the habit of checking altogether." },
    ],
    models: {
      formIA: "“Tonight the moon was a thin sliver, like a fingernail. My guess about why it changes shape is that a shadow covers part of it.”",
      formIIA: "“Tonight's moon was a waxing crescent, low in the western sky just after sunset. My hypothesis: I think Earth's shadow covers part of the moon and that's what makes the different shapes we see.”",
      journal: "Moon Journal entry: sketch of tonight's moon shape with date and time; IIA adds a written hypothesis to be checked against Lesson 4.9.",
    },
    extensions: {
      minimum: "Even a single sentence — “moon not visible tonight, checked calendar” — keeps the ongoing project honest and on track.",
      goOutside: "The whole lesson is an outdoor (or window-side) observation — no separate extension needed tonight.",
      make: "Set up a dedicated moon journal page or small booklet now, since entries will continue through Lesson 4.15.",
      readMore: "None assigned tonight — save reading for Lesson 4.9's demonstration and text.",
      connect: "The Orthodox Church calculates the date of Pascha using the moon's cycle — this nightly habit is quietly building the very intuition needed to understand that calculation later.",
      multiAge: "Both children can record their own separate guesses tonight — it's especially interesting later to compare an 8-year-old's hunch with an 11-year-old's more detailed one.",
      youngest: "For a 5–6-year-old: just have them point at the moon's shape and say “fat” or “skinny” — that's a complete first entry.",
      digDeeper: null,
    },
  },

  "4.9": {
    glance: {
      time: "30–35 min, in a room that can be darkened",
      where: "Indoors, darkened room",
      prep: "10 min",
      heart: "One orange, one flashlight, one walk around the room — and a misconception dies for good.",
      oneThing: "Do Fabre's own “Uncle Paul” demonstration exactly as described: orange as moon, flashlight as sun, a parent standing still at the center as Earth. Watching it beats being told it, every time.",
    },
    background: {
      text: [
        "This is the lesson that finally checks yesterday's prediction — and for most families, corrects it, warmly and unforgettably. The demonstration is simple: darken the room, one person holds a flashlight (the sun), another walks an orange (the moon) slowly around a person standing still at the center (Earth, meaning you, the observer). At each of eight stops around the circle, everyone names what phase the person at the center would see.",
        "The one idea for today, and it is worth saying slowly: moon phases are caused by our changing angle of view of the half of the moon that's always lit by the sun — never by Earth's shadow. Earth's shadow only falls on the moon during a genuine lunar eclipse, a much rarer event that requires the moon to cross the ecliptic exactly during a full moon. Most people, including most well-read adults, get this backwards, so don't feel behind — the orange demonstration exists precisely because this idea resists being explained in words alone."
      ],
      keyFacts: [
        "Half of the moon is always lit by the sun — phases are about how much of that lit half we happen to see from Earth, not about how much is actually lit.",
        "The moon takes about 29.5 days to move through new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, third quarter, and waning crescent, then back to new.",
        "A lunar eclipse is a separate, much rarer event: Earth's shadow actually falling on the moon, only possible at full moon when the moon crosses the ecliptic just right.",
        "The moon rises about 50 minutes later each night, not at the same time every day.",
        "The moon is slowly moving away from Earth, about 3.8 cm per year.",
      ],
      sayItAloud: [
        "eclipse = “ee-KLIPS”",
      ],
    },
    supplies: [
      { item: "An orange (or any small ball) for the moon", note: "A tennis ball, apple, or even a balled-up sock works — anything roughly round." },
      { item: "A flashlight for the sun", note: "A phone flashlight or lamp with the shade removed." },
      { item: "Reading: “Astronomy for Amateurs,” Ch. IX — The Moon", note: "Free online: https://www.gutenberg.org/cache/epub/25267/pg25267-images.html#Page_232" },
      { item: "Last night's moon journal prediction", note: "Keep it handy to check against what the demonstration reveals." },
    ],
    prepNote: "Darken the room fully before starting — the demonstration doesn't work well in a bright room.",
    flow: [
      { min: "5", text: "Darken the room. One person holds the flashlight steady as the “sun.” A parent stands still at the center as “Earth.” Another person holds the orange as the “moon.”" },
      { min: "15", text: "Walk the orange slowly through a full circle around the center person, pausing at 8 stops. At each stop, call out together which phase the person at the center would see: new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, third quarter, waning crescent." },
      { min: "5", text: "Pull out last night's prediction. Ask: “Did we guess the shadow idea? What does the demonstration actually show?”" },
      { min: "5", text: "Read the assigned spine chapter section on moon phases together, connecting it to what was just seen." },
      { min: "5", text: "Narrate. Age 8: draw and explain a crescent moon. Age 11: explain the difference between a phase and a lunar eclipse." },
    ],
    discussion: {
      launch: "What did the orange demonstration show you that surprised you most?",
      formIA: "“Draw me a crescent moon. Explain in your own words why we see it look that way.”",
      formIIA: "“Explain the difference between a moon phase and a lunar eclipse. Why doesn't a lunar eclipse happen every full moon?”",
      ifAsked: [
        { q: "So Earth's shadow is never involved in phases at all?", a: "Correct — phases are entirely about our angle of view onto the moon's always-half-lit surface. Earth's shadow only comes into play during the much rarer event of a lunar eclipse." },
        { q: "Why doesn't a lunar eclipse happen every full moon?", a: "Because the moon's orbit is slightly tilted compared to Earth's orbit around the sun, so most full moons pass just above or below Earth's shadow rather than through it." },
        { q: "Does the moon rise at the same time every night?", a: "No — it rises about 50 minutes later each night as it moves along its orbit, which is why it's up at very different times through the month." },
      ],
    },
    worship: {
      scripture: "“He appointed the moon for seasons: the sun knoweth his going down.” (Psalm 103:19 LXX / 104:19)",
      patristic: "St. Basil the Great wrote in the Hexaemeron that the moon was given “to rule over the night” and to mark the months in their courses, its changing light a faithful, ordered sign rather than a random flicker.",
      godward: "“Half the moon is lit by the sun every single moment, whether we can see that half or not. It's a small, steady picture of a bigger truth: the light is always there, even when our angle keeps us from seeing all of it.”",
    },
    challenges: [
      { problem: "The shadow misconception is stubborn even after the demonstration.", fix: "Repeat the walk-around a second time, more slowly, having the child themselves hold the orange and narrate each phase aloud as they turn it." },
      { problem: "The room won't get dark enough for a clear effect.", fix: "Try a closet, bathroom, or wait until evening — a dim room weakens the visual contrast the demonstration depends on." },
      { problem: "Distinguishing waxing from waning gibbous, or first from third quarter, is fiddly.", fix: "Add a simple rule of thumb: waxing phases grow toward the right (in the Northern Hemisphere), waning phases shrink from the right — check it against a current photo." },
      { problem: "A lunar eclipse happens to be visible soon and questions get ahead of the lesson.", fix: "Wonderful timing — use it live: “Now we get to test what we just learned for real!”" },
    ],
    models: {
      formIA: "“The moon looks like a smile shape because we can only see a little sliver of the lit side from where we are on Earth. It's not a shadow — it's about which way we're looking.”",
      formIIA: "“A phase is caused by our angle of view onto the moon's always-half-lit surface as it orbits Earth. A lunar eclipse is different and much rarer — it only happens when Earth's shadow actually falls on the moon during a full moon, which requires the moon to cross Earth's orbital plane at just the right moment.”",
      journal: "No separate journal today beyond the ongoing moon-tracking project — 4.10 builds the full labeled phase diagram from tonight's demonstration.",
    },
    extensions: {
      minimum: "If time is short, do only the orange-and-flashlight walk (15 min) and skip the reading — the demonstration alone corrects the misconception.",
      goOutside: "Check tonight's actual moon and match it to the phase you just demonstrated indoors.",
      make: "Take a photo or quick sketch of each of the 8 demonstration positions to tape into the journal as a reference strip.",
      readMore: "Curious families can read further in Astronomy for Amateurs' full moon chapter for more detail on lunar geography (maria, craters).",
      connect: "The Orthodox Church's Pascha date depends on the first full moon after the spring equinox — this exact phase cycle, now demonstrated with an orange, is the same one behind that calculation.",
      multiAge: "Let the older child be the moon-walker and narrate each phase aloud; the younger child stands at the center as “Earth” and simply names what they see.",
      youngest: "For a 5–6-year-old: just have them stand at the center and call out “round,” “half,” or “sliver” as the orange goes by — no vocabulary required yet.",
      digDeeper: "The moon is drifting away from Earth about 3.8 cm per year. What does this suggest about the moon's distance in the deep past? What effect might a much closer moon have had on ocean tides?",
    },
  },

  "4.10": {
    glance: {
      time: "25–30 min",
      where: "Indoors, at the table",
      prep: "2 min",
      heart: "Turning last night's demonstration into a labeled diagram locks the idea in for good.",
      oneThing: "Insist all 8 phases are drawn AND correctly ordered around the orbit — sequence matters as much as shape here.",
    },
    background: {
      text: [
        "Today there's no new astronomy to learn — just yesterday's orange-and-flashlight demonstration, turned into a diagram your child draws by hand. You are simply there to ask “which phase comes after this one?” and let them work out the sequence around the circle.",
        "The one idea worth highlighting today: a lunar month (about 29.5 days) is slightly shorter than most calendar months, so about every two or three years, two full moons squeeze into a single calendar month. The second one is nicknamed a “blue moon” — not because of its color, but because of how rarely it happens (hence the phrase “once in a blue moon”)."
      ],
      keyFacts: [
        "Earth sits at the center of the diagram; the moon's orbit is drawn as a ring around it.",
        "Eight labeled positions in order: new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, third quarter, waning crescent.",
        "At each position, sunlight comes from one consistent direction (draw it from the same side every time) — only the moon's position around Earth changes what we see.",
        "A lunar month (about 29.5 days) is a bit shorter than most calendar months.",
        "A “blue moon” is simply a second full moon falling within one calendar month — it happens because of that length mismatch, not because of the moon's actual color.",
      ],
      sayItAloud: null,
    },
    supplies: [
      { item: "Nature journal or plain paper", note: "Unlined paper is easiest for a circular diagram." },
      { item: "Pencil, ruler, and colored pencils", note: "A ruler helps draw the orbit ring evenly; yellow/grey shading distinguishes lit vs. dark portions of the moon." },
      { item: "Yesterday's orange-and-flashlight setup (optional)", note: "Handy as a live reference if the sequence gets confusing." },
    ],
    prepNote: null,
    flow: [
      { min: "3", text: "Set the task: “Let's turn yesterday's orange demonstration into a diagram you'll keep.”" },
      { min: "5", text: "Draw Earth at the center of the page and a ring around it for the moon's orbit." },
      { min: "15", text: "Mark 8 positions around the ring. At each, draw a small moon showing exactly how much appears lit from Earth's point of view, and label the phase name in order." },
      { min: "5", text: "(Age 11) Add a note explaining blue moons: why do some months have two full moons?" },
      { min: "2", text: "Narrate back: point around the diagram in order, naming each phase from memory." },
    ],
    discussion: {
      launch: "Point to your diagram: which phase comes right after full moon? How do you know?",
      formIA: "“Walk your finger around your drawing and name each phase in order.”",
      formIIA: "“Explain, using your diagram, why some months get a blue moon and most don't.”",
      ifAsked: [
        { q: "Why do we always draw the sunlight coming from the same side?", a: "Because the sun's direction relative to the whole moon-Earth system barely changes over the course of one month — only the moon's position around Earth changes, which is what creates the different phases." },
        { q: "Is a blue moon actually blue?", a: "No — it just means a second full moon in one calendar month. The name comes from the rarity, not the color, though very rarely dust or smoke in the atmosphere can genuinely tint the moon bluish." },
        { q: "Which phase is hardest to see?", a: "New moon — the lit half faces entirely away from us, so the moon is essentially invisible against the daytime or twilight sky." },
      ],
    },
    worship: {
      scripture: "“He appointed the moon for seasons: the sun knoweth his going down.” (Psalm 103:19 LXX / 104:19)",
      patristic: null,
      godward: "“Eight faithful phases, in the same order, every single month, for as long as anyone has kept track. That kind of quiet, dependable order is worth noticing — and worth thanking God for.”",
    },
    challenges: [
      { problem: "The moon shapes at each position are hard to draw accurately.", fix: "Use a simple trick: shade in the DARK part first at each position, and whatever's left white is the visible phase." },
      { problem: "The 8-position sequence gets out of order.", fix: "Write the phase names lightly in pencil around the ring first, in order, before drawing any moons — then fill in shapes to match." },
      { problem: "Blue moon math feels confusing for Form IIA.", fix: "Use a concrete example: if a full moon falls on the 1st of a 31-day month, the next one falls about 29.5 days later — often still within that same month." },
      { problem: "The child wants to just copy a printed diagram rather than reason it out.", fix: "That's fine as a last resort, but first ask them to predict just one or two positions themselves before checking a reference — the reasoning is the point." },
    ],
    models: {
      formIA: "“I drew Earth in the middle and the moon going around it in a circle. I labeled all 8 phases in order, starting with new moon.”",
      formIIA: "“My diagram shows Earth at the center, the moon's orbit as a ring, and all 8 phases labeled in order with the sunlight always coming from the right side. A blue moon happens because the lunar month is about 29.5 days, a bit shorter than most calendar months, so occasionally two full moons land in one month.”",
      journal: "Full 8-phase moon diagram, Earth-centered, all phases labeled in order; IIA adds the blue-moon explanation.",
    },
    extensions: {
      minimum: "If time is short, label all 8 phases in order without shading each moon shape precisely — the sequence is the essential part.",
      goOutside: "Check tonight's moon phase and find its exact position on your new diagram.",
      make: "Tape this diagram next to the Lesson 4.3 Earth-sun diagram — together they form the backbone reference for the rest of the unit.",
      readMore: "None needed today — this is a drawing lesson.",
      connect: "The Orthodox Church's Pascha date is set using the first full moon after the spring equinox — this diagram is exactly the kind of moon-tracking behind that centuries-old calculation.",
      multiAge: "Older child checks the younger child's phase order and shading; younger child gets to choose the colors used.",
      youngest: "For a 5–6-year-old: have them just draw and color one simple “full circle” moon and one “sliver” moon — a small, complete task.",
      digDeeper: null,
    },
  },

  "4.11": {
    glance: {
      time: "45–60 min outdoors, plus prep",
      where: "Outdoors, a long driveway, sidewalk, or field",
      prep: "15 min",
      heart: "Numbers about space are meaningless until your legs have walked the distance.",
      oneThing: "Actually walk the whole toilet-paper solar system, out to Neptune, and then let the silence of that distance speak for itself.",
    },
    background: {
      text: [
        "You don't need to understand orbital physics for this lesson — you need a roll of toilet paper, a tape measure, and an open stretch of ground. Every sheet of toilet paper stands for one Astronomical Unit (roughly 150 million kilometers, the distance from Earth to the sun). Laying out flags at Mercury's 0.4 sheets, Earth's 1 sheet, and Neptune's 30 sheets turns an abstract number into something your child's own legs have walked.",
        "The one idea for today: our solar system is almost entirely empty space, and the distances involved are so vast that even walking dozens of yards to reach Neptune barely begins to capture it — the nearest star beyond our sun is roughly 610 km of toilet paper away. You don't need to explain that scale; just let your child stand at the Neptune flag, look back at the tiny sun, and feel it."
      ],
      keyFacts: [
        "An AU (astronomical unit) is the average Earth-sun distance, about 150 million kilometers — used as a handy yardstick for the solar system.",
        "In this scale model, 1 sheet of toilet paper = 1 AU.",
        "Approximate distances in sheets: Mercury 0.4, Venus 0.7, Earth 1, Mars 1.5, Jupiter 5.2, Saturn 9.5, Uranus 19, Neptune 30.",
        "The nearest star beyond our sun, Proxima Centauri, would sit about 269,000 sheets away in this same model — roughly 610 km of toilet paper.",
        "Terrestrial planets (Mercury, Venus, Earth, Mars) are small and rocky; gas giants and ice giants (Jupiter, Saturn, Uranus, Neptune) are enormous and mostly gas or ice.",
      ],
      sayItAloud: [
        "AU = simply say “A-U” (astronomical unit)",
      ],
    },
    supplies: [
      { item: "1 roll of toilet paper (440 sheets)", note: "Any standard roll; count sheets as you go rather than pre-measuring." },
      { item: "Tape measure (optional, for reference)", note: "Not strictly required — the toilet paper sheets themselves are the measuring unit today." },
      { item: "Chalk or small flags/index cards for planet markers", note: "Painter's tape flags on toothpicks work well outdoors." },
      { item: "Reading: “Astronomy for Amateurs,” Ch. V — The Planets: Mercury, Venus, The Earth, Mars", note: "Free online: https://www.gutenberg.org/cache/epub/25267/pg25267-images.html#Page_113" },
      { item: "Long open outdoor space", note: "A driveway, sidewalk, or field long enough for at least 30 sheets laid end to end." },
    ],
    prepNote: "Scout your walking space in advance — you need room for roughly 30 sheets' worth of distance (check your roll's sheet size; 30 sheets is usually 25–40 feet).",
    flow: [
      { min: "3", text: "Before going outside, ask both children to guess: how far is Neptune from the sun? Write the guesses down." },
      { min: "10", text: "Lay a marker for the sun. Count out sheets and place a flag for each planet: Mercury (0.4), Venus (0.7), Earth (1), Mars (1.5), Jupiter (5.2), Saturn (9.5), Uranus (19), Neptune (30)." },
      { min: "10", text: "Walk the whole model from the sun to Neptune. Stop at Neptune and look back — notice how small and distant the sun marker now looks." },
      { min: "5", text: "Talk through the nearest star's distance: 269,000 sheets, about 610 km. Let it land in silence for a moment." },
      { min: "10", text: "Read the assigned spine chapter section on the inner planets together, back indoors." },
      { min: "5", text: "Narrate. Ask Age 8 what surprised them most. Ask Age 11 to reason about light travel time relative to these distances." },
    ],
    discussion: {
      launch: "Before we started walking, what was your guess for Neptune's distance? How close were you?",
      formIA: "“What surprised you most about the scale model? What does 'empty space' mean to you now?”",
      formIIA: "“What is an AU? If the nearest star is 4.24 light-years away and Proxima Centauri sits about 269,000 AU away in our model, what does that tell you about the speed of light compared to the distances inside our own solar system?”",
      ifAsked: [
        { q: "Could we actually travel to Neptune?", a: "With current spacecraft, yes, but it would take over a decade — the distances involved are so vast that even our fastest probes need many years just to reach the outer planets." },
        { q: "Why is Jupiter so much farther out than Mars?", a: "There's a wide gap (the asteroid belt) between the small rocky inner planets and the huge outer gas giants — nobody fully knows why the planets settled at these particular distances, though gravity and the early solar system's history both played a role." },
        { q: "Is there anything else out past Neptune?", a: "Yes — dwarf planets like Pluto, and a vast, icy region called the Kuiper Belt, extend even farther out than our model walked today." },
      ],
    },
    worship: {
      scripture: "“When I consider Thy heavens, the work of Thy fingers, the moon and the stars, which Thou hast ordained; what is man, that Thou art mindful of him?” (Psalm 8:3-4)",
      patristic: null,
      godward: "“You just walked the distance to Neptune with your own feet, and the nearest star was still 610 kilometers of toilet paper away. And yet the Psalm says God is mindful of us anyway. That's worth standing still with for a moment.”",
    },
    challenges: [
      { problem: "No long open space is available nearby.", fix: "Use a smaller scale (a strip of paper marked in inches, or a hallway) and simply describe the true distances alongside the shrunk model — the concept still lands even at a smaller scale." },
      { problem: "It's windy or the flags blow away.", fix: "Use chalk marks on pavement instead of flags, or weigh markers down with small stones." },
      { problem: "The child struggles with the light-travel-time math for Age 11.", fix: "Work it in small steps together: light takes 8 minutes to reach Earth (1 AU); to reach Neptune (30 AU) it takes 30 times as long — do the multiplication together out loud." },
      { problem: "The walk itself takes longer than expected and attention flags.", fix: "It's fine to walk only partway (say, to Saturn) and describe the remaining distance to Neptune in words rather than on foot." },
    ],
    models: {
      formIA: "“I thought Neptune would be really close but we had to walk a long way. The sun looked tiny from way out there. There's SO much empty space between the planets.”",
      formIIA: "“An AU is the average distance from Earth to the sun, about 150 million kilometers. In our model, Neptune was 30 sheets away, but the nearest star would be 269,000 sheets away — thousands of times farther than anything in our own solar system. That tells me light, even though it's the fastest thing there is, still takes years to cross the gaps between stars, while it only takes minutes or hours to cross our own solar system.”",
      journal: "IA: solar-system drawing to scale (or as close as the page allows) with all 8 planets labeled. IIA: same drawing plus the light-travel-time calculation to Neptune (30 AU × 8 minutes = 240 minutes = 4 hours).",
    },
    extensions: {
      minimum: "If a full walk isn't possible, lay out just the four inner planets (up to 1.5 sheets) and describe the rest verbally — the empty-space idea still comes through.",
      goOutside: "This whole lesson is the outdoor extension — consider re-walking it later in the unit as a review, timing how fast you can do it from memory.",
      make: "Keep the toilet paper roll (unused portion) as a hands-on prop for reviewing the unit later.",
      readMore: "Explore the free NASA Eyes on the Solar System interactive (https://eyes.nasa.gov/apps/solar-system/) for live planet positions.",
      connect: "The vastness discovered today is the same vastness the Psalmist marveled at in Psalm 8 — ancient wonder and modern measurement pointing at the same truth.",
      multiAge: "Older child does the counting and math for sheet-distances; younger child gets to plant each flag and call out the planet's name.",
      youngest: "For a 5–6-year-old: just let them walk alongside and plant the flags, counting the planets in order as they go.",
      digDeeper: null,
    },
  },

  "4.12": {
    glance: {
      time: "35–45 min",
      where: "Indoors, at the table",
      prep: "10 min",
      heart: "A homemade reference card, made once, becomes a lifelong mental drawer for facts.",
      oneThing: "Have each child make their own full set of 8 planet fact cards — in their own hand, in their own words.",
    },
    background: {
      text: [
        "Today's task is concrete and satisfying: index cards, one per planet, each holding a name, its order from the sun, its relative size next to Earth, one striking fact, and whether it's visible to the naked eye. You don't need to be an expert — the reading and the resources below hand you everything needed; your job is simply to help your children boil it down onto a card.",
        "The one idea for today, especially for the older student: the eight planets split cleanly into two families — small, rocky terrestrial planets close to the sun (Mercury, Venus, Earth, Mars), and enormous gas or ice giants farther out (Jupiter, Saturn, Uranus, Neptune). That division isn't arbitrary; it reflects how the solar system itself formed, with lighter gases pushed outward by the young sun's heat and light while rocky material stayed closer in."
      ],
      keyFacts: [
        "Terrestrial planets: Mercury, Venus, Earth, Mars — small, rocky, closer to the sun.",
        "Gas giants: Jupiter, Saturn — enormous, made mostly of gas.",
        "Ice giants: Uranus, Neptune — also enormous, but with a greater proportion of icy materials.",
        "An inferior planet (Mercury, Venus) orbits closer to the sun than Earth; a superior planet (Mars outward) orbits farther out.",
        "Retrograde motion is when a planet appears to briefly reverse direction against the background stars — an illusion caused by relative orbital speeds, not an actual backward movement.",
      ],
      sayItAloud: [
        "terrestrial = “tuh-RES-tree-ul”",
      ],
    },
    supplies: [
      { item: "Index cards, 8 per student", note: "Set aside during Lesson 4.6 if possible; any small cut cards or paper squares work too." },
      { item: "Reading: “Round the Year with the Stars,” Ch. V: The Planets", note: "Free online: https://www.gutenberg.org/cache/epub/68391/pg68391-images.html" },
      { item: "Planet Size Comparison Chart — Wikimedia Commons", note: "Free image: https://commons.wikimedia.org/wiki/File:Planets_and_sun_size_comparison.jpg" },
      { item: "The Planets — NASA Science", note: "Free online: https://science.nasa.gov/solar-system/planets/ — photos and key facts for each planet." },
    ],
    prepNote: null,
    flow: [
      { min: "10", text: "Read the assigned spine chapter aloud together, or browse the NASA Planets page as a read-aloud alternative." },
      { min: "5", text: "Look at the Planet Size Comparison Chart together and talk about how dramatically sizes differ." },
      { min: "20", text: "Each child makes one card per planet: name and order from the sun, relative size compared to Earth, one striking fact, whether it's currently visible to the naked eye." },
      { min: "5", text: "(Age 11) On the back of each card, note whether it's terrestrial or a gas/ice giant, and why that division might exist." },
      { min: "5", text: "Narrate: each child picks their favorite card and tells you about that planet." },
    ],
    discussion: {
      launch: "Which planet's card was the most fun to make? What was the most surprising fact you wrote down?",
      formIA: "“Tell me about one planet that surprised you. What is it like?”",
      formIIA: "“What's the difference between a terrestrial planet and a gas giant? Why might the inner planets be rocky and the outer ones gaseous?”",
      ifAsked: [
        { q: "Why are the outer planets so much bigger?", a: "One leading idea is that early in the solar system's history, the young sun's heat and light blew lighter gases outward, away from the inner planets, where they gathered into the enormous gas and ice giants we see today." },
        { q: "Can I see any planets without a telescope?", a: "Yes — Venus, Mars, Jupiter, and Saturn are all often visible to the naked eye as very bright, steady “stars”; Mercury is trickier, low near the horizon just after sunset or before sunrise." },
        { q: "What makes a planet 'inferior' or 'superior'?", a: "It's simply about orbital position, not importance — inferior planets (Mercury, Venus) orbit closer to the sun than Earth does; superior planets (Mars and beyond) orbit farther out." },
      ],
    },
    worship: {
      scripture: "“When I consider Thy heavens, the work of Thy fingers, the moon and the stars, which Thou hast ordained.” (Psalm 8:3)",
      patristic: null,
      godward: "“Eight very different worlds, all held in their paths by the same quiet order, since before any of us existed. Each card you made today is a small act of paying attention to that order.”",
    },
    challenges: [
      { problem: "Eight cards feels like a lot to complete in one sitting.", fix: "Split it — do the four terrestrial planets today and the four giants tomorrow, or across two short sessions." },
      { problem: "Form IA struggles to pick “one striking fact” per planet.", fix: "Offer a simple prompt bank: biggest, smallest, hottest, coldest, has rings, has a red spot, spins sideways — let them pick whichever grabs them." },
      { problem: "The terrestrial vs. gas giant division feels abstract.", fix: "Use a kitchen analogy: terrestrial planets are like marbles (small, solid); gas giants are like balloons (huge, mostly puffed-up gas)." },
      { problem: "Retrograde motion questions come up early and confuse things.", fix: "Set it aside gently for the digDeeper research task rather than trying to explain it fully mid-lesson." },
    ],
    models: {
      formIA: "“Jupiter surprised me because it's so huge that over a thousand Earths could fit inside it. It also has a giant storm called the Great Red Spot that's been going for hundreds of years.”",
      formIIA: "“Terrestrial planets are small and rocky and close to the sun; gas giants are enormous and made mostly of gas, farther out. This split probably happened because the young sun's heat pushed lighter gases outward early in the solar system's history, leaving rocky material closer in.”",
      journal: "No separate journal page — the 8 fact cards themselves are the lesson's product; keep them in a small box or ring for ongoing reference.",
    },
    extensions: {
      minimum: "If time is short, make cards for just the four terrestrial planets today and finish the giants another day.",
      goOutside: "Check a sky app tonight for any currently visible planets and try to spot one with the naked eye.",
      make: "Punch a hole in the corner of each card and keep them on a ring for a portable, shuffleable planet quiz deck.",
      readMore: "Browse NASA's Planets page (science.nasa.gov/solar-system/planets) together for more photos and facts.",
      connect: "The wandering, planet-like lights ancient astronomers tracked (the very word 'planet' means 'wanderer') are the same eight the wise men and their contemporaries would have watched moving through the zodiacal band.",
      multiAge: "Older child can help the younger one spell planet names and choose age-appropriate facts; quiz each other with the finished decks.",
      youngest: "For a 5–6-year-old: make just 3-4 cards for the easiest, most memorable planets (Earth, Saturn's rings, Jupiter's size, Mars's red color).",
      digDeeper: "Research why planets sometimes appear to move backward (retrograde motion) against the fixed stars. Explain both the old geocentric explanation (epicycles) and the heliocentric one. Which explanation is simpler? Does being simpler make an idea true?",
    },
  },

  "4.13": {
    glance: {
      time: "1–2 hours after sunset",
      where: "Outdoors, same dark spot as previous sessions",
      prep: "10 min",
      heart: "A steady, non-twinkling light in the sky is a planet waiting to be recognized.",
      oneThing: "If Jupiter is visible, get out the binoculars — spotting its moons is repeating one of the most consequential observations in history.",
    },
    background: {
      text: [
        "Tonight's sky session has one simple trick that makes a beginner feel like an expert immediately: planets don't twinkle the way stars do. A steady, calm light is very likely a planet; a shimmering, flickering one is a true star. You don't need any equipment to notice this — just patient looking, the same posture from every sky session this unit.",
        "The one idea for today: if Jupiter happens to be up, a pair of ordinary binoculars can reveal tiny points of light near it — the four Galilean moons (Io, Europa, Ganymede, Callisto). Seeing them is repeating exactly what Galileo saw in January 1610, and what convinced him that not everything in the heavens circles Earth. Standing in your backyard, your child can look through the same kind of evidence that helped change how humanity understood its place in the universe."
      ],
      keyFacts: [
        "Planets shine with a steady light because they're close enough to appear as tiny discs, which averages out atmospheric shimmer; stars twinkle because they're true points of light easily disturbed by moving air.",
        "A planet's color and position within the zodiacal band (from Lesson 4.7) help confirm what you're looking at.",
        "Jupiter's four largest moons — Io, Europa, Ganymede, and Callisto — are called the Galilean moons because Galileo discovered them in January 1610.",
        "Their positions visibly shift from night to night as they orbit Jupiter, which is exactly what convinced Galileo they were truly circling Jupiter, not Earth.",
        "Binoculars, held steady (braced against a fence post or car roof), are often enough to spot these moons as tiny points of light.",
      ],
      sayItAloud: [
        "Io = “EYE-oh”",
        "Europa = “yu-ROH-puh”",
        "Ganymede = “GAN-ih-meed”",
        "Callisto = “kuh-LIS-toh”",
      ],
    },
    supplies: [
      { item: "Binoculars (any pair)", note: "Even inexpensive binoculars can reveal Jupiter's brightest moons if held steady." },
      { item: "Sky app or chart to confirm which planets are up tonight", note: "Reuse Stellarium or whichever app was used in earlier sky sessions." },
      { item: "Telescope Log worksheets (Form IA and Form IIA)", note: "Printable logs provided with the lesson; a blank journal page works too." },
      { item: "Red-light flashlight or dimmed phone", note: "Preserves night vision." },
    ],
    prepNote: "Look up which planets are visible in tonight's evening sky before heading out — Jupiter's moons are today's special bonus if it happens to be up.",
    flow: [
      { min: "5", text: "Head outside and scan the sky for a steady, non-twinkling light — that's likely a planet." },
      { min: "5", text: "Note the planet's color and confirm its position within the zodiacal band from Lesson 4.7." },
      { min: "10", text: "If Jupiter is visible, brace the binoculars steady and look for tiny points of light on either side — the Galilean moons." },
      { min: "10", text: "Fill in the Telescope Log: date, time, planet(s) found, moon sightings if any." },
      { min: "5", text: "Narrate before heading inside — what was found, and how it was recognized as a planet." },
    ],
    discussion: {
      launch: "How did you know you were looking at a planet and not a star tonight?",
      formIA: "“Which planets did you find? How did you know they were planets and not stars?”",
      formIIA: "“Which planets did you find, and describe their position. If Jupiter was visible: what did Galileo infer from seeing the same four points change position night after night?”",
      ifAsked: [
        { q: "Could those points near Jupiter just be background stars?", a: "That's exactly the doubt Galileo had to rule out — he tracked them night after night and saw them move together with Jupiter and change position relative to each other, proving they were orbiting it, not fixed stars behind it." },
        { q: "Why don't we see Jupiter's moons with just our eyes?", a: "They're bright enough in principle, but Jupiter's own glare and their closeness to it make them very hard to separate without at least binoculars or a small telescope." },
        { q: "Are there more moons around Jupiter than just those four?", a: "Yes — dozens more, but they're far too small and faint to see without a large telescope; the four Galilean moons are simply the biggest and brightest." },
      ],
    },
    worship: {
      scripture: "“The heavens declare the glory of God; and the firmament sheweth His handywork.” (Psalm 18:1 LXX / 19:1)",
      patristic: null,
      godward: "“Four hundred years ago, a man looked through a simple lens and saw those same four points of light. Tonight you saw them too. The sky hasn't changed — only how carefully people have learned to look at it.”",
    },
    challenges: [
      { problem: "Jupiter isn't visible tonight.", fix: "Focus on identifying whichever planets ARE visible using the twinkle test — the moon-spotting bonus can wait for a future clear night when Jupiter returns to the evening sky." },
      { problem: "Binoculars are hard to hold steady enough to see the moons.", fix: "Brace them against a fence post, car roof, or have the child sit and rest elbows on bent knees — stillness matters more than magnification." },
      { problem: "Confusing a bright star for a planet.", fix: "Double-check with the twinkle test and cross-reference the sky app — it's a very forgivable mistake and a good teaching moment either way." },
      { problem: "Cold, tired children on a third late-night session this month.", fix: "Keep it brief — even 10 minutes finding one planet and noting its steady light is a complete, worthwhile session." },
    ],
    models: {
      formIA: "“I found a bright light that didn't twinkle at all near the zodiac stars — Mom said that meant it was a planet, probably Jupiter. Through the binoculars I saw two tiny dots next to it!”",
      formIIA: "“I identified Jupiter by its steady light and position within the zodiacal band. Through binoculars I saw two of its moons as tiny points of light. Galileo saw four such points change position from night to night, which proved they were orbiting Jupiter itself rather than being fixed background stars — evidence that not everything circles Earth.”",
      journal: "Telescope Log with date, time, and identified planets; sketch of Jupiter's visible moons if seen, labeled where possible.",
    },
    extensions: {
      minimum: "If only a few minutes are possible, just find one steady, non-twinkling light and confirm it's a planet using the twinkle test — that alone completes the core lesson.",
      goOutside: "This whole lesson is the outdoor extension — try again on a different clear night to catch a planet that wasn't visible tonight.",
      make: "Sketch tonight's binocular view of Jupiter and its moons (even a rough one) and date it — compare to a sketch from a different night to see the moons move.",
      readMore: "Read more about Galileo's January 1610 notebook entries, where he first recorded these moons as changing points of light night after night.",
      connect: "This same patient, night-after-night watching is what the Magi are traditionally understood to have done in following a star to Bethlehem.",
      multiAge: "Let the older child handle the binoculars and describe what they see; the younger child confirms by looking through after, comparing notes.",
      youngest: "For a 5–6-year-old: just have them point out the “brightest light that doesn't blink” in the sky — the twinkle test alone is a complete task.",
      digDeeper: null,
    },
  },

  "4.14": {
    glance: {
      time: "35–40 min",
      where: "Indoors; brief outdoor star-color check the night before",
      prep: "5 min, plus a short evening glance beforehand",
      heart: "A star's color is real information you can see with your own eyes — no equipment needed.",
      oneThing: "On the clear night before this lesson, actually go look at star colors together — that lived observation makes today's reading click.",
    },
    background: {
      text: [
        "You don't need to know physics to teach this lesson — you need one clear-night glance at the stars beforehand, noticing that they aren't all the same color. Some genuinely look bluish-white, others yellow, others orange-red. That color is real information: it tells us the star's temperature, hotter stars burning blue-white and cooler ones glowing red-orange. Our own sun is simply a star seen up close.",
        "This is also the lesson where your reading may drift into language about deep time and stellar life cycles that goes beyond what we can observe directly — treat that gently and without alarm. You don't need to argue with it or fully resolve it today. The honest, doxological posture is simple: we marvel at what can be measured (a star's color, its light reaching us after an unimaginable journey) and we hold with humility and wonder, rather than certainty, the deeper questions about origins and ages that stretch past what any of us has seen firsthand. If your child asks how scientists know a star's age, that is a wonderful, open question — treat it as such, not as a threat."
      ],
      keyFacts: [
        "A star's color tells us its temperature: blue-white stars are hotter, red-orange stars are cooler.",
        "Our sun is a star — an ordinary, yellow-white one, seen up close instead of as a distant point of light.",
        "Stars shine through nuclear fusion, a process that releases enormous energy from their cores.",
        "Spectroscopy lets scientists spread starlight into a spectrum and identify what elements a distant star contains, purely from its light.",
        "A light-year measures distance, not time — it's how far light travels in one year, used because star distances are so vast that miles or kilometers become unwieldy.",
      ],
      sayItAloud: [
        "spectroscopy = “spek-TROS-kuh-pee”",
        "nuclear fusion = “NOO-klee-ur FYOO-zhun”",
      ],
    },
    supplies: [
      { item: "Reading: “Astronomy for Amateurs,” Ch. III — The Stars, Suns of the Infinite: A Journey through Space", note: "Free online: https://www.gutenberg.org/cache/epub/25267/pg25267-images.html#Page_56" },
      { item: "A clear night the evening before, for a brief star-color glance", note: "No equipment needed — just look up together for a few minutes." },
    ],
    prepNote: "The night before this lesson, step outside briefly and notice star colors together — mention it again at the start of tomorrow's discussion.",
    flow: [
      { min: "5", text: "Open by recalling last night's star-color glance: “Stars aren't all the same color. What did you notice?”" },
      { min: "5", text: "Explain simply: color tells us temperature — blue-white is hotter, red-orange is cooler." },
      { min: "10", text: "Read the assigned spine chapter aloud together." },
      { min: "5", text: "Introduce spectroscopy simply: light itself carries information about what a star is made of, without ever needing to travel there." },
      { min: "5", text: "Discuss light-years: if a star is far enough away, we're seeing light that left it long ago. What does that mean for the light arriving in your eyes tonight?" },
      { min: "5", text: "Narrate and close. Age 8: what is a star, and how is the sun like the ones we see at night? Age 11: explain light-years and what tonight's starlight tells us about when it left." },
    ],
    discussion: {
      launch: "What did you notice about star colors last night? What do you think that color is telling us?",
      formIA: "“What is a star? How is our sun like the stars we see at night?”",
      formIIA: "“Explain what a light-year is. If Proxima Centauri is 4.24 light-years away, what does that mean about the light arriving at your eye tonight — when did it leave?”",
      ifAsked: [
        { q: "How do scientists know what stars are made of if they can't go there?", a: "Through spectroscopy — spreading a star's light out like a rainbow reveals patterns unique to each element, the way a fingerprint identifies a person, without ever needing to travel to the star itself." },
        { q: "How old are the stars, and how do we know?", a: "That's a genuinely hard question that scientists are still refining answers to, using methods like brightness, color, and models of how stars change over time. It's honest to hold this with some humility — we can measure a great deal, and there is also real mystery here worth sitting with rather than rushing past." },
        { q: "Is our sun a star?", a: "Yes — an ordinary, medium-sized, yellow-white star, just close enough that it looks like a bright disc instead of a distant point of light." },
      ],
    },
    worship: {
      scripture: "“He telleth the number of the stars; He calleth them all by their names.” (Psalm 146:4 LXX / 147:4)",
      patristic: "St. Basil the Great, in the Hexaemeron, wondered at the vast variety among the stars — some larger, some smaller, some brighter — all set in place, he said, not by chance but by the wisdom of their Maker.",
      godward: "“The light reaching your eyes tonight may have left that star before you were born — maybe before your grandparents were born. God set that light on its way, and it is only now arriving, faithfully, to be seen by you.”",
    },
    challenges: [
      { problem: "The reading introduces deep-time or evolutionary language about star formation and death.", fix: "Stay calm and non-defensive: acknowledge what can be measured (light, color, distance) plainly, and treat deeper origin questions as open wonder rather than a fight to win or settle today." },
      { problem: "No clear night was available the evening before.", fix: "Describe star colors from memory or photos instead, and plan an actual color-glance for the very next clear night as a follow-up." },
      { problem: "Light-years feel too abstract for Form IIA.", fix: "Use a simple relay: “If light takes 4 years to arrive, then the picture you're seeing tonight is 4 years old — like a very, very old photograph still traveling toward you.”" },
      { problem: "Spectroscopy feels too technical to explain simply.", fix: "Compress it to one sentence: “Every element glows in its own unique pattern of colors, like a signature — scientists read that signature in starlight.”" },
    ],
    models: {
      formIA: "“A star is a giant ball of light, like our sun. Our sun is actually a star too, just much closer, so it looks huge and bright instead of a tiny dot.”",
      formIIA: "“A light-year is how far light travels in one year — used because distances to stars are too vast for miles to be useful. If Proxima Centauri is 4.24 light-years away, the light reaching my eyes tonight left that star 4.24 years ago — I'm seeing it as it was back then, not as it is right now.”",
      journal: "No journal assigned today — narration carries the lesson.",
    },
    extensions: {
      minimum: "If time is short, cover just the color-and-temperature idea and skip spectroscopy and light-years for another day.",
      goOutside: "Go back out tonight and try to spot one clearly blue-white star and one clearly orange-red one, naming them if possible.",
      make: "Sketch a simple color scale in the journal from red to blue, labeling cooler to hotter.",
      readMore: "Curious older children might enjoy researching the Hertzsprung-Russell diagram as part of the digDeeper task below.",
      connect: "The star that guided the wise men to Bethlehem is a favorite subject of both astronomers and theologians — a genuine point where wonder and careful observation meet without conflict.",
      multiAge: "Older child reads the spectroscopy explanation aloud to the younger one in their own simplified words — a good comprehension check.",
      youngest: "For a 5–6-year-old: just have them point to the “hottest-looking” and “coolest-looking” colors in a rainbow or crayon box as a simple stand-in for star temperature.",
      digDeeper: "Research the Hertzsprung-Russell diagram, which plots stars by temperature and brightness. What pattern does it reveal? What might that pattern suggest about how stars change over long spans of time?",
    },
  },

  "4.15": {
    glance: {
      time: "40–50 min",
      where: "Indoors, at the table",
      prep: "5 min",
      heart: "Let the whole unit come out through their own memory, not your prompting.",
      oneThing: "Have your child draw the entire solar system from memory, with no references open — then let the gaps be as interesting as the correct parts.",
    },
    background: {
      text: [
        "This is a gathering-in lesson, not a new-content lesson — your job is simply to ask good questions and let ten weeks of looking up finally speak for itself. From the spinning Earth and its tilted axis, through the constellations, the moon's phases, the solar system's vast empty distances, and finally the stars themselves, your child has built a real, connected picture of the sky. Today they tell you that whole story in their own words.",
        "The one idea for today: understanding grows the same way this unit did — patient looking first, vocabulary second, and the big picture last. If your child can walk you from “the Earth spins” all the way to “light from distant galaxies takes years to reach us,” connecting each piece along the way, they haven't just memorized astronomy facts — they've learned to think the way an astronomer thinks: slowly, carefully, led by evidence."
      ],
      keyFacts: [
        "This unit moved in order: Earth's motions (spin and tilt) → constellations and navigation → the moon's phases → the solar system's scale → stars and the wider universe.",
        "Each week's OBSERVE lesson gave real evidence; each READ & NARRATE lesson supplied vocabulary and story; each RECORD lesson turned it into a lasting diagram.",
        "The Lesson 4.3 Earth-sun diagram and the Lesson 4.10 moon-phase diagram are the two reference drawings underlying almost everything else in the unit.",
        "It's normal and good to still be holding open questions at the end of a unit — the questions your child can now ask more precisely are themselves a sign of real learning.",
        "This is a good moment to notice: the same patient, evidence-first posture used all unit long is exactly how a scientist — and a faithful observer of creation — keeps working for a lifetime.",
      ],
      sayItAloud: null,
    },
    supplies: [
      { item: "Nature journal (all entries from this unit, if available)", note: "Have the whole unit's journal pages on hand to flip back through for reference, especially the 4.3 and 4.10 diagrams." },
      { item: "Unit 4 Synthesis worksheets (Form IA and Form IIA)", note: "Printable synthesis pages provided with the lesson; a blank two-page journal spread works just as well." },
      { item: "Pencil and colored pencils", note: "For the from-memory solar system diagram." },
    ],
    prepNote: null,
    flow: [
      { min: "5", text: "Open by asking: “Tell me the whole story of this unit, starting with the Earth spinning and ending wherever you like.”" },
      { min: "15", text: "Page 1: draw the solar system entirely from memory, no references, labeling all 8 planets." },
      { min: "10", text: "Page 2: write the answer to “what was the most surprising thing you learned?” and “what question are you still holding?”" },
      { min: "10", text: "Vocabulary review: go through the unit's vocabulary words together. For each, give a definition AND an example drawn from something actually observed or read this unit — not copied from a list." },
      { min: "5", text: "(Age 11) Connect at least two ideas from this unit back to Units 1–3." },
      { min: "5", text: "Close by flipping back through the unit's journal pages together, admiring how far the observations have come." },
    ],
    discussion: {
      launch: "Starting with the Earth spinning on its axis, tell me the whole story of this unit in your own words.",
      formIA: "“Tell me the whole story of this unit — starting with the Earth spinning on its axis and ending with the stars in distant galaxies.”",
      formIIA: "“Tell me the whole story of this unit. Connect at least two ideas from Units 1–3 to what you learned here.”",
      ifAsked: [
        { q: "How do scientists know the universe is so old?", a: "That's exactly the right question to keep asking — scientists use careful measurements and models to estimate it, but it remains an area of real ongoing study and humility, not a settled certainty to argue over. It's fine, and good, to hold it as an open question." },
        { q: "What was the most important thing in this whole unit?", a: "That's worth answering for yourself — but if I had to guess, it might be this: looking carefully, for a long time, before deciding you understand something, is the heart of every single lesson we did." },
        { q: "Are we done learning about space now?", a: "Not even close — this unit gave you the first real map of the sky. Astronomers spend entire careers still discovering new things in that same sky you've been watching all these weeks." },
      ],
    },
    worship: {
      scripture: "“When I consider Thy heavens, the work of Thy fingers, the moon and the stars, which Thou hast ordained; what is man, that Thou art mindful of him?” (Psalm 8:3-4)",
      patristic: "St. Basil the Great closed his own reflections on the heavens by urging his listeners to let the grandeur of creation lead them not to worship the creation itself, but to glorify the One who ordered it all so wisely.",
      godward: "“Ten weeks ago you traced a stick's shadow, not knowing why it moved. Now you can tell the whole story of the spinning Earth, the changing moon, and the distant stars. That's not just a unit finished — that's a small share in the same wonder the Psalmist felt looking up at this same sky.”",
    },
    challenges: [
      { problem: "The solar system diagram from memory has real gaps or errors.", fix: "That's expected and useful — let the gaps show you exactly what to lightly review, without treating it as a failure. This is a checkpoint, not a test." },
      { problem: "The whole-unit narration feels overwhelming to organize.", fix: "Offer a simple scaffold: “Start with the Earth. Then the sky. Then the moon. Then the planets. Then the stars.” — the same order the unit followed." },
      { problem: "A child fixates on one still-unanswered question and feels frustrated by it.", fix: "Affirm that unresolved questions are a sign of real thinking, not failure — write the question down formally as “still wondering” to revisit anytime." },
      { problem: "Connecting to Units 1–3 feels like a stretch for Form IIA.", fix: "Offer a starting thread: both natural history and astronomy begin with careful observation before naming — that connection alone is a valid, complete answer." },
    ],
    models: {
      formIA: "“First we learned the Earth spins around, which makes day and night. Then we found constellations in the sky. Then we watched the moon change shape every night. Then we learned how huge and far away the planets and stars are. The most surprising thing was how much empty space there is between everything.”",
      formIIA: "“This unit started with Earth's rotation and tilt causing day, night, and seasons, then moved to constellations and navigating the sky, then the moon's phases (caused by our angle of view, not a shadow), then the huge scale of the solar system, and finally the stars themselves and how far their light travels. Like Unit 1's insect sorting, this unit also started with patient observation before any naming or explaining — looking always comes first.”",
      journal: "Two-page synthesis: solar system diagram from memory with all 8 planets labeled; written reflection on the most surprising discovery and a still-open question; IIA adds a connection to a previous unit.",
    },
    extensions: {
      minimum: "If time is short, do the from-memory solar system drawing and a single spoken narration — skip the written vocabulary review for another day.",
      goOutside: "Celebrate the unit's end with one more evening under the sky, no task attached — just look up together and see what you now recognize without a chart.",
      make: "Bind or clip together all of this unit's journal pages into a small keepsake booklet — the shadow stick, the diagrams, the star maps, the moon journal, all in one place.",
      readMore: "If a child wants more, let them choose one planet or constellation from this unit to research further on their own, just for fun.",
      connect: "Point out how the whole unit's rhythm of look-first, name-second echoes Unit 1's insect lesson, and how the moon's cycle traced here is the same cycle behind the Church's yearly calculation of Pascha.",
      multiAge: "Let the older child narrate the whole unit aloud while the younger child illustrates key moments as they're mentioned — a shared retelling.",
      youngest: "For a 5–6-year-old: have them just draw their favorite thing from the whole unit (the moon, a planet, a constellation) and tell you why they liked it.",
      digDeeper: null,
    },
  },
};

export const VOCAB = {
  rotation: "Earth spinning all the way around on its own axis, once every 24 hours — this gives us day and night.",
  revolution: "Earth traveling all the way around the sun once every year — this, together with the tilt, gives us the seasons.",
  axis: "An invisible line running through the middle of Earth, from North Pole to South Pole, that Earth spins around.",
  "axial tilt": "The lean of Earth's axis, about 23.5 degrees — this lean, not our distance from the sun, is what causes the seasons.",
  shadow: "The dark shape made when something blocks light — the shape and length of a shadow change through the day.",
  sundial: "A very old kind of clock that tells time using the changing shadow of a stick or pointer in sunlight.",
  solstice: "One of two days a year when a hemisphere leans most toward or most away from the sun — the longest and shortest days.",
  equinox: "One of two days a year when neither hemisphere leans toward or away from the sun, giving nearly equal day and night everywhere.",
  orbit: "The path one object in space follows around another, like Earth's path around the sun.",
  constellation: "A pattern of stars that people long ago connected with imaginary lines and gave a name and a story.",
  Polaris: "The North Star — it sits almost directly above Earth's North Pole, so it barely seems to move all night.",
  "North Star": "Another name for Polaris, the star that marks true north and stays nearly still while other stars circle around it.",
  magnitude: "A number that tells how bright a star appears to us — the lower the number, the brighter the star.",
  asterism: "A smaller, easy-to-spot star pattern, like the Big Dipper, that isn't an official constellation on its own but is part of one.",
  geocentrism: "The old idea that Earth sits still at the center of everything, with the sun, moon, and stars circling around it.",
  heliocentrism: "The idea, now known to be correct, that Earth and the other planets orbit the sun.",
  telescope: "A tool with lenses or mirrors that gathers light and makes distant things — like planets and moons — appear closer and clearer.",
  "Galilean moons": "The four largest moons of Jupiter — Io, Europa, Ganymede, and Callisto — first discovered by Galileo in 1610.",
  "retrograde motion": "When a planet appears, for a while, to move backward against the background stars, caused by Earth and that planet orbiting the sun at different speeds.",
  "binary star": "Two stars that orbit closely around each other, often appearing to our eyes as a single point of light.",
  "giant star": "A star much larger than our sun, sometimes tens or hundreds of times wider.",
  "dwarf star": "A smaller, dimmer star — our own sun is actually a fairly ordinary dwarf star.",
  "named star": "A star bright or famous enough that ancient sky-watchers gave it its own name, like Sirius or Betelgeuse.",
  ecliptic: "The sun's apparent yearly path across the background stars, as seen from Earth.",
  zodiac: "The band of constellations that lies along the ecliptic, the sun's apparent path across the sky.",
  "zodiacal band": "The narrow strip of sky, centered on the ecliptic, where the sun, moon, and all the planets are always found.",
  phase: "How much of the moon's always-lit half we can see from Earth at a given time — it changes as the moon orbits us.",
  waxing: "When the moon's visible lit portion is growing bigger, night after night.",
  waning: "When the moon's visible lit portion is shrinking, night after night.",
  crescent: "A moon phase showing just a thin sliver of light.",
  gibbous: "A moon phase showing more than half lit, but not the whole disc.",
  "new moon": "The phase when the moon's lit half faces entirely away from Earth, making it essentially invisible to us.",
  "full moon": "The phase when the moon's entire visible face is lit, appearing as a complete bright circle.",
  quarter: "A moon phase (first or third/last quarter) when exactly half of the visible face appears lit, like a half-circle.",
  "lunar month": "The roughly 29.5 days it takes the moon to move through all its phases, from one new moon to the next.",
  "lunar eclipse": "A rare event when Earth's shadow actually falls on the moon during a full moon, different from an ordinary phase.",
  "blue moon": "A second full moon occurring within a single calendar month — a name about rarity, not actual color.",
  "AU (astronomical unit)": "The average distance from Earth to the sun, about 150 million kilometers — used as a handy yardstick for the solar system.",
  "solar system": "The sun together with all the planets, moons, and other objects that orbit it.",
  "terrestrial planet": "A small, rocky planet close to the sun — Mercury, Venus, Earth, and Mars.",
  "gas giant": "A huge planet made mostly of gas — Jupiter and Saturn.",
  "ice giant": "A huge planet with a large proportion of icy materials — Uranus and Neptune.",
  "inferior planet": "A planet that orbits closer to the sun than Earth does — Mercury or Venus.",
  "superior planet": "A planet that orbits farther from the sun than Earth does — Mars and beyond.",
  "nuclear fusion": "The process inside stars that releases enormous energy, making them shine.",
  spectrum: "Light spread out into its range of colors, like a rainbow, which can reveal information about its source.",
  spectroscopy: "The scientific method of spreading a star's light into a spectrum to learn what elements it contains.",
  "light-year": "The distance light travels in one year — used to measure the vast distances between stars, since light is the fastest thing there is.",
  galaxy: "An enormous collection of billions of stars, held together by gravity.",
  "Milky Way": "The name of our own galaxy, the huge collection of stars that includes our sun and solar system.",
  maria: "The dark, smooth plains on the moon's surface, once mistakenly thought to be seas (Latin for 'seas').",
};
