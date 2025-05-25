import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import store from "../../../store/store";
import AppRouterTest from "../../../router/TestAppRouter";
import { vilafrancaBattleDto } from "../../../battle/dto/fixturesDto";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Star Wars Battles' inside a level 1 heading", () => {
      const expectedPageTitle = "Star Wars Battles";

      render(
        <Provider store={store}>
          <MemoryRouter>
            <Layout />
          </MemoryRouter>
        </Provider>,
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

  describe("When it renders in path /add-battle and the user fills the form with the Battle of Vilafranca", () => {
    test("Then it should show 'Battle of Vilafranca ' as a heading", async () => {
      const expectedModalText = "Battle has been successfully created!";

      const user = userEvent.setup();

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/add-battle"]}>
            <Layout />
            <AppRouterTest />
          </MemoryRouter>
        </Provider>,
      );

      const nameInput = screen.getByLabelText(/name/i);
      const yearInput = screen.getByLabelText(/year/i);
      const periodInput = screen.getByLabelText(/period/i);
      const conflictInput = screen.getByLabelText(/conflict/i);
      const lightSideInput = screen.getByLabelText(/light side combatants/i);
      const darkSideInput = screen.getByLabelText(/dark side combatants/i);
      const descriptionInput = screen.getByLabelText(/explain the battle/i);
      const winnerInput = screen.getByLabelText(/does the light side win/i);

      await user.type(nameInput, vilafrancaBattleDto.battleName);
      await user.type(yearInput, vilafrancaBattleDto.year.toString());
      await user.selectOptions(periodInput, vilafrancaBattleDto.period);
      await user.type(conflictInput, vilafrancaBattleDto.conflict);
      await user.type(lightSideInput, vilafrancaBattleDto.lightSide.toString());
      await user.type(darkSideInput, vilafrancaBattleDto.darkSide.toString());
      await user.type(descriptionInput, vilafrancaBattleDto.description);
      await user.click(winnerInput);

      const createButton = screen.getByText(/create new battle/i);

      await user.click(createButton);

      const battleName = await screen.findByText(expectedModalText);

      expect(battleName).toBeInTheDocument();
    });
  });
});
