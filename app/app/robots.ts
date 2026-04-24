import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://kairoz-live.vercel.app/sitemap.xml",
    host: "https://kairoz-live.vercel.app",
  };
}
