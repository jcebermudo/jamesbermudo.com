import SEO from "../components/seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import LinkText from "../components/link";

import Shapes from "../components/shapes";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Shapes />
      <p className="mt-7 sm:mt-14">
        Hello, I&apos;m <span className="font-display">James Bermudo</span>, a
        16-year-old designer living in Quezon City, Philippines who&apos;s
        currently finishing high school. I love to craft beautiful internet
        things.
        <br />
        <br />
        This website is the home of all my projects and{" "}
        <Link href="/blog">
          <a className="underline underline-offset-4 duration-150 hover:text-[#19A1FD]">
            writing
          </a>
        </Link>
        {"."}
      </p>
      <div className="mt-7">
        <ul className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-6 sm:gap-y-0 ">
          <li>
            <LinkText text="Email" link="mailto:bermudo.elumba@gmail.com" />
          </li>
          <li>
            <LinkText text="Twitter" link="https://twitter.com/jcebermudo" />
          </li>
          <li>
            <LinkText text="CV" link="https://read.cv/bermudo" />
          </li>
        </ul>
      </div>
    </Layout>
  );
}
