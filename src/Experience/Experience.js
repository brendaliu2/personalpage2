import BrendaResume from '../images/Brenda-Liu-Resume.pdf';
import './Experience.css';

function Experience() {
  return (
    // <div id='resume' className='container'>

    // <div className='row'>
    //   <div className='col'>
    //     <a href={BrendaResume} download className='btn btn-secondary download'> Download Resume </a>
    //   </div>
    // </div>

    //   <div className='row mt-5'>
    //     <div className='col'>
    //       <h3 className='mb-5'>Technical Experience</h3>
    //       <p className='company mt-0'>
    //         Software Engineer Intern
    //         <br />
    //         <i>Foqal</i>
    //         <br />
    //         <ul>
    // <li className='job-details'>Designed and implemented un-read feature for tickets</li>
    // <li className='job-details'>Presented intermediate TypeScript topics to team</li>
    // <li className='job-details'>Played planning poker to calculate team velocity</li>
    //         </ul>
    //       </p>
    //     </div>

    //     <div className='col'>
    //       <h3 className='mb-5'>Prior Experience</h3>
    //       <ul>
    //         <p className='company'>
    //           Assistant Merchandise Planner
    //           <br />
    //           <i>J.Crew</i>
    //           <br />
    // <li className='job-details'>Created preseason sales, margin, and inventory plans for each style by department</li>
    // <li className='job-details'>Analyzed previous quarter results and identify missed sales and growth drivers from previous seasons</li>
    // <li className='job-details'>Decided markdown and promotional strategies to maximize profitability on the life of an item</li>
    //         </p>
    //         <p className='company'>
    //           Distribution Analyst
    //           <br />
    //           <i>J.Crew</i>
    //           <br />
    // <li className='job-details'>Executed allocation and replenishment for 167 stores nationwide managed through demand forecasting</li>
    // <li className='job-details'>Ensured receipt accuracy to support in-season allocation strategies</li>
    // <li className='job-details'>Forecasted inbound/outbound inventory to drive in-stock to manage DC/store payroll</li>
    //         </p>
    //         <p className='company'>
    //           Sales Operation Analyst
    //           <br />
    //           <i>Marc Jacobs</i>
    //           <br />
    // <li className='job-details'>Designed reports, excel programming, and analysis templates to support allocation and planning team</li>
    // <li className='job-details'>Tracked global inventory deliveries and partner with Production, Logistics, and Warehousing teams to propose global seasonal launch dates and mitigate any potential fulfillment risks</li>
    // <li className='job-details'>Forecasted inbound/outbound inventory to drive in-stock to manage DC/store payroll</li>
    //         </p>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <section className='timeline-test'>
      <div className='row'>
        <div className='col'>
          <a href={BrendaResume} download className='btn btn-secondary download'> Download Resume </a>
        </div>
      </div>
      <div className="container py-5">
        <div className="main-timeline">
          <div className="timeline left">
            <div className="card">
              <div className="card-body p-4">
                <h4 className='job'>Software Engineer Intern</h4>
                <h5 className='company'><i>Foqal</i></h5>
                <p className="mb-0 text-left">
                  <li className='job-details'>Designed and implemented un-read feature for tickets</li>
                  <li className='job-details'>Presented intermediate TypeScript topics to team</li>
                  <li className='job-details'>Played planning poker to calculate team velocity</li>
                </p>
              </div>
            </div>
              {/* <div className='time'>Company Name Time</div> */}
          </div>
          <div className="timeline right">
            <div className="card">
              <div className="card-body p-4">
                <h4 className='job'>Assistant Merchandise Planner</h4>
                <h5 className='company'><i>J.Crew</i></h5>
                <p className="mb-0 text-left">
                  <li className='job-details'>Created preseason sales, margin, and inventory plans for each style by department</li>
                  <li className='job-details'>Analyzed previous quarter results and identify missed sales and growth drivers from previous seasons</li>
                  <li className='job-details'>Decided markdown and promotional strategies to maximize profitability on the life of an item</li>
                </p>
              </div>
            </div>
          </div>
          <div className="timeline left">
            <div className="card">
              <div className="card-body p-4">
                <h3 className='job'>Distribution Planner</h3>
                <h5 className='company'><i>J.Crew</i></h5>
                <p className="mb-0 text-left">
                  <li className='job-details'>Executed allocation and replenishment for 167 stores nationwide managed through demand forecasting</li>
                  <li className='job-details'>Ensured receipt accuracy to support in-season allocation strategies</li>
                  <li className='job-details'>Forecasted inbound/outbound inventory to drive in-stock to manage DC/store payroll</li>
                </p>
              </div>
            </div>
          </div>
          <div className="timeline right">
            <div className="card">
              <div className="card-body p-4">
                <h3 className='job'>Sales Operations Analyst</h3>
                <h5 className='company'><i>Marc Jacobs</i></h5>
                <p className="mb-0 text-left">
                  <li className='job-details'>Designed reports, excel programming, and analysis templates to support allocation and planning team</li>
                  <li className='job-details'>Tracked global inventory deliveries and partner with Production, Logistics, and Warehousing teams to propose global seasonal launch dates and mitigate any potential fulfillment risks</li>
                  <li className='job-details'>Forecasted inbound/outbound inventory to drive in-stock to manage DC/store payroll</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Experience;