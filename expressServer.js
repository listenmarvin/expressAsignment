const express = require("express");
const app = express();

// Created a GET api that returns query param, path param and return both values with info as json
app.get("/:id", (req, res) => {
  const userId = req.query.id;
  const name = req.query.name;

  const response = {
    Id: userId,
    userName: name,
  };
  res.json(response);
});

app.listen(8080, () => {
  console.log("Server started");
});
