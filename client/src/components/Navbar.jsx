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
          FRAME<span>-X</span>
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
        <Link to="/about" onClick={closeMenu}>ABOUT</Link>
        <Link to="/team" onClick={closeMenu}>TEAM</Link>
        <Link to="/projects" onClick={closeMenu}>PROJECTS</Link>
        <Link to="/gallery" onClick={closeMenu}>GALLERY</Link>
        <Link to="/join" className="join-btn" onClick={closeMenu}>JOIN US</Link>
      </div>

    </nav>
  );
}