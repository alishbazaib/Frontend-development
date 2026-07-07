import { NavLink } from "react-router-dom";

function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      

      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Overview
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Inventory
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;