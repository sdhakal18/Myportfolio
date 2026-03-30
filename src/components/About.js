// src/components/About.js
import React from 'react';
import '../styles/About.css';

// This is the About component, it will render the about section
const About = () => {
  const skills = [
    'Javascript', 'React JS & CSS', 'Github & Gitlab', 
    'Software Testing & QA', 'Usability, UX, & Analytics', 
    'Agile', 'UI/UX Design', 'MS Office & Excel'
  ];

  const languages = ['English', 'Nepali', 'Finnish'];

  const experience = [
    {
      title: 'Vice leader of the project, Front end design and developer',
      company: 'Spat and UTU',
      location: 'Turku',
      period: 'Oct 2022 - Apr 2023',
      description: 'Using react js, Javascript, and bootstrap CSS'
    },
    {
      title: 'Web developer',
      company: 'RGRM Engineering and Services',
      location: 'Helsinki',
      period: 'Jul 2021 - Nov 2021',
      description: ''
    },
    {
      title: 'Fullstack Developer',
      company: 'Turku Nepal Association',
      location: 'Turku, Finland',
      period: 'May 2020 - Oct 2020',
      description: 'Using react js, Javascript, and bootstrap CSS, HTML'
    },
    {
      title: 'Developer',
      company: 'School Project',
      location: 'TUAS',
      period: 'Aug 2020 - Dec 2020',
      description: 'Developing an application using Python and Flask'
    }
  ];

  const education = [
    {
      degree: 'Erasmus Exchange Studies',
      institution: 'Riga Technical University, Riga, RA, Latvia',
      year: '2023',
      details: 'Software Metrology and Planning Models, Enterprise Information Technology Architecture, Applications, and Integration, Evolution of Object-Oriented Software, Development Methods of Applied Intelligent Software Systems'
    },
    {
      degree: "Master's Degree Programme in ICT: Software Engineering",
      institution: 'University of Turku, Turku, Finland',
      year: '2022',
      details: 'Advanced Course on Software Engineering, Software Design and Architecture, Software Testing and Quality Assurance, Usability, User Experience, and Analytics, Capstone'
    },
    {
      degree: 'Bachelor of Engineering, ICT',
      institution: 'Turku University Of Applied Sciences, Turku, Finland',
      year: '2021',
      details: 'Bachelor thesis: Multibiometric systems, their application, and security'
    }
  ];

  return (
    <section id="about" className="about section-container">
      <h2 className="section-title">
        About <span className="text-gradient">Me</span>
      </h2>
      <div className="about-content">
        <div className="about-main-column">
          <div className="about-bio">
            <h3>My Journey</h3>
            <p>
              I am a software engineer focused on building robust, scalable applications. With a strong foundation in modern web technologies, I am driven by the thrill of what technology can achieve next, continuously adapting and learning to deliver high-quality digital solutions while maintaining strong engineering principles.
            </p>
            <div className="personal-details">
              <p><strong>Nationality:</strong> Nepalese</p>
              <p><strong>Visa Status:</strong> P-Permit</p>
              <p><strong>Driving License:</strong> Personal vehicle</p>
            </div>
          </div>
          
          <div className="about-experience mt-4">
            <h3>Work Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p className="timeline-meta">{exp.company} | {exp.location}</p>
                    <span className="timeline-date">{exp.period}</span>
                    {exp.description && <p className="timeline-desc">{exp.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-education mt-4">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="timeline-meta">{edu.institution}</p>
                    <span className="timeline-date">{edu.year}</span>
                    <p className="timeline-desc">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-side-column">
          <div className="about-skills mb-4">
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="about-skills">
            <h3>Languages</h3>
            <div className="skills-grid">
              {languages.map((lang, index) => (
                <span key={index} className="skill-pill lang-pill">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
