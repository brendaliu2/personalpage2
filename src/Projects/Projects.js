import React, { useState, render } from 'react';
import Project from './Project';
import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import './Projects.css'

// function Projects() {
//   let projects = ['a', 'b', 'c'];

//   return (
//     <div className="projects-list">
//       <h1>Projects:</h1>
//       <ul>
//         {projects.map((p, i) => <li key={i}><Project p={p} /></li>)}
//       </ul>
//     </div>
//   );
// }

// export default Projects;




// function Projects() {

//   return (
//     <Carousel>
//         <div>
//             <img src="./images/photo1.jpeg" alt='photo1'/>
//             <p className="legend">Legend 1</p>
//         </div>
//         <div>
//             <img src="./images/photo2.jpeg" alt='photo2'/>
//             <p className="legend">Legend 2</p>
//         </div>
//         <div>
//             <img src="./images/photo3.jpeg" alt='photo3' />
//             <p className="legend">Legend 3</p>
//         </div>
//     </Carousel>
// );
// }

// render(<Projects />);
// export default Projects;



function Projects() {
  return (
    <div className='project-carousel'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1657299156271-d5a435dd65b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1664364052699-3ab8e576777b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1664369210144-90e51ddbbc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;