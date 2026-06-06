import React, { useState } from "react";
import "./Team.css";

import Anushka from "../assets/Anushka.jpeg";
import Harsh from "../assets/Harsh.jpg";
import Buddhi from "../assets/Buddhi.jpg";
import Kunjesh from "../assets/Kunjesh.jpg";
import Dhruv from "../assets/Dhruv.jpg";

export default function Team() {
  // --- MOCK DATABASE ---
  // The keys (e.g., "2025-2026") automatically become your sidebar buttons!
  // I added 'linkedin' and 'instagram' fields to each member for your new 3D buttons.
  const teamArchive = {
    "2025-2026": [
      { id: 1, name: "Anushka Mahur", role: "Secretary", image: Anushka, linkedin: "www.linkedin.com/in/anushka-mahur-a5a69131b", instagram: "https://www.instagram.com/_anushkamahur_" },
      { id: 2, name: "Harshwardhan Singh", role: "Joint Secretary", image: Harsh, linkedin: "https://linkedin.com", instagram: "https://www.instagram.com/harshwardhan__7237" },
      { id: 3, name: "Buddhi Prakash Mali", role: "Joint Secretary", image: Buddhi, linkedin: "https://www.linkedin.com/in/buddhiprakash", instagram: "https://www.instagram.com/_vipul__saini" },
      { id: 4, name: "Sujay Manti", role: "Joint Secretary", image: "", linkedin: "", instagram: "" }
    ],
    "2024-2025": [
      { id: 5, name: "Kunjesh Disawal", role: "Secretary", image: Kunjesh, linkedin: "https://www.linkedin.com/in/kunjeshdisawal", instagram: "https://www.instagram.com/kunjeshdisawal" },
      { id: 6, name: "Maulik Dave", role: "Joint Secretary", image: "https://image.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80", linkedin: "https://www.linkedin.com/in/maulik-dave-82a058280/", instagram: "https://www.instagram.com/maulik_d2005?igsh=MWdmdmlyZGJtMzFmMA==" },
      { id: 7, name: "Abhijeet Kumar", role: "Joint Secretary", image: "https://images.usplash.com/photo-1492562080023-ab3db95bfbce?w=500&q=80", linkedin: "https://www.linkedin.com/in/abhijeet-kumar-keshri-967080295/", instagram: "https://www.instagram.com/abhijeet_kumar_keshri?igsh=MXB5dTNta3ZlZDI4aA==" },
      { id: 8, name: "Dhruv Tiwari ", role: "Member", image: Dhruv, linkedin: "https://in.linkedin.com/in/dhruv-kumar-tiwari-9a5405280", instagram: "https://www.instagram.com/_dhruv_985?igsh=MXE3NXNpNjJjZXNjMg==" }
    ],
    "2023-2024": [
      { id: 9, name: "Sidharth Bajaj", role: "Secretary", image: "", linkedin: "", instagram: "" }
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