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
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="home-box-name">Brenda Liu</h1>
            <h3 className="home-box">I'm a full stack engineer.</h3>
          </div>
        </div>
      </div>
  );
}

export default Home;