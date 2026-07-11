import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import TopNav from '../components/TopNav.jsx'
import { UNITS as WONDERS_Y1 } from '../data/lessons.js'
import { UNITS as WONDERS_Y2 } from '../data/lessons-year2.js'
import { WEEKS, WEEKS3, TERMS, TERMS3, CATS, FREE3 } from '../data/ao-schedule.js'

// ── Curriculum sources the planner can pull lessons from ─────────────────────
// Add more here as their data files are wired in (Latin, Chant, etc.).
const CURRICULA = [
  { key: 'wonders-y1', label: 'Wonders · Year One', units: WONDERS_Y1 },
  { key: 'wonders-y2', label: 'Wonders · Year Two', units: WONDERS_Y2 },
]

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

// Fixed start of the school year: Week 1 = the week of Monday, Aug 17 2026.
const SCHOOL_YEAR_START = '2026-08-17'
const SCHOOL_START_V = 'aug17-2026' // bump to force a re-anchor migration

// Ensure loaded data anchors to the current school-year start; re-seed if it changed.
const migrate = (data) => {
  if (data.schoolStartV === SCHOOL_START_V && data.yearStart) return data
  return {
    ...data,
    yearStart: SCHOOL_YEAR_START,
    schoolStartV: SCHOOL_START_V,
    entries: (data.entries || []).filter((e) => !e.seed), // drop old auto-seeded items; they regenerate
    seeded: [],
  }
}
const STUDENT_COLORS = ['#c9902a', '#5a7a4a', '#4a6a7a', '#8a5a2a', '#6a4a7a', '#7a4a4a']
// Ambleside/CM daily & weekly rhythm, per level — seeded from the Year 6 planner.
const AO_TEMPLATES = {
  'Year 6': {
    daily: ['Math lesson', 'Copywork (5–10 min)', 'Latin — Via Latina lesson', 'Modern foreign language', 'Musical instrument practice', 'Recitation', 'Physical activity'],
    weekly: ['Prologue of Ochrid — saints of the week', 'Shakespeare — this term’s play (AO rotation)', 'Plutarch — this term’s Life (AO rotation)', 'Picture Study (AO artist rotation)', 'Composer / hymn / folksong (AO rotations)', 'Nature Study outing + Handbook of Nature Study', 'Written narration', 'Dictation', 'Grammar', 'Map work + timeline/Book of Centuries entry', 'Handicrafts'],
  },
  'Year 3': {
    daily: ['Copywork (5–10 min)', 'Phonics / reading practice', 'Recitation', 'Math lesson', 'Foreign language', 'Latin — Via Latina (Prima Latina, optional)', 'Physical activity', 'Narrate every reading orally'],
    weekly: ['Paterikon — saint of the week (with the Prologue)', 'Picture Study (AO artist rotation)', 'Composer / hymn / folksong (AO rotations)', 'Timeline + map with history readings', 'Nature Study outing + Handbook of Nature Study', 'Handicrafts', 'Art'],
  },
}
// Per-level reading schedule + term rotations (from the ported Y6 planner).
const LEVELS = {
  'Year 6': { weeks: WEEKS, terms: TERMS, freeRead: '' },
  'Year 3': { weeks: WEEKS3, terms: TERMS3, freeRead: FREE3 },
}
const CAT_ROWS = Object.values(CATS) // Bible, History, Biography, Geography, Science, Science Bio, Literature, Free Read
const termFor = (level, wk) => (LEVELS[level]?.terms || []).find((t) => wk >= t.weeks[0] && wk <= t.weeks[1]) || null

// CM/AO short-lesson time estimates (minutes) per level & subject. Editable per entry after seeding.
const ESTIMATES = {
  'Year 6': {
    'Math lesson': 65, 'Copywork (5–10 min)': 8, 'Latin — Via Latina lesson': 30, 'Modern foreign language': 15,
    'Musical instrument practice': 25, 'Recitation': 5, 'Physical activity': 40,
    'Prologue of Ochrid — saints of the week': 5, 'Shakespeare — this term’s play (AO rotation)': 20,
    'Plutarch — this term’s Life (AO rotation)': 20, 'Picture Study (AO artist rotation)': 15,
    'Composer / hymn / folksong (AO rotations)': 10, 'Nature Study outing + Handbook of Nature Study': 45,
    'Written narration': 15, 'Dictation': 10, 'Grammar': 15, 'Map work + timeline/Book of Centuries entry': 10, 'Handicrafts': 30,
    Bible: 10, History: 20, Biography: 15, Geography: 15, Science: 20, 'Science Bio': 15, Literature: 20, 'Free Read': 20,
  },
  'Year 3': {
    'Copywork (5–10 min)': 8, 'Phonics / reading practice': 12, 'Recitation': 5, 'Math lesson': 25, 'Foreign language': 10,
    'Latin — Via Latina (Prima Latina, optional)': 10, 'Physical activity': 40, 'Narrate every reading orally': 5,
    'Paterikon — saint of the week (with the Prologue)': 5, 'Picture Study (AO artist rotation)': 15,
    'Composer / hymn / folksong (AO rotations)': 10, 'Timeline + map with history readings': 10,
    'Nature Study outing + Handbook of Nature Study': 45, 'Handicrafts': 30, 'Art': 20,
    Bible: 8, History: 12, Biography: 12, Geography: 10, Science: 12, 'Science Bio': 10, Literature: 15, 'Free Read': 15,
  },
}
// Not counted toward academic seat-time by default (afternoon / non-desk).
const NO_COUNT = new Set(['Physical activity', 'Nature Study outing + Handbook of Nature Study', 'Handicrafts', 'Musical instrument practice'])
const estMin = (level, subject) => ESTIMATES[level]?.[subject] ?? 15
const fmtMin = (m) => (m >= 60 ? `${Math.floor(m / 60)}h${m % 60 ? ' ' + (m % 60) + 'm' : ''}` : `${m}m`)

