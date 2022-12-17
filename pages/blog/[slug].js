import SEO from "../../components/seo";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import Layout from "../../components/Layout";
import fs from 'fs'
import path from 'path'

function Post({ data, content }) {
  return (
    <Layout>
      <SEO title={data.title} og={data.image} description={data.description} />
      <div className="mt-14">
        <div className="mt-7">
          <p className="text-[#A1A1A1] text-left">{data.date}</p>
          <h2 className="font-display text-2xl sm:text-xl mt-1">
            {data.title}
          </h2>
          <div className="mt-7">
            <Image
              alt=""
              src={`/images/meta/${data.image}`}
              quality="100"
              width={700}
              height={500}
            />
          </div>
          <div className="prose prose-headings:text-base prose-headings:font-semibold mt-7 prose-p:text-lg prose-p:sm:text-base prose-a:text-lg prose-a:sm:text-base prose-a:underline prose-a:underline-offset-4 prose-a:duration-150 hover:prose-a:text-[#19A1FD]">
            <MDXRemote {...content} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Post;

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
