import Navigator from "../Navigator/Navigator";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Star Wars Battles</h1>
      <img
        className="header-background"
        src="/images/hyperspace.webp"
        alt=""
        height={150}
        width={600}
      />
      <Navigator />
    </header>
  );
};

export default Header;
