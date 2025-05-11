import {
  catalanBattles,
  catalanBattlesPage1,
  catalanBattlesPage2,
} from "../../dto/fixturesDto";
import { mapBattlesDtoToBattles } from "../../dto/mapper";
import BattleClient from "../BattleClient";

describe("Given the getBattlesInfo method from BattleClient", () => {
  describe("When it is called", () => {
    test("Then it should return Empúries, Ruscino, Ilipa, Martorell, Monjuïc and Lleida battles", async () => {
      const expectedBattles = mapBattlesDtoToBattles(catalanBattlesPage1);

      const battleClient = new BattleClient();
      const battleInfo = await battleClient.getBattlesInfo();

      const battles = battleInfo.battles;

      expect(battles).toStrictEqual(expectedBattles);
    });

    test("Then it should return 9 as the total number of battles", async () => {
      const expectedBattlesTotal =
        mapBattlesDtoToBattles(catalanBattles).length;

      const battleClient = new BattleClient();
      const battleInfo = await battleClient.getBattlesInfo();

      const battlesTotal = battleInfo.battlesTotal;

      expect(battlesTotal).toStrictEqual(expectedBattlesTotal);
    });
  });

  describe("When it receives a number 2", () => {
    const expectedPage = 2;

    test("Then it should return Empúries, Ruscino, Ilipa, Martorell, Monjuïc and Lleida battles", async () => {
      const expectedBattles = mapBattlesDtoToBattles(catalanBattlesPage2);

      const battleClient = new BattleClient();
      const battleInfo = await battleClient.getBattlesInfo(expectedPage);

      const battles = battleInfo.battles;

      expect(battles).toStrictEqual(expectedBattles);
    });
  });
});
