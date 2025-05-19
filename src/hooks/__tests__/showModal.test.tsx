import { act } from "react";
import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";
import useModal from "../useModal";
import store from "../../store/store";

describe("Given the showModal method from useModal hook", () => {
  describe("When it receives a true (meaning modal is a success) and 'La pata de Perico' text", () => {
    test("Then it should show a success modal with 'La pata de Perico'", async () => {
      const expectedIsModalSuccess = true;
      const expectedModalText = "La pata de Perico";

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useModal(), { wrapper });

      await act(() => {
        result.current.showModal(true, expectedModalText);
      });

      const isModalSuccess = result.current.modalState.isSuccess;
      const modalText = result.current.modalState.modalText;

      expect(isModalSuccess).toBe(expectedIsModalSuccess);
      expect(modalText).toBe(expectedModalText);
    });
  });

  describe("When it receives a false (meaning modal is an error) and 'La cabra Perica' text", () => {
    test("Then it should show an error modal with 'La cabra Perica'", async () => {
      const expectedIsModalSuccess = false;
      const expectedModalText = "La cabra Perica";

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useModal(), { wrapper });

      await act(() => {
        result.current.showModal(false, expectedModalText);
      });

      const isModalSuccess = result.current.modalState.isSuccess;
      const modalText = result.current.modalState.modalText;

      expect(isModalSuccess).toBe(expectedIsModalSuccess);
      expect(modalText).toBe(expectedModalText);
    });
  });
});
