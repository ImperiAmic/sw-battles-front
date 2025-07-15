const { findByLabelText } = require("@testing-library/dom");

describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    const liberationNabooCard = cy
      .findByRole("heading", { name: /liberation of naboo/i })
      .closest("[data-testid='battleCard']");

    liberationNabooCard.findByRole("link", { name: /edit/i }).click();

    cy.findByLabelText("Name").clear().type("Battle of Naboo");
    cy.findByRole("button", { name: /edit battle/i }).click();

    const modal = cy.findByRole("dialog");
    modal.findByRole("button", { name: /close modal/i }).click();

    const battleNabooCard = cy
      .findByRole("heading", { name: /battle of naboo/i })
      .closest("[data-testid='battleCard']")
      .should("be.visible");

    battleNabooCard
      .findByRole("button", { name: /change battle winner/i })
      .click({ force: true });

    const reBattleNabooCard = cy
      .findByRole("heading", { name: /battle of naboo/i })
      .closest("[data-testid='battleCard']");

    reBattleNabooCard
      .findByRole("link", { name: /edit/i })
      .click({ force: true });

    cy.findByLabelText("Name").clear().type("Liberation of Naboo");
    cy.findByLabelText("Does the Light Side win?").click();
    cy.findByRole("button", { name: /edit battle/i }).click();

    const reModal = cy.findByRole("dialog");
    reModal.findByRole("button", { name: /close modal/i }).click();

    const reLiberationNabooBattle = cy
      .findByRole("heading", { name: /liberation of naboo/i })
      .closest("[data-testid='battleCard']")
      .should("be.visible");
  });
});
