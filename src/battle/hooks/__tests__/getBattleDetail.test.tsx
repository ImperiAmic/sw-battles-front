import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from "react";
import type { BattlesInfoState } from "../../slice/types";
import setupStore from "../../../store/setupStore";
import useBattles from "../useBattles";
import { roncesvallesBattle, muretBattle, almansaBattle } from "../../fixtures";

describe("Given the getBattleDetail method from useBattle hook", () => {
  describe("When it receives the Battle of Almansa ID", () => {
    test("Then it should return Battle of Almansa only", async () => {
      const initialStateBattles = [
        roncesvallesBattle,
        muretBattle,
        almansaBattle,
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
        result.current.getBattleDetail(almansaBattle.id);
      });

      const battles = result.current.battlesInfo.battles;

      expect(battles).toContainEqual(
        expect.objectContaining({
          battleName: almansaBattle.battleName,
        }),
      );
      expect(battles).not.toContainEqual(
        expect.objectContaining({
          battleName: roncesvallesBattle.battleName,
        }),
      );
      expect(battles).not.toContainEqual(
        expect.objectContaining({
          battleName: muretBattle.battleName,
        }),
      );
    });
  });
});
