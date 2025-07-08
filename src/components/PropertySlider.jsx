import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import properties from "../constants/properties";
import PropertyCard from "./PropertyCard";

const PropertySlider = () => {
  const [type, setType] = useState("rent");

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#01062d] mb-8 text-left border-[#faa300] border-l-4 pl-4">
          LATEST PROPERTIES
        </h2>
        <div className="relative flex bg-gray-200 rounded w-80 h-10 cursor-pointer mb-8">
          <div
            className={`absolute top-0 h-full w-1/2 bg-[#faa300] rounded transition-all duration-300 ${
              type === "buy" ? "left-1/2" : "left-0"
            }`}
          ></div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("rent")}
          >
            <span className={type === "rent" ? "text-white" : "text-[#01062d]"}>
              FOR SALE
            </span>
          </div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("buy")}
          >
            <span className={type === "buy" ? "text-white" : "text-[#01062d]"}>
              FOR RENT
            </span>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PropertySlider;
