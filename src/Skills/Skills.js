import Skill from './Skill';
import './Skills.css';

/** Skills
 *
 * Props:
 * - skills [icon, ....]
 *
 * State:
 * - none
 *
 * App --> Skills --> Skill
 */
function Skills({ skills }) {

  const jasmineSVG = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain-wordmark.svg';

  return (
    <>
      <h1 className='skills-heading m-3 p-3'>Skills</h1>
      <div id='skills' className='skill-container'>
        <div className='grid-row'>
          {skills.map((s, i) => <div key={i} className="grid-item"><Skill skillIcon={s} /></div>)}
          <img src={jasmineSVG} className="grid-item jasmine" alt="jasmine icon"/>
        </div>
      </div>
    </>
  );
}

export default Skills;