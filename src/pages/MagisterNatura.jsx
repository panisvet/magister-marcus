import { useState, useRef, useEffect } from "react";

// ─── Lesson Data ──────────────────────────────────────────────────────────────
const UNITS = [
  {
    id: "u1",
    title: "Natural History: The Living World",
    subtitle: "Weeks 1–7 · Insects, Spiders, Ecology",
    icon: "🪲",
    lessons: [
      {
        id: "1.1", week: 1, type: "OBSERVE",
        title: "The Six-Legged Test",
        tagline: "Before reading anything, go outside.",
        spine: null,
        opening: "Collect small creatures or images: bee, spider, pill bug, housefly, ladybug, centipede. Do not label them yet. Ask both students to sort them into groups and explain their rules for sorting.",
        activity: { label: "Hands-On", text: "Give each student a hand lens. Observe a live insect in a bug jar. Before consulting any book: count legs, identify body sections, note antennae and wings. Record raw observations only — no names yet." },
        narration8: "What did you observe? What are you uncertain about?",
        narration11: "Describe everything you observed. What one thing can you not yet explain?",
        journal8: "Draw the insect carefully. Label what you can. Write 2 sentences about what you noticed.",
        journal11: "Draw and label all visible structures. Write a paragraph. Note one thing you cannot explain yet.",
        vocab: ["observation", "exoskeleton", "segment", "antenna"],
        watchFor: "Students who rush the sketch. Require at least 3 minutes of looking before the pencil touches paper.",
        spineLink: null,
      },
      {
        id: "1.2", week: 1, type: "READ & NARRATE",
        title: "Fabre Defends the Fly",
        tagline: null,
        spine: "The Life of the Fly, Ch. I — The Harmas",
        spineLink: "https://www.gutenberg.org/files/3422/3422-h/3422-h.htm#link2HCH0001",
        teacherPrep: "Handbook of Nature Study, Part V introduction (pp. 300–310)",
        opening: null,
        activity: { label: "Classification Rule", text: "After reading, return to the sorted creatures. Present the insect rule: 3 body segments, 6 legs, usually wings. Re-sort using Fabre's precision." },
        narration8: "Tell me what makes an insect an insect.",
        narration11: "Describe Fabre's method of observation and explain how the insect classification rule works. (3–5 sentences)",
        journal8: null,
        journal11: null,
        vocab: ["entomology", "ethology", "specimen", "taxonomy"],
        watchFor: null,
        digDeeper: "Research the difference between Fabre's observational method and laboratory dissection. Which method produces more valuable knowledge? Defend your answer in a paragraph.",
      },
      {
        id: "1.3", week: 1, type: "RECORD",
        title: "Nature Journal — Insect Portrait",
        tagline: null,
        spine: null,
        opening: "Draw a complete insect diagram from observation or a careful photograph. Label: head, thorax, abdomen, 6 legs, antennae, compound eyes, wings (if present), exoskeleton.",
        activity: { label: "Biography", text: "Read aloud from Small Wonders (Matthew Clark Smith) — Fabre's childhood. Discuss: what did Fabre have that helped him become a great scientist?" },
        narration8: null,
        narration11: null,
        journal8: "Label each part with name and function.",
        journal11: "Label each part with name, function, and one question it raises.",
        vocab: ["thorax", "abdomen", "compound eye", "chitin"],
        watchFor: "Students who rush. Require 3 minutes of looking before drawing.",
      },
      {
        id: "1.5", week: 2, type: "READ & NARRATE",
        title: "Complete vs. Incomplete Metamorphosis",
        tagline: null,
        spine: "The Life of the Fly, Ch. XIV — The Bluebottle: The Laying",
        spineLink: "https://www.gutenberg.org/files/3422/3422-h/3422-h.htm#link2HCH0014",
        teacherPrep: "Handbook of Nature Study, Lesson 56 (The Butterfly)",
        opening: null,
        activity: { label: "Vocabulary", text: "Complete metamorphosis (holometabolism): egg → larva → pupa → adult. Examples: butterfly, fly, bee, beetle, ant.\n\nIncomplete metamorphosis (hemimetabolism): egg → nymph → adult. Examples: grasshopper, cricket, dragonfly, cicada." },
        narration8: "What are the stages of complete metamorphosis? Of incomplete?",
        narration11: "Compare complete and incomplete metamorphosis. Give two examples of each. Explain one advantage each strategy might offer.",
        vocab: ["holometabolism", "hemimetabolism", "instar", "nymph", "chrysalis"],
        watchFor: "Students who confuse chrysalis (butterfly) with cocoon (moth). Butterflies make a chrysalis of hardened protein. Moths spin a cocoon of silk.",
        digDeeper: "Inside the chrysalis, caterpillar tissues largely dissolve (histolysis), then reorganize (histogenesis). Research what actually happens. Does knowing this change how you think about metamorphosis?",
        secondSpine: "The Insect Folk — The Grasshopper Tribes",
        secondSpineLink: "https://www.gutenberg.org/files/18790/18790-h/18790-h.htm",
      },
      {
        id: "1.8", week: 3, type: "READ & NARRATE",
        title: "Bees, Ants, and the Question of Instinct",
        tagline: null,
        spine: "The Fairy-Land of Science, Lectures IX & X — Bees in the Hive",
        spineLink: "https://www.gutenberg.org/cache/epub/5726/pg5726-images.html",
        teacherPrep: "Handbook of Nature Study, Lesson 62 (The Honey Bee)",
        opening: null,
        activity: { label: "Caste System", text: "Queen: lays eggs; 1 per hive; lives 3–5 years.\nWorkers: sterile females; all other jobs; live 6 weeks in summer.\nDrones: males; mate with new queens; expelled before winter." },
        narration8: "What are the three kinds of bees in a hive? What does each one do?",
        narration11: "Describe the difference between instinct and intelligence as Fabre understands it. Use the bee or ant as your example.",
        vocab: ["queen", "worker", "drone", "instinct", "pheromone", "waggle dance"],
        watchFor: null,
        digDeeper: "Research Karl von Frisch, who decoded the waggle dance in the 1940s. What would Fabre have thought of this discovery?",
        secondSpine: "The Story-Book of Science — Uncle Paul and the Ants",
        secondSpineLink: "https://www.gutenberg.org/files/48451/48451-h/48451-h.htm",
      },
      {
        id: "1.11", week: 4, type: "READ & NARRATE",
        title: "Fabre Watches a Spider",
        tagline: null,
        spine: "The Life of the Spider, Ch. I — The Black-Bellied Tarantula",
        spineLink: "https://www.gutenberg.org/files/1887/1887-h/1887-h.htm#link2HCH0001",
        teacherPrep: "Handbook of Nature Study, spider sections",
        opening: null,
        activity: { label: "Key Distinction", text: "Radius threads are dry — the spider walks on these. Capture spiral threads are sticky — that is what catches prey. The spider always knows which is which." },
        narration8: "How does a spider build its web? What are the two kinds of thread?",
        narration11: "Describe the web-building sequence in order. Explain why the spider needs two different kinds of silk and how it avoids its own trap.",
        vocab: ["arachnid", "cephalothorax", "spinneret", "orb web", "radii", "capture spiral"],
        watchFor: null,
        digDeeper: "Spider silk is stronger by weight than steel and more elastic than Kevlar. Research why synthetic spider silk has been so difficult to manufacture.",
        secondSpine: "The Life of the Spider, Ch. III — The Geometry of the Web",
        secondSpineLink: "https://www.gutenberg.org/files/1887/1887-h/1887-h.htm#link2HCH0003",
      },
      {
        id: "1.14", week: 5, type: "READ & NARRATE",
        title: "The Food Web: Who Eats Whom?",
        tagline: null,
        spine: "Wild Animals I Have Known — Raggylug",
        spineLink: "https://www.gutenberg.org/files/3031/3031-h/3031-h.htm",
        teacherPrep: "Review the food web material in HNS animal sections",
        opening: null,
        activity: { label: "Trophic Cascade", text: "When wolves were removed from Yellowstone, elk overgrazed riverbanks. Trees disappeared. Songbirds declined. Rivers changed course. When wolves returned, all of this reversed. This is called a trophic cascade." },
        narration8: "Give two examples of how animals depend on each other. What happens when one is removed?",
        narration11: "Explain what a trophic cascade is using the Yellowstone example. What does this tell us about the importance of predators?",
        vocab: ["producer", "consumer", "decomposer", "predator", "prey", "food web", "trophic cascade"],
        watchFor: null,
        digDeeper: "Research the actual 1995 wolf reintroduction to Yellowstone. Which ecological changes surprised scientists the most?",
      },
    ],
  },
  {
    id: "u2",
    title: "Natural History: Plants and Seeds",
    subtitle: "Weeks 8–11 · Photosynthesis, Dispersal, Diversity",
    icon: "🌿",
    lessons: [
      {
        id: "2.1", week: 8, type: "OBSERVE",
        title: "The Seed's Secret",
        tagline: "Soak bean seeds overnight before this lesson.",
        spine: null,
        opening: "Set a dry bean seed and a smooth pebble side by side. Ask: What is the same? What is different? Then let each student split open their soaked seed. Look inside with a hand lens.",
        activity: { label: "What to Find", text: "Seed coat: protection during dormancy.\nCotyledons: food storage for the first days of growth.\nEmbryo: the tiny curved future plant — you can see the radicle (root tip) and plumule (shoot)." },
        narration8: "What are the three parts inside a bean seed? What is each one for?",
        narration11: "What triggers germination? Why does the seed need cotyledons? What would happen without them?",
        journal8: "Draw the split bean seed. Label: seed coat, cotyledon, embryo.",
        journal11: "Draw and label all three structures with name and function. Write: A seed is not a beginning but a pause. Explain this.",
        vocab: ["seed", "cotyledon", "embryo", "radicle", "plumule", "germination"],
        watchFor: "Students who split the seed roughly and miss the embryo. The embryo is tiny and easy to destroy. Slow them down.",
      },
      {
        id: "2.2", week: 8, type: "READ & NARRATE",
        title: "Buckley's Primrose and Morley's Travelers",
        tagline: null,
        spine: "The Fairy-Land of Science, Lecture VII — The Life of a Primrose",
        spineLink: "https://www.gutenberg.org/cache/epub/5726/pg5726-images.html",
        teacherPrep: "Handbook of Nature Study, Lesson 46 (The Apple Tree) and Part I introduction",
        opening: null,
        activity: { label: "Key Idea", text: "A flower is not beautiful for our sake — it is beautiful for the bee's sake. Every petal, every color, every scent is a specific solution to a specific problem: how to move pollen from one plant to another." },
        narration8: "Trace a flower's life from seed to seed. What must happen at each stage?",
        narration11: "Explain why flowers are colorful and fragrant. Then explain what Morley means when she says the plant world is topsy-turvy — children wander but parents stand still.",
        vocab: ["pollination", "fertilization", "ovary", "ovule", "seed dispersal", "producer"],
        watchFor: "The distinction between beauty being for the bee not for us is worth dwelling on. Do not rush past it.",
        secondSpine: "Little Wanderers — Why Plants Travel",
        secondSpineLink: "https://www.gutenberg.org/files/61295/61295-h/61295-h.htm",
      },
      {
        id: "2.5", week: 9, type: "READ & NARRATE",
        title: "Seeds That Cling, Float, and Explode",
        tagline: null,
        spine: "Little Wanderers — Burdocks",
        spineLink: "https://www.gutenberg.org/files/61295/61295-h/61295-h.htm",
        teacherPrep: "HNS introductory plant sections",
        opening: "Set out seed types: burdock burrs, berries, maple samaras, dried bean pods. Ask students to sort by how they think each one travels. Write categories on the board.",
        activity: { label: "Classification", text: "Wind: pappus/parachute, wings, tumbling.\nWater: buoyant, waterproof coat.\nAnimal — external: burrs, hooks, sticky.\nAnimal — internal: tasty fruit, hard pit passes through.\nMechanical: spring-loaded pods, explosive capsules." },
        narration8: "Tell me three ways seeds travel. Give one example of each.",
        narration11: "Classify seed dispersal strategies by mechanism. Give two examples of each type and explain what structural features enable each strategy.",
        vocab: ["akene", "pappus", "samara", "dispersal", "biomimicry"],
        watchFor: "Students who understand that seeds travel but not why. Return to: what happens if every seed falls directly below the parent?",
        digDeeper: "Velcro was invented after George de Mestral examined burdock burrs under a microscope in 1948. Research two other examples of biomimicry. What does this tell us about the relationship between natural history and technology?",
        secondSpine: "Little Wanderers — Seeds that are Shot Away",
        secondSpineLink: "https://www.gutenberg.org/files/61295/61295-h/61295-h.htm",
      },
      {
        id: "2.7", week: 10, type: "READ & NARRATE",
        title: "The Sunbeam's Work",
        tagline: "Set up the Elodea experiment at the start of this lesson.",
        spine: "The Fairy-Land of Science, Lecture II — Sunbeams and the Work They Do",
        spineLink: "https://www.gutenberg.org/cache/epub/5726/pg5726-images.html",
        teacherPrep: "HNS plant physiology sections",
        opening: "Place a sprig of Elodea in a clear jar of water on a sunny windowsill. Do not explain what will happen. Ask: We have talked about what plants need. But what are they making with those things?",
        activity: { label: "Photosynthesis", text: "Carbon dioxide + water + sunlight → sugar + oxygen.\n\nThe plant takes in CO₂ through stomata, pulls water up from roots, and uses chlorophyll to combine them into glucose. Oxygen is the byproduct. Check the Elodea — the bubbles on the leaves are oxygen being exhaled." },
        narration8: "What does a plant need to make food? What does it produce? Where does the oxygen in the air come from?",
        narration11: "Explain photosynthesis in your own words. Then explain what Buckley means when she says we are all living on stored sunlight. Is this literally true?",
        vocab: ["photosynthesis", "chlorophyll", "chloroplast", "stomata", "glucose", "carbon dioxide"],
        watchFor: "Students who can say the equation but not explain it. Test: where does the carbon in a tree trunk come from? (From the air.) Almost everyone is surprised.",
        digDeeper: "Photosynthesis and respiration run the same chemistry in opposite directions. Draw a diagram showing the complete carbon cycle. What would happen to Earth's atmosphere if all plants disappeared tomorrow?",
      },
    ],
  },
];

