// import 'ContactMe.css';

/** ContactIcon: displays contact icon
 *
 * Props:
 * - link
 * - icon
 * - msg
 * - cls
 *
 * State:
 * - none
 *
 * ContactMe -> ContactIcon
 */
export default function ContactIcon({ link, icon, msg }) {
  return (
    <>
        <a href={link} target="_blank" rel='noreferrer' className='contact-link hover'>
          <i className={icon}></i>
          <p className='hover-msg'>{msg}</p>
        </a>
    </>

  );
}