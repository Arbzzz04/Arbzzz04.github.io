import { projects } from '../content.js';
import { ArrowUpRightIcon } from './Icons.jsx';

export default function Projects() {
  return (
    <section className="section container" id="work">
      <div className="section__head reveal">
        <span className="eyebrow">Work</span>
        <h2 className="section__title">Selected projects</h2>
        <p className="section__lead">
          A few things I&apos;ve built — dashboards, automations, and analyses
          that moved the needle.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((p) => {
          const Wrapper = p.link ? 'a' : 'div';
          const linkProps = p.link
            ? { href: p.link, target: '_blank', rel: 'noreferrer' }
            : {};
          return (
            <Wrapper className="project reveal" key={p.title} {...linkProps}>
              <div className="project__top">
                <span className="project__icon" aria-hidden="true">
                  {p.icon}
                </span>
                {p.link && (
                  <span className="project__link" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                )}
              </div>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>
              <div className="project__tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
