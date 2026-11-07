import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function ResumeEmbed() {
  return (
    <Section>
      <Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">Résumé</h1>
          <a
            href={site.resume}
            download
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download PDF
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <iframe
            src={site.resume}
            title="Résumé PDF"
            className="h-[80vh] w-full"
          />
        </div>
      </Container>
    </Section>
  );
}