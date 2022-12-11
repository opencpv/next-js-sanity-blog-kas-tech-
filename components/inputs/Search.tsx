import FlexLayout from "../layout/FlexLayout";
import { BiSearch, BiX } from "react-icons/bi";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
const Search = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [clearSearchTracker, setClearSearchTracker] = useState(false);

  useEffect(() => {
    if (searchRef.current !== null && searchRef.current.value.length < 1) {
      setClearSearchTracker(false);
    } else {
      setClearSearchTracker(true);
    }
  }, [searchTerm]);

  return (
    <FlexLayout style="hidden lg:flex lg:flex-row gap-1   px-4  items-center w-[330px]  h-[40px] border-[2px] border-gray-3 00  rounded-full  focus-within:border-gray-900 transition-all duration-300 ">
      <BiSearch className="w-4 h-4 text-gray-400 flex-none" />
      <form className=" ">
        <input
          ref={searchRef}
          placeholder="Search..."
          type={"text"}
          className={
            "font-poppins text-gray-700 h-[36px] w-[250px] outline-none pointer-events-auto    "
          }
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
      {clearSearchTracker && (
        <div
        className="flex-none"
          onClick={() => {
            if (searchRef.current !== null) {
              searchRef.current.value = "";
              setClearSearchTracker(false);
            }
          }}
        >
          <BiX className="flex-none font-black w-6 h-6 text-blue-500 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300" />
        </div>
      )}
    </FlexLayout>
  );
};

export default Search;
