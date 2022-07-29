const express=require("express")
const mongoose=require("mongoose")
const app = express();
 
const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});
const mongodb="mongodb+srv://real-estate-catalog:real123@real-estate-catalog.q7wsqsz.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongodb, ()=> {
    console.log("server is connected to db")
}, (err)=> {
    console.log(err)
})
  