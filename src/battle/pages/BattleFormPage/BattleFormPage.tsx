import BattleForm from "../../components/BattleForm/BattleForm";
import useBattles from "../../hooks/useBattles";

const BattleFormPage: React.FC = () => {
  const { addBattle } = useBattles();

  return <BattleForm action={addBattle} />;
};

export default BattleFormPage;
