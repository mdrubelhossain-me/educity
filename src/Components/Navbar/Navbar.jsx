import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import "../Navbar/NavbarResponsive.css";
import { Link } from "react-scroll";
import menu_icon from '../../assets/images/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, []);

  const [mobileMenu, setMobilemenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobilemenu(false) : setMobilemenu(true);
  }


  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div class="logo flex items-center">
          <i class="fas fa-graduation-cap"></i>
          <span>EduCity</span>
        </div>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
        </ul>
        <img src={menu_icon} className="menu-icon" alt="menu-icon" onClick={toggleMenu}/>
      </nav>
    </div>
  );
};

export default Navbar;
