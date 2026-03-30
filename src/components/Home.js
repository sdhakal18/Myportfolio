// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import profileImg from '../images/profile-img.jpg';

// This is the Home component, it will render the hero section
const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="home section-container">
      <div className="home-content">
        <h1 className="hero-title">
          Hi, I'm <br />
          <span className="text-gradient">Sagar Dhakal</span>
        </h1>
        <p className="hero-subtitle">
          SOFTWARE ENGINEER, DEVELOPER <br />
          Crafting digital experiences with modern web technologies. I build amazing, responsive websites and applications.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/projects')}>View My Work</button>
          <a href="/Sagar_Dhakal_CV.pdf" download="Sagar_Dhakal_CV.pdf" className="btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>Download CV</a>
          <button className="btn-secondary" onClick={() => navigate('/contact')}>Let's Connect</button>
        </div>
      </div>
      <div className="home-visual">
        <div className="glow-orb">
          <img src={profileImg} alt="Sagar Dhakal Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
