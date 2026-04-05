export type Category = "AI" | "Math" | "Experiments";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: Category;
  description: string;
  draft?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}
