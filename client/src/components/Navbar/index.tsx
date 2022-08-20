import React from "react";
import { Link, Route } from "wouter";

const Navbar = () => {
  return (
    <nav className="absolute top-0 flex justify-around w-full m-3">
      <h1 className="text-xl sm:text-3xl font-bold p-2 cursor-pointer">
        ⛑ <span className="text-mainHighlight">Vital</span>Watch
      </h1>
      <ul className="sm:flex items-center justify-around sm:w-[600px]">
        <Link href="/">
          <li className="text-xs sm:text-base hover:text-white cursor-pointer">
            Dashboard
          </li>
        </Link>
        <Link href="/device">
          <li className="text-xs sm:text-base hover:text-white cursor-pointer">
            Add Device
          </li>
        </Link>
      </ul>
      <h2 className="text-xs sm:text-base bgGradient px-4 py-1.5 rounded flex items-center text-mainBg font-bold cursor-pointer">
        Call 911
      </h2>
    </nav>
  );
};

export default Navbar;
