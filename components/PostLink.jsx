import Link from "next/link";
import Image from "next/image";

function PostLink({ title, date, slug, image, description }) {
  return (
    <div>
      <Link href="posts/[slug]" as={`posts/${slug}`}>
        <div className="group duration-150 mt-8">
          <p className="text-[#87879A] mt-2">{date}</p>
          <h2 className=" group-hover:text-[#1281E1] text-2xl font-medium">
            {title}
          </h2>
          {Boolean(image) && (
            <Image
              src={image}
              alt=""
              width={2080}
              height={2080}
              className="mt-4"
            />
          )}
          <p className="mt-7">
            {description}
            <span className="font-bold">...Read more</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PostLink;
