import { Link } from "react-router-dom";

const NavigationLogin = ({ path }) => {
  if (path === "/register") {
    return (
      <p className="text-center text-gray-600 text-xs mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center text-gray-600 text-xs mt-3">
        Don't already have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    );
  }
};

export default NavigationLogin;
