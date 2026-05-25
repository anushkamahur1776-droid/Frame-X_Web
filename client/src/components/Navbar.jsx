import React, { useState } from "react";
import { Link } from "react-router-dom"; /* Assuming you use React Router! */
import "./Navbar.css";

export default function Navbar() {
  // This tracks if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Closes the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed-navbar">
      
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          FRAME-X
        </Link>
      </div>

      {/* The Animated Hamburger Icon */}
      <div 
        className={`hamburger ${isOpen ? "toggle" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {/* The Navigation Links */}
      <div className={`nav-links ${isOpen ? "nav-active" : ""}`}>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/team" onClick={closeMenu}>Team</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" className="join-btn" onClick={closeMenu}>Contact Us</Link>
      </div>

    </nav>
  );
}