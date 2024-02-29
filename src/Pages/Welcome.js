import React from 'react'

import Home from '../Components/Home'
import Services from '../Components/Services'
import About from '../Components/About'
import Contact from '../Components/Contact'

export default function Welcome() {
  return (
    <div>
        
        <div>
          <Home />
        </div>
  
        <div>
          <Services/>
        </div>

        <div>
          <About/>
        </div>

        <div>
          <Contact />
        </div>
        
    </div>
  )
}
