import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './NavBar.css';

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
  return (
    <>
      <Navbar expand="md" fixed='top' className='nav'>
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>
            <Link activeClass="active" spy to="about-me">
              Brenda Liu
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='bg-white'>
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Link activeClass="active" spy to="about-me" id='nav-link'>
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
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}