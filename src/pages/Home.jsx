import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Footer from "../components/Footer";
import GallerySection from "../components/GalelrySection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <GallerySection />
      <Footer />
    </>
  );
};

export default Home;
