import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import slides from "../constants/slides";
import PropertySearchForm from "./PropertySearchForm";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="w-full relative">
      {/* Custom Navigation Buttons */}
      <div className="hidden md:block">
        <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
          <button className="hero-prev bg-white/10 backdrop-blur-md border border-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
          <button className="hero-next bg-white/10 backdrop-blur-md border border-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop
        slidesPerView={1}
        spaceBetween={0}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full md:h-[750px] h-[500px] flex items-center bg-blue-100"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10 w-full h-full flex flex-col justify-between py-8">
                {/* Heading Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
                  <div className="text-left max-w-4xl w-full mt-8">
                    <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>

                    {/* Stats Box (only on desktop) */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 text-center my-4 py-4 w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg max-w-4xl h-30">
                      <div className="flex flex-row justify-center items-center px-4 gap-4">
                        <p className="font-bold text-lg md:text-4xl text-white drop-shadow-sm uppercase">
                          5+
                        </p>
                        <p className="text-white drop-shadow-sm text-left font-medium leading-tight">
                          POPULAR
                          <br />
                          AREAS
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center px-4 border-l-2 border-white/30 gap-4">
                        <p className="text-white text-left font-medium leading-tight">
                          PROJECTS
                        </p>
                        <p className="font-bold text-lg md:text-4xl text-white drop-shadow-sm uppercase">
                          11+
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center px-4 col-span-2 lg:col-span-1 lg:border-l-2 border-white/30 gap-4">
                        <p className="text-white text-left font-medium leading-tight">
                          YEARS
                          <br />
                          EXPERIENCE
                        </p>
                        <p className="font-bold text-lg md:text-4xl text-white drop-shadow-sm uppercase">
                          6+
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="ml-auto mr-auto md:ml-0 md:mr-0 md:flex-shrink-0">
                    <button className="bg-[#faa300] font-semibold text-white px-4 py-2 rounded-3xl hover:bg-[#01062d] hover:text-[#faa300] transition">
                      <span className="flex justify-center items-center gap-2">
                        ALL PROJECTS <FaLongArrowAltRight />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Search Form at Bottom */}
                <div>
                  <PropertySearchForm />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
