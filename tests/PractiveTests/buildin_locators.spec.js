const { test, expect } = require("@playwright/test");

test("Wokring with built-in locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  //using getByAltText , this we will pass the value of alt attribute in the element of the wbepage
  const logo = page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  //using getByPlaceholder locator, we should pass the value of the attribute for the element .
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  //using getByRole , we have to pass the parameter which type of role for that attribute like button, link ,div  etc and second param attribute with value
  await page.getByRole("button", { type: "submit" }).click();

  const name = await page.locator(".oxd-userdropdown-tab").textContent();

  //using getByText() we can get the attribute inner text by using this
  let userTest = page.getByText(name);
  console.log(await userTest.textContent());
  await expect(userTest).toBeVisible();
  await page.locator('a[class="oxd-main-menu-item active"]').click();

  //Ex: <span title='orangeHRM'> THIS IS THE ORANGE PAGE </span>
  //await expect(page.getByTitle("orangeHRM")).toHaveText("THIS IS THE ORANGE PAGE");   --> return true.

  /*<label for="email">Email address</label>
   <input id="email" type="email" />

   await page.getByLabel('Email address').fill('manibabu.uppu1@gmail.com');    --> user need to pass Inner text of label element.


   <button title="Add to cart"></button>
 
    await page.getByTitle('Add to cart').click();   -->user need to pass the value of title attribute.


     <div>
     <input data-testid="username" type="text" />
     <input data-testid="password" type="password" />
     <button data-testid="login-btn">Login</button>
    </div>

    await page.getByTestId('username').fill('Admin'); -->user needs to pass values of data-testId attribute.
*/
});
