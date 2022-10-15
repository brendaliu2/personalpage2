import './Experience.css';


/** Experience: displays experience
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> Experience
 */
export default function Experience() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-md-5'>
            <h1 className="experience-title">Experience</h1>
          </div>
          <div className='col'></div>
        </div>
      </div>
      <section className='timeline-test container timeline-container'>
        <div className='row align-items-center shadow-lg p-5 rounded'>
          <div className='row mt-5'>
            <div className='col'>
              <a href='https://drive.google.com/file/d/1Chd6Q9ePw9smczstiQ-KY64ZeewFU439/view' download target="_blank" rel='noreferrer' className='btn btn-outline-secondary btn-lg'>Download Resume <i class="bi bi-cloud-download-fill"></i></a>
            </div>
          </div>
          <div className="container py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-left'>Sep-Oct 2022</h5>
                    <h4 className='job'><b>Software Engineer Intern</b> @ <i>Foqal</i></h4>
                    <h6 className='location'><i class="bi bi-geo-fill"></i>San Francisco, CA</h6>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-right'>Jan 2021 - Jan 2022</h5>
                    <h4 className='job'><b>Assistant Merchandise Planner</b> @ <i>J.Crew</i></h4>
                    <h6 className='location'><i class="bi bi-geo-fill"></i>New York, NY</h6>
                  </div>
                </div>
              </div>
              <div className="timeline left">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-left'>Jun 2019 - Jan 2021</h5>
                    <h3 className='job'><b>Distribution Planner</b> @ <i>J.Crew</i></h3>
                    <h6 className='location'><i class="bi bi-geo-fill"></i>New York, NY</h6>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-right'>Jun 2017 - Jun 2019</h5>
                    <h3 className='job'><b>Sales Operations Analyst</b> @ <i>Marc Jacobs</i></h3>
                    <h6 className='location'><i class="bi bi-geo-fill"></i>New York, NY</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}