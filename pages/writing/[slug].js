import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Head from 'next/head'
import Link from 'next/link'

function Post({ data, content }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="description" content={data.description}/>
        <meta name="author" content="James Bermudo" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mt-14">
      <Link href="/writing">
      <a className="group text-[#D1D1D2] text-base duration-150 hover:text-indigo-300">
      <span className='inline-block align-top mr-[5px]'>
        <svg className='stroke-2 stroke-[#D1D1D2] duration-150 group-hover:stroke-indigo-300 group-hover:-translate-y-px group-hover:-translate-x-px' width="9" height="9" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10L1 1M1 1H8M1 1V8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
        Go Back
      </a>
      </Link>
      <h1 className="text-[#D1D1D2] text-base font-semibold mt-7">{data.title}</h1>
      <time className="text-[#767677] text-base text-left font-semibold font-date italic mt-7">Published on {data.date}</time>
      <div className="prose prose-headings:text-[#D1D1D2] prose-headings:text-base prose-headings:font-semibold mt-7 
      prose-p:text-[#A4A3A5] prose-p:text-base prose-a:text-[#D1D1D2] prose-a:text-base prose-a:underline prose-a:duration-150 prose-a:hover:hover:text-indigo-300">
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