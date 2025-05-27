import type { BattleDto } from "./types";
import type { Battle, BattleFormData, BattleFormDataDto } from "../../types";

export const mapBattleDtoToBattle = (battleDto: BattleDto): Battle => {
  const isImageMissing =
    battleDto.imageUrl ?? "https://i.ibb.co/k2nx0bWv/placeholder.webp";

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

export const mapBattleFormDataToBattleDto = (
  battleFormData: BattleFormData,
): BattleDto => {
  if (!battleFormData.id) {
    throw new Error("Error while editing the battle");
  }

  if (battleFormData.imageUrl === "") {
    battleFormData.imageUrl = "https://i.ibb.co/k2nx0bWv/placeholder.webp";
  }

  if (battleFormData.period !== "BBY" && battleFormData.period !== "ABY") {
    throw new Error("Error while editing the battle, invalid period");
  }

  return {
    battleName: battleFormData.battleName,
    conflict: battleFormData.conflict,
    darkSide: battleFormData.darkSide.split(", "),
    description: battleFormData.description,
    doesLightSideWin: battleFormData.doesLightSideWin,
    _id: battleFormData.id,
    imageUrl: battleFormData.imageUrl,
    lightSide: battleFormData.lightSide.split(", "),
    period: battleFormData.period,
    year: battleFormData.year,
  };
};
