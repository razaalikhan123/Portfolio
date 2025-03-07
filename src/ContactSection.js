import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import './contact.css'; // Optional: Create a CSS file for styling

const ContactUs = () => {
  return (
    <div>
            <div className='heai'>CONNECT WITH ME</div>

    <div className="contact-us-container">
      <div className="left-section">
        <h1>Let's get connected!</h1>
      </div>
      <div className="right-section">
        <h3>Follow us on:</h3>
        <div className="social-links">
          <a href="https://www.instagram.com/raxa_anu/?igsh=MWpnaWloaThucHhnYg%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.linkedin.com/in/raza-ali-khan-361321245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/razaalikhan123" target="_blank" rel="no  opener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100004311935267&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} />
          </a>
        </div>
      </div>
    </div>
    </div>

);
};

export default ContactUs;
