import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    heading: "Live in Nature, Steps from the Coast",
    description:
      "Saadiyat Lagoons offers a lifestyle like no other. Nestled among mangroves and white-sand beaches, these villas offer luxury, space, and serenity for families looking to invest in Abu Dhabi’s most exclusive natural community.",
  },
  {
    title: "Another Project",
    image: sampleImage,
    villaTypes: ["3 BHK VILLA", "4 BHK TOWNHOUSE"],
    heading: "Modern Living with Timeless Views",
    description:
      "This new project offers sleek, contemporary living near key landmarks and lifestyle amenities. Perfect for growing families and long-term investors.",
  },
];

const OffPlanProject = () => {
  return (
    <div className="max-w-7xl bg-[#f6f6f6] mx-auto py-6 px-4">
      {/* Section Title */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div>
              {/* Project Name */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">{project.heading}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    Explore More
                  </button>
                </div>

                {/* Right Image */}
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg shadow"
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
