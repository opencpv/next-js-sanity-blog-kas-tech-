import FlexLayout from "../../layout/FlexLayout";
import CustomImage from "../../shared/Image";

interface Prop{
    img:string,
    authorName:string,
    date:string
}
const AuthorDetails = ({img,authorName,date}:Prop) => {
    return ( <FlexLayout style="flex-col items-center justify-center font-poppins">
         <CustomImage
              img={img}
              alt={authorName}
              sizeStyle={"w-[40px] h-[40px] md:w-[60px] md:h-[60px]"}
              roundedStyle={"rounded-md"}
            />
        <p className=" text-sm md:text-[18px] text-[#888] mt-2">{authorName}</p>
        <p className="text-[14px] text-[#888]">{date}</p>

    </FlexLayout> );
}
 
export default AuthorDetails;