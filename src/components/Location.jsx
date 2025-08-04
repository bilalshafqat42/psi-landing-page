import React from "react";
import { FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";

const features = [
  {
    icon: <FiMapPin className="text-3xl mx-auto text-gray-800" />,
    title: "Prime Location",
    description: "Situated near all major attractions and transit hubs.",
  },
  {
    icon: <FiClock className="text-3xl mx-auto text-gray-800" />,
    title: "24/7 Access",
    description: "Enjoy convenience and flexibility any time of day.",
  },
  {
    icon: <FiCheckCircle className="text-3xl mx-auto text-gray-800" />,
    title: "Easy Reach",
    description: "Everything you need is just a short walk away.",
  },
];

const Location = () => {
  return (
    <section className="bg-white text-gray-900 px-6 py-20 font-[Poppins]">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Heading and Text */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Location</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
            Discover the perfect destination. Our location combines convenience
            and elegance, providing you with access to all key landmarks while
            offering serene surroundings.
          </p>
        </div>

        {/* Large Image */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Map location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature Icons Row */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((item, index) => (
            <div key={index} className="space-y-3 text-center">
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

export default Location;
