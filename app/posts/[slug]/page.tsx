import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — The Playground`,
    description: post.description,
  };
}

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
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let PostContent: React.ComponentType;
  let meta: { title: string; date: string; category: string };

  try {
    const mod = await import(`@/content/posts/${slug}.mdx`);
    PostContent = mod.default;
    const posts = getAllPosts();
    const found = posts.find((p) => p.slug === slug);
    if (!found) notFound();
    meta = found;
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-16 max-w-[680px] mx-auto">
      {/* Back link */}
      <Link
        href="/"
        className="font-mono text-[0.8125rem] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors mb-10 inline-block"
      >
        ← Back
      </Link>

      {/* Post header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`font-mono text-[0.75rem] uppercase tracking-wider ${CATEGORY_COLORS[meta.category] ?? "text-[var(--fg-muted)]"}`}
          >
            {meta.category}
          </span>
          <span className="font-mono text-[0.75rem] text-[var(--fg-muted)]">
            {formatDate(meta.date)}
          </span>
        </div>
        <h1 className="text-[1.75rem] font-normal leading-tight">
          {meta.title}
        </h1>
      </header>

      {/* MDX content */}
      <article className="text-[1.0625rem] leading-[1.75] text-[var(--fg)]">
        <PostContent />
      </article>
    </main>
  );
}
