import type { Battle } from "../../types";
import type { BattleDto } from "./types";

export const mapBattleDtoToBattle = (battleDto: BattleDto): Battle => {
  return {
    ...battleDto,
    id: battleDto._id,
    imageUrl: !battleDto.imageUrl
      ? "https://static.wikia.nocookie.net/starwars/images/3/34/Spacebattle.jpg"
      : battleDto.imageUrl,
    imageAlt: !battleDto.imageUrl
      ? `General view of a space battle over Coruscant due to missing image for ${battleDto.name}`
      : `General view of ${battleDto.name}`,
  };
};

export const mapBattlesDtoToBattles = (battlesDto: BattleDto[]): Battle[] => {
  return battlesDto.map<Battle>((battleDto) => mapBattleDtoToBattle(battleDto));
};
