import { server } from "../../../mocks/node";
import { http, HttpResponse } from "msw";
import { mapBattleDtoToBattle } from "../../dto/mappers";
import { montjuicBattleDto } from "../../dto/fixturesDto";
import { montjuicBattle } from "../../../fixtures";
import BattleClient from "../BattleClient";

describe("Given the getBattleDetail method from BattleClient", () => {
  describe("When it's called with the ID fom Battle of Montjuïc", () => {
    test("Then it should return Battle of Montjuïc", async () => {
      const battleClient = new BattleClient();
      const detailedBattle = await battleClient.getBattleDetail(
        montjuicBattle.id,
      );

      const battle = mapBattleDtoToBattle(montjuicBattleDto);

      expect(detailedBattle).toStrictEqual(battle);
    });
  });

  describe("When it is called with an ID which is incorrect", () => {
    test("Then it should throw an 'Error while getting battle detail' error", () => {
      const notCorrectID = "neonlightsshimmeringneonlights";
      const expectedErrorMessage = "Error while fetching battle deletion";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/battle/${notCorrectID}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const battleClient = new BattleClient();
      const detailedBattle = battleClient.deleteBattle(notCorrectID);

      expect(detailedBattle).rejects.toThrow(expectedErrorMessage);
    });
  });
});
