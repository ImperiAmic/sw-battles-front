import { Provider } from "react-redux";
import {
  barcelonaBattle,
  llucmajorBattle,
  montjuicBattle,
} from "../../fixtures";
import setupStore from "../../../store/setupStore";
import type { BattlesInfoState } from "../../slice/types";
import { renderHook } from "@testing-library/react";
import useBattles from "../useBattles";
import { act } from "react";

describe("Given the deleteBattle method from useBattle hook", () => {
  describe("When it receives the ID for Battle of Llucmajor", () => {
    test("Then it should delete Battle of Llucmajor from state and return 2 as total of battles", async () => {
      const expectedOldBattleName = llucmajorBattle.battleName;
      const expectedNewBattlesTotal = 2;

      const initialStateBattles = [
        llucmajorBattle,
        barcelonaBattle,
        montjuicBattle,
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
        result.current.deleteBattle(llucmajorBattle.id);
      });

      const battles = result.current.battlesInfo.battles;

      expect(battles).not.toContainEqual(
        expect.objectContaining({
          battleName: expectedOldBattleName,
        }),
      );
      expect(battles.length).toBe(expectedNewBattlesTotal);
    });
  });
});
