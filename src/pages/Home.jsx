import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import PropertySearchForm from "../components/PropertySearchForm";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <PropertySearchForm />
      <Footer />
    </>
  );
};

export default Home;
