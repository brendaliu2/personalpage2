import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import projectsList from './Projects/projectsList';
import Projects from './Projects/Projects';
import skillsList from './Skills/skillsList';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import contacts from './ContactMe/contacts';
import ContactMe from './ContactMe/ContactMe';

/** Routes for Personal Site
 * App --> Routes -->
 *  {Home, NavBar, AboutMe, Projects, Skills, Experience, ContactMe}
*/

export default function RoutesList() {

  return (
    <div className="RoutesList">

      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<Home />} />

        <Route path='/about-me' element={<AboutMe contacts={contacts}/>} />
        <Route path='/projects' element={<Projects projects={projectsList}/>} />
        <Route path='/skills' element={<Skills skills={skillsList}/>} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact-me' element={<ContactMe contacts={contacts}/>} />
      </Routes>

    </div>
  );
}