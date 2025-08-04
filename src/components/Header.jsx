import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-white/10 text-gray-900 font-sans border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight">
            Bilal Shafqat
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="/home-2" className="hover:text-blue-600 transition">
            Home 2
          </a>
          <a href="#buy" className="hover:text-blue-600 transition">
            BUY
          </a>
          <a href="#rent" className="hover:text-blue-600 transition">
            RENT
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            PROJECTS
          </a>
          <a href="#developers" className="hover:text-blue-600 transition">
            DEVELOPERS
          </a>
          <a href="#areas" className="hover:text-blue-600 transition">
            AREAS
          </a>
          <a href="#services" className="hover:text-blue-600 transition">
            SERVICES
          </a>
          <a href="#blogs" className="hover:text-blue-600 transition">
            BLOGS
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
