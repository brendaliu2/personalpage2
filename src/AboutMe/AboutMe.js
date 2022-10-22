import './AboutMe.css';
import newProfPic from './newProfPic.png';
import newProfPic2 from './newProfPic-med.jpeg';
import ContactIcon from '../ContactMe/ContactIcon';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** AboutMe: displays profile pic and bio
 *
 * Props:
 * - contacts {github, linkedin, ...}
 *
 * State:
 * - none
 *
 * App --> AboutMe -> ContactIcon
 */
export default function AboutMe({ contacts }) {
  const { github, linkedin } = contacts;
  return (
      <Container className='mt-5'>
        <Row className='align-items-center'>
          <Col md={12} lg={6} className='animate__animated animate__slideInUp'>
            <img src={newProfPic} alt='profile-pic' className='prof-pic' />
          </Col>
          <Col md={12} lg={6}>
            <Row className='animate__animated animate__slideInUp'>
              <Col className='big-text-container'>
                <b className='big-text'>I am a full stack engineer.</b>
              </Col>
            </Row>
            <Row>
              <Col>
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
              </Col>
            </Row>

            <Row>
              <Col></Col>
              <Col xs={2} className="github-link animate__animated animate__fadeIn">
                <ContactIcon
                  link={github.link}
                  icon={github.icon}
                  msg={github.msg}
                />
              </Col>
              <Col className="linkedin-link animate__animated animate__fadeIn">
                <ContactIcon
                  link={linkedin.link}
                  icon={linkedin.icon}
                  msg={linkedin.msg}
                />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
}