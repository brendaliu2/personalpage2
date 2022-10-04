import './Skill.css'

function Skill({ detail }) {
  const {name, icon} = detail;

  return (
    <div>
      <p>{name}</p>
      <i class={icon}></i>
    </div>
  );
}

export default Skill;