const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const loginroute=require("./routes/login")
const signuproute=require("./routes/signup1")
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.listen(3001, (err)=> {
    if(!err) {
        console.log("Server started at port 3001")
    } else {
        console.log(err);
    }
});
mongoose.connect("mongodb+srv://real-estate-catalog:real123@real-estate-catalog.q7wsqsz.mongodb.net/10x?retryWrites=true&w=majority", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});
app.get("/", (req, res)=> {
    res.send("realestate login")
});
app.use("/login", loginroute);
app.use("/signup1", signuproute);
