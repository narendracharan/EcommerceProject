const express=require("express")
const router=express.Router()
const userRoutes=require("./userRoutes/commonRoutes")
const productRoutes=require("./productRoutes/commonRoutes")
const cartsRoutes=require("./cartsRoutes/commonRoutes")
const wishCommonRoutes=require("./wishRoutes/commonRoutes")
const reviewCommonRoutes=require("./reviewRouter/commonRoutes")
const categoryCommonRoutes=require("./categoryRoutes/commonRoutes")
const addressCommonRoutes=require("./addressRoutes/commonRoutes")

router.use("/user",userRoutes)
router.use("/product",productRoutes)
router.use("/carts",cartsRoutes)
router.use("/wish",wishCommonRoutes)
router.use("/review",reviewCommonRoutes)
router.use("/category",categoryCommonRoutes)
router.use("/address",addressCommonRoutes)

module.exports=router