exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator("#cartur");
    this.productNameCells = ".success td:nth-child(2)";
    this.placeOrderButton = "[data-target='#orderModal']";
  }
  async gotoCart() {
    await this.cartLink.click();
  }
  async checkProductInCart(productName) {
    let count = 0;
    await this.page.waitForSelector(this.productNameCells);
    const names = await this.page.locator(this.productNameCells);
    count = await names.filter({ hasText: productName }).count();
    console.log(count);
    if (count > 0) {
      await this.page.locator(this.placeOrderButton).click();
    } else {
      console.log("Product not found in cart");
    }
  }
};
