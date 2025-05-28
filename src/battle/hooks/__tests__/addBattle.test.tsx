import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from "react";
import { vilafrancaFormBattleDto } from "../../dto/fixturesDto";
import type { BattlesInfoState } from "../../slice/types";
import setupStore from "../../../store/setupStore";
import useBattles from "../useBattles";
import { lleidaBattle, tebasBattle } from "../../fixtures";

describe("Given the addBattle method from useBattles hook", () => {
  describe("When it receives Battle of Vilafranca ad form data", () => {
    test("Then it should add Battle of Vilafranca to state and return 3 as a total of battles", async () => {
      const expectedNewBattleName = vilafrancaFormBattleDto.battleName;
      const expectedNewBattlesTotal = 3;

      const initialStateBattles = [lleidaBattle, tebasBattle];

      const initialState: BattlesInfoState = {
        battlesInfo: {
          battles: initialStateBattles,
          battlesTotal: initialStateBattles.length,
        },
      };

      const store = setupStore({ battlesInfoSlice: initialState });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useBattles(), { wrapper });

      await act(() => {
        result.current.addBattle(vilafrancaFormBattleDto);
      });

      const battles = result.current.battlesInfo.battles;
      const battlesTotal = result.current.battlesInfo.battlesTotal;

      expect(battles).toContainEqual(
        expect.objectContaining({
          battleName: expectedNewBattleName,
        }),
      );
      expect(battlesTotal).toBe(expectedNewBattlesTotal);
    });
  });
});
