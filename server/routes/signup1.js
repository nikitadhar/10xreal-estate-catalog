const express=require("express")
const router=express.Router();
const signupModal=require("../Models/signup")
const {checkExistingUser,generatePasswordHash}=require("../routes/function")
router.post("/signup", async (req, res)=> {
    if(await checkExistingUser(req.body.mail)) {
        res.status(400).send("mail exist. Please try with different mail");
    } else {
        generatePasswordHash(req.body.password).then((passwordHash)=> {
            signupModal.create({mail: req.body.mail, 
                            password: passwordHash})
                            .then(()=> { 
                                res.status
res.status(200).send(`${req.body.mail} added successfully`); 
                            }).catch((err)=> {
                                res.status(400).send(err.message)
            })
        });
    }
    
});
module.exports=router;