import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Battle, BattlesInfo } from "../../types";
import type { BattlesInfoState } from "./types";

const initialState: BattlesInfoState = {
  isLoading: true,
  battlesInfo: {
    battles: [],
    battlesTotal: 0,
  },
};

const battlesSlice = createSlice({
  name: "battles",
  initialState,
  reducers: {
    setLoading: (currentState): void => {
      currentState.isLoading = true;
    },

    getBattlesInfo: (
      { battlesInfo },
      { payload: { battles, battlesTotal } }: PayloadAction<BattlesInfo>,
    ): BattlesInfoState => {
      return {
        ...battlesInfo,
        battlesInfo: { battles: [...battles], battlesTotal },
        isLoading: false,
      };
    },

    toggleBattleWinner: (
      { battlesInfo: { battles, battlesTotal } },
      { payload }: PayloadAction<Battle>,
    ): BattlesInfoState => {
      return {
        battlesInfo: {
          battles: battles.map((battle) =>
            battle.id === payload.id ? payload : battle,
          ),
          battlesTotal,
        },
        isLoading: false,
      };
    },

    deleteBattle: (
      { battlesInfo: { battles, battlesTotal } },
      { payload }: PayloadAction<Battle>,
    ): BattlesInfoState => {
      return {
        battlesInfo: {
          battles: battles.filter((battle) => battle.id !== payload.id),
          battlesTotal,
        },
        isLoading: false,
      };
    },
  },
});

export const battlesReducer = battlesSlice.reducer;

export const {
  setLoading: setLoadingActionCreator,
  getBattlesInfo: getBattlesInfoActionCreator,
  toggleBattleWinner: toggleBattleWinnerActionCreator,
  deleteBattle: deleteBattleActionCreator,
} = battlesSlice.actions;
