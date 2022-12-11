import Search from "../inputs/Search";
import Logo from "../shared/Logo";
import Menu from "../shared/Menu";
import Socials from "../shared/Socials";
import Container from "./Container";
import FlexLayout from "./FlexLayout";

const Navbar = () => {
  return (
    <nav className="py-6 border-b-2 block">
      <Container>
        <FlexLayout style="justify-between items-center">
          <Search />
          <Logo />
          <div className="hidden lg:block ">
            <Socials />
          </div>
          <Menu />
        </FlexLayout>
      </Container>
    </nav>
  );
};

export default Navbar;
