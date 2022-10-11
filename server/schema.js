const mongoose=require("mongoose");
// schema for Basic Info
const userInfoSchema= new mongoose.Schema({
    propertyType:String,
    price:Number,
    propertyAge:Number,
    propertyDescription:String,
    negotable:String,
    ownership:String,
    propertyApproved:String,
    bankLoan:String,
 
// Schema for propertyDetail
 
length:Number,
totalArea:Number,
noOfBhk:Number,
attached:String,
furnished:String,
lift:String,
facing:String,
areaUnit:String,
noOfFloor:Number,
westernToilet:String,
carParking:String,
electricity:String,
 

// Schema for General Info

    name:String,
    postedBy:String,
    featuredPackage:String,
    mobile:Number,
    saleType:String,
    ppdPackage:String, 


// Schema for Location Info

    email:String,
    area:String,
    address:String,
    latitude:String,
    city:String,
    pincode:String,
    landmark:String,
    longitude:String})

const userInfoModel=mongoose.model("userInfoCollection",userInfoSchema)
// module.exports= userInfoModel;
///////////////////////////////////////////////////////////
 
const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
   
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});
const signupModal = mongoose.model("userlogin", signupSchema);
module.exports = {signupModal,userInfoModel};
