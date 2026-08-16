// src/Navbar.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import profilePic from './r2.jpeg';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setExpanded(false);

    const element = document.querySelector(href);

    if (element) {
      const navbarHeight = 70;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar ${scrolled ? 'is-scrolled' : ''}`}
    >
      <Container>

        {/* Brand */}
        <Navbar.Brand
          className="navbar-brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          <img
            src={profilePic}
            alt="Raza Ali Khan"
            className="navbar-brand-img"
          />

          <span className="navbar-brand-text">
            <span className="navbar-brand-name">
              Raza Ali Khan
            </span>

            <span className="navbar-brand-role">
              IT Governance &amp; Risk
            </span>
          </span>
        </Navbar.Brand>

        {/* Mobile menu button */}
        <Navbar.Toggle
          aria-controls="main-navigation"
          aria-label="Toggle navigation menu"
        />

        {/* Navigation */}
        <Navbar.Collapse id="main-navigation">
          <Nav className="navcus ms-auto">

            {links.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </Nav.Link>
            ))}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavigationBar; 