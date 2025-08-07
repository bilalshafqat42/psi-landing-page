import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative h-screen lg:h-[80vh] bg-cover bg-center text-white font-sans"
      style={{ backgroundImage: "url('/hero-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-start justify-end h-full w-full max-w-[1440px] mx-auto px-6 lg:px-0 pb-24">
        <h1 className="font-heading tracking-wide text-6xl sm:text-7xl lg:text-[70px] font-extrabold leading-tight mb-4 tracking-tight">
          ADDRESS BEACHFRONT
        </h1>
        <p className="font-button text-xl font-medium mb-6">
          by Emaar Properties
        </p>
        <div className="flex space-x-4">
          <button className="flex flex-row items-center tracking-wide font-body bg-[#E46027] hover:bg-[#E46027]/90 text-white font-regular px-6 py-3 rounded">
            Download Brochure <FaLongArrowAltRight className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