// ─── System prompt ─────────────────────────────────────────────────────────────
function buildSystemPrompt(lesson, age) {
  return `You are Magister Natura, a classical science tutor in the tradition of Jean-Henri Fabre and Arabella Buckley. You are guiding a ${age === "8" ? "young student of about 8 years old" : "student of about 11 years old"} through a lesson on "${lesson.title}".

Your manner is warm, precise, and genuinely curious — you model the habit of careful observation before naming, description before explanation. You love the particular before the general. You are never condescending, never vague.

Current lesson context:
- Unit: ${UNITS.find(u => u.lessons.find(l => l.id === lesson.id))?.title || ""}
- Lesson: ${lesson.title}
- Type: ${lesson.type}
- Key vocabulary: ${lesson.vocab?.join(", ") || "none specified"}
- Narration focus (Age ${age}): ${age === "8" ? lesson.narration8 : lesson.narration11}

Your roles in this lesson:
1. Ask Socratic questions that draw out what the student already noticed
2. Gently correct errors without lecturing — ask a question that leads them to the right answer
3. Affirm careful observations specifically ("Good — you noticed the legs attach to the thorax, not the abdomen. That is exactly right.")
4. If the student gives a narration, score it mentally (1–4) and give a specific, honest response
5. If the student is stuck, give them the smallest hint that will get them moving again

When a student says "I'm ready to narrate" or "narrate" or "ready", prompt them with the age-appropriate narration question for this lesson.

Never:
- Use bullet lists in your responses (speak naturally)
- Give long lectures unprompted
- Praise vaguely ("Great job!")
- Skip past a misconception to be polite

Always:
- Keep responses under 120 words unless the student has written a long narration that deserves detailed feedback
- End with a question or an invitation to continue when the conversation is going well
- Match the student's energy — if they are excited, be excited`;
}

