import React from 'react';
import  '../Navbar/Navbar.css'
import '../Navbar/NavbarResponsive.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Program</li>
                    <li>About Us</li>
                    <li>Campus</li>
                    <li>Testimonial</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Navbar;