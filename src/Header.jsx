/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div>
        <a href="https://www.medicine2code.com/">
          <img src="https://img.icons8.com/nolan/80/wordpress.png" />
        </a>
        <a href="https://www.linkedin.com/in/tien-phan-dc/">
          <img src="https://img.icons8.com/clouds/80/000000/linkedin.png" />
        </a>
        <a href="https://github.com/tienphandev">
          <img src="https://img.icons8.com/clouds/80/000000/github.png" />
        </a>
      </div>
      <ul class="nav-menu">
        <li class="dropdown">
          <span>Projects &#9662;</span>
          <ul class="features-menu">
            <li>
              <a href="#">Health Check</a>
            </li>
            <li>
              <a href="#">e.Create</a>
            </li>
            <li>
              <a href="#">Ambulance_Racer</a>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/about" className="nav-links">
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-links">
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
      {/* <ul className="nav-menu">
        <li>
          <NavLink to="/about" className="nav-links">
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-links">
            <span>Contact</span>
          </NavLink>
        </li>
      </ul> */}
    </div>
  );
};

export default Header;
