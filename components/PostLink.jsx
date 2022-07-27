import Link from "next/link";

function PostLink({ title, date, description, slug }) {
  return (
    <div>
      <div className="group sm:grid sm:grid-cols-3 mb-7">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-[#A1A1A1] text-left font-['Newsreader'] font-extrabold italic">
            {date}
          </h2>
        </div>
        <div className="sm:col-span-2">
          <Link href="writing/[slug]" as={`writing/${slug}`}>
            <a className="text-[#333333] font-['Newsreader'] font-extrabold text-lg duration-150 underline hover:text-[#19A1FD] visited:text-[#a0a0a0]">
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
