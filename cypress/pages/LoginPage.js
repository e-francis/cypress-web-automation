import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      ...this.selectors,
      passwordInputField: "#password",
      loginButton: "#login-button",
    };
  }
  visit() {
    super.visitWebsite();
  }

  loginWithValidCredentials(username, password) {
    this.type(this.selectors.userInputField, username);
    this.type(this.selectors.passwordInputField, password);
    this.click(this.selectors.loginButton);
    cy.contains("Products").should("be.visible");
  }
}
