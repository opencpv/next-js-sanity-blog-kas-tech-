import FlexLayout from "../layout/FlexLayout";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

interface Prop {
  isPrimary: boolean;
}

const Socials = ({ isPrimary = true }: Prop) => {
  return (
    <div>
      {isPrimary ? (
        <FlexLayout style="gap-3 items-center text-black">
          <AiFillGoogleCircle
            className={`h-5 w-5 cursor-pointer hover:text-red-500`}
          />
          <AiFillGithub className="h-5 w-5 cursor-pointer hover:text-red-500" />
          <AiFillLinkedin className="h-5 w-5 cursor-pointer hover:text-red-500" />
          <AiFillTwitterCircle className="h-5 w-5 cursor-pointer hover:text-red-500" />
        </FlexLayout>
      ) : (
        <FlexLayout style="my-10 gap-4 justify-center">
          <Link href={"/"}>
            <div className="flex justify-center h-8 w-8 items-center bg-[#cccc] hover:bg-red-500 rounded-xl">
              <AiOutlineGoogle className={`h-6 w-6 cursor-pointer `} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex justify-center h-8 w-8 items-center bg-[#cccc] hover:bg-red-500 rounded-xl">
              <AiFillGithub className={`h-6 w-6 cursor-pointer `} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex justify-center h-8 w-8 items-center bg-[#cccc] hover:bg-red-500 rounded-xl">
              <AiFillLinkedin className={`h-6 w-6 cursor-pointer `} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex justify-center h-8 w-8 items-center bg-[#cccc] hover:bg-red-500 rounded-xl">
              <AiOutlineTwitter className={`h-6 w-6 cursor-pointer `} />
            </div>
          </Link>

         
        </FlexLayout>
      )}
    </div>
  );
};

export default Socials;
