import { http, HttpResponse } from "msw";
import BattleClient from "../BattleClient";
import { server } from "../../mocks/node";
import { mallorcaBattle } from "../../fixtures";
import { mallorcaBattleDto } from "../../dto/fixturesDto";
import { mapBattleDtoToBattle } from "../../dto/mappers";

describe("Given the deleteBattle method from BattleClient", () => {
  describe("When it's called with the Battle of Mallorca ID", () => {
    test("Then it should return Battle of Mallorca", async () => {
      const battleClient = new BattleClient();
      const deletedBattle = await battleClient.deleteBattle(mallorcaBattle.id);

      const battle = mapBattleDtoToBattle(mallorcaBattleDto);

      expect(deletedBattle).toStrictEqual(battle);
    });
  });

  describe("When it is called with an ID which is incorrect", () => {
    test("Then it should throw an 'Error while fetching battle deletion' error", () => {
      const notCorrectID = "eurovisionsongcontest";
      const expectedErrorMessage = "Error while fetching battle deletion";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.delete(`${apiUrl}/battles/${notCorrectID}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const battleClient = new BattleClient();
      const deletedBattle = battleClient.deleteBattle(notCorrectID);

      expect(deletedBattle).rejects.toThrow(expectedErrorMessage);
    });
  });
});
