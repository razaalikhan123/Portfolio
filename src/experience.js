// src/components/Experience.js
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';
import './experience.css';
import faysalcert from './faysalcert.png';
import spacexcert from './spacexcert.png';
import Raqamiintern from './Raqamiintern.jpeg';
import Faysal from './Faysal.jpeg';

const exp = [
  {
    name: 'IT Governance, Risk & Compliance Executive @ Faysal Bank Limited',
    description: 'Coordinate enterprise-wide IT governance initiatives, support SBP technology assessments, perform technology risk assessments, review ITGC and governance processes, and coordinate Internal and External Audit engagements.',
    duration: 'February 2026 - Present',
    image: Faysal,
  },
  {
    name: 'Information Security Intern @ Raqami Islamic Digital Bank Limited',
    description: 'Supported enterprise Information Security Governance in a digital banking environment, assisted with Delinea PAM administration, and supported PCI DSS implementation and vulnerability management.',
    duration: 'July 2025 - August 2025',
    image: Raqamiintern,
  },
  {
    name: 'IT Governance, Risk & Compliance Intern @ Faysal Bank Limited',
    description: 'Assisted in ISO/IEC 27001 implementation and PCI DSS compliance initiatives, supported technology risk assessments, and prepared audit evidence and control mapping for Internal Audit.',
    duration: 'August 2024 - September 2024',
    image: faysalcert,
  },
  {
    name: 'React Developer Intern @ XPSACE Technologies',
    description: 'Developed responsive web applications using React.js and assisted with testing, debugging, and technical documentation.',
    duration: 'May 2024 - July 2024',
    image: spacexcert,
  },

];

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const handleCardKeyDown = (event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(project);
    }
  };

  return (
    <section id="experience">
      <Reveal as="div" className="heai">
        Experience
      </Reveal>
      <div className="project-list">
        {exp.map((project, index) => (
          <Reveal
            as="div"
            key={index}
            direction={index % 2 === 0 ? 'left' : 'right'}
            className={`project-container ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <div className="project-info">
              <h3>{project.name}</h3>
              <h4>{project.duration}</h4>
            </div>

            <div
              className="project-card"
              onClick={() => openModal(project)}
              onKeyDown={(event) => handleCardKeyDown(event, project)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.name}`}
            >
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-details">
                <p>{project.description}</p>
              </div>
              <span className="project-card-shine" aria-hidden="true" />
            </div>
          </Reveal>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <ProjectModal project={selectedProject} onClose={closeModal} />
        </div>
      )}
    </section>
  );
};

export default Experience;
