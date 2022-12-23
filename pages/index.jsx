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
        <span className="font-display italic">James Bermudo</span> — a 16 year
        old high-school student, designer, and engineer in the Philippines.     
        I&apos;m currently a co-founder at <a href="https://hypershelter.co"className="underline underline-offset-4 duration-150 hover:text-[#19A1FD]">Hypershelter</a>, a startup that builds solar-powered tents for displaced typhoon victims. 
        Before that, I was a freelancer doing graphic & motion design for studios and brands.
        <br />
        <br />
        This website is an archive of all my work, experiments, and{" "}
        <Link
          href="/blog"
          className="underline underline-offset-4 duration-150 hover:text-[#19A1FD]"
        >
          writing
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
            <LinkText
              text="LinkedIn"
              link="https://www.linkedin.com/in/jcebermudo/"
            />
          </li>
        </ul>
      </div>
    </Layout>
  );
}
