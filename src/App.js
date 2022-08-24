import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mysites from "./pages/Mysites";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Mes-sites" element={<Mysites />} />
          <Route path="/A-propos" element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
