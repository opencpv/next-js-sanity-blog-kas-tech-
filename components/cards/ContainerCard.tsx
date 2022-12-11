import { useEffect, useState } from "react";
import { Post } from "../../typings";
import { urlFor } from "../../utils/clients/sanity";
import Container from "../layout/Container";
import CustomImage from "../shared/Image";
import CardTitleText from "../text/CardTitleText";
import FlexLayout from "../layout/FlexLayout";
import Link from "next/link";

const ContainerCard = ({
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
    <Container>
      <Link href={`/posts/${slug.current}`}>
        <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center">
          <div className="flex flex-auto justify-center">
            <CustomImage
              img={urlFor(mainImage).url()!}
              alt={title}
              sizeStyle={"w-[330px] h-[280px] md:w-[440px] md:h-[385px]"}
              roundedStyle={"rounded-md"}
            />
          </div>
          <div className="">
            <div className="flex text-sm font-poppins">
              {categories.map((category, index) => {
                return (
                  <p
                    className="capitalize  font-semibold text-gray-800 text-sm"
                    key={index}
                  >
                    {category}{" "}
                  </p>
                );
              })}
              <p className="text-gray-500 font-[400] mx-3"> | {date}</p>
            </div>
            <CardTitleText text={title} size="xl" />
            <p className="text-poppins font-poppins text-sm text-[#888888]">
              {description.slice(0, 220)}
            </p>
            <FlexLayout style="my-3 gap-2">
              <CustomImage
                img={"/avatar.png"}
                alt={title}
                sizeStyle={"w-[60px] h-[60px]"}
                roundedStyle={"rounded-full"}
              />
              <div className="font-poppins mt-2">
                <p className="text-black font-semibold text-sm">
                  {author.name}
                </p>
                <p className="text-[13px] text-[#888888] ">CEO and Founder</p>
              </div>
            </FlexLayout>
          </div>
        </div>
        <div className="mt-20 md:mt-20"></div>
      </Link>
    </Container>
  );
};

export default ContainerCard;
