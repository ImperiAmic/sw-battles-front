import { render, screen } from "@testing-library/react";
import BattlesPage from "./BattlesPage";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Given the BattlesPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Your battles collection!' inside a heading", () => {
      const expectedPageTitle = /your battles collection!/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattlesPage />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
