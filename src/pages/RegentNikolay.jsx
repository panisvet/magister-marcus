// ─────────────────────────────────────────────────────────────────────────────
// src/pages/RegentNikolay.jsx
//
// Regent Nikolay — chat tutor for Russian Orthodox choral tradition + solfège.
// Sister to Magister Marcus (Latin) and Magister Natura (nature study).
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react';
import TopNav from '../components/TopNav.jsx';

// ── Score library ────────────────────────────────────────────────────────────
// Paths reference public/. If a file isn't there yet the link 404s — drop the
// PDF from the shared folders into the matching subdirectory.
const LIBRARY = {
  obikhod: {
    label: 'Obikhod · Восемь гласов',
    sub: 'OCA Obikhod · Lord I Call · Troparion · Prokeimenon',
    items: Array.from({ length: 8 }, (_, i) => {
      const n = i + 1;
      return [
        { key: `obi-li-${n}`, label: `Tone ${n} · Lord I Call`,   pdf: `/scores/Tone${n}_LordICall_Obikhod_TT.pdf`,   tone: n, kind: 'Lord I Call' },
        { key: `obi-tr-${n}`, label: `Tone ${n} · Troparion`,     pdf: `/scores/Tone${n}_Troparion_Obikhod_TT.pdf`,   tone: n, kind: 'Troparion'  },
        { key: `obi-pr-${n}`, label: `Tone ${n} · Prokeimenon`,   pdf: `/scores/Tone${n}_Prokeimenon.pdf`,            tone: n, kind: 'Prokeimenon' },
      ];
    }).flat(),
  },
  dogmatika: {
    label: 'Dogmatika · Unison',
    sub: 'All eight tones · unison · no marks',
    items: Array.from({ length: 8 }, (_, i) => {
      const n = i + 1;
      return { key: `dog-${n}`, label: `Tone ${n} Dogmatikon`, pdf: `/scores/Dogmatikon_unis_T${n}_-_no_marks.pdf`, tone: n, kind: 'Dogmatikon' };
    }),
  },
  tropars: {
    label: 'Sunday Tropars',
    sub: 'Obikhod · Kievan · Abbreviated · Greek',
    items: [
      { key: 'tr1-b',  label: 'Tone 1 · Unison (with bridge)',     pdf: '/scores/T1_Sunday_Tropar_unis_bridge_no_marks.pdf' },
      { key: 'tr1-nb', label: 'Tone 1 · Unison (no bridge)',       pdf: '/scores/T1_Sunday_Tropar_unis_no_bridge_-_no_marks.pdf' },
    ],
  },
  pitch: {
    label: 'Pitch · Intervals',
    sub: 'Solfège tables + interval supplements with audio',
    items: [
      { key: 'sf-c',  label: 'Solfège · C major',  pdf: '/scores/C_Major_solfege_table.pdf' },
      { key: 'sf-g',  label: 'Solfège · G major',  pdf: '/scores/G_Major_solfege_table.pdf' },
      { key: 'sf-d',  label: 'Solfège · D major',  pdf: '/scores/D_Major_solfege_table.pdf' },
      { key: 'sf-f',  label: 'Solfège · F major',  pdf: '/scores/F_Major_solfege_table.pdf' },
      { key: 'sf-am', label: 'Solfège · A minor',  pdf: '/scores/A_minor_solfege_table.pdf' },
      { key: 'sf-dm', label: 'Solfège · D minor',  pdf: '/scores/D_minor_solfege_table.pdf' },
      { key: 'sf-em', label: 'Solfège · E minor',  pdf: '/scores/E_minor_solfege_table.pdf' },
      { key: 'sf-gm', label: 'Solfège · G minor',  pdf: '/scores/G_minor_solfege_table.pdf' },
      { key: 'ps-52', label: 'Intervals in C major (5.2)', pdf: '/scores/Pitch_Supplement_5.2-1_-_Intervals_in_C_Major.pdf', audio: '/audio/ps_5.2_intro.mp3' },
      { key: 'ps-71', label: 'Intervals in F major (7.1)', pdf: '/scores/Pitch_Supplement_7.1_1_-_Intervals_in_F_Major_with_SOL-FA.pdf', audio: '/audio/ps_7.1_intro.mp3' },
      { key: 'ps-81', label: 'Intervals in G major (8.1)', pdf: '/scores/Pitch_Supplements_8.1.1-4.pdf' },
      { key: 'ps-91', label: 'Intervals in D major (9.1)', pdf: '/scores/Pitch_Supplements_9.1.1_thru_4.pdf' },
    ],
  },
};

