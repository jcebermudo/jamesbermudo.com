import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import getPosts from "../../helpers/getPosts";
import PostLink from '../../components/PostLink'

export default function Blog({ posts }) {

  return (
      <>
    <Head>
        <title>Writing</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="description" content="Welcome to my digital garden." />
        <meta name="keywords" content="James Bermudo, Bermudo, James, Designer, Product Designer, Developer, Frontend" />
        <meta name="author" content="James Bermudo" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <h2 className='text-[#D1D1D2] text-base font-semibold mt-14'>Posts</h2>
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
  )
}

export const getStaticProps = () => {
  const posts = getPosts();

  posts.sort((a, b) => a.position > b.position ? -1 : 1 );

  return {
    props: {
      posts,
    },
  };
};