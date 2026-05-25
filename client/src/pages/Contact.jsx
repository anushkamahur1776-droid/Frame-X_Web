import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h1 className="contact-title">GET IN <span>TOUCH</span></h1>
          <p className="contact-desc">
            Whether you want to collaborate, join a project, or just talk cinema, drop us a line.
          </p>

          <div className="info-details">
            <div className="info-item">
              <h3>EMAIL</h3>
              <p>frame-x@iitj.ac.in</p>
            </div>
            <div className="info-item">
              <h3>LOCATION</h3>
              <p>E-18 Berm, IIT Jodhpur Campus</p>
            </div>
            <div className="info-item">
              <h3>SOCIALS</h3>
              <p>@framex_iitj</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-wrapper">
          {/* 1. Added the action URL and the POST method */}
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            
            {/* 2. Paste your Access Key here! */}
            <input type="hidden" name="access_key" value="573730ed-3a85-4597-8c90-cd6212386599" />

            <div className="input-group">
              {/* Added name="name" */}
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Your Name</label>
            </div>
            
            <div className="input-group">
              {/* Added name="email" */}
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Your Email</label>
            </div>
            
            <div className="input-group">
              {/* Added name="subject" */}
              <input type="text" id="subject" name="subject" required placeholder=" " />
              <label htmlFor="subject">Subject</label>
            </div>
            
            <div className="input-group">
              {/* Added name="message" */}
              <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="submit-btn">SEND MESSAGE</button>
            
          </form>
        </div>
      </div>
    </div>
  );
}