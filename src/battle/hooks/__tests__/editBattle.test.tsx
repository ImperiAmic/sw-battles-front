import { Provider } from "react-redux";
import {
  almansaBattle,
  llucmajorBattle,
  montjuicBattle,
  updatedAlmansaBattle,
} from "../../../fixtures";
import setupStore from "../../../store/setupStore";
import type { BattlesInfoState } from "../../slice/types";
import { renderHook } from "@testing-library/react";
import useBattles from "../useBattles";
import { act } from "react";
import { updatedAlmansaBattleDto } from "../../dto/fixturesDto";

describe("Given the editBattle mthod from useBattle hook", () => {
  describe("When it receives the edited Battle of Almansa", () => {
    test("Then it should edit the battle to 'Killing of Almansa'", async () => {
      const initialStateBattles = [
        almansaBattle,
        montjuicBattle,
        llucmajorBattle,
      ];

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
        result.current.editBattle(updatedAlmansaBattleDto);
      });

      const battles = result.current.battlesInfo.battles;

      expect(battles).toContainEqual(
        expect.objectContaining({
          battleName: updatedAlmansaBattle.battleName,
        }),
      );
    });
  });
});
