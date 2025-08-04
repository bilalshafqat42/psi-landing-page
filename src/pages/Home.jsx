import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Footer from "../components/Footer";
import GallerySection from "../components/GalelrySection";
import AmenitiesSection from "../components/AmenitiesSection";
import Location from "../components/Location";
import DownloadBrochure from "../components/DownloadBrochure";
import FormSection from "../components/FormSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <GallerySection />
      <DownloadBrochure />
      <AmenitiesSection />
      <Location />
      <FormSection />
      <Footer />
    </>
  );
};

export default Home;
