import SEO from "../../components/seo";
import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import Layout from "../../components/Layout";

function Post({ data, content }) {
  return (
    <Layout>
      <SEO title={data.title} og={data.image} description={data.description} />
      <div className="mt-14">
        <Link href="/writing">
          <a className="group text-base duration-150 hover:text-[#19A1FD]">
            <span className="inline-block align-top mr-[5px]">
              <svg
                className="stroke-1 stroke-[#333333] duration-150 group-hover:stroke-[#19A1FD] group-hover:-translate-y-px group-hover:-translate-x-px"
                width="9"
                height="9"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L1 1M1 1H8M1 1V8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Go Back
          </a>
        </Link>
        <h1 className="font-semibold mt-7">{data.title}</h1>
        <time className="text-[#A1A1A1] text-left font-semibold italic mt-7">
          {data.date}
        </time>
        <div className="prose prose-headings:text-base prose-headings:font-semibold mt-7 prose-p:text-base prose-a:text-base prose-a:underline prose-a:duration-150 hover:prose-a:text-[#19A1FD]">
          <MDXRemote {...content} />
        </div>
      </div>
    </Layout>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
