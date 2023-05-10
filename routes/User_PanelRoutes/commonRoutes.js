const express=require("express")
const router=express.Router()
const userRoutes=require("./userRoutes/commonRoutes")
const productRoutes=require("./productRoutes/commonRoutes")
const cartsRoutes=require("./cartsRoutes/commonRoutes")

router.use("/user",userRoutes)
router.use("/product",productRoutes)
router.use("/carts",cartsRoutes)
module.exports=router