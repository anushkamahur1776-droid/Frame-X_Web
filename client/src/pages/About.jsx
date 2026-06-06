import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css"; 

import Stock from "../assets/Stock.webp";
import logoImg from "../assets/logo.png";
import Intro from "../assets/Intro.png";

export default function About() {
  const watermarkText = "ABOUT FRAME-X ".repeat(60);

  // --- Scroll Tracking Setup ---
  // We attach containerRef to the section so Framer Motion knows when you scroll past it
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  // --- Yellow Box Transformations ---
  // Animates from a full screen rectangle to your specific 45% width and 80vh height
  const yWidth = useTransform(scrollYProgress, [0, 0.25], ["92%", "45%"]);

  // --- Green Boxes Transformations ---
  // Slides them in from way off screen on the right (150vw) to their final resting spot (0vw)
  const g1X = useTransform(scrollYProgress, [0.2, 0.4], ["150vw", "0vw"]);
  const g2X = useTransform(scrollYProgress, [0.4, 0.6], ["150vw", "0vw"]);
  const g3X = useTransform(scrollYProgress, [0.6, 0.8], ["150vw", "0vw"]);
  const g4X = useTransform(scrollYProgress, [0.8, 1.0], ["150vw", "0vw"]);

  return (
    <div className="about-page">
      
      {/* First red box */}
      <motion.section 
        className="hero-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-box-watermark">
          {watermarkText}
        </div>

        <div className="hero-box-content">
          <h1 className="hero-box-title">WHO WE ARE</h1>
          <p className="hero-box-description">
            Frame-X is a cultural society that celebrates creativity under filmmaking. 
            From storytelling and design to music, film, and beyond — we exist to build 
            a thriving ecosystem for creators and communities.
          </p>
        </div>
      </motion.section>

      {/* NEW ACHIEVEMENTS SECTION  */}
      {/* The containerRef maps to our 400vh tall track */}
      <section ref={containerRef} className="scroll-sequence-container">
        
        {/* The sticky viewport locks the camera in place */}
        <div className="sticky-viewport">
          
          {/* ANIMATED YELLOW BOX */}
          <motion.div 
            className="dynamic-yellow-box"
            style={{ 
              width: yWidth, 
            }}
          >
            <h2>HERE IS WHAT WE HAVE ACHIEVED SO FAR</h2>
          </motion.div>

          {/* ANIMATED GREEN STAT Boxes */}
          <div className="stats-grid">
            
            <motion.div className="stat-box" style={{ x: g1X }}>
              <h3>15 YEARS</h3>
              <p>That we've been shaping culture for</p>
            </motion.div>

            <motion.div className="stat-box" style={{ x: g2X }}>
              <h3>200+</h3>
              <p>Creative Enthusiasts who make our community</p>
            </motion.div>

            <motion.div className="stat-box" style={{ x: g3X }}>
              <h3>10k+</h3>
              <p>People we reach every month on social media</p>
            </motion.div>

            <motion.div className="stat-box" style={{ x: g4X }}>
              <h3>6+</h3>
              <p>Collaborative Projects so far</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- NEW NESTED CARDS SECTION --- */}
      <section className="nested-cards-section">
        
        {/* Card 1: Our Evolution (Purple/Pink) */}
        <motion.div 
          className="nested-card purple-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Image */}
          <div className="inner-box pink-box image-box">
            <img 
            src={Stock} 
            alt="Cinema through time" 
            />
          </div>
          
          {/* Right Side: Text */}
          <div className="inner-box pink-box text-box">
            <h2>OUR EVOLUTION</h2>
            <p>
              We started as a small group of enthusiasts and grew into FRAME-X to match today's limitless creativity. We now go beyond films into scriptwriting, digital arts, storytelling, photography, and all things cinematic culture.
              <br/><br/>
              Each year, we engage our growing community and partner with peers to create culture-first content. In a noisy market, we stand out by building powerful projects, blending genres, and launching short films that truly connect with people.
              <br/><br/>
              Fueled by creators and clear purpose, we're here to shape what matters next.
            </p>
          </div>
        </motion.div>

        {/* Card 2: What We Do (Orange/Yellow) */}
        <motion.div 
          className="nested-card orange-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Text */}
          <div className="inner-box yellow-box text-box">
            <h2>WHAT WE DO</h2>
            <h3>FRAME-X CHALLENGES AND FESTIVALS</h3>
            <p>
              We host an array of competitions, workshops, and flagship events that push creators to their limits. From freshers' filmmaking challenges to masterclasses in post-production editing, we provide the platform for you to showcase your talent.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="inner-box yellow-box image-box">
            <img 
            src={Intro} 
            alt=" Intro" 
            />
          </div>
        </motion.div>

      </section>

      {/* --- NEW FOOTER SECTION --- */}
      <footer className="site-footer">
        <div className="footer-content">
          
          {/* Left: Text Info & Socials */}
          <div className="footer-left">
            <h2>FRAME-X</h2>
            <p>Shaping Cinema One Frame at a Time &nbsp;|&nbsp; Copyright 2026</p>
            <p className="creator-credit">Website Developed by Anushka Mahur (Secretary, 2025-26)</p>
          
            {/* Social Links exactly under the text */}
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/frame-x-iit-jodhpur/" target="_blank" rel="noreferrer" className="footer-social-link">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/framex_iitj" target="_blank" rel="noreferrer" className="footer-social-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@framex_iitj" target="_blank" rel="noreferrer" className="footer-social-link">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/frameX.iitj" target="_blank" rel="noreferrer" className="footer-social-link">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="footer-right">
            <div className="footer-logo-placeholder">
              <span><img src={logoImg} alt="FRAME-X Logo" className="footer-logo" /></span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}