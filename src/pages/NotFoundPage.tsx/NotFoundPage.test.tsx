import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'R2-D2 noises'", () => {
      const expectedText = /r2-d2 noises/i;

      render(<NotFoundPage />);

      const notFoundText = screen.getByText(expectedText);

      expect(notFoundText).toBeInTheDocument();
    });
  });
});
