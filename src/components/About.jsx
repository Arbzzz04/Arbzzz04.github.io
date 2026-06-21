import { about } from '../content.js';

export default function About() {
  return (
    <section className="section container" id="about">
      <div className="section__head reveal">
        <span className="eyebrow">About</span>
        <h2 className="section__title">A bit about me</h2>
      </div>

      <div className="about__grid">
        <div className="about__body reveal">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about__facts reveal">
          {about.facts.map((f) => (
            <div className="fact" key={f.label}>
              <span className="fact__label">{f.label}</span>
              <span className="fact__value">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
