import React from "react";
import {
  FiLayout,
  FiTrendingUp,
  FiEdit3,
  FiMonitor,
  FiCheckCircle,
  FiRefreshCcw,
} from "react-icons/fi";

const AboutSection = () => {
  const features = [
    {
      icon: <FiLayout className="text-3xl text-gray-800" />,
      title: "01 PLANING",
      description:
        "I initiate the web application development process by strategically planning every step to ensure seamless execution from start to finish.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-gray-800" />,
      title: "02 STRATEGIZING THE DEVELOPMENT PROCESS",
      description:
        "To mitigate potential obstacles, I initiate discussions regarding the performance and expected outcomes of the web application",
    },
    {
      icon: <FiEdit3 className="text-3xl text-gray-800" />,
      title: "03 PROTOTYPING",
      description:
        "I not only refine your ideas through market research validation to create a profitable product, but also collaborate to save costs and mitigate risks effectively.",
    },
    {
      icon: <FiMonitor className="text-3xl text-gray-800" />,
      title: "04 DEVELOPMENT PHASE",
      description:
        "After handling the small details, I dive into the real challenge: the development phase.",
    },
    {
      icon: <FiCheckCircle className="text-3xl text-gray-800" />,
      title: "05 QUALITY ASSURANCE",
      description:
        "Quality assurance (QA) is a critical step in web app development as it guarantees the absence of bugs and ensures seamless functionality.",
    },
    {
      icon: <FiRefreshCcw className="text-3xl text-gray-800" />,
      title: "06 UPDATE & MAINTENANCE",
      description:
        "When it comes to updates and maintenance, I stay committed to your project even after its full development.",
    },
  ];

  return (
    <section className="px-6 py-20 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug max-w-3xl">
        MY WEB APPLICATION DEVELOPMENT PROCESS OVERVIEW
      </h2>
      <p className="text-gray-600 mb-14 max-w-2xl">
        Here’s a breakdown of my web application development process, which has
        been instrumental in my success in the IT sector.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col space-y-3">
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
