# Jay's Portfolio

Personal portfolio website showcasing my projects, skills, and experience as a full-stack developer.

**Live site:** _(coming soon)_
**Contact:** asbijay@gmail.com

## About

I'm a 4th-year BS Computer Science student at Basilan State College. I work on full-stack web development with Next.js and Tailwind CSS. This site collects my featured projects, case studies, and résumé in one place.

## Tech Stack

- **Framework:** Next.js (static export)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel
- **Backend:** none. The site is fully static.

## Features

- Responsive, mobile-first layout
- Project case studies with screenshots (and demo videos where available)
- Downloadable résumé
- SEO and Open Graph metadata for clean link previews
- Fast loading, with optimized images and minimal JavaScript

## Getting Started

### Prerequisites

- Node.js (current LTS)
- npm, pnpm, or yarn

### Run locally

```bash
git clone https://github.com/Jainal-5-2/portfolio-site.git
cd portfolio-site
npm install
npm run dev
```

Open http://localhost:3000.

### Build for production

```bash
npm run build
```

With `output: "export"` set in `next.config.js`, the static site is generated in the `out/` folder and can be uploaded to any static host.

## Project Structure

```
portfolio-site/
├── app/              # Pages and layouts
├── components/       # Reusable UI components
├── content/          # Project data and case study content
├── public/           # Images, résumé PDF, favicon
└── next.config.js    # Static export config
```

## Updating Content

- **Add a project:** add its entry in `content/` (e.g., `content/projects/my-project.md`) and drop screenshots in `public/`.
- **Update the résumé:** replace the PDF in `public/`.
- Push to `main` and Vercel redeploys automatically.

## Deployment

1. Push the repo to GitHub.
2. Import it on Vercel.
3. Set the build command to `npm run build` and the output directory to `out`.
4. Optional: connect a custom domain.

## License

All rights reserved. The code, project screenshots, written content, and résumé are © Jay.

## Connect

- GitHub: https://github.com/Jainal-5-2
- LinkedIn: https://www.linkedin.com/in/julmunir-jainal-74b841322/
- Email: asbijay@gmail.com