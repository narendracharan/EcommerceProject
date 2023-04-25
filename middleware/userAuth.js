const jwt=require("jsonwebtoken")
const User=require("../models/adminSchema/userSchema")


const userAuth=async(req,res,next)=>{
    let token=req.headers.authorization
    if( token){
        try{
            token=token.split(" ")[1]
            const {userID}=jwt.verify(token,process.env.SECRET_KEY)
            req.user=await User.findById(userID).select("-password")
            next()
        }catch(err){
            console.log(err);
            res.status(401).send({status: "Failed", message: "unauthorized User" + err})
        }
    }if(!token){
        res.status(400).send({
            message: "Unauthorized User NO Token" 
           });
          }  
}

module.exports={
    userAuth
}