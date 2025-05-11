import { useCallback, useMemo } from "react";
import BattleClient from "../client/BattleClient";
import { loadBattlesActionCreator } from "../slice/battleSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useBattles = () => {
  const battles = useAppSelector((state) => state.battlesReducer.battles);

  const dispatch = useAppDispatch();

  const battleClient = useMemo(() => new BattleClient(), []);

  const loadBattlesInfo = useCallback(
    async (page?: number): Promise<void> => {
      const apiBattlesInfo = await battleClient.getBattlesInfo(page);

      const action = loadBattlesActionCreator(apiBattlesInfo);

      dispatch(action);
    },
    [battleClient, dispatch],
  );
  return { battles, loadBattlesInfo };
};

export default useBattles;
