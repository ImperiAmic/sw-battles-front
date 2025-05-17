import { useCallback, useMemo } from "react";
import BattleClient from "../client/BattleClient";
import type { UseBattlesStructure } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getBattlesInfoActionCreator,
  toggleBattleWinnerActionCreator,
} from "../slice/battlesSlice";

const useBattles = (): UseBattlesStructure => {
  const isLoading = useAppSelector(
    (state) => state.battlesInfoStateData.isLoading,
  );

  const battlesInfo = useAppSelector(
    (state) => state.battlesInfoStateData.battlesInfo,
  );

  const dispatch = useAppDispatch();

  const battleClient = useMemo(() => new BattleClient(), []);

  const getBattlesInfo = useCallback(
    async (page?: number): Promise<void> => {
      const apiBattlesInfo = await battleClient.getBattlesInfo(page);

      const battlesInfo = getBattlesInfoActionCreator(apiBattlesInfo);

      dispatch(battlesInfo);
    },
    [battleClient, dispatch],
  );

  const toggleBattleWinner = async (battleId: string): Promise<void> => {
    const apiToggleBattleWinner =
      await battleClient.toggleBattleWinner(battleId);

    const battle = toggleBattleWinnerActionCreator(apiToggleBattleWinner);

    dispatch(battle);
  };

  return { isLoading, battlesInfo, getBattlesInfo, toggleBattleWinner };
};

export default useBattles;
