import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import properties from "../constants/properties";
import PropertyCard from "./PropertyCard";

const PropertySlider = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Properties
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
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
