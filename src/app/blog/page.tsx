import { Suspense } from "react";
import { posts } from "#site/content";
import { PostList } from "@/components/blog/post-list";
import { TagFilter } from "@/components/blog/tag-filter";
import { Container } from "@/components/ui/container";
import { sortPostsByDate, getAllTags } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "All posts about DevOps, cloud infrastructure, and software engineering.",
};

interface BlogPageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { tag } = await searchParams;
  const publishedPosts = sortPostsByDate(posts.filter((p) => p.published));
  const allTags = getAllTags(publishedPosts);

  const filteredPosts = tag
    ? publishedPosts.filter((p) => p.tags.includes(tag))
    : publishedPosts;

  return (
    <section className="relative py-16 sm:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-[100px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary-500/5 blur-[80px]" />
      </div>

      <Container className="max-w-5xl">
        {/* Page header */}
        <div className="mb-12">
          <span className="section-label">Blog</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Posts & Articles
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
            Knowledge, experience, and lessons learned from the world of DevOps and engineering.
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
            <span className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand-500">
                <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06V3.44a.75.75 0 00-.556-.724A9.013 9.013 0 0015 2.5a8.991 8.991 0 00-4.25 1.065V16.82zM9.25 4.75A8.991 8.991 0 005 2.5c-.832 0-1.638.112-2.404.321A.75.75 0 002 3.56V15.18a.75.75 0 00.946.723A7.462 7.462 0 015 15.5a7.48 7.48 0 014.25 1.32V4.75z" />
              </svg>
              <span className="font-medium">{publishedPosts.length} posts</span>
            </span>
            {tag && (
              <>
                <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]" />
                <span>Filtering: <span className="font-medium text-brand-500">{tag}</span></span>
              </>
            )}
          </div>
        </div>

        {/* Tag filter */}
        <Suspense>
          <TagFilter tags={allTags} activeTag={tag} />
        </Suspense>

        {/* Post grid */}
        <PostList posts={filteredPosts} />
      </Container>
    </section>
  );
}
