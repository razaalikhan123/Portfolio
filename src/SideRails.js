// src/SideRails.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import './SideRails.css';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/razaalikhan123',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raza-ali-khan-361321245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedin />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/raxa_anu/?igsh=MWpnaWloaThucHhnYg%3D%3D',
    icon: <FaInstagram />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100004311935267&mibextid=ZbWKwL',
    icon: <FaFacebook />,
  },
];

// Decorative-but-functional rail fixed to the right edge on large screens:
// a vertical email link plus a stack of social icons, both threaded on a
// glowing line down to the bottom of the viewport.
const SideRails = () => {
  return (
    <div className="side-rail side-rail-right" aria-label="Quick contact links">
      <a href="mailto:razao32232@gmail.com" className="side-rail-email">
        razao32232@gmail.com
      </a>
      <ul className="side-rail-socials">
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
      <span className="side-rail-line" />
    </div>
  );
};

export default SideRails;
