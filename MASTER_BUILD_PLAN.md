# *The New World Made Ready*
## Master Build Plan — Full Course Architecture
### Family History & Civics Curriculum, Units 1–4

---

## Project Reality Check

**What exists in project knowledge (source files to draw from every session):**
- `American History Civics Curriculum Unit 1 (3-5).pdf` ← PRIMARY SOURCE for Unit 1
- `American History Civics Curriculum Unit 2 (3-5).pdf` ← PRIMARY SOURCE for Unit 2
- `American History Civics Curriculum Unit 3 (3-5).pdf` ← PRIMARY SOURCE for Unit 3
- `American History Civics Curriculum Unit 4 (3-5).pdf` ← PRIMARY SOURCE for Unit 4
- `Unit 1 K-2.pdf` ← supplemental detail
- `Unit 2 K-2.pdf` ← supplemental detail

**What we are building:** An original Charlotte Mason family study curriculum using Hillsdale's content framework as the academic spine. All student-facing materials are original. The Hillsdale PDFs are teacher reference only.

**Pedagogy:** Charlotte Mason — narration (oral & written) replaces worksheets; living books; copywork/dictation from primary sources; notebooking pages with illustration + short narration; no textbook-style comprehension packets.

**Two student forms:**
- **Form IA** — Grades 3–4, younger writers: oral narration, sentence-level written response, matching/fill-in assessments
- **Form IIA** — Grades 5–6, stronger writers: written paragraph narration, short essay assessments

---

## Complete File Inventory (all files to be built)

### GLOBAL FILES (built once, used across all 4 units)
```
GLOBAL_CourseOverview.md         ← Already built (U1_Overview) — needs CM revision
GLOBAL_Bibliography_U1.md        ← Already built — needs final pricing update
GLOBAL_CM_PedagogyGuide.md      ← NOT YET BUILT — parent guide to CM methods
GLOBAL_NarrationGuide.md         ← NOT YET BUILT — how to do oral/written narration
GLOBAL_BookList_Budget.md        ← NOT YET BUILT — final ThriftBooks shopping list
```

### UNIT 1 — The British Colonies of North America, 1492–1763
```
U1_WeeklySchedule.md             ← Already built — needs CM revision
U1_L1_Geography_LessonPlan.md   ← NOT YET BUILT
U1_L2_Exploration_LessonPlan.md ← NOT YET BUILT
U1_L3_Colonies_LessonPlan.md    ← NOT YET BUILT
U1_L4_MajorEvents_LessonPlan.md ← NOT YET BUILT
U1_CopyworkDictation.md         ← NOT YET BUILT (Washington Rules, Winslow, Compact)
U1_NarrationPrompts.md          ← NOT YET BUILT (IA oral + IIA written, all lessons)
U1_NotebookingPrompts.md        ← NOT YET BUILT (8 image prompts for Nano Banana)
U1_NotebookingPages_IA.md       ← NOT YET BUILT (student pages, after image approval)
U1_NotebookingPages_IIA.md      ← NOT YET BUILT
U1_Quiz1_IA.md                  ← NOT YET BUILT
U1_Quiz1_IIA.md                 ← NOT YET BUILT
U1_Quiz2_IA.md                  ← NOT YET BUILT
U1_Quiz2_IIA.md                 ← NOT YET BUILT
U1_Quiz3_IA.md                  ← NOT YET BUILT
U1_Quiz3_IIA.md                 ← NOT YET BUILT
U1_Test1_Midunit_IA.md          ← NOT YET BUILT (Lessons 1–2)
U1_Test1_Midunit_IIA.md         ← NOT YET BUILT
U1_Test2_Final_IA.md            ← NOT YET BUILT (Lessons 3–4)
U1_Test2_Final_IIA.md           ← NOT YET BUILT
U1_AnswerKey.md                 ← NOT YET BUILT
U1_Timeline.md                  ← NOT YET BUILT (student timeline strip, 1492–1763)
```

