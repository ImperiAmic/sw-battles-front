import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import { catalanBattles } from "../../dto/fixturesDto";
import { mapBattlesDtoToBattles } from "../../dto/mappers";
import BattleClient from "../BattleClient";

describe("Given the getBattlesInfo method from BattleClient", () => {
  describe("When it is called", () => {
    test("Then it should return Empúries, Ruscino, Ilipa, Martorell, Monjuïc and Lleida battles", async () => {
      const expectedBattles = mapBattlesDtoToBattles(
        catalanBattles.slice(0, 6),
      );

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

    test("Then it should return Barcelona, seige of Roses and Ebre battles", async () => {
      const expectedBattles = mapBattlesDtoToBattles(
        catalanBattles.slice(6, 12),
      );

      const battleClient = new BattleClient();
      const battleInfo = await battleClient.getBattlesInfo(expectedPage);

      const battles = battleInfo.battles;

      expect(battles).toStrictEqual(expectedBattles);
    });
  });

  describe("And the response is not ok", () => {
    test("Then it should throw an 'Error while fetching battles information' message", () => {
      const expectedMessage = "Error while fetching battles information";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/battles`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );
      const battleClient = new BattleClient();
      const battleInfo = battleClient.getBattlesInfo();

      expect(battleInfo).rejects.toThrow(expectedMessage);
    });
  });
});
