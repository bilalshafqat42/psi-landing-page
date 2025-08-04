import React from "react";
import { FiLayout, FiTrendingUp, FiEdit3 } from "react-icons/fi";

const AboutSection = () => {
  const features = [
    {
      icon: <FiLayout className="text-3xl text-gray-800 mx-auto" />,
      title: "01 PLANING",
      description:
        "I initiate the web application development process by strategically.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-gray-800 mx-auto" />,
      title: "02 STRATEGIZING",
      description:
        "I initiate the web application development process by strategically.",
    },
    {
      icon: <FiEdit3 className="text-3xl text-gray-800 mx-auto" />,
      title: "03 PROTOTYPING",
      description:
        "I initiate the web application development process by strategically.",
    },
    // {
    //   icon: <FiMonitor className="text-3xl text-gray-800 mx-auto" />,
    //   title: "04 DEVELOPMENT PHASE",
    //   description:
    //     "I initiate the web application development process by strategically.",
    // },
  ];

  return (
    <section className="px-6 py-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-center md:text-left">
        {/* Column 1: Logo + About (40%) with right border on desktop */}
        <div className="lg:col-span-2 lg:border-r lg:pr-8 flex flex-col items-center md:items-start space-y-4">
          <img src="/logo.svg" alt="Logo" className="w-20 h-auto" />
          <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
            About Building
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Columns 2–4: Features (20% each) with left padding on desktop */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="lg:col-span-1 lg:pl-8 flex flex-col items-center md:items-start space-y-3"
          >
            <div className="text-3xl">{feature.icon}</div>
            <h4 className="font-bold text-gray-900 text-base uppercase">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
