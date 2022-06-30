const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({}));


app.use(express.static(__dirname));



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});




app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at 3000");
});
