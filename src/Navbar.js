// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';
import profilePic from './r2.jpg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar ${scrolled ? 'is-scrolled' : ''}`}
    >
      <Container>
        <LinkContainer to="/" onClick={() => setExpanded(false)}>
          <Navbar.Brand className="navbar-brand">
            <img src={profilePic} alt="Raza Ali Khan" className="navbar-brand-img" />
            <span className="navbar-brand-text">
              <span className="navbar-brand-name">Raza Ali Khan</span>
              <span className="navbar-brand-role">IT Governance &amp; Risk</span>
            </span>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="main-navigation" aria-label="Toggle navigation menu" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="navcus ms-auto">
            {links.map((link) => (
              <LinkContainer key={link.to} to={link.to} onClick={() => setExpanded(false)}>
                <Nav.Link>{link.label}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
