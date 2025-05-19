import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

describe("Given the Modal component", () => {
  describe("When it recieves 'Perico de los palotes' and an action", () => {
    const action = vitest.fn();
    const expectedModalText = "Perico de los palotes";

    test("Then it should show 'Perico de los palotes'", async () => {
      render(
        <MemoryRouter>
          <Modal
            text="Perico de los palotes"
            action={action}
            isSuccess={true}
          />
        </MemoryRouter>,
      );

      const modalText = await screen.findByText(expectedModalText);

      expect(modalText).toBeInTheDocument();
    });

    test("Then it shold show a button to close the modal", async () => {
      render(
        <MemoryRouter>
          <Modal
            text="Perico de los palotes"
            action={action}
            isSuccess={true}
          />
        </MemoryRouter>,
      );

      const closeButton = await screen.findByLabelText("Close modal");

      expect(closeButton).toBeInTheDocument();
    });

    describe("And the user clicks on the button", () => {
      test("Then it should call the action received", async () => {
        render(
          <MemoryRouter>
            <Modal
              text="Perico de los palotes"
              action={action}
              isSuccess={true}
            />
          </MemoryRouter>,
        );

        const closeButton = await screen.findByLabelText("Close modal");

        await userEvent.click(closeButton);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
