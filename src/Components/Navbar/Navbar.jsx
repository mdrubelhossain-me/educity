import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import "../Navbar/NavbarResponsive.css";
import { Link } from "react-scroll";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, []);


  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div class="logo flex items-center">
          <i class="fas fa-graduation-cap"></i>
          <span>EduCity</span>
        </div>
        <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={0} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={0} duration={500}>About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
          <li><Link to='testimonial' smooth={true} offset={0} duration={500}>Testimonial</Link></li>
          <li><Link to='contact' smooth={true} offset={0} duration={500} className="btn">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
