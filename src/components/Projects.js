// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

// This is the Projects component, it will render the projects section
const Projects = () => {
  const projectList = [
    {
      id: 0,
      title: 'Prorenova',
      description: 'A modern, fully responsive business website for a renovation company, built using React and styled for an engaging user experience.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
      tags: ['React JS', 'CSS', 'JavaScript'],
      links: {
        website: 'https://www.prorenova.fi/',
        github: 'https://github.com/sdhakal18/Prorenova'
      }
    },
    {
      id: 1,
      title: 'Spat and UTU Project',
      description: 'Vice leader, front end design and developer. Built components and UI using modern web stacks.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80',
      tags: ['React JS', 'JavaScript', 'Bootstrap']
    },
    {
      id: 2,
      title: 'Turku Nepal Association',
      description: 'Fullstack Developer. Designed and developed robust applications and responsive user interfaces.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80',
      tags: ['React JS', 'JavaScript', 'HTML']
    },
    {
      id: 3,
      title: 'School Project TUAS',
      description: 'Developer. Built machine learning backend systems and API integrations using Python and Flask.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80',
      tags: ['Python', 'Flask']
    }
  ];

  return (
    <section id="projects" className="projects section-container">
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                {project.links ? (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn-primary" onClick={() => window.open(project.links.website, '_blank')}>Website</button>
                    <button className="btn-primary" onClick={() => window.open(project.links.github, '_blank')}>GitHub</button>
                  </div>
                ) : (
                  <button className="btn-primary">View Project</button>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
