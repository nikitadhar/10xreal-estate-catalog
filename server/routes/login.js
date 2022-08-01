const express=require("express")
const router=express.Router();
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs")
const signupModal=require("../Models/signup")
router.post("/login", (req, res)=> {
    signupModal.find({mail: req.body.mail}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].userid, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            res.status(400).send("Unauthorized user");
        }
    })
});
module.exports=login;