// import image1 from "./image1.jpg";
// import image2 from "./image2.jpg";
// import image3 from "./image3.jpg";
import joblyImage from './jobly-photo.jpg'

// const photos = [
//   {
//     src: image1,
//     caption: "Photo by Richard Pasquarella on Unsplash"
//   },
//   {
//     src: image2,
//     caption: "Photo by Pratik Patel on Unsplash"
//   },
//   {
//     src: image3,
//     caption: "Photo by Josh Post on Unsplash"
//   }
// ];

// export default photos;

const projects = [
  {
    name: "Pixly",
    deploy: "",
    github: "https://github.com/brendaliu2/Pixly",
    github2: "",
    description: "Photo Editing App",
    builtWith: ["Flask", "Jinja", "Bootstrap"],
    image: "",
  },
  {
    name: "Jobly",
    deploy: "https://bjl-jobly-frontend.surge.sh/",
    github: "https://github.com/brendaliu2/Jobly-Frontend",
    github2: "https://github.com/brendaliu2/Jobly-Backend",
    description: "Job Searching Site",
    builtWith: ["React", "Express", "Node.js", "Bootstrap", "PostgreSQL", "JSON Schema", "JSON Web Token", "bcrypt"],
    image: {joblyImage},
  },
  {
    name: "Warbler",
    deploy: "https://bjl-warbler.herokuapp.com/",
    github: "https://github.com/brendaliu2/warbler",
    github2: "",
    description: "Twitter Clone",
    builtWith: ["Flask", "PostgreSQL", "SQL Alchemy", "Bootstrap", "Jinja", "WTForms", "bcrypt"],
    image: "",
  },
]

export default projects;