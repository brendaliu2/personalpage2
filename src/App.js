import './App.css';
import NavBar from './Navbar/NavBar';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
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
        <nav>
          <NavBar />
        </nav>
      </header>

      <section id='about-me' className='body'>
        <AboutMe contacts={contacts} />
      </section>

      <section id='projects' className='body'>
        <Projects projects={projectsList} />
      </section>

      <section id='skills' className='body'>
        <Skills skills={skillsList} />
      </section>

      <section id='experience' className='body'>
        <Experience />
      </section>

      <section id='education' className='body'>
        <Education />
      </section>

      <section id='contact-me' className='body'>
        <ContactMe contacts={contacts} />
      </section>

      <Footer />

    </div>
  );
}

export default App;
