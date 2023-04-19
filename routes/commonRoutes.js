const express=require("express")
const router=express.Router()
const user=require("./adminRoutes/userRoutes")
const category=require("./categoryRoutes/commonRoutes")
const product=require("./categoryRoutes/productRoutes")
const staff=require("./staffRoutes/commonRoutes")
const order=require("./orderRoutes/commonRoutes")

router.use("/user",user)
router.use("/category",category)
router.use("/product",product)
router.use("/staff",staff)
router.use("/order",order)
module.exports=router