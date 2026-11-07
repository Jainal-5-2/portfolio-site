import { Container } from "./Container";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/content/projects";

export function ProjectGrid() {
  return (
    <Section id="projects">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}