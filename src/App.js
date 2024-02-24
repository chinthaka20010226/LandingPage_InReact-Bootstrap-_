import React from 'react';
import Navbar from "./Components/Navbar";
// import './App.css';

import Home from './Components/Home.js';
import Services from './Components/Services.js';
import About from './Components/About.js';
import Contact from "./Components/Contact.js";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default App;
