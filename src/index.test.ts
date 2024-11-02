import { HttpResponse } from "./index.js"

test("`HttpResponse` can be created", () => {
  const request = new HttpResponse(404, "Not found :(", { "Content-Type": "application/json" }, { name: "Scratchy", food: "chicken" });
  expect(request).toBeDefined();
  expect(request.statusCode).toBe(404)
  expect(request.statusMessage).toBe("Not found :(")
  expect(request.headers).toStrictEqual({ "Content-Type": "application/json" })
  expect(request.body).toStrictEqual({ name: "Scratchy", food: "chicken" })
})
