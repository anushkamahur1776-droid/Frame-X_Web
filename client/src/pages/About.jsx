import React from "react";
import { motion } from "framer-motion";
import "./About.css"; 

export default function About() {
  const watermarkText = "ABOUT FRAME-X ".repeat(60);

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

      {/*  NEW ACHIEVEMENTS SECTION  */}
      <section className="achievements-wrapper">
        <div className="achievements-container">
          
          {/* ANIMATED YELLOW BOX */}
          <motion.div 
            className="sticky-yellow-box"
            initial={{ opacity: 0, x: -50 }} // Slides in from the left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>HERE IS WHAT WE HAVE ACHIEVED SO FAR</h2>
          </motion.div>

          {/* ANIMATED GREEN STAT BOXES */}
          <div className="stats-grid">
            
            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 50 }} // Slides up from the bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>15 YEARS</h3>
              <p>That we've been shaping culture for</p>
            </motion.div>

            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} // Notice the delay!
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>200+</h3>
              <p>Creative Enthusiasts who make our community</p>
            </motion.div>

            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>10k+</h3>
              <p>People we reach every month on social media</p>
            </motion.div>

            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>6+</h3>
              <p>Collaborative Projects so far</p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}