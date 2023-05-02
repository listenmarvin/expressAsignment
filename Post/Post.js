const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(8081, () => {
  console.log("Server started");
});
