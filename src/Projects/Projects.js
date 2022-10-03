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
      <h1 className="title">Portfolio</h1>
      <div className="Carousel-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <i
                className={`bi bi-arrow-left-circle ${leftIconHidden}`}
                onClick={goBack}
              />
            </div>
            <div className="col-6">
              <Project
                name={currCard.name}
                deploy={currCard.deploy}
                github={currCard.github}
                github2={currCard.github2}
                description={currCard.description}
                builtWith={currCard.builtWith}
                currNum={currCardIdx + 1}
                totalNum={total}
              />
            </div>
            <div className="col">
              <i
                className={`bi bi-arrow-right-circle ${rightIconHidden}`}
                onClick={goForward}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;