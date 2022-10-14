import './App.css';
import NavBar from './Navbar/NavBar';
import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Home from './Home/Home';
import projectsList from './Projects/projectsList';
import skillsList from './Skills/skillsList';
import contacts from './ContactMe/contacts';
import Education from './Education/Education';
import Footer from './Footer/Footer';

/** Personal Site
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> {Home, NavBar, AboutMe, Projects, Skills, Experience, ContactMe}
 */
function App() {

  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
        </div>
      </header>

      {/* <div id='home' className='body'> */}
      {/* <div id='home' className='body'>
          <Home />
        </div> */}

      <div id='about-me' className='body'>
        <AboutMe contacts={contacts} />
      </div>

      <div id='projects' className='body'>
        <Projects projects={projectsList} />
      </div>

      <div id='skills' className='body'>
        <Skills skills={skillsList} />
      </div>

      <div id='experience' className='body'>
        <Experience />
      </div>

      <div id='education' className='body'>
        <Education />
      </div>

      <div id='contact-me' className='body'>
        <ContactMe contacts={contacts} />
      </div>
      {/* </div> */}

      {/* <div id='foot-me' className='body'> */}
        <Footer />
      {/* </div> */}

    </div>

    // <BrowserRouter>
    //   <NavBar />
    //   <RoutesList />
    // </BrowserRouter>
  );
}

export default App;
