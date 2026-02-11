"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  activeTag?: string;
}

export function TagFilter({ tags, activeTag }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTagClick = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set("tag", tag);
    } else {
      params.delete("tag");
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="mb-10 flex flex-wrap gap-2">
      <button
        onClick={() => handleTagClick(null)}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-all",
          !activeTag
            ? "bg-gradient-to-r from-brand-500 via-secondary-500 to-accent-500 text-white shadow-lg shadow-brand-500/25"
            : "border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-brand-500/50 hover:text-brand-500 hover:shadow-md hover:shadow-brand-500/10"
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all",
            activeTag === tag
              ? "bg-gradient-to-r from-brand-500 via-secondary-500 to-accent-500 text-white shadow-lg shadow-brand-500/25"
              : "border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-brand-500/50 hover:text-brand-500 hover:shadow-md hover:shadow-brand-500/10"
          )}
        >
          # {tag}
        </button>
      ))}
    </div>
  );
}
