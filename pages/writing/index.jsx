import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import getPosts from "../../helpers/getPosts";
import PostLink from "../../components/PostLink";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Writing</title>
        <meta name="title" content="Writing" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Welcome to my digital garden." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Writing" />
        <meta
          property="og:description"
          content="Welcome to my digital garden."
        />
        <meta property="og:site_name" content="James Bermudo" />
        <meta property="og:url" content="https://www.bermudo.me/writing" />
        <meta property="og:image" content="/writing.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Writing" />
        <meta
          name="twitter:description"
          content="Welcome to my digital garden."
        />
        <meta name="twitter:site" content="@jcebermudo" />
        <meta name="twitter:url" content="https://www.bermudo.me/writing" />
        <meta name="twitter:creator" content="@jcebermudo" />
        <meta property="twitter:image" content="/writing.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <h2 className="text-[#D1D1D2] text-base font-semibold mt-14">Posts</h2>
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
    </>
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
