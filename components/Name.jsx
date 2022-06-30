import Link from "next/link";

const Name = () => {
  return (
    <Link href="/">
      <a>
        <h1 className="bg-gradient-to-r bg-clip-text font-semibold text-transparent from-[#333333] to-[#858585] animate-text text-xl sm:text-base select-none">
          James Bermudo
        </h1>
      </a>
    </Link>
  );
};

export default Name;
