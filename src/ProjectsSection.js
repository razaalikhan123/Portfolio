// src/components/ProjectsSection.js
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';
import './ProjectsSection.css';
import phantomVisage from './phantomvisage.jpg';
import smartTourism from './smarttourism.jpg';
import flick from './flick.jpg';
import focusFirst from './focus first.jpg';

const projects = [
  {
    name: 'PhantomVisage – AI-Based Criminal Facial Reconstruction System',
    description: 'Final Year Project: an AI-assisted facial reconstruction application built to support forensic investigations using machine learning.',
    duration: 'Final Year Project',
    image: phantomVisage,
  },
  {
    name: 'Smart Tourism System',
    description: 'An ontology-driven tourism platform built using RDF, OWL, and SPARQL to model and query tourism data.',
    duration: 'University Project',
    image: smartTourism,
  },
  {
    name: 'Flick Vision – Cinema Ticketing System',
    description: 'A role-based cinema management system developed using C#, .NET Framework, and Oracle Database.',
    duration: '1 month',
    image: flick,
  },
  {
    name: 'Focus First – ADHD Learning Support Platform',
    description: 'An educational application designed to improve learning accessibility for students with ADHD.',
    duration: '2 months',
    image: focusFirst,
  },
];

const ProjectsSection = () => {
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
    <section id="projects">
      <Reveal as="div" className="heai">
        Projects
      </Reveal>
      <div className="project-list">
        {projects.map((project, index) => (
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

export default ProjectsSection;
