// ─────────────────────────────────────────────────────────────────────────────
// src/data/historia.js
// Single source of truth for Magister Historia lesson data.
// Unit 2 — The American Founding, 1763–1789
//
// LESSON SHAPE:
//   id            string   e.g. "2.1"
//   week          number
//   type          string   "STORY" | "SEMINAR" | "NARRATE" | "ASSESS"
//   title         string
//   dates         string   historical period for this lesson
//   tagline       string | null
//   teacherPrep   string | null
//   objective     string | null
//   storiesForHeart  string[] | null   stories to tell in the teacher's voice
//   opening       string | null
//   readAloud     { label: string, title: string, pages: string, link: string|null }[] | null
//   primarySource { label: string, title: string, link: string|null } | null
//   narrationIA   string | null   oral narration prompt for Form IA (Gr. 3–4)
//   narrationIIA  string | null   written narration prompt for Form IIA (Gr. 5–6)
//   copyworkIA    string | null   copy passage (Form IA)
//   dictationIIA  string | null   dictation passage (Form IIA)
//   vocab         string[]
//   persons       string[]
//   geography     string[]
//   memorize      string | null   to-know-by-heart passage
//   notebooking   string | null   notebooking page instruction
//   civicsLinks   string[]        U.S. Civics Test question references
//   watchFor      string | null
//   discussion    string[]        Questions for the American Mind
// ─────────────────────────────────────────────────────────────────────────────

