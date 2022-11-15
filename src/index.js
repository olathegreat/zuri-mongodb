const express = require ('express');
const {json} = require("express");
const todoRoute = require("./router/Route");
const connect = require('./config/database');
connect();
const app = express();

app.use(json());
app.use("/", todoRoute);










app.get("/", (req,res)=>{
    res.send("zuri training on mongodb");
})


const PORT = process.env.PORT || 3000 ;

app.listen(3000, ()=>console.log(`serving on port ${PORT}`));