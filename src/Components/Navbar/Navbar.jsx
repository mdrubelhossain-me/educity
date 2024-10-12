import React from "react";
import "../Navbar/Navbar.css";
import "../Navbar/NavbarResponsive.css";

const Navbar = () => {
  return (
    <div>
      <nav className="container">
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
