import React from "react";
import { Search, Bomb } from "lucide-react";
import { UserRoundCheck, ShoppingBag, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-40 h-[50px]">
      <a className="font-medium text-2xl text-[#000000]">3legant.</a>
      <div>
        <ul className="flex gap-10 text-[#141718] font-normal text-[16px]">
          <li>
            <a href="#" className="cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Shop{" "}
              <span>
                <ChevronDown className="inline" size={20} />
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Product{" "}
              <span>
                <ChevronDown className="inline" size={20} />
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="cursor-pointer">
              <Search />
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <UserRoundCheck />
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <ShoppingBag />
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <p>
                <Bomb />
              </p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;              
