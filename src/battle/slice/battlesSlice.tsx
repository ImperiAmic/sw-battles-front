import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Battle } from "../../types";
import type { BattlesState } from "./types";

const initialState: BattlesState = {
  battles: [],
};

const battlesSlice = createSlice({
  name: "battles",
  initialState,
  reducers: {
    loadBattles: (
      currentState,
      action: PayloadAction<Battle[]>,
    ): BattlesState => {
      return {
        ...currentState,
        battles: action.payload,
      };
    },
  },
});

export const battlesReducer = battlesSlice.reducer;

export const { loadBattles: loadBattlesActionCreator } = battlesSlice.actions;
