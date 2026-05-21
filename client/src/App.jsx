import "./index.css";
import { useEffect, useRef, useState } from "react";

export default function App() {

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

      {/* VIDEO */}

      <section className={`video-section ${startVideo ? "show-video" : ""}`}>

        <video
          ref={videoRef}
          className="bg-video"
          loop
          playsInline
        >
          <source src="/reel.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

      </section>

    </div>

  );
}