interface Props {
  children: React.ReactNode;
  isFluid?: boolean;
}
const Container = ({ children, isFluid = false }: Props) => {
  const fluidStyle = "mx-auto px-3";
  const defaultContainer =
    "mx-auto px-8 w-[95vw] md:w-[80vw] lg:w-[60vw]";
  return (
    <div className={isFluid ? fluidStyle : defaultContainer}>{children}</div>
  );
};

export default Container;
