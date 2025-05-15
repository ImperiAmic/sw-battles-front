import type { Battle, BattlesInfo } from "../../types";

export interface BattleClientStructure {
  getBattlesInfo: (page: number) => Promise<BattlesInfo>;
  updateBattleWinner: (battleId: string) => Promise<Battle>;
}
