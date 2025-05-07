import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Star Wars Battles' inside a level 1 heading", () => {
      const expectedPageTitle = "Star Wars Battles";

      render(<Header />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show an image with 'Representation of when stars seem to elongate just as a ship begins to enter hyperspace' as alternative text", () => {
      const expectedAltText =
        "Representation of when stars seem to elongate just as a ship begins to enter hyperspace";

      render(<Header />);

      const image = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(image).toBeInTheDocument();
    });
  });
});
