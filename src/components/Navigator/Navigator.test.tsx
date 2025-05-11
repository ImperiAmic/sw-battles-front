import { render, screen } from "@testing-library/react";
import Navigator from "./Navigator";
import { MemoryRouter } from "react-router";
import BattleContextProvider from "../../battle/context/BattlesContextProvider";

describe("Given the Navigator component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Battles List' link", () => {
      const expectedLinkText = /battles list/i;

      render(
        <BattleContextProvider>
          <MemoryRouter>
            <Navigator />
          </MemoryRouter>
        </BattleContextProvider>,
      );

      const battlesListLink = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(battlesListLink).toBeInTheDocument();
    });
  });
});
