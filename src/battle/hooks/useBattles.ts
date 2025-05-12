import { useCallback, useMemo } from "react";
import BattleClient from "../client/BattleClient";
import { loadBattlesActionCreator } from "../slice/battlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadBattlesTotalActionCreator } from "../slice/battlesTotalSlice";

const useBattles = () => {
  const battles = useAppSelector((state) => state.battlesReducer.battles);

  const battlesTotal = useAppSelector(
    (state) => state.battlesTotalReducer.battlesTotal,
  );

  const dispatch = useAppDispatch();

  const battleClient = useMemo(() => new BattleClient(), []);

  const loadBattlesInfo = useCallback(
    async (page?: number): Promise<void> => {
      const apiBattlesInfo = await battleClient.getBattlesInfo(page);

      const battlesAction = loadBattlesActionCreator(apiBattlesInfo.battles);
      const battlesTotalAction = loadBattlesTotalActionCreator(
        apiBattlesInfo.battlesTotal,
      );

      dispatch(battlesAction);
      dispatch(battlesTotalAction);
    },
    [battleClient, dispatch],
  );
  return { battles, battlesTotal, loadBattlesInfo };
};

export default useBattles;
