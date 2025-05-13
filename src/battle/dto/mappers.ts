import type { BattleDto } from "./types";
import type { Battle } from "../../types";

export const mapBattleDtoToBattle = (battleDto: BattleDto): Battle => {
  const isImageMissing = battleDto.imageUrl ?? "/images/placeholder.webp";

  const doesImageNeedAlt = battleDto.imageUrl
    ? `General view of ${battleDto.name}`
    : "";

  return {
    ...battleDto,
    id: battleDto._id,
    imageUrl: isImageMissing,
    imageAlt: doesImageNeedAlt,
  };
};

export const mapBattlesDtoToBattles = (battlesDto: BattleDto[]): Battle[] => {
  return battlesDto.map<Battle>((battleDto) => mapBattleDtoToBattle(battleDto));
};
