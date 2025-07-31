import { NavLink } from "react-router-dom";
import frontRoutes from "../routes/frontRoutes";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="list">
          <NavLink
            to={frontRoutes.pages.home}
            end
            className={({ isActive }) =>
              `item ${isActive ? "item--active" : ""}`
            }
          >
            Головна
          </NavLink>
          <NavLink
            to={frontRoutes.pages.products.index}
            className={({ isActive }) =>
              `item ${isActive ? "item--active" : ""}`
            }
          >
            Магазин
          </NavLink>
          <NavLink
            to={frontRoutes.pages.pay}
            end
            className={({ isActive }) =>
              `item ${isActive ? "item--active" : ""}`
            }
          >
            Правила оплати оплати
          </NavLink>
          <NavLink
            to={frontRoutes.pages.contacts}
            end
            className={({ isActive }) =>
              `item ${isActive ? "item--active" : ""}`
            }
          >
            Контакти
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
