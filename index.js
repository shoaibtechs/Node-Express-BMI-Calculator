const express = require("express");
const bodyParser = require("body-parser");

const app =  express();

app.use(bodyParser.urlencoded({extended:true})); //Remember it 



app.get("/", function (req, res){

  res.sendFile(__dirname + "/bmiCalculator.html");
    
});


//Remember it 
app.post("/", function(req, res){ 


     var weight = parseFloat(req.body.weight); //Remeber it 
     var height = parseFloat(req.body.height); //Remeber it 



    var result = weight / (height * height);


    res.send("The BMI is  " + result);
})









app.listen(3002, function(){

    console.log("Listening on the port 3002");

})



