const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "./static");

app.use(express.static(publicPath));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is online on port 3000");
});
