import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import BattleFormPage from "./BattleFormPage";
import store from "../../../store/store";

describe("Given the BattleFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add your own battle' as a heading", async () => {
      const expectedTitle = /add your own battle/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattleFormPage />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = await screen.getByRole("heading", {
        name: expectedTitle,
      });

      await expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Name' as an input", () => {
      const expectedNameLabel = /name/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattleFormPage />
          </MemoryRouter>
        </Provider>,
      );

      const nameInput = screen.getByLabelText(expectedNameLabel);

      expect(nameInput).toBeInTheDocument();
    });
  });
});
