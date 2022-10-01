import './App.css';
import NavBar from './Navbar/NavBar';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section id='home'>
        <section id='about-me'>
          <AboutMe />
        </section>

        <section id='resume'>
          <Resume />
        </section>

        <section id='skills'>
          <Skills />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section id='contact-me'>
          <ContactMe />
        </section>
      </section>



    </div>
  );
}

export default App;
