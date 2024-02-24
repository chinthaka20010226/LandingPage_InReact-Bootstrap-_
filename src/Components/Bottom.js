import React from 'react';

// adding style
import '../Styles/Bottom.css';

// adding icons
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Bottom(){
    return(
        <section className=''>
            <div className='row'>
                <div className='col-3'>
                    <h3 className=''>Features</h3>
                    <ul className=''>
                        <li><a href='' alt=''>Expense Management</a></li>
                        <li><a href='' alt=''>Income Management</a></li>
                        <li><a href='' alt=''>Report</a></li>
                        <li><a href='' alt=''>Bank Account</a></li>
                        <li><a href='' alt=''>Bank Card</a></li>
                        <li><a href='' alt=''>Remainder</a></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h3 className=''>Resources</h3>
                    <ul className=''>
                        <li><a href='' alt=''>ExpensyHelp</a></li>
                        <li><a href='' alt=''>Support</a></li>
                        <li><a href='' alt=''>Community</a></li>
                        <li><a href='' alt=''>Privacy</a></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h3 className=''>Learn more</h3>
                    <ul className=''>
                        <li><a href='' alt=''>About Expensy</a></li>
                    </ul>
                    <div className='bottom-icons'>
                        <a href='#' alt='' className='bottom-icon'><FaTwitter /></a>
                        <a href='#' alt='' className='bottom-icon'><FaFacebookF /></a>                                                         
                        <a href='#' alt='' className='bottom-icon'><FaInstagram /></a>
                        <a href='#' alt='' className='bottom-icon'><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className='col-3'>
                    <h3>Get Started</h3>
                    <ul className=''>
                        <li><a href='' alt=''>Create a new account</a></li>
                        <li><a href='' alt=''>Log in</a></li>
                    </ul>
                    <p>xxx</p>
                    <p>zzz</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h1>Expensy</h1>
                </div>
            </div>
        </section>
    )
}

export default Bottom;