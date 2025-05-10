import "./BattlesPage.css";

const BattlesPage: React.FC = () => {
  return (
    <div className="battles-container">
      <header className="page-info">
        <h2 className="page-info__title">Your battles collection!</h2>
        <span className="page-info__details">Showing: 6 of 15 battles</span>
      </header>
    </div>
  );
};

export default BattlesPage;
