import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './NavBar.css';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import {
  useLocation
} from "react-router-dom";

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
  console.log('location', location.hash)

  return (
    <>
      <Navbar expand="md" fixed='top' className='nav'>
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>
            {/* <Link activeClass="active" spy to="about-me">
              Brenda Liu
            </Link> */}
            <HashLink smooth to="/#about-me" id='nav-brand' className={`${location.hash}` === '#about-me' ? "active" : "inactive"}>
              Brenda Liu
            </HashLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='bg-white'>
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
              {/* <Link activeClass="active" spy to="about-me" id='nav-link'>
                Home
              </Link>
              <Link activeClass="active" spy to="projects" id='nav-link'>
                Projects
              </Link>
              <Link activeClass="active" spy to="skills" id='nav-link'>
                Skills
              </Link>
              <Link activeClass="active" spy to="experience" id='nav-link'>
                Experience
              </Link>
              <Link activeClass="active" spy to="education" id='nav-link'>
                Education
              </Link>
              <Link activeClass="active" spy to="contact-me" id='nav-link'>
                Contact Me
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}