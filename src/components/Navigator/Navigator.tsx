import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav>
      <ul className="navigator__list">
        <li>
          <a className="navigator__link navigator__link--active" href="/">
            Battles List
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
