//jshint esversion:6

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
mongoose.connect("mongodb+srv://admin:setuservice@cluster0.4pjko.mongodb.net/?retryWrites=true&w=majority/todolistDB", {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

const customerSchema = {
  name: String,
  number: Number,
  email: String,
  password: String,
  data: String
};
const Customer = mongoose.model('Customer', customerSchema);
var displayName = "Sign Up/Sign In";
var failureName = " ERROR ";

app.get("/signup", function(req, res) {
  res.render("signup");
});
app.post("/signup", function(req, res) {
  const customerInfo = new Customer({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    password: req.body.password
  });
  Customer.findOne({
    email: req.body.email
  }, function(err, foundCustomer) {
    if (!err) {
      if (foundCustomer.name == {}) {
        customerInfo.save();
        // res.render("success");
      } else {
        failureName = " email already exists in our record... ";
      }
    }
res.render("failure", {failureName: failureName});  });
 });
app.post("/signin", function(req, res) {
  Customer.findOne({
    email: req.body.email1
  }, function(err, foundCustomer) {
    if (!err) {
      if (foundCustomer.name != {} && foundCustomer.password === req.body.password1) {
        displayName = foundCustomer.name.substring(0, 11) + "...";
      }
    }
    res.redirect("/");
  });
});
// console.log(displayName);
app.get("/", function(req, res) {
  res.render("index", {
    displayName: displayName
  });
});
app.post("/success", function(req, res) {
  res.redirect("/");
});
app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at 3000");
});
