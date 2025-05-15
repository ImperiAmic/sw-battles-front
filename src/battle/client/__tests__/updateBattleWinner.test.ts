import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import { ebreBattle, revisitedEbreBattle } from "../../dto/fixturesDto";
import BattleClient from "../BattleClient";

describe("Given the updateBattleWinner method from BattleClient", () => {
  describe("When it is called with the Battle of the Ebre ID", () => {
    test("Then it should return Battle of the Ebre with a switched battle winner", async () => {
      const battleClient = new BattleClient();
      const battleUpdate = await battleClient.updateBattleWinner(
        ebreBattle._id,
      );

      expect(battleUpdate.doesLightSideWin).toBe(
        revisitedEbreBattle.doesLightSideWin,
      );
    });
  });

  describe("When it is called with an ID which is not correct", () => {
    test("Then it should throw an 'Error while fetching battle update' message", () => {
      const notCorrectID = "pericodelospalotes";
      const expectedErrorMessage = "Error while fetching battle update";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/battles/${notCorrectID}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const battleClient = new BattleClient();
      const battleUpdate = battleClient.updateBattleWinner(notCorrectID);

      expect(battleUpdate).rejects.toThrow(expectedErrorMessage);
    });
  });
});
