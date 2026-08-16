// src/components/ScrollIndicator.js
import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const sections = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections
        .map(({ id }) => {
          const element = document.getElementById(id);
          return element ? { id, offset: element.offsetTop } : null;
        })
        .filter(Boolean);

      if (offsets.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = offsets.reduce((prev, curr) =>
        Math.abs(curr.offset - scrollPosition) < Math.abs(prev.offset - scrollPosition) ? curr : prev
      );

      setActiveSection(currentSection.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="scroll-indicator" aria-label="Page sections">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`indicator ${activeSection === id ? 'active' : ''}`}
          onClick={() => goToSection(id)}
          aria-label={`Go to ${label} section`}
          aria-current={activeSection === id ? 'true' : undefined}
        >
          <span className="indicator-tooltip">{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default ScrollIndicator;
