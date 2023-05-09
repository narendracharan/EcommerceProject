const express=require("express")
const router=express.Router()
const userRoutes=require("./userRoutes/commonRoutes")

router.use("/user",userRoutes)
module.exports=router