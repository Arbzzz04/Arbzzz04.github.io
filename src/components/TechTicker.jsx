import { ticker } from '../content.js';

/* One marquee row. The items are duplicated so the CSS translate loop has no
   visible seam. `dir` controls scroll direction. */
function Row({ items, dir }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker__row" aria-hidden="true">
      <div className={`ticker__track ticker__track--${dir}`}>
        {doubled.map((t, i) => (
          <span className="ticker__item" key={`${t.label}-${i}`}>
            {t.Icon && <t.Icon className="ticker__icon" />}
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechTicker() {
  const rowA = ticker.filter((_, i) => i % 2 === 0);
  const rowB = ticker.filter((_, i) => i % 2 === 1);

  return (
    <div className="ticker">
      {/* Real, readable list for screen readers (the rows above are decorative) */}
      <ul className="sr-only">
        {ticker.map((t) => (
          <li key={t.label}>{t.label}</li>
        ))}
      </ul>
      <Row items={rowA} dir="left" />
      <Row items={rowB} dir="right" />
    </div>
  );
}
