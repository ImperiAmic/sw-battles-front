import type { BattlesInfo } from "../../types";
import { mapBattlesDtoToBattles } from "../dto/mapper";
import type { BattlesInfoDto } from "../dto/types";
import type { BattleClientStructure } from "./types";

class BattleClient implements BattleClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getBattlesInfo = async (page = 1): Promise<BattlesInfo> => {
    const response = await fetch(`${this.apiUrl}/battles?page=${page}`);

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
