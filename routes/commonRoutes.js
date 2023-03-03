const express=require("express")
const router=express.Router()
const user=require("./userRoutes")
const category=require("./category/commonRoutes")

router.use("/user",user)
router.use("/category",category)

module.exports=router