// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="fixed-navbar">
      <div className="nav-logo">
        <Link to="/">
          FRAME<span>-X</span>
        </Link>
      </div>
      
      <div className="nav-links">
        <Link to="/about">ABOUT</Link>
        <Link to="/team">TEAM</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/join" className="join-btn">JOIN US</Link>
      </div>
    </nav>
  );
}