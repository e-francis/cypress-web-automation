describe("Login Test Suite", () => {
  it("Verify A User Can Login Successfully", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='username']").should("have.value", "standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#password").should("have.value", "secret_sauce");
    cy.contains("Login").click();
    cy.get("[data-test='title']").should("be.visible");
    cy.contains("Sauce Labs Backpack").should("be.visible");
  });
});
