const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the directory where the view files are located
app.set("views", path.join(__dirname, "views"));

// Define routes
app.get("/", (req, res) => {
    res.render("home");
});

// app.get("/ig/:username",(req,res)=>{
// let {username} = req.params;
// res.render("instagram.ejs",{username})
 
// });

app.get("/ig/:username",(req,res)=>{
    const followers = ["adam","bob","steve","abc"];
    let {username}= req.params;
    res.render("instagram.ejs",{username,followers})
     
    });

//new route
app.get("/rolldice", (req, res) => {
    let num =  Math.floor(Math.random()*6)+1;
 
    res.render("rolldice.ejs",{num:num});
});


 


app.get("/hello", (req, res) => {
    res.render("hello");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
