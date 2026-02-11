"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SearchDialog } from "@/components/search/search-dialog";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { posts } from "#site/content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

const searchablePosts = posts
  .filter((p) => p.published)
  .map(({ title, description, slug, tags, date, permalink }) => ({
    title,
    description,
    slug,
    tags,
    date,
    permalink,
  }));

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="group text-xl font-bold tracking-tight transition-colors"
            >
              <span className="transition-colors group-hover:text-brand-400">phuocle</span>
              <span className="text-brand-500">.me</span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-brand-500"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-1 -bottom-[calc(0.5rem+1px)] h-0.5 rounded-full bg-gradient-to-r from-brand-500 via-secondary-500 to-accent-500" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <SearchDialog posts={searchablePosts} />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
