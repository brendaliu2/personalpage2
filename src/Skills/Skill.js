import './Skill.css';

function Skill({ detail }) {
  const { name, icon } = detail;

  return (
    <>
      <div className='col'>
        <span>{name}</span>
        <i class={icon}></i>
      </div>
      {/* <div className='col'>
      </div> */}
    </>
  );
}

export default Skill;