### UNIT 2 — The American Founding, 1763–1789
```
U2_WeeklySchedule.md
U2_L1_SelfGovOrTyranny_LessonPlan.md
U2_L2_Declaration_LessonPlan.md
U2_L3_WarOfIndependence_LessonPlan.md
U2_L4_Constitution_LessonPlan.md
U2_CopyworkDictation.md         (Declaration preamble, Paine Crisis, Yankee Doodle)
U2_NarrationPrompts.md
U2_NotebookingPrompts.md        (8 image prompts)
U2_NotebookingPages_IA.md
U2_NotebookingPages_IIA.md
U2_Quiz1_IA.md / IIA.md
U2_Quiz2_IA.md / IIA.md
U2_Quiz3_IA.md / IIA.md
U2_Test1_Midunit_IA.md / IIA.md
U2_Test2_Final_IA.md / IIA.md
U2_AnswerKey.md
U2_TimeLine.md
```

### UNIT 3 — The Early Republic, 1789–1848
```
U3_WeeklySchedule.md
U3_L1_NewGovernment_LessonPlan.md
U3_L2_ProspectsWar_LessonPlan.md
U3_L3_AmericanWay_LessonPlan.md
U3_L4_ManifestDestiny_LessonPlan.md
U3_CopyworkDictation.md         (Erie Canal song, Washington Farewell excerpts)
U3_NarrationPrompts.md
U3_NotebookingPrompts.md        (8 image prompts)
U3_NotebookingPages_IA.md
U3_NotebookingPages_IIA.md
U3_Quiz1–3 IA/IIA.md
U3_Test1/2 IA/IIA.md
U3_AnswerKey.md
U3_Timeline.md
```

### UNIT 4 — The American Civil War Era, 1848–1877
```
U4_WeeklySchedule.md
U4_L1_ExpansionSlavery_LessonPlan.md
U4_L2_TowardCivilWar_LessonPlan.md
U4_L3_CivilWar_LessonPlan.md
U4_L4_Reconstruction_LessonPlan.md
U4_CopyworkDictation.md         (13th Amendment, Lift Every Voice, Sympathy, Gettysburg)
U4_NarrationPrompts.md
U4_NotebookingPrompts.md        (8 image prompts)
U4_NotebookingPages_IA.md
U4_NotebookingPages_IIA.md
U4_Quiz1–3 IA/IIA.md
U4_Test1/2 IA/IIA.md
U4_AnswerKey.md
U4_Timeline.md
```

**Total files: ~90 markdown files + 32 notebooking page images (8 per unit)**
**⚠️ Image pipeline:** Wrap generation (Nano Banana Pro) + PD image downloading + compositing are all handled by Claude Code outside these sessions. This Claude project handles only the markdown student page documents.

---

## Session Map

Each session = one conversation. Sessions are sized to avoid context overflow.
**Rule:** Each session loads only the files it needs, does one focused job, and outputs complete files to `/mnt/user-data/outputs/`.

### SESSION 1 — COMPLETE ✅
**Built:** `U1_Overview_TeacherGuide.md`, `U1_Bibliography.md`, `U1_WeeklySchedule.md`
**Status:** Needs CM pedagogy revision (worksheets → narration language)

---

### SESSION 2 — Global CM Framework + U1 Lesson Plans L1–L2
**Goal:** Build the reusable CM framework files + first two lesson plans
**Files to load at session start:**
- `U1_Overview_TeacherGuide.md` (from outputs)
- `U1_WeeklySchedule.md` (from outputs)
- Project knowledge: `Unit 1 (3-5).pdf` (auto-loaded)

**Files to produce:**
1. `GLOBAL_CM_PedagogyGuide.md` — parent guide: what narration is, how to do it, oral vs written, copywork instructions, notebooking how-to
2. `GLOBAL_NarrationGuide.md` — age-specific narration prompts template + rubric
3. `U1_L1_Geography_LessonPlan.md` — full CM lesson plan, Days 1–4, both forms
4. `U1_L2_Exploration_LessonPlan.md` — full CM lesson plan, Days 1–4, both forms

**Start command:** "Session 2 — load outputs and build CM framework + U1 L1-L2 lesson plans"

