import React, { useEffect, useState } from 'react';
import dsLogo from '../assets/ds-logo.png';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'My skills' },
  { id: 'project', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = navItems.map((x) => x.id);
    const observedSections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (observedSections.length === 0) return;
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0.01, 0.1, 0.25] }
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar" aria-label="Primary">
      <a href="#home" className="nav-logo-link">
        <img src={dsLogo} alt="DS Logo" className="nav-ds-logo" />
      </a>

      <button
        type="button"
        className="menu-btn"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${activeId === item.id ? 'active' : ''}`}
          >
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
