import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Footer from "../components/Footer";
import GallerySection from "../components/GalelrySection";
import AmenitiesSection from "../components/AmenitiesSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <GallerySection />
      <AmenitiesSection />
      <Footer />
    </>
  );
};

export default Home;
