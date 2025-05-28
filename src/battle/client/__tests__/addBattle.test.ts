import { server } from "../../mocks/node";
import { http, HttpResponse } from "msw";
import { mapBattleFormDataToBattleFormDataDto } from "../../dto/mappers";
import { vilafrancaFormBattleDto } from "../../dto/fixturesDto";
import { vilafrancaFormBattle } from "../../fixtures";
import BattleClient from "../BattleClient";

describe("Given the addBattle method from BattleClient", () => {
  describe("When it receives the form data 'Battle of Vilafranca'", () => {
    test("Then it should return the Vilafranca battle", async () => {
      const battleClient = new BattleClient();
      const newBattle = await battleClient.addBattle(vilafrancaFormBattleDto);

      const battle = mapBattleFormDataToBattleFormDataDto(vilafrancaFormBattle);

      expect(newBattle).toEqual(
        expect.objectContaining({
          battleName: battle.battleName,
        }),
      );
    });
  });

  describe("When the response is not ok", () => {
    test("Then it should throw an 'Error while adding a new battle' error", () => {
      const expectedErrorMessage = "Error while adding a new battle";

      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.post(`${apiUrl}/battles`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const battleClient = new BattleClient();
      const deletedBattle = battleClient.addBattle(vilafrancaFormBattleDto);

      expect(deletedBattle).rejects.toThrow(expectedErrorMessage);
    });
  });
});
