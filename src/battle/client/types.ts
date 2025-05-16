import type { Battle, BattlesInfo } from "../../types";

export interface BattleClientStructure {
  getBattlesInfo: (page: number) => Promise<BattlesInfo>;
  toggleBattleWinner: (battleId: string) => Promise<Battle>;
}
