import "../index.css";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [startVideo, setStartVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = async () => {
      if(window.scrollY > 50){
        setStartVideo(true);
        try{
          if (videoRef.current) {
            await videoRef.current.play();
          }
        }
        catch(err){
          console.log(err);
        }
      }
      else{
        setStartVideo(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page">

      {/* INTRO */}
      <section className={`intro ${startVideo ? "fade-out" : ""}`}>
        <div className="intro-glow"></div>
        <div className="intro-content">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Frame-X Logo" 
            className="home-logo" 
          />
          <h1>FRAME-X</h1>
          <p>The Filmmaking and Video Editing Society</p>
          <p>IIT Jodhpur</p>
        </div>
        <div className="scroll-indicator">SCROLL</div>
      </section>

      {/* VIDEO SECTION */}
      <section className={`video-section ${startVideo ? "show-video" : ""}`}>
        <video 
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}reel.mp4`} 
          autoPlay 
          loop 
          muted 
          className="home-reel" 
        />
        <div className="video-overlay"></div>
      </section>

      {/* HOME PAGE */}
      <section className="home">
        
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-logo">
            FRAME-X
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="hero-content">
          <p className="small-heading">
            THE FILMMAKING AND VIDEO EDITING SOCIETY
          </p>
          <div className="red-line"></div>
          <h2>
            STORIES BEYOND FRAMES
          </h2>
          <p className="hero-text">
             Frame-X is the creative home for filmmakers, editors, and visual storytellers at IIT Jodhpur. 
             We foster innovation through workshops, productions, competitions, and collaborative projects, 
             helping students develop their craft while creating meaningful stories that resonate beyond the screen.
          </p>
          <a 
            href="https://youtu.be/AFU3RJGYNTQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-btn"
          >
            Watch Intro
          </a>
        </div>
      </section>
    </div>
  );
}