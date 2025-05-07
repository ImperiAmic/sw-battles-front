import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Star Wars Battles' inside a level 1 heading", () => {
      const expectedPageTitle = "Star Wars Battles";

      render(<Layout />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
