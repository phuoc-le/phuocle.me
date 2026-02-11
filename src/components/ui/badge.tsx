import Link from "next/link";
import { cn } from "@/lib/utils";

interface BadgeProps {
  tag: string;
  active?: boolean;
}

export function Badge({ tag, active }: BadgeProps) {
  return (
    <Link
      href={`/blog?tag=${encodeURIComponent(tag)}`}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all",
        active
          ? "bg-gradient-to-r from-brand-500 via-secondary-500 to-accent-500 text-white shadow-md shadow-brand-500/25"
          : "border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-brand-500/50 hover:text-brand-500 hover:shadow-sm"
      )}
    >
      # {tag}
    </Link>
  );
}
