import { useEffect } from "react";
import BattleForm from "../../components/BattleForm/BattleForm";
import useBattles from "../../hooks/useBattles";
import { useParams } from "react-router";
import { useAppSelector } from "../../../store/hooks";
import type { BattleFormData } from "../../../types";

const BattleUpdatePage: React.FC = () => {
  const { getBattleDetail } = useBattles();

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
    };

    return (
      <BattleForm
        isNewBattleForm={false}
        updateBattle={() => {}}
        initialFormData={initialFormData}
      />
    );
  }
};

export default BattleUpdatePage;
