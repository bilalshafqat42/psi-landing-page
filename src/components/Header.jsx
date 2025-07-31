import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 text-gray-900 font-sans border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight">
            Bilal Shafqat
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium">
          <a href="#buy" className="hover:text-blue-600 transition">
            Buy
          </a>
          <a href="#rent" className="hover:text-blue-600 transition">
            Rent
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#developers" className="hover:text-blue-600 transition">
            Developers
          </a>
          <a href="#areas" className="hover:text-blue-600 transition">
            Areas
          </a>
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#blogs" className="hover:text-blue-600 transition">
            Blogs
          </a>
          <a href="#more" className="hover:text-blue-600 transition">
            More
          </a>
        </nav>

        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100">
            Login
          </button>
          <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
            List Your Property
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
