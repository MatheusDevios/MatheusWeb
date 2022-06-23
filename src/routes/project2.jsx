import { Outlet, Link } from "react-router-dom";
import AnimatedPages from "../components/AnimatedPages";
export default function Project2() {
  return (
    <AnimatedPages>
      <div>
        <h2>Project 2</h2>
        <Link to="/" className='btn btn-primary' >Back</Link>
      </div>
      <Outlet />
    </AnimatedPages>
  );
}