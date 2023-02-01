import SEO from "../../components/seo";
import Link from "next/link";
import Layout from "../../components/Layout";

import MDXImage from "../../components/MDXImage";
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
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7175 18.7175L5.28243 5.28245M5.28243 5.28245L5.28243 15.1819M5.28243 5.28245L15.1819 5.28245"
              stroke="#1281E1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              <MDXImage alt="" src={`${image}`} />
            </div>
          )}
          <div className="prose-headings:text-base prose-headings:font-semibold prose-p:mt-4 prose-p:mb-7 prose-p:text-lg prose-p:sm:text-base prose-a:text-lg prose-a:sm:text-base prose-a:underline prose-a:underline-offset-4 prose-a:duration-150 hover:prose-a:text-[#19A1FD]">
            <MDXRemote
              {...mdxSource}
              components={{ Link, MDXImage, ImgText }}
            />
          </div>
        </div>
        <footer>
          <div className="mt-14">
            <hr className="border-[#b4b4b4] rounded border-dashed opacity-30" />
            <div className="row mt-7">
              <li className="list-none flex flex-col sm:flex-row sm:gap-x-2 mt-4 text-[#87879A] duration-75">
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
