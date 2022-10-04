import "./Project.css";


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
 *
 * State:
 * - none
 *
 * App --> Projects --> Project
 */

function Project({ name, deploy, github, github2, description, builtWith, currNum, totalNum, image }) {
  const fill1 = currNum === 1 ? "-fill" : "";
  const fill2 = currNum === 2 ? "-fill" : "";
  const fill3 = currNum === 3 ? "-fill" : "";

  return (
    <div className="container">


      <div className="Card row align-items-center shadow-lg p-3 mb-5 bg-white rounded">

        {/* <div className="col-1 empty"></div> */}

        <div className="col name-desc-link">
          <div className="row">
            <h4 className="Card-title">{name}</h4>
          </div>
          <div className="row">
            <p className="description">{description}</p>
          </div>
          <div className="row">
            {/* <div className="col-3"></div> */}
            <div className="col">
              <a href={deploy} className='btn btn-outline-secondary deploy m-1'>Demo</a>
              <a href={github} className='btn btn-outline-secondary github m-1'>Github</a>
            </div>
            {/* {github2 && <div className="col"><a href={github2} className='btn btn-secondary github'>Github</a></div>} */}
            {/* <div className="col-3"></div> */}
          </div>
          {/* <div className="row">
            <img src={image} alt='project' />
          </div> */}
        </div>

        <div className="col built-with-col">
          <ul className="built-list">
            Built With:
            {builtWith.map((name, i) => <li key={i} className='built-name'><i class="bi bi-gear-fill"></i>{name}</li>)}
          </ul>
        </div>

        {/* <div className="col-1 empty"></div> */}
      </div>


      <small className="Card-small">
        {/* Project {currNum} of {totalNum}. */}
        <i className={`bi bi-circle${fill1}`}></i>
        <i className={`bi bi-circle${fill2}`}></i>
        <i className={`bi bi-circle${fill3}`}></i>
      </small>
    </div>
  );
}

export default Project;

// <i class="bi bi-gear"></i>
//<i class="bi bi-balloon"></i>
//<i class="bi bi-circle"></i>