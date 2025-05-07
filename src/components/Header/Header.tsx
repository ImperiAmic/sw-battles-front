import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Star Wars Battles</h1>
      <img
        className="header-background"
        srcSet="/hyperspace-small.webp 320w, /hyperspace-big.webp 600w"
        sizes="(max-width: 400px) 320px, 600px"
        src="/hyperspace-small.webp"
        alt="Representation of when stars seem to elongate just as a ship begins to enter hyperspace"
        height={150}
        width={600}
      />
    </header>
  );
};

export default Header;
