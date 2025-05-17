import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import store from "../../store/store";
import AppRouterTest from "../../router/TestAppRouter";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Star Wars Battles' inside a level 1 heading", () => {
      const expectedPageTitle = "Star Wars Battles";

      render(
        <MemoryRouter>
          <Layout />
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe("When it renders in path /battles and the user clicks on 'Next page' link", () => {
    test("Then it should show 'Battle of Llucmajor' inside a heading", async () => {
      const expectedNextPageLinkText = /next page/i;
      const expectedLlucmajorBattleTitle = /battle of llucmajor/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/battles"]}>
            <Layout />
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const nextPageLink = await screen.findByRole("link", {
        name: expectedNextPageLinkText,
      });

      await userEvent.click(nextPageLink);

      const llucmajorBattleTitle = await screen.findByRole("heading", {
        name: expectedLlucmajorBattleTitle,
      });

      expect(llucmajorBattleTitle).toBeInTheDocument();
    });
  });

  describe("When it renders in path /battles?page=2 and the user clicks on 'Previous page' link", () => {
    test("Then it should show 'Battle of Roncesvalles' inside a heading", async () => {
      const expectedPreviousPageLinkText = /previous page/i;
      const expectedRoncesvallesBattleTitle = /battle of roncesvalles/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/battles?page=2"]}>
            <Layout />
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const nextPageLink = await screen.findByRole("link", {
        name: expectedPreviousPageLinkText,
      });

      await userEvent.click(nextPageLink);

      const roncesvallesBattleTitle = await screen.findByRole("heading", {
        name: expectedRoncesvallesBattleTitle,
      });

      expect(roncesvallesBattleTitle).toBeInTheDocument();
    });
  });
});
