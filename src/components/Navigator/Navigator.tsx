import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav>
      <ul className="navigator__list">
        <li>
          <NavLink
            className="navigator__link navigator__link--active"
            to="/battles"
          >
            Battles List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
