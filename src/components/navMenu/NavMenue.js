import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css"; 

const NavMenu = () => {
  return (
    <div className="header_container">
      <h1 className="logo-1">M</h1>
      <nav className="nav_items">
        <ul className="items">
          <li className="list-1">
            <Link to="" className="nav-link" >Blog</Link>
          </li>
          <li className="list-1">
            <Link to="" className="nav-link">Guestbook</Link>
          </li>
          <li className="list-1">
            <Link to="" className="nav-link">Dashboard</Link>
          </li>
          <li className="list-1">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="list-1">
            <Link to="/about" className="nav-link">about</Link>
          </li>
          <li className="list-1">
            <Link to="" className="nav-link">Uses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
