import React from 'react';
import { FaLaptopCode, FaMedal } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements-section reveal" id="achievements">
      <div className="section-content">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-container">
          <div className="achievement-card">
            <div className="achievement-icon-wrapper">
              <FaLaptopCode className="achievement-icon" />
            </div>
            <div className="achievement-info">
              <h3>Problem Solving</h3>
              <p>Solved <strong>300+ algorithmic and data structure problems</strong>, and earned a <strong>100-day coding streak badge</strong>.</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon-wrapper">
              <FaMedal className="achievement-icon" />
            </div>
            <div className="achievement-info">
              <h3>Hackathon Excellence</h3>
              <p>Secured a <strong>Top 5 position</strong> in an inter-college hackathon, demonstrating rapid development and teamwork.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
