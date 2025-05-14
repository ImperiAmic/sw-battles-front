import { render, screen } from "@testing-library/react";
import Paginator from "./Paginator";
import { MemoryRouter } from "react-router";

describe("Given the Paginator component", () => {
  describe("When it renders at page 2 with a total number of battles of 9", () => {
    test("Then ti should show a 'Next page' link", () => {
      const expectedPreviousPageLinkText = /previous page/i;
      const expectedNextPageLinkText = /next page/i;

      render(
        <MemoryRouter>
          <Paginator page={2} battlesTotal={9} />
        </MemoryRouter>,
      );

      const previousPageLink = screen.getByRole("link", {
        name: expectedPreviousPageLinkText,
      });
      const nextPageLink = screen.getByRole("link", {
        name: expectedNextPageLinkText,
      });

      expect(previousPageLink).toBeInTheDocument();
      expect(nextPageLink).toBeInTheDocument();
    });
  });
});
