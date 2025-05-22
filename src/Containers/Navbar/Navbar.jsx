import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Anike<span className="dot">T</span><span className="dot-pink">.</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>  
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a><span className="nav-underline" /></li>
      </ul>

      <button className="connect-btn">Connect With Me</button>
    </nav>
  );
}

export default Navbar;
