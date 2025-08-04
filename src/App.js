import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutSection from "./components/About";
import Notfound from "./components/Notfound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