// ─── Styles ────────────────────────────────────────────────────────────────────
const S = {
  page: {
    minHeight: "100vh",
    background: "var(--bg, #0e0b07)",
    color: "var(--parch, #f7edcc)",
    fontFamily: "'Crimson Pro', 'IM Fell English', Georgia, serif",
    display: "flex",
    flexDirection: "column",
  },
  topBar: {
    background: "#100d08",
    borderBottom: "1px solid #2a2010",
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
  },
  topBarTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "18px",
    color: "var(--gold, #c9902a)",
    letterSpacing: "1px",
  },
  topBarSub: {
    fontSize: "12px",
    color: "#7a6a4a",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  body: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  // ── Left panel ──
  leftPanel: {
    width: "300px",
    flexShrink: 0,
    background: "#0a0806",
    borderRight: "1px solid #2a2010",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  unitPicker: {
    padding: "12px",
    borderBottom: "1px solid #2a2010",
    flexShrink: 0,
  },
  unitBtn: (active) => ({
    width: "100%",
    textAlign: "left",
    padding: "8px 12px",
    marginBottom: "4px",
    background: active ? "#1e1608" : "transparent",
    border: `1px solid ${active ? "#c9902a" : "#2a2010"}`,
    borderRadius: "4px",
    color: active ? "var(--gold, #c9902a)" : "#7a6a4a",
    cursor: "pointer",
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: "13px",
    lineHeight: 1.4,
  }),
  unitBtnIcon: {
    marginRight: "8px",
    fontSize: "14px",
  },
  lessonList: {
    flex: 1,
    overflowY: "auto",
    padding: "8px",
  },
  lessonBtn: (active, type) => {
    const typeColor = type === "OBSERVE" ? "#2d5a27" : type === "READ & NARRATE" ? "#4a3010" : "#1a2a4a";
    return {
      width: "100%",
      textAlign: "left",
      padding: "8px 10px",
      marginBottom: "3px",
      background: active ? typeColor : "transparent",
      border: `1px solid ${active ? "transparent" : "#2a2010"}`,
      borderLeft: `3px solid ${active ? "var(--gold2, #e8b84b)" : typeColor}`,
      borderRadius: "0 3px 3px 0",
      color: active ? "#f7edcc" : "#6a5a3a",
      cursor: "pointer",
      fontFamily: "'Crimson Pro', Georgia, serif",
      fontSize: "12px",
      lineHeight: 1.4,
    };
  },
  lessonBtnType: {
    fontSize: "9px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "2px",
    opacity: 0.7,
  },
  // ── Main area ──
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  // Lesson card header
  lessonHeader: (typeColor) => ({
    background: typeColor,
    padding: "16px 24px",
    borderBottom: "2px solid rgba(0,0,0,0.4)",
    flexShrink: 0,
  }),
  lessonMeta: {
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    opacity: 0.7,
    marginBottom: "4px",
    fontFamily: "'Cinzel', serif",
  },
  lessonTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "20px",
    fontWeight: "normal",
    color: "#f7edcc",
  },
  lessonTagline: {
    fontSize: "13px",
    fontStyle: "italic",
    opacity: 0.8,
    marginTop: "3px",
    color: "#f7edcc",
  },
  // Lesson info + chat split
  contentArea: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
  },
  lessonInfo: {
    width: "320px",
    flexShrink: 0,
    borderRight: "1px solid #2a2010",
    overflowY: "auto",
    padding: "16px",
    background: "#0c0906",
  },
  infoCard: {
    background: "#100d08",
    border: "1px solid #2a2010",
    borderRadius: "4px",
    marginBottom: "12px",
    overflow: "hidden",
  },
  infoCardHead: (bg) => ({
    background: bg || "#1e1608",
    padding: "5px 10px",
    fontSize: "9px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "var(--gold2, #e8b84b)",
    fontFamily: "'Cinzel', serif",
  }),
  infoCardBody: {
    padding: "10px 12px",
    fontSize: "12px",
    lineHeight: "1.7",
    color: "#c8b48a",
  },
  spineLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    background: "#1a3a18",
    color: "#9aaf7a",
    textDecoration: "none",
    padding: "4px 10px",
    borderRadius: "3px",
    fontSize: "11px",
    border: "1px solid #2d5a27",
    marginTop: "6px",
    fontFamily: "'Crimson Pro', serif",
  },
  vocabChip: {
    display: "inline-block",
    background: "#1e1608",
    border: "1px solid #3a2a10",
    borderRadius: "3px",
    padding: "2px 8px",
    fontSize: "11px",
    color: "#c9902a",
    fontStyle: "italic",
    margin: "2px",
  },
  ageBadge: (a) => ({
    display: "inline-block",
    fontSize: "9px",
    padding: "2px 7px",
    borderRadius: "10px",
    marginRight: "6px",
    background: a === "8" ? "#1a3a14" : "#0a1a3a",
    color: a === "8" ? "#9aaf7a" : "#6a9acf",
    border: `1px solid ${a === "8" ? "#2d5a27" : "#1a3a6a"}`,
    letterSpacing: "1px",
    fontFamily: "'Cinzel', serif",
  }),
  // ── Chat ──
  chatArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatControls: {
    padding: "10px 16px",
    borderBottom: "1px solid #2a2010",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
    background: "#0c0906",
  },
  agePill: (active, a) => ({
    padding: "4px 14px",
    borderRadius: "16px",
    border: "1px solid",
    borderColor: active ? (a === "8" ? "#2d5a27" : "#1a3a6a") : "#3a2a10",
    background: active ? (a === "8" ? "#1a3a14" : "#0a1a3a") : "transparent",
    color: active ? (a === "8" ? "#9aaf7a" : "#6a9acf") : "#5a4a2a",
    cursor: "pointer",
    fontFamily: "'Crimson Pro', serif",
    fontSize: "12px",
  }),
  ageLabel: {
    fontSize: "10px",
    color: "#5a4a2a",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontFamily: "'Cinzel', serif",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  msgUser: {
    alignSelf: "flex-end",
    background: "#1e1608",
    border: "1px solid #3a2a10",
    borderRadius: "12px 12px 2px 12px",
    padding: "10px 14px",
    maxWidth: "75%",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#f7edcc",
  },
  msgAssistant: {
    alignSelf: "flex-start",
    background: "#0c1408",
    border: "1px solid #2a3a18",
    borderRadius: "2px 12px 12px 12px",
    padding: "10px 14px",
    maxWidth: "80%",
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#c8d8b0",
  },
  msgName: {
    fontSize: "9px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "5px",
    fontFamily: "'Cinzel', serif",
    color: "var(--gold, #c9902a)",
  },
  inputRow: {
    padding: "12px 16px",
    borderTop: "1px solid #2a2010",
    display: "flex",
    gap: "8px",
    background: "#0a0806",
    flexShrink: 0,
  },
  textarea: {
    flex: 1,
    background: "#100d08",
    border: "1px solid #3a2a10",
    borderRadius: "6px",
    padding: "10px 12px",
    color: "#f7edcc",
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: "14px",
    lineHeight: "1.5",
    resize: "none",
    minHeight: "52px",
    maxHeight: "120px",
    outline: "none",
  },
  sendBtn: (loading) => ({
    padding: "10px 20px",
    background: loading ? "#2a1a08" : "var(--gold, #c9902a)",
    border: "none",
    borderRadius: "6px",
    color: loading ? "#7a5a2a" : "#1e0e00",
    cursor: loading ? "default" : "pointer",
    fontFamily: "'Cinzel', serif",
    fontSize: "12px",
    letterSpacing: "0.5px",
    alignSelf: "flex-end",
    transition: "background 0.15s",
  }),
  // Empty state
  emptyState: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#3a2a10",
    gap: "12px",
  },
  emptyIcon: {
    fontSize: "48px",
    opacity: 0.4,
  },
  emptyText: {
    fontFamily: "'Cinzel', serif",
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#4a3a1a",
  },
};

