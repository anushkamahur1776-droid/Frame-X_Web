import React from "react";
import { motion } from "framer-motion";
import "./About.css"; 

export default function About() {
  // These are Framer Motion "variants". They let us reuse animation settings.
  const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <div className="about-container">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        className="about-hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 variants={textReveal} className="about-title">
          Beyond the <span className="accent-text">Frame</span>.
        </motion.h1>
        <motion.p variants={textReveal} className="about-subtitle">
          We are FRAME-X, the official filmmaking and video editing club of IIT Jodhpur.
        </motion.p>
      </motion.section>

      {/* 2. SCROLL-REVEAL MISSION SECTION */}
      <section className="about-mission">
        <motion.div 
          className="mission-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers when 100px away
          variants={staggerContainer}
        >
          <motion.div variants={textReveal} className="accent-line"></motion.div>
          <motion.h2 variants={textReveal}>Our Vision</motion.h2>
          <motion.p variants={textReveal}>
            We believe in the power of visual storytelling. From scripting and cinematic photography to advanced post-production, we push the boundaries of digital media. No clutter, just pure cinema.
          </motion.p>
        </motion.div>
      </section>

      {/* 3. CINEMATIC MEDIA CONTAINER */}
      <motion.section 
        className="about-media"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="media-placeholder">
          <p>Cinematic Reel Placeholder</p>
        </div>
      </motion.section>

    </div>
  );
}