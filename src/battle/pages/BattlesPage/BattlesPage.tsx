import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useBattles from "../../hooks/useBattles";
import Loader from "../../../ui/components/Loader/Loader";
import Paginator from "../../../ui/components/Paginator/Paginator";
import BattlesList from "../../components/BattlesList/BattlesList";
import useLoading from "../../../hooks/useLoading";
import "./BattlesPage.css";

const BattlesPage: React.FC = () => {
  const {
    battlesInfo: { battles, battlesTotal },
    getBattlesInfo,
  } = useBattles();

  const {
    loadingState: { isLoading },
  } = useLoading();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    getBattlesInfo(page);
  }, [getBattlesInfo, page]);

  if (isLoading) {
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
