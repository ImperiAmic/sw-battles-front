import type { Battle } from "../../../types";
import BattleCard from "../BattleCard/BattleCard";
import "./BattlesList.css";

interface BattleListProps {
  battles: Battle[];
}

const BattlesList: React.FC<BattleListProps> = ({ battles }) => {
  return (
    <div className="battles-container">
      <ul className="battles">
        {battles.map((battle, index) => (
          <li key={battle.id}>
            <BattleCard battle={battle} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BattlesList;
