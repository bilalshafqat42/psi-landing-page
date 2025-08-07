import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewHome from "./pages/NewHome";
import Notfound from "./components/Notfound";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home-2" element={<NewHome />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
