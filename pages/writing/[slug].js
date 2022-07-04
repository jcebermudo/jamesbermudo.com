import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";

function Post({ data, content }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="author" content="James Bermudo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:site_name" content="James Bermudo" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div className="mt-14">
        <Link href="/writing">
          <a className="group text-[#575757] text-base duration-150 hover:text-[#19A1FD]">
            <span className="inline-block align-top mr-[5px]">
              <svg
                className="stroke-1 stroke-[#575757] duration-150 group-hover:stroke-[#19A1FD] group-hover:-translate-y-px group-hover:-translate-x-px"
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
        <h1 className="text-[#333333] text-base font-semibold mt-7">
          {data.title}
        </h1>
        <time className="text-[#A1A1A1] text-base text-left font-['Newsreader'] font-bold italic mt-7">
          {data.date}
        </time>
        <div
          className="prose prose-headings:text-[#606060] prose-headings:text-base prose-headings:font-medium mt-7 
      prose-p:text-[#8B8B8B] prose-p:text-base prose-a:text-[#606060] prose-a:text-base prose-a:underline prose-a:duration-150 prose-a:hover:hover:text-indigo-500"
        >
          <MDXRemote {...content} />
        </div>
      </div>
    </div>
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
