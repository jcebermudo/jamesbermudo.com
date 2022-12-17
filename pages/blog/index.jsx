import SEO from "../../components/seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import getPosts from "../../bloghelpers/getPosts";
import PostLink from "../../components/PostLink";

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
              title={post.data.title}
              date={post.data.date}
              description={post.data.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  posts.sort((a, b) => (a.position > b.position ? -1 : 1));

  return {
    props: {
      posts,
    },
  };
};
