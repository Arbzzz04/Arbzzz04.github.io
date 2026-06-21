import { tools, experience } from '../content.js';
import { StarIcon } from './Icons.jsx';

export default function Skills({ theme }) {
  const isDark = theme === 'dark';
  return (
    <section className="section container" id="skills">
      <div className="section__head reveal">
        <span className="eyebrow">Skills</span>
        <h2 className="section__title">Tools &amp; expertise</h2>
        <p className="section__lead">
          The stack I reach for to collect, model, and analyse data — plus the
          areas where I&apos;ve built the most depth.
        </p>
      </div>

      <div className="skills__tools">
        {tools.map(({ name, Icon, color, darkColor }) => (
          <div className="tool reveal" key={name}>
            <span className="tool__chip">
              <Icon size={38} color={isDark && darkColor ? darkColor : color} />
            </span>
            <span className="tool__name">{name}</span>
          </div>
        ))}
      </div>

      <div className="skills__exp">
        {experience.map((e) => (
          <div className="exp-card reveal" key={e.title}>
            <span className="exp-card__star">
              <StarIcon width={18} height={18} />
            </span>
            <div>
              <div className="exp-card__title">{e.title}</div>
              <div className="exp-card__years">{e.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
