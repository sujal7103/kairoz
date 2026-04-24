import type { MetadataRoute } from "next";
import { allItems } from "@/lib/nav";

const BASE_URL = "https://kairoz-live.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allItems().map((item) => ({
    url: `${BASE_URL}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1.0 : item.href === "/get-started" ? 0.9 : 0.7,
  }));
}
