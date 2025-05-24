import { render, screen } from "@testing-library/react";
import BattleFormPage from "./BattleFormPage";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { MemoryRouter } from "react-router";

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
  });
});
