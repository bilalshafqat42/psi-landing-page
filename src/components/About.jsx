import React from "react";
import { FiLayout, FiTrendingUp, FiEdit3 } from "react-icons/fi";

const AboutSection = () => {
  const features = [
    {
      icon: <FiLayout className="text-3xl mx-auto" />,
      title: "01 PLANING",
      description:
        "I initiate the web application development process by strategically.",
    },
    {
      icon: <FiTrendingUp className="text-3xl mx-auto" />,
      title: "02 STRATEGIZING",
      description:
        "I initiate the web application development process by strategically.",
    },
    {
      icon: <FiEdit3 className="text-3xl mx-auto" />,
      title: "03 PROTOTYPING",
      description:
        "I initiate the web application development process by strategically.",
    },
  ];

  return (
    <section className="w-full">
      {/* Features Row */}
      <div className="bg-[#f6f6f6] w-full">
        <div className="py-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-center md:text-left mb-4">
            <div className="lg:col-span-2 lg:border-r lg:pr-8 flex flex-col items-center md:items-start space-y-4">
              <img src="/passo-dark.png" alt="Logo" className="w-50 h-auto" />
              <p className="font-body text-[#333] text-basis leading-relaxed mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className="lg:col-span-1 lg:pl-8 flex flex-col items-center md:items-start space-y-3"
              >
                <div className="text-3xl text-[#101954]">{feature.icon}</div>
                <h4 className="font-bold text-[#101954] text-lg uppercase">
                  {feature.title}
                </h4>
                <p className="font-body text-[#333] text-basis leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image + Text Row */}
      <div className="bg-white w-full">
        <div className="px-6 py-20 max-w-[1440px] mx-auto">
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
              <h3 className="text-3xl text-[#101954] font-bold mb-4">
                Vision Behind the Process
              </h3>
              <p className="font-body text-[#333] text-basis leading-relaxed mb-6">
                Our approach blends creativity, strategy, and technical
                precision to deliver top-tier web applications. We focus on
                scalable, user-first experiences from the first sketch to final
                deployment. We focus on scalable, user-first experiences from
                the first sketch to final deployment.
              </p>
              <p className="font-body text-[#333] text-basis leading-relaxed mb-6">
                Our approach blends creativity, strategy, and technical
                precision to deliver top-tier web applications. We focus on
                scalable, user-first experiences from the first sketch to final
                deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
