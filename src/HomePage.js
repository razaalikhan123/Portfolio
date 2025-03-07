import React, { useState, useEffect } from 'react';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import Education from './education';
import Experience from './experience';
import './HomePage.css'; 
import myPicture from './r2.jpg';
import pdf from './Raza-cv.pdf'

const roles = ['Games app', 'Web Page', 'UI/UX web', 'Applications'];

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
    
      setTimeout(() => {
        setIsShuffling(true);
      }, 5000);
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
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Switch to the next role
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
    link.download = 'Raza-resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <section id="welcome" className="welcome-section">
        <img src={myPicture} alt="My Portrait" className='pic' /> 
        <div>
          <h1 style={{ color: '#FFFFFF' }}><strong> Welcome to My Portfolio</strong></h1>
          <h3 style={{ color: '#FFFFFF' }}><strong>Hi Developers, My name is Raza Ali khan.</strong></h3>
          <h4 style={{ color: '#FFFFFF' }}><strong>I specialize in developing and designing dynamic {` `}
            <span className="shuffled-text">
              <strong>{text}</strong>
              {shuffledText.slice(text.length).join('')}
            </span>
          </strong></h4>
          <div className='par'>
          I am an entry-level IT professional with software development experience and proficiency in HTML, CSS,
JavaScript, PHP, C++, and Java. Skilled in frameworks like React.js and .NET Framework, with expertise in
SQL Server and Oracle databases. Strong problem-solving and communication abilities, with proven
success in collaborative team environments.

            </div>
            <button className='butt' onClick={downloadResume}>
              Download Resume
            </button>
          
        </div>
      </section>
      <Education />
      <ProjectsSection />
      <Experience/>

      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
