import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given the Loader component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Battling the load' as a text", () => {
      render(<Loader />);

      const coso = screen.getByText("Battling the load...");

      expect(coso).toBeInTheDocument();
    });
  });
});
