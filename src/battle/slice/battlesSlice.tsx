import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Battle, BattlesInfo } from "../../types";
import type { BattlesInfoState as BattlesInfoState } from "./types";

const initialState: BattlesInfoState = {
  battlesInfo: {
    battles: [],
    battlesTotal: 0,
  },
};

const battlesSlice = createSlice({
  name: "battles",
  initialState,
  reducers: {
    getBattlesInfo: (
      { battlesInfo },
      { payload: { battles, battlesTotal } }: PayloadAction<BattlesInfo>,
    ): BattlesInfoState => {
      return {
        ...battlesInfo,
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
  },
});

export const battlesReducer = battlesSlice.reducer;

export const {
  getBattlesInfo: getBattlesInfoActionCreator,
  toggleBattleWinner: toggleBattleWinnerActionCreator,
} = battlesSlice.actions;
