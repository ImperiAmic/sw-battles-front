import { renderHook } from "@testing-library/react";
import store from "../../../store/store";
import { Provider } from "react-redux";
import useLoading from "../useLoading";
import { act } from "react";

describe("Given the endLoading method from useLoading hook", () => {
  describe("When it is called", () => {
    test("Then it should end the loading", async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useLoading(), { wrapper });

      await act(() => {
        result.current.endLoading();
      });

      const isLoading = result.current.loadingState.isLoading;

      expect(isLoading).toBe(false);
    });
  });
});
