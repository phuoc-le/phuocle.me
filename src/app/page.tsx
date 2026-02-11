import Link from "next/link";
import { posts } from "#site/content";
import { PostCard } from "@/components/blog/post-card";
import { Container } from "@/components/ui/container";
import { sortPostsByDate } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

export default function HomePage() {
  const latestPosts = sortPostsByDate(
    posts.filter((p) => p.published)
  ).slice(0, 4);

  const totalPosts = posts.filter((p) => p.published).length;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 pt-20 sm:pb-32 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-[120px] animate-float" />
          <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary-500/5 blur-[100px] animate-float [animation-delay:2s]" />
          <div className="absolute -left-20 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-500/5 blur-[80px] animate-float [animation-delay:4s]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Avatar */}
            <div className="stagger-1 mx-auto mb-10 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-secondary-500 to-accent-500 shadow-[0_20px_60px_rgba(14,165,233,0.5),0_0_100px_rgba(14,165,233,0.2)] animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-20 w-20 text-white">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Name */}
            <h1 className="stagger-2 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gradient-text">Phuoc Le</span>
            </h1>

            {/* Title */}
            <p className="stagger-3 mt-6 text-xl text-[var(--muted)] sm:text-2xl">
              Senior DevOps Engineer | Cloud Architect | Solution Architect
            </p>

            {/* Description */}
            <p className="stagger-4 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--foreground)]">
              Transforming infrastructure into scalable, reliable, and secure cloud solutions.
              Passionate about automation, continuous improvement, and building systems that empower teams.
            </p>

            {/* CTA Buttons */}
            <div className="stagger-5 mt-12 flex flex-wrap items-center justify-center gap-5">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="btn-shimmer inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.161V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  Get In Touch
                </span>
              </a>
              <Link
                href="/portfolio"
                className="btn-outline inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd" />
                    <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686A41.454 41.454 0 0110 18c-1.572 0-3.118-.12-4.637-.26C3.985 17.586 3 16.402 3 15.055z" />
                  </svg>
                  View My Work
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats ─────────────────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-[var(--card)]/50">
        <Container>
          <div className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4 sm:gap-8">
            {[
              {
                value: `${totalPosts}+`,
                label: "Blog Posts",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                ),
              },
              {
                value: "5+",
                label: "Years Experience",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                value: "10+",
                label: "Projects",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                value: "99.9%",
                label: "Uptime Target",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75H12.75V3z" clipRule="evenodd" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-3 inline-flex gradient-text-static">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold gradient-text-static sm:text-4xl">{stat.value}</div>
                <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Latest Posts ──────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="section-label">Blog</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Latest Posts</h2>
              <p className="mt-3 max-w-lg text-[var(--muted)]">Sharing knowledge, experience, and lessons learned from the field.</p>
            </div>
            <Link href="/blog" className="hidden items-center gap-1.5 text-sm font-medium text-brand-500 transition-colors hover:text-brand-600 sm:inline-flex">
              View all
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M2 8a.75.75 0 01.75-.75h8.69L8.22 4.03a.75.75 0 011.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l3.22-3.22H2.75A.75.75 0 012 8z" clipRule="evenodd" /></svg>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {latestPosts.map((post, i) => (
              <PostCard key={post.slug} title={post.title} description={post.description} date={post.date} tags={post.tags} permalink={post.permalink} readingTime={post.readingTime} featured={i === 0} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
              View all posts &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="border-t border-[var(--border)] py-20 sm:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[var(--card)] p-10 sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/10 blur-[60px]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary-500/10 blur-[40px]" />
            <div className="relative text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Enjoying what you read?</h2>
              <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">Follow the blog for new post updates, or connect with me on GitHub.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="https://github.com/phuocle" target="_blank" rel="noopener noreferrer" className="btn-shimmer inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    Follow on GitHub
                  </span>
                </a>
                <Link href="/feed.xml" className="btn-outline inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                  <span className="relative z-10">RSS Feed</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
