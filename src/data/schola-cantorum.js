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

{
  id: "unit4",
  title: "Unit 4: New Keys, New Landscapes",
  weeks: "19–27",
  ladukhin: "Exercises 29–45",
  overview: "G major (one sharp) and F major (one flat). Eighth notes introduced with ta-ka syllables. Key signature reading for Form IIA. Two-voice singing begins with Ladukhin 60 Solfeggi for 2 Voices. Sacred music arc: Lord I Call (Byzantine) → Te Deum (Gregorian) → Veni Creator Spiritus (Gregorian) → two-voice Byzantine → Agni Parthene return.",
  lessons: [

    // ─────────────────────────────────────────
    // WEEK 19
    // ─────────────────────────────────────────

    {
      id: "19A",
      week: 19,
      session: "A",
      unit: "unit4",
      title: "G Major — Same Shape, New Home",
      duration: "25 min",
      ladukhin: "Exercise 29",
      materials: [
        "Ladukhin Elementary Course, p. 22 (Ex. 29)",
        "Piano",
        "Music journals and pencils",
      ],

      story: "Before the drill, say: \"For eighteen weeks we have lived in two houses: Do's house (C major) and La's house (A minor). Today we move to a third house — G major. Listen.\" Play the G major scale on the piano slowly, ascending and descending. Let it ring. Ask: \"How does that feel — major or minor?\" (Major.) \"Where does it settle — on Do or somewhere new?\" Let them describe it. Say: \"This is G major. The scale has the same shape as C major — the same steps and skips in the same order — but it begins on G. In our fixed-do system, G is always Sol. So this scale begins on Sol. But here is the thing: inside G major, G feels like home. It feels like Do. The scale shape is the same; only the starting place has moved.\" Play the C major scale, then the G major scale, back to back. \"Same shape. Different place. That is a new key.\"",

      drill: {
        title: "G Major Scale + Ladukhin Ex. 29",
        steps: [
          "Play G on the piano. Say: \"This is G — Sol in our system. In G major, Sol is home.\" Everyone sings Sol together on a comfortable breath.",
          "Sing the G major scale ascending on fixed-do solfège syllables: Sol-La-Ti-Do-Re-Mi-Fi-Sol. Pause on Fi. Say: \"This note — F-sharp — is the one new thing in G major. In C major we sing Fa. In G major, Fa is raised by a half step to Fi. Listen.\" Play Fa (F natural) then Fi (F-sharp). \"Fa wants to go down to Mi. Fi wants to pull up to Sol even more strongly. That pull is what makes G major sound slightly brighter than C major.\"",
          "Sing the scale again, all the way up and back down: Sol-La-Ti-Do-Re-Mi-Fi-Sol, Sol-Fi-Mi-Re-Do-Ti-La-Sol. Children echo. Repeat 3 times.",
          "Open to Ex. 29. Teacher sings it once through. Then everyone sings together. Repeat 2–3 times.",
          "Form IIA: before singing Ex. 29, identify the key signature. Say: \"One sharp on the staff — that sharp is always on the Fa line. It tells you: every Fa in this piece is Fi. That is how you know you are in G major.\" Point to the sharp on the page.",
          "Form IA: follow the teacher's voice and echo. Do not require page-reading. Ask at the end: \"Did that feel like major or minor?\" (Major.) \"Did it feel like C major or a little different?\" Let him describe it in his own words.",
        ],
      },

      formIA: "Echo the scale and Ex. 29 entirely by ear. Watch for Sol being sung flat — it sometimes drifts down toward Fa. Sing Sol clearly yourself each time and continue. The main success criterion for Form IA this week: can he sing the G major scale ascending from memory by the end of the session?",
      formIIA: "Follow notation throughout. Before Ex. 29, name the key signature (one sharp = G major) and identify Fi on the staff. After singing, ask: \"Where did Fi appear in the exercise? Did you feel the pull toward Sol?\" Form IIA should be able to explain what a sharp does to a note before moving on.",

      sacredMusic: {
        searchTerm: "Orthodox Vespers Lord I Call Byzantine",
        label: "Lord I Call at Vespers",
        listenFor: "Play approximately 90 seconds. Say: \"This is Lord I Call — the great psalm of Vespers, sung every Saturday evening as the sun goes down. Listen for how slowly and expansively it moves. Count the long notes — the notes that hold for two or three beats.\" After listening: \"Did that feel major, minor, or something in between?\" The Byzantine modal character often produces ambiguous answers — all of them are honest and correct.",
      },

      journal: {
        formIA: "Write: 'G major starts on ___.' (Sol.) Draw a piano keyboard and circle the G key. Label it Sol.",
        formIIA: "Copy the G major key signature: treble clef, then the sharp on the Fa line. Write: 'G major has 1 sharp. The sharp is on Fa — it makes Fa into Fi.' Then write the G major scale ascending in solfège syllables: Sol-La-Ti-Do-Re-Mi-Fi-Sol.",
      },

      closingRitual: "Play G on the piano. Everyone sings Sol. Say: \"Sol is the new home this unit. Same feeling as Do — just a different room.\" Then play C. Sing Do. \"And Do is still here. Three homes now: Do, La, Sol.\"",

      teacherNotes: "The introduction of a new key is a significant conceptual moment. The most important thing to convey is that the scale shape — the pattern of whole steps and half steps — is identical to C major. Only the starting pitch has moved. Children who grasp this will find all future key introductions easy. Children who think G major is a completely different thing will struggle. The Fi (F-sharp) is the one concrete novelty; everything else is the same.",
      shortenIt: "Scale introduction and Ex. 29 only. Skip the story and journal.",
      stretchIt: "After Ex. 29, ask Form IIA to sing the C major scale and then the G major scale back to back without stopping. Then ask: 'Which note is different between the two scales?' (Fa vs. Fi — F natural vs. F-sharp.)",
      watchFor: "Both children singing Fi as Fa out of habit — the F-sharp is genuinely new and the ear defaults to the familiar F natural. Play Fi on the piano clearly before each run-through of the scale until the ear adjusts. Form IIA rushing to read the notation before understanding the key signature. Form IA singing the scale correctly ascending but drifting on the descent — the descending Fi-Mi step is tricky.",
    },

    {
      id: "19B",
      week: 19,
      session: "B",
      unit: "unit4",
      title: "Key Signature Reading and Lord I Call",
      duration: "20–25 min",
      ladukhin: "Exercise 29 review",
      materials: [
        "Ladukhin Elementary Course, p. 22",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Key Signature Introduction (Form IIA) + Ex. 29 Review",
        steps: [
          "Find Sol on the piano. Everyone sings Sol. Then sing the G major scale together once, ascending and descending.",
          "Key Signature Lesson — Form IIA: Open the Ladukhin page to Ex. 29. Point to the sharp. Say: \"This is the key signature. It sits right after the treble clef, before the time signature, at the beginning of every line. It applies to every note on that line or space throughout the entire piece — you don't re-read it every measure. So every Fa you see in this exercise is automatically Fi.\" Ask: \"What would happen if there were two sharps? Three?\" (More notes are raised.) \"Each major key has a specific number of sharps or flats. G major has one sharp — always on the Fa line.\"",
          "Form IA: while Form IIA is working on key signatures, Form IA sings the G major scale from memory. Can he do it without the piano? Play G at the start and let him go. Affirm accuracy.",
          "Review Ex. 29 together. Sing twice — once with the teacher leading, once with Form IIA leading the tempo while Form IA echoes.",
          "New game — Scale Direction: teacher plays three notes on the piano in G major. Children identify: going up, going down, or staying the same (repeated note). Use these: Sol-La-Ti (up), Do-Ti-La (down), Mi-Mi-Sol (same then up), Fi-Sol-Fi (up then down). This reinforces the new key by ear.",
        ],
      },

      formIA: "In the Scale Direction game, Form IA calls out up, down, or same. He does not need to name the solfège syllables — just the direction. This is ear training in the new key. After three rounds, ask him to echo one of the three-note patterns on solfège. Even a partial match is success.",
      formIIA: "After the key signature lesson, Form IIA opens to any other exercise in the book and identifies: how many sharps or flats? What key is this in? (He only knows C major and G major so far — so every exercise is either zero sharps or one sharp.) This pattern-recognition habit is the foundation of all future key reading.",

      sacredMusic: {
        searchTerm: "Orthodox Vespers Lord I Call Byzantine",
        label: "Lord I Call — second hearing",
        listenFor: "Play 90 seconds. This time: \"Follow the melody with your hand — raise it when the melody goes up, lower it when it goes down. Don't think, just follow.\" After listening: \"Did the melody spend more time going up or going down?\" (It tends to move in long arching phrases — up and then back down.) \"Did you feel where it was heading?\"",
      },

      journal: {
        formIA: "Draw a staircase of eight steps going up. Label the steps Sol-La-Ti-Do-Re-Mi-Fi-Sol from bottom to top. This is the G major scale as a picture.",
        formIIA: "Draw the treble clef staff. Draw the G major key signature (sharp on the third line from the bottom — the Fa/B line). Write: 'This sharp means: every ___ in this piece is ___.' (Every Fa is Fi.)",
      },

      closingRitual: "Play Sol. Everyone sings Sol. Hold four beats. Say: \"Next week we go deeper into G major. Same home, new exercises.\"",

      teacherNotes: "The key signature lesson for Form IIA is one of the most durable pieces of notation literacy in the course. Take time with it. The concept that a sharp at the beginning of the piece applies to every instance of that note throughout is not obvious — it requires the child to hold a rule in memory while reading. Repeat it in every G major session until it is automatic.",
      shortenIt: "Skip the Scale Direction game. Do the key signature lesson, Ex. 29 review, and journal only.",
      stretchIt: "Ask Form IIA to write the C major key signature (no sharps, no flats) next to the G major key signature in his journal. Label each. Ask: 'If C major has zero sharps and G major has one sharp, what do you predict D major might have?' (Two sharps — a genuine prediction he can confirm later.)",
      watchFor: "Form IIA treating the key signature sharp as applying only to the first measure. Re-demonstrate: point to the sharp at the start of the line, then point to an Fa notehead three measures in. 'Does this sharp apply here?' (Yes — always.) Form IA losing Sol on the descending scale. Play Sol at the midpoint of the descent to re-anchor.",
    },

    // ─────────────────────────────────────────
    // WEEK 20
    // ─────────────────────────────────────────

    {
      id: "20A",
      week: 20,
      session: "A",
      unit: "unit4",
      title: "G Major Consolidation — Exercises 30–31",
      duration: "25 min",
      ladukhin: "Exercises 30–31",
      materials: [
        "Ladukhin Elementary Course, pp. 22–24 (Ex. 30–31)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "G Major Fluency + Ladukhin Ex. 30–31",
        steps: [
          "Warm up with the G major scale — ascending and descending — sung together once. No piano after the opening Sol is given.",
          "Before Ex. 30: Form IIA identifies the key signature and names the key. Form IA listens as teacher sings the first two bars, then calls out: major or minor?",
          "Sing Ex. 30 together. Teacher leads. Repeat 3 times. On the third repetition, teacher drops out for four bars and lets the children carry it. Re-enter if they drift.",
          "Before Ex. 31: same key identification process. Then sing together. Repeat 2–3 times.",
          "Fi check: after Ex. 31, ask both children to sing just the Fi-Sol pair — the raised seventh resolving to the octave. Play Fi on the piano, children sing Fi-Sol. Repeat 3 times. Say: \"That pull from Fi up to Sol is the sharpness of G major. It is slightly brighter than Ti-Do in C major — same function, just a little higher.\"",
          "Run-through: sing Ex. 29, 30, 31 in sequence without stopping. Teacher keeps tempo. This is a fluency test as much as a drill.",
        ],
      },

      formIA: "Form IA echoes all exercises by ear. The test this session: can he sing Ex. 29 from memory without any teacher support? Try it at the start of the run-through. If he can, it means the G major tonality has settled. If not, more echo work before moving to Ex. 32.",
      formIIA: "Form IIA reads all exercises from notation. Before the run-through, he should be able to identify the key signature of each exercise independently. After the run-through, ask: 'In Ex. 30, how many times did Fi appear?' He must look back at the page and count. This builds active notation engagement rather than passive reading.",

      sacredMusic: {
        searchTerm: "Orthodox Vespers Lord I Call Byzantine",
        label: "Lord I Call — phrase echo",
        listenFor: "Play the opening phrase twice. Then teacher sings it slowly on solfège (approximate fixed-do rendering — the Byzantine mode won't map perfectly but the melodic shape will). Children echo. Repeat until both children can sing the opening phrase back. Say: \"This phrase has lived in the Church for over a thousand years. Now it lives in you too.\"",
      },

      journal: {
        formIA: "Write the G major scale syllables from memory: Sol-La-Ti-Do-Re-Mi-Fi-Sol. Circle Fi. Write: 'Fi is sharp. It wants to go up to ___.' (Sol.)",
        formIIA: "Copy the first four measures of Ex. 30 from the page. Write the solfège syllable name under every note. Circle every Fi.",
      },

      closingRitual: "Play Sol. Everyone sings Sol. Then sing Fi-Sol — the leading tone resolution. Say: \"Fi wants Sol. That is G major's signature.\"",

      teacherNotes: "By the end of Week 20, both children should be able to sing the G major scale from memory and sing through Ex. 29–31 with reasonable accuracy. If Form IA is still uncertain on the scale, run it at the start of every session this week and next. The scale is the foundation; the exercises build on it.",
      shortenIt: "Ex. 30 only. Skip Ex. 31 and the Fi check.",
      stretchIt: "Ask Form IIA to sight-read Ex. 31 cold — no preview, no teacher singing first. He identifies the key, sets the tempo, and sings. Teacher listens and notes where he is accurate and where he stumbles. Discuss afterward without judgment.",
      watchFor: "Both children defaulting to Fa instead of Fi in the middle of longer exercises — the F-sharp requires active attention and will slip under pressure. When it slips, do not stop mid-exercise. Complete the phrase, then replay the Fi-Sol pair on piano and re-sing that section.",
    },

    {
      id: "20B",
      week: 20,
      session: "B",
      unit: "unit4",
      title: "Transpose Game — Same Exercise, New Key",
      duration: "20–25 min",
      ladukhin: "Exercises 29–31 review + transposition game",
      materials: [
        "Ladukhin Elementary Course, pp. 22–24",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Transposition Game + Ex. 29–31 Review",
        steps: [
          "Find Sol. Sing the G major scale together.",
          "Transposition Game: Say: \"We are going to sing Exercise 1 — our very first exercise — but starting on Sol instead of Do. Same shape, same steps, but from a different starting place.\" Sing Ex. 1 (Do-Re-Mi-Fa-Sol) starting on Sol: Sol-La-Ti-Do-Re. Then back down.",
          "Ask: \"What changed?\" (The starting note, and Fi instead of Fa when you hit the fourth step.) \"What stayed the same?\" (The shape — step-step-half-step-step.)",
          "Repeat with Ex. 2 — the ascending and descending five-note scale. Start on Sol: Sol-La-Ti-Do-Re and back. Children echo.",
          "Now sing the real Ex. 29 straight through. Ask: \"Does it feel similar to Ex. 1? Why?\" (Because the scale shape is the same — only the key has changed.)",
          "Review Ex. 30 and 31 straight through. Then: key identification game — teacher plays a scale on the piano (either C major or G major). Children call out which key. Do this five times.",
        ],
      },

      formIA: "In the transposition game, Form IA echoes by ear. He does not need to understand why the transposition works — just that the same shape produces the same feeling from a new starting point. Ask him: 'Does Sol-La-Ti-Do-Re feel like Do-Re-Mi-Fa-Sol?' (Yes.) 'Why?' (Because the steps are the same.) Accept any honest answer.",
      formIIA: "After the transposition game, ask Form IIA to write Ex. 1 (Do-Re-Mi-Fa-Sol-Fa-Mi-Re-Do) in his journal, then write the transposed version (Sol-La-Ti-Do-Re-Do-Ti-La-Sol). Ask: 'Which note is different between the two versions?' (Fa becomes Fi in G major — but in the five-note scale, Fa doesn't appear, so actually nothing changes! Let him discover this. The full octave scale is where Fi appears.)",

      sacredMusic: {
        searchTerm: "Orthodox Vespers Lord I Call Byzantine",
        label: "Lord I Call — sing along",
        listenFor: "Play the opening phrase. Children sing along with the recording on the phrase they learned last session. Then play 60 more seconds — just listening. Ask: \"Does this music sound like it is in G major, C major, or something else?\" The honest answer is: something else — a Byzantine mode. Say: \"Byzantine chant does not always fit neatly into our major and minor boxes. That is something we will explore in Year 2. For now, just notice the feeling.\"",
      },

      journal: {
        formIA: "Write: 'G major has ___ sharp. C major has ___ sharps.' (1 and 0.) Draw the two houses side by side — label one C major (no sharp) and one G major (1 sharp).",
        formIIA: "Write: 'When I transpose Exercise 1 to G major, the shape ___ (stays the same / changes). The note that could change is ___, which becomes ___ in G major.' (Fa → Fi, but doesn't appear in the five-note scale.)",
      },

      closingRitual: "Play Do then Sol. Sing both. Say: \"Two major keys. Same family. We know them both.\"",

      teacherNotes: "The transposition game is one of the most valuable exercises in the course. It demonstrates concretely that keys are not different systems — they are the same system starting from different places. A child who grasps this will have an easier time with all future key introductions, and ultimately with the moveable-do bridge in Year 2.",
      shortenIt: "Transposition game with Ex. 1 only. Skip the review run-through.",
      stretchIt: "Ask Form IIA: 'If we transposed Exercise 1 to A minor — starting on La — what would the five notes be?' (La-Ti-Do-Re-Mi.) 'Is that major or minor?' (Neither, strictly — it is the bottom five notes of the minor scale, which is the same as the top five notes of C major. Let him sit with the ambiguity.)",
      watchFor: "Children finding the transposition game confusing rather than illuminating. If either child is lost, simplify: just sing Do-Re-Mi together, then Sol-La-Ti together. 'Same feeling?' Yes. That is transposition. Nothing more complex is needed this week.",
    },

    // ─────────────────────────────────────────
    // WEEK 21
    // ─────────────────────────────────────────

    {
      id: "21A",
      week: 21,
      session: "A",
      unit: "unit4",
      title: "Eighth Notes — Ta-Ka and the New Rhythm",
      duration: "25 min",
      ladukhin: "Exercises 32–33",
      materials: [
        "Ladukhin Elementary Course, pp. 24–26 (Ex. 32–33)",
        "Piano",
        "Music journals and pencils",
      ],

      story: "Before the drill, say: \"Everything we have clapped and sung so far has moved in quarter notes and half notes — ta and too-oo, one beat and two beats. Today we meet a faster value: the eighth note. Two eighth notes fit inside one beat. Their syllable is ta-ka. Say it with me: ta-ka, ta-ka, ta-ka.\" Everyone speaks ta-ka in a steady rhythm. Then: \"Ta-ka is one beat split in two. Like a heartbeat — two small pulses where one large one was.\" Clap: ta (one clap), ta-ka (two quick claps), ta (one clap), ta-ka. Let the children feel the subdivision before singing it.",

      drill: {
        title: "Eighth Note Introduction + Ladukhin Ex. 32–33",
        steps: [
          "Clap drill — rhythm only, no pitch: ta ta ta-ka ta / ta-ka ta ta ta / ta ta-ka ta-ka ta. Children echo clap each pattern. Repeat each 3 times. Do not rush. The rhythm must be clean before adding pitch.",
          "Say: \"Now let's put pitch on ta-ka.\" Sing: Do-Do (ta-ta), Do-Re (ta-ka), Mi (ta-a — half note). Repeat this simple pattern 3 times, clapping while singing.",
          "Open to Ex. 32. Teacher claps the rhythm of Ex. 32 straight through — solfège syllables spoken, not sung. Children echo clap. Repeat once.",
          "Now sing Ex. 32 together with beat gesture (down-up for 2/4). Teacher leads at a moderate pace — not slow, but not rushed. Eighth notes need forward momentum or they drag. Repeat 3 times.",
          "Ex. 33. Same process: clap rhythm first, then sing. Ex. 33 likely has more eighth notes. If a child stumbles on the rhythm, go back to clapping that measure alone before re-singing.",
          "Form IIA: before Ex. 33, point to the eighth notes on the page. Ask: \"How many eighth notes are beamed together here?\" (Two.) \"And what is their collective value?\" (One beat — ta-ka.)",
        ],
      },

      formIA: "Form IA claps and echoes all rhythm patterns and exercises by ear. Do not require him to read eighth note notation. If he can clap ta-ka accurately and echo Ex. 32 by ear, that is full success for this session. Watch for ta-ka becoming uneven — one syllable longer than the other. Both halves of ta-ka are equal.",
      formIIA: "Form IIA reads from notation. Before Ex. 32, identify the beamed eighth notes on the page and speak their rhythm syllables aloud before singing. After singing, ask: 'In measure 3 of Ex. 32, is the ta-ka on beat 1 or beat 2?' This forces active tracking of where in the measure the eighth notes fall.",

      sacredMusic: {
        searchTerm: "Te Deum Gregorian chant simple",
        label: "Te Deum — first hearing",
        listenFor: "Play approximately 90 seconds. Say: \"This is the Te Deum — one of the oldest hymns of praise in the Church. It is in Latin. Te Deum laudamus means: 'We praise you, God.' Listen for where the phrases end — where the melody comes to rest. Raise your hand when you hear a resting place.\" After: \"How many resting places did you find?\"",
      },

      journal: {
        formIA: "Draw four boxes in a row. In the first, draw one filled notehead (quarter note = ta). In the second, draw two filled noteheads beamed together (eighth notes = ta-ka). Write the syllables underneath. In the third and fourth boxes, draw ta and ta-ka again. This is the rhythm pattern of the day.",
        formIIA: "Copy the rhythm of the first four measures of Ex. 32 — noteheads and beams only, no pitch. Write the Kodály syllables underneath each note: ta, ta-ka, too-oo, etc.",
      },

      closingRitual: "Clap together: ta ta-ka ta ta / ta-ka ta-ka ta ta. Say: \"Eighth notes are in you now. See you next session.\"",

      teacherNotes: "Eighth notes are a genuine rhythmic leap. Do not underestimate the difficulty of the subdivision for Form IA. His natural pulse may be solid, but fitting two syllables into one beat requires a new kind of internal clock. If ta-ka is uneven after three sessions, slow the tempo significantly and clap while speaking — voice and hands together. The body learns before the page does.",
      shortenIt: "Clap drill and Ex. 32 only. Skip Ex. 33.",
      stretchIt: "Ask Form IIA to compose a four-beat rhythm using only ta and ta-ka (no half notes or whole notes). He writes it in his journal as note symbols or syllables, then claps it for Form IA to echo.",
      watchFor: "Ta-ka becoming ta-KA — the second syllable getting longer than the first. Both are exactly equal. Clap at a slower tempo and exaggerate the equality: ta... ka... ta... ka... then speed up gradually. Form IIA trying to read and clap simultaneously before the rhythm is internalized — always clap first, read second.",
    },

    {
      id: "21B",
      week: 21,
      session: "B",
      unit: "unit4",
      title: "Rhythm Dictation with Eighth Notes",
      duration: "20–25 min",
      ladukhin: "Exercises 32–33 review",
      materials: [
        "Ladukhin Elementary Course, pp. 24–26",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Rhythm Dictation + Ex. 32–33 Review",
        steps: [
          "Warm up: clap ta ta-ka ta ta together three times. Then: ta-ka ta-ka ta ta. Then: ta ta ta-ka too-oo. Say the syllables while clapping.",
          "Rhythm Dictation: teacher claps a four-beat pattern. Children echo clap. Then Form IIA writes the syllables in his journal; Form IA draws long and short marks (long line = ta, two short lines together = ta-ka).",
          "Pattern 1: ta ta-ka ta ta. Echo, write/draw.",
          "Pattern 2: ta-ka ta ta-ka ta. Echo, write/draw.",
          "Pattern 3: ta ta-ka ta-ka too-oo. Echo, write/draw.",
          "Pattern 4: ta-ka ta-ka ta-ka ta. Echo, write/draw. (This one is all eighth notes plus a final quarter — fast and even.)",
          "After dictation, review Ex. 32 and Ex. 33 straight through. Use the beat gesture. Teacher observes where the eighth notes are clean and where they drag.",
          "Sing Ex. 32 on Do only — all pitches become Do, only the rhythm survives. This isolates the rhythm from the pitch and reveals where the rhythmic uncertainty actually lives.",
        ],
      },

      formIA: "Form IA uses long and short marks for dictation — no syllable writing required. After each pattern, he claps his marks back to check. If his marks are wrong but his echo was right, the issue is notation, not rhythm — note this. The ear is ahead of the page, which is correct at this stage.",
      formIIA: "Form IIA writes Kodály syllables for all four patterns. After writing, he reads the syllables back aloud (speaking, not clapping) to check. Then he claps from his written syllables — if it matches what the teacher clapped, it is correct. This builds the reading→clapping→checking loop.",

      sacredMusic: {
        searchTerm: "Te Deum Gregorian chant simple",
        label: "Te Deum — phrase identification",
        listenFor: "Play 90 seconds. This time: \"I want you to notice the rhythm of the chant. Does it move in even beats, or does it flow more freely?\" (Gregorian chant flows freely — it follows the natural rhythm of the Latin text rather than a strict beat.) \"This is different from our Ladukhin exercises, which have a strict meter. Sacred music sometimes counts differently.\" This is a gentle preview of free rhythm in chant.",
      },

      journal: {
        formIA: "Write the four dictation patterns using long and short marks. Label each: 'Pattern 1: ___ _/_ ___ ___' etc. (Using his own mark system.)",
        formIIA: "Write all four dictation patterns in Kodály syllables. Then write: 'Eighth notes are called ta-ka because ___.' (He explains in his own words — two equal pulses in one beat, the feel of a heartbeat, etc.)",
      },

      closingRitual: "Clap together: ta ta-ka ta ta — four times, getting quieter each time until the last repetition is barely audible. Say: \"The rhythm lives inside you even when you can't hear it.\"",

      teacherNotes: "Singing Ex. 32 on Do only is a powerful diagnostic tool. If the rhythm falls apart when pitch is removed, the child has been using the pitch contour as a rhythmic crutch — following the shape of the melody rather than the beat. This is extremely common and not a failure; it just means more rhythmic drilling before adding pitch back.",
      shortenIt: "Two dictation patterns only. Skip the Do-only run of Ex. 32.",
      stretchIt: "Ask Form IIA to write a new four-beat rhythm using ta, ta-ka, and too-oo, then teach it to Form IA by clapping only — no speaking. Form IA echoes. Does Form IA's echo match? This is the first peer-teaching moment in the course.",
      watchFor: "Dictation patterns being clapped back correctly but written incorrectly — this means the short-term memory is working but the symbol system is not yet automatic. Keep the symbol system simple for Form IA (long/short marks) until the patterns are fully internalized. Do not rush to standard notation.",
    },

    // ─────────────────────────────────────────
    // WEEK 22
    // ─────────────────────────────────────────

    {
      id: "22A",
      week: 22,
      session: "A",
      unit: "unit4",
      title: "F Major — The Warm Key",
      duration: "25 min",
      ladukhin: "Exercises 34–35",
      materials: [
        "Ladukhin Elementary Course, pp. 26–28 (Ex. 34–35)",
        "Piano",
        "Music journals and pencils",
      ],

      story: "Before the drill: \"We have lived in two major keys: C major (no sharps or flats) and G major (one sharp). Today we meet a third: F major. Listen.\" Play the F major scale on the piano. Let it ring. \"How does that feel compared to G major?\" (Slightly warmer, darker, rounder — children may describe it differently and all are valid.) \"F major has one flat instead of one sharp. The flat is on Ti — it lowers Ti by a half step to Ta.\" Play Ti (B natural) then Ta (B-flat). \"Ti wants to pull up to Do. Ta is lower — it pulls down toward La instead. That slight heaviness is why F major sounds warmer than G major.\" Play the G major scale, then the F major scale back to back. \"Bright — warm. Two different flavors of major.\"",

      drill: {
        title: "F Major Scale + Ladukhin Ex. 34–35",
        steps: [
          "Play F on the piano. Say: \"This is F — Fa in our system. In F major, Fa is home.\" Everyone sings Fa together.",
          "Sing the F major scale ascending on fixed-do solfège: Fa-Sol-La-Ta-Do-Re-Mi-Fa. Pause on Ta. Say: \"Ta is B-flat — Ti lowered by a half step. In C major and G major, Ti pulls up to Do. In F major, Ta is lower — it has a gentler pull.\" Play Ti, then Ta. Children echo both.",
          "Sing the scale ascending and descending: Fa-Sol-La-Ta-Do-Re-Mi-Fa, Fa-Mi-Re-Do-Ta-La-Sol-Fa. Echo 3 times.",
          "Open to Ex. 34. Form IIA identifies the key signature (one flat on the Ti line — making every Ti into Ta). Teacher sings Ex. 34 once. Then everyone sings together. Repeat 3 times.",
          "Ex. 35. Same process. If Ex. 35 includes eighth notes, clap the rhythm first.",
          "Three-key comparison: sing the C major scale, then G major, then F major in sequence. Ask: \"Which feels brightest? Which feels warmest? Which feels most neutral?\" Accept all answers — the point is that the children notice a difference.",
        ],
      },

      formIA: "Form IA echoes all scales and exercises by ear. His main task this session is to hear the difference between F major and G major. After the three-key comparison, ask him: 'Which one felt different from the others?' If he identifies F major as warmer or softer, he has heard the flat. That is the entire lesson.",
      formIIA: "Form IIA identifies the F major key signature and names the flattened note before singing. After Ex. 35, ask: 'In F major, what happens to every Ti on the page?' (It becomes Ta — B-flat.) 'How do you know without looking at each note individually?' (The key signature at the beginning of each line tells you.)",

      sacredMusic: {
        searchTerm: "Te Deum Gregorian chant simple",
        label: "Te Deum — Te Deum laudamus phrase",
        listenFor: "Play the opening phrase. Teacher sings the text: \"Te Deum laudamus\" — three Latin words. Say: 'Te means you (formal), Deum means God, laudamus means we praise. Together: We praise you, God.' Sing it slowly together. Children echo. Play the phrase again from the recording and echo it once more. Three words, one phrase, in Latin — their first Latin sacred phrase.",
      },

      journal: {
        formIA: "Draw three suns, each a different color: bright yellow (G major), white/neutral (C major), and warm orange (F major). Label each with the key name.",
        formIIA: "Copy the F major key signature: treble clef, then the flat on the Ti line. Write: 'F major has 1 flat. The flat is on Ti — it makes Ti into Ta. Ta pulls ___ (up/down) toward ___.' (Down toward La.)",
      },

      closingRitual: "Play Fa on the piano. Everyone sings Fa. Then play Sol (G major home), then Do (C major home), then Fa again. \"Three major keys. Three different flavors of the same feeling.\"",

      teacherNotes: "The introduction of a flat key is a mirror of the sharp key introduction. The key principle is the same: one altered note changes the color of the key. Ta (B-flat) is the new note. Make sure both children can sing it accurately — it is a half step lower than Ti, and children accustomed to Ti-Do will want to sing it too high.",
      shortenIt: "F major scale and Ex. 34 only. Skip Ex. 35 and the three-key comparison.",
      stretchIt: "After the three-key comparison, ask Form IIA: 'G major has one sharp on Fa (making it Fi). F major has one flat on Ti (making it Ta). What do you notice about which notes are altered in each key?' (G major alters the seventh; F major alters the fourth. These are symmetric positions in the scale.)",
      watchFor: "Both children singing Ta too high — the B-flat sits uncomfortably for voices accustomed to the leading tone. Play Ta on the piano clearly and have them match it before each scale run. Form IIA confusing which line the flat sits on in the key signature — the flat is on the middle line of the treble staff (Ti/B), not the same position as the sharp (also on a Fa/F space but a different one). Point and confirm before each exercise.",
    },

    {
      id: "22B",
      week: 22,
      session: "B",
      unit: "unit4",
      title: "Three Keys, One Melody — The Comparison Game",
      duration: "20–25 min",
      ladukhin: "Exercises 34–35 review",
      materials: [
        "Ladukhin Elementary Course, pp. 26–28",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Three-Key Comparison Game + Ex. 34–35 Review",
        steps: [
          "Find Fa. Sing the F major scale together once.",
          "Three-Key Comparison Game: Sing a simple five-note melody — Do-Mi-Sol-Mi-Do — in C major. Everyone sings together. Then sing the same shape in G major: Sol-Ti-Re-Ti-Sol (starting on Sol). Then in F major: Fa-La-Do-La-Fa (starting on Fa). After each: 'Same shape. Different color.'",
          "Ask: 'Which felt brightest?' (G major — the Fi gives it an edge.) 'Which felt warmest?' (F major — the Ta gives it roundness.) 'Which felt most balanced?' (C major — no sharps or flats.)",
          "Repeat the same melody in all three keys once more, faster this time. The goal is the ear tracking the same pattern across three key areas.",
          "Review Ex. 34 and Ex. 35 straight through. No teaching — just singing. Teacher observes accuracy.",
          "Key identification game: teacher plays a scale on the piano — C major, G major, or F major. Children call out the key by name. Do this six times. The ear should now be able to distinguish the three by their color alone.",
        ],
      },

      formIA: "In the three-key comparison game, Form IA echoes the melody in each key after the teacher sings it. He does not need to name the keys — just echo and listen. After all three, ask: 'Did they all sound the same?' (No.) 'What was different?' Any honest answer is correct.",
      formIIA: "Form IIA sings the three-key comparison melody independently — teacher plays the starting note, he sings the melody in each key without teacher singing. After each key, he names it. This tests whether the solfège syllables are truly connecting to the ear, not just being recited.",

      sacredMusic: {
        searchTerm: "Te Deum Gregorian chant simple",
        label: "Te Deum — phrase count",
        listenFor: "Play 2 minutes. Ask both children to count the distinct phrases — places where the melody pauses and a new phrase begins. Compare counts afterward. Say: \"Te Deum is an ancient hymn of thanksgiving — it has been sung in the Church since the fourth century. Every time a cathedral was consecrated, a pope crowned, or a war ended in peace, the Church sang Te Deum. Now you know its opening words.\"",
      },

      journal: {
        formIA: "Write: 'C major: ___ sharps/flats. G major: ___ sharp(s). F major: ___ flat(s).' (0, 1, 1.) Then draw the three keys as three different-colored doors.",
        formIIA: "Write the three-key comparison melody in solfège for all three keys: 'C major: Do-Mi-Sol-Mi-Do. G major: ___-___-___-___-___. F major: ___-___-___-___-___.' Complete from memory.",
      },

      closingRitual: "Sing the five-note melody in all three keys one final time, very slowly and beautifully, as if offering each one. C major: Do-Mi-Sol-Mi-Do. G major: Sol-Ti-Re-Ti-Sol. F major: Fa-La-Do-La-Fa. \"Three rooms in the same house.\"",

      teacherNotes: "The three-key comparison game is the culmination of Unit 4's first major arc. By the end of this session, both children should be able to feel the difference between the three major keys by ear — not by theory, but by sound. This is a significant musical achievement and worth naming: 'You now know three keys. A year ago you knew none.'",
      shortenIt: "Three-key comparison once. Skip the key identification game. Do Ex. 34 review only.",
      stretchIt: "Ask Form IIA to play the five-note melody on the piano in all three keys — one finger, slowly. He has enough scale knowledge to find the notes. This is the first keyboard work in the course and it is optional.",
      watchFor: "Children naming the key by the starting note rather than the key signature — 'That was the Sol one' rather than 'That was G major.' Gently correct to the key name: 'Right — Sol is where G major starts. And G major has one sharp: Fi.' The vocabulary matters for Year 2.",
    },

    // ─────────────────────────────────────────
    // WEEK 23
    // ─────────────────────────────────────────

    {
      id: "23A",
      week: 23,
      session: "A",
      unit: "unit4",
      title: "Mixed Keys — Exercises 36–38",
      duration: "25 min",
      ladukhin: "Exercises 36–38",
      materials: [
        "Ladukhin Elementary Course, pp. 28–31 (Ex. 36–38)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Key Identification Before Singing + Ladukhin Ex. 36–38",
        steps: [
          "Warm up with all three scales back to back: C major (Do), G major (Sol), F major (Fa). One run each, ascending and descending. No pausing between keys.",
          "Say: \"Exercises 36–38 are in different keys. Before singing each one, we identify the key from the notation.\" Open to Ex. 36. Form IIA: 'How many sharps or flats? What key?' Form IA: teacher plays the first note — 'major or minor? Which key does it feel like?'",
          "Sing Ex. 36 together. Repeat twice.",
          "Ex. 37: same key identification process. If the key is new — check whether it is C, G, or F major based on the key signature. Sing together twice.",
          "Ex. 38: same process. If Ex. 38 has eighth notes, clap the rhythm first before adding pitch.",
          "After all three: run-through — 36, 37, 38 in sequence without stopping. Teacher keeps tempo. This consolidates the key-switching.",
        ],
      },

      formIA: "Teacher names the key for Form IA before each exercise. Form IA's task is to echo each exercise accurately and, by the third exercise, to anticipate the key's sound before the teacher names it. Ask: 'Before I tell you — what key do you think this is?' Let him listen to the teacher's starting pitch and call it. Any correct identification by ear is significant.",
      formIIA: "Form IIA identifies the key independently from the key signature before each exercise. After the run-through, ask: 'Which key was the hardest to stay in? Why?' This builds self-awareness about which keys are still unstable. If he says G major (Fi is tricky) or F major (Ta is tricky), plan extra drill on that key next session.",

      sacredMusic: {
        searchTerm: "Veni Creator Spiritus Gregorian",
        label: "Veni Creator Spiritus — first hearing",
        listenFor: "Play approximately 90 seconds. Say: \"This is Veni Creator Spiritus — Come, Creator Spirit. It is one of the great hymns of Pentecost, when the Church celebrates the coming of the Holy Spirit. Veni means come. Creator means creator. Spiritus means spirit. Listen for how many phrases it has per stanza.\" After: 'How many?' (Four phrases per stanza.)",
      },

      journal: {
        formIA: "Write: 'G major starts on ___ and has ___ sharp. F major starts on ___ and has ___ flat.' (Sol, 1, Fa, 1.) Draw a sharp and a flat symbol — large and clear.",
        formIIA: "Write the key signatures of all three major keys from memory: 'C major: ___. G major: ___. F major: ___.' Then: 'When I see one sharp on the Fa line, I know the key is ___. When I see one flat on the Ti line, the key is ___.'",
      },

      closingRitual: "Sing the C major scale, G major scale, and F major scale in sequence — Do, Sol, Fa — one breath each. \"Three keys, one voice.\"",

      teacherNotes: "Exercises 36–38 test whether the key learning has transferred from drill to independent application. If either child consistently misidentifies the key from the key signature, spend one additional session drilling key identification from notation before moving to Ex. 39–40. The key signature must be automatic before eighth notes and mixed rhythms are added to the complexity.",
      shortenIt: "Ex. 36 and 37 only. Skip Ex. 38.",
      stretchIt: "After the run-through, ask Form IIA to sing Ex. 37 again but stop at any point and call out the current solfège syllable before continuing. This tests whether he is tracking pitch in real time or just singing from melodic memory.",
      watchFor: "Form IIA identifying the key correctly but singing the wrong accidental in the exercise — knowing what Fi or Ta is intellectually but not executing it in the moment. This gap between knowledge and execution is normal and closes with repetition. Note which specific notes are consistently wrong and isolate them for extra drill.",
    },

    {
      id: "23B",
      week: 23,
      session: "B",
      unit: "unit4",
      title: "Key Identification Game and Veni Creator",
      duration: "20–25 min",
      ladukhin: "Exercises 36–38 review",
      materials: [
        "Ladukhin Elementary Course, pp. 28–31",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Key Identification Game by Ear + Ex. 36–38 Review",
        steps: [
          "Find Do. Warm up with one scale in each major key.",
          "Key Identification Game by Ear: teacher plays a complete scale on the piano — C, G, or F major, in random order, without announcing which. Children listen and call out the key name. Do this eight times. Vary the tempo and register (same octave or different) to keep it from being too easy.",
          "After the game, ask: 'How did you know? What were you listening for?' Form IA: 'the feel.' Form IIA: 'the sharp or flat.' Both answers are correct — the ear-based and the theory-based approach arrive at the same place.",
          "Review Ex. 36, 37, 38 straight through. No teaching — just singing. Then: teacher calls out a key (G major) and asks both children to sing a scale in that key from memory. Then another key. Three rounds.",
        ],
      },

      formIA: "In the key identification game, Form IA may want to call out the starting note rather than the key name. Accept both: 'That started on Sol — so what key is it?' (G major.) The bridge between the starting note and the key name is the lesson. By the end of this session, he should be saying the key name without prompting.",
      formIIA: "Form IIA should be reliably identifying all three major keys by ear in this game. If he is, add a challenge: play the first five notes of a scale only, not the full octave. Can he identify the key from an incomplete scale? The key character is present in the first few notes.",

      sacredMusic: {
        searchTerm: "Veni Creator Spiritus Gregorian",
        label: "Veni Creator — Stanza 1 by ear",
        listenFor: "Play Stanza 1 three times slowly. Teacher sings along on the second and third playings. Then: 'Let's learn Stanza 1 together. I will sing a phrase; you echo.' Work through the four phrases of Stanza 1. This does not need to be perfect — approximate is fine. The goal is the melody in the ear, not polish.",
      },

      journal: {
        formIA: "Write the three major keys and their starting solfège note: 'C major = Do. G major = ___. F major = ___.' (Sol, Fa.)",
        formIIA: "Copy the opening phrase of Veni Creator in the journal (teacher sings it slowly; Form IIA writes the solfège syllables he hears). Then write: 'Veni means ___, Creator means ___, Spiritus means ___.'",
      },

      closingRitual: "Sing the opening phrase of Veni Creator together — what was learned in the session. Then find Do. \"A new hymn lives in us now.\"",

      teacherNotes: "Veni Creator Spiritus is the second Latin sacred piece in the course (after Te Deum). Its modal character — Gregorian Mode VIII — is diatonic and accessible. Don't stress the modal theory; just let the children learn it by ear. The Latin text is simple and worth knowing: Veni Creator Spiritus is one of the most widely sung hymns in Western Christianity.",
      shortenIt: "Key identification game only. Skip the Ex. 36–38 review and the Stanza 1 learning.",
      stretchIt: "After learning Stanza 1, ask Form IIA to write the solfège syllables of all four phrases from memory. Compare to the recording on the next play. What did he remember accurately? What drifted?",
      watchFor: "Children confusing F major and A minor in the key identification game — both have one flat, but F major is major and D minor is the relative minor. If this comes up, address it: 'The key signature alone doesn't always tell you major or minor — you need to hear where it settles.' This is a genuine and important observation.",
    },

    // ─────────────────────────────────────────
    // WEEK 24
    // ─────────────────────────────────────────

    {
      id: "24A",
      week: 24,
      session: "A",
      unit: "unit4",
      title: "Eighth Notes in Context — Exercises 39–40",
      duration: "25 min",
      ladukhin: "Exercises 39–40",
      materials: [
        "Ladukhin Elementary Course, pp. 31–33 (Ex. 39–40)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Mixed Rhythm and Key + Ladukhin Ex. 39–40",
        steps: [
          "Warm up: clap ta ta-ka ta ta / ta-ka ta-ka too-oo / ta ta ta-ka ta together. Clean and even.",
          "Open to Ex. 39. Two things to check before singing: key signature (name the key) and eighth notes (find and clap them). Form IIA does both independently. Teacher guides Form IA.",
          "Clap the rhythm of Ex. 39 straight through. Then sing together. Ex. 39 should combine eighth notes with the three-key vocabulary — this is the first exercise where both challenges appear simultaneously.",
          "If Ex. 39 is manageable, move directly to Ex. 40. Same process: key + rhythm, then sing. If Ex. 39 was difficult, sing it twice more before moving on.",
          "After both exercises: beat gesture. Sing Ex. 39 again with the full conducting beat (down-up for 2/4 or down-left-right-up for 4/4). The eighth notes must fit inside the beat, not expand it.",
          "Ask Form IIA: 'In Ex. 39, which measure was hardest? Why?' Let him analyze his own difficulty.",
        ],
      },

      formIA: "Form IA claps and echoes. The eighth notes in Ex. 39–40 will be challenging — allow him to echo phrase by phrase rather than the whole exercise at once if needed. Do not proceed to Ex. 40 if Ex. 39 is not yet accurate by ear. It is better to sing Ex. 39 three times correctly than to attempt Ex. 40 incorrectly once.",
      formIIA: "Form IIA reads from notation with full attention to both key signature and rhythmic values. After Ex. 40, ask him to mark every eighth note in Ex. 39 with a small dot in pencil. Then count: how many eighth notes are in Ex. 39? This counting task deepens engagement with the notation.",

      sacredMusic: {
        searchTerm: "Veni Creator Spiritus Gregorian",
        label: "Veni Creator — Stanza 1 consolidation",
        listenFor: "Sing Stanza 1 together with the recording, quietly, supporting. This is the third contact with this piece. After singing: 'What do you notice about how the melody moves? Does it have eighth notes — fast pairs — or does it move more slowly?' (Gregorian chant generally moves in even values with textual rhythm, not metric rhythm.) 'Sacred music has its own time.'",
      },

      journal: {
        formIA: "Draw a rhythm: four beats, each one a choice between ta (one line) or ta-ka (two short lines). Draw any combination you like. Then clap what you drew.",
        formIIA: "Write the rhythm of the first four measures of Ex. 39 in Kodály syllables. Check against the page. Mark any errors with a small circle and correct them.",
      },

      closingRitual: "Clap ta ta-ka ta ta — together, once, cleanly. Say: \"Eighth notes are yours now. They live in you.\"",

      teacherNotes: "Exercises 39–40 are the first exercises that combine all of Unit 4's challenges simultaneously: new keys, eighth notes, and longer phrase lengths. If either child is struggling with more than one layer at a time, isolate: sing the exercise on Do only (remove pitch, keep rhythm), then sing the correct pitches without eighth notes (remove rhythm complexity), then combine. This three-stage approach is always available.",
      shortenIt: "Ex. 39 only. Sing it three times and stop.",
      stretchIt: "After Ex. 40, ask Form IIA to compose an eight-beat melody in G major using only the notes Sol-La-Ti-Do-Re, with at least two ta-ka pairs. He writes it in his journal and then sings it. This is the first composition attempt in the course.",
      watchFor: "The beat collapsing when eighth notes appear — children speeding up on ta-ka and slowing down on ta. The beat must be absolutely steady regardless of what is happening on the surface. Use the conducting beat gesture specifically to maintain the pulse through ta-ka pairs.",
    },

    {
      id: "24B",
      week: 24,
      session: "B",
      unit: "unit4",
      title: "Cold Sight-Reading — First Attempt",
      duration: "20–25 min",
      ladukhin: "New short exercise — cold sight-reading",
      materials: [
        "Ladukhin Elementary Course (any unsung exercise)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Cold Sight-Reading Protocol + Veni Creator Stanza 1",
        steps: [
          "Warm up with the three major scales.",
          "Cold Sight-Reading Introduction: say — 'Today we try something that professional singers do: sight-reading a piece we have never seen or sung before. No preview. No teacher singing first. Just the page, your eyes, and your voice.' This is Form IIA's task. Form IA listens.",
          "Open to a Ladukhin exercise neither child has sung yet — choose one from the mid-range, clear key signature, mostly quarter and half notes. Give Form IIA 60 seconds to look at the page silently: identify key, scan for eighth notes, find where it starts and ends.",
          "Form IIA sings cold. Teacher does not sing along. After: 'What went well? Where did you stumble?' Teacher adds observations.",
          "Sing the same exercise together — teacher and both children — to hear the correct version. 'Did anything surprise you?'",
          "Form IA: cold echo of a four-bar phrase. Teacher sings a phrase from the exercise; Form IA echoes it back cold — no preview. This is ear-based cold singing rather than notation-based.",
        ],
      },

      formIA: "Form IA's cold echo is the ear-based equivalent of Form IIA's cold sight-reading. Both children are attempting something slightly beyond their current fluency — that is the point. Affirm the attempt regardless of accuracy: 'You sang what you heard. That is exactly right.'",
      formIIA: "The cold sight-reading is a significant challenge. Do not prepare him by describing what is coming — the surprise is part of the exercise. Afterward, the discussion is as important as the performance: what was his preparation process? What would he do differently? This metacognitive habit is what turns a struggling sight-reader into a competent one.",

      sacredMusic: {
        searchTerm: "Veni Creator Spiritus Gregorian",
        label: "Veni Creator — Stanza 1 full sing",
        listenFor: "Sing Stanza 1 entirely from memory — no recording, just teacher and children together. Then play the recording and compare: 'How close were we?' No judgment — just listening. Say: 'You learned a Gregorian hymn by ear. That is exactly how monks learned it for a thousand years before notation was invented.'",
      },

      journal: {
        formIA: "Write: 'Cold singing means ___.' (Singing something for the first time without hearing it first.) Draw an image of what it felt like.",
        formIIA: "Write: 'When I sight-read cold, I first ___. Then I ___. The hardest part was ___.  Next time I will ___.' This four-sentence protocol becomes his standard sight-reading preparation checklist.",
      },

      closingRitual: "Sing Veni Creator Stanza 1 together, from memory, slowly. Say: \"This hymn is yours now. You learned it the old way — by listening and remembering.\"",

      teacherNotes: "Cold sight-reading is introduced here as a concept and experience, not as a mastery test. Form IIA will almost certainly stumble — that is expected and valuable. The point is to establish the protocol: prepare (look), attempt (sing), reflect (discuss), correct (sing again). This protocol will be used throughout Year 2. Plant it now.",
      shortenIt: "Skip the cold sight-reading. Do the Veni Creator memory sing and journal only.",
      stretchIt: "After the cold sight-reading reflection, ask Form IIA to try the same exercise again — with his preparation notes in mind. Compare the first attempt to the second. Does it improve? Discuss why or why not.",
      watchFor: "Form IIA becoming discouraged by the cold sight-reading. The purpose is not accuracy — it is exposure to the experience of reading under pressure. If he is visibly frustrated, normalize it immediately: 'Every cantor in the world stumbles on cold sight-reading. That is why they practice. You practiced today.'",
    },

    // ─────────────────────────────────────────
    // WEEK 25
    // ─────────────────────────────────────────

    {
      id: "25A",
      week: 25,
      session: "A",
      unit: "unit4",
      title: "Two Voices — Ladukhin 60 Solfeggi No. 1",
      duration: "25 min",
      ladukhin: "60 Solfeggi for 2 Voices, No. 1",
      materials: [
        "Ladukhin 60 Solfeggi for 2 Voices, p. 1 (No. 1) — PDF from IMSLP",
        "Piano",
        "Music journals and pencils",
      ],

      story: "Before the drill: \"We have been singing in one voice for nearly six months. Today we sing in two voices at the same time — two different melodies, happening simultaneously. This is how Orthodox choirs sing: multiple voices, each with its own line, all fitting together.\" Play two notes on the piano simultaneously — Do and Mi. Let it ring. \"Two different notes, at the same time, from the same instrument. They fit together — they are consonant. That is what two-part singing does with voices.\" Then play Do and Fi simultaneously — a dissonance. \"That one creates tension. Two-part singing uses both — consonance for rest, dissonance for movement. Today we begin with the consonant ones.\"",

      drill: {
        title: "Two-Voice Introduction — Ladukhin 60 Solfeggi No. 1",
        steps: [
          "Preparation: both children learn the upper voice of No. 1 together — teacher sings it, children echo phrase by phrase. Sing it twice through together.",
          "Now teacher sings the lower voice alone. Children listen. Ask: 'How is this different from the upper voice?' (Lower pitch, different melody.)",
          "Teacher sings lower voice; Form IIA sings upper voice simultaneously. This is the first genuine two-part singing. Form IA listens — his job right now is to hear what two voices sound like.",
          "Repeat the duet. If Form IIA drifts toward the teacher's lower voice (very common), teacher sings lower voice louder and Form IIA sings upper voice softer — then reverse. Learning to hold your own line requires hearing the other voice without being pulled by it.",
          "Switch: teacher sings upper voice; Form IIA attempts the lower voice. One run-through. It will be imperfect — accept this.",
          "Form IA: teacher sings upper voice; Form IA echoes the same upper voice alongside — a unison, not a two-part. This gives Form IA the experience of singing alongside another voice without the independence demand.",
        ],
      },

      formIA: "Form IA's role in two-part this week is unison with one voice — singing the upper voice alongside the teacher while Form IIA sings the lower voice. This is not less than two-part; it is two-part with training wheels. He hears the lower voice, sings his own part, and experiences harmony from the inside. Next week he may attempt more independence.",
      formIIA: "Form IIA attempts both voices. The test is: can he hold his line when a different melody is sounding next to him? This is the hardest musical skill introduced so far in the course. Affirm every attempt. Even four bars of accurate independent singing is a genuine achievement.",

      sacredMusic: {
        searchTerm: "Byzantine two voice chant Orthodox",
        label: "Two-voice Byzantine chant",
        listenFor: "Play approximately 90 seconds. Say: 'Listen for two voices. Do they sing the same notes or different notes?' After: 'Did they fit together? Where did they seem to agree — to land on the same note? Where did they diverge?' This builds the vocabulary of consonance and independence that two-part singing requires.",
      },

      journal: {
        formIA: "Draw two wavy lines — one higher, one lower — running parallel across the page. Label them 'Voice 1' and 'Voice 2.' Where they touch, write 'consonance.' This is a picture of two-part singing.",
        formIIA: "Write: 'Two-part singing means ___. The hardest part is ___. When I heard the other voice, my voice ___.' (He finishes honestly.)",
      },

      closingRitual: "Teacher sings a simple two-note chord on the piano — Do and Sol (a fifth). Everyone sings Do together while teacher holds Sol on the piano. \"Two sounds, one harmony. That is what we are building.\"",

      teacherNotes: "The introduction of two-part singing is one of the most significant moments in the course. Do not rush it and do not expect clean results this session. The concept — hold your line while another line sounds — requires a kind of musical independence that develops over weeks, not sessions. Plant the seed with joy, not pressure. The children will remember the first time they heard themselves make harmony.",
      shortenIt: "Teacher sings lower voice, both children sing upper voice in unison. No role-switching. Just the experience of two parts.",
      stretchIt: "After the duet work, teacher hums a sustained Do (tonic) drone while both children sing No. 1 upper voice together. The drone creates a third layer and forces the children to tune against a reference pitch.",
      watchFor: "Form IIA abandoning his part and following the teacher's voice — the most common two-part failure. Do not correct mid-phrase. After the phrase, say: 'You moved to my voice. Let's try again — this time, when you hear my note, hold yours even more strongly.' The instinct to match the other voice is natural and will diminish with practice.",
    },

    {
      id: "25B",
      week: 25,
      session: "B",
      unit: "unit4",
      title: "Two Voices — Switch and Repeat",
      duration: "20–25 min",
      ladukhin: "60 Solfeggi for 2 Voices, No. 1 — review and voice switch",
      materials: [
        "Ladukhin 60 Solfeggi for 2 Voices, p. 1",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Two-Voice Practice — Voice Switch",
        steps: [
          "Warm up: sing No. 1 upper voice from memory — both children, teacher silent. Can they do it without support?",
          "Duet — standard configuration: teacher lower, Form IIA upper, Form IA in unison with Form IIA. One full run-through.",
          "Switch: teacher upper, Form IIA lower. Form IA remains in unison with teacher's upper voice. One run-through.",
          "Discussion: ask Form IIA — 'Which voice was harder to hold: upper or lower? Why?' Ask Form IA — 'When the other voice was singing, could you still hear your own?'",
          "Final attempt: teacher steps back from one voice entirely for eight bars. Form IIA sings his assigned voice; teacher watches. Does he hold the line?",
          "If successful: try four bars where both children sing their respective voices with no teacher at all. Teacher plays the opening note on piano, then steps back completely. Even two bars of genuine two-part from the children alone is a milestone.",
        ],
      },

      formIA: "Form IA's task this session: sing the upper voice of No. 1 while being aware that Form IIA is singing something different. He does not need to sing a different line — he needs to notice and hold his line despite the other sound. Ask afterward: 'Did you hear Form IIA's voice? Did it pull you toward it?' This self-awareness is the first step toward eventual independence.",
      formIIA: "Form IIA attempts both voices in rotation. After the session, ask: 'Do you think you could sing the lower voice alone — without me singing either part?' Let him try. Even a partial attempt is valuable data about where his independence currently sits.",

      sacredMusic: {
        searchTerm: "Byzantine two voice chant Orthodox",
        label: "Two-voice Byzantine — sing along",
        listenFor: "Play 90 seconds. Ask both children to sing along with one of the two voices — they choose which. 'Choose a voice and stay on it. Don't switch.' After: 'Did you stay? What made it hard?'",
      },

      journal: {
        formIA: "Write: 'When I sang with two voices, I heard ___.' (His honest description of the experience — what he heard, how it felt.)",
        formIIA: "Write: 'The upper voice goes: ___-___-___ (first three notes). The lower voice goes: ___-___-___ (first three notes).' Write the solfège syllables from memory. Check against the page.",
      },

      closingRitual: "Teacher sings Do. Form IIA sings Mi above it. Form IA sings Do with the teacher. Hold together for four beats. Say: \"Three voices, two notes, one harmony. That is a choir.\"",

      teacherNotes: "Session B of Week 25 consolidates what Session A introduced. The goal is not polished two-part performance — it is the children beginning to hold their own line independently, even for brief moments. Note in your teacher log: how many bars did Form IIA hold his line without drifting? That number should increase each session. Four bars this week is success.",
      shortenIt: "Standard configuration once, switch once, final four-bar attempt. Skip the discussion and journal.",
      stretchIt: "Record the final four-bar attempt on your phone. Play it back. Ask: 'What do you hear? Does it sound like two voices or one?' Let the children evaluate their own two-part work from the outside.",
      watchFor: "Both children unconsciously sliding toward unison even when assigned different voices — the ear naturally seeks agreement. This is beautiful instinct but wrong direction for now. When you hear them converging, play your assigned note on the piano as a reminder of where they should be.",
    },

    // ─────────────────────────────────────────
    // WEEK 26
    // ─────────────────────────────────────────

    {
      id: "26A",
      week: 26,
      session: "A",
      unit: "unit4",
      title: "Exercises 41–43 and Two-Voice Duets 2–3",
      duration: "25 min",
      ladukhin: "Exercises 41–43 (Elementary Course) + 60 Solfeggi Nos. 2–3",
      materials: [
        "Ladukhin Elementary Course, pp. 33–36 (Ex. 41–43)",
        "Ladukhin 60 Solfeggi for 2 Voices, pp. 1–2 (Nos. 2–3)",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Solo Exercises 41–43 + Two-Voice Duets 2–3 Preview",
        steps: [
          "Warm up: three major scales, one breath each. Then No. 1 from 60 Solfeggi — upper voice from memory.",
          "Solo exercises: open to Ex. 41. Key identification, then sing together. Repeat once. Ex. 42: same. Ex. 43: same. These should move at a brisk pace — the solo work is consolidation this session, not new teaching.",
          "Transition: say 'Now to two voices.' Open to No. 2 of 60 Solfeggi. Both children learn the upper voice by ear — teacher sings, they echo. Two runs.",
          "Teacher sings lower voice of No. 2 while Form IIA sings upper voice. One run-through.",
          "If time permits: open to No. 3. Just learn the upper voice. No two-part attempt on No. 3 this session.",
        ],
      },

      formIA: "Form IA sings the upper voice in unison with Form IIA throughout the two-part work. For Ex. 41–43, Form IA echoes by ear — key identification is done verbally by teacher. No page-reading required. His primary task this session is to sing all exercises accurately without drifting pitch.",
      formIIA: "Form IIA reads Ex. 41–43 from notation independently — teacher does not sing first. These are review exercises and Form IIA should be able to approach them cold with only the key identification step as preparation. After Ex. 43, ask: 'Which of these three keys was easiest for you? Which is still uncertain?'",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — return after Unit 3",
        listenFor: "Play approximately 90 seconds. This is the first time hearing Agni Parthene since Unit 3. Ask: 'How much more can you hear now than when we listened to this six weeks ago?' Let both children respond. 'What do you notice now that you didn't notice before?' This question has no wrong answer — any observation shows growth.",
      },

      journal: {
        formIA: "Write: 'I have been singing for ___ weeks.' (26.) 'The piece I know best is ___.' (His choice.) 'Something I can do now that I couldn't do at the beginning is ___.'",
        formIIA: "Write: 'When I listen to Agni Parthene now, I hear ___. When I first heard it in Week 15, I noticed ___. What changed is ___.' Three sentences — a before-and-after observation.",
      },

      closingRitual: "Sing Agni Parthene's opening phrase — from memory, together. \"This phrase has been with us since Unit 3. It belongs to us now.\"",

      teacherNotes: "The return of Agni Parthene at Week 26 is one of the course's most rewarding moments. Children who have been through the full Year 1 arc will genuinely hear more in the recording — the major/minor distinction, the phrase structure, the modal character, the vocal quality. Let them name what they hear. Their observations are evidence of everything the course has built.",
      shortenIt: "Ex. 41 and No. 2 duet only. Skip Ex. 42–43 and No. 3.",
      stretchIt: "After No. 2 duet, ask Form IIA to sight-read No. 3 upper voice cold — no preparation. Then teacher sings lower voice of No. 3 while Form IIA sight-reads upper. Cold two-part sight-reading is an advanced skill and should only be attempted if No. 2 was clean.",
      watchFor: "Fatigue from the combined solo and two-part work — this is a full session. If either child is flagging, cut the two-part work short and spend the last five minutes on the Agni Parthene listening. Quality singing matters more than completing the plan.",
    },

    {
      id: "26B",
      week: 26,
      session: "B",
      unit: "unit4",
      title: "Two-Voice Duet Practice — Building Confidence",
      duration: "20–25 min",
      ladukhin: "60 Solfeggi Nos. 1–3 — duet practice",
      materials: [
        "Ladukhin 60 Solfeggi for 2 Voices, pp. 1–2",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Duet Consolidation — Nos. 1–3",
        steps: [
          "Warm up: both children sing the upper voice of No. 1 from memory, teacher silent.",
          "Duet No. 1: teacher lower, Form IIA upper, Form IA in unison with Form IIA. One run.",
          "Duet No. 2: same configuration. One run.",
          "Switch voices on No. 1: teacher upper, Form IIA lower. One run.",
          "Attempt: four bars of No. 1 with children only — no teacher voice. Teacher plays opening note, steps back. Both children hold their assigned lines. If clean: extend to eight bars. If not: teacher re-enters and identifies the drift point.",
          "Preview No. 3: both children learn upper voice. Teacher sings lower voice alone so they hear the full duet. 'We'll sing No. 3 together next week.'",
        ],
      },

      formIA: "This week, offer Form IA a new challenge: instead of singing in unison with Form IIA, ask him to hold a sustained Do (tonic drone) while Form IIA and teacher sing No. 1. This is a genuine independent line — simpler than a duet melody but harmonically active. If he can hold Do for eight bars while the two-part happens above him, he is ready for actual two-part work in Unit 5.",
      formIIA: "Form IIA consolidates both voices of No. 1 and No. 2 this session. By the end of this session, he should be able to state clearly which voice is more stable for him. That voice becomes his primary assignment in Unit 5's duet work; the weaker voice gets more practice.",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Agni Parthene — multi-phrase sing-along",
        listenFor: "Play 2 minutes. Both children sing along with whatever phrases they know — there should be several by now. No correction. Just singing. After: 'How many phrases do you know?' Count together. Say: 'You learned this entire melody by ear, one phrase at a time, over many weeks. That is how the tradition passes — singer to singer, generation to generation.'",
      },

      journal: {
        formIA: "Write: 'In two-part singing, my job is ___. When I hear the other voice, I ___.' (His own honest words.)",
        formIIA: "Write: 'In No. 1, the upper voice starts on ___. The lower voice starts on ___. They first sing the same note at ___.' (He identifies the first unison in the duet from memory or from the page.)",
      },

      closingRitual: "Teacher sings the lower voice of No. 1; both children sing the upper voice. Hold the final note together — three voices, two parts. Let it ring for four beats. Say: \"That is the sound we are building toward. Remember it.\"",

      teacherNotes: "By the end of Week 26, the duet work should feel familiar rather than frightening. Neither child will have mastered two-part independence — that is a Year 2 goal — but they should be able to attempt it without anxiety. The journey from the drone work in Unit 3 to genuine two-part in Unit 4 has been gradual and intentional. Acknowledge the arc to them.",
      shortenIt: "Duet No. 1 in standard configuration, four-bar children-only attempt, Agni Parthene sing-along. Skip Nos. 2–3.",
      stretchIt: "All three of you — teacher + both children — attempt No. 2 in full three-part: teacher lower, Form IIA upper, Form IA drone on Do. This is a genuine three-part texture and will sound beautiful if the drone is held. Do not force it — offer it.",
      watchFor: "The children-only duet attempt collapsing immediately. If both children lose their lines within two bars, the issue is likely that the lower voice is not yet internalized enough to be held independently. Return to having one child sing while teacher sings the other — independence comes later.",
    },

    // ─────────────────────────────────────────
    // WEEK 27
    // ─────────────────────────────────────────

    {
      id: "27A",
      week: 27,
      session: "A",
      unit: "unit4",
      title: "Unit 4 Review — Three Keys, Eighth Notes, Two Voices",
      duration: "25 min",
      ladukhin: "Exercises 29–43 — selected review",
      materials: [
        "Ladukhin Elementary Course, pp. 22–36",
        "Ladukhin 60 Solfeggi for 2 Voices, pp. 1–2",
        "Piano",
        "Music journals and pencils",
      ],

      drill: {
        title: "Unit 4 Survey — All Skills",
        steps: [
          "Three major scales warm-up: C, G, F — one breath each. No piano after opening notes.",
          "Solo review — curated selection: Ex. 29 (G major, simple), Ex. 34 (F major, simple), Ex. 39 (mixed keys, eighth notes). Sing each once. Teacher observes without comment.",
          "Sight-reading review: open to Ex. 41. Form IIA sings cold, first attempt. Form IA echoes back each phrase after Form IIA sings it. Two-voice echo — one reads, one echoes by ear.",
          "Two-voice work: No. 1 of 60 Solfeggi. Children-only attempt for the full piece — teacher plays opening notes, steps back, observes. Note where they hold and where they drift.",
          "Key identification by ear: teacher plays six scales (C, G, F, C minor preview, G major, F major — two repeats). Children call out the key. The C minor preview is a teaser: 'We have heard minor. Does this sound like C major or something else?' (C minor — something else.)",
        ],
      },

      formIA: "Form IA's review tasks: G major scale from memory (no piano), echo Ex. 29 accurately after one teacher hearing, participate in the two-voice No. 1 (upper voice in unison with Form IIA), and identify at least four of the six scales by ear. Success on four out of six is a strong Unit 4 outcome for Form IA.",
      formIIA: "Form IIA's review tasks: sight-read Ex. 41 cold with key identification; hold his assigned voice in No. 1 children-only attempt for at least eight bars; identify all six scales including the C minor teaser. Record results in your teacher log. Compare to the Unit 3 mid-year assessment scores.",

      sacredMusic: {
        searchTerm: "Veni Creator Spiritus Gregorian",
        label: "Veni Creator — review listening",
        listenFor: "Play 90 seconds. Sing Stanza 1 along with the recording from memory. After: 'We have learned this piece over four weeks. You know it now — not because you were taught, but because you listened and remembered. That is how the Church has always taught its music.'",
      },

      journal: {
        formIA: "Free journal entry: 'The thing I am most proud of from Unit 4 is ___.' Draw one thing he learned.",
        formIIA: "Write three headings: 'G Major,' 'F Major,' 'Two-Voice Singing.' Under each, write two things he knows and one thing he is still working on. This is honest self-assessment.",
      },

      closingRitual: "Sing the Veni Creator opening phrase together from memory. Then find Do. \"Unit 4 is almost complete. One more session.\"",

      teacherNotes: "The Unit 4 review is a consolidation session, not a new-material session. Use it to identify gaps before the assessment in Session B. The key identification teaser (C minor preview) is intentional — it introduces Unit 5's modal work without naming it. Note the children's reactions to C minor: curiosity is a good sign.",
      shortenIt: "Three scales, Ex. 29 and 34, No. 1 children-only attempt, journal. Skip the cold sight-reading and key identification game.",
      stretchIt: "After the No. 1 children-only attempt, try No. 2 children-only — both children, no teacher voice, for eight bars. This requires both to hold independent lines simultaneously with no safety net.",
      watchFor: "The children-only duet attempt improving significantly compared to Week 25 — it should. If it has not improved, note this in the log. Independence in two-part is the central new skill of Unit 4 and the foundation of all Year 2 choral work.",
    },

    {
      id: "27B",
      week: 27,
      session: "B",
      unit: "unit4",
      title: "Unit 4 Assessment — Cold Sight-Reading and Survey Listening",
      duration: "25 min",
      ladukhin: "Exercises 29–43 — assessment",
      materials: [
        "Ladukhin Elementary Course and 60 Solfeggi",
        "Piano",
        "Assessment log",
        "Music journals and pencils",
      ],

      drill: {
        title: "Unit 4 Assessment Protocol",
        steps: [
          "WARM-UP (3 min): Three major scales, one clap pattern with eighth notes.",
          "ASSESSMENT — Form IIA (10 min): (1) Cold sight-read one exercise in G major (chosen by teacher — unseen by student). Record accuracy: pitch and rhythm. (2) Cold sight-read one exercise in F major. Record. (3) Two-part: teacher sings lower voice of No. 1; Form IIA sings upper voice. Record independence score (how many bars before drifting). (4) Key identification: teacher plays four scales; Form IIA names each. Record.",
          "ASSESSMENT — Form IA (8 min): (1) Sing G major scale from memory — no piano. Record pitch accuracy. (2) Echo Ex. 29 phrase by phrase after one hearing. Record. (3) Two-part: sing upper voice of No. 1 in unison while teacher sings lower voice. Record whether he stays on his part. (4) Key identification by ear: three scales. Record.",
          "After both assessments: celebrate. Say: 'You have learned three major keys, eighth note rhythms, and the beginning of two-part singing. That is nine weeks of work. It is solid.'",
        ],
      },

      formIA: "Form IA's assessment is entirely ear-based. A strong Unit 4 outcome for Form IA: G major scale accurate from memory, Ex. 29 accurately echoed, two-part attempt holds for at least four bars, two of three key identifications correct. Any outcome at or above this baseline means he is ready for Unit 5.",
      formIIA: "Form IIA's assessment includes cold notation reading. Compare scores to Unit 3 mid-year assessment. A strong Unit 4 outcome: cold sight-reading in both G and F major showing accurate key signature application, two-part independence for at least eight bars, all four key identifications correct. If cold sight-reading is still weak, plan additional notation drill at the start of Unit 5.",

      sacredMusic: {
        searchTerm: "Agni Parthene O Pure Virgin Byzantine chant",
        label: "Survey — children choose their favorite",
        listenFor: "Ask each child: 'What is your favorite piece we have listened to this year?' Find it on YouTube and play it. No analysis, no questions. Just the gift of music they love. This is the Unit 4 close.",
      },

      journal: {
        formIA: "Free journal: 'My favorite thing about music this year is ___.' Any format.",
        formIIA: "Write the Unit 4 self-assessment from Session A: G Major (two things I know, one I'm working on), F Major (same), Two-Voice Singing (same). Then compare to what you wrote in the Unit 3 assessment. 'What changed?'",
      },

      closingRitual: "Teacher plays a two-note chord on the piano — Sol and Re (a fifth in G major). Both children find their voice on Sol. Teacher moves to the lower note. Both children hold Sol. Say: \"You hold your note. Another voice is below you. That is what a choir is — each person holding their part so the whole can sound.\"",

      teacherNotes: "Record all assessment scores before the session ends. Unit 5 (Weeks 28–36) moves immediately into synthesis preparation — the children will be choosing and learning a specific sacred piece for a cappella performance. Readiness for Unit 5 requires: solid major key ear in at least C and G major, basic eighth note rhythm accuracy, and willingness to attempt two-part singing. All three should be present by now.",
      shortenIt: "Assess pitch accuracy and two-part independence only. Skip cold sight-reading and key identification.",
      stretchIt: "After the formal assessment, ask each child to teach the other one thing they learned in Unit 4. The teacher listens. What they choose to teach reveals what they value and what they truly own.",
      watchFor: "Assessment scores lower than Unit 3 mid-year — this would indicate that the complexity of Unit 4 (new keys, eighth notes, two-part simultaneously) has temporarily overloaded one or both children. If this happens, begin Unit 5 with two additional review sessions before starting synthesis preparation. Do not push into new material over an unstable foundation.",
    },

  ], // end Unit 4 lessons
}, // end Unit 4 object

