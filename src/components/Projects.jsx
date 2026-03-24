import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';
import './Projects.css';
import legalEaseImg from '../assets/Screenshot 2026-03-24 112815.png';
import synaptikImg from '../assets/Screenshot 2026-03-24 114051.png';
import findenImg from '../assets/Screenshot 2026-03-24 115132.png';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'LegalEase – Online Legal Consultation & Document Generator',
      subtitle: 'Smart Legal Assistance Platform',
      description: 'A full-stack web application that connects users with professional lawyers and enables secure legal document generation and management. Features a responsive UI, user authentication, and support for multiple legal domains like criminal, family, and corporate law.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Node.js', 'MongoDB', 'React'],
      image: legalEaseImg,
      githubLink: 'https://github.com/debasis-15/OnlineLegalConsultancy',
      liveLink: '#'
    },
    {
      title: 'Synaptik – Real-Time Messaging Platform',
      subtitle: 'Real-Time Chat website',
      description: 'A modern web-based messaging application enabling real-time one-to-one and group communication using WebSockets. It features user profiles with privacy controls, theme customization, and a scalable architecture designed for seamless and interactive user experience.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
      image: synaptikImg,
      githubLink: 'https://github.com/debasis-15/Synaptik',
      liveLink: '#'

    },
    {
      title: ' Finden – Q&A Platform',
      subtitle: ' Interactive Q&A System',
      description: 'A full-stack Q&A web application inspired by Quora, featuring a RESTful API-based architecture for seamless frontend-backend communication. Users can post, browse, and answer questions dynamically without page reloads, ensuring a smooth and responsive experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL'],
      image: findenImg,
      githubLink: 'https://github.com/debasis-15/Finden',
      liveLink: '#'
    }
  ];

  const project = projects[currentIndex];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="projects-section reveal" id="project">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>

        <div className="project-slider-wrapper">
          {/* Left Info Side */}
          <div className="project-info-side">
            <h3 className="project-main-title">{project.title}</h3>
            <h2 className="project-subtitle">{project.subtitle}</h2>
            <div className="project-divider"></div>
            <p className="project-description">{project.description}</p>

            {project.tech && (
              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i} className="tech-tag">{item}</span>
                ))}
              </div>
            )}

            <div className="project-controls">
              <button className="slider-btn" onClick={prevProject}><FaChevronLeft /></button>
              <button className="slider-btn" onClick={nextProject}><FaChevronRight /></button>
            </div>
          </div>

          {/* Right Image Stack Side */}
          <div className="project-image-side">
            <div className="project-top-links">
              <a href={project.githubLink || '#'} className="top-link-btn" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.liveLink || '#'} className="top-link-btn" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt /> Live
              </a>
            </div>

            <div className="image-stack">
              <div className="stack-img img-back-2">
                {project.image && <img src={project.image} alt="" className="project-cover" />}
              </div>
              <div className="stack-img img-back-1">
                {project.image && <img src={project.image} alt="" className="project-cover" />}
              </div>
              <div className="stack-img img-front">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-cover" />
                ) : (
                  <span>{project.title} Preview</span>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
