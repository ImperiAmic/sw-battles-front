import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import BattleClient from "../BattleClient";
import {
  updatedAlmansaBattleDto,
  wrongUpdatedAlmansaBattleDto,
} from "../../dto/fixturesDto";

describe("Given the editBattle method from BattleClient", () => {
  describe("When it receives the updated Battle of Almansa", () => {
    test("Then it should return 'Killing of Almansa' battle", async () => {
      const expectedUpdatedBattleName = updatedAlmansaBattleDto.battleName;

      const battleClient = new BattleClient();
      const editedBattle = await battleClient.editBattle(
        updatedAlmansaBattleDto,
      );

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
      const editedBattle = battleClient.editBattle(
        wrongUpdatedAlmansaBattleDto,
      );

      expect(editedBattle).rejects.toThrow(expectedErrorMessage);
    });
  });
});
