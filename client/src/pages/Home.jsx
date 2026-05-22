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
          await videoRef.current.play();
        }
        catch(err){
          console.log(err);
        }

      }
      else{

        setStartVideo(false);

        videoRef.current.pause();

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
            src="/logo.png"
            alt="Frame-X Logo"
            className="logo-image"
          />

          <h1>FRAME-X</h1>

          <p>
            The Filmmaking and Video Editing Society
          </p>

        </div>

        <div className="scroll-indicator">
          SCROLL
        </div>

      </section>

      {/* VIDEO SECTION */}

      <section className={`video-section ${startVideo ? "show-video" : ""}`}>

        <video
          ref={videoRef}
          className="bg-video"
          loop
          playsInline
          preload="auto"
          muted
        >
          <source src="/reel.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

      </section>

      {/* HOME PAGE */}
      <section className="home">

  {/* NAVBAR */}

  <nav className="navbar">

    <div className="nav-logo">
      FRAME<span>-X</span>
    </div>

    <div className="nav-links">
      <a href="/About">About</a>
      <a href="/gallery">Gallery</a>
      <a href="/projects">Projects</a>
      <a href="/team">Team</a>
      <a href="/join">Join</a>
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
      Our approach combines expertise & passion with a 
      deep understanding of you and your audience to make 
      videos that engage, inspire people to act.
    </p>

    <button className="hero-btn">
      WATCH INTRO
    </button>

  </div>

</section>
    </div>
  );
}

