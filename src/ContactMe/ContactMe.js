import './ContactMe.css';
import ContactIcon from './ContactIcon';

/** ContactMe: displays contact links
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> ContactMe -> ContactIcon
 */
export default function ContactMe({ contacts }) {
  const { github, linkedin, resume } = contacts;

  return (
    <div className="container">
      <div className="row m-5">
        <div className='col'></div>
        <div className='col-md-5'>
          <h2 className="p-3 contact-title">Contact me</h2>
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
          <ContactIcon
          link={resume.link}
          icon={resume.icon}
          msg={resume.msg}
          />
        </div>

        <div className="col github-link">
          <ContactIcon
          link={github.link}
          icon={github.icon}
          msg={github.msg}
          />
        </div>

        <div className="col linkedin-link">
          <ContactIcon
          link={linkedin.link}
          icon={linkedin.icon}
          msg={linkedin.msg}
          />
        </div>
        <div className='col-md-3'></div>
      </div>

    </div>
  );
}