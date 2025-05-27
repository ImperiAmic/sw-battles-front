import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Battle, BattlesInfo } from "../../types";
import type { BattlesInfoState } from "./types";

const initialState: BattlesInfoState = {
  battlesInfo: {
    battles: [],
    battlesTotal: 0,
  },
};

const battlesInfoSlice = createSlice({
  name: "battles",
  initialState,
  reducers: {
    getBattlesInfo: (
      currentState,
      { payload: { battles, battlesTotal } }: PayloadAction<BattlesInfo>,
    ): BattlesInfoState => {
      return {
        ...currentState,
        battlesInfo: { battles: [...battles], battlesTotal },
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
      };
    },
    getBattlesDetail: (
      currentState,
      { payload }: PayloadAction<Battle>,
    ): BattlesInfoState => {
      return {
        ...currentState,
        battlesInfo: {
          battles: [payload],
          battlesTotal: currentState.battlesInfo.battlesTotal,
        },
      };
    },
    addBattle: (
      { battlesInfo: { battles, battlesTotal } },
      { payload: newBattle }: PayloadAction<Battle>,
    ): BattlesInfoState => {
      return {
        battlesInfo: {
          battles: [...battles, newBattle],
          battlesTotal: battlesTotal + 1,
        },
      };
    },
    editBattle: (
      { battlesInfo: { battles, battlesTotal } },
      { payload: editedBattle }: PayloadAction<Battle>,
    ): BattlesInfoState => {
      return {
        battlesInfo: {
          battles: battles.map((battle) =>
            battle.id === editedBattle.id ? editedBattle : battle,
          ),
          battlesTotal,
        },
      };
    },
  },
});

export const battlesReducer = battlesInfoSlice.reducer;

export const {
  getBattlesInfo: getBattlesInfoActionCreator,
  toggleBattleWinner: toggleBattleWinnerActionCreator,
  deleteBattle: deleteBattleActionCreator,
  getBattlesDetail: getBattlesDetailActionCreator,
  addBattle: addBattleActionCreator,
  editBattle: editBattleActionCreator,
} = battlesInfoSlice.actions;
