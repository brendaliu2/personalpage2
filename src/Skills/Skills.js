import Skill from './Skill';
import './Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      <Container fluid>
        <Row className='row'>
          <Col></Col>
          <Col md={5}>
            <h2 className='skills-heading'>Skills</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid className='skills-container'>
        <Row>
          <Col></Col>
          <Col md={10}>
            <Row className='align-items-center shadow-lg p-5 mb-5 rounded skills-row'>
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
            </Row>
          </Col>
          <Col></Col>
        </Row>

      </Container>
    </>
  );
}