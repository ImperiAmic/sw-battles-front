import type { BattlesInfo } from "../../types";

export interface UseBattlesStructure {
  isLoading: boolean;
  battlesInfo: BattlesInfo;
  getBattlesInfo: (page?: number) => Promise<void>;
  toggleBattleWinner: (battleID: string) => Promise<void>;
  deleteBattle: (battleID: string) => Promise<void>;
}
