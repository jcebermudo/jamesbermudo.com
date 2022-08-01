import Link from "next/link";
import { useRouter } from "next/router";
import Name from "./Name";

const Nav = () => {
  const { asPath } = useRouter();

  return (
    <header>
      <div className="flex flex-row">
        <div className="basis-11/12">
          <Name />
        </div>
        <div className="basis-1/12 text-right">
          <ul>
            <li>
              <Link href="/">
                <a
                  className={
                    asPath === "/"
                      ? "text-[#333333] font-semibold text-xl sm:text-base duration-150 hover:text-[#19A1FD] select-none"
                      : "text-[#A1A1A1] font-semibold text-xl sm:text-base duration-150 hover:text-[#19A1FD] select-none"
                  }
                >
                  index
                </a>
              </Link>
            </li>
            <li>
              <Link href="/writing">
                <a
                  className={
                    asPath === "/writing"
                      ? "text-[#333333] font-semibold text-xl sm:text-base duration-150 hover:text-[#19A1FD] first-letter:select-none"
                      : "text-[#A1A1A1] font-semibold text-xl sm:text-base duration-150 hover:text-[#19A1FD] select-none"
                  }
                >
                  writing
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
