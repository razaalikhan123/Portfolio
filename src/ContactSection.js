import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Reveal from './Reveal';
import './contact.css';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/raxa_anu/?igsh=MWpnaWloaThucHhnYg%3D%3D',
    icon: <FaInstagram />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raza-ali-khan-361321245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedin />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/razaalikhan123',
    icon: <FaGithub />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100004311935267&mibextid=ZbWKwL',
    icon: <FaFacebook />,
  },
];

const ContactSection = () => {
  return (
    <section id="contact">
      <Reveal as="div" className="heai">
        Connect With Me
      </Reveal>

      <Reveal as="div" className="contact-us-container">
        <div className="left-section">
          <h2>Let&apos;s get connected!</h2>
          <p className="contact-tagline">
            Open to conversations on IT governance, risk, and compliance opportunities.
          </p>
        </div>

        <div className="right-section">
          <ul className="contact-details">
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Karachi, Pakistan</span>
            </li>
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href="mailto:razao32232@gmail.com">razao32232@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt aria-hidden="true" />
              <a href="tel:+923352336898">0335 2336898</a>
            </li>
          </ul>

          <h3>Follow me on</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;
