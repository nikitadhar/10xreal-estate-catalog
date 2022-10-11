const express=require("express")
const mongoose=require("mongoose")
const app = express();
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})
const {signupModal,userInfoModel} =require("./schema"); 
  
app.use(express.json());
 app.use(express.urlencoded({extended: false}));
  app.use(cors())
const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});
 
const mongodb=process.env.DATABASE;
mongoose.connect(mongodb, ()=> {
  console.log("server is connected to db")
}, (err)=> {
  console.log(err)
})
 app.get("/", (req,res)=>{
   userInfoModel.find().then((data)=>{
res.status(200).send({data:data})
 
  }).catch((err)=>{
    res.status(400).send(err)
    console.log(err)
  })
 })
app.post("/",(req,res)=>{
  
  console.log(req.body)
     userInfoModel.create(req.body).then((data)=>{
  res.status(200).send(data)
 
}).catch((err)=>{
  console.log(err)
})})

app.post("/login",(req,res)=>{
  const {email,password}=req.body
  signupModal.findOne({email:email},(err,user)=>{
    if(user){
      if(password === user.password){
        console.log(req.body)
        res.status(200).send({message:"Login Successfull",user:user})


      } else{
        res.status(400).send({message:"Password didn't match"})
        
      }
    } else{
      res.status(400).send({message:"User not register"})
    }
  })
})
app.post("/register",(req,res)=>{
  const {email,password}=req.body
  signupModal.findOne({email:email},(err,user)=>{
    if(user){
      res.send({message:"User already register"})
    }else{
      const user=new signupModal({
        email,
        password
      })
     console.log(req.body)
      user.save(err=>{
        if(err){
          res.send(err)
        } else{
          res.send({message: "Successfully Register"})
        }
//       
      })
    }
  })
  
})




 
 // Basic Info
    // propertyType:req.body.propertyType,
    // price:req.body.price,
    // propertyAge:req.body.propertyAge,
    // propertyDescription:req.body.propertyDescription,
    // negotable:req.body.negotable,
    // ownership:req.body.ownership,
    // propertyApproved:req.body.propertyApproved,
    // bankLoan:req.body.bankLoan,
 
// propertyDetail
 
// length:req.body.length,
// totalArea:req.body.totalArea,
// noOfBhk:req.body.noOfBhk,
// attached:req.body.attached,
// furnished:req.body.furnished,
// lift:req.body.lift,
// facing:req.body.facing,
// areaUnit:req.body.areaUnit,
// noOfFloor:req.body.noOfFloor,
// westernToilet:req.body.westernToilet,
// carParking:req.body.carParking,
// electricity:req.body.electricity,
 

//  General Info

    // name:req.body.name,
    // postedBy:req.body.postedBy,
    // featuredPackage:req.body.featuredPackage,
    // mobile:req.body.mobile,
    // saleType:req.body.saleType,
    // ppdPackage:req.body.ppdPackage, 


// Location Info
    
    // email:req.body.email,
    // area:req.body.area,
    // address:req.body.address,
    // latitude:req.body.latitude,
    // city:req.body.city,
    // pincode:req.body.pincode,
    // landmark:req.body.landmark,
    // longitude:req.body.longitude