import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, github, demo, image } = project;

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
