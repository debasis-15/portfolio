import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import avatarImg from '../assets/memoji.png';
import resumeImg from '../assets/Screenshot 2026-03-24 134249.png';
import './Hero.css';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const img = new Image();
    img.src = resumeImg;
    img.onload = () => {
      const pdf = new jsPDF({
        orientation: img.width > img.height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [img.width, img.height],
      });
      pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);
      pdf.save('Debasis_Sahoo_Resume.pdf');
    };
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-typography">

          <div className="hi-line-wrapper">
            <span className="hi-text">Hi I am</span>
            <div className="gold-line"></div>
          </div>

          <h1 className="hero-name">Debasis Sahoo</h1>

          <div className="hero-right-content">
            <div className="hero-avatar-container">
              <img src={avatarImg} alt="Debasis Sahoo Avatar" className="hero-avatar" />
            </div>

            <div className="hero-role-wrapper">
              <h2 className="hero-role">
                A SOFTWARE<br />DEVELOPER
              </h2>
              <div className="resume-links">
                <button className="resume-btn" onClick={() => setShowModal(true)}>VIEW RESUME</button>
                <button className="resume-btn download" onClick={handleDownload}>DOWNLOAD RESUME</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fixed Layout Elements */}
      <div className="hero-version">
        v 2.1.5
      </div>

      <div className="hero-scroll-bottom-right">
        Scroll
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div className="resume-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="resume-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <img src={resumeImg} alt="Resume" className="resume-modal-img" />
            <button className="modal-download-btn" onClick={handleDownload}>⬇ Download PDF</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
