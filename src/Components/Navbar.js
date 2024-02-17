import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

// adding style
import '../Styles/Navbar.css';

// react icons
import { FaXmark , FaBars } from "react-icons/fa6";

function Navbar() {
    const[isOpen,setIsOpen] = useState(false);
    const[isMenuOpen,setIsMenuOpen] = useState(false);

    // set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handelVisible = () => {
            if(window.innerWidth < 600){
                setIsOpen(true);
            }
            else{
                setIsOpen(false);
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handelVisible);

        return () => {
            window.removeEventListener('resize', handelVisible);
        };
    },[])

    const navItems = [
        {
            path:"/",
            name:"Home" 
        },
        {
            path:"/services",
            name:"Services" 
        },
        {
            path:"/about",
            name:"About" 
        },
        {
            path:"/contact",
            name:"Contact" 
        },
    ]

    return (
        <header className='w-100'>
            <nav className='navbar_ w-100 p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    {/* navbar log */}
                    <a href='#' className='navbar-logo'><span className='navbar-logo-text'>Expensy</span></a>

                    {/* navbar items for large screen */}
                    <ul 
                        style={{display: isOpen ? "none" : "flex",
                                flexDirection: "row"}} 
                        className='navbar-items gap-4'>
                        {
                            navItems.map((item,index) => (
                                <NavLink to={item.path} key={index}>
                                    {item.name}
                                </NavLink>
                            ))
                        }
                    </ul>

                    {/* navbar login-signup for large screen */}
                    <div style={{display: isOpen ? "none" : "flex"}} className='navbar-login-singup gap-4'>
                        <a href='#' className='navbar-login'>Login</a>
                        <button type='button' className='navbar-sign-up'>Sign Up</button>
                    </div>

                    {/* menu button for mobile divice */}
                    <div style={{display: isOpen ? "block" : "none"}} className='menubar'>
                        <button 
                            onClick={toggleMenu}
                            className='menubar-icon'>
                            {
                                isMenuOpen ? (<FaXmark/>) : (<FaBars/>)
                            }
                        </button>
                    </div>

                    
                </div>

                {/* navbar items for mobile device */}
                <div
                    style={{display: isMenuOpen && isOpen ? "flex" : "none", flexDirection: "column", alignItems: "center"}}
                    className='navbar-menu-body'>
                    {
                        navItems.map((item,index) => (
                            <NavLink to={item.path} key={index}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div>

            </nav>
        </header>
    )
}

export default Navbar;
