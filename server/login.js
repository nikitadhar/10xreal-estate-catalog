const express=require("express")
const router=express.Router();
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs")
const secretkey="3de9a27eff493272a603a3ed0216cdc8db48918f2e1039d305d1cb8f3fe16a1b63610e3b3adabf3134a1261a94cdf8b93da0bb2b0f5844fd1cf6a9e5eed2aa1d"
const signupModal=require("./schema")
router.post("/poat", (req, res)=> {
    signupModal.find({mail: req.body.mail}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].mail, secretkey);
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
module.exports=router;