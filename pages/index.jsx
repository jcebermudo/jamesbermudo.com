import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { basename } from "path";

import base from "../public/images/projects/base.png";
import house from "../public/house.png";

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
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <div className="flex justify-center mt-14">
        <Image
          alt=""
          quality="100"
          placeholder="blur"
          width={136}
          height={127}
          layout="fixed"
          src={house}
          className="select-none"
        />
      </div>
      <p className="text-[#575757] text-base mt-14">
        I&apos;m a 15 year old designer living in Quezon City, Philippines
        currently finishing high school. I love to build software from design to
        code.
        <br />
        <br />
        This website is my little corner on the internet where I showcase my
        projects as well as{" "}
        <Link href="/writing">
          <a className="underline text-base duration-150 hover:text-[#19A1FD]">
            write
          </a>
        </Link>{" "}
        about my thoughts and experiences.
        <br />
        <br />
        If you&apos;d like to chat, send me a DM on{" "}
        <a
          href="https://twitter.com/jcebermudo"
          target="_blank"
          rel="noreferrer"
          className="underline text-base duration-150 hover:text-[#19A1FD]"
        >
          Twitter
        </a>
        , I&apos;m always active.
      </p>
      <div className="flex space-x-4 mt-7">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:bermudo.elumba@gmail.com"
          className="group text-[#575757] underline text-base duration-150 hover:text-[#19A1FD]"
        >
          Email
          <span className="inline-block align-middle ml-[5px]">
            <svg
              className="stroke-1 stroke-[#575757] duration-150 group-hover:stroke-[#19A1FD] group-hover:-translate-y-px group-hover:translate-x-px"
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L10 1M10 1H3M10 1V8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
        <a
          href="https://twitter.com/jcebermudo"
          target="_blank"
          rel="noreferrer"
          className="group text-[#575757] underline text-base duration-150 hover:text-[#19A1FD]"
        >
          Twitter
          <span className="inline-block align-middle ml-[5px]">
            <svg
              className="stroke-1 stroke-[#575757] duration-150 group-hover:stroke-[#19A1FD] group-hover:-translate-y-px group-hover:translate-x-px"
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L10 1M10 1H3M10 1V8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
        <a
          href="https://github.com/jcebermudo"
          target="_blank"
          rel="noreferrer"
          className="group text-[#575757] underline text-base duration-150 hover:text-[#19A1FD]"
        >
          GitHub
          <span className="inline-block align-middle ml-[5px]">
            <svg
              className="stroke-1 stroke-[#575757] duration-150 group-hover:stroke-[#19A1FD] group-hover:-translate-y-px group-hover:translate-x-px"
              width="9"
              height="9"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L10 1M10 1H3M10 1V8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
      <hr className="mt-7 border-[#767677] border-dashed opacity-30" />
      <h2 className="text-[#333333] text-base font-medium mt-7">Projects</h2>
      <div className="flex mt-7">
        <div>
          <Image
            alt=""
            quality="100"
            placeholder="blur"
            width={120}
            height={120}
            layout="fixed"
            src={base}
            className="border rounded-md select-none"
          />
        </div>
        <div className="ml-7 place-self-center">
          <h2 className="text-[#333333] text-base font-medium">Base</h2>
          <p className="text-[#575757] text-base mt-2.5">
            A playful moodboard app.
          </p>
          <p className="text-[#A1A1A1] text-base mt-2.5">Releasing soon</p>
        </div>
      </div>
    </>
  );
}
