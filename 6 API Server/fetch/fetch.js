const express = require("express");
require("isomorphic-fetch");

const app = express();

app.use(express.json());

app.get("/github", async function (req, res) {
  const response = await fetch(
    `https://api.github.com/users/${req.query.user}`
  );
  res.json(await response.json());
});

app.listen(3000, () => {
  console.log("Server is online on port 3000");
});
