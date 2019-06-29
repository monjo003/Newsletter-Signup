//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendfile(__dirname  + "/signup.html");
});

app.post("/", function(req,res) {
   var firstname  = req.body.firstName;
   var lastname  = req.body.lastName;
   var email = req.body.email;
});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
