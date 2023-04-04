const express=require("express")
const router=express.Router()
const user=require("./adminRoutes/userRoutes")
const category=require("./userRoutes/commonRoutes")

router.use("/user",user)
router.use("/category",category)
module.exports=router