import ProfilePic from '../images/prof-pic.JPG';
import './AboutMe.css';

function AboutMe() {
  return (
    <div id='about-me'>
      <h1>AboutMe</h1>
      <img src={ProfilePic} alt='profile-pic' id='prof-pic' />
      <p>
        I am an aspiring Software Engineer. I graduated from New York University in 2017 with a
        BA in Economics. My main work experience has been in the supply chain side of various companies in the fashion
        industry, such as, Marc Jacobs and J.Crew. I want to learn how to code because it feeds my creative side
        while also challenging my problem solving capablities.
      </p>

    </div>
  );
}

export default AboutMe;