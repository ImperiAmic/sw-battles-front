import { useCallback, useMemo, useState } from "react";
import type { BattleContextStructure } from "../context/types";
import type { BattlesInfo } from "../../types";
import BattleClient from "../client/BattleClient";

const useBattles = (): BattleContextStructure => {
  const [battlesInfo, setBattlesInfo] = useState<BattlesInfo>({
    battles: [],
    battlesTotal: 0,
  });

  const battleClient = useMemo(() => new BattleClient(), []);

  const loadBattlesInfo = useCallback(
    async (page?: number): Promise<void> => {
      const apiBattlesInfo = await battleClient.getBattlesInfo(page);

      setBattlesInfo(apiBattlesInfo);
    },
    [battleClient],
  );
  return { ...battlesInfo, loadBattlesInfo };
};

export default useBattles;
