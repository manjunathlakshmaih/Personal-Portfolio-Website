// NavMenu.js
import React from "react";
import './NavMenu.css';  // Import the CSS file (make sure the file exists)

const NavMenu = () => {
  return (
    <div className="header_container">
        <h1 className="logo-1">M</h1>
        <nav className="nav_items">
          <a href="https://bchiang7.github.io/">Blog</a>
          <a href="https://github.com/bchiang7">Guestbook</a>
          <a href="https://honghong.me/">Dashboard</a>
          <a href="https://www.google.com/search?q=css+color+picker&oq=css+color+&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyCggCEAAYsQMYgAQyDAgDEAAYFBiHAhiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDg4NjlqMWo3qAIIsAIB&sourceid=chrome&ie=UTF-8">Projects</a>
          <a href="https://www.w3schools.com/css/css_font.asp">about</a>
          <a href="https://www.youtube.com/">Uses</a>
        </nav>
    </div>
  );
};

export default NavMenu;  
