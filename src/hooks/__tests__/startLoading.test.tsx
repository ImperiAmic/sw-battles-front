import { renderHook } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import useLoading from "../useLoading";
import { act } from "react";

describe("Given the startLoading method from useLoading hook", () => {
  describe("When it is called", () => {
    test("Then it should start the loading", async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useLoading(), { wrapper });

      await act(() => {
        result.current.startLoading();
      });

      const isLoading = result.current.loadingState.isLoading;

      expect(isLoading).toBe(true);
    });
  });
});
