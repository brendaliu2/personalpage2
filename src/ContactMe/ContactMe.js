import './ContactMe.css';
import ContactIcon from './ContactIcon';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** ContactMe: displays contact links
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> ContactMe -> ContactIcon
 */
export default function ContactMe({ contacts }) {
  const { github, linkedin, resume } = contacts;

  return (
    <Container>

      <Row className="m-5">
        <Col></Col>
        <Col md={5}>
          <h2 className="p-3 contact-title">Contact me</h2>
        </Col>
        <Col></Col>
      </Row>

      <Row className="m-5">
        <Col></Col>
        <Col></Col>
      </Row>

      <Row>
        <Col md={3}></Col>
        <Col className="resume-link">
          <ContactIcon
          link={resume.link}
          icon={resume.icon}
          msg={resume.msg}
          />
        </Col>

        <Col className="github-link">
          <ContactIcon
          link={github.link}
          icon={github.icon}
          msg={github.msg}
          />
        </Col>

        <Col className="linkedin-link">
          <ContactIcon
          link={linkedin.link}
          icon={linkedin.icon}
          msg={linkedin.msg}
          />
        </Col>
        <Col md={3}></Col>
      </Row>

    </Container>
  );
}