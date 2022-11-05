const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: pirate@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("My name is Dimitar Atanasov");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Code</li><li>Sports</li></ul>");
});

app.listen(3000, function () {
  console.log("server started port 3000");
});
