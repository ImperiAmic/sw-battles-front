import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import BattlesPage from "./BattlesPage";
import { store } from "../../../store/store";

describe("Given the BattlesPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Your battles collection!' inside a heading", async () => {
      const expectedPageTitle = /your battles collection!/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <BattlesPage />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
