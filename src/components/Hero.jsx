import { profile } from '../content.js';
import ParticleField from './ParticleField.jsx';
import CodeTerminal from './CodeTerminal.jsx';
import {
  LinkedInIcon,
  GitHubIcon,
  MailIcon,
  ArrowRightIcon,
} from './Icons.jsx';

export default function Hero({ theme }) {
  const firstName = profile.name.split(' ')[0];
  const rest = profile.name.split(' ').slice(1).join(' ');

  return (
    <section className="hero" id="top">
      <div className="hero__particles">
        <ParticleField theme={theme} />
      </div>

      <div className="container hero__grid">
        <div className="hero__intro">
          <span className="hero__status reveal">
            <span className="pulse" />
            {profile.status}
          </span>

          <h1 className="hero__title reveal">
            {firstName} {rest && <span className="accent">{rest}</span>}
          </h1>

          <p className="hero__role reveal">{profile.role}</p>
          <p className="hero__lead reveal">{profile.tagline}</p>

          <div className="hero__cta reveal">
            <a href="#work" className="btn btn--primary">
              View my work <ArrowRightIcon width={18} height={18} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <div className="hero__socials reveal">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero__visual reveal">
          <CodeTerminal />
        </div>
      </div>
    </section>
  );
}
