# Schola Domestica — Image Generation Prompts & Project Guide

---

## Missing Images for Week 1 (needed in addition to existing files)

Your existing files cover many needs. Below are prompts for images not yet in your Overleaf project.

### Beatrix Potter Watercolor Style Prompts

**stars_1.jpg through stars_5.jpg** (if not all exist)
```
Gentle Beatrix Potter watercolor illustration, black-and-white line drawing style suitable
for printing. [N] small five-pointed stars with simple smiling faces, arranged neatly in a
row on a white background. Clean outlines, no color fill, suitable for a child's math
worksheet. N = 1, 2, 3, 4, 5 (generate separately for each).
```

**apples_1.jpg through apples_6.jpg**
```
Beatrix Potter-style black-and-white line drawing. [N] round apples with a leaf and stem,
arranged in a cheerful row. Clean ink outlines only, white background, printable quality.
N = 1 through 6.
```

**ducks_1.jpg through ducks_5.jpg**
```
Gentle Beatrix Potter watercolor-style black-and-white line drawing. [N] small ducklings
floating on a pond, simple and charming. Clean outlines only, white background, suitable
for a child's math worksheet. N = 1 through 5.
```

**rabbits_2.jpg, rabbits_3.jpg, rabbits_5.jpg**
```
Beatrix Potter-style delicate black-and-white ink drawing. [N] small rabbits sitting in
a garden with tiny flowers nearby. Clean outlines, white background, printable, charming
and gentle in style. N = 2, 3, 5.
```

**acorns_3.jpg, acorns_5.jpg**
```
Beatrix Potter-style black-and-white line drawing. [N] round acorns with caps, neatly
arranged. Clean ink outlines, white background, worksheet-ready. N = 3, 5.
```

**birds_nest_eggs.jpg**
```
Beatrix Potter-style charming black-and-white line drawing of a small bird's nest
containing 5 eggs, with a mother bird perched on the edge. Delicate ink outlines,
white background, printable quality.
```

**goldfish_3.jpg, goldfish_5.jpg**
```
Miyazaki-style gentle black-and-white line drawing. [N] round goldfish swimming in a
simple bowl or pond, serene and charming. Clean outlines only, white background,
suitable for a child's math worksheet. N = 3, 5.
```

**flowers_vase_4.jpg**
```
Beatrix Potter-style black-and-white line drawing. A simple vase holding 4 flowers
(daisies or tulips). Delicate ink outlines, white background, worksheet-ready, gentle.
```

**mice_acorns.jpg**
```
Beatrix Potter-style black-and-white ink drawing. Two small mice sitting together,
each holding an acorn. Charming and detailed ink outlines, white background, printable.
```

---

## Suggested Additional Images for Weeks 2–8

| Image File | Prompt Summary |
|---|---|
| `koi_pond_5.jpg` | 5 koi fish in a simple pond, Miyazaki-style B&W line art |
| `caterpillar_counting.jpg` | Caterpillar with numbered segments 1–5, B&W, Beatrix Potter |
| `frogs_4.jpg` | 4 frogs on lily pads, gentle B&W line drawing |
| `mushrooms_3.jpg` | 3 mushrooms in a row, classic fairy-tale style, B&W |
| `ladybugs_5.jpg` | 5 ladybugs, B&W line art, charming |
| `number_line_0_10.jpg` | Illustrated number line 0–10 with small animals at each mark |
| `ten_frame_blank.jpg` | Empty 2×5 ten-frame, clean B&W, bold lines |
| `ten_frame_filled_7.jpg` | Ten-frame with 7 filled circles, B&W |
| `hands_10.jpg` | Both hands open showing 10 fingers, simple line art |
| `abacus_simple.jpg` | Simple 2-row abacus showing a number, B&W technical line art |

---

## Folder Structure Recommendation for GitHub

```
magister-marcus/
└── src/
    └── Magister Mathematica/
        ├── Level-1/
        │   ├── images/
        │   │   ├── stars_1.jpg
        │   │   ├── stars_2.jpg
        │   │   └── ... (all shared images here)
        │   ├── Week-01/
        │   │   ├── sd_L1_W1_L1.tex
        │   │   ├── sd_L1_W1_L2.tex
        │   │   ├── sd_L1_W1_L3.tex
        │   │   ├── sd_L1_W1_L4.tex
        │   │   └── sd_L1_W1_L5.tex
        │   ├── Week-02/
        │   │   └── ...
        │   └── Level1_ReadinessTest.tex
        ├── Level-2/
        │   └── ...
        └── shared/
            └── sd_style.sty   ← extract the preamble into a style file
```

### Shared Style File (sd_style.sty) — extract from template

To avoid copy-pasting the preamble 180 times, create `sd_style.sty` with all
`\usepackage`, color, font, mdframed, and command definitions. Then each lesson
starts simply with:

```latex
\documentclass[12pt,letterpaper]{article}
\usepackage{../../../shared/sd_style}
\lessonmeta{1}{1}{Numbers 1 and 2}
\begin{document}
  ...content only...
\end{document}
```

---

## Session Plan for Remaining Build

| Session | Deliverable |
|---|---|
| Next session | Week 2 (Numbers 6–10) — all 5 lessons + `sd_style.sty` extracted |
| +1 | Weeks 3–4 (Zero + Review, Numbers 6–10 comparison) |
| +1 | Weeks 5–6 (Ordering, Number line, Mayan enrichment) |
| +1 | Weeks 7–8 (Intro addition/subtraction with pictures) |
| +1 | Weeks 9–12 (Addition facts to 10, speed drills begin) |
| +2 | Weeks 13–16 (Subtraction facts, fact families, Assessment) |
| +2 | Weeks 17–22 (Teen numbers) |
| +2 | Weeks 23–28 (Place value to 100) |
| +2 | Weeks 29–32 (2-digit operations no regrouping) |
| +1 | Weeks 33–36 (Ordinals, patterns, end-of-level assessment) |
| +1 | Level 1 Readiness Test (entry) + Answer Keys all |
| **Total** | **~14 more sessions for Level 1** |
| +12 sessions | Level 2 (Weeks 1–35) |
| **Grand total L1+L2** | **~27 sessions** |
