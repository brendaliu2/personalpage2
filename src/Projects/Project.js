import "./Project.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** Card: displays project.
 *
 * Props:
 * - name: string
 * - deploy: string
 * - github: string
 * - github2: string (if diff repo for frontend/backend)
 * - description: string
 * - builtWith: array [name, ...]
 * - currNum: integer for what project we're on
 * - totalNum: integer for how many projects are in the collection
 * - image: string
 *
 * State:
 * - none
 *
 * App --> Projects --> Project
 */
export default function Project({
  name,
  deploy,
  github,
  description,
  builtWith,
  currNum,
  totalNum,
  image,
}) {
  const fill1 = currNum === 1 ? "-fill" : "";
  const fill2 = currNum === 2 ? "-fill" : "";
  const fill3 = currNum === 3 ? "-fill" : "";
  const fill4 = currNum === 4 ? "-fill" : "";
  const fill5 = currNum === 5 ? "-fill" : "";

  return (
    <Container className="container card-container">

      <Row className="Card align-items-center shadow-lg mb-5 rounded">

        <Col sm={12} lg={6} className="name-desc-link">
          <Row className="pt-5">
            <h4 className="Card-title">{name}</h4>
          </Row>
          <Row>
            <p className="description">{description}</p>
          </Row>
          <Row>
          </Row>
          <Row>
            <Col>
              <ul className="built-list">
                Built With:
                {builtWith.map((name, i) => <li key={i} className='built-name'>{name}</li>)}
              </ul>
            </Col>
          </Row>
        </Col>

        <Col sm={12} lg={6} className="built-with-col">
          <Row className="mb-3 pad-adjust">
            <Col className="justify-content-center">
              <img src={image} alt='project' className="demo-image" />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <a href={deploy} aria-label='view demo' target="_blank" rel='noreferrer' className='btn btn-outline-secondary deploy m-1'>Demo</a>
              <a href={github} aria-label='view github code' target="_blank" rel='noreferrer' className='btn btn-outline-secondary github m-1'>Github</a>
            </Col>

          </Row>

        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="justify-content-center">
          <small className="Card-small">
            <i className={`bi bi-circle${fill1}`}></i>
            <i className={`bi bi-circle${fill2}`}></i>
            <i className={`bi bi-circle${fill3}`}></i>
            <i className={`bi bi-circle${fill4}`}></i>
            <i className={`bi bi-circle${fill5}`}></i>
          </small>
        </Col>
      </Row>
    </Container>
  );
}