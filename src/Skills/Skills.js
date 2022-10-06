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
export default function Skills({ skills }) {
  const { Languages, Frameworks, Other } = skills;

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-md-5'>
            <h1 className='skills-heading'>Skills</h1>
          </div>
          <div className='col'></div>
        </div>
      </div>
      <div className='container-fluid skills-container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-md-10'>
            <div className='row align-items-center shadow-lg p-5 mb-5 rounded skills-row'>
              <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Languages</Accordion.Header>
                  <Accordion.Body>
                    <div className='flex-container'>
                      {Languages.map((lang, i) => <div key={i} className="grid-item"><Skill detail={lang} /></div>)}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Frameworks</Accordion.Header>
                  <Accordion.Body>
                    <div className='flex-container'>
                      {Frameworks.map((frame, i) => <div key={i} className="grid-item"><Skill detail={frame} /></div>)}
                      {/* <img src={jasmineSVG} className="grid-item jasmine" alt="jasmine icon" /> */}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Other Technologies</Accordion.Header>
                  <Accordion.Body>
                    <div className='flex-container'>
                      {Other.map((other, i) => <div key={i} className="grid-item"><Skill detail={other} /></div>)}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className='col'></div>
        </div>

      </div>
    </>
  );
}