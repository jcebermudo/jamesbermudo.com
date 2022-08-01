import Link from "next/link";

const Name = () => {
  return (
    <Link href="/">
      <a>
        <h1 className="text-[#333333] font-serif font-semibold text-xl sm:text-base select-none">
          James Bermudo
        </h1>
      </a>
    </Link>
  );
};

export default Name;
