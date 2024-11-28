// NavMenu.js
import React from "react";
import './NavMenu.css';  // Import the CSS file (make sure the file exists)

const NavMenu = () => {
  return (
    <div className="header_container">
        <h1>Manjunath L</h1>
        <nav className="nav_items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Portfolio</a>
          <a href="#">Resume</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
    </div>
  );
};

export default NavMenu;  
