import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  permalink: string;
  readingTime: number;
  featured?: boolean;
}

export function PostCard({
  title, description, date, tags, permalink, readingTime, featured,
}: PostCardProps) {
  return (
    <article className={`glow-card group p-6 sm:p-7 ${featured ? "sm:col-span-2" : ""}`}>
      <Link href={permalink} className="block">
        <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
          <time dateTime={date} className="font-medium">{formatDate(date)}</time>
          <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]" />
          <span>{readingTime} min read</span>
        </div>

        <h2 className={`mt-3 font-bold leading-snug tracking-tight transition-colors group-hover:text-brand-500 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.3)] ${featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
          {title}
        </h2>

        <p className={`mt-3 leading-relaxed text-[var(--muted)] ${featured ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`}>
          {description}
        </p>
      </Link>

      <div className="mt-5 flex items-center justify-between gap-4">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} tag={tag} />
            ))}
          </div>
        )}
        <Link href={permalink} className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-500 opacity-0 transition-all group-hover:opacity-100">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M2 8a.75.75 0 01.75-.75h8.69L8.22 4.03a.75.75 0 011.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l3.22-3.22H2.75A.75.75 0 012 8z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </article>
  );
}
