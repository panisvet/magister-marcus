#!/usr/bin/env node
// Render-driven audit for the authored curricula in via-latina/src/data.
// Checks: duplicate ids, week-sequence gaps, missing/empty fields that the
// page components render, local asset references vs public/, image URL
// compatibility with the /img proxy (wikimedia-only), resource link sanity.
// Run from via-latina/: node audit_curricula.mjs
import { readdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

const errors = [], warnings = []
const err = (m) => errors.push(m)
const warn = (m) => warnings.push(m)

const PUB = 'public'
const pubExists = (p) =>
  existsSync(join(PUB, decodeURIComponent(p.replace(/^\//, '').split('#')[0])))

function checkSeq(name, items, key = 'week') {
  const ids = new Map()
  for (const it of items) {
    if (ids.has(it.id)) err(`${name}: duplicate id ${it.id}`)
    ids.set(it.id, 1)
  }
  const weeks = items.map(i => i[key]).filter(w => typeof w === 'number').sort((a, b) => a - b)
  for (let w = weeks[0]; w <= weeks[weeks.length - 1]; w++)
    if (!weeks.includes(w)) warn(`${name}: no lesson carries ${key} ${w} (gap)`)
}

function req(name, l, fields) {
  for (const f of fields) {
    const v = l[f]
    if (v === undefined || v === null || (typeof v === 'string' && !v.trim()) ||
        (Array.isArray(v) && v.length === 0))
      err(`${name} ${l.id ?? '?'} "${(l.title ?? '').slice(0, 30)}": missing/empty ${f}`)
  }
}

// ── Magister Historia ────────────────────────────────────────────────────────
const { HISTORIA_UNITS, NOTEBOOKING_PAGES } = await import('./src/data/historia.js')
{
  const all = HISTORIA_UNITS.flatMap(u => u.lessons)
  checkSeq('historia', all)
  // notebooking field is prose like "NB Page 3 (Mayflower Compact)…" —
  // page numbers are per-unit indexes into NOTEBOOKING_PAGES
  const perUnit = {}
  for (const n of NOTEBOOKING_PAGES ?? []) (perUnit[n.unit] ??= []).push(n)
  for (const u of HISTORIA_UNITS) for (const l of u.lessons) {
    req('historia', l, ['id', 'week', 'type', 'title', 'objective', 'opening', 'storiesForHeart'])
    for (const r of l.readAloud ?? [])
      if (r.link && !/^https?:\/\//.test(r.link)) err(`historia ${l.id}: readAloud link not a URL: ${r.link}`)
    const prose = [].concat(l.notebooking ?? []).join(' ')
    for (const m of prose.matchAll(/NB Page (\d+)/g)) {
      const n = Number(m[1])
      if (n < 1 || n > (perUnit[u.id]?.length ?? 0))
        err(`historia ${l.id}: references NB Page ${n} but unit ${u.id} has ${perUnit[u.id]?.length ?? 0} pages`)
    }
  }
  for (const n of NOTEBOOKING_PAGES ?? [])
    if (n.file && !pubExists(`/images/notebooking/${n.file}`))
      err(`historia notebooking ${n.id}: missing asset /images/notebooking/${n.file}`)
  console.log(`historia: ${all.length} lessons, ${(NOTEBOOKING_PAGES ?? []).length} notebooking pages`)
}

// ── Magister Artis ───────────────────────────────────────────────────────────
const { ART_UNITS } = await import('./src/data/artLessons.js')
{
  const all = ART_UNITS.flatMap(u => u.lessons ?? u)
  checkSeq('artis', all)
  for (const l of all) {
    req('artis', l, ['id', 'week', 'type', 'title', 'artist', 'period', 'kq', 'disc'])
    if (l.type !== 'HISTORY & CONTEXT') req('artis', l, ['work', 'workUrl'])
    for (const [u, tag] of [[l.workUrl, 'workUrl'], [l.workUrl2, 'workUrl2']]) {
      if (!u) continue
      if (!/^https:\/\//.test(u)) err(`artis ${l.id}: ${tag} not https: ${u.slice(0, 60)}`)
      else if (!u.startsWith('https://upload.wikimedia.org/'))
        warn(`artis ${l.id}: ${tag} not on upload.wikimedia.org — the /img proxy only allows wikimedia, image may be blocked: ${u.slice(0, 70)}`)
    }
    if (l.type === 'COMPARISON' && !(l.work2 && l.workUrl2))
      err(`artis ${l.id}: COMPARISON lesson missing work2/workUrl2`)
    if (l.workUrl2 && l.workUrl2 === l.workUrl)
      err(`artis ${l.id}: workUrl and workUrl2 are the same image — comparison shows one painting twice`)
    for (const r of l.resources ?? [])
      if (r.url && !/^https?:\/\//.test(r.url)) err(`artis ${l.id}: resource url invalid: ${r.url}`)
  }
  console.log(`artis: ${all.length} lessons`)
}

// ── Schola Cantorum ──────────────────────────────────────────────────────────
const { ALL_LESSONS, YEARS } = await import('./src/data/schola-cantorum.js')
{
  checkSeq('cantorum', ALL_LESSONS)
  for (const l of ALL_LESSONS) {
    req('cantorum', l, ['id', 'week', 'title', 'session'])
    for (const m of l.materials ?? []) {
      const f = typeof m === 'string' ? m : m.file
      if (f && f.startsWith('/') && !pubExists(f)) err(`cantorum ${l.id}: missing asset ${f}`)
    }
  }
  console.log(`cantorum: ${ALL_LESSONS.length} lessons, ${(YEARS ?? []).length} years`)
}

// ── Lesson Viewer (lessons.js) ───────────────────────────────────────────────
const { UNITS } = await import('./src/data/lessons.js')
{
  const all = UNITS.flatMap(u => u.lessons ?? [])
  checkSeq('lesson-viewer', all)
  for (const l of all) req('lesson-viewer', l, ['id', 'week', 'title'])
  console.log(`lesson-viewer: ${all.length} lessons in ${UNITS.length} units`)
}

// ── Local asset references hardcoded in pages & data ────────────────────────
{
  const files = ['src/pages/ScholaCantorum.jsx', 'src/pages/MagisterNatura.jsx',
    'src/pages/RegentNikolay.jsx', 'src/pages/LessonViewer.jsx', 'src/pages/MagisterHistoria.jsx',
    'src/data/schola-cantorum.js', 'src/data/lessons.js', 'src/data/historia.js',
    'src/data/tones.js', 'src/data/openingExercises.js', 'src/data/closingExercises.js']
  const seen = new Set()
  for (const f of files) {
    if (!existsSync(f)) continue
    const txt = readFileSync(f, 'utf8')
    for (const m of txt.matchAll(/["'](\/(?:scores|worksheets|images|audio|icons|app-icons)\/[^"']+)["']/g)) {
      const p = m[1]
      if (seen.has(p)) continue
      seen.add(p)
      if (!pubExists(p)) err(`asset referenced in ${f} missing from public/: ${p}`)
    }
  }
  console.log(`asset refs checked: ${seen.size}`)
}

console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)`)
for (const e of errors) console.log('  ERROR  ', e)
for (const w of warnings) console.log('  WARNING', w)
process.exit(errors.length ? 1 : 0)
