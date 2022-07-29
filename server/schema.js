const mongoose=require("mongoose");
const basicInfoSchema=mongoose.Schema({
    propertyType:String,
    price:Number,
    propertyAge:Number,
    propertyDescription:String,
    negotable:String,
    ownership:String,
    propertyApproved:String,
    bankLoan:String


})
const UploadBasicInfo = mongoose.model("UploadBasicInfo", basicInfoSchema);
module.exports = UploadBasicInfo;