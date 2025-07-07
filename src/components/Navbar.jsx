import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-700">
              MyLogo
            </a>
          </div>

          {/* Center: Menu (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Contact
            </a>
          </div>

          {/* Right: Button */}
          <div className="hidden md:flex">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              Consultation
            </button>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block text-gray-700 py-2">
            Home
          </a>
          <a href="#" className="block text-gray-700 py-2">
            About
          </a>
          <a href="#" className="block text-gray-700 py-2">
            Services
          </a>
          <a href="#" className="block text-gray-700 py-2">
            Contact
          </a>
          <button className="w-full mt-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
            Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
