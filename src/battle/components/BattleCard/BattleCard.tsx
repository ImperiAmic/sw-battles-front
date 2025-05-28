import { Link } from "react-router";
import Button from "../../../ui/components/Button/Button";
import useBattles from "../../hooks/useBattles";
import type { Battle } from "../../types";
import "./BattleCard.css";

interface BattleCardProps {
  battle: Battle;
  index: number;
}

const BattleCard: React.FC<BattleCardProps> = ({
  battle: {
    imageUrl,
    imageAlt,
    battleName,
    year,
    period,
    conflict,
    lightSide,
    darkSide,
    doesLightSideWin,
    id,
  },
  index,
}) => {
  const { toggleBattleWinner, deleteBattle } = useBattles();

  const winner = doesLightSideWin ? "images/rebels.svg" : "images/empire.svg";
  const winnerAlt = doesLightSideWin ? "Rebel icon" : "Empire icon";
  const imageLoading = index <= 1 ? "eager" : "lazy";

  return (
    <article className="battle">
      <header className="battle-header">
        <img
          className="battle__image"
          src={imageUrl}
          alt={imageAlt}
          height={225}
          width={560}
          loading={imageLoading}
        />
        <h3 className="battle__title">{battleName}</h3>
        <Button
          aria-label="Change battle winner"
          onClick={() => toggleBattleWinner(id)}
        >
          <img
            className="battle__winner"
            src={winner}
            alt={winnerAlt}
            height={30}
            width={30}
          />
        </Button>
      </header>
      <div className="battle__details">
        <div className="battle__info">
          <span className="battle__age">{`${year} ${period}`}</span>
          <span className="battle__conflict">{conflict}</span>
        </div>
        <div className="battle__combatants">
          <span>{lightSide.join(", ")}</span>
          <span>vs.</span>
          <span>{darkSide.join(", ")}</span>
        </div>
        <footer className="battle__footer">
          <div className="battle__actions">
            <Link
              aria-label="More information"
              className="battle-link"
              to={`/battle/${id}`}
            >
              +info
            </Link>
            <Link
              aria-label="Edit battle"
              className="battle-link"
              to={`/edit-battle/${id}`}
            >
              edit
            </Link>
          </div>
          <Button aria-label="Delete battle" onClick={() => deleteBattle(id)}>
            <img
              className="battle__delete"
              src="images/delete.svg"
              alt=""
              height={30}
              width={30}
            />
          </Button>
        </footer>
      </div>
    </article>
  );
};

export default BattleCard;
