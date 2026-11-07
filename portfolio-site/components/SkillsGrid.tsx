import { Container } from "./Container";
import { Section } from "./Section";
import { site } from "@/content/site";

export function SkillsGrid() {
  return (
    <Section id="skills">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(site.skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {group}
              </h3>
              <ul className="space-y-1 text-sm">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}