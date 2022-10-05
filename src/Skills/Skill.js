import './Skill.css';

function Skill({ detail }) {
  const { name, icon } = detail;

  return (
    <>
      <i class={icon}></i>
      <p className='skill-name'>{name}</p>
    </>
  );
}

export default Skill;