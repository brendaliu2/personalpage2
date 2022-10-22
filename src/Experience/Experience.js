import './Experience.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


/** Experience: displays experience
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> Experience
 */
export default function Experience() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col md={5}>
            <h2 className="experience-title">Experience</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className='timeline-test timeline-container'>
        <Row className='align-items-center shadow-lg p-5 rounded'>
          <Row className='mt-5'>
            <Col>
              <a href='https://drive.google.com/file/d/108-Ch66XUvMVsZPFZb6mEJ_UD7nzmbVw/view?usp=sharing' download target="_blank" rel='noreferrer' className='btn btn-outline-secondary btn-lg'>Download Resume <i className="bi bi-cloud-download-fill"></i></a>
            </Col>
          </Row>
          <Container className="py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <div className="job-card">
                  <div className="card-body p-4">
                    <p className='time-left'>Sep-Oct 2022</p>
                    <h4 className='job'><b>Software Engineer Intern</b> @ <i>Foqal</i></h4>
                    <h6 className='location'><i className="bi bi-geo-fill"></i>San Francisco, CA</h6>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="job-card">
                  <div className="card-body p-4">
                    <p className='time-right'>Jan 2021 - Jan 2022</p>
                    <h4 className='job'><b>Assistant Merchandise Planner</b> @ <i>J.Crew</i></h4>
                    <h6 className='location'><i className="bi bi-geo-fill"></i>New York, NY</h6>
                  </div>
                </div>
              </div>
              <div className="timeline left">
                <div className="job-card">
                  <div className="card-body p-4">
                    <p className='time-left'>Jun 2019 - Jan 2021</p>
                    <h4 className='job'><b>Distribution Planner</b> @ <i>J.Crew</i></h4>
                    <h6 className='location'><i className="bi bi-geo-fill"></i>New York, NY</h6>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="job-card">
                  <div className="card-body p-4">
                    <p className='time-right'>Jun 2017 - Jun 2019</p>
                    <h4 className='job'><b>Sales Operations Analyst</b> @ <i>Marc Jacobs</i></h4>
                    <h6 className='location'><i className="bi bi-geo-fill"></i>New York, NY</h6>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    </>
  );
}