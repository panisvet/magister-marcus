// ─────────────────────────────────────────────────────────────────────────────
// src/data/closingExercises.js
//
// Unit-staged 3-minute closing exercises for Schola Cantorum Domestica.
// One object per unit. Keyed by unit id (matches UNITS[n].id).
//
// Structure per entry:
//   title        — short name for the exercise
//   duration     — always "3 min"
//   description  — what it is and why it belongs to this unit
//   steps        — array of strings, each a teacher-facing instruction
//   formIA       — differentiation note for Form I A (age 8)
//   formIIA      — differentiation note for Form II A (age 11)
// ─────────────────────────────────────────────────────────────────────────────

export const CLOSING_EXERCISES = {

  // ── Unit 1: Do Is Home ────────────────────────────────────────────────────
  "Y1U1": {
    title: "Find Do and Sing Home",
    duration: "3 min",
    description: "Every Unit 1 session closes the same way: the children find Do by ear, sing the five-note scale, and return to Do. The repetition is the point. By the end of six weeks this sequence is effortless — it has become the musical equivalent of the Sign of the Cross.",
    steps: [
      "Play middle C on the piano. Hold it for four beats. Say nothing.",
      "Ask: \"What note is this?\" Wait for the answer: Do.",
      "Say: \"Find it in your voice.\" Children hum or sing Do quietly. Play C again to confirm.",
      "Sing the five-note scale together: Do – Re – Mi – Fa – Sol. One note per beat, steady.",
      "Reverse: Sol – Fa – Mi – Re – Do. Arrive on Do and hold it for two beats.",
      "Let the note fade. Say: \"Same Do next time.\"",
    ],
    formIA: "Form IA's job is to match Do on the piano and hold it steadily. If he drifts in pitch during the scale, do not correct — simply sing Do clearly at the end and let him match it. The habit of returning to Do is more important than perfect pitch this week.",
    formIIA: "After the scale, ask Form IIA to sing Do without the piano playing — from memory alone. Play C to confirm. Over six weeks this develops the internal pitch anchor that is the foundation of all sight-singing.",
  },

  // ── Unit 2: Steps and Skips ───────────────────────────────────────────────
  "Y1U2": {
    title: "Interval Echo — Steps and Skips",
    duration: "3 min",
    description: "Unit 2 introduces the full octave scale and the difference between stepwise motion (seconds) and leaps (thirds and beyond). The closing game trains the ear to hear the difference instantly. Fast, gamelike, no dwelling on errors.",
    steps: [
      "Say: \"Last question of the day. Step or skip?\"",
      "Sing two notes on solfège. Children call out: step (one note apart) or skip (more than one note apart).",
      "Round 1 — obvious: Do-Re (step), Do-Mi (skip), Sol-La (step), Do-Sol (skip). Four pairs.",
      "Round 2 — trickier: Mi-Fa (step — the small half-step), Ti-Do (step), Re-Sol (skip), La-Mi (skip). Four pairs.",
      "Final pair — teacher's choice. Children answer, then immediately sing the scale from Do to Do together once.",
      "Find Do. Hold it. Say: \"Steps and skips — that's all melody is.\"",
    ],
    formIA: "Form IA answers step or skip by ear only. If uncertain, he can echo the two notes himself before answering — hearing himself sing them helps. Do not require him to name the interval by number.",
    formIIA: "Form IIA names the interval by size after calling step or skip: 'Skip — that's a third.' Or: 'Step — minor second, the half step.' If not yet confident with interval names, step/skip is sufficient.",
  },

  // ── Unit 3: Minor — The Other Side of the Door ────────────────────────────
  "Y1U3": {
    title: "Find La — The Minor Anchor",
    duration: "3 min",
    description: "The mirror of the Unit 1 closing. Instead of finding Do, the children find La — the tonal center of A natural minor. Two homes, two anchors, one voice that knows both. By the end of Unit 3 both children should be able to find La from a single C played on the piano.",
    steps: [
      "Play middle C on the piano. Hold it.",
      "Say: \"That's Do. Count up to La from there.\" Sing slowly: Do – Re – Mi – Fa – Sol – La. Stop on La.",
      "Hold La together for four beats.",
      "Sing the A natural minor scale ascending: La – Ti – Do – Re – Mi – Fa – Sol – La.",
      "Descend: La – Sol – Fa – Mi – Re – Do – Ti – La. Arrive on La and hold.",
      "Let it fade. Say: \"Two homes. Do and La. Both are ours.\"",
    ],
    formIA: "If Form IA cannot reliably find La by counting from Do, play A on the piano at the start rather than C. Over the six weeks, gradually shift: play C and let him count up. Goal by Week 18: find La from C without assistance.",
    formIIA: "By Week 16, ask Form IIA to find La without the piano at all — from the silence at the end of the lesson. He imagines Do, counts up internally, and sings La. Play C to confirm.",
  },

  // ── Unit 4: New Keys, New Landscapes ─────────────────────────────────────
  "Y1U4": {
    title: "Name the Key — Three Colors",
    duration: "3 min",
    description: "The three-color test at speed: teacher plays a scale, children name it. C major (neutral), G major (bright — one sharp), F major (warm — one flat), A minor. Ears only, no notation. By Week 27 both children should identify all four by the sound of the first four notes alone.",
    steps: [
      "Say: \"Name the key. Ears only.\"",
      "Play one of four scales on the piano — C major, G major, F major, or A minor — without naming it.",
      "Children call out the key name (Form IIA) or color/character (Form IA: neutral / bright / warm / minor).",
      "Confirm and play the next. Four scales total, mixed order, no repeats.",
      "Final round: play just the first three notes of a scale. Can they identify from three notes?",
      "End by playing Do (C) and singing it together once. \"Same Do. Different neighborhoods. All ours.\"",
    ],
    formIA: "Form IA uses color vocabulary: neutral (C major), bright (G major), warm (F major), minor (A minor). If he mixes up bright and warm, play them back to back — the F# in G major is distinctly brighter than the B♭ in F major.",
    formIIA: "Form IIA uses key names and, in the later weeks, identifies the key signature: 'G major — one sharp on Fa.' After the closing game, ask him to sing the starting pitch of the next lesson's key from memory.",
  },

  // ── Unit 5: First Synthesis ───────────────────────────────────────────────
  "Y1U5": {
    title: "One Phrase, Offered",
    duration: "3 min",
    description: "Every Unit 5 session closes with a single phrase of the synthesis piece — sung a cappella, from memory, as an offering rather than a drill. The phrase rotates: early weeks, phrase 1; later, the weakest phrase; final weeks, the full piece. The closing makes the synthesis piece a daily prayer rather than a rehearsed performance.",
    steps: [
      "Say: \"One phrase. From memory. Offer it.\"",
      "Pause for five seconds of silence. No instruction, no preparation.",
      "Both children sing the designated phrase of the synthesis piece — a cappella, no piano, no recording.",
      "Silence afterward. Do not evaluate. Do not comment on pitch or accuracy.",
      "Then: play Do on the piano. Everyone sings Do once together.",
      "Say: \"That is what the voice is for.\" Done.",
    ],
    formIA: "If Form IA forgets the phrase: do not prompt him. Let the silence hold, then sing the phrase yourself quietly — not as a correction but as a reminder. He joins when he finds it.",
    formIIA: "From Week 32 onward, Form IIA sings the full synthesis piece in the closing rather than a single phrase, conducting himself with the beat gesture.",
  },
};
