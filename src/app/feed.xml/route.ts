import { posts } from "#site/content";
import { siteConfig } from "@/lib/constants";
import { sortPostsByDate } from "@/lib/utils";

export function GET() {
  const sortedPosts = sortPostsByDate(posts.filter((p) => p.published));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.title}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en</language>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${sortedPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.url}${post.permalink}</link>
      <guid isPermaLink="true">${siteConfig.url}${post.permalink}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
