import { profile } from '../content.js';
import { LinkedInIcon, GitHubIcon, MailIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {2026} {profile.shortName}. Built with React.
        </span>
        <div className="footer__socials">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon width={18} height={18} />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon width={18} height={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
