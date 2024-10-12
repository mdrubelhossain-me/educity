import React from 'react';
import  '../Navbar/Navbar.css'
import '../Navbar/NavbarResponsive.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className='container'>
                <img src={logo} className='logo' alt="logo" />
                <ul>
                    <li>Home</li>
                    <li>Program</li>
                    <li>About Us</li>
                    <li>Campus</li>
                    <li>Testimonial</li>
                    <li><button className='btn'>Contact Us</button></li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Navbar;