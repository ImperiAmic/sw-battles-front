import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router";
import useBattles from "../../hooks/useBattles";
import useLoading from "../../../hooks/useLoading";
import { useAppSelector } from "../../../store/hooks";
import Loader from "../../../ui/components/Loader/Loader";
import Button from "../../../ui/components/Button/Button";
import "./BattleDetailPage.css";

const BattleDetailPage: React.FC = () => {
  const { getBattleDetail, toggleBattleWinner } = useBattles();

  const {
    loadingState: { isLoading },
  } = useLoading();

  const { battleId } = useParams<{ battleId: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    getBattleDetail(battleId!);
  }, [getBattleDetail, battleId]);

  const battle = useAppSelector((state) =>
    state.battlesInfoSlice.battlesInfo.battles.find(
      (battle) => battle.id === battleId,
    ),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!battle) {
    return <Navigate to={"/"} />;
  }

  const winnerClaim = battle.doesLightSideWin
    ? "Winner? The Light Side!"
    : "Winner? The Dark Side...";

  const winnerIcon = battle.doesLightSideWin
    ? "/images/rebels.svg"
    : "/images/empire.svg";

  const winnerAlt = battle.doesLightSideWin ? "Rebel icon" : "Empire icon";

  return (
    <article className="battle-detail">
      <img
        className="battle-detail__image"
        src={battle.imageUrl}
        alt={battle.imageAlt}
        height={225}
        width={560}
      />
      <div className="battle-detail-container">
        <header className="battle-detail-header">
          <h2 className="battle-detail__title">{battle.battleName}</h2>
          <div className="battle-detail__info">
            <span>{`${battle.year} ${battle.period}`}</span>
            <span>{battle.conflict}</span>
          </div>
        </header>
        <div className="combatants-detail">
          <p>
            <span className="combatant-detail">Light Side</span>
            {`: ${battle.lightSide.join(", ")}`}
          </p>
          <span>vs.</span>
          <p>
            <span className="combatant-detail">Dark Side</span>
            {`: ${battle.darkSide.join(", ")}`}
          </p>
        </div>
        <p className="battle-detail__description">{battle.description}</p>
        <div className="battle-detail-winner">
          <span>{winnerClaim}</span>
          <Button
            aria-label="Change battle winner"
            onClick={() => toggleBattleWinner(battle.id)}
          >
            <img
              className="winner-detail__icon"
              src={winnerIcon}
              alt={winnerAlt}
              height={66}
              width={66}
            />
          </Button>
        </div>
        <Link
          aria-label="Update information"
          className="battle-detail-update"
          to={`/edit-battle/${battle.id}`}
        >
          Update this battle
        </Link>
      </div>
    </article>
  );
};

export default BattleDetailPage;
