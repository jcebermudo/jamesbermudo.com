import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { basename } from "path";

import SEO from "../components/seo";

export default function Home() {
  return (
    <>
      <SEO />
      <p className="text-[#575757] text-base mt-14">
        I&apos;m a 15 year old{" "}
        <span className="font-['Newsreader'] font-semibold italic text-lg">
          designer
        </span>{" "}
        living in Quezon City, Philippines who&apos;s currently finishing
        highschool.
        <br />
        <br />
        Occasionally, I direct motion graphic films where I&apos;m fortunate
        enough to be featured by Adobe.
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
      <h2 className="text-[#333333] text-base font-semibold mt-7">Projects</h2>
    </>
  );
}
