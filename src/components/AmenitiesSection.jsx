import React from "react";
import { FiStar, FiHome, FiCoffee, FiWifi, FiUsers } from "react-icons/fi";

const amenities = [
  {
    icon: <FiHome className="text-3xl mx-auto text-gray-800" />,
    title: "Modern Villas",
    description: "Spacious and stylish residences.",
  },
  {
    icon: <FiStar className="text-3xl mx-auto text-gray-800" />,
    title: "5-Star Services",
    description: "Luxury amenities at your doorstep.",
  },
  {
    icon: <FiCoffee className="text-3xl mx-auto text-gray-800" />,
    title: "Cafés & Dining",
    description: "Fine and casual dining options.",
  },
  {
    icon: <FiWifi className="text-3xl mx-auto text-gray-800" />,
    title: "High-speed WiFi",
    description: "Always stay connected.",
  },
  {
    icon: <FiUsers className="text-3xl mx-auto text-gray-800" />,
    title: "Community Spaces",
    description: "Shared spaces for all residents.",
  },
];

const AmenitiesSection = () => {
  return (
    <section className="text-gray-900 px-6 bg-[#f6f6f6] py-20 font-[Poppins]">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Amenities</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-16 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="space-y-3">
              <div>{item.icon}</div>
              <h4 className="text-base font-bold uppercase text-gray-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
