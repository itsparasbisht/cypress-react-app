describe("fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("contains correct header", () => {
    // cy.get('[data-test="fundamentals-header"]').should(
    //   "contain.text",
    //   "Testing Fundamentals"
    // );

    // using a custom selector function defined inside support directory
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
