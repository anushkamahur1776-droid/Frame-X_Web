import React from "react";
import "./Gallery.css";

export default function Gallery() {
  // --- MOCK DATA ---
  // Replace these with your actual FRAME-X behind-the-scenes photos later!
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80", alt: "Behind the scenes 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=500&h=750&fit=crop", alt: "Camera rig" },
    { id: 3, src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&q=80", alt: "Editing bay" },
    { id: 4, src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=800&fit=crop", alt: "Concert shoot" },
    { id: 5, src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80", alt: "Film reel" },
    { id: 6, src: "https://images.unsplash.com/photo-1516280440502-62b186b8cb71?w=500&h=600&fit=crop", alt: "Lighting setup" },
    { id: 7, src: "https://images.unsplash.com/photo-1574267432553-4b4628081524?w=500&q=80", alt: "Director pointing" },
    { id: 8, src: "https://images.unsplash.com/photo-1493225457124-a1a2a5ea3761?w=500&h=700&fit=crop", alt: "Lens close up" },
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