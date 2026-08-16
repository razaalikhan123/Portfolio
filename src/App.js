// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import ScrollIndicator from './ScrollIndicator';
import BackgroundFX from './BackgroundFX';
import SideRails from './SideRails';

import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import Education from './education';
import Experience from './experience';

function App() {
  return (
    <div className="App">
      <BackgroundFX />
      <Router>
        <NavigationBar />
        <Routes>
          <Route className="App" path="/" element={<HomePage />} />
          <Route className="App" path="/projects" element={<ProjectsSection />} />
          <Route path="/experience" element={<Experience />} />

          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
      <ScrollIndicator />
      <SideRails />
    </div>
  );
}

export default App;
