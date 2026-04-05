"use client";

import { useState } from "react";
import { PostMeta, Category } from "@/lib/types";
import PostCard from "./PostCard";

const CATEGORIES: (Category | "All")[] = ["All", "AI", "Math", "Experiments"];

export default function CategoryFilter({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-[0.75rem] uppercase tracking-wider px-3 py-1 rounded-full border transition-colors cursor-pointer ${
              active === cat
                ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]"
                : "border-[var(--fg-subtle)] text-[var(--fg-muted)] hover:border-[var(--fg-muted)] hover:text-[var(--fg)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        {filtered.length === 0 ? (
          <p className="text-[var(--fg-muted)] text-[0.9375rem]">
            No posts yet.
          </p>
        ) : (
          filtered.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
