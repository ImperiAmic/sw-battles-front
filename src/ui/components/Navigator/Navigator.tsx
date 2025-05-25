import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav>
      <ul className="navigator__list">
        <li>
          <NavLink className="navigator__link" to="/battles">
            Battles List
          </NavLink>
        </li>
        <li>
          <NavLink className="navigator__link" to="/add-battle">
            Add Battle
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
