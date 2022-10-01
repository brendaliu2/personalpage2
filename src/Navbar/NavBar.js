import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      {/* <nav>
      <div className='link container mr-1'>     <Link activeClass="active" smooth spy to="home">
        Brenda Liu
      </Link></div>
      <div className='link container mr-1'>     <Link activeClass="active" smooth spy to="about-me">
        About Me
      </Link></div>
      <div className='link container mr-1'>    <Link activeClass="active" smooth spy to="resume">
        Resume
      </Link></div>
      <div className='link container mr-1'>    <Link activeClass="active" smooth spy to="skills">
        Skills
      </Link></div>
      <div className='link container mr-1'>      <Link activeClass="active" smooth spy to="projects">
        Projects
      </Link></div>
    </nav> */}


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">
            <Link activeClass="active" smooth spy to="home">
              Brenda Liu
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="">
                <Link activeClass="active" smooth spy to="about-me">
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" smooth spy to="resume">
                  Resume
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" smooth spy to="skills">
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" smooth spy to="projects">
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link activeClass="active" smooth spy to="contact-me">
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