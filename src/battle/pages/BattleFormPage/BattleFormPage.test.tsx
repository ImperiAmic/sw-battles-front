import { render, screen } from "@testing-library/react";
import BattleFormPage from "./BattleFormPage";

describe("Given the BattleFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add your own battle' as a heading", () => {
      const expectedTitle = /add your own battle/i;

      render(<BattleFormPage />);

      const pageTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
