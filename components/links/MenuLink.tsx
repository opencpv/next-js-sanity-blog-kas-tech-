import { link } from "fs";
import Link from "next/link";

interface Prop {
  link: string;
  value: string;
}
const MenuLink = ({ link, value }: Prop) => {
  return (
    <Link
      href={link}
      className={"font-poppins text-[#888]  text-sm lg:text-2xl hover:text-red-500 cursor-pointer"}
    >
      {value}
    </Link>
  );
};

export default MenuLink;
