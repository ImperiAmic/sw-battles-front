import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";
import useBattles from "../useBattles";
import setupStore from "../../../store/setupStore";
import type { BattlesInfoState } from "../../slice/types";
import {
  almansaBattle,
  llucmajorBattle,
  montjuicBattle,
} from "../../../fixtures";

describe("Given the toggleBattleWinner method from useBattle hook", () => {
  describe("When it receives the ID for Battle of Almansa", () => {
    test("Then it should set Light Side as the winner", async () => {
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

      const store = setupStore({ battlesInfoStateData: initialState });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useBattles(), { wrapper });

      await act(() => {
        result.current.toggleBattleWinner(almansaBattle.id);
      });

      const battles = result.current.battlesInfo.battles;

      expect(battles).toContainEqual(
        expect.objectContaining({
          battleName: almansaBattle.battleName,
          doesLightSideWin: true,
        }),
      );
    });
  });
});
