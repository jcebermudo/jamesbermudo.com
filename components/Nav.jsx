import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const { asPath } = useRouter();

  return (
    <header>
      <div className="flex justify-center items-center text-center gap-x-2.5">
        <Link href="/">
          <a
            className={
              asPath === "/"
                ? "text-[#333333] font-semibold text-xl sm:text-base duration-150 hover:text-[#19A1FD] hover:blur-[2px] select-none"
                : "text-[#A1A1A1] font-semibold text-xl sm:text-base duration-150 hover:text-[#19A1FD] hover:blur-[2px] select-none"
            }
          >
            ●
          </a>
        </Link>
        <div className=" border border-[#b4b4b4] rounded h-3 opacity-30" />
        <Link href="/blog">
          <a
            className={
              asPath === "/blog"
                ? "text-[#333333] font-display text-xl sm:text-base duration-150 hover:text-[#19A1FD] select-none"
                : "text-[#A1A1A1] font-display text-xl sm:text-base duration-150 hover:text-[#19A1FD] select-none"
            }
          >
            blog
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
