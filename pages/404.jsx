import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-10 px-5 sm:py-24 sm:px-0 mx-auto max-w-xl">
      <h2 className="font-display text-9xl leading-normal text-center select-none">
        404
      </h2>
      <p className="text-center mt-7">
        Don&apos;t know where to go? Go{" "}
        <Link
          href="/"
          className="underline underline-offset-4 duration-150 hover:text-[#19A1FD]"
        >
          here
        </Link>
        {"."}
      </p>
    </div>
  );
}
