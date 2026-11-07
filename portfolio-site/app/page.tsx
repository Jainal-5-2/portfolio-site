import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsGrid } from "@/components/SkillsGrid";
import { EducationItem } from "@/components/EducationItem";
import { ContactLinks } from "@/components/ContactLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectGrid />
      <SkillsGrid />
      <EducationItem />
      <ContactLinks />
    </>
  );
}