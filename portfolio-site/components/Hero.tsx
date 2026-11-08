import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col-reverse gap-8 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
          <div className="flex flex-col gap-5 sm:gap-6">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm dark:text-zinc-400">
              {site.title}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Hi, I&apos;m {site.name}. {site.positioning}
            </h1>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/#projects"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View Projects
              </Link>
              <Link
                href="/#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56">
            <Image
              src={site.avatar}
              alt={`Portrait of ${site.fullName}`}
              fill
              sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 224px"
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}