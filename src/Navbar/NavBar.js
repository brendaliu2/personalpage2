import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link } from 'react-scroll';

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
      <Navbar expand="lg" fixed='top' className='nav bg-white'>
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>
            <Link activeClass="active" to="home" id='nav-link' spy={true}>Brenda Liu</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Link activeClass="active" to="home" id='nav-link' spy={true}>
                Home
              </Link>
              <Link activeClass="active" hashSpy={true} to="projects" id='nav-link' spy={true}>
                Projects
              </Link>
              <Link activeClass="active" hashSpy={true} to="skills" id='nav-link' spy={true}>
                Skills
              </Link>
              <Link activeClass="active" hashSpy={true} to="experience" id='nav-link' spy={true}>
                Experience
              </Link>
              <Link activeClass="active" hashSpy={true} to="education" id='nav-link' spy={true}>
                Education
              </Link>
              <Link activeClass="active" hashSpy={true} to="contact-me" id='nav-link' spy={true}>
                Contact Me
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}