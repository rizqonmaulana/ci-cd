const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello, CI/CD with CircleCI!"));

test("GET / should return 'Hello, CI/CD with CircleCI!'", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello, CI/CD with CircleCI!");
});