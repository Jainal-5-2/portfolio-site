import Link from "next/link";
import { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const shown = project.stack.slice(0, 5);
  const extra = project.stack.length - shown.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-3 rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 sm:p-6 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <h3 className="text-base font-semibold group-hover:underline sm:text-lg">
        {project.title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {shown.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tag}
          </li>
        ))}
        {extra > 0 && (
          <li className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            +{extra}
          </li>
        )}
      </ul>
    </Link>
  );
}