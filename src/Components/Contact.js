import React from 'react'

// adding style
import '../Styles/Contact.css';

function Contact() {
    return (
        <section className='w-100 vh-100 d-flex flex-column justify-content-center'>
            <div className='row contact-container mx-5 my-5'>
                <div className='col card d-flex flex-column align-items-center justify-content-center mx-5 py-3'>
                    <h1 className='contact-title my-3'>Contact</h1>
                    <div className='contact-input my-3'>
                        <input type='text' placeholder='First Name' className='contact-input-field px-3 py-1'></input>                                                                         
                    </div>
                    <div className='contact-input my-3'>
                        <input type='text' placeholder='Email Address' className='contact-input-field px-3 py-1'></input>
                    </div>
                    <div className='contact-submit my-3'>
                        <button type='submit' className='px-2 py-1'>Submit</button>                                                                                     
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;