---

### SESSION 3 — U1 Lesson Plans L3–L4 + Copywork/Narration
**Goal:** Complete all Unit 1 lesson plans + copywork/narration documents
**Files to load at session start:**
- `U1_L1_Geography_LessonPlan.md` (from outputs)
- `U1_L2_Exploration_LessonPlan.md` (from outputs)
- Project knowledge: `Unit 1 (3-5).pdf`

**Files to produce:**
1. `U1_L3_Colonies_LessonPlan.md`
2. `U1_L4_MajorEvents_LessonPlan.md`
3. `U1_CopyworkDictation.md` — all passages with both forms (copy vs. dictation), Washington Rules, Winslow, Mayflower Compact excerpt
4. `U1_NarrationPrompts.md` — all 4 lessons, IA oral prompts + IIA written prompts

**Start command:** "Session 3 — load L1-L2 plans from outputs, build L3-L4 + copywork/narration"

---

### SESSION 4 — U1 Assessments (Quizzes + Tests)
**Goal:** All Unit 1 quizzes and tests, both forms
**Files to load at session start:**
- `U1_NarrationPrompts.md` (from outputs)
- `U1_L3_Colonies_LessonPlan.md` (from outputs)
- `U1_L4_MajorEvents_LessonPlan.md` (from outputs)
- Project knowledge: `Unit 1 (3-5).pdf` — test format reference

**Files to produce:**
1. `U1_Quiz1_IA.md` + `U1_Quiz1_IIA.md` (Lessons 1–2)
2. `U1_Quiz2_IA.md` + `U1_Quiz2_IIA.md` (Lesson 3)
3. `U1_Quiz3_IA.md` + `U1_Quiz3_IIA.md` (Lesson 4)
4. `U1_Test1_Midunit_IA.md` + `U1_Test1_Midunit_IIA.md`
5. `U1_Test2_Final_IA.md` + `U1_Test2_Final_IIA.md`
6. `U1_AnswerKey.md`

**Start command:** "Session 4 — load lesson plans + narration from outputs, build all U1 assessments"

---

### SESSION 5 — U1 Notebooking Image Prompts + Approval
**Goal:** Write and review all 8 notebooking image prompts BEFORE generating any images
**Files to load at session start:**
- All 4 U1 lesson plans (from outputs)
- `U1_NarrationPrompts.md` (from outputs)

**Files to produce:**
1. `U1_NotebookingPrompts.md` — all 8 prompts with:
   - Scene description (what to depict)
   - Style spec (pen-and-ink, colonial illustration style, etc.)
   - Text to appear on page (title, narration lines, illustration box dimensions)
   - Nano Banana Pro prompt (exact text ready to submit)

**⚠️ GATE:** You review and approve all 8 prompts before Session 6 generates any images.
**This is the revision gate** — get prompts right here, not in image retries.

**Start command:** "Session 5 — load all U1 lesson plans from outputs, draft all 8 notebooking image prompts for approval"

---

### SESSION 6 — U1 Notebooking Student Pages
**Goal:** Build student-facing notebooking page documents using composited images already produced by Claude Code

**⚠️ CLAUDE CODE NOTE:** Wrap generation, PD image downloading, and page compositing for Unit 1 are handled entirely by Claude Code outside these sessions.
- Completed pages saved at: `iCloud/Desktop/U1_magister_historia_notebook/output_pages/`
- Wrap prompt: `NB_U1_PageWrap_Prompt.md` (in project knowledge)

**Files to load at session start:**
- `U1_NotebookingPrompts.md` (approved version from outputs)

**Files to produce:**
1. `U1_NotebookingPages_IA.md` — complete student pages with image refs, writing lines, narration prompts (Form IA)
2. `U1_NotebookingPages_IIA.md` — same, Form IIA

**Start command:** "Session 6 — load approved U1_NotebookingPrompts from outputs, build U1_NotebookingPages_IA.md and U1_NotebookingPages_IIA.md. Composited pages are at iCloud/Desktop/U1_magister_historia_notebook/output_pages."

---

