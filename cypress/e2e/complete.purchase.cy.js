import LoginPage from "../pages/LoginPage";
import AddItemToCart from "../pages/AddItemToCartPage";
import CheckOutPage from "../pages/CheckOutPage";

describe("Complete Purchase Test Suite", () => {
  const loginPage = new LoginPage();
  const addItemToCart = new AddItemToCart();
  const checkOutPage = new CheckOutPage();
  let userData;

  beforeEach(() => {
    cy.fixture("userData.json").then((data) => {
      userData = data;
    });
    loginPage.visit();
  });

  it("should purchase successfully", () => {
    // Login with Valid Credentials
    loginPage.loginWithValidCredentials(
      userData.validUser.username,
      userData.validUser.password
    );

    // Add Item To Cart
    addItemToCart.addItemToCart();
    addItemToCart.verifyItemInCart("Sauce Labs Backpack");
    addItemToCart.proceedToCheckOut();

    // Check Out Item
    checkOutPage.fillShippingInfo(
      userData.shippingInfo.firstName,
      userData.shippingInfo.lastName,
      userData.shippingInfo.postalCode
    );
    checkOutPage.verifySuccesfulCheckOut();
  });
});
