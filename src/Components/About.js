import React from 'react'

// adding style
import '../Styles/About.css';

// adding image
import About_ from '../Assets/Newsletter-amico-1024x1024.png';

function About() {
    return (
        <section className='vh-100 d-flex flex-column align-items-center'>
            <h1 className='about-title pt-5'>About</h1>
            <div className='container h-100'>
                <div className='row h-100 d-flex flex-row align-items-center justify-content-center'>
                    <div className='col-6 h-100 d-flex flex-row align-items-center justify-content-center'>
                        <p className='text-balanced'>The sequence diagram for user creation elegantly illustrates the step-by-step interactions between the admin, a new user, the system, and the database throughout the registration process. This dynamic sequence unfolds as follows:
                            First and foremost, the "Admin" initiates the sequence by logging into the system, signifying the secure access to administrative functions. Concurrently, a "New User" lifeline is introduced, representing the journey of a user who intends to create an account on the website. The new user starts by accessing the website and selecting the "Sign Up" option, clearly indicating their registration intent.
                            As the new user selects "Sign Up," they are presented with the registration form, allowing them to provide the necessary information. During this pivotal moment, the admin takes action by generating a unique identification (ID) for the new user. This ID serves as a distinct label for the user's account, ensuring effective account management.
                        </p>
                    </div>
                    <div className='col-6 h-100 d-flex flex-row align-items-center justify-content-center'>
                        <img src={About_} alt='' className='about-image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
