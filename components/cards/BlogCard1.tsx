import Link from "next/link";
import { useEffect, useState } from "react";
import { Post } from "../../typings";
import { urlFor } from "../../utils/clients/sanity";
import FlexLayout from "../layout/FlexLayout";
import CustomImage from "../shared/Image";
import CardTitleText from "../text/CardTitleText";

const BlogCard1 = ({
  _id,
  _createdAt,
  title,
  author,
  publishedAt,
  description,
  mainImage,
  slug,
  body,
}: Post) => {
  const categories = ["robotics,stem"];
  const [date, setDate] = useState("");

  useEffect(() => {
    let postData = new Date(publishedAt);
    setDate(postData.toLocaleDateString("en-US"));
  }, []);

  return (
    <Link href={`/posts/${slug.current}`} className="">
      <CustomImage
        img={urlFor(mainImage).url()!}
        alt={title}
        sizeStyle={"w-full h-[280px] md:w-full md:h-[270px]"}
        roundedStyle={"rounded-md"}
      />
      <div className="">
        <div className="flex text-sm font-poppins mt-6">
          {categories.map((category, index) => {
            return (
              <p
                className="capitalize  font-semibold text-[#222] text-sm"
                key={index}
              >
                {category}{" "}
              </p>
            );
          })}
          <p className="text-gray-500 font-[400] mx-3"> | {date}</p>
        </div>
        <h2 className="font-poppins text-lg font-semibold text-[#222222] mb-2   ">
          {title}
        </h2>

        <p className="text-poppins font-poppins text-[#888888] text-sm">
          {description.slice(0, 100)}
        </p>
        <FlexLayout style="my-3 gap-2">
          <CustomImage
            img={"/avatar.png"}
            alt={title}
            sizeStyle={"w-[60px] h-[60px]"}
            roundedStyle={"rounded-full"}
          />
          <div className="font-poppins mt-2">
            <p className="text-black font-semibold text-sm">{author.name}</p>
            <p className="text-[13px] text-[#888888] ">CEO and Founder</p>
          </div>
        </FlexLayout>
      </div>
    </Link>
  );
};

export default BlogCard1;
