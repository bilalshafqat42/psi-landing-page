import React from "react";
import FlagsDropdown from "./FlagsDropdown";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="hidden md:block bg-[#000]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end-safe">
          <FlagsDropdown />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
