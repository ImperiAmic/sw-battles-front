import { vilafrancaFormBattle } from "../../../fixtures";
import { vilafrancaFormBattleDto } from "../../dto/fixturesDto";
import { mapBattleDtoToBattle } from "../../dto/mappers";
import BattleClient from "../BattleClient";

describe("Given the addBattle method from BattleClient", () => {
  describe("When it receives the form data 'Battle of Vilafranca'", () => {
    test("Then ti should return the Vilafranca battle", async () => {
      const battleClient = new BattleClient();
      const newBattle = await battleClient.addBattle(vilafrancaFormBattle);

      const battle = mapBattleDtoToBattle(vilafrancaFormBattleDto);

      expect(newBattle).toStrictEqual(battle);
    });
  });
});
