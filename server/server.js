const express=require("express")
const mongoose=require("mongoose")
const app = express();
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})
const userInfoModel =require("./schema"); 
 // merge code start
 
const loginroute=require("./routes/login")
const signuproute=require("./routes/signup1")
require('dotenv').config();

app.get("/", (req, res)=> {
  res.send("realestate login")
});
app.use("/login", loginroute);
app.use("/signup1", signuproute);

// merge code end
app.use(express.json());
 app.use(express.urlencoded({extended: false}));
  app.use(cors())
const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});
//const DB="mongodb+srv://real-estate-catalog:real123@real-estate-catalog.q7wsqsz.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(mongodb,{
// useNewUrlParser:true,
// useCreateIndex:true,
// useUnifiedTopology:true,
// useFindAndModify:false
// }).then(()=>{
//   console.log("Connection Successful");
// }).catch(()=>{
//    console.log("no connection");
// })
const mongodb=process.env.DATABASE;
mongoose.connect(mongodb, ()=> {
  console.log("server is connected to db")
}, (err)=> {
  console.log(err)
})
 app.get("/addProperty", (req,res)=>{
  userInfoModel.find().then((data)=>{
res.status(200).send({data:data})
console.log(data)
  }).catch((err)=>{
    res.status(400).send(err)
    console.log(err)
  })
 })
app.post("/",(req,res)=>{
  // console.log(req.body)
     userInfoModel.create({
     
 // Basic Info
    propertyType:req.body.propertyType,
    price:req.body.price,
    propertyAge:req.body.propertyAge,
    propertyDescription:req.body.propertyDescription,
    negotable:req.body.negotable,
    ownership:req.body.ownership,
    propertyApproved:req.body.propertyApproved,
    bankLoan:req.body.bankLoan,
 
// propertyDetail
 
length:req.body.length,
totalArea:req.body.totalArea,
noOfBhk:req.body.noOfBhk,
attached:req.body.attached,
furnished:req.body.furnished,
lift:req.body.lift,
facing:req.body.facing,
areaUnit:req.body.areaUnit,
noOfFloor:req.body.noOfFloor,
westernToilet:req.body.westernToilet,
carParking:req.body.carParking,
electricity:req.body.electricity,
 

//  General Info

    name:req.body.name,
    postedBy:req.body.postedBy,
    featuredPackage:req.body.featuredPackage,
    mobile:req.body.mobile,
    saleType:req.body.saleType,
    ppdPackage:req.body.ppdPackage, 


// Location Info
    
    email:req.body.email,
    area:req.body.area,
    address:req.body.address,
    latitude:req.body.latitude,
    city:req.body.city,
    pincode:req.body.pincode,
    landmark:req.body.landmark,
    longitude:req.body.longitude
}).then((data)=>{
  res.status(200).send(data)
  console.log(req.body)
}).catch((err)=>{
  console.log(err)
})
//  let result= await newUserInfoModel.save();
//  res.send("successfully")
//  console.log(result)
 }) 