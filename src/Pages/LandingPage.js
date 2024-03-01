import React from 'react'

import Home from '../Components/Home'
import Services from '../Components/Services'
import About from '../Components/About'
import Contact from '../Components/Contact'
import ScrollToTop from '../Components/ScrollToTop'
import Navbar from '../Components/Navbar'

export default function Welcome() {
  return (
    <div>

        <ScrollToTop />

        <Navbar />
        
        <div id="home">
          <Home />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
            <Contact />
        </div>
        
    </div>
  )
}
