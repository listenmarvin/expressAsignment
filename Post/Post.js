const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

const data = [];

app.get("/", (res, req) => {
  req.json(data);
});
//  Created a POST api (using THUNDER CLIENT) which acccepts a JSON data and sReturn an array of data.
app.post("/user", (req, res) => {
  const newData = {
    id: req.body.id,
    name: req.body.name,
  };
  data.push(newData);
  res.json(data);
});

app.listen(8081, () => {
  console.log("Server started");
});
