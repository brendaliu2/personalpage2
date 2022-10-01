import ResumePic from '../images/resume.jpg';
import './Resume.css';

function Resume() {
  return (
    <div id='resume'>
      <h1>Resume</h1>
      <img src={ResumePic} alt='resume' id='resume' />
    </div>
  );
}

export default Resume;