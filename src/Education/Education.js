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
          <div className="col"></div>
          <div className='col-md-5'>
            <h1 className="title">Education</h1>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className='container education-box'>
        <div className='row align-items-center shadow-lg p-5 rounded'>
          <div className='col'>
            <div className='row pt-2'>
              <div className='col-sm-12 col-md-6 mb-2'>
                <div className='education-card'>
                  <h4><b>Rithm School</b></h4>
                  <h5><i>Full Stack Engineering Bootcamp</i></h5>
                  <h5>July 2022 - October 2022</h5>
                </div>
              </div>
              <div className='col-sm-12 col-md-6'>
                <div className='education-card'>
                  <h4><b>New York University</b></h4>
                  <h5><i>B.A. Economics</i></h5>
                  <h5>August 2013 - May 2017</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}