import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import properties from "../constants/properties";
import PropertyCard from "../components/PropertyCard";
import PropertySlider from "../components/PropertySlider";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Properties
          </h2>
          <PropertySlider />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
