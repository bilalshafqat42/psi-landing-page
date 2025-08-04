import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Footer from "../components/Footer";
import GallerySection from "../components/GalelrySection";
import AmenitiesSection from "../components/AmenitiesSection";
import Location from "../components/Location";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <GallerySection />
      <AmenitiesSection />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