### SESSION 7 — U1 Timeline + Budget List + Schedule Revision
**Goal:** Finish all Unit 1 loose ends
**Files to load at session start:**
- `U1_WeeklySchedule.md` (from outputs, for CM revision)
- `U1_Bibliography.md` (from outputs, for final pricing)

**Files to produce:**
1. `U1_WeeklySchedule_REVISED.md` — CM-revised (narration language, copywork slots, no worksheet language)
2. `U1_Timeline.md` — student timeline strip 1492–1763 (text only; can be illustrated separately)
3. `GLOBAL_BookList_Budget.md` — final ThriftBooks cart, all 4 units, verified prices, total cost

**Start command:** "Session 7 — load schedule + bibliography from outputs, revise for CM + build timeline + final book budget"

---

### SESSIONS 8–13 — Unit 2 (same pattern as Unit 1)
**Session 8:** U2 Overview + Schedule + L1–L2 Lesson Plans
**Session 9:** U2 L3–L4 Lesson Plans + Copywork + Narration Prompts
**Session 10:** U2 All Assessments (6 quizzes + 2 tests + answer key)
### SESSION 11 — U2 Notebooking Prompts ✅ COMPLETE
**Goal:** Source all 8 PD artwork images + draft wrap prompts for Unit 2

**⚠️ CLAUDE CODE NOTE:** Wrap generation and page compositing for Unit 2 are handled entirely by Claude Code outside these sessions.
- Wrap prompts (Option A botanical + Option B broadside): `NB_U2_PageWrap_Prompts.md`
- Completed pages will be saved at: `iCloud/Desktop/U2_magister_historia_notebook/output_pages/`
- All 8 PD source image URLs documented in `U2_NotebookingPrompts.md` — **manual download required** (LOC and Wikimedia block automated downloads)

**Files produced:**
1. `U2_NotebookingPrompts.md` — all 8 PD sources confirmed with download URLs ✅
2. `NB_U2_PageWrap_Prompts.md` — Option A (botanical) and Option B (broadside) full prompts ✅
### SESSION 12 — U2 Notebooking Student Pages
**Goal:** Build student-facing notebooking page documents using composited images already produced by Claude Code

**Files to load at session start:**
- `U2_NotebookingPrompts.md` (from outputs)
- `NB_U2_PageWrap_Prompts.md` (from outputs)

**Prerequisites (done outside this session by Claude Code):**
- Download 8 PD images (URLs in `U2_NotebookingPrompts.md`) — manual browser download required
- Generate chosen wrap option (A or B) via Claude Code
- Composite all 8 pages via Claude Code
- Completed pages saved at: `iCloud/Desktop/U2_magister_historia_notebook/output_pages/`

**Files to produce:**
1. `U2_NotebookingPages_IA.md`
2. `U2_NotebookingPages_IIA.md`

**Start command:** "Session 12 — load U2_NotebookingPrompts.md and NB_U2_PageWrap_Prompts.md from outputs. Composited pages are at iCloud/Desktop/U2_magister_historia_notebook/output_pages. Build U2_NotebookingPages_IA.md and U2_NotebookingPages_IIA.md."
**Session 13:** U2 Timeline + any loose ends

**Files to load for Session 8:** `GLOBAL_CM_PedagogyGuide.md`, `GLOBAL_NarrationGuide.md`, Project knowledge: `Unit 2 (3-5).pdf`

---

### SESSIONS 14–19 — Unit 3 (same pattern)
**Session 14:** U3 Overview + Schedule + L1–L2 Lesson Plans
**Session 15:** U3 L3–L4 + Copywork + Narration
**Session 16:** U3 Assessments
**Session 17:** U3 Notebooking Prompts (approval gate) — PD image sourcing + wrap prompt drafting; Claude Code handles generation and compositing; completed pages at `iCloud/Desktop/U3_magister_historia_notebook/output_pages/`
**Session 18:** U3 Notebooking Student Pages — build `U3_NotebookingPages_IA.md` + `IIA.md` from composited pages
**Session 19:** U3 Timeline + loose ends

