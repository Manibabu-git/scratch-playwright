exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#loginusername");
    this.passwordInput = page.locator("#loginpassword");
    this.loginButton = page.locator("//button[text()='Log in']");
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.locator("#login2").click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
};
