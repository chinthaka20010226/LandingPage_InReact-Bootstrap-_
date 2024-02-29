import React from 'react'

// adding style
import '../Styles/Home.css';

// adding images
import Slide01 from '../Assets/Illustration-a5f0019d.png';
import Slide02 from '../Assets/YaNoeS_hero_Usability testing-amico (1).png';
import Slide03 from '../Assets/tech-01.png';

function Home() {
    return (
        <div className=''>
          <div id="carouselExampleIndicators" className="carousel slide home">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className='carousel-content-wrapper d-flex justify-content-center align-items-center gap-5'>
                <div className='carousel-text-side'>
                  <h1 className='carousel-text-title'>Lessons and insights<br /><span>from 8 years</span></h1>
                  <p>this is a corousel component in bootstrap, it's easy to use</p>
                  <button type='button' className='carousel-text-btn'>Register</button>
                </div>
                <div className='carousel-image-side'>
                  <img src={Slide01} alt='' className='carousel-image' />
                </div>
                </div>
              </div>
              <div class="carousel-item">
              <div className='carousel-content-wrapper d-flex justify-content-center align-items-center gap-5'>
                <div className='carousel-text-side'>
                  <h1 className='carousel-text-title'>Lessons and insights<br /><span>from 8 years</span></h1>
                  <p>this is a corousel component in bootstrap, it's easy to use</p>
                  <button type='button' className='carousel-text-btn'>Register</button>
                </div>
                <div className='carousel-image-side'>
                  <img src={Slide02} alt='' className='carousel-image' />
                </div>
                </div>
              </div>
              <div class="carousel-item">
              <div className='carousel-content-wrapper d-flex justify-content-center align-items-center gap-5'>
                <div className='carousel-text-side'>
                  <h1 className='carousel-text-title'>Lessons and insights<br /><span>from 8 years</span></h1>
                  <p>this is a corousel component in bootstrap, it's easy to use</p>
                  <button type='button' className='carousel-text-btn'>Register</button>
                </div>
                <div className='carousel-image-side'>
                  <img src={Slide03} alt='' className='carousel-image' />
                </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden bg-dark">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    )
}

export default Home;
