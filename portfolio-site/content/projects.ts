export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  problem: string;
  hardProblems: string[];
  result: string;
  links: { repo?: string; demo?: string; video?: string, live?: string };
  media: { screenshots: string[]; demoGif?: string };
};

export const projects: Project[] = [
  {
    slug: "islalearn",
    title: "IslaLearn",
    summary:
      "Peer-to-peer learning platform for Basilan State University CS students, async topics, live group broadcasts, and 1:1 tutoring in one place.",
    role: "Solo developer — designed the data model, built the DRF API, built the Next.js frontend, integrated Whereby Embedded",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "MySQL",
      "JWT",
      "Whereby Embedded",
    ],
    problem:
      "BaSU CS students needed a way to learn from each other — but existing tools forced a choice: async content (LMS-style) or live help (Zoom/Discord), never both. A student stuck on a topic had to hunt through group chats for someone willing to explain it, and tutors had no structured way to publish material or schedule sessions. IslaLearn pairs structured async topics with a live-session marketplace so a student can read through a topic on their own time, then book help the moment they get stuck.",
    hardProblems: [
      "Free-preview gating: every Topic has a `free_page_count` (default 2) so the first N pages are always free and the rest sit behind a lock gate. The lock logic exists from day one even though everything is free in v1, so monetization later needs no schema change or rebuild. This meant threading lock flags through the topic serializer, the reader UI, and the progress model from the start.",
      "Monotonic progress with a deliberate reset escape hatch: `TopicProgress.last_page_index` is a high-water mark that only grows on normal writes, so navigating backward never loses a reader's place. The only way to lower it is an explicit `reset: true` write, which clears `is_completed` and `completed_at` together. The reader batches saves every 500ms and resumes at the stored index on load, with a confirmation modal before reset.",
      "Quiz-gated completion without hard server-side gating: the reader disables 'Next' on an unpassed quiz page (soft gate), but the API only enforces `is_completed` — so bypassing the UI produces an incomplete topic, not a corrupted one. Quiz attempts overwrite (one result per page per user, no history), the pass threshold is a per-quiz integer count, and `is_completed` now means 'reached the last page AND passed every quiz.'",
      "Decoupled architecture with a JWT-authenticated DRF API behind a fully static Next.js frontend — no Django templates anywhere. CORS is configured for the Next.js origin in dev, and the frontend treats the API as the only source of truth for auth, progress, and sessions.",
    ],
    result:
      "Shipped through Phase 12: topics with mixed text/video/quiz pages, per-user progress and quiz tracking, a 1:1 request + application flow, group broadcasts with Whereby Embedded video rooms, sessions + reviews, per-engagement WebSocket messaging with presence, in-app notifications with live fan-out, reports, and static privacy/terms pages. A seed + smoke-test phase is next before inviting classmates, but the platform is functionally complete for the v1 scope defined in the README.",
    links: {
      repo: "https://github.com/Jainal-5-2/IslaLearn",
      live: "https://isla-learn.vercel.app/",
    },
    media: {
      screenshots: [
        "/projects/islalearn/1.png",
        "/projects/islalearn/2.png",
        "/projects/islalearn/3.png",
        "/projects/islalearn/4.png",
        "/projects/islalearn/5.png",
        "/projects/islalearn/6.png",
      ],
    },
  },
];