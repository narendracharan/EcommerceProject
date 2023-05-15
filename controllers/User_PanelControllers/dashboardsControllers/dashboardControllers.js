const wishListShema=require("../../../models/User_PanelSchema/wishListSchema/withlistSchema")
const { error, success } = require("../../response")


exports.countWishList=async(req,res)=>{
    try{
const count=await wishListShema.find({}).count()
res.status(200).json(success(res.statusCode,"Success",{count}))
    }catch(err){
        res.status(400).json(error("Failed",res.statusCode))
    }
}