import { useState } from "react";
import "./Projects.css";
import Project from "./Project";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** Carousel: displays projects and arrows to navigate through them
 *
 * Props:
 * - projects: array of {name, github, github2, description, builtWith: [name, ...]}
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Projects --> Project
 */
export default function Projects({ projects }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = projects[currCardIdx];
  const total = projects.length;

  const leftIconHidden = (currCardIdx === 0) ? true : false;
  const rightIconHidden = (currCardIdx === total - 1) ? true : false;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <>
      <Container fluid>
        <Row className='title-row'>
          <Col></Col>
          <Col md={5}>
            <h2 className="title">Portfolio</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} className="project-card">
            <Project
              name={currCard.name}
              deploy={currCard.deploy}
              github={currCard.github}
              description={currCard.description}
              builtWith={currCard.builtWith}
              currNum={currCardIdx + 1}
              totalNum={total}
              image={currCard.image}
            />
          </Col>
          <Row>
            <Col className="left-arrow">
              <button className="arrow-btn" type="button" id="left-project" disabled={leftIconHidden} onClick={goBack}>
                <i
                  className={`bi bi-arrow-left-circle-fill`}
                />
              </button>
            </Col>
            <Col className="right-arrow">
              <button className="arrow-btn" type="button" id="right-project" disabled={rightIconHidden} onClick={goForward}>
                <i
                  className={`bi bi-arrow-right-circle-fill`}
                />
              </button>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}