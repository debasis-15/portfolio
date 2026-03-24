import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiX } from 'react-icons/si';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="social-links">
        <a
          href="https://github.com"
          className="social-icon github-icon"
          aria-label="GitHub"
          target="_blank" rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          className="social-icon linkedin-icon"
          aria-label="LinkedIn"
          target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://leetcode.com/u/debasis6935/"
          className="social-icon leetcode-icon"
          aria-label="LeetCode"
          target="_blank" rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://instagram.com"
          className="social-icon instagram-icon"
          aria-label="Instagram"
          target="_blank" rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          className="social-icon x-icon"
          aria-label="X (Twitter)"
          target="_blank" rel="noopener noreferrer"
        >
          <SiX />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
