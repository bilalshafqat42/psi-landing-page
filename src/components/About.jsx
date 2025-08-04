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
  ];

  return (
    <section className="px-6 py-20 max-w-[1440px] mx-auto">
      {/* Features Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-center md:text-left mb-20">
        <div className="lg:col-span-2 lg:border-r lg:pr-8 flex flex-col items-center md:items-start space-y-4">
          <img src="/passo-dark.png" alt="Logo" className="w-50 h-auto" />
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

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

      {/* Image + Text Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">Vision Behind the Process</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Our approach blends creativity, strategy, and technical precision to
            deliver top-tier web applications. We focus on scalable, user-first
            experiences from the first sketch to final deployment. We focus on scalable, user-first
            experiences from the first sketch to final deployment.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our approach blends creativity, strategy, and technical precision to
            deliver top-tier web applications. We focus on scalable, user-first
            experiences from the first sketch to final deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
