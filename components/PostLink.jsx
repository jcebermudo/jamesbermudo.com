import Link from "next/link";

function PostLink({ title, date, description, slug }) {
  return (
    <div>
      <hr className="border-[#b4b4b4] border-dashed opacity-30" />
      <Link href="writing/[slug]" as={`writing/${slug}`}>
        <a>
          <div className="group sm:grid sm:grid-cols-3 py-7 px-2 duration-150 hover:bg-[#f5f5f5]">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-[#A1A1A1] text-left">{date}</h2>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-[#333333] font-semibold duration-150 group-hover:text-[#19A1FD] visited:text-[#a0a0a0]">
                {title}
              </h3>
              <p className="text-[#575757] mt-2.5">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default PostLink;
