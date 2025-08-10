import { NavLink } from "react-router-dom";

import frontRoutes from "../routes/frontRoutes";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-items">
          <li  className="nav-item">
            <NavLink
              to={frontRoutes.navigate.home}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li  className="nav-item">
            <NavLink
              to={frontRoutes.navigate.teachers.index}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Teachers
            </NavLink>
          </li>
          <li  className="nav-item">
            <NavLink
              to={frontRoutes.navigate.meeting}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Meeting
            </NavLink>
          </li>
          <li  className="nav-item">
            <NavLink
              to={frontRoutes.navigate.aboutApp}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About app
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={frontRoutes.navigate.aboutDev}
              className={`({ isActive }) => (isActive ? "nav-item-active" "active" : "")`}
            >
              About developper
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
