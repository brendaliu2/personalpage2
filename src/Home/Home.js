import './Home.css';
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col name">
          <h1 className="home-box-name">Brenda Liu</h1>
          <h3 className="home-box">I'm a full stack engineer.</h3>
        </div>
        <div className='row home-decor'></div>
      </div>
    </div>
  );
}