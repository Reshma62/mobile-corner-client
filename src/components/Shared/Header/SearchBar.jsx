import Container from "../Container";
import { GiShoppingBag } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import HoverCartItem from "../../cart/HoverCartItem";
import { useState } from "react";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-2">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400 text-transparent font-bold">
            Moblie Corner
          </h1>
          <div className="w-[450px] relative">
            <input
              type="text"
              placeholder="search product here..."
              className="border py-2 px-2.5 border-solid border-indigo-600 rounded-md w-full"
            />
            <button className="absolute right-0 h-full bg-gradient-to-r from-indigo-600 px-2 text-white to-purple-400 rounded-tr-md rounded-br-md">
              Search
            </button>
          </div>
          <div>
            <div
              onClick={() => setOpen(true)}
              className="relative flex gap-2 items-center cursor-pointer "
            >
              <span className="bg-indigo-600  block text-center w-6 h-6 rounded-full text-sm leading-6  top-1 text-white absolute">
                2
              </span>
              <GiShoppingBag className="text-4xl" />
              <span>$147</span>
              <FaChevronDown />
            </div>
            <HoverCartItem open={open} setOpen={setOpen} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
