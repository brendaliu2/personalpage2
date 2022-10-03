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
function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed='top' className='nav'>
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>
            <Link activeClass="active" spy to="home">
              Brenda Liu
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="">
                <Link activeClass="active" spy to="home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" spy to="about-me">
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" spy to="projects">
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" spy to="skills">
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" spy to="experience">
                  Experience
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" spy to="contact-me">
                  Contact Me
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavBar;