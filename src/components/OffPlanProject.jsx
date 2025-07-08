import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import sampleImage from "../assets/home.jpg"; // Replace with your actual image

const projects = [
  {
    title: "Saadiyat Lagoons",
    image: sampleImage,
    villaTypes: [
      "4 BHK VILLA + MAID'S",
      "5 BHK VILLA + MAID'S",
      "6 BHK VILLA + MAID'S",
    ],
    heading:
      "Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak in Unparalleled Cultural Experiences - in A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m2 Of Protected Wilderness.",
    description:
      "Saadiyat Lagoons offers a lifestyle like no other. Nestled among mangroves and white-sand beaches, these villas offer luxury, space, and serenity for families looking to invest in Abu Dhabi’s most exclusive natural community.",
    startingPrice: "AED 6,200,000",
    numberOfBedrooms: "4, 5, 6",
    areaSizeFrom: "4,960 SQ. FT",
  },
  {
    title: "Saadiyat Lagoons",
    image: sampleImage,
    villaTypes: [
      "4 BHK VILLA + MAID'S",
      "5 BHK VILLA + MAID'S",
      "6 BHK VILLA + MAID'S",
    ],
    heading:
      "Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak in Unparalleled Cultural Experiences - in A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m2 Of Protected Wilderness.",
    description:
      "Saadiyat Lagoons offers a lifestyle like no other. Nestled among mangroves and white-sand beaches, these villas offer luxury, space, and serenity for families looking to invest in Abu Dhabi’s most exclusive natural community.",
    startingPrice: "AED 6,200,000",
    numberOfBedrooms: "4, 5, 6",
    areaSizeFrom: "4,960 SQ. FT",
  },
];

const OffPlanProject = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 relative">
      {/* Navigation Buttons */}
      <div className="absolute top-15 left-0 z-20 flex justify-between w-full px-4 pointer-events-none">
        <button
          ref={prevRef}
          className="pointer-events-auto w-12 h-12 border border-gray-400 rounded bg-[#d6d6d6] text-gray-600 flex items-center justify-center shadow-sm"
        >
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
        <button
          ref={nextRef}
          className="pointer-events-auto w-12 h-12 border border-gray-400 rounded bg-[#d6d6d6] text-gray-600 flex items-center justify-center shadow-sm"
        >
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

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg shadow px-4 py-6">
              {/* Project Heading */}
              <h4 className="text-3xl font-bold mb-4 uppercase text-center">
                {project.title}
              </h4>

              {/* Villa Types */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
                {project.villaTypes.map((type, idx) => (
                  <h4
                    key={idx}
                    className="text-xl font-semibold uppercase text-center"
                  >
                    {type}
                  </h4>
                ))}
              </div>

              {/* Content + Image */}
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden min-h-[400px] bg-white">
                {/* Left Content */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white h-full">
                  <h3 className="text-base font-medium mb-4">
                    {project.heading}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    <span className="font-bold text-black">
                      Starting Prices:{" "}
                    </span>
                    <span className="text-[#faa300]">
                      {project.startingPrice}
                    </span>
                  </p>

                  <p className="text-gray-600 mb-4">
                    <span className="font-bold text-black">
                      Number of Bedrooms:{" "}
                    </span>
                    <span className="text-[#faa300]">
                      {project.numberOfBedrooms}
                    </span>
                  </p>

                  <p className="text-gray-600 mb-4">
                    <span className="font-bold text-black">
                      Area Size From:{" "}
                    </span>
                    <span className="text-[#faa300]">
                      {project.areaSizeFrom}
                    </span>
                  </p>

                  <button className="w-60 h-12 mt-4 md:mt-0 bg-[#faa300] text-[#01062d] text-white px-6 py-2 rounded-3xl hover:bg-[#01062d] hover:text-[#faa300] transition">
                    Book Your Property
                  </button>
                </div>

                {/* Right Image */}
                <div className="flex-1 h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OffPlanProject;
