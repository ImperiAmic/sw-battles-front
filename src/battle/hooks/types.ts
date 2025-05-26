import type { BattleFormDataDto, BattlesInfo } from "../../types";
import type { BattleDto } from "../dto/types";

export interface UseBattlesStructure {
  battlesInfo: BattlesInfo;
  getBattlesInfo: (page?: number) => Promise<void>;
  toggleBattleWinner: (battleId: string) => Promise<void>;
  deleteBattle: (battleId: string) => Promise<void>;
  getBattleDetail: (battleId: string) => Promise<void>;
  addBattle: (battleFormDataDto: BattleFormDataDto) => Promise<void>;
  editBattle: (editedBattleDto: BattleDto) => Promise<void>;
}
