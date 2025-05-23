import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it receives 'JEP' and an action", () => {
    const action = vitest.fn();
    const user = userEvent.setup();

    test("Then it should show a 'JEP' button", () => {
      const expectedButtonText = /jep/i;

      render(<Button children="JEP" />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });

    describe("And the user clicks on the `JEP` button", () => {
      test("Then the action should be called", async () => {
        const expectedButtonText = /jep/i;

        render(<Button children="JEP" action={action} />);

        const button = screen.getByRole("button", {
          name: expectedButtonText,
        });

        await user.click(button);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
