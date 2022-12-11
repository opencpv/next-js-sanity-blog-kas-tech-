import { useState, useRef } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import MenuLink from "../links/MenuLink";
import Fade from "../transitions/Fade";

const Menu = () => {
  const [clickedMenu, setClickedMenu] = useState(false);

  return (
    <div>
      <AiOutlineMenu
        className="text-black w-6 h-6 md:h-10 md:w-10 cursor-pointer  select-none"
        onClick={() => {
          setClickedMenu(true);
        }}
      />
      <Fade inProp={clickedMenu}>
          <div className=" flex  justify-end ">
            <AiOutlineClose
              className="h-10 w-10 text-black cursor-pointer select-none"
              onClick={() => {
                setClickedMenu(false);
              }}
            />
          </div>
          <ul className="px-4">
            <li className="my-4">
              <MenuLink link="/" value="Home" />
            </li>
            <li className="my-4">
              <MenuLink link="/" value="Categories" />
            </li>
            <li className="my-4">
              <MenuLink link="/" value="S4STEM" />
            </li>
            <li className="my-4">
              <MenuLink link="/" value="Design Portfolio" />
            </li>
            <li className="my-4">
              <MenuLink link="/" value="Volunteering" />
            </li>
          </ul>
      </Fade>
    </div>
  );
};

export default Menu;