const TYPE_COLOR = {
  "OBSERVE": "#0d2008",
  "READ & NARRATE": "#1a0e04",
  "RECORD": "#04080d",
};

// ─── Component ─────────────────────────────────────────────────────────────────
export default function MagisterNatura() {
  const [activeUnit, setActiveUnit] = useState(UNITS[0]);
  const [activeLesson, setActiveLesson] = useState(null);
  const [age, setAge] = useState("8");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function selectLesson(lesson) {
    setActiveLesson(lesson);
    setMessages([
      {
        role: "assistant",
        content: `Welcome to Lesson ${lesson.id}: ${lesson.title}.\n\nBefore we begin — what do you already know or think about this topic? Or, if you are ready to start, tell me what you observed or what question is on your mind.`,
      },
    ]);
    setInput("");
  }

  async function send() {
    if (!input.trim() || loading || !activeLesson) return;
    const userMsg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: buildSystemPrompt(activeLesson, age),
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const text = data.content?.find((b) => b.type === "text")?.text || "I could not form a response. Please try again.";
      setMessages([...newMessages, { role: "assistant", content: text }]);
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong connecting to Magister Natura. Please try again." }]);
    }
    setLoading(false);
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  const allLessons = activeUnit.lessons;

  return (
    <div style={S.page}>
      {/* Top bar */}
      <div style={S.topBar}>
        <div>
          <div style={S.topBarSub}>Schola Domestica</div>
          <div style={S.topBarTitle}>MAGISTER NATURA</div>
        </div>
        <div style={{ fontSize: "12px", color: "#5a4a2a", fontStyle: "italic", marginLeft: "8px" }}>
          Natural History &amp; Science
        </div>
      </div>

      <div style={S.body}>
        {/* Left sidebar */}
        <div style={S.leftPanel}>
          <div style={S.unitPicker}>
            {UNITS.map((u) => (
              <button key={u.id} style={S.unitBtn(u.id === activeUnit.id)}
                onClick={() => { setActiveUnit(u); setActiveLesson(null); }}>
                <span style={S.unitBtnIcon}>{u.icon}</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "0.5px" }}>
                  {u.title}
                </span>
                <div style={{ fontSize: "10px", color: "#5a4a2a", marginTop: "2px" }}>{u.subtitle}</div>
              </button>
            ))}
          </div>

          <div style={S.lessonList}>
            {allLessons.map((lesson) => (
              <button key={lesson.id}
                style={S.lessonBtn(activeLesson?.id === lesson.id, lesson.type)}
                onClick={() => selectLesson(lesson)}>
                <div style={S.lessonBtnType}>{lesson.type} · {lesson.id}</div>
                <div>{lesson.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={S.main}>
          {!activeLesson ? (
            <div style={S.emptyState}>
              <div style={S.emptyIcon}>🌿</div>
              <div style={S.emptyText}>Select a lesson to begin</div>
              <div style={{ fontSize: "12px", color: "#3a2a10", fontStyle: "italic" }}>
                {activeUnit.title}
              </div>
            </div>
          ) : (
            <>
              {/* Lesson header */}
              <div style={S.lessonHeader(TYPE_COLOR[activeLesson.type] || "#0c0906")}>
                <div style={S.lessonMeta}>
                  {activeLesson.type} · Lesson {activeLesson.id} · Week {activeLesson.week}
                </div>
                <div style={S.lessonTitle}>{activeLesson.title}</div>
                {activeLesson.tagline && (
                  <div style={S.lessonTagline}>{activeLesson.tagline}</div>
                )}
              </div>

              <div style={S.contentArea}>
                {/* Lesson info panel */}
                <div style={S.lessonInfo}>
                  {/* Teacher prep */}
                  {activeLesson.teacherPrep && (
                    <div style={S.infoCard}>
                      <div style={S.infoCardHead("#1a0e04")}>Teacher Preparation</div>
                      <div style={{ ...S.infoCardBody, color: "#8a7a5a", fontStyle: "italic" }}>
                        {activeLesson.teacherPrep}
                      </div>
                    </div>
                  )}

                  {/* Opening */}
                  {activeLesson.opening && (
                    <div style={S.infoCard}>
                      <div style={S.infoCardHead()}>Opening</div>
                      <div style={S.infoCardBody}>{activeLesson.opening}</div>
                    </div>
                  )}

                  {/* Activity */}
                  {activeLesson.activity && (
                    <div style={S.infoCard}>
                      <div style={S.infoCardHead()}>{activeLesson.activity.label}</div>
                      <div style={{ ...S.infoCardBody, whiteSpace: "pre-line" }}>
                        {activeLesson.activity.text}
                      </div>
                    </div>
                  )}

                  {/* Spine links */}
                  {activeLesson.spine && (
                    <div style={S.infoCard}>
                      <div style={S.infoCardHead("#0d1a08")}>Read Aloud</div>
                      <div style={S.infoCardBody}>
                        <div style={{ fontStyle: "italic", marginBottom: "6px" }}>
                          {activeLesson.spine}
                        </div>
                        {activeLesson.spineLink && (
                          <a href={activeLesson.spineLink} target="_blank" rel="noopener noreferrer"
                            style={S.spineLink}>
                            📖 Open in Gutenberg
                          </a>
                        )}
                        {activeLesson.secondSpine && (
                          <>
                            <div style={{ fontStyle: "italic", marginTop: "10px", marginBottom: "6px" }}>
                              {activeLesson.secondSpine}
                            </div>
                            <a href={activeLesson.secondSpineLink} target="_blank" rel="noopener noreferrer"
                              style={S.spineLink}>
                              📖 Open in Gutenberg
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Narration prompts */}
                  <div style={S.infoCard}>
                    <div style={S.infoCardHead()}>Narration Prompts</div>
                    <div style={S.infoCardBody}>
                      {activeLesson.narration8 && (
                        <div style={{ marginBottom: "8px" }}>
                          <span style={S.ageBadge("8")}>Age 8</span>
                          <span style={{ fontStyle: "italic" }}>{activeLesson.narration8}</span>
                        </div>
                      )}
                      {activeLesson.narration11 && (
                        <div>
                          <span style={S.ageBadge("11")}>Age 11</span>
                          <span style={{ fontStyle: "italic" }}>{activeLesson.narration11}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Journal */}
                  {(activeLesson.journal8 || activeLesson.journal11) && (
                    <div style={S.infoCard}>
                      <div style={S.infoCardHead()}>Nature Journal</div>
                      <div style={S.infoCardBody}>
                        {activeLesson.journal8 && (
                          <div style={{ marginBottom: "8px" }}>
                            <span style={S.ageBadge("8")}>Age 8</span>
                            {activeLesson.journal8}
                          </div>
                        )}
                        {activeLesson.journal11 && (
                          <div>
                            <span style={S.ageBadge("11")}>Age 11</span>
                            {activeLesson.journal11}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Vocab */}
                  {activeLesson.vocab?.length > 0 && (
                    <div style={S.infoCard}>
                      <div style={S.infoCardHead()}>Vocabulary</div>
                      <div style={{ padding: "8px 10px" }}>
                        {activeLesson.vocab.map((v) => (
                          <span key={v} style={S.vocabChip}>{v}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Watch For / Dig Deeper */}
                  {(activeLesson.watchFor || activeLesson.digDeeper) && (
                    <div style={S.infoCard}>
                      <div style={S.infoCardHead("#1a0e04")}>Teacher Notes</div>
                      <div style={S.infoCardBody}>
                        {activeLesson.watchFor && (
                          <div style={{ marginBottom: activeLesson.digDeeper ? "8px" : 0 }}>
                            <div style={{ fontSize: "9px", color: "#8a5a1a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px", fontFamily: "'Cinzel', serif" }}>Watch For</div>
                            {activeLesson.watchFor}
                          </div>
                        )}
                        {activeLesson.digDeeper && (
                          <div>
                            <div style={{ fontSize: "9px", color: "#1a5a8a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px", fontFamily: "'Cinzel', serif" }}>Dig Deeper · Age 11</div>
                            {activeLesson.digDeeper}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat */}
                <div style={S.chatArea}>
                  <div style={S.chatControls}>
                    <span style={S.ageLabel}>Student:</span>
                    <button style={S.agePill(age === "8", "8")} onClick={() => setAge("8")}>Age 8</button>
                    <button style={S.agePill(age === "11", "11")} onClick={() => setAge("11")}>Age 11</button>
                    <span style={{ fontSize: "11px", color: "#4a3a1a", fontStyle: "italic", marginLeft: "8px" }}>
                      Magister Natura will adjust difficulty accordingly
                    </span>
                  </div>

                  <div style={S.messages}>
                    {messages.map((msg, i) => (
                      <div key={i} style={msg.role === "user" ? S.msgUser : S.msgAssistant}>
                        <div style={S.msgName}>
                          {msg.role === "user" ? "Student" : "Magister Natura"}
                        </div>
                        <div style={{ whiteSpace: "pre-wrap" }}>{msg.content}</div>
                      </div>
                    ))}
                    {loading && (
                      <div style={S.msgAssistant}>
                        <div style={S.msgName}>Magister Natura</div>
                        <div style={{ color: "#4a6a3a", fontStyle: "italic", fontSize: "12px" }}>
                          Considering…
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div style={S.inputRow}>
                    <textarea
                      ref={textareaRef}
                      style={S.textarea}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      placeholder={`Speak to Magister Natura… (Enter to send, Shift+Enter for new line)`}
                      rows={2}
                    />
                    <button style={S.sendBtn(loading)} onClick={send} disabled={loading}>
                      {loading ? "…" : "Send"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
