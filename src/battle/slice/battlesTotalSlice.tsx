import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BattlesTotalState } from "./types";

const initialState: BattlesTotalState = {
  battlesTotal: 0,
};

const battlesTotalSlice = createSlice({
  name: "battlesTotal",
  initialState,
  reducers: {
    loadBattlesTotal: (
      currentState,
      action: PayloadAction<number>,
    ): BattlesTotalState => {
      return {
        ...currentState,
        battlesTotal: action.payload,
      };
    },
  },
});

export const battlesTotalReducer = battlesTotalSlice.reducer;

export const { loadBattlesTotal: loadBattlesTotalActionCreator } =
  battlesTotalSlice.actions;
