import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  // State to track which FAQ is currently open
  const [openFaq, setOpenFaq] = useState(null);

  // Your FAQ Database
  const faqs = [
    {
      id: 1,
      question: "How can I join FRAME-X?",
      answer: "We hold recruitment drives at the beginning of each academic year. Keep an eye on our social media handles for the exact dates and audition details!"
    },
    {
      id: 2,
      question: "Do I need prior filmmaking experience to join?",
      answer: "Not at all! Whether you are a seasoned editor, a scriptwriter, or just someone who loves cinema and wants to learn, enthusiasm and passion are all you need."
    },
    {
      id: 3,
      question: "What kind of projects does the society work on?",
      answer: "We work on short films, documentaries, music videos, and cinematic aftermovies for college fests. We also host 48-hour film challenges and scriptwriting workshops."
    },
    {
      id: 4,
      question: "Can I pitch my own script or concept?",
      answer: "Absolutely. We encourage all members to pitch their ideas during our creative meetings. If the team loves it, we bring it to life!"
    }
  ];

  // Function to toggle the accordion
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

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
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            <input type="hidden" name="access_key" value="573730ed-3a85-4597-8c90-cd6212386599" />

            <div className="input-group">
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Your Name</label>
            </div>
            
            <div className="input-group">
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Your Email</label>
            </div>
            
            <div className="input-group">
              <input type="text" id="subject" name="subject" required placeholder=" " />
              <label htmlFor="subject">Subject</label>
            </div>
            
            <div className="input-group">
              <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="submit-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      {/* --- NEW FAQ SECTION --- */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openFaq === faq.id ? "open" : ""}`}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="faq-question">
                {faq.question}
                {/* FontAwesome Chevron Icon */}
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}