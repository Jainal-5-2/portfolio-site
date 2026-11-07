import { Container } from "./Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <ul className="flex gap-4">
            <li>
              <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 dark:hover:text-zinc-50">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 dark:hover:text-zinc-50">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                Email
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}