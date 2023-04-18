const express=require("express")
const router=express.Router()
const user=require("./adminRoutes/userRoutes")
const category=require("./userRoutes/commonRoutes")
const product=require("./userRoutes/productRoutes")

router.use("/user",user)
router.use("/category",category)
router.use("/product",product)
module.exports=router