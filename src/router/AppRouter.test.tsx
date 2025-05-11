import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import AppRouter from "./AppRouter";
import BattleContextProvider from "../battle/context/BattlesContextProvider";

describe("Given the AppRouter component", () => {
  describe("When it renders in path '/'", () => {
    test("Then it should route to a page that shows 'Your battles collection!' inside a heading", () => {
      const expectedText = /your battles collection/i;

      render(
        <BattleContextProvider>
          <MemoryRouter initialEntries={["/battles"]}>
            <AppRouter />
          </MemoryRouter>
        </BattleContextProvider>,
      );

      const battlesPageTitle = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(battlesPageTitle).toBeInTheDocument();
    });
  });

  describe("When it renders in a non-existing path 'palpatine'", () => {
    test("Then it should route to a page that shows 'R2-D2 noises' as a text", () => {
      const expectedNotFoundText = /r2-d2 noises/i;

      render(
        <BattleContextProvider>
          <MemoryRouter initialEntries={["/palpatine"]}>
            <AppRouter />
          </MemoryRouter>
        </BattleContextProvider>,
      );

      const notFoundPageText = screen.getByText(expectedNotFoundText);

      expect(notFoundPageText).toBeInTheDocument();
    });
  });
});
