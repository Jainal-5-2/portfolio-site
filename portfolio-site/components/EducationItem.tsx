import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function EducationItem() {
  return (
    <Section id="education">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Education</h2>
        <div className="max-w-2xl">
          <p className="font-medium">{site.education.degree}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {site.education.school} · {site.education.status}
          </p>
        </div>
      </Container>
    </Section>
  );
}