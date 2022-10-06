import './Home.css';
import { Link } from 'react-scroll';
/** Home: displays homepage
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App --> Home
 */
export default function Home() {
  return (
    <div className="container-fluid name">
      <div className="row gy-5 justify-content-center">
        <div className="col">
          <h1 className="home-box-name">Brenda Liu</h1>
          <h3 className="home-box">I'm a full stack engineer.</h3>
        </div>
        {/* <div className='row gy-5 home-decor'></div>
        <div className='row gy-5 home-decor'></div> */}
        <div className='row gy-5 home-decor'>
          <Link activeClass="active" spy to="about-me">
            <i class="bi bi-caret-down-square-fill home-arrow" style={{fontSize: '5em'}}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}