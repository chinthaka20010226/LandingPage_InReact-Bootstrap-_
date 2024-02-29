import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import './App.css';

import Home from './Components/Home.js';
import Services from './Components/Services.js';
import About from './Components/About.js';
import Contact from "./Components/Contact.js";
import Bottom from './Components/Bottom.js';
// import Welcome from './Pages/Welcome.js';

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Navbar>
      </Router>

      <Bottom />
    </>
  );
}

export default App;