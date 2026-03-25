const mongoose=require("mongoose");
require("dotenv").config();
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connectedd...!")
    } catch(err){
        console.log(err.message);
    }
}
module.exports=connectDB;