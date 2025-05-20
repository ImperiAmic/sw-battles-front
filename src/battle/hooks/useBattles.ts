import { useCallback, useMemo } from "react";
import BattleClient from "../client/BattleClient";
import type { UseBattlesStructure } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteBattleActionCreator,
  getBattlesInfoActionCreator,
  toggleBattleWinnerActionCreator,
} from "../slice/battlesSlice";
import useModal from "../../hooks/useModal";
import useLoading from "../../hooks/useLoading";

const useBattles = (): UseBattlesStructure => {
  const { startLoading, endLoading } = useLoading();
  const { showModal } = useModal();

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
      startLoading();

      const apiBattlesInfo = await battleClient.getBattlesInfo(page);

      const battlesInfo = getBattlesInfoActionCreator(apiBattlesInfo);

      dispatch(battlesInfo);

      endLoading();
    },
    [battleClient, dispatch, startLoading, endLoading],
  );

  const toggleBattleWinner = async (battleId: string): Promise<void> => {
    const apiToggleBattleWinner =
      await battleClient.toggleBattleWinner(battleId);

    const battle = toggleBattleWinnerActionCreator(apiToggleBattleWinner);

    dispatch(battle);
  };

  const deleteBattle = async (battleId: string): Promise<void> => {
    try {
      const apiDeletedBattle = await battleClient.deleteBattle(battleId);

      const battle = deleteBattleActionCreator(apiDeletedBattle);

      dispatch(battle);

      showModal(true, "Battle has been successfully deleted!");
    } catch {
      showModal(false, "Oops! Can’t delete your battle!");
    }
  };

  return {
    isLoading,
    battlesInfo,
    getBattlesInfo,
    toggleBattleWinner,
    deleteBattle,
  };
};

export default useBattles;
