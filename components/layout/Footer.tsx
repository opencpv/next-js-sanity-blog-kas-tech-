import Link from "next/link";
import Socials from "../shared/Socials";
import Container from "./Container";
import FlexLayout from "./FlexLayout";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Socials isPrimary={false} />
      </Container>
      <p className="font-poppins text-center text-sm text-[#888]">
        Copyright ©2022 All rights reserved | S4STEM
      </p>
      <FlexLayout style="gap-2 justify-center mt-2 mb-20 font-poppins text-center text-sm text-[#888]">
        <Link href={"/"} className={"hover:underline"} >Terms & Conditions</Link>
        <p>/</p>
        <Link href={"/"} className={"hover:underline"}>Privacy Policy</Link>
      </FlexLayout>
    </footer>
  );
};

export default Footer;
