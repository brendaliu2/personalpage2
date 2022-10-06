import ProfilePic from './prof-pic.JPG';
import './AboutMe.css';
import newProfPic from '../images/newProfPic.png';


/** AboutMe: displays profile pic and bio
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> AboutMe
 */
 export default function AboutMe({ contacts }) {
  const { email, github, linkedin, resume } = contacts;
  return (
    <div id='about-me'>
      <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className='col-md-12 col-lg-6'>
            <img src={newProfPic} alt='profile-pic' className='prof-pic' />
          </div>
          <div className='col-md-12 col-lg-6'>
            <div className='row'>
              <div className='col big-text-container'>
                <b className='big-text'>I am a full stack developer.</b>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p className='bio'>
                  <br />
                  I graduated from New York University with a BA in Economics, then went on to specialize in various points on the supply chain within the fashion industry.
                  In my most last role on the Merchandise Planning team at J.Crew, I worked with quarterly budgets, historical sales, and current trends to decide how much inventory to purchase for upcoming sales cycles.
                  <br />
                  <br />
                  More recently, I graduated from Rithm School's Full-Stack Web Development Bootcamp.
                  I hope to find an enviornment where I can keep developing my engineering skillset as well as apply some problem-solving skills from my previous positions.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col'></div>
              <div className="col-2 github-link">
                <a href={github} className='contact-link hover'>
                  <i class="bi bi-github"></i>
                  <p className='hover-msg'>Github</p>
                </a>
              </div>
              <div className="col-2 linkedin-link">
                <a href={linkedin} className='contact-link hover'>
                  <i class="bi bi-linkedin"></i>
                  <p className='hover-msg'>LinkedIn</p>
                </a>
              </div>
              <div className='col'></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}