import { useState, useEffect, useRef, useCallback } from "react";

// ── Styles injected once ──────────────────────────────────────────────────────
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=IM+Fell+English:ital@0;1&display=swap');
:root {
  --bg:#0e0b07;--parch:#f7edcc;--parch2:#ede0b0;--parch3:#e0cf94;
  --ink:#1e1008;--red:#8b1a1a;--red2:#b52222;
  --gold:#c9902a;--gold2:#e8b84b;--gold3:#f5d070;
  --stone:#9e8c72;--laurel:#3d5c35;--laurel2:#5a7a4a;
  --shadow:rgba(14,11,7,0.55);
}
.mm-root *{box-sizing:border-box;margin:0;padding:0;}
.mm-root{font-family:'Crimson Pro',Georgia,serif;background:var(--bg);color:var(--parch);height:100vh;display:flex;flex-direction:column;overflow:hidden;position:relative;}
.mm-bg{position:absolute;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(ellipse 80% 60% at 15% 20%,#2a1a0855,transparent),
             radial-gradient(ellipse 60% 80% at 85% 80%,#1a0e0455,transparent),#0e0b07;}
.mm-shell{position:relative;z-index:1;display:grid;height:100vh;
  grid-template-columns:240px 1fr;grid-template-rows:auto auto 1fr auto;
  grid-template-areas:"sb sbar""sb tbar""sb chat""sb ibar";}

/* Sidebar */
.mm-sb{grid-area:sb;background:linear-gradient(180deg,#1a1005,#120c04);border-right:1px solid #c9902a33;display:flex;flex-direction:column;overflow:hidden;}
.mm-brand{padding:14px 14px 11px;border-bottom:1px solid #c9902a22;text-align:center;}
.mm-brand-icon{font-family:'Cinzel Decorative',serif;font-size:1.7rem;color:var(--gold2);text-shadow:0 0 18px rgba(232,184,75,.4);line-height:1;}
.mm-brand-title{font-family:'Cinzel',serif;font-size:.82rem;letter-spacing:.18em;color:var(--gold);text-transform:uppercase;margin-top:2px;}
.mm-brand-sub{font-family:'IM Fell English',serif;font-style:italic;font-size:.7rem;color:var(--stone);margin-top:1px;}
.mm-sec-label{font-family:'Cinzel',serif;font-size:.54rem;letter-spacing:.2em;color:var(--stone);text-transform:uppercase;margin-bottom:6px;}
.mm-lv-section{padding:10px 11px 7px;border-bottom:1px solid #c9902a18;}
.mm-lv-btn{display:block;width:100%;text-align:left;padding:6px 9px;margin-bottom:3px;background:transparent;border:1px solid transparent;border-radius:2px;cursor:pointer;transition:all .18s;color:var(--parch2);}
.mm-lv-btn:hover{background:#c9902a18;border-color:#c9902a33;}
.mm-lv-btn.active{background:linear-gradient(90deg,#c9902a22,transparent);border-color:var(--gold);border-left:3px solid var(--gold2);}
.mm-lv-name{font-family:'Cinzel',serif;font-size:.63rem;letter-spacing:.08em;display:block;color:var(--gold2);}
.mm-lv-desc{font-size:.7rem;color:var(--stone);font-style:italic;display:block;margin-top:1px;}
.mm-lv-btn.active .mm-lv-desc{color:var(--parch3);}
.mm-drill-section{padding:8px 11px;border-bottom:1px solid #c9902a18;}
.mm-drill-btn{display:flex;align-items:center;gap:8px;width:100%;background:transparent;border:1px solid #c9902a33;border-radius:2px;padding:7px 10px;cursor:pointer;transition:all .18s;color:var(--stone);}
.mm-drill-btn:hover{border-color:var(--gold);background:#c9902a0d;color:var(--parch2);}
.mm-drill-btn .dn{font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.1em;display:block;text-transform:uppercase;}
.mm-drill-btn .dd{font-size:.68rem;font-style:italic;display:block;margin-top:1px;}
.mm-corpus{padding:9px 11px 5px;flex:1;overflow-y:auto;border-bottom:1px solid #c9902a18;}
.mm-corpus::-webkit-scrollbar{width:3px;}
.mm-corpus::-webkit-scrollbar-thumb{background:#c9902a44;}
.mm-cb{display:block;width:100%;text-align:left;padding:5px 8px;margin-bottom:3px;background:transparent;border:none;border-left:2px solid transparent;cursor:pointer;color:var(--stone);font-family:'Crimson Pro',serif;font-size:.8rem;line-height:1.3;transition:all .15s;border-radius:0 2px 2px 0;}
.mm-cb:hover{color:var(--parch2);border-left-color:var(--gold);background:#c9902a0d;}
.mm-cb .auth{font-family:'Cinzel',serif;font-size:.53rem;letter-spacing:.1em;color:var(--gold);display:block;text-transform:uppercase;}
.mm-sb-foot{padding:7px 11px;font-size:.66rem;color:var(--stone);font-style:italic;border-top:1px solid #c9902a18;}
.mm-back{display:inline-flex;align-items:center;gap:6px;font-family:'Cinzel',serif;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--stone);text-decoration:none;padding:5px 10px;border:1px solid #c9902a22;border-radius:2px;transition:all .15s;margin:8px 11px 0;}
.mm-back:hover{color:var(--gold2);border-color:var(--gold);background:#c9902a0d;}
.mm-speed-section{padding:9px 11px 8px;border-bottom:1px solid #c9902a18;}
.mm-speed-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;}
.mm-speed-label{font-family:'Cinzel',serif;font-size:.54rem;letter-spacing:.15em;color:var(--stone);text-transform:uppercase;}
.mm-speed-val{font-family:'Cinzel',serif;font-size:.62rem;color:var(--gold2);}
.mm-speed-ticks{display:flex;justify-content:space-between;padding:0 1px;margin-top:3px;}
.mm-speed-ticks span{font-family:'Cinzel',serif;font-size:.48rem;color:var(--stone);}
input[type=range].mm-slider{width:100%;height:3px;-webkit-appearance:none;appearance:none;background:linear-gradient(90deg,var(--gold) var(--pct,40%),#c9902a33 var(--pct,40%));border-radius:2px;outline:none;cursor:pointer;}
input[type=range].mm-slider::-webkit-slider-thumb{-webkit-appearance:none;width:13px;height:13px;border-radius:50%;background:var(--gold2);border:2px solid var(--gold);box-shadow:0 0 6px rgba(201,144,42,.5);cursor:pointer;}
input[type=range].mm-slider::-moz-range-thumb{width:13px;height:13px;border-radius:50%;background:var(--gold2);border:2px solid var(--gold);cursor:pointer;}

/* Student bar */
.mm-sbar{grid-area:sbar;border-bottom:1px solid #c9902a44;padding:6px 16px;display:flex;align-items:center;gap:6px;}
.mm-sbar-lbl{font-family:'Cinzel',serif;font-size:.54rem;letter-spacing:.18em;color:var(--stone);text-transform:uppercase;white-space:nowrap;flex-shrink:0;}
.mm-tabs{display:flex;gap:5px;flex:1;}
.mm-tab{font-family:'Cinzel',serif;padding:5px 10px 4px;background:transparent;border:1px solid #c9902a2a;border-bottom:2px solid transparent;border-radius:2px 2px 0 0;cursor:pointer;color:var(--stone);transition:all .15s;flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;}
.mm-tab:hover{border-color:#c9902a55;color:var(--parch2);}
.mm-tab.active{background:linear-gradient(180deg,#c9902a1a,transparent);border-color:var(--gold);border-bottom-color:var(--bg);color:var(--gold2);}
.mm-tab-name{font-size:.66rem;letter-spacing:.08em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px;}
.mm-tab-lvl{font-size:.5rem;color:var(--stone);margin-top:1px;letter-spacing:.06em;}
.mm-tab.active .mm-tab-lvl{color:var(--gold);}
.mm-name-inp{font-family:'Cinzel',serif;font-size:.66rem;letter-spacing:.08em;background:transparent;border:none;border-bottom:1px solid var(--gold);color:var(--gold2);outline:none;width:82px;text-align:center;padding:0;}

/* Top bar */
.mm-tbar{grid-area:tbar;padding:6px 20px 5px;border-bottom:1px solid #c9902a1a;display:flex;align-items:center;justify-content:space-between;gap:10px;}
.mm-tbar-title{font-family:'Cinzel',serif;font-size:.76rem;letter-spacing:.1em;color:var(--gold2);}
.mm-tbar-meta{font-size:.7rem;color:var(--stone);font-style:italic;margin-top:1px;}
.mm-badge{font-family:'Cinzel',serif;font-size:.56rem;letter-spacing:.15em;padding:3px 9px;border:1px solid var(--gold);border-radius:1px;color:var(--gold2);text-transform:uppercase;background:#c9902a11;white-space:nowrap;}

/* Chat */
.mm-chat{grid-area:chat;overflow-y:auto;padding:14px 22px;display:flex;flex-direction:column;gap:13px;scroll-behavior:smooth;}
.mm-chat::-webkit-scrollbar{width:4px;}
.mm-chat::-webkit-scrollbar-thumb{background:#c9902a33;border-radius:3px;}
.mm-msg{display:flex;gap:10px;animation:mmIn .3s ease both;}
.mm-msg.user{flex-direction:row-reverse;}
@keyframes mmIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.mm-av{width:34px;height:34px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:.6rem;font-weight:700;border:1.5px solid var(--gold);background:radial-gradient(circle,#2a1a08,#161008);color:var(--gold2);box-shadow:0 2px 8px rgba(201,144,42,.2);}
.mm-msg.user .mm-av{border-color:var(--laurel2);color:var(--laurel2);background:radial-gradient(circle,#0e1a0a,#080f06);}
.mm-bub{max-width:78%;padding:11px 15px;font-size:.96rem;line-height:1.65;color:var(--parch);}
.mm-msg.assistant .mm-bub{background:linear-gradient(135deg,#1e160933,#16100622);border:1px solid #c9902a2a;border-left:3px solid var(--gold);border-radius:0 4px 4px 0;box-shadow:0 3px 14px var(--shadow);}
.mm-msg.user .mm-bub{background:linear-gradient(135deg,#0e1a0a22,#0a150822);border:1px solid #5a7a4a2a;border-right:3px solid var(--laurel2);border-radius:4px 0 0 4px;text-align:right;box-shadow:0 3px 14px var(--shadow);}
.mm-lbl{display:block;font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.2em;text-transform:uppercase;color:var(--stone);margin-bottom:5px;}
.mm-bub strong{color:var(--gold2);font-weight:600;}
.mm-bub em{color:var(--parch2);font-style:italic;}
.mm-bub p{margin-bottom:6px;}
.mm-bub p:last-child{margin-bottom:0;}
.mm-bub hr{border:none;border-top:1px solid #c9902a22;margin:8px 0;}
.mm-bub ul{margin:4px 0 4px 14px;}
.mm-bub li{margin-bottom:3px;}
.mm-lat-block{background:#c9902a0d;border:1px solid #c9902a33;border-left:3px solid var(--gold2);border-radius:0 3px 3px 0;padding:9px 13px;margin:8px 0;font-family:'IM Fell English',serif;font-style:italic;font-size:1.05rem;line-height:1.7;color:var(--gold3);position:relative;}
.mm-speak-btn{position:absolute;top:5px;right:7px;background:transparent;border:1px solid #c9902a44;border-radius:2px;color:var(--gold);cursor:pointer;padding:2px 7px;font-size:.7rem;font-family:'Cinzel',serif;letter-spacing:.08em;transition:all .15s;}
.mm-speak-btn:hover{background:#c9902a1a;border-color:var(--gold);}
.mm-speak-btn.speaking{color:var(--red2);border-color:var(--red2);}
.mm-lat-eng{font-family:'Crimson Pro',serif;font-style:normal;font-size:.86rem;color:var(--stone);margin-top:6px;}
.mm-dots span{display:inline-block;width:5px;height:5px;background:var(--gold);border-radius:50%;margin:0 2px;animation:mmBounce 1.2s infinite;}
.mm-dots span:nth-child(2){animation-delay:.2s;}
.mm-dots span:nth-child(3){animation-delay:.4s;}
@keyframes mmBounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}

/* Input bar */
.mm-ibar{grid-area:ibar;padding:8px 18px 11px;border-top:1px solid #c9902a22;display:flex;flex-direction:column;gap:5px;}
.mm-sugg{display:flex;flex-wrap:wrap;gap:4px;}
.mm-sug{font-family:'Crimson Pro',serif;font-size:.78rem;color:var(--stone);background:#c9902a0d;border:1px solid #c9902a2a;border-radius:2px;padding:2px 8px;cursor:pointer;transition:all .14s;font-style:italic;}
.mm-sug:hover{color:var(--parch2);background:#c9902a1a;border-color:var(--gold);}
.mm-input-row{display:flex;gap:6px;align-items:flex-end;}
.mm-inp{flex:1;font-family:'Crimson Pro',serif;font-size:.95rem;color:var(--parch);background:#1a130844;border:1px solid #c9902a33;border-bottom:2px solid var(--gold);border-radius:2px;padding:8px 11px;outline:none;resize:none;min-height:36px;max-height:90px;transition:border-color .2s;line-height:1.5;}
.mm-inp:focus{border-color:var(--gold2);box-shadow:0 0 0 3px rgba(201,144,42,.1);}
.mm-inp::placeholder{color:var(--stone);font-style:italic;}
.mm-mic{width:36px;height:36px;flex-shrink:0;background:#1a130844;border:1px solid #c9902a33;border-bottom:2px solid var(--gold);border-radius:2px;cursor:pointer;color:var(--stone);font-size:.95rem;transition:all .14s;display:flex;align-items:center;justify-content:center;}
.mm-mic:hover{border-color:var(--gold);color:var(--parch2);}
.mm-mic.listening{background:#8b1a1a22;border-color:var(--red2);color:var(--red2);}
.mm-mic.off{opacity:.3;cursor:not-allowed;}
.mm-send{font-family:'Cinzel',serif;font-size:.63rem;letter-spacing:.12em;font-weight:600;color:var(--ink);background:linear-gradient(135deg,var(--gold3),var(--gold));border:none;border-radius:2px;padding:0 15px;height:36px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 9px rgba(201,144,42,.28);transition:all .14s;}
.mm-send:hover:not(:disabled){background:linear-gradient(135deg,#fce080,var(--gold2));transform:translateY(-1px);}
.mm-send:disabled{opacity:.45;cursor:not-allowed;transform:none;}

/* Drill modal */
.mm-drill-modal{position:fixed;inset:0;z-index:200;background:rgba(8,6,3,.9);display:flex;align-items:center;justify-content:center;}
.mm-drill-box{background:linear-gradient(135deg,#1e160f,#140e07);border:1px solid var(--gold);border-radius:4px;padding:28px 32px;max-width:500px;width:90%;box-shadow:0 12px 50px rgba(0,0,0,.7);display:flex;flex-direction:column;gap:15px;}
.mm-drill-title{font-family:'Cinzel',serif;font-size:.95rem;letter-spacing:.15em;color:var(--gold2);text-transform:uppercase;text-align:center;}
.mm-drill-sub{font-family:'IM Fell English',serif;font-style:italic;font-size:.82rem;color:var(--stone);text-align:center;margin-top:-8px;}
.mm-drill-phrase{background:#c9902a0d;border:1px solid #c9902a44;border-left:3px solid var(--gold2);border-radius:0 3px 3px 0;padding:14px 18px;font-family:'IM Fell English',serif;font-style:italic;font-size:1.3rem;color:var(--gold3);line-height:1.5;text-align:center;min-height:54px;display:flex;align-items:center;justify-content:center;}
.mm-drill-eng{font-family:'Crimson Pro',serif;font-size:.92rem;color:var(--stone);text-align:center;font-style:italic;min-height:20px;}
.mm-drill-tx{min-height:22px;font-family:'IM Fell English',serif;font-style:italic;font-size:.88rem;color:var(--stone);text-align:center;}
.mm-drill-fb{min-height:34px;padding:7px 12px;background:#0e0b0744;border:1px solid #c9902a22;border-radius:2px;font-family:'Crimson Pro',serif;font-size:.9rem;color:var(--parch2);text-align:center;line-height:1.5;}
.mm-drill-fb.good{border-color:#5a7a4a55;color:#8fc87a;}
.mm-drill-fb.bad{border-color:#8b1a1a55;color:#c87a7a;}
.mm-drill-ctrls{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;}
.mm-db{font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.12em;padding:7px 15px;border-radius:2px;cursor:pointer;transition:all .14s;border:1px solid;}
.mm-db.hear{color:var(--ink);background:linear-gradient(135deg,var(--gold3),var(--gold));border-color:var(--gold);}
.mm-db.hear:hover{background:linear-gradient(135deg,#fce080,var(--gold2));}
.mm-db.speak{color:var(--parch2);background:transparent;border-color:#c9902a55;}
.mm-db.speak:hover{border-color:var(--gold);}
.mm-db.speak.listening{color:var(--red2);border-color:var(--red2);}
.mm-db.next{color:var(--parch2);background:transparent;border-color:#5a7a4a55;}
.mm-db.next:hover{border-color:var(--laurel2);}
.mm-db.cls{color:var(--stone);background:transparent;border-color:#44332255;}
.mm-db.cls:hover{border-color:var(--stone);color:var(--parch2);}
`;

// ── Corpus ────────────────────────────────────────────────────────────────────
const CORPUS = {
  salve:{title:"Salve! — First Greetings",meta:"Everyday Latin · Gradus I",text:null,
    prompt:`Begin a lesson on Latin greetings used by real Romans. Teach: Salve/Salvete, Vale/Valete, Quid agis?, Bene/Male, Gratias tibi ago, Ita/Minime. For each: pronunciation, meaning, and a note on actual Roman use. Format every Latin phrase as [LATIN: phrase | ENGLISH: translation]. Invite practice.`},
  romani:{title:"Dies Romani — A Roman's Day",meta:"Roman Daily Life · Gradus I–II",text:null,
    prompt:`Teach Latin for Roman daily life. Walk through: Mane surgo. Aquam bibo. In ludum eo. Magister docet. Vespere ceno. For each: the Latin in [LATIN: text | ENGLISH: translation] format, word-by-word breakdown, and a real Roman fact.`},
  phaedrus:{title:"Lupus et Agnus",meta:"Phaedrus, Fabulae I.1 · c. 15 BCE–50 CE",
    text:`Ad rivum eundem lupus et agnus venerant,\nsiti compulsi. Superior stabat lupus,\nlongeque inferior agnus. Tunc fauce improba\nlatro incitatus iurgii causam intulit:\n"Cur," inquit, "turbulentam fecisti mihi\naquam bibenti?" Laniger contra timens:\n"Qui possum, quaeso, facere quod quereris, lupe?\nA te decurrit ad meos haustus liquor."\nAtque ita correptum lacerat iniusta nece.\nHaec propter illos scripta est homines fabula\nqui fictis causis innocentes opprimunt.`,prompt:null},
  caesar:{title:"Gallia Est Omnis Divisa",meta:"Julius Caesar, De Bello Gallico I.1 · 58–49 BCE",
    text:`Gallia est omnis divisa in partes tres,\nquarum unam incolunt Belgae,\naliam Aquitani,\ntertiam qui ipsorum lingua Celtae,\nnostra Galli appellantur.\nHi omnes lingua, institutis, legibus inter se differunt.`,prompt:null},
  vulgate:{title:"In Principio — Genesis 1:1–5",meta:"St. Jerome, Biblia Sacra Vulgata · 382–405 CE",
    text:`In principio creavit Deus caelum et terram.\nTerra autem erat inanis et vacua,\net tenebrae erant super faciem abyssi;\net Spiritus Dei ferebatur super aquas.\nDixitque Deus: Fiat lux. Et facta est lux.`,prompt:null},
  cicero:{title:"Quo Usque Tandem — In Catilinam I",meta:"Marcus Tullius Cicero · 63 BCE",
    text:`Quo usque tandem abutere, Catilina, patientia nostra?\nQuam diu etiam furor iste tuus nos eludet?\nQuem ad finem sese effrenata iactabit audacia?\nNihilne te nocturnum praesidium Palati,\nnihil urbis vigiliae, nihil timor populi moverunt?`,prompt:null},
  aeneid:{title:"Arma Virumque Cano — Aeneid I.1–7",meta:"Publius Vergilius Maro · 29–19 BCE",
    text:`Arma virumque cano, Troiae qui primus ab oris\nItaliam, fato profugus, Laviniaque venit\nlitora, multum ille et terris iactatus et alto\nvi superum saevae memorem Iunonis ob iram;\nmulta quoque et bello passus, dum conderet urbem,\nInferretque deos Latio, genus unde Latinum,\nAlbanique patres, atque altae moenia Romae.`,prompt:null},
  horace:{title:"Carpe Diem — Odes I.11",meta:"Quintus Horatius Flaccus · 23 BCE",
    text:`Tu ne quaesieris, scire nefas, quem mihi, quem tibi\nfinem di dederint, Leuconoe, nec Babylonios\ntemptaris numeros. Ut melius, quidquid erit, pati.\nDum loquimur, fugerit invida\naetas: carpe diem, quam minimum credula postero.`,prompt:null},
  ovid:{title:"In Nova Fert — Metamorphoses I.1–4",meta:"Publius Ovidius Naso · 8 CE",
    text:`In nova fert animus mutatas dicere formas\ncorpora; di, coeptis adspirate meis\nprimaque ab origine mundi\nad mea perpetuum deducite tempora carmen!`,prompt:null},
  seneca:{title:"Epistulae Morales — On Time",meta:"Lucius Annaeus Seneca · c. 65 CE",
    text:`Omnia, Lucili, aliena sunt, tempus tantum nostrum est.\nIta fac, mi Lucili: vindica te tibi.\nDum differtur vita transcurrit.\nOmnia, Lucili, aliena sunt, tempus tantum nostrum est.`,prompt:null},
  inscriptions:{title:"CIL — Real Roman Inscriptions",meta:"Corpus Inscriptionum Latinarum · Various dates",
    text:`I. SISTE VIATOR — Traveler, stop!\nII. DIS MANIBUS IULIAE PRIMAE CONIUGI CARISSIMAE\nIII. SENATUS POPULUSQUE ROMANUS — S·P·Q·R\nIV. FECI QUOD POTUI · FACIANT MELIORA POTENTES`,prompt:null},
  paternoster:{title:"Pater Noster — The Lord's Prayer",meta:"Liturgical Latin · Matthew 6:9–13",
    text:`Pater noster, qui es in caelis,\nsanctificetur nomen tuum.\nAdveniat regnum tuum.\nFiat voluntas tua, sicut in caelo et in terra.\nPanem nostrum quotidianum da nobis hodie.\nAmen.`,prompt:null},
};

// ── Level profiles ────────────────────────────────────────────────────────────
const LP = {
  I:{name:"GRADUS I — Initia",badge:"GRADUS I · INITIA",
    desc:`True beginner, ages ~6–9. Every Latin word is new. Use simple English. Introduce 3–5 words at a time with immediate translation. No grammar terms — describe patterns naturally. Connect to English derivatives (aqua → aquarium). Celebrate every attempt warmly.`},
  II:{name:"GRADUS II — Voces",badge:"GRADUS II · VOCES",
    desc:`Ages ~8–11. Knows basic vocabulary. Introduce grammar gently: nominative/accusative cases, 1st/2nd person verb endings. Ask the student to try translating before revealing answers. Connect to English derivatives.`},
  III:{name:"GRADUS III — Fabellae",badge:"GRADUS III · FABELLAE",
    desc:`Ages ~10–13. Reads simple sentences. Work through fables and simplified stories. All five noun cases, present/imperfect/future tenses. Present Latin first, guide comprehension with questions before translating. Note historical context.`},
  IV:{name:"GRADUS IV — Historiae",badge:"GRADUS IV · HISTORIAE",
    desc:`Ages ~12–15. Reads simple Latin fluently. Adapted classical prose: Caesar, Cicero, Vulgate, Seneca. Indirect statement, basic subjunctive, complex syntax. Present Latin first, elicit student translation, then correct. Discuss rhetoric and historical context.`},
  V:{name:"GRADUS V — Carmina",badge:"GRADUS V · CARMINA",
    desc:`Ages ~14+. Advanced reader. Unadapted originals: Virgil, Horace, Ovid, Cicero. Teach meter, scan lines, identify literary devices. Student translates first, you correct. Discuss manuscript tradition and reception.`},
};

const SUGG = {
  I:["Teach me this word by word","What does this mean?","Say it more simply","Quiz me on vocabulary"],
  II:["Help me translate this sentence","What does this ending mean?","Give me a grammar tip","More examples please"],
  III:["Walk me through this passage","Explain the grammar here","What's the historical context?","Help me parse this verb"],
  IV:["What is the author trying to say?","Explain this syntax","What rhetorical devices are here?","Give me a harder challenge"],
  V:["Scan this line of poetry","Discuss the meter","What literary devices do you see?","Translate this cold"],
};

const DRILL_PHRASES = [
  {latin:"Salve!",english:"Hello!",level:1},{latin:"Vale!",english:"Goodbye!",level:1},
  {latin:"Quid agis?",english:"How are you?",level:1},{latin:"Bene, gratias.",english:"Well, thank you.",level:1},
  {latin:"Aqua",english:"Water",level:1},{latin:"Terra",english:"Earth / Land",level:1},
  {latin:"Caelum",english:"Sky / Heaven",level:1},{latin:"Pater",english:"Father",level:1},
  {latin:"Mater",english:"Mother",level:1},{latin:"Fiat lux.",english:"Let there be light.",level:2},
  {latin:"Tempus fugit.",english:"Time flees.",level:2},{latin:"Carpe diem.",english:"Seize the day.",level:2},
  {latin:"Festina lente.",english:"Make haste slowly.",level:2},{latin:"Mane surgo.",english:"In the morning I rise.",level:2},
  {latin:"Siste, viator.",english:"Stop, traveler.",level:3},{latin:"Feci quod potui.",english:"I did what I could.",level:3},
  {latin:"Gallia est omnis divisa in partes tres.",english:"All of Gaul is divided into three parts.",level:3},
  {latin:"In principio creavit Deus caelum et terram.",english:"In the beginning God created the sky and the earth.",level:3},
  {latin:"Quo usque tandem abutere, Catilina, patientia nostra?",english:"How long, Catiline, will you abuse our patience?",level:4},
  {latin:"Omnia, Lucili, aliena sunt, tempus tantum nostrum est.",english:"All things belong to others; time alone is ours.",level:4},
  {latin:"Arma virumque cano.",english:"I sing of arms and the man.",level:5},
  {latin:"Carpe diem, quam minimum credula postero.",english:"Seize the day, trusting as little as possible in the future.",level:5},
  {latin:"Tantaene animis caelestibus irae?",english:"Can there be such great anger in heavenly minds?",level:5},
];

const DEFAULTS = ["Student I","Student II","Student III","Student IV"];
const lvlNums = {I:1,II:2,III:3,IV:4,V:5};

function mkStudent(name) {
  return {name, level:"I", textKey:null, textTitle:"Free Conversation Mode", textMeta:"Ask Magister Marcus anything about Latin", history:[], welcomed:false};
}

// ── Classical TTS ─────────────────────────────────────────────────────────────
let preferredVoice = null;
function initVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  preferredVoice = voices.find(v=>v.lang.startsWith('it')) || voices.find(v=>v.lang.startsWith('es')) || voices[0] || null;
}
if (window.speechSynthesis) { window.speechSynthesis.onvoiceschanged = initVoice; initVoice(); }

function classicPhonetic(t) {
  return t.replace(/ae/gi, m=>m[0]==='A'?'Ai':'ai').replace(/oe/gi,m=>m[0]==='O'?'Oi':'oi').replace(/\bv/gi,m=>m==='V'?'W':'w');
}
let ttsRate = 0.55; // global speed — mutated by slider

function speakLatin(text, onEnd) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(classicPhonetic(text));
  utt.rate=ttsRate; utt.pitch=0.95; utt.volume=1; utt.lang='it-IT';
  if (preferredVoice) utt.voice=preferredVoice;
  if (onEnd) utt.onend=onEnd;
  window.speechSynthesis.speak(utt);
}
function stopSpeaking() { window.speechSynthesis?.cancel(); }

function levenshtein(a,b) {
  const m=a.length,n=b.length;
  const dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++)
    dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}

// ── Build system prompt ───────────────────────────────────────────────────────
function buildSystem(student) {
  const lp = LP[student.level];
  const corpus = student.textKey ? CORPUS[student.textKey] : null;
  let textBlock = '';
  if (corpus?.text) textBlock = `\n\nCURRENT TEXT:\nTitle: ${corpus.title}\nSource: ${corpus.meta}\n\n---\n${corpus.text}\n---\n\nThis is the primary text. Always return to it. Quote it exactly. Teach passage by passage.`;
  return `You are MAGISTER MARCUS, a master Latin teacher dedicated to producing genuine Latin scholars over a decade of study.

STUDENT: ${student.name}
LEVEL: ${lp.name}
${lp.desc}
${textBlock}

PHILOSOPHY: Latin is learned through AUTHENTIC TEXTS. Use comprehensible input — always just above the student's level, scaffolded with context. Build cumulatively. Goal: genuine reading fluency and love of the language.

CRITICAL — LATIN BLOCK FORMAT: Whenever you present a Latin phrase or passage the student should read or hear, format it EXACTLY as:
[LATIN: the latin text | ENGLISH: the english translation]
Use this for every key phrase, sentence, and passage. Multiple lines within a block are fine.

WHEN PRESENTING TEXT: (1) Show Latin in a LATIN BLOCK first. (2) Lower levels I–II: translate immediately. Higher levels III–V: elicit student translation first. (3) Break down grammar when asked. (4) Note author, work, date, context. (5) Poetry: name the meter; at Gradus V scan the lines.

PRONUNCIATION: When introducing a new word note classical pronunciation — C always hard like K, V like W, AE like "eye".

Address ${student.name} by name occasionally. Use **bold** for new vocabulary. Keep responses focused — depth over breadth. Correct wrong translations kindly but precisely. Use Latin exclamations with English: Optime! (Excellent!) Bene factum! (Well done!)`;
}

// ── Parse Marcus response into React nodes ────────────────────────────────────
function ParsedResponse({text, onSpeak}) {
  const blockRE = /\[LATIN:\s*([\s\S]+?)\s*\|\s*ENGLISH:\s*([\s\S]+?)\]/g;
  const parts = [];
  let last=0, m;
  while((m=blockRE.exec(text))!==null) {
    if(m.index>last) parts.push({type:'text',content:text.slice(last,m.index)});
    parts.push({type:'latin',lat:m[1].trim(),eng:m[2].trim()});
    last=m.index+m[0].length;
  }
  if(last<text.length) parts.push({type:'text',content:text.slice(last)});

  function renderText(t) {
    return t.split('\n\n').map((para,pi)=>(
      <p key={pi} dangerouslySetInnerHTML={{__html:
        para.replace(/\n/g,'<br>')
          .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
          .replace(/\*(.+?)\*/g,'<em>$1</em>')
      }}/>
    ));
  }

  return (
    <>
      {parts.map((p,i)=>
        p.type==='text'
          ? <span key={i}>{renderText(p.content)}</span>
          : <LatinBlock key={i} lat={p.lat} eng={p.eng} onSpeak={onSpeak}/>
      )}
    </>
  );
}

function LatinBlock({lat, eng, onSpeak}) {
  const [speaking, setSpeaking] = useState(false);
  function handleSpeak() {
    if(speaking){stopSpeaking();setSpeaking(false);return;}
    setSpeaking(true);
    onSpeak(lat,()=>setSpeaking(false));
  }
  return (
    <div className="mm-lat-block">
      <button className={`mm-speak-btn${speaking?' speaking':''}`} onClick={handleSpeak}>
        {speaking?'■ STOP':'▶ RECITA'}
      </button>
      <div dangerouslySetInnerHTML={{__html:lat.replace(/\n/g,'<br>')}}/>
      <div className="mm-lat-eng">{eng}</div>
    </div>
  );
}

// ── Drill Modal ───────────────────────────────────────────────────────────────
function DrillModal({level, onClose}) {
  const SRCtor = window.SpeechRecognition||window.webkitSpeechRecognition||null;
  const lvlNum = lvlNums[level]||1;
  const phrases = useRef(DRILL_PHRASES.filter(p=>p.level<=lvlNum).sort(()=>Math.random()-.5));
  const [idx,setIdx]=useState(0);
  const [english,setEnglish]=useState('');
  const [transcript,setTranscript]=useState('');
  const [feedback,setFeedback]=useState({msg:'Press AUDI to hear it, then RECITA to repeat.',cls:''});
  const [speaking,setSpeaking]=useState(false);
  const [listening,setListening]=useState(false);
  const recRef=useRef(null);

  const phrase = phrases.current[idx % phrases.current.length];

  function hear() {
    setEnglish(phrase.english);
    setFeedback({msg:'Listen carefully…',cls:''});
    setSpeaking(true);
    speakLatin(phrase.latin,()=>{setSpeaking(false);setFeedback({msg:'Now press RECITA and repeat.',cls:''}); });
  }
  function next() {
    stopSpeaking(); setSpeaking(false);
    if(recRef.current){try{recRef.current.stop();}catch(e){}} setListening(false);
    setIdx(i=>(i+1)%phrases.current.length);
    setEnglish(''); setTranscript(''); setFeedback({msg:'Press AUDI to hear it, then RECITA to repeat.',cls:''});
  }
  function speak() {
    if(!SRCtor){setFeedback({msg:'Speech recognition requires Chrome or Edge.',cls:'bad'});return;}
    if(listening){if(recRef.current)try{recRef.current.stop();}catch(e){}setListening(false);return;}
    setListening(true); setTranscript(''); setFeedback({msg:'Listening… speak now.',cls:''});
    const r=new SRCtor(); r.lang='it-IT'; r.continuous=false; r.interimResults=true;
    r.onresult=e=>{
      let interim='',final='';
      for(let i=e.resultIndex;i<e.results.length;i++){
        if(e.results[i].isFinal) final+=e.results[i][0].transcript;
        else interim+=e.results[i][0].transcript;
      }
      setTranscript('"'+(final||interim)+'"');
      if(final){setListening(false);grade(final);}
    };
    r.onerror=()=>setListening(false);
    r.onend=()=>setListening(false);
    recRef.current=r; r.start();
  }
  function grade(spoken) {
    const target=phrase.latin.toLowerCase().replace(/[^a-z\s]/g,'');
    const attempt=spoken.toLowerCase().replace(/[^a-z\s]/g,'');
    const tw=target.split(/\s+/).filter(Boolean);
    const aw=attempt.split(/\s+/).filter(Boolean);
    let matches=0;
    tw.forEach(t=>{if(aw.some(a=>levenshtein(t,a)<=Math.floor(t.length*.4)))matches++;});
    const score=tw.length>0?matches/tw.length:0;
    if(score>=.75) setFeedback({msg:'Optime! Excellent! Ready for the next one?',cls:'good'});
    else if(score>=.4) setFeedback({msg:'Bene! Good attempt. Try hearing it again.',cls:''});
    else setFeedback({msg:'Keep trying! Press AUDI to hear it again.',cls:'bad'});
  }
  function close(){stopSpeaking();if(recRef.current)try{recRef.current.stop();}catch(e){}onClose();}

  return (
    <div className="mm-drill-modal">
      <div className="mm-drill-box">
        <div className="mm-drill-title">🏛 Pronuntiatio — Pronunciation Drill</div>
        <div className="mm-drill-sub">Listen carefully, then speak the Latin phrase</div>
        <div className="mm-drill-phrase">{phrase.latin}</div>
        <div className="mm-drill-eng">{english}</div>
        <div className="mm-drill-tx">{transcript}</div>
        <div className={`mm-drill-fb${feedback.cls?' '+feedback.cls:''}`}>{feedback.msg}</div>
        <div className="mm-drill-ctrls">
          <button className={`mm-db hear`} onClick={hear} disabled={speaking}>{speaking?'…':'▶ AUDI'}</button>
          <button className={`mm-db speak${listening?' listening':''}`} onClick={speak}>🎤 RECITA</button>
          <button className="mm-db next" onClick={next}>PROXIMA ▶</button>
          <button className="mm-db cls" onClick={close}>✕ CLAUDE</button>
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
function SpeedSlider() {
  const STEPS = [
    {rate:0.35, label:'Lentissime'},
    {rate:0.50, label:'Lente'},
    {rate:0.65, label:'Mediocriter'},
    {rate:0.80, label:'Celeriter'},
    {rate:1.00, label:'Celerrime'},
  ];
  const [stepIdx, setStepIdx] = useState(1); // default: Lente (0.50)
  // sync to global on mount
  useEffect(()=>{ ttsRate = STEPS[stepIdx].rate; },[]);

  function handleChange(e) {
    const i = parseInt(e.target.value);
    setStepIdx(i);
    ttsRate = STEPS[i].rate;
    // Update CSS gradient fill
    e.target.style.setProperty('--pct', (i / (STEPS.length-1) * 100)+'%');
  }
  const pct = (stepIdx/(STEPS.length-1)*100)+'%';

  return (
    <div className="mm-speed-section">
      <div className="mm-speed-row">
        <span className="mm-speed-label">Velocitas · Speed</span>
        <span className="mm-speed-val">{STEPS[stepIdx].label}</span>
      </div>
      <input type="range" className="mm-slider" min={0} max={STEPS.length-1} step={1}
        value={stepIdx} onChange={handleChange}
        style={{'--pct':pct}}
      />
      <div className="mm-speed-ticks">
        <span>Slow</span><span>Mid</span><span>Fast</span>
      </div>
    </div>
  );
}

export default function MagisterMarcus() {
  const SRCtor = window.SpeechRecognition||window.webkitSpeechRecognition||null;
  const [students, setStudents] = useState(DEFAULTS.map(mkStudent));
  const [activeIdx, setActiveIdx] = useState(0);
  // Per-student chat messages: array of arrays
  const [allMsgs, setAllMsgs] = useState([[], [], [], []]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [drillOpen, setDrillOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const chatRef = useRef(null);
  const recRef = useRef(null);

  const student = students[activeIdx];
  const msgs = allMsgs[activeIdx];

  // Welcome on first visit per student
  useEffect(()=>{
    if(!student.welcomed) {
      addAssistantMsg(activeIdx, 'welcome');
      setStudents(prev=>{const n=[...prev];n[activeIdx]={...n[activeIdx],welcomed:true};return n;});
    }
  },[activeIdx]);

  useEffect(()=>{
    if(chatRef.current) chatRef.current.scrollTop=chatRef.current.scrollHeight;
  },[allMsgs, activeIdx]);

  function addAssistantMsg(idx, content) {
    setAllMsgs(prev=>{
      const n=prev.map(a=>[...a]);
      n[idx]=[...n[idx],{role:'assistant',content}];
      return n;
    });
  }
  function addUserMsg(idx, content) {
    setAllMsgs(prev=>{
      const n=prev.map(a=>[...a]);
      n[idx]=[...n[idx],{role:'user',content}];
      return n;
    });
  }

  async function callAPI(userText, idx, silent=false) {
    if(busy) return;
    setBusy(true);
    const s = students[idx];
    if(!silent) addUserMsg(idx, userText);
    // Build history from current messages + new user message
    const historyMsgs = allMsgs[idx]
      .filter(m=>m.content!=='welcome'&&m.content!=='typing')
      .map(m=>({role:m.role, content:m.content}));
    if(!silent) historyMsgs.push({role:'user',content:userText});
    else historyMsgs.push({role:'user',content:userText});

    // Add typing indicator
    setAllMsgs(prev=>{const n=prev.map(a=>[...a]);n[idx]=[...n[idx],{role:'assistant',content:'typing'}];return n;});

    try {
      const resp = await fetch('/api/chat',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          model:'claude-sonnet-4-20250514',
          max_tokens:1000,
          system:buildSystem(s),
          messages:historyMsgs
        })
      });
      const data = await resp.json();
      // Remove typing indicator
      setAllMsgs(prev=>{const n=prev.map(a=>[...a]);n[idx]=n[idx].filter(m=>m.content!=='typing');return n;});
      if(data.error) {
        addAssistantMsg(idx,`ERROR: ${data.error.message}`);
      } else {
        const reply = data?.content?.[0]?.text || 'Ignosce mihi — no response. Please try again.';
        // Update student history
        setStudents(prev=>{
          const n=[...prev];
          n[idx]={...n[idx],history:[...n[idx].history,{role:'user',content:userText},{role:'assistant',content:reply}]};
          return n;
        });
        addAssistantMsg(idx, reply);
      }
    } catch(e) {
      setAllMsgs(prev=>{const n=prev.map(a=>[...a]);n[idx]=n[idx].filter(m=>m.content!=='typing');return n;});
      addAssistantMsg(idx,`Network error: ${e.message}`);
    }
    setBusy(false);
  }

  function loadText(key) {
    const corpus = CORPUS[key];
    if(!corpus) return;
    stopSpeaking();
    setStudents(prev=>{
      const n=[...prev];
      n[activeIdx]={...n[activeIdx],textKey:key,textTitle:corpus.title,textMeta:corpus.meta,history:[]};
      return n;
    });
    setAllMsgs(prev=>{const n=prev.map(a=>[...a]);n[activeIdx]=[];return n;});
    const prompt = corpus.prompt ||
      `We are beginning study of "${corpus.title}" (${corpus.meta}). Present the opening passage, give its source and historical context, begin teaching at the student's level (${LP[student.level].name}). Teach the first section deeply — do not rush. Address the student as ${student.name}. Format every Latin phrase as [LATIN: text | ENGLISH: translation].`;
    setTimeout(()=>callAPI(prompt, activeIdx, true), 50);
  }

  function setLevel(lv) {
    stopSpeaking();
    setStudents(prev=>{const n=[...prev];n[activeIdx]={...n[activeIdx],level:lv};return n;});
    const note={I:"We begin with vocabulary, simple phrases, and the sounds of Latin.",II:"We build sentences and explore how Latin word-endings carry meaning.",III:"Time for real stories — Phaedrus, simplified Caesar, and more.",IV:"Now we tackle the great prose writers — Caesar, Cicero, Seneca, the Vulgate.",V:"We read the poets in full: Virgil, Horace, Ovid — meter, rhetoric, the complete art."}[lv]||'';
    addAssistantMsg(activeIdx, `**${LP[lv].name}** set for ${student.name}.\n\n*Bene!* ${note}`);
  }

  function switchStudent(idx) {
    if(idx===activeIdx) return;
    stopSpeaking();
    if(recRef.current){try{recRef.current.stop();}catch(e){}} setListening(false);
    setActiveIdx(idx);
  }

  function send(text) {
    const t=(text||input).trim();
    if(!t||busy) return;
    setInput('');
    callAPI(t, activeIdx);
  }

  function toggleMic() {
    if(!SRCtor) return;
    if(listening){if(recRef.current)try{recRef.current.stop();}catch(e){}setListening(false);return;}
    setListening(true);
    const r=new SRCtor(); r.lang='it-IT'; r.continuous=false; r.interimResults=true;
    r.onresult=e=>{
      let interim='',final='';
      for(let i=e.resultIndex;i<e.results.length;i++){
        if(e.results[i].isFinal) final+=e.results[i][0].transcript;
        else interim+=e.results[i][0].transcript;
      }
      setInput(final||interim);
      if(final) setListening(false);
    };
    r.onerror=()=>setListening(false);
    r.onend=()=>setListening(false);
    recRef.current=r; r.start();
  }

  function handleSpeak(latin, onEnd) {
    speakLatin(latin, onEnd);
  }

  function getInitials(name) {
    return name.split(/\s+/).map(w=>w[0]||'').join('').slice(0,2).toUpperCase()||'S';
  }

  const welcomeHtml = `<strong>Salve, ${student.name}!</strong> Welcome to <em>Via Latina</em> — the Latin Way.<br/><br/>I am Magister Marcus. Together we will read <strong>Virgil's poetry</strong>, <strong>Caesar's dispatches from Gaul</strong>, <strong>Cicero's speeches</strong>, <strong>Seneca's letters</strong>, and Holy Scripture in the words of St. Jerome.<br/><br/>Look for the <strong>▶ RECITA</strong> button on Latin passages to hear them spoken aloud. Use the 🎤 microphone to speak your answers. Open <strong>Pronunciation Drill</strong> to practice speaking Latin phrases.<br/><br/><em>Festina lente.</em> Make haste slowly. Choose a <strong>level</strong> and a <strong>text</strong> to begin. <em>Quid vis discere hodie?</em>`;

  return (
    <>
      <style>{STYLES}</style>
      <div className="mm-root">
        <div className="mm-bg"/>
        <div className="mm-shell">

          {/* SIDEBAR */}
          <aside className="mm-sb">
            <div className="mm-brand">
              <div className="mm-brand-icon">M</div>
              <div className="mm-brand-title">Magister Marcus</div>
              <div className="mm-brand-sub">Via Latina · The Latin Way</div>
            </div>
            <a href="/" className="mm-back">← All Subjects</a>

            <SpeedSlider/>

            <div className="mm-lv-section">
              <div className="mm-sec-label">Curriculum Level</div>
              {Object.entries(LP).map(([lv,lp])=>(
                <button key={lv} className={`mm-lv-btn${student.level===lv?' active':''}`} onClick={()=>setLevel(lv)}>
                  <span className="mm-lv-name">{lp.name}</span>
                  <span className="mm-lv-desc">{lv==='I'?'First words & phrases':lv==='II'?'Sentences & grammar':lv==='III'?'Stories & fables':lv==='IV'?'Adapted classical prose':'Poetry & original texts'}</span>
                </button>
              ))}
            </div>

            <div className="mm-drill-section">
              <button className="mm-drill-btn" onClick={()=>setDrillOpen(true)}>
                <span style={{fontSize:'1rem'}}>🎙</span>
                <span className="mm-dt-text">
                  <span className="dn">Pronunciation Drill</span>
                  <span className="dd">Listen · Speak · Repeat</span>
                </span>
              </button>
            </div>

            <div className="mm-corpus">
              <div className="mm-sec-label">Texts &amp; Passages</div>
              {Object.entries(CORPUS).map(([key,c])=>(
                <button key={key} className="mm-cb" onClick={()=>loadText(key)}>
                  <span className="auth">{c.meta.split('·')[0].trim()}</span>
                  {c.title}
                </button>
              ))}
            </div>

            <div className="mm-sb-foot">Each student's history &amp; level saved separately.</div>
          </aside>

          {/* STUDENT BAR */}
          <div className="mm-sbar">
            <span className="mm-sbar-lbl">Discipuli</span>
            <div className="mm-tabs">
              {students.map((s,i)=>(
                <button key={i} className={`mm-tab${i===activeIdx?' active':''}`} onClick={()=>switchStudent(i)}>
                  {i===activeIdx
                    ? <input className="mm-name-inp" value={s.name} maxLength={16}
                        onChange={e=>{const v=e.target.value;setStudents(prev=>{const n=[...prev];n[i]={...n[i],name:v||DEFAULTS[i]};return n;});}}
                        onClick={e=>e.stopPropagation()}
                        onKeyDown={e=>{if(e.key==='Enter')e.target.blur();e.stopPropagation();}}
                      />
                    : <span className="mm-tab-name">{s.name}</span>
                  }
                  <span className="mm-tab-lvl">{LP[s.level].badge}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TOP BAR */}
          <div className="mm-tbar">
            <div>
              <div className="mm-tbar-title">{student.textTitle}</div>
              <div className="mm-tbar-meta">{student.textMeta}</div>
            </div>
            <div className="mm-badge">{LP[student.level].badge}</div>
          </div>

          {/* CHAT */}
          <div className="mm-chat" ref={chatRef}>
            {msgs.map((msg,i)=>(
              <div key={i} className={`mm-msg ${msg.role}`}>
                <div className="mm-av">{msg.role==='assistant'?'MM':getInitials(student.name)}</div>
                <div className="mm-bub">
                  <span className="mm-lbl">{msg.role==='assistant'?'Magister Marcus':student.name}</span>
                  {msg.content==='welcome'
                    ? <p dangerouslySetInnerHTML={{__html:welcomeHtml}}/>
                    : msg.content==='typing'
                    ? <div className="mm-dots"><span/><span/><span/></div>
                    : msg.role==='assistant'
                    ? <ParsedResponse text={msg.content} onSpeak={handleSpeak}/>
                    : <p>{msg.content}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* INPUT BAR */}
          <div className="mm-ibar">
            <div className="mm-sugg">
              {(SUGG[student.level]||[]).map((s,i)=>(
                <button key={i} className="mm-sug" onClick={()=>send(s)}>{s}</button>
              ))}
            </div>
            <div className="mm-input-row">
              <textarea className="mm-inp" value={input} placeholder="Scribe hic… or use 🎤 to speak…" rows={1}
                onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}}
                style={{height:'auto'}}
              />
              <button className={`mm-mic${!SRCtor?' off':listening?' listening':''}`}
                onClick={toggleMic} title={!SRCtor?'Speech recognition requires Chrome or Edge':'Speak Latin'}>
                🎤
              </button>
              <button className="mm-send" onClick={()=>send()} disabled={busy||!input.trim()}>
                MITTE ▶
              </button>
            </div>
          </div>

        </div>

        {drillOpen && <DrillModal level={student.level} onClose={()=>setDrillOpen(false)}/>}
      </div>
    </>
  );
}
