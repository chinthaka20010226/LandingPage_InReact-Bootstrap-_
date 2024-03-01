import React from 'react'

// adding style
import '../Styles/Services.css';

// adding images
import RightTop from '../Assets/tech-02.png';
import Analysis from '../Assets/83660.png';
import Management from '../Assets/5189007.png';
import Report from '../Assets/download.png';
import Remembering from '../Assets/3856621-200.png';
import LeftBottom from '../Assets/tech-01.png';

function Services() {
    return (
        <section className='d-flex flex-column align-items-center vh-100'>
            <h1 className='service-title my-3'>Services</h1>
            <div className='container h-100 my-3'>
                <div className='row h-100'>
                    <div className='col-3 h-100 d-flex align-items-start'>
                        <img src={RightTop} alt='' className='right-top-image' />
                    </div>
                    <div className='col-6 h-100 d-flex flex-column align-items-center justify-content-center gap-5'>
                        <div className='row d-flex flex-row justify-content-between'>                                                                                                                          
                            <div className='col-6 p-1'>                                                                                    
                                <div class="card text-center">
                                    <img src={Analysis} class="card-img-bottom" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Analyzing</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 p-1'>
                                <div class="card text-center">
                                    <img src={Management} class="card-img-bottom" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Managing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex flex-row justify-content-between'>
                            <div className='col-6 p-1'>                                                                                
                                <div class="card text-center">
                                    <img src={Report} class="card-img-bottom" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Reporting</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 p-1'>
                                <div class="card text-center">
                                    <img src={Remembering} class="card-img-bottom" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Remembering</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 h-100 d-flex align-items-end'>
                        <img src={LeftBottom} alt='' className='right-top-image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
