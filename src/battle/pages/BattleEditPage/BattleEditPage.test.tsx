import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mallorcaBattle } from "../../fixtures";
import AppRouterTest from "../../../router/TestAppRouter";

describe("Given the BattleEditPage component", () => {
  describe("When it renders in /edit-battle/666fff666fff666fff666fff to edit Conquest of Mallorca", () => {
    test("Then it should show 'Add your own battle' as a heading", async () => {
      const expectedTitle = /edit conquest of mallorca/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/edit-battle/${mallorcaBattle.id}`]}>
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedTitle,
      });

      await expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Name' as an input", () => {
      const expectedNameLabel = /name/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/edit-battle/${mallorcaBattle.id}`]}>
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const nameInput = screen.getByLabelText(expectedNameLabel);

      expect(nameInput).toBeInTheDocument();
    });
  });
});
