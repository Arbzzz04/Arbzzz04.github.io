import { useEffect, useRef } from 'react';

/* Interactive "data network": drifting nodes connected by lines that respond
   to the cursor — evokes data graphs / distributed systems. Sits behind the
   hero content. Uses the theme accent color and is fully cleaned up on unmount. */

function hexToRgb(hex) {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full || '6d8bff', 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function ParticleField({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--accent')
        .trim() || '#6d8bff';
    const [r, g, b] = hexToRgb(accent);

    let raf = 0;
    let w = 0;
    let h = 0;
    let particles = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK = 132;
    const MOUSE_LINK = 168;

    function resize() {
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(18, Math.min(Math.round((w * h) / 15000), 84));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.34,
        r: Math.random() * 1.5 + 0.8,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.65)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.15 * (1 - dist / LINK)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_LINK) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.28 * (1 - md / MOUSE_LINK)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    function loop() {
      step();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onVisibility() {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(loop);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    if (reduce) {
      step(); // a single static frame, no animation
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
