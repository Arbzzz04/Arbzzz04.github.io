import { profile } from '../content.js';
import { MailIcon, LinkedInIcon, GitHubIcon } from './Icons.jsx';

export default function Contact() {
  return (
    <section className="section container contact" id="contact">
      <div className="contact__card reveal">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          Contact
        </span>
        <h2 className="contact__title">Let&apos;s work together</h2>
        <p className="contact__lead">
          Have a project, a role, or just a data problem worth chatting about?
          My inbox is always open.
        </p>
        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            <MailIcon width={18} height={18} /> {profile.email}
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <LinkedInIcon width={18} height={18} /> LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <GitHubIcon width={18} height={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
