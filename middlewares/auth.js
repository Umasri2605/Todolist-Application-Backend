const jwt=require("jsonwebtoken");
exports.verifyToken=async(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader){
            return res.json({msg:"Invalid Token"});
        }
        const token=authHeader.split(" ")[1];
        if(!token){
            return res.json({msg:"Invalid Token"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded;
        next();
    } catch(err){
        res.json(err.message)
    }
}