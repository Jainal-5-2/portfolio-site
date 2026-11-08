export const site = {
  name: "Jay",
  fullName: "Julmunir Jainal",
  title: "Full-Stack Developer",
  positioning: "Full-stack developer who builds, debugs, and hardens web apps.",
  url: "https://jainal-portfolio.vercel.app",
  avatar: "/images/profile.webp",
  about: [
    "I'm a 4th-year BS Computer Science student at Basilan State College.",
    "I build full-stack web apps with Next.js, TypeScript, and Tailwind CSS.",
    "I care about shipping things that work on a slow phone and a spotty connection.",
    "Right now I'm looking for opportunities where I can keep shipping real things, not demos.",
  ],
  skills: {
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    Backend: ["Node.js", "Django", "REST APIs"],
    Databases: ["PostgreSQL", "MySQL", "SQLite"],
    Tools: ["Git", "GitHub", "Vercel", "Docker"],
  },
  education: {
    degree: "BS Computer Science",
    school: "Basilan State College",
    status: "4th year",
  },
  contact: {
    email: "asbijay@gmail.com",
    github: "https://github.com/Jainal-5-2",
    linkedin: "https://www.linkedin.com/in/julmunir-jainal-74b841322/",
  },
  resume: "/resume.pdf",
} as const;

export type Site = typeof site;