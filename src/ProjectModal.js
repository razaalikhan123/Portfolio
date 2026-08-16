// src/components/ProjectModal.js
import React, { useEffect, useRef } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal-dialog modal-dialog-centered"
      role="document"
      onClick={(event) => event.stopPropagation()}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="project-modal-title">{project.name}</h5>
          <button
            type="button"
            className="close"
            aria-label="Close dialog"
            onClick={onClose}
            ref={closeButtonRef}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img src={project.image} alt={project.name} className="img-fluid" />
          {project.duration && <p className="modal-duration">{project.duration}</p>}
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
