import Link from "next/link";

function PostLink({ title, date, description, slug }) {
  return (
    <div>
      <div className="group sm:grid sm:grid-cols-3 mb-7">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-[#A1A1A1] text-base text-left font-semibold font-date italic">
            {date}
          </h2>
        </div>
        <div className="sm:col-span-2">
          <Link href="writing/[slug]" as={`writing/${slug}`}>
            <a className="text-[#333333] text-base font-medium duration-150 underline group-hover:text-[#19A1FD]">
              {title}
            </a>
          </Link>
          <p className="text-[#575757] mt-2.5">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostLink;
