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
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <PropertySlider />
        </div>
      </section>
      {/* off plan projects  */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <OffPlanProject />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
