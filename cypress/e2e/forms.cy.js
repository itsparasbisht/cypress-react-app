describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.contains(/Successfully subbed: harry@gmail.com/i).should("not.exist");

    // defined an alias for the form input
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");

    // accessing the form input field through alias
    cy.get("@subscribe-input").type("harry@gmail.com");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: harry@gmail.com/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: harry@gmail.com/i).should("not.exist");

    cy.contains(/Invalid email: harry@gmail.io!/i).should("not.exist");
    cy.get("@subscribe-input").type("harry@gmail.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: harry@gmail.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: harry@gmail.io!/i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
