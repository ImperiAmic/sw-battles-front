import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useBattles from "../../hooks/useBattles";
import "./BattlesPage.css";

const BattlesPage: React.FC = () => {
  const { battles, battlesTotal, loadBattlesInfo } = useBattles();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  useEffect(() => {
    loadBattlesInfo(page);
  }, [loadBattlesInfo, page]);

  return (
    <div className="battles-container">
      <header className="page-info">
        <h2 className="page-info__title">Your battles collection!</h2>
        <span className="page-info__details">
          Showing: {battles.length} of {battlesTotal} battles
        </span>
      </header>
    </div>
  );
};

export default BattlesPage;
