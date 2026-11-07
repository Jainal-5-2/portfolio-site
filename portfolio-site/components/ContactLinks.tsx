import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function ContactLinks() {
  const links = [
    { label: "Email", href: `mailto:${site.contact.email}` },
    { label: "GitHub", href: site.contact.github },
    { label: "LinkedIn", href: site.contact.linkedin },
  ];

  return (
    <Section id="contact">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mb-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
          Open to opportunities and freelance work. The fastest way to reach me
          is email.
        </p>
        <ul className="flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}