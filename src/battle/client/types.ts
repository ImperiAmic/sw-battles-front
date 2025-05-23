import type { Battle, BattleFormData, BattlesInfo } from "../../types";

export interface BattleClientStructure {
  getBattlesInfo: (page: number) => Promise<BattlesInfo>;
  toggleBattleWinner: (battleId: string) => Promise<Battle>;
  deleteBattle: (battleId: string) => Promise<Battle>;
  getBattleDetail: (battleId: string) => Promise<Battle>;
  addBattle: (battleFormData: BattleFormData) => Promise<Battle>;
}
