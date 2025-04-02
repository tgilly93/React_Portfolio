import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeToggle from '../context/ThemeToggle';
import React from 'react';

function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/Achievements">TG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutMe">About Me</Nav.Link>
            <NavDropdown title="Discover Me" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Resume">Resume</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects">
                My Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/ContactMe"}>
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