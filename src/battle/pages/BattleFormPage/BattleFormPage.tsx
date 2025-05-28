import type { BattleFormData } from "../../types";
import BattleForm from "../../components/BattleForm/BattleForm";
import useBattles from "../../hooks/useBattles";

const BattleFormPage: React.FC = () => {
  const { addBattle } = useBattles();

  const initialFormData: BattleFormData = {
    battleName: "",
    conflict: "",
    darkSide: "",
    description: "",
    doesLightSideWin: false,
    imageUrl: "",
    lightSide: "",
    period: "",
    year: 0,
  };

  return (
    <BattleForm
      isNewBattleForm={true}
      addBattle={addBattle}
      initialFormData={initialFormData}
    />
  );
};

export default BattleFormPage;
