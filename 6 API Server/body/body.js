const express = require("express");

const app = express();

app.use(express.json());

app.get("/hello", function (req, res) {
  console.log(req.body);
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Server is online on port 3000");
});
