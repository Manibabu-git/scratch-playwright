const { test, expect } = require("@playwright/test");

test("Single file upload", async ({ page }) => {
  await page.goto("https://filebin.net/");

  await page.waitForSelector('[id="fileField"]');
  await page
    .locator('[id="fileField"]')
    .setInputFiles("./tests/Upload_Files/demo.txt");
  await page.waitForSelector(
    `//tbody //a[@class="link-primary link-custom"] [text()='demo.txt']`
  );
  const filename = page.locator(
    `//tbody //a[@class="link-primary link-custom"] [text()='demo.txt']`
  );

  expect(filename).toHaveText("demo.txt");

  await page.waitForTimeout(5000);
});

test.only("multi file upload", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page
    .locator('[name="filesToUpload"]')
    .setInputFiles([
      "./tests/Upload_Files/demo.txt",
      "./tests/Upload_Files/myText_file.txt",
    ]);
  await page.waitForSelector('ul[id="fileList"] li');
  const list = page.locator('ul[id="fileList"] li');
  expect(list.nth(0)).toHaveText("demo.txt");
  expect(list.nth(1)).toHaveText("myText_file.txt");
  await page.waitForTimeout(4000);

  await page.locator('[name="filesToUpload"]').setInputFiles([]); //to remove upload files
  expect(await page.locator('ul[id="fileList"] li').first()).toHaveText(
    "No Files Selected"
  );

  await page.waitForTimeout(4000);
});
