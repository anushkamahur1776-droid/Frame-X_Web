import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css"; 

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

          {/* ANIMATED GREEN STAT BOXES */}
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
    </div>
  );
}