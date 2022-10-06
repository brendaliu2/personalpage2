import './Education.css';

/** Education
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> Education
 */
 export default function Education() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='education-box'>
              <h4>Rithm School</h4>
              <h5>Full Stack Engineering Bootcamp</h5>
              <h5>July 2022 - October 2022</h5>
            </div>
          </div>
          <div className='col'>
            <h4>New York University</h4>
            <h5>B.A. Economics</h5>
            <h5>August 2013 - May 2017</h5>
          </div>
        </div>
      </div>
    </>
  );
}