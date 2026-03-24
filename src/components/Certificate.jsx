import React from 'react';
import './Certificate.css';
import iotCertImg from '../assets/Screenshot 2026-03-24 103055.png';
import genAiCertImg from '../assets/Screenshot 2026-03-24 104222.png';
import courseraNetImg from '../assets/Screenshot 2026-03-24 104402.png';
import ibmCertImg from '../assets/Screenshot 2026-03-24 104637.png';

const Certificate = () => {
  const certificatesList = [
    {
      title: 'Internet of Things',
      issuer: 'NPTEL Swayam',
      date: 'Sep’ 25',
      link: 'https://drive.google.com/drive/folders/1hXef9CeKhkRpKk1UnL2T3Fpd6QI36A2Z',
      image: iotCertImg
    },
    {
      title: 'Master Generative AI & Generative AI Tools',
      issuer: 'Udemy',
      date: 'Aug’ 25',
      link: 'https://springboard.udemy.com/certificate/UC-3180f8c9-34b3-4cef-b7a2-b6f78c5a6507/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      image: genAiCertImg
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Coursera',
      date: 'Sep’ 24',
      link: 'https://www.coursera.org/account/accomplishments/verify/QWP2ORQWTCPG',
      image: courseraNetImg
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      issuer: 'Coursera',
      date: 'Sep’ 24',
      link: 'https://www.coursera.org/account/accomplishments/verify/6DU8SLHNR73H',
      image: ibmCertImg
    }
  ];

  return (
    <section className="certificate-section reveal" id="certificates">
      <div className="section-content">
        <h2 className="certificate-title">CERTIFICATES</h2>
        <div className="certificate-grid">
          {certificatesList.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="cert-image-container">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="cert-img" />
                ) : (
                  <div className="cert-placeholder-img">CERTIFICATE</div>
                )}
              </div>
              <div className="cert-info">
                <h3 className="cert-name">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <div className="cert-actions">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn view-btn">View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