**Files to load for Session 14:** `GLOBAL_CM_PedagogyGuide.md`, Project knowledge: `Unit 3 (3-5).pdf`

---

### SESSIONS 20–25 — Unit 4 (same pattern)
**Session 20:** U4 Overview + Schedule + L1–L2 Lesson Plans
**Session 21:** U4 L3–L4 + Copywork + Narration
**Session 22:** U4 Assessments
**Session 23:** U4 Notebooking Prompts (approval gate) — PD image sourcing + wrap prompt drafting; Claude Code handles generation and compositing; completed pages at `iCloud/Desktop/U4_magister_historia_notebook/output_pages/`
**Session 24:** U4 Notebooking Student Pages — build `U4_NotebookingPages_IA.md` + `IIA.md` from composited pages
**Session 25:** U4 Timeline + Final Global Docs

---

### SESSION 26 — Final Assembly + QC
**Goal:** Review all files for consistency, CM voice, formatting; produce master index
**Files to produce:**
1. `MASTER_INDEX.md` — complete file list, purpose, page count estimate
2. `GLOBAL_CM_PedagogyGuide_FINAL.md` — any revisions from build
3. Any gap files identified in QC

---

## Summary

| Phase | Sessions | Primary Output |
|-------|----------|---------------|
| Session 1 (done) | 1 | Overview, Bibliography, Schedule |
| Unit 1 complete | Sessions 2–7 | All U1 files + 8 images |
| Unit 2 complete | Sessions 8–13 | All U2 files + 8 images |
| Unit 3 complete | Sessions 14–19 | All U3 files + 8 images |
| Unit 4 complete | Sessions 20–25 | All U4 files + 8 images |
| Final QC | Session 26 | Master index + polish |
| **TOTAL** | **~26 sessions** | **~90 files + 32 images** |

---

## Project Size & Continuity Strategy

### Do we need multiple Claude Projects?
**No — one project is sufficient**, with one condition: the project knowledge PDFs stay loaded, and we rely on the `/mnt/user-data/outputs/` folder as the persistent file store between sessions.

**The risk to avoid:** Loading too many output files into context at once. Each session should load only 2–3 previously built files (the ones directly needed), not the entire outputs folder.

### Context management rules:
1. **Each session starts lean** — load only the files listed in "Files to load at session start" above
2. **Never load all 4 Hillsdale PDFs at once** — load only the relevant unit's PDF via project knowledge search
3. **Notebooking prompt sessions load lesson plans only** — Claude Code handles image generation and compositing outside these sessions
4. **Assessment sessions load narration prompts** — they're the content contract for test questions

### What would require a new project:
- If the outputs folder exceeds ~50 files and context gets heavy — solution is to start a "Unit 3–4" child project and copy the global files into its knowledge base
- Realistically this won't be necessary before Session 14 at earliest

### Unexpected block prevention:
- **Session 5 (notebooking prompts) is the critical gate** — if image prompts are wrong, we waste image budget. Don't rush it.
- **Assessment sessions reference project knowledge directly** — always search `Unit N (3-5).pdf` to pull exact test vocabulary before writing questions
- **CM revision of Schedule/Overview** (Session 7) should happen before you print or share anything — the Session 1 files use worksheet language

---

## Quick Reference: Start Commands for Each Session

Copy-paste these to begin each session:

