import React from "react";
import "./Projects.css";


import Aks from "../assets/Aks.jpg";
import Sankoch from "../assets/Sankoch.jpg";
import Unveiled from "../assets/Unveiled.jpg";
import Verity from "../assets/Verity.jpg";
import Trapped from "../assets/Trapped.jpg";

import CS26 from "../assets/CS26.jpg";
import FI25Th from "../assets/FI25Th.png";

import ZulfeinTh from "../assets/ZulfeinTh.png";
import UITE from "../assets/UITE.jpg";
import Dori from "../assets/Dori.jpg";
import InDino from "../assets/InDino.jpg";
import MakeYouMine from "../assets/MakeYouMine.jpg";

export default function Projects() {
  // --- MOCK DATA (Phase 1 Setup) ---
  // Swap these placeholder URLs with your actual image paths later!
  
  const featuredProject = {
    title: "New release",
    description: "When a tiny but tough new recruit lands a spot on the main crew, they must prove themselves in the ultimate 48-hour filmmaking challenge.",
    image: ZulfeinTh, 
    // rating: "U/A 13+"
  };

  const projectCategories = [
    {
      title: "Inter IIT OSFM",
      projects: [
        { id: 1, title: "8.0", image: Aks, url: "https://youtu.be/79DtICwkSnQ?si=_vG9vTOTA7XAeKhg" },
        { id: 2, title: "7.0", image: Sankoch, url: "https://youtu.be/_KG2q6knxg4?si=YIyLXJK76KBQf-D-" },
        { id: 3, title: "6.0", image: Unveiled, url: "https://youtu.be/TtFs7MyenW0?si=FBNCT0BWGUcbH4ja" },
        { id: 4, title: "5.0", image: Verity, url: "https://youtu.be/_B7k_-gDK-k?si=i7ByRLNG2lJjYwsV" },
        { id: 5, title: "4.0", image: Trapped, url: "https://youtu.be/68VjY9FJGCc?si=yo7gApPF4-JlZ7CZ" },
      ]
    },
    {
      title: "Music Videos",
      projects: [
        { id: 6, title: "2026", image: ZulfeinTh },
        { id: 7, title: "2025", image: UITE },
        { id: 8, title: "2024", image: Dori },
        { id: 9, title: "2022", image: InDino },
        { id: 10, title: "2019", image: MakeYouMine },
      ]
    },
    {
      title: "Class Songs",
      projects: [
        { id: 11, title: "2026 1", image: CS26 },
        { id: 12, title: "Highlight 2", image: "https://images.unsplash.com/photo-1533174000255-1b4d05459346?q=80&w=600&auto=format&fit=crop" },
        { id: 13, title: "Highlight 3", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop" },
        { id: 14, title: "Highlight 4", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop" },
      ]
    },
    {
      title: "Freshers Introduction Videos",
      projects: [
        { id: 11, title: "Video 2026", image: FI25Th },
        { id: 12, title: "Highlight 2", image: "https://images.unsplash.com/photo-1533174000255-1b4d05459346?q=80&w=600&auto=format&fit=crop" },
        { id: 13, title: "Highlight 3", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop" },
        { id: 14, title: "Highlight 4", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop" },
      ]
    }
  ];

  return (
    <div className="netflix-page">
      
      {/* 1. HERO SECTION */}
      <div 
        className="nf-hero" 
        style={{ backgroundImage: `url(${featuredProject.image})` }}
      >
        {/* Gradients to make text pop against any image */}
        <div className="nf-hero-vignette-left"></div>
        <div className="nf-hero-vignette-bottom"></div>

        <div className="nf-hero-content">
          <h1 className="nf-hero-title">{featuredProject.title}</h1>
          <p className="nf-hero-desc">{featuredProject.description}</p>
          
          <div className="nf-hero-buttons">
            <button className="nf-btn nf-play">
              <span className="icon">▶</span> Play
            </button>
            <button className="nf-btn nf-more">
              <span className="icon">ⓘ</span> More Info
            </button>
          </div>
        </div>

        <div className="nf-age-rating">
          {featuredProject.rating}
        </div>
      </div>

      {/* 2. ROWS SECTION */}
      <div className="nf-rows-container">
        {projectCategories.map((category, index) => (
          <div className="nf-row" key={index}>
            <h2 className="nf-row-title">{category.title}</h2>
            
            <div className="nf-row-posters">
              {category.projects.map((project) => (
                <a 
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="nf-poster-link"
                >
                  <img
                  className="nf-poster"
                  src={project.image} 
                  alt={project.title} 
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}