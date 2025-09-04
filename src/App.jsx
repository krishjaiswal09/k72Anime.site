import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projets from "./pages/Projets";

const App = () => {
  return (
    <div className="text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </div>
  );
};

export default App;
