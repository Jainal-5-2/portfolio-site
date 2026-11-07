import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/content/site";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/resume", label: "Résumé" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}