// src/components/Education.js
import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import './education.css';
import eduLogo from './edu.png';

const Education = () => {
  const [visibleRows, setVisibleRows] = useState(Array(1).fill(false));
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          setVisibleRows((prev) => {
            const newVisibleRows = [...prev];
            newVisibleRows[index] = true;
            return newVisibleRows;
          });
          observer.unobserve(entry.target);
        }
      });
    });

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education">
      <Reveal as="div" className="heai">
        Education
      </Reveal>
      <div className="education-container">
        <div
          className={`education-row ${visibleRows[0] ? 'visible' : ''}`}
          data-index={0}
          ref={(el) => (rowRefs.current[0] = el)}
        >
          <div className="logo-container">
            <img src={eduLogo} alt="Bahria University logo" className="logo" />
          </div>
          <div className="vertical-line" aria-hidden="true"></div>
          <div className="info-container">
            <h3>Bachelor of Information Technology (BSIT)</h3>
            <div className="date">2022 – 2026</div>
            <ul>
              <li><strong>Institution:</strong> Bahria University, Karachi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
