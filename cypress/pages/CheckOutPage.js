import BasePage from "./BasePage";

export default class CheckOutPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      firstNameInput: "#first-name",
      lastNameInput: "#last-name",
      postalCodeInput: "#postal-code",
      continueButton: "#continue",
      finishButton: "#finish",
      checkOutComplete: ".checkout_complete_container",
      successMessage: ".complete-header",
    };
  }

  fillShippingInfo(firstName, lastName, postalCode) {
    this.type(this.selectors.firstNameInput, firstName);
    this.type(this.selectors.lastNameInput, lastName);
    this.type(this.selectors.postalCodeInput, postalCode);
    this.click(this.selectors.continueButton);
    this.click(this.selectors.finishButton);
  }

  verifySuccesfulCheckOut() {
    this.getElement(this.selectors.checkOutComplete).should("be.visible");
    this.getElement(this.selectors.successMessage).should(
      "have.text",
      "Thank you for your order!"
    );
  }
}
