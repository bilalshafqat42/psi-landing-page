import React from "react";
import {
  FiLayout,
  FiTrendingUp,
  FiEdit3,
  FiMonitor,
  // FiCheckCircle,
  // FiRefreshCcw,
} from "react-icons/fi";

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
    {
      icon: <FiMonitor className="text-3xl text-gray-800 mx-auto" />,
      title: "04 DEVELOPMENT PHASE",
      description:
        "I initiate the web application development process by strategically.",
    },
    // {
    //   icon: <FiCheckCircle className="text-3xl text-gray-800 mx-auto" />,
    //   title: "05 QUALITY ASSURANCE",
    //   description:
    //     "Quality assurance (QA) is a critical step in web app development as it guarantees the absence of bugs and ensures seamless functionality.",
    // },
    // {
    //   icon: <FiRefreshCcw className="text-3xl text-gray-800 mx-auto" />,
    //   title: "06 UPDATE & MAINTENANCE",
    //   description:
    //     "When it comes to updates and maintenance, I stay committed to your project even after its full development.",
    // },
  ];

  return (
    <section className="px-6 py-20 max-w-screen-xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug max-w-3xl mx-auto">
        About Building
      </h2>
      <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
      <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div>{feature.icon}</div>
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
