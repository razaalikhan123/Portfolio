// src/ScrollIndicator.js

import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      let currentSection = 'home';

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (element) {
          const sectionTop = element.offsetTop;

          if (scrollPosition >= sectionTop) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const goToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = 70;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="scroll-indicator" aria-label="Page sections">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`indicator ${
            activeSection === id ? 'active' : ''
          }`}
          onClick={() => goToSection(id)}
          aria-label={`Go to ${label} section`}
          aria-current={
            activeSection === id ? 'true' : undefined
          }
        >
          <span className="indicator-tooltip">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default ScrollIndicator;