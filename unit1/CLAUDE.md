# CLAUDE.md — Project Instructions for Magister Marcus

This file tells Claude how to work in this project. Read it fully at the start of every session before doing anything else.

---

## What This Project Is

**Magister Marcus** is a Charlotte Mason–style, literature-based American history and civics curriculum for upper-elementary homeschool families (grades 3–6), built over multiple Claude sessions. It covers four units spanning 1492–1877, aligned to the Hillsdale College K–12 American History content framework.

The curriculum is being built for **two boys**, designed for home use first and structured for resale. Total target budget for books + illustrated notebooking pages: **$55–75**.

---

## Project Knowledge (Source Files)

The following Hillsdale PDFs are loaded as project knowledge. Always search them before writing any lesson content, test questions, vocabulary, or bibliography entries. They are the **authoritative content source** — never invent content that should come from them.

| File | Use for |
|------|---------|
| `American History Civics Curriculum Unit 1 (3-5).pdf` | Unit 1 lesson content, vocabulary, persons, tests |
| `American History Civics Curriculum Unit 2 (3-5).pdf` | Unit 2 content |
| `American History Civics Curriculum Unit 3 (3-5).pdf` | Unit 3 content |
| `American History Civics Curriculum Unit 4 (3-5).pdf` | Unit 4 content |
| `Unit 1 K-2.pdf` | Supplemental detail for Unit 1 |
| `Unit 2 K-2.pdf` | Supplemental detail for Unit 2 |

**Always call `project_knowledge_search` before writing lesson plans, assessments, or bibliography entries.** Use specific queries: `"Unit 1 Lesson 2 persons terms topics"`, `"Unit 3 Test 1 matching questions"`, etc.

---

## Output Files Already Built

These files exist in the repo. Load them by reading from the repo path or asking the user to paste them. Do **not** rebuild them from scratch.

| File | Status | Notes |
|------|--------|-------|
| `README.md` | ✅ Complete | Public-facing repo description |
| `MASTER_BUILD_PLAN.md` | ✅ Complete | Session roadmap + todo list |
| `global/U1_Overview_TeacherGuide.md` | ✅ Built, needs CM revision | Uses some worksheet language — fix in Session 7 |
| `global/U1_Bibliography.md` | ✅ Built, needs final price check | ThriftBooks prices verified; drop *Landing of the Pilgrims* (too expensive) |
| `unit1/U1_WeeklySchedule.md` | ✅ Built, needs CM revision | Fix "worksheet" → "narration" language in Session 7 |

---

## Pedagogy: Charlotte Mason — Non-Negotiable Rules

Every file in this curriculum must follow CM methodology. These rules override any default curriculum instincts.

### What CM means here:
1. **Narration replaces worksheets.** Never write comprehension questions with blanks to fill in as the primary student activity. Narration prompts ("Tell back the story of...") are the work.
2. **Living books are the curriculum.** Lesson plans assign specific chapters from living books. No textbook-style reading packets.
3. **Copywork and dictation** replace fill-in-the-blank practice. Students copy a beautiful sentence or passage; advanced students take dictation.
4. **Notebooking pages** = illustration box (student draws a scene) + 2–6 lines for a narration caption or short response. Clean, beautiful, minimal text on the page itself.
5. **No "busy work."** Every activity must have a clear CM purpose: narration, observation, copywork, map work, or living book time.
6. **Oral narration = Form IA assessment.** Written paragraph narration = Form IIA assessment. Both are valid and complete assessments.

