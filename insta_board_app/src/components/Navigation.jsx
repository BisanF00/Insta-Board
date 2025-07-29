import { NavLink } from "react-router-dom";
import "./styles/Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Team
        </NavLink>

        <NavLink
          to="/liked-users"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Liked Users
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          About
        </NavLink>
        
        <NavLink to="*" />
      </div>
    </>
  );
}
