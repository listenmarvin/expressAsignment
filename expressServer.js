const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

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



const josnData = [];

app.get("/", (res, req) => {
  req.json(josnData);
});
//  Created a POST api (using THUNDER CLIENT) which acccepts a JSON data and sReturn an array of data.
app.post("/user", (req, res) => {
  const newData = {
    bookId: req.body.bookid,
    title: req.body.title,
  };
  josnData.push(newData);
  res.json(josnData);
});

app.listen(8080, () => {
  console.log("Server started");
});
