import Link from "next/link";
import Image from "next/image";

function PostLink({ title, date, slug, image, description }) {
  return (
    <div>
      <Link href="posts/[slug]" as={`posts/${slug}`}>
        <div className="duration-150 mt-8">
          <p className="text-[#87879A] mt-2">{date}</p>
          <h2 className="text-2xl font-medium">
            {title}
          </h2>
          {Boolean(image) && (
            <Image
              src={image}
              alt=""
              width={3840}
              height={2160}
              className="mt-4"
            />
          )}
          <p className="mt-7">
            {description}
            <span className="font-bold duration-75 hover:text-[#1281E1]">...Read more</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PostLink;
