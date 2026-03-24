import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !/^\S+@\S+\.\S+$/.test(trimmedEmail) || trimmedMessage.length < 10) {
      setStatus({ type: 'error', message: 'Please ensure all fields are properly filled.' });
      return;
    }

    setStatus({
      type: 'success',
      message: "Message sent! (Mock response)",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">CONTACT WITH ME</h2>
        
        <div className="contact-grid">
          <div className="contact-form-container">
            <p className="contact-desc">
              If you have any questions or concerns, please don't hesitate to contact me. 
              I am open to any work opportunities that align with my skills and interests.
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Your Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Your Message:</label>
                <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <button type="submit" className="submit-btn">
                SEND MESSAGE <FiSend />
              </button>
              {status.message && (
                <p className={`form-status ${status.type}`}>{status.message}</p>
              )}
            </form>
          </div>
          
          <div className="contact-info-container">
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">@</div>
                <span>Debasis Sahoo</span>
              </div>
              <div className="info-item">
                <div className="info-icon"><FiPhone /></div>
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="info-item">
                <div className="info-icon"><FiMapPin /></div>
                <span>India</span>
              </div>
            </div>
            
            <div className="social-circles">
              <a href="#" className="social-circle github" onClick={(e) => e.preventDefault()}><FiGithub /></a>
              <a href="#" className="social-circle linkedin" onClick={(e) => e.preventDefault()}><FiLinkedin /></a>
              <a href="#" className="social-circle facebook" onClick={(e) => e.preventDefault()}><FiFacebook /></a>
              <a href="#" className="social-circle twitter" onClick={(e) => e.preventDefault()}><FiTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="vertical-text-container-contact">
        <span className="vertical-text">CONTACT</span>
      </div>
    </section>
  );
};

export default Contact;
