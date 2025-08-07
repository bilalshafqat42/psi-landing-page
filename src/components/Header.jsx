import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#101954]/40 text-gray-900 font-sans border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-0 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl text-white font-bold tracking-tight">
            Bilal Shafqat
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden lg:flex space-x-12 text-base text-white uppercase font-medium">
          {/* <a href="/" className="hover:font-bold transition">
            Home
          </a>
          <a href="/" className="hover:font-bold transition">
            Home 2
          </a> */}
          <a href="/" className="hover:font-bold transition">
            BUY
          </a>
          <a href="/" className="hover:font-bold transition">
            RENT
          </a>
          <a href="/" className="hover:font-bold transition">
            PROJECTS
          </a>
          <a href="/" className="hover:font-bold transition">
            DEVELOPERS
          </a>
          <a href="/" className="hover:font-bold transition">
            AREAS
          </a>
          <a href="/" className="hover:font-bold transition">
            SERVICES
          </a>
          <a href="/" className="hover:font-bold transition">
            BLOGS
          </a>
        </nav>

        {/* <div className="hidden lg:flex items-center space-x-4 text-sm">
          <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100">
            Login
          </button>
          <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
            List Your Property
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
