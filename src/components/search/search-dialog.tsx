"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { formatDate } from "@/lib/utils";

interface SearchablePost {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  date: string;
  permalink: string;
}

interface SearchDialogProps {
  posts: SearchablePost[];
}

export function SearchDialog({ posts }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchablePost[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useRef(
    new Fuse(posts, {
      keys: [
        { name: "title", weight: 2 },
        { name: "description", weight: 1.5 },
        { name: "tags", weight: 1 },
      ],
      threshold: 0.3,
    })
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      setSelectedIndex(0);
      if (!value.trim()) {
        setResults([]);
        return;
      }
      const searchResults = fuse.current
        .search(value)
        .map((r) => r.item);
      setResults(searchResults);
    },
    []
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      setOpen(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:border-brand-500/50 hover:text-[var(--foreground)] sm:inline-flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        Search...
        <kbd className="ml-2 rounded border border-[var(--border)] bg-[var(--background)] px-1.5 py-0.5 text-xs font-mono">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Dialog */}
      <div className="fixed inset-x-4 top-[15vh] z-50 mx-auto max-w-lg overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-2xl shadow-brand-500/5">
        {/* Search input */}
        <div className="flex items-center border-b border-[var(--border)] px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 shrink-0 text-[var(--muted)]"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent px-3 py-4 text-sm outline-none placeholder:text-[var(--muted-foreground)]"
          />
          <kbd
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded border border-[var(--border)] px-1.5 py-0.5 text-xs text-[var(--muted)]"
          >
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-[var(--muted)]">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}

          {results.map((post, index) => (
            <Link
              key={post.slug}
              href={post.permalink}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 transition-colors ${
                index === selectedIndex
                  ? "bg-brand-500/10 text-brand-500"
                  : "hover:bg-[var(--card)]"
              }`}
            >
              <h3 className="text-sm font-semibold">{post.title}</h3>
              <p className="mt-1 line-clamp-1 text-xs text-[var(--muted)]">
                {post.description}
              </p>
              <div className="mt-1 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                <time>{formatDate(post.date)}</time>
                {post.tags.length > 0 && (
                  <>
                    <span>&middot;</span>
                    <span>{post.tags.join(", ")}</span>
                  </>
                )}
              </div>
            </Link>
          ))}

          {!query && (
            <div className="px-4 py-8 text-center text-sm text-[var(--muted)]">
              Type a keyword to search posts
            </div>
          )}
        </div>
      </div>
    </>
  );
}
