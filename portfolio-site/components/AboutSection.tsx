import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">About</h2>
        <div className="max-w-2xl space-y-4 text-zinc-700 dark:text-zinc-300">
          {site.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}