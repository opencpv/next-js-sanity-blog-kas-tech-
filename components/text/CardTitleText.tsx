interface Prop {
  text: string;
  size: string;
}
const CardTitleText = ({ text, size }: Prop) => {
  return <h2 className={`font-poppins font-semibold text-xl lg:text-[40px] my-2 lg:leading-[50px] text-[#222222]`} >{text}</h2>;
};

export default CardTitleText;
