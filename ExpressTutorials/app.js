const express = require('express');

const app = express();

const homeHandler = (req,res,next) => {
    res.send("Home");
    console.log("Home page accessed")
    
}

const userHandler = (req, res, next) => {
    if(30 < 20){
        next(); // routes using this middleware will not be accessed
    }
}

app.get("/home",homeHandler ,(req,res) => {
    res.send("Home Page");
})

app.get("/contact",(req,res) => {
    res.send("Contact List");
})

app.get("/user",userHandler,(req,res) => {
    res.send("User List Only for Admin");
})

const port = 5500;

app.listen(port, () => {
    console.log('Server running on port '+port);
})