import { useCallback, useMemo } from "react";
import BattleClient from "../client/BattleClient";
import type { UseBattlesStructure } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteBattleActionCreator,
  getBattlesInfoActionCreator,
  toggleBattleWinnerActionCreator,
} from "../slice/battlesInfoSlice";
import useModal from "../../hooks/useModal";
import useLoading from "../../hooks/useLoading";

const useBattles = (): UseBattlesStructure => {
  const { startLoading, endLoading } = useLoading();
  const { showModal } = useModal();

  const battlesInfo = useAppSelector(
    (state) => state.battlesInfoSlice.battlesInfo,
  );

  const dispatch = useAppDispatch();

  const battleClient = useMemo(() => new BattleClient(), []);

  const getBattlesInfo = useCallback(
    async (page?: number): Promise<void> => {
      try {
        startLoading();

        const apiBattlesInfo = await battleClient.getBattlesInfo(page);

        const battlesInfo = getBattlesInfoActionCreator(apiBattlesInfo);

        dispatch(battlesInfo);

        endLoading();
      } catch {
        showModal(
          false,
          "Oops, can't find your battles! Reload in a few minutes...",
        );

        endLoading();
      }
    },
    [battleClient, dispatch, startLoading, endLoading, showModal],
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
    battlesInfo,
    getBattlesInfo,
    toggleBattleWinner,
    deleteBattle,
  };
};

export default useBattles;