const STAGES = [
  { key: 'novice',    label: 'Just starting',        sub: 'Reading music is new' },
  { key: 'solfege',   label: 'Can read solfège',     sub: 'Comfortable with do-re-mi' },
  { key: 'chorister', label: 'Sings in choir',       sub: 'Wants to learn tones and rules' },
  { key: 'reader',    label: 'Reader / sub-regent',  sub: 'Leading services, refining' },
];

const SOLFA = [
  { syl: 'Do',  freq: 261.63 },   // C4
  { syl: 'Re',  freq: 293.66 },
  { syl: 'Mi',  freq: 329.63 },
  { syl: 'Fa',  freq: 349.23 },
  { syl: 'Sol', freq: 392.00 },
  { syl: 'La',  freq: 440.00 },
  { syl: 'Ti',  freq: 493.88 },
  { syl: 'Do′', freq: 523.25 },
];

const VOICE_PARTS = ['Soprano', 'Alto', 'Tenor', 'Bass'];

// ── System prompt ────────────────────────────────────────────────────────────
function buildSystem(stage, voicePart, activeScore) {
  const stageDesc = {
    novice:    'a beginner — reading music notation is new. Use very plain English. One concept at a time. Never assume.',
    solfege:   'comfortable with solfège (do-re-mi) but new to the tones. Connect everything to what they already know.',
    chorister: 'an active church singer. Knows the basics. Wants the *rules* of the eight tones — formulas, finals, ranges, where the melodies actually go.',
    reader:    'an advanced reader or sub-regent. Engage at peer level. Discuss variants (Obikhod / Kievan / Greek / Moscow), psalm-tone formulas, melodic adaptations to long and short texts.',
  }[stage] || '';

  return `You are REGENT NIKOLAY, an experienced Russian Orthodox choir director (регент). You teach church singing the way a regent would: practically, from the choir stall, with the singers in front of you.

Your singer is ${stageDesc}
Their voice part is **${voicePart}** — keep that in mind when discussing ranges and which notes they sing.
${activeScore ? `\nThey have the following score loaded: **${activeScore.label}**. Refer to it directly. Walk them through it phrase by phrase.\n` : ''}
TRADITION YOU TEACH:
- Russian Orthodox Obikhod (the everyday parish repertoire) as the spine.
- The Octoechos — eight tones — for Sunday Vespers and Matins.
- AOCS-style sight-singing fundamentals: rhythm first, then pitch, then form analysis.
- Stylistic variants: Obikhod (default), Kievan, Greek, Moscow Synodal, KPL — name them when relevant.

HOW YOU TEACH:
1. Start every new piece by establishing the **starting pitch** and the **tone**. Tell the singer to use the conductor's pitch buttons on the right to hear and match.
2. Sing through the **melodic formula** of the tone first (the recurring pattern), then apply it to the text.
3. Use Russian/Slavonic phrases sparingly with translation: *Внимание!* (Attention!), *Господи помилуй* (Lord have mercy), *Со страхом Божиим* (With the fear of God).
4. When teaching solfège, default to movable Do.
5. Correct *kindly* but precisely — singers need confidence. Praise specific things ("good — your fifth was clean").
6. Suggest concrete warm-ups before hard passages.
7. End each exchange with one clear next action: "Try it three times" / "Open Tone 4 Troparion" / "Sing Do-Mi-Sol, then back".

FORMAT: keep responses focused. No flowery introductions. Use **bold** for key terms and Russian/Slavonic. Use numbered lists for step-by-step drills only.

Address the singer respectfully. When they get something right, say so simply.`;
}

// ── Styles ──────────────────────────────────────────────────────────────────
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Cinzel:wght@400;600&display=swap');

:root {
  --rn-bg: #0d1828;
  --rn-bg2: #122035;
  --rn-navy: #1A3A5C;
  --rn-navy2: #1e4a70;
  --rn-gold: #c9a84c;
  --rn-gold2: #e8c87a;
  --rn-gold3: #f5e0a8;
  --rn-parch: #f5edd8;
  --rn-parch-dim: #e8dfc8;
  --rn-stone: #9e8c72;
  --rn-red: #8b1a1a;
  --rn-green: #2a6a3a;
}

