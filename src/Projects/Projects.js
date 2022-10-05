import { useState } from "react";
import "./Projects.css";
import Project from "./Project";


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

function Projects({ projects }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = projects[currCardIdx];
  const total = projects.length;

  const leftIconHidden = (currCardIdx === 0) ? "d-none" : "";
  const rightIconHidden = (currCardIdx === total - 1) ? "d-none" : "";

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <div className='container'>
        <div className='row title-row'>
          <div className="col"></div>
          <div className='col'>
            <h1 className="title">Portfolio</h1>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="Carousel-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col"></div>
            <div className="col-sm-12 col-md-10 col-lg-8 project-card">
              <Project
                name={currCard.name}
                deploy={currCard.deploy}
                github={currCard.github}
                github2={currCard.github2}
                description={currCard.description}
                builtWith={currCard.builtWith}
                currNum={currCardIdx + 1}
                totalNum={total}
                image={currCard.image}
              />
            </div>
            <div className="col"></div>
            <div className="row">
              <div className="col left-arrow">
                <i
                  className={`bi bi-arrow-left-circle-fill ${leftIconHidden}`}
                  onClick={goBack}
                />
              </div>
              <div className="col right-arrow">
                <i
                  className={`bi bi-arrow-right-circle-fill ${rightIconHidden}`}
                  onClick={goForward}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
