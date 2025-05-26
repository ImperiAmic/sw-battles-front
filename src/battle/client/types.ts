import type { Battle, BattleFormDataDto, BattlesInfo } from "../../types";
import type { BattleDto } from "../dto/types";

export interface BattleClientStructure {
  getBattlesInfo: (page: number) => Promise<BattlesInfo>;
  toggleBattleWinner: (battleId: string) => Promise<Battle>;
  deleteBattle: (battleId: string) => Promise<Battle>;
  getBattleDetail: (battleId: string) => Promise<Battle>;
  addBattle: (battleFormDataDto: BattleFormDataDto) => Promise<Battle>;
  editBattle: (battleDto: BattleDto) => Promise<Battle>;
}
