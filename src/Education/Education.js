import './Education.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** Education
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> Education
 */
export default function Education() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col md={5}>
            <h2 className="title">Education</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className='education-box'>
        <Row className='align-items-center shadow-lg p-5 rounded'>
          <Col>
            <Row className='pt-2'>
              <Col sm={12} md={6} className='mb-2'>
                <div className='education-card'>
                  <p className='school'><b>Rithm School</b></p>
                  <p><i>Full Stack Engineering Bootcamp</i></p>
                  <p>July 2022 - October 2022</p>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className='education-card'>
                  <p className='school'><b>New York University</b></p>
                  <p><i>B.A. Economics</i></p>
                  <p>August 2013 - May 2017</p>
                </div>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </>
  );
}