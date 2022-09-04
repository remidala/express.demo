// Require express
const express = require("express");
// Initialize express
const app = express();
const PORT = process.env.PORT || 8080;

//app.use(express.static("public"));

app.get("/", (req, res) => {
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

app.get("/useres/ :id", (req, res) => {
    console.log(req.params.id);
    res.send({id: req.params.id});
});

// create a server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});