import './Skill.css';

/** Skill
 *
 * Props:
 * - detail {name, icon}
 *
 * State:
 * - none
 *
 * App --> Skill --> Skill
 */
export default function Skill({ detail }) {
  const { name, icon } = detail;

  return (
    <>
      <i className={icon}></i>
      <p className='skill-name'>{name}</p>
    </>
  );
}