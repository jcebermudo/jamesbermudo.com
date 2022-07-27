import SEO from "../../components/seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import getPosts from "../../helpers/getPosts";
import PostLink from "../../components/PostLink";

export default function Blog({ posts }) {
  return (
    <>
      <SEO
        title="Writing"
        og="writing.png"
        description="Welcome to my digital garden."
      />
      <h2 className="text-[#333333] font-['Newsreader'] font-extrabold text-lg mt-14">
        Posts
      </h2>
      <p className="text-[#575757] mt-7">
        I see writing as an expression of love to the things I’m passionate
        about. I mostly write about design and software.
      </p>
      <hr className="border-[#767677] border-dashed opacity-30 mt-7" />
      <div>
        <div className="mt-14">
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
