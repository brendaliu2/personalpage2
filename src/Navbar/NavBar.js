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
    <div>
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
              {/* <Nav.Link href="/"> */}
                <Link activeClass="active" spy to="about-me" id='nav-link'>
                  Home
                </Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link href="/about-me">
                <Link activeClass="active" spy to="about-me">
                  About Me
                </Link>
              </Nav.Link> */}
              {/* <Nav.Link href="/"> */}
                <Link activeClass="active" spy to="projects" id='nav-link'>
                  Projects
                </Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link href="/"> */}
                <Link activeClass="active" spy to="skills" id='nav-link'>
                  Skills
                </Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link href="/"> */}
                <Link activeClass="active" spy to="experience" id='nav-link'>
                  Experience
                </Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link href="/"> */}
                <Link activeClass="active" spy to="education" id='nav-link'>
                  Education
                </Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link href="/"> */}
                <Link activeClass="active" spy to="contact-me" id='nav-link'>
                  Contact Me
                </Link>
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}