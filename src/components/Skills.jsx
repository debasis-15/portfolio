import React from 'react';
import { 
  SiFigma, SiFirebase, SiPython, SiTensorflow, SiSocketdotio, 
  SiPhp, SiCplusplus, SiC, SiReact, SiJavascript, SiHtml5, SiCss,
  SiExpress, SiTypescript, SiNextdotjs, SiMongodb
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { name: 'Figma', percentage: '90%', icon: <SiFigma color="#F24E1E" /> },
    { name: 'Firebase', percentage: '85%', icon: <SiFirebase color="#FFCA28" /> },
    { name: 'Python', percentage: '80%', icon: <SiPython color="#3776AB" /> },
    { name: 'TensorFlowJS', percentage: '70%', icon: <SiTensorflow color="#FF6F00" /> },
    { name: 'WebSockets', percentage: '75%', icon: <SiSocketdotio color="#FFFFFF" /> },
    { name: 'Express.js', percentage: '80%', icon: <SiExpress color="#FFFFFF" /> },
    { name: 'MongoDB', percentage: '80%', icon: <SiMongodb color="#47A248" /> },
    { name: 'PHP', percentage: '65%', icon: <SiPhp color="#777BB4" /> },
    { name: 'C++', percentage: '70%', icon: <SiCplusplus color="#00599C" /> },
    { name: 'C', percentage: '75%', icon: <SiC color="#A8B9CC" /> },
    { name: 'JavaScript', percentage: '95%', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', percentage: '90%', icon: <SiTypescript color="#3178C6" /> },
    { name: 'React', percentage: '90%', icon: <SiReact color="#61DAFB" /> },
    { name: 'Next.js', percentage: '85%', icon: <SiNextdotjs color="#FFFFFF" /> },
    { name: 'HTML5', percentage: '95%', icon: <SiHtml5 color="#E34F26" /> },
    { name: 'CSS3', percentage: '90%', icon: <SiCss color="#1572B6" /> }
  ];

  return (
    <section className="skills-section reveal" id="skills">
      <div className="section-content">
        <h2 className="skills-title">MY SKILLS</h2>
        <div className="skills-slider-container">
          <div className="skills-slider">
            {[...skillsList, ...skillsList].map((skill, index) => (
              <div className="skill-box" key={index}>
                <div className="skill-top-line"></div>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-percentage">{skill.percentage}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
