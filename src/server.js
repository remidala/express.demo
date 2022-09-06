// Require express
const express = require("express");
// Initialize express
const app = express();
const PORT = process.env.PORT || 8080;


/*
 spli into folder
 Dogs
    routes
    controllers
    model

Users
    routes
    controllers
    model
*/ 

//app.use(express.static("public"));
app.use(express.json());

const myFunc = (req, res, next) => {
    console.log("logged first");
    req.body.first = "first";
    next();
};

const myBetterFunc = (req, res, next) => {
    console.log("logged second");
    req.body.second = "second";
    next();
};

app.post("/", [myFunc, myBetterFunc], (req, res) => {
    console.log(req.body);
    res.send("Hi my name is Dan");
});

app.get("/hello", (req, res) => {
    res.send({name: 'Dan'});
});

app.get("/info", (req, res) => {
    res.send({name:"Dan", age:37})
    console.log(req.query);
    if (req.query.age){
        req.send({age: req.query.age});
    } else{
        res.send({error: "No age found"});
    }
});

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    res.send({id: req.params.id});
});

app.get("/person/:id", (req, res)=>{
    console.log(req.params.id);
    res.status(200).send({ message: "OK" });
});

app.post("/", (req, res) => {
    if (req.body.username === "xander") {
        console.log(req.body);
        res.status(201).send({ message: "success" });
    } else {
        res.status(400).send({ message: "username does not exist" });
    }
});

// create a server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});