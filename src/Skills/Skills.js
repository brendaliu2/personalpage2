import Skill from './Skill';
import './Skills.css';
import Accordion from 'react-bootstrap/Accordion';

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
  const { Languages, Frameworks, Other } = skills;


  // const jasmineSVG = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain-wordmark.svg';
  const jasmineSVG = 'https://img.icons8.com/ios-filled/50/000000/typescript.png';

  return (
    <>
      {/* <h1 className='skills-heading m-3 p-3'>Skills</h1>
      <div id='skills' className='skill-container'>
        <div className='grid-row'>
          <div className='col lang'>
            <div className='row lang-title-row'>
              <h5 className='lang-title'>Languages</h5>
            </div>
            <div className='row lang-list'>
              {Languages.map((lang, i) => <div key={i} className="grid-item"><Skill detail={lang} /></div>)}
            </div>
          </div>
          <div className='col frame'>
            <div className='row frame-title-row'>
              <h5 className='frame-title'>Frameworks</h5>
            </div>
            <div className='row frame-list'>
              {Frameworks.map((frame, i) => <div key={i} className="grid-item"><Skill detail={frame} /></div>)}
              <img src={jasmineSVG} className="grid-item jasmine" alt="jasmine icon" />
            </div>
          </div>
          <div className='col other'>
            <div className='row other-title-row'>
              <h5 className='other-title'>Other Technologies</h5>
            </div>
            <div className='row other-list'>
              {Other.map((other, i) => <div key={i} className="grid-item"><Skill detail={other} /></div>)}
            </div>
          </div>
        </div>
      </div> */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-md-5'>
            <h1 className='skills-heading m-3 p-3'>Skills</h1>
          </div>
          <div className='col'></div>
        </div>
        <div className='row'>
          <div className='col'></div>
          <div className='col-md-10'>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Languages</Accordion.Header>
                <Accordion.Body>
                  {Languages.map((lang, i) => <div key={i} className="grid-item"><Skill detail={lang} /></div>)}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Frameworks</Accordion.Header>
                <Accordion.Body>
                  <div className='container'>
                    {Frameworks.map((frame, i) => <div key={i} className="row skill-row"><Skill detail={frame} /></div>)}
                    {/* <img src={jasmineSVG} className="grid-item jasmine" alt="jasmine icon" /> */}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Other Technologies</Accordion.Header>
                <Accordion.Body>
                  {Other.map((other, i) => <div key={i} className="grid-item"><Skill detail={other} /></div>)}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className='col'></div>
        </div>

      </div>
    </>
  );
}

export default Skills;