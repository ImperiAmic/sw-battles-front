import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given the Loader component", () => {
  describe("When it renders", () => {
    test("Then it should show 'LOADING'", () => {
      render(<Loader />);

      const loaderText = screen.getByText("LOADING...");

      expect(loaderText).toBeInTheDocument();
    });
  });
});
