import { useCallback, useMemo } from "react";
import BattleClient from "../client/BattleClient";
import type { UseBattlesStructure } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addBattleActionCreator,
  deleteBattleActionCreator,
  editBattleActionCreator,
  getBattlesDetailActionCreator,
  getBattlesInfoActionCreator,
  toggleBattleWinnerActionCreator,
} from "../slice/battlesInfoSlice";
import useModal from "../../ui/hooks/useModal";
import useLoading from "../../ui/hooks/useLoading";
import type { BattleFormDataDto } from "../types";
import type { BattleDto } from "../dto/types";

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

  const getBattleDetail = useCallback(
    async (battleId: string): Promise<void> => {
      const timeout = setTimeout(() => {
        startLoading();
      }, 200);

      try {
        const apiBattleDetail = await battleClient.getBattleDetail(battleId);

        const action = getBattlesDetailActionCreator(apiBattleDetail);

        dispatch(action);
      } catch {
        showModal(false, "Oops! Can't find your detailed battle!");
      } finally {
        endLoading();
        clearTimeout(timeout);
      }
    },
    [battleClient, dispatch, showModal, startLoading, endLoading],
  );

  const addBattle = async (
    battleFormDataDto: BattleFormDataDto,
  ): Promise<void> => {
    const timeout = setTimeout(() => {
      startLoading();
    }, 200);

    try {
      const apiNewBattle = await battleClient.addBattle(battleFormDataDto);

      const action = addBattleActionCreator(apiNewBattle);

      dispatch(action);

      showModal(true, "Battle has been successfully created!");
    } catch {
      showModal(false, "Oops! Can't create your battle!");
    } finally {
      endLoading();
      clearTimeout(timeout);
    }
  };

  const editBattle = async (editedBattleDto: BattleDto): Promise<void> => {
    const timeout = setTimeout(() => {
      startLoading();
    }, 200);

    try {
      const apiEditedBatttle = await battleClient.editBattle(editedBattleDto);

      const action = editBattleActionCreator(apiEditedBatttle);

      dispatch(action);
      showModal(true, "Battle has been successfully edited!");
    } catch {
      showModal(false, "Oops! Can't edit your battle!");
    } finally {
      endLoading();
      clearTimeout(timeout);
    }
  };

  return {
    battlesInfo,
    getBattlesInfo,
    toggleBattleWinner,
    deleteBattle,
    getBattleDetail,
    addBattle,
    editBattle,
  };
};

export default useBattles;
