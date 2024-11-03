export default class BasePage {
  constructor() {
    this.baseUrl = "https://www.saucedemo.com";

    this.selectors = {
      userInputField: "#user-name",
    };
  }

  visitWebsite() {
    cy.visit(`${this.baseUrl}`);
  }

  getElement(selector) {
    return cy.get(selector);
  }

  click(selector) {
    this.getElement(selector).click();
  }

  type(selector, text) {
    this.getElement(selector).type(text);
  }
}
