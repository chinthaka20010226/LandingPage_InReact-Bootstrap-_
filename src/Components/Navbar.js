import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";

import '../Styles/Navbar.css';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const Navbar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleVisible = () => {
            if (window.innerWidth < 600) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleVisible);

        return () => {
            window.removeEventListener('resize', handleVisible);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close the mobile menu after scrolling
        }
    };

    const navItems = [
        { id: "home", name: "Home" },
        { id: "services", name: "Services" },
        { id: "about", name: "About" },
        { id: "contact", name: "Contact" }
    ];

    return (
        <div>
            <ScrollToTop />
            <header className='w-100'>
                <nav className='navbar_ w-100 p-2 bg-light'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <a href='#' className='navbar-logo'><span className='navbar-logo-text'>Expensy</span></a>

                        <div>
                            <ul className="" style={{display: isOpen ? "none" : "flex",cursor:"pointer"}}>
                                {navItems.map((item, index) => (
                                    <li key={index} className="nav-item p-2">
                                        <a className="nav-link" onClick={() => scrollToSection(item.id)}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ display: isOpen ? "none" : "flex" }} className='navbar-login-singup gap-4'>
                            <a href='#' className='navbar-login'>Login</a>
                            <button type='button' className='navbar-sign-up'>Sign Up</button>
                        </div>

                        <div style={{ display: isOpen ? "block" : "none" }} className='menubar'>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='menubar-icon'>
                                {isMenuOpen ? (<FaXmark />) : (<FaBars />)}
                            </button>
                        </div>
                    </div>

                    <div style={{ display: isMenuOpen && isOpen ? "flex" : "none", flexDirection: "column", alignItems: "center" }} className='navbar-menu-body'>
                        {navItems.map((item, index) => (
                            <a key={index} onClick={() => scrollToSection(item.id)}>{item.name}</a>
                        ))}
                    </div>
                </nav>
            </header>

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

export default Navbar;
