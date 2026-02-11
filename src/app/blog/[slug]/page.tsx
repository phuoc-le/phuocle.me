import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-content";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { formatDate } from "@/lib/utils";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts
    .filter((post) => post.published)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://phuocle.me/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="relative py-12 sm:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/5 blur-[120px]" />
      </div>

      <Container className="max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-brand-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to blog
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <time dateTime={post.date} className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand-500">
                <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
              </svg>
              {formatDate(post.date)}
            </time>
            <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]" />
            <span className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand-500">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
              </svg>
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {post.description}
          </p>

          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </header>

        {/* Gradient divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

        {/* Post content */}
        <div className="prose prose-lg max-w-none">
          <MDXContent code={post.code} />
        </div>

        {/* Post footer */}
        <footer className="mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:-translate-x-1">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
              All posts
            </Link>

            <span className="text-xs text-[var(--muted-foreground)]">
              Thanks for reading!
            </span>
          </div>
        </footer>
      </Container>
    </article>
  );
}
