import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import { profile, nav } from '../content.js';

export default function Nav({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="dot" />
          {profile.shortName}
        </a>
        <nav className="nav__links">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
}
