import { mapBattleDtoToBattle, mapBattlesDtoToBattles } from "../dto/mappers";
import type { Battle, BattleFormData, BattlesInfo } from "../../types";
import type { BattleClientStructure } from "./types";
import type {
  BattleDto,
  BattlesInfoDto,
  ResponseBattleDto,
} from "../dto/types";

class BattleClient implements BattleClientStructure {
  private readonly apiUrl = import.meta.env.VITE_API_URL;

  public getBattlesInfo = async (page = 1): Promise<BattlesInfo> => {
    const response = await fetch(`${this.apiUrl}/battles?page=${page}`);

    if (!response.ok) {
      throw new Error("Error while getting battles information");
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

    const { battle } = (await response.json()) as ResponseBattleDto;

    const updatedBattle = mapBattleDtoToBattle(battle);

    return updatedBattle;
  };

  public deleteBattle = async (battleId: string): Promise<Battle> => {
    const response = await fetch(`${this.apiUrl}/battles/${battleId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error while fetching battle deletion");
    }

    const { battle } = (await response.json()) as ResponseBattleDto;

    const deletedBattle = mapBattleDtoToBattle(battle);

    return deletedBattle;
  };

  public getBattleDetail = async (battleId: string): Promise<Battle> => {
    const response = await fetch(`${this.apiUrl}/battles/${battleId}`);

    if (!response.ok) {
      throw new Error("Error while getting battle detail");
    }

    const { battle } = (await response.json()) as ResponseBattleDto;

    const detailedBattle = mapBattleDtoToBattle(battle);

    return detailedBattle;
  };

  public addBattle = async (
    battleFormData: BattleFormData,
  ): Promise<Battle> => {
    const response = await fetch(`${this.apiUrl}/battles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(battleFormData),
    });

    if (!response.ok) {
      throw new Error("Error while adding a new battle");
    }

    const { battle } = (await response.json()) as { battle: BattleDto };

    return mapBattleDtoToBattle(battle);
  };
}

export default BattleClient;
