import type { BattleClientStructure } from "./types";
import type { Battle, BattlesInfo } from "../../types";
import type { BattleDto, BattlesInfoDto } from "../dto/types";
import { mapBattleDtoToBattle, mapBattlesDtoToBattles } from "../dto/mappers";

class BattleClient implements BattleClientStructure {
  private readonly apiUrl = import.meta.env.VITE_API_URL;

  public getBattlesInfo = async (page = 1): Promise<BattlesInfo> => {
    const response = await fetch(`${this.apiUrl}/battles?page=${page}`);

    if (!response.ok) {
      throw new Error("Error while fetching battles information");
    }

    const { battles: battlesDto, battlesTotal } =
      (await response.json()) as BattlesInfoDto;

    const battles = mapBattlesDtoToBattles(battlesDto);

    return {
      battles,
      battlesTotal,
    };
  };

  public toggleBattleWinner = async (battleId: string): Promise<Battle> => {
    const response = await fetch(`${this.apiUrl}/battles/${battleId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error while fetching battle update");
    }

    const { battle } = (await response.json()) as { battle: BattleDto };

    const updatedBattle = mapBattleDtoToBattle(battle);

    return updatedBattle;
  };
}

export default BattleClient;
