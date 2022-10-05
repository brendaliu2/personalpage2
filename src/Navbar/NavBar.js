import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './NavBar.css';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
      <Navbar expand="md" fixed='top'className='nav'>
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
    // <>
    //   {['lg'].map((expand) => (
    //     <Navbar  collapseOnSelect={true} key='lg' bg="light" expand='lg' className="mb-3 nav">
    //       <Container fluid>
    //         <Navbar.Brand href="#">Brenda Liu</Navbar.Brand>
    //         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'lg'`} />
    //         <Navbar.Offcanvas
    //           id={`offcanvasNavbar-expand-$'lg'`}
    //           aria-labelledby={`offcanvasNavbarLabel-expand-$'lg'`}
    //           placement="end"
    //         >
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'lg'`}>
    //               Offcanvas
    //             </Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body>
    //             <Nav className="justify-content-end flex-grow-1 pe-3">
    //               <Nav.Link eventKey="1" href="#home">
    //                 <Link activeClass="active" spy to="home" onSelect={() => null}>
    //                   Home
    //                 </Link>
    //               </Nav.Link>
    //               <Nav.Link eventKey="2" href="#aboutme">
    //                 <Link activeClass="active" spy to="about-me" onSelect={() => null}>
    //                   About Me
    //                 </Link>
    //               </Nav.Link>
    //               <Nav.Link eventKey="3" href="#projects">
    //                 <Link activeClass="active" spy to="projects">
    //                   Projects
    //                 </Link>
    //               </Nav.Link>
    //               <Nav.Link eventKey="4" href="">
    //                 <Link activeClass="active" spy to="skills">
    //                   Skills
    //                 </Link>
    //               </Nav.Link>
    //               <Nav.Link eventKey="5" href="">
    //                 <Link activeClass="active" spy to="experience">
    //                   Experience
    //                 </Link>
    //               </Nav.Link>
    //               <Nav.Link eventKey="6" href="">
    //                 <Link activeClass="active" spy to="contact-me">
    //                   Contact Me
    //                 </Link>
    //               </Nav.Link>
    //             </Nav>
    //           </Offcanvas.Body>
    //         </Navbar.Offcanvas>
    //       </Container>
    //     </Navbar>
    //   ))}
    // </>

  );
}


export default NavBar;