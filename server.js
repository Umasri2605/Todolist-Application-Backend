const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes=require("./auth/userRoutes");
const todoRoutes=require("./todo/todoRoutes")

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome....")
})

app.use("/user",userRoutes);
app.use("/todos",todoRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on  ${PORT}`)
})