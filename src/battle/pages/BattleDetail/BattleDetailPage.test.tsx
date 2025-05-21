import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import store from "../../../store/store";
import BattleDetailPage from "./BattleDetailPage";
import AppRouterTest from "../../../router/TestAppRouter";

describe("Given the BattleDetailPage component", () => {
  describe("When it renders at `/battle/666fff666fff666fff666fff` path", () => {
    const expectedBattleId = "666fff666fff666fff666fff";

    test("Then it should show an image of a general view of Conquest of Mallorca", async () => {
      const expectedImageAlt = "General view of Conquest of Mallorca";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/battle/${expectedBattleId}`]}>
            <BattleDetailPage />
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const imageAlt = await screen.findByRole("img", {
        name: expectedImageAlt,
      });

      expect(imageAlt).toBeInTheDocument();
    });

    test("Then it should show 'Conquest of Mallorca' inside a heading", async () => {
      const expectedBattleTitle = "Conquest of Mallorca";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/battle/${expectedBattleId}`]}>
            <BattleDetailPage />
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const battleTitle = await screen.findByRole("heading", {
        name: expectedBattleTitle,
      });

      expect(battleTitle).toBeInTheDocument();
    });
  });
});
