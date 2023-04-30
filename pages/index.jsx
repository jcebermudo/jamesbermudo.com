import SEO from "../components/seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import LinkText from "../components/link";

import PostLink from "../components/PostLink";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO />
      <div>
        <h1 className="font-semibold text-2xl sm:text-xl">James Bermudo</h1>
        <li className="sm:text-left list-none flex flex-col sm:flex-row sm:gap-x-2 text-[#87879A] duration-75 mt-2">
          <a
            href="mailto:your-email@example.com"
            className="hover:text-[#1281E1]"
          >
            <ul>Email</ul>
          </a>
          <a
            href="https://twitter.com/jcebermudo"
            className="hover:text-[#1281E1]"
          >
            <ul>Twitter</ul>
          </a>
          <a
            href="https://linkedin.com/in/jcebermudo"
            className="hover:text-[#1281E1]"
          >
            <ul>LinkedIn</ul>
          </a>
          <a
            href="https://github.com/jcebermudo"
            className="hover:text-[#1281E1]"
          >
            <ul>GitHub</ul>
          </a>
        </li>
      </div>
      <p className="mt-6">
        I&apos;m a 16-year-old student, designer, and engineer from Manila.
        Currently, I am a cofounder at {" "}
        <a href="https://hypershelter.co" target="_blank" rel="noreferrer" className="hover:text-[#1281E1] underline">
          Hypershelter
        </a>
        {" "}where we build solar-powered tents and disaster response software to fight typhoons in the Philippines. While I&apos;m not working on that, you can catch me tinkering with AI, web technologies, and math.
      </p>
      <div className="mt-16">
        {posts.map((post) => (
          <PostLink
            key={post.slug}
            title={post.frontMatter.title}
            date={post.frontMatter.date}
            image={post.frontMatter.image}
            description={post.frontMatter.description}
            slug={post.slug}
          />
        ))}
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
