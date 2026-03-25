const jwt=require("jsonwebtoken");
const userModel = require("./userModel");
exports.loginUser=async(req,res)=>{
    try{
        const {username ,password}=req.body;

        if(!username || !password){
            return res.json({msg:"Both Are Required"});
        }
        let user=await userModel.findOne({username});
        console.log(user);

        if(!user){
            user=new userModel({
                username,
                password,
            });
            await user.save();
        }
        const token=jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"},
        )
        res.json({
            msg:"success",
            token,
            user:{
                userId:user._id,
                username:user.username,
                password:user.password,
            }
        });
    } catch(err){
        res.json(err.message)
    }
}