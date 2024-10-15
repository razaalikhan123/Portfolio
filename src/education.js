// src/components/Education.js
import React, { useEffect, useRef, useState } from 'react';
import './education.css'; // Import CSS file for styling
import eduLogo from './edu.png'; // Replace with your logo path

const Education = () => {
  const [visibleRows, setVisibleRows] = useState(Array(3).fill(false)); // Track visibility for each row
  const rowRefs = useRef([]); // Create a ref to hold education row elements

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index; // Get index from data attribute
          setVisibleRows(prev => {
            const newVisibleRows = [...prev];
            newVisibleRows[index] = true; // Set this row to visible
            return newVisibleRows;
          });
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      });
    });

    // Attach observer to each education row element
    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    <section id="education">
      <div className="education-container">
        <div className='heai'>EDUCATION</div>
        
        {/* High School Row */}
        <div
          className={`education-row ${visibleRows[0] ? 'visible' : ''}`}
          data-index={0} // Store index for reference
          ref={el => rowRefs.current[0] = el} // Store reference to the element
        >
          <div className="logo-container">
            <img src={eduLogo} alt="School Logo" className="logo" />
          </div>
          <div className="vertical-line"></div>
          <div className="info-container">
            <h2>High School</h2>
            <div className="date">2007 - 2018</div>
            <ul>
              <li><strong>High School:</strong> Karachi Public School</li>
            </ul>
          </div>
        </div>

        {/* College Row */}
        <div
          className={`education-row ${visibleRows[1] ? 'visible' : ''}`}
          data-index={1}
          ref={el => rowRefs.current[1] = el}
        >
          <div className="logo-container">
            <img src={eduLogo} alt="College Logo" className="logo" />
          </div>
          <div className="vertical-line"></div>
          <div className="info-container">
            <h2>College</h2>
            <div className="date">2019 - 2021</div>
            <ul>
              <li><strong>Institution:</strong> Aisha Bawany College</li>
            </ul>
          </div>
        </div>

        {/* University Row */}
        <div
          className={`education-row ${visibleRows[2] ? 'visible' : ''}`}
          data-index={2}
          ref={el => rowRefs.current[2] = el}
        >
          <div className="logo-container">
            <img src={eduLogo} alt="University Logo" className="logo" />
          </div>
          <div className="vertical-line"></div>
          <div className="info-container">
            <h2>University</h2>
            <div className="date">2022 - 2026</div>
            <ul>
              <li><strong>Degree:</strong> Bachelor of Information Technology</li>
              <li><strong>Institution:</strong> Bahria University</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
