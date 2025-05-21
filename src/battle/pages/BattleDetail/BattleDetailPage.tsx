import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import useBattles from "../../hooks/useBattles";
import "./BattleDetailPage.css";
import Button from "../../../components/Button/Button";

const BattleDetailPage: React.FC = () => {
  const { getBattleDetail, toggleBattleWinner } = useBattles();

  const { battleId } = useParams<{ battleId: string }>();

  useEffect(() => {
    getBattleDetail(battleId!);
  }, [getBattleDetail, battleId]);

  const battle = useAppSelector((state) =>
    state.battlesInfoSlice.battlesInfo.battles.find(
      (battle) => battle.id === battleId,
    ),
  );

  if (!battle) {
    return (
      <div className="battle-error">
        <span>The Force may be with you...</span>
        <span>{`But not this battle ${`¯\\_(ツ)_/¯`}`}</span>
      </div>
    );
  }

  const winnerClaim = battle.doesLightSideWin
    ? "Winner? The Light Side!"
    : "Winner? The Dark Side...";

  const winnerIcon = battle.doesLightSideWin
    ? "/images/rebels.svg"
    : "/images/empire.svg";

  return (
    <main className="battle">
      <img
        className="battle__image"
        src={battle.imageUrl}
        alt={battle.imageAlt}
        height={225}
        width={560}
      />
      <div className="battle-container">
        <header className="battle-header">
          <h2 className="battle__title">{battle.battleName}</h2>
          <div className="battle__info">
            <span>{`${battle.year} ${battle.period}`}</span>
            <span>{battle.conflict}</span>
          </div>
        </header>
        <div className="combatants">
          <p>
            <span className="combatant">Light Side</span>
            {`: ${battle.lightSide.join(", ")}`}
          </p>
          <span>vs.</span>
          <p>
            <span className="combatant">Dark Side</span>
            {`: ${battle.darkSide.join(", ")}`}
          </p>
        </div>
        <p className="battle__description">{battle.description}</p>
        <div className="battle-winner">
          <span>{winnerClaim}</span>
          <Button
            aria-label="Change battle winner"
            onClick={() => toggleBattleWinner(battle.id)}
          >
            <img
              className="winner-icon"
              src={winnerIcon}
              height={66}
              width={66}
            />
          </Button>
        </div>
        <Link aria-label="Update information" className="battle-update" to={""}>
          Update this battle
        </Link>
      </div>
    </main>
  );
};

export default BattleDetailPage;
