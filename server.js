const express = require('express');
const hbs = require('hbs');
var app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: "name",
    likes: [
      "biking",
      "dogs"
    ]
  })
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Error handling"
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});