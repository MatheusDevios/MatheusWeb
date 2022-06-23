import { Outlet, Link } from "react-router-dom";
import AnimatedPages from "../components/AnimatedPages";
export default function Project5() {
  return (
    <AnimatedPages>
      <div>
        <h2>Project 5</h2>
        <Link to="/" className='btn btn-primary' >Back</Link>
      </div>
      <Outlet />
    </AnimatedPages>
  );
}