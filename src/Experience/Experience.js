
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

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Brenda-Liu-Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Brenda-Liu-Resume.pdf';
        alink.click();
      });
    });
  };
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
              <button className='btn btn-outline-secondary btn-lg' onClick={onButtonClick}>Download Resume <i class="bi bi-cloud-download-fill"></i></button>
            </div>
          </div>
          <div className="container py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-left'>Sep-Oct 2022</h5>
                    <h4 className='job'><b>Software Engineer Intern</b> @ <i>Foqal</i></h4>
                    <h6><i class="bi bi-geo-fill"></i>San Francisco, CA</h6>
                    {/* <ul className="mb-0 text-left">
                  <li className='job-details'>Designed and implemented un-read feature for tickets</li>
                  <li className='job-details'>Presented intermediate TypeScript topics to team</li>
                  <li className='job-details'>Played planning poker to calculate team velocity</li>
                </ul> */}
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-right'>Jan 2021 - Jan 2022</h5>
                    <h4 className='job'><b>Assistant Merchandise Planner</b> @ <i>J.Crew</i></h4>
                    <h6><i class="bi bi-geo-fill"></i>New York, NY</h6>
                    {/* <ul className="mb-0 text-left">
                  <li className='job-details'>Created preseason sales, margin, and inventory plans for each style by department</li>
                  <li className='job-details'>Analyzed previous quarter results and identify missed sales and growth drivers from previous seasons</li>
                  <li className='job-details'>Decided markdown and promotional strategies to maximize profitability on the life of an item</li>
                </ul> */}
                  </div>
                </div>
              </div>
              <div className="timeline left">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-left'>Jun 2019 - Jan 2021</h5>
                    <h3 className='job'><b>Distribution Planner</b> @ <i>J.Crew</i></h3>
                    <h6><i class="bi bi-geo-fill"></i>New York, NY</h6>
                    {/* <ul className="mb-0 text-left">
                  <li className='job-details'>Executed allocation and replenishment for 167 stores nationwide managed through demand forecasting</li>
                  <li className='job-details'>Ensured receipt accuracy to support in-season allocation strategies</li>
                  <li className='job-details'>Forecasted inbound/outbound inventory to drive in-stock to manage DC/store payroll</li>
                </ul> */}
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="job-card">
                  <div className="card-body p-4">
                    <h5 className='time-right'>Jun 2017 - Jun 2019</h5>
                    <h3 className='job'><b>Sales Operations Analyst</b> @ <i>Marc Jacobs</i></h3>
                    <h6><i class="bi bi-geo-fill"></i>New York, NY</h6>
                    {/* <ul className="mb-0 text-left">
                  <li className='job-details'>Designed reports, excel programming, and analysis templates to support allocation and planning team</li>
                  <li className='job-details'>Tracked global inventory deliveries and partner with Production, Logistics, and Warehousing teams to propose global seasonal launch dates and mitigate any potential fulfillment risks</li>
                  <li className='job-details'>Forecasted inbound/outbound inventory to drive in-stock to manage DC/store payroll</li>
                </ul> */}
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