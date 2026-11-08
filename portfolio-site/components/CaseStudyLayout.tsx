import Link from "next/link";
import { Container } from "./Container";
import { Section } from "./Section";
import { Project } from "@/content/projects";

export function CaseStudyLayout({ project }: { project: Project }) {
  const { links, media } = project;

  return (
    <>
      <Section>
        <Container>
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← Back to projects
          </Link>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-3xl md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline">
                Live site
              </a>
            )}
            {links.repo && (
              <a href={links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline">
                Repository
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline">
                Live demo
              </a>
            )}
            {links.video && (
              <a href={links.video} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline">
                Demo video
              </a>
            )}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <dl className="grid gap-4 border-y border-zinc-200 py-6 sm:grid-cols-2 sm:gap-6 dark:border-zinc-800">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Role
              </dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Stack
              </dt>
              <dd className="mt-1">{project.stack.join(", ")}</dd>
            </div>
          </dl>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="max-w-2xl space-y-8 sm:space-y-10">
            <div>
              <h2 className="mb-3 text-lg font-semibold tracking-tight sm:text-xl">Problem</h2>
              <p className="text-zinc-700 dark:text-zinc-300">{project.problem}</p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold tracking-tight sm:text-xl">Hard problems</h2>
              <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                {project.hardProblems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold tracking-tight sm:text-xl">Result</h2>
              <p className="text-zinc-700 dark:text-zinc-300">{project.result}</p>
            </div>
          </div>
        </Container>
      </Section>

      {media.screenshots.length > 0 && (
        <Section className="pt-0">
          <Container>
            <h2 className="mb-4 text-lg font-semibold tracking-tight sm:text-xl">Screenshots</h2>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {media.screenshots.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot`}
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
                  loading="lazy"
                />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}