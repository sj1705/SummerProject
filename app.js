//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname));



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/signup", function(req, res) {
  res.render("signup");
});
app.post("/signup", function(req, res) {
  var customerInfo = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email
  }
  console.log(customerInfo);
  res.redirect("/");
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at 3000");
});
