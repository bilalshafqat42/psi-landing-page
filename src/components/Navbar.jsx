import React, { useState } from "react";
import { FaLongArrowAltRight, FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-[#01062d] hover:text-[#faa300]"
            >
              Bilal Logo{" "}
            </a>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="font-semibold text-[#01062d] hover:text-[#faa300] font-bold"
            >
              RENT/BUY
            </a>
            <a
              href="#"
              className="font-semibold text-[#01062d] hover:text-[#faa300] font-bold"
            >
              AREA
            </a>
            <a
              href="#"
              className="font-semibold text-[#01062d] hover:text-[#faa300] font-bold"
            >
              PROJECT
            </a>
            <a
              href="#"
              className="font-semibold text-[#01062d] hover:text-[#faa300] font-bold"
            >
              DEVELOPER
            </a>
            <a
              href="#"
              className="font-semibold text-[#01062d] hover:text-[#faa300] font-bold"
            >
              LIST YOUR PROPERTY
            </a>
          </div>

          {/* Right: Desktop Button */}
          <div className="hidden md:flex gap-2">
            <button className="bg-[#faa300] font-semibold text-[#000] px-4 py-2 rounded-3xl hover:bg-[#01062d] hover:text-[#faa300] transition">
              <span className="flex justify-center items-center gap-2">
                CONSULTATION <FaLongArrowAltRight />
              </span>
            </button>
            <button className="bg-[#f4f5f8] font-semibold text-[#faa300] px-4 py-2 rounded-xl hover:bg-[#01062d] hover:text-[#faa300] transition">
              <FaRegHeart />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden px-4 overflow-hidden transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 max-h-[500px]"
            : "-translate-y-4 opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <a href="#" className="block font-medium text-[#01062d] py-2">
          RENT/BUY
        </a>
        <a href="#" className="block font-medium text-[#01062d] py-2">
          AREA
        </a>
        <a href="#" className="block font-medium text-[#01062d] py-2">
          PROJECT
        </a>
        <a href="#" className="block font-medium text-[#01062d] py-2">
          DEVELOPER
        </a>
        <a href="#" className="block font-medium text-[#01062d] py-2">
          LIST YOUR PROPERTY
        </a>
        <button className="bg-[#faa300] font-semibold text-[#000] px-4 py-2 rounded-3xl hover:bg-[#01062d] hover:text-[#faa300] transition mb-5">
          <span className="flex justify-center items-center gap-2">
            CONSULTATION <FaLongArrowAltRight />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
