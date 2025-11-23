const { test, expect } = require("@playwright/test");

test("Handling web table", async ({ page }) => {
  //navigate to the web page
  await page.goto("https://testautomationpractice.blogspot.com/");
  //locate the table
  const table = await page.locator("#productTable");

  //count the number of rows and columns

  const rows = await table.locator("tbody tr");
  const columns = await table.locator("thead tr th");
  console.log("the number of rows in a table: ", await rows.count());
  console.log("the number of columns in a table: ", await columns.count());
  /*

  //1  we are going to select single product

*/
  //get the row where the required product present
  // const rowproduct = rows.filter({
  //   has: page.locator("td"),
  //   hasText: "Smartwatch",
  // });
  // await rowproduct.locator("td input").check();
  // await page.waitForTimeout(2000);

  /*

  //2  we are going to select multiple  products

*/

  const pageList = await page.locator("ul[class='pagination'] li ");

  let bool = await allPageProductSelect(
    page,
    "Bluetooth speaker",
    rows,
    pageList
  );
  if (bool == true) {
    console.log("product clicked ");
  } else {
    console.log("product not found");
  }
  //await allPageProductSelect(page, "Smartphone", rows);

  await page.waitForTimeout(9000);
});

// async function selectProduct(page, product, rows) {
//   const productRow = rows.filter({
//     has: page.locator("td"),
//     hasText: product,
//   });
//   if ((await productRow.count()) != 0) {
//     await productRow.locator("td input").check();
//   } else {
//     console.log("product not found");
//   }
// }

async function allPageProductSelect(page, product, rows, pageList) {
  let bool = false;
  const pcount = await pageList.count();
  for (let p = 0; p < pcount; ++p) {
    const productRow = rows.filter({
      has: page.locator("td"),
      hasText: product,
    });
    if ((await productRow.count()) == 0) {
      await pageList.nth(p).click();
    } else {
      await productRow.locator("td input").check();
      bool = true;
      break;
    }
  }
  return bool;
}