### Language to use:
- ✅ "Narrate the story of..." / "Tell back..." / "In your own words..."
- ✅ "Copy this passage into your notebook"
- ✅ "Illustrate the scene and write one sentence describing it"
- ❌ "Answer the following questions" (unless it's a formal quiz/test)
- ❌ "Fill in the blank" (only in quizzes/tests, not in lesson activities)
- ❌ "Complete the worksheet"

---

## Two Student Forms

Every lesson plan, narration prompt, copywork assignment, notebooking page, quiz, and test must exist in **both forms**.

| Form | Target | Written narration | Copywork | Tests |
|------|--------|-------------------|----------|-------|
| **Form IA** | Grades 3–4, developing writers | 1–3 complete sentences | Copy passage by hand | Matching + fill-in + 1–2 sentence responses |
| **Form IIA** | Grades 5–6, stronger writers | Full paragraph (5–8 sentences) | Dictation from memory | Matching + MC + short essay (1 paragraph) |

Both forms cover **identical content**. Never simplify the ideas for Form IA — only simplify the written output expectation.

---

## Session Protocol

### At the start of every session:
1. Read this file (`CLAUDE.md`) fully.
2. Check `MASTER_BUILD_PLAN.md` for the current session number and its target files.
3. Load only the 2–3 output files listed under "Files to load at session start" for that session. Do not load the entire outputs folder.
4. Search project knowledge for the relevant unit's content before writing.

### During the session:
- Build only what's listed for this session. Do not get ahead.
- Save every completed file to `/mnt/user-data/outputs/` and call `present_files`.
- Name files exactly as listed in `MASTER_BUILD_PLAN.md`.
- If a session's files are too large to complete, finish the ones started and note clearly what remains.

### File transfer (user's responsibility between sessions):
The user manually moves completed files from the Claude outputs folder to their local desktop folder **"Hillsdale American History and Civics"** and from there commits to the GitHub repo at `github.com/panisvet/magister-marcus/magister-historia`. Claude does not need to manage this transfer — just produce clean files in `/mnt/user-data/outputs/`.

### At the end of every session:
- List every file completed with its filename.
- State the exact start command for the next session (copy from `MASTER_BUILD_PLAN.md`).
- Flag any decisions the user needs to make before the next session.

---

## File Naming Conventions

```
GLOBAL_*.md          — Files used across all four units
U1_*, U2_*, U3_*, U4_*  — Unit-specific files
*_IA.md              — Form IA student materials
*_IIA.md             — Form IIA student materials
*_LessonPlan.md      — Teacher-facing lesson plans
*_AnswerKey.md       — Teacher answer keys only
NB_U*_*.png          — Notebooking page images (Nano Banana Pro)
```

---

## Notebooking Image Rules (Nano Banana Pro)

Images are generated using Google Gemini via the Nano Banana Pro skill (`/mnt/skills/user/nano-banana-pro/SKILL.md`). Read that skill file before any image generation session.

**Budget:** ~$25 total across all 32 images (8 per unit). Use `--model flash` for drafts; `--model pro` only for finals.

**The approval gate (Session 5, 11, 17, 23):** All 8 prompts for a unit are written and presented to the user for approval **before any images are generated**. Do not generate images in the same session as writing prompts. This prevents wasted generation budget.

**Prompt format for each notebooking page:**
```
Scene: [what to depict, specific historical moment]
Style: [pen-and-ink line art, colonial illustration style, black and white, suitable for student coloring]
Text in image: [page title if any]
Border/frame: [decorative colonial frame, or simple ruled lines for writing]
Aspect ratio: [8.5x11 portrait]
Nano Banana prompt: [exact text to submit]
```

**Style consistency:** All 32 images across all 4 units should share the same visual style — pen-and-ink line art, suitable for student coloring, with a consistent border frame. Establish the style in Session 5 and carry it through Sessions 11, 17, and 23.

---

## Book Budget Constraints

Total book budget: **~$44** for both boys combined, all four units. Books are shared between students (one copy).

**Never recommend a book without checking ThriftBooks pricing first.** The following books have been confirmed affordable:

| Book | ThriftBooks price |
|------|-----------------|
| *If You Lived in Colonial Times* — McGovern | from $3.99 |
| *Ben Franklin of Old Philadelphia* — Cousins | from $4.19 |
| *Meet George Washington* — Heilbroner | from $3.99 |
| *If You Sailed on the Mayflower* — McGovern | from $6.36 |

**Do not recommend:**
- *The Landing of the Pilgrims* (Daugherty) — $35–60 used, over budget. Use LibriVox audio instead.
- *Land of Hope Young Reader's Edition* (McClay) — 2022, no used market yet. The Hillsdale courses + Guerber (free) cover the same content.

**Free resources that replace expensive books:**
- H.A. Guerber, *Story of the Thirteen Colonies* → Project Gutenberg (free)
- All primary sources → Internet Archive / avalon.law.yale.edu (free)
- *Landing of the Pilgrims* audio → LibriVox (free)
- Hillsdale online courses → online.hillsdale.edu (free, registration required)

---

## Assessment Format Reference

Unit tests follow the format confirmed in the Hillsdale 3–5 PDFs:

**Form IA test structure:**
1. Timeline (circle the correct year/date)
2. Persons matching (letter-to-description)
3. Terms matching (letter-to-definition)
4. Stories for the Heart (1–3 sentence narration)
5. Questions for the Mind (1–2 sentence answers, 3–4 questions)

**Form IIA test structure:**
1. Timeline (write letter next to date)
2. Vocabulary matching (letter-to-definition, 8–10 terms)
3. Multiple choice (4–6 questions, 4 options each)
4. Short answer (complete sentences, 4–5 questions)
5. Essay response (1 paragraph, open-ended question)

Always search the relevant unit's PDF for exact vocabulary terms and test question wording before writing assessments. The Hillsdale tests are the content contract.

---

## Providence Framing

This curriculum holds a **quietly Christian** frame. This means:
- Notice and name providential moments where they arise naturally in the historical record (Pilgrim journals, Washington's writings, Winthrop's "city upon a hill")
- Do not insert devotional content, prayers, or explicitly theological commentary
- Do not frame events as "God's plan" in teacher narration — let the primary sources speak
- Do not avoid or sanitize the Christian faith of historical figures

---

## Historical Proportion — Non-Negotiable

No single historical fact — however grave — becomes the totalizing lens for a lesson, unit, or notebooking page.

- Slavery, conquest, and injustice are taught **honestly and in proportion** to the full human texture of the era
- The accomplishments, virtues, institutions, and character of every period receive equal attention
- The failure mode to avoid: allowing one fact (however important) to obscure everything else about an era — as has happened at Monticello and Colonial Williamsburg
- Slavery is an ugly fact of human history stretching across all eras and civilizations; chattel slavery in America is taught with full weight, but it does not become the sole or primary lens through which the colonial or founding periods are understood
- Students should come away from every unit knowing the era whole — its evils, its goods, its people, its ideas — not reduced to a single moral

This applies to lesson narration, notebooking page selection, assessment questions, and image choices. Charlotte Mason's own instinct applies here: trust the child to hold complexity. Narrate the full era; do not reduce it.

---

## What NOT to Do

- **Do not rewrite completed files** from scratch unless explicitly asked to revise them
- **Do not load all project knowledge PDFs at once** — search only the relevant unit
- **Do not generate notebooking images** in the same session as writing prompts (approval gate)
- **Do not recommend expensive books** without checking ThriftBooks first
- **Do not use worksheet language** in lesson plans (see CM rules above)
- **Do not invent vocabulary, persons, or test questions** — pull from project knowledge PDFs
- **Do not skip the session start protocol** — always read this file and check the build plan first
