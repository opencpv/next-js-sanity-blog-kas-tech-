import Image from "next/image";
import { CustomImageProps } from "../../typings";

interface Prop {
  img: string;
  alt: string;
  sizeStyle: string;
  roundedStyle?: string;
}

const CustomImage = ({ img, alt, sizeStyle, roundedStyle }: Prop) => {
  return (
    <div className={`relative flex-none ${sizeStyle}`}>
      <Image src={img} alt={alt} fill   className={roundedStyle} object-fit= {"cover"} />
    </div>
  );
};

export default CustomImage;
