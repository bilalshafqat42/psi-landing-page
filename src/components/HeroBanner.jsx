import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slides from "../constants/slides";

import PropertySearchForm from "./PropertySearchForm";
import { FaLongArrowAltRight } from "react-icons/fa";

// List of slides with different background images and titles
// const slides = [
//   {
//     image: "/hero-banner.jpg",
//     title: "DISCOVER YOUR MOST COMFORT PLACE FOR YOUR FUTURE LIFE",
//   },
//   {
//     image: "/hero-banner-2.jpg",
//     title: "FIND YOUR PERFECT HOME IN DUBAI’S BEST COMMUNITIES",
//   },
//   {
//     image: "/hero-banner-3.jpg",
//     title: "INVEST SMARTLY IN UAE REAL ESTATE MARKET",
//   },
// ];

const HeroBanner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop
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
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>

                    {/* Glassmorphism Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 text-center my-4 py-4 w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg max-w-4xl h-30">
                      <div className="flex flex-row justify-center items-center px-4 py-px w-full text-center gap-4">
                        <p className="font-bold text-lg md:text-4xl text-white drop-shadow-sm uppercase">
                          5+
                        </p>
                        <p className="text-white drop-shadow-sm text-l text-left font-medium leading-tight">
                          POPULAR
                          <br />
                          AREAS
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center px-4 py-px w-full text-center border-l-2 border-white/30 gap-4">
                        <p className="text-white drop-shadow-sm text-l text-left font-medium leading-tight">
                          PROJECTS
                        </p>
                        <p className="font-bold text-lg md:text-4xl text-white drop-shadow-sm uppercase">
                          11+
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center px-4 py-px w-full text-center col-span-2 lg:col-span-1 lg:border-l-2 border-white/30 gap-4">
                        <p className="text-white drop-shadow-sm text-l text-left font-medium leading-tight">
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

                  {/* Button */}
                  <div className="flex-shrink-0">
                    <button className="bg-[#faa300] font-semibold text-white px-4 py-2 rounded-3xl hover:bg-[#01062d] hover:text-[#faa300] transition">
                      <span className="flex justify-center items-center gap-2">
                        ALL PROJECTS <FaLongArrowAltRight />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Bottom Form */}
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