export const HISTORIA_UNITS = [

  // ═══════════════════════════════════════════════════════════════════════════
  // UNIT 2 — The American Founding, 1763–1789
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "u2",
    title: "The American Founding",
    subtitle: "1763–1789 · 4 Lessons · 9 Weeks",
    icon: "⚖️",
    lessons: [

      // ── Lesson 1 ─────────────────────────────────────────────────────────
      {
        id: "2.1", week: 1, type: "STORY",
        title: "Self-Government or Tyranny",
        dates: "1763–1776",
        tagline: "After 150 years of freedom, Britain began to tighten its grip.",
        teacherPrep: "Read Guerber, Story of the Thirteen Colonies pp. 68–80 (Gutenberg). Know the 12 stories below well enough to tell them without notes. Have a map of North America in 1763 ready.",
        objective: "Students learn how new British exertions of authority over the colonists — after 150 years of relative freedom — led to resistance, then to open war, then to the Declaration of Independence. The central question is about self-government: whether a people must be controlled by the will of others without their free consent.",
        storiesForHeart: [
          "Biographies — Washington, Franklin, Samuel Adams, Patrick Henry, Thomas Paine, Jefferson. Introduce them as real people, not icons.",
          "The Boston Massacre (March 5, 1770) — the confrontation, the shots, Crispus Attucks. Then: John Adams agrees to defend the redcoats. Why?",
          "John Adams's defense of the redcoats — the most morally courageous act in early American politics. He believed even hated men deserved a fair trial.",
          "The Boston Tea Party (December 16, 1773) — Samuel Adams, the Sons of Liberty, the disguise, the chests of tea, the harbor stained brown.",
          "Patrick Henry's 'Give Me Liberty' speech — Virginia Convention, March 1775. Read the climax aloud dramatically.",
          "Paul Revere's Ride — April 18–19, 1775. The signal in the Old North Church, the moonlit road to Lexington. Read Longfellow aloud in full.",
          "Minutemen at Lexington and Concord — 'Don't fire until you see the whites of their eyes.' The shot heard 'round the world.",
          "Siege of Fort Ticonderoga — Ethan Allen and the Green Mountain Boys; Henry Knox drags cannon 300 miles through winter.",
          "Battle of Bunker Hill — The Patriots lose the hill but establish that taking a hill from armed Americans is costly.",
          "Liberation of Boston — Knox's cannon on Dorchester Heights. The British evacuate. Washington's first great victory: not a shot fired.",
          "John Adams nominates Washington — why Adams? why Washington?",
          "Letters of John and Abigail Adams — 'Remember the Ladies.' The conversation of a marriage under the weight of revolution.",
        ],
        opening: "For over 150 years, the British colonists of North America governed themselves. England was too busy with its own troubles to pay close attention, and in that space the colonists built something: elected assemblies, local courts, town meetings. They were Englishmen who had developed the habit of self-rule. Then the French and Indian War ended in 1763 — and Britain, deeply in debt, looked at the colonies and thought: they should help pay for this.",
        readAloud: [
          { label: "Form IA — Week 1–2", title: "Liberty! — Russell Freedman", pages: "pp. 6–17, 26–31, 35", link: null },
          { label: "Both forms — Week 2–3", title: "Meet George Washington — Joan Heilbroner", pages: "pp. 1–35", link: null },
          { label: "Teacher reference (free)", title: "Guerber, Story of the Thirteen Colonies", pages: "pp. 68–80", link: "https://www.gutenberg.org/ebooks/17917" },
        ],
        primarySource: { label: "Primary source", title: "Patrick Henry, 'Give Me Liberty or Give Me Death!' (1775)", link: "https://avalon.law.yale.edu/18th_century/patrick.asp" },
        narrationIA: "Tell the story of the Boston Tea Party. Why did it happen? What happened? What was the result?",
        narrationIIA: "Why did the colonists believe Britain was acting as a tyrant after 1763? Explain in a paragraph using at least three specific events or laws as evidence. What was the colonists' central principle — what were they actually arguing about?",
        copyworkIA: '"Give me liberty, or give me death!" — Patrick Henry, March 23, 1775',
        dictationIIA: '"Is life so dear or peace so sweet as to be purchased at the price of chains and slavery? Forbid it, Almighty God! I know not what course others may take, but as for me, give me liberty or give me death!" — Patrick Henry',
        vocab: ["self-government", "representation", "consent", "tyranny", "salutary neglect", "Proclamation of 1763", "Sons of Liberty", "boycott", "petition", "Boston Massacre", "Boston Tea Party", "Intolerable Acts", "Minutemen", "Redcoats", "militia", "mercenary", "Continental Army", "Common Sense", "Patriot", "Loyalist"],
        persons: ["George III", "George Washington", "Crispus Attucks", "Paul Revere", "Samuel Adams", "Benjamin Franklin", "Patrick Henry", "John Adams", "Abigail Adams", "Ethan Allen", "Henry Knox", "Thomas Paine", "Thomas Jefferson"],
        geography: ["Boston", "Philadelphia", "Independence Hall", "Lexington and Concord", "Fort Ticonderoga", "The Old North Church"],
        memorize: '"Give me liberty, or give me death!" — Patrick Henry\n"The shot heard \'round the world." — Ralph Waldo Emerson\n"One if by land, two if by sea."\n"Don\'t Tread On Me"',
        notebooking: "NB Page 1 (Paul Revere's Ride) or NB Page 2 (Boston Tea Party) or NB Page 3 (Lexington). Students choose one scene to illustrate. Caption: one sentence narration in their own words.",
        civicsLinks: ["Q.77 — Name one reason Americans declared independence", "Q.85 — Benjamin Franklin is famous for... (name one)", "Q.86 — George Washington is famous for... (name one)"],
        watchFor: "Students who confuse cause and effect: taxes were the occasion, not the cause. The deeper cause was the colonists' 150-year habit of self-rule and the principle that government requires consent. Don't let the Boston Tea Party overshadow the constitutional argument.",
        discussion: [
          "Why was it good that the colonists had been allowed so much self-government for so long?",
          "What changed in 1763? Why did Britain start paying attention to the colonies after the French and Indian War?",
          "What is the difference between a Patriot and a Loyalist? Is it easy to know which side is right when you are living through it?",
          "Why was John Adams's defense of the redcoats heroic?",
          "What was the 'shot heard 'round the world'? Why is it called that?",
          "What did Thomas Paine say in Common Sense? Did it change people's minds?",
        ],
      },

      // ── Lesson 2 ─────────────────────────────────────────────────────────
      {
        id: "2.2", week: 4, type: "SEMINAR",
        title: "The Declaration of Independence",
        dates: "1776",
        tagline: "All men are created equal — and America was founded on an argument.",
        teacherPrep: "Print one copy of the Declaration of Independence per student (free from National Archives). Read Guerber pp. 81–82. Know the contradiction of slavery and how to present it honestly. Have Jefferson's biography ready.",
        objective: "Students read the Declaration of Independence and engage with its foundational claims about natural rights, government, and human equality — including the contradiction between those principles and the institution of slavery.",
        storiesForHeart: [
          "The first public reading of the Declaration — July 8, 1776, State House Yard, Philadelphia. The crowd. The heat. The Liberty Bell. The royal coat of arms torn from the courthouse wall.",
          "The signing — the quiet in Independence Hall when the delegates understood what they had done. Each man knew he was committing treason. Hancock's bold signature. Franklin's remark.",
        ],
        opening: "Jefferson rented two rooms on Market Street in Philadelphia. In 17 days — June 11–28, 1776 — he wrote the Declaration. He used no books. He was drawing on what he already knew: Locke's natural rights philosophy, Virginia's political tradition, a hundred years of colonial argument. He showed the draft to Franklin and Adams. They made small revisions. Then Congress debated it for three days, made 86 changes — and removed Jefferson's passage condemning slavery. The contradiction was built in from the start.",
        readAloud: [
          { label: "Form IA — Week 4–5", title: "Meet Thomas Jefferson — Marvin Barrett", pages: "pp. 1–28", link: null },
          { label: "Primary source — both forms", title: "Declaration of Independence — full text", pages: "Preamble read in class", link: "https://avalon.law.yale.edu/18th_century/declare.asp" },
          { label: "Teacher reference (free)", title: "Guerber, Story of the Thirteen Colonies", pages: "pp. 81–82", link: "https://www.gutenberg.org/ebooks/17917" },
        ],
        primarySource: { label: "Seminar text", title: "Declaration of Independence — Preamble (full)", link: "https://avalon.law.yale.edu/18th_century/declare.asp" },
        narrationIA: "Tell me the story of how the Declaration was written and signed. What does the Declaration say about rights — tell me in your own words.",
        narrationIIA: "What is the Declaration of Independence about? Explain its argument about natural rights, government, and what happens when government fails. Use specific phrases from the document.",
        copyworkIA: '"We hold these Truths to be self-evident, that all Men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty, and the Pursuit of Happiness." — Declaration of Independence',
        dictationIIA: '"When in the Course of human Events, it becomes necessary for one People to dissolve the Political Bands which have connected them with another, and to assume among the Powers of the Earth, the separate and equal Station to which the Laws of Nature and of Nature\'s God entitle them, a decent Respect to the Opinions of Mankind requires that they should declare the causes which impel them to the Separation." — Declaration of Independence',
        vocab: ["self-evident", "natural rights", "equality", "unalienable", "liberty", "pursuit of happiness", "consent of the governed", "list of grievances", "treason", "Liberty Bell"],
        persons: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "John Hancock"],
        geography: ["Philadelphia", "Independence Hall"],
        memorize: '"We hold these Truths to be self-evident, that all Men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty, and the Pursuit of Happiness." — Declaration of Independence\n\n"And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor." — final sentence',
        notebooking: "NB Page 4 (Declaration of Independence — Trumbull painting). Illustrate the scene. Caption: one sentence — what moment is this, and what were the men risking by signing?",
        civicsLinks: ["Q.8 — Why is the Declaration important?", "Q.9 — What document said the colonies were free from Britain?", "Q.10 — Name two important ideas from the Declaration", "Q.78 — Who wrote the Declaration?", "Q.79 — When was the Declaration adopted?", "Q.125 — What is Independence Day?"],
        watchFor: "The contradiction of slavery is not a footnote — it is central. Jefferson's original draft condemned the slave trade; Congress removed it. Present this honestly. The Declaration's words outlasted the hypocrisy of some who wrote them. Lincoln, Douglass, and King all stood on those words to demand America live up to them.",
        discussion: [
          "What is a 'self-evident' truth? Can you think of other things that seem self-evidently true?",
          "Equal in what way? Are all people the same height, strength, intelligence? What equality does Jefferson mean?",
          "Where do rights come from, according to Jefferson? Can a government take them away?",
          "Why do people create governments? What is government supposed to do?",
          "Jefferson owned slaves while writing 'all men are created equal.' Is that a contradiction? How do you think about it?",
          "Why does it matter that America was founded on ideas rather than on a royal family or a conquered territory?",
        ],
      },

      // ── Lesson 3 ─────────────────────────────────────────────────────────
      {
        id: "2.3", week: 6, type: "STORY",
        title: "The War of Independence",
        dates: "1776–1783",
        tagline: "Washington lost most of his battles and won the war.",
        teacherPrep: "Read Guerber pp. 83–102. Know the stories of Crossing the Delaware, Valley Forge, Saratoga, Yorktown, and the Newburgh Conspiracy in detail. The Newburgh story is the most important — prepare to tell it well.",
        objective: "Students learn the major figures, common soldiers, strategy, and specific battles of the American War of Independence — and why Washington's resignation after the war was as important as any battle he fought.",
        storiesForHeart: [
          "Washington's Crossing of the Delaware — Christmas night, 1776. The army was exhausted, starving, deserting. Paine's 'These are the times that try men's souls.' The crossing. Trenton. The army survived.",
          "Valley Forge — winter 1777–78. Starvation. Frostbite. Bare feet in the snow. Baron von Steuben drilling raw troops. Lafayette. The army that survived Valley Forge was different.",
          "Battle of Saratoga — October 1777. American farmers in the woods. Burgoyne surrenders. France watches — and decides America might actually win.",
          "The French Alliance — why France helped. What it cost. What it meant.",
          "Battle of Yorktown — Cornwallis trapped between Washington's army and the French fleet. October 19, 1781. The surrender. The British band plays 'The World Turned Upside Down.'",
          "The Newburgh Conspiracy — 1783. Washington's officers, unpaid, plot to overthrow Congress. Washington enters the meeting. He puts on his spectacles — 'Gentlemen, you will permit me to put on my spectacles, for I have not only grown gray but almost blind in the service of my country.' The room weeps. The conspiracy dissolves. Tell this story slowly.",
          "Washington's resignation — December 23, 1783. He gives up command and returns to Mount Vernon. The world cannot believe it. King George reportedly said: 'If he does that, he will be the greatest man in the world.'",
        ],
        opening: "Thomas Paine wrote in December 1776: 'These are the times that try men's souls. The summer soldier and the sunshine patriot will, in this crisis, shrink from the service of their country.' Washington had his men read it aloud. Then he led them across an ice-choked river on Christmas night.",
        readAloud: [
          { label: "Both forms — Week 6–7", title: "Meet George Washington — Joan Heilbroner", pages: "pp. 36–63", link: null },
          { label: "Teacher reference (free)", title: "Guerber, Story of the Thirteen Colonies", pages: "pp. 83–102", link: "https://www.gutenberg.org/ebooks/17917" },
          { label: "Hillsdale free lecture", title: "The Great American Story — Lecture 4", pages: null, link: "https://online.hillsdale.edu" },
        ],
        primarySource: { label: "Primary source", title: "Thomas Paine, The American Crisis No. 1 (1776)", link: "https://www.gutenberg.org/ebooks/3741" },
        narrationIA: "Tell the story of Washington's Crossing of the Delaware. What was happening before it, what happened during it, and why did it matter?",
        narrationIIA: "Tell the story of the Newburgh Conspiracy and Washington's response. What does this episode reveal about his character — and why does it matter for a republic that the general gave up his power?",
        copyworkIA: '"These are the times that try men\'s souls." — Thomas Paine, The American Crisis, December 1776',
        dictationIIA: '"These are the times that try men\'s souls. The summer soldier and the sunshine patriot will, in this crisis, shrink from the service of their country; but he that stands it now, deserves the love and thanks of man and woman." — Thomas Paine, The American Crisis',
        vocab: ["Hessians", "mercenary", "guerrilla warfare", "privateer", "volley", "Brown Bess Musket", "ally", "French Treaty of Alliance", "Battle of Saratoga", "Newburgh Conspiracy", "American Cincinnatus", "Treaty of Paris"],
        persons: ["George Washington", "Phillis Wheatley", "Abigail Adams", "Marquis de Lafayette", "Baron von Steuben", "Benedict Arnold", "Henry Knox", "Ethan Allen", "Alexander Hamilton"],
        geography: ["Delaware River", "Valley Forge", "Saratoga", "Yorktown"],
        memorize: '"These are the times that try men\'s souls." — Thomas Paine\n"Yankee Doodle" — first stanza',
        notebooking: "NB Page 5 (Crossing the Delaware — Leutze) or NB Page 6 (Valley Forge — Dunsmore). Illustrate the scene. Caption: one sentence — what is happening, and what does it reveal about Washington?",
        civicsLinks: ["Q.86 — George Washington is famous for... (name one)"],
        watchFor: "The Newburgh Conspiracy is the hinge of the whole unit — it is the moment Washington chose republic over power. Students who understand this understand why the founding worked. Don't rush past it.",
        discussion: [
          "Why did the Americans win the War of Independence? Give at least three reasons.",
          "Washington lost most of his battles. How did he still win the war?",
          "Why was Valley Forge a turning point even though there was no battle?",
          "What role did women play in the War of Independence? Mention at least one person by name.",
          "What does 'American Cincinnatus' mean? Who was Cincinnatus, and why did people compare Washington to him?",
          "Why did Washington's resignation matter as much as any battle he fought?",
        ],
      },

      // ── Lesson 4 ─────────────────────────────────────────────────────────
      {
        id: "2.4", week: 8, type: "SEMINAR",
        title: "The United States Constitution",
        dates: "1783–1789",
        tagline: '"A republic, if you can keep it." — Benjamin Franklin',
        teacherPrep: "Read Federalist No. 51 (two pages — know it cold). Read Guerber pp. 103–108. Know the stories of the Constitutional Convention and Shays's Rebellion. Have a printed copy of the Preamble ready for copywork.",
        objective: "Students learn about the drafting of the Constitution, the debates within the Convention, the structure of the federal government, and the Bill of Rights — and why Madison believed that if men were angels, no government would be necessary.",
        storiesForHeart: [
          "Shays's Rebellion — 1786–87. Debt-ridden farmers close courthouses by force. The Continental Congress cannot respond. The Articles of Confederation have failed. Something must be done.",
          "The Constitutional Convention — Philadelphia, summer 1787. Secrecy. Heat. Madison's notes. The Great Compromise. Washington as the silent, authoritative presence at the front of the room.",
          "The Three-Fifths Compromise — the contradiction built into the document. Acknowledge it directly.",
          "Benjamin Franklin's rising sun story — on the last day of the Convention, Franklin points to the sun carved on Washington's chair. He had wondered all summer whether it was rising or setting. 'I have the happiness to know that it is a rising and not a setting sun.'",
          "A woman asks Franklin what they have created: 'A republic, if you can keep it.' Tell this slowly. Let students feel its weight.",
          "The Federalist Papers — Madison, Hamilton, Jay write 85 essays under the name Publius to argue for ratification. The most sophisticated defense of a constitution ever written, published in newspapers.",
          "The Bill of Rights — why the Anti-Federalists demanded it. What it protects. Why those protections were so important to people who had just fought a war over rights.",
        ],
        opening: "Madison wrote in Federalist No. 51: 'If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself.' The Constitution is the document that attempted to solve this problem.",
        readAloud: [
          { label: "Both forms — Week 8–9", title: "If You Were There When They Signed the Constitution", pages: "pp. 1–35", link: null },
          { label: "Teacher reference (free)", title: "Guerber, Story of the Thirteen Colonies", pages: "pp. 103–108", link: "https://www.gutenberg.org/ebooks/17917" },
          { label: "Primary source (free)", title: "Federalist No. 51 — James Madison", pages: null, link: "https://avalon.law.yale.edu/18th_century/fed51.asp" },
        ],
        primarySource: { label: "Seminar text", title: "Preamble to the Constitution", link: "https://constitution.congress.gov/constitution/preamble/" },
        narrationIA: "What is the Constitution? Tell me in your own words what it does. What are the three branches of government?",
        narrationIIA: "Why did the Founders design a government with three separate branches? What problem were they trying to solve? Explain how separation of powers and checks and balances work together — and why Madison wrote 'If men were angels, no government would be necessary.'",
        copyworkIA: '"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."',
        dictationIIA: '"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America." — Preamble to the Constitution',
        vocab: ["Articles of Confederation", "Shays's Rebellion", "Constitutional Convention", "Father of the Constitution", "faction", "majority tyranny", "federalism", "separation of powers", "checks and balances", "legislative", "executive", "judicial", "Bill of Rights", "amendment", "The Federalist Papers", "Publius", "Three-Fifths Compromise", "Anti-Federalists"],
        persons: ["James Madison", "Alexander Hamilton", "Gouverneur Morris", "George Washington", "Publius"],
        geography: ["Philadelphia", "Independence Hall"],
        memorize: '"A republic, if you can keep it." — Benjamin Franklin, September 17, 1787\n"If men were angels, no government would be necessary." — Federalist No. 51\n\nPreamble to the Constitution — both forms memorize in full',
        notebooking: "NB Page 7 (Constitutional Convention) or NB Page 8 (Bill of Rights). Caption: one sentence — what is being created here, and why does it matter?",
        civicsLinks: ["Q.1 — Form of government of the United States", "Q.2 — Supreme law of the land", "Q.3 — Name one thing the Constitution does", "Q.6 — What does the Bill of Rights protect?", "Q.83 — Name one writer of The Federalist Papers", "Q.88 — James Madison is famous for... (name one)", "Q.89 — Alexander Hamilton is famous for... (name one)"],
        watchFor: "Franklin's 'republic, if you can keep it' is not a joke — it is a warning. Help students feel its weight: the Founders knew republics fail. Every republic before America had failed. They were trying to build something that had never lasted. Whether it lasts depends on citizens who understand it.",
        discussion: [
          "What was wrong with the Articles of Confederation? Why did the Founders think a new framework was needed?",
          "What is majority tyranny? Why were the Founders worried about it?",
          "What is the difference between a democracy and a republic? Why did the Founders choose a republic?",
          "Why did the Founders divide power between three branches? What problem were they solving?",
          "Why did the Anti-Federalists demand a Bill of Rights? What were they afraid of?",
          "What does 'a republic, if you can keep it' mean? What does it take to keep a republic?",
        ],
      },

    ],
  },

];
