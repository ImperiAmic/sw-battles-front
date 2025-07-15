const { findByLabelText } = require("@testing-library/dom");

describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    const liberationNabooCard = cy
      .findByRole("heading", { name: /liberation of naboo/i })
      .closest("[data-testid='battleCard']");

    liberationNabooCard
      .findByRole("link", { name: /more information/i })
      .click();

    cy.findByRole("button", { name: /change battle winner/i }).click();
    cy.findByRole("link", { name: /battles list/i }).click();

    const reLiberationNabooBattle = cy
      .findByRole("heading", { name: /liberation of naboo/i })
      .closest("[data-testid='battleCard']");

    reLiberationNabooBattle
      .findByRole("button", { name: /change battle winner/i })
      .click({ force: true });
  });
});
