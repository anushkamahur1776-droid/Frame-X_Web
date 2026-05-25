import React from "react";
import "./Gallery.css";

import bts1 from "../assets/bts1.jpg";
import bts2 from "../assets/bts2.jpg";
import bts3 from "../assets/bts3.jpg";
import bts4 from "../assets/bts4.jpg";
import bts5 from "../assets/bts5.jpg";
import bts6 from "../assets/bts6.jpg";
import bts7 from "../assets/bts7.jpg";
import bts8 from "../assets/bts8.jpg";
import bts9 from "../assets/bts9.jpg";
import bts10 from "../assets/bts10.jpg";
import bts11 from "../assets/bts11.jpg";

export default function Gallery() {
  // --- MOCK DATA ---
  // Replace these with your actual FRAME-X behind-the-scenes photos later!
  const galleryImages = [
    { id: 1, src: bts1, alt: "1" },
    { id: 2, src: bts2, alt: "2" },
    { id: 3, src: bts3, alt: "3" },
    { id: 4, src: bts4, alt: "4" },
    { id: 5, src: bts5, alt: "5" },
    { id: 6, src: bts6, alt: "6" },
    { id: 7, src: bts7, alt: "7" },
    { id: 8, src: bts8, alt: "8" },
    { id: 9, src: bts9, alt: "9" },
    { id: 10, src: bts10, alt: "10" },
    { id: 11, src: bts11, alt: "11" },
  ];

  return (
    <div className="gallery-page">
      
      <div className="gallery-header">
        <h1>BEHIND THE <span>FRAMES</span></h1>
        <p>A glimpse into our sets, shoots, and the madness in between.</p>
      </div>

      {/* The Pinterest Container */}
      <div className="masonry-grid">
        {galleryImages.map((img) => (
          <div className="masonry-item" key={img.id}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

    </div>
  );
}