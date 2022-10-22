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
        <a href={link} aria-label={msg} target="_blank" rel='noreferrer' className='contact-link hover'>
          <i className={icon}></i>
          <p aria-label={msg} className='hover-msg'>{msg}</p>
        </a>
    </>

  );
}