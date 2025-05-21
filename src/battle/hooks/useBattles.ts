import { useCallback, useMemo } from "react";
import BattleClient from "../client/BattleClient";
import type { UseBattlesStructure } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteBattleActionCreator,
  getBattlesDetailActionCreator,
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
      const timeout = setTimeout(() => {
        startLoading();
      }, 200);

      try {
        const apiBattlesInfo = await battleClient.getBattlesInfo(page);

        const battlesInfo = getBattlesInfoActionCreator(apiBattlesInfo);

        dispatch(battlesInfo);
      } catch {
        showModal(
          false,
          "Oops, can't find your battles! Try again in a few minutes...",
        );
      } finally {
        endLoading();
        clearTimeout(timeout);
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

  const getBattleDetail = async (battleId: string): Promise<void> => {
    try {
      const apiBattleDetail = await battleClient.getBattleDetail(battleId);

      const action = getBattlesDetailActionCreator(apiBattleDetail);

      dispatch(action);
    } catch {
      showModal(
        false,
        "Oops! Can't find your detailed battle! Try again in a few minutes...",
      );
    }
  };

  return {
    battlesInfo,
    getBattlesInfo,
    toggleBattleWinner,
    deleteBattle,
    getBattleDetail,
  };
};

export default useBattles;
