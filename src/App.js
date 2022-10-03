import './App.css';
import NavBar from './Navbar/NavBar';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Home from './Home/Home';
import projectsList from './Projects/projectsList'
import skillsList from './Skills/skillsList';


function App() {

  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
        </div>
      </header>

      <div id='home' className='body'>
        <div id='home' className='body'>
          <Home />
        </div>

        <div id='about-me' className='body'>
          <AboutMe />
        </div>

        <div id='projects' className='body'>
          <Projects projects={projectsList}/>
        </div>

        <div id='skills' className='body'>
          <Skills skills={skillsList}/>
        </div>

        <div id='experience' className='body'>
          <Experience />
        </div>

        <div id='contact-me' className='body'>
          <ContactMe />
        </div>
      </div>



    </div>
  );
}

export default App;
