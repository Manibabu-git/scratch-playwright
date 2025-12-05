import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { envConfig } from "../../utils/env";

test("Login page test", async ({ page }) => {
  const url = envConfig.baseUrl;
  console.log(`Running tests on URL: ${url}`);
  const loginPage = new LoginPage(page);
  await loginPage.goto(url);
  await loginPage.login(envConfig.username, envConfig.password);
  const homePage = new HomePage(page);
  await homePage.selectProduct("Nexus 6");
  await homePage.addToCart();
  const cartPage = new CartPage(page);
  await cartPage.gotoCart();
});
