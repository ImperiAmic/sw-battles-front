import type { Battle } from "../../../types";
import "./BattleCard.css";

interface BattleCardProps {
  battle: Battle;
  index: number;
}

const BattleCard: React.FC<BattleCardProps> = ({
  battle: {
    imageUrl,
    imageAlt,
    name,
    year,
    period,
    conflict,
    lightSide,
    darkSide,
    doesLightSideWin,
  },
  index,
}) => {
  const winner = doesLightSideWin ? "images/rebels.svg" : "images/empire.svg";

  const winnerAlt = doesLightSideWin ? "Rebel icon" : "Empire icon";

  const imageLoading = index <= 1 ? "eager" : "lazy";

  return (
    <div className="battle">
      <header className="battle-header">
        <img
          className="battle__image"
          src={imageUrl}
          alt={imageAlt}
          height={225}
          width={560}
          loading={imageLoading}
        />
        <h3 className="battle__title">{name}</h3>
        <img
          className="battle__winner"
          src={winner}
          alt={winnerAlt}
          height={30}
          width={30}
        />
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
            <button className="button" type="button">
              +info
            </button>
            <button className="button" type="button">
              update
            </button>
          </div>
          <img
            className="battle__delete"
            src="images/delete.svg"
            alt="Delete icon"
            height={30}
            width={30}
          />
        </footer>
      </div>
    </div>
  );
};

export default BattleCard;
