/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div>
        <a href='https://www.medicine2code.com/'><img src="https://img.icons8.com/nolan/80/wordpress.png"/></a>
        <a href=''><img src="https://img.icons8.com/clouds/80/000000/linkedin.png" /></a>
        <a href='https://github.com/tienphandev'><img src="https://img.icons8.com/clouds/80/000000/github.png" /></a>
      </div>
      <div className="nav-list">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-links">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-links">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
      <h3><span>Full Stack</span> <span>Software Developer</span></h3>
      </div>
    </div>
  );
};

export default Header;
