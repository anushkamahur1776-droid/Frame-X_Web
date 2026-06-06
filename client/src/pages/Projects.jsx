import React from "react";
import "./Projects.css";


import Aks from "../assets/Aks.jpg";
import Sankoch from "../assets/Sankoch.jpg";
import Unveiled from "../assets/Unveiled.jpg";
import Verity from "../assets/Verity.jpg";
import Trapped from "../assets/Trapped.jpg";

import CS25 from "../assets/CS25.jpg";
import CS24 from "../assets/CS24.jpg";
import CS23 from "../assets/CS23.jpg";
import CS22 from "../assets/CS22.jpg";

import FI25Th from "../assets/FI25Th.png";
import FI24Th from "../assets/FI24Th.jpg";
import FI23Th from "../assets/FI23Th.jpg";
import FI22Th from "../assets/FI22Th.jpg";
import FI21Th from "../assets/FI21Th.jpg";

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
    description: "As we explore the thin line between dreams and reality, where a fleeting glimpse of someone special turns into a vivid, romantic escape. Did it happen, or was it just a dream? Watch until the end to find out.",
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
        { id: 6, title: "2026", image: ZulfeinTh, url:"https://youtu.be/amZUvxYLh_Y?si=gPHzaiYKySUPSC43" },
        { id: 7, title: "2025", image: UITE, url:"https://youtu.be/KO5vkcHuggI?si=79om0xIxWmiwqLnV" },
        { id: 8, title: "2024", image: Dori, url:"https://youtu.be/MbMzC7zUaXI?si=FniSEF2VD1K5hLlu" },
        { id: 9, title: "2022", image: InDino, url:"https://youtu.be/9pCkt4odKwo?si=YtP0e6z0d8WqK9UF" },
        { id: 10, title: "2019", image: MakeYouMine, url:"https://youtu.be/Kguvr7Ypvsk?si=QqpYYV6qPLRiBdEK" },
      ]
    },
    {
      title: "Freshers Introduction Videos",
      projects: [
        { id: 11, title: "2025", image: FI25Th, url:"https://youtu.be/d_SRRx8cW40?si=dq48x07RpvxtLl_f" },
        { id: 12, title: "2024", image: FI24Th, url:"https://youtu.be/M9x9MnvSRkc?si=kO5hFtX_LWsmg-PX" },
        { id: 13, title: "2023", image: FI23Th, url:"https://youtu.be/Ktozs0TPjME?si=Lj1uAU3S8P_LG72U" },
        { id: 14, title: "2022", image: FI22Th, url:"https://youtu.be/939UdjhgOSI?si=PmatbknNQyluMiuF" },
        { id: 13, title: "2021", image: FI21Th, url:"https://youtu.be/a3kmCkvJiZI?si=InlgH2jCNYpSImOp" },
      ]
    },
    {
      title: "Class Songs",
      projects: [
        { id: 11, title: "2025", image: CS25, url:"https://youtu.be/HaPrFKxuQ0U?si=CwiCCbG22apCVZmN" },
        { id: 12, title: "2024", image: CS24, url:"https://youtu.be/5X6G7yldIdU?si=F_N9puPtVVAa7QHe" },
        { id: 13, title: "2023", image: CS23, url:"https://youtu.be/QK1i1vPLR8Y?si=b46BQTxEMB8Xgl-T" },
        { id: 14, title: "2022", image: CS22, url:"https://youtu.be/XB2IRd6sqQU?si=ZOLagH_10UP_Kah8" },
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