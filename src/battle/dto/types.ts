import type { Battle, BattlesInfo } from "../../types";

export interface BattleDto
  extends Omit<Battle, "id" | "imageUrl" | "imageAlt"> {
  _id: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface BattlesInfoDto extends Omit<BattlesInfo, "battles"> {
  battles: BattleDto[];
}
