import type { Battle } from "../../types";

export interface UseBattlesStructure {
  battles: Battle[];
  battlesTotal: number;
  loadBattlesInfo: (page?: number) => Promise<void>;
}
