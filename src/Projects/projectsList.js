// import example from '../images/example.jpeg';
// import warbler from '../images/warbler.jpeg';
// import warbler2 from '../images/warbler2.jpeg';
// import blueberry from '../images/blueberry.jpeg';
// import jobly from '../images/jobly.jpeg';
// import personalsite from '../images/personalsite.jpeg';
import PixlyDemoGif from '../demos/PixlyDemoGif.gif';
import JoblyDemoGif from '../demos/JoblyDemoGif.gif';
import WarblerDemoGif from '../demos/WarblerDemoGif.gif';
import BlueberryDemoGif from '../demos/BlueberryDemoGif.gif';
import PersonalSiteDemoGif from '../demos/PersonalSiteDemoGif.gif';


const projects = [
  {
    name: "Pixly",
    deploy: "https://bjl-pixly.herokuapp.com/",
    github: "https://github.com/brendaliu2/Pixly",
    github2: "",
    description: "Photo Editing App with ability to upload photo, add filter (black/white, sepia, etc), and publish to page",
    builtWith: ["Flask", "Pillow Library", "AWS", "Jinja", "Bootstrap"],
    image: PixlyDemoGif,
    video: "PixlyDemo",
  },
  {
    name: "Jobly",
    deploy: "https://bjl-jobly-frontend.surge.sh/",
    github: "https://github.com/brendaliu2/Jobly-Frontend",
    github2: "https://github.com/brendaliu2/Jobly-Backend",
    description: "Job Searching Site with ability to search for companies and apply to jobs.",
    builtWith: ["React", "Express", "Node.js", "PostgreSQL", "JSON Schema", "bcrypt"],
    image: JoblyDemoGif,
    video: "JoblyDemo",
  },
  {
    name: "Warbler",
    deploy: "https://bjl-warbler.herokuapp.com/",
    github: "https://github.com/brendaliu2/warbler",
    github2: "",
    description: "Twitter Clone with ability to follow others, favorite posts, and add posts.",
    builtWith: ["Flask", "PostgreSQL", "SQL Alchemy", "Bootstrap", "Jinja", "WTForms", "bcrypt"],
    image: WarblerDemoGif,
    video: "WarblerDemo",
  },
  {
    name: "Blueberry Timer",
    deploy: "https://bjl-blueberry-timer.surge.sh/",
    github: "https://github.com/brendaliu2/blueberryTimer",
    github2: "",
    description: "Pomodoro Timer Clone with ability to pause/reset timers, and choose own minutes 1-59 to set.",
    builtWith: ["React", "CSS"],
    image: BlueberryDemoGif,
    video: "BlueberryDemo",
  },
  {
    name: "Personal Site",
    deploy: "https://bjl-personal-site.surge.sh/",
    github: "https://github.com/brendaliu2/personalpage2",
    github2: "",
    description: "This current site",
    builtWith: ["React", "Bootstrap", "CSS"],
    image: PersonalSiteDemoGif,
    video: "PersonalSiteDemo",
  },
];

export default projects;