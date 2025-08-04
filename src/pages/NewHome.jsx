import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import NewGallery from "../components/NewGallery";

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
