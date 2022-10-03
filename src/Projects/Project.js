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

function Project({ name, deploy, github, github2, description, builtWith, currNum, totalNum }) {

  return (
    <div className="Card">
      <h4 className="Card-title">{name}</h4>
      <a href={deploy} className='btn btn-secondary deploy'>Demo</a>
      <a href={github} className='btn btn-secondary github'>Github</a>
      {github2 && <a href={github2} className='btn btn-secondary github'>Github</a>}
      <p>Description: {description}</p>
      <ul>
        Built With:
        {builtWith.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
      <small className="Card-small">
        Project {currNum} of {totalNum}.
      </small>
    </div>
  );
}

export default Project;