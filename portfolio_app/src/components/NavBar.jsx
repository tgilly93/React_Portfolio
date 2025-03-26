import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeToggle from '../context/ThemeToggle';

function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">TG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio_app/src/pages/AboutMe.jsx">About Me</Nav.Link>
            <NavDropdown title="Discover Me" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/portfolio_app/src/pages/Resume.jsx">Resume</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/portfolio_app/src/pages/Projects.jsx">
                My Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/portfolio_app/src/pages/ContactMe.jsx"}>
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