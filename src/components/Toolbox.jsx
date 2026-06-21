import { toolbox } from '../content.js';

/* A static, categorized grid of the wider toolset. Each pill fades-and-rises
   once (staggered) as it scrolls into view, then stays put — no looping motion.
   The entrance uses `transform`/opacity (driven by the shared .reveal observer)
   while the hover lift uses `translate`, so the two never fight. */
export default function Toolbox() {
  return (
    <section className="container toolbox" aria-label="Wider toolbox">
      <p className="toolbox__intro reveal">Plus a wider toolbox I work across</p>

      <div className="toolbox__grid">
        {toolbox.map((cat) => (
          <div className="toolbox__col" key={cat.group}>
            <h3 className="toolbox__heading reveal">{cat.group}</h3>
            <div className="toolbox__pills">
              {cat.items.map((t, i) => (
                <span
                  className="pill reveal"
                  key={t.label}
                  style={{ '--reveal-delay': `${i * 50}ms` }}
                >
                  {t.Icon && <t.Icon className="pill__icon" />}
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
