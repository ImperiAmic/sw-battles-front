import type { Battle } from "../../../types";
import "./BattleCard.css";

interface BattleCardProps {
  battle: Battle;
}

const BattleCard: React.FC<BattleCardProps> = ({ battle }) => {
  const winner = battle.doesLightSideWin
    ? "images/rebels.svg"
    : "images/empire.svg";

  const winnerAlt = battle.doesLightSideWin ? "Rebel icon" : "Empire icon";

  return (
    <div className="battle">
      <header className="battle-header">
        <img
          className="battle__image"
          src={battle.imageUrl}
          alt={battle.imageAlt}
        />
        <h3 className="battle__title">{battle.name}</h3>
        <img className="battle__winner" src={winner} alt={winnerAlt} />
      </header>
      <div className="battle__details">
        <div className="battle__info">
          <span className="battle__age">{`${battle.year} ${battle.period}`}</span>
          <span className="battle__conflict">{battle.conflict}</span>
        </div>
        <div className="battle__combatants">
          <span>{battle.lightSide.join(", ")}</span>
          <span>vs.</span>
          <span>{battle.darkSide.join(", ")}</span>
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
          />
        </footer>
      </div>
    </div>
  );
};

export default BattleCard;
