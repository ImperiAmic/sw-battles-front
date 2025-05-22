import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import store from "../../../store/store";
import AppRouterTest from "../../../router/TestAppRouter";
import { muretBattle } from "../../../fixtures";

describe("Given the BattleDetailPage component", () => {
  describe("When it renders at `/battle/666fff666fff666fff666fff` path", () => {
    const expectedBattleId = muretBattle.id;

    test("Then it should show an image of a general view of Battle of Muret", async () => {
      const expectedImageAlt = /general view of battle of muret/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/battle/${expectedBattleId}`]}>
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const image = await screen.findByAltText(expectedImageAlt);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show 'Battle of Muret' inside a heading", async () => {
      const expectedBattleTitle = /battle of muret/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/battle/${expectedBattleId}`]}>
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const battleTitle = await screen.findByRole("heading", {
        name: expectedBattleTitle,
      });
      screen.debug();
      expect(battleTitle).toBeInTheDocument();
    });
  });
});
