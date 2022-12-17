import SEO from "../../components/seo";
import Image from "next/image";
import Layout from "../../components/Layout";

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const Post = ({ frontMatter: { title, description, date, image }, mdxSource }) => {
  return (
    <Layout>
      <SEO title={title} og={`/images/meta/blogimg/${image}`} description={description} />
      <div className="mt-14">
        <div className="mt-7">
          <p className="text-[#A1A1A1] text-left">{date}</p>
          <h2 className="font-display text-2xl sm:text-xl mt-1">
            {title}
          </h2>
          <div className="mt-7">
            <Image
              alt=""
              src={`/images/meta/blogimg/${image}`}
              quality="100"
              width={700}
              height={500}
            />
          </div>
          <div className="prose prose-headings:text-base prose-headings:font-semibold mt-7 prose-p:text-lg prose-p:sm:text-base prose-a:text-lg prose-a:sm:text-base prose-a:underline prose-a:underline-offset-4 prose-a:duration-150 hover:prose-a:text-[#19A1FD]">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }

export default Post;

