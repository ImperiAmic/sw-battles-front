import { http, HttpResponse } from "msw";
import {
  updatedAlmansaBattle,
  wrongUpdatedAlmansaBattle,
} from "../../../fixtures";
import { server } from "../../../mocks/node";
import BattleClient from "../BattleClient";

describe("Given the updateBattle method from BattleClient", () => {
  describe("When it receives the updated Battle of Almansa", () => {
    test("Then it should return 'Killing of Almansa' battle", async () => {
      const expectedUpdatedBattleName = updatedAlmansaBattle.battleName;

      const battleClient = new BattleClient();
      const editedBattle =
        await battleClient.updateBattle(updatedAlmansaBattle);

      expect(editedBattle.battleName).toBe(expectedUpdatedBattleName);
    });
  });

  describe("When it is called with an ID which is not correct", () => {
    test("Then it should throw an 'Error while updating the battle' message", () => {
      const notCorrectID = "alsosprachzarathustra";
      const expectedErrorMessage = "Error while updating the battle";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.put(`${apiUrl}/battles/${notCorrectID}`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const battleClient = new BattleClient();
      const editedBattle = battleClient.updateBattle(wrongUpdatedAlmansaBattle);

      expect(editedBattle).rejects.toThrow(expectedErrorMessage);
    });
  });
});
