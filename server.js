const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + "/views/partials")

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'hbs')

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUppercase();
})
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.render("about.hbs", {
    pagetitle: "not about page",
    welcomeMessage: "sup sup sup"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pagetitle: "About page",
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Error handling"
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});