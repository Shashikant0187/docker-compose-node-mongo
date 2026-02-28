const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mongo:27017/testdb")
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Docker Compose Working 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on 3000");
});
