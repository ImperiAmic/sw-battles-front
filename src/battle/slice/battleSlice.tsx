import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BattleState } from "./types";
import type { BattlesInfo } from "../../types";

const initialState: BattleState = {
  battles: {
    battles: [],
    battlesTotal: 0,
  },
};

const battleSlice = createSlice({
  name: "battles",
  initialState,
  reducers: {
    loadBattles: (
      currentState,
      action: PayloadAction<BattlesInfo>,
    ): BattleState => {
      return {
        ...currentState,
        battles: action.payload,
      };
    },
  },
});

export const battlesReducer = battleSlice.reducer;

export const { loadBattles: loadBattlesActionCreator } = battleSlice.actions;
