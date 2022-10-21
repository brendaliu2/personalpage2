import './AboutMe.css';
import newProfPic from './newProfPic.png';


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
  const { github, linkedin } = contacts;
  return (
    <div id='about-me'>
      <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className='col-md-12 col-lg-6'>
            <img src={newProfPic} alt='profile-pic' className='prof-pic' />
          </div>
          <div className='col-md-12 col-lg-6'>
            <div className='row animate__animated animate__slideInUp'>
              <div className='col big-text-container'>
                <b className='big-text'>I am a full stack engineer.</b>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p className='bio animate__animated animate__fadeIn'>
                  <br />
                  <br />
                  I graduated from New York University with a BA in Economics, and more recently, I graduated from Rithm School's Full-Stack Web Development Bootcamp.
                  <br />
                  <br />
                  Prior to pivoting to the tech industy, I specialized in various points of the supply chain within the fashion industry.
                  In my last role on the Merchandise Planning team at J.Crew, I worked with quarterly budgets, historical sales, and current trends to decide how much inventory to purchase for upcoming sales cycles.
                  <br />
                  <br />
                  I hope to find an enviornment where I can keep developing my engineering skillset as well as apply some problem-solving skills from my previous positions.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col'></div>
              <div className="col-2 github-link">
                <a href={github} target="_blank" rel='noreferrer' className='contact-link hover'>
                  <i className="bi bi-github"></i>
                  <p className='hover-msg'>Github</p>
                </a>
              </div>
              <div className="col-2 linkedin-link">
                <a href={linkedin} target="_blank" rel='noreferrer' className='contact-link hover'>
                  <i className="bi bi-linkedin"></i>
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