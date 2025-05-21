import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import BattleClient from "../BattleClient";
import { catalanBattlesDtos } from "../../dto/fixturesDto";
import { mapBattlesDtoToBattles } from "../../dto/mappers";

describe("Given the getBattlesInfo method from BattleClient", () => {
  describe("When it is called", () => {
    test("Then it should return Roncesvalles, Tebas, Barcelona, Lleida, Muret and Mallorca battles", async () => {
      const expectedBattles = mapBattlesDtoToBattles(
        catalanBattlesDtos.slice(0, 6),
      );

      const battleClient = new BattleClient();
      const battleInfo = await battleClient.getBattlesInfo();

      const battles = battleInfo.battles;

      expect(battles).toStrictEqual(expectedBattles);
    });

    test("Then it should return 9 as the total number of battles", async () => {
      const expectedBattlesTotal =
        mapBattlesDtoToBattles(catalanBattlesDtos).length;

      const battleClient = new BattleClient();
      const battleInfo = await battleClient.getBattlesInfo();

      const battlesTotal = battleInfo.battlesTotal;

      expect(battlesTotal).toStrictEqual(expectedBattlesTotal);
    });
  });

  describe("When it receives a number 2", () => {
    const expectedPage = 2;

    test("Then it should return Llucmajor, Montjuïc and Almansa battles", async () => {
      const expectedBattles = mapBattlesDtoToBattles(
        catalanBattlesDtos.slice(6, 12),
      );

      const battleClient = new BattleClient();
      const battleInfo = await battleClient.getBattlesInfo(expectedPage);

      const battles = battleInfo.battles;

      expect(battles).toStrictEqual(expectedBattles);
    });
  });

  describe("And the response is not ok", () => {
    test("Then it should throw an 'Error while fetching battles information' message", () => {
      const expectedMessage = "Error while getting battles information";

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
