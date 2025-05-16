import type { BattlesInfo } from "../../types";

export interface UseBattlesStructure {
  battlesInfo: BattlesInfo;
  getBattlesInfo: (page?: number) => Promise<void>;
  toggleBattleWinner: (battleID: string) => Promise<void>;
}
