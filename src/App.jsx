import { useEffect } from 'react';
import './App.css';
import { useTheme } from './hooks/useTheme.js';
import { useScrollReveal } from './hooks/useScrollReveal.js';
import { profile } from './content.js';

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Toolbox from './components/Toolbox.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();

  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`;
  }, []);

  // Cursor spotlight: track the mouse and expose it as CSS variables.
  // Skipped on touch devices (no hover) to avoid a stuck glow.
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined;

    let raf = 0;
    let x = 0;
    let y = 0;
    let pending = false;
    const root = document.documentElement;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${x}px`);
        root.style.setProperty('--my', `${y}px`);
        pending = false;
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="app">
      <div className="spotlight" aria-hidden="true" />
      <Nav theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Skills theme={theme} />
        <Toolbox />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
