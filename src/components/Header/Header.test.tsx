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

    test("Then it should show an image with 'Representation of when stars seem to elongate just as a ship begins to enter hyperspace' as alternative text", () => {
      const expectedAltText =
        "Representation of when stars seem to elongate just as a ship begins to enter hyperspace";

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const image = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(image).toBeInTheDocument();
    });
  });
});
