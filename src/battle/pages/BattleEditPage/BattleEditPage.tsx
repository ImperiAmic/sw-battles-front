import { useParams } from "react-router";
import { useEffect } from "react";
import BattleForm from "../../components/BattleForm/BattleForm";
import { useAppSelector } from "../../../store/hooks";
import type { BattleFormData } from "../../../types";
import useBattles from "../../hooks/useBattles";

const BattleEditPage: React.FC = () => {
  const { getBattleDetail, editBattle } = useBattles();

  const { battleId } = useParams<{ battleId: string }>();

  useEffect(() => {
    getBattleDetail(battleId!);
  }, [getBattleDetail, battleId]);

  const battle = useAppSelector((state) =>
    state.battlesInfoSlice.battlesInfo.battles.find(
      (battle) => battle.id === battleId,
    ),
  );

  if (battle) {
    const initialFormData: BattleFormData = {
      battleName: battle.battleName,
      conflict: battle.conflict,
      darkSide: battle.darkSide.join(", "),
      description: battle.description,
      doesLightSideWin: battle.doesLightSideWin,
      imageUrl: battle.imageUrl,
      lightSide: battle.lightSide.join(", "),
      period: battle.period,
      year: battle.year,
      id: battle.id,
    };

    return (
      <BattleForm
        isNewBattleForm={false}
        editBattle={editBattle}
        initialFormData={initialFormData}
      />
    );
  }
};

export default BattleEditPage;