| Session | Start Command |
|---------|--------------|
| 2 | "Session 2: Build GLOBAL_CM_PedagogyGuide, GLOBAL_NarrationGuide, U1_L1_Geography_LessonPlan, U1_L2_Exploration_LessonPlan. Load U1_Overview and U1_WeeklySchedule from outputs first." |
| 3 | "Session 3: Build U1_L3_Colonies_LessonPlan, U1_L4_MajorEvents_LessonPlan, U1_CopyworkDictation, U1_NarrationPrompts. Load U1_L1 and U1_L2 lesson plans from outputs." |
| 4 | "Session 4: Build all Unit 1 quizzes and tests (both forms) + answer key. Load U1_NarrationPrompts and U1_L3-L4 lesson plans from outputs." |
| 5 | "Session 5: Draft all 8 U1 notebooking image prompts + source PD artwork. Load all 4 U1 lesson plans from outputs. Do NOT generate images — Claude Code handles that." |
| 6 | "Session 6 — load approved U1_NotebookingPrompts from outputs, build U1_NotebookingPages_IA.md and U1_NotebookingPages_IIA.md. Composited pages are at iCloud/Desktop/U1_magister_historia_notebook/output_pages." |
| 7 | "Session 7: Revise U1_WeeklySchedule for CM, build U1_Timeline, build GLOBAL_BookList_Budget. Load U1_WeeklySchedule and U1_Bibliography from outputs." |
| 8 | "Session 8: Begin Unit 2. Build U2_Overview, U2_WeeklySchedule, U2_L1_SelfGovOrTyranny_LessonPlan, U2_L2_Declaration_LessonPlan. Load GLOBAL_CM_PedagogyGuide from outputs." |
| 11 | "Session 11: Draft all 8 U2 notebooking image prompts for approval. Load all 4 U2 lesson plans from outputs. Do NOT generate images yet." — ✅ COMPLETE |
| 12 | "Session 12 — load U2_NotebookingPrompts.md and NB_U2_PageWrap_Prompts.md from outputs. Composited pages are at iCloud/Desktop/U2_magister_historia_notebook/output_pages. Build U2_NotebookingPages_IA.md and U2_NotebookingPages_IIA.md." |
| 9–26 | Follow same pattern — see session descriptions above |

---

## Todo Checklist

### Pre-Session 2
- [ ] Review `U1_Overview_TeacherGuide.md` — note any CM language gaps to fix
- [ ] Review `U1_WeeklySchedule.md` — note "worksheet" language to replace with "narration"
- [ ] Confirm both boys' grade levels for Form IA/IIA assignment

### Session 2
- [ ] Build `GLOBAL_CM_PedagogyGuide.md`
- [ ] Build `GLOBAL_NarrationGuide.md`
- [ ] Build `U1_L1_Geography_LessonPlan.md`
- [ ] Build `U1_L2_Exploration_LessonPlan.md`

### Session 3
- [ ] Build `U1_L3_Colonies_LessonPlan.md`
- [ ] Build `U1_L4_MajorEvents_LessonPlan.md`
- [ ] Build `U1_CopyworkDictation.md`
- [ ] Build `U1_NarrationPrompts.md`

### Session 4
- [ ] Build `U1_Quiz1_IA.md` + `U1_Quiz1_IIA.md`
- [ ] Build `U1_Quiz2_IA.md` + `U1_Quiz2_IIA.md`
- [ ] Build `U1_Quiz3_IA.md` + `U1_Quiz3_IIA.md`
- [ ] Build `U1_Test1_Midunit_IA.md` + `U1_Test1_Midunit_IIA.md`
- [ ] Build `U1_Test2_Final_IA.md` + `U1_Test2_Final_IIA.md`
- [ ] Build `U1_AnswerKey.md`

### Session 5 — APPROVAL GATE
- [ ] Build `U1_NotebookingPrompts.md` (8 prompts)
- [ ] **YOU REVIEW AND APPROVE ALL 8 PROMPTS before Session 6**
- [ ] Note any style changes, scene corrections, text adjustments

### Session 6
- [ ] Generate 8 images (flash model unless quality needs pro)
- [ ] Build `U1_NotebookingPages_IA.md`
- [ ] Build `U1_NotebookingPages_IIA.md`

### Session 7
- [ ] Revise `U1_WeeklySchedule.md` → CM language
- [ ] Build `U1_Timeline.md`
- [ ] Build `GLOBAL_BookList_Budget.md` (final ThriftBooks cart, all units)

### Sessions 8–25
- [ ] Repeat Unit 1 pattern for Units 2, 3, 4
- [ ] Each unit: 6 sessions (schedule+plans, copywork+narration, assessments, prompts, images, cleanup)

### Session 26
- [ ] Full QC pass
- [ ] Build `MASTER_INDEX.md`
- [ ] Finalize global files
