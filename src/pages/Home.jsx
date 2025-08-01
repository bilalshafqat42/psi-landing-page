import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Header />
      <HeroBanner />
      <About />
      <Footer />
    </>
  );
};

export default Home;
