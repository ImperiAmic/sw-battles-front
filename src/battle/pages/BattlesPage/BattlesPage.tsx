import "./BattlesPage.css";

const BattlesPage: React.FC = () => {
  return (
    <div className="battles-container">
      <header className="page-info">
        <h2 className="page-info__title">Your battles collection!</h2>
        <span className="page-info__details">Showing: 0 of 0 battles</span>
      </header>
    </div>
  );
};

export default BattlesPage;
