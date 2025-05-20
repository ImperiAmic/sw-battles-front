import type { BattlesInfo } from "../../types";

export interface BattlesInfoState {
  battlesInfo: BattlesInfo;
}

export type BattlesPreloadedState = { battlesInfoSlice: BattlesInfoState };
