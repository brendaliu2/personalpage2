/** Project Bar: displays curr project dot.
 *
 * Props:
 * - currNum: integer for what project we're on
 * - totalNum: integer for how many projects are in the collection
 *
 * State:
 * - none
 *
 * App --> Projects --> Project --> ProjectBar
 */
export default function ProjectBar({ currNum, totalNum }) {
  const circles = new Array(totalNum).fill(0);
  circles.map((c,i) => i === currNum-1 ? circles[i] = 1 : circles[i] = 0)
  const classNames = [];
  for (let circle of circles) {
    if (!circle){
      classNames.push('bi bi-circle');
    } else {
      classNames.push('bi bi-circle-fill');
    }
  }
  return (
    <div className="row align-items-center">
      <div className="col justify-content-center">
        <small className="Card-small">
          {classNames.map((c,i) => <i key={i} className={c}></i>)}
        </small>
      </div>
    </div>
  );

}