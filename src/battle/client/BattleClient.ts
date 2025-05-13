import type { BattlesInfo } from "../../types";
import type { BattlesInfoDto } from "../dto/types";
import type { BattleClientStructure } from "./types";
import { mapBattlesDtoToBattles } from "../dto/mappers";

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
}

export default BattleClient;
