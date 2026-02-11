import { PostCard } from "./post-card";

interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  permalink: string;
  readingTime: number;
  slug: string;
}

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--border)] py-20 text-center">
        <div className="text-4xl">📝</div>
        <p className="mt-4 text-lg font-medium text-[var(--muted)]">No posts yet.</p>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} title={post.title} description={post.description} date={post.date} tags={post.tags} permalink={post.permalink} readingTime={post.readingTime} />
      ))}
    </div>
  );
}
