import type { BattlesInfo } from "../../types";

export interface BattlesInfoState {
  isLoading: boolean;
  battlesInfo: BattlesInfo;
}

export type BattlesPreloadedState = { battlesInfoSlice: BattlesInfoState };
