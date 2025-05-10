import { render, screen } from "@testing-library/react";
import BattlesPage from "./BattlesPage";

describe("Given the BattlesPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Your battles collection!' inside a heading", () => {
      const expectedPageTitle = /your battles collection!/i;

      render(<BattlesPage />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
