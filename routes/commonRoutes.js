const express=require("express")
const router=express.Router()
const user=require("./userRoutes")
const category=require("./category/commonRoutes")
const userManagement=require("../routes/userManRoutes/userRoutes")

router.use("/user",user)
router.use("/category",category)
router.use("/userManagement",userManagement)

module.exports=router