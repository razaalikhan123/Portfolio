import React, { useState, useEffect } from 'react';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import Education from './education';
import Experience from './experience';
import Reveal from './Reveal';
import './HomePage.css';
import myPicture from './r2.jpg';
import pdf from './Raza-cv.pdf';

const roles = ['IT Governance', 'Technology Risk', 'Information Security', 'Regulatory Compliance'];

const shuffleArray = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const HomePage = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [finalText, setFinalText] = useState(roles[roleIndex]);
  const [shuffledText, setShuffledText] = useState(shuffleArray(finalText.split('')));
  const [index, setIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    if (index < finalText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + finalText[index]);
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      const holdTimer = setTimeout(() => {
        setIsShuffling(true);
      }, 5000);
      return () => clearTimeout(holdTimer);
    }
  }, [index, finalText]);

  useEffect(() => {
    if (isShuffling) {
      const shuffleTimer = setInterval(() => {
        setShuffledText(shuffleArray(finalText.split('')));
      }, 100);

      const stopShufflingTimer = setTimeout(() => {
        clearInterval(shuffleTimer);
        setText('');
        setIndex(0);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFinalText(roles[(roleIndex + 1) % roles.length]);
        setIsShuffling(false);
      }, 3000);

      return () => {
        clearInterval(shuffleTimer);
        clearTimeout(stopShufflingTimer);
      };
    }
  }, [isShuffling, finalText, roleIndex]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Raza-Ali-Khan-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-shell">
      <section id="welcome" className="welcome-section">
        <div className="hero-inner">
          <Reveal as="div" direction="zoom" className="hero-media">
            <span className="pic-ring" />
            <img src={myPicture} alt="Portrait of Raza Ali Khan" className="pic" />
            <span className="pic-badge">Available for work</span>
          </Reveal>
          <div className="hero-content">
            <Reveal as="p" direction="up" delay={0} className="eyebrow">
              Karachi, Pakistan
            </Reveal>
            <Reveal as="h1" direction="up" delay={80}>
              <strong>Welcome to My Portfolio</strong>
            </Reveal>
            <Reveal as="h3" direction="up" delay={160}>
              <strong>Hi, my name is Raza Ali Khan.</strong>
            </Reveal>
            <Reveal as="h4" direction="up" delay={240} aria-live="polite">
              <strong>
                I specialize in{' '}
                <span className="shuffled-text">
                  <strong>{text}</strong>
                  {shuffledText.slice(text.length).join('')}
                  <span className="type-cursor" aria-hidden="true" />
                </span>
              </strong>
            </Reveal>
            <Reveal as="p" direction="up" delay={320} className="par">
              Technology Risk and IT Governance professional with experience supporting enterprise IT governance,
              technology risk management, regulatory compliance, information security, and audit initiatives within
              Pakistan's banking sector. Experienced in coordinating governance activities across Infrastructure,
              Networks, Databases, Applications, Backup, Storage, and Virtualization while ensuring compliance with
              State Bank of Pakistan (SBP) regulations and internal control frameworks. Strong understanding of IT
              General Controls (ITGC), Disaster Recovery, Business Continuity, ISO/IEC 27001, PCI DSS, Identity &amp;
              Access Management (IAM), and Privileged Access Management (PAM).
            </Reveal>
            <Reveal as="div" direction="up" delay={400} className="hero-actions">
              <button className="butt" onClick={downloadResume}>
                <span>Download Resume</span>
              </button>
              <a href="#contact" className="butt butt-ghost">
                Get in Touch
              </a>
            </Reveal>
          </div>
        </div>
      </section>
      <Education />
      <ProjectsSection />
      <Experience />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
