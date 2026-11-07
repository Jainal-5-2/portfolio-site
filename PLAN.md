# Personal Portfolio Website — Build Plan

A step-by-step plan for building my portfolio site (the app, pages, components, and deploy). No fixed deadline, so phases are sized by effort, not dates. Finish a phase, check the boxes, move on.

The site is the thing being built. Project write-ups, skills, and the résumé are *content*: they change over time and plug into the site through the content model below.

## Decisions (locked in)

- **Portfolio site:** fully static. Next.js (static export) + Tailwind CSS. No Django, no MySQL, no server costs.
- **Hosting:** Vercel
- **Content model:** typed data in `content/` (a TypeScript file such as `content/projects.ts`, or JSON), not a CMS. Pages render whatever entries exist, so adding or swapping a project never touches components.
- **Routes:** `/`, `/projects/[slug]`, `/resume`. Slugs come from the content data.

### Project schema (the contract between content and pages)

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  problem: string;
  hardProblems: string[];
  result: string;
  links: { repo?: string; demo?: string; video?: string };
  media: { screenshots: string[]; demoGif?: string };
};
```

Phase 2 fills this schema. Phase 4 renders it. If a page needs a field that isn't here, add it to the schema first.

### Static export constraints

Because the site uses `output: "export"`:

- Set `images: { unoptimized: true }` in `next.config.js`. Optimize images ahead of time (resize, convert to WebP) instead of relying on runtime optimization.
- No API routes, no server actions, no request-time dynamic params.
- Case study pages are generated at build time with `generateStaticParams` from the content data.
- No Vercel server features (image optimization, middleware, ISR). If a feature needs a server, it doesn't belong in this site.

## Goals

| Audience | What they should see in under 60 seconds |
|---|---|
| Recruiters | Who I am, my stack, 2-3 strong projects, how to contact me |
| Job applications | Résumé, GitHub, LinkedIn, proof I can ship |
| School / OJT | Documented projects with clear write-ups |
| Freelance clients | Services I offer, past work, easy contact |

**Rule:** every section must serve at least one audience. If it doesn't, cut it.

---

## Phase 0 — Setup

- [ ] Create repo `portfolio-site`
- [ ] Scaffold Next.js with static export (`output: "export"`) + Tailwind
- [ ] Set `images: { unoptimized: true }`
- [ ] Deploy the empty site to Vercel right away (so the pipeline works from day one)
- [ ] Write a one-line positioning statement, e.g. *"Full-stack developer who builds, debugs, and hardens web apps."*

## Phase 1 — Prepare the project material

Projects that aren't hosted live need their repo and media to do the selling:

- [ ] Choose the 3 projects to feature (the site can be built with placeholder projects first)
- [ ] Clean README: what it is, features, tech stack, setup steps
- [ ] Add seed/sample data so anyone can run it quickly
- [ ] Add `docker-compose.yml` or exact run instructions if feasible
- [ ] Remove secrets, `.env` files, and dead code
- [ ] Take 3-5 clean screenshots
- [ ] Record a 1-2 minute demo video (upload as unlisted on YouTube, or embed a GIF)

## Phase 2 — Content (write before designing)

Write everything into the content files, following the project schema.

- [ ] **Hero:** name, title, positioning line, buttons (View Projects / Contact)
- [ ] **About:** 3-5 short sentences
- [ ] **Skills:** grouped (Frontend, Backend, Databases, Mobile/Security, Tools); only what I can discuss in an interview
- [ ] **Projects:** one schema entry per featured project (problem, my role, stack, 1-2 hard problems solved, result, links, media)
- [ ] **Education:** BSCS, Basilan State College
- [ ] **Contact:** email, GitHub, LinkedIn
- [ ] **Résumé:** up-to-date one-page PDF

## Phase 3 — Design

- [ ] Collect 3-5 portfolio sites I like and note why
- [ ] Choose palette (1 primary, 1 accent, neutrals) and 1-2 fonts
- [ ] Sketch mobile first, then desktop
- [ ] Page structure:

```
/                  Home (hero, featured projects, skills, contact)
/projects/[slug]   Case study per project, generated from content data
/resume            Résumé page (embedded PDF + download button)
```

- [ ] Good contrast, optional dark mode

## Phase 4 — Build the MVP

### Components

Layout:
- [ ] `Navbar`, `Footer`
- [ ] `Container` / `Section` wrapper

Home page:
- [ ] `Hero`
- [ ] `AboutSection`
- [ ] `SkillsGrid`
- [ ] `ProjectCard` and `ProjectGrid`
- [ ] `EducationItem`
- [ ] `ContactLinks`

Case studies and résumé:
- [ ] `CaseStudyLayout` (the template `/projects/[slug]` renders into)
- [ ] `ResumeEmbed` (embeds the PDF, with a download button)

Shared:
- [ ] Metadata/SEO helper (title, description, Open Graph)

### Build steps

- [ ] Create the content files and the `Project` type
- [ ] Build the layout components
- [ ] Build the home page sections from content data
- [ ] Build `/projects/[slug]` with `generateStaticParams`
- [ ] Build `/resume` with the embedded PDF and download button
- [ ] Test at 360px, 768px, 1280px
- [ ] Deploy and share the URL

**Milestone:** site is live. Everything after this improves it in place.

## Phase 5 — Case studies

For each featured project, fill in the case study content and check it renders on `/projects/[slug]`:

- [ ] Overview and goal
- [ ] Simple architecture diagram
- [ ] Key technical decisions and trade-offs
- [ ] Challenges and how I solved them
- [ ] What I'd improve next
- [ ] Screenshots

## Phase 6 — Polish

- [ ] Performance: images resized and converted to WebP before commit, lazy-load below the fold
- [ ] Lighthouse 90+ on Performance, Accessibility, Best Practices, and SEO (run on mobile)
- [ ] Accessibility: alt text, keyboard navigation, heading order
- [ ] SEO: titles, meta descriptions, Open Graph image, sitemap
- [ ] Favicon, proofreading, cross-browser check
- [ ] Privacy-friendly analytics (Vercel Analytics)

## Phase 7 — Launch and visibility

- [ ] Custom domain (optional; the free `.vercel.app` URL is fine)
- [ ] Put the real URL in the repo README (replace "coming soon")
- [ ] Add the link to LinkedIn, GitHub profile README, résumé, email signature
- [ ] Pin best repos on GitHub
- [ ] Post the launch on LinkedIn (what I built, what I learned)
- [ ] Ask classmates and instructors for feedback
- [ ] Add "Open to opportunities / available for freelance" line

## Phase 8 — Going forward

The lesson from this round: build every new project seriously from the start.

- [ ] For each new project: clean README, screenshots, and a demo video **while building it**, not after
- [ ] Add each finished project as a new entry in the content data within a week
- [ ] Revisit the site every 2-3 months
- [ ] Optional: a small blog (debugging, security notes, lessons learned)

---

## Definition of done (v1)

1. Site is live on a public URL, hosted free
2. Has Hero, About, Skills, 3 featured projects, Education, Contact, and a `/resume` page
3. Every featured project has a repo link plus a live demo or a video
4. Loads fast and looks right on a phone
5. Every link works, with no `localhost` or placeholder links
6. The repo README's "Live site" line has the real URL
7. URL is on LinkedIn, GitHub, and my résumé

## Progress log

| Date | What I did | Next step |
|---|---|---|
| | | |