import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/artikel", priority: 0.9 },
] as const;

function getArticleRoutes() {
  const articlesDir = path.join(process.cwd(), "src", "app", "artikel");

  return fs
    .readdirSync(articlesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => fs.existsSync(path.join(articlesDir, entry.name, "page.tsx")))
    .map((entry) => `/artikel/${entry.name}`)
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    ...getArticleRoutes().map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

