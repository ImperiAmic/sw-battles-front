import { render, screen } from "@testing-library/react";
import BattlesPage from "./BattlesPage";
import BattleContextProvider from "../../context/BattlesContextProvider";
import { MemoryRouter } from "react-router";

describe("Given the BattlesPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Your battles collection!' inside a heading", () => {
      const expectedPageTitle = /your battles collection!/i;

      render(
        <BattleContextProvider>
          <MemoryRouter>
            <BattlesPage />
          </MemoryRouter>
        </BattleContextProvider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
