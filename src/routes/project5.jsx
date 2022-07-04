import { Outlet, Link } from "react-router-dom";
import AnimatedPages from "../components/AnimatedPages";
export default function Project5() {
  return (
    <AnimatedPages>
      <div>
        <h1>Login/Sign Up Authentication and Security</h1>
        <h3>Page yet to be modified.</h3>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
      <Outlet />
    </AnimatedPages>
  );
}
