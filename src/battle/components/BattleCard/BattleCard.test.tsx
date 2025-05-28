import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import BattleCard from "./BattleCard";
import store from "../../../store/store";
import { muretBattle } from "../../fixtures";

describe("Given the BattleCard component", () => {
  describe("When it receives Muret battle and renders", () => {
    test("Then it should show 'Battle of Muret' as a heading", () => {
      const expectedBattleName = /battle of muret/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattleCard battle={muretBattle} index={0} />
          </MemoryRouter>
        </Provider>,
      );

      const battleTitle = screen.getByRole("heading", {
        name: expectedBattleName,
      });

      expect(battleTitle).toBeInTheDocument();
    });

    test("Then it should show an illustration of the Battle of Muret", () => {
      const expectedImageAltText = /illustration of the battle of muret/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattleCard battle={muretBattle} index={0} />
          </MemoryRouter>
        </Provider>,
      );

      const battleImage = screen.getByAltText(expectedImageAltText);

      expect(battleImage).toBeInTheDocument();
    });

    test("Then it should show the Empire icon", () => {
      const expectedWinnerIconAltText = "Empire icon";

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattleCard battle={muretBattle} index={0} />
          </MemoryRouter>
        </Provider>,
      );

      const battleWinnerIcon = screen.getByAltText(expectedWinnerIconAltText);

      expect(battleWinnerIcon).toBeInTheDocument();
    });
  });
});
