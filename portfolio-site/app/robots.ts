import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const revalidate = false;

const BASE_URL = site.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}