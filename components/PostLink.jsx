import Link from "next/link";

function PostLink({ title, date, description, slug }) {
  return (
    <div>
      <div className="group sm:grid sm:grid-cols-3 mb-7">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-[#7C7C7C] text-base text-left font-semibold font-date italic">
            {date}
          </h2>
        </div>
        <div className="sm:col-span-2">
          <Link href="writing/[slug]" as={`writing/${slug}`}>
            <a className="text-[#606060] text-base font-medium duration-150 underline group-hover:text-[#19A1FD]">
              {title}
            </a>
          </Link>
          <p className="text-[#8B8B8B] mt-2.5">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostLink;
