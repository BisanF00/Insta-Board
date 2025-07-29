import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import { BiError } from "react-icons/bi";
import { IoArrowBackSharp } from "react-icons/io5";

export default function NotFound() {
  return (
      <div className="notFoundContainer">
        <h1 className="error"><BiError /> 404</h1>
        <p className="pageNotFound">
          Oops! The page you're looking for does not exist
        </p>
        <Link to="/"><IoArrowBackSharp /> Back To Home</Link>
      </div>
  );
}
