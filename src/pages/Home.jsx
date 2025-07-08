import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import PropertySlider from "../components/PropertySlider";
import OffPlanProject from "../components/OffPlanProject";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      {/* products slide section */}
      <section className="py-6 px-4 bg-[#fff]">
        <div className="max-w-7xl mx-auto">
          <PropertySlider />
        </div>
      </section>
      {/* off plan projects  */}
      <section className="py-6 px-8 bg-[#fff]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#01062d] mb-8 text-left border-[#faa300] border-l-4 pl-4">
            OFF-PLAN PROJECTS
          </h2>
        </div>
      </section>
      <section className="py-6 px-8 bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto">
          <OffPlanProject />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
