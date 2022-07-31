import SEO from "../components/seo";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import LinkText from "../components/link";

import shapes from "../public/images/general/shape.svg";

export default function Home() {
  return (
    <>
      <SEO />
      <div className="mt-14 flex justify-center select-none pointer-events-none">
        <Image
          alt="shape"
          quality="100"
          width={250}
          height={220}
          layout="intrinsic"
          src={shapes}
        />
      </div>
      <p className="text-[#575757] mt-14">
        I&apos;m a 16 year old{" "}
        <span className="font-serif font-bold italic">designer</span> living in
        Quezon City, Philippines who&apos;s currently finishing highschool. I
        love to craft beautiful internet things.
        <br />
        <br />
        This website is the home of all my projects and{" "}
        <Link href="/writing">
          <a className="underline duration-150 hover:text-[#19A1FD]">writing</a>
        </Link>
        {"."}
      </p>
      <div className="flex space-x-4 mt-7">
        <LinkText text="Email" link="mailto:bermudo.elumba@gmail.com" />
        <LinkText text="Twitter" link="https://twitter.com/jcebermudo" />
        <LinkText text="GitHub" link="https://github.com/jcebermudo" />
      </div>
      <hr className="mt-7 border-[#767677] border-dashed opacity-30" />
      <h2 className="text-[#333333] font-serif font-extrabold text-lg mt-7">
        Projects
      </h2>
    </>
  );
}
