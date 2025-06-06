import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import BattlesPage from "./BattlesPage";
import store from "../../../store/store";

describe("Given the BattlesPage component", () => {
  const user = userEvent.setup();

  describe("When it renders", () => {
    test("Then it should show 'Your battles collection!' inside a heading", async () => {
      const expectedPageTitle = /your battles collection!/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattlesPage />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe("And the user clicks on Rebel icon from Battle of Tebas card", () => {
    test("Then it should show the Empire as battle winner", async () => {
      const expectedBattleName = "Battle of Tebas";
      const expectedBattleToggleButton = "Change battle winner";
      const expectedNewWinnerImage = "Rebel icon";

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattlesPage />
          </MemoryRouter>
        </Provider>,
      );

      const tebasBattleName = await screen.findByRole("heading", {
        name: expectedBattleName,
      });

      const tebasBattleCard = tebasBattleName.closest("article")!;

      const tebasToggleWinnerButton = await within(
        tebasBattleCard,
      ).findByLabelText(expectedBattleToggleButton);

      await user.click(tebasToggleWinnerButton);

      const tebasBattleWinner = await within(tebasBattleCard).findByRole(
        "img",
        { name: expectedNewWinnerImage },
      );

      expect(tebasBattleWinner).toBeInTheDocument();
    });
  });

  describe("And the user clicks on the delete button from Battle of Roncesvalles", () => {
    test("Then it should delete the Battle of Roncesvalles from the page", async () => {
      const expectedBattleName = "Battle of Roncesvalles";
      const expectedDeleteButtonText = "Delete battle";

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattlesPage />
          </MemoryRouter>
        </Provider>,
      );

      const battleHeading = await screen.findByRole("heading", {
        name: expectedBattleName,
      });

      const battleCard = battleHeading.closest("article")!;

      const deleteButton = await within(battleCard).findByLabelText(
        expectedDeleteButtonText,
      );

      await user.click(deleteButton);

      expect(battleHeading).not.toBeInTheDocument();
    });
  });
});
