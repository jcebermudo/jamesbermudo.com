import Link from "next/link";

function PostLink({ title, date, description, slug }) {
  return (
    <div>
      <div className="group sm:grid sm:grid-cols-3 mb-7">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-[#767677] text-base text-left font-semibold font-date italic">
            {date}
          </h2>
        </div>
        <div className="sm:col-span-2">
          <Link href="writing/[slug]" as={`writing/${slug}`}>
            <a className="text-[#D1D1D2] text-base duration-150 underline group-hover:text-indigo-300">
              {title}
            </a>
          </Link>
          <p className="text-[#A4A3A5] mt-2.5">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostLink;
