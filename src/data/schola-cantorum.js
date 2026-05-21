// ─────────────────────────────────────────────────────────────────────────────
// scholaCantorum.js
// Single source of truth for Schola Cantorum Domestica lesson data.
// Two-year sacred music and solfège course.
//
// LESSON SHAPE:
//   id            string   e.g. "1.A" / "1.B"
//   week          number
//   session       'A' | 'B'
//   unit          string   unit id e.g. "u1"
//   title         string
//   duration      string   e.g. "~25 minutes"
//   ladukhin      string   exercises covered
//   openingRitual string   the fixed opening script
//   story         { title, text } | null   saint story or context
//   drill         { title, steps: string[] }   main solfège work
//   formIA        string   specific instruction for Form IA student
//   formIIA       string   specific instruction for Form IIA student
//   sacredMusic   { searchTerm, label, listenFor }   YouTube search + prompt
//   journal       { formIA: string, formIIA: string }
//   closingRitual string
//   teacherNotes  string
//   shortenIt     string
//   stretchIt     string
//   watchFor      string
// ─────────────────────────────────────────────────────────────────────────────

export const YEARS = [

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 1 — Foundation: The Voice Finds Its Home
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'y1',
    title: 'Year 1 — Foundation',
    subtitle: 'The Voice Finds Its Home',
    units: [

      // ───────────────────────────────────────────────────────────────────────
      // UNIT 1: Do Is Home (Weeks 1–6)
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'u1',
        title: 'Do Is Home',
        subtitle: 'Weeks 1–6 · C major pentatonic → diatonic · No sharps or flats',
        icon: '🎵',
        lessons: [
          {
            id: '1.A', week: 1, session: 'A', unit: 'u1',
            title: 'First Lesson — St. Romanos and Do',
            duration: '~25 minutes',
            ladukhin: 'Exercise 1',
            materials: ['Piano', 'Ladukhin pp. 1–5', 'Icon of St. Romanos the Melodist', 'Music journals and pencils', 'Optional: small candle'],
            openingRitual: 'Light the candle if desired. Play middle C on the piano and hold it.\n\nSay: "Every music lesson begins the same way. We find Do."\n\nPlay middle C. Hold it.\n\nSay: "This is Do. It is always C. It will never change. When we hear this note, we are home. Sing it with me."\n\nEveryone sings Do together on a comfortable breath. Hold 3–4 seconds.\n\nSay: "Good. That\'s Do. Let\'s remember it."',
            story: {
              title: 'The Story of St. Romanos the Melodist',
              text: 'Hold up or set the icon where both students can see it.\n\nSay: "Before we sing a single exercise, I want to tell you about a man who couldn\'t sing."\n\nTell the story: "His name was Romanos. He lived in Constantinople about 1,500 years ago, and he served in the great church of Hagia Sophia. But he could not sing well. The other clergy could sing, and he felt ashamed. One night, on the eve of the feast of the Nativity — Christmas — he had a dream. The Mother of God, the Theotokos, came to him and gave him a scroll of paper. She told him to eat it. He did. And when he woke up, he climbed to the pulpit in front of the whole congregation, and he sang. He sang the first Kontakion ever composed: \'Today the Virgin gives birth to the Transcendent One.\' His voice was so beautiful that everyone wept. He went on to compose more than a thousand hymns. The Church calls him St. Romanos the Melodist, and we remember him every year on October 1st."\n\nAsk: "If you woke up tomorrow and could suddenly sing perfectly, what would you sing?"\n\nLet both students answer. Do not rush.\n\nSay: "We are going to spend two years learning to sing the same kind of music St. Romanos sang. Our voices are a gift. This course is how we learn to use that gift."',
            },
            drill: {
              title: 'Ladukhin Exercise 1 — Finding the Scale',
              steps: [
                'STEP 1 — Teach the syllables. Say: "The scale has seven steps. Their names are: Do — Re — Mi — Fa — Sol — La — Ti — Do. Say them with me." Everyone says (not sings) the syllables together.',
                'STEP 2 — Sing the five-note scale. Play C-D-E-F-G on the piano slowly. Sing along: Do — Re — Mi — Fa — Sol. Say: "Now you. Echo me." Sing Do-Re-Mi-Fa-Sol on a steady quarter-note beat. Students echo. Repeat 4–5 times.',
                'STEP 3 — Reverse. Sing Sol-Fa-Mi-Re-Do. Students echo. Repeat 4–5 times.',
                'STEP 4 — Ladukhin Exercise 1. Say: "Now let\'s sing Exercise 1 together." Teacher sings it once through. Then everyone sings together. Repeat 2–3 times.',
              ],
            },
            formIA: 'Make eye contact and let him follow your voice. He is not required to read from the page. Echo-singing is primary.',
            formIIA: 'Point to the notes on the page as you sing. He follows notation with his finger.',
            sacredMusic: {
              searchTerm: 'Saint Anthony Monastery Cherubic Hymn English',
              label: 'Cherubic Hymn — Saint Anthony Monastery',
              listenFor: 'Say: "Can you hear Do anywhere in this music? Raise your hand when you think you hear the note we practiced." Then ask: "How does this music feel different from music you usually hear?" Common responses: slower, no drumbeat, like church, kind of floating.',
            },
            journal: {
              formIA: 'Draw St. Romanos. Write: "Do = C."',
              formIIA: 'Draw St. Romanos. Write: "Do = C." Add one sentence about the story in your own words.',
            },
            closingRitual: 'Say: "Let\'s find Do one more time before we finish."\n\nPlay C on the piano. Everyone sings Do together.\n\nSay: "Same Do next time. It never moves."',
            teacherNotes: 'In Session A, Form IIA may feel the exercises are too easy. That is fine — confidence and good habits are being built. Tell him privately: "This month is foundation. By Month 3 you will have your own challenges." Form IA will naturally pace the shared exercises; this is appropriate.',
            shortenIt: 'Skip the listening game in Session B. Do only the journal.',
            stretchIt: 'In Session B, have Form IIA sing the exercise again with one hand conducting the beat (right hand: down-up for 2/4).',
            watchFor: 'Form IA singing La instead of Sol at the top of the scale (common). Form IIA rushing ahead rhythmically. Either student singing too loudly — the voice should be easy, forward, not pressed.',
          },
          {
            id: '1.B', week: 1, session: 'B', unit: 'u1',
            title: 'Review and Journal — Up or Down?',
            duration: '~20–25 minutes',
            ladukhin: 'Exercise 1 review',
            materials: ['Piano', 'Music journals and pencils'],
            openingRitual: 'Find Do together (same as Session A).\n\nSay: "Let\'s sing Exercise 1 from memory. Don\'t look at the page."\n\nSing it together. Then reverse (Sol-Fa-Mi-Re-Do).',
            story: null,
            drill: {
              title: 'Listening Game — Up or Down?',
              steps: [
                'Say: "I\'m going to play two notes on the piano. You tell me: did the second note go UP or DOWN?"',
                'Play pairs of notes. Start with obvious contrasts (C to G = big jump up, C to low A = big jump down). Then move to smaller intervals (C to D, C to B). Do 6–8 pairs.',
                'Shift to singing: "Now I\'ll sing two notes on solfège. Up or down?" Sing Do then Mi — children say up. Sing Sol then Re — children say down. Continue 6–8 pairs.',
                'Ask Form IIA alone: "Can you sing Exercise 1 alone?" Give him the chance.\nAsk Form IA: "Can you start on Do and go up? I\'ll sing with you."',
              ],
            },
            formIA: 'He can draw and dictate a sentence for the teacher to write at the bottom of the journal page.',
            formIIA: 'He also writes one sentence about the story of St. Romanos in his own words.',
            sacredMusic: {
              searchTerm: 'Saint Anthony Monastery Cherubic Hymn English',
              label: 'Cherubic Hymn — return listening',
              listenFor: 'Play 30 seconds. Say: "We\'ll listen to this one more time next session. See if you hear something new."',
            },
            journal: {
              formIA: 'Write "Do = C" in large letters. Draw St. Romanos any way you like.',
              formIIA: 'Write "Do = C". Draw St. Romanos. Write one sentence about his story.',
            },
            closingRitual: 'Return to the Cherubic Hymn recording. Play 30 seconds.\n\nFind Do together. Done.',
            teacherNotes: 'Do not correct a pitch mid-exercise in the first month. Sing the correct pitch yourself, clearly. Repetition and modeling are the primary tools.',
            shortenIt: 'Skip the direction game. Do only the opening review and the journal.',
            stretchIt: 'After the direction game, ask Form IIA to name the solfège syllable of both notes, not just the direction.',
            watchFor: 'Either student singing too softly out of self-consciousness. Encourage a clear, forward tone — "church voice," not a whisper.',
          },
          {
            id: '2.A', week: 2, session: 'A', unit: 'u1',
            title: 'Rising and Falling Scales',
            duration: '~25 minutes',
            ladukhin: 'Exercises 2–3',
            materials: ['Piano', 'Ladukhin pp. 2–6 (Exercises 2–3)', 'Music journals and pencils'],
            openingRitual: 'Play middle C. Hold it.\n\nSay: "Find Do. Sing it with me."\n\nEveryone sings Do together. Hold 3–4 seconds.\n\nSay: "Do never moves. Same note, every time. Let\'s begin."',
            story: null,
            drill: {
              title: 'Exercises 2–3 — Full Scale',
              steps: [
                'REVIEW: Say: "Let\'s sing Exercise 1 from memory. No page, from memory. Follow me." Sing Do-Re-Mi-Fa-Sol-Fa-Mi-Re-Do. Repeat twice. Then Sol-Fa-Mi-Re-Do-Re-Mi-Fa-Sol.',
                'EXERCISE 2: Say: "Exercise 2 goes further than Exercise 1. We\'re going all the way up to Do\' — the second Do, one octave higher. Listen first." Sing through once. Then together 3 times.',
                'EXERCISE 3: Say: "Exercise 3 goes up and comes back down. The scale is complete now — all seven steps." Sing through once. Then together 3 times.',
                'If high Do\' causes strain: keep the voice light and easy. Say: "High Do is not louder — it\'s higher. Keep your voice soft."',
              ],
            },
            formIA: 'No page required. He listens and echoes throughout.',
            formIIA: 'Place the Ladukhin page in front of him. Say: "You are going to follow the notation. The notes sit on lines and spaces — they go up on the page when the pitch goes up, and down when it goes down. Put your finger on the first note. That\'s Do." He tracks with finger as you sing together.',
            sacredMusic: {
              searchTerm: 'Saint Anthony Monastery Cherubic Hymn English',
              label: 'Cherubic Hymn — cadence listening',
              listenFor: 'Play ~90 seconds. Say: "Count how many times the music seems to rest — like it lands somewhere and pauses. Put a finger up each time you feel it." After the clip, ask how many each student counted. Say: "Those resting places are called cadences. The music takes a breath — like the end of a sentence."',
            },
            journal: {
              formIA: 'Draw the piano keyboard C-D-E-F-G. Label with solfège names: Do, Re, Mi, Fa, Sol.',
              formIIA: 'Copy the five-note scale (Do-Re-Mi-Fa-Sol) on the staff. Below the notes, write the solfège syllables.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do."\n\nEveryone sings Do together.\n\nSay: "Same Do next time."',
            teacherNotes: 'Form IIA is only tracking notation this week — following with his finger as you sing. He is not yet reading cold. That comes in Unit 2. This week: familiarity with the page, not independence from it.',
            shortenIt: 'Skip the direction game in Session B. Do only the review scales and journal.',
            stretchIt: 'Ask Form IIA to name the solfège syllable of both notes during the direction game, not just the direction. Example: "Do going to Mi — what\'s the interval called?" (Answer: a third — introduce the term but don\'t drill it yet.)',
            watchFor: 'Both students slowing down at La-Ti-Do\' — the upper three notes of the scale are unfamiliar territory. Sing those three notes slightly more slowly yourself. Form IA may drop pitch on Re at the bottom of a descending scale; play Re on the piano once if needed.',
          },
          {
            id: '2.B', week: 2, session: 'B', unit: 'u1',
            title: 'Review and Journal — The Five-Note Scale',
            duration: '~20–25 minutes',
            ladukhin: 'Exercises 1–3 review',
            materials: ['Piano', 'Music journals and pencils'],
            openingRitual: 'Find Do together.\n\nSay: "Let\'s sing Exercises 1, 2, and 3 — all three, in order. I\'ll lead."\n\nSing through all three without stopping. Treat them as a single long warm-up.\n\nAsk: "Which one felt the hardest? Why?" Let both students answer.',
            story: null,
            drill: {
              title: 'Up or Down? — With Same Option',
              steps: [
                'Say: "I\'m going to sing two notes. You tell me: did the second note go UP or DOWN?"',
                'Sing pairs on solfège syllables. Do → Mi (up). Sol → Re (down). Mi → Fa (up, small step). La → Mi (down, bigger skip). Ti → Do (up, small step). Fa → Mi (down). Do 6 pairs.',
                'Introduce the third option: Say: "What if both notes are the same?" Play C twice. Children call out same. Do 4 more pairs including some same answers.',
                'Return to piano: play two notes without singing. Students call out up / down / same. 6–8 pairs.',
              ],
            },
            formIA: 'Draw the piano keyboard C-D-E-F-G (five white keys). Label each key with its solfège name.',
            formIIA: 'Copy the five-note scale on staff lines in the journal. Write the solfège syllables below each note.',
            sacredMusic: {
              searchTerm: 'Saint Anthony Monastery Cherubic Hymn English',
              label: 'Cherubic Hymn — third listening',
              listenFor: 'Play 30 seconds. Say: "Same recording. Different ears each time — that\'s how listening works. We\'ll return to it again."',
            },
            journal: {
              formIA: 'Draw the piano keyboard from C to G. Label each key with its solfège name.',
              formIIA: 'Copy the five-note scale on staff lines. Write one sentence about the Cherubic Hymn — what it feels like, or what you noticed.',
            },
            closingRitual: 'Play 30 seconds of the Cherubic Hymn.\n\nFind Do together. Done.',
            teacherNotes: 'The direction game with "same" added is a significant step — it requires the ear to distinguish identity, not just direction. Form IA will find large intervals easy and small steps harder. That is normal.',
            shortenIt: 'Skip the direction game. Do only the opening review and journal.',
            stretchIt: 'Form IIA: ask him to name the solfège syllable of both notes in each pair.',
            watchFor: 'Form IA may say "up" for any pair he is uncertain about. Watch for guessing patterns. If he consistently says one answer, isolate the problem: play the same note twice and see if he hears it as "same."',
          },
          {
            id: '3.A', week: 3, session: 'A', unit: 'u1',
            title: 'Steps and Skips — Intervals Introduced',
            duration: '~25 minutes',
            ladukhin: 'Exercises 4–5',
            materials: ['Piano', 'Ladukhin pp. 4–6 (Exercises 4–5)', 'Music journals'],
            openingRitual: 'Find Do. Sing together. Say: "Do never moves."',
            story: null,
            drill: {
              title: 'Exercises 4–5 — Skips',
              steps: [
                'WARM-UP: Sing Exercises 1–3 from memory. Steady, no rushing.',
                'INTRODUCE SKIP: Say: "So far we have stepped — Do to Re is one step. Now we are going to jump — Do to Mi skips over Re. Listen." Play C then E on piano. Sing: Do — Mi. "That\'s a skip. Now: Do to Re." Play C then D. "That\'s a step."',
                'STEP vs. SKIP game: Teacher sings two notes. Students call out step or skip. Do 6 pairs. Then switch — students sing, teacher calls.',
                'EXERCISE 4: Sing together. Point out the skips before singing. Repeat 3 times.',
                'EXERCISE 5: Sing together 3 times.',
              ],
            },
            formIA: 'He hears and echoes. For skips, teacher pre-sings the two notes, then asks him to echo: "Do — Mi. Your turn." Hold his hand to feel when the pitch jumps.',
            formIIA: 'Before singing each exercise, he identifies all skips on the page with his finger. Say: "Point to every place where a note skips over another." Then sing.',
            sacredMusic: {
              searchTerm: 'Byzantine Lord Have Mercy simple',
              label: 'Lord Have Mercy — Byzantine',
              listenFor: 'Say: "This is one of the oldest prayers in the Church. Three words: Lord — have — mercy. Kyrie eleison in Greek. Listen and find those three words in the music."',
            },
            journal: {
              formIA: 'Draw the piano keyboard C to G. Mark where skips happen with a curved line over the skipped key.',
              formIIA: 'Write: "A step moves to the next note. A skip jumps over a note." Draw two examples of each on the staff.',
            },
            closingRitual: 'Find Do. Sing together. "Same Do next time."',
            teacherNotes: 'The concept of step vs. skip is one of the most important in solfège. Take time here. Do not rush to the exercises if the concept is not yet clear in their ears.',
            shortenIt: 'Skip the step/skip game. Go directly to the exercises after the warm-up.',
            stretchIt: 'Form IIA: introduce the interval names. Do-Re = a second. Do-Mi = a third. Do not drill yet — just name them once.',
            watchFor: 'Students who hear all intervals as steps because they are not yet distinguishing pitch distance by ear. Return to the piano: play the two notes slowly and let them feel the gap.',
          },
          {
            id: '3.B', week: 3, session: 'B', unit: 'u1',
            title: 'Review and Journal — Lord Have Mercy',
            duration: '~20 minutes',
            ladukhin: 'Exercises 4–5 review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Sing Exercises 4–5 from memory.',
            story: null,
            drill: {
              title: 'Echo Game — Three-Note Patterns',
              steps: [
                'Say: "I\'m going to sing a short pattern of three notes on solfège. Echo it back exactly."',
                'Sing patterns: Do-Re-Mi. Mi-Re-Do. Do-Mi-Sol. Sol-Mi-Do. Do-Re-Do. Mi-Sol-Mi.',
                'Increase to four notes: Do-Re-Mi-Fa. Sol-Fa-Mi-Re. Do-Mi-Re-Do.',
                'Ask Form IIA to lead some patterns while you and Form IA echo.',
              ],
            },
            formIA: 'Echo all patterns. He may be a beat behind — this is fine.',
            formIIA: 'He leads 3–4 patterns of his own invention. Must use correct solfège syllables.',
            sacredMusic: {
              searchTerm: 'Byzantine Lord Have Mercy simple',
              label: 'Lord Have Mercy — echo the phrase',
              listenFor: 'Play 60 seconds. Then say: "Try to echo the very opening phrase. I\'ll sing it with you." Sing the first phrase of the Lord Have Mercy by ear together.',
            },
            journal: {
              formIA: 'Draw the three words: Lord — Have — Mercy. Draw a face listening.',
              formIIA: 'Write the three Greek words: Kyrie — eleison. Write what they mean. Draw the opening melodic shape (just up/down contour, no notation required).',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'The echo game builds the ear faster than any exercise. Keep it playful and fast-paced.',
            shortenIt: 'Do only 4–5 echo patterns. Go straight to journal.',
            stretchIt: 'Form IIA: after leading patterns, ask him to write out one of his patterns in solfège syllables on the page.',
            watchFor: 'Form IA echoing the rhythm correctly but missing the pitch. Address pitch first, rhythm second.',
          },
          {
            id: '4.A', week: 4, session: 'A', unit: 'u1',
            title: 'The Full Octave — Do to Do',
            duration: '~25 minutes',
            ladukhin: 'Exercise 6',
            materials: ['Piano', 'Ladukhin p. 5–6 (Exercise 6)', 'Music journals'],
            openingRitual: 'Find Do. Sing together.',
            story: null,
            drill: {
              title: 'Exercise 6 — Full Octave',
              steps: [
                'WARM-UP: Sing Exercises 1–5 in order. Brisk pace.',
                'INTRODUCE OCTAVE: Say: "Do lives at the bottom. Do also lives at the top. They are the same note — but one is higher. Sing Do at the bottom — now sing Do at the top." Play C4 and C5 on piano together. "Do you hear how they match?"',
                'EXERCISE 6: Teacher sings through once. Together 3 times. Slow on the upper notes.',
                'FORM IIA sight-reading: "Sing Exercise 6 alone, following the notation." Give him time.',
                'FORM IA: "Start on Do and go up. I will sing with you."',
              ],
            },
            formIA: 'Echo then look. After he can echo the full scale, show him the page briefly. Point to Do at the bottom and Do\' at the top.',
            formIIA: 'Sight-sing from page. Point out the octave: two notes with the same name, one above the other.',
            sacredMusic: {
              searchTerm: 'Orthodox Vespers Lord I Call Byzantine',
              label: 'Lord I Call — Byzantine Vespers',
              listenFor: 'Say: "This is sung every Sunday at Vespers. Listen for the long, slow phrases. Can you tell when one phrase ends and the next begins?"',
            },
            journal: {
              formIA: 'Draw a ladder with eight rungs. Label each rung: Do Re Mi Fa Sol La Ti Do.',
              formIIA: 'Copy Exercise 6 notation. Label the bottom Do and top Do\'. Write: "An octave = 8 notes. Same name, different height."',
            },
            closingRitual: 'Find Do. "Same Do next time."',
            teacherNotes: 'High Do\' may strain young voices. Keep it light — model a relaxed, forward tone. If it consistently strains, end the scale on Ti for now.',
            shortenIt: 'Warm-up through Exercise 3 only. Go straight to Exercise 6.',
            stretchIt: 'Form IIA: ask him to sing the octave alone and identify which note is higher without looking at the piano.',
            watchFor: 'Students pressing for the high note. The voice should float up, not push. Model this yourself.',
          },
          {
            id: '4.B', week: 4, session: 'B', unit: 'u1',
            title: 'Review and Journal — Rhythm Introduced',
            duration: '~20 minutes',
            ladukhin: 'Exercises 1–6 review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Sing the full scale (Exercise 6) twice together.',
            story: null,
            drill: {
              title: 'Call and Response — Pointing Game',
              steps: [
                'Say: "I am going to point to one of our exercises. Sing it cold — without warming up."',
                'Point to Exercise 3. Students sing. Point to Exercise 1. Students sing. Point to Exercise 5. Students sing.',
                'Ask Form IIA to do the pointing while you and Form IA sing.',
              ],
            },
            formIA: 'He sings all exercises with teacher. Does not need to read notation independently.',
            formIIA: 'He points and sings independently. Challenge: can he name which exercise without seeing the number?',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Nativity Troparion — first hearing',
              listenFor: 'Say: "This is the Nativity Troparion — the song of Christmas in the Orthodox Church. You may have heard it before. Just listen. We will return to it many times this year."',
            },
            journal: {
              formIA: 'Copy rhythm notation: a whole note (open oval), a half note (open oval with stem), a quarter note (filled oval with stem). Write the names.',
              formIIA: 'Copy rhythm notation with counts: whole = 4 beats, half = 2 beats, quarter = 1 beat. Draw 4 boxes and fill them with different combinations.',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'The pointing game is excellent for building sight-reading confidence without the pressure of sight-reading. It is auditory recognition matched to visual symbol.',
            shortenIt: 'Just warm up and do the journal.',
            stretchIt: 'Form IIA: after the pointing game, ask him to write out the solfège syllables for one exercise from memory.',
            watchFor: 'Form IA losing the pitch when exercises change rapidly. Slow the pointing game down for him.',
          },
          {
            id: '5.A', week: 5, session: 'A', unit: 'u1',
            title: 'Rhythm — Half Notes and Quarter Notes',
            duration: '~25 minutes',
            ladukhin: 'Exercises 7–8',
            materials: ['Piano', 'Ladukhin pp. 6–7 (Exercises 7–8)', 'Music journals'],
            openingRitual: 'Find Do. Sing Exercise 6 (full octave) as warm-up.',
            story: null,
            drill: {
              title: 'Exercises 7–8 — Rhythmic Variety',
              steps: [
                'INTRODUCE RHYTHM: Say: "So far every note has been the same length. Now some notes are longer and some are shorter." Clap a quarter note pulse. "This is a quarter note — one beat." Hold a half note. "This is a half note — two beats, twice as long."',
                'CLAP AND COUNT: Clap the rhythm of Exercise 7 before singing. Count out loud: 1-2 for half notes, 1 for quarter notes.',
                'EXERCISE 7: Clap rhythm, then sing on solfège. Repeat 3 times.',
                'EXERCISE 8: Same process. Clap first, then sing.',
              ],
            },
            formIA: 'Clap the rhythm dictation with him physically before singing — tap his hands lightly on the half notes so he feels the longer duration.',
            formIIA: 'Before singing, he identifies all half notes in the exercise by circling them on the page.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Nativity Troparion — return',
              listenFor: 'Say: "Can you clap the beat while this plays? Try." Play ~60 seconds. Students clap along. Then ask: "Were there places where the beat was harder to find?"',
            },
            journal: {
              formIA: 'Copy rhythm notation: whole, half, quarter. Write how many beats each gets.',
              formIIA: 'Copy a rhythm pattern from Exercise 7. Write the beat count below each note.',
            },
            closingRitual: 'Find Do. "Same Do next time."',
            teacherNotes: 'Rhythm and pitch are two different skills. Do not try to perfect both at once. In these exercises, let rhythm be primary — if a pitch is wrong but the rhythm is right, acknowledge the rhythm and gently re-pitch.',
            shortenIt: 'Do Exercises 7 only. Skip 8.',
            stretchIt: 'Form IIA: tap the beat with his left hand while singing with his right conducting the rhythm.',
            watchFor: 'Students rushing quarter notes to compensate for slowing on half notes. The half note must be held, not rushed. Model it clearly.',
          },
          {
            id: '5.B', week: 5, session: 'B', unit: 'u1',
            title: 'Rhythm Dictation and Journal',
            duration: '~20 minutes',
            ladukhin: 'Exercises 7–8 review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Clap and sing Exercise 7 from memory.',
            story: null,
            drill: {
              title: 'Rhythm Dictation',
              steps: [
                'Say: "I am going to clap a rhythm. Echo it back."',
                'Clap patterns: quarter-quarter-half. Half-quarter-quarter. Quarter-quarter-quarter-quarter. Half-half.',
                'After echoing, move to singing: "Now I\'ll sing a rhythm on Do. Echo me." Sing on Do using the same patterns.',
                'Rhythm dictation on paper: "I\'ll clap a pattern. You write it — draw the note shapes: filled oval for quarter, open oval with stem for half." Do 3 patterns.',
              ],
            },
            formIA: 'Echo clapping only. No written dictation required.',
            formIIA: 'Full written dictation: 3 patterns, writes note shapes in journal.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Nativity Troparion — phrase echoing',
              listenFor: 'Play 30 seconds. Then echo the opening phrase together by ear. Say: "This melody will be one of our singing pieces later this year."',
            },
            journal: {
              formIA: 'Draw a quarter note and a half note. Write how many beats each gets.',
              formIIA: 'Write out one of the rhythm patterns from dictation. Write the beat count below each note.',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'Written rhythm dictation is a significant step for Form IIA. If he struggles, slow down — this is a skill that builds over months, not one session.',
            shortenIt: 'Skip the written dictation. Echo clapping only.',
            stretchIt: 'Form IIA: after written dictation, sing back one pattern on a solfège syllable of his choice.',
            watchFor: 'Form IA may not understand what "longer" means in rhythm. Use physical gesture: spread arms wide for half note, bring together for quarter note.',
          },
          {
            id: '6.A', week: 6, session: 'A', unit: 'u1',
            title: 'Unit 1 Review',
            duration: '~25 minutes',
            ladukhin: 'Exercises 1–8 review',
            materials: ['Piano', 'Ladukhin pp. 1–7 (all Unit 1 exercises)', 'Music journals'],
            openingRitual: 'Find Do. Sing the full octave scale without the piano — from memory.',
            story: null,
            drill: {
              title: 'Full Review — Exercises 1–8',
              steps: [
                'Sing through all 8 exercises in order. No stopping to correct. Observe what has solidified and what needs work.',
                'ASSESSMENT EXERCISE: Teacher sings a 4-note pattern. Students identify: Is it from an exercise we know, or new? Does it go up, down, or both? Are there steps or skips?',
                'Ask Form IIA to sight-sing Exercise 6 cold from the page.',
                'Ask Form IA to echo Exercise 1 from memory without looking at the page or teacher\'s hands.',
              ],
            },
            formIA: 'Can he find Do, sing a five-note scale, and echo a simple pattern? This is the Unit 1 benchmark for Form IA.',
            formIIA: 'Can he read simple notation, identify Do on the page, and sing a full scale? This is the Unit 1 benchmark for Form IIA.',
            sacredMusic: {
              searchTerm: 'Saint Anthony Monastery Cherubic Hymn English',
              label: 'Cherubic Hymn — unit return',
              listenFor: 'Say: "We first heard this in Week 1. Has it changed? What do you hear now that you didn\'t before?" Let both students answer without coaching.',
            },
            journal: {
              formIA: 'Free draw: "What does sacred music look like?" Any image, any style.',
              formIIA: 'Free draw: same prompt. Then write one sentence: "Sacred music is different from other music because ___."',
            },
            closingRitual: 'Say: "Next lesson we start something new — the full seven-note scale and reading notation." Find Do. Celebrate.',
            teacherNotes: 'This is a formal unit checkpoint. Use the assessment rubric from the Parent Guide. Record results for each student. Notes: pitch accuracy, rhythm accuracy, reading (Form IIA only at this stage), sacred music recognition.',
            shortenIt: 'Sing Exercises 1, 3, 6, and 8 only. Skip the assessment exercise.',
            stretchIt: 'Form IIA: sight-sing Exercise 8 cold from the page. Time how long before he can sing it without error.',
            watchFor: 'Do not let the review session become perfection-hunting. The goal is a snapshot, not a performance. Celebrate what they can do.',
          },
          {
            id: '6.B', week: 6, session: 'B', unit: 'u1',
            title: 'Music Journal Share — Unit Celebration',
            duration: '~20 minutes',
            ladukhin: 'No new exercises',
            materials: ['Music journals', 'Optional: small candle'],
            openingRitual: 'Find Do together. Light the candle if desired.',
            story: null,
            drill: {
              title: 'Journal Share and Celebration',
              steps: [
                'Each student shares one page from his journal. Teacher listens and responds genuinely — not with evaluation, but with curiosity: "What made you draw it that way? What does this remind you of?"',
                'Sing favorite exercises from memory together — students choose.',
                'Return to the Cherubic Hymn for a full 2-minute listening. Sit quietly. No questions.',
              ],
            },
            formIA: 'He shares his favorite drawing from the journal. He can describe it aloud.',
            formIIA: 'He shares his favorite page and reads aloud whatever he has written.',
            sacredMusic: {
              searchTerm: 'Saint Anthony Monastery Cherubic Hymn English',
              label: 'Cherubic Hymn — unit closing',
              listenFor: 'Full 2 minutes of silence and listening. No questions during. Afterward: "What did you hear?"',
            },
            journal: {
              formIA: 'Free draw: what you want to learn next.',
              formIIA: 'Write: "What I have learned in Unit 1." Three sentences minimum.',
            },
            closingRitual: 'Find Do together. Say: "Unit 1 is complete. We found Do. We built the scale. We started to read the music. Well done."',
            teacherNotes: 'This session is for celebration and consolidation. Do not introduce any new material. The journal share is a Charlotte Mason moment — narration through art and writing.',
            shortenIt: 'Journal share only. Skip the singing favorites.',
            stretchIt: 'Ask Form IIA to sing his favorite exercise from memory as a solo offering.',
            watchFor: 'Students who are self-critical about their journals. Redirect: "The journal is not a test. It is a record. All of it belongs here."',
          },
        ],
      },

      // ───────────────────────────────────────────────────────────────────────
      // UNIT 2: The Scale Has Seven Steps (Weeks 7–12)
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'u2',
        title: 'The Scale Has Seven Steps',
        subtitle: 'Weeks 7–12 · Full C major scale · Staff notation introduced · Half and quarter notes',
        icon: '🎼',
        lessons: [

          // ── Week 7 ──────────────────────────────────────────────────────────
          {
            id: '7.A', week: 7, session: 'A', unit: 'u2',
            title: 'Notation Introduction — Form IIA',
            duration: '~25 minutes',
            ladukhin: 'Exercise 9',
            materials: ['Piano', 'Ladukhin pp. 7–9 (Exercise 9)', 'Music journals', 'Pencils'],
            story: null,
            drill: {
              title: 'Exercise 9 — Form IIA Meets the Staff',
              steps: [
                'WARM-UP: Sing Exercises 1–3 from memory, both students together. Teacher drops out after the first pass to hear what has stuck.',
                'NOTATION LESSON for Form IIA — Form IA listens: Open Ladukhin to Exercise 9 and place it in front of Form IIA. Say: "This page is a map of the music. The five horizontal lines are called the staff. Notes sit on the lines and in the spaces between them. Higher on the page means higher in pitch. Lower means lower." Point slowly to several notes going up, then down.',
                'Say: "The curling symbol at the start of each line is the treble clef. It tells us which notes live where. The five lines, from bottom to top, name notes: E — G — B — D — F. A memory trick: Every Good Boy Does Fine. The four spaces between them spell F-A-C-E from bottom to top." Trace your finger along each line and space as you say it.',
                'Say: "Now find Do. Do is always C — and C lives just below the five lines, on a short ledger line of its own. It does not fit on the staff — it has its own little perch." Point to middle C on the page. Ask Form IIA: "Where is Do?" Give him time to find it before pointing.',
                'EXERCISE 9: Teacher sings the exercise once through while Form IIA follows the notation with his finger, tracking each note as it sounds. Form IA echoes by ear. Repeat together 3 times.',
                'FORM IIA SOLO: Say: "Your turn. Read from the page. I will support Form IA." Form IIA sings Exercise 9 from notation. Teacher listens while quietly echoing alongside Form IA.',
              ],
            },
            formIA: 'He does not follow notation this week — that comes next session. He watches your face and mouth and echoes by ear. His ear is doing exactly the right work right now.',
            formIIA: 'Full notation engagement from the first moment. Finger tracks every note as the class sings. The goal this week is not independent reading — it is connecting the sound he already knows to the symbol on the page.',
            sacredMusic: {
              searchTerm: 'Orthodox Psalm 103 Vespers',
              label: 'Psalm 103 — Vespers Opening',
              listenFor: 'Play approximately 90 seconds.\n\nSay: "This is Psalm 103 — the 103rd psalm of David — and it is sung at the very opening of Vespers every Sunday evening. Listen for the long phrases that move by steps. The melody goes up and down in exactly the pattern we have been practicing. Can you hear the steps?"',
            },
            journal: {
              formIA: 'Draw the treble clef as best he can — it does not need to be perfect. Label it: "This is the treble clef."',
              formIIA: 'Copy the treble clef carefully. Draw the five staff lines and label the notes C-D-E-F-G in their correct positions. Mark Do (C) with a circle and write "Do = C" beside it.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nEveryone sings Do together.\n\nSay: "Do never moves — and now we can see where it lives on the page too. Same note. Two homes: the ear and the staff."',
            teacherNotes: 'Let Form IIA find Do on the page before you point to it. Ask: "Where do you think Do lives?" He may not know — but the question activates looking. Notation literacy builds over months. This week: connect sound to symbol. Nothing more.',
            shortenIt: 'Skip the line and space names entirely. Just find Do on the ledger line and move to Exercise 9.',
            stretchIt: 'Cover the solfège syllable labels on the Ladukhin page. Ask Form IIA: "Can you identify Do from the staff position alone, without the printed letters?"',
            watchFor: 'Form IIA becoming so absorbed in the notation that he stops singing. The page is a map — the singing is the journey. If he goes silent and stares, tap the pulse gently and say: "Keep singing. The page follows your voice."',
          },
          {
            id: '7.B', week: 7, session: 'B', unit: 'u2',
            title: 'Re as a Resting Point',
            duration: '~20 minutes',
            ladukhin: 'Exercise 9 review',
            materials: ['Piano', 'Ladukhin p. 7', 'Music journals'],
            story: null,
            drill: {
              title: 'Do and Re — Ear Training',
              steps: [
                'REVIEW: Sing Exercise 9 together once — both students, Form IIA following notation, Form IA by ear.',
                'Say: "Do is home. We know that. But there is another note that can act as a resting place — not home, but a place to pause before continuing. Listen." Sing Do-Re-Mi-Re slowly. Stop on Re. Hold it. "Did Re feel finished? Or did it feel like something was still expected?" Let both students answer.',
                'Say: "Re is not home — but it is a landing. Like a step on a staircase, not the floor. The melody can rest there briefly before moving on." Sing the phrase again, this time resolving fully to Do at the end.',
                'EAR TRAINING: Play middle C on the piano and hold it. Say "Do." Then play D and hold it. Say "Re." Repeat twice slowly. Now: play either C or D without naming it. Students call out Do or Re. Do 8 pairs, mixing them unpredictably.',
                'Sing Exercise 9 again: Form IIA from notation, Form IA by ear. After singing, ask: "Did the melody ever rest on Re? Where?"',
              ],
            },
            formIA: 'Before the ear training: teacher sings four two-note pairs — Do-Re, Do-Mi, Do-Fa, Do-Sol — one at a time. He echoes each pair immediately. This warms his ear for the Do/Re distinction without theory.',
            formIIA: 'After the ear training, he opens to Exercise 9 and attempts to sing it without teacher singing along. Teacher listens and steps in only if he stops completely. Let him work through uncertainty.',
            sacredMusic: {
              searchTerm: 'Orthodox Psalm 103 Vespers',
              label: 'Psalm 103 — Phrase Resting',
              listenFor: 'Play 60–90 seconds.\n\nSay: "We heard this in Session A. This time, listen for where the melody rests — where does it land and breathe? Does it always come back to Do, or does it sometimes pause on Re or another note?" This is advanced listening. The habit of noticing matters more than a correct answer.',
            },
            journal: {
              formIA: 'Copy the first measure of Exercise 9 — teacher draws it lightly in pencil first, he traces over it.',
              formIIA: 'Copy Exercise 9 fully. Write the solfège syllables below each note.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "Two resting places now: Do, which is always home. Re, which is a landing on the way. See you next session."',
            teacherNotes: 'The Do/Re distinction is the first real ear-training challenge of the course. Keep it game-like and brisk. If a student consistently calls Re as Do, it is a hearing issue, not an attention issue. Play the two notes slowly in alternation — Do, Re, Do, Re — until the ear can distinguish the small difference.',
            shortenIt: 'Just the Do/Re ear training game and the journal. Skip the resting-point discussion.',
            stretchIt: 'Form IIA: from memory, no page — sing Do-Re-Mi-Re-Do, then Do-Mi-Sol-Mi-Do. Ask: "Which felt more settled at the end? Why?"',
            watchFor: 'Students who call out "Do" for every piano pair because they expect Do to be the right answer. Watch for the guessing pattern. If it appears, play Re three times in a row — the surprise resets the ear.',
          },

          // ── Week 8 ──────────────────────────────────────────────────────────
          {
            id: '8.A', week: 8, session: 'A', unit: 'u2',
            title: 'Notation for Form IA — Both on the Page',
            duration: '~25 minutes',
            ladukhin: 'Exercises 10–11',
            materials: ['Piano', 'Ladukhin pp. 7–9 (Exercises 9–11)', 'Music journals'],
            story: null,
            drill: {
              title: 'Both Students Follow Notation — Exercises 10–11',
              steps: [
                'WARM-UP: Sing Exercise 9 together from memory, both students. No page yet.',
                'NOTATION INTRODUCTION for Form IA: Place the open Ladukhin page in front of him. Say: "You have been singing from your ears — and that is right and good. Now the page joins in. See these five lines? Notes sit on the lines and in the spaces between them. When notes go higher on the page, the pitch goes up. When they go lower, the pitch goes down." Point to a few notes going up, then down.',
                'Say: "And here — this note with the short line under it, below all five lines — that is Do. You already know how it sounds. Now you know where it lives on the page." Point to middle C. "Every time you see a note on that short line, that is Do. Home."',
                'EXERCISE 9 with both on the page: Form IIA leads — he points to each note as the class sings. Form IA watches Form IIA\'s finger and listens. Together 2 times.',
                'EXERCISE 10: Teacher sings once through while both students follow on the page. Then together 3 times. Form IIA tracks his own copy. Form IA follows teacher\'s or Form IIA\'s finger.',
                'EXERCISE 11: Same process. Teacher once, then together 3 times.',
              ],
            },
            formIA: 'One concept only this week: Do lives on the short ledger line just below the five lines. He does not need to name any other note yet. Follow the finger as you sing. Eyes on the page, then look up and sing — do not stare at the notation while the voice goes silent.',
            formIIA: 'He has had one week with the staff. Now he leads. As the class sings, he points to each note and whispers its solfège name under his breath. He is the page-guide.',
            sacredMusic: {
              searchTerm: 'O Come O Come Emmanuel Gregorian chant',
              label: 'O Come O Come Emmanuel — Gregorian',
              listenFor: 'Play approximately 90 seconds.\n\nSay: "You probably know this hymn — but have you heard it like this? This is the original Gregorian chant version, centuries older than the version most people sing today. Does it feel the same as the version you know? How is it different? Listen for the phrases — where does it breathe?"',
            },
            journal: {
              formIA: 'Copy the first measure of Exercise 9 — teacher draws it lightly in pencil first, he traces. Write "Do" under the first note.',
              formIIA: 'Copy the first measure of Exercise 10 independently. Write solfège syllables below each note.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "You are both reading music now. The same note that lives in your ear lives on the page. Well done."',
            teacherNotes: 'Form IA\'s notation introduction must feel effortless. One concept is enough this week: Do lives just below the five lines. If he seems overwhelmed by the page, back off — just have him follow Form IIA\'s finger without looking at his own copy.',
            shortenIt: 'Introduce notation for Form IA using Exercise 9 only. Skip Exercises 10–11.',
            stretchIt: 'Cover the solfège syllable labels on the Ladukhin page. Ask Form IIA: "Can you sing Exercise 9 from the note heads alone — no syllable labels?"',
            watchFor: 'Form IA going silent when he looks at the page — fixating on the notation and losing the pitch. Redirect: "Look at the page to find where we are, then look up and sing. Eyes up, voice forward."',
          },
          {
            id: '8.B', week: 8, session: 'B', unit: 'u2',
            title: 'Tendency Tones — Fa and Ti',
            duration: '~20 minutes',
            ladukhin: 'Exercises 9–11 review',
            materials: ['Piano', 'Ladukhin pp. 7–9', 'Music journals'],
            story: null,
            drill: {
              title: 'Fa Wants to Go to Mi — Ti Wants to Go to Do',
              steps: [
                'WARM-UP: Sing Exercises 9, 10, and 11 in order without stopping. Treat them as one long warm-up.',
                'Say: "Some notes have a pull — they want to go somewhere. They are not content to stay. Listen." Sing Do-Re-Mi-Fa slowly. Stop on Fa. Hold it. Silence. "Do you feel Fa pulling? Where does it want to go?" Let both students answer without coaching. Then sing Fa-Mi to resolve it. "Fa wants to fall to Mi. It pulls downward."',
                'Say: "Now Ti." Sing Do-Re-Mi-Fa-Sol-La-Ti slowly. Stop on Ti. Hold it. "Where does Ti want to go?" Let them answer. Sing Ti-Do to resolve. "Ti wants to rise to Do. It is one half-step below home — almost there."',
                'TENDENCY TONE GAME: Sing the scale to Fa and stop. Both students sing where Fa wants to go on solfège. Then sing to Ti and stop. Both students sing where Ti wants to go. Do each 3 times.',
                'Sing Exercises 9–11 again with tendency tone awareness. When Fa or Ti appears, feel the pull — even without speaking it.',
              ],
            },
            formIA: 'He participates in the tendency tone game by singing the resolution. He does not need to name the concept — the physical experience of resolution is the entire lesson for him.',
            formIIA: 'After the game he can name and explain both: "Fa wants to go to Mi because it is a half-step away and the ear expects it to fall. Ti wants to go to Do because it is one half-step below home." Write both in the journal.',
            sacredMusic: {
              searchTerm: 'O Come O Come Emmanuel Gregorian chant',
              label: 'O Come O Come Emmanuel — Phrase Learning',
              listenFor: 'Play the recording through the first verse.\n\nSay: "Let\'s learn the very opening phrase by ear. I will sing it, you echo." Sing the opening phrase. Students echo. Repeat until it sits in the voice. Then play the recording and hear the phrase you just learned inside the full chant.',
            },
            journal: {
              formIA: 'Write: "Fa goes to ___. Ti goes to ___." Fill in the blanks.',
              formIIA: 'Write both sentences in full: "Fa wants to go to Mi because _______. Ti wants to go to Do because _______." Full musical explanations.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do.\n\nSay: "Ti is almost home. Fa is one step above Mi. Remember the pull — it will serve you for the rest of your musical life."',
            teacherNotes: 'The physical sensation of resolution matters more than the explanation. Make sure both students feel the pull of Fa and Ti before you name it. If Form IA cannot feel the pull of Fa, sing Do-Re-Mi-Fa slowly and stop — ask: "Does it feel finished? Or does something want to happen?"',
            shortenIt: 'Just the tendency tone game. Skip the exercises in this session.',
            stretchIt: 'Form IIA: sing a scale and stop randomly on Fa or Ti at teacher\'s surprise choice. He must resolve the tendency tone correctly without being told which direction.',
            watchFor: 'Students who resolve Fa upward to Sol instead of downward to Mi. Both are musically possible in real music, but the primary downward tendency is what we are training here. Address gently: "Fa can go to Sol sometimes — but its most natural pull is down to Mi. Feel the difference."',
          },

          // ── Week 9 ──────────────────────────────────────────────────────────
          {
            id: '9.A', week: 9, session: 'A', unit: 'u2',
            title: 'Wider Leaps — Interval Names',
            duration: '~25 minutes',
            ladukhin: 'Exercises 12–13',
            materials: ['Piano', 'Ladukhin pp. 9–10 (Exercises 12–13)', 'Music journals'],
            story: null,
            drill: {
              title: 'Exercises 12–13 — Intervals Named',
              steps: [
                'WARM-UP: Tendency tone review — sing to Fa, resolve to Mi. Sing to Ti, resolve to Do. Both students together.',
                'INTERVAL REVIEW AND EXPANSION: Say: "We know steps and skips. Now we name them. Do to Re — two note names apart: Do, Re — that is a second. Do to Mi — three names: Do, Re, Mi — that is a third. Do to Fa — four names — a fourth. Do to Sol — five names — a fifth." Demonstrate each on the piano as you name it. Students echo-sing each interval after you name it.',
                'INTERVAL RECOGNITION GAME: Play two notes on the piano. Students call out second, third, fourth, or fifth. Start with obvious contrasts — Do to Sol (fifth), Do to Re (second). Then mix. 8–10 pairs.',
                'EXERCISE 12: Form IIA identifies any large intervals on the page before singing — points to them and names them. Teacher names them for Form IA. Sing together 3 times.',
                'EXERCISE 13: Same process. Identify first, then sing 3 times.',
              ],
            },
            formIA: 'He calls out step or skip — interval names are not required yet. For each exercise: teacher sings through once while he listens, then together 3 times with full echo support from teacher.',
            formIIA: 'He identifies interval names before singing each exercise. After Exercise 12: "Find one fourth in the exercise and point to it."',
            sacredMusic: {
              searchTerm: 'Kyrie Mass VIII De Angelis Gregorian',
              label: 'Kyrie — Mass VIII De Angelis',
              listenFor: 'Play the full Kyrie.\n\nSay: "Count the Kyries. Every time you hear the word Kyrie, one finger goes up." After listening: "How many?" The answer is nine — three groups of three: Kyrie three times, Christe three times, Kyrie three more times.\n\nSay: "This is Gregorian chant — the sacred music of the Western Church. We will return to it many times."',
            },
            journal: {
              formIA: 'Draw the answer: nine circles in three groups of three. Label each group.',
              formIIA: 'Draw the nine-circle structure. Label: Kyrie × 3 / Christe × 3 / Kyrie × 3. Write: "Kyrie means ___ in Greek. Christe means ___."',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "Steps, skips, and now intervals with names. The vocabulary of music — you are building it note by note."',
            teacherNotes: 'Interval naming for Form IIA is introduced here but not drilled to fluency until Unit 4. Plant the vocabulary now. Do not require instant recall — recognition in context is the early goal.',
            shortenIt: 'Skip the interval naming entirely. Sing the exercises with step/skip identification only.',
            stretchIt: 'Form IIA: after identifying a third in Exercise 12, ask him to find the same interval starting on a different note. "You found Do-Mi. Now find Re-Fa — that is also a third."',
            watchFor: 'Students who can name intervals when the exercise pauses but lose the skill during continuous singing. Both skills are worth building — they do not arrive at the same time.',
          },
          {
            id: '9.B', week: 9, session: 'B', unit: 'u2',
            title: 'Paired Sight-Singing',
            duration: '~20 minutes',
            ladukhin: 'Exercises 9–13 review',
            materials: ['Piano', 'Ladukhin pp. 7–10', 'Music journals'],
            story: null,
            drill: {
              title: 'Both Students Sight-Sing — Exercises 9–13',
              steps: [
                'WARM-UP: Sing Exercise 9 together — Form IIA leads from notation, Form IA follows by ear. Teacher sings along on the first pass only, then steps back.',
                'Sing Exercises 9 through 13 in order. Teacher provides minimal support, fading out on the second pass of each exercise.',
                'COLD CHALLENGE: Teacher calls out an exercise number. Students find it on the page and begin singing immediately — no preview, no warm-up. Do 3 exercises this way.',
                'EAR TRAINING: Teacher plays two notes on the piano. Students call out step or skip, up or down. Include wide skips (Do to Sol) and small steps (Mi to Fa). 8 pairs.',
              ],
            },
            formIA: 'He sings with teacher or with Form IIA\'s lead throughout. No solo required this session.',
            formIIA: 'He attempts at least one exercise completely solo — no teacher singing alongside. Teacher listens and observes errors without correcting during the solo.',
            sacredMusic: {
              searchTerm: 'Kyrie Mass VIII De Angelis Gregorian',
              label: 'Kyrie — Second Listening',
              listenFor: 'Play the Kyrie again.\n\nSay: "This time, track the three groups with your body. One gesture for each Kyrie, a different gesture for each Christe. Keep track of where you are in the structure." Students choose their own gestures.',
            },
            journal: {
              formIA: 'Draw an interval of a third: two notes on the staff with one skipped between them. Label it: "A third."',
              formIIA: 'Write a short narration: "What is an interval? Why does it matter in music?" Two to three sentences in your own words.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "You are both reading and singing from the same page. That is something."',
            teacherNotes: 'This is an informal assessment moment. How well does Form IIA manage independent sight-singing? Do not intervene immediately when he makes an error. The ability to self-correct mid-phrase is a real skill — it only develops if he is allowed to encounter and navigate errors.',
            shortenIt: 'Exercises 9 and 12 only. Skip the cold challenge.',
            stretchIt: 'Form IIA: sight-sing Exercise 13 cold — no preview at all.',
            watchFor: 'Form IIA relying on Form IA\'s voice to find and correct his own pitch. Briefly separate them: Form IIA sings while Form IA listens, then switch roles.',
          },

          // ── Week 10 ─────────────────────────────────────────────────────────
          {
            id: '10.A', week: 10, session: 'A', unit: 'u2',
            title: 'Feast Day — The Nativity',
            duration: '~25 minutes',
            ladukhin: 'Exercises 14–16',
            materials: ['Piano', 'Ladukhin pp. 10–11 (Exercises 14–16)', 'Music journals', 'Icon of the Nativity if available'],
            story: {
              title: 'The Nativity — Why the Church Sings at Christmas',
              text: 'Set out the Nativity icon if you have one.\n\nSay: "We are near December — and in the Church, we are preparing for the Nativity of Christ. In a few weeks, the Nativity Troparion will be sung at the feast. You have heard it in our lessons. Today we begin to learn it together."\n\nSing the Nativity Troparion once through yourself, beginning to end, while the students listen.\n\nSay: "This is not a Christmas song. It is a prayer — a hymn the Church has sung for over a thousand years on the night of the feast. When we sing it, we are not performing. We are offering our voices to the God who was born.\n\nSt. Romanos the Melodist — the man who could not sing — offered his voice at a Nativity feast exactly like this one. When you sing this troparion, you are standing in the tradition he began."',
            },
            drill: {
              title: 'Exercises 14–16 and Troparion Phrase 1',
              steps: [
                'TROPARION WARM-UP: Sing the opening phrase of the Nativity Troparion by ear — teacher sings, students echo. Do not explain the text yet. Let them hear and repeat.',
                'EXERCISE 14: Form IIA identifies all intervals on the page before singing. Teacher names them for Form IA. Sing together 3 times.',
                'EXERCISE 15: Same process. Teacher first, then together 3 times.',
                'EXERCISE 16: Teacher first, then together 3 times.',
                'TROPARION PHRASE 1: Return to the opening phrase. Teacher sings it again. Both students echo. Repeat until it sits comfortably in the voice. End the session with it.',
              ],
            },
            formIA: 'He echoes all troparion phrases. He sings Exercises 14–16 alongside teacher — no independent reading required. His ear is absorbing the troparion.',
            formIIA: 'He identifies intervals in Exercise 14 before singing. After the exercises, he attempts Troparion Phrase 1 solo once.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Nativity Troparion — Phrase Learning',
              listenFor: 'Play a professional recording of the Nativity Troparion.\n\nSay: "Listen to how they sing it. Notice the phrases — where the melody breathes. Then we will learn it together, phrase by phrase."',
            },
            journal: {
              formIA: 'Copy the solfège syllables of Troparion Phrase 1 — teacher dictates them slowly.',
              formIIA: 'Copy Troparion Phrase 1 with solfège syllables and the text of that phrase beneath.',
            },
            closingRitual: 'Sing Troparion Phrase 1 together as the closing — teacher leads, both students join.\n\nPlay middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "This is why we learn to sing. For this."',
            teacherNotes: 'This is a formation lesson as much as a music lesson. The troparion is encountered here as prayer before it becomes a singing assignment. That order is intentional. Do not rush the story to get to the exercises — the story is half the lesson.',
            shortenIt: 'Sing Exercise 14 only. Spend the remaining time on the troparion introduction and Phrase 1.',
            stretchIt: 'Form IIA: after learning Phrase 1 by ear, attempt to sight-sing it if a notated version is available. Compare what his ear learned to what the notation shows.',
            watchFor: 'Students who rush the troparion because the melody is already familiar from Liturgy. Familiarity is an asset — but sacred music is never hurried. Model the pace and reverence yourself.',
          },
          {
            id: '10.B', week: 10, session: 'B', unit: 'u2',
            title: 'Unit 2 Mid-Review',
            duration: '~20 minutes',
            ladukhin: 'Exercises 9–16 review',
            materials: ['Piano', 'Ladukhin pp. 7–11', 'Music journals'],
            story: null,
            drill: {
              title: 'Mid-Unit Review — Exercises 9, 11, 14',
              steps: [
                'WARM-UP: Sing Troparion Phrase 1 from memory — both students, no page.',
                'Sing Exercises 9, 11, and 14 in order — three representative exercises from the unit. Teacher sings along on the first pass only.',
                'EAR TRAINING: Teacher plays an interval on the piano. Students respond — second/third/fourth/fifth for Form IIA, step/skip for Form IA. 8 pairs.',
                'TENDENCY TONE TEST: Teacher sings the scale to Fa and stops. Both students resolve to Mi. Then teacher sings to Ti. Both resolve to Do. Do each twice.',
              ],
            },
            formIA: 'He participates in all ear training using step/skip vocabulary.',
            formIIA: 'He uses interval names throughout all ear training.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Nativity Troparion — Full Listening',
              listenFor: 'Play the full recording — approximately 2 minutes.\n\nStudents follow along, mouthing the words or humming the melody for phrases they know.\n\nAfter: "Which phrase do you know best now? Which still feels unfamiliar?"',
            },
            journal: {
              formIA: 'Draw a picture of the Nativity.',
              formIIA: 'Write: "Three things I have learned in Unit 2 so far."',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "We are halfway through Unit 2. The scale is complete. The notation is open. Keep going."',
            teacherNotes: 'This mid-unit review is informal — no rubric, no scores. Simply observe: what is solid and what needs reinforcement before the Unit 2 assessment in Week 12? Make a brief mental note.',
            shortenIt: 'Ear training only, then journal.',
            stretchIt: 'Form IIA: sing one complete exercise from memory — no page.',
            watchFor: 'Signs of fatigue with the exercises. If a student is restless, cut the drill short and spend more time on the troparion. Sacred music re-energizes when drill tires.',
          },

          // ── Week 11 ─────────────────────────────────────────────────────────
          {
            id: '11.A', week: 11, session: 'A', unit: 'u2',
            title: 'Kyrie — Learning the First Phrase',
            duration: '~25 minutes',
            ladukhin: 'Exercises 14–16 continued',
            materials: ['Piano', 'Ladukhin pp. 10–11', 'Music journals'],
            story: null,
            drill: {
              title: 'Exercises 14–16 Consolidation',
              steps: [
                'WARM-UP: Troparion Phrase 1 from memory. Then Exercises 14, 15, 16 in order — Form IIA leads from notation, teacher drops out on the second pass.',
                'FORM IIA SOLO: Say: "Sing Exercise 14 from the top. I will not sing along." Teacher listens without comment. Note one specific thing to address afterward — address only that one thing.',
                'FORM IA ECHO: While Form IIA does the solo, teacher turns quietly to Form IA: "Echo Exercise 14 phrase by phrase as I sing it softly." Both students work simultaneously.',
                'EXERCISE 16 together: close the drill with one strong pass of Exercise 16 — both students, both voices, full energy.',
              ],
            },
            formIA: 'Echo Exercise 14 phrase by phrase alongside teacher. Notation not required.',
            formIIA: 'Independent sight-singing of Exercise 14. Teacher observes silently and notes one error to address afterward — not during.',
            sacredMusic: {
              searchTerm: 'Kyrie Mass VIII De Angelis Gregorian',
              label: 'Kyrie — First Phrase by Ear',
              listenFor: 'Play the Kyrie recording through the first group of three Kyries.\n\nSay: "Let\'s learn the very first Kyrie phrase by ear. I will sing it, you echo."\n\nTeacher sings the first Kyrie phrase. Students echo. Repeat until it sits in the voice.\n\nSay: "That is Kyrie number one of nine. Three groups of three. We just learned the opening of the oldest chant in the Western Church."',
            },
            journal: {
              formIA: 'Draw nine circles in three groups of three. Label each group: Kyrie / Christe / Kyrie.',
              formIIA: 'Draw the three-part structure with labels. Write the Latin and English for each section: Kyrie = Lord, Christe = Christ, Eleison = have mercy.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "Next week: the Nativity lesson and Unit 2 review. We are nearly ready."',
            teacherNotes: 'The Kyrie from Mass VIII De Angelis will return in Year 2 Unit 8, where the students will learn it from the Liber Usualis in full square notation. This first hearing and phrase-learning is the seed of that later work. Plant it with care.',
            shortenIt: 'Skip Exercise 16. Spend more time on the Kyrie phrase.',
            stretchIt: 'Form IIA: learn two Kyrie phrases this session instead of one.',
            watchFor: 'Students who pick up the Kyrie melody quickly but sing it with a metered, marching quality. Gregorian chant is free-rhythm — it breathes with the text, not with a beat. If their echo sounds stiff, model the phrase more freely and ask them to follow the breath.',
          },
          {
            id: '11.B', week: 11, session: 'B', unit: 'u2',
            title: 'Full Unit Pass — Pre-Assessment',
            duration: '~20 minutes',
            ladukhin: 'Exercises 9–16 full review',
            materials: ['Piano', 'Ladukhin pp. 7–11', 'Music journals'],
            story: null,
            drill: {
              title: 'Exercises 9–16 Straight Through',
              steps: [
                'WARM-UP: Each student chooses one exercise to open the session with. He sings it from memory. Teacher listens.',
                'Sing Exercises 9 through 16 in order — teacher provides minimal support, fading out on the second pass of each.',
                'Observe quietly: which exercises are solid? Which are uncertain? This is pre-assessment information.',
                'Close with Nativity Troparion Phrases 1 and 2 together from memory.',
              ],
            },
            formIA: 'He sings all exercises alongside teacher. Note his pitch accuracy and his confidence — are they matching each other?',
            formIIA: 'He sings all exercises with minimal teacher support. Note his notation reading speed — does he hesitate? Where does he look up from the page?',
            sacredMusic: {
              searchTerm: 'Kyrie Mass VIII De Angelis Gregorian',
              label: 'Kyrie — Full Listening',
              listenFor: 'Play the full Kyrie.\n\nStudents follow along mentally, counting all nine Kyries silently.\n\nAfter: "Could you count all nine without writing them down?"',
            },
            journal: {
              formIA: 'Free journal: draw what sacred music looks and feels like to you today.',
              formIIA: 'Write: "One thing I understand about music now that I did not understand at the start of Unit 2."',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "Unit 2 assessment is next session. Just sing what you know — that is all that is needed."',
            teacherNotes: 'This is a pre-assessment preparation session. Do not tell students it is coming as a formal assessment. Simply frame next session as a review lesson. Students perform better when they are not anxious about being evaluated.',
            shortenIt: 'Exercises 9, 12, and 14 only.',
            stretchIt: 'Form IIA: self-assess. Ask: "Which exercise is hardest for you right now? Why?" His answer tells you where to focus in the assessment.',
            watchFor: 'Students who are strong in exercises but disconnected from the sacred music listening — or vice versa. Both streams matter equally in this course.',
          },

          // ── Week 12 ─────────────────────────────────────────────────────────
          {
            id: '12.A', week: 12, session: 'A', unit: 'u2',
            title: 'Unit 2 Review — Nativity Feast Lesson',
            duration: '~25 minutes',
            ladukhin: 'Exercises 9–16 review',
            materials: ['Piano', 'Ladukhin pp. 7–11', 'Music journals', 'Icon of the Nativity if available'],
            story: {
              title: 'The Nativity Troparion — An Offering',
              text: 'Set out the Nativity icon.\n\nSay: "Today is our Nativity lesson. We are going to sing \'Thy Nativity O Christ\' together — all the phrases we know — as an offering. Not as a drill, not as a rehearsal. As a prayer.\n\nThe troparion says: Thy Nativity, O Christ our God, has shone to the world the light of wisdom. For by it, those who worshipped the stars were taught by a star to adore Thee, the Sun of Righteousness, and to know Thee, the Orient from on high.\n\nThe Magi were astronomers — pagan scientists — and a star led them to the God of all creation. Their science brought them to worship. This is what the Church sings at Christmas. When you offer this hymn, your voice joins the voices that have sung it for over a thousand years."',
            },
            drill: {
              title: 'Unit 2 Assessment and Nativity Troparion',
              steps: [
                'NATIVITY TROPARION: Sing through all learned phrases together as an offering. Teacher leads, students join phrase by phrase. No stopping to correct. This is prayer.',
                'UNIT 2 EXERCISES 9–16: Sing in order. Teacher provides minimal support. Two passes — first together, second with teacher fading out.',
                'ASSESSMENT — COLD EXERCISE: Teacher points to one exercise at random. Students sight-sing immediately without preview. Note results.',
                'ASSESSMENT — SACRED MUSIC: Play 15 seconds of the Kyrie. "How many groups? What does Kyrie mean?" Play 15 seconds of Psalm 103. "Same tradition as the Kyrie, or different? How can you tell?"',
              ],
            },
            formIA: 'Unit 2 benchmark: can he follow notation to find Do, sing a full scale, and echo a simple pattern accurately? Note it.',
            formIIA: 'Unit 2 benchmark: can he read simple notation, identify intervals by name, and sight-sing a short exercise with preparation? Note it.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Nativity Troparion — Singing Together',
              listenFor: 'Play the recording. Both students sing along — not echoing, but together with the recording for all phrases they know.\n\nSay: "Offer your voices. This is the whole point."',
            },
            journal: {
              formIA: 'Copy one phrase of the Nativity Troparion — solfège syllables only, teacher dictates.',
              formIIA: 'Copy one phrase of the Nativity Troparion with solfège syllables and the text of that phrase beneath.',
            },
            closingRitual: 'Sing Nativity Troparion Phrase 1 together as the close.\n\nPlay middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do.\n\nSay: "Unit 2 is complete. The scale has seven steps — and you know every one."',
            teacherNotes: 'Unit 2 is the notation foundation. If either student cannot locate Do on the staff without help, spend one additional session here before moving to Unit 3. Do not enter the minor mode on a shaky diatonic foundation.',
            shortenIt: 'Skip the exercise review. Just the Nativity troparion and the cold assessment exercise.',
            stretchIt: 'Form IIA: write out the solfège syllables for all troparion phrases learned, from memory.',
            watchFor: 'The impulse to turn the troparion offering into a performance evaluation. The offering was made. That is complete in itself.',
          },
          {
            id: '12.B', week: 12, session: 'B', unit: 'u2',
            title: 'Unit 2 Celebration — Preview of Minor',
            duration: '~20 minutes',
            ladukhin: 'No new exercises',
            materials: ['Piano', 'Music journals'],
            story: null,
            drill: {
              title: 'Journal Share and Minor Preview',
              steps: [
                'JOURNAL SHARE: Each student shares one page from his Unit 2 journal. Teacher listens with genuine curiosity: "What made you draw it this way? What does this remind you of?" No evaluation.',
                'MINOR PREVIEW: Say: "Next unit we go somewhere new — the other side of the scale. A different home." Play the A natural minor scale on the piano slowly. Nothing more. Just the sound.',
                '"How does that feel compared to Do?" Let both students describe the feeling of minor in their own words — without being told what minor is. Receive every answer with interest.',
              ],
            },
            formIA: 'He shares his favorite drawing from the journal and describes it in one sentence.',
            formIIA: 'He shares his favorite written entry and reads it aloud.',
            sacredMusic: {
              searchTerm: 'Orthodox Holy Saturday Lamentations',
              label: 'Lamentations — Unit 3 Preview',
              listenFor: 'Play 60 seconds.\n\nSay: "This is a preview of what we will hear in Unit 3. Just listen. How does it feel?" Students answer without any coaching.\n\nSay: "That feeling has a name. You will learn it next week."',
            },
            journal: {
              formIA: 'Draw what minor sounds like. Any image.',
              formIIA: 'Write: "Major sounds like ___. Minor sounds like ___." One sentence each.',
            },
            closingRitual: 'Play middle C.\n\nSay: "Find Do. Sing it."\n\nSing Do together.\n\nSay: "We will go somewhere new next week. But Do will be waiting when we come back. It never moves."',
            teacherNotes: 'The minor preview plants curiosity. Do not explain the theory. The more students describe minor in their own emotional vocabulary before being told what it is, the better their ears will be oriented when Unit 3 begins.',
            shortenIt: 'Journal share only. Skip the minor preview.',
            stretchIt: 'Form IIA: play the A minor scale on the piano — one finger, slowly. The same white keys as C major, but beginning on A. Let him discover the difference through his own hands.',
            watchFor: 'Students who say "minor is sad" and leave it there. Gently complicate: "Does this feel sad the way a pop song feels sad? Or does it feel like something else — something more serious, more ancient?" The liturgical mode carries something deeper than ordinary sadness.',
          },
        ],
      },


      // ───────────────────────────────────────────────────────────────────────
      // UNIT 3: Minor — The Other Side of the Door (Weeks 13–18)
      // ───────────────────────────────────────────────────────────────────────
// UNIT 3 — Minor: The Other Side of the Door
// Weeks 13–18 | 12 sessions | Ladukhin Ex. 19–28 | A natural minor | La as tonal center
// Splice this array into the UNITS array in schola-cantorum.js as the third unit object.

{
  id: "unit3",
  title: "Unit 3: Minor — The Other Side of the Door",
  weeks: "13–18",
  ladukhin: "Exercises 19–28",
  overview: "A natural minor scale. La as tonal center. Major/minor contrast. Beat-keeping introduced. Two-part drone. Mid-year assessment.",
  lessons: [

    // ─────────────────────────────────────────
    // WEEK 13
    // ─────────────────────────────────────────

    {
      id: "13A",
      week: 13,
      session: "A",
      unit: "unit3",
      title: "The Other Side of the Door",
      duration: "25 min",
      ladukhin: "Exercise 19",
      materials: [
        "Ladukhin Elementary Course, pp. 14–15 (Ex. 19)",
        "Piano",
        "Music journals and pencils",
      ],

      story: "Before the drill, say: \"For twelve weeks we have lived in Do's house. Do is bright, settled, confident — like a sunny room. Today I am going to take you through a different door. This is the same house, but a different room. It is called minor. Listen first.\" Play A natural minor scale on piano slowly, all the way up and back down. Let the sound sit for a moment. Ask: \"How does that feel compared to what we usually sing?\" Accept any honest answer. Common responses: sad, dark, mysterious, like night, like the church on a fasting day. Say: \"All of those are right. Minor isn't worse than major — it's different. The Church sings in minor when she wants to say something deep, something serious, something that can't be said in a bright room. You will learn to feel the difference perfectly. That is what this unit is for.\"",

      drill: {
        title: "A Natural Minor Scale + Ladukhin Ex. 19",
        steps: [
          "Play A on the piano. Say: \"This is La. In minor, La is home — the same way Do is home in major. Sing it with me.\" Everyone sings La together on a comfortable breath.",
          "Say: \"The minor scale has the same seven steps as major, but in a different order, starting from La. Its name in solfège is: La-Ti-Do-Re-Mi-Fa-Sol-La. Say it with me.\" Everyone speaks the syllables together (not sung yet). Repeat twice.",
          "Sing the ascending A minor scale slowly on a quarter-note beat: La-Ti-Do-Re-Mi-Fa-Sol-La. Children echo. Repeat 3 times.",
          "Sing the descending scale: La-Sol-Fa-Mi-Re-Do-Ti-La. Children echo. Repeat 3 times.",
          "Ask: \"Where does Ti fall in this scale?\" (Second step up from La.) \"And where does Do fall?\" (Third step.) \"Do is still in the scale — but now it isn't home. La is home.\" Let this sink in without over-explaining.",
          "Open to Ladukhin Ex. 19. Teacher sings it once through at a moderate pace. Then everyone sings together. Repeat 2–3 times.",
          "Form IIA: Follow the notation on the page as you sing. Before beginning, identify where La appears — it will be on the second ledger space below the staff, or the teacher can point it out. Form IA: Follow the teacher's voice and echo. Do not require page-following yet.",
        ],
      },

      formIA: "Echo the scale and Ex. 19 entirely by ear. Do not require the page. If Form IA wants to look at the page, allow it — but the expectation is accurate echoing, not reading. Watch for La being sung flat; it often drops slightly. Simply sing it yourself clearly and continue.",
      formIIA: "Follow notation throughout. Before singing Ex. 19, point to the first note and identify it by solfège name. Identify the key: no sharps, no flats — but La, not Do, is home now. This is A natural minor. Form IIA should be able to name the difference between the major scale and this scale by the end of the session.",

      sacredMusic: {
        searchTerm: "Orthodox Holy Saturday Lamentations Byzantine",
        label: "Holy Saturday Lamentations",
        listenFor: "Play approximately 90 seconds. Say: \"This music is sung on the night before Pascha, at the tomb of Christ. It is one of the most beautiful things the Church sings all year. Listen for the feeling. Is it major or minor?\" (Minor.) \"Does it feel sad, or does it feel like something else?\" Accept all responses. The goal is not the right word — it is the habit of noticing that music carries meaning.",
      },

      journal: {
        formIA: "Write today's date. Write: 'La = home in minor.' Draw two doors — one labeled Major (bright) and one labeled Minor (dark). Decorate them however feels right.",
        formIIA: "Write today's date. Write: 'A natural minor scale: La-Ti-Do-Re-Mi-Fa-Sol-La.' Copy the scale on the staff, one note per space or line, ascending. Label each note with its solfège syllable underneath.",
      },

      closingRitual: "Play A on the piano. Everyone sings La together. Say: \"La is home now. Same as Do — just a different room.\" Then play C and sing Do. \"Both are home. Different rooms, same house.\"",

      teacherNotes: "The major/minor distinction is one of the most durable musical intuitions a child can develop. Do not rush to name the theory — the physical sensation of the scale change is what matters this week. Form IA will feel it before he can name it. Form IIA may want to know why it sounds different; the short answer is: 'The distances between the steps are in a different order.' Do not go further than that this week.",
      shortenIt: "Skip the journal entirely. Do opening, scale work, Ex. 19, and listening only.",
      stretchIt: "After Ex. 19, sing the C major scale and then the A minor scale back to back. Ask Form IIA: 'What note is different between these two scales?' (They share all the same pitches — the difference is which note is home.) This is an advanced observation; offer it only if Form IIA is clearly comfortable.",
      watchFor: "Both children singing La flat — it drifts down easily when the scale feels unfamiliar. Sing it clearly yourself each time. Form IA rushing through the descending scale and losing La at the bottom. Form IIA over-thinking the notation and under-singing.",
    },

    {
      id: "13B",
      week: 13,
      session: "B",
      unit: "unit3",
      title: "Major or Minor? — Learning to Hear the Room",
      duration: "20–25 min",
      ladukhin: "Exercise 19 review",
      materials: [
        "Ladukhin Elementary Course, p. 14 (Ex. 19)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Major/Minor Echo Game + Ex. 19 Review",
        steps: [
          "Find La together on the piano. Everyone sings La. Then find Do. Everyone sings Do. Do this twice — La, Do, La, Do — so both tonal centers are fresh in the ear.",
          "Review Ex. 19 together. Sing once straight through. Then ask Form IIA to sing it alone while Form IA listens. Then Form IA echoes it phrase by phrase with the teacher.",
          "Begin the Major/Minor Echo Game. Say: \"I am going to sing a short phrase — just four or five notes. You tell me: does it feel like Do's room (major) or La's room (minor)? No tricks. Just listen.\" Sing clearly, in a comfortable range.",
          "Phrase 1: Sing Do-Re-Mi-Sol-Mi (major, bright). Children call out: major.",
          "Phrase 2: Sing La-Ti-Do-Mi-Do (minor, darker). Children call out: minor.",
          "Phrase 3: Sing Do-Mi-Sol-Mi-Do (major, chord-like). Major.",
          "Phrase 4: Sing La-Do-Mi-Do-La (minor, settling on La). Minor.",
          "Phrase 5: Sing Sol-Mi-Re-Do (major cadence, familiar). Major.",
          "Phrase 6: Sing Mi-Re-Do-Ti-La (descending, settling on La). Minor.",
          "After each round, confirm the answer calmly. If a child misidentifies, simply say: \"Let me sing it again — listen for where it settles at the end. Does it rest on Do or on La?\" Re-sing and move on. Do not linger on errors.",
          "Final step: play La on the piano and ask both children to sing Ex. 19 from memory (without the page). This is the first memory test of a minor exercise.",
        ],
      },

      formIA: "In the major/minor game, if Form IA is uncertain, give him a physical cue: touch your chest on 'major' (warm, open) and cross your arms slightly on 'minor' (inward, contemplative). Let him point instead of speaking if he prefers. The physical association helps.",
      formIIA: "After the major/minor game, ask Form IIA: 'Could you tell the difference before the phrase ended, or only when it settled on the last note?' This builds metacognitive awareness of how the ear works. No wrong answer — it is a genuine question.",

      sacredMusic: {
        searchTerm: "Orthodox Holy Saturday Lamentations Byzantine",
        label: "Holy Saturday Lamentations — return",
        listenFor: "Play 60–90 seconds. Ask: \"Now that you have sung minor yourself — does this feel major or minor to you?\" (Minor.) \"Do you hear where it settles? What note feels like home?\" Do not require the correct answer — just the listening habit.",
      },

      journal: {
        formIA: "Write or dictate one sentence: 'Minor sounds like ___.' (Child fills in the blank with his own word.) Then draw something that feels minor to him — a candle at night, a rainy window, whatever arises.",
        formIIA: "Write: 'Major sounds like ___, minor sounds like ___.' Then write one sentence about the Lamentations: 'This music is sung on ___ because ___.' (Children fill in what they remember from the story in Session A.)",
      },

      closingRitual: "Play A on the piano. Everyone sings La. Play C. Everyone sings Do. Say: \"Two homes. We know them both now.\"",

      teacherNotes: "The major/minor echo game is one of the most formative exercises in the course. Run it every Session B for the next two weeks — vary the phrases but keep the structure. Children who can reliably distinguish major from minor by ear at this stage have a musical intuition that will serve them for life. Do not hurry to notation; ear-first is correct here.",
      shortenIt: "Skip the major/minor game. Do Ex. 19 review and journal only.",
      stretchIt: "Sing a phrase and ask Form IIA to echo it back in the opposite mode. For example: teacher sings Do-Re-Mi-Re-Do (major), Form IIA echoes La-Ti-Do-Ti-La (minor — same shape, different home). This is challenging and delightful. Offer it only if Form IIA is bored, not if he is still working on the basic distinction.",
      watchFor: "Children guessing on the major/minor game rather than listening. The tell is a quick answer with no pause. Slow the pace: 'Don't answer yet — let the last note ring. Now: which room?' Form IA losing La when singing Ex. 19 from memory (it will likely drift to Do — they are close neighbors).",
    },

    // ─────────────────────────────────────────
    // WEEK 14
    // ─────────────────────────────────────────

    {
      id: "14A",
      week: 14,
      session: "A",
      unit: "unit3",
      title: "La as Home — Exercises 20–21",
      duration: "25 min",
      ladukhin: "Exercises 20–21",
      materials: [
        "Ladukhin Elementary Course, pp. 14–16 (Ex. 20–21)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Minor Scale Fluency + Ladukhin Ex. 20–21",
        steps: [
          "Find La on the piano. Everyone sings La. Say: \"Before we open the book, let's sing the minor scale from memory.\" Sing La-Ti-Do-Re-Mi-Fa-Sol-La together. Ascending and descending. No page. Repeat until easy.",
          "Say: \"Exercises 20 and 21 live in La's room. Before we sing them, let's clap the rhythms first.\" Open to Ex. 20. Teacher claps the rhythm (using ta for quarter notes, ti-ti for eighth-note pairs, ta-a for half notes). Children echo clap. Repeat once.",
          "Now sing Ex. 20 together on solfège. Teacher leads at a moderate pace. Form IIA follows notation; Form IA echoes by ear. Repeat 2–3 times.",
          "Ask: \"Where does this exercise settle at the end?\" (On La.) \"Good. La is home — and the exercise knows it.\"",
          "Move to Ex. 21. Clap the rhythm first (same method). Then sing together. Ex. 21 should be slightly more challenging rhythmically. If either child struggles, clap and sing together slowly once, then at normal pace.",
          "Optional drill: sing Ex. 20 again, but this time both children keep the beat with their right fist — down on beat 1, up on beat 2 for 2/4; down-left-right-up for 4/4. Introduce this as a preview of what comes formally in Week 16.",
        ],
      },

      formIA: "Form IA claps and echoes all exercises by ear. Do not require page-following. If Form IA can echo Ex. 20 accurately after two repetitions, that is full success for this session. The test is: can he sing it back without the teacher's voice? Try once at the end of the drill.",
      formIIA: "Form IIA follows notation for both exercises and should be able to identify the time signature before singing. Before Ex. 21, ask: 'What is the time signature? How many beats in a measure?' Form IIA should also be able to name the tonal center (La) and identify the mode (minor) without prompting.",

      sacredMusic: {
        searchTerm: "Orthodox Holy Saturday Lamentations Byzantine",
        label: "Holy Saturday Lamentations — third listening",
        listenFor: "Play 90 seconds. This is the third time the children have heard this piece. Ask: \"Do you recognize it now? What do you notice that you didn't notice the first time?\" Say: \"The Church sings this music while walking around the tomb of Christ, carrying flowers. The whole congregation sings together. This is why we are learning to sing — so that when that moment comes at Holy Saturday, your voice is ready.\"",
      },

      journal: {
        formIA: "Copy Ex. 20, measure 1, with the teacher writing the staff and Form IA copying the noteheads in. Or: write out the solfège syllables of Ex. 20 from memory (La Ti Do Re... etc.) as many as he can recall.",
        formIIA: "Copy Ex. 20, measures 1–2, from the Ladukhin page. Write the solfège syllable name under each notehead. Circle every La — these are the home-note arrivals.",
      },

      closingRitual: "Play La on the piano. Everyone sings La. Hold it for four beats. Say: \"That is the sound of La's room. We're learning to live here.\"",

      teacherNotes: "By this session, both children should be able to sing the A minor scale ascending and descending from memory without the piano. If either child cannot, run the scale at the start of every remaining Unit 3 session until it is effortless. This is not a speed test — it is a foundation.",
      shortenIt: "Do only Ex. 20. Skip Ex. 21 and the journal.",
      stretchIt: "After Ex. 21, ask Form IIA to sing Ex. 20 starting on the final note and going backward (Sol-Fa-Mi-Re-Do-Ti-La reading right to left). This tests whether the solfège syllables are truly internalized or just memorized in sequence.",
      watchFor: "Form IA arriving on Do instead of La at the end of phrases — this is the most common error and shows that Do is still the dominant tonal center in the ear. Simply sing La clearly and move on. Over weeks, La will settle. Form IIA rushing Ex. 21 rhythmically — clap the rhythm again before re-singing.",
    },

    {
      id: "14B",
      week: 14,
      session: "B",
      unit: "unit3",
      title: "The Minor Scale Game",
      duration: "20–25 min",
      ladukhin: "Exercises 19–21 review",
      materials: [
        "Ladukhin Elementary Course, pp. 14–16",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Minor Scale Completion Game + Ex. 19–21 Review",
        steps: [
          "Find La together. Sing La together.",
          "Minor Scale Completion Game: Teacher sings the ascending scale but stops partway. Children complete it. Teacher: La-Ti-Do-Re— (stops). Children continue: Mi-Fa-Sol-La. Repeat with different stopping points: La-Ti— ; La-Ti-Do-Re-Mi-Fa— ; etc. Then do the same descending. This game builds the scale as an autonomous sequence in the ear.",
          "After 6–8 rounds of the game, say: \"Now let's see if you can complete the descending scale when I start in the middle.\" Teacher: Sol-Fa-Mi— (stops). Children continue: Re-Do-Ti-La.",
          "Sing Ex. 19, 20, and 21 straight through — one after another with no pause. Teacher leads at a consistent pace. This is a review run, not a teaching moment. Correct nothing; simply sing.",
          "At the end of the run-through, ask each child individually: \"Which exercise do you know best?\" Have each child sing that exercise alone. Affirm the effort, name what was accurate.",
        ],
      },

      formIA: "In the scale completion game, Form IA may need more starting material before he can continue. Start with stopping only one note from the end (La-Ti-Do-Re-Mi-Fa-Sol— → La), then two notes, working backward as confidence grows. The goal is the ear tracking the scale as a whole arc, not drilling syllables.",
      formIIA: "After the review run-through, ask Form IIA to sight-read Ex. 21 again, but this time conducting his own beat with his hand as he sings. Right hand: down for beat 1, up for beat 2 (for 2/4). This adds a coordination layer and deepens rhythmic ownership.",

      sacredMusic: {
        searchTerm: "Orthodox Holy Saturday Lamentations Byzantine",
        label: "Holy Saturday Lamentations — final hearing this unit",
        listenFor: "This is the last session with this recording for Unit 3. Ask: \"Can you now hum any part of this from memory?\" Let children try. Even one phrase hummed correctly is a significant achievement at this stage. Say: \"You have heard this four times. Your ears have memorized more than you think. That is how the Church teaches music — by hearing the same holy things again and again until they become part of you.\"",
      },

      journal: {
        formIA: "Free draw: draw something that reminds you of the minor scale. Label it 'Minor — La is home.'",
        formIIA: "Write: 'Why does the Church sing in minor on Holy Saturday?' (One or two sentences in their own words, based on what was discussed this week.) Then write the A minor scale syllables from memory, ascending and descending.",
      },

      closingRitual: "Play La on the piano. Children sing La. Then ask: \"Without the piano — can you find La in your voice?\" Let them try. Play La to confirm. Say: \"Your ear is beginning to know where home is.\"",

      teacherNotes: "The scale completion game is more valuable than it looks. It forces the child's ear to hold the scale as a continuous shape rather than a memorized sequence. By Week 15, both children should be able to complete the scale from any stopping point without hesitation. If one child cannot, add two more rounds of the game to the start of Week 15 Session A.",
      shortenIt: "Skip the scale completion game. Do only the review run-through and the journal.",
      stretchIt: "Run the scale completion game in reverse: teacher sings random interior notes of the scale (e.g., Mi) and asks: 'Which step is this? Count up from La.' Form IIA only.",
      watchFor: "Children singing the scale completion as a rote recitation rather than actually tracking the pitch. Watch their faces — are they listening or just reciting? If reciting, slow down and play each note on the piano as they sing.",
    },

    // ─────────────────────────────────────────
    // WEEK 15
    // ─────────────────────────────────────────

    {
      id: "15A",
      week: 15,
      session: "A",
      unit: "unit3",
      title: "Major and Minor Side by Side — Exercises 22–24",
      duration: "25 min",
      ladukhin: "Exercises 22–24",
      materials: [
        "Ladukhin Elementary Course, pp. 16–18 (Ex. 22–24)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Mode Identification + Ladukhin Ex. 22–24",
        steps: [
          "Warm up with both scales back to back: sing Do-Re-Mi-Fa-Sol-La-Ti-Do together (major), then La-Ti-Do-Re-Mi-Fa-Sol-La (minor). Do each once. Say: \"Two scales, two homes. Major: bright. Minor: deep. Both are good. Both are real.\"",
          "Say: \"Exercises 22–24 mix major and minor in the same session. Before we sing each one, I want you to tell me: major or minor? Look at the exercise. Where does it seem to settle?\" For Form IIA, this is a notation task: look for the final note. For Form IA, the teacher sings the first two bars and the child calls out the mode.",
          "Open to Ex. 22. Teacher sings it once. Children call out: major or minor? Then sing together 2–3 times.",
          "Ex. 23. Same process — identify first, then sing.",
          "Ex. 24. Same process. Ex. 24 is likely longer and more rhythmically varied. If it is, clap the rhythm before singing.",
          "After all three exercises: \"Let's sing 22, 23, and 24 in order — one straight run-through. No stopping.\" This consolidates the work and builds endurance.",
        ],
      },

      formIA: "Form IA identifies the mode by ear (teacher sings two bars). He does not need to read the notation to participate in this exercise. When singing, Form IA echoes by ear — if he loses his place, the teacher re-sings the phrase and he echoes it. No correction mid-exercise.",
      formIIA: "Form IIA identifies the mode by reading the notation: look at the final note of the exercise. Does it end on C (Do — major) or A (La — minor)? Before singing each exercise, Form IIA names the mode aloud. After singing, confirm: 'Did it feel the way you expected?' This builds the connection between reading and hearing.",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — first hearing",
        listenFor: "Play approximately 90 seconds. Say: \"This is one of the most beloved hymns in the Orthodox Church. It is a love song to the Mother of God. Listen: is it major or minor?\" (Major.) \"After all that minor music — does the major feel different now that you have lived in minor for two weeks?\" Let the children respond. This contrast is intentional and formative — the ear that knows minor hears major more vividly.",
      },

      journal: {
        formIA: "Copy the solfège syllables of Ex. 22 from memory — as many as he can recall. Write them in a line: La Ti Do Re... etc. It is fine if the sequence is incomplete.",
        formIIA: "Write the solfège syllables for the first four measures of Ex. 22 (work from the page). Then write: 'Ex. 22 is ___ (major/minor). I know because the last note is ___ (Do/La).'",
      },

      closingRitual: "Play A-C (La-Do) together on the piano — a minor third. Let it ring. Say: \"That gap between La and Do — that small distance — is part of what makes minor sound the way it does. Your ear knows it now.\" Then find Do alone. \"And here is home again.\"",

      teacherNotes: "Agni Parthene is introduced here as a major-mode contrast after two weeks of minor immersion. The sequence is deliberate: children who have spent time in minor hear major differently. Do not introduce Agni Parthene as a 'better' sound — just a different one. Both are gifts of the Church.",
      shortenIt: "Do only Ex. 22–23. Skip Ex. 24 and the journal.",
      stretchIt: "After identifying the mode of each exercise, ask Form IIA: 'Can you sing Ex. 22 starting on La instead of wherever it starts? What mode would it be then?' This begins transposition thinking without naming it formally.",
      watchFor: "Both children rushing to name the mode before listening carefully — the quick guess. Slow it down: 'Don't answer yet. Hear it again.' Form IIA may conflate key signature with mode (no sharps/flats = C major, but A natural minor also has no sharps/flats). If this comes up, address it simply: 'Both A minor and C major have no sharps or flats. The difference is where the music settles, not what it avoids.'",
    },

    {
      id: "15B",
      week: 15,
      session: "B",
      unit: "unit3",
      title: "Dictation Lite — Hearing the Notes and Writing Them",
      duration: "20–25 min",
      ladukhin: "Exercises 22–24 review",
      materials: [
        "Ladukhin Elementary Course, pp. 16–18",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Solfège Dictation Game + Ex. 22–24 Review",
        steps: [
          "Begin with both scales as in Session A — major then minor, sung together once each.",
          "Dictation Lite: Say: \"I am going to sing a short pattern — four notes. Echo it back to me on solfège. Then write the syllable letters in your journal.\" Use these abbreviations: D (Do), R (Re), M (Mi), F (Fa), S (Sol), L (La), T (Ti).",
          "Pattern 1 (major): D-R-M-R. Children echo, then write: D R M R.",
          "Pattern 2 (minor): L-T-D-T. Echo, then write: L T D T.",
          "Pattern 3 (major): M-F-S-M. Echo, write: M F S M.",
          "Pattern 4 (minor): D-L-S-L. Echo, write: D L S L. (Note: this starts on Do and descends to La — a minor arrival. Ask: 'Did that feel like it arrived at home?' Yes — La.)",
          "Pattern 5 (teacher's choice): compose a 5-note pattern that ends on La. Children echo, write, then identify: major or minor?",
          "After dictation, sing Ex. 22 and Ex. 23 as a review run-through. No teaching — just singing. Use this to assess how much has been retained since Session A.",
        ],
      },

      formIA: "For the dictation, Form IA writes (or dictates) the syllable letters after echoing. If writing is slow, the teacher can write the letters in large print and Form IA circles the correct ones from a list. The ear work is primary; the writing is secondary. Four patterns is enough for Form IA. Stop before fatigue.",
      formIIA: "Form IIA does all five patterns. After writing the letters, Form IIA reads them back aloud on solfège (not singing — just reading the syllables). This is the first step toward reading solfège without singing, a skill needed for sight-reading. If the syllable letters are wrong, re-sing the pattern slowly and ask: 'Which note did I start on? D, R, M, F, S, L, or T?'",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — second hearing",
        listenFor: "Play 90 seconds. This time, ask: \"Can you follow the melody going up or going down? Raise your hand when it goes up, put it on your lap when it goes down.\" This is the same up/down tracking from Unit 1, now applied to a full sacred piece. Children may laugh at themselves — that is fine. The body-engagement deepens the listening.",
      },

      journal: {
        formIA: "Write the solfège syllable letters from Dictation Patterns 1–2. Draw a small picture next to each: Pattern 1 (major) gets a sun; Pattern 2 (minor) gets a moon.",
        formIIA: "Write all five dictation patterns. Mark each one M (major) or m (minor). Then write one sentence about Agni Parthene: 'This hymn feels ___ because ___.'",
      },

      closingRitual: "Play La on the piano. Everyone sings La. Then: \"Without the piano — let's all find La by ear.\" Pause. Children hum or sing La internally, then voice it. Play La to confirm. Say: \"Your ear is learning. Good.\"",

      teacherNotes: "Dictation Lite is introduced here at the simplest possible level: echoing and then writing syllable letters. This is not standard music dictation — it is a pre-notation literacy step, connecting what the ear hears to a symbol on the page. Do not introduce staff notation in dictation until Unit 4. For now, the letters are enough.",
      shortenIt: "Three dictation patterns only. Skip the review run-through.",
      stretchIt: "After the dictation, ask Form IIA to sing one of the patterns starting on a different note — for example, Pattern 1 (D-R-M-R) starting on Sol instead of Do: Sol-La-Ti-La. Write the new syllable letters. Ask: 'Same shape, different home?'",
      watchFor: "Children writing dictation letters before they have accurately echoed the pattern. Sequence matters: echo first, hold the pattern in the ear, then write. If a child rushes to write, say: 'Sing it back to me first. Then write.' Form IIA may write confidently and sing inaccurately — check by asking him to sing from what he wrote.",
    },

    // ─────────────────────────────────────────
    // WEEK 16
    // ─────────────────────────────────────────

    {
      id: "16A",
      week: 16,
      session: "A",
      unit: "unit3",
      title: "Keeping the Beat — Exercises 25–26",
      duration: "25 min",
      ladukhin: "Exercises 25–26",
      materials: [
        "Ladukhin Elementary Course, pp. 18–20 (Ex. 25–26)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Beat-Keeping Introduction + Ladukhin Ex. 25–26",
        steps: [
          "Warm up with the minor scale — ascending and descending — sung together once.",
          "Say: \"Exercises 25 and 26 are longer and have more rhythmic variety. Before we sing, we are going to learn how to keep the beat with our hand. This is what a conductor does — but simpler.\" Demonstrate: right fist, move down on beat 1, up on beat 2 for 2/4. Say: 'Down, up. Down, up.' Practice together, speaking 'down, up' aloud in time.",
          "Now practice with quarter notes and half notes on Do: tap down-up and sing: Do (down) Do (up) Do (down) — — (up, held). Children follow. This connects the beat gesture to the rhythm.",
          "Open to Ex. 25. Teacher sings it once while keeping the beat gesture. Children watch. Then everyone sings and keeps beat together. If the beat-keeping causes vocal stumbling, drop the gesture and sing first — add the gesture after two runs.",
          "Ex. 26. Same approach. Clap the rhythm alone before adding pitch. Then sing with beat gesture.",
          "At the end: sing Ex. 25 and 26 together without the beat gesture, relying on the internalized pulse. Ask: 'Did you feel the beat inside even when your hand was still?' This is the goal — internal pulse, not external gesture.",
        ],
      },

      formIA: "Form IA keeps the beat gesture throughout. If he loses the gesture while singing, gently tap his fist with yours to restore the down-up motion. Do not stop the exercise. The coordination of singing and conducting takes weeks — begin it now and do not expect mastery. For Ex. 26, allow Form IA to echo phrase by phrase if the full exercise is too long.",
      formIIA: "Form IIA keeps the beat gesture and follows notation simultaneously. Before Ex. 25, identify the time signature and the time value of each note type present. After singing, ask: 'Were there any places where your beat and your singing did not agree? Where?' This self-assessment habit is more valuable than the teacher identifying the error.",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — learning the opening phrase",
        listenFor: "Play 90 seconds. Say: \"This week we are going to learn the opening phrase by ear. Listen to just the first line. I will sing it with you after.\" Play the first phrase 2–3 times. Then teacher sings it slowly on solfège (best attempt — it is in a Byzantine mode, so approximation in fixed-do is acceptable). Children echo. Repeat until they can sing the opening phrase confidently. This is their first phrase of a full sacred melody memorized in this course.",
      },

      journal: {
        formIA: "Draw the beat gesture: an arrow going down, then up. Label: 'Beat 1 = down, Beat 2 = up.' Write: 'I keep the beat with my ___.' (Hand.)",
        formIIA: "Write the time signature of Ex. 25 and Ex. 26. Then write the opening phrase of Agni Parthene in solfège syllables as best as you can recall from the listening. (Approximation is fine — this is ear work, not accuracy work.)",
      },

      closingRitual: "Play La. Everyone sings La. Tap the beat together: down-up, down-up, four times in silence (just tapping). Say: \"The beat is always there — even when we can't hear it. Good singers feel it inside.\"",

      teacherNotes: "Beat-keeping with the hand is formally introduced here. Do not expect it to be clean this week. The goal is the concept: there is a steady pulse underneath all music, and good singers feel it internally. The gesture is training wheels; the internal pulse is the destination. Some children find conducting and singing simultaneously very difficult — this is normal and will improve with repetition.",
      shortenIt: "Skip the beat gesture entirely. Sing Ex. 25 and do the Agni Parthene phrase-learning. Drop Ex. 26.",
      stretchIt: "Ask Form IIA to conduct a 4/4 beat (down-left-right-up) while singing. This is significantly harder and should only be attempted if the 2/4 beat is effortless.",
      watchFor: "Beat gesture becoming a distraction — children watching their hand instead of listening to their voice. If this happens, stop the gesture and sing purely. The gesture can return next session. Form IA stopping singing to concentrate on the gesture — singing comes first. Form IIA rushing the beat when the notes get faster.",
    },

    {
      id: "16B",
      week: 16,
      session: "B",
      unit: "unit3",
      title: "Beat Game — One Sings, One Conducts",
      duration: "20–25 min",
      ladukhin: "Exercises 25–26 review",
      materials: [
        "Ladukhin Elementary Course, pp. 18–20",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Beat-Keeping Partner Game + Ex. 25–26 Review",
        steps: [
          "Find La. Sing La together. Minor scale, once ascending.",
          "Beat Partner Game: Assign roles. Form IIA keeps the beat with his hand (down-up for 2/4). Form IA sings Ex. 25. Switch roles. Then both sing while both keep the beat.",
          "Repeat with Ex. 26. Switch roles again.",
          "Discussion: Ask Form IIA: 'When you were keeping the beat and Form IA was singing — did his singing stay with your beat? Where did it wander?'",
          "Ask Form IA: 'When Form IIA was keeping the beat for you — did it help or distract you?'",
          "This conversation is genuinely interesting to children at this age. Let it breathe for a minute. It builds awareness of ensemble — how singers have to listen to each other, not just to their own voice.",
          "Final run: both children sing Ex. 25 and Ex. 26 together with no gesture — purely by ear and internal pulse. Teacher keeps the beat internally. How together are they?",
        ],
      },

      formIA: "Form IA's primary job is to keep a steady beat while the other child sings. This role reversal is important: he is not performing but serving. If his beat wanders, tap gently on his hand to restore it without speaking. After switching roles, affirm: 'You kept a very steady beat. That helped Form IIA know where to go.'",
      formIIA: "Form IIA's beat gesture should be clean and deliberate — a real conductor's motion, not a vague waving. When Form IIA is singing while Form IA conducts, notice whether the conducting actually influences the singing. This is a lesson in ensemble dependence. Say afterward: 'A choir follows the conductor. The conductor follows the music. Nobody is in charge — they are all listening to the same thing.'",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — review and deepen",
        listenFor: "Play 90 seconds. Ask: 'Can you sing the opening phrase with the recording now?' Let them try. Even partial matching is success. Then ask: 'What does this hymn make you think of? What image comes to mind?' This is verbal narration about music — a Charlotte Mason mode applied to listening.",
      },

      journal: {
        formIA: "Write: 'This hymn is about ___.' (His own words describing what he heard — the text, the feeling, an image.) Draw one thing.",
        formIIA: "Write: 'This hymn is about ___.' Then write: 'When I keep the beat, the singer ___. When I sing, the beat ___.' (Completing these sentences from his experience of the partner game.)",
      },

      closingRitual: "Play La. Everyone sings La. Then: teacher begins a 2/4 beat gesture and both children join — tapping in silence together for eight beats. Say: \"Same beat. Two people. One pulse. That is what a choir is.\"",

      teacherNotes: "The partner beat game introduces ensemble consciousness for the first time. This is not just rhythmic training — it is a formative lesson about what it means to sing with others. The child who learns to keep a steady beat for another singer is learning something the Church needs: a voice that holds its place so others can find theirs.",
      shortenIt: "Skip the partner game. Do Ex. 25–26 review straight through and then the journal.",
      stretchIt: "Ask Form IIA to conduct Ex. 26 from memory while Form IA sight-echoes it. Form IIA must keep the beat without looking at the page. This requires internalizing both the rhythm and the notation simultaneously.",
      watchFor: "The partner game becoming competitive — one child trying to make the other stumble. If this happens, pause and say: 'We are not testing each other. We are helping each other. A choir is not a competition.' Form IA getting frustrated with the beat role and abandoning it. Keep the roles short and rotate quickly.",
    },

    // ─────────────────────────────────────────
    // WEEK 17
    // ─────────────────────────────────────────

    {
      id: "17A",
      week: 17,
      session: "A",
      unit: "unit3",
      title: "Two Voices Begin — Exercises 27–28 and the Drone",
      duration: "25 min",
      ladukhin: "Exercises 27–28",
      materials: [
        "Ladukhin Elementary Course, pp. 20–21 (Ex. 27–28)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Two-Part Introduction (Drone) + Ladukhin Ex. 27–28",
        steps: [
          "Minor scale warm-up: both children sing La-Ti-Do-Re-Mi-Fa-Sol-La together. Then keep the beat while singing. One run, steady, no rushing.",
          "Say: \"Exercises 27 and 28 are the hardest exercises in Unit 3. We are going to take them slowly. But first, I want to try something new — two voices at the same time.\" Explain what a drone is: 'A drone is a note that holds steady while another voice moves. You hear it in Byzantine chant all the time. The lowest voice holds one note — La — while the melody moves above it. Today we will try this.'",
          "Drone exercise: Form IA sings La and holds it (sustained, comfortable, easy forward tone). Teacher sings the A minor scale up and back down above that drone. Can Form IA hold La while the melody moves? Try 2–3 times.",
          "Switch: Form IIA holds the drone on La while teacher sings Ex. 19 above it. Form IIA must hold the note without being pulled off by the moving voice. This is harder than it sounds.",
          "Now open to Ex. 27. Teacher sings it once. Then everyone sings together with beat gesture. Repeat 2 times.",
          "Ex. 28. Clap the rhythm first. Then sing together. If either child struggles significantly, sing phrase by phrase: teacher sings a phrase, children echo.",
          "Optional two-part: if the drone was easy, try this: teacher sings Ex. 27 while Form IIA holds La throughout. The two voices will occasionally make a consonant interval (a fifth, a third) — this is beautiful. Name it: 'Did you hear how those two notes fit together? That is harmony.'",
        ],
      },

      formIA: "Form IA's primary job in the two-part work is to hold the drone on La without wavering. This is a real musical challenge — most children are pulled off the drone by the moving voice. Do not correct mid-drone. After the exercise, say: 'You held it. That is what the bottom voice of a choir does: it holds so the melody has something to stand on.' If Form IA cannot hold the drone, skip the two-part and focus on Ex. 27–28 solo.",
      formIIA: "Form IIA attempts the drone and also leads the melody in the two-part exchange. After the session, ask: 'When you were holding La and I was singing the scale — could you hear your own note, or did you lose it?' This is a real ensemble skill question. Affirm the effort regardless of the outcome.",

      sacredMusic: {
        searchTerm: "Orthodox Vespers Lord I Call Byzantine minor",
        label: "Lord I Call at Vespers — minor preview",
        listenFor: "Play 90 seconds. Say: 'This is a piece from Vespers — the evening prayer service. Listen for the mode: major or minor?' (It has a minor-inflected, modal character.) 'Does it sound like our minor scale, or something a little different?' This prepares the ear for Unit 4's modal work without naming the theory yet.",
      },

      journal: {
        formIA: "Draw two voices: one holding a flat line (the drone) and one moving up and down above it (the melody). Label them: 'Drone' and 'Melody.' Write: 'The drone holds ___. The melody ___.'",
        formIIA: "Write: 'A drone is ___.' Then copy Ex. 27, measures 1–2, from the page. Identify the tonal center (La).",
      },

      closingRitual: "Play La on the piano. Everyone sings La — hold it for six beats together. Let it ring. Say: \"That held note is the foundation of harmony. You held it well.\"",

      teacherNotes: "The drone introduction is the first genuine two-part work in the course. It is deliberately simple — one voice is stationary — but it requires real musical independence. A child who can hold a drone while another voice moves is ready for actual two-part solfège in Unit 4. Do not push to full two-part if the drone is not yet secure. The drone is the prerequisite.",
      shortenIt: "Skip the drone entirely. Sing Ex. 27 and Ex. 28 only, with the beat gesture. Skip the journal.",
      stretchIt: "If the drone on La is easy for both children, try a drone on Mi (the fifth of La — a perfect fifth interval). Form IA holds Mi while teacher sings Ex. 19. The resulting harmony is richer. Ask: 'Does that sound like the Byzantine recordings we have heard?'",
      watchFor: "Form IA drifting off the drone pitch within the first four beats — this is very common. The moving voice pulls the ear. Solution: play La quietly on the piano as a sustained reference tone while Form IA holds it and teacher sings the melody. Over several sessions the piano reference can be removed. Form IIA becoming so focused on holding his part that his tone becomes pressed or tight. Tension in the voice is always the wrong solution. Drop the volume and ease the tone.",
    },

    {
      id: "17B",
      week: 17,
      session: "B",
      unit: "unit3",
      title: "Drone Practice and Minor Survey",
      duration: "20–25 min",
      ladukhin: "Exercises 19–28 — selected review",
      materials: [
        "Ladukhin Elementary Course, pp. 14–21",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Drone Repeat + Full Minor Survey",
        steps: [
          "Find La. Sing La together. Say: \"Before we do anything else — the drone. Let's try it again.\" Form IA holds La (sustained) while teacher sings the A minor scale. Then Form IIA holds La while teacher sings Ex. 19 above it.",
          "Drone variation: both children hold La together as a double drone while teacher sings Ex. 22 (which they know well). Two drone voices holding La simultaneously creates a fuller, rounder sound. After: 'Did you feel that? Two voices holding La together — that's the bottom of a choir.'",
          "Minor Survey: sing exercises from across Unit 3 in sequence — Ex. 19, 22, 25, 27. Not all of them; a curated selection. Teacher cues each one by playing its starting note on the piano and saying the exercise number. Children sing from memory or notation.",
          "Between exercises, brief questions: 'Was that one easy now?' 'Where did you feel uncertain?' This builds metacognitive habit — the child who knows what he knows and what he doesn't is ready to self-correct.",
          "End with the A minor scale ascending and descending, sung slowly and beautifully, as if offering it. Say: 'This is a scale we know now. It lives in you.'",
        ],
      },

      formIA: "Form IA's participation in the survey should be active — he is not just following along but making real musical decisions about when to sing confidently and when to listen and correct. If a survey exercise is too hard, skip it and note it for review in Week 18. Do not push through material that has not been absorbed.",
      formIIA: "Form IIA should be able to sing any exercise from the Unit 3 set cold with notation — no preparation. In the survey, ask Form IIA once to sight-read an exercise he hasn't seen in a week: open to Ex. 23 without singing it first. Can he read it? Where does he stumble? What does he need to prepare? This is the kind of honest self-assessment that Unit 4 will require.",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — synthesis",
        listenFor: "This is the final hearing of Agni Parthene in Unit 3. Play the opening phrase twice. Say: 'Sing with it.' Let both children join the recording on the opening phrase they have learned by ear over the past weeks. Even a rough match is success. Then play 60 more seconds. Say: 'You sang with a Byzantine recording. That is what this course is building toward — your voice joining that sound.'",
      },

      journal: {
        formIA: "Free journal: draw or write anything from Unit 3. What was the hardest thing? What was the most beautiful thing?",
        formIIA: "Write a brief summary of Unit 3: 'In Unit 3 we learned ___.' (At least three things listed.) Then write: 'The thing I want to keep practicing is ___.'",
      },

      closingRitual: "Play La. Everyone sings La. Hold it together for eight beats, quietly, like a prayer. Let it fade. Say nothing for a moment. Then: 'See you at the review.'",

      teacherNotes: "Session B of Week 17 is a consolidation session in preparation for the mid-year assessment in Week 18. Do not introduce any new material. The goal is for both children to enter the assessment with confidence. If the survey reveals significant gaps in any exercise, note which ones for the Week 18A review.",
      shortenIt: "Skip the drone variation. Do the survey (Ex. 19, 22, 25) and the journal only.",
      stretchIt: "Ask Form IIA to teach Form IA the A minor scale — to sing it, explain where La is, and demonstrate the drone. Teaching consolidates knowledge more deeply than reviewing it. Monitor for accuracy without interrupting.",
      watchFor: "Fatigue during the survey — this is a longer drill than usual. Watch body language: drooping posture and flat tone mean the child is tired. Shorten the survey immediately and go to the listening or journal. A fatigued voice is a voice that will sing badly and form bad habits. End before the wall.",
    },

    // ─────────────────────────────────────────
    // WEEK 18
    // ─────────────────────────────────────────

    {
      id: "18A",
      week: 18,
      session: "A",
      unit: "unit3",
      title: "Unit 3 Review and Mid-Year Assessment",
      duration: "25–30 min",
      ladukhin: "Exercises 19–28 — assessment",
      materials: [
        "Ladukhin Elementary Course, pp. 14–21",
        "Piano",
        "Assessment log (paper and pencil for teacher)",
        "Music journals",
      ],

      story: "Before the assessment, say: \"Today is a review and assessment. I want to hear each of you sing so I know exactly where you are — not to grade you, but to know what we should work on next. There are no wrong notes on assessment day. There is only honest singing. The most important thing you can do is sing what you actually know, not what you think you should know. If you are not sure of a note, sing it anyway. That is truth, and truth is what we are practicing.\"",

      drill: {
        title: "Mid-Year Assessment Protocol",
        steps: [
          "WARM-UP (5 min): Sing the A minor scale together, ascending and descending. Sing Do major scale. Major/minor echo game: teacher sings two phrases, children identify. One round.",
          "FORMAL ASSESSMENT — Form IIA (10 min): (1) Sight-sing Ex. 22 cold from notation — no preparation. Record pitch accuracy score (1–4). (2) Sight-sing Ex. 27 with one preparation run. Record pitch and rhythm. (3) Teacher plays a 4-note pattern (include at least one minor pattern). Form IIA writes the solfège letters. Record reading/writing accuracy. (4) Identify: teacher sings a phrase — minor or major? Three examples. Record recognition score.",
          "FORMAL ASSESSMENT — Form IA (10 min): (1) Echo Ex. 19 phrase by phrase — teacher sings, child echoes. Record pitch accuracy. (2) Echo Ex. 22 opening phrase. Record. (3) Teacher plays C minor scale (not yet taught) — can Form IA identify: major or minor by sound alone? (4) Find La in his voice from a single C played on piano: can he find La without being given the note? (Challenging — if not achieved, it is simply noted, not penalized.)",
          "Record scores in the assessment log. Use the 4-point rubric from the Parent Guide: pitch accuracy, rhythm accuracy, reading, sacred music recognition.",
          "After both assessments, say: 'Thank you. That was honest singing. I heard some beautiful things and I know what we should work on next. We are ready for Unit 4.'",
        ],
      },

      formIA: "Form IA's assessment is entirely oral and by ear. No notation reading required. The goal is to establish a baseline on pitch accuracy, melodic memory, and ear-based mode recognition. If Form IA scores 2 or below on pitch accuracy, plan to spend the first two weeks of Unit 4 with additional echo reinforcement before introducing new material.",
      formIIA: "Form IIA's assessment includes notation reading. A score of 3 or above on both sight-singing exercises indicates readiness for Unit 4's new keys and rhythms. A score of 2 on sight-singing means the unit's material was learned by ear but not yet transferred to the page — plan additional notation work in Unit 4.",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — assessment singing",
        listenFor: "At the end of the assessment, play the opening phrase of Agni Parthene. Ask both children to sing it — not together, one at a time. This is the sacred music assessment: can they sing the melody they have heard across six sessions by ear? Record this informally. It is the most meaningful indicator of whether the sacred music listening has penetrated.",
      },

      journal: {
        formIA: "Write or dictate: 'Today I sang ___.' (One thing he feels good about.) 'Next I want to learn ___.'",
        formIIA: "Write: 'My strongest skill right now is ___. The skill I want to improve in Unit 4 is ___.' This self-assessment is kept in the journal and revisited at the end of Unit 4.",
      },

      closingRitual: "Play both La and Do on the piano together (a minor third). Let it ring. Say: \"You have learned two scales, two homes, two voices beginning to work together. Unit 4 is new landscapes. We will come back to this room — but now we know it.\"",

      teacherNotes: "Record assessment scores in the teacher's log before ending the session — memory fades. The mid-year assessment is not high-stakes, but it is important data. If both children score 3–4 on pitch accuracy and 2–3 on reading, proceed with Unit 4 as written. If either child scores 1–2 on pitch accuracy, plan the first two Unit 4 sessions as review/reinforcement before introducing G major. The sacred music portion of the assessment — singing Agni Parthene from memory — often surprises teachers. Children absorb far more from listening than formal drill suggests.",
      shortenIt: "Assess pitch accuracy and sacred music recognition only. Skip notation reading and written dictation.",
      stretchIt: "For Form IIA: after the standard assessment, ask him to sight-sing a four-measure exercise from the Danhauser supplement (a book not yet used). This cold sight-reading from an unfamiliar source gives the truest measure of notation transfer.",
      watchFor: "Assessment anxiety — some children freeze when told they are being assessed. If you see this, immediately reframe: 'This is not a test. I am listening to help you, not judge you.' Keep your own face neutral and encouraging throughout. Any honest singing is the correct response.",
    },

    {
      id: "18B",
      week: 18,
      session: "B",
      unit: "unit3",
      title: "Celebration — Sing Everything You Love",
      duration: "20–25 min",
      ladukhin: "No new exercises — celebration and free singing",
      materials: [
        "Ladukhin Elementary Course (any pages the children want)",
        "Piano",
        "Music journals and pencils",
      ],

      story: "Begin: \"Today there are no drills and no requirements. We have spent six weeks in the minor room. Today we celebrate what you know and we sing for joy — not because it is assigned, but because singing is good.\" Let the children choose. Ask: \"What do you want to sing? Any exercise, any scale, anything we have learned since September.\" Follow their lead. If they choose hard things, sing them. If they choose easy things, sing them beautifully.",

      drill: {
        title: "Free Singing — Children Choose",
        steps: [
          "Ask each child: 'What do you want to sing?' Write down their requests.",
          "Sing everything they request, in order. Teacher leads. No correction, no re-singing for improvement. Just singing.",
          "If one child chooses and the other is less interested, draw the second child in naturally: 'Can you add the drone on La while Form IIA sings this one?'",
          "End the free singing section with Agni Parthene — teacher sings the opening phrase, children join. This is the piece they have come to know over six sessions. Let them own it.",
        ],
      },

      formIA: "Form IA may choose exercises that seem easy — Ex. 1 or Ex. 2 from Unit 1. This is perfectly correct. Celebration should feel like abundance, not challenge. Let him sing what he loves. Affirm the choice: 'That was one of our very first exercises. You sing it beautifully now.'",
      formIIA: "Form IIA may choose harder things — he may even attempt something not yet formally taught. Allow it. If he struggles, sing alongside him. This is celebration; there is no failure today.",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — full celebration hearing",
        listenFor: "Play 2–3 minutes — more than usual. Say: \"Just listen. You have earned this.\" Let the music be a gift at the end of six weeks of work. Afterward, ask one question: \"Is there anything in this music you want to be able to sing perfectly someday?\" Let them answer. This is the seed of long-term aspiration.",
      },

      journal: {
        formIA: "Free journal: draw or write anything. 'My favorite thing I learned in Unit 3.' No requirements on format or length.",
        formIIA: "Free journal: write a paragraph titled 'What I know now that I didn't know six weeks ago.' This is the child's own narration of his learning — the most Charlotte Mason form of assessment.",
      },

      closingRitual: "Find La together. Find Do together. Then play both at once on the piano — A and C, held together. Say: \"Major and minor live in the same house. You know both rooms now. See you in Unit 4.\"",

      teacherNotes: "The celebration lesson is not optional. Charlotte Mason understood that delight sustains the habit. A child who ends a unit with joy and choice will return to Unit 4 with greater willingness than one who ends with a test and a correction. Keep this session truly free — resist the urge to sneak in one more drill. The six weeks of work are complete. Celebrate them.",
      shortenIt: "This session cannot be shortened. If time is truly limited, do only the free singing and the closing ritual. Skip the journal.",
      stretchIt: "There is no stretch for a celebration lesson. If Form IIA specifically asks to be challenged, say: 'We start Unit 4 next week — it will challenge you. Today is for joy.'",
      watchFor: "Using this session to squeeze in remediation for assessment gaps. Do not. Remediation belongs to the first sessions of Unit 4. This session is the close of Unit 3, and it must close with joy or the habit of showing up will erode.",
    },

  ], // end Unit 3 lessons
}, // end Unit 3 object
      // ───────────────────────────────────────────────────────────────────────
      // UNIT 4: New Keys, New Landscapes (Weeks 19–27)
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'u4',
        title: 'New Keys, New Landscapes',
        subtitle: 'Weeks 19–27 · G major (one sharp) and F major (one flat) · Eighth notes introduced · Two-voice introduction',
        icon: '🗝',
        lessons: [
          {
            id: '19.A', week: 19, session: 'A', unit: 'u4',
            title: 'G Major — One Sharp',
            duration: '~25 minutes',
            ladukhin: 'Exercise 29',
            materials: ['Piano', 'Ladukhin pp. 20–21 (Exercise 29)', 'Music journals'],
            openingRitual: 'Find Do (C). Sing C major scale. Then play G major scale: "Same shape, different start."',
            story: null,
            drill: {
              title: 'Exercise 29 — G Major',
              steps: [
                'KEY SIGNATURE: Say: "G major has one sharp — Fa# (F#). On the page, the sharp sign appears on the Fa line at the beginning of each staff. That tells us: whenever we see Fa, we sing it slightly higher — Fa#."',
                'Sing the G major scale: Sol-La-Ti-Do-Re-Mi-Fi-Sol (Fi = raised Fa). Note: in fixed-do, Fa# is called Fi.',
                'Exercise 29: teacher sings first. Together 3 times.',
                'Form IIA: identify the sharp (key signature) before singing.',
              ],
            },
            formIA: 'He just sings. Teacher names the key before beginning: "We are in G major today. Sol is home." He does not need to understand the key signature.',
            formIIA: 'Before singing Exercise 29, he locates the sharp in the key signature and names it: "This is G major. Fa is raised to Fa-sharp (Fi)."',
            sacredMusic: {
              searchTerm: 'Orthodox Vespers Lord I Call Byzantine',
              label: 'Lord I Call — G major listening',
              listenFor: 'Play ~90 seconds. "This piece has a bright, elevated character — like G major. Listen for the slow, expansive phrases moving by steps."',
            },
            journal: {
              formIA: 'Draw the G major scale as a staircase. Label each step with a solfège name.',
              formIIA: 'Copy the G major key signature (one sharp on Fa line). Write: "G major: Fa is raised to Fi (F#). Sol is home."',
            },
            closingRitual: 'Find Do (C). "Do never moves — but today we traveled to G major and came home."',
            teacherNotes: 'In fixed-do, Fa# is called Fi. This is the chromatic alteration name from the Ladukhin tradition. Introduce it here without pressure — students will hear it many times.',
            shortenIt: 'Just the scale and Exercise 29. Skip key signature explanation.',
            stretchIt: 'Form IIA: transpose Exercise 1 (from Unit 1) into G major. Same solfège, but Sol is the starting note.',
            watchFor: 'Students who forget Fi (Fa#) mid-exercise and revert to natural Fa. Do not stop — sing Fi clearly yourself and continue. Correct at the end.',
          },
          {
            id: '19.B', week: 19, session: 'B', unit: 'u4',
            title: 'G Major — Transpose Game',
            duration: '~20 minutes',
            ladukhin: 'Exercise 29 review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Sing G major scale.',
            story: null,
            drill: {
              title: 'Transpose Game — Same Shape, Different Start',
              steps: [
                'Say: "We are going to sing Exercise 1 from Unit 1 — but starting on Sol (G) instead of Do (C). The solfège syllables are the same. The notes are different."',
                'Sing Exercise 1 starting on Sol: Sol-La-Ti-Do-Re / Re-Do-Ti-La-Sol. Compare to Do-Re-Mi-Fa-Sol.',
                'Ask: "What stayed the same? What changed?" Answers: the solfège stayed the same; the actual pitches changed.',
                'Sing Exercise 29 from memory.',
              ],
            },
            formIA: 'He sings both versions with teacher. He notices: "It sounds the same but different."',
            formIIA: 'He leads the transposition. He also explains: "In G major, Sol is home. The scale shape is the same. But the actual notes are different from C major."',
            sacredMusic: {
              searchTerm: 'Orthodox Vespers Lord I Call Byzantine',
              label: 'Lord I Call — echo phrase',
              listenFor: 'Echo the opening phrase by ear. Teacher plays recording, pauses, sings the phrase, students echo.',
            },
            journal: {
              formIA: 'Write: "G major has ___ sharp. It is on ___."',
              formIIA: 'Write the same. Then: "Transposing means ___ . When we transposed Exercise 1 to G major, the solfège ___ but the notes ___."',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'The transpose game is a powerful conceptual lesson. It makes audible what otherwise remains abstract: the scale is a pattern, not a fixed set of pitches.',
            shortenIt: 'Just sing Exercise 29. Skip the transpose game.',
            stretchIt: 'Form IIA: try transposing Exercise 3 to G major.',
            watchFor: 'Students confusing transposition with singing faster or louder. The only thing that changes is the starting pitch. Pitch, not energy.',
          },
          {
            id: '20.A', week: 20, session: 'A', unit: 'u4',
            title: 'G Major Continued — Exercises 30–31',
            duration: '~25 minutes',
            ladukhin: 'Exercises 30–31',
            materials: ['Piano', 'Ladukhin pp. 21–22 (Exercises 30–31)', 'Music journals'],
            openingRitual: 'Find Do. G major scale. Identify the sharp before beginning.',
            story: null,
            drill: {
              title: 'Exercises 30–31 — G Major Consolidation',
              steps: [
                'Form IIA: identify key signature on both exercises before singing.',
                'Exercise 30: together 3 times.',
                'Exercise 31: teacher first, then together 3 times.',
                'Ear training: teacher plays G major scale, C major scale, A minor scale in random order. Students name the key.',
              ],
            },
            formIA: 'He sings with teacher. He identifies by ear: "Which key does this feel like?"',
            formIIA: 'He reads from notation and identifies key signatures.',
            sacredMusic: {
              searchTerm: 'Te Deum Gregorian chant simple',
              label: 'Te Deum — Gregorian Latin',
              listenFor: 'Play ~90 seconds. "This is Latin. Te Deum laudamus — We praise you, O God. The Church has sung this since the 4th century. Listen for where the phrases end — the cadences."',
            },
            journal: {
              formIA: 'Draw three musical houses: C major, G major, A minor. Label each.',
              formIIA: 'Copy the G major key signature. Write the Latin: "Te Deum laudamus — We praise you, O God." Draw one phrase shape.',
            },
            closingRitual: 'Find Do. "Three keys known: C major, G major, A minor."',
            teacherNotes: 'Key identification by ear is a cumulative skill. Do not expect instant mastery. The point is to build the habit of listening for tonal center.',
            shortenIt: 'Just Exercises 30. Skip 31 and ear training.',
            stretchIt: 'Form IIA: sight-sing Exercise 31 cold.',
            watchFor: 'Students who can identify C major and A minor but not G major. G major is less common in their listening experience. More G major exposure in sacred music listening will help.',
          },
          {
            id: '20.B', week: 20, session: 'B', unit: 'u4',
            title: 'Eighth Notes Introduced',
            duration: '~20 minutes',
            ladukhin: 'Rhythm preparation for Exercises 32–33',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Clap and sing Exercise 29.',
            story: null,
            drill: {
              title: 'Eighth Notes — Ta-Ka',
              steps: [
                'Say: "We know quarter notes (1 beat) and half notes (2 beats). Now: eighth notes — two for the price of one. Two eighth notes = 1 beat." Clap: Ta-ka Ta-ka Ta-ka Ta-ka.',
                'Clap eighth-note pairs with syllables: Ta-ka (two eighth notes in one beat).',
                'Rhythm game: teacher claps a pattern using quarters, halves, and eighth pairs. Students echo.',
                'Sing on Do using the same patterns.',
              ],
            },
            formIA: 'He claps and echoes. He does not need to understand the notation — just the feel.',
            formIIA: 'He draws eighth notes in his journal (two note heads connected by a beam). He writes the beat count: Ta-ka = 1 beat.',
            sacredMusic: {
              searchTerm: 'Te Deum Gregorian chant simple',
              label: 'Te Deum — rhythm listening',
              listenFor: 'Play 60 seconds. "Gregorian chant does not always have strict eighth notes and quarter notes. It breathes more freely. But can you feel the pulse beneath the chant?"',
            },
            journal: {
              formIA: 'Draw a quarter note, a half note, and two eighth notes beamed together. Write how many beats each gets.',
              formIIA: 'Same drawing. Write: "Quarter = 1 beat. Half = 2 beats. Two eighth notes = 1 beat (Ta-ka)."',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'Eighth notes are a significant rhythmic step. Take time to make sure the physical feel of Ta-ka is established before it appears in an exercise.',
            shortenIt: 'Just introduce eighth notes by clapping. Skip the singing on Do.',
            stretchIt: 'Form IIA: write a rhythm pattern in his journal that uses all three note values: half, quarter, and eighth pair.',
            watchFor: 'Students who rush eighth notes — they feel fast, so students tend to sing them even faster. A pair of eighth notes should feel like two quick equal notes, not one fast smear.',
          },
          {
            id: '21.A', week: 21, session: 'A', unit: 'u4',
            title: 'Eighth Notes in Context — Exercises 32–33',
            duration: '~25 minutes',
            ladukhin: 'Exercises 32–33',
            materials: ['Piano', 'Ladukhin pp. 22–23', 'Music journals'],
            openingRitual: 'Find Do. Clap a rhythm with eighth notes. Sing it on Do.',
            story: null,
            drill: {
              title: 'Exercises 32–33 — Eighth Notes in G Major',
              steps: [
                'Before each exercise: clap the rhythm first. Then sing on solfège.',
                'Exercise 32: clap, then sing 3 times.',
                'Exercise 33: clap, then sing 3 times.',
                'Challenge: teacher claps the rhythm of Exercise 32 — students sing it without looking at the page.',
              ],
            },
            formIA: 'He claps along while teacher sings first, then echoes phrases with eighth notes.',
            formIIA: 'He claps the rhythm independently, then sings. He marks eighth-note pairs on the page before singing.',
            sacredMusic: {
              searchTerm: 'Veni Creator Spiritus Gregorian',
              label: 'Veni Creator Spiritus — Gregorian',
              listenFor: 'Play one verse. "Count the phrases in this stanza — this one stanza. How many?" (Answer: 4 phrases per stanza, 6 stanzas total.)',
            },
            journal: {
              formIA: 'Copy a rhythm pattern from Exercise 32 (the first measure). Write beat counts below.',
              formIIA: 'Copy the first measure of Exercise 32. Mark all eighth-note pairs with a bracket. Write beat counts.',
            },
            closingRitual: 'Find Do. "Eighth notes: Ta-ka. Two in one beat."',
            teacherNotes: 'The "clap first, then sing" pattern for exercises with new rhythmic content is a discipline. Keep it. It trains students to process pitch and rhythm separately before combining them.',
            shortenIt: 'Exercise 32 only.',
            stretchIt: 'Form IIA: sight-sing Exercise 33 cold after only reading the rhythm first.',
            watchFor: 'Students who lose pitch accuracy when eighth notes appear. The faster rhythm pulls attention away from pitch. Address pitch first: slow down to a crawl, find the pitches, then add the rhythm.',
          },
          {
            id: '21.B', week: 21, session: 'B', unit: 'u4',
            title: 'F Major — One Flat',
            duration: '~20 minutes',
            ladukhin: 'Exercise 34',
            materials: ['Piano', 'Ladukhin p. 23', 'Music journals'],
            openingRitual: 'Find Do. G major scale with sharp. "Now let\'s go somewhere new."',
            story: null,
            drill: {
              title: 'Exercise 34 — F Major',
              steps: [
                'KEY SIGNATURE: Say: "F major has one flat — Te (Bb). On the page, the flat sign appears on the Ti line. That tells us: whenever we see Ti, we sing it slightly lower — Te."',
                'Sing the F major scale: Fa-Sol-La-Te-Do-Re-Mi-Fa. Note: Te = flattened Ti.',
                'COMPARE: Sing G major scale (one sharp — bright), C major scale (neutral), F major scale (one flat — warmer). "Can you hear the different colors?"',
                'Exercise 34: together 3 times.',
              ],
            },
            formIA: 'Teacher names the key: "F major today." He sings with teacher. He hears the character: warmer.',
            formIIA: 'He identifies the flat in the key signature before singing. He names: "F major — Ti is lowered to Te (Bb)."',
            sacredMusic: {
              searchTerm: 'Veni Creator Spiritus Gregorian',
              label: 'Veni Creator — warm key character',
              listenFor: '"Veni Creator Spiritus is in a warm, F-like mode. Does it remind you of F major? Or does it feel different?" Sacred modes and major keys are cousins, not twins.',
            },
            journal: {
              formIA: 'Draw three suns — one bright and sharp (G major), one clear and steady (C major), one warm (F major). Label each.',
              formIIA: 'Copy the F major key signature (one flat on Ti line). Write: "F major: Ti is lowered to Te (Bb). Fa is home."',
            },
            closingRitual: 'Find Do. "Three major keys: C, G, F. We know them all."',
            teacherNotes: 'The three major keys — C, G, F — cover the range of most sacred music the students will encounter. Mastery of these three is the Year 1 target.',
            shortenIt: 'Just introduce F major. Skip Exercise 34.',
            stretchIt: 'Form IIA: can he identify F major vs. G major vs. C major on the piano by key signature alone (count sharps/flats)?',
            watchFor: 'Students confusing Te (Bb) with Ti. In fixed-do, Ti is B-natural; Te is B-flat. The names are similar — drill the distinction explicitly.',
          },
          {
            id: '22.A', week: 22, session: 'A', unit: 'u4',
            title: 'Mixed Keys — Identify Before Singing',
            duration: '~25 minutes',
            ladukhin: 'Exercises 35–38',
            materials: ['Piano', 'Ladukhin pp. 23–25', 'Music journals'],
            openingRitual: 'Find Do. Sing all three major scales in order: C, G, F.',
            story: null,
            drill: {
              title: 'Exercises 35–38 — Three Keys Mixed',
              steps: [
                'Before each exercise: Form IIA identifies the key from the key signature. Teacher confirms for Form IA: "This is F major."',
                'Sing the scale of the key before beginning the exercise.',
                'Exercise 35: identify, scale, exercise. 3 repetitions.',
                'Exercise 36, 37, 38: same process. Do not rush.',
              ],
            },
            formIA: 'He sings with teacher in all keys. He identifies the character by ear when teacher plays a few notes.',
            formIIA: 'He reads key signatures and sings from notation with minimal teacher support.',
            sacredMusic: {
              searchTerm: 'Veni Creator Spiritus Gregorian',
              label: 'Veni Creator — learning Stanza 1',
              listenFor: '"Veni Creator Spiritus — Come, Holy Spirit. The first word of each stanza tells you the subject. Listen for Veni (Come), Creator, and Spiritus. Each word is a prayer."',
            },
            journal: {
              formIA: 'Copy opening phrase of Veni Creator (teacher dictates the solfège syllables).',
              formIIA: 'Write: "Veni means ___, Creator means ___, Spiritus means ___. Together they pray: ___."',
            },
            closingRitual: 'Find Do. "We know three keys. We know three kinds of sacred music: Byzantine, Gregorian, Latin hymns."',
            teacherNotes: 'The key identification step before singing is a discipline — do not let it become perfunctory. Every exercise should begin with the student actively naming the key, not just being told it.',
            shortenIt: 'Exercises 35–36 only.',
            stretchIt: 'Form IIA: after the exercise, name the key signature, the home note, and the chromatic alteration from memory.',
            watchFor: 'Students who correctly identify the key but then lose the altered note mid-exercise. Build in a specific moment to name the alteration (Fi or Te) before beginning.',
          },
          {
            id: '22.B', week: 22, session: 'B', unit: 'u4',
            title: 'Sight-Reading Cold — New Exercise',
            duration: '~20 minutes',
            ladukhin: 'Exercises 35–38 review',
            materials: ['Piano', 'Ladukhin pp. 23–25', 'Music journals'],
            openingRitual: 'Find Do. Name today\'s key before singing. Sing the scale.',
            story: null,
            drill: {
              title: 'Cold Sight-Reading',
              steps: [
                'Give Form IIA a new, short exercise (from Danhauser or teacher-composed). No preview.',
                'He reads through it once silently, identifies the key, then sings it.',
                'Observe: where does he pause? Where does he miss?',
                'Form IA: teacher gives him a 4-note exercise by ear — no page. He echoes, then sings it back from memory.',
              ],
            },
            formIA: 'Ear exercise without notation. Teacher sings 4 notes. He echoes. He sings it back 3 minutes later from memory.',
            formIIA: 'Cold sight-reading: no preview, just the page.',
            sacredMusic: {
              searchTerm: 'Veni Creator Spiritus Gregorian',
              label: 'Veni Creator — Stanza 1 by ear',
              listenFor: 'Learn Stanza 1 completely by ear. Teacher sings phrase by phrase; students echo. Then play the recording and follow along.',
            },
            journal: {
              formIA: 'Draw Veni Creator Spiritus — the Holy Spirit coming. Any image.',
              formIIA: 'Write Stanza 1 in Latin from memory if possible. Write a translation beneath.',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'Cold sight-reading for Form IIA should reveal his actual reading level. Do not assist — observe. The goal is information, not performance.',
            shortenIt: 'Skip cold sight-reading. Just review Exercises 35–38.',
            stretchIt: 'Form IIA: after cold sight-reading, he marks every error he made and corrects them in the score.',
            watchFor: 'Form IIA stopping cold when he makes an error. Teach him to keep going and mark the error. Stopping trains hesitation; continuing trains resilience.',
          },
          {
            id: '23.A', week: 23, session: 'A', unit: 'u4',
            title: 'Mixed Rhythms — Exercises 39–40',
            duration: '~25 minutes',
            ladukhin: 'Exercises 39–40',
            materials: ['Piano', 'Ladukhin pp. 25–26', 'Music journals'],
            openingRitual: 'Find Do. Clap and sing a rhythm combining all three note values: half, quarter, eighth pairs.',
            story: null,
            drill: {
              title: 'Exercises 39–40 — Complex Rhythm',
              steps: [
                'These exercises mix all rhythmic values. Protocol: (1) Identify key. (2) Clap rhythm. (3) Sing on Do. (4) Sing on solfège.',
                'Exercise 39: full protocol. 3 repetitions.',
                'Exercise 40: full protocol. 3 repetitions.',
              ],
            },
            formIA: 'He claps and echoes. Teacher slows the complex rhythms and exaggerates the gestures.',
            formIIA: 'He applies the full four-step protocol independently.',
            sacredMusic: {
              searchTerm: 'Agni Parthene O Pure Virgin Byzantine',
              label: 'Agni Parthene — return visit',
              listenFor: '"We heard this first in Unit 3. How much more can you hear now — four months later? What do you notice that you did not notice before?"',
            },
            journal: {
              formIA: 'Copy a rhythm pattern from Exercise 39 (teacher marks it). Write counts.',
              formIIA: 'Copy the first two measures of Exercise 39 with full rhythm notation and beat counts.',
            },
            closingRitual: 'Find Do. "Rhythm and pitch together. Getting harder, getting better."',
            teacherNotes: 'The four-step protocol (identify key → clap rhythm → sing on Do → sing on solfège) is the primary tool for all complex new exercises from here on. Establish it as a habit.',
            shortenIt: 'Exercise 39 only.',
            stretchIt: 'Form IIA: sight-sing Exercise 40 using the four-step protocol independently, without teacher walking him through each step.',
            watchFor: 'Students who want to skip step 3 (sing on Do) and go straight to solfège. Step 3 isolates rhythm from pitch and is essential. Keep it in.',
          },
          {
            id: '23.B', week: 23, session: 'B', unit: 'u4',
            title: 'Two-Voice Introduction — Exercises 41–43',
            duration: '~25 minutes',
            ladukhin: 'Exercises 41–43, Two-Voice Solfeggi No. 1',
            materials: ['Piano', 'Ladukhin pp. 26–27', 'Ladukhin 60 Solfeggi for 2 Voices — No. 1', 'Music journals'],
            openingRitual: 'Find Do. Sing Exercises 39–40 from memory.',
            story: null,
            drill: {
              title: 'Two-Voice First Attempt',
              steps: [
                'Say: "Today we begin singing two different things at the same time. I will sing one line; you will sing another."',
                'Ladukhin 60 Solfeggi for 2 Voices, No. 1: Teacher sings upper voice; Form IIA sings lower. Form IA echoes either voice with teacher in Session B.',
                'Practice same duet again. Switch voices.',
                'If going well: both students sing different voices while teacher listens.',
              ],
            },
            formIA: 'In Session B: he echoes either voice with teacher. He is not expected to hold an independent line yet.',
            formIIA: 'He sings the lower voice of No. 1 while teacher sings upper. Then he sings the upper voice while teacher sings lower.',
            sacredMusic: {
              searchTerm: 'Agni Parthene O Pure Virgin Byzantine',
              label: 'Agni Parthene — two-voice listening',
              listenFor: '"Can you hear any two-voice moments in this recording? Some recordings use a drone. Does this one? Listen carefully for the lowest note."',
            },
            journal: {
              formIA: 'Draw two voices as two lines — do they cross? Do they move together or apart?',
              formIIA: 'Write: "What is harder about singing two voices than one? What do you have to do differently in your ear?"',
            },
            closingRitual: 'Find Do. "Two voices. One prayer."',
            teacherNotes: 'Two-part singing is a major developmental step. Do not be discouraged if it does not work well on the first attempt. The goal today is exposure, not mastery. Return to it in Session B and again in Weeks 24–27.',
            shortenIt: 'Do the two-voice exercise once (one pass). Do not repeat.',
            stretchIt: 'If two-voice goes well: Form IIA sings upper voice alone while Form IA sings lower (with teacher support). All three voices present: teacher + both students.',
            watchFor: 'Students who track the other voice instead of their own — they follow what they hear rather than reading their own line. This is normal. Train them to look at their own line and hold it, regardless of what they hear.',
          },
          {
            id: '24.A', week: 24, session: 'A', unit: 'u4',
            title: 'Two-Voice Exercises 41–43',
            duration: '~25 minutes',
            ladukhin: 'Exercises 41–43',
            materials: ['Piano', 'Ladukhin pp. 26–27 (Exercises 41–43)', 'Two-Voice Solfeggi No. 1–2', 'Music journals'],
            openingRitual: 'Find Do. Sing Two-Voice No. 1 together — teacher upper, Form IIA lower.',
            story: null,
            drill: {
              title: 'Exercises 41–43 and Two-Voice No. 2',
              steps: [
                'Exercise 41: four-step protocol. 3 repetitions.',
                'Exercise 42: same.',
                'Exercise 43: same.',
                'Two-Voice No. 2: teacher sings upper, Form IIA lower. Switch. Then try without teacher singing.',
              ],
            },
            formIA: 'He sings Exercises 41–43 with teacher. In the two-voice work, he holds a sustained Do drone while teacher and Form IIA sing.',
            formIIA: 'He sings Exercises 41–43 from notation. He holds his voice in the two-part work.',
            sacredMusic: {
              searchTerm: 'Byzantine Tone 6 Plagal chant',
              label: 'Byzantine Tone 6 — minor flavor',
              listenFor: '"This is Tone 6 (Plagal). Listen: does it sound major or minor? We will learn the eight tones in Year 2 — but just begin to notice them now."',
            },
            journal: {
              formIA: 'Draw two voices as two different colored lines. Where do they move together? Where apart?',
              formIIA: 'Write: "In two-voice singing, I have to ___ with my ear while also ___."',
            },
            closingRitual: 'Find Do. "Two voices getting stronger."',
            teacherNotes: 'The drone (Form IA) is a legitimate two-voice role. It trains him to sustain his pitch against external musical input.',
            shortenIt: 'Exercises 41–42 only. Skip 43 and two-voice.',
            stretchIt: 'All three voices: Form IA drone on Do, Form IIA lower voice, teacher upper voice.',
            watchFor: 'Form IIA losing his own voice when teacher drops out. This is the moment of truth for two-voice independence. Note how long he can sustain before drifting.',
          },
          {
            id: '24.B', week: 24, session: 'B', unit: 'u4',
            title: 'Return — Agni Parthene After Four Months',
            duration: '~20 minutes',
            ladukhin: 'Review session',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Sing Exercises 29, 34, 41 — one from each new key.',
            story: null,
            drill: {
              title: 'Reflection and Agni Parthene Return',
              steps: [
                'Say: "We first heard Agni Parthene in Unit 3, Week 16. We have been singing for over four months. Let\'s hear it again and see what you notice."',
                'Play the recording. Students listen actively.',
                'Ask: "What do you hear now that you did not hear in Unit 3? What has changed in your ears?"',
                'Sing the first three phrases of Agni Parthene together from memory.',
              ],
            },
            formIA: 'He listens and describes: "This sounds like ___ to me now."',
            formIIA: 'He writes his observation in his journal before sharing it aloud.',
            sacredMusic: {
              searchTerm: 'Agni Parthene O Pure Virgin Byzantine',
              label: 'Agni Parthene — return after four months',
              listenFor: 'Full 2-minute listening. Then narrate aloud: what is different in your hearing?',
            },
            journal: {
              formIA: 'Journal: "What I hear now in Agni Parthene that I didn\'t hear before."',
              formIIA: 'Same, with at least two specific musical observations (e.g., "I hear the step from La to Ti now; I hear the phrases end on La").',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'The return listening is a Charlotte Mason principle: the same work, revisited with new ears. This moment shows the students how much they have learned. Do not rush it.',
            shortenIt: 'Just the listening and journal. Skip the drill review.',
            stretchIt: 'Form IIA: write out the solfège syllables of the first Agni Parthene phrase from memory.',
            watchFor: 'Students who say "it sounds the same." Probe gently: "Can you hear the step from La to Ti at the beginning? Can you hear where the phrases end?" Give them specific things to listen for.',
          },
          {
            id: '25.A', week: 25, session: 'A', unit: 'u4',
            title: 'Unit 4 — Exercises 44–45 and Review',
            duration: '~25 minutes',
            ladukhin: 'Exercises 44–45',
            materials: ['Piano', 'Ladukhin pp. 27–28', 'Music journals'],
            openingRitual: 'Find Do. Sing all three major scales and A minor scale from memory.',
            story: null,
            drill: {
              title: 'Exercises 44–45 — Mixed Keys and Rhythms',
              steps: [
                'Exercise 44: full protocol. New material.',
                'Exercise 45: full protocol.',
                'UNIT 4 ASSESSMENT PASS: teacher names exercises at random. Students sight-sing immediately.',
              ],
            },
            formIA: 'He sings with teacher. Note his comfort across the three major keys.',
            formIIA: 'He sight-sings with minimal teacher support. Cold reading.',
            sacredMusic: {
              searchTerm: 'Veni Creator Spiritus Gregorian',
              label: 'Veni Creator — full first stanza',
              listenFor: 'Sing Stanza 1 completely together with the recording.',
            },
            journal: {
              formIA: 'Free journal.',
              formIIA: 'Write: "What I need to improve in my sight-reading: ___."',
            },
            closingRitual: 'Find Do. "Unit 4 nearly complete. One unit left before the synthesis."',
            teacherNotes: 'This is the second-to-last formal exercise unit. Take stock: what needs reinforcement before the synthesis?',
            shortenIt: 'Exercises 44 only. Skip 45.',
            stretchIt: 'Form IIA: sight-sing Exercise 45 cold using the full four-step protocol.',
            watchFor: 'Students who are tired of the exercises and eager for "real" singing. Channel this: "The synthesis is coming. These exercises are how we get there."',
          },
          {
            id: '25.B', week: 25, session: 'B', unit: 'u4',
            title: 'Unit 4 Review and Assessment',
            duration: '~25 minutes',
            ladukhin: 'Exercises 29–45 assessment',
            materials: ['Piano', 'Ladukhin pp. 20–28', 'Music journals'],
            openingRitual: 'Find Do. Both students sing one exercise from each of the three major keys: C, G, F.',
            story: null,
            drill: {
              title: 'Unit 4 Assessment',
              steps: [
                'Pitch: teacher sings a phrase in a specific key. Students identify the key and echo.',
                'Rhythm: teacher claps a complex pattern with eighth notes. Students echo and notate.',
                'Reading (Form IIA): sight-sing one exercise cold.',
                'Two-voice (Form IIA): sing lower voice of Two-Voice No. 1 while teacher sings upper.',
                'Sacred music: teacher plays 15 seconds each of Lord I Call, Te Deum, Veni Creator. Students identify: key character, tradition.',
              ],
            },
            formIA: 'Assessment items 1 and 5 (pitch and sacred music). Note confidence across three keys.',
            formIIA: 'Full assessment. Record on the unit log.',
            sacredMusic: {
              searchTerm: 'Veni Creator Spiritus Gregorian',
              label: 'Veni Creator — celebration listening',
              listenFor: 'After assessment: full recording. Celebrate.',
            },
            journal: {
              formIA: 'Free journal: favorite moment from Unit 4.',
              formIIA: 'Write: "Unit 4 complete. Three things I can do now that I could not do in Unit 1."',
            },
            closingRitual: 'Find Do. "Unit 4 complete. We go into the synthesis."',
            teacherNotes: 'Record assessment results. This is the last formal unit assessment before the synthesis. Any gaps identified here should be addressed in the first two weeks of Unit 5.',
            shortenIt: 'Items 1, 3, and 5 only.',
            stretchIt: 'Form IIA: self-assess before teacher assessment. Compare results.',
            watchFor: 'Students who are strong technically but disconnected from the sacred music. The synthesis will demand both. Make sure the formation dimension has not been sacrificed for drill efficiency.',
          },
        ],
      },

      // ───────────────────────────────────────────────────────────────────────
      // UNIT 5: First Synthesis (Weeks 28–36)
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'u5',
        title: 'First Synthesis',
        subtitle: 'Weeks 28–36 · Ladukhin Exercises 44–55 · Prepare first a cappella sacred piece',
        icon: '✝',
        lessons: [
          {
            id: '28.A', week: 28, session: 'A', unit: 'u5',
            title: 'Synthesis Begins — Choose the Piece',
            duration: '~25 minutes',
            ladukhin: 'Exercises 44–46',
            materials: ['Piano', 'Ladukhin pp. 27–29 (Exercises 44–46)', 'Music journals'],
            openingRitual: 'Find Do. Sing all three major scales and A minor from memory.',
            story: {
              title: 'Choosing the Synthesis Piece',
              text: 'Say: "We are going to learn one sacred piece completely — well enough to sing it a cappella, without instruments, in a real liturgical setting. This is not a performance. We are not showing anyone how well we sing. We are joining the choir that has never stopped singing."\n\nPresent the options (see Year 1 schedule):\n— Lord have mercy in a simple tone from your home parish\n— Thy Nativity O Christ (Nativity Tone 4 or family\'s home tone)\n— Psalm 33 refrain\n\nSay: "The piece should already live in your memory — from Liturgy, from this course, from what you have heard at home. We are going to own it musically."\n\nChoose the piece. Write it in the journal. This is the synthesis piece.',
            },
            drill: {
              title: 'Exercises 44–46 and Synthesis Introduction',
              steps: [
                'Exercises 44–46: full protocol, 3 repetitions each. This is now the regular solfège backbone of each session.',
                'Synthesis piece: teacher sings it once through completely. Students listen.',
                'Break into phrases. Learn phrase 1 by ear.',
              ],
            },
            formIA: 'He echoes phrase 1 of the synthesis piece. He does not need notation.',
            formIIA: 'He follows the notated version if available. He echoes and notes which solfège syllables he recognizes.',
            sacredMusic: {
              searchTerm: 'Byzantine Lord Have Mercy simple',
              label: 'Lord Have Mercy — synthesis candidate listening',
              listenFor: 'Play the synthesis candidate (or Lord Have Mercy as default). "This is what we are preparing. Every lesson from now on, we will work on this."',
            },
            journal: {
              formIA: 'Write the name of the synthesis piece. Draw an image of what it means.',
              formIIA: 'Write the name. Write phrase 1 solfège syllables. Write: "We are preparing this piece because ___."',
            },
            closingRitual: 'Find Do. "The synthesis begins today."',
            teacherNotes: 'Choose the synthesis piece no later than this session. If the piece is already chosen, use this session to formally begin preparation. The next eight sessions are split: 15 min Ladukhin, 10 min synthesis.',
            shortenIt: 'Just the synthesis introduction. Skip exercises.',
            stretchIt: 'Form IIA: write out all solfège syllables of the synthesis piece from the recording (first pass).',
            watchFor: 'Students who want to rush the synthesis piece because they already know it by heart. "Knowing" a piece liturgically is different from owning it musically. The course teaches them to own it.',
          },
          {
            id: '28.B', week: 28, session: 'B', unit: 'u5',
            title: 'Synthesis Phrase Work',
            duration: '~20–25 minutes',
            ladukhin: 'Exercises 44–46 review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Sing synthesis piece phrase 1 from memory.',
            story: null,
            drill: {
              title: 'Phrase-by-Phrase Synthesis Work',
              steps: [
                'Review phrase 1 from Session A.',
                'Learn phrase 2: teacher sings, students echo. Repeat until confident.',
                'Combine phrases 1 and 2. Sing through together.',
                'Ear training: teacher sings a pattern from the synthesis piece. Students identify which phrase.',
              ],
            },
            formIA: 'He echoes each phrase and sings both phrases combined.',
            formIIA: 'He echoes and then sings alone. He identifies the solfège syllables.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — full recording',
              listenFor: 'Play the full recording of the synthesis piece. Students follow along with their learned phrases.',
            },
            journal: {
              formIA: 'Write phrases 1 and 2 solfège syllables (teacher dictates).',
              formIIA: 'Write phrases 1 and 2 solfège syllables from memory.',
            },
            closingRitual: 'Find Do. "Two phrases. Keep going."',
            teacherNotes: 'The 15-minute Ladukhin / 10-minute synthesis split is the standard format from here to Week 35. Keep it consistent.',
            shortenIt: 'Synthesis work only. Skip Ladukhin.',
            stretchIt: 'Form IIA: write out the synthesis piece phrase 2 in notation (approximate) from ear.',
            watchFor: 'Students who have the melody but not the text placement. Sacred music must carry the text clearly. Address text-melody alignment from the beginning.',
          },
          {
            id: '29.A', week: 29, session: 'A', unit: 'u5',
            title: 'Synthesis Progress — Exercises 47–48',
            duration: '~25 minutes',
            ladukhin: 'Exercises 47–48',
            materials: ['Piano', 'Ladukhin pp. 29–30', 'Music journals'],
            openingRitual: 'Find Do. Sing synthesis piece phrases 1–2 from memory.',
            story: null,
            drill: {
              title: '15 min Ladukhin + 10 min Synthesis',
              steps: [
                'Exercise 47: full protocol. 3 repetitions.',
                'Exercise 48: full protocol. 3 repetitions.',
                'Synthesis: review phrases 1–2. Learn phrase 3.',
              ],
            },
            formIA: 'He echoes all. He can sing phrases 1–2 confidently by now.',
            formIIA: 'He reads Exercises 47–48 from notation. He sings phrase 3 alone.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — ongoing',
              listenFor: 'Follow along. Count learned phrases. Note which phrases remain.',
            },
            journal: {
              formIA: 'Copy solfège syllables for synthesis phrase 3.',
              formIIA: 'Write solfège syllables for phrases 1–3 from memory.',
            },
            closingRitual: 'Find Do. "Three phrases. Almost halfway."',
            teacherNotes: 'Standard synthesis session. Keep the split: 15 Ladukhin, 10 synthesis.',
            shortenIt: 'Synthesis only.',
            stretchIt: 'Form IIA: sight-sing Exercise 48 cold.',
            watchFor: 'Phrases losing their shape after a week away. Review is essential at the start of every synthesis session.',
          },
          {
            id: '29.B', week: 29, session: 'B', unit: 'u5',
            title: 'Synthesis — Phrase 4',
            duration: '~20 minutes',
            ladukhin: 'Exercises 47–48 review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Synthesis phrases 1–3 from memory.',
            story: null,
            drill: {
              title: 'Learn Phrase 4 — Connect Phrases',
              steps: [
                'Review phrases 1–3. Sing through without stopping.',
                'Learn phrase 4.',
                'Combine all four. Sing through together.',
              ],
            },
            formIA: 'He sings all four phrases with teacher.',
            formIIA: 'He sings phrases 3 and 4 alone (without teacher).',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — second half preview',
              listenFor: 'Identify the phrases not yet learned. How many remain?',
            },
            journal: {
              formIA: 'Draw the synthesis piece in phrases: four boxes, one per phrase.',
              formIIA: 'Write all four phrases\' solfège syllables from memory.',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'By Week 30, students should have all phrases learned. Weeks 31–33 are for polishing.',
            shortenIt: 'Learn phrase 4 only. Skip phrases 1–3 review.',
            stretchIt: 'Form IIA: sing all four phrases without stopping. No corrections from teacher.',
            watchFor: 'Phrase 3 often weakens because it sits between newly learned phrases 2 and 4. Return to it specifically.',
          },
          {
            id: '30.A', week: 30, session: 'A', unit: 'u5',
            title: 'All Phrases Learned — Polishing Begins',
            duration: '~25 minutes',
            ladukhin: 'Exercises 49–50',
            materials: ['Piano', 'Ladukhin pp. 30–31', 'Music journals'],
            openingRitual: 'Find Do. Sing the synthesis piece all the way through from memory.',
            story: null,
            drill: {
              title: '15 min Ladukhin + 10 min Polish',
              steps: [
                'Exercise 49: full protocol.',
                'Exercise 50: full protocol.',
                'Synthesis: full run-through. Teacher listens without singing. Notes weak spots.',
                'Target the weakest phrase: isolate, work, re-integrate.',
              ],
            },
            formIA: 'Full run-through. Note: does he know all phrases? Where does he struggle?',
            formIIA: 'Same. He should be largely independent at this point.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — sing with recording',
              listenFor: 'Sing along with the full recording. Note where voices drift from the recording pitch.',
            },
            journal: {
              formIA: 'Write: "The hardest phrase for me is phrase ___."',
              formIIA: 'Write: "The hardest phrase for me is ___. I will fix it by ___."',
            },
            closingRitual: 'Find Do. "We polish until it shines."',
            teacherNotes: 'From this point, the synthesis piece takes priority. Ladukhin continues but as support, not the main event.',
            shortenIt: 'Synthesis only.',
            stretchIt: 'Form IIA: sing the synthesis piece as a complete offering, a cappella, while teacher listens silently.',
            watchFor: 'Students whose pitch drifts when singing a cappella (without piano). The solution is not piano support — it is more unaccompanied practice. Let them drift, find themselves, correct.',
          },
          {
            id: '30.B', week: 30, session: 'B', unit: 'u5',
            title: 'Synthesis Polish',
            duration: '~20 minutes',
            ladukhin: 'Exercises 49–50 review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Full synthesis piece run-through.',
            story: null,
            drill: {
              title: 'Targeted Phrase Work',
              steps: [
                'Identify the phrases that need work (from Session A notes).',
                'Work each phrase: isolate → fix → re-integrate.',
                'Final full run-through without stopping.',
              ],
            },
            formIA: 'He sings with teacher on weak phrases, alone on strong ones.',
            formIIA: 'He leads the polish, identifying his own weak spots.',
            sacredMusic: {
              searchTerm: 'Byzantine Lord Have Mercy simple',
              label: 'Lord Have Mercy — parallel listening',
              listenFor: '"If our synthesis piece is Lord Have Mercy — compare what you are singing to this recording. What is similar? What is different?"',
            },
            journal: {
              formIA: 'Free draw: how it feels to know this piece.',
              formIIA: 'Write: "Polishing a piece means ___."',
            },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'Polish sessions are short and targeted. Do not work the whole piece every session — focus on what needs attention.',
            shortenIt: 'Full run-through only. No targeted work.',
            stretchIt: 'Form IIA: sing the synthesis piece completely alone while Form IA listens.',
            watchFor: 'Students growing bored with the synthesis piece from repetition. Remind them: "Every time we sing this, we are offering it. Even in practice. Especially in practice."',
          },
          {
            id: '31.A', week: 31, session: 'A', unit: 'u5',
            title: 'Synthesis and Exercises 51–52',
            duration: '~25 minutes',
            ladukhin: 'Exercises 51–52',
            materials: ['Piano', 'Ladukhin pp. 31–32', 'Music journals'],
            openingRitual: 'Find Do. Full synthesis piece run-through.',
            story: null,
            drill: {
              title: '15 min Ladukhin + 10 min Synthesis',
              steps: ['Exercise 51: full protocol.', 'Exercise 52: full protocol.', 'Synthesis: full run-through. Identify one specific weakness. Work it.'],
            },
            formIA: 'Standard synthesis/Ladukhin split.',
            formIIA: 'Form IIA: sight-sing Exercise 52 cold.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — ongoing polish',
              listenFor: 'Sing with the recording once. Then sing a cappella.',
            },
            journal: { formIA: 'Progress note: how does the synthesis piece feel now?', formIIA: 'Same, plus: what does a cappella mean, and why does it matter?' },
            closingRitual: 'Find Do.',
            teacherNotes: 'A cappella means without instruments. It comes from "alla cappella" — in the manner of the chapel. Sacred song was unaccompanied before instruments entered the Church.',
            shortenIt: 'Synthesis only.',
            stretchIt: 'Form IIA: sight-sing Exercise 52.',
            watchFor: 'Students drifting sharp or flat when singing a cappella. Note the direction of drift — sharp suggests tension; flat suggests fatigue or lack of attention.',
          },
          {
            id: '31.B', week: 31, session: 'B', unit: 'u5',
            title: 'Synthesis Session',
            duration: '~20 minutes',
            ladukhin: 'Review',
            materials: ['Piano', 'Music journals'],
            openingRitual: 'Find Do. Synthesis piece run-through.',
            story: null,
            drill: {
              title: 'Full Run-Through and Weak Phrase',
              steps: ['Full run-through. Note weak spots.', 'Isolate one phrase. Work it until it holds.', 'Full run-through again.'],
            },
            formIA: 'With teacher on weak phrases.',
            formIIA: 'Solo on strong phrases.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — targeted',
              listenFor: 'Listen to the weak phrase in the recording. "Hear how they sing it. Now sing it with them."',
            },
            journal: { formIA: 'Progress note.', formIIA: 'Progress note with one specific musical observation.' },
            closingRitual: 'Find Do. Done.',
            teacherNotes: 'Keep polish sessions focused. 10 minutes of targeted work is more effective than 20 minutes of unfocused run-throughs.',
            shortenIt: 'One run-through. Journal only.',
            stretchIt: 'Both students sing together without teacher. Listen from outside the room.',
            watchFor: 'Students who are satisfied with "good enough." Sacred music is an offering — aim for beauty, not correctness.',
          },
          {
            id: '32.A', week: 32, session: 'A', unit: 'u5',
            title: 'Final Preparation — Week Before the Offering',
            duration: '~25 minutes',
            ladukhin: 'Exercises 53–55',
            materials: ['Piano', 'Ladukhin pp. 32–33', 'Music journals'],
            openingRitual: 'Find Do. Full synthesis piece run-through. Teacher listens silently.',
            story: null,
            drill: {
              title: 'Final Preparation',
              steps: [
                'Exercise 53: full protocol.',
                'Synthesis: full run-through. Teacher assessment of readiness.',
                'Note what still needs attention. Address it.',
                'Final run-through a cappella.',
              ],
            },
            formIA: 'Assessment: can he sing all phrases of the synthesis piece from memory, with stable pitch? This is the target.',
            formIIA: 'Assessment: can he sing all phrases with stable pitch and correct solfège? Can he identify the key and any altered notes? This is the target.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — final listening',
              listenFor: 'One more time with the recording. "Notice how they breathe, how they phrase, how they treat the text. Bring that into your own singing."',
            },
            journal: {
              formIA: 'Write: "We are offering this piece because ___."',
              formIIA: 'Write the same. Then: "What does it mean to offer your voice in worship, not in performance?"',
            },
            closingRitual: 'Find Do. "We are ready."',
            teacherNotes: 'The assessment here is informal — teacher observation, not formal scoring. The synthesis event is next session.',
            shortenIt: 'Synthesis only. Skip Exercises 53–55.',
            stretchIt: 'If ready: do a dress rehearsal — full piece, a cappella, standing, as if in church.',
            watchFor: 'Students who become anxious before the offering. Address this directly: "This is not a performance. You cannot fail an offering. You can only give what you have, and that is enough."',
          },
          {
            id: '32.B', week: 32, session: 'B', unit: 'u5',
            title: 'Synthesis Offering — We Are Not Performing',
            duration: '~25 minutes',
            ladukhin: 'None',
            materials: ['Optional: candle', 'Synthesis piece score or memory', 'Icon'],
            openingRitual: 'Light candle if desired. Find Do. One quiet breath together.\n\nSay: "We are not performing. We are joining the choir that has never stopped singing. St. Romanos sang. The monks of Mount Athos sing. The choir at Hagia Sophia sang. We are singing with them — across a thousand years. When you stand and offer your voice at the Liturgy, you are adding your voice to that choir."',
            story: null,
            drill: {
              title: 'The Synthesis Event — A Cappella Offering',
              steps: [
                'Students stand.',
                'One breath together.',
                'Sing the synthesis piece a cappella — teacher may sing along or listen.',
                'After: silence for 10 seconds. Let it rest.',
                'Ask: "What did that feel like?" Let both students answer.',
              ],
            },
            formIA: 'He sings. This is his offering.',
            formIIA: 'He sings. This is his offering.',
            sacredMusic: {
              searchTerm: 'Thy Nativity O Christ Orthodox',
              label: 'Synthesis piece — the offering',
              listenFor: 'After the a cappella offering: play the recording. Sit and listen. No words needed.',
            },
            journal: {
              formIA: 'Write: "What it felt like to sing."',
              formIIA: 'Write: "What it felt like to sing." Three sentences.',
            },
            closingRitual: 'Find Do. Do not say anything more. Let the session close in silence.',
            teacherNotes: 'Do not evaluate the offering. Do not comment on pitch or precision. It was an offering — receive it as such. If you are moved, let them see that. It is appropriate.',
            shortenIt: 'There is nothing to shorten. This is the whole session.',
            stretchIt: 'If the family plans to sing at a liturgical service, this is the rehearsal for that. The liturgical service offering is a separate event.',
            watchFor: 'Your own impulse to critique. Resist it. The offering has been made.',
          },
          {
            id: '33.A', week: 33, session: 'A', unit: 'u5',
            title: 'Debrief and Year 1 Map',
            duration: '~25 minutes',
            ladukhin: 'Review at students\' choice',
            materials: ['Music journals', 'Year 1 schedule map (optional)', 'Optional: candle'],
            openingRitual: 'Find Do. Sing the synthesis piece one more time — just for joy.',
            story: null,
            drill: {
              title: 'Year 1 Debrief',
              steps: [
                'Ask: "What went well? What was hard? What surprised you?"',
                'Review the Year 1 map together — look at how far they have come. All five units. All the exercises. The Nativity Troparion. The Kyrie. Agni Parthene.',
                'Preview Year 2: "Next year we go deeper. We learn the eight tones of the Church. We learn Gregorian notation. We sing two parts."',
                'Students write a letter to themselves — to be opened at the end of Year 2.',
              ],
            },
            formIA: 'He dictates his letter. Teacher writes it.',
            formIIA: 'He writes his own letter.',
            sacredMusic: {
              searchTerm: 'Saint Anthony Monastery Cherubic Hymn English',
              label: 'Cherubic Hymn — Year 1 close',
              listenFor: 'The Cherubic Hymn: where we began in Week 1. Sit and listen for 2 full minutes. "What do you hear now?"',
            },
            journal: {
              formIA: 'The letter.',
              formIIA: 'The letter.',
            },
            closingRitual: 'Find Do. Seal the letters in the journals or in an envelope. "Open this at the end of Year 2."\n\nSay: "Year 1 is complete. The voice is a gift. You have used it well."',
            teacherNotes: 'Year 1 ends here. The letter is a Charlotte Mason tradition — it becomes a record of the student\'s musical self at the end of the first year. It will be read again at the close of Year 2 and will show both students how much has changed.',
            shortenIt: 'Just the Cherubic Hymn and the letter. Skip the debrief.',
            stretchIt: 'Form IIA: before writing the letter, ask him to rate himself on each of the four assessment dimensions (pitch, rhythm, reading, sacred music) from 1–4. What would he work on in Year 2?',
            watchFor: 'Students who write perfunctory letters. Prompt: "Write about the piece you loved most. Write about the hardest moment. Write about what you want to learn next year."',
          },
        ],
      },
    ],
  },
];

// ── Flatten helpers ──────────────────────────────────────────────────────────

export const ALL_LESSONS = [];
YEARS.forEach(year => {
  year.units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      ALL_LESSONS.push({ ...lesson, _unit: unit, _year: year });
    });
  });
});
