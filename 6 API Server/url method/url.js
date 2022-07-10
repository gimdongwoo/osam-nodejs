const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/hello", function (req, res) {
  res.send("hello");
});

app.get("/world", function (req, res) {
  res.send("world");
});

app.listen(3000, () => {
  console.log("Server is online on port 3000");
});
