const express = require('express');
const hbs = require('hbs');
var app = express();
const fs = require('fs');
hbs.registerPartials(__dirname + "/views/partials")


// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// });
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'hbs')

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("server.log", log + "\n", (err) => {
    if (err) {
      console.log("unable to append to server.log.")
    }
  })
  next();
});



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