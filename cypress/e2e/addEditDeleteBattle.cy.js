const { findByLabelText } = require("@testing-library/dom");

describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.findByRole("link", { name: /add battle/i }).click();

    const newBattleForm = cy.get("form");

    cy.findByLabelText("Name").type("Test Battle");
    cy.findByLabelText("Year").type("2025");
    cy.findByLabelText("Period").select("BBY");
    cy.findByLabelText("Conflict").type("Testing Wars");
    cy.findByLabelText("Light Side combatants (split by commas)").type(
      "Kent C. Dodds, Testing Trophy",
    );
    cy.findByLabelText("Dark Side combatants (split by commas)").type(
      "Junior Dev, Dark Sidious",
    );
    cy.findByLabelText("Explain the battle...").type("You always MUST test");
    cy.findByLabelText("Does the Light Side win?").click();

    newBattleForm.findByRole("button", { name: /create new battle/i }).click();

    const addModal = cy.findByRole("dialog");
    addModal.findByRole("button", { name: /close modal/i }).click();

    const newBattleCard = cy
      .findByRole("heading", { name: /test battle/i })
      .closest("[data-testid='battleCard']");

    newBattleCard.findByRole("link", { name: /edit/i }).click();

    const newBattleEditForm = cy.get("form");

    cy.findByLabelText("Name").clear().type("Re-Test Battle");

    newBattleEditForm.findByRole("button", { name: /edit battle/i }).click();

    const editModal = cy.findByRole("dialog");
    editModal.findByRole("button", { name: /close modal/i }).click();

    const editedBattleCard = cy
      .findByRole("heading", { name: /re-test battle/i })
      .closest("[data-testid='battleCard']");

    editedBattleCard.findByRole("button", { name: /delete battle/i }).click();

    const deletModal = cy.findByRole("dialog");
    deletModal.findByRole("button", { name: /close modal/i }).click();
  });
});
