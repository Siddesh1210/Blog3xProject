import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo Image" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          
            <a><Link to="/">Home</Link></a>
        </li>
        <li>
            <a><Link to="/about">About</Link></a>
        </li>
        <li>
            <a><Link>Products</Link></a>
        </li>
        <li>
            <a><Link>Services</Link></a>
        </li>
        <li>
            <a><Link to="/contact">Contact Us</Link></a>
        </li>
        <li>
            <button className="login-button"><Link>Login</Link></button>
        </li>
        <li>
            <button className="join-button"><Link>Join</Link></button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