.rn-root *{box-sizing:border-box;margin:0;padding:0;}
.rn-root{
  font-family:'Crimson Pro',Georgia,serif;
  background:var(--rn-bg);
  color:var(--rn-parch);
  height:100vh;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}
.rn-shell{
  display:grid;
  height:calc(100vh - 40px);
  margin-top:40px;
  grid-template-columns:260px 1fr 240px;
  grid-template-rows:auto 1fr auto;
  grid-template-areas:
    "lib head stand"
    "lib chat stand"
    "lib bar  stand";
  background:
    radial-gradient(ellipse 80% 60% at 30% 10%, #1a2e4855, transparent),
    radial-gradient(ellipse 50% 50% at 80% 90%, #0e1a2855, transparent),
    var(--rn-bg);
}

/* ─── Library (left) ─── */
.rn-lib{
  grid-area:lib;
  background:linear-gradient(180deg,#0a1422,#0e1a2a);
  border-right:1px solid #c9a84c33;
  overflow-y:auto;
}
.rn-lib::-webkit-scrollbar{width:5px;}
.rn-lib::-webkit-scrollbar-thumb{background:#c9a84c33;}
.rn-lib-brand{padding:14px 14px 11px;border-bottom:1px solid #c9a84c22;text-align:center;}
.rn-lib-brand-icon{font-family:'Cormorant',serif;font-size:1.9rem;color:var(--rn-gold2);text-shadow:0 0 18px #c9a84c44;line-height:1;}
.rn-lib-brand-title{font-family:'Cinzel',serif;font-size:.78rem;letter-spacing:.18em;color:var(--rn-gold);text-transform:uppercase;margin-top:3px;}
.rn-lib-brand-sub{font-family:'Crimson Pro',serif;font-style:italic;font-size:.72rem;color:var(--rn-stone);margin-top:1px;}

.rn-lib-group{padding:8px 10px 4px;border-bottom:1px solid #c9a84c14;}
.rn-lib-group-label{font-family:'Cinzel',serif;font-size:.56rem;letter-spacing:.18em;color:var(--rn-gold);text-transform:uppercase;margin-bottom:2px;}
.rn-lib-group-sub{font-family:'Crimson Pro',serif;font-style:italic;font-size:.66rem;color:var(--rn-stone);margin-bottom:5px;}

.rn-lib-item{
  display:block;width:100%;text-align:left;
  padding:5px 9px;margin-bottom:2px;
  background:transparent;border:none;border-left:2px solid transparent;
  cursor:pointer;color:var(--rn-parch-dim);
  font-family:'Crimson Pro',serif;font-size:.78rem;line-height:1.35;
  transition:all .14s;border-radius:0 3px 3px 0;
}
.rn-lib-item:hover{background:#c9a84c0d;border-left-color:var(--rn-gold);color:var(--rn-gold2);}
.rn-lib-item.active{background:#c9a84c22;border-left-color:var(--rn-gold2);color:var(--rn-gold3);}

/* ─── Header (top center) ─── */
.rn-head{
  grid-area:head;
  border-bottom:1px solid #c9a84c33;
  padding:9px 18px;
  display:flex;align-items:center;justify-content:space-between;gap:14px;
  background:linear-gradient(180deg,#122035cc,#122035aa);
}
.rn-head-title{font-family:'Cormorant',serif;font-size:1.05rem;color:var(--rn-gold2);letter-spacing:.04em;}
.rn-head-sub{font-family:'Crimson Pro',serif;font-style:italic;font-size:.78rem;color:var(--rn-stone);margin-top:1px;}
.rn-head-meta{display:flex;align-items:center;gap:8px;}
.rn-stage-sel,.rn-voice-sel{
  font-family:'Crimson Pro',serif;font-size:.78rem;
  background:#0e1a28;color:var(--rn-parch);
  border:1px solid #c9a84c44;border-radius:2px;
  padding:4px 8px;cursor:pointer;outline:none;
}
.rn-stage-sel:focus,.rn-voice-sel:focus{border-color:var(--rn-gold);}

/* ─── Chat (center) ─── */
.rn-chat{
  grid-area:chat;
  overflow-y:auto;
  padding:14px 22px;
  display:flex;flex-direction:column;gap:13px;
  scroll-behavior:smooth;
}
.rn-chat::-webkit-scrollbar{width:4px;}
.rn-chat::-webkit-scrollbar-thumb{background:#c9a84c33;border-radius:3px;}

.rn-msg{display:flex;gap:10px;animation:rnIn .3s ease both;}
.rn-msg.user{flex-direction:row-reverse;}
@keyframes rnIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

.rn-av{
  width:34px;height:34px;flex-shrink:0;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:'Cinzel',serif;font-size:.62rem;font-weight:700;
  border:1.5px solid var(--rn-gold);
  background:radial-gradient(circle,#1e3a5a,#0e1a28);
  color:var(--rn-gold2);
  box-shadow:0 2px 8px #c9a84c22;
}
.rn-msg.user .rn-av{
  border-color:#5a7a4a;color:#9abacc;
  background:radial-gradient(circle,#1e3a5a,#0e1a28);
}

.rn-bub{max-width:78%;padding:11px 15px;font-size:.96rem;line-height:1.65;color:var(--rn-parch);}
.rn-msg.assistant .rn-bub{
  background:linear-gradient(135deg,#1a2e4844,#122035aa);
  border:1px solid #c9a84c2a;border-left:3px solid var(--rn-gold);
  border-radius:0 5px 5px 0;
  box-shadow:0 3px 14px rgba(0,0,0,.4);
}
.rn-msg.user .rn-bub{
  background:linear-gradient(135deg,#1e2a3a44,#162234aa);
  border:1px solid #5a7a4a3a;border-right:3px solid #5a7a4a;
  border-radius:5px 0 0 5px;text-align:right;
}
.rn-lbl{display:block;font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.2em;text-transform:uppercase;color:var(--rn-stone);margin-bottom:5px;}
.rn-bub strong{color:var(--rn-gold2);font-weight:600;}
.rn-bub em{color:var(--rn-parch-dim);font-style:italic;}
.rn-bub p{margin-bottom:6px;}
.rn-bub p:last-child{margin-bottom:0;}
.rn-bub ol,.rn-bub ul{margin:4px 0 4px 18px;}
.rn-bub li{margin-bottom:3px;}

.rn-dots span{display:inline-block;width:5px;height:5px;background:var(--rn-gold);border-radius:50%;margin:0 2px;animation:rnBounce 1.2s infinite;}
.rn-dots span:nth-child(2){animation-delay:.2s;}
.rn-dots span:nth-child(3){animation-delay:.4s;}
@keyframes rnBounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}

/* ─── Input bar (bottom center) ─── */
.rn-bar{
  grid-area:bar;
  padding:9px 18px 12px;
  border-top:1px solid #c9a84c22;
  display:flex;flex-direction:column;gap:6px;
}
.rn-quick{display:flex;flex-wrap:wrap;gap:5px;}
.rn-qbtn{
  font-family:'Crimson Pro',serif;font-size:.78rem;font-style:italic;
  color:var(--rn-stone);
  background:#c9a84c0d;border:1px solid #c9a84c2a;border-radius:2px;
  padding:2px 9px;cursor:pointer;transition:all .14s;
}
.rn-qbtn:hover{color:var(--rn-parch);background:#c9a84c1a;border-color:var(--rn-gold);}
.rn-input-row{display:flex;gap:6px;align-items:flex-end;}
.rn-inp{
  flex:1;font-family:'Crimson Pro',serif;font-size:.95rem;color:var(--rn-parch);
  background:#0e1a2844;border:1px solid #c9a84c33;border-bottom:2px solid var(--rn-gold);
  border-radius:2px;padding:8px 11px;outline:none;resize:none;
  min-height:38px;max-height:100px;line-height:1.5;
}
.rn-inp:focus{border-color:var(--rn-gold2);box-shadow:0 0 0 3px #c9a84c1a;}
.rn-inp::placeholder{color:var(--rn-stone);font-style:italic;}
.rn-send{
  font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.12em;font-weight:600;
  color:#0e1a28;background:linear-gradient(135deg,var(--rn-gold3),var(--rn-gold));
  border:none;border-radius:2px;padding:0 16px;height:38px;cursor:pointer;
  white-space:nowrap;box-shadow:0 2px 9px #c9a84c44;transition:all .14s;
}
.rn-send:hover:not(:disabled){background:linear-gradient(135deg,#fce5a8,var(--rn-gold2));transform:translateY(-1px);}
.rn-send:disabled{opacity:.45;cursor:not-allowed;transform:none;}

/* ─── Conductor's stand (right) ─── */
.rn-stand{
  grid-area:stand;
  background:linear-gradient(180deg,#0a1422,#0e1a2a);
  border-left:1px solid #c9a84c33;
  display:flex;flex-direction:column;
  padding:14px 12px;gap:14px;
  overflow-y:auto;
}
.rn-stand::-webkit-scrollbar{width:5px;}
.rn-stand::-webkit-scrollbar-thumb{background:#c9a84c33;}
.rn-stand-title{
  font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.2em;
  color:var(--rn-gold);text-transform:uppercase;
  border-bottom:1px solid #c9a84c22;padding-bottom:6px;
}
.rn-pitch-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;}
.rn-pitch{
  font-family:'Cormorant',serif;font-size:.85rem;font-weight:600;
  color:var(--rn-gold2);
  background:#1a2e48;border:1px solid #c9a84c44;border-radius:3px;
  padding:8px 0;cursor:pointer;transition:all .14s;
}
.rn-pitch:hover{background:#1e4a70;border-color:var(--rn-gold);color:var(--rn-gold3);}
.rn-pitch.playing{background:var(--rn-gold);color:#0e1a28;border-color:var(--rn-gold3);}
.rn-octave-row{display:flex;gap:5px;margin-top:6px;}
.rn-octave-btn{
  flex:1;font-family:'Crimson Pro',serif;font-size:.7rem;font-style:italic;
  color:var(--rn-stone);background:transparent;border:1px solid #c9a84c33;
  border-radius:2px;padding:4px 0;cursor:pointer;
}
.rn-octave-btn:hover{color:var(--rn-gold2);border-color:var(--rn-gold);}
.rn-octave-btn.on{color:var(--rn-gold2);border-color:var(--rn-gold);background:#c9a84c14;}

.rn-stand-block{display:flex;flex-direction:column;gap:6px;}
.rn-log{
  background:#0e1a2844;border:1px solid #c9a84c22;border-radius:3px;
  padding:8px 10px;font-size:.78rem;color:var(--rn-parch-dim);
  min-height:60px;max-height:160px;overflow-y:auto;line-height:1.55;
}
.rn-log-item{padding:2px 0;border-bottom:1px dashed #c9a84c14;}
.rn-log-item:last-child{border-bottom:none;}
.rn-log-empty{font-style:italic;color:var(--rn-stone);}

.rn-active-score{
  background:#c9a84c0d;border:1px solid #c9a84c33;border-left:3px solid var(--rn-gold);
  border-radius:0 3px 3px 0;padding:7px 10px;
}
.rn-active-score-label{font-family:'Cinzel',serif;font-size:.54rem;letter-spacing:.15em;color:var(--rn-gold);text-transform:uppercase;margin-bottom:3px;}
.rn-active-score-name{font-size:.84rem;color:var(--rn-gold2);font-style:italic;}
.rn-active-score-link{
  display:inline-block;margin-top:5px;
  font-family:'Cinzel',serif;font-size:.56rem;letter-spacing:.14em;
  color:var(--rn-gold);text-decoration:none;
  border:1px solid #c9a84c44;padding:3px 8px;border-radius:2px;
}
.rn-active-score-link:hover{background:#c9a84c1a;border-color:var(--rn-gold);}
`;

// ── Web Audio pitch player ───────────────────────────────────────────────────
let audioCtx = null;
function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  // Browsers start the context suspended until a user gesture.
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}
function playPitch(freq, durationMs = 900) {
  const ctx = getCtx();
  if (!ctx) return;
  const start = () => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    osc.connect(gain).connect(ctx.destination);
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.04);
    gain.gain.linearRampToValueAtTime(0.18, now + Math.max(0.05, (durationMs / 1000) - 0.1));
    gain.gain.linearRampToValueAtTime(0, now + (durationMs / 1000));
    osc.start(now);
    osc.stop(now + (durationMs / 1000) + 0.02);
  };
  if (ctx.state === 'suspended') {
    ctx.resume().then(start).catch(() => {});
  } else {
    start();
  }
}

// ── Component ────────────────────────────────────────────────────────────────
export default function RegentNikolay() {
  const [stage, setStage] = useState('chorister');
  const [voicePart, setVoicePart] = useState('Soprano');
  const [activeScore, setActiveScore] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [playingSyl, setPlayingSyl] = useState(null);
  const [octave, setOctave] = useState(0); // -1, 0, +1
  const [log, setLog] = useState([]);
  const chatRef = useRef(null);

  // Welcome on first render
  useEffect(() => {
    if (msgs.length === 0) {
      setMsgs([{
        role: 'assistant',
        content: `**Благословите!** I am Regent Nikolay.\n\nTell me where you'd like to start — open a score from the library on the left, or ask me about a tone, a melody, or a passage you're struggling with.\n\nThe pitch buttons on the right give you a starting note. Click **Do** to hear C.`
      }]);
    }
  }, []);

  // Autoscroll
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [msgs]);

  // Re-welcome when stage/voice change
  useEffect(() => {
    if (msgs.length > 0) {
      addLog(`Settings: ${STAGES.find(s => s.key === stage)?.label} · ${voicePart}`);
    }
  }, [stage, voicePart]);

  function addLog(line) {
    setLog(prev => [...prev, { t: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), line }].slice(-12));
  }

  function loadScore(item) {
    setActiveScore(item);
    addLog(`Loaded: ${item.label}`);
    const intro = `We are opening **${item.label}**. ${item.tone ? `This is Tone ${item.tone}.` : ''} Open the PDF on the right and tell me where you'd like to begin, or I can walk you through the opening phrase. Use the pitch buttons to establish your starting note.`;
    setMsgs(prev => [...prev, { role: 'assistant', content: intro }]);
  }

  async function send(text) {
    const t = (text || input).trim();
    if (!t || busy) return;
    setInput('');
    const newMsgs = [...msgs, { role: 'user', content: t }];
    setMsgs(newMsgs);
    setBusy(true);

    // typing indicator
    setMsgs(prev => [...prev, { role: 'assistant', content: 'typing' }]);

    try {
      // Anthropic requires the conversation to start with a user message.
      // Drop the UI-only welcome (and any other leading assistant turns).
      const clean = newMsgs.filter(m => m.content !== 'typing');
      const firstUser = clean.findIndex(m => m.role === 'user');
      const payloadMsgs = firstUser >= 0 ? clean.slice(firstUser) : clean;

      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5',
          max_tokens: 1024,
          system: buildSystem(stage, voicePart, activeScore),
          messages: payloadMsgs,
        }),
      });
      const data = await resp.json();
      setMsgs(prev => {
        const filtered = prev.filter(m => m.content !== 'typing');
        if (!resp.ok || data.error) {
          const msg = data?.error?.message || `HTTP ${resp.status}`;
          return [...filtered, { role: 'assistant', content: `Forgive me — error: ${msg}` }];
        }
        const reply = data?.content?.[0]?.text || 'Forgive me — I have no answer.';
        return [...filtered, { role: 'assistant', content: reply }];
      });
    } catch (e) {
      setMsgs(prev => [
        ...prev.filter(m => m.content !== 'typing'),
        { role: 'assistant', content: `Network error: ${e.message}` },
      ]);
    }
    setBusy(false);
  }

  function pressPitch(syl, freq) {
    const f = freq * Math.pow(2, octave);
    playPitch(f);
    setPlayingSyl(syl);
    setTimeout(() => setPlayingSyl(null), 900);
    addLog(`Pitch: ${syl}${octave > 0 ? '↑' : octave < 0 ? '↓' : ''}`);
  }

  function playScale() {
    SOLFA.forEach((p, i) => {
      setTimeout(() => {
        const f = p.freq * Math.pow(2, octave);
        playPitch(f, 500);
        setPlayingSyl(p.syl);
      }, i * 520);
    });
    setTimeout(() => setPlayingSyl(null), SOLFA.length * 520);
    addLog('Played: full scale');
  }

  function renderBubble(content) {
    if (content === 'typing') {
      return <div className="rn-dots"><span/><span/><span/></div>;
    }
    // simple inline markdown: **bold**, *italic*, newlines
    const html = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
    return <p dangerouslySetInnerHTML={{ __html: '<p>' + html + '</p>' }}/>;
  }

  const quickPrompts = activeScore
    ? [
        'Walk me through the opening phrase',
        'What is the formula for this tone?',
        'Give me a warm-up for this passage',
        'Where is the cadence?',
      ]
    : [
        'Teach me Tone 1',
        'Run a solfège warm-up',
        'What is the Octoechos?',
        'Help me find my starting pitch',
      ];

  return (
    <>
      <style>{STYLES}</style>
      <div className="rn-root">
        <TopNav current="/regent-nikolay"/>

        <div className="rn-shell">

          {/* LIBRARY */}
          <aside className="rn-lib">
            <div className="rn-lib-brand">
              <div className="rn-lib-brand-icon">Н</div>
              <div className="rn-lib-brand-title">Regent Nikolay</div>
              <div className="rn-lib-brand-sub">Choir Director · Регент</div>
            </div>

            {Object.entries(LIBRARY).map(([key, group]) => (
              <div key={key} className="rn-lib-group">
                <div className="rn-lib-group-label">{group.label}</div>
                <div className="rn-lib-group-sub">{group.sub}</div>
                {group.items.map(item => (
                  <button
                    key={item.key}
                    className={`rn-lib-item${activeScore?.key === item.key ? ' active' : ''}`}
                    onClick={() => loadScore(item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </aside>

          {/* HEAD */}
          <div className="rn-head">
            <div>
              <div className="rn-head-title">Regent Nikolay · Регент Николай</div>
              <div className="rn-head-sub">Russian Orthodox choral tradition · Solfège · The Octoechos</div>
            </div>
            <div className="rn-head-meta">
              <select className="rn-stage-sel" value={stage} onChange={e => setStage(e.target.value)}>
                {STAGES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
              <select className="rn-voice-sel" value={voicePart} onChange={e => setVoicePart(e.target.value)}>
                {VOICE_PARTS.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>

          {/* CHAT */}
          <div className="rn-chat" ref={chatRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`rn-msg ${m.role}`}>
                <div className="rn-av">{m.role === 'assistant' ? 'РН' : 'You'}</div>
                <div className="rn-bub">
                  <span className="rn-lbl">{m.role === 'assistant' ? 'Regent Nikolay' : 'Singer'}</span>
                  {renderBubble(m.content)}
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="rn-bar">
            <div className="rn-quick">
              {quickPrompts.map((q, i) => (
                <button key={i} className="rn-qbtn" onClick={() => send(q)}>{q}</button>
              ))}
            </div>
            <div className="rn-input-row">
              <textarea
                className="rn-inp"
                value={input}
                placeholder="Ask Regent Nikolay…"
                rows={1}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
              />
              <button className="rn-send" onClick={() => send()} disabled={busy || !input.trim()}>
                SING ▶
              </button>
            </div>
          </div>

          {/* CONDUCTOR'S STAND */}
          <aside className="rn-stand">
            <div className="rn-stand-block">
              <div className="rn-stand-title">Pitch · Тон</div>
              <div className="rn-pitch-grid">
                {SOLFA.map(p => (
                  <button
                    key={p.syl}
                    className={`rn-pitch${playingSyl === p.syl ? ' playing' : ''}`}
                    onClick={() => pressPitch(p.syl, p.freq)}
                    title={`${p.syl} · ${p.freq.toFixed(2)} Hz`}
                  >
                    {p.syl}
                  </button>
                ))}
              </div>
              <div className="rn-octave-row">
                <button className={`rn-octave-btn${octave === -1 ? ' on' : ''}`} onClick={() => setOctave(-1)}>−1</button>
                <button className={`rn-octave-btn${octave === 0 ? ' on' : ''}`} onClick={() => setOctave(0)}>0</button>
                <button className={`rn-octave-btn${octave === 1 ? ' on' : ''}`} onClick={() => setOctave(1)}>+1</button>
              </div>
              <button className="rn-octave-btn" style={{marginTop:6}} onClick={playScale}>▶ Play scale</button>
            </div>

            {activeScore && (
              <div className="rn-stand-block">
                <div className="rn-active-score">
                  <div className="rn-active-score-label">Active score</div>
                  <div className="rn-active-score-name">{activeScore.label}</div>
                  {activeScore.pdf && (
                    <a className="rn-active-score-link" href={activeScore.pdf} target="_blank" rel="noopener noreferrer">
                      Open PDF ↗
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="rn-stand-block">
              <div className="rn-stand-title">Rehearsal log</div>
              <div className="rn-log">
                {log.length === 0
                  ? <div className="rn-log-empty">Nothing sung yet.</div>
                  : log.slice().reverse().map((l, i) => (
                      <div key={i} className="rn-log-item"><span style={{color:'var(--rn-stone)'}}>{l.t}</span> · {l.line}</div>
                    ))
                }
              </div>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
