import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import BattlesList from "./BattlesList";
import store from "../../../store/store";
import { catalanBattles } from "../../../fixtures";

describe("Given the BattlesList component", () => {
  describe("When it receives Roncesvalles, Tebas and Barcelona battles", () => {
    test("Then it should show 'Battle of Roncesvalles', 'Battle of Tebas' and 'Siege of Barcelona' as headings", () => {
      const expectedRoncesvallesBattleTitle = /battle of roncesvalles/i;
      const expectedTebasBattleTitle = /battle of tebas/i;
      const expectedBarcelonaSiegeBattleTitle = /siege of barcelona/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattlesList battles={catalanBattles} />
          </MemoryRouter>
        </Provider>,
      );

      const roncesvallesBattleTitle = screen.getByRole("heading", {
        name: expectedRoncesvallesBattleTitle,
      });
      const tebasBattleTitle = screen.getByRole("heading", {
        name: expectedTebasBattleTitle,
      });
      const barcelonaSiegeBattleTitle = screen.getByRole("heading", {
        name: expectedBarcelonaSiegeBattleTitle,
      });

      expect(roncesvallesBattleTitle).toBeInTheDocument();
      expect(tebasBattleTitle).toBeInTheDocument();
      expect(barcelonaSiegeBattleTitle).toBeInTheDocument();
    });
  });
});
