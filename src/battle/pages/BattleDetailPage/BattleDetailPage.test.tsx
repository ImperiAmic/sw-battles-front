import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import AppRouterTest from "../../../router/TestAppRouter";
import { muretBattle } from "../../fixtures";
import store from "../../../store/store";

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

      expect(battleTitle).toBeInTheDocument();
    });

    describe("And the user clicks on Rebel icon from Battle of Muret detail", () => {
      test("Then it should show the Empire as battle winner", async () => {
        const expectedPageTitle = "Battle of Muret";
        const expectedButtonLabel = "Change battle winner";
        const expectedImageAlt = "Rebel icon";

        const user = userEvent.setup();

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={[`/battle/${expectedBattleId}`]}>
              <AppRouterTest />
            </MemoryRouter>
          </Provider>,
        );

        const pageTitle = screen.getByRole("heading", {
          name: expectedPageTitle,
        });

        const pageArticle = pageTitle.closest("article")!;

        const toggleButton =
          within(pageArticle).getByLabelText(expectedButtonLabel);

        user.click(toggleButton);

        const toggleImage = await screen.findByRole("img", {
          name: expectedImageAlt,
        });

        expect(toggleImage).toBeInTheDocument();
      });
    });
  });
});
