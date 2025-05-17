import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import store from "../store/store";
import AppRouter from "./AppRouter";

describe("Given the AppRouter component", () => {
  describe("When it renders in path '/'", () => {
    test("Then it should route to a page that shows 'Your battles collection!' inside a heading", async () => {
      const expectedText = /your battles collection/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/battles"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const battlesPageTitle = await screen.findByRole("heading", {
        name: expectedText,
      });

      expect(battlesPageTitle).toBeInTheDocument();
    });
  });

  describe("When it renders in a non-existing path 'palpatine'", () => {
    test("Then it should route to a page that shows 'R2-D2 noises'", async () => {
      const expectedNotFoundText = /r2-d2 noises/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/palpatine"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const notFoundPageText = await screen.findByText(expectedNotFoundText);

      expect(notFoundPageText).toBeInTheDocument();
    });
  });
});
