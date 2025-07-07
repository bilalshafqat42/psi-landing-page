import React from "react";
import FlagsDropdown from "./FlagsDropdown";

const TopBar = () => {
  return (
    <div className="hidden md:block bg-[#01062d]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end-safe">
        <FlagsDropdown />
      </div>
    </div>
  );
};

export default TopBar;
