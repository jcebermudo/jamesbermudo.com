import SEO from "../components/seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import LinkText from "../components/link";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <p className="mt-14">
        I&apos;m a 16 year old designer living in Quezon City, Philippines
        who&apos;s currently finishing highschool. I love to craft beautiful
        internet things.
        <br />
        <br />
        This website is the home of all my projects and{" "}
        <Link href="/writing">
          <a className="underline duration-150 hover:text-[#19A1FD]">writing</a>
        </Link>
        {"."}
      </p>
      <div className="mt-7">
        <ul className="flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 ">
          <li>
            <LinkText text="Email" link="mailto:bermudo.elumba@gmail.com" />
          </li>
          <li>
            <LinkText text="Twitter" link="https://twitter.com/jcebermudo" />
          </li>
          <li>
            <LinkText text="GitHub" link="https://github.com/jcebermudo" />
          </li>
          <li>
            <LinkText text="CV" link="https://read.cv/bermudo" />
          </li>
        </ul>
      </div>
    </Layout>
  );
}
