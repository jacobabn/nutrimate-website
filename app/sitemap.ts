import type { MetadataRoute } from "next";

const SITE = "https://nutrimate.abn.company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`,                priority: 1.0, changeFrequency: "weekly", lastModified: now },
    { url: `${SITE}/legal/privacy`,   priority: 0.4, changeFrequency: "yearly", lastModified: now },
    { url: `${SITE}/legal/terms`,     priority: 0.4, changeFrequency: "yearly", lastModified: now },
  ];
}
