import SEO from "../../components/seo";
import Layout from "../../components/Layout";
import PostLink from "../../components/PostLink";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Blog({ posts }) {
  return (
    <Layout>
      <SEO
        title="Writing"
        og="meta-writing.png"
        description="Welcome to my digital garden."
      />
      <h2 className="font-display mt-14 text-2xl sm:text-xl">
        Thoughts & Stuff
      </h2>
      <p className="mt-7">
        I see writing as an expression of love to the things I’m passionate
        about. I mostly write about design, software, and my personal life.
      </p>
      <div>
        <div className="mt-7">
          {posts.map((post) => (
            <PostLink
              key={post.slug}
              title={post.frontMatter.title}
              date={post.frontMatter.date}
              description={post.frontMatter.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  // Sort the posts by date, with the newest post first
  posts.sort((a, b) => {
    // Compare the dates of the posts
    if (new Date(b.frontMatter.date) > new Date(a.frontMatter.date)) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: {
      posts,
    },
  };
};
