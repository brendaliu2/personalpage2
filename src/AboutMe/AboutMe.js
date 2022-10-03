import ProfilePic from './prof-pic.JPG';
import './AboutMe.css';


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
function AboutMe() {
  return (
    <div id='about-me'>
      <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className='col-md-12 col-lg-6'>
            <img src={ProfilePic} alt='profile-pic' className='prof-pic' />
          </div>
          <div className='col-md-12 col-lg-6'>
            <p className='bio'>
              I am <b>Brenda Liu</b> and I am a full stack engineer.
              <br />
              <br />
              I graduated from New York University with a BA in Economics, specialized in various points on the supply chain within the fashion industry.
              In my most recent role on the Merchandise Planning team at J.Crew, I worked with quarterly budgets, historical sales, and current trends to decide how much inventory to purchase for upcoming sales cycles.
              <br />
              <br />
              More recently, I graduated from from Rithm School Full-Stack Engineering Bootcamp.
              I hope to find an enviornment where I develop my engineering skillset and apply some problem-solving skills in my previous positions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;