import React from 'react';
import './Footer.css'
import './FooterResponsive.css'

const Footer = () => {
    return (
        <div className='container footer'>
            <p>&copy; EduCity | All rights reserved.</p>
            <ul>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    );
};

export default Footer;