import './Home.css'
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
function Home() {
  return (
      <div className="container home-box">
        <div className="row text-right">
          <div className="col text-right">
            <h1 className="home-box">Brenda Liu</h1>
            <h3>I'm a full stack engineer.</h3>
          </div>
        </div>
      </div>
  );
}

export default Home;