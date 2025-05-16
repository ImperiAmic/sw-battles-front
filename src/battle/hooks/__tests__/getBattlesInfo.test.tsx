import { act } from "react";
import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";
import useBattles from "../useBattles";
import store from "../../../store/store";

describe("Given the getBattlesInfo method from useBattle hook", () => {
  describe("When it receives the page 2", () => {
    test("Then it should set Llucmajor, Montjuïc and Almansa battles and a total number of 9 battles", async () => {
      const expectedLlucmajorBattleName = "Battle of Llucmajor";
      const expectedMontjuicBattleName = "Battle of Montjuïc";
      const expectedAlmansaBattleName = "Battle of Almansa";
      const expectedBattlesTotal = 9;

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useBattles(), { wrapper });

      await act(() => {
        result.current.getBattlesInfo(2);
      });

      const battles = result.current.battlesInfo.battles;
      const battlesTotal = result.current.battlesInfo.battlesTotal;

      expect(battles).toContainEqual(
        expect.objectContaining({
          battleName: expectedLlucmajorBattleName,
        }),
      );
      expect(battles).toContainEqual(
        expect.objectContaining({
          battleName: expectedMontjuicBattleName,
        }),
      );
      expect(battles).toContainEqual(
        expect.objectContaining({
          battleName: expectedAlmansaBattleName,
        }),
      );
      expect(battlesTotal).toBe(expectedBattlesTotal);
    });
  });
});
