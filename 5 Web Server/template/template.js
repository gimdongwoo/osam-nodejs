const express = require("express");
const path = require("path");

const app = express();

const viewPath = path.join(__dirname, "./templates");

app.set("view engine", "hbs");
app.set("views", viewPath);

app.get("", function (req, res) {
  res.render("index", {
    title: "Hello World",
    contents: "Hello World",
  });
});

app.listen(3000, () => {
  console.log("Server is online on port 3000");
});
