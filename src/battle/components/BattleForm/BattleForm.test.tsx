import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import BattleForm from "./BattleForm";
import type { BattleFormData } from "../../../types";
import { mallorcaBattle } from "../../../fixtures";

describe("Given the BattleForm component", () => {
  const action = vitest.fn();
  const user = userEvent.setup();

  const initialNewBattleFormData: BattleFormData = {
    battleName: "",
    conflict: "",
    darkSide: "",
    description: "",
    doesLightSideWin: false,
    imageUrl: "",
    lightSide: "",
    period: "",
    year: 0,
  };

  const initialEditBattleFormData: BattleFormData = {
    battleName: mallorcaBattle.battleName,
    conflict: mallorcaBattle.conflict,
    darkSide: mallorcaBattle.darkSide.join(", "),
    description: mallorcaBattle.description,
    doesLightSideWin: mallorcaBattle.doesLightSideWin,
    imageUrl: mallorcaBattle.imageUrl,
    lightSide: mallorcaBattle.lightSide.join(", "),
    period: mallorcaBattle.period,
    year: mallorcaBattle.year,
  };

  describe("When it renders as a form to add a battle", () => {
    test("Then it should show 'Add your own battle' as a heading", () => {
      const expectedTitle = /add your own battle/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Name' as an input", () => {
      const expectedNameLabel = /name/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const nameInput = screen.getByLabelText(expectedNameLabel);

      expect(nameInput).toBeInTheDocument();
    });

    test("Then it should show 'Image URL' as an input", () => {
      const expectedImageUrlLabel = /image url/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const imageUrlInput = screen.getByLabelText(expectedImageUrlLabel);

      expect(imageUrlInput).toBeInTheDocument();
    });

    test("Then it should show 'Year' as an input", () => {
      const expectedYearLabel = /year/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const yearInput = screen.getByLabelText(expectedYearLabel);

      expect(yearInput).toBeInTheDocument();
    });

    test("Then it should show 'Period' as an input", () => {
      const expectedPeriodLabel = /period/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const periodInput = screen.getByLabelText(expectedPeriodLabel);

      expect(periodInput).toBeInTheDocument();
    });

    test("Then it should show 'Conflict' as an input", () => {
      const expectedConflictLabel = /conflict/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const conflictInput = screen.getByLabelText(expectedConflictLabel);

      expect(conflictInput).toBeInTheDocument();
    });

    test("Then it should show 'Light Side combatants' as an input", () => {
      const expectedLightSideLabel = /light side combatants/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const lightSideInput = screen.getByLabelText(expectedLightSideLabel);

      expect(lightSideInput).toBeInTheDocument();
    });

    test("Then it should show 'Dark Side combatants' as an input", () => {
      const expectedDarkSideLabel = /dark side combatants/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const darkSideInput = screen.getByLabelText(expectedDarkSideLabel);

      expect(darkSideInput).toBeInTheDocument();
    });

    test("Then it should show 'Explain the battle' as an input", () => {
      const expectedExplainLabel = /explain the battle/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const explainInput = screen.getByLabelText(expectedExplainLabel);

      expect(explainInput).toBeInTheDocument();
    });

    test("Then it should show 'Does the Light Side win' as an input", () => {
      const expectedWinnerLabel = /does the Light Side win?/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const winnerInput = screen.getByLabelText(expectedWinnerLabel);

      expect(winnerInput).toBeInTheDocument();
    });

    test("Then it should show a 'Create new battle' button", () => {
      const expectedButton = /create new battle/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={true}
            initialFormData={initialNewBattleFormData}
          />
        </MemoryRouter>,
      );

      const createButton = screen.getByText(expectedButton);

      expect(createButton).toBeInTheDocument();
    });

    describe("And the user types 'Batalla del Aurresku' inside the 'Name' input", () => {
      test("Then it should show 'Battalla del Aurresku' inside the 'Name' input", async () => {
        const expectedNameLabel = /name/i;
        const expectedValue = "Battalla del Aurresku";

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const nameInput = screen.getByLabelText(expectedNameLabel);

        await user.type(nameInput, expectedValue);

        expect(nameInput).toHaveValue(expectedValue);
      });
    });

    describe("And the user types 'http://www.ieee.es/saludo.webp' inside the 'Image URL' input", () => {
      test("Then it should show 'http://www.ieee.es/saludo.webp' inside the 'Image URL' input", async () => {
        const expectedImageUrlLabel = /image url/i;
        const expectedValue = "http://www.ieee.es/saludo.webp";

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const imageUrlInput = screen.getByLabelText(expectedImageUrlLabel);

        await user.type(imageUrlInput, expectedValue);

        expect(imageUrlInput).toHaveValue(expectedValue);
      });
    });

    describe("And the user types '1582' inside the 'Year' input", () => {
      test("Then it should show '1582' inside the 'Year' input", async () => {
        const expectedYearLabel = /year/i;
        const expectedValue = "1582";
        const expectedNumber = parseInt(expectedValue);

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const yearInput = screen.getByLabelText(expectedYearLabel);

        await user.type(yearInput, expectedValue);

        expect(yearInput).toHaveValue(expectedNumber);
      });
    });

    describe("And the user selects 'BBY' inside the 'Period' input", () => {
      test("Then it should show 'BBY' inside the 'Period' input", async () => {
        const expectedImageUrlLabel = /period/i;
        const expectedSelection = "BBY";

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const periodInput = screen.getByLabelText(expectedImageUrlLabel);

        await user.selectOptions(periodInput, "BBY");

        expect(periodInput).toHaveValue(expectedSelection);
      });
    });

    describe("And the user types 'La Guerra de l'Aigo' inside the 'Conflict' input", () => {
      test("Then it should show 'La Guerra de l'Aigo' inside the 'Conflict' input", async () => {
        const expectedConflictLabel = /conflict/i;
        const expectedValue = "La Guerra de l'Aigo";

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const conflictInput = screen.getByLabelText(expectedConflictLabel);

        await user.type(conflictInput, expectedValue);

        expect(conflictInput).toHaveValue(expectedValue);
      });
    });

    describe("And the user types 'Los bons, Los més bons' inside the 'Light Side combatants' input", () => {
      test("Then it should show 'Los bons, Los més bons' inside the 'Light Side combatants' input", async () => {
        const expectedLightSideLabel = /light side combatants/i;
        const expectedValue = "Los bons, Los més bons";

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const lightSideInput = screen.getByLabelText(expectedLightSideLabel);

        await user.type(lightSideInput, expectedValue);

        expect(lightSideInput).toHaveValue(expectedValue);
      });
    });

    describe("And the user types 'Los dolents, Los més dolents' inside the 'Dark Side combatants' input", () => {
      test("Then it should show 'Los dolents, Los més dolents' inside the 'Dark Side combatants' input", async () => {
        const expectedDarkSideLabel = /dark side combatants/i;
        const expectedValue = "Los dolents, Los més dolents";

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const darkSideInput = screen.getByLabelText(expectedDarkSideLabel);

        await user.type(darkSideInput, expectedValue);

        expect(darkSideInput).toHaveValue(expectedValue);
      });
    });

    describe("And the user types 'La guerra pues oye que cosa más mala tu' inside the 'Explain the battle' input", () => {
      test("Then it should show 'La guerra pues oye que cosa más mala tu' inside the 'Explain the battle' input", async () => {
        const expectedDescriptionLabel = /explain the battle/i;
        const expectedValue = "La guerra pues oye que cosa más mala tu";

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const descriptionInput = screen.getByLabelText(
          expectedDescriptionLabel,
        );

        await user.type(descriptionInput, expectedValue);

        expect(descriptionInput).toHaveValue(expectedValue);
      });
    });

    describe("And the user selects Light Side as winner inside the 'Does the Light Side win' input", () => {
      test("Then it should show the 'Does the Light Side win' input as selected", async () => {
        const expectedDescriptionLabel = /does the light side win/i;

        render(
          <MemoryRouter>
            <BattleForm
              addBattle={action}
              isNewBattleForm={true}
              initialFormData={initialNewBattleFormData}
            />
          </MemoryRouter>,
        );

        const winnerInput = screen.getByLabelText(expectedDescriptionLabel);

        await user.click(winnerInput);

        expect(winnerInput).toBeChecked();
      });
    });
  });

  describe("When it renders as a form to edit Conquest of Mallorca", () => {
    test("Then it should show 'Update Conquest of Mallorca' as a heading", () => {
      const expectedTitle = /update conquest of mallorca/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Conquest of Mallorca' as an input value", () => {
      const expectedInputValue = /conquest of mallorca/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Conquest_Mallorca_1229.jpg' as an input", () => {
      const expectedInputValue =
        /https:\/\/upload.wikimedia.org\/wikipedia\/commons\/f\/f6\/Conquest_Mallorca_1229.jpg/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show '1229' as an input", () => {
      const expectedInputValue = 1229;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show 'ABY' as an input", () => {
      const expectedInputValue = "ABY";

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show 'Catalan Expansion' as an input", () => {
      const expectedInputValue = /catalan expansion/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show 'Crown of Aragon, Catalan nobles' as an input", () => {
      const expectedInputValue = /crown of aragon, catalan nobles/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show 'Moorish Taifa of Mallorca' as an input", () => {
      const expectedInputValue = /moorish taifa of mallorca/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show 'Under King James I, Catalan-Aragonese forces conquered Mallorca from the Moors. It marked a major step in the Mediterranean expansion of Catalonia.' as an input", () => {
      const expectedInputValue =
        /under king james i, catalan-aragonese forces conquered mallorca from the moors. it marked a major step in the mediterranean expansion of catalonia./i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const inputValue = screen.getByDisplayValue(expectedInputValue);

      expect(inputValue).toBeInTheDocument();
    });

    test("Then it should show a 'Edit battle' button", () => {
      const expectedButton = /edit battle/i;

      render(
        <MemoryRouter>
          <BattleForm
            addBattle={action}
            isNewBattleForm={false}
            initialFormData={initialEditBattleFormData}
          />
        </MemoryRouter>,
      );

      const createButton = screen.getByText(expectedButton);
      screen.debug();
      expect(createButton).toBeInTheDocument();
    });
  });
});
