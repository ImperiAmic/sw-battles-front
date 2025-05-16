import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import BattleClient from "../BattleClient";
import { ebreBattle, revisitedEbreBattle } from "../../dto/fixturesDto";

describe("Given the toggleBattleWinner method from BattleClient", () => {
  describe("When it is called with the Battle of the Ebre ID", () => {
    test("Then it should return Battle of the Ebre with a switched battle winner", async () => {
      const battleClient = new BattleClient();
      const battleUpdate = await battleClient.toggleBattleWinner(
        ebreBattle._id,
      );

      expect(battleUpdate.doesLightSideWin).toBe(
        revisitedEbreBattle.doesLightSideWin,
      );
    });
  });

  describe("When it is called with an ID which is not correct", () => {
    test("Then it should throw an 'Error while fetching battle update' message", () => {
      const notCorrectID = "ffffffffffffffffffffffff";
      const expectedErrorMessage = "Error while fetching battle update";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.patch(`${apiUrl}/battles/${notCorrectID}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const battleClient = new BattleClient();
      const battleUpdate = battleClient.toggleBattleWinner(notCorrectID);

      expect(battleUpdate).rejects.toThrow(expectedErrorMessage);
    });
  });
});
