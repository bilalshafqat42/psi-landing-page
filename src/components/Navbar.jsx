import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-semibold text-lg flex items-center gap-2">
          {/* Replace with your logo */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="font-bold tracking-wider">nikori</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-white font-medium hover:opacity-80 transition"
          >
            About
          </a>
          <a
            href="#ownership"
            className="text-white font-medium hover:opacity-80 transition"
          >
            Full Ownership
          </a>
          <a
            href="#contact"
            className="text-white font-medium hover:opacity-80 transition"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