{
  id: "unit5",
  title: "Unit 5: First Synthesis",
  weeks: "28–36",
  ladukhin: "Exercises 44–55",
  overview: "Consolidation of all Year 1 skills. Accidentals within pieces. Ear training emphasis. Selection and preparation of first a cappella synthesis piece. Synthesis event. Year 1 celebration and Year 2 preview.",
  lessons: [

    // WEEK 28
    {
      id: "28A",
      week: 28,
      session: "A",
      unit: "unit5",
      title: "Chromatic Hints — Accidentals Within Pieces",
      duration: "25 min",
      ladukhin: "Exercises 44–46",
      materials: [
        "Ladukhin Elementary Course, pp. 33–36 (Ex. 44–46)",
        "Piano",
        "Music journals and pencils",
      ],
      story: "Before the drill, say: \"For nine months you have sung in keys with clean key signatures — one sharp, one flat, or none at all. Today we meet something new: accidentals. An accidental is a sharp, flat, or natural sign that appears inside a piece, on a single note, without being in the key signature. It is a one-time visitor. It applies only to that note, only for that measure, and then disappears.\" Play a familiar scale — G major. Then play one note of it with a flat — G-A-B-Bb-B... — so the Bb sounds slightly unexpected. Ask: \"Did you hear that? One note changed color for a moment, then came back. That is an accidental. In sacred music, accidentals appear whenever the melody wants to borrow a color from another key for just a phrase. Orthodox chant is full of them.\"",
      drill: {
        title: "Accidentals Introduction + Ladukhin Ex. 44–46",
        steps: [
          "Explain the accidental rule clearly once: 'A sharp or flat written before a note on the page applies to every instance of that note for the rest of that measure — and only that measure. The next measure, it is gone.' Write a simple example on staff paper if helpful.",
          "Open to Ex. 44. Before singing: Form IIA scans for any accidentals on the page and identifies them aloud. Teacher points them out to Form IA without requiring notation reading.",
          "Sing Ex. 44 together. At any accidental, teacher sings that note clearly — slightly emphasizing its inflection — so both children hear the color change. Then continue.",
          "Ex. 45: same process. Form IIA identifies accidentals before singing; teacher alerts Form IA during.",
          "Ex. 46: same. After singing, ask both children: 'Did you hear the note that changed color? Can you sing just that note — the accidental — by itself?' Teacher plays it on the piano; children echo.",
        ],
      },
      formIA: "Form IA does not need to identify accidentals in notation. His job is to hear them — the slight color-change in pitch — and absorb them aurally. After singing Ex. 44, ask: 'Did one note feel different? Which one?' Let him listen for the answer rather than looking at the page.",
      formIIA: "Form IIA scans for accidentals before singing every exercise from now on. This becomes part of his sight-reading preparation protocol: (1) key signature; (2) time signature; (3) any accidentals or unusual notes; (4) rhythm; (5) sing. Write this protocol in his journal this week so it becomes a fixed habit.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — first hearing",
        listenFor: "Say: \"Over the next eight weeks, you are going to prepare one piece to sing at a service — or for our family, if a service is not possible. This is the goal the whole course has been building toward. Today we choose the piece and hear it for the first time.\" Play the synthesis piece the family has selected. Play 60–90 seconds. Ask: 'Do you know this piece? Have you heard it at church?' Most children will recognize it. 'Good. You already carry it in your ear. Now we are going to make it yours to sing.'",
      },
      journal: {
        formIA: "Write the name of the synthesis piece. Draw something that the piece makes him think of. Write: 'I am going to sing this piece by ___.' (The approximate date of the synthesis event.)",
        formIIA: "Write the sight-reading preparation protocol: '(1) Key signature. (2) Time signature. (3) Accidentals. (4) Rhythm. (5) Sing.' Then write: 'An accidental is ___. It lasts for ___.' Then write the name of the synthesis piece and why it was chosen.",
      },
      closingRitual: "Play the first phrase of the synthesis piece on the piano. Sing it together — just the first phrase, by ear. Say: \"That is where we begin. Eight weeks from now, you will sing this — and it will be yours.\"",
      teacherNotes: "Week 28 is a pivot point in the course. The synthesis piece selection must be made before this session. The piece should already live in the children's liturgical memory. If the family is uncertain, the Troparion of the Nativity is the most universally appropriate choice: it is short, structurally clear, well-recorded, and has deep formation value. Do not choose a piece that is unfamiliar to the children — the course teaches them to own what they already know, not to learn something new from scratch.",
      shortenIt: "Accidentals explanation and Ex. 44 only. Skip Ex. 45–46 and introduce the synthesis piece by ear only (no journal).",
      stretchIt: "Ask Form IIA to find all accidentals in Ex. 45 before singing it and mark them with a pencil. After singing: 'Did you prepare for all of them, or did any surprise you?' This builds the habit of thorough pre-reading.",
      watchFor: "Form IIA reading an accidental correctly but then carrying it into the next measure — forgetting that it expires at the bar line. Gently remind: 'Check the bar line. Does the accidental appear again in measure 4?' The rule is one measure only.",
    },

    {
      id: "28B",
      week: 28,
      session: "B",
      unit: "unit5",
      title: "Ear Training — Name the Note",
      duration: "20–25 min",
      ladukhin: "Exercises 44–46 review",
      materials: [
        "Ladukhin Elementary Course, pp. 33–36",
        "Piano",
        "Music journals and pencils",
      ],
      drill: {
        title: "Name the Note Game + Ex. 44–46 Review",
        steps: [
          "Name the Note game: Teacher plays a single note on the piano. Children sing the solfège name of that note. Begin with the C major scale notes. Then introduce notes from G major (F# = Fa#) and F major (Bb = Ti-flat).",
          "Round 1 (8 rounds): C major only. Easy, fast, build confidence.",
          "Round 2 (8 rounds): mix C major and G major notes. When F# appears, children sing 'Fa-sharp.'",
          "Round 3 (6 rounds): include B-flat. When B-flat appears, children sing 'Ti-flat.'",
          "Decoy round: teacher plays a note, pauses, then plays a different note. 'Which note was higher?' Children answer. Tests relative pitch without requiring exact name identification.",
          "Review Ex. 44 and 45 together. Brisk pace — no teaching, just singing. Listen for the accidentals landing correctly.",
        ],
      },
      formIA: "In the Name the Note game, Form IA names notes from C major only (Rounds 1 and a few from Round 2). He does not yet need to name Fa# or Ti-flat by name — singing the correct pitch is sufficient.",
      formIIA: "Names all notes including accidentals by solfège name: 'Fa-sharp,' 'Ti-flat.' By the end of this game in Week 28, Form IIA should be able to name any white key on the piano and B-flat and F# by their solfège name without hesitation.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — begin learning by ear",
        listenFor: "Play the synthesis piece twice. Then teacher sings the first phrase slowly; both children echo. Repeat. By the end of Session B, both children should be able to echo the first phrase accurately. Note: the synthesis piece is now the primary sacred music selection for all of Unit 5.",
      },
      journal: {
        formIA: "Write or dictate: 'The first phrase of our synthesis piece goes ___.' (He writes the solfège syllables of the first phrase as best he can recall.)",
        formIIA: "Write the solfège syllables of the first phrase of the synthesis piece from memory. Check against the recording. Mark any that were wrong. Write: 'I missed ___ because ___.'",
      },
      closingRitual: "Sing the first phrase of the synthesis piece together from memory. No piano, no recording. Say: \"One phrase. Yours. Next session: two.\"",
      teacherNotes: "The Name the Note game is a formal ear-training exercise that should continue in some form through the rest of Unit 5. It builds absolute pitch recognition — the ability to hear a note and name it — which is the foundation of everything in Year 2. The game should feel fast and light. If a child misses a note, simply play it again and sing the name yourself: 'That is Sol.' Move on. No dwelling on errors.",
      shortenIt: "Name the Note game (Rounds 1–2 only) and first phrase of synthesis piece. Skip Ex. 44–46 review.",
      stretchIt: "After Round 3 of the Name the Note game, ask Form IIA: 'Can you name a note I have not played? Think of a note somewhere in the middle of the staff.' He names it; teacher finds and plays it. 'Was that the note you were hearing?' This begins inner hearing — audiating a pitch before sounding it.",
      watchFor: "Children guessing in the Name the Note game rather than listening. The tell: a fast answer with no pause to listen. Slow the pace: play the note, wait three full seconds, then ask. The pause is the listening.",
    },

    // WEEK 29
    {
      id: "29A",
      week: 29,
      session: "A",
      unit: "unit5",
      title: "Ladukhin + Synthesis — The Weekly Pattern Begins",
      duration: "25–30 min",
      ladukhin: "Exercises 47–48",
      materials: [
        "Ladukhin Elementary Course, pp. 36–38 (Ex. 47–48)",
        "Piano",
        "Music journals and pencils",
        "Synthesis piece sheet music (if available) or teacher's handwritten copy",
      ],
      story: "Say: \"From now until Week 34, every session has two parts: Ladukhin drill for fifteen minutes, and synthesis piece preparation for ten minutes. The drill keeps your skills sharp. The synthesis piece is why the skills exist. Both are necessary. Neither replaces the other.\"",
      drill: {
        title: "Ladukhin Ex. 47–48 + Synthesis Phrase Work",
        steps: [
          "PART 1 — LADUKHIN (15 min): Warm-up: Name the Note game, 6 rounds. Then Ex. 47: rhythm-first protocol (clap, speak, sing on Do, sing with solfège). Key identification before beginning. Then Ex. 48: same protocol.",
          "PART 2 — SYNTHESIS (10 min): Review the first phrase from Week 28 — both children sing it from memory. Then: teacher sings the second phrase; both children echo. Repeat until the second phrase is stable.",
          "Connect the phrases: sing phrase 1 into phrase 2 without stopping. This is the first time the piece flows as a continuous musical thought rather than isolated fragments.",
        ],
      },
      formIA: "Ladukhin: echoes Ex. 47 and 48 by ear. Synthesis: echoes both phrases with teacher. The test at the end: can Form IA sing phrases 1–2 without teacher singing along? Try once. Whatever the result, affirm the attempt.",
      formIIA: "Ladukhin: reads notation, identifies key and accidentals. Synthesis: sings from memory or from the page if sheet music is available. Form IIA should be able to correct his own pitch errors by this stage — if he sings a phrase incorrectly, ask: 'Does that match what you heard?' Give him the chance to self-correct before you model the phrase again.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — phrases 1–2",
        listenFor: "Play the synthesis piece once through. Ask: 'Count the phrases — how many musical ideas does this piece have?' Let both children count. Then: 'We learned phrases 1 and 2 today. Which phrase is which?' Play each phrase again and let children identify.",
      },
      journal: {
        formIA: "Write the solfège syllables of phrases 1 and 2 as best he can. Approximation is fine.",
        formIIA: "Copy the first two phrases of the synthesis piece from the sheet music onto the staff. Write the solfège syllables below each note.",
      },
      closingRitual: "Sing phrases 1 and 2 of the synthesis piece together — from memory, without the recording. Say: \"Two phrases. Growing.\"",
      teacherNotes: "The 15-minute Ladukhin / 10-minute synthesis split should feel natural by Week 29. Keep it disciplined — if the Ladukhin runs long, cut it, not the synthesis. The synthesis piece is the reason for everything else in the course. It should never be the part that gets skipped.",
      shortenIt: "Ex. 47 only. Synthesis: phrases 1–2 review only, no new phrases this session.",
      stretchIt: "Ask Form IIA: after reviewing phrases 1–2, can he sing them with the text of the synthesis piece rather than solfège? The text and the melody must eventually connect; begin that connection now.",
      watchFor: "The synthesis piece preparation feeling like 'extra' rather than 'primary.' If the teacher's energy drops when moving to the synthesis piece, the children will feel it. The synthesis piece is the destination — bring your full attention to it.",
    },

    {
      id: "29B",
      week: 29,
      session: "B",
      unit: "unit5",
      title: "Drill Session — Year 1 Survey",
      duration: "20–25 min",
      ladukhin: "Exercises 47–48 review",
      materials: [
        "Ladukhin Elementary Course, all pages",
        "Piano",
        "Music journals and pencils",
      ],
      drill: {
        title: "Year 1 Survey Drill + Name the Note",
        steps: [
          "Name the Note game: 10 rounds. Mix C major, G major (F#), F major (B-flat), and A minor notes. Goal: both children responding within two seconds of hearing the note.",
          "Year 1 Survey: sing one exercise from each unit — teacher chooses. Suggested: Ex. 5 (Unit 1), Ex. 16 (Unit 2), Ex. 22 (Unit 3), Ex. 34 (Unit 4), Ex. 47 (Unit 5). Five exercises, five units. This is the Year 1 musical map in action.",
          "After the survey: ask both children, 'Which exercise felt strongest? Which felt rustiest?' Note the answers — these inform any remediation needed before the synthesis event.",
          "Review the synthesis piece phrases 1–2 from memory. No recording, no piano — just voices.",
        ],
      },
      formIA: "In the Year 1 survey, Form IA echoes each exercise. His responses are genuine assessment data — note where his pitch accuracy is strongest and where it struggles. Do not correct in the moment; simply note.",
      formIIA: "In the Year 1 survey, Form IIA sight-reads each exercise cold. If he stumbles on a particular key, note it and add a warm-up in that key to the next three sessions.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — phrases 1–2 a cappella",
        listenFor: "Play the synthesis piece through once. Then attempt both phrases a cappella — no recording, no piano. Teacher listens but does not sing. How accurate are the children? Play the recording afterward and compare. This is honest self-assessment via the recording.",
      },
      journal: {
        formIA: "Write: 'The exercise I know best is ___. The exercise I need to practice more is ___.'",
        formIIA: "Write: 'Year 1 Survey results: Unit 1 — ___. Unit 2 — ___. Unit 3 — ___. Unit 4 — ___. Unit 5 — ___.' One word for each. Then: 'My weakest key is ___ because ___.'",
      },
      closingRitual: "Sing phrases 1–2 of the synthesis piece once more — from memory, a cappella. End on the final note and let it ring. Say: \"That is your voice. It knows those phrases. On to the next ones.\"",
      teacherNotes: "The Year 1 survey drill is one of the most valuable activities in Unit 5. It reveals the full arc of the course in one sitting. Run it at least twice in Unit 5 — once here in Week 29 and once in the Week 36 celebration. The contrast will be striking.",
      shortenIt: "Name the Note game (6 rounds) and synthesis phrases 1–2 a cappella. Skip the Year 1 survey.",
      stretchIt: "After the survey, ask Form IIA to sight-read any exercise from any unit cold — without being told which unit it is from. Teacher plays the starting note; Form IIA reads from the page.",
      watchFor: "The synthesis piece a cappella attempt revealing pitch drift — the piece starts in the right key but slowly migrates. Note the direction of the drift (usually flat) and spend one minute before next session playing the starting pitch for both children to match before beginning.",
    },

    // WEEK 30
    {
      id: "30A",
      week: 30,
      session: "A",
      unit: "unit5",
      title: "Ladukhin + Synthesis — Phrases 3–4",
      duration: "25–30 min",
      ladukhin: "Exercises 49–50",
      materials: [
        "Ladukhin Elementary Course, pp. 38–40 (Ex. 49–50)",
        "Piano",
        "Music journals and pencils",
        "Synthesis piece materials",
      ],
      drill: {
        title: "Ladukhin Ex. 49–50 + Synthesis Phrases 3–4",
        steps: [
          "PART 1 — LADUKHIN (15 min): Name the Note (6 rounds). Then Ex. 49: rhythm-first protocol, key identification, sing together. Then Ex. 50: same.",
          "PART 2 — SYNTHESIS (10 min): Review phrases 1–2 from memory — one run, no stopping. Then: teacher sings phrase 3; both children echo. Drill phrase 3 until stable. If time: teacher sings phrase 4; both children echo.",
          "Connect: sing phrases 1–2–3 without stopping. Let it be imperfect — the continuity is the achievement.",
        ],
      },
      formIA: "Ladukhin by ear. Synthesis: echoes all phrases. After the phrases 1–2–3 run-through, ask Form IA: 'Could you sing phrase 2 by itself?' Test it. Individual phrase recall is the sign that phrases are truly internalized, not just learned in sequence.",
      formIIA: "Ladukhin from notation. Synthesis: from memory or page. Before the run-through of phrases 1–2–3, Form IIA identifies the mode of each phrase if the piece moves between modes. This connects Unit 3 minor work to actual chant analysis.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — phrase 3 learning",
        listenFor: "Play the synthesis piece once through, following the full melody. Ask: 'We know phrases 1 and 2. Can you hear where phrase 3 begins?' Let children identify. Then play phrases 3–4 in isolation. 'What does phrase 3 feel like compared to phrase 1? Does it go higher? Lower? Is it the same shape?'",
      },
      journal: {
        formIA: "Write the solfège syllables of phrase 3 from memory — as many as he can recall.",
        formIIA: "Write: 'Phrase 3 of the synthesis piece goes ___' (solfège syllables). Then: 'It feels different from phrase 1 because ___.'",
      },
      closingRitual: "Sing phrases 1–2–3 from memory, a cappella. Say: \"More than half the piece. You are carrying it.\"",
      teacherNotes: "By Week 30, the synthesis piece preparation should be taking on a life of its own — the children may begin humming it or asking about the next phrase outside of sessions. If this is happening, celebrate it quietly. It means the piece has genuinely lodged in the ear.",
      shortenIt: "Ex. 49 only. Synthesis: review 1–2 and add phrase 3. No phrase 4 this session.",
      stretchIt: "Ask Form IIA to sing phrase 3 with the text of the synthesis piece — not solfège. The transition from solfège to text is the next layer of the preparation arc.",
      watchFor: "The synthesis piece beginning to feel like a performance rather than an offering. If either child begins to perform — stiffening, projecting artificially, watching the teacher for approval — stop and say: 'We are not singing for me. We are singing for God. Offer it simply.'",
    },

    {
      id: "30B",
      week: 30,
      session: "B",
      unit: "unit5",
      title: "Synthesis Rehearsal — Deep Phrase Work",
      duration: "20–25 min",
      ladukhin: "No new exercises — synthesis focus",
      materials: [
        "Piano",
        "Synthesis piece materials",
        "Music journals and pencils",
      ],
      drill: {
        title: "Full Synthesis Piece Rehearsal — Phrases 1–4",
        steps: [
          "Run phrases 1–2 from memory. Identify any pitch drift and correct: play the starting note, re-anchor both children, re-sing.",
          "Run phrase 3 with text (if ready) or solfège. Then phrase 4.",
          "Connect all four phrases: one continuous run-through of the full piece as learned so far. Do not stop for errors.",
          "Play the recording. Both children sing with it. How close are they? What is still rough?",
          "Identify the one weakest phrase. Drill it alone: teacher sings it, children echo, repeat 4 times. Then reconnect it to the surrounding phrases.",
          "Final run-through: a cappella, no recording, no piano. Teacher listens in silence.",
        ],
      },
      formIA: "Full run-throughs by memory. Whatever Form IA is using to carry the melody — solfège, text, neutral syllable — is correct. The pitch and shape of the melody are the primary targets.",
      formIIA: "After the a cappella run-through, Form IIA identifies: 'Which phrase am I least sure of?' He drills that phrase alone. This self-directed practice is one of the most important skills in the course.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — deep listening",
        listenFor: "Play the recording one final time at the end of the session. Ask: 'Is there anything in this recording that we are not yet doing — a nuance, a quality of tone — that you want to add to your version?' This invites musical aspiration without creating anxiety.",
      },
      journal: {
        formIA: "Write: 'The phrase I find hardest is phrase ___. I find it hard because ___.'",
        formIIA: "Write: 'After today's rehearsal, the phrase I most need to practice is ___. My plan for that phrase is: ___.'",
      },
      closingRitual: "Sing the synthesis piece from beginning to where you have learned, one final time. A cappella. End with a moment of silence. Say: \"This is what the voice is for.\"",
      teacherNotes: "Week 30 Session B is the first session devoted entirely to synthesis piece work, with no Ladukhin. The session should feel focused and purposeful — not like a drill, but like a rehearsal. The children are beginning to do something real.",
      shortenIt: "Run phrases 1–4 once together, drill the weakest phrase, one a cappella run-through. Skip the journal.",
      stretchIt: "Run the whole piece with both children on different roles: Form IIA sings with text, Form IA sings with solfège simultaneously. The two voices carrying the same melody in two different ways tests how deeply each child has internalized the piece.",
      watchFor: "Children losing energy during rehearsal. If energy drops: stop, stand up, walk to the piano, play the starting note again, sing the piece from a standing position. The physical reset restores the voice.",
    },

    // WEEK 31
    {
      id: "31A",
      week: 31,
      session: "A",
      unit: "unit5",
      title: "Ladukhin + Synthesis — Complete the Piece",
      duration: "25–30 min",
      ladukhin: "Exercises 51–52",
      materials: [
        "Ladukhin Elementary Course, pp. 40–42 (Ex. 51–52)",
        "Piano",
        "Music journals and pencils",
        "Synthesis piece materials",
      ],
      drill: {
        title: "Ladukhin Ex. 51–52 + Final Phrases of Synthesis Piece",
        steps: [
          "PART 1 — LADUKHIN (15 min): Name the Note (6 rounds, including accidentals). Ex. 51: rhythm-first protocol, key identification, sing. Ex. 52: same.",
          "PART 2 — SYNTHESIS (10 min): Review all learned phrases from memory. Then: teacher sings any remaining final phrases; children echo and drill. By the end of this session, both children should have heard all phrases of the synthesis piece and be able to echo each one.",
          "First full run-through of the complete piece from memory. Do not stop. Note gaps and rough patches — address in Session B.",
        ],
      },
      formIA: "First full run-through: Form IA sings from ear. After the run: 'What did you remember? What did you forget?' Let him answer honestly — this self-awareness is the fruit of nine months of honest singing.",
      formIIA: "After the full run-through from memory: Form IIA names the three places he is most uncertain. These become the drilling agenda for Session B.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — first complete run",
        listenFor: "Play the recording straight through. Both children follow the full melody — singing with the recording, quietly, as a reference check. Ask: 'How much of this piece do you now know? What is still foreign?' Be honest together about the answer.",
      },
      journal: {
        formIA: "Draw the synthesis piece as a journey: each phrase is a step in the path. Label each step with a word: 'easy,' 'medium,' 'hard.'",
        formIIA: "Write the complete synthesis piece from memory in solfège syllables — as many phrases as he can recall. Check against the page or recording. Mark errors. 'The phrases I know fully: ___. The phrases that need more work: ___.'",
      },
      closingRitual: "Sing the synthesis piece from memory, all phrases, one final time. Say: \"The whole piece lives in you now — even imperfectly. From here we only refine.\"",
      teacherNotes: "By the end of Week 31, both children should have a working version of the full synthesis piece in memory. 'Working version' means: they can sing the whole piece from beginning to end without stopping, even if some pitches are approximate. The next three weeks are for refining, not for learning new material.",
      shortenIt: "Ex. 51 only. Synthesis: review all learned phrases, attempt first full run-through. Skip Ex. 52.",
      stretchIt: "Ask Form IIA to sing the synthesis piece from memory with the text, not solfège. If he knows the text from liturgical participation, this should be within reach.",
      watchFor: "The first full run-through revealing a structural confusion — a child who knows the phrases individually but cannot connect them in the right order. If this happens, number the phrases on paper and drill the transitions specifically. Transitions are almost always harder than the phrases themselves.",
    },

    {
      id: "31B",
      week: 31,
      session: "B",
      unit: "unit5",
      title: "Synthesis Rehearsal — Drill the Weak Spots",
      duration: "20–25 min",
      ladukhin: "No new exercises — synthesis focus",
      materials: [
        "Piano",
        "Synthesis piece materials",
        "Music journals and pencils",
      ],
      drill: {
        title: "Targeted Phrase Drilling + Full Run-Through",
        steps: [
          "Open with a full run-through of the synthesis piece — a cappella, no preparation. This establishes the baseline for the session.",
          "Identify the three weakest spots from Session A (or from this run-through). Drill each one: teacher sings, children echo, repeat 4 times, then connect to the surrounding phrase.",
          "Transitions drill: sing just the join between phrase 2 and phrase 3, then phrase 3 and phrase 4, etc. The transition is where memory most often breaks down.",
          "Full run-through again. Is it better? Identify what improved and what remains rough.",
          "One more full run-through with text if children know the text; with solfège if not.",
        ],
      },
      formIA: "Full run-throughs by memory throughout. After the second run-through, ask Form IA: 'Was it better the second time? What felt easier?' Name it: 'That difference you feel between the first and second run is what practicing does.'",
      formIIA: "After the second run-through, Form IIA names one specific pitch that he is consistently singing incorrectly. He finds it on the piano, sings it correctly, then sings the full phrase around it. This targeted self-correction is the most advanced musical skill in Year 1.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — compare with recording",
        listenFor: "After the final run-through: play the recording. Ask both children to identify one thing the recording does that they are not yet doing. Whatever they identify becomes the focus for the next session.",
      },
      journal: {
        formIA: "Write: 'After today, I am most confident about ___. I still need to practice ___.'",
        formIIA: "Write: 'The targeted drilling today helped because ___. The pitch I corrected was ___. Now I sing it ___.'",
      },
      closingRitual: "Sing the synthesis piece one final time. Then silence. Then: \"This is growing into something real.\"",
      teacherNotes: "Targeted drilling of weak spots is more efficient than full run-throughs alone. The pattern for synthesis sessions from now on: full run-through → identify weak spots → drill weak spots → transition work → full run-through.",
      shortenIt: "Two full run-throughs and drill one weak spot only. Skip the transitions drill.",
      stretchIt: "Run the synthesis piece at two different tempos: at the target tempo, then at half tempo. The slow version reveals every pitch and transition clearly. Most errors that survive at tempo are exposed at half tempo.",
      watchFor: "Both children becoming confident about their errors — singing an incorrect phrase consistently with increasing assurance. If a phrase is consistently wrong, isolate the incorrect note by playing it on the piano: 'This is what you are singing. This is what it should be.'",
    },

    // WEEK 32
    {
      id: "32A",
      week: 32,
      session: "A",
      unit: "unit5",
      title: "Ladukhin + Synthesis — Text and Tone",
      duration: "25–30 min",
      ladukhin: "Exercises 53–54",
      materials: [
        "Ladukhin Elementary Course, pp. 42–44 (Ex. 53–54)",
        "Piano",
        "Music journals and pencils",
        "Synthesis piece materials",
      ],
      drill: {
        title: "Ladukhin Ex. 53–54 + Synthesis With Text",
        steps: [
          "PART 1 — LADUKHIN (15 min): Name the Note (6 rounds). Ex. 53: rhythm-first protocol. Ex. 54: same. Both exercises should be in keys already known — treat them as consolidation.",
          "PART 2 — SYNTHESIS WITH TEXT (10 min): Teacher sings the complete piece with text; children echo phrase by phrase. Then: one full run-through with text.",
          "If the children already know the text from liturgical participation: skip the echo step and go directly to a full run-through with text. Text and melody together is a different cognitive task from either alone — allow time for the integration.",
        ],
      },
      formIA: "Synthesis with text: if Form IA is uncertain of the text, use the first phrase of text only this session and continue with solfège for the remaining phrases. Never sacrifice pitch accuracy for text completeness.",
      formIIA: "Synthesis with text: Form IIA should be able to sing the complete piece with text by this session. If any phrase's text is unstable, address it phrase by phrase. Form IIA can also begin to think about tone quality: 'Is my voice forward and easy, or am I pushing?'",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — with text, with recording",
        listenFor: "Sing with the recording using the full text. After: 'What did that feel like? Did you feel ready, or did you feel there is still more to do?' Honest self-assessment is the goal.",
      },
      journal: {
        formIA: "Write the text of the first phrase of the synthesis piece from memory. Check it.",
        formIIA: "Write the full text of the synthesis piece from memory. Check against the sheet music or recording. Underline any word he was unsure of.",
      },
      closingRitual: "Sing the synthesis piece from memory, with text, one time. Quietly, with intention. Say: \"This is becoming an offering.\"",
      teacherNotes: "The introduction of text is a significant shift. The text connects the melody to prayer — and to the liturgical context in which the piece will be sung. If either child loses the melody when trying to sing the text, return to solfège for one more session and then bring the text back.",
      shortenIt: "Ex. 53 only. Synthesis: one full run-through with text and one without. Skip Ex. 54.",
      stretchIt: "Ask Form IIA to sing the synthesis piece from memory with text and with the beat gesture — keeping a steady internal pulse while singing. This is exactly what a cantor does.",
      watchFor: "The text causing pitch problems — children so focused on the words that their pitch drifts. The solution is to slow the tempo significantly so both melody and text can coexist in attention. Then gradually bring the tempo back up.",
    },

    {
      id: "32B",
      week: 32,
      session: "B",
      unit: "unit5",
      title: "Synthesis Rehearsal — Tone Quality and Intention",
      duration: "20–25 min",
      ladukhin: "No new exercises — synthesis focus",
      materials: [
        "Piano",
        "Synthesis piece materials",
        "Music journals and pencils",
      ],
      drill: {
        title: "Full Rehearsal With Tone Attention",
        steps: [
          "Full run-through — a cappella, with text. Teacher listens for tone quality: is the voice forward and easy? Or is it pressed, spread, or nasal?",
          "After the run-through: one specific tone observation per child. Not a correction — an invitation: 'Your tone was especially beautiful at ___. Can you find that feeling again?' And: 'At ___, I noticed your tone got a little tight. What were you thinking about at that moment?'",
          "Targeted drill of one weak transition. Then a full run-through.",
          "Vocal ease exercise: before the final run-through, hum the melody on a comfortable 'mm' — lips lightly closed, jaw relaxed, tone forward. Then open to solfège. Then open to text.",
          "Final run-through: a cappella, text, humming start.",
        ],
      },
      formIA: "Tone attention: the most common problem is pushing — singing louder than necessary, which tightens the throat. If you hear pushing: 'Sing it as if you are telling a secret — still clearly, but without effort.'",
      formIIA: "Tone attention: Form IIA's voice may be approaching the beginning of vocal change. If you notice any roughness or register inconsistency, do not address it as a problem — simply say: 'Your voice is growing. Sing in the part of your range that feels easiest. Never push.' Monitor carefully from here through Year 2.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — listen for tone",
        listenFor: "Play the recording once more. This time: focus entirely on the quality of the singer's tone. Not the pitches, not the words — just the tone. Ask: 'What does a beautiful tone feel like in your body when you hear it? Where does it seem to come from in the singer?'",
      },
      journal: {
        formIA: "Write: 'When my tone is easy and forward, it feels like ___.'",
        formIIA: "Write: 'Tone quality matters because ___. When I sing with the best tone I have, the music feels ___.'",
      },
      closingRitual: "Hum the synthesis piece together — the entire piece, on a soft 'mm.' No text, no solfège. Just the melody, hummed. Say: \"That is your voice at its most natural. Take that feeling into every note you sing.\"",
      teacherNotes: "Tone quality is introduced formally here as a distinct focus. The humming exercise is one of the most reliable tone-reset tools available and should be used whenever the voice tightens.",
      shortenIt: "Full run-through, one tone observation, humming exercise, final run-through. Skip the targeted transition drill.",
      stretchIt: "Ask both children to sing the synthesis piece at pianissimo — very softly, but with full pitch accuracy and tone quality. Singing softly at pitch is significantly harder than singing at normal volume.",
      watchFor: "The tone focus creating self-consciousness — children monitoring themselves so carefully that their singing becomes stiff. If this happens: 'Stop thinking about your tone. Just offer the piece to God and sing.' The best tone almost always comes from the most prayerful intention.",
    },

    // WEEK 33
    {
      id: "33A",
      week: 33,
      session: "A",
      unit: "unit5",
      title: "Ladukhin + Synthesis — Smoothness and Flow",
      duration: "25–30 min",
      ladukhin: "Exercise 55",
      materials: [
        "Ladukhin Elementary Course, pp. 44–45 (Ex. 55)",
        "Piano",
        "Music journals and pencils",
        "Synthesis piece materials",
      ],
      drill: {
        title: "Ladukhin Ex. 55 + Synthesis Full Preparation",
        steps: [
          "PART 1 — LADUKHIN (15 min): Name the Note (6 rounds — this should now be fast and confident). Ex. 55: rhythm-first protocol. After singing Ex. 55, note: 'You have now sung fifty-five exercises from Ladukhin. That is a real body of work.'",
          "PART 2 — SYNTHESIS (10 min): Full run-through with text, a cappella. Listen for overall flow — does the piece move forward naturally, or does it feel like a series of disconnected phrases? If disconnected: drill the transitions only, not the phrases.",
          "One more full run-through. Compare with the first run-through of this session: is the flow better?",
        ],
      },
      formIA: "Synthesis: full run-throughs with text. After the second run-through, ask Form IA: 'Did that feel like music, or did it feel like singing phrases one at a time?' His answer tells you how integrated the piece has become.",
      formIIA: "After Ex. 55: ask Form IIA to write the name, key, and time signature of Ex. 55 in his journal — a brief notation analysis. This is the last Ladukhin notation exercise of Year 1; it should be nearly automatic.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — final listening before polish week",
        listenFor: "Play the recording. Sing with it — text, full voice, easy tone. After: 'We have one more polishing session before the synthesis event. What is the one thing you most want to improve before then?' Let each child answer. Whatever they say becomes the specific focus of Week 34.",
      },
      journal: {
        formIA: "Write: 'Before our synthesis event, I want to improve ___.' One thing.",
        formIIA: "Write: 'I have sung 55 Ladukhin exercises this year. The most important thing I learned from them is ___.' Then: 'Before the synthesis event, I want to improve ___.'",
      },
      closingRitual: "Sing the synthesis piece together — one final time for this week. Say: \"One more polishing session. Then you offer it.\"",
      teacherNotes: "Week 33 is the last week of regular preparation before the polishing sessions. By this point the synthesis piece should be essentially learned — the task is now refinement, not acquisition. If either child is still uncertain about significant portions of the piece, consider postponing the synthesis event by one week.",
      shortenIt: "Ex. 55 only. Synthesis: two full run-throughs. Skip the transition drill.",
      stretchIt: "Ask both children to sing the synthesis piece twice in a row without stopping — from the beginning, all the way through, then immediately back to the beginning again. This builds endurance and reveals any places where memory fades after the first pass.",
      watchFor: "Overconfidence in Week 33 — the children feel they know the piece and therefore stop practicing carefully. Keep the rehearsal standards high: 'We can still improve. Let's find one thing that is not yet perfect and fix it today.'",
    },

    {
      id: "33B",
      week: 33,
      session: "B",
      unit: "unit5",
      title: "Synthesis Rehearsal — Two-Voice Option",
      duration: "20–25 min",
      ladukhin: "2-Voice Nos. 1–2 — optional warm-up",
      materials: [
        "Ladukhin 60 Solfeggi for 2 Voices, p. 1 (optional warm-up)",
        "Piano",
        "Synthesis piece materials",
        "Music journals and pencils",
      ],
      drill: {
        title: "Optional Duet Warm-Up + Synthesis With Two Voices",
        steps: [
          "Optional warm-up (5 min): Sing 2-Voice No. 1 together — both voices, piano-free. This keeps the two-voice skill alive.",
          "SYNTHESIS (15–20 min): If the synthesis piece has a two-voice version or a drone-harmony version available, introduce it now. Teacher sings or plays the drone or lower voice; the children sing the melody above it.",
          "If no two-voice version is available: teacher holds a drone on the tonal center while both children sing the melody. Even this simple addition transforms the texture.",
          "If two-voice preparation is premature or inappropriate for the synthesis event context: skip it entirely. Run two full a cappella run-throughs instead. The synthesis event should use the version the children are most confident in.",
        ],
      },
      formIA: "Two-voice option: Form IA sings the melody above teacher's drone. This is the same drone skill from Unit 3 Week 17 — now applied to the synthesis piece. If Form IA cannot hold the melody against the drone, return to unison.",
      formIIA: "Two-voice option: Form IIA may be able to hold the drone while Form IA sings the melody. Attempt only if Week 25–26 duet work was successful.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — with or without drone",
        listenFor: "Play a version of the synthesis piece that includes harmonic support (if available). Ask: 'Does the harmony change how the melody feels? Does it make the piece feel more complete, or is the melody beautiful on its own?' Both answers are correct.",
      },
      journal: {
        formIA: "Write: 'When I sang the melody with a drone beneath it, it felt ___.'",
        formIIA: "Write: 'A drone makes a melody feel ___ because ___. Without a drone, the melody feels ___.'",
      },
      closingRitual: "Sing the synthesis piece one final time — in whatever version the children will sing at the event. Say: \"This is the version. This is what we offer.\"",
      teacherNotes: "The two-voice option is genuinely optional and should only be pursued if: (1) it serves the synthesis event context; (2) the children are confident in the unison melody; and (3) the addition of harmony does not destabilize what they have built. A confident unison performance is always better than a shaky two-voice attempt.",
      shortenIt: "Skip the two-voice option entirely. Two full unison run-throughs and one recording comparison. Done.",
      stretchIt: "If the two-voice attempt is successful: run the piece three times — once with drone only, once with teacher singing a full lower voice, once with Form IIA holding the drone while Form IA sings. Compare all three. Which version feels most like the Church?",
      watchFor: "The two-voice addition causing pitch drift in the melody voice. If this happens, stop the two-voice work immediately and return to unison. Stable unison is the priority.",
    },

    // WEEK 34
    {
      id: "34A",
      week: 34,
      session: "A",
      unit: "unit5",
      title: "Polishing Week — Full Run-Through and Readiness Assessment",
      duration: "25–30 min",
      ladukhin: "No new exercises — synthesis focus",
      materials: [
        "Piano",
        "Synthesis piece materials",
        "Music journals and pencils",
      ],
      story: "Say: \"This week is for polishing. No new material. No new exercises. Only the synthesis piece, sung as well as we can sing it. Today I will listen carefully and tell you: are you ready? And then I want to hear from you: do you feel ready?\"",
      drill: {
        title: "Three Full Run-Throughs + Readiness Assessment",
        steps: [
          "Run-through 1: full piece, a cappella, text. Teacher listens without interrupting. Notes: pitch accuracy, rhythm, transitions, tone, text.",
          "After run-through 1: specific feedback on one pitch, one transition, one tone moment. Not more than three observations.",
          "Drill the identified issues: one at a time, targeted, brief.",
          "Run-through 2: full piece, a cappella. Compare with run-through 1. Name what improved.",
          "Run-through 3: full piece. No feedback afterward — just listening. Let the silence after be full.",
          "Teacher readiness assessment: (1) All phrases known; (2) Text connected to melody; (3) Tone easy and forward; (4) A cappella pitch stable; (5) Transitions smooth. Score each 1–4. If average is 3 or above, they are ready.",
        ],
      },
      formIA: "After run-through 3, ask Form IA: 'Do you feel ready?' A child who says 'yes' confidently has absorbed the preparation. A child who says 'no' needs reassurance more than more drilling: 'You know this piece. Your voice knows it. Trust what you have practiced.'",
      formIIA: "After run-through 3, ask Form IIA: 'On a scale of 1–4, how ready are you? What would make you a 4?' His self-assessment is the most accurate predictor of performance readiness. Whatever he names becomes the Session B focus.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — play the recording one last time",
        listenFor: "Play the recording once, at the very end of the session. Do not ask any questions. Just listen together. Then: silence. Then: 'That is what beautiful sounds like. You are going there.'",
      },
      journal: {
        formIA: "Write: 'I am ready to sing this piece because ___. I am a little nervous because ___.'",
        formIIA: "Write: 'My readiness score today is ___. The one thing I will focus on in the final session is ___.' Then write the question from Session B: 'We are not performing. We are offering. What is the difference?'",
      },
      closingRitual: "Sing the synthesis piece one final time — beautifully, intentionally, with full attention. Then silence. Say: \"One more session. Then we offer it.\"",
      teacherNotes: "The readiness assessment is the teacher's honest evaluation of whether the synthesis event should proceed as planned. If the average score is below 3, postpone by one week and use the extra time for more targeted preparation. Do not proceed to the synthesis event with a piece the children do not know confidently.",
      shortenIt: "Two run-throughs only. One set of targeted feedback. No journal.",
      stretchIt: "For Form IIA: after run-through 3, ask him to conduct himself — singing the piece while keeping the beat gesture with one hand. This is what a cantor does.",
      watchFor: "Pre-event anxiety manifesting as vocal tightness. Counter this immediately: 'The synthesis event is not a performance. It is a prayer. God is not grading your pitch. You are offering your voice — and an offering does not have to be perfect. It has to be sincere.'",
    },

    {
      id: "34B",
      week: 34,
      session: "B",
      unit: "unit5",
      title: "Final Preparation — Offering, Not Performance",
      duration: "20–25 min",
      ladukhin: "No exercises",
      materials: [
        "Piano",
        "Synthesis piece materials",
        "Music journals and pencils",
        "Optional: icon, candle",
      ],
      story: "Say: \"Before we sing, I want to talk about something important. There is a difference between performing and offering. When you perform, you are presenting something to an audience — you want to impress them. When you offer, you are giving something to God — you want to give your best, but the quality of the gift matters less than the sincerity of the giving. At the synthesis event, you are not performing. You are offering. The question is not: 'Did I sing it perfectly?' The question is: 'Did I give what I have?' Those are very different questions. And the second one has a much better answer.\"",
      drill: {
        title: "Final Rehearsal — Offering Mode",
        steps: [
          "Moment of stillness: before singing, sit quietly for 30 seconds. No instruction. Just stillness. Then: play the starting pitch on the piano. Both children find Do (or La) in their voices. Then begin.",
          "Full run-through: a cappella, text, easy tone. Do not analyze or critique afterward — simply receive it.",
          "One targeted fix if absolutely necessary. Only one. Then another full run-through.",
          "The question: 'We are not performing. We are offering. What is the difference?' Let both children answer in their own words. Receive their answers.",
          "Final run-through: full piece, a cappella. Teacher does not sing. Children are on their own. This is the synthesis event rehearsal.",
        ],
      },
      formIA: "The offering question should be discussed, not just answered in the journal. Form IA's answer will likely be concrete: 'Performing is when people clap. Offering is when it's for God.' This is exactly right. Affirm it fully.",
      formIIA: "Form IIA's answer may go deeper — he may notice that offering requires humility. This insight, if it comes, is one of the most important things the course can give him.",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — played as a gift",
        listenFor: "At the very end of the session: play the recording quietly. No listening prompt. Just let it play while everyone sits in stillness. This is the sound of what they are about to do. Let it be holy.",
      },
      journal: {
        formIA: "Write: 'We are not performing. We are ___. The difference is ___.'",
        formIIA: "Write the same prompt. Then write: 'At the synthesis event I will offer this piece by ___.' (Something concrete: 'singing with my full attention,' 'giving my voice simply,' 'not thinking about the people listening.')",
      },
      closingRitual: "Sit in silence. Then, without announcement, begin the synthesis piece — just the two children, a cappella, as if the synthesis event were happening right now. At the end: silence. Then: \"That is the offering. That is what we have built. God heard it.\"",
      teacherNotes: "Session B of Week 34 is the spiritual heart of Unit 5. The distinction between performing and offering is the formational core of the entire course. Every technical skill has been in service of this: a voice offered freely, simply, to God. Do not rush this session.",
      shortenIt: "Moment of stillness, one full run-through, the offering question, final run-through. That is enough.",
      stretchIt: "There is no stretch for this session. Depth, not breadth, is the entire point.",
      watchFor: "The teacher's own anxiety about the synthesis event bleeding into the session. Come to this session settled. They are ready. You prepared them.",
    },

    // WEEK 35
    {
      id: "35A",
      week: 35,
      session: "A",
      unit: "unit5",
      title: "The Synthesis Event",
      duration: "The event itself",
      ladukhin: "None",
      materials: [
        "The synthesis piece — memorized",
        "The liturgical or family context chosen for the event",
        "Optional: a printed copy of the piece text as a safety net, folded in a pocket, not held",
      ],
      story: "This session is the synthesis event. The children sing their prepared piece a cappella in a liturgical or family context.\n\nIf the event is at a liturgical service: coordinate with the priest or chanter in advance. Identify the specific moment in the service when the piece will be sung. Arrive early enough for both children to stand quietly and find their breath before the moment comes.\n\nIf the event is at home: create a genuinely liturgical context. Light a candle. Stand before an icon. Begin with a moment of silence. Then: the piece, offered. No applause afterward — receive it as you would receive a prayer.",
      drill: {
        title: "The Synthesis Event — Notes for Teacher",
        steps: [
          "Before the event: find Do on the piano or in your own voice. Whisper it to the children. That is the only preparation needed.",
          "During the event: stand still. Do not conduct. Do not mouth the words. Let them sing alone. Your job is to be present, not to help.",
          "If a child forgets a phrase: do not jump in. Let them find their way back. The recovery is part of the offering.",
          "If a child's pitch drifts significantly: you may sing one note quietly — the note they need — without turning it into a performance. Then step back.",
          "After the event: do not evaluate immediately. Let the moment be what it is. There will be time for debrief in Session B.",
        ],
      },
      formIA: "Form IA may be nervous. Before the event: 'Your voice knows this piece. You have sung it many times. Let your voice do what it knows.' Do not add more instruction — it creates more to manage. Less is more in the final moments before an offering.",
      formIIA: "Form IIA may try to perform in the moment — projecting more than necessary, watching for reactions. If you notice this in advance: 'Sing it for God, not for us. We are here to receive your offering, not to evaluate it.'",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "The synthesis piece, sung live",
        listenFor: "There is nothing to listen for. There is only what the children offer. Receive it.",
      },
      journal: {
        formIA: "Write after the event: 'I sang ___. It felt ___. I was surprised by ___.'",
        formIIA: "Write after the event: 'I sang ___. It felt like ___ (performing or offering?). The moment I remember most is ___.'",
      },
      closingRitual: "After the event: silence. Then, quietly: \"You offered your voice. That is what the course was for.\"",
      teacherNotes: "Whatever happens at the synthesis event — whether it is clean and confident or rough and nervous — it is a success. The children stood and sang, a cappella, from memory, something sacred. Evaluate nothing until Session B. In the moment after the event, simply be present with them in the silence.",
      shortenIt: "There is no short version of the synthesis event.",
      stretchIt: "There is no stretch version of the synthesis event. The event is the destination.",
      watchFor: "The temptation to debrief immediately. Do not. Let the event land first. The journal and Session B will do the analytical work. The moment after the event belongs to stillness.",
    },

    {
      id: "35B",
      week: 35,
      session: "B",
      unit: "unit5",
      title: "Debrief — What We Carried, What We Gave",
      duration: "20–25 min",
      ladukhin: "None",
      materials: [
        "Music journals and pencils",
        "Piano (optional)",
      ],
      story: "Begin simply: \"Let's talk about what happened.\" Then listen. Do not lead. Do not evaluate first. Let the children speak about the synthesis event in their own words, in their own order, with their own reactions. The debrief is a narration — Charlotte Mason narration applied to lived experience.",
      drill: {
        title: "Synthesis Event Debrief",
        steps: [
          "Open question: 'What happened? Tell me about it.' Let both children speak. Do not correct, evaluate, or add your own observations until they are finished.",
          "After both children have spoken: ask each one specifically: 'Was it different from rehearsal? How?'",
          "Ask: 'Did it feel like a performance or an offering?' They now have the language from Week 34 Session B to answer this with real precision.",
          "Ask: 'What surprised you?'",
          "Teacher speaks last: share one specific thing you observed that was beautiful. One specific thing — not 'it was wonderful' but something concrete. Then: 'Next time — because there will be a next time — you will do it even better. And you will know how to prepare for it.'",
        ],
      },
      formIA: "Form IA's debrief may be short and concrete: 'I forgot the third phrase.' Or: 'It felt good.' Either is complete. Do not require more than he offers. Ask one follow-up question maximum.",
      formIIA: "Form IIA's debrief may go deep — he may notice something about the relationship between preparation and offering, or about the quality of his attention during the event. If his debrief is self-critical: 'The standard you are holding yourself to is high. That is good. It means you care. But caring and performing are different things. You cared. That is what an offering requires.'",
      sacredMusic: {
        searchTerm: "Thy Nativity O Christ Troparion Orthodox",
        label: "Synthesis piece — played as a memory",
        listenFor: "Play the recording once, near the end of the session. No listening prompt. Let it serve as a memorial — this is the piece you prepared together, the piece you offered. Let it be beautiful in the memory of having sung it.",
      },
      journal: {
        formIA: "Write: 'What it felt like to sing at ___.' (The event location.) 'The thing I am most proud of is ___. Next time I will ___.'",
        formIIA: "Write a full paragraph: 'What I gave, what I kept, and what surprised me.' Keep this entry — it is one of the most important in the journal.",
      },
      closingRitual: "Sing the synthesis piece one more time — just for joy, now that the event is done. No performance anxiety, no preparation tension. Just the piece, offered again, freely. Then: silence. Then: \"Year 1 is almost complete.\"",
      teacherNotes: "The debrief is as important as the event itself. The children who can articulate what they experienced at the synthesis event are the children who will carry that experience forward into Year 2. Give the debrief its full time.",
      shortenIt: "Debrief conversation only — 10 minutes. Journal and synthesis piece replay. No structured questions beyond: 'Tell me what happened.'",
      stretchIt: "Ask both children: 'If you were going to prepare a second piece for another event, what would you choose? How would you prepare differently?' This question begins Year 2 planning from within their own experience.",
      watchFor: "One child dominating the debrief while the other goes quiet. Ask him directly: 'And you? What was it like for you?' Make sure both voices are heard in the debrief as fully as they were heard in the event.",
    },

    // WEEK 36
    {
      id: "36A",
      week: 36,
      session: "A",
      unit: "unit5",
      title: "Year 1 Celebration — Everything We Know",
      duration: "30 min",
      ladukhin: "Student choice",
      materials: [
        "Ladukhin Elementary Course (all pages)",
        "Ladukhin 60 Solfeggi for 2 Voices",
        "Piano",
        "Music journals",
        "Optional: something to mark the occasion — a special tea, a candle, whatever your family does for celebrations",
      ],
      story: "Say: \"Thirty-six weeks ago, we found Do on the piano for the first time. We sang one note together. Do. Today we are going to sing everything we love from this year — and then we are going to look at how far we have come. But first: what do you want to sing?\"",
      drill: {
        title: "Year 1 Celebration — Student-Led Singing",
        steps: [
          "Each child names one exercise he loves. Sing them both. No teaching, no correction — just singing for the love of it.",
          "Teacher names one exercise that she has loved hearing them sing this year. Sing it together.",
          "Sing the synthesis piece — for joy, not for offering. For the sheer pleasure of knowing it completely.",
          "Sing 2-Voice No. 1 — the first duet. Both voices, piano-free. Let it ring.",
          "Year 1 Map: open the music journals to the first entry. Read one journal entry aloud from the beginning of the year. Then read one from this week. Ask: 'Do you hear the difference in what you wrote?'",
          "Sing one final exercise — teacher's choice, the one that best represents the full Year 1 range. Sing it beautifully.",
        ],
      },
      formIA: "This session is for Form IA's delight. He chooses, he leads, he sings what he loves. If he wants to sing something three times, let him. The year ends in his own voice's joy.",
      formIIA: "Same for Form IIA. But also: ask him to look at the journal entry where he first wrote 'I cannot do ___' — and then show him the assessment from Unit 4 where he did exactly that. This is the narrative of growth made visible.",
      sacredMusic: {
        searchTerm: "Teacher's choice — the most beautiful sacred music encountered this year",
        label: "Year 1 final sacred music — teacher's gift",
        listenFor: "The teacher chooses a piece — any sacred music, Byzantine or Gregorian, that moved her this year or that she wants to give to the children as a gift for Year 2. Play it. No listening prompt. No questions. Just: 'I give you this. Listen.' This is the teacher's offering to the children — the transmission of love for sacred music that is at the heart of the whole course.",
      },
      journal: {
        formIA: "Write a letter to yourself to open at the end of Year 2. Begin: 'Dear me, you just finished Year 1. Here is what I know now: ___. Here is what I want to learn in Year 2: ___. Here is something I want you to remember: ___.' Seal it.",
        formIIA: "Same letter. Form IIA's letter may go deeper — he may write about the offering vs. performance insight, or about the moment at the synthesis event, or about what it felt like to hear two voices harmonize for the first time. Seal it. It is for his future self.",
      },
      closingRitual: "Find Do on the piano. Everyone sings Do. Hold it. Then: 'Do never moves. Same as the first day. But you have moved — you have grown — and the music lives in you now in a way it did not a year ago. That is real. See you in Year 2.'",
      teacherNotes: "Week 36 Session A is the close of Year 1. Do not let it become a review session or an assessment session — it is a celebration. A celebration names what was achieved and honors it. Sing, remember, rejoice.",
      shortenIt: "This session cannot be shortened. If time is truly limited, skip the journal and the Year 1 Map — but keep the student-choice singing, the synthesis piece, the duet, and the closing ritual. These are non-negotiable.",
      stretchIt: "Ask the children to teach the synthesis piece to someone in the family who does not know it. Even a rough teaching attempt is a profound consolidation of what they have learned.",
      watchFor: "The teacher's own emotion at the close of Year 1. It is appropriate. Let the children see that it moved you. That emotional honesty is itself a teaching: music matters, and the end of a year of singing together is worth feeling.",
    },

    {
      id: "36B",
      week: 36,
      session: "B",
      unit: "unit5",
      title: "Year 2 Preview — Deeper Waters",
      duration: "20–25 min",
      ladukhin: "None",
      materials: [
        "Music journals",
        "Piano",
        "Optional: print one page from the Liber Usualis or one Tone sheet from the project files",
      ],
      story: "Say: \"Year 2 is different from Year 1. In Year 1, we learned how music works — scales, keys, rhythm, two voices. In Year 2, we go deeper into the tradition itself. We will learn the Eight Tones of the Church — the musical language that Orthodox Christians have sung in for over a thousand years. We will begin to read the notation that Gregorian chant was written in. And we will learn about moveable-do — a different way of reading solfège that makes the Eight Tones easier to understand. You are ready. Everything you learned this year was preparation for this.\"",
      drill: {
        title: "Year 2 Preview — Listen and Wonder",
        steps: [
          "Play one example of each of the Eight Tones — just 15–20 seconds each. Teacher names each tone: 'This is Tone 1. This is Tone 2.' No analysis — just exposure. Let the variety of tonal colors register.",
          "Ask: 'Do you notice differences between the tones? What is the same? What is different?' Accept any honest observations.",
          "Show Form IIA one page of Gregorian notation from the Liber Usualis (printed or on screen). Say: 'This is how Gregorian chant was written down for a thousand years. In Year 2 you will learn to read this.' Let him look. Do not explain it yet.",
          "Show both children the moveable-do concept briefly: 'In Year 1, Do always meant C. In Year 2, we will learn that Do can mean any note — wherever the music feels at home. Your teacher does this every Sunday when she sings. Now you will learn to do it too.'",
          "End with a question rather than an answer: 'What are you most curious about for Year 2?' Write their answers in the journal. These become the opening conversation of Year 2 Week 1.",
        ],
      },
      formIA: "Form IA's Year 2 preview should be light and exciting — a glimpse of landscape, not a lesson. His curiosity question will likely be concrete: 'Will we learn more duets?' or 'Will I learn to read notes?' Both are yes.",
      formIIA: "Form IIA's preview can go slightly deeper — he is ready for the Gregorian notation glimpse and the moveable-do introduction. His curiosity question may be more sophisticated: 'What is the difference between the tones?' or 'When will I be able to sight-read a whole piece cold?' Answer honestly: 'By the end of Year 2, you will be able to identify the tone of a piece by ear. And your sight-reading will be significantly stronger — but sight-reading takes years. You are building something real.'",
      sacredMusic: {
        searchTerm: "Byzantine Octoechos all eight tones",
        label: "Year 2 preview — the Eight Tones",
        listenFor: "Play 2–3 minutes of a survey of the Eight Tones. This is the landscape of Year 2. Ask: 'Which tone do you want to know first?' Whatever they say — that becomes the first sacred music selection of Year 2 Week 1. Write it down.",
      },
      journal: {
        formIA: "Write: 'In Year 2 I want to learn ___. The tone I am most curious about is ___.' Seal the Year 1 letter if not already done.",
        formIIA: "Write: 'Year 1 is complete. Year 2 will be ___. My question going into Year 2 is ___.' Then seal the Year 1 letter.",
      },
      closingRitual: "Find Do one final time. Everyone sings Do. Then play G — Sol. Then F — Fa. Then A — La. Four tonal centers, all known. Say: \"This is where we have been. Year 2 will show us where these can go. Same Do. Deeper music. See you in September.\"",
      teacherNotes: "The Year 2 preview should create excitement, not anxiety. Year 2 is demanding — the Eight Tones, Gregorian notation, moveable-do, and two-part choral work are all new. But the children are ready. Thirty-six weeks of honest practice have given them the foundations for all of it. Name this explicitly: 'Everything you learned this year was preparation. You are ready.'",
      shortenIt: "Eight Tones listening only (2 minutes), the moveable-do introduction in one sentence, Year 2 curiosity questions. That is enough.",
      stretchIt: "Ask Form IIA to listen to a complete Troparion of the Resurrection in one of the Eight Tones and try to identify: 'Is this the same tone as the one before? Or different? How do you know?' He will not get it right yet. That is fine. The question is the gift.",
      watchFor: "Ending Year 1 with anxiety about Year 2 rather than joy. If either child seems worried: 'Year 2 builds on everything you already know. You are not starting over — you are going deeper. There is nothing in Year 2 that your Year 1 work did not prepare you for.'",
    },

  ], // end Unit 5 lessons
}, // end Unit 5 object
    ],
  },
];

export const ALL_LESSONS = YEARS.flatMap(year =>
  year.units.flatMap(unit =>
    (unit.lessons || []).map(lesson => ({ ...lesson, _unit: unit, _year: year }))
  )
);
