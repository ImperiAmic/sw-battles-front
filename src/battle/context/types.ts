import type { Battle } from "../../types";

export interface BattleContextStructure {
  battles: Battle[];
  battlesTotal: number;
  loadBattlesInfo: (pageNumber?: number) => Promise<void>;
}
