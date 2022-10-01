import Skill from './Skill'

function Skills(){
  let skills = [1,2,3];

  return(
    <div>
      <ul>
        {skills.map((s,i) => <li key={i}><Skill s={s} /></li>)}
      </ul>
    </div>
  )
}

export default Skills;