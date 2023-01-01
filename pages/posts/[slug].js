import SEO from "../../components/seo";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ImgText from "../../components/ImgText";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Posts = ({
  frontMatter: { title, description, image, date },
  mdxSource,
}) => {
  return (
    <Layout>
      <SEO title={title} og={`${image}`} description={description} />
      <Link href="/" className="text-[#1281E1] flex gap-x-1">
        <span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.88509 0.213373C1.00099 0.304993 0.304793 1.00127 0.213293 1.8854C-0.225007 6.12013 0.0932932 9.7665 0.442293 12.098C0.644393 13.4486 2.12999 14.0113 3.20159 13.1648C3.93169 12.5881 4.80569 11.8676 5.76869 11.0142C9.78749 14.8831 12.2363 16.8703 13.279 17.6704C13.6547 17.9587 14.1296 18.0851 14.5808 17.9414C15.1392 17.7635 15.9401 17.4027 16.6643 16.6844C17.4051 15.9499 17.7688 15.1231 17.9437 14.5573C18.0782 14.1224 17.9633 13.6673 17.6924 13.3015C16.9207 12.2594 14.9562 9.7784 11.0265 5.75C11.8717 4.79403 12.5857 3.92643 13.1578 3.20097C14.003 2.12939 13.4403 0.644973 12.0907 0.442673C9.76099 0.0934829 6.11709 -0.225187 1.88509 0.213373Z"
              fill="#1281E1"
            />
          </svg>
        </span>
        Return
      </Link>

      <div className="mt-2">
        <div>
          <p className="text-[#A1A1A1] text-left">{date}</p>
          <h2 className="font-display text-2xl font-medium mt-1">{title}</h2>
          {image && (
            <div className="mt-7">
              <Zoom>
                <Image
                  alt=""
                  src={`${image}`}
                  quality="100"
                  width={700}
                  height={500}
                />
              </Zoom>
            </div>
          )}
          <div className="prose-headings:text-base prose-headings:font-semibold prose-p:mt-4 prose-p:mb-7 prose-p:text-lg prose-p:sm:text-base prose-a:text-lg prose-a:sm:text-base prose-a:underline prose-a:underline-offset-4 prose-a:duration-150 hover:prose-a:text-[#19A1FD]">
            <MDXRemote
              {...mdxSource}
              components={{ Link, Image, Zoom, ImgText }}
            />
          </div>
        </div>
        <footer>
          <div className="mt-14">
            <hr className="border-[#b4b4b4] rounded border-dashed opacity-30" />
            <div className="flex flex-row mt-7">
              <p className="basis-11/12 text-[#A1A1A1] text-base sm:text-sm select-none">
                © 2022 James Bermudo
              </p>
              <li className="text-sm list-none flex gap-x-2 text-[#87879A] duration-75">
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
          </div>
        </footer>
      </div>
    </Layout>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      development: false,
    },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default Posts;
