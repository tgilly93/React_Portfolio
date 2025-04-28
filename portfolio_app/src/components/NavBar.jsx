import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeToggle from '../context/ThemeToggle';
import React from 'react';


function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setExpanded(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
    expand="lg"
    expanded={expanded} 
    onToggle={() => setExpanded((prev) =>!prev)} 
    className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/Achievements">TG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutMe" onClick={() => setExpanded(false)}>About Me</Nav.Link>
            <NavDropdown title="Discover Me" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Resume" onClick={() => setExpanded(false)}>Resume</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects" onClick={() => setExpanded(false)}>
                My Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ContactMe" onClick={() => setExpanded(false)}>
                Contact Me
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;