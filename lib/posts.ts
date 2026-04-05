import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMeta, Post } from "./types";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts: PostMeta[] = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        category: data.category ?? "Experiments",
        description: data.description ?? "",
        draft: data.draft ?? false,
      } as PostMeta;
    })
    .filter((p) => !(process.env.NODE_ENV === "production" && p.draft));

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    category: data.category ?? "Experiments",
    description: data.description ?? "",
    draft: data.draft ?? false,
    content,
  };
}
