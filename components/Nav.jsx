import Link from "next/link";
import { useRouter } from "next/router";
import Name from "./Name";

const Nav = () => {
  const { asPath } = useRouter();

  return (
    <nav>
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
                      ? "text-[#D1D1D2] text-base duration-150 hover:text-indigo-300 select-none"
                      : "text-[#767677] text-base duration-150 hover:text-indigo-300 select-none"
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
                      ? "text-[#D1D1D2] text-base duration-150 hover:text-indigo-300 select-none"
                      : "text-[#767677] text-base duration-150 hover:text-indigo-300 select-none"
                  }
                >
                  writing
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
