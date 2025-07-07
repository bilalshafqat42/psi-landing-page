import React from "react";
import PropertySearchForm from "./PropertySearchForm";

const HeroBanner = () => {
  return (
    <section
      className="w-full bg-blue-100 md:h-[650px] h-[500px]"
      style={{
        backgroundImage: "url('/hero-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Container with flex-col and justify-between for top and bottom rows */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full h-full flex flex-col justify-between py-8">
        {/* First Row: Heading + Grid + Button (stick to top) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
          {/* Left: Heading & Description Grid */}
          <div className="text-left max-w-2xl w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              Welcome to Our Service
            </h1>

            {/* Glassmorphism Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 text-center my-4 py-4 w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg max-w-4xl">
              <div className="flex flex-col justify-center items-center px-4 py-px w-full text-center">
                <p className="font-bold text-lg md:text-xl text-white drop-shadow-sm mt-4 uppercase">
                  10 Mins
                </p>
                <p className="text-white drop-shadow-sm text-md font-light">
                  To Dubai Mall
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-px w-full text-center border-l-2 border-white/30">
                <p className="font-bold text-lg md:text-xl text-white drop-shadow-sm mt-4 uppercase">
                  3 Mins to
                </p>
                <p className="text-white drop-shadow-sm text-md font-light">
                  Dubai Hills Mall
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-px w-full text-center col-span-2 lg:col-span-1 lg:border-l-2 border-white/30">
                <p className="font-bold text-lg md:text-xl text-white drop-shadow-sm mt-4 uppercase">
                  Fully Serviced
                </p>
                <p className="text-white drop-shadow-sm text-md font-light">
                  by Vida
                </p>
              </div>
            </div>
          </div>

          {/* Right: Button */}
          <div className="flex-shrink-0">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Second Row: Form (stick to bottom) */}
        <div>
          <PropertySearchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
