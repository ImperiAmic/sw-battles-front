import type { BattleFormData, BattlesInfo } from "../../types";

export interface UseBattlesStructure {
  battlesInfo: BattlesInfo;
  getBattlesInfo: (page?: number) => Promise<void>;
  toggleBattleWinner: (battleId: string) => Promise<void>;
  deleteBattle: (battleId: string) => Promise<void>;
  getBattleDetail: (battleId: string) => Promise<void>;
  addBattle: (battleFormData: BattleFormData) => Promise<void>;
}
