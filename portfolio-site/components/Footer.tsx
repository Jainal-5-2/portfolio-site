import { Container } from "./Container";
import { site } from "@/content/site";

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.26V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <ul className="flex gap-4">
            <li>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <GitHubIcon />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex min-h-11 items-center gap-1.5 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <MailIcon />
                Email
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}