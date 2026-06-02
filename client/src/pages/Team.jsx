import React, { useState } from "react";
import "./Team.css";

import Anushka from "../assets/Anushka.jpeg";

export default function Team() {
  // --- MOCK DATABASE ---
  // The keys (e.g., "2025-2026") automatically become your sidebar buttons!
  // I added 'linkedin' and 'instagram' fields to each member for your new 3D buttons.
  const teamArchive = {
    "2025-2026": [
      { id: 1, name: "Anushka Mahur", role: "Secretary", image: Anushka, linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
      { id: 2, name: "Harshwardhan Singh", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
      { id: 3, name: "Buddhi Prakash Mali", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
      { id: 4, name: "Sujay Manti", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
    ],
    "2024-2025": [
      { id: 5, name: "Kunjesh Diswal", role: "Secretary", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
      { id: 6, name: "Maulik Dave", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
      { id: 7, name: "Abhijit", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
      { id: 8, name: "Dhanush", role: "Member", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
    ],
    "2023-2024": [
      { id: 9, name: "Rahul Dev", role: "Founder", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80", linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
    ]
  };

  // Extracts all the years into an array ["2025-2026", "2024-2025", "2023-2024"]
  const availableYears = Object.keys(teamArchive);
  
  // React State to keep track of which year is currently selected
  const [activeYear, setActiveYear] = useState(availableYears[0]);

  return (
    <div className="team-page">
      
      {/* --- LEFT SIDEBAR (Year Navigation) --- */}
      <aside className="year-sidebar">
        <h2 className="sidebar-title"> <span>THE CREW</span></h2>
        <div className="year-list">
          {availableYears.map((year) => (
            <button 
              key={year}
              // If this button is the active year, give it the 'active' CSS class
              className={`year-btn ${activeYear === year ? "active" : ""}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </aside>

      {/* --- RIGHT CONTENT (Team Roster) --- */}
      <main className="team-content">
        <div className="team-header">
          <h1>TEAM <span>{activeYear}</span></h1>
          <p>The visionaries behind the lens.</p>
        </div>

        <div className="team-grid">
          {teamArchive[activeYear].map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.image} alt={member.name} className="member-photo" />
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                
                {/* --- NEW 3D SOCIAL LINKS --- */}
                <div className="social-links">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="social-circle linkedin">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noreferrer" className="social-circle instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}