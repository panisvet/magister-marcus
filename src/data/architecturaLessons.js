// ─────────────────────────────────────────────────────────────────────────────
// architecturaLessons.js
// Magister Architecturae — Architectural drawing for Forms IA & IIA
// Year One · twelve weeks · culminates in an Orthodox church elevation
// Living books from Project Gutenberg · notebook drawings
//
// LESSON SHAPE follows Magister Artis, with extra fields:
//   materials   string | null
//   copywork    string | null     short public-domain passage
//   copySource  string | null
// ─────────────────────────────────────────────────────────────────────────────

export const ARCH_UNITS = [

  {
    id: "u1",
    title: "Unit 1: How a Builder Sees",
    subtitle: "Weeks 1–4 · Picture, elevation, plan, and the lines of the hand",
    icon: "🏛",
    lessons: [
      {
        id: "1.1",
        week: 1,
        type: "LOOKING",
        title: "Three Ways to Draw a House",
        tagline: "A picture delights the eye. A plan tells the builder what to do.",
        artist: "An anonymous draughtsman",
        period: "1888",
        work: "Plan, elevation, and section explained",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Elevation_drawing.jpg/1024px-Elevation_drawing.jpg",
        teacherPrep: "Have a small wooden block or toy house on the table. Graph paper and a ruler ready. Do not call this a worksheet — the page is a notebook leaf.",
        opening: "In February 1888 the Scientific American Supplement, now free on Project Gutenberg, explained why an architect cannot send a painter’s picture to the building yard. A picture shows how a house looks as you walk toward it. An elevation shows the front as if nothing sloped away, so every window can be measured. A plan is the house after the roof has been imagined away — rooms become shapes, doors become gaps.\n\nToday we learn to name those three drawings, and to try each one from a real object on the table.",
        kq: "Look at the block (or the toy house) for one full minute without speaking. If a bird looked straight down on it, what shape would the bird see?",
        activity: {
          label: "Notebook drawing",
          text: "Divide one notebook leaf into three parts. Label them Picture, Elevation, Plan.\n\nForm IA: In Picture, sketch the object as your eye sees it. In Elevation, draw only the front, flat and square. In Plan, draw the top view — a simple shape with a little mark for the door.\n\nForm IIA: Do the same, but use a ruler for the elevation and the plan. Write one sentence under the leaf: “A picture shows how it looks. An elevation and a plan show how it is made.”"
        },
        disc: [
          "Why would a carpenter prefer the elevation to the picture?",
          "What does the plan know that the picture does not?",
          "If the three drawings disagreed about where the door sits, which would you trust?"
        ],
        narration8: "Tell back the difference between a picture, an elevation, and a plan.",
        narration11: "In a short paragraph, explain why a builder cannot work from a pretty sketch alone. Use the words picture, elevation, and plan.",
        vocab: ["picture", "elevation", "plan", "scale"],
        watchFor: "Children often draw the plan as another picture from above, with a roof still on. Gently lift the roof in words: the plan is the rooms.",
        digDeeper: "Read the short architectural-drawing paragraphs in Scientific American Supplement, 18 February 1888 (Gutenberg #17167). Copy one sentence that tells what geometrical drawings are for.",
        materials: "Pencil, eraser, ruler, notebook or graph paper, a block or toy house",
        copywork: "The object of architectural drawings on the geometrical system is not to show a picture of the building, but to enable the designer to put together his design accurately in all its parts, according to scale.",
        copySource: "Scientific American Supplement, 18 February 1888. Project Gutenberg #17167.",
        resources: [
          { lbl: "Scientific American Supplement, 18 Feb. 1888", url: "https://www.gutenberg.org/ebooks/17167", note: "Public domain · the plan / elevation / section explanation" }
        ]
      },
      {
        id: "2.1",
        week: 2,
        type: "DRAWING",
        title: "The Workman’s Line",
        tagline: "Begin at the beginning of things.",
        artist: "N. Hawkins",
        period: "1902",
        work: "Self-Help Mechanical Drawing",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/T-square_and_triangle.jpg/800px-T-square_and_triangle.jpg",
        teacherPrep: "Cut two cardboard strips and tape them into a T so the long arm can ride the edge of a book. This is the homemade T-square.",
        opening: "N. Hawkins, writing in 1902 for the student who had no master nearby, said it is wise to begin at the beginning: chalk-work first, then the free hand, then the instruments. J. S. Zerbe, in Carpentry for Boys, added that the artist’s picture is not enough for a builder. The builder must draw plane surfaces — flat views — with care.\n\nToday the pencil becomes a workman’s tool.",
        kq: "Hold the ruler against the edge of the table. Does the line you draw stay as quiet as the edge, or does it wander?",
        activity: {
          label: "Notebook drawing",
          text: "Tape the homemade T-square. Draw a quiet border half an inch from the edge of the page.\n\nPractice four kinds of line and label each:\n• Light construction — barely touching the paper\n• Object line — firm, even, darker (the edge of a wall)\n• Hidden line — dashes, for an edge you know is there but cannot see\n• Center line — long dash, short dash, for the middle of a door or path\n\nForm IA: A row of vertical lines and a row of horizontal lines, then one square.\nForm IIA: The same, then a second square whose diagonals you test by eye for balance."
        },
        disc: [
          "Why does a builder want an even line more than a dark one?",
          "When would you use a hidden line on a house?",
          "What happens to a drawing if the first square is not square?"
        ],
        narration8: "Tell me the four kinds of line and what each one is for.",
        narration11: "Describe how a free-hand sketch and an instrumental drawing serve different purposes. When would you use each?",
        vocab: ["construction line", "object line", "hidden line", "right angle"],
        watchFor: "Slouching wrists make wobbling lines. A book under the paper helps more than another speech.",
        digDeeper: "Browse the opening of Hawkins, Self-Help Mechanical Drawing (Gutenberg #67166), and Zerbe’s chapter “Drawing and Its Utility” in Carpentry for Boys (#20763).",
        materials: "Pencil HB and 2H, ruler, cardboard strips, tape, notebook",
        copywork: "It is wise, as well as easy, to begin at the beginning of things.",
        copySource: "N. Hawkins, Self-Help Mechanical Drawing (1902). Project Gutenberg #67166.",
        resources: [
          { lbl: "Hawkins, Self-Help Mechanical Drawing", url: "https://www.gutenberg.org/ebooks/67166", note: "Public domain" },
          { lbl: "Zerbe, Carpentry for Boys", url: "https://www.gutenberg.org/ebooks/20763", note: "Chapter on drawing" }
        ]
      },
      {
        id: "3.1",
        week: 3,
        type: "LOOKING",
        title: "The Geometry Hidden in Houses",
        tagline: "The cube becomes a house; the triangle, a roof.",
        artist: "The street outside",
        period: "Any century",
        work: "Walls, gables, towers, and arches",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Simple_house_drawing.svg/1024px-Simple_house_drawing.svg.png",
        teacherPrep: "A short walk or a window with a view of at least two buildings. Sketchbooks in hand.",
        opening: "Almost every building is a family of simple shapes standing on one another. The wall is a rectangle. The gable is a triangle sitting on that rectangle. A tower is often a rectangle with a triangle or a cone on top. A round window is a circle. An arch is part of a circle.\n\nOld drawing books treated this as a kindness, not a reduction. The child is not copying geometry problems. The child is learning the alphabet of building.",
        kq: "From the window or the walk: name the first three shapes you see in the nearest building.",
        activity: {
          label: "Notebook drawing",
          text: "On the walk or from the window, list five buildings and name the shapes in each (example: barn = long rectangle + triangle roof).\n\nAt the table, invent a building using only these pieces: two rectangles, one triangle, one circle, and one arch. No extra decoration yet.\n\nForm IA: A free, careful elevation of that invention.\nForm IIA: The same elevation, all lines vertical or horizontal except the roof slopes and the arch. Label each shape in small writing along the side."
        },
        disc: [
          "Why do so many roofs begin as triangles?",
          "What does a circle do for a building that a rectangle cannot?",
          "If you were allowed one extra shape after the five required pieces, what would you add, and why?"
        ],
        narration8: "Tell back the shapes you saw in a real building today.",
        narration11: "Describe your invented building by its shapes only, as if the listener could not see the page.",
        vocab: ["rectangle", "gable", "arch", "elevation"],
        watchFor: "If a child wants turrets and flags first, hold the constraint: five pieces, then one flourish. That is architectural manners.",
        digDeeper: "Look at a Greek temple photograph and a Gothic church photograph. Which family of shapes governs each?",
        materials: "Sketchbook, pencil, a walk or a window",
        copywork: null,
        copySource: null,
        resources: [
          { lbl: "Ruskin, The Elements of Drawing — preface on children", url: "https://www.gutenberg.org/ebooks/30325", note: "Mercy toward the young draughtsman" }
        ]
      },
      {
        id: "4.1",
        week: 4,
        type: "DRAWING",
        title: "The Front of a House",
        tagline: "Windows like to line up. Doors like the middle, unless there is a good reason.",
        artist: "The practice house",
        period: "This term",
        work: "A gabled cottage, twenty-four feet wide",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cottage_elevation.png/1024px-Cottage_elevation.png",
        teacherPrep: "Graph paper. Decide the scale before sitting down: one square = one foot, or ½ inch = 1 foot.",
        opening: "Today we draw an elevation: the front of a small house, as if we stood on the path and the house politely refused to recede. Alignment is courtesy. Windows like to line up. Doors like the middle, unless there is a good reason. Roofs like to sit evenly on the wall.",
        kq: "If the door is in the middle and the two windows match, what does the house seem to say about itself?",
        activity: {
          label: "Notebook drawing",
          text: "The house is 24 feet wide and 16 feet high to the eaves. The roof rises 8 more feet to the ridge. The door is 3 feet wide and 7 feet tall, in the middle. Two windows, each 3 by 4 feet, sit equally on either side, sills 4 feet above the ground. A chimney 2 feet wide sits on the right slope.\n\nForm IA: Draw the wall rectangle, the gable, the door, and two windows. Counting may be by squares or by “middle and matching.”\nForm IIA: Use the scale. Find the ridge from the middle of the wall-top. Place the windows so the spaces feel even. Darken object lines; leave construction lines faint."
        },
        disc: [
          "What would happen to the courtesy of the front if one window sat higher than the other?",
          "Why does the chimney sit on the roof slope rather than floating in the air?",
          "Could a door be off-center on purpose? What reason would make that good?"
        ],
        narration8: "Tell how you placed the door and the windows.",
        narration11: "Write the dimensions of the practice house and explain the scale you used.",
        vocab: ["eaves", "ridge", "gable", "sill", "scale"],
        watchFor: "If the numbers tangle, drop exact feet and keep alignment. The habit matters more than the 24-foot width.",
        digDeeper: "Measure the front of your own house in rough feet and compare those numbers to the practice house.",
        materials: "Graph paper, ruler, pencil",
        copywork: null,
        copySource: null,
        resources: []
      }
    ]
  },

  {
    id: "u2",
    title: "Unit 2: Measure, Map, and Distance",
    subtitle: "Weeks 5–8 · The plan, the real room, the vanishing path, the detail",
    icon: "📐",
    lessons: [
      {
        id: "5.1",
        week: 5,
        type: "DRAWING",
        title: "The Plan: Looking Down",
        tagline: "You are a bird, or a thoughtful giant.",
        artist: "The practice house",
        period: "This term",
        work: "Hall, parlor, and kitchen",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Simple_floor_plan.svg/1024px-Simple_floor_plan.svg.png",
        teacherPrep: "Keep last week’s elevation in sight. The door and windows must agree.",
        opening: "A plan is a map of a building after the roof has been imagined away. Walls in a plan are drawn thick, because walls have thickness. A door is a gap plus a quarter-circle that shows which way the door swings — never through a wall. A window is a thinner break in the wall.",
        kq: "If last week’s door was in the middle of the front, where must today’s door sit?",
        activity: {
          label: "Notebook drawing",
          text: "Same scale as Week 4. The house is 24 feet across the front and 16 feet deep. Divide it into a hall 8 feet wide running back from the front door, a parlor on one side, a kitchen on the other.\n\nForm IA: Thick outer rectangle, interior walls, door gaps, room names.\nForm IIA: Add door swings, mark the two front windows to match the elevation, and give each room at least one window for light. Letter the rooms in small, calm writing."
        },
        disc: [
          "Why is a swinging arc drawn into the room, not into the wall?",
          "What would a kitchen without a window feel like at noon?",
          "Hold last week’s elevation beside this plan. Do they agree?"
        ],
        narration8: "Point to the plan and tell what each room is for.",
        narration11: "Explain how a plan and an elevation must agree, and name one place where yours still need to agree.",
        vocab: ["plan", "swing", "hall", "parlor"],
        watchFor: "Thin lines for walls. Ask the child to press two lines close together, or to color the wall-band lightly.",
        digDeeper: "Add a north arrow. Which wall would catch morning light?",
        materials: "Graph paper, last week’s elevation, pencil, ruler",
        copywork: null,
        copySource: null,
        resources: []
      },
      {
        id: "6.1",
        week: 6,
        type: "MEASURING",
        title: "Measure a Real Room",
        tagline: "The architect must first be a surveyor of what is already there.",
        artist: "Vitruvius",
        period: "1st century B.C.",
        work: "The Ten Books on Architecture — the education of the architect",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Vitruvian_principles.jpg/1024px-Vitruvian_principles.jpg",
        teacherPrep: "Tape measure. Choose one room. A partner helps: one holds, one writes. Crooked old houses will not match opposite walls. That is the lesson.",
        opening: "Vitruvius, whose book still lives on Project Gutenberg, said an architect must be educated in many arts — and among the practical ones is measure. Today the child becomes a surveyor of a room he already knows.\n\nFirst a croquis: a rough box in the notebook, not to scale, with marks for doors and windows. Then the tape. Then a fair copy at a written scale.",
        kq: "Before you stretch the tape: which wall do you think is longest? After you measure, were you right?",
        activity: {
          label: "Field notes and fair copy",
          text: "Measure each wall in feet and inches. Measure the width of every door and window, and how far each opening sits from the nearest corner. Note which way each door swings.\n\nForm IA: Fair-copy plan at a simple scale (¼ inch = 1 foot if it fits). Title the sheet with the room’s name and the date.\nForm IIA: The same, writing lengths as 10'–6\". Record wall thickness from a door jamb if you can. Title: PLAN OF THE [NAME] ROOM · MEASURED [DATE] · SCALE ¼\" = 1'–0\"."
        },
        disc: [
          "If two opposite walls differ by a few inches, which number will you trust, and why?",
          "Why do we measure openings from a corner rather than from mid-wall?",
          "What did the tape tell you that your memory of the room had hidden?"
        ],
        narration8: "Tell how you measured the room and what surprised you.",
        narration11: "Write the scale you chose and defend it. Mention one place where the house was not square.",
        vocab: ["scale", "croquis", "jamb", "feet and inches"],
        watchFor: "Chasing quarter-inches around a crooked house. Rounding to the nearest inch is honorable at this age.",
        digDeeper: "Read Vitruvius, Book I, on the education and duties of the architect (Gutenberg #20239), or the easier Abridgment (#27877).",
        materials: "Tape measure, notebook, pencil, ruler, graph paper",
        copywork: "The architect should be equipped with knowledge of many branches of study and varied kinds of learning, for it is by his judgement that all work done by the other arts is put to test.",
        copySource: "Vitruvius, The Ten Books on Architecture, Book I. Project Gutenberg #20239.",
        resources: [
          { lbl: "Vitruvius, Ten Books on Architecture", url: "https://www.gutenberg.org/ebooks/20239", note: "Morgan translation" },
          { lbl: "An Abridgment of Vitruvius", url: "https://www.gutenberg.org/ebooks/27877", note: "Shorter doorway for Form IIA" }
        ]
      },
      {
        id: "7.1",
        week: 7,
        type: "DRAWING",
        title: "The Path That Vanishes",
        tagline: "Lines that run away from us meet on the horizon.",
        artist: "G. A. Storey",
        period: "1910",
        work: "The Theory and Practice of Perspective",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/One_point_perspective.svg/1024px-One_point_perspective.svg.png",
        teacherPrep: "Ruler essential. Keep Storey’s whole science off the table. One picture a child can finish is enough.",
        opening: "G. A. Storey, in The Theory and Practice of Perspective (Gutenberg), shows that a pavement, a hall, or a row of columns can be built from one honest idea: lines that run away from us meet at a point on the horizon.\n\nThree sentences hold the law we need. The horizon is a level line at the height of your eyes. The vanishing point sits on that line. Every line that in the real world runs straight away from you aims at that point. Upright lines stay upright. Lines that run across you stay level.",
        kq: "Stand in a hallway or on a path. Where do the two edges of the floor seem to be going?",
        activity: {
          label: "Notebook drawing",
          text: "Draw a light horizon across the upper third of the page. Put a vanishing point on it. Near the bottom, a wide horizontal line — the near edge of a path. From each end, a line to the vanishing point. Two or three level lines between the sides of the path (paving joints). They get shorter as they go back.\n\nForm IA: A small flat house sitting on the path, a little in front of the vanishing point — not stamped on the point itself.\nForm IIA: The same, plus a fence or a row of trees whose tops and feet follow the vanishing lines."
        },
        disc: [
          "Why must upright lines stay upright?",
          "What happens if the house sits exactly on the vanishing point?",
          "How is this picture different from last week’s plan?"
        ],
        narration8: "Tell the three sentences of the law.",
        narration11: "Explain one-point perspective as if teaching a younger sibling. Use horizon, vanishing point, and path.",
        vocab: ["horizon", "vanishing point", "perspective"],
        watchFor: "The postage-stamp house at the end of a funnel. Pull it forward and let the path run past one side.",
        digDeeper: "Browse Storey’s chapters on pavements and the cube (Gutenberg #20165). Not required reading; pictures only.",
        materials: "Ruler, pencil, notebook",
        copywork: null,
        copySource: null,
        resources: [
          { lbl: "Storey, The Theory and Practice of Perspective", url: "https://www.gutenberg.org/ebooks/20165", note: "Public domain" }
        ]
      },
      {
        id: "8.1",
        week: 8,
        type: "DRAWING",
        title: "Windows, Doors, and Roofs",
        tagline: "Draw a porch. Draw a dormer. Do not begin with a cathedral.",
        artist: "Joseph Pennell and the old pen-draughtsmen",
        period: "19th century",
        work: "A window in a thick wall",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Window_drawing_architectural.jpg/800px-Window_drawing_architectural.jpg",
        teacherPrep: "Look at a real window in the house before sitting down. Limit shingles and brick marks.",
        opening: "Old treatises on pen drawing, gathered now on Gutenberg, told beginners not to rush at a whole cathedral. Draw a porch. Draw a dormer. Draw a window until the hole in the wall looks like a hole in a thick wall — not a rectangle floating on a line.\n\nA door needs a frame, a leaf, and a threshold. A gable roof should overhang a little; a house whose roof ends exactly on the wall looks shaved.",
        kq: "Look at a real window. Can you see the thickness of the wall in the reveal?",
        activity: {
          label: "Notebook drawing",
          text: "Three studies, each about the size of a palm: one window, one door, one roof gable. Look first.\n\nThen redraw the Week 4 elevation, giving the windows thickness, the door a frame and step, and the roof a modest overhang.\n\nForm IA: Choose the best of the three studies and finish that one with care.\nForm IIA: Finish the elevation and add a simple ground shadow to the right (sun from the left). A few shingle marks near the eaves only — not a fish-scale painting."
        },
        disc: [
          "What makes a drawn window look like glass sitting in a wall?",
          "Which way did your plan say the door swings? Does the knob sit on that side?",
          "Why does a little overhang make the roof look true?"
        ],
        narration8: "Tell what you noticed about the real window before you drew.",
        narration11: "Describe how thickness, frame, and overhang change an elevation from a diagram into a house.",
        vocab: ["reveal", "sill", "threshold", "eaves", "overhang"],
        watchFor: "Details swallow children. A few true lines beat a forest of invented texture.",
        digDeeper: "Look at the architectural plates in Pen Drawing: An Illustrated Treatise (Gutenberg #17502). Do not copy style for its own sake.",
        materials: "Pencil, Week 4 elevation, a real window to look at",
        copywork: null,
        copySource: null,
        resources: [
          { lbl: "Pen Drawing: An Illustrated Treatise", url: "https://www.gutenberg.org/ebooks/17502", note: "Pages on architectural detail" }
        ]
      }
    ]
  },

  {
    id: "u3",
    title: "Unit 3: The Church with a Dome",
    subtitle: "Weeks 9–12 · Looking, the cupola, a paper church, the Year One elevation",
    icon: "✦",
    lessons: [
      {
        id: "9.1",
        week: 9,
        type: "LOOKING",
        title: "The Shape of an Orthodox Church",
        tagline: "A church is a house whose roof becomes a dome.",
        artist: "Holy Trinity Cathedral, Chicago",
        period: "1903 · Louis Sullivan after the village churches of Russia",
        work: "West front with drum and onion dome",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Holy_Trinity_Russian_Orthodox_Cathedral%2C_Leavitt_Street_and_Haddon_Avenue%2C_Ukrainian_Village%2C_Chicago%2C_IL_-_52522925581.jpg/1280px-Holy_Trinity_Russian_Orthodox_Cathedral%2C_Leavitt_Street_and_Haddon_Avenue%2C_Ukrainian_Village%2C_Chicago%2C_IL_-_52522925581.jpg",
        teacherPrep: "Look first, two full minutes, before any names. If you have a parish photograph, set it beside the picture. Vitruvius’s three words still govern: the walls must hold, the people must gather, the eye must be glad.",
        opening: "The first eight weeks taught a house. Those drawings were the letters. This church is the first sentence they are asked to form.\n\nVitruvius named three tests a building must pass: firmitas, utilitas, venustas — strength, usefulness, and delight. The church of these last four weeks is judged by the same three words.\n\nAlexander van Millingen, whose Byzantine Churches in Constantinople lives on Project Gutenberg, wrote that these sanctuaries were built after a fashion which marks a distinct period in the history of art. The plan is often a cross set inside a square. Over the crossing rises a drum — a short tower, round or eight-sided — and on the drum sits the dome.\n\nA Greek or Constantinopolitan dome is a hemisphere. A Russian village church often wears an onion dome: a cup that swells and then tapers to a point, carrying a cross. Both are the same thought: the roof gathered into one quiet center.",
        kq: "Look at the church for one full minute without speaking. Where does the building become a dome? What sits under the dome to hold it?",
        activity: {
          label: "Notebook looking",
          text: "Cover the picture. Tell back every part you remember, from the ground up. Uncover and name what you missed.\n\nThen, on a notebook leaf, draw only the big shapes of the west front, stacked:\n• a rectangle for the body of the church\n• a smaller rectangle or octagon for the drum\n• a dome — hemisphere or onion — sitting on the drum\n• a cross on the point or the crown\n\nForm IA: Those four shapes, large and calm. Oral names.\nForm IIA: The same stack, plus a door in the middle of the west wall and two windows that match. Write the names: narthex (if you show a porch), nave, drum, dome."
        },
        disc: [
          "How is this front like the cottage elevation of Week 4? How is it different?",
          "Why does the dome want a drum beneath it, rather than sitting flat on the roof?",
          "What repeats — windows, arches, the two sides of the door — so the front stays courteous?"
        ],
        narration8: "Tell the church from the ground to the cross, naming the body, the drum, and the dome.",
        narration11: "Describe the west front as a stack of shapes. Use drum and dome. Say whether this dome is a hemisphere or an onion, and how you can tell.",
        vocab: ["nave", "drum", "dome", "onion dome", "west front", "firmitas", "utilitas", "venustas"],
        watchFor: "Children who draw the onion as a triangle sitting on the roof. The drum is the missing piece — a short tower that the dome can sit on.",
        digDeeper: "Read the opening pages of van Millingen, Byzantine Churches in Constantinople (Gutenberg #29077), on the types of church plan. One page is enough.",
        materials: "Pencil, notebook, the picture covered and uncovered",
        copywork: "These sanctuaries were constructed and beautified after a fashion which marks a distinct and important period in the history of art.",
        copySource: "Alexander van Millingen, Byzantine Churches in Constantinople. Project Gutenberg #29077.",
        resources: [
          { lbl: "van Millingen, Byzantine Churches in Constantinople", url: "https://www.gutenberg.org/ebooks/29077", note: "Living book for Form IIA browsing" },
          { lbl: "Holy Trinity Cathedral, Chicago", url: "https://commons.wikimedia.org/wiki/File:Holy_Trinity_Russian_Orthodox_Cathedral,_Leavitt_Street_and_Haddon_Avenue,_Ukrainian_Village,_Chicago,_IL_-_52522925581.jpg", note: "Public photograph of drum and onion dome" }
        ]
      },
      {
        id: "10.1",
        week: 10,
        type: "DRAWING",
        title: "Drum, Dome, and Cross",
        tagline: "The cupola is a study of its own before it crowns a church.",
        artist: "The Orthodox cupola",
        period: "Byzantium and Rus’",
        work: "Hemisphere and onion, each on a drum",
        workUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kazan_Cathedral_in_Moscow_-_onion_dome%2C_tholobate_and_kokoshniks.jpg/800px-Kazan_Cathedral_in_Moscow_-_onion_dome%2C_tholobate_and_kokoshniks.jpg",
        teacherPrep: "Two studies on one leaf. A compass is a gift if you have one; a jar lid will trace a circle. Show a three-bar Orthodox cross once, as a form to draw, not as a lecture.",
        opening: "Van Millingen notes that the drum of a dome may be low or tall, round or eight-sided, and that windows often pierce it so light falls into the crossing. The dome itself may spring almost from those window-heads.\n\nToday we draw the cupola twice — once as a hemisphere (the older Byzantine thought), once as an onion (the thought of the Russian village church). Both sit on a drum. Both finish with a cross. Year One’s church may wear either; the child will choose next week and keep that choice for the final elevation.",
        kq: "If you take the dome off, what shape is left standing? That leftover shape is the drum. Can you draw it so the dome has somewhere honest to sit?",
        activity: {
          label: "Notebook drawing",
          text: "On one leaf, two cupolas side by side, each about the height of your palm.\n\nLeft — Byzantine: a rectangle or a short octagon (the drum), two or three small arched windows in it, a semicircle sitting on top, a simple cross on the crown.\n\nRight — onion: the same drum, then a dome that swells wider than the drum and tapers to a point, like a flame that has been turned upside down and set gently on a cup. A three-bar cross on the point.\n\nForm IA: One of the two cupolas, drawn large.\nForm IIA: Both. Under each, one sentence: what the drum does, and what the dome does."
        },
        disc: [
          "Why must the dome be a little wider, at its fullest, than the wall it sits on — or at least as wide as the drum?",
          "What do the small windows in the drum give the people inside?",
          "Which dome will you choose for Year One’s church, and why does that shape please you?"
        ],
        narration8: "Tell how a drum and a dome fit together.",
        narration11: "Compare the hemisphere and the onion. What does each one ask of the drum beneath it?",
        vocab: ["cupola", "drum", "hemisphere", "onion dome", "tholobate"],
        watchFor: "Onions drawn as sharp triangles with no swell. Have the child draw a circle first, then pull the top to a point and let the sides bulge a little past the drum.",
        digDeeper: "Lethaby and Swainson, Sancta Sophia Constantinople (Gutenberg #66302) — look only at a plate of the great dome. Do not assign the argument.",
        materials: "Pencil, compass or jar lid, ruler, notebook",
        copywork: "The drum of the dome is pierced by windows, and as their arches and the dome spring at about the same level the heads of the windows impinge upon the dome’s surface.",
        copySource: "After van Millingen, Byzantine Churches in Constantinople. Project Gutenberg #29077.",
        resources: [
          { lbl: "van Millingen #29077", url: "https://www.gutenberg.org/ebooks/29077", note: "Drum and dome" },
          { lbl: "Lethaby, Sancta Sophia Constantinople", url: "https://www.gutenberg.org/ebooks/66302", note: "Plates of the great dome" }
        ]
      },
      {
        id: "11.1",
        week: 11,
        type: "MODEL",
        title: "A Paper Church",
        tagline: "Raise the drum off the page before you draw the final front.",
        artist: "T. A. Richardson",
        period: "1859",
        work: "The Art of Architectural Modelling in Paper — applied to a church",
        workUrl: null, // TODO: verified image URL needed
        teacherPrep: "Cardstock, scissors, glue. Adult help with cutting is fair. The thinking work is the net: four walls of one height, then a separate drum and a separate dome.",
        opening: "Richardson taught architects to cut walls from card so a design could be judged with a distinctness almost equal to the finished work. This week the model is not a cottage. It is the body of next week’s church.\n\nFour walls make the nave. A short tube or an eight-sided band of card is the drum. A dome can be a paper cone gently rounded, or a circle cut into a dart and gathered — good enough for a child. Set the drum on the roof-ridge or on a flat roof, and the dome on the drum. The model will tell you whether the dome looks lost or lordly before you spend the fair-copy elevation.",
        kq: "Hold the model at arm’s length. Does the dome sit over the middle of the west door, or has it wandered?",
        activity: {
          label: "Paper model",
          text: "Cut a strip of four walls, all the same height to the eaves, with a tab. Door on the west wall, two matching windows. Fold and glue the nave.\n\nMake a drum (a short band of card, round or eight-sided) and a dome of the shape chosen last week. Set them on the nave so the cupola rises over the middle.\n\nForm IA: Nave box and a simple dome resting on it.\nForm IIA: Nave, drum, dome, and a little porch or narthex on the west if the child wants one. Look straight at the west wall: that view is next week’s elevation."
        },
        disc: [
          "What did the model tell you that a flat sketch hid?",
          "If the dome sits behind the west wall, will the elevation still show it? (Yes — it rises above the body.)",
          "Will you keep this west door for the fair copy?"
        ],
        narration8: "Tell how the paper nave received its drum and dome.",
        narration11: "Explain the net of the church: walls of one height, a drum that can take a dome, a west door that must agree with the front you will draw.",
        vocab: ["nave", "narthex", "net", "model"],
        watchFor: "A dome glued flat to one wall like a hat on a forehead. It belongs on the roof, over the middle.",
        digDeeper: "Richardson’s introduction, Gutenberg #54340. Apply his idea of the model to the church, not his cottage plates.",
        materials: "Cardstock, scissors, glue stick, Week 10 cupola studies",
        copywork: "The utility of the Model, coupled with its beauty, is ample recommendation of the study.",
        copySource: "T. A. Richardson, The Art of Architectural Modelling in Paper (1859). Project Gutenberg #54340.",
        resources: [
          { lbl: "Richardson, Architectural Modelling in Paper", url: "https://www.gutenberg.org/ebooks/54340", note: "Public domain" }
        ]
      },
      {
        id: "12.1",
        week: 12,
        type: "DESIGN",
        title: "Year One · Elevation of an Orthodox Church",
        tagline: "The west front, with its drum and dome — the drawing this year was for.",
        artist: "The student",
        period: "Year One",
        work: "West elevation of a church with a dome",
        workUrl: null,
        teacherPrep: "Best paper of the year. The paper model from Week 11 stands on the table as a guide, not as a thing to copy line by line. Pin the finished elevation where a visitor can stand before it. Ask the visitor to point to the door, the drum, and the dome. If those three are found, the drawing has done its work.",
        opening: "Everything in Year One was practice for this leaf: the even line, the courteous front, the plan that agrees with the elevation, the path that vanishes, the window in a thick wall, the three words of Vitruvius, the drum that holds a dome.\n\nToday the child draws one west elevation of an Orthodox church with a dome. It is not Hagia Sophia and it is not a village copied stone for stone. It is the child’s own church, built from the shapes already learned, titled in the manner of old plates.",
        kq: "If a stranger stood in the road and looked only at your elevation, could that stranger find the door, and know that a dome crowns the house?",
        activity: {
          label: "Fair-copy elevation",
          text: "On one good sheet, a west elevation. Title: WEST ELEVATION OF AN ORTHODOX CHURCH · YEAR ONE · [CHILD’S NAME].\n\nRequired parts, from the ground up:\n1. Ground line.\n2. Body of the church — a calm rectangle. West door in the middle, with a frame and a step. Two windows that match.\n3. The roof line of the nave (a low gable or a quiet horizontal, as the model decided).\n4. The drum, centered over the door, with two or three small arched windows.\n5. The dome chosen in Week 10 — hemisphere or onion — sitting on the drum.\n6. A cross on the crown or the point.\n\nForm IA: Those six parts, large, with a ruler for the walls and door. Oral answers to Vitruvius: what holds the dome, who gathers inside, what makes the front glad.\n\nForm IIA: The same six parts to a written scale (example: ¼ inch = 1 foot). Optional: a small narthex porch, one side apse hinted at the edge, a second lesser cupola only if the first is already true. Written sentences:\n• Strength — What holds the dome?\n• Usefulness — Where do the people enter, and where does the light fall?\n• Delight — Why this dome, on this front?\n\nForm IIA also draws a simple plan on a second leaf, to the same written scale: outer walls, the west door, two matching windows, and a dashed circle marking where the drum and dome land."
        },
        disc: [
          "Is the drum centered over the west door, as the model promised?",
          "Does the dome sit on the drum, or float?",
          "What did you leave out on purpose, so the six required parts could be true?",
          "Does the dashed circle on the plan sit over the same center line as the dome on the elevation?"
        ],
        narration8: "Stand before your elevation and tell the church from the ground line to the cross.",
        narration11: "Write the title and the three Vitruvian sentences. Then describe the elevation as if a builder had asked you what to raise first, and what must stand exactly over the door.",
        vocab: ["west elevation", "drum", "dome", "firmitas", "utilitas", "venustas"],
        watchFor: "A pretty picture with no drum, or a dome off-center. Alignment is still courtesy. Extra onionettes before the main cupola is true will wait for Year Two. Watch also for a plan whose west door has drifted off the elevation’s center line.",
        digDeeper: "Copy one sentence from van Millingen or from Vitruvius onto the back of the sheet as a colophon. Year Two, if you keep this class, may add the plan of the cross-in-square, the iconostasis as an interior elevation, and a section through the dome.",
        materials: "Best paper, ruler, pencil, Week 10 studies, Week 11 model",
        copywork: "Firmitas, utilitas, venustas — strength, usefulness, and delight.",
        copySource: "After Vitruvius, The Ten Books on Architecture. Project Gutenberg #20239.",
        resources: [
          { lbl: "van Millingen, Byzantine Churches in Constantinople", url: "https://www.gutenberg.org/ebooks/29077", note: "Year One living book" },
          { lbl: "Vitruvius, Ten Books on Architecture", url: "https://www.gutenberg.org/ebooks/20239", note: "The three qualities" },
          { lbl: "Lethaby, Sancta Sophia Constantinople", url: "https://www.gutenberg.org/ebooks/66302", note: "For a parent who wants the great dome behind the child’s small one" }
        ]
      }
    ]
  }
]
