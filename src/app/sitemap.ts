import { posts } from "#site/content";
import { siteConfig } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = posts
    .filter((p) => p.published)
    .map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.updated || post.date,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...blogPosts,
  ];
}
