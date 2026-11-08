import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function ResumeEmbed() {
  return (
    <Section>
      <Container>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Résumé</h1>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Open in new tab
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="hidden overflow-hidden rounded-lg border border-zinc-200 sm:block dark:border-zinc-800">
          <iframe
            src={site.resume}
            title="Résumé PDF"
            className="h-[80vh] w-full"
          />
        </div>

        <p className="text-sm text-zinc-600 sm:hidden dark:text-zinc-400">
          Tap <span className="font-medium">Open in new tab</span> to view the PDF in your
          browser, or <span className="font-medium">Download PDF</span> to save a copy.
        </p>
      </Container>
    </Section>
  );
}