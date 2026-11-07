import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const BASE_URL = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}