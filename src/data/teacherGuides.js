// ─────────────────────────────────────────────────────────────────────────────
// teacherGuides.js — aggregator
// Merges the per-unit guide + vocab maps into single objects consumed by
// lessons.js (attach loop) and the LessonViewer (vocab tooltips, optional).
//
// To add/edit a guide: edit the relevant src/data/teacherGuides/unitN.js file.
// ─────────────────────────────────────────────────────────────────────────────

import { GUIDES as G1, VOCAB as V1 } from "./teacherGuides/unit1.js";
import { GUIDES as G2, VOCAB as V2 } from "./teacherGuides/unit2.js";
import { GUIDES as G3, VOCAB as V3 } from "./teacherGuides/unit3.js";
import { GUIDES as G4, VOCAB as V4 } from "./teacherGuides/unit4.js";
import { GUIDES as G5, VOCAB as V5 } from "./teacherGuides/unit5.js";
import { GUIDES as G6, VOCAB as V6 } from "./teacherGuides/unit6.js";
import { GUIDES as G7, VOCAB as V7 } from "./teacherGuides/unit7.js";

export const TEACHER_GUIDES = { ...G1, ...G2, ...G3, ...G4, ...G5, ...G6, ...G7 };
export const VOCAB_DEFS = { ...V1, ...V2, ...V3, ...V4, ...V5, ...V6, ...V7 };
