import { render, screen } from "@testing-library/react";
import Navigator from "./Navigator";
import { MemoryRouter } from "react-router";

describe("Given the Navigator component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Battles List' link", () => {
      const expectedLinkText = /battles list/i;

      render(
        <MemoryRouter>
          <Navigator />
        </MemoryRouter>,
      );

      const postsLink = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(postsLink).toBeInTheDocument();
    });
  });
});
