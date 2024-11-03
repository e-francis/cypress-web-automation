import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

export default class AddItemToCart extends BasePage {
  constructor() {
    super();
    this.selectors = {
      backPackItem: '[data-test="add-to-cart-sauce-labs-backpack"]',
      shoppingCart: ".shopping_cart_link",
      checkOutButton: "#checkout",
      cartItem: ".inventory_item_name",
    };
  }

  addItemToCart() {
    this.click(this.selectors.backPackItem);
    this.click(this.selectors.shoppingCart);
  }

  verifyItemInCart(itemName) {
    this.getElement(this.selectors.cartItem).should("contain", itemName);
  }

  proceedToCheckOut() {
    this.click(this.selectors.checkOutButton);
  }
}
