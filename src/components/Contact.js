// src/components/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

// This is the Contact component, it will render the contact section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Replace with your Web3Forms Access Key
    const ACCESS_KEY = 'f95ab408-2751-4c6f-b345-8ac47407ab6d';

    const object = {
      ...formData,
      access_key: ACCESS_KEY,
      subject: 'New Submission from Portfolio'
    };

    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setStatus(''), 5000); // Reset success message after 5 seconds
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact section-container">
      <h2 className="section-title">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let's talk about your next project.</h3>
          <p>Whether you have a question, a project inquiry, or just want to say hi, my inbox is always open.</p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:shagar.dhakal77@gmail.com" className="detail-value text-gradient">shagar.dhakal77@gmail.com</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <a href="tel:0452567972" className="detail-value">0452567972</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Tampere, Finland (33840)</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          {status === 'success' && (
            <div className="form-status-success">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="form-status-error">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary form-submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
