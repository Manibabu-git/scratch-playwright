const { test, expect } = require("@playwright/test");
const { request } = require("http");

let uid = null;
test("'post api test ", async ({ request }) => {
  const respose = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      headers: {
        Authorization: "Bearer myToken",
        "Content-type": "application/json; charset=UTF-8",
      },
      auth: {
        username: "myUsername",
        password: "myPassword",
      },
    }
  );
  expect(await respose.status()).toBe(201);
  uid = await respose.json().id;
  console.log(await (await respose).json());
});

test("api get test", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    {}
  );
  expect(await response.status()).toBe(200);
});

test("api put test", async ({ request }) => {
  const response = await request.put(
    `https://jsonplaceholder.typicode.com/posts${uid}`,
    {
      data: {
        title: "my title",
      },
    }
  );
  expect(response.status()).toBe(200);
});
