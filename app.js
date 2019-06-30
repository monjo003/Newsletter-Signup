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

   var data = {
     members: [
       {
         email_address: email,
         status: "subscribed",
         merge_fields: {
           FNAME: firstname,
           LNAME: lastname
         }
       }
     ]
   };

   var jsonData = JSON.stringify(data);


   var options = {
     url: "https://us3.api.mailchimp.com/3.0/lists/f2a294fa07",   // url i want to send a req to
     method: "POST",   // specifing how we want our req to be processed
     headers: {
       "Authorization" : "monjo003 0d8e3c406253bca52edc2626de233365-us3 "  // any string and the api key for the authorization
     },
     body: jsonData    // content
   };



request(options, function(error, response, body){
  if(error) {
     console.log(error);
  }
  else{
    console.log(response.statusCode);
  }
});


});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});


// api key = 0d8e3c406253bca52edc2626de233365-us3

//list id
// f2a294fa07