// Seed one child's rhythm + a school week's readings into (subjects, entries) for a given calendar week.
// Pure: returns new arrays. Clears that child's prior *seeded* items for the week first.
function seedInto(subjects, entries, level, sid, wk, weekKey, { rhythm = true, readings = true } = {}) {
  const tpl = AO_TEMPLATES[level], lvl = LEVELS[level]
  const subs = [...subjects]
  const ensure = (n) => { if (!subs.includes(n)) subs.push(n) }
  const ents = entries.filter((e) => !(e.week === weekKey && (e.studentId || null) === sid && e.seed))
  const add = (subject, day, label) =>
    ents.push({ id: uid(), week: weekKey, subject, day, studentId: sid, label: label || '', ref: null, done: false, seed: true, min: estMin(level, subject), count: !NO_COUNT.has(subject) })
  if (rhythm && tpl) {
    tpl.daily.forEach(ensure); tpl.weekly.forEach(ensure)
    tpl.daily.forEach((t) => DAYS.forEach((day) => add(t, day, '')))
    tpl.weekly.forEach((t, i) => add(t, DAYS[i % DAYS.length], ''))
  }
  if (readings && lvl?.weeks?.[wk]) {
    CAT_ROWS.forEach(ensure)
    lvl.weeks[wk].forEach(([cat, text], i) => add(CATS[cat] || 'Reading', DAYS[i % DAYS.length], text))
  }
  return { subjects: subs, entries: ents }
}

// Default subject rows = reading categories first, then the de-duplicated AO rhythm.
const DEFAULT_SUBJECTS = (() => {
  const seen = new Set(), out = []
  const push = (arr) => arr.forEach((t) => { if (!seen.has(t)) { seen.add(t); out.push(t) } })
  push(CAT_ROWS)
  push(AO_TEMPLATES['Year 6'].daily); push(AO_TEMPLATES['Year 3'].daily)
  push(AO_TEMPLATES['Year 6'].weekly); push(AO_TEMPLATES['Year 3'].weekly)
  return out
})()

const uid = () => Math.random().toString(36).slice(2, 9)

