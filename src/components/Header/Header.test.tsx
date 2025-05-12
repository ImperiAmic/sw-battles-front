import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Star Wars Battles' inside a level 1 heading", () => {
      const expectedPageTitle = "Star Wars Battles";

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
