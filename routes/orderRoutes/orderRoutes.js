const express=require("express")
const router=express.Router()
const orderControllers=require("../../controllers/orderControllers/orderControllers")
const authentication=require("../../middleware/userAuth")

router.post("/createOrder",authentication.userAuth,orderControllers.createOrder)
router.post("/list",authentication.userAuth,orderControllers.orderList)
router.post("/search",authentication.userAuth,orderControllers.orderSearch)
module.exports=router