// Monday of the week containing `d`, as YYYY-MM-DD
function mondayOf(d) {
  const x = new Date(d)
  const day = (x.getDay() + 6) % 7 // Mon=0
  x.setDate(x.getDate() - day)
  x.setHours(0, 0, 0, 0)
  return x
}
const iso = (d) => {
  const x = new Date(d)
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`
}
const prettyWeek = (mondayStr) => {
  const m = new Date(mondayStr + 'T00:00:00')
  const f = new Date(m); f.setDate(f.getDate() + 4)
  const opt = { month: 'short', day: 'numeric' }
  return `${m.toLocaleDateString(undefined, opt)} – ${f.toLocaleDateString(undefined, opt)}`
}

const EMPTY = () => ({ students: [], subjects: [...DEFAULT_SUBJECTS], entries: [], yearStart: SCHOOL_YEAR_START, seeded: [], breaks: [], schoolStartV: SCHOOL_START_V })

// Infer a level from a CM Form label when one isn't set explicitly.
const guessLevel = (form = '') => (/ii/i.test(form) ? 'Year 6' : /form\s*i\b|\bi[ab]?\b/i.test(form) ? 'Year 3' : null)

const weeksBetween = (a, b) => Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / (7 * 864e5))

// School-week number (1..36) for a Monday, skipping any break weeks. null = break or out of term.
const schoolWeekFor = (yearStart, breaks, weekStart) => {
  if (!yearStart) return null
  const raw = weeksBetween(yearStart, weekStart) // 0-based offset from week 1
  if (raw < 0) return null
  if ((breaks || []).includes(weekStart)) return null
  const breaksBefore = (breaks || []).filter((b) => weeksBetween(yearStart, b) >= 0 && weeksBetween(b, weekStart) > 0).length
  const n = raw - breaksBefore + 1
  return n >= 1 && n <= 36 ? n : null
}
// kept for the school-week picker (assumes no breaks before the anchor)
const weekNumFor = (yearStart, weekStart) => schoolWeekFor(yearStart, [], weekStart)

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=IM+Fell+English:ital@0;1&display=swap');
*{box-sizing:border-box;}
.lp-root{min-height:100vh;background:#0e0b07;color:#e8dfc8;font-family:'Crimson Pro',Georgia,serif;padding:52px 0 60px;}
.lp-wrap{max-width:1180px;margin:0 auto;padding:0 18px;}
.lp-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;border-bottom:1px solid #3d2e1e;padding:14px 0 12px;margin-bottom:16px;}
.lp-title{font-family:'Cinzel',serif;font-size:26px;font-weight:700;color:#e8b84b;letter-spacing:.02em;}
.lp-title small{display:block;font-family:'Crimson Pro',serif;font-style:italic;font-size:13px;color:#9e8c72;letter-spacing:0;margin-top:2px;font-weight:400;}
.lp-sync{font-size:11px;font-family:'Cinzel',serif;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:12px;border:1px solid #3d2e1e;color:#9e8c72;white-space:nowrap;}
.lp-sync.saving{color:#e8b84b;border-color:#6a5030;}
.lp-sync.saved{color:#8ab870;border-color:#3a5a30;}
.lp-sync.local{color:#c8a86a;border-color:#6a5030;}
.lp-sync.error{color:#d98a6a;border-color:#7a4a30;}

.lp-section-lbl{font-family:'Cinzel',serif;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#c9902a;margin:6px 0 8px;}

/* Students */
.lp-students{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:20px;}
.lp-chip{display:inline-flex;align-items:center;gap:7px;padding:5px 12px;border-radius:16px;border:1px solid #3d2e1e;background:#1a1208;cursor:pointer;font-size:14px;}
.lp-chip:hover{border-color:#6a5030;}
.lp-dot{width:11px;height:11px;border-radius:50%;flex-shrink:0;}
.lp-chip small{color:#9e8c72;font-size:11px;font-style:italic;}
.lp-add-btn{padding:5px 12px;border-radius:16px;border:1px dashed #6a5030;background:transparent;color:#c9902a;cursor:pointer;font-family:'Crimson Pro',serif;font-size:14px;}
.lp-add-btn:hover{background:#1a1208;}

/* Week nav */
.lp-weekbar{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
.lp-wk-btn{padding:4px 12px;border-radius:4px;border:1px solid #3d2e1e;background:#1a1208;color:#c8b48a;cursor:pointer;font-family:'Crimson Pro',serif;font-size:14px;}
.lp-wk-btn:hover{border-color:#c9902a;color:#f7edcc;}
.lp-wk-label{font-family:'Cinzel',serif;font-size:15px;color:#e8dfc8;min-width:150px;text-align:center;}
.lp-today{font-size:12px;color:#9e8c72;font-style:italic;}

/* Grid */
.lp-gridwrap{overflow-x:auto;border:1px solid #3d2e1e;border-radius:6px;}
.lp-grid{border-collapse:collapse;width:100%;min-width:820px;}
.lp-grid th,.lp-grid td{border:1px solid #2a1e10;vertical-align:top;}
.lp-grid thead th{background:#1a1208;font-family:'Cinzel',serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#c9902a;padding:8px 6px;position:sticky;top:0;}
.lp-subj{width:150px;background:#160f07;padding:8px;font-family:'Cinzel',serif;font-size:12px;color:#e8dfc8;position:relative;}
.lp-subj .x{position:absolute;top:4px;right:5px;color:#5a4a38;cursor:pointer;font-size:12px;opacity:0;}
.lp-subj:hover .x{opacity:1;}
.lp-subj .x:hover{color:#d98a6a;}
.lp-cell{padding:5px;min-width:130px;background:#0e0b07;}
.lp-entry{display:flex;align-items:flex-start;gap:6px;padding:5px 6px;margin-bottom:4px;border-radius:4px;background:#171009;border-left:3px solid #6a5030;font-size:13px;line-height:1.3;}
.lp-entry.done{opacity:.5;text-decoration:line-through;}
.lp-entry .cb{margin-top:2px;cursor:pointer;flex-shrink:0;}
.lp-entry .lab{flex:1;}
.lp-entry .lab .who{display:block;font-size:10px;font-family:'Cinzel',serif;letter-spacing:.06em;text-transform:uppercase;opacity:.7;margin-bottom:1px;}
.lp-entry .del{color:#5a4a38;cursor:pointer;font-size:12px;flex-shrink:0;}
.lp-entry .min{margin-left:6px;color:#c9902a;font-size:9px;letter-spacing:.04em;}
.lp-weektot{margin-top:14px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;padding:10px 14px;background:#160f07;border:1px solid #3d2e1e;border-radius:6px;font-size:14px;}
.lp-wt{display:inline-flex;align-items:center;gap:7px;}
.lp-wt b{color:#e8b84b;}
.lp-wt-avg{color:#9e8c72;font-style:italic;font-size:12px;}
.lp-wt-note{color:#5a4a38;font-size:11px;font-style:italic;margin-left:auto;}
.lp-entry .del:hover{color:#d98a6a;}
.lp-cell .addcell{width:100%;padding:3px;border:1px dashed #2a1e10;border-radius:4px;background:transparent;color:#5a4a38;cursor:pointer;font-size:16px;line-height:1;}
.lp-cell .addcell:hover{border-color:#6a5030;color:#c9902a;}
.lp-addsubj{margin-top:10px;}
.lp-schoolwk{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin:-2px 0 14px;font-size:14px;color:#c8b48a;}
.lp-wk-select{padding:3px 8px;background:#1a1208;border:1px solid #6a5030;border-radius:4px;color:#e8b84b;font-family:'Crimson Pro',serif;font-size:14px;}
.lp-sw-note{color:#9e8c72;font-style:italic;font-size:12px;margin-left:6px;}
.lp-break-btn{margin-left:8px;padding:3px 10px;background:transparent;border:1px dashed #6a5030;border-radius:4px;color:#c9902a;cursor:pointer;font-family:'Crimson Pro',serif;font-size:13px;}
.lp-break-btn:hover{background:#1a1208;border-color:#c9902a;}
.lp-break-badge{padding:3px 10px;border-radius:12px;background:#1f2a17;border:1px solid #3a5a30;color:#8ab870;font-family:'Cinzel',serif;font-size:12px;letter-spacing:.04em;}

/* Modal */
.lp-ov{position:fixed;inset:0;background:rgba(0,0,0,.62);display:flex;align-items:center;justify-content:center;z-index:200;padding:16px;}
.lp-modal{background:#15100a;border:1px solid #6a5030;border-radius:8px;max-width:440px;width:100%;padding:18px 20px;box-shadow:0 12px 40px rgba(0,0,0,.5);}
.lp-modal h3{font-family:'Cinzel',serif;font-size:16px;color:#e8b84b;margin-bottom:2px;}
.lp-modal .sub{font-size:12px;color:#9e8c72;font-style:italic;margin-bottom:14px;}
.lp-field{margin-bottom:12px;}
.lp-field label{display:block;font-family:'Cinzel',serif;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#c9902a;margin-bottom:4px;}
.lp-input,.lp-select{width:100%;padding:8px 10px;background:#0e0b07;border:1px solid #3d2e1e;border-radius:4px;color:#e8dfc8;font-family:'Crimson Pro',serif;font-size:14px;}
.lp-input:focus,.lp-select:focus{outline:none;border-color:#c9902a;}
.lp-seg{display:flex;gap:6px;margin-bottom:12px;}
.lp-seg button{flex:1;padding:6px;border:1px solid #3d2e1e;background:#0e0b07;color:#9e8c72;border-radius:4px;cursor:pointer;font-family:'Cinzel',serif;font-size:11px;letter-spacing:.06em;}
.lp-seg button.on{background:#2a1e10;border-color:#c9902a;color:#f7edcc;}
.lp-colors{display:flex;gap:8px;}
.lp-colors button{width:24px;height:24px;border-radius:50%;border:2px solid transparent;cursor:pointer;}
.lp-colors button.on{border-color:#e8dfc8;}
.lp-actions{display:flex;justify-content:space-between;gap:8px;margin-top:16px;}
.lp-btn{padding:8px 16px;border-radius:5px;border:1px solid #c9902a;background:#c9902a;color:#0e0b07;cursor:pointer;font-family:'Cinzel',serif;font-size:12px;letter-spacing:.06em;}
.lp-btn:hover{background:#e8b84b;border-color:#e8b84b;}
.lp-btn.ghost{background:transparent;color:#c8b48a;border-color:#3d2e1e;}
.lp-btn.ghost:hover{border-color:#6a5030;color:#f7edcc;}
.lp-btn.danger{background:transparent;color:#d98a6a;border-color:#5a3020;}
.lp-btn.danger:hover{background:#2a1410;}
.lp-empty{color:#5a4a38;font-style:italic;font-size:13px;padding:24px;text-align:center;}
`

export default function LessonPlanner() {
  const [data, setData] = useState(EMPTY())
  const [weekStart, setWeekStart] = useState(() => {
    const today = iso(mondayOf(new Date()))
    return today < SCHOOL_YEAR_START ? SCHOOL_YEAR_START : today
  })
  const [sync, setSync] = useState('local') // local | saving | saved | error
  const [studentModal, setStudentModal] = useState(null) // {id?, name, form, color}
  const [entryModal, setEntryModal] = useState(null)      // {subject, day, mode, studentId, text, src, unitId, lessonId}
  const [fillOpen, setFillOpen] = useState(false)
  const [fill, setFill] = useState({ level: 'Year 6', studentId: '', week: 1, rhythm: true, readings: true })
  const [editEntry, setEditEntry] = useState(null) // entry object being edited
  const loaded = useRef(false)
  const saveTimer = useRef(null)

  // ── Load: try server, fall back to localStorage ──
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const r = await fetch('/api/planner')
        if (r.ok) {
          const j = await r.json()
          if (!cancelled && j.bound && j.data) { setData(migrate({ ...EMPTY(), ...j.data })); setSync('saved') }
          else if (!cancelled) { loadLocal(); setSync(j.bound ? 'saved' : 'local') }
          loaded.current = true
          return
        }
      } catch { /* offline / no endpoint */ }
      if (!cancelled) { loadLocal(); setSync('local'); loaded.current = true }
    })()
    return () => { cancelled = true }
  }, [])

  function loadLocal() {
    try {
      const raw = localStorage.getItem('schola-planner')
      if (raw) setData(migrate({ ...EMPTY(), ...JSON.parse(raw) }))
    } catch { /* ignore */ }
  }

  // ── Save: debounced to localStorage + server ──
  useEffect(() => {
    if (!loaded.current) return
    try { localStorage.setItem('schola-planner', JSON.stringify(data)) } catch { /* ignore */ }
    clearTimeout(saveTimer.current)
    setSync((s) => (s === 'local' ? 'local' : 'saving'))
    saveTimer.current = setTimeout(async () => {
      try {
        const r = await fetch('/api/planner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data }),
        })
        if (r.ok) setSync('saved')
        else setSync('local') // no KV binding / sync unavailable — saved on this device
      } catch { setSync('local') }
    }, 800)
  }, [data])

  // ── Helpers ──
  const studentsById = useMemo(() => Object.fromEntries(data.students.map((s) => [s.id, s])), [data.students])
  const weekEntries = useMemo(
    () => data.entries.filter((e) => e.week === weekStart),
    [data.entries, weekStart]
  )
  const cellEntries = useCallback(
    (subject, day) => weekEntries.filter((e) => e.subject === subject && e.day === day),
    [weekEntries]
  )
  // seat-time totals (minutes) — excludes entries flagged count:false
  const dayTotal = useCallback(
    (sid, day) => weekEntries.filter((e) => (e.studentId || null) === sid && e.day === day && e.count !== false)
      .reduce((s, e) => s + (Number(e.min) || 0), 0),
    [weekEntries]
  )
  const weekTotal = useCallback(
    (sid) => DAYS.reduce((s, day) => s + dayTotal(sid, day), 0),
    [dayTotal]
  )
  // which "owners" have counted entries this week (students + optional shared "All")
  const activeOwners = useMemo(() => {
    const ids = new Set(weekEntries.filter((e) => e.count !== false).map((e) => e.studentId || null))
    return data.students.filter((s) => ids.has(s.id)).concat(ids.has(null) ? [{ id: null, name: 'All', color: '#6a5030' }] : [])
  }, [weekEntries, data.students])

  const shiftWeek = (n) => {
    const m = new Date(weekStart + 'T00:00:00'); m.setDate(m.getDate() + n * 7)
    setWeekStart(iso(m))
  }
  const isThisWeek = weekStart === iso(mondayOf(new Date()))

  // ── Student CRUD ──
  const saveStudent = () => {
    const s = studentModal
    if (!s.name.trim()) return
    setData((d) => {
      if (s.id) return { ...d, students: d.students.map((x) => (x.id === s.id ? s : x)) }
      return { ...d, students: [...d.students, { ...s, id: uid() }] }
    })
    setStudentModal(null)
  }
  const deleteStudent = (id) => {
    setData((d) => ({
      ...d,
      students: d.students.filter((x) => x.id !== id),
      entries: d.entries.map((e) => (e.studentId === id ? { ...e, studentId: null } : e)),
    }))
    setStudentModal(null)
  }

  // ── Subject CRUD ──
  const addSubject = () => {
    const name = prompt('New subject name:')
    if (name && name.trim()) setData((d) => ({ ...d, subjects: [...d.subjects, name.trim()] }))
  }
  const removeSubject = (name) => {
    if (!confirm(`Remove "${name}" and its planned entries?`)) return
    setData((d) => ({
      ...d,
      subjects: d.subjects.filter((x) => x !== name),
      entries: d.entries.filter((e) => e.subject !== name),
    }))
  }

  // ── Entry CRUD ──
  const openEntry = (subject, day) =>
    setEntryModal({ subject, day, mode: 'text', studentId: '', text: '', src: CURRICULA[0].key, unitId: '', lessonId: '' })

  const saveEntry = () => {
    const m = entryModal
    let label = m.text.trim()
    let ref = null
    if (m.mode === 'curriculum') {
      const src = CURRICULA.find((c) => c.key === m.src)
      const unit = src?.units.find((u) => u.id === m.unitId)
      const lesson = unit?.lessons.find((l) => l.id === m.lessonId)
      if (!lesson) return
      label = `${lesson.id} · ${lesson.title}`
      ref = { source: src.label, unitTitle: unit.title, lessonId: lesson.id }
    }
    if (!label) return
    setData((d) => ({
      ...d,
      entries: [...d.entries, {
        id: uid(), week: weekStart, subject: m.subject, day: m.day,
        studentId: m.studentId || null, label, ref, done: false,
        min: 15, count: !NO_COUNT.has(m.subject),
      }],
    }))
    setEntryModal(null)
  }
  const toggleDone = (id) =>
    setData((d) => ({ ...d, entries: d.entries.map((e) => (e.id === id ? { ...e, done: !e.done } : e)) }))
  const deleteEntry = (id) =>
    setData((d) => ({ ...d, entries: d.entries.filter((e) => e.id !== id) }))
  const updateEntry = (id, patch) =>
    setData((d) => ({ ...d, entries: d.entries.map((e) => (e.id === id ? { ...e, ...patch } : e)) }))
  const shiftEntryWeek = (e, deltaDays) => {
    const m = new Date(e.week + 'T00:00:00'); m.setDate(m.getDate() + deltaDays)
    const week = iso(m)
    updateEntry(e.id, { week, seed: false })
    setEditEntry({ ...e, week, seed: false })
  }

  // ── Seed a week: AO rhythm + that school week's readings, for one child ──
  const planWeek = () => {
    const sid = fill.studentId || null
    setData((d) => {
      const r = seedInto(d.subjects, d.entries, fill.level, sid, fill.week, weekStart, { rhythm: fill.rhythm, readings: fill.readings })
      const seeded = [...(d.seeded || [])]
      const key = `${weekStart}|${sid}`
      if (!seeded.includes(key)) seeded.push(key)
      return { ...d, subjects: r.subjects, entries: r.entries, seeded }
    })
    setFillOpen(false)
  }

  // Effective level for a student: explicit choice, else inferred from Form.
  const effLevel = useCallback((s) => (s.level === 'none' ? null : s.level || guessLevel(s.form)), [])
  const currentWk = schoolWeekFor(data.yearStart, data.breaks, weekStart)
  const isBreak = (data.breaks || []).includes(weekStart)

  // Mark the current week as a break (or resume): everything from here on renumbers & re-seeds.
  const setBreak = (on) => setData((d) => {
    const breaks = on
      ? Array.from(new Set([...(d.breaks || []), weekStart]))
      : (d.breaks || []).filter((b) => b !== weekStart)
    // drop auto-seeded items on this week and all later weeks so they re-number on visit; keep edits & past
    const entries = d.entries.filter((e) => !(e.seed && e.week >= weekStart))
    const seeded = (d.seeded || []).filter((k) => k.split('|')[0] < weekStart)
    return { ...d, breaks, entries, seeded }
  })

  // Set which school week the currently-viewed calendar week is, and re-seed it.
  const setSchoolWeek = (n) => {
    const m = new Date(weekStart + 'T00:00:00'); m.setDate(m.getDate() - (n - 1) * 7)
    const yearStart = iso(m)
    setData((d) => {
      let subjects = [...d.subjects], entries = [...d.entries]
      const seeded = (d.seeded || []).filter((k) => !k.startsWith(weekStart + '|'))
      d.students.forEach((s) => {
        const lvl = effLevel(s)
        if (!lvl) return
        const r = seedInto(subjects, entries, lvl, s.id, n, weekStart)
        subjects = r.subjects; entries = r.entries
        seeded.push(`${weekStart}|${s.id}`)
      })
      return { ...d, yearStart, subjects, entries, seeded }
    })
  }

  // ── Auto-seed: fill each leveled child's week the first time it's viewed ──
  useEffect(() => {
    if (!loaded.current) return
    // Anchor to the fixed school-year start if somehow unset.
    if (!data.yearStart) {
      setData((d) => ({ ...d, yearStart: SCHOOL_YEAR_START }))
      return
    }
    const wk = schoolWeekFor(data.yearStart, data.breaks, weekStart)
    if (!wk) return
    const need = data.students.filter((s) => effLevel(s) && !(data.seeded || []).includes(`${weekStart}|${s.id}`))
    if (need.length === 0) return
    setData((d) => {
      let subjects = [...d.subjects], entries = [...d.entries]
      const seeded = [...(d.seeded || [])]
      need.forEach((s) => {
        const r = seedInto(subjects, entries, effLevel(s), s.id, wk, weekStart)
        subjects = r.subjects; entries = r.entries
        seeded.push(`${weekStart}|${s.id}`)
      })
      return { ...d, subjects, entries, seeded }
    })
  }, [weekStart, data.students, data.yearStart, data.seeded, data.breaks, effLevel])

  const openPlan = () => {
    setFill({ level: 'Year 6', studentId: data.students[0]?.id || '', week: currentWk || 1, rhythm: true, readings: true })
    setFillOpen(true)
  }
  const markWeekOne = () => setData((d) => ({ ...d, yearStart: weekStart }))

  const syncLabel = { saving: 'Saving…', saved: 'Synced', local: 'This device' }[sync] || 'This device'

  // ── Modal-derived options ──
  const modalSrc = entryModal && CURRICULA.find((c) => c.key === entryModal.src)
  const modalUnit = modalSrc?.units.find((u) => u.id === entryModal?.unitId)

  return (
    <div className="lp-root">
      <style>{CSS}</style>
      <TopNav />
      <div className="lp-wrap">
        <div className="lp-head">
          <div className="lp-title">Lesson Planner<small>Schola Domestica · weekly plan for your household</small></div>
          <span className={`lp-sync ${sync}`}>{syncLabel}</span>
        </div>

        {/* Students */}
        <div className="lp-section-lbl">Students</div>
        <div className="lp-students">
          {data.students.map((s) => (
            <button key={s.id} className="lp-chip" onClick={() => setStudentModal({ ...s })}>
              <span className="lp-dot" style={{ background: s.color }} />
              {s.name}{s.form ? <small>{s.form}</small> : null}
            </button>
          ))}
          <button className="lp-add-btn" onClick={() => setStudentModal({ name: '', form: '', color: STUDENT_COLORS[data.students.length % STUDENT_COLORS.length] })}>
            + Add student
          </button>
        </div>

        {/* Week nav */}
        <div className="lp-weekbar">
          <button className="lp-wk-btn" onClick={() => shiftWeek(-1)}>‹ Prev</button>
          <span className="lp-wk-label">{prettyWeek(weekStart)}</span>
          <button className="lp-wk-btn" onClick={() => shiftWeek(1)}>Next ›</button>
          {!isThisWeek && <button className="lp-wk-btn" onClick={() => setWeekStart(iso(mondayOf(new Date())))}>This week</button>}
          <button className="lp-wk-btn" style={{ marginLeft: 'auto', borderColor: '#6a5030', color: '#e8b84b' }}
                  onClick={openPlan}>
            ＋ Plan week
          </button>
          {isThisWeek && <span className="lp-today">● this week</span>}
        </div>

        <div className="lp-schoolwk">
          {isBreak ? (
            <>
              <span className="lp-break-badge">🌿 Break week</span>
              <span className="lp-sw-note">No lessons this week; later weeks shift forward.</span>
              <button className="lp-break-btn" onClick={() => setBreak(false)}>Resume schedule this week</button>
            </>
          ) : (
            <>
              School week:&nbsp;
              <select className="lp-wk-select" value={currentWk || ''} onChange={(e) => e.target.value && setSchoolWeek(Number(e.target.value))}>
                {!currentWk && <option value="">— set —</option>}
                {Array.from({ length: 36 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>Week {n}{termFor('Year 6', n) ? ` · Term ${termFor('Year 6', n).n}` : ''}</option>
                ))}
              </select>
              {currentWk
                ? <span className="lp-sw-note">Leveled children auto-fill each week. Set a child's level by clicking their name.</span>
                : <span className="lp-sw-note">Pick the week you're on — then leveled children fill automatically.</span>}
              <button className="lp-break-btn" onClick={() => setBreak(true)}>Insert break week</button>
            </>
          )}
        </div>

        {/* Grid */}
        {data.students.length === 0 && data.entries.length === 0 && (
          <p className="lp-empty">Add a student to begin, then tap <b>+</b> in any cell to plan a lesson — type it in, or drop in a lesson from your Wonders curriculum.</p>
        )}
        <div className="lp-gridwrap">
          <table className="lp-grid">
            <thead>
              <tr>
                <th style={{ textAlign: 'left', paddingLeft: 10 }}>Subject</th>
                {DAYS.map((d) => <th key={d}>{d}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.subjects.map((subj) => (
                <tr key={subj}>
                  <td className="lp-subj">{subj}<span className="x" title="Remove subject" onClick={() => removeSubject(subj)}>✕</span></td>
                  {DAYS.map((day) => (
                    <td key={day} className="lp-cell">
                      {cellEntries(subj, day).map((e) => {
                        const stu = e.studentId ? studentsById[e.studentId] : null
                        return (
                          <div key={e.id} className={`lp-entry${e.done ? ' done' : ''}`}
                               style={{ borderLeftColor: stu ? stu.color : '#6a5030' }}>
                            <input className="cb" type="checkbox" checked={e.done} onChange={() => toggleDone(e.id)} />
                            <span className="lab" style={{ cursor: 'pointer' }} title="Edit / move" onClick={() => setEditEntry(e)}>
                              <span className="who">{stu ? stu.name : 'All'}{e.min != null && <span className="min">{fmtMin(e.min)}{e.count === false ? '*' : ''}</span>}</span>
                              {e.label}
                            </span>
                            <span className="del" title="Remove" onClick={() => deleteEntry(e.id)}>✕</span>
                          </div>
                        )
                      })}
                      <button className="addcell" title="Add lesson" onClick={() => openEntry(subj, day)}>+</button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            {activeOwners.length > 0 && (
              <tfoot>
                <tr>
                  <td className="lp-subj" style={{ fontSize: 11, color: '#c9902a' }}>Seat time / day</td>
                  {DAYS.map((day) => (
                    <td key={day} className="lp-cell" style={{ background: '#160f07' }}>
                      {activeOwners.map((o) => {
                        const t = dayTotal(o.id, day)
                        return t > 0 ? (
                          <div key={String(o.id)} style={{ fontSize: 12, marginBottom: 2 }}>
                            <span style={{ display: 'inline-block', width: 9, height: 9, borderRadius: '50%', background: o.color, marginRight: 5 }} />
                            {o.name} <b style={{ color: '#e8dfc8' }}>{fmtMin(t)}</b>
                          </div>
                        ) : null
                      })}
                    </td>
                  ))}
                </tr>
              </tfoot>
            )}
          </table>
        </div>
        <div className="lp-addsubj">
          <button className="lp-add-btn" onClick={addSubject}>+ Add subject row</button>
        </div>
        {activeOwners.length > 0 && (
          <div className="lp-weektot">
            {activeOwners.map((o) => {
              const wt = weekTotal(o.id)
              return (
                <span key={String(o.id)} className="lp-wt">
                  <span className="lp-dot" style={{ background: o.color }} />
                  {o.name}: <b>{fmtMin(wt)}/week</b> <span className="lp-wt-avg">≈ {fmtMin(Math.round(wt / 5))}/day</span>
                </span>
              )
            })}
            <span className="lp-wt-note">* not counted toward seat time (outdoor / afternoon)</span>
          </div>
        )}
      </div>

      {/* Student modal */}
      {studentModal && (
        <div className="lp-ov" onClick={(e) => e.target === e.currentTarget && setStudentModal(null)}>
          <div className="lp-modal">
            <h3>{studentModal.id ? 'Edit student' : 'Add student'}</h3>
            <div className="sub">Name and (optionally) their form or grade level.</div>
            <div className="lp-field">
              <label>Name</label>
              <input className="lp-input" autoFocus value={studentModal.name}
                     onChange={(e) => setStudentModal({ ...studentModal, name: e.target.value })}
                     onKeyDown={(e) => e.key === 'Enter' && saveStudent()} />
            </div>
            <div className="lp-field">
              <label>Form / level (optional)</label>
              <input className="lp-input" placeholder="e.g. Form IA · age 8" value={studentModal.form}
                     onChange={(e) => setStudentModal({ ...studentModal, form: e.target.value })} />
            </div>
            <div className="lp-field">
              <label>Curriculum level (auto-fills their week)</label>
              <select className="lp-select" value={studentModal.level || ''}
                      onChange={(e) => setStudentModal({ ...studentModal, level: e.target.value })}>
                <option value="">Auto — infer from Form{guessLevel(studentModal.form) ? ` (${guessLevel(studentModal.form)})` : ' (none)'}</option>
                <option value="Year 6">Year 6</option>
                <option value="Year 3">Year 3</option>
                <option value="none">None — don't auto-fill</option>
              </select>
            </div>
            <div className="lp-field">
              <label>Colour</label>
              <div className="lp-colors">
                {STUDENT_COLORS.map((c) => (
                  <button key={c} className={studentModal.color === c ? 'on' : ''} style={{ background: c }}
                          onClick={() => setStudentModal({ ...studentModal, color: c })} />
                ))}
              </div>
            </div>
            <div className="lp-actions">
              {studentModal.id
                ? <button className="lp-btn danger" onClick={() => deleteStudent(studentModal.id)}>Remove</button>
                : <span />}
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="lp-btn ghost" onClick={() => setStudentModal(null)}>Cancel</button>
                <button className="lp-btn" onClick={saveStudent}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Entry modal */}
      {entryModal && (
        <div className="lp-ov" onClick={(e) => e.target === e.currentTarget && setEntryModal(null)}>
          <div className="lp-modal">
            <h3>Plan a lesson</h3>
            <div className="sub">{entryModal.subject} · {entryModal.day}</div>
            <div className="lp-field">
              <label>For whom</label>
              <select className="lp-select" value={entryModal.studentId}
                      onChange={(e) => setEntryModal({ ...entryModal, studentId: e.target.value })}>
                <option value="">All students (together)</option>
                {data.students.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="lp-seg">
              <button className={entryModal.mode === 'text' ? 'on' : ''} onClick={() => setEntryModal({ ...entryModal, mode: 'text' })}>Type it in</button>
              <button className={entryModal.mode === 'curriculum' ? 'on' : ''} onClick={() => setEntryModal({ ...entryModal, mode: 'curriculum' })}>From curriculum</button>
            </div>
            {entryModal.mode === 'text' ? (
              <div className="lp-field">
                <label>What to do</label>
                <input className="lp-input" autoFocus value={entryModal.text}
                       onChange={(e) => setEntryModal({ ...entryModal, text: e.target.value })}
                       onKeyDown={(e) => e.key === 'Enter' && saveEntry()}
                       placeholder="e.g. Saxon 54, Lesson 77" />
              </div>
            ) : (
              <>
                <div className="lp-field">
                  <label>Curriculum</label>
                  <select className="lp-select" value={entryModal.src}
                          onChange={(e) => setEntryModal({ ...entryModal, src: e.target.value, unitId: '', lessonId: '' })}>
                    {CURRICULA.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
                  </select>
                </div>
                <div className="lp-field">
                  <label>Unit</label>
                  <select className="lp-select" value={entryModal.unitId}
                          onChange={(e) => setEntryModal({ ...entryModal, unitId: e.target.value, lessonId: '' })}>
                    <option value="">Choose a unit…</option>
                    {modalSrc?.units.map((u) => <option key={u.id} value={u.id}>{u.icon ? u.icon + ' ' : ''}{u.title}</option>)}
                  </select>
                </div>
                <div className="lp-field">
                  <label>Lesson</label>
                  <select className="lp-select" value={entryModal.lessonId} disabled={!modalUnit}
                          onChange={(e) => setEntryModal({ ...entryModal, lessonId: e.target.value })}>
                    <option value="">{modalUnit ? 'Choose a lesson…' : 'Pick a unit first'}</option>
                    {modalUnit?.lessons.map((l) => <option key={l.id} value={l.id}>{l.id} · {l.title}</option>)}
                  </select>
                </div>
              </>
            )}
            <div className="lp-actions">
              <span />
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="lp-btn ghost" onClick={() => setEntryModal(null)}>Cancel</button>
                <button className="lp-btn" onClick={saveEntry}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plan-week modal */}
      {fillOpen && (() => {
        const term = termFor(fill.level, fill.week)
        const lvl = LEVELS[fill.level]
        const readingCount = lvl?.weeks?.[fill.week]?.length || 0
        const suggested = weekNumFor(data.yearStart, weekStart)
        return (
          <div className="lp-ov" onClick={(e) => e.target === e.currentTarget && setFillOpen(false)}>
            <div className="lp-modal">
              <h3>Plan a week</h3>
              <div className="sub">Drops the daily/weekly rhythm and this school week's readings into {prettyWeek(weekStart)} for one child. Re-running replaces that child's seeded items; anything you typed by hand stays.</div>

              <div className="lp-field">
                <label>Level</label>
                <select className="lp-select" value={fill.level}
                        onChange={(e) => setFill({ ...fill, level: e.target.value })}>
                  {Object.keys(LEVELS).map((k) => <option key={k} value={k}>{k}</option>)}
                </select>
              </div>

              <div className="lp-field">
                <label>For whom</label>
                <select className="lp-select" value={fill.studentId}
                        onChange={(e) => setFill({ ...fill, studentId: e.target.value })}>
                  <option value="">All students (together)</option>
                  {data.students.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>

              <div className="lp-field">
                <label>School week (1–36)</label>
                <select className="lp-select" value={fill.week}
                        onChange={(e) => setFill({ ...fill, week: Number(e.target.value) })}>
                  {Array.from({ length: 36 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>Week {n}{termFor(fill.level, n) ? ` · Term ${termFor(fill.level, n).n}` : ''}{suggested === n ? ' · (this calendar week)' : ''}</option>
                  ))}
                </select>
                <div style={{ marginTop: 6, fontSize: 12, color: '#9e8c72' }}>
                  {data.yearStart
                    ? <>Week 1 is set to {prettyWeek(data.yearStart)}. <span style={{ color: '#c9902a', cursor: 'pointer' }} onClick={markWeekOne}>Reset week 1 to this calendar week</span></>
                    : <span style={{ color: '#c9902a', cursor: 'pointer' }} onClick={markWeekOne}>Mark this calendar week as school week 1 (auto-numbers future weeks)</span>}
                </div>
              </div>

              {term && (
                <div style={{ background: '#0e0b07', border: '1px solid #2a1e10', borderRadius: 5, padding: '8px 10px', marginBottom: 12, fontSize: 13 }}>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#c9902a', marginBottom: 3 }}>Term {term.n} focus</div>
                  <div><b>Poetry:</b> {term.poetry}</div>
                  <div style={{ marginTop: 2 }}><b>Geography:</b> {term.geo}</div>
                </div>
              )}

              <div className="lp-field">
                <label>Include</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Crimson Pro',serif", textTransform: 'none', letterSpacing: 0, color: '#e8dfc8', fontSize: 14, marginBottom: 4 }}>
                  <input type="checkbox" checked={fill.rhythm} onChange={(e) => setFill({ ...fill, rhythm: e.target.checked })} />
                  Daily &amp; weekly rhythm
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Crimson Pro',serif", textTransform: 'none', letterSpacing: 0, color: '#e8dfc8', fontSize: 14 }}>
                  <input type="checkbox" checked={fill.readings} onChange={(e) => setFill({ ...fill, readings: e.target.checked })} />
                  Week {fill.week} readings ({readingCount} items)
                </label>
              </div>

              {fill.level === 'Year 3' && lvl.freeRead && (
                <div style={{ fontSize: 12, color: '#9e8c72', fontStyle: 'italic', marginBottom: 12 }}>
                  Free-reading shelf: {lvl.freeRead}
                </div>
              )}

              <div className="lp-actions">
                <span />
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="lp-btn ghost" onClick={() => setFillOpen(false)}>Cancel</button>
                  <button className="lp-btn" onClick={planWeek}>Fill week</button>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Entry editor: move day / minutes / count / done / delete */}
      {editEntry && (() => {
        const e = data.entries.find((x) => x.id === editEntry.id) || editEntry
        const stu = e.studentId ? studentsById[e.studentId] : null
        return (
          <div className="lp-ov" onClick={(ev) => ev.target === ev.currentTarget && setEditEntry(null)}>
            <div className="lp-modal">
              <h3>{e.subject}</h3>
              <div className="sub">{stu ? stu.name : 'All students'}</div>
              <div className="lp-field">
                <label>Reading / what to do</label>
                <input className="lp-input" autoFocus value={e.label || ''}
                       placeholder="e.g. The Hobbit ch 2"
                       onChange={(ev) => { updateEntry(e.id, { label: ev.target.value, seed: false }); setEditEntry({ ...e, label: ev.target.value, seed: false }) }} />
              </div>
              <div className="lp-field">
                <label>Subject / row</label>
                <select className="lp-select" value={e.subject}
                        onChange={(ev) => { updateEntry(e.id, { subject: ev.target.value, seed: false }); setEditEntry({ ...e, subject: ev.target.value, seed: false }) }}>
                  {data.subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="lp-field">
                <label>Day</label>
                <select className="lp-select" value={e.day}
                        onChange={(ev) => { updateEntry(e.id, { day: ev.target.value }); setEditEntry({ ...e, day: ev.target.value }) }}>
                  {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="lp-field">
                <label>Week</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button className="lp-btn ghost" style={{ padding: '6px 10px' }} onClick={() => shiftEntryWeek(e, -7)}>◀</button>
                  <span style={{ fontSize: 13, minWidth: 130, textAlign: 'center' }}>{prettyWeek(e.week)}</span>
                  <button className="lp-btn ghost" style={{ padding: '6px 10px' }} onClick={() => shiftEntryWeek(e, 7)}>▶</button>
                </div>
                {e.week !== weekStart && (
                  <div style={{ fontSize: 12, color: '#9e8c72', marginTop: 5 }}>
                    Moved out of the week you're viewing.{' '}
                    <span style={{ color: '#c9902a', cursor: 'pointer' }} onClick={() => { setWeekStart(e.week); setEditEntry(null) }}>Go to that week →</span>
                  </div>
                )}
              </div>
              <div className="lp-field">
                <label>Minutes</label>
                <input className="lp-input" type="number" min="0" step="5" value={e.min ?? 15}
                       onChange={(ev) => { const v = Number(ev.target.value); updateEntry(e.id, { min: v }); setEditEntry({ ...e, min: v }) }} />
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#e8dfc8', marginBottom: 6 }}>
                <input type="checkbox" checked={e.count !== false}
                       onChange={(ev) => { updateEntry(e.id, { count: ev.target.checked }); setEditEntry({ ...e, count: ev.target.checked }) }} />
                Count toward seat time
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#e8dfc8' }}>
                <input type="checkbox" checked={!!e.done}
                       onChange={(ev) => { updateEntry(e.id, { done: ev.target.checked }); setEditEntry({ ...e, done: ev.target.checked }) }} />
                Done
              </label>
              <div className="lp-actions">
                <button className="lp-btn danger" onClick={() => { deleteEntry(e.id); setEditEntry(null) }}>Remove</button>
                <button className="lp-btn" onClick={() => setEditEntry(null)}>Done</button>
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
