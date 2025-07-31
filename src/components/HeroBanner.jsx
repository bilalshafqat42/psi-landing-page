import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white font-sans"
      style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      // style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-[1440px] mx-auto px-6 lg:px-14 pb-24">
        <h1 className="text-6xl sm:text-7xl lg:text-[70px] font-extrabold leading-tight mb-4 tracking-tight">
          ADDRESS BEACHFRONT
        </h1>
        <p className="text-xl font-medium mb-6">by Emaar Properties</p>
        <div className="flex space-x-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded">
            Download Brochure
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded">
            Register Interest
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
