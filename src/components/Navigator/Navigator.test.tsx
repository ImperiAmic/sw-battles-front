import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Navigator from "./Navigator";
import store from "../../store/store";

describe("Given the Navigator component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Battles List' link", () => {
      const expectedLinkText = /battles list/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <Navigator />
          </MemoryRouter>
        </Provider>,
      );

      const battlesListLink = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(battlesListLink).toBeInTheDocument();
    });
  });
});
