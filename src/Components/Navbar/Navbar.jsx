import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import "../Navbar/NavbarResponsive.css";

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
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonial</li>
          <li>
            <button className="btn">Contact Us</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
