// ─────────────────────────────────────────────────────────────────────────────
// src/data/schola-cantorum.js
//
// Lesson data for Schola Cantorum Domestica — Sacred Music & Solfège
// Two-year course. Spine: Ladukhin Elementary Course in Solfège (IMSLP).
// Fixed-do system. Form I A = Age 8. Form II A = Age 11.
//
// Session types: SING | LISTEN | DRILL | REVIEW | FEAST
// ─────────────────────────────────────────────────────────────────────────────

export const UNITS = [
  // ───────────────────────────────────────────────────────────────────────────
  // YEAR 1
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "Y1U1",
    icon: "𝄞",
    title: "Do Is Home",
    subtitle: "Weeks 1–6 · C Major Foundation",
    lessons: [
      // ── Week 1, Session A ─────────────────────────────────────────────────
      {
        id: "1.1A",
        week: 1,
        title: "The Voice Is a Gift",
        type: "SING",
        tagline: "St. Romanos the Melodist and the first scale",
        teacherPrep: "Print or display the icon of St. Romanos the Melodist (orthodoxwiki.org). Have Ladukhin Elementary Course pp. 1–5 printed or on screen. Piano tuned and accessible. Optional: small candle.",

        opening: "Light the candle if desired. Say: \"Every music lesson begins the same way. We find Do.\"\n\nPlay middle C on the piano. Hold it.\n\nSay: \"This is Do. It is always C. It will never change. When we hear this note, we are home. Sing it with me.\"\n\nEveryone sings Do together on a comfortable breath. Hold for 3–4 seconds.\n\nSay: \"Good. That's Do. Let's remember it.\"",

        storyLabel: "The Story of St. Romanos the Melodist",
        story: "Hold up the icon where the children can see it.\n\nSay: \"Before we sing a single exercise, I want to tell you about a man who couldn't sing.\"\n\nTell the story:\n\n\"His name was Romanos. He lived in Constantinople about 1,500 years ago, and he served in the great church of Hagia Sophia. But he could not sing well. The other clergy could sing, and he felt ashamed. One night, on the eve of the feast of the Nativity — Christmas — he had a dream. The Mother of God, the Theotokos, came to him and gave him a scroll of paper. She told him to eat it. He did. And when he woke up, he climbed to the pulpit in front of the whole congregation, and he sang. He sang the first Kontakion ever composed: 'Today the Virgin gives birth to the Transcendent One.' His voice was so beautiful that everyone wept. He went on to compose more than a thousand hymns. The Church calls him St. Romanos the Melodist, and we remember him every year on October 1st.\"\n\nAsk: \"If you woke up tomorrow and could suddenly sing perfectly, what would you sing?\"\n\nLet the children answer. Don't rush this.\n\nSay: \"We are going to spend two years learning to sing the same kind of music St. Romanos sang. Our voices are a gift. This course is how we learn to use that gift.\"",

        drillLabel: "Ladukhin Exercise 1 — Finding the Scale",
        drill: "Open the Ladukhin PDF to Exercise 1. Form II A follows notation on the page. Form I A echoes by ear.\n\nStep 1 — Teach the syllables.\nSay: \"The scale has seven steps. Their names are: Do — Re — Mi — Fa — Sol — La — Ti — Do. Say them with me.\"\nEveryone says (not sings) the syllables: Do Re Mi Fa Sol La Ti Do.\n\nStep 2 — Sing the five-note scale.\nPlay C-D-E-F-G on the piano slowly. Sing along: Do — Re — Mi — Fa — Sol.\nSay: \"Now you. Echo me.\"\nSing Do-Re-Mi-Fa-Sol on a steady beat. Children echo. Repeat 4–5 times.\n\nStep 3 — Reverse.\nSing Sol-Fa-Mi-Re-Do. Children echo. Repeat 4–5 times.\n\nStep 4 — Ladukhin Exercise 1.\nSay: \"Now let's sing Exercise 1 together.\"\nTeacher sings it once through, then everyone sings together. Repeat 2–3 times.\n\nForm II A: point to the notes on the page as you sing.\nForm I A: make eye contact and let her follow your voice.\n\nIf a child sings a wrong pitch: sing the correct pitch yourself, clearly, and continue. Do not stop the exercise.",

        sacredMusic: "Saint Anthony Monastery Cherubic Hymn English",
        sacredPrompt: "Play approximately 90 seconds. Ask: \"Can you hear Do anywhere in this music? Raise your hand when you think you hear the note we practiced.\" Then ask: \"How does this music feel different from music you usually hear?\" Let them answer freely.",

        narrationI: "Echo the five-note scale (Do-Re-Mi-Fa-Sol) from memory without the piano.",
        narrationII: "Sing Exercise 1 from the page. Identify where Do appears in the notation.",

        journalI: "Draw St. Romanos the Melodist any way you like. Write at the bottom: Do = C.",
        journalII: "Write one sentence about the story of St. Romanos in your own words. Write: Do = C. Copy the five-note scale on the staff if there is time.",

        closing: "Say: \"Let's find Do one more time before we finish.\"\nPlay C on the piano. Everyone sings Do together.\nSay: \"Same Do next time. It never moves.\"",

        vocab: ["Do", "Solfège", "Scale", "Fixed-do"],

        watchFor: "Either child singing too loudly — the voice should be easy and forward, not pressed. Form I A singing La instead of Sol at the top of the scale (common). Form II A rushing ahead of the beat rhythmically.",
        shortenIt: "Skip the story and go straight to Exercise 1. Return to St. Romanos in Session B.",
        stretchIt: "After Exercise 1, have Form II A sing it again with one hand conducting the beat (right hand: down-up for 2/4 time).",
      },

      // ── Week 1, Session B ─────────────────────────────────────────────────
      {
        id: "1.1B",
        week: 1,
        title: "Up or Down? — Review and Journal",
        type: "LISTEN",
        tagline: "Pitch direction and the first music journal entry",
        teacherPrep: "Have music journals (one notebook per child) and pencils ready. No new materials needed.",

        opening: "Find Do together (same as Session A).\n\nSay: \"Let's sing Exercise 1 from memory. Don't look at the page.\"\nSing it together. Then reverse (Sol-Fa-Mi-Re-Do).",

        drillLabel: "Listening Game — Up or Down?",
        drill: "Say: \"I'm going to play two notes on the piano. You tell me: did the second note go UP or DOWN?\"\n\nPlay pairs of notes. Children call out up or down.\n\nStart with obvious contrasts (C to G = big jump up, C to low A = big jump down). Then move to smaller intervals (C to D, C to B).\n\nAfter 6–8 pairs, shift to singing:\nSay: \"Now I'll sing two notes on solfège. Up or down?\"\n\nSing Do then Mi — children say up.\nSing Sol then Re — children say down.\n\nContinue 6–8 pairs.\n\nForm II A: ask her to name the syllables as well as the direction.\nForm I A: up/down only is sufficient.",

        sacredMusic: "Saint Anthony Monastery Cherubic Hymn English",
        sacredPrompt: "Play 30 seconds at the end of the session. Say: \"We'll listen to this one more time next session. See if you hear something new.\"",

        narrationI: "Point to Do on the piano keyboard. Sing Do-Re-Mi-Fa-Sol from memory.",
        narrationII: "Sing Exercise 1 from memory. Name two notes that went up and two that went down.",

        journalI: "Open your music journal. Write today's date. Write: Do = C. Draw St. Romanos any way you like. (Parent may write a dictated sentence at the bottom of the page.)",
        journalII: "Open your music journal. Write today's date. Write: Do = C. Write one sentence about what you remember from the story of St. Romanos. Copy the five-note scale on the staff below.",

        closing: "Play C on the piano. Everyone sings Do together. Done.",

        watchFor: "The journal habit matters more than the quality of the entry. If a child resists drawing, offer writing instead. If a child resists writing, offer drawing. The notebook must be opened every Session B — that is the habit being formed.",
        shortenIt: "Skip the listening game. Do only the journal.",
        stretchIt: "After the journal, ask Form II A: \"Can you sing Do-Re-Mi-Fa-Sol starting on a different note — say, G?\" Let her try. Don't correct — just listen and observe.",
      },
    ],
  },

  // Add subsequent units here following the same structure.
  // See year1-weekly-schedule.md for the full scope and sequence.
];
