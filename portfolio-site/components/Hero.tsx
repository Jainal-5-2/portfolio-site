import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {site.title}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Hi, I&apos;m {site.name}. {site.positioning}
            </h1>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View Projects
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56">
            <Image
              src={site.avatar}
              alt={`Portrait of ${site.fullName}`}
              fill
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}