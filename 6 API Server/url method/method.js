const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/hello", function (req, res) {
  res.send("hello post");
});

app.delete("/hello", function (req, res) {
  res.send("hello delete");
});

app.listen(3000, () => {
  console.log("Server is online on port 3000");
});
