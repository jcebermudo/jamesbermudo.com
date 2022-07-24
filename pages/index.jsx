import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import LinkText from "../components/link";
import { basename } from "path";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>James Bermudo</title>
        <meta name="title" content="James Bermudo" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="A designer living in Quezon City, Philippines."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="James Bermudo" />
        <meta
          property="og:description"
          content="A designer living in Quezon City, Philippines."
        />
        <meta property="og:site_name" content="James Bermudo" />
        <meta property="og:url" content="https://www.bermudo.me" />
        <meta property="og:image" content="/index.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="James Bermudo" />
        <meta
          name="twitter:description"
          content="A designer living in Quezon City, Philippines."
        />
        <meta name="twitter:site" content="@jcebermudo" />
        <meta name="twitter:url" content="https://www.bermudo.me" />
        <meta name="twitter:creator" content="@jcebermudo" />
        <meta property="twitter:image" content="/index.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <p className="text-[#575757] text-base mt-14">
        I&apos;m a 16 year old{" "}
        <span className="font-['Newsreader'] font-semibold italic text-lg">
          designer
        </span>{" "}
        living in Quezon City, Philippines who&apos;s currently finishing
        highschool.
        <br />
        <br />
        This website is the home of all my projects and{" "}
        <Link href="/writing">
          <a className="underline text-base duration-150 hover:text-[#19A1FD]">
            writing
          </a>
        </Link>
        {"."}
      </p>
      <div className="flex space-x-4 mt-7">
        <LinkText text="Email" link="mailto:bermudo.elumba@gmail.com" />
        <LinkText text="Twitter" link="https://twitter.com/jcebermudo" />
        <LinkText text="GitHub" link="https://github.com/jcebermudo" />
      </div>
      <hr className="mt-7 border-[#767677] border-dashed opacity-30" />
      <h2 className="text-[#333333] text-base font-semibold mt-7">Projects</h2>
    </>
  );
}
