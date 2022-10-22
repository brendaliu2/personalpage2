import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

/** NavBar: displays navbar
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> NavBar
 */
export default function NavBar() {
  let location = useLocation();

  return (
    <>
      <Navbar expand="lg" fixed='top' className='nav bg-white'>
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>
            <HashLink smooth to="/#about-me" id='nav-brand' className={`${location.hash}` === '#about-me' ? "active" : "inactive"}>
              Brenda Liu
            </HashLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <HashLink smooth to="/#about-me" id='nav-link' className={`${location.hash}` === '#about-me' ? "active" : "inactive"}>
                Home
              </HashLink>
              <HashLink smooth to="/#projects" id='nav-link' className={`${location.hash}` === "#projects" ? "active" : "inactive"}>
                Projects
              </HashLink>
              <HashLink smooth to="/#skills" id='nav-link' className={`${location.hash}` === "#skills" ? "active" : "inactive"}>
                Skills
              </HashLink>
              <HashLink smooth to="/#experience" id='nav-link' className={`${location.hash}` === "#experience" ? "active" : "inactive"}>
                Experience
              </HashLink>
              <HashLink smooth to="/#education" id='nav-link' className={`${location.hash}` === "#education" ? "active" : "inactive"}>
                Education
              </HashLink>
              <HashLink smooth to="/#contact-me" id='nav-link' className={`${location.hash}` === "#contact-me" ? "active" : "inactive"}>
                Contact Me
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}