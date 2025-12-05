const { type } = require("os");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.productLinks = ".card-title a";
    this.cardButton = "//a[text()='Add to cart']";
  }
  async selectProduct(productName) {
    await this.page.waitForSelector(this.productLinks);
    const product = await this.page
      .locator(this.productLinks)
      .filter({ hasText: productName });
    await product.click();
  }
  async addToCart() {
    this.page.on("dialog", async (dialog) => {
      console.log(await dialog.message());
      await dialog.accept();
    });
    await this.page.locator(this.cardButton).click();
  }
};
