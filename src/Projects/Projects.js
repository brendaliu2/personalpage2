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

  const leftIconHidden = (currCardIdx === 0) ? "hidden" : "";
  const rightIconHidden = (currCardIdx === total - 1) ? "hidden" : "";

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
      <h1>Portfolio</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${leftIconHidden}`}
          onClick={goBack}
        />
        <Project
          name={currCard.name}
          deploy={currCard.deploy}
          github={currCard.github}
          github2={currCard.github2}
          description={currCard.src}
          builtWith={currCard.builtWith}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${rightIconHidden}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Projects;
