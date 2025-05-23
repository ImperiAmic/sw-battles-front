import { render, screen } from "@testing-library/react";
import BattleForm from "./BattleForm";

describe("Given the BattleForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add your own battle' as a heading", () => {
      const expectedTitle = /add your own battle/i;

      render(<BattleForm />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
