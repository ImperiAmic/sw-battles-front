import type { Battle } from "../../types";
import type { BattleDto } from "./types";

export const mapBattleDtoToBattle = (battleDto: BattleDto): Battle => {
  const isImageMissing =
    battleDto.imageUrl ??
    "https://static.wikia.nocookie.net/starwars/images/e/ed/Binks22BBY.png";

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
