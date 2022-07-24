import SEO from "../components/seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import LinkText from "../components/link";
import { basename } from "path";

export default function Home() {
  return (
    <>
      <SEO />
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
