import React from 'react'

// adding style
import '../Styles/Home.css';

// adding images
import Slide01 from '../Assets/Illustration-a5f0019d.png';

function Home() {
    return (
        <div>
          <div id="carouselExampleIndicators" class="carousel slide bg-light home">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className=''>
                  <h1 className=''>Lessons and insights<span>from 8 years</span></h1>
                  <p>this is a corousel component in bootstrap, it's easy to use</p>
                  <button type='button'>Register</button>
                </div>
                <div className=''>
                  <img src={Slide01} alt='' />
                </div>
              </div>
              <div class="carousel-item">
                
              </div>
              <div class="carousel-item">
                
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    )
}

export default Home;
