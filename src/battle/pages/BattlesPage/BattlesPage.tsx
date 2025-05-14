import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useBattles from "../../hooks/useBattles";
import Loader from "../../../components/Loader/Loader";
import BattlesList from "../../components/BattlesList/BattlesList";
import "./BattlesPage.css";
import Paginator from "../../../components/Paginator/Paginator";

const BattlesPage: React.FC = () => {
  const { battles, battlesTotal, loadBattlesInfo } = useBattles();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    loadBattlesInfo(page);
  }, [loadBattlesInfo, page]);

  if (battles.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <header className="page-info">
        <h2 className="page-info__title">Your battles collection!</h2>
        <span className="page-info__details">
          Showing: {battles.length} of {battlesTotal} battles
        </span>
      </header>
      <BattlesList battles={battles} />
      <Paginator page={page} battlesTotal={battlesTotal} />
    </>
  );
};

export default BattlesPage;
