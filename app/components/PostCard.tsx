import Link from "next/link";
import { PostMeta } from "@/lib/types";

const CATEGORY_COLORS: Record<string, string> = {
  AI: "text-blue-600",
  Math: "text-violet-600",
  Experiments: "text-amber-600",
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group py-5 border-b border-[var(--fg-subtle)] last:border-0">
      <Link href={`/posts/${post.slug}`} className="block no-underline">
        <div className="flex items-baseline gap-3 mb-1">
          <span
            className={`font-mono text-[0.75rem] uppercase tracking-wider ${CATEGORY_COLORS[post.category] ?? "text-[var(--fg-muted)]"}`}
          >
            {post.category}
          </span>
          <span className="font-mono text-[0.75rem] text-[var(--fg-muted)]">
            {formatDate(post.date)}
          </span>
        </div>
        <h2 className="text-[1.0625rem] font-normal leading-snug group-hover:underline underline-offset-2 decoration-[var(--fg-subtle)]">
          {post.title}
        </h2>
        {post.description && (
          <p className="mt-1 text-[0.9375rem] text-[var(--fg-muted)] leading-relaxed">
            {post.description}
          </p>
        )}
      </Link>
    </article>
  );
}
