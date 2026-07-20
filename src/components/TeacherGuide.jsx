import { useState } from "react";
import "./TeacherGuide.css";

function Section({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className={`tg-section ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="tg-section__head"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="tg-section__icon" aria-hidden="true">{icon}</span>
        <span className="tg-section__title">{title}</span>
        <span className="tg-section__chevron" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="tg-section__body" hidden={!open}>{children}</div>
    </section>
  );
}

export default function TeacherGuide({ guide, form = "both" }) {
  if (!guide) return null;

  const showIA = form === "IA" || form === "both";
  const showIIA = form === "IIA" || form === "both";
  const g = guide;
  const printGuide = () => window.print();

  return (
    <div className="tg" data-form={form}>
      <div className="tg__bar">
        <h3 className="tg__heading">Teacher Guide</h3>
        <button type="button" className="tg__print" onClick={printGuide}>🖨 Print guide</button>
      </div>

      {g.glance && (
        <div className="tg-glance">
          <div className="tg-glance__row">
            <span className="tg-glance__chip">⏱ {g.glance.time}</span>
            <span className="tg-glance__chip">📍 {g.glance.where}</span>
            <span className="tg-glance__chip">🧺 Prep: {g.glance.prep}</span>
          </div>
          <p className="tg-glance__heart"><strong>Heart of the lesson:</strong> {g.glance.heart}</p>
          <p className="tg-glance__one"><strong>If you do one thing today:</strong> {g.glance.oneThing}</p>
        </div>
      )}

      {g.background && (
        <Section title="Background for You" icon="📖" defaultOpen>
          {g.background.text?.map((p, i) => <p key={i}>{p}</p>)}
          {g.background.keyFacts?.length > 0 && (
            <>
              <p className="tg-label">Key facts</p>
              <ul className="tg-list">{g.background.keyFacts.map((f, i) => <li key={i}>{f}</li>)}</ul>
            </>
          )}
          {g.background.sayItAloud?.length > 0 && (
            <p className="tg-aloud">🔊 Say it aloud: {g.background.sayItAloud.join("  ·  ")}</p>
          )}
        </Section>
      )}

      {(g.supplies?.length || g.prepNote) && (
        <Section title="Supplies & Prep" icon="🧺">
          {g.supplies?.length > 0 && (
            <table className="tg-table"><tbody>
              {g.supplies.map((s, i) => (<tr key={i}><th scope="row">{s.item}</th><td>{s.note}</td></tr>))}
            </tbody></table>
          )}
          {g.prepNote && <p className="tg-note">⏳ {g.prepNote}</p>}
        </Section>
      )}

      {g.flow?.length > 0 && (
        <Section title="Teaching Flow" icon="🧭" defaultOpen>
          <ol className="tg-flow">
            {g.flow.map((step, i) => (
              <li key={i}>
                {step.min && <span className="tg-flow__time">{step.min} min</span>}
                <span className="tg-flow__text">{step.text}</span>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {g.discussion && (
        <Section title="Discussion & Narration" icon="💬">
          {g.discussion.launch && <p><strong>Launching questions:</strong> {g.discussion.launch}</p>}
          <div className="tg-forms">
            {showIA && (
              <div className="tg-form tg-form--ia">
                <span className="tg-form__tag">Form IA · ~6–8</span>
                <p>{g.discussion.formIA}</p>
              </div>
            )}
            {showIIA && (
              <div className="tg-form tg-form--iia">
                <span className="tg-form__tag">Form IIA · ~9–11</span>
                <p>{g.discussion.formIIA}</p>
              </div>
            )}
          </div>
          {g.discussion.ifAsked?.length > 0 && (
            <>
              <p className="tg-label">If your child asks…</p>
              <dl className="tg-qa">
                {g.discussion.ifAsked.map((qa, i) => (
                  <div className="tg-qa__item" key={i}><dt>“{qa.q}”</dt><dd>{qa.a}</dd></div>
                ))}
              </dl>
            </>
          )}
        </Section>
      )}

      {g.worship && (
        <Section title="Wonder & Worship" icon="✝️">
          <div className="tg-worship">
            {g.worship.scripture && <blockquote className="tg-scripture">{g.worship.scripture}</blockquote>}
            {g.worship.patristic && <p>{g.worship.patristic}</p>}
            {g.worship.godward && <p className="tg-godward"><strong>Turn it Godward:</strong> {g.worship.godward}</p>}
          </div>
        </Section>
      )}

      {g.challenges?.length > 0 && (
        <Section title="Common Challenges & Solutions" icon="🛟">
          <dl className="tg-challenges">
            {g.challenges.map((c, i) => (
              <div className="tg-challenges__item" key={i}><dt>{c.problem}</dt><dd>{c.fix}</dd></div>
            ))}
          </dl>
        </Section>
      )}

      {g.models && (
        <Section title="Model Answers" icon="⭐">
          {showIA && g.models.formIA && <p><span className="tg-form__tag">Form IA</span> {g.models.formIA}</p>}
          {showIIA && g.models.formIIA && <p><span className="tg-form__tag">Form IIA</span> {g.models.formIIA}</p>}
          {g.models.journal && <p><strong>Strong journal entry:</strong> {g.models.journal}</p>}
        </Section>
      )}

      {g.extensions && (
        <Section title="Extensions & Adaptations" icon="🌱">
          <p className="tg-min"><strong>Minimum viable lesson:</strong> {g.extensions.minimum}</p>
          <ul className="tg-list">
            {g.extensions.goOutside && <li><strong>Go outside:</strong> {g.extensions.goOutside}</li>}
            {g.extensions.make && <li><strong>Make:</strong> {g.extensions.make}</li>}
            {g.extensions.readMore && <li><strong>Read more:</strong> {g.extensions.readMore}</li>}
            {g.extensions.connect && <li><strong>Connect:</strong> {g.extensions.connect}</li>}
            {g.extensions.multiAge && <li><strong>Multi-age “meanwhile”:</strong> {g.extensions.multiAge}</li>}
            {g.extensions.youngest && <li><strong>Youngest learner:</strong> {g.extensions.youngest}</li>}
          </ul>
          {showIIA && g.extensions.digDeeper && (
            <p className="tg-dig"><strong>Dig Deeper (Form IIA):</strong> {g.extensions.digDeeper}</p>
          )}
        </Section>
      )}
    </div>
  );
}

export function ageToForm(age) {
  if (age === "8") return "IA";
  if (age === "11") return "IIA";
  return "both";
}
