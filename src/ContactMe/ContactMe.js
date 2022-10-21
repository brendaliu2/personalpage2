import './ContactMe.css';
/** ContactMe: displays contact links
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> ContactMe
 */
export default function ContactMe({ contacts }) {
  const { github, linkedin, resume } = contacts;

  return (
    <div className="container">
      <div className="row m-5">
        <div className='col'></div>
        <div className='col-md-5'>
          <h1 className="p-3 contact-title">Contact me</h1>
        </div>
        <div className='col'></div>
      </div>

      <div className="row m-5">
        <div className='col'></div>
        <div className='col'></div>
      </div>

      <div className="row">
        <div className='col-md-3'></div>
        <div className="col resume-link">
          <a href={resume} download target="_blank" rel='noreferrer' className='contact-link hover'>
            <i className="bi bi-file-earmark-person"></i>
            <p className='hover-msg'>Download Resume</p>
          </a>
        </div>

        <div className="col github-link">
          <a href={github} target="_blank" rel='noreferrer' className='contact-link hover'>
            <i className="bi bi-github"></i>
            <p className='hover-msg'>Github</p>
          </a>
        </div>

        <div className="col linkedin-link">
          <a href={linkedin} target="_blank" rel='noreferrer' className='contact-link hover'>
            <i className="bi bi-linkedin"></i>
            <p className='hover-msg'>LinkedIn</p>
          </a>
        </div>
        <div className='col-md-3'></div>
      </div>

    </div>
  );
}