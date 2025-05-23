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
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="connect-btn"
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })}
      >
        Connect With Me
      </button>

    </nav>
  );
}

export default Navbar;
