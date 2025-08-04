import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import NewGallery from "../components/NewGallery";
import AmenitiesSection from "../components/AmenitiesSection";

const NewHome = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NewGallery />
      <HeroSection />
    </>
  );
};

export default NewHome;
