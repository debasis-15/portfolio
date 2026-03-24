import React from 'react';
import './About.css';
import profileImg from '../assets/IMG-20240723-WA0017.jpg';
import indiaMapImg from '../assets/Gemini_Generated_Image_mm3wrmmm3wrmmm3w.png';
import cricketImg from '../assets/Screenshot 2026-03-24 121110.png';
import travelImg from '../assets/Screenshot 2026-03-24 121154.png';
import musicImg from '../assets/Screenshot 2026-03-24 121452.png';

const About = () => {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-bento-grid">

        {/* Name Box */}
        <div className="bento-box bento-name">
          <h2>DEBASIS<br />SAHOO</h2>
          <span className="bento-subtitle">SOFTWARE DEVELOPER</span>
        </div>

        {/* Info Box */}
        <div className="bento-box bento-info">
          <div className="info-header">HOVER TO READ MORE</div>
          <div className="info-cards">
            <div className="info-card">
              <h4>MATRICULATION</h4>
              <p>Completed 10th grade from Saraswati Shishu Vidya Mandir with <b>76.4%</b>.</p>
            </div>
            <div className="info-card">
              <h4>INTERMEDIATE</h4>
              <p>Completed 12th grade from Gangadhar Meher Higher Secondary School with <b>76.5%</b>.</p>
            </div>
            <div className="info-card">
              <h4>ENGINEERING</h4>
              <p>Pursuing B.Tech in Computer Science and Engineering from Lovely Professional University with  <b>8.38 CGPA</b>.</p>
            </div>
          </div>
        </div>

        {/* Mindset Box */}
        <div className="bento-box bento-mindset">
          <h3 style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
            color: "#d028eeff",
            marginBottom: "10px"
          }}>Mindset</h3>
          <p><strong>Building more than software.</strong> My passions provide the <strong>discipline and focus</strong> I need to grow.</p>
          <div className="mindset-img-wrapper">
            <div className="hobby-carousel">
              <div className="hobby-card hc-1">
                <img src={cricketImg} alt="Cricket" />
                <span className="hobby-label">🏏 Cricket</span>
              </div>
              <div className="hobby-card hc-2">
                <img src={travelImg} alt="Travelling" />
                <span className="hobby-label">✈️ Travelling</span>
              </div>
              <div className="hobby-card hc-3">
                <img src={musicImg} alt="Music" />
                <span className="hobby-label">🎵 Music</span>
              </div>
            </div>
          </div>
          <p><strong>Mastering body and mind</strong> is my path to <strong>excellence</strong>.</p>
        </div>

        {/* Photo Box */}
        <div className="bento-box bento-photo">
          <img src={profileImg} alt="Debasis Sahoo" className="bento-profile-img" />
        </div>

        {/* Location Box */}
        <div className="bento-box bento-location" style={{ backgroundImage: `url(${indiaMapImg})` }}>
          <div className="location-scan-line" />
          <div className="location-scan-line reverse" />
          <div className="location-overlay">
            <h3>INDIA</h3>
            <span>20.5937° N, 78.9629° E<br />GMT+5:30</span>
          </div>
        </div>

        {/* Craft Box */}
        <div className="bento-box bento-craft">
          <h3 style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
            color: "#d028eeff",
            marginBottom: "10px"
          }}>Craft</h3>
          <p>Developing scalable <strong>web applications and systems.</strong></p>

          <p className="craft-desc">
            Strong foundation in Data Structures and Algorithms, with a focus on building efficient, secure, and user-centric solutions using modern technologies, emphasizing performance and scalability.
          </p>

          <p className="craft-footer">
            Open to contributing to impactful and growth-driven projects.
          </p>

          <div className="collab-badge">
            <span className="dot"></span> Open for internships, freelance & collaboration
          </div>
        </div>
      </div>

      <div className="vertical-text-container">
        <span className="vertical-text">ABOUT ME</span>
      </div>
    </section>
  );
};

export default About;
