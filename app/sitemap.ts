import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.samuelcole.name";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "yearly", priority: 1 },
    {
      url: `${base}/resume`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
