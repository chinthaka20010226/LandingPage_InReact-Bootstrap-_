import React from 'react';
import Navbar from "./Components/Navbar";
// import './App.css';

import Home from './Components/Home.js';
import Services from './Components/Services.js';
import About from './Components/About.js';
import Contact from "./Components/Contact.js";
import Bottom from './Components/Bottom.js';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Services />
      <About />
      <Contact />
      <Bottom />
    </>
  );
}

export default App;
