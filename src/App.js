// src/App.js

import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavigationBar from './Navbar';
import HomePage from './HomePage';
import Experience from './experience';
import ProjectsSection from './ProjectsSection';
import Education from './education';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

import ScrollIndicator from './ScrollIndicator';
import BackgroundFX from './BackgroundFX';
import SideRails from './SideRails';

function App() {
  return (
    <div className="App">

      {/* Background effects */}
      <BackgroundFX />

      <Router>

        {/* Navigation */}
        <NavigationBar />

        {/* =========================
            PORTFOLIO SECTIONS
            ========================= */}

        {/* 1. HOME */}
        <section id="home">
          <HomePage />
        </section>

        {/* 2. EXPERIENCE */}
        <section id="experience">
          <Experience />
        </section>

        {/* 3. PROJECTS */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* 4. EDUCATION */}
        <section id="education">
          <Education />
        </section>

        {/* 5. SKILLS */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* 6. CONTACT */}
        <section id="contact">
          <ContactSection />
        </section>

      </Router>

      {/* Side UI */}
      <ScrollIndicator />
      <SideRails />

    </div>
  );
}

export default App;