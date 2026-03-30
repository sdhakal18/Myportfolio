// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Sagar Dhakal</h3>
          <p>Software Engineer & Developer</p>
          <p className="footer-tagline">Crafting digital experiences with modern web technologies.</p>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><a href="mailto:shagar.dhakal77@gmail.com">shagar.dhakal77@gmail.com</a></p>
          <p><a href="tel:0452567972">0452567972</a></p>
          <p>Tampere, Finland (33840)</p>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <div className="social-links-wrapper">
             <a href="https://github.com/sdhakal18" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
               <span>GitHub</span>
             </a>
             <a href="https://linkedin.com/in/sagar-dhakal-60727b168" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               <span>LinkedIn</span>
             </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sagar Dhakal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
