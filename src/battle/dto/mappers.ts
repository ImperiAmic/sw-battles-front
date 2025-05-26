import type { BattleDto } from "./types";
import type { Battle, BattleFormData, BattleFormDataDto } from "../../types";

export const mapBattleDtoToBattle = (battleDto: BattleDto): Battle => {
  const isImageMissing = battleDto.imageUrl ?? "/images/placeholder.webp";

  const doesImageNeedAlt = battleDto.imageUrl
    ? `General view of ${battleDto.battleName}`
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

export const mapBattleFormDataToBattleFormDataDto = (
  battleFormData: BattleFormData,
): BattleFormDataDto => {
  return {
    ...battleFormData,
    lightSide: battleFormData.lightSide
      .split(",")
      .map((lightCombatant) => lightCombatant.trim()),
    darkSide: battleFormData.darkSide
      .split(",")
      .map((darkCombatant) => darkCombatant.trim()),
  };
};

export const mapBattleToBattleDto = (battle: Battle): BattleDto => {
  return {
    _id: battle.id,
    battleName: battle.battleName,
    conflict: battle.conflict,
    darkSide: battle.darkSide,
    description: battle.description,
    doesLightSideWin: battle.doesLightSideWin,
    lightSide: battle.lightSide,
    period: battle.period,
    year: battle.year,
    imageUrl: battle.imageUrl,
  };
};
